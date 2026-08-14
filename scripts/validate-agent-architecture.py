#!/usr/bin/env python3
"""Validate canonical agents/skills and all runtime adapters."""

from __future__ import annotations

import json
import re
import subprocess
import sys
import tomllib
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
RETIRED = {
    "documentation-agent",
    "interaction-designer",
    "rubric-reviewer",
    "software-implementer",
    "user-researcher",
}

PLAN_SECTIONS = (
    "## Mục đích",
    "## Dùng skill này khi",
    "## Input bắt buộc",
    "## Output",
    "## Workflow",
)
SKILL_SECTIONS = (
    "## Mục đích",
    "## Kiến thức nghiệp vụ",
    "## Chiến lược suy luận",
    "## Quy tắc kiểm tra",
    "## Xử lý khi thiếu dữ liệu hoặc thất bại",
)


def overlap(left: str, right: str) -> bool:
    a, b = left.rstrip("/"), right.rstrip("/")
    return a == b or a.startswith(b + "/") or b.startswith(a + "/")


def check_section_contract(text: str, sections: tuple[str, ...], label: str, errors: list[str]) -> None:
    headings = [line for line in text.splitlines() if line.startswith("## ")]
    if headings != list(sections):
        errors.append(f"cấu trúc {label} không hợp lệ: {headings}")


def main() -> int:
    errors: list[str] = []
    manifest_path = ROOT / "agents/manifest.json"
    try:
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1

    agents = manifest.get("agents", [])
    ids = [item.get("id") for item in agents]
    expected_ids = set(ids)
    if len(ids) != 12 or len(expected_ids) != 12 or "orchestrator" not in expected_ids:
        errors.append("manifest phải có đúng 11 rubric agent và một orchestrator")

    rubric = sorted(item.get("rubric_item") for item in agents if item.get("rubric_item") is not None)
    if rubric != list(range(1, 12)):
        errors.append("rubric_item phải bao phủ đúng 1–11")

    by_id = {item["id"]: item for item in agents}
    for item in agents:
        agent_id = item["id"]
        if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", agent_id):
            errors.append(f"ID không hợp lệ: {agent_id}")
        for dependency in item.get("dependencies", []):
            if dependency not in by_id:
                errors.append(f"dependency không tồn tại: {agent_id} → {dependency}")
        agent_file = ROOT / "agents" / f"{agent_id}.md"
        skill_file = ROOT / "skills" / agent_id / "SKILL.md"
        plan_file = ROOT / "skills" / agent_id / "PLAN.md"
        for path in (agent_file, skill_file, plan_file):
            if not path.is_file():
                errors.append(f"thiếu canonical file: {path.relative_to(ROOT)}")
        if skill_file.is_file():
            text = skill_file.read_text(encoding="utf-8")
            match = re.match(r"^---\nname:\s*([^\n]+)\ndescription:\s*([^\n]+)\n---\n", text)
            if not match or match.group(1).strip() != agent_id:
                errors.append(f"frontmatter SKILL không hợp lệ: {skill_file.relative_to(ROOT)}")
            else:
                description = match.group(2).strip()
                if "Dùng" not in description:
                    errors.append(f"description SKILL thiếu điều kiện kích hoạt: {skill_file.relative_to(ROOT)}")
            check_section_contract(text, SKILL_SECTIONS, str(skill_file.relative_to(ROOT)), errors)
        if plan_file.is_file():
            text = plan_file.read_text(encoding="utf-8")
            check_section_contract(text, PLAN_SECTIONS, str(plan_file.relative_to(ROOT)), errors)
            for contract_path in item.get("inputs", []) + item.get("outputs", []):
                if contract_path not in text:
                    errors.append(
                        f"PLAN {plan_file.relative_to(ROOT)} thiếu input/output canonical: {contract_path}"
                    )
        template = item.get("template")
        if template and not (ROOT / template).is_file():
            errors.append(f"template không tồn tại: {template}")
        elif template and plan_file.is_file() and template not in plan_file.read_text(encoding="utf-8"):
            errors.append(f"PLAN không tham chiếu template: {agent_id} → {template}")

    visiting: set[str] = set()
    visited: set[str] = set()

    def visit(agent_id: str) -> None:
        if agent_id in visiting:
            errors.append(f"dependency có chu trình tại {agent_id}")
            return
        if agent_id in visited:
            return
        visiting.add(agent_id)
        for dependency in by_id[agent_id].get("dependencies", []):
            visit(dependency)
        visiting.remove(agent_id)
        visited.add(agent_id)

    for agent_id in expected_ids:
        visit(agent_id)

    owned: list[tuple[str, str]] = []
    for item in agents:
        for output in item.get("outputs", []):
            for other_id, other_output in owned:
                if overlap(output, other_output):
                    errors.append(f"output ownership giao nhau: {item['id']}:{output} ↔ {other_id}:{other_output}")
            owned.append((item["id"], output))

    try:
        with (ROOT / ".codex/config.toml").open("rb") as stream:
            codex = tomllib.load(stream)
        if set(codex.get("agents", {})) - {"max_threads"} != expected_ids:
            errors.append(".codex/config.toml không khớp manifest")
    except (OSError, tomllib.TOMLDecodeError) as exc:
        errors.append(f"Codex TOML lỗi: {exc}")

    adapter_patterns = {
        ".codex": ROOT / ".codex/agents",
        ".agents": ROOT / ".agents/agents",
        ".github": ROOT / ".github/agents",
        ".opencode": ROOT / ".opencode/agents",
    }
    for label, directory in adapter_patterns.items():
        names = set()
        for path in directory.rglob("*"):
            if not path.is_file():
                continue
            name = path.parent.name if label == ".agents" else path.name.split(".")[0]
            names.add(name)
        if names != expected_ids:
            errors.append(f"adapter {label} không khớp manifest: {sorted(names ^ expected_ids)}")
        if names & RETIRED:
            errors.append(f"adapter {label} còn agent cũ: {sorted(names & RETIRED)}")

    registry = (ROOT / "coordination/human-artifacts.yml").read_text(encoding="utf-8")
    for agent_id in expected_ids:
        for filename in ("SKILL.md", "PLAN.md"):
            path = f"skills/{agent_id}/{filename}"
            if not re.search(rf"- path: {re.escape(path)}\n\s+status: agent-draft", registry):
                errors.append(f"registry thiếu agent-draft: {path}")

    generated = subprocess.run(
        [sys.executable, "scripts/generate-agent-adapters.py", "--check"],
        cwd=ROOT,
        text=True,
        capture_output=True,
    )
    if generated.returncode:
        errors.append(generated.stdout.strip() or generated.stderr.strip())

    if errors:
        print("\n".join(f"ERROR: {error}" for error in errors), file=sys.stderr)
        return 1
    print("Agent architecture: OK")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
