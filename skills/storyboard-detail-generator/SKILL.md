---
name: storyboard-detail-generator
description: Phân tích Scenario Future thành kịch bản 6 frame chi tiết, tạo Character Reference, sinh từng ảnh panel riêng lẻ (tỷ lệ vuông 1:1) theo phong cách phác thảo siêu đơn giản (Ultra-Simple Stick Figure & UI Wire-sketch) với đa góc nhìn linh hoạt và tạo data.json chứa metadata từng bước (tên bước, cameraAngle, story cụ thể, UI mockup, action, feedback, emotion). Đóng vai trò tạo asset chi tiết trước khi chuyển sang storyboard-generator để ghép thành phẩm.
---

# Storyboard Detail Generator

## Mục đích

Chuyển đổi từng Scenario Future thành kịch bản phân rã 6 frame chi tiết, sinh **từng tệp hình ảnh độc lập (Frame 1 đến Frame 6)** theo phong cách **phác thảo siêu đơn giản (Ultra-Simple Sketching)** nét mực đen trên nền trắng với **đa dạng góc nhìn (Multi-Perspective)**, đồng thời tạo tệp **`data.json`** chuẩn hóa chứa đầy đủ tên bước (`stepName`), góc nhìn (`cameraAngle`) và diễn biến câu chuyện cụ thể (`story`) cho từng frame để `storyboard-generator` có thể tự động đọc và merge thành sản phẩm hoàn chỉnh.

## Tài liệu bắt buộc

Đọc trước khi thực hiện:

- `skills/storyboard-detail-generator/PLAN.md`
- `agents/storyboard-agent.md`
- `rules/storyboard-rules.md`
- `rules/domain-rules.md`
- `rules/style-rules.md`

## Nguyên tắc cốt lõi

### 1. Phong cách Phác thảo siêu đơn giản (Ultra-Simple & Low-Fidelity Sketching)
Storyboard trong HCI nhằm mục đích truyền đạt nhanh câu chuyện trải nghiệm, bối cảnh và cảm xúc tương tác; **tuyệt đối không sa đà vào vẽ đồ họa phức tạp hay thiết kế UI chi tiết dạng pixel-perfect**:
- **Nhân vật người que (Stick Figure)**: Thân que, đầu tròn, nét mực đen tối giản trên nền trắng giấy vẽ; biểu cảm mặt vẽ bằng vài nét chấm/nét cong cơ bản (lo âu, mỉm cười, ngạc nhiên).
- **Bối cảnh tối giản (Minimalist Background)**: Chỉ cần vài đường nét cơ bản gợi mở không gian (đường chân sàn, khối chữ nhật tượng trưng bàn làm việc, vòng tròn tượng trưng đồng hồ...).
- **Giao diện thiết bị siêu đơn giản (UI Wire-sketch)**: Khung điện thoại/màn hình chỉ phác thảo thô dạng low-fidelity — gồm khung chữ nhật, vài vạch ngang tượng trưng dòng chữ, khối ô vuông tượng trưng icon và 1 nút bấm hoặc nhãn trạng thái ngắn gọn (ví dụ: `[Đặt lịch]`, `[Xác nhận]`, `✔ Hoàn tất`). Không vẽ UI phức tạp nhiều chi tiết vụn vặt.

### 2. Thấu hiểu Ngữ cảnh sử dụng (Context of Use)
Mỗi khung hình sketch phải làm bật lên hoàn cảnh thực tế để giải thích cho các quyết định thiết kế:
- **Người dùng (User)**: Là ai, vai trò gì, đặc điểm tính cách/tâm lý.
- **Tác vụ (Task)**: Đang cố gắng thực hiện nhiệm vụ gì, mục tiêu cụ thể.
- **Thiết bị (Equipment / Device)**: Điện thoại thông minh, máy tính bảng, hay máy tính để bàn.
- **Môi trường vật lý (Physical Environment)**: Văn phòng làm việc, tại nhà, ngoài đường, trên xe bus, không gian ồn ào hay yên tĩnh.
- **Môi trường xã hội (Social Environment)**: Đang ở một mình, trong cuộc họp, bên cạnh bạn bè hay đồng nghiệp.
- **Thời gian & Cảm xúc (Temporal & Emotional Context)**: Gấp gáp, rảnh rỗi, lo âu, bối rối, an tâm hay phấn khởi.

### 3. Kỹ thuật Đa góc nhìn & Khung hình linh hoạt (Dynamic Multi-Perspective)
Linh hoạt thay đổi góc nhìn qua 6 frame để câu chuyện trực quan và lôi cuốn, tránh lặp lại góc nhìn đơn điệu:
- **Góc toàn cảnh (Wide / Establishing Shot)**: Bao quát không gian môi trường xung quanh và vị trí nhân vật (thường dùng ở Frame 1 để định hình bối cảnh).
- **Góc trung cảnh (Medium Shot)**: Thể hiện nhân vật đang thao tác trong bối cảnh thực tế từ thắt lưng trở lên.
- **Góc nhìn qua vai (Over-the-shoulder POV)**: Đặt góc nhìn phía sau vai nhân vật, thấy cả nhân vật và thiết bị đang cầm trên tay.
- **Góc nhìn thứ nhất / Cận cảnh thiết bị (First-Person Handheld POV)**: Nhìn trực diện vào bàn tay cầm điện thoại phác thảo nhanh màn hình và thao tác bấm/chạm.
- **Góc cận cảnh biểu cảm (Close-Up Shot)**: Tập trung vào nét mặt người que lột tả rõ cảm xúc (lo lắng, nhẹ nhõm, vui mừng).
- **Góc nhìn ngang / Nghiêng (Side Profile / 3/4 View)**: Thể hiện nhân vật đang di chuyển, bàn giao hoặc tương tác với người khác.
- **Góc nhìn từ trên xuống (Top-down View)**: Nhìn xuống mặt bàn làm việc hoặc không gian tương tác.
- **Khung UI Callout phác thảo**: Khung phụ phác thảo nhanh màn hình ứng dụng đặt cạnh nhân vật.

### 4. Kỹ thuật trực quan hóa hành động & cảm xúc
- **Ký hiệu hành động (Action Lines & Symbols)**: Mũi tên chỉ hướng di chuyển, đường chỉ thao tác bấm/chạm (`tap`, `swipe`), ký hiệu rung/chuông báo `((🔔))`, tia quét scan mã.
- **Bóng thoại (Bubbles)**:
  - *Bóng thoại mây (Thought Bubble)*: Thể hiện suy nghĩ nội tâm, nhu cầu bức thiết hoặc tâm trạng lo lắng.
  - *Bóng thoại nhọn (Speech Bubble)*: Thể hiện câu nói, hội thoại trực tiếp.

### 5. Nguyên tắc bố cục: Phân tầng & Tuyệt đối không che khuất nhau (Non-overlapping Layout)
Dù sketch siêu đơn giản, các thành phần trong từng frame phải rõ ràng, thoáng đãng:
- **Phân tách không gian (Visual Breathing Room)**: Nhân vật và khung UI phác thảo chia sẻ không gian cân đối (ví dụ: nhân vật một bên, UI một bên). **Tuyệt đối không để khung thiết bị đè lấp thân người hoặc che khuất khuôn mặt của nhân vật**.
- **Vị trí bóng thoại**: Đặt ở khoảng trống phía trên (không gian âm), có đuôi chỉ rõ về nhân vật; **không đè lên chữ trong UI hay các chi tiết chính**.
- **Độ rõ nét văn bản**: Chữ trong UI và bóng thoại phải nằm trọn trong vùng nền trắng riêng biệt, nét chữ phác thảo rõ ràng, không bị các nét vẽ khác chồng chéo.

---

## Quy trình thực hiện

1. **Phân tích Scenario Future**:
   - Xác định Context of Use, pain point, hành động người dùng, phản hồi hệ thống và giá trị mang lại (Value Proposition).
   - Chia câu chuyện theo mạch 6 nhịp: *Beginning (Frame 1: Bối cảnh & Trigger) → Story Development (Frame 2-3: Tiếp cận & Thao tác) → Climax (Frame 4-5: Tương tác & Giá trị cốt lõi) → End (Frame 6: Kết quả & Cảm xúc)*.
2. **Lựa chọn góc nhìn & soạn kịch bản chi tiết**:
   - Chọn góc nhìn (`cameraAngle`) phù hợp cho từng frame.
   - Xác định tên bước (`stepName`) ngắn gọn, súc tích cho Header từng frame.
   - Viết diễn biến câu chuyện cụ thể (`story`) thành caption 1–2 câu tiếng Việt dễ hiểu.
   - Soạn Prompt tạo ảnh siêu đơn giản (Ultra-Simple Sketch), chỉ rõ góc nhìn, bố cục phân tách thoáng, bối cảnh thô, UI wire-sketch và bóng thoại.
   - Lưu toàn bộ metadata vào tệp `data.json`.
3. **Tạo / Tái sử dụng Character Reference**:
   - Nếu chưa có `deliverables/02-interaction-design/storyboard/<persona-id>/character-reference.png`, tạo ảnh mẫu người que nét mực đen trên nền trắng để giữ tính nhất quán nhận diện.
4. **Sinh từng ảnh Frame riêng biệt (tỷ lệ 1:1)**:
   - Sinh lần lượt từ `frame-1.png` đến `frame-6.png` theo phong cách phác thảo siêu tối giản đã định nghĩa trong `data.json`.
   - Lưu vào thư mục `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/assets/`.
5. **Kiểm tra chất lượng từng ảnh**:
   - Xem từng file ảnh `frame-*.png`: kiểm tra tính tối giản (đúng chất sketch nhanh), góc nhìn đa dạng, các thành phần không bị che khuất nhau, chữ trong UI wire-sketch và bóng thoại rõ ràng.
   - Nếu có frame bị lỗi hoặc vẽ quá phức tạp, sinh lại riêng frame đó với prompt tối giản hơn.

## Cấu trúc dữ liệu `data.json`

Mỗi deliverable Storyboard chứa file `data.json` có cấu trúc:

```json
{
  "personaId": "<persona-id>",
  "goalId": "<goal-id>",
  "storyboardTitle": "TIÊU ĐỀ CHÍNH CỦA STORYBOARD",
  "context": {
    "user": "Tên và vai trò nhân vật",
    "environment": "Môi trường vật lý & xã hội diễn ra",
    "trigger": "Sự kiện kích hoạt nhu cầu"
  },
  "frames": [
    {
      "frameNumber": 1,
      "stepName": "Tên bước 1",
      "cameraAngle": "Wide Establishing Shot | Medium Shot | Over-the-shoulder POV | First-Person Handheld | Close-Up | Side View | Top-down View",
      "story": "Diễn biến câu chuyện cụ thể 1-2 câu tiếng Việt (caption đáy).",
      "imagePath": "assets/frame-1.png",
      "imagePrompt": "Ultra-simple hand-drawn black ink comic sketch on clean white paper background, minimalist stick figure. [Camera Angle]. [Mô tả nhân vật người que tối giản và hành động]. [Bối cảnh phác thảo thô bằng vài nét cơ bản]. [UI Wire-sketch đơn giản dạng khung chữ nhật/nhãn trạng thái / Bóng thoại nếu có]. [Bố cục thoáng đãng, các thành phần tách rời không che khuất nhau].",
      "userAction": "Hành động của người dùng...",
      "systemFeedback": "Phản hồi của hệ thống (nếu có)...",
      "emotion": "Cảm xúc nhân vật ở bước này",
      "valueRealized": "Giá trị đạt được hoặc vấn đề được giải quyết"
    }
  ]
}
```

## Output bàn giao

Tại `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/`:

- `data.json` (chứa toàn bộ tên bước, góc nhìn, câu chuyện 6 frame và metadata)
- `assets/frame-1.png` đến `assets/frame-6.png` (ảnh vuông tỷ lệ 1:1, phác thảo siêu tối giản)
- `character-reference.png` (lưu tại thư mục cha `<persona-id>/`)

## Tiêu chí hoàn thành

- Đầy đủ file `data.json` với đúng 6 frame, chứa `stepName`, `cameraAngle` và `story` rõ ràng, không bị thiếu trường.
- Đủ 6 ảnh panel vuông 1:1 chất lượng cao trong thư mục `assets/`, đúng phong cách phác thảo siêu đơn giản nét mực đen trên nền trắng.
- Giao diện thiết bị và bối cảnh được vẽ dạng **low-fidelity wire-sketch tối giản**, không cầu kỳ hay rườm rà.
- **Đa dạng góc nhìn (Multi-Perspective)** và **Bố cục thoáng không che khuất nhau**.
- Sẵn sàng 100% để `storyboard-generator` đọc `data.json` và render HTML/PNG mà không cần suy đoán thêm dữ liệu.
