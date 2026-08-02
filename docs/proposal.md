# Thiết kế hệ thống hỗ trợ đặt lịch, gửi yêu cầu và theo dõi quá trình chăm sóc thú cưng

Đồ án môn Tương tác Người–Máy (CSC12106), Nhóm 4. Tài liệu này là bản Markdown tự chứa của proposal; bản trình bày gốc được lưu tại `docs/proposal.pdf`.

## 1. Vấn đề

### 1.1. Người dùng cuối

Người dùng cuối là chủ nuôi thú cưng, trực tiếp đặt lịch, gửi yêu cầu chăm sóc và theo dõi tình trạng thú cưng. Persona đại diện là chị Lan, 28 tuổi, nhân viên văn phòng tại Thành phố Hồ Chí Minh, nuôi một chó Poodle có tiền sử dị ứng nhẹ với một số loại sữa tắm. Chị thường đặt dịch vụ tắm, cắt tỉa vào cuối tuần hoặc gửi thú cưng cả ngày và không có nhiều thời gian gọi điện hay chờ tại cơ sở.

### 1.2. Khó khăn trong quy trình hiện tại

- Đặt lịch qua điện thoại hoặc tin nhắn cần chờ cơ sở phản hồi, khiến người dùng khó chủ động thời gian.
- Xác nhận thủ công có thể không rõ ràng hoặc bị ghi nhận sai.
- Thông tin dị ứng và yêu cầu đặc biệt phải nhắc lại; thông tin có thể không đến đúng nhân viên phụ trách.
- Trong thời gian chăm sóc, người dùng không biết tiến độ nếu không chủ động gọi điện.
- Nội dung của các lượt chăm sóc không được tổng hợp thành lịch sử dễ tra cứu.

Hệ quả là chủ nuôi phải liên hệ nhiều lần và luôn ở trạng thái chờ đợi, thiếu an tâm. Hệ thống cần tập trung vào đặt lịch có xác nhận rõ ràng, lưu yêu cầu không thất lạc và cung cấp tiến độ mà không cần gọi hỏi.

### 1.3. Khoảng trống cần giải quyết

Đối chiếu trong proposal gốc cho thấy các giải pháp quản lý và đặt lịch đã hỗ trợ ở những mức độ khác nhau việc đặt lịch trực tuyến, xác nhận và lưu lịch sử. Khoảng trống trọng tâm của đồ án là trải nghiệm theo dõi từng mốc trong lúc thú cưng đang được chăm sóc. Đồ án không nhằm xây lại toàn bộ phần mềm quản lý cơ sở mà kết nối các chức năng nền tảng thành một hành trình nhất quán cho chủ nuôi.

## 2. Ý tưởng

Hệ thống web/di động lấy chủ nuôi làm trung tâm và hỗ trợ bốn nhóm chức năng:

### 2.1. Đặt lịch có xác nhận tức thì

Người dùng chọn dịch vụ và khung giờ còn trống; khung giờ đã kín không thể chọn. Sau khi đặt, hệ thống xác nhận ngay trong ứng dụng và có thể gửi thông báo, giảm thời gian chờ phản hồi thủ công.

### 2.2. Hồ sơ thú cưng và yêu cầu đặc biệt

Thông tin như dị ứng, thuốc hoặc đặc điểm hành vi được nhập vào hồ sơ và tự động đính kèm lịch hẹn. Yêu cầu cần hiển thị rõ khi cơ sở tiếp nhận thú cưng để giảm phụ thuộc vào tin nhắn cũ hoặc trí nhớ của từng nhân viên.

### 2.3. Theo dõi tiến độ theo thời gian thực

Tiến độ được cập nhật theo các mốc: đã nhận thú cưng, đang thực hiện dịch vụ, hoàn tất và chờ khách đón. Chủ nuôi xem trạng thái trên điện thoại và nhận thông báo khi trạng thái thay đổi, không cần gọi điện làm gián đoạn công việc của hai bên.

### 2.4. Lịch sử chăm sóc cá nhân hóa

Mỗi lượt chăm sóc lưu dịch vụ, ghi chú và sản phẩm đã sử dụng trong hồ sơ thú cưng. Chủ nuôi có thể tra cứu lại khi cần. Giá trị cải tiến nằm ở hành trình liên tục từ đặt lịch đến đón thú cưng, trong đó người dùng được chủ động thông báo thay vì phải chủ động hỏi.

## 3. Quy trình

### 3.1. Quy trình hiện tại

1. Chủ nuôi gọi điện hoặc nhắn tin để hỏi lịch trống.
2. Chủ nuôi chờ phản hồi và chưa biết chắc lịch đã được ghi nhận.
3. Chủ nuôi khai báo lại dị ứng hoặc yêu cầu đặc biệt.
4. Chủ nuôi bàn giao thú cưng tại cơ sở.
5. Trong thời gian chờ, chủ nuôi không có cập nhật và phải gọi nếu muốn biết tiến độ.
6. Cơ sở thông báo khi hoàn tất; thông tin lượt chăm sóc không được tập hợp thành lịch sử nhất quán.

### 3.2. Quy trình đề xuất

1. Chủ nuôi đăng nhập, chọn thú cưng, dịch vụ và khung giờ đang khả dụng.
2. Hệ thống ghi nhận và xác nhận lịch ngay; yêu cầu đặc biệt từ hồ sơ được đính kèm tự động.
3. Khi bàn giao, chủ nuôi kiểm tra lại lịch và yêu cầu đã ghi nhận.
4. Trong quá trình chăm sóc, hệ thống hiển thị mốc trạng thái mới nhất và gửi thông báo khi có thay đổi.
5. Khi hoàn tất, chủ nuôi nhận thông báo đến đón.
6. Dịch vụ, sản phẩm và ghi chú được lưu vào lịch sử của thú cưng để tham khảo ở lần sau.

### 3.3. So sánh

Quy trình mới thay thế việc hỏi lịch và chờ xác nhận bằng thao tác trực tiếp; thay việc nhắc lại yêu cầu bằng hồ sơ tái sử dụng; thay khoảng thời gian không có thông tin bằng tiến độ theo mốc; và thay các trao đổi rời rạc bằng lịch sử chăm sóc có cấu trúc. Phạm vi thiết kế vẫn tập trung vào trải nghiệm của chủ nuôi.
