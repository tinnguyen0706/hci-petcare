---
name: figma-svg-generator
description: Skill chuyên dụng để thiết kế và sinh các file SVG Wireframe / Mockup chuẩn vector tương thích 100% với Figma, cho phép kéo thả trực tiếp vào Canvas cho bất kỳ loại màn hình nào.
---

# Figma SVG Wireframe Generator Skill

## 1. Mục đích
Skill này giúp AI Agent tạo ra các bản vẽ Wireframe/Mockup hoàn chỉnh dưới định dạng **SVG vector chuẩn**. Người dùng chỉ cần **kéo thả file SVG vào Canvas Figma** (hoặc copy mã SVG rồi nhấn `Ctrl + V`) là toàn bộ cấu trúc Frame, nhóm Layer, Text, Màu sắc và Nút bấm sẽ xuất hiện ngay lập tức và có thể chỉnh sửa tự do.

---

## 2. Quy chuẩn Kỹ thuật SVG tương thích 100% Figma

Để Figma tự động chuyển đổi SVG thành các Frame và Layer chỉnh sửa được mà không bị lỗi:

1. **Khung nhìn (Viewport & Dimensions):**
   - Mobile-first tiêu chuẩn: `width="375" height="812" viewBox="0 0 375 812"`.
   - Tablet: `width="768" height="1024" viewBox="0 0 768 1024"`.
   - Desktop: `width="1440" height="900" viewBox="0 0 1440 900"`.

2. **Đặt tên Layer bằng thẻ `<g id="...">`:**
   - Figma tự động lấy thuộc tính `id` của thẻ `<g>` hoặc `<rect>` để đặt tên cho Layer/Frame con (ví dụ: `<g id="Header">`, `<g id="Service_Card">`, `<g id="Button_CTA">`).

3. **Font chữ & Typography:**
   - Dùng `font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"`.
   - Phân cấp kích thước:
     - Header/Title: `font-size="18" font-weight="700"`
     - Section Header: `font-size="12" font-weight="700" letter-spacing="0.6"`
     - Card Title: `font-size="15" font-weight="700"`
     - Body Text: `font-size="12-13" font-weight="400"`
     - Button Label: `font-size="15" font-weight="700"`

4. **Bảng màu Design Tokens chuẩn:**
   - *Primary (Chủ đạo)*: `#0D766E` (Xanh teal)
   - *Primary Light / Border*: `#F0FDFA` (Nền nhạt), `#CCFBF1` (Viền mờ)
   - *Neutral (Nền & Văn bản)*: Nền `#F8FAFC`, Thẻ `#FFFFFF`, Viền `#E2E8F0`, Chữ chính `#0F172A`, Chữ phụ `#64748B`
   - *Accent & Cảnh báo*: Cam `#E06236`, Đỏ dị ứng `#BE123C`, Hổ phách `#D97706`

---

## 3. Các Khối Giao diện Sẵn có (UI Primitives)

Skill cung cấp sẵn các mẫu vector chuẩn cho mọi thành phần:

* **Status Bar:** Giờ `09:41`, pin, sóng wifi 5G.
* **Top Navigation / Header:** Nút Back tròn, tiêu đề trang, icon tùy chọn.
* **Timeline Stepper 4 mốc:** Mốc tròn đánh số/tích xanh nối nhau bằng thanh tiến độ (ví dụ: *Đã nhận ➔ Đang chăm sóc ➔ Hoàn tất ➔ Chờ đón*).
* **Content / Service Card:** Khối bo góc `rx="12-14"`, viền phân cách, tag nổi bật (Badge) và giá tiền.
* **Time Slot Picker:** Lưới chọn khung giờ đặt hẹn.
* **Input / Search Box:** Khung nhập liệu kèm placeholder và icon kính lúp.
* **Action Button:** Nút bấm Full-width bo góc `rx="8-10"` với màu chủ đạo.
* **Bottom Navigation Bar:** 4 tab điều hướng chính kèm icon và nhãn trang đang chọn.

---

## 4. Công cụ Tự động hóa (`tools/generate-figma-svg.py`)

Trong repository đã tích hợp sẵn script Python modular hỗ trợ sinh nhanh các loại màn hình:

```bash
# Sinh màn hình Đặt lịch (Booking)
python3 tools/generate-figma-svg.py --type booking --out deliverables/booking-screen.svg

# Sinh màn hình Theo dõi tiến độ (Tracking)
python3 tools/generate-figma-svg.py --type tracking --out deliverables/tracking-screen.svg

# Sinh màn hình Hồ sơ thú cưng (Profile)
python3 tools/generate-figma-svg.py --type profile --out deliverables/profile-screen.svg
```

Hoặc import class `FigmaSvgBuilder` trong Python để dựng bất kỳ màn hình tùy chỉnh nào:

```python
from tools.generate_figma_svg import FigmaSvgBuilder

builder = FigmaSvgBuilder(375, 812, title="Man_Hinh_Thanh_Toan")
builder.add_background()
builder.add_status_bar()
builder.add_header("Xác nhận & Thanh toán", show_back=True)
builder.add_section_title("Chi tiết đơn dịch vụ")
builder.add_card("Combo Tắm & Cắt Tỉa", subtitle="Bé Bông (Poodle)", price="250.000đ", height=100)
builder.add_button("Thanh toán ngay")

with open("deliverables/checkout.svg", "w", encoding="utf-8") as f:
    f.write(builder.build())
```

---

## 5. Workflow Khi Nhận Yêu Cầu Tạo Màn Hình Mới

1. **Phân tích yêu cầu:** Xác định loại màn hình, các phần tử cần có (Header, Card, List, Stepper, Form, Button...).
2. **Khởi tạo mã SVG:** Sử dụng `FigmaSvgBuilder` hoặc viết trực tiếp file `.svg` tuân thủ các quy chuẩn tại Mục 2.
3. **Lưu file:** Ghi file vào thư mục `deliverables/<tên-màn-hình>.svg`.
4. **Hướng dẫn người dùng:** Thông báo đường dẫn file và hướng dẫn kéo thả trực tiếp vào Figma Canvas để sử dụng ngay