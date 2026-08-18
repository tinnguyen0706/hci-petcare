# Handoff: TASK-UTIL-001

## Thay đổi

- Tạo CLI Python standard-library-only nhận `input_html` và `output_png`.
- Tự tìm Chrome, Edge hoặc Chromium trên Windows, macOS và Linux; hỗ trợ chỉ định executable bằng `--browser`.
- Hỗ trợ `--width`, `--height`, `--scale` và `--wait-ms`; dùng file URI, quyền truy cập asset cục bộ và user-data-dir tạm.
- Tạo thư mục cha của đầu ra, render vào tệp tạm rồi chỉ thay đầu ra đích sau khi xác minh signature PNG và nội dung không rỗng.
- Báo lỗi rõ và trả exit code khác 0 cho HTML/browser không tồn tại, browser timeout, browser thất bại hoặc đầu ra không hợp lệ.
- Sau review vòng 1, kiểm tra toàn bộ chunk PNG bằng `struct`/`zlib`: IHDR đầu tiên, kích thước dương, biên chunk, CRC, IEND rỗng và không có dữ liệu theo sau.
- Giới hạn width/height tối đa `32768`, scale hữu hạn tối đa `8`, wait tối đa `600000ms` để giá trị cực trị bị argparse từ chối mà không phát sinh traceback.
- Sau review vòng 2, giải mã đủ bảy trường IHDR; kiểm tra color type/bit depth, compression, filter, interlace; yêu cầu IDAT và áp dụng quy tắc PLTE cơ bản cho ảnh indexed.

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
- Lệnh: task validator ở trạng thái `review`; integration validator cho `main...HEAD`; `git diff --check main...HEAD` và kiểm tra danh sách file thay đổi theo `write_scope`.
- Kết quả: hai validator `OK`, không có lỗi whitespace; chỉ có ba đường dẫn thuộc phạm vi task.
- Lệnh vòng 2: unit test trực tiếp `validate_png` bằng PNG tối thiểu hợp lệ và 10 trường hợp hỏng: signature, header/chunk truncated, first chunk/IHDR length, zero dimension, CRC, thiếu IEND, IEND có dữ liệu và dữ liệu rác sau IEND.
- Kết quả vòng 2: PNG hợp lệ được chấp nhận; cả 10 PNG hỏng đều ném `RenderError`; output cũ được giữ nguyên khi browser giả lập sinh PNG hỏng.
- Lệnh vòng 2: gọi CLI với width số nguyên cực lớn, height `32769`, scale `inf`/`nan`/`9`, wait-ms số nguyên cực lớn.
- Kết quả vòng 2: cả sáu trường hợp trả exit `2` từ argparse, không có traceback; `--help` vẫn trả exit `0` và hiển thị giới hạn.
- Lệnh vòng 2: render fixture HTML có JavaScript trì hoãn bằng Chrome tự phát hiện, `640x480`, scale `1.5`, wait `300ms`.
- Kết quả vòng 2: exit `0`; validator cấu trúc mới chấp nhận PNG thật có signature hợp lệ, kích thước `4958` byte.
- Lệnh vòng 3: unit test hai PNG tối thiểu hợp lệ (RGBA và indexed có PLTE) cùng 10 trường hợp sai IHDR/IDAT/PLTE.
- Kết quả vòng 3: hai PNG hợp lệ được chấp nhận; IHDR+IEND thiếu IDAT, bit depth/color type/compression/filter/interlace sai và các vi phạm PLTE đều ném `RenderError`; output cũ vẫn nguyên vẹn.
- Lệnh vòng 3: render lại fixture HTML bằng Chrome tự phát hiện với `640x480`, scale `1.5`, wait `300ms`.
- Kết quả vòng 3: exit `0`; PNG thật qua validator mới, signature hợp lệ và kích thước `4958` byte.

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
- Sửa theo review vòng 1: `49b752a623f3d1f0fa60238041ee5188a056d174`.
- Sửa theo review vòng 2: `a5047899bfa07b93556238fd8c207c22fe14b8ba`.

## Review

- Vòng 1: `changes-requested`.
- Yêu cầu sửa: kiểm tra cấu trúc và CRC của PNG thay vì chỉ kiểm tra signature/kích thước; giới hạn các tham số số của CLI để loại bỏ overflow/traceback; bổ sung test PNG hỏng và giá trị cực trị.
- Vòng 2: `changes-requested`.
- Yêu cầu sửa: kiểm tra toàn bộ trường IHDR và tổ hợp bit depth/color type; yêu cầu ít nhất một IDAT trước IEND; bổ sung quy tắc PLTE cơ bản cho indexed color và test các cấu trúc PNG chưa hợp lệ này.
- Vòng 3: `pending`.
