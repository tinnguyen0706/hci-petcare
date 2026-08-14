#!/usr/bin/env python3
"""Generate thin runtime adapters from canonical agents/manifest.json."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "agents/manifest.json"


def write(path: Path, content: str, check: bool, problems: list[str]) -> None:
    normalized = content.rstrip() + "\n"
    if check:
        if not path.is_file():
            problems.append(f"thiếu adapter: {path.relative_to(ROOT)}")
        elif path.read_text(encoding="utf-8") != normalized:
            problems.append(f"adapter lệch nguồn canonical: {path.relative_to(ROOT)}")
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(normalized, encoding="utf-8")


def skill_redirect(agent: dict[str, object]) -> str:
    agent_id = str(agent["id"])
    description = str(agent["description"])
    return f"""---
name: {agent_id}
description: Adapter đa runtime cho skill canonical {agent_id}. {description}
---

# Adapter — {agent_id}

Đây không phải nguồn workflow. Bắt buộc đọc đầy đủ:

1. `../../../skills/{agent_id}/SKILL.md`.
2. `../../../skills/{agent_id}/PLAN.md`.
3. `../../../agents/{agent_id}.md` và entry `{agent_id}` trong `../../../agents/manifest.json`.

Nếu adapter và nguồn canonical khác nhau, nguồn canonical được ưu tiên.
"""


def plan_redirect(agent_id: str) -> str:
    return f"""# Adapter PLAN — {agent_id}

Đọc và tuân thủ `../../../skills/{agent_id}/PLAN.md`. File này chỉ điều hướng runtime; không chứa workflow độc lập.
"""


def generate(check: bool) -> list[str]:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    agents = manifest["agents"]
    problems: list[str] = []

    codex_entries = [
        "[features]",
        "multi_agent = true",
        "",
        "[agents]",
        "max_threads = 4",
        "",
    ]

    for agent in agents:
        agent_id = agent["id"]
        description = agent["description"]
        canonical = (
            f"Đọc AGENTS.md, agents/manifest.json, agents/{agent_id}.md, "
            f"skills/{agent_id}/SKILL.md và skills/{agent_id}/PLAN.md. "
            "Dùng rules, template, input và output ownership trong manifest; không sao chép workflow vào adapter."
        )

        codex_entries.extend(
            [
                f"[agents.{agent_id}]",
                f'description = {json.dumps(description, ensure_ascii=False)}',
                f'config_file = "agents/{agent_id}.toml"',
                "",
            ]
        )
        write(
            ROOT / f".codex/agents/{agent_id}.toml",
            f'sandbox_mode = "workspace-write"\ndeveloper_instructions = {json.dumps(canonical, ensure_ascii=False)}',
            check,
            problems,
        )

        write(
            ROOT / f".agents/agents/{agent_id}/agent.md",
            f"""---
name: {agent_id}
description: {description}
tools: [read, write, bash]
---

{canonical}
""",
            check,
            problems,
        )

        write(
            ROOT / f".github/agents/{agent_id}.agent.md",
            f"""---
name: {agent_id}
description: {description}
tools: [read, edit, search, terminal]
---

{canonical}
""",
            check,
            problems,
        )

        mode = "primary" if agent_id == "orchestrator" else "subagent"
        task_permission = "allow" if agent_id == "orchestrator" else "deny"
        write(
            ROOT / f".opencode/agents/{agent_id}.md",
            f"""---
description: {description}
mode: {mode}
permission:
  edit: allow
  bash: allow
  task: {task_permission}
  skill: allow
---

{canonical}
""",
            check,
            problems,
        )

        for discovery_root in (".agents/skills", ".agent/skills"):
            write(
                ROOT / discovery_root / agent_id / "SKILL.md",
                skill_redirect(agent),
                check,
                problems,
            )
            write(
                ROOT / discovery_root / agent_id / "PLAN.md",
                plan_redirect(agent_id),
                check,
                problems,
            )

    write(ROOT / ".codex/config.toml", "\n".join(codex_entries), check, problems)
    return problems


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    errors = generate(args.check)
    if errors:
        raise SystemExit("\n".join(errors))
    print("Agent adapters: OK" if args.check else "Agent adapters generated")
