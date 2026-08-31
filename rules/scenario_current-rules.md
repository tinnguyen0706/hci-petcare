# Quy tắc tạo scenario cho quy trình hiện tại

## Tập trung vào người dùng, không tập trung vào hệ thống

Scenario phải mô tả người dùng làm gì để đạt mục tiêu, thay vì mô tả hệ thống có những chức năng gì hay công nghệ hoạt động thế nào.

## Phải có người dùng + mục tiêu + bối cảnh

Scenario là một câu chuyện/narrative thực tế mô tả cách một người dùng thực hiện task và đạt được goal trong một context cụ thể.

## Dùng ngôn ngữ của chính người dùng

Scenario phải sử dụng từ ngữ và cách diễn đạt của user, để tất cả stakeholder đều dễ hiểu.

## Scenario phải mang tính thực tế

Scenario phải giống một tình huống mà người dùng thực sự có thể gặp, chứ không phải danh sách chức năng.

## Mô tả hoạt động theo trình tự thời gian

Scenario phải thể hiện người dùng làm gì trước → làm gì tiếp theo → đạt kết quả gì.

## Phải thể hiện goal của người dùng

Không chỉ kể hành động; phải hiểu tại sao user làm những hành động đó.

## Đơn vị tạo Scenario

Mỗi Scenario tương ứng với đúng một cặp Persona × goal/task đã được chấp nhận. Mỗi cặp dùng `persona_id` và `goal_id` xác định; không gộp nhiều goal không liên quan vào cùng một Scenario.

## Pain point phải có evidence

Chỉ mô tả pain point và cảm xúc liên quan trực tiếp đến goal/task khi Persona hoặc evidence đầu vào hỗ trợ. Bốn nhóm pain point cốt lõi là taxonomy để đối chiếu, không phải danh sách bắt buộc phải đưa đủ vào mọi Scenario.

## Paraphrase và direct quote

Ưu tiên paraphrase trung tính, giữ đúng ý nghĩa của evidence. Chỉ đặt nội dung trong ngoặc kép hoặc dùng direct quote khi evidence có nguyên văn đối chiếu; không ghép câu, không sửa ý và không gán lời chưa từng xuất hiện cho người tham gia.

## Scenario này phải mô tả cách làm hiện tại

## Phong cách trình bày

Scenario được viết dưới dạng 1 đoạn văn hoàn chỉnh. Markdown chỉ là định dạng, nội dung vẫn là 1 đoạn văn bản bình thường.

**Không được phép tạo thêm bất cứ 1 nội dung nào ngoài nội dung của đoạn văn của scenario**.

File không có tiêu đề, metadata, bullet list, bảng, citation hay manifest. Manifest gồm đường dẫn, `persona_id` và `goal_id` chỉ được trả trong phản hồi của Agent, bên ngoài file Scenario.

## Đường dẫn và chống ghi đè

Canonical path là `deliverables/01-user-research/scenario-current/<persona-id>/scenario-current-<goal-id>.md`. Nếu file đích đã tồn tại thì phải dừng và báo người dùng; tuyệt đối không ghi đè, merge hay tự tạo phiên bản khác.
