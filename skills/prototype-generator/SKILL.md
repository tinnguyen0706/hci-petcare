---
name: prototype-generator
description: Chuyển Storyboard bắt buộc và Scenario Future tương ứng thành bộ SVG Frame nhất quán, tương thích Figma; dùng khi tạo, cập nhật hoặc nghiệm thu Prototype SVG theo Persona và Goal cụ thể.
---

# Prototype Generator

Tạo bộ Prototype SVG từ Storyboard bắt buộc và đối chiếu Scenario Future, không dùng một Flow cố định cho mọi Persona. Kết quả hoàn thành của skill này là các file SVG đã qua kiểm thử tĩnh. Việc import, nối Interaction và kiểm chứng trên Figma thuộc trách nhiệm của người dùng và nằm ngoài phạm vi skill.

## Nguồn chuẩn bắt buộc

Đọc trước khi thao tác:

1. `AGENTS.md` — phạm vi sản phẩm, dữ liệu, Design Tokens toàn dự án và nguyên tắc trung thực.
2. `agents/prototype-agent.md` — input, output và phạm vi của vai trò.
3. `rules/layout-and-typography-rules.md` — nguồn chuẩn duy nhất cho viewport, tọa độ, Typography, khoảng cách, màu triển khai SVG và kiểm thử bố cục.
4. `rules/tool-rules.md` — công cụ và vị trí tệp được phép.
5. `skills/figma-svg-generator/SKILL.md` — quy tắc Layer SVG và khả năng import vào Figma.

Thứ tự áp dụng theo phạm vi: `AGENTS.md` quyết định luật toàn dự án và tính trung thực; layout rules quyết định hình học, Typography và màu triển khai SVG; skill này quyết định workflow Prototype; Figma SVG skill và generator chỉ hỗ trợ kỹ thuật, không được ghi đè ba nguồn trên.

Chỉ đọc Storyboard và Scenario Future của Persona/Goal đã chọn, `deliverables/01-user-research/persona/personas.json` và Value Proposition tương ứng trong `deliverables/01-user-research/value-proposition/`. Không lấy dữ liệu mẫu trong generator làm dữ liệu sản phẩm.

## Đầu vào và tiền điều kiện

Storyboard bắt buộc nằm tại:

`deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/`

Scenario nằm tại:

`deliverables/01-user-research/scenario-future/<persona-id>/scenario-future-<goal-id>.md`

Nếu thiếu Storyboard tương ứng, dừng trước khi tạo thư mục hoặc file Prototype và báo rõ Persona/Goal còn thiếu. Không dùng đường dẫn Storyboard dự phòng và không tự dựng Prototype trực tiếp từ Scenario.

Nếu người dùng chưa chọn Persona/Goal, chỉ liệt kê các luồng có đủ Storyboard và Scenario để họ chọn. Không sinh Prototype trước khi có lựa chọn.

Storyboard quyết định mạch phân cảnh, bối cảnh trực quan và visual continuity; Scenario quyết định User Actions, System Feedbacks và Goal Completion. Nếu hai nguồn mâu thuẫn, dừng và báo điểm không nhất quán thay vì tự ưu tiên hoặc tự sửa nội dung nguồn.

## Workflow

Khi tạo mới hoặc dựng lại toàn bộ Prototype, đọc và thực hiện [PLAN.md](PLAN.md). Khi chỉ audit một artifact có sẵn, dùng Checklist nghiệm thu bên dưới và chỉ đọc các bước trong PLAN liên quan đến lỗi cần kiểm tra.

Có thể giao phần SVG cho `figma-agent` khi agent đó thực sự khả dụng; nếu không, tự thực hiện bằng công cụ chuẩn hoặc SVG trực tiếp và ghi rõ fallback trong báo cáo.

## Quy tắc sinh SVG

- Tuân thủ chính xác viewport, Dynamic Island, Home Indicator, vùng an toàn, Typography và collision rules trong `rules/layout-and-typography-rules.md`.
- Dùng font `Inter` và Design Tokens theo nguồn chuẩn; không tự thêm màu hoặc thay đổi Tech Stack.
- Không dùng emoji màu. Dùng vector đơn sắc, ký tự hình học được cho phép hoặc Text Badge.
- Dùng `<g id="...">` ngữ nghĩa; mỗi ID phải duy nhất trong Frame.
- Chủ động tách dòng SVG; thẻ `<text>` không tự wrap.
- Không đưa giá, cân nặng, tuổi, sản phẩm, tên nhân viên, mã lịch hẹn hoặc dữ liệu khác vào Prototype nếu không truy vết được từ Storyboard, Scenario, Persona hoặc Value Proposition. Không tự tạo ngoại lệ “dữ liệu mô phỏng”; khi thiếu dữ kiện, dùng nhãn phi định lượng bám sát Storyboard/Scenario hoặc dừng và báo thiếu đầu vào.
- Prototype chỉ mô phỏng UI/UX; không tuyên bố có backend hoặc real-time thật.

## Prototype Consistency Contract

Trước khi sinh Frame đầu tiên, xác lập một baseline nội bộ dùng chung cho toàn bộ SVG trong cùng `<persona-id>/<goal-id>`. Không thay đổi baseline giữa Flow trừ khi Storyboard hoặc Scenario bắt buộc.

- **App Shell:** giữ nguyên viewport, Device Frame, Dynamic Island, Status Bar, vùng nội dung, Header và Home Indicator. Bottom Navigation chỉ xuất hiện hoặc biến mất theo một quy tắc điều hướng đã xác định cho toàn Flow.
- **Component Geometry:** Component cùng loại phải giữ geometry nội tại, radius, padding và stroke; App Shell và stable anchors phải giữ nguyên vị trí. Cùng semantic instance phải giữ `x`, `y`, Layer ID và cấu trúc nhóm giữa các SVG trạng thái. Component khác ngữ cảnh có thể đổi vị trí theo layout nhưng không được đổi style tùy tiện.
- **Typography Roles:** cùng một vai trò như Screen Title, Section Title, Card Title, Body, Caption và Button Label phải dùng cùng font-family, font-size, font-weight, line spacing và màu.
- **State Tokens:** selected, unselected, disabled, warning, error, success và completed phải có một cách biểu diễn thống nhất; không đổi màu hoặc ký hiệu của cùng trạng thái giữa các Frame.
- **Navigation:** vị trí, kích thước, nhãn và trạng thái trực quan của Back, Close, CTA chính, CTA phụ, Stepper và Bottom Navigation phải nhất quán giữa các SVG.
- **Data Continuity:** thú cưng, dịch vụ, ngày, giờ, yêu cầu đặc biệt và trạng thái đã chọn phải được giữ nhất quán giữa các Frame. Chỉ thay đổi khi có User Action hoặc System Feedback được mô tả rõ.
- **Naming:** Frame ID và Layer ID dùng một convention xuyên suốt. Các vùng tương tác dự kiến vẫn phải có Layer ID ngữ nghĩa để người dùng tự nối trên Figma. Một Component lặp lại phải dùng cùng base name; state hoặc instance được phân biệt bằng suffix rõ ràng.
- **Content Semantics:** cùng một đối tượng phải dùng cùng tên gọi, cách viết hoa và nhãn trạng thái trong toàn Flow.
- **Storyboard Continuity:** mỗi Frame phải truy vết được về một panel hoặc nhịp chuyển tiếp của Storyboard; không tự thêm màn hình làm thay đổi câu chuyện nếu Scenario không yêu cầu.

Mọi sai khác có chủ đích giữa các Frame phải truy vết được về Storyboard hoặc Scenario; sai khác không có lý do được xem là lỗi nhất quán.

## Output

Chỉ tạo trong:

`deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/`

Cho phép:

- `01_<screen-name>.svg`, `02_<screen-name>.svg`, ...

Chỉ tạo file `.svg`. Không tạo `interaction-spec.md`, HTML, PNG, script tạm, log hoặc Markdown phụ. Không dùng output mặc định ở gốc `deliverables/`.

## Checklist nghiệm thu

- Mỗi nhịp trong Scenario có Frame hoặc System Feedback tương ứng.
- Mỗi Frame truy vết được về Storyboard và không mâu thuẫn với Scenario.
- Tất cả SVG parse được, đúng viewport và có các thành phần thiết bị bắt buộc.
- Layer ID không trùng; các vùng tương tác dự kiến có Layer ID ngữ nghĩa và nhất quán.
- Không có text overflow, va chạm ngang/dọc hoặc emoji màu.
- Cross-frame Consistency Test đạt cho App Shell, Component geometry, Typography roles, State Tokens, Navigation, Layer naming và Data Continuity.
- Chỉ có `.svg` trong thư mục bàn giao.
- Không có dữ liệu không truy vết và không có tuyên bố backend sai bản chất.
- Không thực hiện hoặc tuyên bố đã import, wire hay kiểm chứng trên Figma.
