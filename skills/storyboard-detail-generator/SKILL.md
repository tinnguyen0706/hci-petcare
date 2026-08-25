---
name: storyboard-detail-generator
description: Phân tích Scenario Future thành kịch bản 6 frame chi tiết, tạo Character Reference, sinh từng ảnh panel riêng lẻ (tỷ lệ vuông 1:1) và tạo data.json chứa metadata từng bước (tên bước, story cụ thể, UI mockup, action, feedback, emotion). Đóng vai trò tạo asset chi tiết trước khi chuyển sang storyboard-generator để ghép thành phẩm.
---

# Storyboard Detail Generator

## Mục đích

Chuyển đổi từng Scenario Future thành kịch bản phân rã 6 frame chi tiết, sinh **từng tệp hình ảnh độc lập (Frame 1 đến Frame 6)** với chất lượng cao theo phong cách nét vẽ người que truyện tranh nét mực đen, đồng thời tạo tệp **`data.json`** chuẩn hóa chứa đầy đủ tên bước và story cụ thể cho từng frame để `storyboard-generator` có thể tự động đọc và merge thành sản phẩm hoàn chỉnh.

## Tài liệu bắt buộc

Đọc trước khi thực hiện:

- [PLAN.md](PLAN.md)
- `agents/storyboard-agent.md`
- `rules/storyboard-rules.md`
- `rules/domain-rules.md`
- `rules/style-rules.md`
- `references/course-materials/notes/07-storyboard.md`

## Nguyên tắc cốt lõi

- **Mỗi Scenario tạo đúng 6 frame độc lập**: Tỷ lệ vuông 1:1 (`assets/frame-1.png` đến `assets/frame-6.png`).
- **Tạo tệp `data.json` chuẩn hóa**: Mỗi thư mục Persona–Goal bắt buộc có `data.json` chứa tên từng bước (`stepName`), diễn biến câu chuyện (`story`/caption), hành động người dùng, phản hồi hệ thống và đường dẫn ảnh.
- **Phong cách nét vẽ**: Người que phác thảo tay truyện tranh (*Hand-drawn Comic Sketch / Classic Stick Figure*), nét mực đen tự nhiên trên nền trắng giấy vẽ, tối giản, giàu biểu cảm.
- **Tính nhất quán nhân vật**: Luôn đối chiếu và bám sát `character-reference.png` của Persona để giữ đúng kiểu tóc, phụ kiện và đặc trưng của thú cưng qua cả 6 frame.
- **Giao diện phóng to (UI Mockup Callout)**: Ở các frame tương tác số, vẽ màn hình điện thoại/tablet phóng to có các thành phần UI tiếng Việt rõ ràng (ô tìm kiếm, chọn dịch vụ, xác nhận, hóa đơn...).
- **Bóng thoại suy nghĩ (Thought Bubbles)**: Dùng bóng thoại mây/hội thoại ngắn gọn để thể hiện nhu cầu tức thời và cảm xúc của nhân vật.

## Quy trình thực hiện

1. **Phân tích Scenario Future**:
   - Xác định Context of Use, pain point, hành động người dùng, phản hồi hệ thống và giá trị mang lại (Value Proposition).
   - Chia câu chuyện theo mạch: *Beginning (Frame 1) → Story Development (Frame 2-3) → Climax (Frame 4-5) → End (Frame 6)*.
2. **Soạn kịch bản chi tiết & tạo `data.json`**:
   - Xác định tên bước (`stepName`) ngắn gọn, súc tích cho Header từng frame.
   - Viết diễn biến câu chuyện cụ thể (`story`) thành caption 1–2 câu tiếng Việt dễ hiểu.
   - Ghi nhận chi tiết User Action, System Feedback, Emotion, Value Realized và Prompt tạo ảnh vào `data.json`.
3. **Tạo / Tái sử dụng Character Reference**:
   - Nếu chưa có `deliverables/02-interaction-design/storyboard/<persona-id>/character-reference.png`, tạo ảnh mẫu nhân vật + thú cưng nét mực đen trên nền trắng.
4. **Sinh từng ảnh Frame riêng biệt (tỷ lệ 1:1)**:
   - Sinh lần lượt từ `frame-1.png` đến `frame-6.png` theo prompt đã định nghĩa trong `data.json`.
   - Lưu vào thư mục `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/assets/`.
5. **Kiểm tra chất lượng từng ảnh**:
   - Xem từng file ảnh `frame-*.png`: kiểm tra tính nhất quán nhân vật, độ rõ của UI Mockup, tính hợp lý của bóng thoại.
   - Nếu có frame bị lỗi hoặc méo mó, sinh lại riêng frame đó cho đến khi đạt chuẩn.

## Cấu trúc dữ liệu `data.json`

Mỗi deliverable Storyboard chứa file `data.json` có cấu trúc:

```json
{
  "personaId": "persona-01",
  "goalId": "goal-01",
  "storyboardTitle": "TIÊU ĐỀ CHÍNH CỦA STORYBOARD",
  "context": {
    "user": "Tên và vai trò nhân vật",
    "environment": "Môi trường, thời điểm diễn ra",
    "trigger": "Sự kiện kích hoạt nhu cầu"
  },
  "frames": [
    {
      "frameNumber": 1,
      "stepName": "Tên bước 1 (Ví dụ: Phát sinh nhu cầu & Bận rộn)",
      "story": "Diễn biến câu chuyện cụ thể 1-2 câu tiếng Việt (caption đáy).",
      "imagePath": "assets/frame-1.png",
      "imagePrompt": "Prompt tạo ảnh chi tiết...",
      "userAction": "Hành động của người dùng...",
      "systemFeedback": "Phản hồi của hệ thống (nếu có)...",
      "emotion": "Lo âu / Bận rộn",
      "valueRealized": "Nhận diện vấn đề cần giải quyết"
    }
  ]
}
```

## Output bàn giao

Tại `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/`:

- `data.json` (chứa toàn bộ tên bước, câu chuyện 6 frame và metadata)
- `assets/frame-1.png`
- `assets/frame-2.png`
- `assets/frame-3.png`
- `assets/frame-4.png`
- `assets/frame-5.png`
- `assets/frame-6.png`

Character Reference dùng chung lưu tại:
`deliverables/02-interaction-design/storyboard/<persona-id>/character-reference.png`

## Tiêu chí hoàn thành

- Đầy đủ file `data.json` với đúng 6 frame, chứa `stepName` và `story` rõ ràng, không bị thiếu trường.
- Đủ 6 ảnh panel vuông 1:1 chất lượng cao trong thư mục `assets/`, nét vẽ đồng nhất.
- Nhân vật và thú cưng khớp với Character Reference.
- Các frame tương tác công nghệ thể hiện rõ UI mockup có chữ tiếng Việt dễ hiểu.
- Sẵn sàng 100% để `storyboard-generator` đọc `data.json` và render HTML/PNG mà không cần suy đoán thêm dữ liệu.
