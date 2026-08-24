# Quy tắc xây dựng Value Proposition Canvas (HCI Project Rules)

Tài liệu này quy định các yêu cầu bắt buộc đối với tất cả AI Agent và thành viên nhóm khi khởi tạo, tổng hợp hoặc cập nhật **Value Proposition Canvas** cho dự án HCI.

## 1. Cấu trúc Canvas chuẩn (Theo Slide 05 HCI)
Value Proposition Canvas phải bao gồm 2 phần đối ứng 1-1 rõ ràng:
- **User Profile (Khách hàng/Persona)**:
  - `Customer Jobs`: Các nhiệm vụ chức năng, xã hội, cảm xúc mà chủ nuôi đang cố gắng hoàn thành.
  - `Pains`: Nỗi đau, rủi ro, sự bực bội, cản trở trong quá trình chăm sóc/đặt lịch cho thú cưng.
  - `Gains`: Kết quả mong đợi, lợi ích mong muốn đạt được hoặc sự hài lòng vượt mong đợi.
- **Value Map (Bản đồ giá trị / Giải pháp)**:
  - `Products & Services`: Các tính năng/dịch vụ cốt lõi mà hệ thống cung cấp.
  - `Pain Relievers`: Cách thức hệ thống xóa bỏ hoặc giảm nhẹ trực tiếp từng nỗi đau (`Pains`).
  - `Gain Creators`: Cách thức hệ thống tạo ra giá trị, mang lại lợi ích trực tiếp cho từng kỳ vọng (`Gains`).

---

## 2. Các nguyên tắc bắt buộc

* **Nguyên tắc "1 Persona – 1 Canvas":** Mỗi Persona chỉ tương ứng với một Value Proposition Canvas riêng biệt, không gộp chung nhiều nhóm đối tượng vào cùng một canvas.
* **Tập trung giá trị lõi:** Ưu tiên 1 giá trị cốt lõi (Core Value) và 1–2 giá trị bổ trợ (Supporting Values). Tránh dàn trải quá nhiều tính năng nhỏ lẻ không mang lại giá trị trọng tâm.
* **Tính đối ứng trực tiếp (Problem-Solution Fit):** 
  - Mọi `Pain Reliever` phải giải quyết trực tiếp một `Pain` đã nêu.
  - Mọi `Gain Creator` phải mang lại trực tiếp một `Gain` đã nêu.
  - Loại bỏ các tính năng hoặc giải pháp không có sự kết nối đối ứng với User Profile.
* **Không nhầm lẫn Giá trị với Tính năng/Công nghệ:** Value Proposition mô tả giá trị mà hệ thống mang lại cho người dùng, không đồng nhất hay chỉ đơn thuần liệt kê công nghệ (ví dụ: không ghi giá trị là "dùng React/AI", mà phải là "nhận xác nhận lịch ngay lập tức").
* **Tính trung thực & Truy vết (Traceability):**
  - Dữ liệu ở User Profile phải trích xuất hoàn toàn từ Persona và bằng chứng nghiên cứu người dùng (`data/user-research/`). Tuyệt đối không tự suy diễn hay bịa đặt.
  - Phải duy trì mạch truy vết xuyên suốt: `Evidence` ➔ `Persona` ➔ `Jobs/Pains/Gains` ➔ `Value Map` ➔ `Quyết định thiết kế UI/UX`.
* **Phân định rõ Hiện trạng và Tương lai:** Không trộn lẫn vấn đề của quy trình cũ vào giải pháp mới; User Profile phản ánh hiện trạng người dùng, còn Value Map thể hiện đề xuất giá trị tương lai.
* **Trình bày trực quan, cô đọng:** Tuân thủ template chuẩn (HTML/CSS hoặc Markdown theo quy định), trình bày gọn gàng, súc tích trong 1 trang nhìn.
* **Tuân thủ các template được cung cấp sẵn trong thư mục `templates/`** Không sửa template, chỉ cần điền nội dung theo template là được.
