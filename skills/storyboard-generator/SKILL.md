---
name: storyboard-generator
description: Tạo Storyboard người que vẽ tay truyện tranh (Hand-drawn Comic Sketch) cho mọi Scenario Future hiện hành, từ nội dung frame, UI mockup màn hình điện thoại và ảnh AI đến HTML/CSS, PNG và kiểm tra trực quan. Dùng cho deliverable Storyboard của giai đoạn Interaction Design.
---

# Storyboard Generator

## Mục đích

Chuyển mỗi Scenario Future hiện hành thành một Storyboard riêng, có Context of Use, User action, System feedback, Emotion, Value Proposition và truy vết rõ ràng.

## Tài liệu bắt buộc

Đọc trước khi thực hiện:

- [PLAN.md](PLAN.md)
- `agents/storyboard-agent.md`
- `rules/storyboard-rules.md`
- `references/course-materials/notes/07-storyboard.md`
- `templates/storyboard/index.html`
- `templates/storyboard/style.css`

Chỉ đọc input được `agents/storyboard-agent.md` cho phép.

## Nguyên tắc

- Tự phát hiện mọi file `scenario-future-*.md`; không ghi cứng số Persona, Goal hoặc Storyboard.
- Một Scenario Future tạo một Storyboard và một thư mục output riêng.
- Storyboard kể trải nghiệm người dùng, không phải tập hợp Wireframe.
- Không thêm dữ liệu hoặc tính năng ngoài Persona, Scenario và Value Proposition.
- Hình bắt buộc theo phong cách **người que phác thảo tay truyện tranh (Hand-drawn Comic Sketch)**, nét mực đen trên nền trắng giấy vẽ, tối giản, sinh động.
- Cho phép và khuyến khích vẽ chi tiết **khung màn hình điện thoại/tablet phóng to (UI Mockup Callout)** có chữ tiếng Việt mô phỏng các tính năng chính (tìm kiếm, chọn dịch vụ, hóa đơn, nút xác nhận) và **bóng thoại suy nghĩ (Thought Bubbles)** thể hiện tâm trạng nhân vật.
- Các Storyboard của cùng Persona dùng chung Character Reference để giữ nhất quán.

## Quy trình cốt lõi

Với mỗi Scenario Future:

1. Xác định Persona, Goal và các input đối ứng.
2. Phân tích Context, pain point, User action, System feedback, Emotion và Value Proposition.
3. Chia câu chuyện theo Beginning → Story development → Climax → End.
4. Viết đúng 6 frame gồm Header (ô số + tiêu đề), mô tả khung hình (người que + bối cảnh + UI mockup/bóng thoại) và Caption đáy.
5. Tạo hoặc tái sử dụng Character Reference của Persona và thú cưng.
6. Tạo Storyboard sheet tỷ lệ 3:2 chứa đủ 6 panel vuông nét vẽ phác thảo tay, sinh động, biểu cảm.
7. Xem và kiểm tra sheet; chỉ tạo lại tối đa một lần nếu sai nghiêm trọng.
8. Viết `storyboard.md`, ghép `storyboard.html`, sao chép `style.css` và thay mọi placeholder.
9. Render `storyboard.png` bằng `tools/render-html-to-png.py` với kích thước tối thiểu `--width 1600 --height 1700 --scale 1`.
10. Xem PNG cuối và kiểm tra nội dung, bố cục, chữ viết tay comic và đảm bảo không bị cắt mép đáy.

## Quy tắc tạo ảnh và UI Mockup

- Nét vẽ phác thảo tay mực đen tự nhiên (*Hand-drawn Comic Sketch / Classic Stick Figure*), không tô màu, không 3D, không ảnh thật.
- Khung UI di động phóng to đặt cạnh nhân vật ở các frame tương tác số, thể hiện rõ các nhãn và nút bấm bằng tiếng Việt dễ hiểu.
- Bóng thoại mây/hội thoại ngắn gọn giúp truyền tải nhu cầu tức thời và cảm xúc của nhân vật.
- Giữ mô tả nhận diện Persona và thú cưng ổn định giữa các Goal của cùng một Persona.
- Mỗi Scenario tạo một sheet tỷ lệ 3:2 gồm đúng 6 panel vuông bằng nhau theo lưới 3×2; thứ tự đọc trái sang phải, hàng trên trước hàng dưới.

## Output

Lưu dưới `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/`:

- `storyboard.md`
- `storyboard.html`
- `style.css`
- `storyboard.png`
- `assets/storyboard-sheet.png`

Lưu Character Reference dùng chung tại `deliverables/02-interaction-design/storyboard/<persona-id>/character-reference.png`.

Không ghi đè output của Persona–Goal khác.

## Tiêu chí hoàn thành

- Mọi Scenario Future hiện hành đều có Storyboard tương ứng.
- Mỗi Storyboard có đúng 6 panel; mỗi panel thể hiện một sự kiện chính và có Context rõ ràng.
- Bố cục 3 tầng hoàn chỉnh: Header `[ 1. ] Tiêu đề` ➔ Khung hình vẽ tay + UI Callout ➔ Caption đáy ngăn cách bởi đường kẻ ngang.
- Font chữ toàn bộ Header và Caption là font viết tay comic tự nhiên, dễ đọc.
- Frame cuối thể hiện rõ kết quả, Emotion và Value Realized của Persona.
- Mọi asset tồn tại và đã được xem trực quan.
- HTML không còn token `{{...}}`.
- PNG render độ nét cao, các ô caption ở hàng đáy hiển thị 100% không bị cắt.

