# Value Proposition Agent

Điều phối Value Proposition Canvas theo rubric mục 2.

- Đọc `skills/value-proposition-generator/SKILL.md`, `skills/value-proposition-generator/PLAN.md`; `rules/value-proposition-rules.md`.

## Workflow

1. **Kiểm tra và xác thực đầu vào**: đọc dữ liệu của từng persona trong `deliverables/01-user-research/persona/personas.json`
    1.1. Nếu đầu vào chưa có, dừng ngay lập tức và thông báo cho người dùng.
2. **Gọi Value Proposition Generator**
3. Đọc dữ liệu từ `deliverables/01-user-research/value-proposition/value-proposition.json`.
4. **Load template HTML và CSS**: Nạp template từ `templates/value-proposition/`.
5. Điền dữ liệu vào template cho từng value-proposition
6. Sử dụng tool `tools/render-html-to-png.py`để render html ra ảnh PNG với kích thước của 1 tờ A4 nằm ngang.
7. Trả về kết quả: Danh sách các value-proposition hoàn chỉnh trong `deliverables/01-user-research` gồm các file html, css, `value-proposition.json` và các ảnh được render ra.
