---
name: storyboard-agent
description: Chuyển Scenario mới đã chấp nhận thành Storyboard có mạch truyện, hành động, phản hồi, cảm xúc và chú thích. Dùng khi cần chuẩn bị rubric Storyboard hoặc minh họa tương tác cải tiến.
---

# Skill tạo Storyboard

## Mục đích

Biến luồng tương tác thành câu chuyện trực quan dễ hiểu và có truy vết. Đọc [PLAN.md](PLAN.md), manifest, rules và `templates/storyboard-template.md` trước khi thực hiện.

## Kiến thức nghiệp vụ

- Mỗi frame phải cho biết ai, ở đâu/khi nào, làm gì, hệ thống phản hồi gì và cảm xúc ra sao.
- Mạch truyện cần có bối cảnh, vấn đề, hành động cải tiến và kết quả.
- Hình minh họa phải hỗ trợ action/feedback, không chỉ trang trí.

## Chiến lược suy luận

1. Tách Scenario mới thành các beat câu chuyện.
2. Chọn mỗi frame cho một thay đổi có ý nghĩa trong hành động, trạng thái hoặc cảm xúc.
3. Giữ nhân vật, thiết bị, thời gian và bối cảnh nhất quán xuyên frame.
4. Truy vết frame về bước Scenario và pain/value liên quan.
5. Chọn hình và caption cùng truyền một ý, không mâu thuẫn nhau.

## Quy tắc kiểm tra

- Mỗi frame có mục đích, action, feedback, caption và mã truy vết.
- Thứ tự frame phải liên tục và làm rõ tương tác mới.
- Chỉ ghi hình/asset là có thật khi file tồn tại và đã được kiểm tra.
- Không dùng hình trang trí thay cho action hoặc system feedback quan trọng.

## Xử lý khi thiếu dữ liệu hoặc thất bại

- Dừng nếu Scenario mới chưa được chấp nhận.
- Dùng placeholder có nhãn và ghi asset cần bổ sung nếu chưa có hình; không tuyên bố asset đã hoàn tất.
- Trả về Scenario để làm rõ nếu không thể xác định action hoặc feedback cho một frame quan trọng.
