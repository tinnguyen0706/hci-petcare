---
name: figma-svg-generator
description: Skill chuyên dụng để thiết kế và sinh các file SVG Prototype, Wireframe hoặc Mockup chuẩn vector tương thích với Figma và có thể kéo thả trực tiếp vào Canvas.
---

# Figma SVG Prototype Generator Skill

## 1. Mục đích
Skill này giúp AI Agent tạo Prototype/Wireframe/Mockup dưới định dạng **SVG vector chuẩn**. Với workflow Prototype của dự án, agent chỉ tạo SVG; người dùng tự kéo thả vào Figma và tự kết nối Interaction.

---

## 2. Quy chuẩn Kỹ thuật SVG tương thích 100% Figma

Để Figma tự động chuyển đổi SVG thành các Frame và Layer chỉnh sửa được mà không bị lỗi:

1. **Khung nhìn (Viewport & Dimensions — Chuẩn iPhone 14 Pro Max):**
   - Mobile tiêu chuẩn: `width="430" height="932" viewBox="0 0 430 932"`.
   - Khung viền vật lý: `rx="52"` kèm Dynamic Island (`x="152" y="12" width="126" height="35" rx="17.5" fill="#0F172A"`) và Home Indicator (`x="145" y="918" width="140" height="5" rx="2.5"`).
   - Tablet: `width="768" height="1024" viewBox="0 0 768 1024"`.
   - Desktop: `width="1440" height="900" viewBox="0 0 1440 900"`.

2. **Đặt tên Layer bằng thẻ `<g id="...">`:**
   - Figma tự động lấy thuộc tính `id` của thẻ `<g>` hoặc `<rect>` để đặt tên cho Layer/Frame con (ví dụ: `<g id="Header">`, `<g id="Service_Card">`, `<g id="Button_CTA">`).

3. **Font chữ, Typography & Chống Tràn Chữ:**
   - Dùng `font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"`.
   - `rules/layout-and-typography-rules.md` là nguồn chuẩn duy nhất cho font-size, giới hạn ký tự, khoảng cách dòng, vùng text và collision. Không sao chép một bộ tọa độ hoặc giới hạn khác vào skill này.
   - Trong khung mobile hiện tại, text trong Card dùng vùng an toàn `x=38` đến `x=392`; mọi chuỗi vượt giới hạn phải được tách thành nhiều thẻ `<text>` theo khoảng cách dòng của layout rules.

4. **Bảng màu Design Tokens chuẩn:**
   - *Primary (Chủ đạo)*: `#0D766E` (Xanh teal)
   - *Primary Light / Border*: `#F0FDFA` (Nền nhạt), `#CCFBF1` (Viền mờ)
   - *Neutral (Nền & Văn bản)*: Nền `#F8FAFC`, Thẻ `#FFFFFF`, Viền `#E2E8F0`, Chữ chính `#0F172A`, Chữ phụ `#64748B`
   - *Accent & Cảnh báo*: Cam `#E06236`, Đỏ dị ứng `#BE123C`, Hổ phách `#D97706`

5. **Quy chuẩn Biểu tượng (Iconography) — TUYỆT ĐỐI KHÔNG DÙNG EMOJI MÀU MÈ:**
   - Cấm chèn các ký tự emoji màu (như `🐱`, `🐶`, `✂️`, `🧼`, `🌟`, `🚨`, `💡`, `🐾`, `🏠`, `📅`, `⏱️`, `🔔`, `❤️`...).
   - Thay thế 100% bằng **Biểu tượng Vector Đơn sắc (Monochrome Vector)** hoặc **Ký tự Hình học phẳng Tối giản**:
     - *Avatar thú cưng*: Vòng tròn viền teal kèm text chữ viết tắt in hoa (Ví dụ: `BƠ` hoặc `BB`) hoặc hình khối silhouette tối giản.
     - *Nút Back / Tiếp tục*: `<text font-size="18" font-weight="700">‹</text>` hoặc `›`.
     - *Dấu xác nhận / Đóng*: `<text font-size="14" font-weight="bold">✓</text>` hoặc `✕`.
     - *Thẻ Tag / Cảnh báo*: Dùng nhãn chữ rõ ràng (Text Badges) như `[DA NHẠY CẢM]`, `[PHÒNG CÁCH LY]`, `[GÓI ĐỊNH KỲ]`, `[TỰ ĐỘNG KHÓA]`.
     - *Icon Điều hướng (Nav Bar)*: Dùng vector path đơn sắc nét mỏng (`stroke-width: 1.5 - 2px`) hoặc nhãn chữ tinh tế.

---

## 3. Các Khối Giao diện Sẵn có (UI Primitives Tối Giản)

Skill cung cấp sẵn các mẫu vector chuẩn không emoji:

* **Status Bar:** Thời gian lấy từ Storyboard/Scenario hoặc dùng placeholder phi định lượng; không hardcode giờ mẫu như dữ liệu thật. Chỉ báo mạng/pin dùng hình thức tối giản thống nhất.
* **Top Navigation / Header:** Nút Back tròn, tiêu đề trang, nút tác vụ đơn sắc.
* **Timeline Stepper 4 mốc:** Mốc tròn đánh số `1`, `2`, `3`, `4` nối nhau bằng thanh tiến độ (*Đã nhận ➔ Đang chăm sóc ➔ Hoàn tất ➔ Chờ đón*).
* **Content / Service Card:** Khối bo góc trong khoảng `rx="6-16"`, viền phân cách và Text Badge; chỉ hiển thị giá khi có nguồn dữ liệu được phép.
* **Time Slot Picker:** Lưới chọn khung giờ đặt hẹn với viền và nền trạng thái.
* **Input / Search Box:** Khung nhập liệu kèm placeholder.
* **Action Button:** Nút bấm Full-width bo góc trong khoảng `rx="10-16"` với màu chủ đạo.
* **Bottom Navigation Bar:** 4 tab điều hướng chính kèm nhãn trang và chỉ báo active dạng thanh line/chấm tròn đơn sắc.

---

## 4. Công cụ Tự động hóa (`tools/generate-figma-svg.py`)

Trong repository đã tích hợp sẵn script Python modular hỗ trợ sinh nhanh các loại màn hình:

```bash
# Sinh asset mẫu kỹ thuật; khi làm Prototype phải thay persona-id/goal-id thật
python3 tools/generate-figma-svg.py --type booking --out deliverables/02-interaction-design/prototype/persona-id/goal-id/01_booking.svg

# Sinh màn hình Theo dõi tiến độ
python3 tools/generate-figma-svg.py --type tracking --out deliverables/02-interaction-design/prototype/persona-id/goal-id/01_tracking.svg

# Sinh màn hình Hồ sơ thú cưng
python3 tools/generate-figma-svg.py --type profile --out deliverables/02-interaction-design/prototype/persona-id/goal-id/01_profile.svg
```

Không import bằng `from tools.generate_figma_svg ...` vì tên file thật chứa dấu gạch ngang. Với màn hình tùy chỉnh, viết SVG trực tiếp theo layout rules hoặc chỉ dùng CLI của tool hiện có; không tạo wrapper/script mới.

---

## 5. Workflow Khi Nhận Yêu Cầu Tạo Màn Hình Mới

1. **Phân tích yêu cầu:** Xác định loại màn hình, các phần tử cần có (Header, Card, List, Stepper, Form, Button...).
2. **Khởi tạo mã SVG:** Sử dụng `FigmaSvgBuilder` hoặc viết trực tiếp file `.svg` tuân thủ các quy chuẩn tại Mục 2.
3. **Lưu file:** Với Prototype, ghi vào `deliverables/02-interaction-design/prototype/<persona-id>/<goal-id>/<nn_screen-name>.svg`.
4. **Hướng dẫn người dùng:** Thông báo đường dẫn file và hướng dẫn kéo thả trực tiếp vào Figma Canvas để sử dụng ngay
