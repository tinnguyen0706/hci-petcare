# Prototype Agent

Điều phối việc xây dựng bộ Prototype SVG nhất quán từ **Storyboard bắt buộc**, đồng thời đối chiếu Scenario Future để bảo toàn hành vi và phản hồi hệ thống.

- Đọc `skills/prototype-generator/SKILL.md`, `skills/figma-svg-generator/SKILL.md`, `rules/tool-rules.md`, `rules/layout-and-typography-rules.md`, `AGENTS.md`.

## Dùng agent này khi

- Cần chuyển hóa Storyboard và Scenario tương ứng thành bộ màn hình SVG theo Flow.
- Cần mô phỏng trung thực các điểm chạm (Touchpoints), phản hồi của hệ thống (System Feedbacks) và sự chuyển đổi trạng thái giao diện theo diễn biến của câu chuyện.
- Cần xuất bản các asset vector SVG tương thích Figma; người dùng tự import và kết nối Interaction.

## Tôn chỉ cốt lõi

1. **Phân tích động theo từng Kịch bản (Dynamic Scenario-Driven Flow)**:
   - **Không áp đặt một khung flow cố định cho mọi kịch bản**. Mỗi Scenario Future có bối cảnh, mục tiêu và chuỗi hành động khác nhau (ví dụ: luồng đặt lịch tức thì, luồng xử lý dị ứng khẩn cấp, luồng theo dõi tiến độ thời gian thực, luồng quản lý đa hồ sơ, luồng tra cứu lịch sử và rebook...).
   - Agent phải đọc nội dung chi tiết của kịch bản được chọn, trích xuất chuỗi:
     $$\text{Bối cảnh / Trigger} \longrightarrow \text{Chuỗi hành động (User Actions)} \longrightarrow \text{Phản hồi hệ thống (System Feedbacks)} \longrightarrow \text{Kết quả đạt được (Goal Completed)}$$
   - Tự động xác định số lượng màn hình cần thiết, các trạng thái trung gian và nhánh rẽ phù hợp với câu chuyện đó.
2. **Trạng thái tương tác trực quan**:
   - Thể hiện các trạng thái trước/sau của thao tác bằng các SVG riêng hoặc state layer rõ ràng: chọn nút, chuyển tab, chọn khung giờ, xác nhận và cập nhật nội dung.
3. **Minh bạch bản chất Prototype**:
   - Mô phỏng tương tác UI/UX rõ ràng; không tuyên bố prototype mô phỏng là hệ thống backend real-time khi chưa lập trình.
4. **Chuẩn hóa Figma & Design Tokens**:
   - Áp dụng Design Tokens trong `AGENTS.md`; dùng `rules/layout-and-typography-rules.md` làm nguồn chuẩn triển khai SVG khi có khác biệt về hình học, Typography hoặc màu trạng thái.
5. **Định dạng bàn giao SVG-only**:
   - Chỉ tạo các tệp vector `.svg`. Tuyệt đối không tạo `.html`, `interaction-spec.md`, PNG hoặc tài liệu phụ.

## Phụ thuộc Subagent & Công cụ

- **Sử dụng Subagent**: Gọi `figma-agent` khi subagent này thực sự khả dụng. Nếu không có, `prototype-agent` tự sinh SVG bằng công cụ chuẩn hoặc mã SVG trực tiếp và ghi rõ fallback trong báo cáo.
- **Công cụ hỗ trợ có sẵn**: `tools/generate-figma-svg.py`.
- **Quy định nghiêm ngặt về công cụ**: Tuyệt đối **KHÔNG** tự ý tạo thêm bất kỳ tệp script/tool mới nào trong thư mục `tools/` hoặc project; chỉ tạo các tệp kết quả đầu ra theo đúng đặc tả tại `deliverables/`.

## Input

- **Tiền điều kiện bắt buộc (Mandatory Precondition)**: Bộ **Storyboard** hoàn chỉnh tương ứng tại `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/`.
- **Kịch bản Scenario Future**: `deliverables/01-user-research/scenario-future/<persona-id>/scenario-future-<goal-id>.md`.
- Thông tin Persona & Value Proposition (`deliverables/01-user-research/persona/personas.json`, `deliverables/01-user-research/value-proposition/`).
- Design Tokens và quy chuẩn thiết kế trong `AGENTS.md`.

## Output

- Thư mục Prototype tại `deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/`:
  - Chỉ gồm bộ tệp SVG Frame chuẩn Figma theo thứ tự Flow, ví dụ `01_screen_name.svg`, `02_screen_name.svg`...
  - Không import hoặc kết nối trên Figma; phần này do người dùng tự thực hiện.

## Workflow

Thực hiện toàn bộ workflow, kiểm thử và quy tắc bàn giao trong `skills/prototype-generator/SKILL.md`; không duy trì một bản workflow trùng lặp tại adapter này.
