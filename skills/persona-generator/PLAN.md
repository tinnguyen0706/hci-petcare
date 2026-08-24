# Trình tạo Persona

## Mục đích

Tạo một persona người dùng từ các kết quả nghiên cứu người dùng.

## Sử dụng skill này khi

– Người dùng muốn tạo một persona.
– Thông tin có sẵn bao gồm mục tiêu, nhiệm vụ, điểm đau, động lực hoặc mong muốn của người dùng.
– Người dùng đã hoàn thành giai đoạn khám phá người dùng và muốn tóm tắt các phát hiện thành một persona.

## Đầu vào bắt buộc

Một hoặc nhiều thông tin sau từ: `data/user-research`
– Goals
– Tasks
– Pain Points
– Wishes
– Behaviors
– Quotes
– Demographic information

## Đầu ra

- Danh sách các Persona đại diện cho từng nhóm người dùng (xuất ra `personas.json` chứa mảng các persona hoặc từng file `persona-{id}.json`).
- Lưu trong `deliverables/01-user-research/persona/`

## Quy trình

1. Đọc dữ liệu khám phá người dùng có sẵn.
2. Phân nhóm người dùng (Clustering) dựa trên điểm chung (mục tiêu, hành vi, điểm đau).
3. Với mỗi nhóm người dùng:
    3.1. Suy luận các thuộc tính còn thiếu.
    3.2. Chọn ảnh avatar phù hợp từ internet.
    3.3. Tạo Persona hoàn chỉnh, đảm bảo tính nhất quán (Goals ⟷ Tasks ⟷ Pain Points).
4. Lưu toàn bộ Persona vào `personas.json`.
