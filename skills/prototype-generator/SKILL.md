tỏn---
name: prototype-generator
description: Chuyển Scenario Future của dự án HCI Petcare thành bộ SVG Frame chuẩn Figma và Interaction Spec có thể kiểm chứng; dùng khi tạo, cập nhật hoặc nghiệm thu Prototype theo Persona và Goal cụ thể.
---

# Prototype Generator

Tạo Prototype theo Scenario, không dùng một flow cố định cho mọi Persona. Chỉ tuyên bố hoàn thành Interactive Prototype khi các Frame đã được nối và chạy thử trên Figma; nếu mới có SVG và đặc tả, gọi đúng là **Prototype assets/spec**.

## Nguồn chuẩn bắt buộc

Đọc trước khi thao tác:

1. `AGENTS.md` — phạm vi sản phẩm, dữ liệu, Design Tokens toàn dự án và nguyên tắc trung thực.
2. `agents/prototype-agent.md` — input, output và phạm vi của vai trò.
3. `rules/layout-and-typography-rules.md` — nguồn chuẩn duy nhất cho viewport, tọa độ, Typography, khoảng cách, màu triển khai SVG và kiểm thử bố cục.
4. `rules/tool-rules.md` — công cụ và vị trí tệp được phép.
5. `skills/figma-svg-generator/SKILL.md` — quy tắc Layer SVG và khả năng import vào Figma.

Thứ tự áp dụng theo phạm vi: `AGENTS.md` quyết định luật toàn dự án và tính trung thực; layout rules quyết định hình học, Typography và màu triển khai SVG; skill này quyết định workflow Prototype; Figma SVG skill và generator chỉ hỗ trợ kỹ thuật, không được ghi đè ba nguồn trên.

Chỉ đọc Scenario Future được chọn, `deliverables/01-user-research/persona/personas.json` và Value Proposition tương ứng trong `deliverables/01-user-research/value-proposition/`. Không lấy dữ liệu mẫu trong generator làm dữ liệu sản phẩm.

## Đầu vào và lựa chọn Scenario

Scenario nằm tại:

`deliverables/01-user-research/scenario-future/<persona-id>/scenario-future-<goal-id>.md`

Nếu người dùng chưa chọn Scenario, chỉ liệt kê các Scenario có sẵn kèm Persona/Goal và chờ họ chọn một luồng. Không sinh Prototype trước khi có lựa chọn.

## Workflow

Khi tạo mới hoặc dựng lại toàn bộ Prototype, đọc và thực hiện [PLAN.md](PLAN.md). Khi chỉ audit một artifact có sẵn, dùng Checklist nghiệm thu bên dưới và chỉ đọc các bước trong PLAN liên quan đến lỗi cần kiểm tra.

Có thể giao phần SVG cho `figma-agent` khi agent đó thực sự khả dụng; nếu không, tự thực hiện bằng công cụ chuẩn hoặc SVG trực tiếp và ghi rõ fallback trong báo cáo.

## Quy tắc sinh SVG

- Tuân thủ chính xác viewport, Dynamic Island, Home Indicator, vùng an toàn, Typography và collision rules trong `rules/layout-and-typography-rules.md`.
- Dùng font `Inter` và Design Tokens theo nguồn chuẩn; không tự thêm màu hoặc thay đổi Tech Stack.
- Không dùng emoji màu. Dùng vector đơn sắc, ký tự hình học được cho phép hoặc Text Badge.
- Dùng `<g id="...">` ngữ nghĩa; mỗi ID phải duy nhất trong Frame.
- Chủ động tách dòng SVG; thẻ `<text>` không tự wrap.
- Không đưa giá, cân nặng, tuổi, sản phẩm, tên nhân viên, mã lịch hẹn hoặc dữ liệu khác vào Prototype nếu không truy vết được từ Scenario, Persona hoặc Value Proposition. Không tự tạo ngoại lệ “dữ liệu mô phỏng”; khi thiếu dữ kiện, dùng nhãn phi định lượng bám sát Scenario hoặc dừng và báo thiếu đầu vào.
- Prototype chỉ mô phỏng UI/UX; không tuyên bố có backend hoặc real-time thật.

## Output

Chỉ tạo trong:

`deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/`

Cho phép:

- `01_<screen-name>.svg`, `02_<screen-name>.svg`, ...
- `interaction-spec.md`

Không tạo HTML, PNG, script tạm, log hoặc Markdown phụ. Không dùng output mặc định ở gốc `deliverables/`.

## Checklist nghiệm thu

- Mỗi nhịp trong Scenario có Frame hoặc System Feedback tương ứng.
- Tất cả SVG parse được, đúng viewport và có các thành phần thiết bị bắt buộc.
- Layer ID không trùng; mọi Hotspot trong Interaction Spec tồn tại trong SVG nguồn.
- Không có text overflow, va chạm ngang/dọc hoặc emoji màu.
- Chỉ có `.svg` và `interaction-spec.md` trong thư mục bàn giao.
- Interaction Spec nêu rõ trạng thái Figma: đã wire/đã chạy thử hoặc chưa wire.
- Không có dữ liệu không truy vết và không có tuyên bố backend sai bản chất.
