# Hiện thực Software product

## Mục đích

Hiện thực web React TypeScript mobile-first từ thiết kế đã duyệt và cung cấp bằng chứng build/test trên revision hiện tại.

## Dùng skill này khi

- Prototype và Wireframe đã duyệt, có version và acceptance matrix.
- Cần hiện thực bốn năng lực sản phẩm bằng React và TypeScript.
- Cần kiểm thử hoặc chuẩn bị rubric Software product.

## Input bắt buộc

- `deliverables/02-interaction-design/prototype/` đã duyệt.
- `deliverables/02-interaction-design/wireframe/` đã duyệt.
- `templates/software-product-template.md`, proposal, rubric và rules.

## Output

- `src/`, `tests/` và cấu hình build/test cho React, TypeScript và Vite.
- `deliverables/03-software-product/` chứa acceptance matrix, lệnh kiểm thử và evidence thực tế.

## Workflow

1. Xác minh design freeze, screen/state inventory và sai khác đã chấp nhận.
2. Thiết lập React, TypeScript, Vite và fixture cục bộ reset được.
3. Hiện thực theo lát cắt: đặt lịch → yêu cầu → tiến độ → lịch sử.
4. Bổ sung loading, empty, error, success, recovery và accessibility.
5. Viết component/integration test và browser-flow test cho hành vi quan trọng.
6. Chạy typecheck, test, production build và so sánh giao diện với design input.
7. Ghi lệnh, exit status, môi trường, version và sai khác thật.
