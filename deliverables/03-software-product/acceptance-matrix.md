# Acceptance Matrix — PetCare Pro Wireframe tương tác

## Kiến trúc

Ứng dụng giữ nguyên giao diện của 32 SVG Wireframe đã duyệt. React render đúng SVG tương ứng với từng màn hình và cung cấp vùng tương tác, state động, form, dialog, validation và persistence bằng `localStorage`. Các phần bắt buộc phải thay đổi theo thao tác như Pet summary, Service card, ngày/giờ và hồ sơ chính được render động theo đúng Design Tokens của Wireframe, tránh trạng thái ảnh tĩnh mâu thuẫn với lựa chọn thực.

Toàn bộ code, entry, package/config và dependency của Software Product nằm trong `src/`; các lệnh chạy với working directory `src/`.

## Coverage Contract

| Nhóm | Chuỗi tương tác | Kết quả |
|---|---|---|
| Booking | Pet một/nhiều bé → Service → ngày → giờ → Confirmation/Multi-pet → Success; luồng Miu tự chọn mọi giờ còn chỗ và khóa giờ kín | Đạt |
| Conflict | Dị ứng + gói thường → Error → đổi Hypo một chạm → Timeslot | Đạt |
| Profile | Chọn Bơ/Miu làm hồ sơ chính; xem y tế/tiêm chủng; thêm/sửa Pet; đặt lịch riêng | Đạt |
| Notification | Hub, filter, mark-read, Switch xanh/trắng cho Push/SMS/bốn mốc/Silent và lưu local | Đạt |
| Check-in/Handover | QR → Intake → biên bản Handover → Tracking mốc 1 | Đạt |
| Tracking | Component bốn Mốc có thể nhấn dùng chung đúng bốn màn Tracking 1–4; tự phục hồi ca xem trước; các màn phụ không bị overlay; form gửi dặn dò bổ sung theo ca; theo dõi song song; ảnh phòng cách ly; QR nhận bé | Đạt |
| Discharge/Review | QR đối soát → Before/After → rating → History | Đạt |
| History/Rebook | Filter, Details, Invoice, Budget, Rebook bắt chọn lại ngày/giờ | Đạt |
| Edge states | Loading, Empty, Allergy Conflict/Recovery, Network Error/Offline QR, Success | Đạt |

## Acceptance Gates

| Gate | Bằng chứng | Kết luận |
|---|---|---|
| Precondition | 32 Wireframe SVG, Prototype theo các goal và `wireframe-spec.md` | Đạt |
| Visual fidelity | Runtime dùng trực tiếp 32 SVG nguồn; không thiết kế lại Information Architecture | Đạt |
| Prototype coverage | Đã inventory và ánh xạ đủ 37/37 Prototype; Persona 2 còn 3 Goal đúng thứ tự, luồng Intake dùng form chung theo `activeBooking`; đủ 7/7 Goal | Đạt |
| Interaction | Mọi chuỗi chính có handler và state transition quan sát được; Back toàn cục trở về đúng màn trước; 52 màn có Bottom Navigation đều đủ bốn hotspot Trang chủ/Đặt lịch/Tiến độ/Hồ sơ | Đạt |
| Improvement | Auto-attach dặn dò, instant confirmation, bốn mốc Tracking, Rebook | Đạt |
| Consistency | Một `AppState` local dùng chung; Booking đồng bộ Pet/Service/ngày/giờ/tiến độ; ma trận Miu chỉ active đúng lựa chọn hiện tại, không tô cố định giờ khuyến nghị | Đạt |
| Accessibility | Native button/input/dialog, accessible name, `aria-pressed`, focus-visible | Đạt qua code review/test |
| Responsive | Canvas giữ tỷ lệ 430×932; mobile bỏ padding/khung desktop | Đạt qua CSS và ảnh render History/Notification 430×932 |
| Frontend-only | Không có backend hoặc live API; mô phỏng được ghi rõ | Đạt |
| Verification | Typecheck thành công; 39/39 test đạt; production build thành công với 67 modules transformed; 15/15 SVG Persona 2 đạt validator | Đạt |

## Giới hạn minh bạch

- Tracking, slot availability, QR, notification, PDF/email và báo cáo là frontend local simulation.
- Đã kiểm tra bằng ảnh render headless ở viewport 430×932; chưa kiểm tra trên thiết bị điện thoại vật lý.
