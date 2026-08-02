# Handoff: TASK-DRAFT-002

## Thay đổi

- Tạo lộ trình bốn giai đoạn chuẩn bị → tối thiểu 5 phiên → synthesis → persona/VPC/scenario hiện tại, với bốn cổng duyệt và trọng tâm theo dõi tiến độ.
- Mở rộng skill để phân quyền agent phân tích/đề xuất và con người review/chấp nhận.
- Đồng bộ ba rule với cổng evidence, rubric và policy Git có thể công khai.
- Đi đúng trạng thái `ready → claimed → in-progress → review`; không tự review.

## Tệp đã sửa

- `.agents/skills/research-users/PLAN.md`
- `.agents/skills/research-users/SKILL.md`
- `rules/domain-rules.md`
- `rules/quality-rules.md`
- `rules/assessment-rules.md`
- `coordination/tasks/TASK-DRAFT-002.yml`
- `coordination/handoffs/TASK-DRAFT-002.md`

## Kiểm thử

- Lệnh: `python scripts/coordination/tasklib.py coordination/tasks/TASK-DRAFT-002.yml`.
- Kết quả: `OK` ở `in-progress`; sẽ chạy lại ở commit review-ready.
- Lệnh: `python scripts/coordination/tasklib.py --validate-integration coordination/tasks/TASK-DRAFT-002.yml main HEAD`.
- Kết quả: đạt; diff chỉ nằm trong bảy đường dẫn `write_scope`.
- Lệnh: `git diff --check main...HEAD` và `git diff --name-only main...HEAD`.
- Kết quả: không có lỗi whitespace; danh sách chỉ gồm artifact, task và handoff thuộc scope.
- Lệnh privacy scan trên phần thêm mới với mẫu email, số điện thoại, URL và đường dẫn user cục bộ; sau đó rà thủ công identifier/contact/mapping/signature/media/screenshot/dữ liệu nhạy cảm hoặc bên thứ ba.
- Kết quả: không phát hiện dữ liệu người tham gia hay PII; các từ cấm chỉ xuất hiện trong câu policy “không commit”.
- Lệnh: `bash tests/coordination-smoke.sh`.
- Kết quả: không khả thi trên Windows hiện tại, lỗi `Bash/Service/CreateInstance/E_ACCESSDENIED`; validator Python và integration gate dùng cùng logic liên quan đã đạt.

## Tài liệu đã ảnh hưởng

- `AGENTS.md`; `coordination/PROTOCOL.md`; `references/README.md`; `agents/roles/user-researcher.md`; `.agents/skills/research-users/SKILL.md` nền.
- `docs/proposal.md`; `docs/final-rubric.csv`.
- `references/course-materials/notes/04-user-discovery-technique.md`, `05-persona-value-proposition.md`, `06-scenario-sketching.md`.
- `references/project-guidelines/notes/guide-project-2026.md`, `rubric-project-final.md`.
- Toàn bộ tệp hiện có dưới `deliverables/01-user-research/`.

## Vấn đề còn lại

- Cần một task follow-up có write scope riêng để đồng bộ `deliverables/01-user-research/`: tài liệu hiện tại vẫn nói raw data/notes/media nằm ngoài Git và consent chưa thông báo rõ repository có thể public hay giới hạn rằng nhóm không hứa xóa dữ liệu khỏi Git history. Policy mới chỉ cho phép Markdown đã ẩn danh vào Git, cấm identifier/contact/mapping/signature/media/screenshots/sensitive/third-party data, và yêu cầu withdrawal xóa current tree rồi chạy lại derivatives. Trước khi đồng bộ, Cổng A trong PLAN chưa đạt và không nên thực địa.
- Không sửa các file mâu thuẫn vì chúng ngoài `write_scope` của task này.

## Commit

- SHA: `188a5164a6e9797f320bb067f7dcae7340aa30de`

## Review

- Kết luận: `approved`
- Ghi chú: diff đúng `write_scope`; năm artifact ở `agent-draft`, đáp ứng pipeline/cổng duyệt, bốn đoạn hành trình và policy Git ẩn danh. Task validator, integration gate, `git diff --check` và privacy scan đạt; hạn chế smoke test trên Windows đã được ghi trung thực và không làm thay đổi kết luận.
