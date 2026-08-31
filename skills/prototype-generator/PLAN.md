# Kế hoạch thực thi Prototype Generator

Áp dụng kế hoạch này khi tạo mới hoặc dựng lại trọn vẹn một Prototype từ Scenario Future. Không dùng kế hoạch để mở rộng sản phẩm ngoài Goal đã chọn.

## Điều kiện bắt đầu

- Đã xác định đúng `<persona-id>` và `<goal-id>`.
- Scenario Future mục tiêu tồn tại và người dùng đã chọn rõ nếu có nhiều Scenario.
- Persona và Value Proposition tương ứng có đủ dữ kiện cần dùng.
- Đã đọc toàn bộ nguồn chuẩn bắt buộc trong `SKILL.md`.

Nếu thiếu Scenario hoặc lựa chọn của người dùng, dừng trước khi sinh Frame. Nếu thiếu dữ kiện cụ thể, dùng nội dung phi định lượng có nguồn hoặc báo thiếu; không tự điền số liệu.

## Giai đoạn 1 — Phân rã Scenario

Trích xuất thành bảng làm việc nội bộ:

| Thành phần | Nội dung cần xác định |
|---|---|
| Trigger/Entry | Người dùng bắt đầu từ đâu và trong bối cảnh nào |
| User Actions | Chuỗi thao tác theo đúng thứ tự câu chuyện |
| System Feedbacks | Phản hồi tức thì sau từng thao tác |
| Goal Completed | Trạng thái kết thúc giải quyết pain point nào |
| Evidence | Câu hoặc dữ kiện nguồn hỗ trợ nội dung UI |

Không đưa bảng nội bộ thành file bàn giao riêng.

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
- Hotspot ID, Trigger, Destination và System Feedback.
- Điều kiện giữ hoặc xóa trạng thái khi quay lại.

Layer ID phải duy nhất trong từng SVG và phải trùng chính tả với Interaction Spec.

## Giai đoạn 4 — Sinh SVG

1. Tạo đúng thư mục `deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/`.
2. Dùng `tools/generate-figma-svg.py` hoặc viết SVG trực tiếp; không tạo script mới.
3. Sửa đầu ra của generator nếu khác `rules/layout-and-typography-rules.md`; layout rules luôn quyết định kết quả cuối.
4. Áp dụng viewport, thiết bị, vùng an toàn, Typography, Design Tokens và iconography từ nguồn chuẩn.
5. Không dùng emoji, dữ liệu mẫu của generator hoặc giá trị không truy vết.
6. Chỉ tạo các file SVG cần thiết cho Flow đã phân tích.

## Giai đoạn 5 — Interaction Spec

Tạo duy nhất `interaction-spec.md` gồm:

1. Persona, Goal, Scenario nguồn và phạm vi mô phỏng UI/UX.
2. Dynamic Flow Graph.
3. Danh sách Frame ID ↔ tên SVG ↔ mục đích.
4. Ma trận Source Frame, Hotspot/Layer ID, Trigger, Destination, Transition và System Feedback.
5. Điều hướng ngược và quy tắc giữ trạng thái.
6. Checklist đối chiếu từng nhịp Scenario.
7. Trạng thái Figma: URL, version, ngày kiểm chứng và kết quả chạy thử; hoặc ghi rõ `Chưa wire trên Figma`.

Không ghi URL, version hoặc kết quả chạy thử nếu chưa có bằng chứng thực tế.

## Giai đoạn 6 — Kiểm thử tĩnh

Chỉ chuyển sang bàn giao khi đạt toàn bộ gate:

- Mọi SVG parse XML thành công.
- Viewport và thành phần thiết bị khớp layout rules.
- Không trùng Layer ID.
- Mọi Hotspot trong Interaction Spec tồn tại trong SVG nguồn.
- Không tràn lề, va chạm ngang/dọc hoặc khoảng cách dòng sai.
- Không có emoji màu, HTML, PNG, script, log hay Markdown phụ.
- Không có nội dung hoặc số liệu không truy vết.
- Mỗi User Action và System Feedback trong Scenario đã được ánh xạ.

Nếu không có renderer trực quan, ghi rõ giới hạn QA; không tuyên bố đã kiểm tra bằng mắt.

## Giai đoạn 7 — Kiểm chứng Figma

Khi có quyền truy cập Figma:

1. Import các SVG vào cùng một Page theo thứ tự Flow.
2. Đặt Starting Point.
3. Nối Hotspot, Trigger, Transition và Component Variant theo Interaction Spec.
4. Chạy thử từ Entry đến Goal Completed, bao gồm các nhánh quay lại quan trọng.
5. Ghi URL/version và kết quả kiểm chứng thật vào `interaction-spec.md`.

Khi không có quyền truy cập Figma, dừng ở trạng thái **Prototype assets/spec**. Không gọi sản phẩm là Interactive Prototype hoàn chỉnh.

## Điều kiện hoàn thành

- **Prototype assets/spec hoàn thành:** SVG và Interaction Spec đạt toàn bộ kiểm thử tĩnh; Interaction Spec ghi `Chưa wire trên Figma`.
- **Interactive Prototype hoàn thành:** đạt điều kiện trên, đã wire và chạy thử trên Figma, có URL/version/bằng chứng thực tế.

Khi báo cáo, nêu rõ trạng thái nào đã đạt, các file bàn giao và mọi giới hạn kiểm chứng còn lại.
