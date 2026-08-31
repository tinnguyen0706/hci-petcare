---
name: prototype-agent
description: Tạo và kiểm chứng Interactive Prototype Figma thể hiện quy trình tương tác mới bằng cách phân tích và ánh xạ động từ bất kỳ kịch bản Scenario Future (To-Be) nào.
---

# Skill tạo Interactive Prototype

## Mục đích

Chuyển hóa kịch bản tương tác tương lai (**Scenario Future / To-Be Scenarios**) bất kỳ thành luồng tương tác Prototype sống động, có thể kiểm chứng trên Figma Canvas theo chuẩn Rubric Mục 6.

## Kiến thức nghiệp vụ & Phương pháp Ánh xạ Động (Dynamic Mapping)

- **Không áp đặt cấu trúc luồng cố định**: Mỗi Persona và mỗi Goal có một bối cảnh và hành trình thao tác riêng biệt (Ví dụ: Đặt lịch khẩn cấp, Quản lý đa thú cưng, Theo dõi tiến độ từ xa, Lịch sử điện tử & Đặt lại 1 chạm, Tư vấn trực tuyến...).
- **Quy tắc phân rã kịch bản**:
  1. *Bối cảnh & Điểm kích hoạt (Trigger/Entry)*: Persona bắt đầu từ đâu (App mở từ thông báo đẩy, từ trang chủ, hay từ thẻ hồ sơ)?
  2. *Chuỗi hành động & Điểm chạm (User Touchpoints)*: Persona bấm chọn, nhập liệu, chuyển tab hoặc kiểm tra thông tin gì?
  3. *Phản hồi hệ thống (System Feedbacks)*: Hệ thống hiển thị trạng thái gì (Loading skeleton, Modal xác nhận, Stepper chuyển mốc, Live Photo, Tag cảnh báo đỏ...)?
  4. *Kết quả hoàn thành (Goal Completion)*: Giao diện kết thúc mang lại giá trị gì giải quyết điểm đau cũ của Persona?

## Chiến lược suy luận & Hiện thực hóa

1. **Xác định kịch bản mục tiêu**: Nếu người dùng chưa chỉ định rõ, liệt kê danh sách 6 kịch bản Scenario Future kèm thông tin Persona và Goal để người dùng lựa chọn 1 kịch bản.
2. Đọc nội dung chi tiết của tệp `scenario-future-goal-*.md` được chọn.
3. Thiết lập sơ đồ luồng màn hình động (Dynamic Flow Graph) riêng cho kịch bản đó.
4. Xác định các Frame và Hotspot tương ứng.
5. Gọi `figma-agent` sinh mã SVG vector chuẩn Design Tokens cho từng màn hình và tuân thủ `rules/layout-and-typography-rules.md`.
6. Lập bảng ma trận tương tác (Interaction Spec) trong `interaction-spec.md` chỉ rõ Trigger, Transition và Đích đến.

## Quy tắc kiểm tra & Định dạng đầu ra

- Prototype phải phản ánh trung thực toàn bộ diễn biến của kịch bản To-Be đầu vào.
- Đảm bảo tính nhất quán của Design Tokens (Teal, Coral, Amber, Rose, Inter font).
- Không mô tả prototype mô phỏng UI là hệ thống backend real-time khi chưa lập trình.
- **Quy chuẩn định dạng bàn giao (Strictly SVG & MD)**: Sản phẩm chỉ gồm các tệp bản vẽ vector `.svg` chuẩn Figma và tài liệu `interaction-spec.md`. **Tuyệt đối KHÔNG tạo tệp `.html`**.
- **Không tự ý tạo file tool/script mới**: Tuyệt đối không tạo file tạm hay script mới trong `tools/`; sinh trực tiếp file `.svg`, `.md` vào đúng thư mục `deliverables/`.
