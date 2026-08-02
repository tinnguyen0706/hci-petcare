# Ghi chú hướng dẫn OpenCode và vibecoding

- **Tệp gốc:** `references/project-guidelines/original/Guide4Project_OpenCode.pdf`
- **Loại nguồn:** Hướng dẫn công cụ cho đồ án.
- **Phạm vi áp dụng:** Cấu hình agent, skill/rule/template/tool và quy trình build–kiểm chứng prototype bằng AI.

## Nội dung chính

`Agents.md` đặt ở gốc project để mô tả tổng quan, người dùng/mục đích, tech stack, quy tắc thiết kế, điều bắt buộc và workflow. Quy tắc dùng chung có thể tách khỏi project; nội dung theo domain nên nạp có chọn lọc để tránh context thừa.

Tài liệu đề xuất tách `skills/` (nhiệm vụ cụ thể), `rules/` (ràng buộc), `agents/` (điều phối mục tiêu lớn), `templates/` (cấu trúc đầu ra) và `tools/` (cơ chế thực thi cụ thể). Plan mô tả khi dùng, input, output, workflow; Skill mô tả domain knowledge, cách suy luận, validation và xử lý thất bại. Ví dụ persona nhấn mạnh tính nhất quán, dựa trên nghiên cứu, không suy diễn nhân khẩu học thiếu căn cứ. Template quy định bố cục; renderer có thể chuyển dữ liệu có cấu trúc qua HTML/CSS thành ảnh.

Quy trình vibecoding gồm chuẩn bị wireframe/mockup dung lượng phù hợp, chuẩn bị tài liệu Markdown/`Agents.md`, build rồi tinh chỉnh. Sau thay đổi lớn cần so sánh screenshot với thiết kế gốc. Cần giao một bước, tự kiểm chứng, sửa và kiểm chứng lại để tránh lỗi chồng lỗi; công cụ thực thi phải được nêu cụ thể thay vì chỉ ghi một mục tiêu mơ hồ như “xuất PNG”.

## Điểm có thể hành động

- Giữ instruction rõ về phạm vi, công nghệ, style, workflow và tiêu chí kiểm chứng.
- Tách knowledge/reasoning/validation khỏi template trình bày và công cụ render.
- Dùng ảnh tham chiếu và screenshot lặp lại để đánh giá sai khác; đồng thời kiểm tra mobile và các yêu cầu dự án thực tế.
- Các lệnh cài đặt/đăng nhập và model trong slide có thể thay đổi; phải đối chiếu tài liệu công cụ hiện hành trước khi thao tác.
