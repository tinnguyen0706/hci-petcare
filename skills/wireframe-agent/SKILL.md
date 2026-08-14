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

1. Ánh xạ mỗi bước Scenario thành screen, state hoặc transition.
2. Nhóm screen theo tác vụ và xác định navigation tối thiểu.
3. Thiết kế happy path trước, sau đó bổ sung loading, empty, error, success và recovery.
4. Dùng component và pattern nhất quán cho cùng một ý nghĩa.
5. Gắn annotation cho tương tác, responsive intent và accessibility không thể hiện hết bằng hình.

## Quy tắc kiểm tra

- Bao phủ đủ bốn đoạn hành trình và các trạng thái biên phù hợp.
- Label, hierarchy và vùng chạm phải rõ trên viewport điện thoại.
- Không truyền đạt trạng thái chỉ bằng màu; ghi focus và accessibility annotation.
- Không gọi sketch thiếu state, annotation hoặc phiên bản là Wireframe hoàn chỉnh.

## Xử lý khi thiếu dữ liệu hoặc thất bại

- Dừng nếu Scenario mới chưa được chấp nhận hoặc design input không có nguồn.
- Ghi screen/state còn thiếu trong inventory thay vì tuyên bố luồng đã đủ.
- Trả về Scenario để làm rõ nếu không thể xác định action, response hoặc recovery.
