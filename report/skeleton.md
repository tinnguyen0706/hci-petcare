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
  Báo cáo đề xuất này trình bày ý tưởng thiết kế hệ thống thang máy thông minh
  có khả năng nhận diện quá tải bằng camera, kết hợp dữ liệu tải trọng và không
  gian trong cabin để điều phối lệnh gọi tầng hiệu quả, nhằm giảm thời gian chờ
  và các lần dừng không hiệu quả trong môi trường trường học giờ cao điểm.
...

\newpage

<!-- MỤC LỤC -->
\tableofcontents

\newpage

<!-- ============================================================ -->
# Giới thiệu

## Bối cảnh và vấn đề

<!--
  Mô tả bối cảnh thực tế: thang máy trong trường học giờ cao điểm thường xuyên
  quá tải, dẫn đến dừng không hiệu quả, thời gian chờ kéo dài.

  Gợi ý nội dung:
  - Thực trạng sử dụng thang máy tại trường học / tòa nhà công cộng
  - Vấn đề: thang đầy nhưng vẫn nhận lệnh gọi, gây lãng phí thời gian
  - Sự cần thiết của giải pháp dựa trên thị giác máy tính + dữ liệu tải trọng
-->

[Viết nội dung tại đây]

## Mục tiêu

<!--
  Gợi ý nội dung:
  - Mục tiêu tổng quát: xây dựng hệ thống thang máy thông minh
  - Mục tiêu cụ thể:
    1. Nhận diện mật độ người trong cabin qua camera
    2. Kết hợp dữ liệu cảm biến tải trọng để đưa ra quyết định nhận/từ chối lệnh gọi
    3. Cung cấp thông tin trạng thái rõ ràng cho người chờ thang
-->

[Viết nội dung tại đây]

## Đối tượng liên quan

<!--
  Ai sẽ quan tâm tới kết quả?
  - Người sử dụng thang máy (sinh viên, giảng viên, nhân viên)
  - Ban quản lý vận hành tòa nhà
  - Kỹ thuật viên bảo trì
-->

[Viết nội dung tại đây]

## Phạm vi và ràng buộc

<!--
  Gợi ý:
  - Phạm vi: thiết kế giao diện và logic điều phối, mô phỏng trên prototype
  - Ràng buộc: kinh phí, thiết bị, thời gian thực hiện (1 học kỳ)
-->

[Viết nội dung tại đây]

\newpage

# Tổng quan tài liệu

## Các nghiên cứu trước đây

<!--
  Literature review:
  - Các hệ thống thang máy thông minh hiện có (Smart elevator, AI elevator)
  - Phương pháp nhận diện người bằng camera (YOLO, OpenPose, ...)
  - Các nghiên cứu về tối ưu hóa điều phối thang máy
-->

[Viết nội dung tại đây]

## Công nghệ hiện tại (State of the art)

<!--
  Phân tích các giải pháp đang có trên thị trường:
  - Hệ thống thang máy truyền thống (dừng theo nút bấm, không biết mật độ)
  - Hệ thống thang máy có cảm biến tải trọng
  - Giải pháp AI nhận diện người trong thang máy (nếu có)
-->

[Viết nội dung tại đây]

## Khoảng trống và hướng tiếp cận của đề tài

<!--
  - Các giải pháp hiện tại còn thiếu gì?
  - Đề tài này khác / cải tiến gì so với hiện có?
-->

[Viết nội dung tại đây]

\newpage

# Phương pháp thực hiện

## Quy trình thực hiện

<!--
  Quy trình đề xuất (theo hướng HCI):
  1. Khảo sát & thu thập yêu cầu (phỏng vấn, survey)
  2. Phân tích & thiết kế (persona, scenario, wireframe)
  3. Phát triển prototype
  4. Đánh giá & lặp lại
-->

[Viết nội dung tại đây]

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

<!--
  - Dữ liệu hình ảnh cabin thang máy (mô phỏng hoặc thực tế)
  - Dữ liệu tải trọng
  - Khảo sát người dùng về thói quen và trải nghiệm sử dụng thang máy
-->

[Viết nội dung tại đây]

## Kế hoạch thời gian

<!--
  Có thể trình bày dưới dạng bảng Task Chart hoặc sơ đồ PERT
-->

| Tuần | Công việc | Người phụ trách | Sản phẩm đầu ra |
|------|-----------|-----------------|-----------------|
| 1-2 | Khảo sát hiện trạng, phỏng vấn người dùng | Tất cả | Báo cáo khảo sát |
| 3-4 | Phân tích yêu cầu, thiết kế persona, scenario | ... | Persona, Scenario |
| 5-6 | Thiết kế wireframe, mockup (Figma) | ... | File Figma |
| 7-8 | Phát triển backend (nhận diện + API) | ... | API hoàn chỉnh |
| 9 | Phát triển giao diện React | ... | Giao diện |
| 10 | Tích hợp, kiểm thử | ... | Hệ thống chạy thử |
| 11 | Đánh giá, viết báo cáo cuối kỳ | ... | Báo cáo + slide |

## Phân công thành viên

<!--
  Điền tên và vai trò cụ thể
-->

| Thành viên | Vai trò | Nhiệm vụ chính |
|------------|---------|----------------|
| Thành viên 1 | Quản lý nhóm, thiết kế | ... |
| Thành viên 2 | Phát triển AI/Backend | ... |
| Thành viên 3 | Frontend, kiểm thử | ... |

## Dự trù chi phí

<!--
  Ước lượng chi phí (nếu có): công cụ, hosting, in ấn...
-->

| Hạng mục | Chi phí (VNĐ) | Ghi chú |
|----------|---------------|---------|
| ... | ... | ... |

\newpage

<!-- ============================================================ -->
# Tài liệu tham khảo

<!--
  Danh sách tài liệu tham khảo theo chuẩn IEEE hoặc APA.
  - Sách, bài báo, tài liệu kỹ thuật về HCI, thị giác máy tính, điều phối thang máy
-->

1. [Tài liệu tham khảo 1]
2. [Tài liệu tham khảo 2]
3. ...
