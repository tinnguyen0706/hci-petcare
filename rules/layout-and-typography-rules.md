# Quy Tắc Bố Cục & Kiểu Chữ SVG (Layout & Typography Rules)

Quy tắc này áp dụng **bắt buộc cho tất cả các Agent và Subagent khi thiết kế, tạo lập màn hình vector SVG (Wireframe, Prototype, Mockup)** trong toàn bộ dự án HCI (CSC12106).

---

## 1. Nguyên nhân & Tôn chỉ cốt lõi

Trong SVG, thẻ `<text>` **không tự động xuống dòng (No auto-wrap)** như thẻ `<div>` trong HTML. Nếu chuỗi quá dài hoặc khoảng cách giữa các tọa độ không được tính toán, chữ sẽ bị đè lên nhau (Text overlapping) hoặc tràn ra ngoài màn hình điện thoại (Text overflow).

Do đó, mọi màn hình vector SVG phải tuân thủ nghiêm ngặt các giới hạn kích thước và khoảng cách dưới đây.

---

## 2. Quy chuẩn Kích Thước An Toàn & Giới Hạn Ký Tự

Khung nhìn Mobile chuẩn là **$375 \times 812\text{px}$**.
- Chiều rộng màn hình: `375px`
- Lề an toàn 2 bên (Screen Margin): `20px` mỗi bên $\rightarrow$ Chiều rộng thẻ Card tối đa: **`335px`** ($x = 20$ đến $x = 355$).
- Lề trong của Card (Padding): `16px` mỗi bên $\rightarrow$ Chiều rộng tối đa của đoạn văn bên trong Card: **`303px`** ($x = 36$ đến $x = 339$).

### Bảng Giới Hạn Số Ký Tự Tối Đa Trên 1 Dòng (Single-line Character Limits)

| Cỡ Chữ (Font Size) | Vai Trò (Typography Role) | Giới Hạn Ký Tự / Dòng | Khoảng Cách Dòng Tối Thiểu ($\Delta y$) |
| :---: | :--- | :---: | :---: |
| **16 – 18px** | Header, Tiêu đề chính, Tên thú cưng | **Tối đa 24 ký tự** | $\Delta y \ge 24\text{px}$ |
| **13 – 15px** | Tên dịch vụ, Tiêu đề thẻ Card, Subheading | **Tối đa 30 ký tự** | $\Delta y \ge 20\text{px}$ |
| **11 – 12px** | Thân bài, Ghi chú dị ứng, Hướng dẫn KTV | **Tối đa 38 ký tự** | $\Delta y \ge 18\text{px}$ |
| **9 – 10px** | Nhãn nhỏ, Caption, Thời gian, Badge tag | **Tối đa 46 ký tự** | $\Delta y \ge 15\text{px}$ |

> **⚠️ BẮT BUỘC:** Khi nội dung dài hơn giới hạn ký tự trên, Agent phải **chủ động tách thành 2 dòng riêng biệt** (2 thẻ `<text>` với tọa độ $y$ cách nhau $\ge 18\text{px}$) hoặc rút gọn câu từ súc tích.

---

## 3. Quy Chuẩn Chống Va Chạm Ngang (Horizontal Collision Prevention)

Khi bố trí 2 khối text nằm trên **cùng một dòng (cùng tọa độ $y$)** (Ví dụ: Tên dịch vụ bên trái và Giá tiền bên phải):

```xml
<!-- ĐÚNG: Chia rõ phạm vi x và giới hạn ký tự -->
<text x="36" y="240" font-size="13" font-weight="700">Tắm &amp; Da Nhạy Cảm</text>
<text x="339" y="240" font-size="15" font-weight="800" text-anchor="end">220.000đ</text>
```

- **Vùng bên trái ($x = 36\text{px}$)**: Chiều dài tối đa **$170\text{px}$** (tối đa 22 ký tự).
- **Vùng bên phải ($x = 339\text{px}$, `text-anchor="end"`)**: Chiều dài tối đa **$100\text{px}$** (tối đa 12 ký tự).
- **Khoảng cách an toàn (Gap)**: Bắt buộc để trống tối thiểu **$20\text{px}$** giữa điểm kết thúc của text trái và điểm bắt đầu của text phải.

---

## 4. Quy Chuẩn Đóng Khung Thẻ Card (Card Boundary Rules)

- Không để text đè lên đường viền (Border) hoặc tràn ra ngoài đáy thẻ Card:
  $$\text{Chiều cao Card } (h) \ge (\text{Tọa độ } y \text{ của dòng text cuối}) - (\text{Tọa độ } y \text{ đỉnh Card}) + 18\text{px}$$
- Các khối Badge, Tag cảnh báo (`<rect>` nhỏ chứa text) phải có chiều rộng `width` lớn hơn chiều dài text bên trong tối thiểu **`16px`** (Padding trái/phải $8\text{px}$).

---

## 5. Quy Chuẩn Biểu Tượng & Chống Emoji Màu Mè (No Colorful Emojis)

- **Cấm hoàn toàn Emoji màu** (`🐱`, `🐶`, `✂️`, `🧼`, `🌟`, `🚨`, `💡`, `🐾`, `🏠`, `📅`, `⏱️`, `🔔`...) trong mã SVG UI.
- **Thay thế bằng:**
  - Chữ cái viết tắt hoặc tên trong khung tròn (ví dụ: `BƠ`, `ML`, `MC`).
  - Ký tự hình học phẳng (`‹`, `›`, `✓`, `✕`, `•`, `+`, `-`).
  - Thẻ chữ viết hoa nằm trong hộp viền màu tương ứng (ví dụ: `[Y TẾ]`, `[CẢNH BÁO]`, `[KHUYÊN DÙNG]`, `[ĐẶC BIỆT]`).

---

## 6. Các Bước Kiểm Thử Bắt Buộc Trước Khi Xuất Bản (Testing Steps)

Mỗi khi Agent sinh hoặc sửa file SVG, bắt buộc thực hiện 4 bước kiểm tra sau:

1. **Kiểm thử Tràn lề phải (Right Overflow Test)**:
   - Với mọi thẻ `<text>` căn trái ($x = 36$): Ước tính $x + (\text{số ký tự} \times 7.2\text{px}) \le 339\text{px}$.
2. **Kiểm thử Va chạm cùng hàng (Collision Test)**:
   - Rà soát toàn bộ các cặp `<text>` có cùng giá trị `y`: Đảm bảo tổng chiều dài 2 chuỗi không vượt quá $280\text{px}$.
3. **Kiểm thử Đè chữ dọc (Vertical Overlap Test)**:
   - Đảm bảo $y_{i+1} - y_i \ge 18\text{px}$ đối với các dòng chữ liên tiếp.
4. **Kiểm tra sạch Emoji & Bố cục phẳng**:
   - Quét toàn bộ file SVG đảm bảo không còn emoji màu mè, layout sắc nét và chuyên nghiệp.
