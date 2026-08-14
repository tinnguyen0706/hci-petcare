# Dữ liệu đầu vào cho agent

Đây là nơi chứa dữ liệu đầu vào cho các task như Persona, Value Proposition và các deliverable liên quan. `data/` chỉ chứa input; output do agent tạo phải nằm trong `deliverables/`.

## Cấu trúc

- `user-research/`: ghi chép `session-notes-P01.md`… đã ẩn danh và dữ liệu khảo sát đã làm sạch.
- `design-inputs/`: link/version Figma, export hoặc ảnh tham chiếu do nhóm cung cấp.
- `submission-inputs/`: thông báo hiện hành về deadline, format, title và kênh nộp.
- `teamwork-inputs/`: xác nhận đóng góp thực tế của ba thành viên.

## Quy tắc dữ liệu

- Sao chép `templates/session-notes-Pxx.md` cho từng phiên phỏng vấn.
- Chỉ đưa vào Git Markdown đã ẩn danh và các design/submission input không chứa dữ liệu nhạy cảm.
- Không đặt tên, email, số điện thoại, địa chỉ cụ thể, mapping danh tính–Pxx, chữ ký, recording, screenshot người tham gia hoặc dữ liệu nhận diện bên thứ ba trong repository.
- Media và raw data còn danh tính phải lưu riêng ngoài Git.
- Agent mặc định chỉ đọc `data/`; mọi synthesis, Persona, Scenario, thiết kế, code và tài liệu cuối kỳ phải ghi vào `deliverables/` hoặc đường dẫn output trong manifest.
