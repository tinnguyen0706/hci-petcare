#!/usr/bin/env python3
"""Minimal parser and validation helpers for coordination task YAML files."""

from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

FIELDS = {"id", "title", "status", "owner_tool", "owner_role", "branch", "worktree", "write_scope", "dependencies", "acceptance_criteria", "handoff"}
STATUSES = {"ready", "claimed", "in-progress", "review", "blocked", "done"}
ROLES = {"orchestrator", "user-researcher", "interaction-designer", "software-implementer", "documentation-agent", "rubric-reviewer"}


def parse(path: Path) -> dict:
    data: dict[str, object] = {}
    current = None
    for number, raw in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        line = raw.rstrip()
        if not line or line.lstrip().startswith("#"):
            continue
        match = re.match(r"^([a-z_]+):(?:\s*(.*))?$", line)
        if match:
            current = match.group(1)
            value = (match.group(2) or "").strip()
            if value == "[]":
                data[current] = []
            elif value:
                data[current] = value.strip("'\"")
            else:
                data[current] = []
            continue
        item = re.match(r"^\s{2}-\s+(.+)$", line)
        if item and current:
            if not isinstance(data[current], list):
                raise ValueError(f"{path}:{number}: trường {current} không phải danh sách")
            data[current].append(item.group(1).strip().strip("'\""))
            continue
        raise ValueError(f"{path}:{number}: YAML task không hợp lệ")
    return data


def overlaps(left: str, right: str) -> bool:
    a, b = left.rstrip("/"), right.rstrip("/")
    return a == b or a.startswith(b + "/") or b.startswith(a + "/")


def validate(path: Path) -> list[str]:
    errors: list[str] = []
    try:
        task = parse(path)
    except (OSError, ValueError) as exc:
        return [str(exc)]
    missing = FIELDS - task.keys()
    if missing:
        errors.append("thiếu trường: " + ", ".join(sorted(missing)))
        return errors
    task_id, tool = str(task["id"]), str(task["owner_tool"])
    if task["status"] not in STATUSES:
        errors.append(f"status không hợp lệ: {task['status']}")
    if task["owner_role"] not in ROLES:
        errors.append(f"owner_role không hợp lệ: {task['owner_role']}")
    if task["branch"] != f"agent/{tool}/{task_id}":
        errors.append("branch không đúng agent/<tool>/<task-id>")
    if task["worktree"] != f".worktrees/{tool}-{task_id}":
        errors.append("worktree không đúng .worktrees/<tool>-<task-id>")
    scopes = task["write_scope"]
    if not isinstance(scopes, list) or not scopes:
        errors.append("write_scope phải là danh sách không rỗng")
    elif any(Path(str(scope)).is_absolute() or ".." in Path(str(scope)).parts for scope in scopes):
        errors.append("write_scope phải là đường dẫn tương đối an toàn")
    if not isinstance(task["acceptance_criteria"], list) or not task["acceptance_criteria"]:
        errors.append("acceptance_criteria phải là danh sách không rỗng")
    root = path.resolve().parents[2]
    active = {"claimed", "in-progress", "review", "blocked"}
    if task["status"] in active and isinstance(scopes, list):
        for other_path in (root / "coordination/tasks").glob("*.yml"):
            if other_path.resolve() == path.resolve():
                continue
            try:
                other = parse(other_path)
            except (OSError, ValueError):
                continue
            if other.get("status") not in active:
                continue
            for scope in scopes:
                for other_scope in other.get("write_scope", []):
                    if overlaps(str(scope), str(other_scope)):
                        errors.append(f"write_scope trùng task {other.get('id')}: {scope} ↔ {other_scope}")
    if task["status"] == "done":
        handoff = root / str(task["handoff"])
        if not handoff.is_file():
            errors.append("task done nhưng thiếu handoff")
        else:
            text = handoff.read_text(encoding="utf-8")
            sha_match = re.search(r"SHA:\s*`?([0-9a-f]{40})`?", text, re.I)
            command = re.search(r"Lệnh:\s*`?([^`\n]+)", text)
            result = re.search(r"Kết quả:\s*([^\n]+)", text)
            if (not command or command.group(1).strip() == "command" or not result
                    or "mô tả kết quả thực tế" in result.group(1).lower()):
                errors.append("handoff thiếu kiểm thử hoặc kết quả")
            if not sha_match:
                errors.append("handoff thiếu commit SHA 40 ký tự")
            else:
                check = subprocess.run(["git", "cat-file", "-e", sha_match.group(1) + "^{commit}"], cwd=root, capture_output=True)
                if check.returncode:
                    errors.append("commit SHA trong handoff không tồn tại")
                else:
                    branch_check = subprocess.run(
                        ["git", "merge-base", "--is-ancestor", sha_match.group(1), str(task["branch"])],
                        cwd=root, capture_output=True,
                    )
                    if branch_check.returncode:
                        errors.append("commit SHA không thuộc branch task")
            if not re.search(r"Kết luận:\s*`?approved`?", text, re.I):
                errors.append("task done nhưng review chưa approved")
    return errors


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("usage: tasklib.py TASK_FILE")
    problems = validate(Path(sys.argv[1]))
    if problems:
        print("\n".join(f"ERROR: {item}" for item in problems), file=sys.stderr)
        raise SystemExit(1)
    print(f"OK: {sys.argv[1]}")
