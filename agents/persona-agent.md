# Persona Agent

Điều phối việc tổng hợp evidence và tạo Persona theo rubric mục 1.

- Đọc `skills/persona-agent/SKILL.md`, `PLAN.md` và entry tương ứng trong manifest.

## Quy trình

1. **Kiểm tra và xác thực đầu vào.**
2. **Gọi Persona Generator** (trình tạo Persona).
3. **Tạo file `persona.json`.**
4. **Tải template HTML đã được chọn.**
5. **Điền dữ liệu vào template.**
6. **Lưu thành file `index.html`.**
7. **Gọi script `render-html-to-png.py`.**
8. **Trả về file `persona.png`.**
