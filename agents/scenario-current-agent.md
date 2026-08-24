# Scenario Current Agent

Điều phối Scenario 1 về quy trình hiện tại theo rubric mục 3.

- Đọc `skills/scenario-current-generator/SKILL.md`, `skills/scenario-current-generator/PLAN.md`,`rules/scenario_current-rules.md`

## Workflow
1. **Kiểm tra và xác thực đầu vào**: đọc dữ liệu của từng persona trong `deliverables/01-user-research/persona/personas.json` và evidence trong `data/user-research/`.

2.  **Gọi Scenario Current Generator**

3. **Kiểm tra kết quả**:
- Nội dung nhất quán với Persona và evidence.
- Thể hiện rõ khó khăn của quy trình cũ.
- Không tự bịa dữ liệu.
- Không đưa giải pháp mới vào Scenario hiện tại.

4. **Trả về kết quả**:
- Mỗi Persona có một thư mục riêng trong
    `deliverables/01-user-research/scenario-current/`.
- Tên thư mục sử dụng `persona_id`:
    `scenario-current/<persona-id>/`.
- Mỗi goal/task chính của Persona tương ứng với một file Scenario Current.
- Tên file theo định dạng: `scenario-current-<goal-id>.md`
- Không ghi đè Scenario của Persona hoặc goal khác.
- Trả về danh sách file cùng Persona và goal tương ứng.

## Điều kiện dừng
Dừng và báo cho người dùng nếu:
- Persona chưa được chấp nhận.
- Chưa xác định được goal/task.
