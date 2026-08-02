# Handoff: TASK-DRAFT-004

## Thay đổi

- Tạo `PLAN.md` như một lộ trình tái sử dụng có cảnh báo trạng thái, điều kiện kích hoạt, đầu vào/đầu ra, bốn cổng thực hiện, điều kiện dừng/thất bại và nguồn quyết định.
- Chốt cổng Figma đã duyệt/ghim cùng acceptance matrix; toolchain React + TypeScript/Vite, Testing Library/Vitest và Playwright; fixture cục bộ xác định, state trong trình duyệt có reset và giới hạn không backend/live API/tuyên bố “real-time” thật.
- Bao phủ trọn bốn năng lực của proposal, trạng thái tải/rỗng/lỗi, accessibility, responsive mobile-first và cổng kết quả thật cho typecheck/test/build/visual comparison cùng human acceptance.
- Chỉ thêm một câu bắt buộc đọc `[PLAN.md](PLAN.md)` vào `SKILL.md`; giữ nguyên frontmatter và toàn bộ nội dung nghiệp vụ cũ.
- Không scaffold hoặc sửa mã sản phẩm; PLAN không được trình bày như bằng chứng rằng phần mềm hay kiểm thử đã hoàn tất.
- Đi đúng chuỗi trạng thái `ready → claimed → in-progress → review`; worker không tự review.

## Tệp đã sửa

- `.agents/skills/build-prototype/PLAN.md`
- `.agents/skills/build-prototype/SKILL.md`
- `coordination/tasks/TASK-DRAFT-004.yml`
- `coordination/handoffs/TASK-DRAFT-004.md`

## Kiểm thử

- Lệnh: `python -X utf8 scripts/coordination/tasklib.py coordination/tasks/TASK-DRAFT-004.yml`.
- Kết quả: `OK` ở `claimed` và `in-progress`; sẽ chạy lại ở revision review-ready.
- Lệnh: `python -X utf8 C:/Users/Asus/.codex/skills/.system/skill-creator/scripts/quick_validate.py .agents/skills/build-prototype`.
- Kết quả: `Skill is valid!`.
- Lệnh: PowerShell `Test-Path` cho đích tương đối `PLAN.md`, đếm đúng một `[PLAN.md](PLAN.md)` và so sánh bốn dòng frontmatter với `main`.
- Kết quả: link phân giải tới tệp có thật, xuất hiện đúng một lần và frontmatter không đổi.
- Lệnh: rà thủ công PLAN theo Acceptance Criteria và tìm các mục/từ khóa về cổng Figma, toolchain, fixture/reset, giới hạn network, bốn năng lực, trạng thái biên, accessibility/responsive, kiểm thử thật, human acceptance, điều kiện dừng và nguồn.
- Kết quả: mọi nhóm yêu cầu đều hiện diện; không có tuyên bố rằng mã sản phẩm hoặc kiểm thử sản phẩm đã hoàn tất.
- Lệnh: `git diff --cached --check` và `git diff --cached --name-only` trước commit implementation.
- Kết quả: không có lỗi whitespace; danh sách chỉ gồm đúng bốn tệp trong `write_scope`.
- Lệnh: `C:/Program Files/Git/bin/bash.exe -lc './tests/coordination-smoke.sh'`.
- Kết quả: Git Bash chạy được nhưng smoke test dừng ở fixture lifecycle vì script giả định `AGENTS.md` đang `needs-interview`, trong khi registry hiện hành là `human-editing`; validator báo `artifact AGENTS.md đang ở trạng thái human-editing, không phải agent-draft`. Không sửa test ngoài `write_scope`; các validator trực tiếp liên quan task được chạy riêng.

## Tài liệu đã ảnh hưởng

- Yêu cầu hiện tại của người dùng và quyết định đã ghi tại `coordination/handoffs/TASK-LIFE-002.md`.
- `AGENTS.md`; `coordination/PROTOCOL.md`; `references/README.md`; `agents/roles/software-implementer.md`; `.agents/skills/build-prototype/SKILL.md`; `skill-creator/SKILL.md`.
- `docs/proposal.md`; `docs/final-rubric.csv`; `rules/domain-rules.md`; `rules/style-rules.md`; `rules/quality-rules.md`; `rules/assessment-rules.md`.
- `references/project-guidelines/notes/guide-opencode.md`; `guide-project-2026.md`; `guide-wireframe.md`; `rubric-project-final.md`.
- `references/course-materials/notes/02-foundation.md`; `03-design-process-overview.md`.

## Vấn đề còn lại

- Cần reviewer độc lập đối chiếu draft với task/rubric và ghi đúng một kết luận. Chỉ sau khi được duyệt, orchestrator mới được tích hợp rồi chuyển cặp PLAN/SKILL sang `human-editing`.
- `tests/coordination-smoke.sh` hiện không đồng bộ với trạng thái `AGENTS.md` trong registry như mô tả ở phần kiểm thử; đây là tệp ngoài `write_scope`.

## Commit

- SHA: `PENDING`

## Review

- Kết luận: `pending`
- Ghi chú: chờ reviewer độc lập; worker không tự review.
