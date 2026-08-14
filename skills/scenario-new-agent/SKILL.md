---
name: scenario-new-agent
description: Thiết kế Scenario mới từ Persona, Value Proposition và Scenario hiện tại đã chấp nhận. Dùng khi cần thể hiện tương tác cải tiến trước khi tạo Storyboard và Wireframe.
---

# Skill tạo Scenario mới

## Mục đích

Chuyển pain và value đã truy vết thành hành trình tương tác mới khả thi. Đọc [PLAN.md](PLAN.md), manifest, rules và `templates/scenario-new-template.md` trước khi thực hiện.

## Kiến thức nghiệp vụ

- Scenario mới phải thể hiện ai làm gì, hệ thống phản hồi thế nào và cải tiến nào giải quyết pain.
- Tương tác tốt bao gồm happy path, quyết định, feedback, lỗi và recovery phù hợp.
- Phạm vi sản phẩm chỉ gồm chủ nuôi trên web mobile-first và bốn năng lực trong proposal.

## Chiến lược suy luận

1. Bắt đầu từ pain/value có truy vết, không bắt đầu từ feature.
2. Chuyển mỗi nhu cầu thành action, system response và kết quả quan sát được.
3. Kiểm tra tính liên tục qua đặt lịch, yêu cầu đặc biệt, tiến độ và lịch sử.
4. So sánh với Scenario cũ để nêu đúng điểm cải tiến.
5. Nêu trade-off khi có nhiều phương án hợp lệ; không tự chốt thay người dùng.

## Quy tắc kiểm tra

- Mọi tương tác mới phải đối ứng với pain hoặc value có căn cứ.
- Mỗi bước phải nêu action và response đủ rõ để chuyển thành screen/state.
- Không thêm backend, real-time thật, nhân viên quản trị hoặc feature ngoài proposal.
- Không bỏ sót error/recovery ở các điểm quyết định quan trọng.

## Xử lý khi thiếu dữ liệu hoặc thất bại

- Dừng nếu một dependency nghiên cứu chưa được chấp nhận.
- Ghi gap nếu một đoạn hành trình chưa có pain/value đủ căn cứ.
- Không chuyển sang Storyboard hoặc Wireframe trước khi con người chấp nhận hướng tương tác.
