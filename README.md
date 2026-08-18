# Hệ thống Hỗ Trợ Đặt Lịch & Theo Dõi Chăm Sóc Thú Cưng

Đồ án môn **CSC12106 — Tương tác Người–Máy (HCI)**, Khoa Công nghệ Thông tin, Trường Đại học Khoa học Tự nhiên (HCMUS).

Hệ thống tập trung vào việc nâng cao trải nghiệm của **chủ nuôi thú cưng** khi đặt lịch hẹn dịch vụ, gửi các yêu cầu chăm sóc đặc biệt (tiền sử dị ứng, dặn dò riêng) và theo dõi tiến độ chăm sóc theo thời gian thực.

---

## 1. Phạm vi Sản phẩm & Nghiệp vụ Cốt lõi

Nội dung nghiệp vụ chi tiết được đặc tả trong [docs/proposal.md](docs/proposal.md), bao gồm 4 luồng tương tác chính:

1. **Đặt lịch có xác nhận tức thì**: Chọn dịch vụ, thú cưng và khung giờ còn trống; hệ thống tự động khóa giờ và xác nhận ngay lập tức, không để người dùng phải chờ đợi phản hồi thủ công.
2. **Hồ sơ thú cưng & Yêu cầu đặc biệt**: Lưu trữ tiền sử dị ứng sữa tắm, bệnh lý, thuốc và thói quen của thú cưng; tự động đính kèm vào lịch hẹn khi bàn giao tại cơ sở.
3. **Theo dõi tiến độ theo thời gian thực (Real-time Milestones)**: Cập nhật minh bạch 4 mốc tiến độ (*Đã nhận* ➔ *Đang chăm sóc* ➔ *Hoàn tất* ➔ *Chờ đón*), gửi thông báo chủ động giúp chủ nuôi an tâm mà không cần gọi hỏi gián đoạn.
4. **Lịch sử chăm sóc cá nhân hóa**: Tổng hợp dữ liệu dịch vụ, sản phẩm sử dụng và ghi chú của nhân viên sau mỗi lượt để chủ nuôi dễ dàng theo dõi sức khỏe thú cưng lâu dài.

---

## 2. Ma trận 11 Deliverables (Theo Rubric Môn học)

Chi tiết tiêu chí đánh giá được quy định tại [docs/final-rubric.csv](docs/final-rubric.csv):

| # | Deliverable | Nhóm thư mục | Trọng số | Mô tả & Trạng thái |
|---|---|---|---|---|
| 1 | **Persona** | `deliverables/01-user-research/` | 10% | Đầy đủ 9 phần, có ảnh đại diện, bám sát dữ liệu phỏng vấn thực tế. |
| 2 | **Value Proposition** | `deliverables/01-user-research/` | 10% | Khớp 1-1 giữa Customer Profile và Value Map. |
| 3 | **Scenario 1 (Hiện tại)** | `deliverables/01-user-research/` | 5% | Mô tả rõ bối cảnh và khó khăn của quy trình cũ. |
| 4 | **Scenario 2 (Mới)** | `deliverables/02-interaction-design/` | 5% | Thể hiện rõ các tương tác cải tiến của hệ thống mới. |
| 5 | **Storyboard** | `deliverables/02-interaction-design/` | 10% | Kịch bản câu chuyện hấp dẫn, hình minh họa trực quan có chú thích. |
| 6 | **Prototype (Figma)** | `deliverables/02-interaction-design/` | 10% | Bản mẫu tương tác cao trên Figma mô phỏng đầy đủ các luồng nghiệp vụ. |
| 7 | **Wireframe** | `deliverables/02-interaction-design/` | 10% | Thiết kế wireframe mobile-first chi tiết, màu sắc hài hòa, tiện dụng. |
| 8 | **Software Product** | `src/` & `deliverables/03-software-product/` | 10% | Ứng dụng Web React + TypeScript mobile-first hoàn chỉnh 100% luồng tương tác. |
| 9 | **Trình bày** | `deliverables/04-final-submission/presentation/` | 10% | Slide thuyết trình, phân công nói và tài liệu chuẩn bị Q&A phản biện. |
| 10 | **Báo cáo cuối kỳ** | `deliverables/04-final-submission/report/` | 10% | Báo cáo hoàn chỉnh đúng chuẩn format, đầy đủ nội dung (>6 trang). |
| 11 | **Team work** | `deliverables/04-final-submission/teamwork/` | 10% | Phân công công việc công bằng, rõ ràng, có bằng chứng đóng góp thực tế. |

---

## 3. Cấu trúc Thư mục Dự án

```
.
├── docs/                       # Tài liệu đề xuất (proposal.md, proposal.pdf) & rubric chấm điểm
├── data/                       # Dữ liệu thô thực tế (phỏng vấn, khảo sát, ảnh, ghi chép)
├── deliverables/               # Các sản phẩm đầu ra chính thức theo 4 giai đoạn
│   ├── 01-user-research/       # Persona, Value Proposition, Scenario 1
│   ├── 02-interaction-design/  # Scenario 2, Storyboard, Wireframe, Prototype
│   ├── 03-software-product/    # Tài liệu đóng gói phần mềm
│   └── 04-final-submission/    # Báo cáo cuối kỳ, Slide thuyết trình, Teamwork
├── src/                        # Mã nguồn ứng dụng web (React + TypeScript, Mobile-first)
├── templates/                  # Template HTML/Markdown cho Persona, Storyboard, Báo cáo
├── scripts/                    # Script tiện ích (render-html-to-png.py, v.v.)
├── references/                 # Tài liệu tham khảo, bài giảng môn học & hướng dẫn đồ án
├── agents/ & skills/           # Định nghĩa và hướng dẫn kỹ năng cho 11 rubric deliverables
└── AGENTS.md                   # Quy tắc và hướng dẫn cộng tác trực tiếp cùng AI
```

---

## 4. Công cụ & Hướng dẫn Sử dụng

### 4.1. Công cụ kết xuất hình ảnh (`scripts/render-html-to-png.py`)
Script hỗ trợ chuyển đổi file HTML (như template Persona, Storyboard) thành ảnh PNG độ phân giải cao sử dụng Chrome/Chromium headless:

```bash
# Render file Persona HTML thành PNG
python3 scripts/render-html-to-png.py deliverables/01-user-research/persona.html deliverables/01-user-research/persona.png --scale 2
```

### 4.2. Đồng bộ Agent Adapters
Khi cần đồng bộ cấu hình agent và skill cho các môi trường AI (Antigravity, Codex, OpenCode, Copilot):

```bash
python3 scripts/generate-agent-adapters.py
```

### 4.3. Ứng dụng Web (`src/`)
Ứng dụng web được phát triển bằng React + TypeScript theo chuẩn mobile-first. Chạy môi trường phát triển:

```bash
# Cài đặt dependencies và chạy dev server
npm install
npm run dev
```
