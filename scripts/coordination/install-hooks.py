#!/usr/bin/env python3
"""Cross-platform installer for git pre-commit hook."""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HOOKS_DIR = ROOT / ".git" / "hooks"
HOOK_FILE = HOOKS_DIR / "pre-commit"

HOOK_CONTENT = """#!/bin/sh
# Git pre-commit launcher with OS-aware Python resolution

PYTHON_CMD="${PYTHON:-}"

if [ -z "$PYTHON_CMD" ]; then
    if command -v python3 >/dev/null 2>&1; then
        PYTHON_CMD="python3"
    elif command -v python >/dev/null 2>&1; then
        PYTHON_CMD="python"
    elif command -v py >/dev/null 2>&1; then
        PYTHON_CMD="py"
    else
        echo "ERROR: Khong tim thay Python (python3, python, hoac py) de chay pre-commit hook." >&2
        exit 1
    fi
fi

exec "$PYTHON_CMD" scripts/coordination/pre_commit_hook.py "$@"
"""


def install():
    if not (ROOT / ".git").is_dir():
        print("ERROR: Khong tim thay thu muc .git trong repository.", file=sys.stderr)
        sys.exit(1)

    HOOKS_DIR.mkdir(parents=True, exist_ok=True)
    HOOK_FILE.write_text(HOOK_CONTENT, encoding="utf-8")

    try:
        HOOK_FILE.chmod(0o755)
    except Exception:
        pass

    print("SUCCESS: Da cai dat Git pre-commit hook thanh cong.")


if __name__ == "__main__":
    install()
