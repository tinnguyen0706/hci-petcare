# Quy tắc tạo scenario cho quy trình tương lai

## Tập trung vào người dùng, không tập trung vào hệ thống

Scenario phải mô tả người dùng làm gì để đạt mục tiêu, thay vì mô tả hệ thống có những chức năng gì hay công nghệ hoạt động thế nào.

## Phải có người dùng + mục tiêu + bối cảnh

Scenario là một câu chuyện/narrative thực tế mô tả cách một người dùng thực hiện task và đạt được goal trong một context cụ thể.

## Dùng ngôn ngữ của chính người dùng

Scenario phải dùng ngôn ngữ tự nhiên, dễ hiểu và paraphrase trung thực theo evidence. Chỉ dùng trích dẫn trực tiếp khi evidence có nguyên văn và nguồn tương ứng; không tự tạo câu nói đại diện cho người dùng.

## Scenario phải mang tính thực tế

Scenario phải giống một tình huống mà người dùng thực sự có thể gặp, chứ không phải danh sách chức năng.

## Mô tả hoạt động theo trình tự thời gian

Scenario phải thể hiện người dùng làm gì trước → làm gì tiếp theo → đạt kết quả gì.

## Phải thể hiện goal của người dùng

Không chỉ kể hành động; phải hiểu tại sao user làm những hành động đó.

## Scenario này phải mô tả cách làm trong tương lai

Phải dựa trên Current Scenario, giải quyết được những vấn đề của quy trình cũ.

Giữ nguyên Persona, thú cưng, goal/task, Trigger, thời gian, địa điểm và áp lực thực tế của Scenario Current. Chỉ thay đổi hành động, điểm tiếp xúc và phản hồi bằng tương tác cải tiến có căn cứ.

Mỗi tương tác mới phải giải quyết một pain point trong Scenario Current hoặc đáp ứng một value trong Value Proposition, đồng thời không mâu thuẫn với Persona và evidence.

Bốn tương tác cải tiến cốt lõi là phạm vi lựa chọn, không bắt buộc xuất hiện đầy đủ trong mọi Scenario. Chỉ dùng tương tác liên quan trực tiếp đến goal/task.

## Phong cách trình bày

Scenario được viết dưới dạng 1 đoạn văn hoàn chỉnh. Markdown chỉ là định dạng, nội dung vẫn là 1 đoạn văn bản bình thường.

**File Scenario Future không được chứa bất kỳ nội dung nào ngoài một đoạn văn Scenario; tiêu đề, metadata, checklist và manifest phải nằm ngoài file.**

## Không ghi đè

Nếu file Scenario Future đích đã tồn tại, phải dừng và báo cho Agent điều phối; không được ghi đè.
