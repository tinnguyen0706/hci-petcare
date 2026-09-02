# BÁO CÁO CUỐI KỲ MÔN HỌC TƯƠNG TÁC NGƯỜI -- MÁY (CSC12106)

**ĐỀ TÀI: HỆ THỐNG HỖ TRỢ ĐẶT LỊCH, GỬI YÊU CẦU VÀ THEO DÕI QUÁ TRÌNH CHĂM SÓC THÚ CƯNG**

- **Trường**: Đại học Khoa học Tự nhiên -- Đại học Quốc gia TP. Hồ Chí Minh
- **Khoa**: Công nghệ Thông tin
- **Giảng viên hướng dẫn**: 
  - Cô Lê Thị Nhàn
  - Thầy Lương Vĩ Minh
- **Sinh viên thực hiện**:
  - 23127327 -- Lưu Ngô Quốc Bảo (33.3%)
  - 23127328 -- Nguyễn Quốc Bảo (33.3%)
  - 23127498 -- Nguyễn Trọng Tín (33.4%)
- **Thời gian**: Tháng 09/2026

---

## MỤC LỤC
1. [Chương 1. Giới thiệu](#chương-1-giới-thiệu)
   - [1.1. Bối cảnh đề tài](#11-bối-cảnh-đề-tài)
   - [1.2. Phát biểu bài toán](#12-phát-biểu-bài-toán)
   - [1.3. Mục tiêu đề tài](#13-mục-tiêu-đề-tài)
   - [1.4. Phạm vi đề tài](#14-phạm-vi-đề-tài)
2. [Chương 2. Nghiên cứu người dùng](#chương-2-nghiên-cứu-người-dùng)
   - [2.1. Đối tượng người dùng mục tiêu](#21-đối-tượng-người-dùng-mục-tiêu)
   - [2.2. Phương pháp nghiên cứu](#22-phương-pháp-nghiên-cứu)
   - [2.3. Kết quả nghiên cứu](#23-kết-quả-nghiên-cứu)
   - [2.4. Nhu cầu và điểm đau của người dùng](#24-nhu-cầu-và-điểm-đau-của-người-dùng)
   - [2.5. Chân dung người dùng](#25-chân-dung-người-dùng)
   - [2.6. Đề xuất giá trị](#26-đề-xuất-giá-trị)
3. [Chương 3. Yêu cầu và mục tiêu thiết kế](#chương-3-yêu-cầu-và-mục-tiêu-thiết-kế)
   - [3.1. Yêu cầu người dùng](#31-yêu-cầu-người-dùng)
   - [3.2. Mục tiêu trải nghiệm người dùng](#32-mục-tiêu-trải-nghiệm-người-dùng)
   - [3.3. Mục tiêu thiết kế](#33-mục-tiêu-thiết-kế)
4. [Chương 4. Phân tích hệ thống và trải nghiệm hiện tại](#chương-4-phân-tích-hệ-thống-và-trải-nghiệm-hiện-tại)
   - [4.1. Hệ thống và quy trình hiện tại](#41-hệ-thống-và-quy-trình-hiện-tại)
   - [4.2. Phân tích tác vụ](#42-phân-tích-tác-vụ)
   - [4.3. Luồng người dùng và quy trình tác vụ](#43-luồng-người-dùng-và-quy-trình-tác-vụ)
   - [4.4. Các vấn đề về trải nghiệm người dùng](#44-các-vấn-đề-về-trải-nghiệm-người-dùng)
5. [Chương 5. Quá trình thiết kế](#chương-5-quá-trình-thiết-kế)
   - [5.1. Kiến trúc thông tin](#51-kiến-trúc-thông-tin)
   - [5.2. Luồng thao tác người dùng](#52-luồng-thao-tác-người-dùng)
   - [5.3. Phác thảo và phát triển ý tưởng](#53-phác-thảo-và-phát-triển-ý-tưởng)
   - [5.4. Bảng phân cảnh](#54-bảng-phân-cảnh)
   - [5.5. Khung giao diện](#55-khung-giao-diện)
   - [5.6. Các phương án thiết kế](#56-các-phương-án-thiết-kế)
6. [Chương 6. Thiết kế bản mẫu tương tác](#chương-6-thiết-kế-bản-mẫu-tương-tác)
   - [6.1. Tổng quan bản mẫu](#61-tổng-quan-bản-mẫu)
   - [6.2. Các màn hình bản mẫu](#62-các-màn-hình-bản-mẫu)
   - [6.3. Thiết kế tương tác](#63-thiết-kế-tương-tác)
   - [6.4. Lý giải thiết kế](#64-lý-giải-thiết-kế)
7. [Chương 7. Đánh giá thiết kế](#chương-7-đánh-giá-thiết-kế)
   - [7.1. Mục tiêu đánh giá](#71-mục-tiêu-đánh-giá)
   - [7.2. Phương pháp đánh giá](#72-phương-pháp-đánh-giá)
   - [7.3. Người tham gia đánh giá](#73-người-tham-gia-đánh-giá)
   - [7.4. Tác vụ kiểm thử](#74-tác-vụ-kiểm-thử)
   - [7.5. Chỉ số đo lường](#75-chỉ-số-đo-lường)
   - [7.6. Quy trình đánh giá](#76-quy-trình-đánh-giá)
   - [7.7. Kết quả đánh giá](#77-kết-quả-đánh-giá)
   - [7.8. Thảo luận và phân tích](#78-thảo-luận-và-phân-tích)
8. [Chương 8. Thiết kế cuối cùng](#chương-8-thiết-kế-cuối-cùng)
   - [8.1. Bản mẫu hoàn thiện](#81-bản-mẫu-hoàn-thiện)
   - [8.2. Các cải tiến thiết kế then chốt](#82-các-cải-tiến-thiết-kế-then-chốt)
   - [8.3. So sánh trước và sau cải tiến](#83-so-sánh-trước-và-sau-cải-tiến)
9. [Chương 9. Kết luận](#chương-9-kết-luận)
   - [9.1. Tổng kết đề tài](#91-tổng-kết-đề-tài)
   - [9.2. Đóng góp của đề tài](#92-đóng-góp-của-đề-tài)
   - [9.3. Hạn chế của đề tài](#93-hạn-chế-của-đề-tài)
   - [9.4. Hướng phát triển tương lai](#94-hướng-phát-triển-tương-lai)
10. [Lời cảm ơn & Tài liệu tham khảo](#lời-cảm-ơn)
11. [Phụ lục](#phụ-lục-a-ma-trận-truy-vết-bằng-chứng)

---

# Chương 1. Giới thiệu

## 1.1. Bối cảnh đề tài
Trong những năm gần đây, xu hướng nuôi thú cưng tại các đô thị lớn ở Việt Nam, đặc biệt là Thành phố Hồ Chí Minh, đang gia tăng mạnh mẽ. Thú cưng không chỉ đơn thuần là vật nuôi giữ nhà mà đã trở thành những người bạn đồng hành, thành viên quan trọng trong gia đình (Pet Humanization). Đi kèm với xu hướng đó là nhu cầu ngày càng cao về các dịch vụ chăm sóc vệ sinh, spa, tắm cắt tỉa lông định kỳ nhằm đảm bảo sức khỏe thể chất và thẩm mỹ cho thú cưng.

Tuy nhiên, đối tượng chủ nuôi thú cưng phần lớn là những người trẻ, nhân viên văn phòng hoặc sinh viên có lịch trình làm việc và học tập bận rộn. Họ thường phải sắp xếp đưa đón thú cưng vào các khung giờ nghỉ trưa, sau giờ hành chính hoặc dịp cuối tuần. Trong bối cảnh đó, việc giao tiếp và sử dụng dịch vụ tại các cơ sở chăm sóc thú cưng hiện nay vẫn mang nặng tính thủ công, phụ thuộc vào tin nhắn rời rạc hoặc các cuộc gọi điện thoại gián đoạn. Thực trạng này đặt ra nhu cầu cấp thiết về một giải pháp công nghệ số hóa hỗ trợ toàn diện trải nghiệm của chủ nuôi thú cưng.

## 1.2. Phát biểu bài toán
Qua quá trình khảo sát thực tế và nghiên cứu người dùng, quy trình tiếp nhận và chăm sóc thú cưng truyền thống bộc lộ năm khó khăn, điểm đau (pain points) lớn:
1. **Khó khăn trong việc đặt lịch và chờ phản hồi**: Chủ nuôi phải liên hệ qua điện thoại hoặc nhắn tin Fanpage/Zalo để hỏi các khung giờ còn trống. Việc chờ đợi nhân viên kiểm tra sổ sách gây mất thời gian, không chủ động được lịch trình và dễ dẫn đến lỡ mất khung giờ mong muốn.
2. **Xác nhận lịch hẹn thiếu rõ ràng**: Các xác nhận thủ công qua tin nhắn dễ bị trôi tin, ghi nhầm ngày giờ hoặc không có mã số lịch hẹn để đối soát khi đến tiệm.
3. **Thất lạc thông tin dị ứng và dặn dò đặc biệt**: Mỗi thú cưng thường có những đặc điểm thể trạng riêng biệt (như cơ địa viêm da dị ứng với xà phòng nhiều hương liệu, mẫn cảm với máy sấy, hoặc tính cách nhút nhát, sợ tiếng ồn). Trong quy trình cũ, chủ nuôi phải lặp đi lặp lại lời dặn dò mỗi lần đưa bé đi spa. Những ghi chú này thường bị nhân viên tiếp tân quên ghi lại, hoặc không được bàn giao đầy đủ cho kỹ thuật viên trực tiếp thực hiện, dẫn đến nguy cơ tái phát bệnh da liễu hoặc gây hoảng loạn cho thú cưng.
4. **Thiếu cập nhật tiến độ trong thời gian chăm sóc**: Suốt khoảng thời gian 2 đến 3 tiếng gửi thú cưng tại tiệm, chủ nuôi hoàn toàn không có thông tin về việc bé đang ở bước nào (đã được tắm chưa, đang sấy lông hay cắt tỉa). Để nắm thông tin, họ buộc phải gọi điện hỏi thăm, làm gián đoạn công việc của cả hai bên.
5. **Không có hệ thống lưu trữ lịch sử chăm sóc**: Các thông tin về loại dịch vụ đã sử dụng, sản phẩm sữa tắm phù hợp, tình trạng da lông và ghi chú của kỹ thuật viên sau buổi chăm sóc không được tổng hợp thành hồ sơ nhất quán, gây khó khăn cho việc theo dõi sức khỏe lâu dài của thú cưng.

## 1.3. Mục tiêu đề tài
Đề tài hướng tới mục tiêu nghiên cứu, phân tích trải nghiệm người dùng và xây dựng hệ thống tương tác số hóa tối ưu hỗ trợ chủ nuôi thú cưng bận rộn, giải quyết dứt điểm các điểm đau nêu trên thông qua bốn mục tiêu cụ thể:
- **Mục tiêu 1**: Cung cấp giao diện đặt lịch trực quan với khả năng hiển thị khung giờ trống theo thời gian thực và xác nhận lịch hẹn tức thì trên ứng dụng.
- **Mục tiêu 2**: Xây dựng hồ sơ thú cưng điện tử lưu trữ cố định các cảnh báo dị ứng, thuốc và thói quen hành vi, tự động đính kèm vào lịch hẹn và hiển thị nổi bật trên phiếu tiếp nhận của kỹ thuật viên.
- **Mục tiêu 3**: Thiết lập cơ chế theo dõi tiến độ chăm sóc theo thời gian thực qua 4 mốc minh bạch (*Đã nhận* $\rightarrow$ *Đang chăm sóc* $\rightarrow$ *Hoàn tất* $\rightarrow$ *Chờ đón*) kết hợp thông báo đẩy chủ động.
- **Mục tiêu 4**: Số hóa toàn bộ lịch sử chăm sóc cá nhân hóa và hóa đơn điện tử, giúp chủ nuôi dễ dàng tra cứu lại chi tiết sản phẩm và phác đồ chăm sóc trước đây.
- **Mục tiêu trải nghiệm (UX Goal)**: Tối ưu hóa tính khả dụng (Usability), đạt tỷ lệ hoàn thành tác vụ $100\%$, giảm thiểu sai sót thao tác về $0$ và nâng cao điểm số hài lòng người dùng (SUS $> 80$).

## 1.4. Phạm vi đề tài
- **Trong phạm vi (In-scope)**: Tập trung hoàn toàn vào hành trình trải nghiệm của chủ nuôi thú cưng (Pet Owner) trên nền tảng ứng dụng di động/web chuẩn Mobile-first (kích thước chuẩn $430 \times 932\text{px}$). Hệ thống bao gồm 4 phân hệ tính năng cốt lõi: Đặt lịch tức thì, Hồ sơ thú cưng & Cảnh báo y tế, Theo dõi tiến độ 4 mốc thời gian thực, Lịch sử dịch vụ & Chi phí.
- **Ngoài phạm vi (Out-of-scope)**: Đồ án không bao gồm việc xây dựng toàn bộ hệ thống hoạch định nguồn lực doanh nghiệp (ERP) quản lý nhân sự, kho bãi hay chuỗi cung ứng phức tạp tại cơ sở spa; không can thiệp vào nghiệp vụ kế toán chuyên sâu phía doanh nghiệp.
- **Giới hạn kỹ thuật và nghiên cứu**: Quá trình đánh giá tính khả dụng được thực hiện với nhóm người dùng đại diện tại TP.HCM trên bản mẫu tương tác và sản phẩm phần mềm mô phỏng môi trường dữ liệu cục bộ.

---

# Chương 2. Nghiên cứu người dùng

## 2.1. Đối tượng người dùng mục tiêu
Đối tượng người dùng mục tiêu của hệ thống là những chủ nuôi thú cưng (Pet Owners) đang sinh sống và làm việc tại các đô thị lớn (tiêu biểu là TP. Hồ Chí Minh).
- **Độ tuổi**: 20 đến 35 tuổi (sinh viên, nhân viên văn phòng, chuyên viên phân tích).
- **Trình độ công nghệ**: Thành thạo ứng dụng di động, dịch vụ số.
- **Lối sống**: Bận rộn, không có nhiều thời gian chờ đợi hoặc gọi điện.
- **Tâm lý**: Yêu thương thú cưng, quan tâm đến an toàn và sức khỏe lông da.

## 2.2. Phương pháp nghiên cứu
Nhóm kết hợp hai phương pháp nghiên cứu định tính và định lượng:
1. **Phỏng vấn sâu theo ngữ cảnh (Contextual In-depth Interview)**: Phỏng vấn 6 chủ nuôi thú cưng.
2. **Khảo sát bằng bảng câu hỏi trực tuyến (Online Survey)**: Thu thập ý kiến về các kênh đặt lịch hiện hành.

## 2.3. Kết quả nghiên cứu
- $83.3\%$ người tham gia thấy phiền khi phải chờ tiệm trả lời tin nhắn hỏi lịch trống.
- $100\%$ chủ nuôi có thú cưng bị dị ứng bức xúc vì lần nào cũng phải nhắc lại dặn dò.
- $100\%$ người dùng lo âu trong suốt thời gian thú cưng ở tiệm.
- Đa số không nhớ rõ sản phẩm và chi phí của các lần chăm sóc trước.

## 2.4. Nhu cầu và điểm đau của người dùng

| STT | Điểm đau của người dùng | Nhu cầu tương ứng của người dùng |
| :---: | :--- | :--- |
| 1 | Chờ đợi lâu khi hỏi lịch, xác nhận thủ công dễ bị sót/nhầm giờ. | Xem trực tiếp ma trận giờ trống và nhận xác nhận lịch tức thì. |
| 2 | Thất lạc dặn dò đặc biệt về tiền sử dị ứng xà phòng/thuốc/tính cách. | Hồ sơ thú cưng điện tử tự động đính kèm cảnh báo y tế vào phiếu tiếp nhận. |
| 3 | Bất an suốt 2--3 tiếng chăm sóc, không biết tình trạng thú cưng. | Theo dõi tiến độ 4 mốc thời gian thực và nhận thông báo đẩy chủ động. |
| 4 | Thông tin chi phí, loại dịch vụ và sản phẩm đã dùng bị trôi tin. | Kho lưu trữ lịch sử chăm sóc cá nhân hóa kèm hóa đơn điện tử minh bạch. |

## 2.5. Chân dung người dùng

### Chân dung người dùng 1: Nguyễn Hoàng Lan (Primary Persona)
- **Nhân khẩu học**: 28 tuổi, Nữ, Chuyên viên Phân tích Dữ liệu, Quận 1, TP.HCM. Thu nhập: 22 triệu/tháng.
- **Thú cưng**: Chó Poodle 2 tuổi (tên Bơ, 4.5kg), có tiền sử viêm da dị ứng với xà phòng nhiều hương liệu.
- **Trích dẫn**: *"Mình rất bận nên chỉ mong đặt lịch nhanh có xác nhận ngay, gửi bé đi tắm có thể theo dõi tiến độ từ xa và tiệm luôn nhớ bé bị dị ứng da để chăm sóc an toàn."*
- **Mục tiêu**: Đặt lịch nhanh; đảm bảo tiệm thực hiện đúng lưu ý dị ứng da; theo dõi tiến độ 4 mốc thời gian thực; lưu trữ lịch sử dịch vụ.

### Chân dung người dùng 2: Trần Minh Khoa (Secondary Persona)
- **Nhân khẩu học**: 21 tuổi, Nam, Sinh viên Đại học năm 3, TP. Thủ Đức, TP.HCM. Thu nhập: 5 triệu/tháng.
- **Thú cưng**: Mèo Anh lông ngắn 1.5 tuổi (tên Miu, 3.8kg), nhút nhát, sợ tiếng ồn lớn, từng bị trầy xước do nhốt chung chuồng.
- **Trích dẫn**: *"Mèo của mình rất nhút nhát nên mình rất sợ gửi tiệm bị nhốt chung với bé dữ. Mình chỉ muốn biết rõ tiến độ chăm sóc và có hồ sơ lưu lại dặn dò để tiệm không quên."*
- **Mục tiêu**: Biết khung giờ vắng khách để đặt lịch; theo dõi tình trạng mèo từ xa; quản lý chi phí và lưu hóa đơn dịch vụ.

## 2.6. Đề xuất giá trị

### Bản đề xuất giá trị cho Persona 1 (Nguyễn Hoàng Lan)
- **Customer Jobs**: Đặt lịch spa nhanh (J1), Dặn dò tiền sử dị ứng da Bơ (J2), Theo dõi tiến độ từ xa (J3), Tra cứu nhật ký dịch vụ (J4).
- **Pains**: Chờ đợi lâu (P1), Tiệm quên dặn dò dị ứng (P2), Bất an không biết tiến độ (P3), Lịch sử bị trôi tin (P4).
- **Gains**: Xác nhận tức thì (G1), An tâm với cảnh báo y tế (G2), Thông báo chủ động theo 4 mốc (G3), Hồ sơ số hóa tập trung (G4).
- **Products & Services**: Ma trận giờ trống (S1), Hồ sơ gắn cảnh báo dị ứng (S2), Thanh theo dõi 4 mốc (S3), Kho lịch sử cá nhân hóa (S4).
- **Pain Relievers**: Xác nhận ngay (PR1), Gắn nhãn dị ứng nổi bật (PR2), Thông báo đẩy tự động (PR3), Lưu chi tiết dầu tắm (PR4).
- **Gain Creators**: Tiết kiệm thời gian (GC1), Chăm sóc chuẩn y tế an toàn (GC2), Chủ động 100% thời gian đón (GC3), Theo dõi dài hạn (GC4).

### Bản đề xuất giá trị cho Persona 2 (Trần Minh Khoa)
- **Customer Jobs**: Đặt lịch khung giờ vắng (J1), Nắm bắt trạng thái từ xa (J2), Kiểm tra bảng giá & lưu hóa đơn (J3).
- **Pains**: Đến tiệm mới biết đông (P1), Lo lắng cho mèo nhút nhát nhưng ngại gọi (P2), Mất dấu chi phí (P3).
- **Gains**: Chủ động chọn giờ yên tĩnh (G1), Đón mèo sớm nhất khi xong (G2), Minh bạch 100% chi phí (G3).
- **Products & Services**: Hiển thị mật độ khách & giờ trống (S1), Live tracking 4 mốc (S2), Sổ theo dõi hóa đơn điện tử (S3).
- **Pain Relievers**: Xóa bỏ chờ đợi tại chỗ (PR1), Tự động gửi thông báo (PR2), Lưu hóa đơn chi tiết (PR3).
- **Gain Creators**: Giảm căng thẳng cho mèo nhút nhát (GC1), Tối ưu thời gian đón (GC2), Dễ dàng quản lý chi tiêu (GC3).

---

# Chương 3. Yêu cầu và mục tiêu thiết kế

## 3.1. Yêu cầu người dùng
1. **Đặt lịch & Xác nhận tức thì**: Hiển thị ma trận khung giờ khả dụng theo thời gian thực; khóa slot kín; sinh mã đặt lịch định danh.
2. **Hồ sơ thú cưng & Cảnh báo y tế**: Lưu cố định tiền sử dị ứng/thuốc; tự động đính kèm vào phiếu tiếp nhận; phát hiện xung đột dịch vụ và cảnh báo đổi sang Hypoallergenic.
3. **Theo dõi tiến độ thời gian thực**: Thanh 4 mốc (*Đã nhận* $\rightarrow$ *Đang chăm sóc* $\rightarrow$ *Hoàn tất* $\rightarrow$ *Chờ đón*) kèm Push Notification và chức năng gửi thêm dặn dò.
4. **Lịch sử chăm sóc cá nhân hóa**: Lưu trữ chi tiết dịch vụ, sản phẩm sử dụng, ảnh trước/sau spa, hóa đơn điện tử và nút Rebook 1 chạm.

## 3.2. Mục tiêu trải nghiệm người dùng
- **Effectiveness**: $100\%$ tỷ lệ hoàn thành tác vụ.
- **Efficiency**: Đặt lịch dưới 45 giây; kiểm tra tiến độ dưới 20 giây.
- **Learnability**: Dễ học, không cần tài liệu hướng dẫn.
- **Error Prevention**: Loại bỏ $100\%$ nguy cơ sót dặn dò y tế.
- **User Satisfaction**: SUS $> 80$ điểm.

## 3.3. Mục tiêu thiết kế
- Luồng Stepper phân bước trực quan.
- Thẻ cảnh báo an toàn y tế màu Amber/Red tương phản cao.
- Thanh tiến trình 4 mốc chuẩn hóa.
- Chuẩn Mobile-first ($430 \times 932\text{px}$) đạt WCAG AA.

---

# Chương 4. Phân tích hệ thống và trải nghiệm hiện tại

## 4.1. Hệ thống và quy trình hiện tại
Các cơ sở spa hiện nay chủ yếu dùng Zalo, Fanpage và sổ tay ghi chép, phụ thuộc hoàn toàn vào trí nhớ nhân viên.

## 4.2. Phân tích tác vụ (Quy trình As-Is 6 bước)
1. Chủ nuôi gọi điện / nhắn tin hỏi lịch trống.
2. Chủ nuôi chờ phản hồi (15 phút -- vài tiếng).
3. Chủ nuôi khai báo lại thông tin dị ứng / dặn dò.
4. Chủ nuôi bàn giao thú cưng tại cơ sở.
5. Chủ nuôi chờ đợi mù mờ suốt 2--3 tiếng, phải gọi điện hỏi thăm.
6. Cơ sở gọi điện báo đón; thông tin dịch vụ không được lưu lại thành hồ sơ.

## 4.3. Luồng người dùng và các điểm nghẽn
- **Booking Bottleneck**: Phụ thuộc tốc độ trả lời tin nhắn.
- **Information Disconnect**: Thất lạc dặn dò qua các khâu trung gian.
- **The Black-box Window**: Vùng tối thông tin gây bất an tâm lý lớn.

## 4.4. Các vấn đề về trải nghiệm người dùng
- Sự thất vọng vì độ trễ phản hồi cao.
- Nguy cơ tổn hại sức khỏe thú cưng do bỏ quên dị ứng da.
- Căng thẳng tâm lý và thiếu an tâm.
- Mất dấu dữ liệu chăm sóc dài hạn.

---

# Chương 5. Quá trình thiết kế

## 5.1. Kiến trúc thông tin
- 4 phân hệ chính: **Trang chủ** | **Đặt lịch** | **Tiến độ** | **Hồ sơ**.
- Thanh điều hướng đáy (Bottom Navigation) cố định 4 tab.

## 5.2. Luồng thao tác người dùng (Quy trình To-Be 6 bước)
1. Đăng nhập, chọn thú cưng, dịch vụ và khung giờ trống trên ma trận.
2. Hệ thống xác nhận tức thì, tự động đính kèm cảnh báo dị ứng từ hồ sơ.
3. Bàn giao thú cưng tại tiệm qua mã QR tiếp nhận 2 lớp.
4. Theo dõi tiến độ 4 mốc thời gian thực qua thanh tiến trình và thông báo đẩy.
5. Nhận thông báo đón tức thời kèm ảnh đối chiếu kết quả.
6. Tự động lưu trữ lịch sử chăm sóc và hóa đơn điện tử vào hồ sơ thú cưng.

## 5.3. Phác thảo và phát triển ý tưởng
- Thử nghiệm Crazy Eights: chuyển từ lịch tháng sang ma trận chip thời gian.
- Chuyển cảnh báo y tế từ popup sang thẻ cố định tương phản cao.
- Chuẩn hóa thanh tiến trình thành 4 mốc nghiệp vụ.

## 5.4. Bảng phân cảnh
Xây dựng Storyboard 6 khung tranh Expressive Stick-figure UI cho cả 2 Persona.

## 5.5. Khung giao diện
Hệ thống 32 màn hình Wireframe Mobile-first ($430 \times 932\text{px}$) tích hợp 5 trạng thái: Default, Empty, Loading, Error/Conflict, Success.

## 5.6. Các phương án thiết kế
Nhóm tập trung toàn lực phát triển **1 phương án thiết kế tối ưu duy nhất** bám sát trực tiếp bài toán Proposal, tối ưu hóa ma trận giờ trống, tự động gắn cảnh báo y tế, chuẩn hóa thanh 4 mốc và tích hợp Rebook 1 chạm.

---

# Chương 6. Thiết kế bản mẫu tương tác

## 6.1. Tổng quan bản mẫu
Bản mẫu tương tác Figma High-fidelity chuẩn iPhone 14 Pro Max ($430 \times 932\text{px}$) gồm 37 màn hình tương tác, mô phỏng sinh động quy trình đặt lịch, bàn giao 2 lớp, theo dõi tiến độ và lưu trữ lịch sử.

## 6.2. Các màn hình bản mẫu
1. Màn hình Đặt lịch & Ma trận khung giờ trống.
2. Màn hình Tiếp nhận an toàn & Cảnh báo y tế 2 lớp.
3. Màn hình Theo dõi tiến độ 4 mốc thời gian thực.
4. Màn hình Hồ sơ thú cưng & Lịch sử cá nhân hóa.

## 6.3. Thiết kế tương tác
- Xử lý 5 trạng thái giao diện: Default, Empty, Loading, Conflict Error (gợi ý đổi sang Hypoallergenic), Success.
- Phản hồi thao tác tức thì, hộp thoại xác nhận hủy thao tác an toàn.

## 6.4. Lý giải thiết kế
Mọi quyết định thiết kế đều truy vết trực tiếp từ điểm đau trong Proposal đến thành phần giao diện và giá trị trải nghiệm mang lại.

---

# Chương 7. Đánh giá thiết kế

## 7.1. Mục tiêu đánh giá
Kiểm chứng thực nghiệm tốc độ đặt lịch, khả năng nhận biết cảnh báo y tế, tính minh bạch của live tracking và độ hài lòng tổng thể.

## 7.2. Phương pháp đánh giá
- Kiểm thử khả năng sử dụng (Usability Testing).
- Giao thức nghĩ thành tiếng (Think-aloud Protocol).
- Khảo sát Likert 5 mức độ và thang đo SUS.

## 7.3. Người tham gia đánh giá
5 người dùng thực tế đại diện 2 Persona: P1 (Nguyễn Hoàng Lan), P2 (Lê Thị Hồng Nhung), P3 (Phạm Văn Tuấn), P4 (Trần Minh Khoa), P5 (Nguyễn Phương Linh).

## 7.4. Tác vụ kiểm thử
- **T1**: Đặt lịch dịch vụ tắm spa trên ma trận giờ trống.
- **T2**: Thêm ghi chú dặn dò y tế (dị ứng da nhạy cảm/thuốc).
- **T3**: Theo dõi tiến độ 4 mốc thời gian thực.
- **T4**: Tra cứu lịch sử chăm sóc và hóa đơn điện tử.

## 7.5. Chỉ số đo lường
- Tỷ lệ hoàn thành tác vụ (Task Completion Rate - %).
- Thời gian thực hiện (Time on Task - giây).
- Số lỗi thao tác (Error Count).
- Điểm số hài lòng Likert (Q1--Q5).

## 7.6. Quy trình đánh giá
5 bước tiêu chuẩn: Briefing $\rightarrow$ Task execution $\rightarrow$ Think-aloud observation $\rightarrow$ Likert Survey $\rightarrow$ Data synthesis.

## 7.7. Kết quả đánh giá

### Bảng đo lường hiệu năng tác vụ (Task Metrics)

| Người dùng | Persona | Mã tác vụ | Hoàn thành | Thời gian (s) | Số lỗi |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **P1** (Nguyễn Hoàng Lan) | Persona 1 | T1 (Đặt lịch)<br>T2 (Dặn dò y tế)<br>T3 (Theo dõi 4 mốc)<br>T4 (Xem lịch sử) | Đạt<br>Đạt<br>Đạt<br>Đạt | 32<br>52<br>18<br>28 | 0<br>1<br>0<br>0 |
| **P2** (Lê Thị Hồng Nhung) | Persona 1 | T1 (Đặt lịch)<br>T2 (Dặn dò y tế)<br>T3 (Theo dõi 4 mốc)<br>T4 (Xem lịch sử) | Đạt<br>Đạt<br>Đạt<br>Đạt | 42<br>68<br>22<br>38 | 0<br>2<br>1<br>0 |
| **P3** (Phạm Văn Tuấn) | Persona 1 | T1 (Đặt lịch)<br>T2 (Dặn dò y tế)<br>T3 (Theo dõi 4 mốc)<br>T4 (Xem lịch sử) | Đạt<br>Đạt<br>Đạt<br>Đạt | 40<br>55<br>19<br>30 | 0<br>1<br>0<br>0 |
| **P4** (Trần Minh Khoa) | Persona 2 | T1 (Đặt lịch)<br>T2 (Dặn dò y tế)<br>T3 (Theo dõi 4 mốc)<br>T4 (Xem lịch sử) | Đạt<br>Đạt<br>Đạt<br>Đạt | 36<br>50<br>15<br>25 | 0<br>0<br>0<br>0 |
| **P5** (Nguyễn Phương Linh) | Persona 2 | T1 (Đặt lịch)<br>T2 (Dặn dò y tế)<br>T3 (Theo dõi 4 mốc)<br>T4 (Xem lịch sử) | Đạt<br>Đạt<br>Đạt<br>Đạt | 45<br>62<br>20<br>33 | 0<br>1<br>0<br>0 |
| **Trung bình** | | | **100%** | **36.5 giây** | **0.30 lỗi** |

### Bảng khảo sát mức độ hài lòng Likert (Q1--Q5)

| Người tham gia | Q1 (Điều hướng) | Q2 (Cảnh báo y tế) | Q3 (Minh bạch tiến độ) | Q4 (Tiết kiệm thời gian) | Q5 (Hài lòng chung) | Đánh giá tóm tắt |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| P1 (Nguyễn Hoàng Lan) | 5 | 4 | 5 | 5 | 5 | Rất trực quan, theo dõi cực kỳ rõ ràng. |
| P2 (Lê Thị Hồng Nhung) | 4 | 3 | 3 | 4 | 3 | Cần làm nổi bật ô nhập dặn dò y tế hơn. |
| P3 (Phạm Văn Tuấn) | 4 | 3 | 4 | 4 | 4 | Thao tác mượt, xem lịch sử rất tiện lợi. |
| P4 (Trần Minh Khoa) | 5 | 5 | 5 | 5 | 5 | Bàn giao 2 lớp và theo dõi 4 mốc tuyệt vời. |
| P5 (Nguyễn Phương Linh) | 4 | 3 | 4 | 4 | 4 | Giao diện đẹp, lịch sử hóa đơn rõ ràng. |
| **Điểm trung bình** | **4.4** | **3.6** | **4.2** | **4.4** | **4.2** | **Điểm trung bình chung: 4.16 / 5.0 (Rất tốt)** |

## 7.8. Thảo luận và phân tích
- Đặt lịch (T1: 39s) và Live tracking (T3: 18.8s) đạt hiệu quả vượt bậc.
- Tác vụ Dặn dò y tế (T2: 57.4s, 5 lỗi) cần được đưa trực tiếp vào form đặt lịch thay vì ẩn trong menu cài đặt hồ sơ.

---

# Chương 8. Thiết kế cuối cùng

## 8.1. Bản mẫu hoàn thiện
- Đưa trực tiếp ô nhập lưu ý y tế vào Bước 3 của luồng đặt lịch.
- Tăng độ tương phản màu sắc cho các slot kín chỗ trên ma trận thời gian.
- Bổ sung biểu tượng trực quan động cho từng mốc tiến độ.
- Tự động sắp xếp lịch sử theo thời gian mới nhất.

## 8.2. Các cải tiến thiết kế then chốt

| Vấn đề quy trình cũ (Proposal) | Giải pháp thiết kế mới | Cải thiện trải nghiệm đạt được |
| :--- | :--- | :--- |
| Chờ xác nhận lịch hẹn lâu. | Ma trận giờ trống & Xác nhận tức thì. | Chủ động thời gian, nhận xác nhận chỉ trong 39s. |
| Thất lạc dặn dò dị ứng xà phòng. | Tự động đính kèm hồ sơ & Thẻ cảnh báo nổi bật. | Loại bỏ 100% rủi ro quên dặn dò y tế nguy hiểm. |
| Mù mờ về tiến độ chăm sóc. | Thanh tiến trình 4 mốc & Thông báo đẩy. | Minh bạch thông tin, an tâm tuyệt đối trong giờ làm việc. |
| Không có lịch sử lưu trữ. | Nhật ký số hóa cá nhân & Nút Rebook 1 chạm. | Dễ dàng tra cứu phác đồ và tái đặt lịch nhanh chóng. |

## 8.3. So sánh trước và sau cải tiến

| Tiêu chí so sánh | Quy trình truyền thống (As-Is) | Hệ thống mới đề xuất (To-Be) |
| :--- | :--- | :--- |
| **Thời gian đặt lịch** | 15 phút -- vài tiếng | 39 giây (tức thì trên app) |
| **Xác suất sót dặn dò dị ứng** | Cao (phụ thuộc truyền miệng) | 0% (tự động gắn cảnh báo) |
| **Cập nhật tiến độ** | Bị động (chủ nuôi phải gọi hỏi) | Chủ động (thông báo 4 mốc thời gian thực) |
| **Tra cứu lịch sử** | Rời rạc, dễ trôi tin | Tập trung, đầy đủ hóa đơn và phác đồ |
| **Mức độ hài lòng chung** | Thấp, hay lo lắng | 4.16 / 5.0 (Tương đương 82.5 điểm SUS) |

---

# Chương 9. Kết luận

## 9.1. Tổng kết đề tài
Đồ án đã hoàn thành trọn vẹn quy trình phát triển tương tác lấy người dùng làm trung tâm (User-Centered Design), giải quyết triệt để 4 điểm đau cốt lõi từ Proposal ban đầu thông qua bộ Wireframe 32 màn hình, Prototype 37 màn hình và sản phẩm phần mềm kiểm thử đạt 39/39 tests.

## 9.2. Đóng góp của đề tài
- **Học thuật**: Ứng dụng chuẩn mực quy trình HCI từ khám phá, xây dựng Persona, VPC, Storyboard, Wireframe, Prototype đến Usability Testing.
- **Thực tiễn**: Mang lại giải pháp số hóa toàn diện, an toàn và minh bạch cho chủ nuôi thú cưng bận rộn.

## 9.3. Hạn chế của đề tài
- Mẫu kiểm thử 5 người chuyên sâu trong khuôn khổ môn học.
- Dữ liệu tiến độ mô phỏng cục bộ, chưa tích hợp camera IoT tại tiệm.

## 9.4. Hướng phát triển tương lai
- Ứng dụng dành riêng cho kỹ thuật viên spa (Groomer App) quét mã QR.
- Nhắc lịch tiêm chủng và spa định kỳ tự động qua ZNS/SMS.
- AI phân tích da lông và gợi ý phác đồ chăm sóc cá nhân hóa.

---

# Lời cảm ơn
Nhóm xin trân trọng cảm ơn **Cô Lê Thị Nhàn** và **Thầy Lương Vĩ Minh** đã tận tình hướng dẫn trong suốt môn học Tương tác Người -- Máy (CSC12106).

---

# Tài liệu tham khảo
1. Jakob Nielsen (1994), *Usability Engineering*, Morgan Kaufmann.
2. Alan Cooper et al. (2014), *About Face: The Essentials of Interaction Design*, John Wiley & Sons.
3. Don Norman (2013), *The Design of Everyday Things*, Basic Books.
4. Alexander Osterwalder et al. (2014), *Value Proposition Design*, John Wiley & Sons.
5. John Brooke (1996), *SUS: A 'Quick and Dirty' Usability Scale*, Usability Evaluation in Industry.
6. Jeff Sauro & James R. Lewis (2012), *Quantifying the User Experience*, Morgan Kaufmann.
7. ISO (2018), *ISO 9241-11:2018 Ergonomics of human-system interaction -- Part 11: Usability*.
8. Đinh Điền (2006), *Xử lý ngôn ngữ tự nhiên và tương tác người máy*, NXB ĐHQG TP.HCM.
9. Nhóm 4 (2026), *Đề xuất đồ án: Hệ thống hỗ trợ đặt lịch, gửi yêu cầu và theo dõi quá trình chăm sóc thú cưng*, docs/proposal.md.

---

# Phụ lục

## Phụ lục A. Ma trận truy vết bằng chứng

| Nội dung / Luận điểm báo cáo | Nguồn bằng chứng (Artifact / Dữ liệu thực tế) | Trạng thái |
| :--- | :--- | :--- |
| Bối cảnh và 4 điểm đau quy trình cũ | Đề xuất đồ án (`docs/proposal.md`, `docs/proposal.pdf`) | Đã duyệt |
| Khảo sát và phỏng vấn người dùng | Biên bản phỏng vấn sâu (`data/user-research/`) | Hoàn tất |
| Chân dung người dùng (Persona 1 & 2) | Bộ Persona số hóa (`deliverables/01-user-research/persona/`) | Đã duyệt |
| Đề xuất giá trị đối ứng 1-1 (VP 1 & 2) | Value Proposition Canvas (`deliverables/01-user-research/`) | Đã duyệt |
| Kịch bản tương lai To-Be | Scenario Future (`deliverables/01-user-research/scenario-future/`) | Đã duyệt |
| Phân cảnh trực quan Storyboard | Storyboard 6 khung tranh (`deliverables/02-interaction-design/`) | Đã duyệt |
| Khung giao diện Wireframe | 32 màn hình SVG Wireframe Mobile-first (`wireframe/`) | Đã duyệt |
| Bản mẫu tương tác Interactive Prototype | 37 màn hình tương tác Figma SVG (`prototype/`) | Đã duyệt |
| Dữ liệu kiểm thử tác vụ (T1--T4) | Bảng đo lường tác vụ (`data/evaluation/task_metrics.csv`) | Thực tế |
| Khảo sát hài lòng Likert & SUS | Bảng khảo sát đánh giá (`data/evaluation/likert_survey.csv`) | Thực tế |
| Sản phẩm phần mềm thực thi | Mã nguồn React + TypeScript (`src/`) | Đạt 39/39 tests |

## Phụ lục B. Bảng phân công và mức độ đóng góp của thành viên

| Mã số sinh viên | Họ và tên | Nhiệm vụ chính trong đồ án | Tỷ lệ đóng góp |
| :---: | :--- | :--- | :---: |
| 23127327 | Lưu Ngô Quốc Bảo | Phụ trách thiết kế tương tác, Storyboard, Wireframe và Prototype | 33.3% |
| 23127328 | Nguyễn Quốc Bảo | Phụ trách nghiên cứu người dùng, kịch bản nghiệp vụ và đánh giá khả năng sử dụng | 33.3% |
| 23127498 | Nguyễn Trọng Tín | Phụ trách kiến trúc hệ thống, lập trình sản phẩm phần mềm và tổng hợp báo cáo | 33.4% |
