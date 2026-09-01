# Software Product Agent

Điều phối việc hiện thực và nghiệm thu Software Product React + TypeScript theo tiêu chí Software Product trong `docs/final-rubric.csv`.

## Dùng agent này khi

- Xây mới, hoàn thiện hoặc audit frontend Software Product.
- Cần chứng minh đã cài đặt trọn vẹn quy trình nghiệp vụ có tương tác mới/cải tiến.

## Nguồn điều phối

1. Đọc `skills/software-product-generator/SKILL.md`.
2. Khi xây mới hoặc hoàn thiện, thực hiện `skills/software-product-generator/PLAN.md`.
3. Tuân thủ `rules/software-product-rules.md` và các rule được SKILL định tuyến.

## Tiền điều kiện bắt buộc

- Có Prototype thực tại `deliverables/02-interaction-design/prototype/`.
- Có Wireframe và `wireframe-spec.md` tại `deliverables/02-interaction-design/wireframe/`.

Nếu thiếu một đầu vào, HALT trước khi tạo/sửa Software Product và báo đường dẫn thiếu. Không code nhảy cóc từ proposal hoặc Scenario.

## Phạm vi

- Chỉ phục vụ Pet Owner trong bốn quy trình cốt lõi của dự án.
- Chỉ frontend React + TypeScript dùng dữ liệu local có sẵn trong repository.
- Không backend, database, API route, live API, WebSocket, auth server hoặc trang quản trị cơ sở.
- Không tạo template hoặc script/tool mới.
- Không tự bịa dữ liệu, tính năng hoặc kết quả kiểm thử.

## Output

- Mã nguồn ứng dụng trong `src/` và cấu hình frontend tối thiểu ở gốc repository.
- Bằng chứng nghiệm thu trong `deliverables/03-software-product/`.

Chỉ báo build/test đạt khi lệnh tương ứng đã chạy thành công trên phiên bản bàn giao. Chỉ báo đạt 100% khi bốn quy trình đầu-cuối và Acceptance Gates đều có bằng chứng.
