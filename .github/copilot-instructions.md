# Repository instructions

Đọc và tuân thủ `AGENTS.md`, `coordination/PROTOCOL.md`, `agents/manifest.json`, file agent trong `agents/` và cặp `SKILL.md`/`PLAN.md` canonical trong `skills/`. `.github/agents/` và `.agents/skills/` chỉ là adapter. Nguồn nghiệp vụ là `docs/proposal.md`; nguồn đánh giá là `docs/final-rubric.csv`.

Không sửa trực tiếp `main`. Mỗi task dùng branch/worktree riêng và chỉ sửa `write_scope`. Worker không merge, push hoặc xóa worktree. Chỉ orchestrator giữ khóa được tích hợp task có handoff và review `approved`.
