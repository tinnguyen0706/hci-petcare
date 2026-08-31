# Quy tắc Trình bày & Phong cách Thiết kế (Style & Design Rules)

Quy tắc này áp dụng bắt buộc cho toàn bộ tài liệu, bản vẽ giao diện, Wireframe, Prototype và ứng dụng phần mềm trong dự án.

---

## 1. Ngôn ngữ & Thuật ngữ
- Dùng tiếng Việt học thuật, rõ ràng, tự chứa; hạn chế khẩu ngữ và lặp ý.
- Giữ nguyên các thuật ngữ chuyên ngành (HCI, UX/UI, phần mềm, Git) bằng tiếng Anh nguyên bản (ví dụ: Persona, Value Proposition, User Discovery, Scenario, Storyboard, Wireframe, Prototype, Worktree, Handoff, Acceptance Criteria, Heuristic, Affordance, PR...). Không dịch gượng ép sang tiếng Việt gây tối nghĩa hoặc sai lệch khái niệm chuẩn.

---

## 2. Phong cách Thiết kế Tối giản & Chuyên nghiệp (Clean Modernism)
- **Tối giản, dễ quét**: Trực quan hóa tiến độ bằng stepper và cấu trúc thẻ rõ ràng.
- **Khả năng tiếp cận (Accessibility)**: Trạng thái không chỉ truyền đạt bằng màu sắc mà luôn kết hợp chữ và nhãn rõ ràng.
- **Nhãn và thông báo**: Ngắn gọn, súc tích, mang tính chỉ dẫn cao.

---

## 3. Quy chuẩn Biểu tượng (Iconography) — CẤM EMOJI MÀU MÈ
- **Tuyệt đối KHÔNG dùng các icon emoji màu mè** (như `🐱`, `🐶`, `✂️`, `🧼`, `🌟`, `🚨`, `💡`, `🐾`, `🏠`, `📅`, `⏱️`, `🔔`, `❤️`...).
- **Chỉ sử dụng Biểu tượng Vector Đơn sắc (Monochrome Vector Icons)** hoặc các ký tự hình học tối giản (`‹`, `›`, `✓`, `✕`, `•`, `+`, `-`):
  - Avatar thú cưng: Vòng tròn đơn sắc kèm chữ viết tắt tên thú cưng hoặc hình khối vector 1 màu.
  - Tag/Nhãn cảnh báo: Dùng thẻ chữ trực tiếp (Text Badges) như `[DỊ ỨNG DA]`, `[PHÒNG RIÊNG]`, `[KHUYÊN DÙNG]`, `[Y TẾ]`.
  - Icon điều hướng & Tab bar: Dùng nét vẽ đơn sắc (`stroke-width: 1.5 - 2px`) với màu sắc Design Tokens (`#0D766E`, `#64748B`, `#0F172A`).

---

## 4. Bố cục & Kiểu chữ SVG
- Tuân thủ nghiêm ngặt [rules/layout-and-typography-rules.md](layout-and-typography-rules.md) để chống đè chữ (overlapping) và chống tràn chữ (overflow) trên màn hình iPhone 14 Pro Max $430 \times 932\text{px}$.
