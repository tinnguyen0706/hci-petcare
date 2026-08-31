---
name: wireframe-agent
description: Thiết kế Wireframe mobile-first chi tiết từ Scenario mới đã chấp nhận. Dùng khi cần ánh xạ hành trình thành user flow, screen, state, transition và annotation cho rubric Wireframe.
---

# Skill tạo Wireframe

## Mục đích

Biến Scenario mới thành giao diện mobile-first có thể kiểm tra về luồng, trạng thái và usability. Đọc [PLAN.md](PLAN.md), manifest, rules và `templates/wireframe-template.md` trước khi thực hiện.

## Kiến thức nghiệp vụ

- Wireframe chi tiết cần thể hiện hierarchy, label, component, nội dung, navigation và trạng thái.
- Mobile-first yêu cầu ưu tiên viewport điện thoại, vùng chạm, thứ tự nội dung và hành động chính.
- Screen chỉ là một phần; state và transition mới chứng minh hành trình hoàn chỉnh.

## Chiến lược suy luận

1. **Kiểm tra Tiền điều kiện (BẮT BUỘC)**:
   - Kiểm tra bộ Prototype tương ứng tại `deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/`.
   - **Nếu thiếu Prototype**: Dừng lại ngay lập tức (HALT) và báo lỗi `LỖI TIỀN ĐIỀU KIỆN: Thiếu Prototype`.
2. Ánh xạ các Frame và component của Prototype thành cấu trúc Wireframe 5 trạng thái.
3. Nhóm screen theo tác vụ và xác định navigation tối thiểu.
4. Thiết kế happy path (Main Flow) trước, sau đó bổ sung loading, empty, error, success và recovery.
5. Dùng component và pattern nhất quán cho cùng một ý nghĩa.
6. Gắn annotation cho tương tác, responsive intent và accessibility không thể hiện hết bằng hình.

## Quy tắc kiểm tra

- Bao phủ đủ bốn đoạn hành trình và 5 trạng thái biên (Main, Loading, Empty, Error, Success).
- Label, hierarchy và vùng chạm phải rõ trên viewport điện thoại (375x812).
- Không truyền đạt trạng thái chỉ bằng màu; ghi focus và accessibility annotation.
- Không gọi sketch thiếu state, annotation hoặc phiên bản là Wireframe hoàn chỉnh.

## Xử lý khi thiếu dữ liệu hoặc thất bại

- **Dừng ngay lập tức nếu thiếu Prototype** tiền điều kiện và báo lỗi rõ ràng.
- Ghi screen/state còn thiếu trong inventory thay vì tuyên bố luồng đã đủ.
- Trả về Scenario/Prototype để làm rõ nếu không thể xác định action, response hoặc recovery.
