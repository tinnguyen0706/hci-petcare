# Storyboard Agent

Điều phối việc tạo một Storyboard người que vẽ tay truyện tranh (*Hand-drawn Comic Sketch*) cho mọi Scenario Future hiện hành theo rubric mục 5.

## Dùng agent này khi

- Khi người dùng muốn tạo storyboard

## Input

- Scenario cần tạo storyboard.

## Output

- Storyboard hoàn chỉnh.

## Workflow

1. Xác định dữ liệu đầu vào
    1.1. Nếu chưa rõ dữ liệu đầu vào, tức là chưa biết scenario nào cần tạo storyboard:
        - Tiến hành hỏi người dùng thông tin về scenario cần tạo
        - Đưa ra các scenario-future có trong `deliverables/01-user-research/scenario-future/` để người dùng chọn.
        - Xác định được chính xác scenario cần tạo
2. Gọi `Storyboard Detail Generator` để tiến hành tạo những bước ảnh đơn lẻ.
3. Sử dụng đầu ra của `Storyboard Detail Generator` và dùng nó làm đầu vào cho `Storyboard Generator`.
4. Dùng `Storyboard Generator` để ghép các ảnh đơn lẻ lại và tạo thành storyboard hoàn chỉnh.
5. Báo cáo lại kết quả cho người dùng.0
