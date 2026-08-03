#!/usr/bin/env python3
"""Cross-platform git pre-commit hook to enforce project coordination protocol."""

from __future__ import annotations

import os
import subprocess
import sys
from pathlib import Path

# Them thu muc hien tai vao sys.path de import tasklib
sys.path.insert(0, str(Path(__file__).resolve().parent))
try:
    import tasklib
except ImportError:
    tasklib = None


def get_current_branch() -> str:
    result = subprocess.run(
        ["git", "rev-parse", "--abbrev-ref", "HEAD"],
        capture_output=True,
        text=True,
    )
    return result.stdout.strip()


def get_staged_files() -> list[str]:
    result = subprocess.run(
        ["git", "diff", "--cached", "--name-only"],
        capture_output=True,
        text=True,
    )
    return [line.strip() for line in result.stdout.splitlines() if line.strip()]


def main() -> int:
    branch = get_current_branch()
    staged = get_staged_files()
    allow_main = os.environ.get("ALLOW_MAIN_COMMIT") == "1"

    # 1. Chan commit truc tiep tren nhanh main
    if branch == "main" and not allow_main:
        print("ERROR: Cam commit truc tiep tren nhanh main.", file=sys.stderr)
        print("Huong dan: Ban phai tao branch agent/<tool>/<task-id> va worktree rieng theo coordination/PROTOCOL.md.", file=sys.stderr)
        return 1

    # 2. Kiem tra Protected Artifacts neu khong thuoc branch agent hop le
    if tasklib and not allow_main and not branch.startswith("agent/"):
        protected_staged = [path for path in staged if tasklib.is_protected_path(path)]
        if protected_staged:
            print("ERROR: Phat hien chinh sua cac tep duoc bao ve (Protected Artifacts) tren nhanh khong hop le:", file=sys.stderr)
            for path in protected_staged:
                print(f"  - {path}", file=sys.stderr)
            print("Huong dan: Moi chinh sua Protected Artifacts phai di qua quy trinh agent-draft va task branch.", file=sys.stderr)
            return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
