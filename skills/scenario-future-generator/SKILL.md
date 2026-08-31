---
name: scenario-future-generator
description: Tạo kịch bản Scenario 2 mô tả quy trình tương lai và thể hiện cách các tương tác cải tiến giải quyết khó khăn của quy trình cũ từ dữ liệu nghiên cứu người dùng.
---

# Skill tạo Scenario 2 — Quy trình tương lai (To-Be Scenario)

## Kiến thức

- **Scenario trong HCI** là một câu chuyện kể giàu ngữ cảnh (narrative description), mô tả cách một người dùng cụ thể (Persona) hoàn thành mục tiêu trong điều kiện thực tế.
- **Scenario 2 (Tương lai)** mô tả hành trình của Persona khi sử dụng giải pháp mới, tập trung thể hiện hành động của người dùng, phản hồi của hệ thống và cách tương tác cải tiến giải quyết các khó khăn trong Scenario hiện tại.
- **Context of use** phải thể hiện rõ: Ai (Persona), Ở đâu (Địa điểm), Khi nào (Thời gian/Áp lực), Làm gì (Mục tiêu), Tương tác với giải pháp như thế nào và Kết quả là gì.

## Lập luận & Quy tắc suy luận

1. **Góc nhìn người dùng (Human-centered)**:
   - Dùng ngôn từ tự nhiên, phản ánh đúng tâm lý, hành vi và hoàn cảnh của Persona.
   - Không biến Scenario thành danh sách tính năng hoặc tài liệu mô tả kỹ thuật.

2. **Thể hiện rõ các tương tác cải tiến**:
   - Mô tả cách Persona sử dụng các tính năng mới để giải quyết các khó khăn (pain points) gặp phải trong Scenario Current.
   - Đảm bảo các tương tác thể hiện đúng phạm vi sản phẩm đã được xác định trong các phần trước.

3. **Nguyên tắc "Pain-to-Solution Traceability"**:
   - Mỗi tương tác mới phải giải quyết một pain point đã xác định trong Scenario Current hoặc đáp ứng một value trong Value Proposition, đồng thời không mâu thuẫn với Persona và evidence liên quan.
   - Không tự thêm tính năng mới nếu không có căn cứ từ dữ liệu nghiên cứu người dùng hoặc phạm vi sản phẩm đã được chấp nhận.
   - Diễn đạt lại (paraphrase) nội dung evidence bằng ngôn ngữ tự nhiên. Chỉ dùng trích dẫn trực tiếp khi evidence có nguyên văn và nguồn tương ứng; không tạo câu nói đại diện cho người dùng.

4. **Định dạng đoạn văn liền mạch (Single Narrative Paragraph)**:
   - Trình bày toàn bộ câu chuyện thành **một đoạn văn hoàn chỉnh, mượt mà và liền mạch**.
   - Dẫn dắt tự nhiên từ khi Persona phát sinh nhu cầu, tương tác với giải pháp, nhận phản hồi của hệ thống đến khi hoàn thành mục tiêu.
   - Không chia phần nội dung Scenario thành bảng hoặc các bước rời rạc.
   - File Scenario Future chỉ chứa đoạn văn này, không kèm tiêu đề, metadata, checklist hoặc manifest. Danh sách file chỉ thuộc phản hồi điều phối của Agent.

5. **Tính nhất quán & Tương ứng với Persona–Goal**:
   - Mỗi goal/task chính của từng Persona phải có một Scenario Future tương ứng.
   - Mỗi Scenario Future phải giữ nguyên Persona, thú cưng, goal/task, Trigger, thời gian, địa điểm và áp lực thực tế của Scenario Current tương ứng.
   - Chỉ thay đổi hành động, điểm tiếp xúc và phản hồi của quy trình cũ bằng các tương tác cải tiến có căn cứ.
   - Không tự thêm địa điểm, sự kiện, hoàn cảnh, cơ sở vật chất hoặc giao diện dành cho nhân viên không có trong dữ liệu đầu vào.
   - Không sử dụng khẳng định tuyệt đối về hiệu quả của giải pháp; ưu tiên các cách diễn đạt thực tế như “yên tâm hơn”, “giảm nguy cơ” hoặc “dễ kiểm tra hơn”.
   - Không ghi đè file Scenario Future đã tồn tại; dừng và báo cho Agent điều phối.

## Xác thực & Tiêu chí Rubric (Mức 1.0)

Kiểm tra chất lượng kịch bản theo checklist:

- [ ] **Đúng Persona–Goal**: Mỗi goal/task chính của Persona có một Scenario Future riêng.
- [ ] **Đoạn văn liền mạch (Single Narrative)**: Scenario được viết thành một đoạn văn trôi chảy, giàu tính kể chuyện.
- [ ] **Tương tác rõ ràng**: Người đọc hiểu Persona thực hiện hành động gì và hệ thống phản hồi như thế nào.
- [ ] **Thể hiện cải tiến**: Các tương tác mới giải quyết rõ pain points trong Scenario Current.
- [ ] **Đầy đủ ngữ cảnh**: Có địa điểm, thời gian, áp lực thực tế, Trigger và mục tiêu của Persona.
- [ ] **Đúng phạm vi**: Chỉ sử dụng các tính năng thuộc phạm vi sản phẩm đã được chấp nhận.
- [ ] **Không bịa dữ liệu**: Không thêm thông tin Persona, thú cưng, số liệu, trích dẫn hoặc nhu cầu không có trong evidence.
- [ ] **Trích dẫn an toàn**: Chỉ dùng trích dẫn trực tiếp khi evidence có nguyên văn và nguồn tương ứng; nếu không thì paraphrase.
- [ ] **Không ghi đè**: File đích chưa tồn tại trước khi tạo.
- [ ] **Sẵn sàng cho thiết kế**: Hành động và phản hồi đủ rõ để tiếp tục xây dựng Storyboard, Wireframe và Prototype.
