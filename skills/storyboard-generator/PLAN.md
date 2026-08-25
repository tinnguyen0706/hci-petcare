# Kế hoạch thực thi Storyboard

## Input

- `deliverables/01-user-research/persona/personas.json`
- `deliverables/01-user-research/value-proposition/value-proposition.json`
- `deliverables/01-user-research/scenario-current/`
- `deliverables/01-user-research/scenario-future/`
- `rules/storyboard-rules.md`
- `rules/domain-rules.md`
- `rules/style-rules.md`
- `rules/quality-rules.md`
- `rules/assessment-rules.md`
- `references/course-materials/notes/07-storyboard.md`
- `templates/storyboard/index.html`
- `templates/storyboard/style.css`
- `tools/render-html-to-png.py`

## Output

Với mỗi Persona–Goal, tạo trong `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/`:

- `storyboard.md`
- `storyboard.html`
- `style.css`
- `storyboard.png`
- thư mục `assets/` chứa `storyboard-sheet.png`.

Character Reference dùng chung được lưu tại `deliverables/02-interaction-design/storyboard/<persona-id>/character-reference.png`.

## Workflow

### 1. Kiểm tra dependency

Xác nhận input, template, script render và công cụ xem ảnh đều khả dụng. Dừng nếu thiếu dependency bắt buộc.

### 2. Phát hiện phạm vi

- Liệt kê mọi file `scenario-future-*.md` trong thư mục Scenario Future.
- Lấy `persona-id` từ thư mục cha và `goal-id` từ tên file.
- Tìm Persona, Scenario Current và Value Proposition đối ứng.
- Không suy đoán input còn thiếu và không ghi cứng số Storyboard.

### 3. Phân tích và viết frame

Với từng Scenario:

- Xác định Context of Use, pain point, Value Proposition và Design decision.
- Cô đọng thành đúng 6 frame theo Beginning, diễn biến, Climax và End.
- Dùng sáu nhịp mặc định: Context + Trigger; kiểm tra hoặc chuẩn bị thông tin; hành động chính với hệ thống; tương tác ngoài đời hoặc xác nhận; hệ thống thể hiện giá trị; kết quả + Emotion.
- Viết cho mỗi frame: số, tiêu đề ngắn, mô tả hình ảnh (người que + bối cảnh + mockup UI/bóng thoại), User action, System feedback, Emotion và caption tiếng Việt 1–2 câu.

### 4. Tạo Character Reference

- Đọc mô tả Persona và thú cưng.
- Tạo hình người que phác thảo tay nét mực đen trên nền trắng, thể hiện trang phục/phụ kiện cơ bản và đặc trưng thú cưng.
- Tái sử dụng Character Reference này cho mọi Goal của cùng Persona.

### 5. Tạo và kiểm tra Storyboard sheet

- Dùng Character Reference và nội dung 6 frame làm chuẩn.
- Tạo một Storyboard sheet tỷ lệ 3:2 gồm đúng 6 panel vuông bằng nhau theo lưới 3×2 nét vẽ phác thảo tay truyện tranh (*Hand-drawn Comic Sketch*).
- Ở các frame tương tác công nghệ, vẽ chi tiết màn hình điện thoại phóng to có các thành phần UI tiếng Việt rõ ràng và bóng thoại suy nghĩ dạng đám mây.
- Lưu ảnh hợp lệ vào `assets/storyboard-sheet.png`.

### 6. Tạo deliverable HTML / CSS / Markdown

- Viết `storyboard.md` chứa nguồn, Context, bảng phân rã 6 frame và link truy vết.
- Sao chép template thành `storyboard.html` và stylesheet thành `style.css`.
- Thay toàn bộ token `{{...}}`; tạo sáu frame HTML cùng dùng `assets/storyboard-sheet.png`.
- Ánh xạ crop cố định: frame 1 = cột 1 hàng 1; frame 2 = cột 2 hàng 1; frame 3 = cột 3 hàng 1; frame 4 = cột 1 hàng 2; frame 5 = cột 2 hàng 2; frame 6 = cột 3 hàng 2.
- Cấu trúc mỗi frame bắt buộc theo thứ tự 3 tầng: `header` (ô số [ 1. ] + title); `figure` (sheet-crop ở giữa); `footer.storyboard-frame__caption` (caption ở đáy có đường kẻ ngăn cách).

### 7. Render PNG hoàn chỉnh

Chạy từ repository root:
`python tools/render-html-to-png.py "deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/storyboard.html" "deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/storyboard.png" --width 1600 --height 1700 --scale 1`

Kích thước `--height 1700` đảm bảo toàn bộ ô caption và viền của cả hàng 2 hiển thị 100% không bị cắt đáy.

### 8. Kiểm tra cuối

- Xem `storyboard.png`.
- Kiểm tra đủ 6 frame, đúng thứ tự, đúng Persona–Goal.
- Kiểm tra phong cách người que vẽ tay, độ chi tiết của UI mockup và bóng thoại.
- Kiểm tra font chữ viết tay comic, caption tiếng Việt và đảm bảo không bị cắt mép đáy.

## Điều kiện dừng

Dừng phần tương ứng nếu thiếu input, không xác định được Context hoặc System feedback, ảnh không thể lưu cục bộ, render thất bại hoặc tiếp tục sẽ dẫn đến tự bịa.

