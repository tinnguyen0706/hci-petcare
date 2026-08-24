# Ghi chú: Prototype

- **Tệp gốc:** `references/course-materials/lectures/08_Design_Prototype.pdf`
- **Loại nguồn:** Bài giảng môn học (kiến thức tham khảo).
- **Phạm vi áp dụng:** Lựa chọn mức độ trung thực (fidelity) của prototype, kỹ thuật paper prototype, video prototype và functional prototype trong quy trình thiết kế tương tác.

## Mức độ trung thực (Fidelity Spectrum)

Prototype trải dài từ độ trung thực thấp (Low Fidelity) đến độ trung thực cao (High Fidelity):
- **Hand sketch (Phác thảo tay):** Chuyển nhanh ý tưởng thành hình ảnh, khám phá nhiều phương án giao diện (diverge), thường chỉ bao phủ từng màn hình đơn lẻ và không bắt buộc tính tương tác.
- **Paper prototype (Mẫu thử trên giấy):** Khám phá và đánh giá nhanh các luồng tương tác trước khi hiện thực; gồm nhiều màn hình, mô phỏng thao tác bằng cách tráo/thay các mảnh giấy. Dùng để hội tụ (converge) chọn 1–2 phương án tốt nhất để kiểm thử luồng tương tác hoàn chỉnh.
- **Interactive wireframe (Khung xương tương tác):** Thể hiện cấu trúc, bố cục và liên kết thao tác giữa các màn hình bằng công cụ (Balsamiq, Axure, Figma...).
- **Mockup:** Có độ trung thực thị giác cao (High visual fidelity), tập trung vào visual design, màu sắc, phong cách, gần như ảnh chụp màn hình hoàn chỉnh nhưng chưa cần đầy đủ xử lý logic.
- **Semi-functional prototype (Mẫu thử bán chức năng):** Chỉ hiện thực các chức năng cốt lõi cần thiết để kiểm thử và đánh giá mục tiêu thiết kế.
- **Fully functional prototype (Mẫu thử đầy đủ chức năng):** Hiện thực gần như toàn bộ chức năng và hành vi giống sản phẩm cuối cùng, dùng để demo hoặc thử nghiệm thực tế (pilot).

## Giá trị của Low-Fi so với High-Fi Prototype

- Khi cho người dùng xem giao diện hoàn thiện bóng bẩy (polished Figma UI), người dùng thường chỉ nhận xét chung chung (“looks good”).
- Khi cho xem hand sketch hoặc paper prototype, người dùng dễ đưa ra phản hồi mang tính xây dựng và sửa đổi chi tiết hơn (“phần này nên đổi”, “nút này nên to hơn”, “tôi sẽ không bấm vào đây”).
- Phân loại phản hồi: Low-fidelity prototype giúp thu nhận **High-level feedback** (cấu trúc, luồng, mô hình tinh thần); High-fidelity prototype thu nhận **Low-level feedback** (màu sắc, kích thước cụ thể, chi tiết hiển thị).
- Phân loại môi trường thực thi: Online (máy tính xử lý) vs. Offline / “Human” Computer (người đóng vai máy tính thao tác thủ công).

## Video Prototype

- Sử dụng khi tương tác có các mối quan hệ phức tạp hoặc muốn thể hiện hành vi, thái độ mới của người dùng đối với sản phẩm.
- Ghi lại hành trình theo thời gian (journey over time) và trình diễn một quy trình tương tác sống động trong bối cảnh thực tế.

## Điểm có thể hành động

- Dùng hand sketch ở giai đoạn mở rộng ý tưởng (diverge), sau đó dùng paper prototype/wireframe để chốt luồng tương tác (converge).
- Chọn công cụ và mức độ fidelity phù hợp với mục tiêu thu nhận feedback: không vội làm giao diện quá bóng bẩy khi luồng tương tác cốt lõi chưa được kiểm chứng.
- Đảm bảo prototype thể hiện rõ quy trình tương tác cải tiến và giải quyết được khó khăn của người dùng mục tiêu.
