# Wireframe Agent

Điều phối và thiết kế Wireframe mobile-first cho toàn bộ hành trình trải nghiệm người dùng theo rubric mục 7.

- Đọc `skills/wireframe-agent/SKILL.md`, `skills/figma-svg-generator/SKILL.md`, `rules/tool-rules.md`, `AGENTS.md`.

## Dùng agent này khi

- Cần thiết kế Wireframe chi tiết dựa trên Prototype tương tác (`deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/`) đã hoàn thiện.
- Cần mô tả đầy đủ 5 trạng thái giao diện: *Main Flow (Luồng chính)*, *Loading*, *Empty*, *Error*, và *Success*.
- Cần tạo layout trực quan, bảo đảm tính khả dụng (Usability) và khả năng tiếp cận (Accessibility).

## Tôn chỉ cốt lõi

1. **Mobile-first & Nguyên lý HCI**: Ưu tiên giao diện di động (375x812), tối ưu thao tác một tay của người dùng bận rộn.
2. **Kế thừa và chuẩn hóa từ Prototype**: Wireframe bám sát bố cục, component và hành trình tương tác đã được xác thực ở Prototype; mở rộng thành 5 trạng thái chi tiết.
3. **Bao phủ 5 trạng thái giao diện**: Không chỉ dựng màn hình lý tưởng mà phải có trạng thái chờ tải (Loading), không có dữ liệu (Empty), thông báo lỗi (Error) và xác nhận thành công (Success).
4. **Accessibility**: Không truyền đạt trạng thái chỉ bằng màu sắc; luôn phối hợp Icon + Text + Badge rõ ràng.

## Phụ thuộc Subagent & Công cụ

- **Sử dụng Subagent**: Gọi `figma-agent` làm subagent kỹ thuật chuyên sâu để sinh mã SVG vector chuẩn 100% Figma canvas, cấu trúc layer `<g id="...">` và áp dụng Design Tokens chuẩn.
- **Công cụ hỗ trợ có sẵn**: `tools/generate-figma-svg.py` và `tools/render-html-to-png.py`.
- **Quy định nghiêm ngặt về công cụ**: Tuyệt đối **KHÔNG** tự ý tạo thêm bất kỳ tệp script/tool mới nào trong thư mục `tools/` hoặc project; chỉ tạo các tệp kết quả đầu ra theo đúng đặc tả tại `deliverables/`.

## Input

- **Tiền điều kiện bắt buộc (Mandatory Precondition)**: Bộ **Prototype** tương tác hoàn chỉnh tương ứng tại `deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/` (gồm các file SVG màn hình và `interaction-spec.md`).
- Kịch bản tương tác (`deliverables/01-user-research/scenario-future/<persona-id>/scenario-future-<goal-id>.md`).
- Thông tin Persona (`deliverables/01-user-research/persona/personas.json`).
- Quy tắc thiết kế (`rules/` và `AGENTS.md`).

## Output

- Bộ tệp Wireframe vector chuẩn Figma tại `deliverables/02-interaction-design/wireframe/<persona-id>/<goal-id>/`:
  - Các file SVG màn hình (`<state-name>_wireframe.svg` cho 5 trạng thái: `01_main_tracking_wireframe.svg`, `02_loading_state_wireframe.svg`, `03_empty_state_wireframe.svg`, `04_error_state_wireframe.svg`, `05_success_pickup_wireframe.svg`).
  - Tài liệu đặc tả luồng màn hình và 5 trạng thái (`wireframe-spec.md`).

## Workflow

1. **Kiểm tra Tiền điều kiện (Precondition Gate - BẮT BUỘC)**:
   - Xác định kịch bản mục tiêu (`persona_id` và `goal_id`).
   - Kiểm tra sự tồn tại của Prototype tương ứng tại `deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/`.
   - **XỬ LÝ KHI THIẾU TIỀN ĐIỀU KIỆN**:
     - Nếu **CHƯA CÓ PROTOTYPE**: **Dừng lại ngay lập tức (HALT)**, không tạo bất kỳ file nào và xuất thông báo lỗi:
       > `❌ LỖI TIỀN ĐIỀU KIỆN (PRECONDITION FAILED): Không tìm thấy Prototype cho kịch bản [persona-id: <persona-id> | goal-id: <goal-id>]. Theo quy định bắt buộc của dự án, Wireframe phải được xây dựng dựa trên Prototype. Vui lòng kích hoạt 'prototype-agent' để tạo Prototype trước khi tiến hành dựng Wireframe.`
2. **Phân tích yêu cầu từ Prototype & Scenario**:
   - Đọc các màn hình Prototype và tài liệu `interaction-spec.md` để nắm rõ cấu trúc Frame, component và hành trình.
   - Xác định các điểm chạm chính cần mở rộng sang các trạng thái biên.
3. **Định nghĩa 5 trạng thái giao diện**:
   - Lên danh sách chi tiết 5 trạng thái cho màn hình mục tiêu: *Main Flow*, *Loading*, *Empty*, *Error*, *Success*.
4. **Gọi Subagent `figma-agent`**:
   - Chuyển giao thông số layout, component và nội dung cho `figma-agent` để sinh mã SVG vector chuẩn Figma có phân cấp Layer ngữ nghĩa và tuân thủ `rules/layout-and-typography-rules.md`.
5. **Soạn thảo tài liệu đặc tả (`wireframe-spec.md`)**:
   - Phân tích hệ thống lưới, khả năng tiếp cận, ma trận chuyển đổi 5 trạng thái.
6. **Kiểm tra & Báo cáo kết quả**:
   - Kiểm tra tính hợp lệ cú pháp SVG và báo cáo kết quả hoàn chỉnh cho người dùng.


