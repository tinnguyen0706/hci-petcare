# Kế hoạch thực thi Storyboard Generator

## Dùng skill này khi

Người dùng hoặc Subagent muốn tổng hợp một Storyboard hoàn chỉnh dựa trên tập 6 ảnh panel vuông 1:1 và tệp `data.json` có sẵn.

## Input

- 6 ảnh panel tại `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/assets/frame-1.png` .. `frame-6.png`
- Tệp metadata tại `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/data.json`
- Template chuẩn tại `templates/storyboard/`

## Output

Bộ bàn giao Storyboard hoàn chỉnh lưu tại `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/`:
- `storyboard.html`: Trang HTML hiển thị bố cục 6 frame 3 tầng.
- `style.css`: Bảng định kiểu CSS comic sketch.
- `storyboard.md`: Tài liệu phân tích hành trình, Context of Use và mô tả chi tiết 6 khung hình.
- `storyboard.png`: Ảnh PNG tổng hợp chất lượng cao.

## Template

- Tuân thủ cấu trúc trong `templates/storyboard/index.html` và `templates/storyboard/style.css`.

## Workflow

1. **Kiểm tra đầu vào**:
   - Xác định sự tồn tại của 6 ảnh `assets/frame-1.png` đến `assets/frame-6.png` và tệp `data.json`.
   - Nếu thiếu ảnh hoặc metadata, thông báo lỗi hoặc yêu cầu chạy `storyboard-detail-generator` trước.
2. **Khởi tạo tệp HTML & CSS**:
   - Sao chép `style.css` từ `templates/storyboard/style.css` sang thư mục đích.
   - Điền tiêu đề Storyboard và thông tin Persona/Goal vào header của `storyboard.html`.
3. **Lắp ghép 6 Frame vào HTML**:
   - Đọc dữ liệu từng frame trong `data.json` (số thứ tự, `stepName`, `imagePath`, `story`).
   - Tạo 6 khối `<article class="storyboard-frame">` theo đúng bố cục 3 tầng (Header -> Figure -> Caption).
4. **Biên soạn tài liệu `storyboard.md`**:
   - Trình bày thông tin chung, truy vết nguồn gốc (Scenario Future, Evidence), bảng phân tích Context of Use, và bảng chi tiết 6 khung hình.
5. **Kết xuất ảnh PNG chất lượng cao**:
   - Sử dụng công cụ `tools/render-html-to-png.py` với lệnh:
     ```bash
     python tools/render-html-to-png.py deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/storyboard.html deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/storyboard.png --width 1600 --height 1700 --scale 1
     ```
6. **Kiểm tra chất lượng & Bàn giao**:
   - Kiểm tra ảnh `storyboard.png` để đảm bảo toàn bộ ô caption và viền khung ở hàng đáy hiển thị 100% trọn vẹn, không bị cắt mép.
