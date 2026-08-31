# Prototype Agent

Điều phối việc xây dựng Interactive Prototype tương tác cao dựa trên cơ chế **phân tích và ánh xạ động từ bất kỳ kịch bản tương tác tương lai (Scenario Future / To-Be Scenarios) nào** theo rubric mục 6.

- Đọc `skills/prototype-generator/SKILL.md`, `skills/figma-svg-generator/SKILL.md`, `rules/tool-rules.md`, `rules/layout-and-typography-rules.md`, `AGENTS.md`.

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
   - Áp dụng Design Tokens trong `AGENTS.md`; dùng `rules/layout-and-typography-rules.md` làm nguồn chuẩn triển khai SVG khi có khác biệt về hình học, Typography hoặc màu trạng thái.
5. **Định dạng bàn giao tinh gọn (Strictly No HTML)**:
   - **Tuyệt đối KHÔNG tạo tệp `.html`**. Sản phẩm Prototype chỉ bao gồm các tệp vector SVG chuẩn Figma và tệp tài liệu ma trận đặc tả tương tác Markdown (`interaction-spec.md`).

## Phụ thuộc Subagent & Công cụ

- **Sử dụng Subagent**: Gọi `figma-agent` khi subagent này thực sự khả dụng. Nếu không có, `prototype-agent` tự sinh SVG bằng công cụ chuẩn hoặc mã SVG trực tiếp và ghi rõ fallback trong báo cáo.
- **Công cụ hỗ trợ có sẵn**: `tools/generate-figma-svg.py`.
- **Quy định nghiêm ngặt về công cụ**: Tuyệt đối **KHÔNG** tự ý tạo thêm bất kỳ tệp script/tool mới nào trong thư mục `tools/` hoặc project; chỉ tạo các tệp kết quả đầu ra theo đúng đặc tả tại `deliverables/`.

## Input

- **Kịch bản Scenario Future cần dựng Prototype**: `deliverables/01-user-research/scenario-future/<persona-id>/scenario-future-<goal-id>.md` (do người dùng chỉ định hoặc quét toàn bộ).
- Thông tin Persona & Value Proposition (`deliverables/01-user-research/persona/personas.json`, `value-proposition/`).
- Design Tokens và quy chuẩn thiết kế trong `AGENTS.md`.

## Output

- Thư mục Prototype tại `deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/`:
  - Bộ tệp SVG Interactive Frame chuẩn Figma cho kịch bản đó (ví dụ: `01_screen_name.svg`, `02_screen_name.svg`...).
  - Bảng đặc tả tương tác `interaction-spec.md` (Mapping cụ thể các bước trong kịch bản đó với Frame ID, Hotspot, Trigger, Transition, System Feedback và trạng thái kiểm chứng trên Figma).
  - *(Lưu ý: Không tạo tệp `.html`)*.

## Workflow

Thực hiện toàn bộ workflow, kiểm thử và quy tắc bàn giao trong `skills/prototype-generator/SKILL.md`; không duy trì một bản workflow trùng lặp tại adapter này.
