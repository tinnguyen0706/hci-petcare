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
3. Cung cấp thông báo trạng thái rõ ràng cho người chờ thang về việc cabin còn chỗ trống hay không còn chỗ trống.

## Đối tượng liên quan

Đề tài chỉ hướng đến một đối tượng chính là **người sử dụng thang máy trong khuôn viên trường học**, gồm **sinh viên, giảng viên và nhân viên**. Đây là nhóm chịu tác động trực tiếp bởi thời gian chờ, số lần dừng không hiệu quả và mức độ rõ ràng của thông báo trạng thái cabin.

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
3. Trình bày thông tin bằng thông báo rõ ràng cho người chờ thang rằng **cabin còn chỗ trống** hay **cabin không còn chỗ trống**, từ đó hỗ trợ quyết định tiếp tục chờ hoặc chọn phương án di chuyển khác.

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

Đề tài cần thu thập dữ liệu theo hai phần: dữ liệu hệ thống và dữ liệu người dùng.

1. **Dữ liệu hệ thống**
   - Dữ liệu hình ảnh/video trong cabin để nhận diện mật độ người và mức độ chiếm dụng không gian.
   - Dữ liệu tải trọng từ cảm biến để xác định trạng thái gần quá tải hoặc quá tải.
   - Dữ liệu sự kiện vận hành (lệnh gọi tầng, điểm dừng, thời điểm mở/đóng cửa) để đánh giá hiệu quả điều phối.

2. **Dữ liệu người dùng**
   - **Khảo sát bảng hỏi** dành cho đúng đối tượng sử dụng chính: sinh viên, giảng viên, nhân viên.
   - Nội dung khảo sát tập trung vào: mức độ dễ hiểu của thông báo "cabin còn chỗ/không còn chỗ", cảm nhận thời gian chờ, và mức độ tin tưởng vào thông báo hệ thống.
   - Hình thức trả lời gồm câu hỏi thang đo mức độ (Likert) kết hợp câu hỏi mở để ghi nhận góp ý.

3. **Thiết kế phỏng vấn bán cấu trúc**
   - Người tham gia phỏng vấn gồm ba nhóm: **sinh viên, giảng viên, nhân viên** (đều là người sử dụng thang máy thường xuyên trong trường).
   - Mục tiêu phỏng vấn là làm rõ hành vi chờ thang, cách họ hiểu thông báo trạng thái cabin, và kỳ vọng khi hệ thống báo không còn chỗ trống.
   - Kết quả phỏng vấn được dùng để điều chỉnh nội dung thông báo trên giao diện cho ngắn gọn, rõ nghĩa và dễ ra quyết định.

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
| Raspberry Pi 5 (8GB) | 2.550.000 | Giá tham khảo thị trường Việt Nam, mức phổ biến 2,45-2,70 triệu |
| Nguồn chính hãng USB-C 27W cho Pi 5 | 405.000 | Nguồn 5.1V-5A, tham khảo mức bán lẻ phổ biến 388.000-430.000 |
| Thẻ nhớ microSD 128GB | 299.000 | Mức phổ biến cho dòng chính hãng U1/U3 dùng cho prototype |
| Webcam Logitech C270 | 420.000 | Mức phổ biến 399.000-499.000 tại các nhà bán lẻ lớn |
| Màn hình 24 inch IPS (hiển thị thông báo) | 2.190.000 | Chọn phân khúc phổ thông cho mục tiêu hiển thị trạng thái |
| Công cụ phần mềm (Python, FastAPI, PostgreSQL, React, Figma Free) | 0 | Sử dụng bản miễn phí/mã nguồn mở |
| In báo cáo màu + đóng gáy (01 bản) | 100.000 | Mức thường gặp khoảng 60.000-150.000 tùy chất lượng in |
| **Tổng chi phí ước tính** | **5.964.000** | Chưa bao gồm chi phí phát sinh nhỏ (dây cáp, phụ kiện lắp đặt) |

Chi phí trên được tổng hợp theo giá bán lẻ phổ biến tại Việt Nam (thời điểm tham khảo: tháng 07/2026) để phục vụ prototype học kỳ.

\newpage

# Tài liệu tham khảo

1. OpenCV Documentation. https://docs.opencv.org/
2. Ultralytics YOLO Documentation. https://docs.ultralytics.com/
3. FastAPI Documentation. https://fastapi.tiangolo.com/
4. PostgreSQL Documentation. https://www.postgresql.org/docs/
5. React Documentation. https://react.dev/
6. Phúc Anh. Webcam Logitech C270. https://www.phucanh.vn/webcam-logitech-c270.html
7. HACOM. Webcam Logitech HD C270. https://hacom.vn/webcam-logitech-hd-270
8. Raspberry Pi Việt Nam. Mạch máy tính Raspberry Pi 5. https://raspberrypi.vn/san-pham/mach-may-tinh-raspberry-pi-5
9. Hshop. Nguồn chính hãng Raspberry Pi 5 Power Supply 27W USB-C. https://hshop.vn/nguon-chinh-hang-official-raspberry-pi-5-power-supply-5vdc-5a-27w-usb-c
10. An Phát Computer. Màn hình Samsung LS24D300GAEXXV. https://www.anphatpc.com.vn/man-hinh-samsung-ls24d300gaexxv.html
11. Hoàng Hà Mobile. Thẻ nhớ 128GB: Bảng giá tham khảo. https://hoanghamobile.com/tin-tuc/the-nho-128gb/
12. In Hoa Hồng. Báo giá in màu 2025 tại Hà Nội & TP.HCM. https://inhoahong.vn/gia-in-mau
13. In Hoàng Nam. In tài liệu màu A4 giá rẻ tại TP.HCM. https://inanhoangnam.com/in-tai-lieu-mau-tai-lieu-a4-gia-re-chat-luong-cao-in-nhanh-tphcm.html
