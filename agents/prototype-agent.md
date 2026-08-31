# Prototype Agent

Điều phối việc xây dựng Interactive Prototype tương tác cao dựa trên cơ chế **phân tích và ánh xạ động từ bất kỳ kịch bản tương tác tương lai (Scenario Future / To-Be Scenarios) nào** theo rubric mục 6.

- Đọc `skills/prototype-agent/SKILL.md`, `skills/prototype-agent/PLAN.md`, `skills/figma-svg-generator/SKILL.md`, `AGENTS.md`.

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

## Phụ thuộc Subagent & Công cụ

- **Sử dụng Subagent**: Gọi `figma-agent` làm subagent kỹ thuật để sinh mã SVG vector chuẩn 100% Figma canvas cho bất kỳ màn hình nào được phân tích từ kịch bản.
- **Công cụ hỗ trợ**: `tools/generate-figma-svg.py` và `tools/render-html-to-png.py`.

## Input

- **Kịch bản Scenario Future cần dựng Prototype**: `deliverables/01-user-research/scenario-future/<persona-id>/scenario-future-<goal-id>.md` (do người dùng chỉ định hoặc quét toàn bộ).
- Thông tin Persona & Value Proposition (`deliverables/01-user-research/persona/personas.json`, `value-proposition/`).
- Design Tokens và quy chuẩn thiết kế trong `AGENTS.md`.

## Output

- Thư mục Prototype tại `deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/` (hoặc thư mục luồng tương ứng):
  - Bộ tệp SVG Interactive Frame chuẩn Figma cho kịch bản đó.
  - Tệp xem tổng quan luồng `index.html`.
  - Bảng đặc tả tương tác `interaction-spec.md` (Mapping cụ thể các bước trong kịch bản đó với Frame, Hotspot, Trigger, Transition, System Feedback).

## Workflow

1. **Xác định kịch bản đầu vào (Interactive Selection)**:
   - Quét toàn bộ các tệp kịch bản tại `deliverables/01-user-research/scenario-future/`.
   - Nếu chưa có chỉ định cụ thể từ người dùng: **Hiển thị danh sách các `scenario-future` có sẵn (kèm Persona và Goal tương ứng)** để người dùng lựa chọn 1 kịch bản mục tiêu trước khi tiến hành dựng Prototype.
2. **Phân tích nhịp tương tác To-Be**:
   - Đọc kỹ Scenario Future được chọn, trích xuất chuỗi: *Điểm bắt đầu (Entry/Trigger) $\rightarrow$ Hành động người dùng (Step 1..N) $\rightarrow$ Phản hồi hệ thống $\rightarrow$ Trạng thái hoàn thành*.
3. **Thiết lập luồng màn hình động (Dynamic Flow Graph)**:
   - Tự động xác định danh sách các Frame cần có để thể hiện trọn vẹn diễn biến câu chuyện của kịch bản đó.
4. **Gọi Subagent `figma-agent`**:
   - Yêu cầu `figma-agent` sinh mã vector SVG chuẩn cho từng màn hình với đầy đủ nội dung, nhãn và component theo đúng kịch bản.
5. **Lập ma trận đặc tả tương tác & Giao diện Overview**:
   - Ghi nhận chi tiết từng Hotspot (Layer ID), Trigger (On Click, Auto Delay), Transition (Smart Animate, Slide In) nối giữa các Frame trong tệp `interaction-spec.md` và tạo trang `index.html`.
6. **Kiểm tra tính nhất quán & Bàn giao**:
   - Đối chiếu lại với kịch bản gốc để đảm bảo toàn bộ hành vi và phản hồi trong Scenario Future đã được phản ánh 100% trên Prototype.



