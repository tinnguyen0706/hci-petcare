# Trình tạo storyboard từ những bức ảnh đơn lẻ có sẵn

## Dùng skill này khi

Người dùng muốn tạo 1 storyboard dựa trên tập những ảnh đơn lẻ có sẵn.

## Input

- Các ảnh được chỉ định trong `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/assets/`
- Dữ liệu của từng ảnh trong `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/data.json`

## Output

- Một storyboard hoàn chỉnh đã được tạo từ những ảnh trong `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/assets/`

## Template

- Tuân thủ template trong `templates/storyboard/`

## Workflow

1. Xác định những hình ảnh để tạo nên storyboard
    1.1. Nếu nơi mà người dùng chỉ định không có ảnh nào thì thông báo cho người dùng và yêu cầu họ cập nhật ảnh tại đường dẫn tương ứng.
2. Xác định thứ tự của từng ảnh
3. Load template từ `templates/storyboard/`
4. Đưa những hình ảnh vào template theo thứ tự từ trái sang phải
5. Dưới mỗi ảnh, tiến hành điền chú thích về nội dung của ảnh.
6. Dùng tools `tools/render-html-to-png.py` để tạo ra bức ảnh cuối cùng hoàn chỉnh của storyboard, kích thước ảnh sẽ là kích thước của 1 trang A4 khổ ngang.
7. Lưu storyboard cuối cùng vào `deliverables/02-interaction-design/storyboard/`.
