# Quy Tắc Thiết Kế & Nghiệm Thu Wireframe (Wireframe Rules)

Tệp này quy định các chuẩn mực, ràng buộc thiết kế, kiến trúc thông tin và tiêu chuẩn nghiệm thu bắt buộc đối với tất cả Agent và Subagent khi tham gia thiết kế, tạo lập bộ **Wireframe** trong toàn bộ đồ án HCI (CSC12106).

---

## 1. Nguyên Tắc & Tôn Chỉ Cốt Lõi

### 1.1. Bộ Màn Hình Tổng Thể Toàn Ứng Dụng (App-wide Screen Coverage — BẮT BUỘC)
- **Không chia cắt theo từng Persona hay Goal lẻ tẻ**: Khác với Storyboard và Prototype (được tổ chức theo từng kịch bản Persona–Goal), Wireframe là tài liệu kiến trúc giao diện tổng thể của **toàn bộ sản phẩm di động**.
- **Bao quát đầy đủ tất cả các phân hệ chức năng**:
  1. *Phân hệ Trang chủ & Điều hướng cốt lõi*: Home Dashboard tổng quan dịch vụ, thanh điều hướng dưới đáy (Bottom Navigation), Trung tâm thông báo đẩy (Push Notifications Hub).
  2. *Phân hệ Đặt lịch & Lưới giờ*: Chọn dịch vụ chăm sóc (Tắm/Spa/Cắt tỉa), Chọn khung giờ còn trống (Interactive Timeslot Picker), Gán thú cưng & Đặt lịch đa thú cưng (Multi-pet Booking).
  3. *Phân hệ Hồ sơ thú cưng & Y tế*: Hồ sơ y tế chi tiết, tiền sử dị ứng da/thuốc, tính cách, ghi chú chuyên biệt cho KTV.
  4. *Phân hệ Theo dõi tiến độ thời gian thực (Live Tracking)*: Timeline Stepper 4 mốc (*Đã nhận ➔ Đang chăm sóc ➔ Hoàn tất ➔ Chờ đón*), Xem ảnh trực tiếp từ phòng chăm sóc/cách ly.
  5. *Phân hệ Tiếp nhận & Bàn giao*: Mã QR Check-in tiếp nhận, Mã QR Bàn giao & Đối soát an toàn thú cưng.
  6. *Phân hệ Lịch sử & Chi tiêu*: Lịch sử dịch vụ chi tiết, Nhật ký sản phẩm sử dụng, Đặt lại nhanh 1 chạm (1-Click Rebook), Theo dõi ngân sách chăm sóc định kỳ.
- Toàn bộ các file Wireframe phải được lưu tập trung trực tiếp trong thư mục: `deliverables/02-interaction-design/wireframe/`.

### 1.2. Bao Phủ Trọn Vẹn 5 Trạng Thái Giao Diện (5 UI States Coverage)
Mỗi thành phần và màn hình trong hệ thống Wireframe phải phản ánh chuẩn mực 5 trạng thái giao diện của HCI:
1. **Main Flow (Ideal / Default State)**: Màn hình hoạt động trong điều kiện chuẩn, có đầy đủ dữ liệu người dùng, lịch hẹn, hồ sơ thú cưng.
2. **Loading State (Skeleton / Shimmer State)**: Màn hình khi ứng dụng đang kết nối mạng, đồng bộ dữ liệu thời gian thực hoặc tải ảnh live từ phòng chăm sóc. Sử dụng các khối chữ nhật màu xám nhạt (`#E2E8F0` / `#CBD5E1`) bo góc mô phỏng cấu trúc Skeleton Shimmer thay vì vòng xoay Spinner vô hồn.
3. **Empty State (Zero Data / Blank State)**: Màn hình khi người dùng chưa tạo hồ sơ thú cưng, chưa có lịch sử đặt dịch vụ, hoặc khi một ngày đã kín toàn bộ khung giờ chăm sóc. Phải luôn đi kèm hình vẽ minh họa vector tối giản, thông điệp hướng dẫn rõ ràng và nút bấm kêu gọi hành động (Call-to-Action - CTA) để giải tỏa bế tắc.
4. **Error & Conflict State (Error / Recovery State)**: Màn hình khi phát hiện xung đột lịch hẹn, cảnh báo dị ứng y tế nguy hiểm (dị ứng sữa tắm chứa tinh dầu), hoặc mất kết nối mạng. Phải cung cấp thông báo rõ ràng về nguyên nhân và nút 1-click gợi ý phương án khắc phục (ví dụ: "Đổi sang dầu tắm y tế Hypoallergenic", "Chọn khung giờ kế tiếp").
5. **Success & Confirmation State (Success State)**: Màn hình xác nhận đặt lịch thành công tức thì, hoàn tất bàn giao thú cưng, kèm tóm tắt thông tin quan trọng và mã định danh đối soát.

---

## 2. Tiền Điều Kiện Bắt Buộc (Strict Precondition Enforcement)

- **Bắt buộc phải có Prototype trước khi tạo Wireframe**:
  - Wireframe chỉ được phép tạo khi bộ Prototype tương tác hoàn chỉnh tại `deliverables/02-interaction-design/prototype/` đã tồn tại và hoàn thành đầy đủ cho cả Persona 1 và Persona 2.
  - **Quy tắc dừng ngay lập tức (HALT)**: Nếu kiểm tra thấy thiếu Prototype, Agent **tuyệt đối KHÔNG ĐƯỢC PHÉP tạo Wireframe mà PHẢI BÁO LỖI VÀ DỪNG LẠI NGAY LẬP TỨC**, hướng dẫn người dùng kích hoạt `prototype-agent` trước.

---

## 3. Quy Chuẩn Kỹ Thuật SVG & Thiết Kế Mobile-First (Figma Ready)

### 3.1. Thiết bị Chuẩn Hóa & Thông Số Khung Nhìn (iPhone 14 Pro Max)
- **Kích thước Viewport**: `width="430" height="932" viewBox="0 0 430 932"`.
- **Bo góc vỏ thiết bị (Outer Bezel)**: `rx="52" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"`.
- **Dynamic Island**: `<rect x="152" y="12" width="126" height="35" rx="17.5" fill="#0F172A"/>`.
- **Status Bar (Hàng trạng thái)**:
  - Thời gian hiển thị: `x="42" y="35"` (`font-size="14" font-weight="600" fill="#0F172A"`).
  - Biểu tượng mạng/pin: `x="388" y="35"` (`font-size="12" font-weight="600" text-anchor="end" fill="#0F172A"`).
- **Home Indicator**: `<rect x="145" y="918" width="140" height="5" rx="2.5" fill="#0F172A"/>`.

### 3.2. Cấu Trúc Nhóm Layer Chuẩn Figma Canvas
- Mọi thành phần giao diện phải được đóng gói trong thẻ `<g id="...">` có tính ngữ nghĩa cao để khi copy/paste hoặc kéo thả vào Figma, hệ thống Layer tự động phân cấp sạch sẽ:
  - `<g id="Device_Frame">`
  - `<g id="Status_Bar">`
  - `<g id="Top_Header">`
  - `<g id="Content_Body">`
    - `<g id="Card_Service_Item">`
    - `<g id="Timeline_Stepper">`
    - `<g id="Alert_Banner">`
  - `<g id="Bottom_CTA">`
  - `<g id="Bottom_Nav_Bar">`
  - `<g id="Home_Indicator">`

### 3.3. Tối Ưu Vùng Chạm Ngón Cái (Thumb Zone & Usability)
- **Kích thước vùng chạm tối thiểu (Touch Target)**: $\ge 44 \times 44\text{px}$ cho tất cả các nút bấm, icon, checkbox, và thẻ tương tác.
- **Bố trí công thái học**: Các nút CTA chính yếu (Primary Action) và nút xác nhận quan trọng phải được bố trí ở nửa dưới màn hình ($y = 700 \dots 870$) để người dùng dễ dàng thao tác bằng ngón tay cái khi cầm điện thoại bằng một tay.

---

## 4. Quy Chuẩn Màu Sắc, Kiểu Chữ & Chống Tràn Chữ

### 4.1. Bảng Màu Design Tokens Chuẩn (Subtle, Elegant & High Contrast)
Tuân thủ bảng màu tối giản, sang trọng, tương phản cao theo chuẩn HCI:
- **Nền chính (Background)**: `#F8FAFC` (Slate 50).
- **Bề mặt thẻ (Card Surface)**: `#FFFFFF` (Trắng tinh khiết), bo góc `rx="16"`, viền `#E2E8F0`.
- **Màu thương hiệu / Tương tác chính (Primary Teal)**: `#0D766E` (Deep Teal), nền đệm `#F0FDFA`, viền mờ `#CCFBF1`.
- **Màu chữ chính (Main Text)**: `#0F172A` (Slate 900 — đậm nét, tương phản đạt chuẩn WCAG AAA).
- **Màu chữ phụ (Metadata / Subtext)**: `#64748B` (Slate 500) hoặc `#94A3B8` (Slate 400).
- **Cảnh báo dị ứng y tế (Medical Alert / Danger)**: Nền `#FFF1F2`, viền `#FECDD3`, chữ `#9F1239` (Rose 800 — tone trầm, dễ đọc, không gây chói mắt).
- **Trạng thái thành công (Success)**: Nền `#F0FDF4`, viền `#BBF7D0`, chữ `#166534`.
- **Màu trạng thái Shimmer (Skeleton)**: Nền `#E2E8F0`, viền `#CBD5E1`.

### 4.2. Bố Cục Lề & Giới Hạn Ký Tự Tránh Tràn Chữ
Tuân thủ nghiêm ngặt [rules/layout-and-typography-rules.md](layout-and-typography-rules.md):
- **Lề an toàn 2 bên (Screen Margin)**: `20px` $\rightarrow$ Chiều rộng thẻ tối đa **`390px`** ($x = 20 \dots 410$).
- **Lề trong thẻ Card (Padding)**: `18px` $\rightarrow$ Vùng văn bản an toàn bên trong Card: **`354px`** ($x = 38 \dots 392$).
- **Giới hạn số ký tự trên 1 dòng**:
  - Header / Tiêu đề chính (`17 – 19px`): Tối đa **28 ký tự** / dòng ($\Delta y \ge 26\text{px}$).
  - Tiêu đề Card / Subheading (`14 – 16px`): Tối đa **36 ký tự** / dòng ($\Delta y \ge 22\text{px}$).
  - Nội dung / Dặn dò / Ghi chú (`12 – 13px`): Tối đa **46 ký tự** / dòng ($\Delta y \ge 19\text{px}$).
  - Nhãn phụ / Badge / Caption (`10 – 11px`): Tối đa **54 ký tự** / dòng ($\Delta y \ge 16\text{px}$).
- **Chống đè chữ cùng hàng (Horizontal Collision Prevention)**: Khi 2 đoạn text cùng tọa độ $y$, đoạn trái ($x = 38$) tối đa 26 ký tự, đoạn phải ($x = 392$, `text-anchor="end"`) tối đa 16 ký tự, khoảng hở tối thiểu $\ge 24\text{px}$.

---

## 5. Quy Chuẩn Biểu Tượng & Khả Năng Tiếp Cận (Accessibility)

### 5.1. TUYỆT ĐỐI CẤM EMOJI MÀU MÈ
- **Nghiêm cấm hoàn toàn**: Không sử dụng các emoji màu sắc như `🐱`, `🐶`, `✂️`, `🧼`, `🌟`, `🚨`, `💡`, `🐾`, `🏠`, `📅`, `⏱️`, `🔔`, `❤️`... trong file SVG.
- **Thay thế bằng**:
  - Biểu tượng vector đơn sắc nét mỏng (`stroke-width: 1.5 - 2px`).
  - Ký tự hình học phẳng tối giản: `‹`, `›`, `✓`, `✕`, `!`, `•`, `+`, `-`, `≡`, `★`.
  - Avatar thú cưng: Hình tròn viền Teal đơn sắc chứa ký tự viết tắt in hoa (như `BƠ`, `ML`, `MC`).
  - Thẻ nhãn chữ rõ ràng (Text Badges): `[DỊ ỨNG DA]`, `[PHÒNG CÁCH LY]`, `[KHUYÊN DÙNG]`, `[Y TẾ]`, `[ĐÃ DUYỆT]`.

### 5.2. Đa Kênh Nhận Thức (Multimodal Perception)
- Không dùng màu sắc làm kênh truyền tải thông tin duy nhất. Mọi cảnh báo, mốc trạng thái, lỗi đều phải kết hợp **Màu sắc + Biểu tượng phẳng + Nhãn chữ rõ ràng** để người dùng khiếm thị màu (Color-blind) vẫn tiếp nhận chính xác 100%.

---

## 6. Danh Mục Bàn Giao Đầu Ra Bắt Buộc (Required Deliverables)

Toàn bộ hệ thống Wireframe phải bao gồm đầy đủ các tệp sau trong `deliverables/02-interaction-design/wireframe/`:

### 6.1. Danh Mục Các Tệp Màn Hình Vector SVG
1. `01_home_dashboard_wireframe.svg`: Dashboard trang chủ, tổng quan lịch hẹn sắp tới, lối tắt 4 dịch vụ cốt lõi.
2. `02_push_notification_wireframe.svg`: Trung tâm thông báo đẩy (nhắc lịch, cập nhật ảnh live, cảnh báo).
3. `03_booking_service_selection_wireframe.svg`: Chọn dịch vụ chăm sóc chi tiết, bảng giá minh bạch, thông tin KTV.
4. `04_booking_timeslot_picker_wireframe.svg`: Lưới chọn ngày/khung giờ còn trống theo thời gian thực.
5. `05_multi_pet_assignment_wireframe.svg`: Đặt lịch cùng lúc cho nhiều thú cưng với yêu cầu riêng biệt.
6. `06_pet_medical_profile_wireframe.svg`: Hồ sơ y tế, cảnh báo tiền sử dị ứng, tính cách và thuốc đặc trị.
7. `07_tracking_live_timeline_wireframe.svg`: Theo dõi tiến độ trực tiếp với Timeline Stepper 4 mốc chuẩn.
8. `08_tracking_photo_detail_wireframe.svg`: Xem chi tiết ảnh/video chụp trực tiếp từ phòng chăm sóc.
9. `09_reception_checkin_wireframe.svg`: Màn hình tiếp nhận tại quầy kèm mã QR và ký nhận dặn dò đặc biệt.
10. `10_pickup_qr_handoff_wireframe.svg`: Màn hình bàn giao thú cưng kèm mã QR đối soát an toàn.
11. `11_history_expense_hub_wireframe.svg`: Trung tâm lịch sử dịch vụ, hóa đơn điện tử và nhật ký chăm sóc.
12. `12_rebook_modal_wireframe.svg`: Modal đặt lại 1 chạm (1-Click Rebook) giữ nguyên dịch vụ và ghi chú cũ.
13. `13_budget_cycle_tracker_wireframe.svg`: Theo dõi chu kỳ chăm sóc và hạn mức chi tiêu định kỳ.
14. `state_loading_wireframe.svg`: Trạng thái Skeleton Shimmer khi đang kết nối / tải dữ liệu live.
15. `state_empty_wireframe.svg`: Trạng thái trống dữ liệu (chưa có hồ sơ / kín lịch hẹn) kèm CTA điều hướng.
16. `state_error_wireframe.svg`: Trạng thái cảnh báo xung đột lịch / dị ứng thành phần kèm nút 1-click sửa lỗi.
17. `state_success_wireframe.svg`: Trạng thái xác nhận đặt hẹn thành công tức thì / hoàn tất bàn giao.

### 6.2. Tài Liệu Đặc Tả Kiến Trúc Wireframe (`wireframe-spec.md`)
Tài liệu Markdown chuẩn hóa theo `templates/wireframe-template.md` bao gồm:
- Sơ đồ Kiến trúc thông tin toàn diện (Information Architecture & Screen Flow Map).
- Ma trận phân tích chi tiết toàn bộ màn hình kết hợp đầy đủ 5 trạng thái giao diện.
- Bảng đặc tả Khả năng tiếp cận (Accessibility) & Phản hồi đa kênh (Multimodal Feedback).
- Phân tích độ phủ vùng chạm ngón cái (Thumb Zone Ergonomics Analysis).
- Đánh giá khoảng trống thiết kế và các quyết định kiến trúc giao diện (Gap Analysis & Decisions).

---

## 7. Tiêu Chuẩn Nghiệm Thu Đạt Chuẩn Rubric Điểm Tối Đa (1.0)

Một bộ Wireframe chỉ được nghiệm thu đạt chuẩn mức 1.0 (trọng số 10%) của Rubric khi đáp ứng đủ các tiêu chí:
1. **Đầy đủ số lượng và phân hệ**: Có đủ 13 màn hình luồng chính + 4 màn hình trạng thái biên SVG và file `wireframe-spec.md`.
2. **Giống giao diện thật & Chi tiết cao**: Thể hiện đầy đủ thành phần vi mô (Status Bar, Dynamic Island, Navigation, Card, Button, Badge, Timeline Stepper, QR, Home Indicator).
3. **Màu sắc hài hòa, thanh lịch**: Sử dụng đúng bộ Design Tokens chuẩn, tương phản sắc nét, màu trạng thái rõ ràng.
4. **Có sử dụng tools thiết kế**: Sinh mã SVG vector phân cấp layer ngữ nghĩa `<g id="...">` tương thích 100% khi kéo thả vào Figma Canvas.
5. **Tiện dụng & Công thái học**: Tối ưu ngón tay cái, vùng chạm $\ge 44\text{px}$, các tác vụ chính nằm ở nửa dưới màn hình.
6. **Vượt qua 100% 4 bài kiểm thử SVG**:
   - Khung nhìn chuẩn $430 \times 932\text{px}$, có Dynamic Island và Home Indicator.
   - Không bị tràn lề phải ($x + \text{width} \le 392\text{px}$ cho nội dung bên trong card).
   - Không bị va chạm hoặc đè chữ giữa các đoạn văn bản cùng hàng.
   - 100% sạch emoji màu mè, thay thế hoàn toàn bằng vector đơn sắc hoặc ký tự phẳng.
