# Kế hoạch thực thi Scenario 1 — Quy trình hiện tại (As-Is Scenario)

## Mục đích

Mô tả chi tiết câu chuyện và hành trình thực tế của chủ nuôi (Persona) khi sử dụng quy trình dịch vụ chăm sóc thú cưng hiện tại; làm nổi bật toàn diện các khó khăn, bất cập và điểm đau (pain points/breakdowns) của hệ thống cũ dựa trên dữ liệu nghiên cứu người dùng.

## Sử dụng skill này khi

- Persona đại diện đã được hoàn thiện và chấp nhận.
- Cần mô tả bối cảnh sử dụng (Context of use), các điểm tiếp xúc hiện tại (Touchpoints: Zalo, gọi điện, sổ giấy), giải pháp tạm thời (Workarounds) và cảm xúc tiêu cực của người dùng.
- Chuẩn bị cơ sở đánh giá rubric mục 3 (Scenario 1) trước khi thiết kế kịch bản tương tác mới (Scenario 2).

## Đầu vào bắt buộc

- Hồ sơ Persona trong `deliverables/01-user-research/persona/personas.json`.
- Dữ liệu phỏng vấn / khảo sát người dùng (`data/user-research/`).
- `persona_id`, `goal_id` và goal/task chính đã được chấp nhận.
- Evidence liên quan trực tiếp đến cặp Persona × goal/task đang xử lý.

## Đầu ra

- Mỗi cặp Persona × goal/task có đúng một Scenario 1 tại:
  `deliverables/01-user-research/scenario-current/<persona-id>/scenario-current-<goal-id>.md`.
- Mỗi Scenario 1 được trình bày dưới dạng **một đoạn văn kể chuyện liền mạch (Narrative Paragraph)**, kết nối mượt mà và tự nhiên các yếu tố:
  1. **Bối cảnh & Trigger**: Persona, mục tiêu, thời gian, địa điểm và áp lực thực tế.
  2. **Diễn biến hành động & Điểm tiếp xúc**: Quá trình tương tác thực tế qua các kênh cũ (gọi điện, Zalo, dặn miệng, ghi giấy...).
  3. **Khó khăn & Cảm xúc (Pain Points & Emotions)**: Chỉ các khó khăn, cảm xúc liên quan đến goal/task và có evidence hỗ trợ.
  4. **Kết quả & Hệ quả**: Trạng thái kết thúc quy trình và cảm xúc còn đọng lại của chủ nuôi.
- File không chứa tiêu đề, metadata, danh sách, bảng, chú thích nguồn hoặc manifest.
- Manifest gồm đường dẫn, `persona_id`, `goal_id` được trả trong phản hồi sau khi tạo file, không ghi vào file Scenario.

## Quy trình thực hiện

1. **Đọc danh sách Persona**:
   - Tải Persona từ `deliverables/01-user-research/persona/personas.json`.
   - Chỉ chọn Persona đã được chấp nhận và các goal/task chính có `goal_id`.
2. **Với mỗi cặp Persona × goal/task**:
   - 2.1. **Chọn evidence**: Chỉ lấy evidence liên quan trực tiếp đến goal/task; ghi nhận nguồn nội bộ để kiểm tra nhưng không chèn citation vào file Scenario.
   - 2.2. **Kiểm tra file đích**: Dùng canonical path. Nếu file đã tồn tại thì dừng, không ghi đè, và báo người dùng.
   - 2.3. **Xác định bối cảnh đặc thù & Trigger**: Dựa vào Persona, goal/task và evidence đã chọn để xây dựng tình huống cụ thể.
   - 2.4. **Viết một narrative paragraph**:
     - Dẫn dắt theo trình tự thời gian phù hợp với phạm vi goal/task.
     - Chỉ lồng ghép pain point và cảm xúc có evidence; bốn nhóm pain point cốt lõi chỉ là taxonomy tham chiếu, không phải checklist bắt buộc.
     - Chỉ dùng direct quote khi có nguyên văn đối chiếu; nếu không, paraphrase trung tính và không gán lời nói cho người tham gia.
3. **Kiểm tra độ phủ & đối chiếu**:
   - Đảm bảo mỗi cặp Persona × goal/task đã duyệt có đúng một Scenario 1.
   - Đảm bảo file chỉ chứa một narrative paragraph trôi chảy.
   - Đảm bảo mọi pain point có evidence và **100% không chứa công nghệ/tính năng mới** của giải pháp tương lai.
4. **Trả manifest ngoài file**:
   - Sau khi tạo thành công, trả đường dẫn file, `persona_id` và `goal_id` trong phản hồi; không thêm manifest vào nội dung Scenario.
