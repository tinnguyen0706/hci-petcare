# Hướng Dẫn & Quy Tắc Dự Án (HCI - CSC12106)

## 1. Tổng quan dự án

- **Project này là gì**: Đồ án môn **Tương tác Người–Máy (CSC12106)** — Khoa CNTT, Trường Đại học Khoa học Tự nhiên (HCMUS). Đề tài: **Hệ thống hỗ trợ đặt lịch, gửi yêu cầu và theo dõi quá trình chăm sóc thú cưng**.
- **Làm cho ai dùng (Đối tượng mục tiêu)**: **Chủ nuôi thú cưng (Pet Owners)** — những người bận rộn, trực tiếp đặt dịch vụ tắm/cắt tỉa/chăm sóc, gửi yêu cầu dặn dò đặc biệt và cần theo dõi tình trạng thú cưng từ xa.
- **Mục đích là gì**: Giải quyết các bất cập của quy trình thủ công cũ (chờ xác nhận lâu, thất lạc thông tin dị ứng/thuốc, thiếu cập nhật tiến độ trong lúc chăm sóc) bằng trải nghiệm liền mạch xoay quanh 4 tính năng cốt lõi:
  1. *Đặt lịch có xác nhận tức thì*: Chọn dịch vụ và khung giờ còn trống, nhận xác nhận ngay trên ứng dụng.
  2. *Hồ sơ thú cưng & Yêu cầu đặc biệt*: Lưu tiền sử dị ứng, tính cách, thuốc và tự động đính kèm khi đặt lịch.
  3. *Theo dõi tiến độ theo thời gian thực*: Cập nhật minh bạch 4 mốc (*Đã nhận* ➔ *Đang chăm sóc* ➔ *Hoàn tất* ➔ *Chờ đón*).
  4. *Lịch sử chăm sóc cá nhân hóa*: Lưu chi tiết dịch vụ, sản phẩm sử dụng và ghi chú sau mỗi lượt.

---

## 2. Tech Stack

- **Giao diện Web (Software Product)**: React + TypeScript, HTML5, CSS3 (Modern Vanilla CSS), thiết kế theo chuẩn **Mobile-first**.
- **Thiết kế UI/UX**: Figma (Wireframe, Interactive Prototype tương tác cao).
- **Công cụ tiện ích & Render hình ảnh**: Python 3.10+ (Script `tools/render-html-to-png.py` kết xuất HTML sang PNG độ nét cao cho Persona, Storyboard, Infographic).
- **Quản lý mã nguồn**: Git & GitHub.

---

## 3. Quy tắc thiết kế

- **Màu sắc chủ đạo (Color Palette)**:
  - *Primary (Thương hiệu/Hành động chính)*: Xanh mòng két dịu mát (`#0d766e` / `#0f4c45`), nền nhạt (`#f0fdfa`), viền mờ (`#ccfbf1`).
  - *Accent (Điểm nhấn & Cảnh báo)*: Cam san hô (`#e06236`), Hổ phách (`#d97706`), Đỏ hồng cảnh báo dị ứng (`#be123c`).
  - *Neutral (Nền & Văn bản)*: Nền trang sáng (`#f8fafc`), bề mặt thẻ trắng (`#ffffff`), viền phân cách (`#e2e8f0`), chữ chính (`#0f172a`), chữ phụ (`#64748b`).
- **Font chữ (Typography)**:
  - Ưu tiên font `Plus Jakarta Sans` hoặc system fonts hiện đại (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`).
  - Phân cấp kích thước rõ ràng, dòng đọc thoáng (`line-height: 1.4 – 1.6`), chữ hiển thị sắc nét.
- **Style tổng thể**:
  - Hiện đại, tối giản, thân thiện với chủ nuôi thú cưng (Pet-friendly & Human-centered).
  - Bo góc mềm mại (`border-radius: 6px – 18px`), đổ bóng nhẹ tạo chiều sâu (`shadow-sm`, `shadow-md`).
  - Tiến độ trực quan qua Timeline Stepper 4 mốc rõ ràng.

---

## 4. Quy tắc bắt buộc

### Những gì AI Assistant PHẢI làm

- **Giao tiếp & Tài liệu**: Trả lời và viết tài liệu bằng tiếng Việt rõ ràng, mạch lạc; giữ nguyên các thuật ngữ chuyên ngành tiếng Anh chuẩn (Persona, Scenario, Storyboard, Wireframe, Prototype, Rubric, Props, Component...).
- **Tính trung thực với dữ liệu**: Mọi Persona, Value Proposition, Scenario và bài báo cáo đều phải xuất phát từ dữ liệu phỏng vấn/khảo sát thực tế trong `data/` và `deliverables/`.
- **Bám sát yêu cầu**: Thực hiện đủ và đúng yêu cầu người dùng đưa
- **Tôn trọng workflow**: Tuân thủ các workflow mà làm việc, không làm ngoài phạm vi workflow.
- **Tuân thủ đúng phạm vi tài liệu (Scope Minimization)**: Khi thực thi nhiệm vụ theo vai trò của Agent nào, chỉ được đọc và tham chiếu đúng các file được liệt kê trong định nghĩa của Agent đó (`agents/<tên-agent>.md`) và dữ liệu đầu vào trong `data/`.
- **Từ ngữ dễ hiều**: Ưu tiên sử dụng những từ ngữ dễ hiểu cho người Việt.

### Những gì AI Assistant KHÔNG ĐƯỢC làm

- **Tuyệt đối không tự bịa số liệu**, trích dẫn phỏng vấn, kết quả nghiên cứu hay bằng chứng đóng góp nhóm.
- **Không tự mở rộng phạm vi sản phẩm**: Không tự ý biến ứng dụng thành hệ thống quản lý cơ sở/ERP phòng khám phức tạp ngoài phạm vi dành cho chủ nuôi.
- **Không tự đổi Tech Stack**: Không tự thêm backend phức tạp hay đổi framework khi chưa có yêu cầu từ người dùng.
- **Không tự ý đọc lan man ngoài phạm vi**: Tuyệt đối không tự ý mở, đọc hoặc quét qua các file rules khác, tài liệu môn học (`references/`), deliverables hay template của các giai đoạn/agent khác khi không được workflow hoặc người dùng yêu cầu.
- **Tuyệt đối không tự ý chạy lệnh Git / kiểm tra Git**: Không chạy `git status`, `git log`, `git diff` hoặc các lệnh git để tra cứu lịch sử repo/thư mục khi người dùng không yêu cầu.
- **Không tự ý tạo file ngoài đặc tả**: Chỉ tạo đúng các định dạng file được quy định rõ trong workflow của từng Agent — tuyệt đối không tự ý tạo thêm file `.md` hay các file phụ trợ ngoài danh mục).

---

## 5. Workflow

```mermaid
graph LR
    Step1["1. Tiếp nhận yêu cầu"] --> Step2["2. Nắm rõ yêu cầu"]
    Step2 --> Step3["3. Tìm kiếm & Kích hoạt Subagent"]
    Step3 --> Step4["4. Thực thi nhiệm vụ"]
    Step4 --> Step5["5. Báo cáo kết quả"]
```

1. **Tiếp nhận yêu cầu**: Lắng nghe yêu cầu cụ thể từ người dùng về tính năng, tài liệu, thiết kế hoặc kiểm thử.
2. **Nắm rõ yêu cầu của người dùng**:
   - Phân tích mục tiêu, phạm vi công việc, dữ liệu đầu vào cần dùng (trong `data/`, `docs/`, `deliverables/`) và tiêu chí hoàn thành.
   - Trao đổi ngay nếu có điểm chưa rõ ràng hoặc thiếu dữ kiện cần thiết.
3. **Tìm kiếm & Sử dụng Subagent thích hợp**:
   - Xác định và áp dụng kỹ năng/subagent phù hợp theo 11 chuyên môn:
     - `persona-agent`: Xây dựng Persona chuẩn 1 trang từ dữ liệu phỏng vấn.
     - `value-proposition-agent`: Lập Value Proposition Canvas tương ứng Persona.
     - `scenario-current-agent`: Mô tả kịch bản và khó khăn của quy trình cũ.
     - `scenario-new-agent`: Thiết kế kịch bản luồng tương tác mới.
     - `storyboard-agent`: Soạn kịch bản và tạo Storyboard trực quan.
     - `wireframe-agent`: Thiết kế Wireframe mobile-first chi tiết, tiện dụng.
     - `prototype-agent`: Quản lý và xây dựng Prototype tương tác (Figma).
     - `software-product-agent`: Lập trình ứng dụng Web React + TypeScript (`src/`).
     - `presentation-agent`: Soạn Slide thuyết trình và nội dung Q&A phản biện.
     - `report-agent`: Tổng hợp và biên soạn Báo cáo cuối kỳ (>6 trang).
     - `teamwork-agent`: Tổng hợp phân công và minh chứng đóng góp thực tế.
4. **Thực thi nhiệm vụ**:
   - Tiến hành viết code, cập nhật tài liệu, xuất hình ảnh hoặc chạy script kiểm thử theo đúng quy chuẩn thiết kế và kỹ thuật.
5. **Báo cáo kết quả**:
   - Trình bày kết quả rõ ràng, dẫn link file đã tạo/sửa, tóm tắt các điểm quan trọng và sẵn sàng nhận phản hồi để hoàn thiện tiếp.
