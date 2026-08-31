# Quy Tắc Bố Cục & Kiểu Chữ SVG — iPhone 14 Pro Max (Layout & Typography Rules)

Quy tắc này áp dụng **bắt buộc cho tất cả các Agent và Subagent khi thiết kế, tạo lập màn hình vector SVG (Wireframe, Prototype, Mockup)** trong toàn bộ dự án HCI (CSC12106).

---

## 1. Thiết Bị Chuẩn Hóa: iPhone 14 Pro Max ($430 \times 932\text{px}$)

Toàn bộ màn hình di động được thiết kế trên khung chuẩn của **iPhone 14 Pro Max**:
- **Kích thước Viewport**: `width="430" height="932" viewBox="0 0 430 932"`
- **Bo góc khung máy (Outer Bezel)**: `rx="52" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"`
- **Dynamic Island**: 
  ```xml
  <!-- Dynamic Island Component -->
  <rect x="152" y="12" width="126" height="35" rx="17.5" fill="#0F172A"/>
  ```
- **Status Bar (Hàng trạng thái)**:
  - Giờ hiển thị: `x="42" y="35"` (`font-size="14" font-weight="600" fill="#0F172A"`)
  - Chỉ báo sóng/pin: `x="388" y="35"` (`font-size="12" font-weight="600" text-anchor="end" fill="#0F172A"`)
- **Home Indicator Bar**:
  ```xml
  <!-- Home Indicator -->
  <rect x="145" y="918" width="140" height="5" rx="2.5" fill="#0F172A"/>
  ```

---

## 2. Kích Thước Bố Cục An Toàn & Vùng Chứa Thẻ (Card Bounds)

- **Lề an toàn 2 bên (Screen Margin)**: `20px` mỗi bên.
- **Chiều rộng thẻ Card tối đa**: **`390px`** ($x = 20$ đến $x = 410$).
- **Lề trong của Card (Padding)**: `18px` mỗi bên $\rightarrow$ **Vùng text an toàn bên trong Card**: **`354px`** ($x = 38$ đến $x = 392$).

### Bảng Giới Hạn Số Ký Tự Tối Đa Trên 1 Dòng (Single-line Character Limits)

| Cỡ Chữ (Font Size) | Vai Trò (Typography Role) | Giới Hạn Ký Tự / Dòng | Khoảng Cách Dòng Tối Thiểu ($\Delta y$) |
| :---: | :--- | :---: | :---: |
| **17 – 19px** | Header, Tiêu đề chính màn hình | **Tối đa 28 ký tự** | $\Delta y \ge 26\text{px}$ |
| **14 – 16px** | Tên dịch vụ, Tiêu đề thẻ Card, Subheading | **Tối đa 36 ký tự** | $\Delta y \ge 22\text{px}$ |
| **12 – 13px** | Thân bài, Ghi chú y tế, Dặn dò KTV | **Tối đa 46 ký tự** | $\Delta y \ge 19\text{px}$ |
| **10 – 11px** | Nhãn nhỏ, Caption thời gian, Badge tag | **Tối đa 54 ký tự** | $\Delta y \ge 16\text{px}$ |

> **⚠️ BẮT BUỘC:** Khi nội dung dài hơn giới hạn trên, Agent phải **chủ động tách thành 2 dòng riêng biệt** ($\Delta y \ge 19\text{px}$) hoặc rút gọn câu từ súc tích.

---

## 3. Phong Cách Thiết Kế Tối Giản & Bảng Màu Tinh Tế (Subtle & Elegant Palette)

Không dùng màu sắc sặc sỡ hay quá gắt. Toàn bộ giao diện sử dụng bảng màu trầm, trang nhã, đồng bộ:
- **Nền tổng thể (Background)**: `#F8FAFC` (Slate 50 - Sáng dịu mát).
- **Thẻ nội dung (Cards)**: `#FFFFFF` (Trắng tinh), viền phân cách mỏng `#E2E8F0` (Slate 200).
- **Màu thương hiệu chủ đạo (Primary Teal)**: `#0D766E` (Deep Teal), nền đệm `#F0FDFA`, viền mờ `#CCFBF1`.
- **Màu chữ chính (Main Text)**: `#0F172A` (Slate 900 - Đậm, sắc nét).
- **Màu chữ phụ (Subtext / Metadata)**: `#64748B` (Slate 500) hoặc `#94A3B8` (Slate 400).
- **Màu cảnh báo dị ứng y tế (Subtle Alert)**: Nền `#FFF1F2`, viền `#FECDD3`, chữ `#BE123C` (Rose theo Design Tokens toàn dự án).
- **Màu hoàn tất / Thành công (Success)**: Nền `#F0FDF4`, viền `#BBF7D0`, chữ `#166534`.

---

## 4. Quy Chuẩn Biểu Tượng & CẤM EMOJI MÀU MÈ

- **Tuyệt đối KHÔNG dùng icon emoji màu mè** (`🐱`, `🐶`, `✂️`, `🧼`, `🌟`, `🚨`, `💡`, `🐾`, `🏠`, `📅`, `⏱️`, `🔔`, `❤️`...).
- **Sử dụng 100% biểu tượng vector đơn sắc hoặc ký tự hình học phẳng**:
  - Avatar thú cưng: Vòng tròn viền đơn sắc kèm chữ viết tắt tên in hoa (ví dụ: `BƠ`, `ML`, `MC`).
  - Nút Back / Tác vụ: Ký tự phẳng `‹`, `›`, `✓`, `✕`, `•`, `+`, `-`.
  - Thẻ cảnh báo: Nhãn chữ in hoa trong khung viền (Text Badges) như `[DỊ ỨNG DA]`, `[PHÒNG CÁCH LY]`, `[KHUYÊN DÙNG]`, `[Y TẾ]`.

---

## 5. Quy Chuẩn Chống Va Chạm Ngang (Horizontal Collision Prevention)

Khi bố trí 2 khối text nằm trên **cùng một dòng (cùng tọa độ $y$)**:
- **Vùng bên trái ($x = 38\text{px}$)**: Chiều dài tối đa **$220\text{px}$** (tối đa 26 ký tự).
- **Vùng bên phải ($x = 392\text{px}$, `text-anchor="end"`)**: Chiều dài tối đa **$130\text{px}$** (tối đa 16 ký tự).
- **Khoảng cách an toàn (Gap)**: Giữ khoảng cách tối thiểu **$\ge 24\text{px}$** giữa 2 đoạn text.

---

## 6. Các Bước Kiểm Thử Bắt Buộc Trước Khi Xuất Bản

1. **Kiểm thử Kích thước khung nhìn**: Đảm bảo `viewBox="0 0 430 932"` và có đủ Dynamic Island + Home Indicator.
2. **Kiểm thử Tràn lề phải**: Với mọi text căn trái ($x = 38$), ước tính $x + (\text{len} \times 7.5\text{px}) \le 392\text{px}$.
3. **Kiểm thử Va chạm cùng hàng**: Rà soát các cặp text cùng trục $y$, đảm bảo tổng chiều dài $< 330\text{px}$.
4. **Kiểm thử Sạch Emoji**: Quét toàn bộ file SVG đảm bảo 100% không còn emoji màu mè.
5. **Kiểm thử Cú pháp XML & Escape Entities**: Đảm bảo 100% tệp SVG parse thành công qua `tools/validate-svg.py`, không chứa `&` thô hay biểu thức số học kẹt trong thuộc tính.

---

## 7. Quy Chuẩn Escape Ký Tự XML & Thuộc Tính Tọa Độ (Strict XML & Numbers)

SVG là định dạng XML nghiêm ngặt, bắt buộc tuân thủ 2 quy chuẩn để tránh lỗi không preview được:
- **Escape ký tự đặc biệt trong thẻ `<text>`**:
  - Ký tự `&` (và) $\rightarrow$ **Bắt buộc viết là `&amp;`** (hoặc dùng từ "và").
  - Ký tự `<` $\rightarrow$ **Bắt buộc viết là `&lt;`** (hoặc dùng ký tự phẳng `‹`).
  - Ký tự `>` $\rightarrow$ **Bắt buộc viết là `&gt;`** (hoặc dùng ký tự phẳng `›`).
- **Thuộc tính tọa độ và kích thước thuần số**:
  - Tuyệt đối không để biểu thức số học dạng chuỗi trong thuộc tính XML (như `y="452+104"`, `x="38+20"`).
  - Toàn bộ giá trị thuộc tính (`x`, `y`, `cx`, `cy`, `width`, `height`, `rx`, `ry`, `stroke-width`) phải là số thực hoặc số nguyên cụ thể đã tính toán trước (`y="556"`).

