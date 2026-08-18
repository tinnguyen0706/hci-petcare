#!/usr/bin/env python3
"""Render a local HTML file to PNG with an installed Chrome-family browser."""

from __future__ import annotations

import argparse
import math
import os
from pathlib import Path
import shutil
import struct
import subprocess
import sys
import tempfile
import uuid
import zlib


PNG_SIGNATURE = b"\x89PNG\r\n\x1a\n"
MAX_DIMENSION = 32_768
MAX_SCALE = 8.0
MAX_WAIT_MS = 600_000


class RenderError(RuntimeError):
    """An expected, user-facing render failure."""


def bounded_positive_int(value: str) -> int:
    try:
        number = int(value)
    except ValueError as exc:
        raise argparse.ArgumentTypeError("must be an integer") from exc
    if number <= 0 or number > MAX_DIMENSION:
        raise argparse.ArgumentTypeError(
            f"must be between 1 and {MAX_DIMENSION}"
        )
    return number


def bounded_non_negative_int(value: str) -> int:
    try:
        number = int(value)
    except ValueError as exc:
        raise argparse.ArgumentTypeError("must be an integer") from exc
    if number < 0 or number > MAX_WAIT_MS:
        raise argparse.ArgumentTypeError(
            f"must be between 0 and {MAX_WAIT_MS}"
        )
    return number


def positive_float(value: str) -> float:
    try:
        number = float(value)
    except ValueError as exc:
        raise argparse.ArgumentTypeError("must be a number") from exc
    if not math.isfinite(number) or number <= 0 or number > MAX_SCALE:
        raise argparse.ArgumentTypeError(f"must be greater than 0 and at most {MAX_SCALE:g}")
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
        png = path.read_bytes()
    except OSError as exc:
        raise RenderError(f"Browser did not create a readable PNG: {path}") from exc

    if not png.startswith(PNG_SIGNATURE):
        raise RenderError(f"Browser output has an invalid PNG signature: {path}")

    offset = len(PNG_SIGNATURE)
    chunk_index = 0
    saw_iend = False

    while offset < len(png):
        if len(png) - offset < 8:
            raise RenderError(f"Browser output has a truncated PNG chunk header: {path}")

        chunk_length = struct.unpack_from(">I", png, offset)[0]
        chunk_type = png[offset + 4 : offset + 8]
        data_start = offset + 8
        data_end = data_start + chunk_length
        chunk_end = data_end + 4
        if chunk_end > len(png):
            raise RenderError(f"Browser output has a truncated PNG chunk: {path}")

        chunk_data = png[data_start:data_end]
        stored_crc = struct.unpack_from(">I", png, data_end)[0]
        computed_crc = zlib.crc32(chunk_type)
        computed_crc = zlib.crc32(chunk_data, computed_crc) & 0xFFFFFFFF
        if stored_crc != computed_crc:
            name = chunk_type.decode("ascii", errors="replace")
            raise RenderError(
                f"Browser output has an invalid CRC for PNG chunk {name}: {path}"
            )

        if chunk_index == 0:
            if chunk_type != b"IHDR" or chunk_length != 13:
                raise RenderError(
                    f"Browser output must start with a 13-byte PNG IHDR chunk: {path}"
                )
            width, height = struct.unpack_from(">II", chunk_data)
            if width == 0 or height == 0:
                raise RenderError(
                    f"Browser output has zero width or height in PNG IHDR: {path}"
                )
        elif chunk_type == b"IHDR":
            raise RenderError(f"Browser output contains multiple PNG IHDR chunks: {path}")

        if chunk_type == b"IEND":
            if chunk_length != 0:
                raise RenderError(f"Browser output has a non-empty PNG IEND chunk: {path}")
            if chunk_end != len(png):
                raise RenderError(f"Browser output has data after its PNG IEND chunk: {path}")
            saw_iend = True
            break

        offset = chunk_end
        chunk_index += 1

    if not saw_iend:
        raise RenderError(f"Browser output is missing its PNG IEND chunk: {path}")


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
        "--width",
        type=bounded_positive_int,
        default=1280,
        help=f"viewport width, 1-{MAX_DIMENSION} (default: 1280)",
    )
    parser.add_argument(
        "--height",
        type=bounded_positive_int,
        default=720,
        help=f"viewport height, 1-{MAX_DIMENSION} (default: 720)",
    )
    parser.add_argument(
        "--scale",
        type=positive_float,
        default=1.0,
        help=f"device scale factor, >0-{MAX_SCALE:g} (default: 1)",
    )
    parser.add_argument(
        "--wait-ms",
        type=bounded_non_negative_int,
        default=500,
        help=(
            "virtual time allowed for dynamic content in milliseconds, "
            f"0-{MAX_WAIT_MS} (default: 500)"
        ),
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
