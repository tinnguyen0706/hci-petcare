# Quy tắc Storyboard

Tệp này quy định các chuẩn mực, ràng buộc và tiêu chuẩn chất lượng bắt buộc mà mọi agent và skill tạo Storyboard phải tuân thủ nghiêm ngặt.

---

## 1. Quy tắc về Tính tương ứng và Nguồn dữ liệu

- **Nguyên tắc 1-1-1**: Một Persona–Goal tương ứng với đúng một Scenario Future và đúng một Storyboard. Tuyệt đối không ghép nhiều Goal vào một Storyboard và không ghi đè dữ liệu của Persona–Goal khác.
- **Tính trung thực với dữ liệu (Data Integrity)**: Mọi nhân vật, thú cưng, hành động, bối cảnh, điểm đau và giá trị mang lại trong Storyboard phải truy vết trực tiếp từ `personas.json`, `value-proposition.json` và `scenario-future-*.md`.
- **Cấm bịa đặt**: Tuyệt đối không tự ý thêm nhân vật phụ, đổi loại thú cưng, thêm tính năng hoặc đổi bối cảnh ngoài phạm vi nghiên cứu người dùng đã xác thực.

---

## 2. Quy tắc về Bố cục và Số lượng Khung tranh

- **Đúng 6 Frame**: Mỗi Storyboard bắt buộc gồm đúng 6 khung tranh xếp theo lưới 3 cột × 2 hàng (từ trái sang phải, từ trên xuống dưới).
- **Bố cục 3 tầng bắt buộc cho mỗi frame**:
  1. *Tầng 1 (Header)*: Ô số thứ tự dạng `[ 1. ]` và tiêu đề hành động ngắn gọn.
  2. *Tầng 2 (Khung hình - Figure)*: Hình phác thảo người que nét đơn tỷ lệ vuông 1:1 ở giữa.
  3. *Tầng 3 (Caption đáy)*: Lời dẫn câu chuyện 1–2 câu tiếng Việt, ngăn cách với hình bởi đường kẻ ngang phân tách rõ ràng.
- **Phân tách nội dung và hình ảnh**: Số thứ tự, tiêu đề header và caption đáy do mã nguồn HTML/CSS kết xuất bằng font chữ viết tay comic (`Patrick Hand`), tuyệt đối không ghép sẵn chữ hay số vào trong file ảnh asset.

---

## 3. Quy tắc về Phong cách Hình ảnh (Pure Classic Stick Figure)

- **Nhân vật Người que thuần túy (*Pure Classic Stick Figure*)**:
  - Đầu hình tròn nét mực đen, mắt chấm (`• •`), mũi nét phác nhẹ, miệng nét cong biểu cảm.
  - Thân mình và tay chân bắt buộc là các **nét que đơn 1 nét (*single-line stick limbs & torso*)** dạng `|`, `\`, `/`.
  - Tóc chỉ vẽ nét viền phác thảo tối giản (ví dụ: đuôi ngựa nét đơn cho Thư, tóc ngắn cho Long) để nhận diện nhân vật.
  - **CẤM TUYỆT ĐỐI**: Vẽ người có khối cơ thể 3D, vẽ nếp gấp quần áo dày, giải phẫu người phức tạp kiểu anime/manga hoặc nhân vật hoạt hình tả thực.
- **Khung giao diện điện thoại phóng to (*Hand-drawn UI Mockup*)**:
  - Ở các bước tương tác với app, màn hình điện thoại được phác thảo nét vẽ tay chữ nhật bo góc đặt cạnh nhân vật.
  - Bên trong thể hiện wireframe giao diện rõ ràng bằng tiếng Việt (ô tìm kiếm, danh sách lựa chọn kèm giá tiền, ô chọn `[✓]`, nút bấm xác nhận, dấu tích hoàn tất).
- **Bóng thoại suy nghĩ (*Thought Bubble*)**:
  - Sử dụng hình đám mây/oval nét phác tay chứa câu thoại ngắn gọn thể hiện nhu cầu hoặc nỗi lo (ví dụ: *"Lo quá, phải dặn kỹ mới được!"*, *"Đói quá, đặt đồ ăn thôi!"*).
- **Nền và Màu sắc**:
  - Nét mực đen trên nền giấy trắng (*Black ink on pure white background*), độ tương phản cao, mộc mạc, không tô màu sắc lòe loẹt, không đổ bóng gradient hay 3D.

---

## 4. Quy tắc về Tiêu chuẩn Nghiệm thu (Acceptance Criteria)

Một Storyboard chỉ được nghiệm thu đạt chuẩn khi đáp ứng đủ các tiêu chí:
1. Đầy đủ các tệp bàn giao trong `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/`:
   - `data.json` (đầy đủ metadata 6 frame, không thiếu trường).
   - `assets/frame-1.png` đến `assets/frame-6.png` (đúng tỷ lệ 1:1, chuẩn người que nét đơn).
   - `storyboard.html` & `style.css` (bố cục 3 tầng chuẩn).
   - `storyboard.png` (ảnh kết xuất A4 khổ ngang không bị cắt cụt caption hay mất viền).
2. Hình ảnh thể hiện rõ sự kết hợp giữa **Storytelling** (mạch truyện có mở đầu, diễn biến, cao trào, kết thúc) và **Sketching** (phác thảo người que nét đơn và UI mockup thoáng đãng, không che khuất nhau).
