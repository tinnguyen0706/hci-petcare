---
name: storyboard-generator
description: Tổng hợp Storyboard hoàn chỉnh (HTML, CSS, Markdown và PNG) từ 6 ảnh panel vuông 1:1 và tệp dữ liệu data.json có sẵn.
---

## Purpose

Tổng hợp Storyboard hoàn chỉnh (gồm `storyboard.html`, `style.css`, `storyboard.md`, `storyboard.png`) từ 6 bức ảnh đơn lẻ có sẵn (`assets/frame-1.png` đến `assets/frame-6.png`) và tệp metadata `data.json`.

## Domain knowledge

Storyboard là công cụ quan trọng trong thiết kế trải nghiệm người dùng (UX/HCI). Nó giúp minh họa hành trình 6 bước tương tác của người dùng với sản phẩm/dịch vụ qua hình vẽ phác thảo tay và chú thích:
- Trực quan hóa kịch bản Scenario Future theo mạch truyện 6 nhịp (Beginning → Development → Climax → End).
- Bố cục 3 tầng rõ ràng cho mỗi khung tranh: Header (ô số + tiêu đề), Khung hình (ảnh phác thảo người que 1:1), Caption (mô tả 1–2 câu ở đáy).
- Kết xuất tệp ảnh tổng quan chất lượng cao bằng `tools/render-html-to-png.py`.

## Validation

- Đầy đủ 6 hình ảnh theo đúng thứ tự (`frame-1.png` đến `frame-6.png`), sắp xếp theo lưới 3 cột × 2 hàng (từ trái sang phải, từ trên xuống dưới).
- Tiêu đề (`stepName`) và Caption (`story`) của từng hình ảnh phải được điền đầy đủ, rõ ràng và khớp chính xác với nội dung được ghi trong `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/data.json`.
- Tệp `storyboard.png` được kết xuất đầy đủ kích thước `--width 1600 --height 1700 --scale 1`, không bị mất viền hay cắt cụt caption đáy.
