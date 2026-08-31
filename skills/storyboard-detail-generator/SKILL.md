---
name: storyboard-detail-generator
description: Hướng dẫn chi tiết cách suy luận, kiến thức nền tảng Storytelling + Sketching, kỹ thuật góc nhìn (POV/Third-person), hiệu ứng chuyển động, mũi tên mô tả, tương tác vật thể và soạn prompt Expressive Stick-figure UI Storyboard.
---

# Kỹ năng Phân rã Kịch bản & Tạo Asset Storyboard (Storyboard Detail Generator)

## 1. Kiến thức nền tảng (Domain Knowledge)

### 1.1. Bản chất cốt lõi: Storyboard = Storytelling + Sketching
Trong môn học Tương tác Người–Máy (HCI), Storyboard không đơn thuần là vẽ tranh minh họa và cũng không phải là danh sách màn hình giao diện (Wireframe). Storyboard là công cụ giao tiếp trải nghiệm người dùng thông qua sự kết hợp của 2 thành tố:
- **Storytelling (Kể chuyện)**: Kể một câu chuyện hấp dẫn, lấy con người làm trung tâm, đặt trong ngữ cảnh sử dụng thực tế (*Context of Use*), có cấu trúc mạch lạc, thể hiện sự chuyển biến cảm xúc (*Emotion*) và làm nổi bật giá trị cốt lõi (*Value Proposition*) giải quyết nỗi đau của Persona.
- **Sketching (Phác thảo)**: Dùng phong cách *Expressive Stick-figure UI Storyboard*: bảng màu thiết kế chỉ có line art đen `#000` trên nền trắng `#fff`; nhân vật người que có tóc, trang phục bằng đường viền đơn, dáng tự nhiên và biểu cảm rõ. Hình tập trung truyền tải tương tác, cảm xúc và ý tưởng thiết kế, không dùng anatomy chi tiết, khối cơ thể 3D, màu, mảng tô xám, gradient hay shadow. Anti-aliasing kỹ thuật ở mép nét được chấp nhận.

### 1.2. 7 Yếu tố Ngữ cảnh sử dụng (Context of Use)
Toàn bộ 6 frame phải giúp người xem nhận diện được các yếu tố dưới đây. Mỗi frame chỉ thể hiện những yếu tố liên quan trực tiếp đến nhịp kể chuyện và có căn cứ trong Scenario Future; không nhồi đủ cả 7 yếu tố vào từng frame:
1. **User**: Persona là ai, đặc điểm tâm lý.
2. **Task**: Đang thực hiện nhiệm vụ gì để đạt mục tiêu.
3. **Equipment**: Thiết bị tương tác (smartphone, máy POS...).
4. **Physical Environment**: Địa điểm thực tế (phòng trọ, bàn làm việc, quầy spa).
5. **Social Environment**: Hoàn cảnh xã hội (ở một mình, tương tác với lễ tân).
6. **Temporal Context**: Thời điểm, áp lực thời gian.
7. **Emotional Context**: Cảm xúc biến chuyển (lo lắng $\rightarrow$ an tâm $\rightarrow$ hài lòng).

### 1.3. Kỹ thuật biểu diễn thị giác & Ngôn ngữ Sketching (Visual Language)
Để minh họa rõ ràng các tương tác động và bối cảnh sử dụng, kịch bản hình ảnh sử dụng các kỹ thuật phác thảo chuyên biệt:
1. **Nhân vật biểu cảm và truy vết được**:
   - Diện mạo Persona phải được suy ra từ Persona và Scenario: tóc, phụ kiện nhận diện, trang phục viền đơn, dáng đứng/ngồi tự nhiên và nét mặt thể hiện rõ cảm xúc.
   - Vẫn giữ cấu trúc stick figure gọn nhẹ; cấm anatomy chi tiết, cơ thể có khối, tạo hình 3D hoặc quần áo tô mảng.
   - Chỉ đưa nhân vật phụ, thú cưng, đồ vật và chi tiết bối cảnh vào hình khi Scenario hoặc evidence được `sourceRefs` hỗ trợ.
2. **Góc nhìn (Viewpoint / Camera Perspective)**:
   - **Góc nhìn thứ ba (Third-Person View / Medium-Wide Shot)**: Cho phép quan sát toàn cảnh nhân vật người que, môi trường xung quanh, thiết bị và các đối tượng tương tác (ví dụ: nhân viên quầy, thú cưng). Thường dùng ở nhịp thiết lập bối cảnh, giao tiếp đời thực hoặc kết quả câu chuyện.
   - **Góc nhìn thứ nhất / Cận cảnh (POV - Point-of-View / Close-Up Shot)**: Thể hiện trực tiếp góc nhìn từ đôi mắt người dùng nhìn vào màn hình điện thoại hoặc thao tác tay (ví dụ: tay người que đang bấm nút trên app, quét mã QR tại quầy). Thường dùng khi muốn nhấn mạnh vào trải nghiệm tương tác UI/UX cốt lõi.
3. **Hiệu ứng chuyển động & Mũi tên mô tả (Motion Lines & Action Arrows)**:
   - **Mũi tên chuyển động (Directional Arrows)**: Các mũi tên phác thảo nét vẽ tay (nét đứt hoặc nét liền) chỉ rõ hướng di chuyển của nhân vật (đi tới quầy, ngoảnh đầu), hướng di chuyển vật thể, hoặc hướng thao tác trên giao diện (vuốt màn hình, kéo thả thanh trượt, ấn nút tap).
   - **Đường sọc chuyển động (Speed / Action Dash Lines)**: Các vệt gạch ngắn song song minh họa chuyển động nhanh, cử động tay hoặc sự rung chuyển/kích hoạt của thiết bị.
4. **Hiệu ứng cầm, nhấc & Tương tác vật thể (Object Handling & Physical Interaction)**:
   - **Tương tác vật thể (Holding / Lifting / Carrying)**: Nét phác bàn tay người que nắm/ôm/nhấc các vật thể thực tế (lồng vận chuyển thú cưng, điện thoại, dây dắt, chai thuốc, hoá đơn).
   - **Vùng nhấn tương tác (Focus Highlight / Touch Indicator)**: Vệt phác tia sáng nhỏ hoặc vòng tròn đứt nét tại điểm tiếp xúc giữa ngón tay nhân vật và nút bấm UI hoặc vật thể được nhấc lên.

---

## 2. Cách suy luận & Phân tích (Reasoning Strategy)

### 2.1. Phân rã đoạn văn Scenario thành 6 nhịp kịch bản có cao trào
Sáu nhịp dưới đây là cấu trúc kể chuyện trung tính, không phải danh sách tính năng bắt buộc. Mọi hành động, phản hồi và kết quả phải được suy ra từ đúng Scenario Future của Persona–Goal đang xử lý.

1. **Nhịp 1 (Bối cảnh + Trigger)**: Thiết lập người dùng, môi trường, thời điểm và sự kiện khởi phát đúng như Scenario.
2. **Nhịp 2 (Nhu cầu + Chuẩn bị)**: Thể hiện mục tiêu, trạng thái cảm xúc và bước chuẩn bị có thật trong Scenario.
3. **Nhịp 3 (Hành động then chốt)**: Trực quan hóa hành động quan trọng nhất mà người dùng thực hiện để tiến gần mục tiêu.
4. **Nhịp 4 (Diễn biến + Phản hồi)**: Thể hiện phản hồi của hệ thống hoặc môi trường và cách người dùng tiếp tục hành trình.
5. **Nhịp 5 (Cao trào + Giá trị được nhận ra)**: Làm rõ thời điểm khó khăn chính được xử lý bằng tương tác đã được Scenario xác định.
6. **Nhịp 6 (Kết quả + Cảm xúc)**: Kết thúc bằng trạng thái và cảm xúc được Scenario hỗ trợ; không tự thêm đánh giá, thành tích hoặc kết quả tuyệt đối.

### 2.2. Chiến lược bố cục không gian & Lựa chọn góc nhìn (Non-overlapping Layout & Perspective)
- **Lựa chọn Góc nhìn phù hợp**:
  - Dùng **Third-Person Shot** khi cần thể hiện cả nhân vật + không gian môi trường xung quanh + tương tác xã hội.
  - Dùng **POV Shot** khi tập trung vào thao tác tay và chi tiết nội dung giao diện màn hình.
- **Tách biệt nhân vật, chi tiết chuyển động và UI**: Nhân vật người que đứng một bên (trái hoặc phải), khung màn hình điện thoại phóng to đặt ở bên còn lại. Mũi tên chuyển động và vệt hành động phải có khoảng hở rõ ràng, không đè lấp nét mặt hay chữ trong UI.
- **Mức chi tiết UI vừa đủ**: UI phone mockup chỉ thể hiện đủ thông tin để hiểu tương tác chính như nút, dropdown, checkbox, lịch hoặc icon có liên quan trong Scenario. Không biến panel thành một Wireframe hoàn chỉnh và không thêm control không có evidence.
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
  "frameSize": {
    "width": 1280,
    "height": 720,
    "aspectRatio": "16:9",
    "format": "png"
  },
  "canvasSize": {
    "width": 1600,
    "height": 900,
    "aspectRatio": "16:9",
    "format": "png"
  },
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
      "valueRealized": "Giá trị giải quyết nỗi đau",
      "sourceRefs": [
        "deliverables/01-user-research/scenario-future/persona-1/scenario-future-goal-1.md",
        "deliverables/01-user-research/persona/personas.json#persona-1",
        "deliverables/01-user-research/value-proposition/value-proposition.json#persona-1"
      ]
    }
  ]
}
```

### 3.2. Công thức soạn Prompt sinh ảnh Người que chuẩn (bao gồm Góc nhìn & Hiệu ứng)
Mọi prompt sinh ảnh cho từng frame phải tuân thủ công thức cấu trúc:
$$\text{Prompt} = \text{[Style Bắt buộc]} + \text{[Góc nhìn & Bối cảnh & Hành động]} + \text{[Hiệu ứng Chuyển động / Mũi tên / Tương tác]} + \text{[UI Phone Mockup / Bóng thoại]} + \text{[Negative Prompt]}$$

- **Style bắt buộc**: `Expressive stick-figure UI storyboard, exact 1280x720 PNG, horizontal 16:9 composition, pure #000 black line art on pure #fff white background, consistent Persona-specific hairstyle and identifying details derived from evidence, simple outlined clothing, natural body pose, clear facial emotion, lightweight stick-figure anatomy, clean hand-drawn editorial storyboard composition.`
- **Khai báo Góc nhìn (Perspective)**:
  - *Góc nhìn thứ 3*: `Third-person medium shot showing stick figure character...`
  - *Góc nhìn POV*: `First-person POV perspective shot looking down at stick hands holding...`
- **Mô tả Tương tác & Hiệu ứng Chuyển động (Action & Motion Effects)**:
  - *Cầm/nhấc vật thể*: `stick figure hands lifting/holding a pet carrier box / smartphone with simple hand-drawn holding gesture.`
  - *Mũi tên chuyển động*: `simple hand-drawn directional arrows (dashed or solid line) illustrating movement path / tap action / swipe gesture.`
  - *Đường nét hành động*: `subtle hand-drawn action dash lines around moving hands/object showing physical movement.`
- **UI Mockup Callout**: `Hand-drawn smartphone UI callout beside the character, detailed only enough to understand the evidenced interaction, using relevant Vietnamese labels and only the necessary button, dropdown, checkbox, calendar, digital time display, or icon; whenever time is shown, render the exact time supported by the Scenario or evidence as clearly legible digital numerals, never invent a time and never use an analog clock; not a complete wireframe.`
- **Thought Bubble**: Chỉ dùng nguyên văn khi nguồn có direct quote và frame khai báo `sourceRefs` tới đúng nguồn đó. Nếu không có nguyên văn, diễn đạt bằng paraphrase không đặt trong ngoặc kép như lời nói thật; có thể thể hiện trạng thái bằng biểu tượng hoặc caption. Mẫu khi có nguồn: `Simple hand-drawn cloud thought bubble above character with sourced verbatim text: "[Câu nguyên văn]".`
- **Negative Prompt**: `no anime, no manga, no detailed anatomy, no 3D, no body volume, no photorealism, no color, no grayscale wash, no gray fill areas, no gradient, no shadow, no shading, no filled clothing areas, no analog clock, no clock face, no hour hand, no minute hand, no complete wireframe, no unsupported character, object, environment, UI control, or feature.`

---

## 4. Xác thực & Tiêu chí Kiểm tra (Validation)

Kiểm tra từng frame ảnh và dữ liệu theo checklist:
- [ ] **Đầu vào hợp lệ**: Scenario Future, Persona và Value Proposition tồn tại, khớp `personaId`/`goalId` và có đủ dữ liệu để truy vết.
- [ ] **Đích chưa tồn tại**: Thư mục Persona–Goal và các artifact đích chưa tồn tại; nếu đã tồn tại thì dừng, không ghi đè hoặc tự tạo phiên bản.
- [ ] **Đúng phạm vi Goal**: Cả 6 frame chỉ thể hiện hành động, tính năng và kết quả có trong Scenario Future tương ứng.
- [ ] **Expressive Stick-figure đúng style**: Nhân vật có diện mạo theo Persona, tóc và trang phục viền đơn, dáng tự nhiên, biểu cảm rõ; không anatomy chi tiết, khối cơ thể hay 3D.
- [ ] **Monochrome rõ ràng**: Bảng màu thiết kế chỉ có line art `#000` trên nền `#fff`; không có màu, mảng tô xám, gradient, shadow hoặc shading. Anti-aliasing kỹ thuật ở mép nét được chấp nhận.
- [ ] **Chi tiết có evidence**: Nhân vật phụ, thú cưng, bối cảnh, đồ vật và UI chỉ xuất hiện khi Scenario/evidence cùng `sourceRefs` hỗ trợ.
- [ ] **Góc nhìn (POV / 3rd-person) chuẩn xác**: Góc nhìn thể hiện đúng ý đồ tương tác (POV cho thao tác UI/quét QR, 3rd-person cho bối cảnh/giao tiếp).
- [ ] **Hiệu ứng chuyển động & Mũi tên rõ ràng**: Mũi tên hướng dẫn và vệt sọc hành động phác thảo nét đơn sạch sẽ, mô tả đúng hướng di chuyển/thao tác.
- [ ] **Tương tác vật thể (Cầm/nhấc) tự nhiên**: Hành động cầm điện thoại, nhấc lồng thú cưng hoặc vật thể thể hiện rõ qua nét vẽ đơn giản.
- [ ] **UI Mockup đủ hiểu tương tác**: Chữ tiếng Việt và control liên quan như nút, dropdown, checkbox, lịch hoặc icon đủ rõ để hiểu thao tác nhưng không phát triển thành Wireframe hoàn chỉnh.
- [ ] **Bố cục thoáng đãng**: Nhân vật, chi tiết hiệu ứng, UI mockup và bóng thoại tách biệt, không đè lấp lên nhau.
- [ ] **Dữ liệu `data.json` đầy đủ**: Không bị thiếu trường, `stepName` và `story` đúng tiếng Việt chuẩn.
- [ ] **Metadata kích thước chuẩn**: `frameSize` là `1280×720`, tỷ lệ `16:9`, định dạng PNG; `canvasSize` là `1600×900`, tỷ lệ `16:9`, định dạng PNG.
- [ ] **Độ phân giải frame chính xác**: Mỗi `assets/frame-1.png` đến `frame-6.png` có kích thước pixel chính xác `1280×720` và tỷ lệ `16:9`; không chỉ kiểm tra tên file hoặc tỷ lệ gần đúng.
- [ ] **Truy vết theo frame**: Mỗi frame có `sourceRefs` hợp lệ tới Persona, Value Proposition và Scenario Future hỗ trợ nội dung.
- [ ] **Không giả direct quote**: Thought Bubble hoặc nội dung đặt trong ngoặc kép chỉ xuất hiện khi có nguyên văn và nguồn tương ứng; nội dung còn lại là paraphrase không giả làm lời nói thật.
- [ ] **Character Reference tự chứa**: `character-reference.png` nằm trong cùng thư mục `<persona-id>/<goal-id>/`, có kích thước pixel chính xác `1024×1024`, tỷ lệ `1:1` và được dùng nhất quán cho cả 6 frame.
