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
ARTIFACT_STATES = ("needs-interview", "agent-draft", "human-editing", "locked")
ACTIVE_STATUSES = {"claimed", "in-progress", "review", "blocked"}


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


def normalize_repo_path(value: str) -> str:
    normalized = Path(value).as_posix()
    return normalized[2:] if normalized.startswith("./") else normalized


def is_protected_path(value: str) -> bool:
    path = Path(normalize_repo_path(value))
    lowered = [part.lower() for part in path.parts]
    if path.as_posix() == "AGENTS.md":
        return True
    if path.name.lower() in {"plan.md", "skill.md"}:
        return True
    return bool(lowered and lowered[0] in {"rules", "templates"} and path.suffix.lower() == ".md")


def parse_registry_text(text: str, source: str = "registry") -> dict[str, str]:
    artifacts: dict[str, str] = {}
    current_path: str | None = None
    saw_header = False
    for number, raw in enumerate(text.splitlines(), 1):
        line = raw.rstrip()
        if not line or line.lstrip().startswith("#"):
            continue
        if line == "artifacts:":
            if saw_header:
                raise ValueError(f"{source}:{number}: artifacts bị khai báo lặp")
            saw_header = True
            continue
        path_match = re.match(r"^\s{2}- path:\s*(.+?)\s*$", line)
        if path_match and saw_header:
            if current_path is not None:
                raise ValueError(f"{source}:{number}: artifact thiếu status")
            current_path = normalize_repo_path(path_match.group(1).strip().strip("'\""))
            continue
        status_match = re.match(r"^\s{4}status:\s*(\S+)\s*$", line)
        if status_match and current_path is not None:
            state = status_match.group(1).strip("'\"")
            if not current_path or Path(current_path).is_absolute() or ".." in Path(current_path).parts:
                raise ValueError(f"{source}:{number}: đường dẫn artifact không an toàn")
            if not is_protected_path(current_path):
                raise ValueError(f"{source}:{number}: không phải artifact được bảo vệ: {current_path}")
            if state not in ARTIFACT_STATES:
                raise ValueError(f"{source}:{number}: trạng thái artifact không hợp lệ: {state}")
            if current_path in artifacts:
                raise ValueError(f"{source}:{number}: artifact bị khai báo lặp: {current_path}")
            artifacts[current_path] = state
            current_path = None
            continue
        raise ValueError(f"{source}:{number}: registry không hợp lệ")
    if not saw_header:
        raise ValueError(f"{source}: thiếu trường artifacts")
    if current_path is not None:
        raise ValueError(f"{source}: artifact thiếu status")
    return artifacts


def load_registry(root: Path) -> dict[str, str]:
    path = root / "coordination/human-artifacts.yml"
    try:
        return parse_registry_text(path.read_text(encoding="utf-8"), str(path))
    except OSError as exc:
        raise ValueError(str(exc)) from exc


def validate_registry_transition(old: dict[str, str], new: dict[str, str]) -> list[str]:
    errors: list[str] = []
    for path, old_state in old.items():
        if path not in new:
            errors.append(f"không được xóa artifact khỏi registry: {path}")
            continue
        new_state = new[path]
        distance = ARTIFACT_STATES.index(new_state) - ARTIFACT_STATES.index(old_state)
        if distance < 0:
            errors.append(f"không được chuyển lùi {path}: {old_state} → {new_state}")
        elif distance > 1:
            errors.append(f"không được bỏ qua trạng thái {path}: {old_state} → {new_state}")
    for path, state in new.items():
        if path not in old and state != "needs-interview":
            errors.append(f"artifact mới phải bắt đầu ở needs-interview: {path}")
    return errors


def protected_scope_errors(scopes: list[object], registry: dict[str, str]) -> list[str]:
    errors: list[str] = []
    for raw_scope in scopes:
        scope = normalize_repo_path(str(raw_scope).rstrip("/"))
        exact_protected = is_protected_path(scope)
        covered = sorted(path for path in registry if overlaps(scope, path) and scope != path)
        # Một thư mục bất kỳ có thể chứa PLAN.md/SKILL.md; rules/templates còn có
        # thể chứa Markdown mới. Artifact phải luôn được cấp quyền bằng đúng tệp.
        broad = str(raw_scope).endswith("/") or not Path(scope).suffix
        if broad and (covered or scope in {"rules", "templates"}):
            errors.append(f"write_scope rộng có thể bao phủ artifact được bảo vệ: {raw_scope}")
        if exact_protected:
            if scope not in registry:
                errors.append(f"artifact được bảo vệ chưa đăng ký: {scope}")
            elif registry[scope] != "agent-draft":
                errors.append(f"artifact {scope} đang ở trạng thái {registry[scope]}, không phải agent-draft")
    return errors


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
    if task["status"] in ACTIVE_STATUSES and isinstance(scopes, list):
        try:
            registry = load_registry(root)
            errors.extend(protected_scope_errors(scopes, registry))
        except ValueError as exc:
            errors.append(str(exc))
        for other_path in (root / "coordination/tasks").glob("*.yml"):
            if other_path.resolve() == path.resolve():
                continue
            try:
                other = parse(other_path)
            except (OSError, ValueError):
                continue
            if other.get("status") not in ACTIVE_STATUSES:
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


def git_text(root: Path, revision: str, path: str) -> str:
    result = subprocess.run(["git", "show", f"{revision}:{path}"], cwd=root, text=True, capture_output=True)
    if result.returncode:
        raise ValueError(f"không đọc được {path} tại {revision}")
    return result.stdout


def integration_changes(root: Path, base: str, branch: str) -> list[tuple[str, list[str]]]:
    result = subprocess.run(
        ["git", "diff", "--name-status", "-M", f"{base}...{branch}"], cwd=root, text=True, capture_output=True
    )
    if result.returncode:
        raise ValueError(result.stderr.strip() or "không đọc được diff tích hợp")
    changes: list[tuple[str, list[str]]] = []
    for line in result.stdout.splitlines():
        columns = line.split("\t")
        changes.append((columns[0], [normalize_repo_path(item) for item in columns[1:]]))
    return changes


def validate_integration(task_path: Path, base: str, branch: str) -> tuple[list[str], list[str]]:
    root = task_path.resolve().parents[2]
    task = parse(task_path)
    scopes = {normalize_repo_path(str(item).rstrip("/")) for item in task.get("write_scope", [])}
    errors: list[str] = []
    protected_changed: list[str] = []
    changes = integration_changes(root, base, branch)
    registry_changed = any("coordination/human-artifacts.yml" in paths for _, paths in changes)
    try:
        base_registry = parse_registry_text(git_text(root, base, "coordination/human-artifacts.yml"), base)
    except ValueError as exc:
        # Cho phép chính task bootstrap tạo registry, nhưng mọi entry đầu tiên vẫn
        # phải bắt đầu ở needs-interview.
        if not registry_changed:
            return [str(exc)], []
        base_registry = {}
    if registry_changed:
        try:
            branch_registry_for_transition = parse_registry_text(
                git_text(root, branch, "coordination/human-artifacts.yml"), branch
            )
            errors.extend(validate_registry_transition(base_registry, branch_registry_for_transition))
        except ValueError as exc:
            errors.append(str(exc))
    for status, paths in changes:
        for changed in paths:
            if not any(overlaps(changed, scope) for scope in scopes):
                errors.append(f"diff thay đổi ngoài write_scope: {changed}")
        protected = [path for path in paths if is_protected_path(path)]
        if not protected:
            continue
        if status.startswith(("D", "R")):
            errors.append(f"không được xóa hoặc đổi tên artifact được bảo vệ: {' → '.join(paths)}")
        for path in protected:
            if path not in base_registry:
                errors.append(f"artifact được bảo vệ chưa đăng ký trên {base}: {path}")
            elif base_registry[path] != "agent-draft":
                errors.append(f"artifact {path} trên {base} không ở agent-draft")
            if path not in scopes:
                errors.append(f"write_scope phải chứa đúng artifact được bảo vệ: {path}")
            protected_changed.append(path)
    if protected_changed:
        try:
            branch_registry = parse_registry_text(
                git_text(root, branch, "coordination/human-artifacts.yml"), branch
            )
            for path in protected_changed:
                if branch_registry.get(path) != "agent-draft":
                    errors.append(f"branch không được chuyển {path} khỏi agent-draft")
        except ValueError as exc:
            errors.append(str(exc))
    return errors, sorted(set(protected_changed))


def advance_integrated_artifacts(root: Path, paths: list[str]) -> None:
    registry_path = root / "coordination/human-artifacts.yml"
    text = registry_path.read_text(encoding="utf-8")
    for path in paths:
        pattern = rf"(^\s{{2}}- path:\s*{re.escape(path)}\s*$\n\s{{4}}status:\s*)agent-draft(\s*$)"
        text, count = re.subn(pattern, r"\1human-editing\2", text, count=1, flags=re.MULTILINE)
        if count != 1:
            raise ValueError(f"không thể chuyển {path} sang human-editing")
    registry_path.write_text(text, encoding="utf-8")


if __name__ == "__main__":
    if len(sys.argv) == 4 and sys.argv[1] == "--validate-registry-transition":
        old_path, new_path = Path(sys.argv[2]), Path(sys.argv[3])
        try:
            problems = validate_registry_transition(
                parse_registry_text(old_path.read_text(encoding="utf-8"), str(old_path)),
                parse_registry_text(new_path.read_text(encoding="utf-8"), str(new_path)),
            )
        except (OSError, ValueError) as exc:
            problems = [str(exc)]
    elif len(sys.argv) == 5 and sys.argv[1] == "--validate-integration":
        task_path, base, branch = Path(sys.argv[2]), sys.argv[3], sys.argv[4]
        problems, changed = validate_integration(task_path, base, branch)
        if not problems:
            print("\n".join(changed))
            raise SystemExit(0)
    elif len(sys.argv) >= 3 and sys.argv[1] == "--advance-integrated-artifacts":
        try:
            root = Path.cwd()
            old = load_registry(root)
            advance_integrated_artifacts(root, [normalize_repo_path(item) for item in sys.argv[2:]])
            new = load_registry(root)
            problems = validate_registry_transition(old, new)
        except (OSError, ValueError) as exc:
            problems = [str(exc)]
    elif len(sys.argv) == 2:
        problems = validate(Path(sys.argv[1]))
    else:
        raise SystemExit("usage: tasklib.py TASK_FILE | --validate-registry-transition OLD NEW | --validate-integration TASK BASE BRANCH | --advance-integrated-artifacts PATH...")
    if problems:
        print("\n".join(f"ERROR: {item}" for item in problems), file=sys.stderr)
        raise SystemExit(1)
    print("OK")
