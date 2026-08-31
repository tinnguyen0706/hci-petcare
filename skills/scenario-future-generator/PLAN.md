# Kế hoạch thực thi Scenario 2 — Quy trình tương lai (To-Be Scenario)

## Mục đích

Mô tả chi tiết câu chuyện và hành trình tương lai của chủ nuôi (Persona) khi sử dụng giải pháp chăm sóc thú cưng mới; làm nổi bật cách các tương tác cải tiến giải quyết những khó khăn, bất cập và điểm đau của quy trình hiện tại dựa trên Persona, Value Proposition, Scenario Current và dữ liệu nghiên cứu người dùng.

## Sử dụng skill này khi

- Persona, Value Proposition và Scenario Current đã được hoàn thiện và chấp nhận.
- Goal/task chính của từng Persona đã được xác định.
- Cần mô tả hành động của Persona, phản hồi của hệ thống và kết quả của quy trình mới.
- Chuẩn bị cơ sở đánh giá rubric mục 4 trước khi xây dựng Storyboard, Wireframe và Prototype.

## Đầu vào bắt buộc

- Hồ sơ Persona trong `deliverables/01-user-research/persona/personas.json`.
- Value Proposition trong `deliverables/01-user-research/value-proposition/value-proposition.json`.
- Scenario Current tương ứng với Persona và goal/task trong
  `deliverables/01-user-research/scenario-current/<persona-id>/scenario-current-<goal-id>.md`.
- Evidence liên quan đến Persona và goal/task trong `data/user-research/`.
- Persona, Value Proposition và Scenario Current phải đã hoàn thiện, được chấp nhận và nhất quán; goal/task, `persona_id` và `goal_id` phải được xác định.

## Đầu ra

- Mỗi Persona có một thư mục riêng tại
  `deliverables/01-user-research/scenario-future/<persona-id>/`.
- Mỗi goal/task chính của Persona tương ứng với một file Scenario Future có tên
  `scenario-future-<goal-id>.md`.
- Mỗi file Scenario Future chỉ chứa một đoạn văn kể chuyện liền mạch (Narrative Paragraph), không kèm tiêu đề, metadata hoặc danh sách file.
- Danh sách file đầu ra cùng Persona và goal/task tương ứng chỉ được trả trong phản hồi điều phối của Agent, không ghi vào file Scenario Future.
- Không ghi đè bất kỳ file Scenario Future đã tồn tại. Nếu file đích đã tồn tại, dừng và báo cho Agent điều phối.

## Quy trình thực hiện

1. **Đọc và đối chiếu dữ liệu**:
   - Đọc các đầu vào bắt buộc theo đúng đường dẫn đã quy định ở trên.
   - Xác định Persona, goal/task, pain points và value tương ứng.
   - Xác nhận các acceptance gate: Persona, Value Proposition và Scenario Current đã hoàn thiện, được chấp nhận; goal/task và các ID đã được xác định.
   - Xác định file đích và dừng nếu file đã tồn tại.

2. **Với mỗi goal/task của từng Persona**:
   - 2.1. **Giữ nguyên bối cảnh & Trigger**: Đọc Scenario Current tương ứng và giữ nguyên Persona, thú cưng, goal/task, Trigger, thời gian, địa điểm và áp lực thực tế; không tự chọn hoặc bổ sung tình huống mới.
   - 2.2. **Đối chiếu Pain Point & Value**: Mỗi tương tác mới phải giải quyết một pain point trong Scenario Current hoặc đáp ứng một value trong Value Proposition, đồng thời không mâu thuẫn với Persona và evidence.
   - 2.3. **Viết một đoạn văn kể chuyện liền mạch (Narrative Paragraph)**:
     - Dẫn dắt theo dòng thời gian từ khi phát sinh nhu cầu đến khi Persona hoàn thành goal/task.
     - Lồng ghép hành động của Persona, phản hồi của hệ thống, kết quả và cảm xúc.
     - Xem 4 tương tác cải tiến cốt lõi là phạm vi lựa chọn; chỉ sử dụng tương tác liên quan trực tiếp đến goal/task, không bắt buộc đưa đủ cả 4 vào một Scenario.
     - Paraphrase theo evidence; chỉ dùng trích dẫn trực tiếp khi evidence có nguyên văn và nguồn tương ứng.

3. **Kiểm tra độ phủ & Đối chiếu**:
   - Đảm bảo mỗi Persona–Goal có một Scenario Future tương ứng.
   - Đảm bảo mỗi tương tác cải tiến đều có căn cứ từ pain point trong Scenario Current hoặc value trong Value Proposition và không mâu thuẫn Persona/evidence.
   - Đảm bảo văn phong trôi chảy và hành động–phản hồi được mô tả rõ ràng.
   - Đảm bảo file chỉ chứa một đoạn văn Scenario; manifest chỉ nằm trong phản hồi điều phối.
   - Đảm bảo không thêm tính năng ngoài phạm vi, tự bịa dữ liệu hoặc tạo trích dẫn không có nguồn.

## Điều kiện dừng

Dừng và báo cho Agent điều phối nếu:

- Persona, Value Proposition hoặc Scenario Current chưa hoàn thiện, chưa được chấp nhận hoặc không nhất quán.
- Chưa xác định được goal/task, `persona_id` hoặc `goal_id`.
- Không có đủ evidence để truy vết pain point/value cho tương tác dự kiến.
- File đích `deliverables/01-user-research/scenario-future/<persona-id>/scenario-future-<goal-id>.md` đã tồn tại.
