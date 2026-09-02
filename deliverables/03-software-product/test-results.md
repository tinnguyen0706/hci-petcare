# Test Results — PetCare Pro Wireframe tương tác

- Ngày xác minh: `2026-09-02`.
- Working directory: `src/`.

| Lệnh/kiểm tra | Kết quả thực tế |
|---|---|
| `npm.cmd run typecheck` | Thành công; exit code 0 |
| `npm.cmd test -- --run` | Thành công ngoài sandbox; 1 test file, 39/39 test đạt; exit code 0 |
| `npm.cmd run build` | Thành công ngoài sandbox; 67 modules transformed; exit code 0 |
| `python tools/validate-svg.py deliverables/02-interaction-design/prototype/persona-2/goal-{1,2,3} -v` | Thành công; 15/15 SVG Persona 2 đạt validator sau khi xóa Goal cũ và đánh lại số; còn cảnh báo heuristic về độ dài câu, không có lỗi cấu trúc SVG |
| Visual QA 430×932 | Đạt; render History, Notification, Tracking và Rebook bằng `tools/render-html-to-png.py`; lớp tương tác không chồng nội dung SVG |

## Automated coverage

1. Đủ màn hình nguồn và dùng chung route/form React cho các Prototype có cùng chức năng; Home render đúng SVG nguồn.
2. Đồng hồ hiển thị giờ hệ thống.
3. Booking đổi Service có trạng thái chọn động và xử lý Allergy Conflict/Recovery.
4. Booking bắt tự chọn ngày/giờ và đi đến Success.
5. Multi-pet cập nhật Pet summary theo Bơ + Miu.
6. Profile chọn Miu làm hồ sơ chính và thêm Pet mới có persistence.
7. Notification filter và Settings toggle hoạt động.
8. Check-in → Intake → Handover → Tracking mốc 1.
9. Tracking chuyển từ mốc 2 đến mốc 4.
10. Review thay đổi rating và lưu về History.
11. Rebook quay về Timeslot và bắt chọn giờ mới.
12. Filter Notification/History luôn hiển thị nhãn thật ở cả trạng thái chọn và không chọn; không còn khối teal trống.
13. Pet được chọn đồng bộ xuyên suốt Confirmation → Success → Tracking; kiểm thử riêng với Miu để ngăn dữ liệu mẫu Bơ ghi đè.
14. Notification filter thay đổi danh sách nội dung thật; Review tạo lượt chăm sóc mới trong History và Rebook đọc dữ liệu History runtime.
15. Conflict có đủ hai nhánh phục hồi: đổi sang Hypo hoặc giữ dịch vụ và ghi nhận mang dầu riêng; Hotline và Bottom Navigation có vùng bấm đúng SVG.
16. Rebook chọn được hai lịch gợi ý, cập nhật trạng thái chọn/CTA, xác nhận tạo booking mới, chọn lịch khác, đóng và hủy thao tác.
17. Service badge và thẻ dặn dò thay đổi theo Pet; chọn riêng Miu không còn hiển thị nội dung phù hợp da Bơ.
18. Empty State có đủ thao tác quay lại, đặt lịch, Rebook, mở cài đặt nhắc lịch, xem giờ trống hôm nay và Bottom Navigation.
19. Timeslot lấy dãy ngày từ đồng hồ máy, cho chọn trực tiếp ngày và khung giờ còn chỗ, khóa giờ đã hết chỗ, đặt lại lựa chọn, thêm/bỏ Miu và tiếp tục theo dữ liệu người dùng chọn.
20. Profile đặt badge chọn Pet đúng góc thẻ, đồng bộ viền thẻ theo hồ sơ chính và căn vùng bấm y tế/tiêm chủng/đặt lịch đúng tọa độ SVG.
21. Success đặt tóm tắt booking động đúng hộp chi tiết, không che biểu tượng/thông báo thành công; QR, Tracking, CTA, Back và Bottom Navigation bám đúng tọa độ SVG.
22. Booking của Miu chạy từ Trang chủ qua Time Matrix, Service, Review, Success rồi tiếp tục dùng được luồng tiếp nhận chung của ứng dụng; luồng này không còn được tính là Prototype Goal riêng của Persona 2.
23. Back toàn cục dùng lịch sử điều hướng thực tế: Tracking → Camera → Back trở về Tracking → Back trở về đúng màn đã mở Tracking.
24. Cả bốn màn Tracking đều có hotspot Back; khi mở trực tiếp URL, từng màn dùng đích dự phòng an toàn nếu phiên chưa có lịch sử.
25. Trên màn Handover, bốn nút cố định Trang chủ, Đặt lịch, Tiến độ và Hồ sơ đều được bấm thật và điều hướng đúng màn đích.
26. Quét toàn bộ 52 màn có Bottom Navigation để xác nhận mỗi màn đều có đủ bốn hotspot; Rebook được loại trừ vì là Bottom Sheet không có thanh điều hướng trong SVG nguồn.
27. Notification Settings dùng Switch xanh/trắng thay cho vòng chọn; đủ bốn công tắc mốc tiến độ có state bật/tắt độc lập và accessible state `aria-pressed`.
28. Ma trận giờ Miu render toàn bộ lựa chọn bằng React: ba khung còn chỗ có giao diện đồng nhất, chỉ một khung được active, 13:30 chỉ là khuyến nghị, 09:00 bị khóa; CTA và màn xác nhận luôn phản ánh đúng giờ hiện tại.
29. Màn dịch vụ Miu không còn gán cứng gói tiêu chuẩn: bắt buộc người dùng chọn, cho đổi giữa gói tiêu chuẩn/combo và đồng bộ tên, giờ, giá qua Warning, Review, Success.
30. Review có control thật cho 5 sao, bốn tag phản hồi, lời nhắn, tip và lưu KTV ưu tiên; Intake/Network bổ sung các quick action còn thiếu.
31. Rà soát control theo SVG bổ sung link/chức năng cho QR, Tracking, Parallel Tracking, Camera, Discharge, Before/After, Session PDF, Budget export và toàn bộ sáu bước tiếp nhận của Miu.
32. Thanh tiến độ Tracking dùng bốn button trực tiếp; người dùng nhấn Mốc 1–4 để chuyển đến đúng màn giai đoạn, có `aria-pressed` và trạng thái active đồng bộ.
33. Back trong Tracking đồng bộ lại URL, màn hình, `trackingStep` và trạng thái booking; quay lại Mốc cũ xong vẫn chọn được Mốc bất kỳ mà không bị khóa tương tác.
34. “Gửi thêm dặn dò” mở form nhập thật, hỗ trợ Hủy/Gửi, lưu nội dung theo booking hiện tại và hiển thị dặn dò bổ sung trên Tracking; nhãn nút không chứa tên KTV.
35. Component thanh bốn Mốc chỉ phủ đúng bốn màn Tracking 1–4; các màn phụ như Intake, Camera, Discharge và Inspection không bị lớp tiến độ che nội dung. Khi mở URL Tracking trực tiếp hoặc booking cũ đã kết thúc, app tự khôi phục ca xem trước để các Mốc vẫn nhấn được.
36. Trang Hồ sơ có nút trực tiếp mở Lịch sử & Nhật ký dịch vụ và giữ đầy đủ bộ lọc, chi tiết, đặt lại.
37. Ma trận thời gian dùng chung cho mọi hồ sơ thú cưng: vào trực tiếp từ Hồ sơ, đổi bé ngay trên ma trận, tự đổi khung khuyên dùng và giữ đúng lựa chọn sang bước tiếp theo.
38. Từ Bước 1 chọn dịch vụ luôn phải mở Bước 2 Timeslot, kể cả khi local state còn ngày/giờ của lượt chọn trước; không được nhảy thẳng sang Confirmation.

39. Hồ sơ y tế dùng lớp dữ liệu động theo `primaryPetId`: nhấn Chi tiết y tế Miu hiển thị Miu và dặn dò của Miu; quay lại chọn Bơ hiển thị đúng dữ liệu Bơ, không còn nội dung SVG Bơ ghi đè lựa chọn.
40. Route `checkin` dùng trực tiếp Prototype P1/G2/02 `qr_intake_scan`; CTA “Nhân viên đã quét mã” mở cảnh báo y tế, còn tên Pet, mã QR và dặn dò thay đổi theo `activeBooking` dùng chung cho Bơ/Miu.
41. Sửa vùng phủ động của QR để không che viền thẻ; sau CTA “Nhân viên đã quét mã”, Bơ đi đúng Prototype Persona 1 Goal 2 từ màn 03 → 04 → 05 → 06. Miu dùng cùng luồng và cùng form, chỉ thay dữ liệu theo Pet đang đặt lịch. Màn 06 đồng bộ Mốc 2 và nút “Bật thông báo đẩy” lưu cấu hình thành công.

> Trạng thái xác minh hiện tại: TypeScript đạt, 39/39 test đạt, production build đạt và 15/15 SVG thuộc 3 Goal của Persona 2 đạt validator.

## Production build

- HTML: `0.58 kB` (`0.38 kB` gzip).
- CSS: `40.67 kB` (`7.16 kB` gzip).
- JavaScript: `259.17 kB` (`79.18 kB` gzip).
- Prototype P1/G2 cung cấp bộ route/form Intake dùng chung; dữ liệu Bơ/Miu lấy từ `activeBooking` thay vì tạo route riêng theo tên thú cưng.
