# Handoff: TASK-UTIL-001

## Thay đổi

- Tạo CLI Python standard-library-only nhận `input_html` và `output_png`.
- Tự tìm Chrome, Edge hoặc Chromium trên Windows, macOS và Linux; hỗ trợ chỉ định executable bằng `--browser`.
- Hỗ trợ `--width`, `--height`, `--scale` và `--wait-ms`; dùng file URI, quyền truy cập asset cục bộ và user-data-dir tạm.
- Tạo thư mục cha của đầu ra, render vào tệp tạm rồi chỉ thay đầu ra đích sau khi xác minh signature PNG và nội dung không rỗng.
- Báo lỗi rõ và trả exit code khác 0 cho HTML/browser không tồn tại, browser timeout, browser thất bại hoặc đầu ra không hợp lệ.

## Tệp đã sửa

- `scripts/render-html-to-png.py`
- `coordination/tasks/TASK-UTIL-001.yml`
- `coordination/handoffs/TASK-UTIL-001.md`

## Kiểm thử

- Lệnh: `py -3 -B -X utf8 scripts/render-html-to-png.py --help`.
- Kết quả: exit `0`; help liệt kê positional input/output và toàn bộ tùy chọn cấu hình.
- Lệnh: chạy với HTML không tồn tại và chạy với `--browser` trỏ tới executable không tồn tại.
- Kết quả: cả hai trả exit `1` cùng thông báo chỉ rõ đường dẫn lỗi.
- Lệnh: parse mã nguồn bằng `ast.parse` và `py -3 -X utf8 scripts/coordination/tasklib.py coordination/tasks/TASK-UTIL-001.yml`.
- Kết quả: `AST OK`; task validator `OK` ở trạng thái `in-progress`.
- Lệnh: render fixture HTML cục bộ có JavaScript trì hoãn bằng Chrome tự phát hiện, kích thước `640x480`, scale `1.5`, wait `500ms`.
- Kết quả: exit `0`; PNG có signature `89-50-4E-47-0D-0A-1A-0A`, kích thước `6704` byte.
- Lệnh: render cùng fixture bằng `--browser "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"`, kích thước `320x240`, scale `1`, wait `300ms`.
- Kết quả: exit `0`; PNG có signature hợp lệ, kích thước `3067` byte.
- Lệnh: `git diff --check` và kiểm tra danh sách file thay đổi theo `write_scope`.
- Kết quả: không có lỗi whitespace; chỉ có ba đường dẫn thuộc phạm vi task.

## Tài liệu đã ảnh hưởng

- Yêu cầu hiện tại của người dùng về script render HTML thành PNG trong thư mục `scripts/`.
- `AGENTS.md`; `coordination/PROTOCOL.md`; `references/README.md`; `agents/manifest.json`.
- `agents/software-product-agent.md`; `skills/software-product-agent/SKILL.md`; `skills/software-product-agent/PLAN.md`.
- `references/README.md` cho thấy không có tài liệu môn học hoặc hướng dẫn đồ án nào áp dụng trực tiếp cho tiện ích kỹ thuật này.

## Vấn đề còn lại

- Chrome/Edge headless cần quyền hệ điều hành để tạo profile tạm và khởi chạy tiến trình; môi trường sandbox có thể cần cấp quyền chạy browser.
- Cần reviewer độc lập kiểm tra trước khi tích hợp.

## Commit

- Nội dung: `2e5aee6944ea8ac586feb78335c4b878c5317a94`

## Review

- `pending`
