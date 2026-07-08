# **Hệ thống thang máy thông minh nhận diện quá tải bằng camera**

## **1\. Vấn đề**

Trong bối cảnh sử dụng thang máy tại trường học vào các khung giờ cao điểm (đầu giờ, giờ giải lao, giờ tan học), tình trạng thang máy đã đầy nhưng vẫn dừng ở các tầng trung gian khi có lệnh gọi từ bên ngoài diễn ra thường xuyên. Hiện tượng này gây ra ba hệ quả chính: (1) kéo dài thời gian di chuyển của hành khách trong cabin, (2) tạo cảm giác chờ đợi không hiệu quả cho người ở ngoài thang, và (3) làm giảm năng lực phục vụ tổng thể của hệ thống.

Khó khăn cốt lõi nằm ở chỗ hệ thống hiện tại gần như chỉ dựa vào tín hiệu gọi tầng và ngưỡng tải trọng, trong khi “độ đầy” thực tế còn phụ thuộc vào không gian sử dụng trong cabin. Ví dụ, một số hành khách mang vật dụng cồng kềnh có thể chưa vượt ngưỡng khối lượng nhưng vẫn khiến thang không thể tiếp nhận thêm người.

Do đó, điểm chưa được giải quyết là thiếu cơ chế đánh giá đồng thời cả tải trọng và mật độ không gian theo thời gian thực để ra quyết định dừng tầng một cách hợp lý.

## **2\. Ý tưởng**

Đề xuất xây dựng hệ thống điều phối thang máy thông minh tích hợp camera AI nhằm ước lượng trạng thái đầy của cabin theo thời gian thực. Trạng thái đầy được xác định dựa trên hai điều kiện kết hợp:

**1\. Ngưỡng tải trọng** (theo cảm biến hiện có của thang máy).

**2\. Ngưỡng không gian khả dụng** (ước lượng bằng thị giác máy tính từ hình ảnh trong cabin).

Trên cơ sở đó, hệ thống sẽ điều chỉnh chiến lược nhận lệnh:

1\. Khi cabin đang đầy và chưa có dự báo chỗ trống ở các tầng kế tiếp, thang máy tạm thời ưu tiên lệnh bên trong, từ chối lệnh gọi mới từ bên ngoài trên cùng hành trình.

2\. Khi hệ thống dự báo sẽ có hành khách rời cabin ở tầng sắp tới, lệnh gọi ở các tầng tiếp theo vẫn có thể được chấp nhận.

Ngoài ra, một màn hình thông tin tại mỗi tầng sẽ hiển thị các dữ liệu quan trọng cho người chờ thang: trạng thái đầy/không đầy, hướng di chuyển, các điểm dừng dự kiến, và ước lượng khả năng tiếp nhận thêm hành khách. Đây là điểm mới giúp người dùng chủ động quyết định tiếp tục chờ hay chuyển sang phương án khác.

## **3\. Quy trình**

**Thu nhận dữ liệu:** Camera AI lắp đặt trong cabin liên tục giám sát và phân tích không gian chiếm dụng (dựa trên hình ảnh và thuật toán xử lý chiều sâu/phân đoạn đối tượng), kết hợp dữ liệu cảm biến trọng lượng để đưa ra đánh giá tổng hợp về sức chứa hiệu quả còn lại.

**Ra quyết định động:** Hệ thống điều khiển trung tâm xử lý yêu cầu gọi từ bên ngoài dựa trên ba yếu tố: (a) tình trạng tải hiện tại, (b) danh sách các điểm dừng còn lại trên hành trình, và (c) số lượng hành khách dự kiến xuống tại mỗi điểm dừng đó.

**Truyền thông tin đến người dùng bên ngoài:** Màn hình tại các tầng hiển thị định dạng thông báo hai trạng thái – thông báo từ chối rõ ràng nếu không đủ chỗ sau tất cả điểm dừng trung gian, hoặc thông báo xác nhận chấp nhận kèm theo con số dự báo cụ thể về số lượng người còn có thể lên, giúp người đứng chờ sắp xếp thứ tự ưu tiên hợp lý.

**Cập nhật liên tục:** Sau mỗi lần đóng/mở cửa và mỗi điểm dừng, camera AI thực hiện tính toán lại, đảm bảo thông tin hiển thị luôn bám sát hiện trạng cabin theo thời gian thực.