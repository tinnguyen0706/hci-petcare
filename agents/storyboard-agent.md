# Storyboard Agent

Điều phối việc tạo một Storyboard người que vẽ tay truyện tranh (*Hand-drawn Comic Sketch*) cho mọi Scenario Future hiện hành theo rubric mục 5.

## Skill và quy tắc

Đọc và tuân thủ:

- `skills/storyboard-generator/SKILL.md`
- `skills/storyboard-generator/PLAN.md`
- `rules/storyboard-rules.md`
- `rules/domain-rules.md`
- `rules/style-rules.md`
- `rules/quality-rules.md`
- `rules/assessment-rules.md`
- `references/course-materials/notes/07-storyboard.md`

Sử dụng:

- `templates/storyboard/index.html`
- `templates/storyboard/style.css`
- `tools/render-html-to-png.py`
- ImageGen / Vector Comic Sheet Generator để tạo một Character Reference cho mỗi Persona và một Storyboard sheet 3×2 cho mỗi Scenario.
- Công cụ xem ảnh để kiểm tra asset và PNG cuối.

## Phạm vi dữ liệu được đọc

- `deliverables/01-user-research/persona/personas.json`
- `deliverables/01-user-research/value-proposition/value-proposition.json`
- `deliverables/01-user-research/scenario-current/`
- `deliverables/01-user-research/scenario-future/`
- Evidence trong `data/user-research/` chỉ khi cần xác minh truy vết của Persona–Goal đang xử lý.

Không tự ý đọc Wireframe, Prototype, Software Product, Presentation, Final Report hoặc Teamwork evidence.

## Workflow

1. Kiểm tra input, template, công cụ xem ảnh và script render.
2. Phát hiện mọi file `scenario-future-*.md`; không ghi cứng số Persona, Goal hoặc Storyboard.
3. Ghép từng Scenario Future với Persona, Scenario Current và Value Proposition tương ứng.
4. Gọi `storyboard-generator` cho từng Persona–Goal hợp lệ.
5. Phân rã đúng 6 frame (Header, mô tả nét vẽ người que + UI mockup/bóng thoại, Caption đáy).
6. Tạo hoặc tái sử dụng Character Reference của Persona.
7. Tạo một Storyboard sheet tỷ lệ 3:2 gồm sáu panel vuông nét vẽ phác thảo tay truyện tranh và xem ảnh để kiểm tra.
8. Tạo `storyboard.md`, `storyboard.html`, `style.css`, asset sheet và `storyboard.png` (render tối thiểu `--width 1600 --height 1700`).
9. Xem PNG cuối, kiểm tra độ phủ caption hàng đáy, sửa lỗi nội dung hoặc bố cục rồi render lại khi cần.
10. Đối chiếu độ phủ và báo các Scenario hoàn thành hoặc bị dừng.

## Chuẩn hình ảnh

- Người que phác thảo tay truyện tranh (*Hand-drawn Comic Sketch / Classic Stick Figure*), nét mực đen trên nền trắng.
- Đơn giản, thân thiện, tập trung vào Context, hành động và cảm xúc.
- Cho phép và khuyến khích vẽ chi tiết khung màn hình điện thoại phóng to có chữ mô phỏng tiếng Việt và bóng thoại suy nghĩ dạng mây.
- Giữ nhân vật và thú cưng nhất quán giữa mọi Storyboard của cùng Persona.
- Hình tham chiếu của người dùng chỉ định hướng phong cách, không được sao chép nội dung.

## Output

Mỗi Persona–Goal có thư mục riêng dưới `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/` gồm:

- `storyboard.md`
- `storyboard.html`
- `style.css`
- `storyboard.png`
- `assets/storyboard-sheet.png`

Character Reference nằm tại `deliverables/02-interaction-design/storyboard/<persona-id>/character-reference.png`.

## Kiểm tra hoàn thành

- Mọi Scenario Future hiện hành có một Storyboard tương ứng.
- Mọi token HTML đã được thay thế.
- Mọi asset tồn tại và đã được xem trực quan.
- Sáu panel được crop đúng ánh xạ 1–3 ở hàng trên và 4–6 ở hàng dưới.
- Bố cục mỗi frame theo chuẩn 3 tầng: header trên đỉnh, hình minh họa + UI callout ở giữa, caption ở đáy có đường kẻ phân tách.
- Font chữ toàn bài là font viết tay comic tự nhiên.
- PNG không thiếu frame, không bị cắt mép đáy, caption hiển thị đầy đủ 100%.
- Nội dung đúng Persona–Goal, có Context, User action, System feedback, Emotion và Value Proposition.
- Không có dữ liệu, tính năng hoặc kết quả kiểm thử tự bịa.

## Điều kiện dừng

Dừng Storyboard tương ứng và báo rõ nếu thiếu input, dữ liệu mâu thuẫn, không xác định được hành động/phản hồi, không thể lưu asset, render thất bại hoặc tiếp tục sẽ dẫn đến tự bịa.

