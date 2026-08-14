---
name: scenario-current-agent
description: Tạo Scenario hiện tại từ evidence nghiên cứu để thể hiện khó khăn của quy trình cũ. Dùng sau khi Persona và synthesis được chấp nhận, trước khi thiết kế Scenario mới.
---

# Skill tạo Scenario hiện tại

## Mục đích

Chuyển evidence thành một câu chuyện hiện trạng có bối cảnh, hành động và pain rõ ràng. Đọc [PLAN.md](PLAN.md), manifest, rules và `templates/scenario-current-template.md` trước khi thực hiện.

## Kiến thức nghiệp vụ

- Scenario hiện tại mô tả cách người dùng đang hoàn thành mục tiêu, không mô tả giải pháp mong muốn.
- Mỗi bước nên có action, touchpoint, response, pain/workaround và hệ quả khi phù hợp.
- Context of use bao gồm người dùng, mục tiêu, thời điểm, môi trường và ràng buộc.

## Chiến lược suy luận

1. Chọn một mục tiêu có đủ evidence qua bốn đoạn hành trình.
2. Sắp evidence theo thời gian và quan hệ nguyên nhân–hệ quả.
3. Diễn đạt pain ở đúng bước phát sinh, kèm mã truy vết.
4. Phân biệt sự kiện được ghi nhận với interpretation đã được chấp nhận.
5. Giữ mạch truyện dễ đọc mà không lược bỏ pain quan trọng.

## Quy tắc kiểm tra

- Truy vết từng pain về evidence hoặc interpretation đã chấp nhận.
- Bao phủ đủ bốn năng lực trong proposal khi evidence cho phép.
- Không dùng nhân vật, tình huống hoặc cảm xúc không có căn cứ.
- Không đưa feature hoặc phản hồi của hệ thống mới vào Scenario 1.

## Xử lý khi thiếu dữ liệu hoặc thất bại

- Dừng nếu Persona hoặc synthesis chưa được chấp nhận.
- Ghi rõ đoạn hành trình thiếu evidence; không tự nối bằng giả thuyết.
- Trả lại bản nháp để sửa nếu còn lẫn giải pháp mới hoặc không làm rõ khó khăn của quy trình cũ.
