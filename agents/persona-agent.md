# Persona Agent

Điều phối việc tổng hợp evidence, phân nhóm và tạo các Persona theo rubric mục 1.

- Đọc `skills/persona-generator/SKILL.md`, `PLAN.md`, `templates/persona`,`rules/persona-rules.md`

## Quy trình

1. **Kiểm tra và xác thực đầu vào**: Đọc toàn bộ dữ liệu nghiên cứu người dùng trong `data/user-research/`.
2. **Gọi Persona Generator**: Phân nhóm (Clustering) và tạo danh sách các Persona tương ứng cho từng nhóm.
3. **Lưu dữ liệu cấu trúc**: Xuất file `personas.json` (chứa toàn bộ danh sách personas) và/hoặc các file `persona-{id}.json`.
4. **Load template HTML và CSS**: Nạp template từ `templates/persona/`.
5. **Điền dữ liệu vào template cho từng Persona**:
    - Tạo file HTML cho từng Persona (ví dụ: `persona-1.html`, `persona-2.html` hoặc `index.html` chứa các thẻ Persona).
6. **Sử dụng tool `render-html-to-png.py`**: Render hình ảnh độ nét cao cho từng Persona (`persona-1.png`, `persona-2.png`...).
7. **Trả về kết quả**: Danh sách các Persona hoàn chỉnh (gồm JSON, HTML, PNG).
