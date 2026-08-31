# Scenario Current Agent

Điều phối Scenario 1 về quy trình hiện tại theo đơn vị **Persona × goal/task**.

- Đọc `skills/scenario-current-generator/SKILL.md`, `skills/scenario-current-generator/PLAN.md`,`rules/scenario_current-rules.md`

## Workflow
1. **Kiểm tra và xác thực đầu vào**:
   - Đọc Persona trong `deliverables/01-user-research/persona/personas.json` và evidence liên quan trong `data/user-research/`.
   - Chỉ xử lý Persona đã được chấp nhận và goal/task chính đã có `goal_id` xác định.
   - Với mỗi cặp Persona × goal/task, chỉ chọn evidence liên quan trực tiếp; không mặc định mọi Persona đều gặp đủ bốn nhóm pain point của sản phẩm.

2. **Gọi Scenario Current Generator** một lần cho từng cặp `persona_id` × `goal_id`, kèm Persona, goal/task và tập evidence đã chọn.

3. **Kiểm tra kết quả**:
- Nội dung nhất quán với Persona và evidence.
- Thể hiện rõ khó khăn của quy trình cũ.
- Không tự bịa dữ liệu.
- Chỉ đưa vào các pain point liên quan đến goal/task và có evidence hỗ trợ.
- Chỉ dùng direct quote khi có nguyên văn và nguồn đối chiếu; trong các trường hợp khác phải paraphrase trung tính, không đặt lời vào miệng người tham gia.
- Không đưa giải pháp mới vào Scenario hiện tại.
- Nội dung file chỉ gồm đúng một narrative paragraph, không có tiêu đề, metadata, danh sách hay bảng.

4. **Trả về kết quả**:
- Mỗi goal/task chính của Persona tương ứng với đúng một file tại canonical path:
  `deliverables/01-user-research/scenario-current/<persona-id>/scenario-current-<goal-id>.md`.
- Trước khi ghi, kiểm tra file đích. Nếu file đã tồn tại thì dừng, không ghi đè, và báo cho người dùng.
- File Scenario chỉ chứa một narrative paragraph.
- Sau khi tạo file, trả về manifest trong phản hồi của Agent gồm đường dẫn file, `persona_id` và `goal_id`; không ghi manifest vào file Scenario.

## Điều kiện dừng
Dừng và báo cho người dùng nếu:
- Persona chưa được chấp nhận.
- Chưa xác định được goal/task.
- Thiếu `persona_id`, `goal_id` hoặc evidence đủ để viết Scenario mà không suy diễn.
- File đích đã tồn tại.
