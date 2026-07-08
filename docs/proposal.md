# Đề xuất: Hệ thống thang máy thông minh nhận diện quá tải bằng camera

## 1. Vấn đề

Trong bối cảnh sử dụng thang máy tại trường học vào các khung giờ cao điểm (đầu giờ, giờ giải lao, giờ tan học), tình trạng thang máy đã đầy nhưng vẫn dừng ở các tầng trung gian khi có lệnh gọi từ bên ngoài diễn ra thường xuyên. Hiện tượng này gây ra ba hệ quả chính: (1) kéo dài thời gian di chuyển của hành khách trong cabin, (2) tạo cảm giác chờ đợi không hiệu quả cho người ở ngoài thang, và (3) làm giảm năng lực phục vụ tổng thể của hệ thống.

Khó khăn cốt lõi nằm ở chỗ hệ thống hiện tại gần như chỉ dựa vào tín hiệu gọi tầng và ngưỡng tải trọng, trong khi “độ đầy” thực tế còn phụ thuộc vào không gian sử dụng trong cabin. Ví dụ, một số hành khách mang vật dụng cồng kềnh có thể chưa vượt ngưỡng khối lượng nhưng vẫn khiến thang không thể tiếp nhận thêm người.

Do đó, điểm chưa được giải quyết là thiếu cơ chế đánh giá đồng thời cả tải trọng và mật độ không gian theo thời gian thực để ra quyết định dừng tầng một cách hợp lý.

## 2. Ý tưởng

Đề xuất xây dựng hệ thống điều phối thang máy thông minh tích hợp camera AI nhằm ước lượng trạng thái đầy của cabin theo thời gian thực. Trạng thái đầy được xác định dựa trên hai điều kiện kết hợp:

1. **Ngưỡng tải trọng** (theo cảm biến hiện có của thang máy).
2. **Ngưỡng không gian khả dụng** (ước lượng bằng thị giác máy tính từ hình ảnh trong cabin).

Trên cơ sở đó, hệ thống sẽ điều chỉnh chiến lược nhận lệnh:

1. Khi cabin đang đầy và chưa có dự báo chỗ trống ở các tầng kế tiếp, thang máy tạm thời ưu tiên lệnh bên trong, từ chối lệnh gọi mới từ bên ngoài trên cùng hành trình.
2. Khi hệ thống dự báo sẽ có hành khách rời cabin ở tầng sắp tới, lệnh gọi ở các tầng tiếp theo vẫn có thể được chấp nhận.

Ngoài ra, một màn hình thông tin tại mỗi tầng sẽ hiển thị các dữ liệu quan trọng cho người chờ thang: trạng thái đầy/không đầy, hướng di chuyển, các điểm dừng dự kiến, và ước lượng khả năng tiếp nhận thêm hành khách. Đây là điểm mới giúp người dùng chủ động quyết định tiếp tục chờ hay chuyển sang phương án khác.

## 3. Quy trình

Quy trình vận hành đề xuất gồm các bước chính:

1. **Thu thập dữ liệu:** Camera trong cabin và cảm biến tải trọng gửi dữ liệu theo thời gian thực về bộ điều khiển.
2. **Ước lượng trạng thái cabin:** Mô hình AI xác định mật độ không gian; hệ thống hợp nhất với dữ liệu tải trọng để kết luận mức độ quá tải.
3. **Dự báo khả năng nhận thêm người:** Căn cứ danh sách tầng dừng của hành khách bên trong để dự đoán số chỗ có thể trống ở các điểm dừng kế tiếp.
4. **Ra quyết định điều phối:** Bộ điều khiển quyết định nhận/từ chối lệnh gọi bên ngoài theo trạng thái hiện tại và dự báo ngắn hạn.
5. **Phản hồi người dùng:** Màn hình ngoài thang cập nhật liên tục trạng thái cabin và khả năng tiếp nhận, hỗ trợ người dùng đưa ra lựa chọn di chuyển phù hợp.

Quy trình này hướng đến mục tiêu giảm số lần dừng không hiệu quả, rút ngắn thời gian chờ trung bình, và nâng cao trải nghiệm sử dụng thang máy trong môi trường có mật độ di chuyển cao.
