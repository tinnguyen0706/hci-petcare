# Kế hoạch thực thi Prototype Generator

Áp dụng kế hoạch này khi tạo mới hoặc dựng lại trọn vẹn một Prototype từ Wireframe tổng thể, Storyboard bắt buộc và Scenario Future tương ứng. Không dùng kế hoạch để mở rộng sản phẩm ngoài Goal đã chọn.

## Điều kiện bắt đầu

- Đã xác định đúng `<persona-id>` và `<goal-id>`.
- Hệ thống Wireframe tổng thể đã tồn tại tại `deliverables/02-interaction-design/wireframe/` (gồm các màn hình SVG và tài liệu đặc tả `wireframe-spec.md`).
- Storyboard tương ứng tồn tại tại `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/`.
- Scenario Future mục tiêu tồn tại và người dùng đã chọn rõ nếu có nhiều Scenario.
- Persona và Value Proposition tương ứng có đủ dữ kiện cần dùng.
- Đã đọc toàn bộ nguồn chuẩn bắt buộc trong `SKILL.md`.

Nếu thiếu Wireframe, Storyboard, Scenario hoặc lựa chọn của người dùng, dừng trước khi tạo bất kỳ output Prototype nào. Nếu thiếu dữ kiện cụ thể, dùng nội dung phi định lượng có nguồn hoặc báo thiếu; không tự điền số liệu.

## Giai đoạn 1 — Đối chiếu Wireframe, Storyboard và Scenario

Đọc Wireframe tổng thể để kế thừa cấu trúc layout, component geometry và quy chuẩn phân cấp giao diện; đọc Storyboard để xác định panel, bối cảnh trực quan, cảm xúc và visual continuity; đọc Scenario để xác định hành vi và phản hồi hệ thống. Trích xuất thành bảng làm việc nội bộ:

| Thành phần | Nội dung cần xác định |
|---|---|
| Trigger/Entry | Người dùng bắt đầu từ đâu và trong bối cảnh nào |
| User Actions | Chuỗi thao tác theo đúng thứ tự câu chuyện |
| System Feedbacks | Phản hồi tức thì sau từng thao tác |
| Goal Completed | Trạng thái kết thúc giải quyết pain point nào |
| Evidence | Câu hoặc dữ kiện nguồn hỗ trợ nội dung UI |
| Storyboard Mapping | Panel hoặc nhịp chuyển tiếp tương ứng |

Không đưa bảng nội bộ thành file bàn giao riêng.

Nếu Storyboard và Scenario khác nhau về thứ tự hành động, kết quả hoặc dữ liệu, dừng và báo xung đột đầu vào trước khi lập Flow.

## Giai đoạn 2 — Dynamic Flow Graph

Xác định số Frame theo diễn biến thực tế, không gán cứng. Với mỗi bước, quyết định:

- Cần Frame riêng, Component Variant hay chỉ System Feedback trong cùng Frame.
- Có nhánh quay lại, trạng thái chưa chọn, lỗi hoặc xác nhận hay không.
- Điểm kết thúc nào chứng minh Goal đã hoàn thành.

Đặt tên Frame theo thứ tự `01_<screen-name>` đến `NN_<screen-name>`.

## Giai đoạn 3 — Frame Contract

Trước khi vẽ, lập danh sách nội bộ cho từng Frame:

- Frame ID và tên file.
- Nội dung có nguồn được phép hiển thị.
- Component chính và trạng thái active/inactive.
- Layer ID cho Component và vùng tương tác dự kiến.
- Trạng thái trực quan trước/sau của từng nhịp tương tác.
- Điều kiện giữ hoặc xóa trạng thái khi quay lại.

Layer ID phải duy nhất trong từng SVG và dùng cùng convention trên toàn Flow.

Trước khi sang Giai đoạn 4, chốt **Flow Baseline** dùng chung:

- App Shell và vùng nội dung.
- Bảng Typography role.
- Component geometry cho Header, Card, CTA, Stepper và Navigation.
- State Tokens cho selected, disabled, warning, error, success và completed.
- Quy ước Frame ID và Layer ID.
- Quy tắc giữ Data State và trạng thái trực quan giữa các Frame.
- Quy tắc ánh xạ Frame về panel Storyboard và xử lý visual continuity.

Baseline chỉ dùng trong quá trình tạo và kiểm thử; không tạo file tài liệu riêng.

## Giai đoạn 4 — Sinh SVG

1. Tạo đúng thư mục `deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/`.
2. Dùng `tools/generate-figma-svg.py` hoặc viết SVG trực tiếp; không tạo script mới.
3. Sửa đầu ra của generator nếu khác `rules/layout-and-typography-rules.md`; layout rules luôn quyết định kết quả cuối.
4. Áp dụng viewport, thiết bị, vùng an toàn, Typography, Design Tokens và iconography từ nguồn chuẩn.
5. Không dùng emoji, dữ liệu mẫu của generator hoặc giá trị không truy vết.
6. Chỉ tạo các file SVG cần thiết cho Flow đã phân tích.
7. Tái sử dụng Flow Baseline cho mọi Frame; không căn chỉnh từng màn hình độc lập theo cảm tính.

## Giai đoạn 5 — Hoàn thiện bộ SVG theo Flow

1. Bảo đảm mỗi Frame cần thiết đã có một file SVG theo đúng thứ tự.
2. Tạo SVG trạng thái trung gian khi người dùng cần nhìn thấy thay đổi trực quan quan trọng.
3. Giữ Frame ID, Layer ID, App Shell, Typography, Component geometry và Data State nhất quán.
4. Bảo đảm mỗi SVG truy vết được về Storyboard và không mâu thuẫn với Scenario.
5. Không tạo `interaction-spec.md` hoặc bất kỳ file bàn giao nào ngoài SVG.

## Giai đoạn 6 — Kiểm thử tĩnh

Chỉ chuyển sang bàn giao khi đạt toàn bộ gate:

- Mọi SVG parse XML thành công.
- Viewport và thành phần thiết bị khớp layout rules.
- Không trùng Layer ID.
- Các vùng tương tác dự kiến có Layer ID ngữ nghĩa, duy nhất và nhất quán.
- Không tràn lề, va chạm ngang/dọc hoặc khoảng cách dòng sai.
- Không có emoji màu, HTML, PNG, script, log hay Markdown phụ.
- Không có nội dung hoặc số liệu không truy vết.
- Mỗi User Action và System Feedback trong Scenario đã được ánh xạ.
- Mỗi Frame kế thừa cấu trúc Wireframe và ánh xạ về Storyboard panel hoặc transition hợp lệ.
- App Shell, Typography roles, Component geometry, State Tokens, Navigation và naming convention giống nhau trên toàn bộ Frame.
- Cùng semantic instance giữ nguyên Layer ID, cấu trúc nhóm và geometry giữa các SVG trạng thái liên quan.
- Data State chỉ thay đổi sau User Action hoặc System Feedback có trong Storyboard/Scenario.

Nếu không có renderer trực quan, ghi rõ giới hạn QA; không tuyên bố đã kiểm tra bằng mắt.

## Giai đoạn 7 — Bàn giao bộ SVG

1. Kiểm tra thư mục đầu ra chỉ chứa các file `.svg` theo thứ tự Flow.
2. Báo cáo danh sách file đã tạo và kết quả kiểm thử tĩnh.
3. Nêu rõ bộ SVG tương thích để người dùng tự import và kết nối trên Figma.
4. Không mở Figma, không import, không nối Interaction, không chạy thử Figma và không yêu cầu URL/version.

## Điều kiện hoàn thành

- **Prototype SVG hoàn thành:** toàn bộ SVG cần thiết cho Flow đã được tạo, đạt kiểm thử tĩnh và Cross-frame Consistency Test.

Khi báo cáo, nêu các file SVG bàn giao và mọi giới hạn kiểm thử tĩnh còn lại. Việc tạo Interactive Prototype trên Figma không thuộc phạm vi hoàn thành của agent.
