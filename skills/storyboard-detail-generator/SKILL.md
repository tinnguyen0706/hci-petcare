---
name: storyboard-detail-generator
description: Hướng dẫn chi tiết cách suy luận, kiến thức nền tảng Storytelling + Sketching, kỹ thuật góc nhìn (POV/Third-person), hiệu ứng chuyển động, mũi tên mô tả, tương tác vật thể và soạn prompt phác thảo người que cho Storyboard.
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

### 1.3. Kỹ thuật biểu diễn thị giác & Ngôn ngữ Sketching (Visual Language)
Để minh họa rõ ràng các tương tác động và bối cảnh sử dụng, kịch bản hình ảnh sử dụng các kỹ thuật phác thảo chuyên biệt:
1. **Góc nhìn (Viewpoint / Camera Perspective)**:
   - **Góc nhìn thứ ba (Third-Person View / Medium-Wide Shot)**: Cho phép quan sát toàn cảnh nhân vật người que, môi trường xung quanh, thiết bị và các đối tượng tương tác (ví dụ: nhân viên quầy, thú cưng). Thường dùng ở nhịp thiết lập bối cảnh, giao tiếp đời thực hoặc kết quả câu chuyện.
   - **Góc nhìn thứ nhất / Cận cảnh (POV - Point-of-View / Close-Up Shot)**: Thể hiện trực tiếp góc nhìn từ đôi mắt người dùng nhìn vào màn hình điện thoại hoặc thao tác tay (ví dụ: tay người que đang bấm nút trên app, quét mã QR tại quầy). Thường dùng khi muốn nhấn mạnh vào trải nghiệm tương tác UI/UX cốt lõi.
2. **Hiệu ứng chuyển động & Mũi tên mô tả (Motion Lines & Action Arrows)**:
   - **Mũi tên chuyển động (Directional Arrows)**: Các mũi tên phác thảo nét vẽ tay (nét đứt hoặc nét liền) chỉ rõ hướng di chuyển của nhân vật (đi tới quầy, ngoảnh đầu), hướng di chuyển vật thể, hoặc hướng thao tác trên giao diện (vuốt màn hình, kéo thả thanh trượt, ấn nút tap).
   - **Đường sọc chuyển động (Speed / Action Dash Lines)**: Các vệt gạch ngắn song song minh họa chuyển động nhanh, cử động tay hoặc sự rung chuyển/kích hoạt của thiết bị.
3. **Hiệu ứng cầm, nhấc & Tương tác vật thể (Object Handling & Physical Interaction)**:
   - **Tương tác vật thể (Holding / Lifting / Carrying)**: Nét phác bàn tay người que nắm/ôm/nhấc các vật thể thực tế (lồng vận chuyển thú cưng, điện thoại, dây dắt, chai thuốc, hoá đơn).
   - **Vùng nhấn tương tác (Focus Highlight / Touch Indicator)**: Vệt phác tia sáng nhỏ hoặc vòng tròn đứt nét tại điểm tiếp xúc giữa ngón tay nhân vật và nút bấm UI hoặc vật thể được nhấc lên.

---

## 2. Cách suy luận & Phân tích (Reasoning Strategy)

### 2.1. Phân rã đoạn văn Scenario thành 6 nhịp kịch bản có cao trào
1. **Nhịp 1 (Context + Trigger)**: Đặt nhân vật vào bối cảnh đời thực (Góc nhìn thứ 3), phát sinh nhu cầu và thể hiện nỗi đau/lo lắng ban đầu qua bóng thoại suy nghĩ dạng đám mây.
2. **Nhịp 2 (Chuẩn bị / Mở app)**: Nhân vật mở ứng dụng, giao diện phóng to hoặc góc nhìn POV hiển thị thông tin / hồ sơ cá nhân hóa giúp giải tỏa một phần lo lắng.
3. **Nhịp 3 (Hành động cốt lõi)**: Nhân vật thực hiện tương tác cải tiến quan trọng nhất (chọn dịch vụ, chọn giờ trống, đính kèm dặn dò) với hiệu ứng mũi tên bấm nút / vuốt màn hình và nhận xác nhận tức thì trên UI mockup.
4. **Nhịp 4 (Tương tác thực địa)**: Nhân vật tương tác ngoài đời thực với cơ sở (nhấc lồng thú cưng, quét mã QR lịch hẹn bằng góc nhìn POV hoặc 3rd-person), hệ thống tại quầy đồng bộ dữ liệu liền mạch.
5. **Nhịp 5 (Hệ thống thể hiện giá trị)**: Nhân vật trải nghiệm quy trình dịch vụ an toàn hoặc theo dõi tiến độ từ xa trong khi làm việc, tâm lý thảnh thơi.
6. **Nhịp 6 (Kết quả + Cảm xúc)**: Nhân vật nhận kết quả hoàn hảo, bế/ôm thú cưng khỏe đẹp, app lưu lịch sử điện tử và đánh giá 5 sao; cảm xúc hạnh phúc trọn vẹn.

### 2.2. Chiến lược bố cục không gian & Lựa chọn góc nhìn (Non-overlapping Layout & Perspective)
- **Lựa chọn Góc nhìn phù hợp**:
  - Dùng **Third-Person Shot** khi cần thể hiện cả nhân vật + không gian môi trường xung quanh + tương tác xã hội.
  - Dùng **POV Shot** khi tập trung vào thao tác tay và chi tiết nội dung giao diện màn hình.
- **Tách biệt nhân vật, chi tiết chuyển động và UI**: Nhân vật người que đứng một bên (trái hoặc phải), khung màn hình điện thoại phóng to đặt ở bên còn lại. Mũi tên chuyển động và vệt hành động phải có khoảng hở rõ ràng, không đè lấp nét mặt hay chữ trong UI.
- **Vị trí bóng thoại & Mũi tên**: Đặt bóng thoại ở khoảng trống phía trên đỉnh khung tranh, đuôi bóng thoại chỉ rõ về đầu người que. Mũi tên chỉ hướng tương tác bắt đầu từ tay/vật thể và hướng đến mục tiêu hành động.

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

### 3.2. Công thức soạn Prompt sinh ảnh Người que chuẩn (bao gồm Góc nhìn & Hiệu ứng)
Mọi prompt sinh ảnh cho từng frame phải tuân thủ công thức cấu trúc:
$$\text{Prompt} = \text{[Style Bắt buộc]} + \text{[Góc nhìn & Bối cảnh & Hành động]} + \text{[Hiệu ứng Chuyển động / Mũi tên / Tương tác]} + \text{[UI Phone Mockup / Bóng thoại]} + \text{[Negative Prompt]}$$

- **Style bắt buộc**: `Pure classic minimalist stick figure, single-line stick limbs and torso (| \ /), circle head with simple dot eyes and curved smile/worried mouth, simple line hair outline, hand-drawn black ink doodle on pure white paper, clean minimalist comic sketch, high contrast black lines, clean white background.`
- **Khai báo Góc nhìn (Perspective)**:
  - *Góc nhìn thứ 3*: `Third-person medium shot showing stick figure character...`
  - *Góc nhìn POV*: `First-person POV perspective shot looking down at stick hands holding...`
- **Mô tả Tương tác & Hiệu ứng Chuyển động (Action & Motion Effects)**:
  - *Cầm/nhấc vật thể*: `stick figure hands lifting/holding a pet carrier box / smartphone with simple hand-drawn holding gesture.`
  - *Mũi tên chuyển động*: `simple hand-drawn directional arrows (dashed or solid line) illustrating movement path / tap action / swipe gesture.`
  - *Đường nét hành động*: `subtle hand-drawn action dash lines around moving hands/object showing physical movement.`
- **UI Mockup Callout**: `Large floating hand-drawn rectangular smartphone frame with rounded corners beside the character, displaying clear minimalist wireframe UI in Vietnamese text: [Tên màn hình, danh mục, nút bấm...].`
- **Thought Bubble**: `Simple hand-drawn cloud thought bubble above character with text: "[Câu thoại ngắn]".`
- **Negative Prompt**: `no anime, no manga, no 3D, no body volume, no shaded clothing folds, no color, no photorealism, no grey gradients.`

---

## 4. Xác thực & Tiêu chí Kiểm tra (Validation)

Kiểm tra từng frame ảnh và dữ liệu theo checklist:
- [ ] **Người que nét que đơn**: Thân và tay chân là 1 nét đơn, không vẽ người có khối 3D hay nếp nhăn quần áo hoạt hình.
- [ ] **Góc nhìn (POV / 3rd-person) chuẩn xác**: Góc nhìn thể hiện đúng ý đồ tương tác (POV cho thao tác UI/quét QR, 3rd-person cho bối cảnh/giao tiếp).
- [ ] **Hiệu ứng chuyển động & Mũi tên rõ ràng**: Mũi tên hướng dẫn và vệt sọc hành động phác thảo nét đơn sạch sẽ, mô tả đúng hướng di chuyển/thao tác.
- [ ] **Tương tác vật thể (Cầm/nhấc) tự nhiên**: Hành động cầm điện thoại, nhấc lồng thú cưng hoặc vật thể thể hiện rõ qua nét vẽ đơn giản.
- [ ] **UI Mockup rõ chữ tiếng Việt**: Các chữ trong màn hình điện thoại phóng to dễ đọc, thể hiện đúng wireframe.
- [ ] **Bố cục thoáng đãng**: Nhân vật, chi tiết hiệu ứng, UI mockup và bóng thoại tách biệt, không đè lấp lên nhau.
- [ ] **Dữ liệu `data.json` đầy đủ**: Không bị thiếu trường, `stepName` và `story` đúng tiếng Việt chuẩn.
