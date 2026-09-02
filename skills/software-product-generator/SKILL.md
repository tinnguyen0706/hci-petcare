---
name: software-product-generator
description: Hiện thực hoặc nghiệm thu Software Product React + TypeScript mobile-first từ Prototype và Wireframe đã duyệt; dùng cho frontend dùng dữ liệu local có sẵn, không backend và không live API.
---

# Software Product Generator

Hiện thực ứng dụng web cho chủ nuôi thú cưng từ các thiết kế đã hoàn thành. Mức hoàn thành mục tiêu là tiêu chí Software Product cao nhất trong `docs/final-rubric.csv`: cài đặt trọn vẹn quy trình nghiệp vụ có tính năng tương tác mới hoặc cải tiến của phần mềm.

## Nguồn chuẩn bắt buộc

Đọc trước khi thay đổi mã nguồn:

1. `AGENTS.md` — workflow, phạm vi và tiền điều kiện toàn dự án.
2. `agents/software-product-agent.md` — vai trò, input và output.
3. `rules/software-product-rules.md` — kiến trúc frontend, phạm vi nghiệp vụ và Acceptance Gates.
4. `rules/domain-rules.md` — bốn năng lực cốt lõi dành cho Pet Owner.
5. `rules/style-rules.md` — Design Tokens, iconography và cấm emoji màu.
6. `rules/quality-rules.md` — tính trung thực và yêu cầu kiểm thử.
7. `rules/tool-rules.md` — công cụ và vị trí tệp được phép.
8. `docs/final-rubric.csv` — nguồn chuẩn duy nhất của tiêu chí chấm điểm.

Chỉ đọc các Persona, Scenario Future, Prototype và Wireframe cần để truy vết màn hình hoặc dữ liệu đang hiện thực. Không tự mở rộng thành hệ thống quản trị cơ sở.

## Tiền điều kiện

Bắt buộc phải có artifact thực trong cả hai thư mục:

- `deliverables/02-interaction-design/prototype/`
- `deliverables/02-interaction-design/wireframe/`

Wireframe phải có `wireframe-spec.md` và các SVG Main Flow cần thiết. Nếu thiếu một tiền điều kiện, dừng trước khi tạo hoặc sửa mã Software Product và báo đúng artifact còn thiếu.

Việc thư mục Prototype chỉ “tồn tại” chưa đủ. Phải kiểm kê toàn bộ SVG theo Persona/Goal và lập `deliverables/03-software-product/prototype-coverage.md`. Không được bắt đầu tuyên bố hoàn chỉnh khi còn Prototype chưa có route/state/action/feedback/test tương ứng.

## Phạm vi kỹ thuật

- React + TypeScript, CSS hiện đại, mobile-first.
- Frontend-only; không tạo backend, database, server nghiệp vụ, API route, WebSocket hoặc dịch vụ cloud.
- Dùng dữ liệu có sẵn, truy vết được trong repository. Chuyển dữ liệu cần cho runtime thành module TypeScript hoặc JSON local trong `src/`; không tải dữ liệu từ live API.
- Quản lý tương tác bằng React state. Chỉ dùng `localStorage` khi cần duy trì trạng thái giữa các lần mở trình duyệt và phải có giá trị seed local rõ ràng.
- Có thể mô phỏng độ trễ để trình diễn Loading/Error nhưng phải ghi rõ đây là UI simulation, không gọi là real-time backend.
- Không tạo `templates/`, không sao chép frontend starter vào `assets/`, không tạo script/tool phụ.

## Workflow

Khi xây mới hoặc hiện thực phần còn thiếu, thực hiện toàn bộ [PLAN.md](PLAN.md). Khi chỉ audit, dùng Acceptance Gates trong `rules/software-product-rules.md` và chỉ chạy các kiểm tra không làm thay đổi sản phẩm.

## Đầu ra

- Mã ứng dụng và test trong `src/`, cùng các tệp cấu hình React + TypeScript tối thiểu ở gốc repository.
- Bằng chứng nghiệm thu Software Product trong `deliverables/03-software-product/` theo `rules/software-product-rules.md`.
- Không tạo backend, template, mock server, API giả hoặc tài liệu ngoài danh mục đầu ra.

## Điều kiện được tuyên bố hoàn thành

Chỉ báo Software Product đạt 100% khi:

- Cả bốn quy trình cốt lõi đều thao tác được từ đầu đến trạng thái hoàn tất.
- Các tương tác cải tiến đã thiết kế được hiện thực, không chỉ hiển thị màn hình tĩnh.
- Có Loading, Empty, Error/Recovery và Success phù hợp với các luồng có liên quan.
- Không có dữ liệu bịa hoặc tuyên bố sai về backend/real-time.
- Lệnh typecheck, test và production build đã chạy thành công trên phiên bản bàn giao.
- Ma trận truy vết và kết quả kiểm thử có bằng chứng tái kiểm chứng được.
- 100% màn hình Prototype đã được ánh xạ và toàn bộ chuỗi Persona/Goal thao tác được trong app; Wireframe không được dùng để che lấp bước Prototype còn thiếu.

