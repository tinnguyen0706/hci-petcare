# Handoff: TASK-ARCH-001

## Thay đổi

- Di cư hoàn toàn từ agent legacy sang orchestrator và 11 agent theo rubric, với manifest và adapter cho Codex, OpenCode, GitHub Copilot và runtime `.agents`/`.agent`.
- Chuẩn hóa 12 `PLAN.md` canonical thành hợp đồng gọi skill: Mục đích, Dùng skill này khi, Input bắt buộc, Output và Workflow.
- Chuẩn hóa 12 `SKILL.md` canonical thành hướng dẫn suy luận: Mục đích, Kiến thức nghiệp vụ, Chiến lược suy luận, Quy tắc kiểm tra và Xử lý khi thiếu dữ liệu hoặc thất bại.
- Giữ chính sách suy luận bám bằng chứng; không tự bịa nhân khẩu học, research, test hoặc teamwork.
- Mở rộng validator kiến trúc để kiểm tra section contract, frontmatter trigger và input/output theo manifest.

## Tệp đã sửa

- Toàn bộ phạm vi di cư và adapter đã khai báo trong `coordination/tasks/TASK-ARCH-001.yml`.
- 24 artifact canonical trong `skills/<agent>/PLAN.md` và `skills/<agent>/SKILL.md`.
- `scripts/validate-agent-architecture.py`, manifest, registry, templates và adapter generator liên quan.
- Không commit `AGENTS.md`; file này đang ở `human-editing` và thay đổi tại root thuộc quyền chỉnh sửa trực tiếp của người dùng.

## Kiểm thử

- Lệnh: `python scripts/coordination/tasklib.py coordination/tasks/TASK-ARCH-001.yml`.
- Kết quả: `OK` ở trạng thái `in-progress`; sẽ chạy lại sau khi ghi review.
- Lệnh: `python scripts/validate-agent-architecture.py`.
- Kết quả: `Agent architecture: OK`; đủ 12 agent, contract PLAN/SKILL, manifest, registry và adapter.
- Lệnh: chạy `quick_validate.py` của `skill-creator` cho toàn bộ 12 thư mục trong `skills/`.
- Kết quả: cả 12 skill đều `Skill is valid!`.
- Lệnh: `python scripts/generate-agent-adapters.py --check`.
- Kết quả: `Agent adapters: OK`.
- Lệnh: `bash tests/coordination-smoke.sh` sau khi tích hợp dependency TASK-AUTH-003.
- Kết quả: `Coordination smoke test: OK`.
- Lệnh: `git diff --check origin/main...HEAD`.
- Kết quả: không có lỗi whitespace.
- Lệnh: `python scripts/coordination/tasklib.py --validate-integration coordination/tasks/TASK-ARCH-001.yml origin/main HEAD`.
- Kết quả: không đạt cổng registry vì PR này đồng thời thay registry legacy và tạo canonical artifact mới; base `main` chưa đăng ký các đường dẫn đó. Đây là ngoại lệ bootstrap một lần do người dùng chọn gộp toàn bộ di cư vào một task; không sửa validator để che lỗi.

## Tài liệu đã ảnh hưởng

- `AGENTS.md`, `coordination/PROTOCOL.md`, `references/README.md` và `agents/manifest.json`.
- `references/project-guidelines/notes/guide-opencode.md`.
- `references/project-guidelines/notes/rubric-project-final.md`.
- `/home/tinhiem/.codex/skills/.system/skill-creator/SKILL.md`.

## Vấn đề còn lại

- Integration gate cần reviewer chấp nhận ngoại lệ bootstrap nêu trên trước khi tạo PR.
- Sau tích hợp, 24 PLAN/SKILL canonical phải chuyển từ `agent-draft` sang `human-editing` trong metadata commit riêng.

## Commit

- SHA: `fb774820c2183d33e85fe95b1a832e2bbbd67114`

## Review

- Kết luận: `approved`
- Ghi chú: Reviewer độc lập xác nhận 24 PLAN/SKILL đúng cấu trúc, nội dung riêng theo domain và bám evidence; frontmatter/trigger, manifest, adapter, di cư agent legacy và `write_scope` nhất quán. Architecture validator, 12 quick validations, adapter check, coordination smoke, task validation và diff check đều đạt. Reviewer chấp nhận ngoại lệ integration gate một lần vì handoff ghi trung thực, validator không bị sửa để che lỗi và người dùng đã chọn rõ “Gộp một task” trước khi yêu cầu thực thi kế hoạch.
