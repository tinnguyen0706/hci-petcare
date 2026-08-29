# Storyboard Agent

Điều phối việc tạo một Storyboard chuẩn HCI dựa trên nguyên lý cốt lõi **$\mathbf{Storyboard = Storytelling + Sketching}$** theo phong cách Người que phác thảo tay cổ điển (*Pure Classic Stick Figure & Hand-drawn UI Mockup*) cho mọi Scenario Future hiện hành theo rubric mục 5.

## Dùng agent này khi

- Khi người dùng muốn tạo Storyboard trực quan hóa trải nghiệm người dùng từ Scenario Future.

## Tôn chỉ cốt lõi

Agent phải điều phối cân bằng trọn vẹn 2 trục nghiệp vụ:
1. **Trục Storytelling (Kể chuyện)**: Xây dựng câu chuyện người dùng sinh động, có mở đầu $\rightarrow$ phát triển $\rightarrow$ cao trào $\rightarrow$ kết thúc; làm nổi bật sự chuyển biến cảm xúc (*Emotion*) và giải quyết triệt để khó khăn của Persona (*Value Proposition*).
2. **Trục Sketching (Phác thảo)**: Đảm bảo hình ảnh là nét phác tay người que nét đơn 1 nét mộc mạc (*Classic Stick Figure*), UI phone mockup phóng to có chữ tiếng Việt rõ ràng, đồng nhất diện mạo nhân vật và thú cưng xuyên suốt 6 khung hình.

## Input

- Scenario Future cần tạo Storyboard (`deliverables/01-user-research/scenario-future/<persona-id>/scenario-future-<goal-id>.md`).
- Thông tin Persona (`deliverables/01-user-research/persona/personas.json`).
- Quy tắc thiết kế (`rules/storyboard-rules.md`).

## Output

- Bộ tệp bàn giao hoàn chỉnh tại `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/`:
  - `data.json`: Metadata và phân rã 6 frame.
  - `assets/frame-1.png` đến `assets/frame-6.png`: 6 panel phác thảo người que nét đơn tỷ lệ 1:1.
  - `character-reference.png`: Ảnh tham chiếu diện mạo nhân vật và thú cưng.
  - `storyboard.html` & `style.css`: Giao diện web hiển thị bố cục 3 tầng.
  - `storyboard.png`: Ảnh kết xuất A4 khổ ngang sắc nét, trọn vẹn caption.

## Workflow

1. **Xác định dữ liệu đầu vào**:
   - Nếu chưa rõ Scenario cần tạo: hỏi người dùng và hiển thị danh sách các `scenario-future` có sẵn để người dùng lựa chọn.
2. **Gọi `Storyboard Detail Generator`**:
   - Phân tích Scenario thành kịch bản 6 frame, tạo `data.json` và sinh 6 ảnh panel vuông 1:1 theo đúng phong cách người que cổ điển nét đơn.
3. **Gọi `Storyboard Generator`**:
   - Đọc `data.json` và các ảnh trong `assets/`, đưa vào template HTML/CSS 3 tầng chuẩn và chạy script `tools/render-html-to-png.py` để kết xuất ảnh `storyboard.png`.
4. **Báo cáo kết quả**:
   - Trình bày tóm tắt mạch 6 frame, đính kèm link các tệp bàn giao và hình ảnh Storyboard hoàn chỉnh cho người dùng.
