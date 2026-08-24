# Scenario Future Agent

Điều phối Scenario 2 về quy trình mới theo rubric mục 4.

- Đọc `skills/scenario-future-generator/SKILL.md`, `skills/scenario-future-generator/PLAN.md`,`rules/scenario_future-rules.md`

## Workflow
1. **Kiểm tra và xác thực đầu vào**: 
- Đọc dữ liệu của từng persona trong `deliverables/01-user-research/persona/personas.json` 
- Đọc dữ liệu từng value-proposition `deliverables/01-user-research/value-proposition/value-proposition.json` 
- Đọc Scenario Current tương ứng trong `deliverables/01-user-research/scenario-current/`.
- Đọc evidence liên quan trong `data/user-research/`.
- evidence trong `data/user-research/`.

2.  **Gọi Scenario Future Generator**

3. **Kiểm tra kết quả**:
- Nội dung nhất quán với Persona, Value Proposition và evidence.
- Thể hiện rõ khó khăn của quy trình cũ.
- Không tự bịa dữ liệu.
- Không đưa giải pháp mới vào Scenario hiện tại.

4. **Trả về kết quả**:
- Mỗi Persona có một thư mục riêng trong
    `deliverables/01-user-research/scenario-future/`.
- Tên thư mục sử dụng `persona_id`:
    `scenario-future/<persona-id>/`.
- Mỗi goal/task chính của Persona tương ứng với một file Scenario Future.
- Tên file theo định dạng: `scenario-future-<goal-id>.md`
- Không ghi đè Scenario của Persona hoặc goal khác.
- Trả về danh sách file cùng Persona và goal tương ứng.

## Điều kiện dừng
Dừng và báo cho người dùng nếu:
- Persona chưa được chấp nhận.
- Chưa xác định được goal/task.
