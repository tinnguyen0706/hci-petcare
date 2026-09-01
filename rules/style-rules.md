# Quy Tắc Trình Bày, Phong Cách & Bảng Màu Thiết Kế (Style & Design Rules)

Quy tắc này áp dụng **bắt buộc cho toàn bộ tài liệu, bản vẽ giao diện, Storyboard, Wireframe, Prototype và ứng dụng phần mềm** trong dự án HCI (CSC12106).

---

## 1. Ngôn Ngữ & Thuật Ngữ

- **Ngôn ngữ chính**: Sử dụng tiếng Việt học thuật, rõ ràng, mạch lạc, tự chứa; cấu trúc câu ngắn gọn, chuẩn mực.
- **Giữ nguyên thuật ngữ chuyên ngành tiếng Anh chuẩn**: Persona, Value Proposition, User Discovery, Scenario Current, Scenario Future, Storyboard, Wireframe, Prototype, Rubric, Props, Component, Micro-interaction, Heuristic, Affordance, Handoff, Acceptance Criteria, Pull Request... Tuyệt đối không dịch gượng ép sang tiếng Việt làm sai lệch khái niệm UX/UI chuẩn.

---

## 2. Bảng Màu Thương Hiệu & Design Tokens (Color Palette)

Toàn bộ giao diện sử dụng bảng màu trang nhã, hiện đại, tương phản cao đạt chuẩn WCAG AAA:
- **Màu thương hiệu / Tương tác chính (Primary Teal)**:
  - Màu chính: `#0D766E` (Deep Teal) / `#0F4C45`.
  - Nền phụ / Nền icon: `#F0FDFA` (Teal 50).
  - Viền mờ / Phân cách: `#CCFBF1` (Teal 100).
- **Màu điểm nhấn & Cảnh báo (Accent & Alert)**:
  - Cam san hô (Coral): `#E06236`.
  - Hổ phách (Amber): `#D97706`.
  - Cảnh báo dị ứng y tế (Rose Alert): Nền `#FFF1F2`, viền `#FECDD3`, chữ `#9F1239` (Rose 800 — tone trầm, không chói mắt).
  - Trạng thái thành công (Success Green): Nền `#F0FDF4`, viền `#BBF7D0`, chữ `#166534`.
- **Màu trung tính (Neutrals - Nền & Văn bản)**:
  - Nền trang tổng thể: `#F8FAFC` (Slate 50 — sáng dịu mắt).
  - Bề mặt thẻ Card: `#FFFFFF` (Trắng tinh khiết).
  - Viền phân cách mỏng: `#E2E8F0` (Slate 200).
  - Màu chữ chính (Main Text): `#0F172A` (Slate 900 — đậm nét, tương phản sắc sảo).
  - Màu chữ phụ / Metadata: `#64748B` (Slate 500) hoặc `#94A3B8` (Slate 400).

---

## 3. Phong Cách Thiết Kế Tối Giản & Hiện Đại (Clean Modernism)

- **Cấu trúc thẻ & Khoảng cách**: Sử dụng Card bo góc mềm mại (`border-radius: 6px – 16px`), đổ bóng mờ nhẹ tạo chiều sâu (`shadow-sm`, `shadow-md`), đệm thoáng đãng.
- **Nút hành động chính (Primary CTA Buttons)**: Nhãn nút phải dùng **động từ hành động súc tích, dứt khoát** (Action Verbs: `Tiếp tục`, `Đặt lịch ngay`, `Xác nhận đặt lịch`, `Theo dõi tiến độ`, `Bật thông báo`, `Đến tiệm đón bé`...). Tuyệt đối không viết nhãn nút dài dòng, mang tính giải thích/thông báo như một thẻ Card.
- **Tiến độ trực quan**: Sử dụng Timeline Stepper 4 mốc rõ ràng (*Đã nhận ➔ Đang chăm sóc ➔ Hoàn tất ➔ Chờ đón*).
- **Khả năng tiếp cận (Accessibility)**: Trạng thái không chỉ truyền đạt bằng màu sắc mà luôn kết hợp chữ và nhãn rõ ràng (Multimodal Perception).

---

## 4. Quy Chuẩn Biểu Tượng (Iconography) — CẤM 100% EMOJI MÀU MÈ

- **Tuyệt đối KHÔNG sử dụng các icon emoji màu mè** (như `🐱`, `🐶`, `✂️`, `🧼`, `🌟`, `🚨`, `💡`, `🐾`, `🏠`, `📅`, `⏱️`, `🔔`, `❤️`...).
- **Sử dụng 100% Biểu tượng Vector Đơn sắc (Monochrome Vector Icons)** hoặc các ký tự hình học tối giản (`‹`, `›`, `✓`, `✕`, `!`, `•`, `+`, `-`, `≡`, `★`):
  - Avatar thú cưng: Vòng tròn viền đơn sắc kèm chữ viết tắt in hoa (như `BƠ`, `ML`, `MC`).
  - Thẻ Tag / Nhãn cảnh báo: Dùng thẻ chữ trực tiếp (Text Badges) như `[DỊ ỨNG DA]`, `[PHÒNG CÁCH LY]`, `[KHUYÊN DÙNG]`, `[Y TẾ]`.
  - Icon điều hướng & Tab bar: Dùng nét vẽ đơn sắc nét mỏng (`stroke-width: 1.5 – 2px`) với màu sắc Design Tokens (`#0D766E`, `#64748B`, `#0F172A`).

---

## 5. Bố Cục & Kiểu Chữ SVG

- Tuân thủ nghiêm ngặt [`rules/layout-and-typography-rules.md`](layout-and-typography-rules.md) về giới hạn ký tự/dòng, khoảng cách dòng an toàn $\Delta y \ge 18-26\text{px}$, chống đè chữ (overlapping) và chống tràn chữ (overflow) trên khung iPhone 14 Pro Max ($430 \times 932\text{px}$).
