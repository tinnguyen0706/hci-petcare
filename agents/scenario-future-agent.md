# Scenario Future Agent

Điều phối Scenario 2 về quy trình mới theo rubric mục 4.

- Đọc `skills/scenario-future-generator/SKILL.md`, `skills/scenario-future-generator/PLAN.md`, `rules/scenario_future-rules.md`.

## Workflow
1. **Kiểm tra và xác thực đầu vào**: 
- Đọc dữ liệu của từng persona trong `deliverables/01-user-research/persona/personas.json` 
- Đọc dữ liệu từng value-proposition `deliverables/01-user-research/value-proposition/value-proposition.json` 
- Đọc Scenario Current tương ứng trong `deliverables/01-user-research/scenario-current/<persona-id>/scenario-current-<goal-id>.md`.
- Chỉ đọc evidence liên quan trực tiếp đến Persona và goal/task trong `data/user-research/`.
- Xác nhận Persona, Value Proposition và Scenario Current đã hoàn thiện, được chấp nhận; goal/task và các ID tương ứng đã được xác định.
- Xác định trước file đích `deliverables/01-user-research/scenario-future/<persona-id>/scenario-future-<goal-id>.md` và kiểm tra file chưa tồn tại.


2.  **Gọi Scenario Future Generator**

3. **Kiểm tra kết quả**:
- Nội dung nhất quán với Persona, Value Proposition, Scenario Current và evidence.
- Giữ nguyên Persona, thú cưng, goal/task, Trigger và bối cảnh của Scenario Current tương ứng.
- Mỗi tương tác mới phải giải quyết một pain point trong Scenario Current hoặc đáp ứng một value trong Value Proposition, đồng thời không mâu thuẫn với Persona và evidence.
- Bốn tương tác cải tiến cốt lõi là phạm vi lựa chọn, không phải danh sách bắt buộc cho mọi Scenario; chỉ dùng tương tác liên quan trực tiếp đến goal/task.
- Không tự bịa dữ liệu hoặc thêm tính năng ngoài phạm vi sản phẩm.
- Diễn đạt lại (paraphrase) theo evidence; chỉ dùng trích dẫn trực tiếp khi evidence có nguyên văn và nguồn tương ứng.
- Không sử dụng khẳng định tuyệt đối về hiệu quả của giải pháp.

4. **Trả về kết quả**:
- Mỗi Persona có một thư mục riêng trong
    `deliverables/01-user-research/scenario-future/`.
- Tên thư mục sử dụng `persona_id`:
    `scenario-future/<persona-id>/`.
- Mỗi goal/task chính của Persona tương ứng với một file Scenario Future.
- Tên file theo định dạng: `scenario-future-<goal-id>.md`
- Mỗi file chỉ chứa một đoạn văn Scenario liền mạch, không có tiêu đề, metadata hoặc manifest.
- Không ghi đè bất kỳ file Scenario Future đã tồn tại.
- Trả về danh sách file cùng Persona và goal tương ứng trong phản hồi điều phối; không ghi danh sách này vào file Scenario Future.

## Điều kiện dừng
Dừng và báo cho người dùng nếu:
- Persona, Value Proposition hoặc Scenario Current chưa hoàn thiện, chưa được chấp nhận hoặc không nhất quán với nhau.
- Chưa xác định được goal/task, `persona_id` hoặc `goal_id`.
- Thiếu evidence cần thiết để truy vết pain point/value cho tương tác dự kiến.
- File đích `scenario-future-<goal-id>.md` đã tồn tại.
