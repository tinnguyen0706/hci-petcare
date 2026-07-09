---
title: "Hệ thống thang máy thông minh nhận diện quá tải bằng camera"
author:
  - "Thành viên 1 - MSSV"
  - "Thành viên 2 - MSSV"
  - "Thành viên 3 - MSSV"
institute: "Đại học Khoa học Tự nhiên TPHCM - Khoa Công nghệ Thông Tin"
course: "CSC12106 - HCI"
date: "2026"
abstract: |
  Báo cáo này trình bày đề xuất thiết kế hệ thống thang máy thông minh có khả năng
  nhận diện trạng thái quá tải bằng camera, kết hợp dữ liệu tải trọng và dữ liệu
  không gian trong cabin để hỗ trợ điều phối lệnh gọi tầng theo thời gian thực.
  Mục tiêu của hệ thống là giảm các lần dừng không hiệu quả, rút ngắn thời gian
  chờ trong giờ cao điểm tại môi trường trường học, đồng thời cung cấp thông tin
  trạng thái rõ ràng để người dùng chủ động lựa chọn phương án di chuyển phù hợp.
...

\newpage

\tableofcontents

\newpage

# Giới thiệu

## Bối cảnh và vấn đề

Trong bối cảnh sử dụng thang máy tại trường học vào các khung giờ cao điểm, tình trạng cabin đã đầy nhưng vẫn dừng tại các tầng trung gian do lệnh gọi bên ngoài xảy ra thường xuyên. Hiện tượng này làm kéo dài thời gian di chuyển của hành khách trong cabin, tăng cảm giác chờ đợi kém hiệu quả của người đứng ngoài, và làm giảm năng lực phục vụ tổng thể của hệ thống.

Khó khăn chính là hệ thống truyền thống chủ yếu dựa trên tín hiệu nút bấm và ngưỡng tải trọng, trong khi mức độ "đầy" thực tế còn phụ thuộc vào không gian khả dụng bên trong cabin. Một cabin có thể chưa vượt ngưỡng khối lượng nhưng vẫn không đủ chỗ để nhận thêm hành khách do bố trí người và vật dụng cồng kềnh.

Vì vậy, cần một cơ chế đánh giá trạng thái cabin theo thời gian thực dựa trên cả tải trọng và mật độ không gian để ra quyết định dừng tầng hợp lý hơn.

## Mục tiêu

Mục tiêu tổng quát của đề tài là xây dựng thiết kế hệ thống điều phối thang máy thông minh giúp giảm các lần dừng không hiệu quả trong điều kiện cao điểm.

Các mục tiêu cụ thể gồm:

1. Nhận diện mật độ người và mức độ chiếm dụng không gian trong cabin bằng camera AI.
2. Kết hợp dữ liệu cảm biến tải trọng với dữ liệu thị giác máy tính để quyết định nhận hoặc từ chối lệnh gọi bên ngoài.
3. Cung cấp thông tin trạng thái dễ hiểu cho người chờ thang, bao gồm mức tải hiện tại, hướng di chuyển, điểm dừng dự kiến và khả năng tiếp nhận thêm.

## Đối tượng liên quan

Đề tài hướng đến ba nhóm đối tượng chính:

1. Người sử dụng thang máy trong khuôn viên trường học (sinh viên, giảng viên, nhân viên), là nhóm chịu tác động trực tiếp bởi thời gian chờ và chất lượng phục vụ.
2. Ban quản lý vận hành tòa nhà, là nhóm cần dữ liệu trạng thái theo thời gian thực để giám sát hiệu quả vận hành.
3. Kỹ thuật viên bảo trì và triển khai hệ thống, là nhóm sử dụng thông tin kỹ thuật để theo dõi và tinh chỉnh hệ thống.

## Phạm vi và ràng buộc

Phạm vi thực hiện tập trung vào thiết kế giải pháp và mô phỏng nguyên lý hoạt động, bao gồm: mô hình nhận diện mật độ cabin, logic điều phối nhận/từ chối lệnh gọi tầng, và giao diện hiển thị thông tin cho người dùng bên ngoài thang máy.

Các ràng buộc chính gồm:

1. Thời gian triển khai trong phạm vi một học kỳ.
2. Nguồn lực phần cứng và dữ liệu thực tế có thể giới hạn.
3. Mức độ tích hợp với hệ thống thang máy thực phụ thuộc vào điều kiện an toàn và hạ tầng hiện có.

\newpage

# Xem xét tài liệu liên quan

## Các nghiên cứu trước đây

Các hướng nghiên cứu liên quan thường tập trung vào ba nhóm nội dung: (1) điều phối thang máy thông minh nhằm tối ưu thời gian chờ, (2) nhận diện người trong không gian hẹp bằng thị giác máy tính, và (3) đánh giá năng lực phục vụ theo trạng thái tải. Trong đó, các mô hình nhận diện đối tượng thời gian thực như YOLO được sử dụng phổ biến để đếm người và ước lượng mật độ trong khung hình.

Trong bối cảnh HCI, nhiều nghiên cứu nhấn mạnh rằng việc chỉ tối ưu thuật toán điều phối là chưa đủ; hệ thống cần truyền đạt trạng thái rõ ràng để người dùng điều chỉnh hành vi chờ đợi. Đây là cơ sở để đề tài kết hợp lớp nhận diện kỹ thuật với lớp giao tiếp trực quan ngoài cabin.

## Công nghệ hiện tại (State of the art)

Hệ thống thang máy truyền thống vận hành theo cơ chế nhận lệnh nút bấm và lịch dừng, không đánh giá trực tiếp mật độ không gian trong cabin. Một số hệ thống có cảm biến tải trọng giúp phát hiện quá tải theo khối lượng, nhưng chưa phản ánh đầy đủ khả năng tiếp nhận thực tế theo bố trí không gian.

Trong khi đó, các công nghệ thị giác máy tính hiện đại cho phép nhận diện người theo thời gian thực với độ trễ thấp, tạo điều kiện để bổ sung chiều thông tin không gian vào quyết định điều phối. Tuy nhiên, việc kết hợp đồng bộ giữa dữ liệu thị giác, dữ liệu tải trọng và trải nghiệm giao diện người dùng vẫn chưa phổ biến trong các mô hình triển khai ở môi trường trường học.

## Khoảng trống và hướng tiếp cận của đề tài

Khoảng trống chính của các giải pháp hiện tại là thiếu cơ chế ra quyết định hợp nhất giữa "khối lượng tải" và "không gian khả dụng", đồng thời thiếu giao diện giải thích trạng thái một cách trực quan cho người chờ thang.

Đề tài tiếp cận theo hướng:

1. Xây dựng chỉ số trạng thái cabin từ hai nguồn dữ liệu: cảm biến tải trọng và nhận diện mật độ từ camera.
2. Thiết kế luật điều phối động để ưu tiên lệnh hợp lý theo tình trạng cabin và các điểm dừng sắp tới.
3. Trình bày thông tin theo ngữ nghĩa rõ ràng (xanh, vàng, đỏ) để hỗ trợ người dùng ra quyết định nhanh.

\newpage

# Phương pháp thực hiện

## Quy trình thực hiện

Quy trình thực hiện gồm bốn giai đoạn chính:

1. **Khảo sát và thu thập yêu cầu:** Ghi nhận hành vi sử dụng thang máy vào giờ cao điểm, xác định điểm nghẽn trải nghiệm, và tổng hợp nhu cầu thông tin từ người dùng.
2. **Phân tích và thiết kế:** Xây dựng kịch bản sử dụng, xác định luật quyết định nhận/từ chối lệnh gọi, thiết kế wireframe giao diện hiển thị trạng thái.
3. **Phát triển prototype:** Triển khai mô-đun nhận diện mật độ cabin, dịch vụ điều phối và giao diện ngoài thang máy theo kiến trúc đề xuất.
4. **Đánh giá và cải tiến:** Đánh giá tính rõ ràng của giao diện và tính hợp lý của quyết định điều phối trong các kịch bản mô phỏng, sau đó lặp lại để cải thiện.

## Công cụ và dữ liệu

### Công nghệ sử dụng

| Công nghệ | Mục đích |
|-----------|----------|
| Python, OpenCV, YOLOv8 | Nhận diện người và ước lượng mật độ trong cabin |
| FastAPI | Dịch vụ điều phối thời gian thực |
| PostgreSQL | Lưu log trạng thái cabin, sự kiện gọi tầng |
| React + TypeScript | Màn hình thông tin ngoài thang, dashboard |
| Figma | Thiết kế giao diện prototype |

### Dữ liệu cần thu thập

Đề tài sử dụng các nhóm dữ liệu sau:

1. Dữ liệu hình ảnh/video trong cabin để nhận diện mật độ người và mức độ chiếm dụng không gian.
2. Dữ liệu tải trọng từ cảm biến để xác định trạng thái gần quá tải hoặc quá tải.
3. Dữ liệu sự kiện vận hành (lệnh gọi tầng, điểm dừng, thời điểm mở/đóng cửa) để đánh giá hiệu quả điều phối.
4. Dữ liệu khảo sát người dùng về mức độ dễ hiểu của thông tin hiển thị và cảm nhận thời gian chờ.

## Kế hoạch thời gian

| Tuần | Công việc | Người phụ trách | Sản phẩm đầu ra |
|------|-----------|-----------------|-----------------|
| 1-2 | Khảo sát hiện trạng, phỏng vấn người dùng | Tất cả | Báo cáo khảo sát |
| 3-4 | Phân tích yêu cầu, thiết kế persona, scenario | Tất cả | Persona, Scenario |
| 5-6 | Thiết kế wireframe, mockup (Figma) | Thành viên phụ trách UI/UX | File Figma |
| 7-8 | Phát triển backend (nhận diện + API) | Thành viên phụ trách AI/Backend | API và mô-đun nhận diện |
| 9 | Phát triển giao diện React | Thành viên phụ trách Frontend | Giao diện hiển thị trạng thái |
| 10 | Tích hợp, kiểm thử kịch bản | Tất cả | Prototype tích hợp |
| 11 | Đánh giá, hoàn thiện báo cáo cuối kỳ | Tất cả | Báo cáo và slide |

## Phân công thành viên

| Thành viên | Vai trò | Nhiệm vụ chính |
|------------|---------|----------------|
| Thành viên 1 | Quản lý nhóm, phân tích yêu cầu | Điều phối tiến độ, xây dựng kịch bản sử dụng, tổng hợp báo cáo |
| Thành viên 2 | Phát triển AI/Backend | Xây dựng mô-đun nhận diện mật độ cabin, phát triển API điều phối |
| Thành viên 3 | Frontend, kiểm thử | Thiết kế giao diện hiển thị, tích hợp frontend, hỗ trợ kiểm thử trải nghiệm |

## Dự trù chi phí

| Hạng mục | Chi phí (VNĐ) | Ghi chú |
|----------|---------------|---------|
| Công cụ phát triển phần mềm mã nguồn mở | 0 | Sử dụng Python, FastAPI, PostgreSQL, React (miễn phí) |
| Thiết kế giao diện (Figma bản miễn phí) | 0 | Dùng gói miễn phí phục vụ prototype |
| Hạ tầng chạy thử nội bộ | Tận dụng sẵn có | Sử dụng máy cá nhân hoặc máy phòng lab |
| In ấn tài liệu, chuẩn bị báo cáo | Theo nhu cầu thực tế | Phát sinh khi nộp cuối kỳ |

\newpage

# Tài liệu tham khảo

1. OpenCV Documentation. https://docs.opencv.org/
2. Ultralytics YOLO Documentation. https://docs.ultralytics.com/
3. FastAPI Documentation. https://fastapi.tiangolo.com/
4. PostgreSQL Documentation. https://www.postgresql.org/docs/
5. React Documentation. https://react.dev/
