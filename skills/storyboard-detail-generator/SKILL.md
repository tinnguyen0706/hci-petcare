---
name: storyboard-detail-generator
description: Hướng dẫn chi tiết cách suy luận, kiến thức nền tảng Storytelling + Sketching, kỹ thuật soạn prompt phác thảo người que nét đơn và tạo asset chi tiết cho Storyboard.
---

# Kỹ năng Phân rã Kịch bản & Tạo Asset Storyboard (Storyboard Detail Generator)

## 1. Kiến thức nền tảng (Domain Knowledge)

### 1.1. Bản chất cốt lõi: Storyboard = Storytelling + Sketching
Trong môn học Tương tác Người–Máy (HCI), Storyboard không đơn thuần là vẽ tranh minh họa và cũng không phải là danh sách màn hình giao diện (Wireframe). Storyboard là công cụ giao tiếp trải nghiệm người dùng thông qua sự kết hợp của 2 thành tố:
- **Storytelling (Kể chuyện)**: Kể một câu chuyện hấp dẫn, lấy con người làm trung tâm, đặt trong ngữ cảnh sử dụng thực tế (*Context of Use*), có cấu trúc mạch lạc, thể hiện sự chuyển biến cảm xúc (*Emotion*) và làm nổi bật giá trị cốt lõi (*Value Proposition*) giải quyết nỗi đau của Persona.
- **Sketching (Phác thảo)**: Ngôn ngữ hình ảnh phác thảo tay nhanh, mộc mạc và tối giản (*Pure Classic Stick Figure* nét que đơn 1 nét, mắt chấm, miệng cong, khung UI phone mockup vẽ tay); tập trung truyền tải tương tác và ý tưởng thiết kế thay vì sa đà vào vẽ mỹ thuật hoạt hình phức tạp hay đổ bóng 3D.

### 1.2. 7 Yếu tố Ngữ cảnh sử dụng (Context of Use)
Mỗi khung hình phải giúp người xem nhận diện rõ:
1. **User**: Persona là ai, đặc điểm tâm lý.
2. **Task**: Đang thực hiện nhiệm vụ gì để đạt mục tiêu.
3. **Equipment**: Thiết bị tương tác (smartphone, máy POS...).
4. **Physical Environment**: Địa điểm thực tế (phòng trọ, bàn làm việc, quầy spa).
5. **Social Environment**: Hoàn cảnh xã hội (ở một mình, tương tác với lễ tân).
6. **Temporal Context**: Thời điểm, áp lực thời gian.
7. **Emotional Context**: Cảm xúc biến chuyển (lo lắng $\rightarrow$ an tâm $\rightarrow$ hài lòng).

---

## 2. Cách suy luận & Phân tích (Reasoning Strategy)

### 2.1. Phân rã đoạn văn Scenario thành 6 nhịp kịch bản có cao trào
1. **Nhịp 1 (Context + Trigger)**: Đặt nhân vật vào bối cảnh đời thực, phát sinh nhu cầu và thể hiện nỗi đau/lo lắng ban đầu qua bóng thoại suy nghĩ dạng đám mây.
2. **Nhịp 2 (Chuẩn bị / Mở app)**: Nhân vật mở ứng dụng, giao diện phóng to hiển thị thông tin hoặc hồ sơ cá nhân hóa giúp nhân vật giải tỏa một phần lo lắng.
3. **Nhịp 3 (Hành động cốt lõi)**: Nhân vật thực hiện tương tác cải tiến quan trọng nhất (chọn dịch vụ, chọn giờ trống, tự động đính kèm dặn dò) và nhận xác nhận tức thì trên UI mockup.
4. **Nhịp 4 (Tương tác thực địa)**: Nhân vật tương tác ngoài đời thực với cơ sở dịch vụ (quét mã QR lịch hẹn), hệ thống tại quầy đồng bộ dữ liệu liền mạch.
5. **Nhịp 5 (Hệ thống thể hiện giá trị)**: Nhân vật trải nghiệm quy trình dịch vụ an toàn hoặc theo dõi tiến độ từ xa trong khi làm việc, tâm lý thảnh thơi.
6. **Nhịp 6 (Kết quả + Cảm xúc)**: Nhân vật nhận kết quả hoàn hảo, ôm thú cưng khỏe đẹp, app lưu lịch sử điện tử và đánh giá 5 sao; cảm xúc hạnh phúc trọn vẹn.

### 2.2. Chiến lược bố cục không gian (Non-overlapping Layout)
- **Tách biệt nhân vật và UI**: Nhân vật người que đứng một bên (trái hoặc phải), khung màn hình điện thoại phóng to đặt ở bên còn lại. Tuyệt đối không để khung UI đè lấp thân hình hay khuôn mặt người que.
- **Vị trí bóng thoại**: Đặt bóng thoại ở khoảng trống phía trên đỉnh khung tranh, đuôi bóng thoại chỉ rõ về đầu người que, không đè lên chữ trong UI mockup.

---

## 3. Cách làm chi tiết & Kỹ thuật Soạn Prompt (Execution Guide)

### 3.1. Cấu trúc tệp `data.json`
Tệp `data.json` phải chứa đầy đủ metadata chuẩn hóa cho cả 6 frame:
```json
{
  "personaId": "persona-1",
  "goalId": "goal-1",
  "storyboardTitle": "TIÊU ĐỀ IN HOA CỦA STORYBOARD",
  "context": {
    "user": "Tên và vai trò Persona",
    "environment": "Môi trường diễn ra",
    "trigger": "Sự kiện kích hoạt nhu cầu"
  },
  "frames": [
    {
      "frameNumber": 1,
      "stepName": "Tiêu đề ngắn cho Header (dưới 8 từ)",
      "story": "Lời dẫn diễn biến câu chuyện 1-2 câu tiếng Việt cho Caption đáy.",
      "imagePath": "assets/frame-1.png",
      "imagePrompt": "Prompt tạo ảnh chi tiết...",
      "userAction": "Hành động của người dùng...",
      "systemFeedback": "Phản hồi của hệ thống...",
      "emotion": "Cảm xúc nhân vật",
      "valueRealized": "Giá trị giải quyết nỗi đau"
    }
  ]
}
```

### 3.2. Công thức soạn Prompt sinh ảnh Người que chuẩn
Mọi prompt sinh ảnh cho từng frame phải tuân thủ công thức cấu trúc:
$$\text{Prompt} = \text{[Style Bắt buộc]} + \text{[Bối cảnh & Hành động Người que]} + \text{[UI Phone Mockup / Bóng thoại]} + \text{[Negative Prompt]}$$

- **Style bắt buộc**: `Pure classic minimalist stick figure, single-line stick limbs and torso (| \ /), circle head with simple dot eyes and curved smile/worried mouth, simple line hair outline, hand-drawn black ink doodle on pure white paper, clean minimalist comic sketch, high contrast black lines, clean white background.`
- **UI Mockup Callout**: `Large floating hand-drawn rectangular smartphone frame with rounded corners beside the character, displaying clear minimalist wireframe UI in Vietnamese text: [Tên màn hình, danh mục, nút bấm...].`
- **Thought Bubble**: `Simple hand-drawn cloud thought bubble above character with text: "[Câu thoại ngắn]".`
- **Negative Prompt**: `no anime, no manga, no 3D, no body volume, no shaded clothing folds, no color, no photorealism, no grey gradients.`

---

## 4. Xác thực & Tiêu chí Kiểm tra (Validation)

Kiểm tra từng frame ảnh và dữ liệu theo checklist:
- [ ] **Người que nét que đơn**: Thân và tay chân là 1 nét đơn, không vẽ người có khối 3D hay nếp nhăn quần áo hoạt hình.
- [ ] **UI Mockup rõ chữ tiếng Việt**: Các chữ trong màn hình điện thoại phóng to dễ đọc, thể hiện đúng wireframe.
- [ ] **Bố cục thoáng đãng**: Nhân vật, UI mockup và bóng thoại tách biệt, không đè lấp lên nhau.
- [ ] **Dữ liệu `data.json` đầy đủ**: Không bị thiếu trường, `stepName` và `story` đúng tiếng Việt chuẩn.
