#!/usr/bin/env python3
"""Render a local HTML file to PNG with an installed Chrome-family browser."""

from __future__ import annotations

import argparse
import math
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import uuid


PNG_SIGNATURE = b"\x89PNG\r\n\x1a\n"


class RenderError(RuntimeError):
    """An expected, user-facing render failure."""


def positive_int(value: str) -> int:
    try:
        number = int(value)
    except ValueError as exc:
        raise argparse.ArgumentTypeError("must be an integer") from exc
    if not math.isfinite(number) or number <= 0:
        raise argparse.ArgumentTypeError("must be greater than zero")
    return number


def non_negative_int(value: str) -> int:
    try:
        number = int(value)
    except ValueError as exc:
        raise argparse.ArgumentTypeError("must be an integer") from exc
    if number < 0:
        raise argparse.ArgumentTypeError("must be zero or greater")
    return number


def positive_float(value: str) -> float:
    try:
        number = float(value)
    except ValueError as exc:
        raise argparse.ArgumentTypeError("must be a number") from exc
    if not math.isfinite(number) or number <= 0:
        raise argparse.ArgumentTypeError("must be greater than zero")
    return number


def browser_candidates() -> list[Path]:
    candidates: list[Path] = []

    for command in (
        "chrome",
        "google-chrome",
        "google-chrome-stable",
        "chromium",
        "chromium-browser",
        "msedge",
        "microsoft-edge",
        "microsoft-edge-stable",
    ):
        executable = shutil.which(command)
        if executable:
            candidates.append(Path(executable))

    if sys.platform == "win32":
        locations = (
            ("PROGRAMFILES", "Google/Chrome/Application/chrome.exe"),
            ("PROGRAMFILES(X86)", "Google/Chrome/Application/chrome.exe"),
            ("LOCALAPPDATA", "Google/Chrome/Application/chrome.exe"),
            ("PROGRAMFILES", "Microsoft/Edge/Application/msedge.exe"),
            ("PROGRAMFILES(X86)", "Microsoft/Edge/Application/msedge.exe"),
            ("LOCALAPPDATA", "Microsoft/Edge/Application/msedge.exe"),
        )
        for variable, suffix in locations:
            base = os.environ.get(variable)
            if base:
                candidates.append(Path(base) / suffix)
    elif sys.platform == "darwin":
        candidates.extend(
            [
                Path("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"),
                Path("/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"),
                Path("/Applications/Chromium.app/Contents/MacOS/Chromium"),
            ]
        )
    else:
        candidates.extend(
            [
                Path("/usr/bin/google-chrome"),
                Path("/usr/bin/google-chrome-stable"),
                Path("/usr/bin/chromium"),
                Path("/usr/bin/chromium-browser"),
                Path("/usr/bin/microsoft-edge"),
                Path("/usr/bin/microsoft-edge-stable"),
            ]
        )

    return candidates


def find_browser(explicit_browser: str | None) -> Path:
    if explicit_browser:
        browser = Path(explicit_browser).expanduser().resolve()
        if not browser.is_file():
            raise RenderError(f"Browser executable does not exist: {browser}")
        return browser

    seen: set[str] = set()
    for candidate in browser_candidates():
        key = os.path.normcase(str(candidate))
        if key not in seen and candidate.is_file():
            return candidate.resolve()
        seen.add(key)

    raise RenderError(
        "No Chrome, Edge, or Chromium executable was found. "
        "Install one or pass its path with --browser."
    )


def validate_png(path: Path) -> None:
    try:
        size = path.stat().st_size
        with path.open("rb") as png_file:
            signature = png_file.read(len(PNG_SIGNATURE))
    except OSError as exc:
        raise RenderError(f"Browser did not create a readable PNG: {path}") from exc

    if size <= len(PNG_SIGNATURE) or signature != PNG_SIGNATURE:
        raise RenderError(f"Browser output is not a valid non-empty PNG: {path}")


def render(args: argparse.Namespace) -> None:
    input_html = Path(args.input_html).expanduser().resolve()
    if not input_html.is_file():
        raise RenderError(f"Input HTML file does not exist: {input_html}")

    browser = find_browser(args.browser)
    output_png = Path(args.output_png).expanduser().resolve()
    if output_png == input_html:
        raise RenderError("Input HTML and output PNG paths must be different.")
    output_png.parent.mkdir(parents=True, exist_ok=True)
    temporary_png = output_png.with_name(
        f".{output_png.name}.{uuid.uuid4().hex}.tmp.png"
    )

    timeout_seconds = max(30.0, args.wait_ms / 1000.0 + 30.0)
    creation_flags = subprocess.CREATE_NO_WINDOW if sys.platform == "win32" else 0

    try:
        # Chrome may briefly keep crash-reporting handles open after its main
        # process exits on Windows. Cleanup must not mask the render result.
        profile_dir = tempfile.mkdtemp(prefix="html-png-browser-")
        try:
            command = [
                str(browser),
                "--headless=new",
                "--disable-gpu",
                "--hide-scrollbars",
                "--no-first-run",
                "--no-default-browser-check",
                "--allow-file-access-from-files",
                "--run-all-compositor-stages-before-draw",
                f"--user-data-dir={profile_dir}",
                f"--window-size={args.width},{args.height}",
                f"--force-device-scale-factor={args.scale:g}",
                f"--screenshot={temporary_png}",
            ]
            if args.wait_ms:
                command.append(f"--virtual-time-budget={args.wait_ms}")
            command.append(input_html.as_uri())

            try:
                completed = subprocess.run(
                    command,
                    capture_output=True,
                    text=True,
                    encoding="utf-8",
                    errors="replace",
                    timeout=timeout_seconds,
                    creationflags=creation_flags,
                    check=False,
                )
            except subprocess.TimeoutExpired as exc:
                raise RenderError(
                    f"Browser timed out after {timeout_seconds:g} seconds."
                ) from exc
            except OSError as exc:
                raise RenderError(f"Could not start browser: {browser}: {exc}") from exc
        finally:
            shutil.rmtree(profile_dir, ignore_errors=True)

        if completed.returncode != 0:
            details = (completed.stderr or completed.stdout).strip()
            suffix = f"\n{details[-2000:]}" if details else ""
            raise RenderError(
                f"Browser exited with code {completed.returncode}.{suffix}"
            )

        validate_png(temporary_png)
        os.replace(temporary_png, output_png)
    finally:
        try:
            temporary_png.unlink(missing_ok=True)
        except OSError:
            pass

    print(f"Rendered {input_html} -> {output_png}")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description=(
            "Render a local HTML file to PNG using an installed headless Chrome, "
            "Edge, or Chromium browser."
        )
    )
    parser.add_argument("input_html", help="path to the local HTML input file")
    parser.add_argument("output_png", help="path for the generated PNG file")
    parser.add_argument(
        "--width", type=positive_int, default=1280, help="viewport width (default: 1280)"
    )
    parser.add_argument(
        "--height", type=positive_int, default=720, help="viewport height (default: 720)"
    )
    parser.add_argument(
        "--scale",
        type=positive_float,
        default=1.0,
        help="device scale factor (default: 1)",
    )
    parser.add_argument(
        "--wait-ms",
        type=non_negative_int,
        default=500,
        help="virtual time allowed for dynamic content in milliseconds (default: 500)",
    )
    parser.add_argument(
        "--browser",
        help="explicit path to a Chrome, Edge, or Chromium executable",
    )
    return parser


def main() -> int:
    args = build_parser().parse_args()
    try:
        render(args)
    except RenderError as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
