# Quy tắc agent cho dự án HCI (CSC12106)

Dự án duy nhất trong repository là **hệ thống hỗ trợ đặt lịch, gửi yêu cầu và theo dõi chăm sóc thú cưng**, lấy chủ nuôi làm người dùng cuối.

## Nguồn chuẩn

- Nghiệp vụ và phạm vi: `docs/proposal.md` (bản gốc: `docs/proposal.pdf`).
- Tiêu chí đánh giá: `docs/final-rubric.csv`.
- Mục lục hướng dẫn đồ án và kiến thức môn học: `references/README.md`.
- Giao thức cộng tác: `coordination/PROTOCOL.md`.
- Quy tắc chi tiết: `rules/`.
- Vai trò dùng chung: `agents/roles/`; workflow dùng chung: `.agents/skills/`.

## Quy tắc bắt buộc

- Trả lời và viết tài liệu bằng tiếng Việt, trừ khi người dùng yêu cầu khác.
- Proposal luôn giữ cấu trúc **Vấn đề – Ý tưởng – Quy trình**.
- Không bịa dữ liệu, số liệu, trích dẫn hoặc kết quả nghiên cứu/kiểm thử.
- Không mở rộng phạm vi hay đổi công nghệ nếu chưa được yêu cầu.
- Nội dung phải tự chứa, học thuật, rõ ràng và nhất quán với nguồn chuẩn.
- Trước mỗi task, đọc `references/README.md`, đọc đầy đủ các tài liệu được mục lục xác định là liên quan và áp dụng yêu cầu, phương pháp, thuật ngữ phù hợp vào đầu ra.
- Ghi đường dẫn tài liệu tham khảo đã ảnh hưởng đến quyết định quan trọng trong task hoặc handoff; không dùng tài liệu tham khảo để ghi đè proposal hay rubric.
- Không agent nào sửa trực tiếp nhánh `main`.
- Mỗi task có đúng một owner, một branch `agent/<tool>/<task-id>`, một worktree `.worktrees/<tool>-<task-id>/` và `write_scope` không giao nhau với task đang hoạt động.
- Worker chỉ sửa trong `write_scope`, commit trên branch riêng và tạo handoff. Worker không merge, push hoặc xóa worktree.
- Reviewer chỉ đọc diff và ghi kết luận; chỉ orchestrator giữ khóa mới được tích hợp task đã duyệt vào `main`.

Trước khi nhận hoặc thực hiện task, phải đọc `coordination/PROTOCOL.md`, `references/README.md`, role tương ứng và skill phù hợp.
