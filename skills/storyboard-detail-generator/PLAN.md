# Kế hoạch thực thi Storyboard Detail Generator

## Input

- `deliverables/01-user-research/persona/personas.json`
- `deliverables/01-user-research/value-proposition/value-proposition.json`
- `deliverables/01-user-research/scenario-current/`
- `deliverables/01-user-research/scenario-future/`
- `rules/storyboard-rules.md`
- `rules/domain-rules.md`
- `rules/style-rules.md`
- `rules/quality-rules.md`
- `references/course-materials/notes/07-storyboard.md`

## Output

Với mỗi Persona–Goal, tạo trong thư mục `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/`:

- `data.json` (chứa tên từng bước, story cụ thể và metadata của 6 frame)
- `assets/frame-1.png`
- `assets/frame-2.png`
- `assets/frame-3.png`
- `assets/frame-4.png`
- `assets/frame-5.png`
- `assets/frame-6.png`

Character Reference dùng chung được lưu tại:
`deliverables/02-interaction-design/storyboard/<persona-id>/character-reference.png`

## Workflow

### 1. Kiểm tra dependency
- Đảm bảo các Scenario Future, Persona, Value Proposition đã sẵn sàng.
- Đảm bảo công cụ tạo ảnh (ImageGen) và công cụ xem ảnh hoạt động tốt.

### 2. Phát hiện phạm vi
- Liệt kê các file `scenario-future-*.md` cần xử lý.
- Trích xuất `persona-id`, `goal-id`, Persona info, Current pain points và Value Proposition đối ứng.

### 3. Phân rã kịch bản 6 Frame chi tiết
Với mỗi Scenario, cấu trúc câu chuyện thành đúng 6 frame theo nhịp chuẩn:
- **Frame 1 (Context + Trigger)**: 
  - *Tên bước (`stepName`)*: Bối cảnh & Phát sinh nhu cầu
  - *Story*: Diễn tả tình huống bận rộn/khó khăn của nhân vật cùng thú cưng; bóng thoại thể hiện lo lắng.
- **Frame 2 (Chuẩn bị / Mở ứng dụng)**:
  - *Tên bước (`stepName`)*: Mở ứng dụng & Khám phá dịch vụ
  - *Story*: Nhân vật truy cập ứng dụng; màn hình điện thoại phóng to thể hiện danh sách dịch vụ kèm giá rõ ràng.
- **Frame 3 (Hành động cốt lõi)**:
  - *Tên bước (`stepName`)*: Đặt lịch & Đính kèm ghi chú đặc biệt
  - *Story*: Nhân vật chọn khung giờ trống và tự động đính kèm tiền sử dị ứng/thuốc; UI mockup phóng to nút xác nhận.
- **Frame 4 (Tương tác thực tế / Giao thú cưng)**:
  - *Tên bước (`stepName`)*: Xác nhận tức thì & Giao thú cưng
  - *Story*: Nhận thông báo xác nhận ngay trên app, bàn giao thú cưng tại cơ sở mà không cần chờ đợi; tâm lý an tâm.
- **Frame 5 (Hệ thống thể hiện giá trị / Theo dõi tiến độ)**:
  - *Tên bước (`stepName`)*: Theo dõi tiến độ từ xa theo thời gian thực
  - *Story*: Màn hình điện thoại phóng to hiển thị Timeline 4 mốc (*Đã nhận ➔ Đang chăm sóc ➔ Hoàn tất ➔ Chờ đón*); nhân vật yên tâm làm việc.
- **Frame 6 (Kết quả + Emotion)**:
  - *Tên bước (`stepName`)*: Đón thú cưng & Nhận lịch sử cá nhân hóa
  - *Story*: Nhân vật đón thú cưng vui vẻ, khỏe đẹp; xem lại hóa đơn và ghi chú chăm sóc sau lượt; nụ cười hài lòng.

### 4. Tạo tệp `data.json`
- Khởi tạo tệp `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/data.json`.
- Điền đầy đủ thông tin:
  ```json
  {
    "personaId": "<persona-id>",
    "goalId": "<goal-id>",
    "storyboardTitle": "THEO DÕI & ĐẶT LỊCH CHĂM SÓC THÚ CƯNG TIỆN LỢI",
    "context": {
      "user": "Chủ nuôi bận rộn",
      "environment": "Văn phòng làm việc / Tại nhà",
      "trigger": "Thú cưng đến kỳ cắt tỉa nhưng chủ nuôi không có nhiều thời gian"
    },
    "frames": [
      {
        "frameNumber": 1,
        "stepName": "Bối cảnh & Phát sinh nhu cầu",
        "story": "Chị Lan bận rộn họp tại văn phòng, lo lắng vì cún cưng Miu đến lịch tiêm phòng và cắt tỉa nhưng chưa kịp đặt chỗ.",
        "imagePath": "assets/frame-1.png",
        "imagePrompt": "Hand-drawn black ink comic sketch stick figure sitting at office desk with laptop, thought bubble with sad fluffy dog, worried expression, white paper background, minimalist.",
        "userAction": "Nhớ ra lịch chăm sóc thú cưng khi đang làm việc",
        "systemFeedback": "",
        "emotion": "Lo lắng, bận rộn",
        "valueRealized": "Nhận diện nhu cầu cần đặt lịch nhanh chóng"
      }
      /* ... tiếp tục cho đủ 6 frame ... */
    ]
  }
  ```

### 5. Tạo Character Reference
- Nếu Persona chưa có Character Reference: tạo ảnh `character-reference.png` (người que nét mực đen + phụ kiện đặc trưng + thú cưng).
- Lưu tại `deliverables/02-interaction-design/storyboard/<persona-id>/character-reference.png`.

### 6. Sinh từng ảnh Frame riêng lẻ (Frame 1 đến 6)
- Với từng frame $i \in \{1, 2, 3, 4, 5, 6\}$:
  - Sử dụng `imagePrompt` đã ghi trong `data.json`, bổ sung chỉ dẫn nét vẽ bám sát `character-reference.png`.
  - Tỷ lệ khung hình: **1:1 (Square)**.
  - Phong cách: **Hand-drawn black ink comic sketch on white paper background**.
  - Lưu tệp: `assets/frame-{i}.png`.

### 7. Kiểm tra trực quan & Hiệu chỉnh cục bộ
- Xem từng ảnh `assets/frame-*.png`:
  - Kiểm tra tính nhất quán diện mạo người và thú cưng.
  - Kiểm tra độ sắc nét của chữ tiếng Việt trong UI mockup phóng to.
  - Kiểm tra bóng thoại và cảm xúc nhân vật.
- Nếu có frame chưa đạt, tái tạo riêng frame đó với prompt được tinh chỉnh mà không cần sinh lại các frame khác.

### 8. Bàn giao cho `storyboard-generator`
- Kiểm tra lại thư mục đã có đầy đủ:
  - `data.json`
  - `assets/frame-1.png` đến `assets/frame-6.png`
  - `character-reference.png`
- Bàn giao để `storyboard-generator` đọc `data.json` và tiến hành merge vào `storyboard.html`, `style.css`, `storyboard.md` và render ra `storyboard.png`.

## Điều kiện dừng
Dừng và báo cáo nếu:
- Thiếu thông tin Persona hoặc Scenario Future.
- Công cụ sinh ảnh gặp lỗi kết nối hoặc không thể lưu asset cục bộ.
- Dữ liệu trong `data.json` bị thiếu trường bắt buộc (`stepName`, `story`, `imagePath`).
- Tiếp tục sẽ dẫn đến suy đoán dữ liệu ngoài phạm vi nghiên cứu người dùng.
