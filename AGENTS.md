# AGENTS.md cho dự án HCI (CSC12106)

## 1) Tổng quan dự án

- **Dự án này là gì:**  
  HỆ THỐNG THÔNG TIN QUẢN LÝ TRẠNG THÁI VÀ ĐIỀU PHỐI SỬ DỤNG THANG MÁY TRONG TRƯỜNG HỌC

- **Làm cho ai dùng:**  
  Hệ thống hướng đến người sử dụng thang máy trong môi trường trường học giờ cao điểm, đồng thời hỗ trợ ban quản lý vận hành thang máy theo dữ liệu thời gian thực.

- **Mục đích là gì:**  
  Mục đích là giảm các lần dừng không hiệu quả khi thang đã đầy, rút ngắn thời gian chờ và thời gian di chuyển, đồng thời cung cấp thông tin trạng thái rõ ràng để người chờ thang chủ động lựa chọn phương án di chuyển.

## 2) Tech Stack đề xuất

- **AI thị giác máy tính:** Python, OpenCV, YOLOv8 (nhận diện người và ước lượng mật độ không gian trong cabin).
- **Dịch vụ điều phối:** FastAPI (xử lý dữ liệu thời gian thực, luật quyết định nhận/từ chối lệnh gọi).
- **Lưu trữ dữ liệu:** PostgreSQL (lưu log trạng thái cabin, sự kiện lệnh gọi, thống kê vận hành).
- **Mô phỏng giao diện:** React + TypeScript (màn hình thông tin ngoài thang và dashboard theo dõi).
- **Trình bày báo cáo/đề xuất:** Markdown (ưu tiên tài liệu học thuật, tự chứa, dễ nộp).

## 3) Quy tắc thiết kế

- Thiết kế giao diện theo hướng tối giản, dễ đọc nhanh trong môi trường đông người.
- Dùng bộ màu ngữ nghĩa rõ ràng:
  - Xanh: có thể nhận thêm người.
  - Vàng: sắp đầy/cần chú ý.
  - Đỏ: quá tải hoặc tạm từ chối nhận lệnh ngoài.
- Font sans-serif dễ đọc; cỡ chữ lớn cho trạng thái chính.
- Trạng thái ưu tiên hiển thị bằng cả màu sắc và biểu tượng để tránh phụ thuộc hoàn toàn vào màu.
- Bố cục hiển thị cố định: trạng thái hiện tại, hướng di chuyển, tầng sắp dừng, khả năng nhận thêm hành khách.
- Nội dung thông báo ngắn, rõ, tránh câu dài và thuật ngữ mơ hồ.

## 4) Quy tắc bắt buộc

- Luôn trả lời bằng tiếng Việt, trừ khi có yêu cầu dùng ngôn ngữ khác.
- Khi viết/sửa proposal phải giữ đúng cấu trúc: **Vấn đề - Ý tưởng - Quy trình**.
- Chỉ chỉnh sửa đúng phạm vi user yêu cầu; không mở rộng ngoài đề tài.
- Không tự ý bịa dữ liệu, số liệu, trích dẫn, hoặc kết quả thực nghiệm.
- Không tự ý thay đổi công nghệ/phạm vi lớn nếu chưa có yêu cầu rõ.
- Nội dung phải tự chứa, đọc độc lập vẫn hiểu được, không phụ thuộc tài liệu tham chiếu bên ngoài.
- Văn phong phải học thuật, rõ ràng, mạch lạc; hạn chế khẩu ngữ và lặp ý.

## 5) Workflow làm việc

1. Đọc yêu cầu user và xác định mục tiêu đầu ra.
2. Chuẩn hóa nội dung theo ba phần: Vấn đề - Ý tưởng - Quy trình.
3. Nếu cần phần kỹ thuật, ưu tiên dùng Tech Stack đề xuất và quy tắc thiết kế ở trên để giữ nhất quán.
4. Viết theo mạch logic: bối cảnh -> khó khăn -> khoảng trống -> giải pháp -> cách triển khai.
5. Rà lại thuật ngữ, độ rõ ràng, và tính tự chứa trước khi kết thúc.
