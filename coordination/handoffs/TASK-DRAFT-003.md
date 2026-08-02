# Handoff: TASK-DRAFT-003

## Thay đổi

- Tạo `PLAN.md` vận hành tái sử dụng cho thiết kế tương tác với trạng thái/cảnh báo, khi dùng, đầu vào, đầu ra, bốn human gate, điều kiện dừng/thất bại và nguồn quyết định.
- Chặn workflow đến khi synthesis, Persona, Value Proposition và Scenario 1 có evidence ẩn danh và đã được con người chấp nhận; không dùng persona “chị Lan” trong proposal như finding nghiên cứu.
- Bao phủ Scenario 2, Storyboard, Wireframe, Figma Prototype, ma trận truy vết bốn đoạn hành trình, 10 Heuristic Nielsen, rubric, accessibility và các trạng thái loading/empty/error.
- Quy định đúng một vòng usability test với tối thiểu 5 end-user hợp lệ, consent riêng, evidence Markdown ẩn danh, synthesis, iteration và human approval trước khi chuyển sang build.
- Quy định Figma là nguồn chỉnh sửa được, phải ghi link/ngày hoặc phiên bản và export khớp bản duyệt; cấm commit media hoặc dữ liệu nhận diện participant.
- Trong `SKILL.md`, chỉ thêm một chỉ dẫn bắt buộc đọc `[PLAN.md](PLAN.md)`; giữ nguyên frontmatter và nội dung nghiệp vụ còn lại.
- PLAN chỉ mô tả lộ trình; task này không tạo hoặc tuyên bố đã có thiết kế, kết quả review, usability test hay deliverable đạt rubric.
- Đi đúng trạng thái `ready → claimed → in-progress`; sẽ chuyển `review` sau commit implementation và kiểm tra cuối.

## Tệp đã sửa

- `.agents/skills/design-interactions/PLAN.md`
- `.agents/skills/design-interactions/SKILL.md`
- `coordination/tasks/TASK-DRAFT-003.yml`
- `coordination/handoffs/TASK-DRAFT-003.md`

## Kiểm thử

- Lệnh: `python -X utf8 scripts/coordination/tasklib.py coordination/tasks/TASK-DRAFT-003.yml`.
- Kết quả: `OK` sau từng bước `claimed` và `in-progress`; sẽ chạy lại ở commit review-ready.
- Lệnh: `python -X utf8 C:\Users\Asus\.codex\skills\.system\skill-creator\scripts\quick_validate.py .agents\skills\design-interactions`.
- Kết quả: `Skill is valid!`.
- Lệnh: PowerShell kiểm tra mọi liên kết Markdown tương đối trong `SKILL.md` và `PLAN.md` bằng `Test-Path`.
- Kết quả: `OK`; toàn bộ liên kết phân giải được.
- Lệnh: PowerShell đối chiếu frontmatter `SKILL.md` với `main` và kiểm tra marker nội dung/bốn `Human gate` trong PLAN.
- Kết quả: `OK`; frontmatter không đổi, đủ marker bắt buộc và đúng bốn human gate.
- Lệnh: `bash tests/coordination-smoke.sh`.
- Kết quả: không thể khởi chạy trong môi trường Windows hiện tại do `Bash/Service/CreateInstance/E_ACCESSDENIED`; tasklib Python trực tiếp vẫn đạt.
- Lệnh: `python -X utf8 scripts/coordination/tasklib.py --validate-integration coordination/tasks/TASK-DRAFT-003.yml main HEAD`; `git diff --check main...HEAD`; `git diff --name-only main...HEAD`.
- Kết quả: chờ commit implementation để kiểm tra diff thật.

## Tài liệu đã ảnh hưởng

- `AGENTS.md`; `coordination/PROTOCOL.md`; `references/README.md`; `agents/roles/interaction-designer.md`; `.agents/skills/design-interactions/SKILL.md` nền.
- `coordination/handoffs/TASK-LIFE-002.md`: quyết định người dùng về lifecycle, bốn cổng, một vòng test, Figma source/export và giới hạn dữ liệu.
- `docs/proposal.md`; `docs/final-rubric.csv`; `rules/domain-rules.md`; `rules/style-rules.md`; `rules/quality-rules.md`; `rules/assessment-rules.md`.
- `references/project-guidelines/notes/guide-opencode.md`; `guide-project-2026.md`; `guide-wireframe.md`; `rubric-project-final.md`.
- `references/course-materials/notes/02-foundation.md`; `03-design-process-overview.md`; `06-scenario-sketching.md`; `07-storyboard.md`.

## Vấn đề còn lại

- Bản nháp cần reviewer độc lập kết luận; sau khi được duyệt và tích hợp, orchestrator mới chuyển hai artifact sang `human-editing` để người dùng trực tiếp chỉnh sửa.
- Chưa có research package được kiểm tra tại runtime, thiết kế Figma, end-user session hoặc evidence đánh giá nào được tạo bởi task này; các gate trong PLAN phải được thực thi ở task sản phẩm sau.
- Coordination smoke test vẫn bị giới hạn bởi Git Bash/WSL trên Windows; giới hạn được ghi trung thực và không được xem là kết quả đạt.

## Commit

- SHA: sẽ cập nhật sau commit implementation.

## Review

- Kết luận: `pending`
- Ghi chú: chưa review.
