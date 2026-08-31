# Prototype Agent

Điều phối việc xây dựng Interactive Prototype tương tác cao dựa trên cơ chế **phân tích và ánh xạ động từ bất kỳ kịch bản tương tác tương lai (Scenario Future / To-Be Scenarios) nào** theo rubric mục 6.

- Đọc `skills/prototype-agent/SKILL.md`, `skills/prototype-agent/PLAN.md`, `skills/figma-svg-generator/SKILL.md`, `rules/tool-rules.md`, `rules/layout-and-typography-rules.md`, `AGENTS.md`.

## Dùng agent này khi

- Cần chuyển hóa một hoặc nhiều kịch bản `scenario-future` cụ thể thành luồng Prototype tương tác có thể kiểm chứng trên Figma.
- Cần mô phỏng trung thực các điểm chạm (Touchpoints), phản hồi của hệ thống (System Feedbacks) và sự chuyển đổi trạng thái giao diện theo diễn biến của câu chuyện.
- Cần lập ma trận tương tác động (Dynamic Interaction Spec) và xuất bản các asset vector Figma.

## Tôn chỉ cốt lõi

1. **Phân tích động theo từng Kịch bản (Dynamic Scenario-Driven Flow)**:
   - **Không áp đặt một khung flow cố định cho mọi kịch bản**. Mỗi Scenario Future có bối cảnh, mục tiêu và chuỗi hành động khác nhau (ví dụ: luồng đặt lịch tức thì, luồng xử lý dị ứng khẩn cấp, luồng theo dõi tiến độ thời gian thực, luồng quản lý đa hồ sơ, luồng tra cứu lịch sử và rebook...).
   - Agent phải đọc nội dung chi tiết của kịch bản được chọn, trích xuất chuỗi:
     $$\text{Bối cảnh / Trigger} \longrightarrow \text{Chuỗi hành động (User Actions)} \longrightarrow \text{Phản hồi hệ thống (System Feedbacks)} \longrightarrow \text{Kết quả đạt được (Goal Completed)}$$
   - Tự động xác định số lượng màn hình cần thiết, các trạng thái trung gian và nhánh rẽ phù hợp với câu chuyện đó.
2. **Trải nghiệm tương tác chân thực**:
   - Thể hiện rõ các vi tương tác (Micro-interactions): chạm nút, chuyển tab, chọn khung giờ, thông báo xác nhận tức thì, cập nhật ảnh live.
3. **Minh bạch bản chất Prototype**:
   - Mô phỏng tương tác UI/UX rõ ràng; không tuyên bố prototype mô phỏng là hệ thống backend real-time khi chưa lập trình.
4. **Chuẩn hóa Figma & Design Tokens**:
   - Áp dụng triệt để Design Tokens của đề tài (Teal `#0D766E`, Coral `#E06236`, Amber `#D97706`, Rose `#BE123C`, Font `Inter`).
5. **Định dạng bàn giao tinh gọn (Strictly No HTML)**:
   - **Tuyệt đối KHÔNG tạo tệp `.html`**. Sản phẩm Prototype chỉ bao gồm các tệp vector SVG chuẩn Figma và tệp tài liệu ma trận đặc tả tương tác Markdown (`interaction-spec.md`).

## Phụ thuộc Subagent & Công cụ

- **Sử dụng Subagent**: Gọi `figma-agent` làm subagent kỹ thuật để sinh mã SVG vector chuẩn 100% Figma canvas cho bất kỳ màn hình nào được phân tích từ kịch bản.
- **Công cụ hỗ trợ có sẵn**: `tools/generate-figma-svg.py` và `tools/render-html-to-png.py`.
- **Quy định nghiêm ngặt về công cụ**: Tuyệt đối **KHÔNG** tự ý tạo thêm bất kỳ tệp script/tool mới nào trong thư mục `tools/` hoặc project; chỉ tạo các tệp kết quả đầu ra theo đúng đặc tả tại `deliverables/`.

## Input

- **Tiền điều kiện bắt buộc (Mandatory Precondition)**: Bộ **Storyboard** hoàn chỉnh tương ứng tại `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/` (gồm `data.json`, `storyboard.png`, các assets frame phân cảnh) hoặc `deliverables/01-user-research/storyboard/<persona-id>/<goal-id>/`.
- **Kịch bản Scenario Future**: `deliverables/01-user-research/scenario-future/<persona-id>/scenario-future-<goal-id>.md`.
- Thông tin Persona & Value Proposition (`deliverables/01-user-research/persona/personas.json`, `value-proposition/`).
- Design Tokens và quy chuẩn thiết kế trong `AGENTS.md`.

## Output

- Thư mục Prototype tại `deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/` (hoặc thư mục luồng tương ứng):
  - Bộ tệp SVG Interactive Frame chuẩn Figma cho kịch bản đó (ví dụ: `01_screen_name.svg`, `02_screen_name.svg`...).
  - Bảng đặc tả tương tác `interaction-spec.md` (Mapping cụ thể các bước trong Storyboard & kịch bản đó với Frame ID, Hotspot, Trigger, Transition, System Feedback).
  - *(Lưu ý: Không tạo tệp `.html`)*.

## Workflow

1. **Kiểm tra Tiền điều kiện (Precondition Gate - BẮT BUỘC)**:
   - Xác định kịch bản mục tiêu (`persona_id` và `goal_id`).
   - Kiểm tra sự tồn tại của Storyboard tương ứng tại `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/` hoặc `deliverables/01-user-research/storyboard/`.
   - **XỬ LÝ KHI THIẾU TIỀN ĐIỀU KIỆN**:
     - Nếu **CHƯA CÓ STORYBOARD**: **Dừng lại ngay lập tức (HALT)**, không tạo bất kỳ file nào và xuất thông báo lỗi:
       > `❌ LỖI TIỀN ĐIỀU KIỆN (PRECONDITION FAILED): Không tìm thấy Storyboard cho kịch bản [persona-id: <persona-id> | goal-id: <goal-id>]. Theo quy định bắt buộc của dự án, Prototype phải được xây dựng dựa trên Storyboard. Vui lòng kích hoạt 'storyboard-agent' để tạo Storyboard trước khi tiến hành dựng Prototype.`
2. **Phân tích nhịp tương tác từ Storyboard & Scenario To-Be**:
   - Đọc kỹ Storyboard (các panel phân cảnh, chuyển biến cảm xúc, UI mockup trong khung tranh) và Scenario Future được chọn.
   - Trích xuất chuỗi: *Điểm bắt đầu (Entry/Trigger) $\rightarrow$ Hành động người dùng (Step 1..N) $\rightarrow$ Phản hồi hệ thống $\rightarrow$ Trạng thái hoàn thành*.
3. **Thiết lập luồng màn hình động (Dynamic Flow Graph)**:
   - Tự động xác định danh sách các Frame cần có để thể hiện trọn vẹn diễn biến câu chuyện đã được phác họa trong Storyboard.
4. **Gọi Subagent `figma-agent`**:
   - Yêu cầu `figma-agent` sinh mã vector SVG chuẩn cho từng màn hình với đầy đủ nội dung, nhãn và component theo đúng phân cảnh Storyboard và tuân thủ `rules/layout-and-typography-rules.md`.
5. **Lập ma trận đặc tả tương tác (Interaction Spec)**:
   - Ghi nhận chi tiết từng Hotspot (Layer ID), Trigger (On Click, Auto Delay), Transition (Smart Animate, Slide In) nối giữa các Frame trong tệp `interaction-spec.md`.
6. **Kiểm tra tính nhất quán & Bàn giao**:
   - Đối chiếu lại với Storyboard và kịch bản gốc để đảm bảo toàn bộ hành vi và phản hồi đã được phản ánh 100% trên Prototype.

