---
name: scenario-current-generator
description: Tạo kịch bản Scenario 1 mô tả quy trình hiện tại và làm nổi bật các khó khăn, điểm đau của hệ thống cũ từ dữ liệu nghiên cứu người dùng.
---

# Skill tạo Scenario 1 — Quy trình hiện tại (As-Is Scenario)

## Kiến thức

- **Scenario trong HCI** là một câu chuyện kể giàu ngữ cảnh (narrative description) mô tả cách một người dùng cụ thể (Persona) cố gắng hoàn thành mục tiêu trong điều kiện thực tế.
- **Scenario 1 (Hiện tại)** đóng vai trò tái hiện hiện trạng, tập trung vạch rõ các **điểm nghẽn (breakdowns)**, **sự bất tiện**, **nguy cơ sai sót** và **cảm xúc tiêu cực** (lo lắng, mất thời gian, ức chế) khi dùng các công cụ truyền thống (Zalo, gọi điện thoại, ghi sổ tay, trao đổi miệng).
- **Context of use** phải thể hiện rõ: Ai (Persona), Ở đâu (Địa điểm), Khi nào (Thời gian/Áp lực), Làm gì (Mục tiêu), Bằng phương tiện gì (Kênh hiện tại) và Hậu quả là gì.

## Lập luận & Quy tắc suy luận

1. **Góc nhìn người dùng (Human-centered)**:
   - Dùng ngôn từ tự nhiên, phản ánh đúng tâm lý và hành vi thực tế của chủ nuôi bận rộn; không dùng thuật ngữ kỹ thuật hệ thống.
2. **Phân loại pain point của quy trình cũ theo evidence**:
   Bốn nhóm dưới đây là taxonomy để đối chiếu, không phải checklist bắt buộc cho mọi Scenario:
   - *Đặt hẹn*: Chờ đợi phản hồi chậm, hỏi qua lại nhiều câu để chốt giờ, dễ bị trùng lịch hoặc hủy hẹn đột ngột.
   - *Dặn dò & Dị ứng*: Nhân viên tiếp nhận ghi giấy hoặc nhớ miệng, dễ quên khi tiệm đông hoặc khi giao ca cho thợ tỉa lông, gây nguy cơ dị ứng tái phát.
   - *Tiến độ chăm sóc*: Không có cập nhật trung gian, chủ nuôi sốt ruột không biết bé đã làm đến đâu, lo sợ bé bị hoảng loạn hoặc bị nhốt chuồng lâu.
   - *Lịch sử dịch vụ*: Lần sau đến tiệm không ai nhớ lần trước dùng gói cạo nào, dầu tắm loại gì; chủ nuôi phải mô tả lại từ đầu.
3. **Nguyên tắc "Zero Future Solutions"**:
   - Tuyệt đối không nhắc tới ứng dụng mới, tính năng tự động hay bất kỳ giao diện cải tiến nào trong Scenario 1.
4. **Định dạng đoạn văn liền mạch (Single Narrative Paragraph)**:
   - Trình bày toàn bộ câu chuyện thành **một đoạn văn hoàn chỉnh, mượt mà và liền mạch**.
   - File chỉ chứa đúng một đoạn văn; không thêm tiêu đề, metadata, bullet list, bảng, chú thích nguồn hay manifest vào file.
   - Mọi thông tin về bối cảnh, kênh giao tiếp cũ, điểm nghẽn và cảm xúc phải được đan cài tự nhiên vào dòng tự sự.
5. **Tính nhất quán & Tương ứng 1-1 với Persona × goal/task**:
   - Mỗi cặp `persona_id` × `goal_id` tạo ra đúng một Scenario 1 riêng.
   - Canonical path là `deliverables/01-user-research/scenario-current/<persona-id>/scenario-current-<goal-id>.md`.
   - Nếu file đích đã tồn tại thì dừng và báo người dùng; không ghi đè, merge hoặc tự tạo phiên bản khác.
   - Scenario chỉ khai thác bối cảnh, goal/task, đặc điểm và pain point liên quan có trong evidence của Persona đó; không ép đủ cả bốn nhóm pain point.
6. **Evidence và cách diễn đạt an toàn**:
   - Mỗi chi tiết thực tế, pain point và cảm xúc phải truy ngược được về Persona hoặc evidence đầu vào.
   - Chỉ dùng direct quote khi evidence chứa nguyên văn có thể đối chiếu. Phải giữ đúng ý nghĩa và không ghép các đoạn rời thành một câu giả.
   - Nếu không cần trích nguyên văn, dùng paraphrase trung tính. Không tạo câu trong ngoặc kép hoặc gán lời nói chưa từng xuất hiện cho người tham gia.

## Xác thực & Tiêu chí Rubric (Mức 1.0)

Kiểm tra chất lượng kịch bản theo checklist:
- [ ] **Đầy đủ số lượng (Persona × goal/task)**: Mỗi cặp Persona × goal/task đã duyệt có đúng một Scenario 1 tại canonical path.
- [ ] **Đoạn văn liền mạch (Single Narrative)**: Được viết thành một đoạn văn trôi chảy, giàu tính kể chuyện, không bị đứt gãy hay chia mảnh thành bảng.
- [ ] **Làm nổi bật khó khăn có evidence**: Người đọc thấy rõ các pain point liên quan đến goal/task và được evidence hỗ trợ; không bắt buộc đủ bốn nhóm.
- [ ] **Đầy đủ ngữ cảnh**: Có thông tin địa điểm, thời gian, áp lực thực tế và động cơ thúc đẩy hành động.
- [ ] **Không lẫn giải pháp mới**: Toàn bộ tương tác chỉ diễn ra qua các kênh hiện có (gọi điện, Zalo cá nhân, nói chuyện trực tiếp, ghi giấy nhớ).
- [ ] **An toàn khi diễn đạt**: Direct quote có nguyên văn đối chiếu; nội dung còn lại là paraphrase không bịa lời người tham gia.
- [ ] **File thuần Scenario**: File chỉ có một narrative paragraph; manifest được trả riêng bên ngoài file.
