# Quy tắc task

- Một task, một owner, một branch, một worktree và một `write_scope` độc lập.
- Tên branch là `agent/<tool>/<task-id>`; worktree là `.worktrees/<tool>-<task-id>`.
- Không sửa `main`; worker không merge, push hoặc xóa worktree.
- Mọi chuyển trạng thái và handoff tuân theo `coordination/PROTOCOL.md`.
