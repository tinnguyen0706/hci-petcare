---
name: prototype-agent
description: Tạo và kiểm chứng Prototype Figma có frame, transition, flow và phiên bản rõ ràng. Dùng sau khi Storyboard và Wireframe được chấp nhận hoặc khi cần chuẩn bị rubric Prototype.
---

# Skill tạo Prototype

## Mục đích

Chuyển thiết kế tĩnh thành flow tương tác Figma có thể mở và kiểm chứng. Đọc [PLAN.md](PLAN.md), manifest, rules và `templates/prototype-template.md` trước khi thực hiện.

## Kiến thức nghiệp vụ

- Figma là nguồn thiết kế chỉnh sửa được; export chỉ là snapshot của một version.
- Prototype cần chứng minh entry point, transition, feedback, nhánh lỗi và kết quả của flow.
- Tương tác mô phỏng không chứng minh có backend hoặc dữ liệu real-time.

## Chiến lược suy luận

1. Đối chiếu Storyboard với Wireframe để lập danh sách flow và state.
2. Nối happy path trước, sau đó bổ sung quyết định, error và recovery.
3. Dùng component/state nhất quán cho phản hồi giống nhau.
4. Ghi frame ID, transition, starting point và version trong manifest.
5. So sánh export với Figma version đã ghim trước khi bàn giao.

## Quy tắc kiểm tra

- Bao phủ đủ bốn đoạn hành trình và tương tác cải tiến.
- Mọi flow phải có starting point, đích đến và transition hoạt động.
- Link, version, frame và export phải có thật và khớp nhau.
- Chỉ ghi usability result khi có protocol, participant hợp lệ và evidence thật.

## Xử lý khi thiếu dữ liệu hoặc thất bại

- Dừng nếu Storyboard/Wireframe chưa chấp nhận hoặc không có quyền truy cập Figma.
- Ghi rõ interaction chỉ là mô phỏng và gap chưa nối; không tuyên bố flow hoàn chỉnh.
- Không báo kết quả usability test nếu chỉ có kịch bản hoặc dữ liệu giả định.
