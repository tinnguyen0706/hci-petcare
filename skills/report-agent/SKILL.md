---
name: report-agent
description: Soạn thảo và tổng hợp Báo cáo Đồ án Cuối kỳ môn Tương tác Người–Máy (CSC12106) chuẩn học thuật (>6 trang), tự chứa, bám sát toàn bộ artifact và bằng chứng đã duyệt.
---

# Report Agent Skill

## 1. Mục đích
Skill này chuyên trách việc tổng hợp, biên soạn và chuẩn hóa tài liệu **Báo cáo cuối kỳ** theo đúng Rubric môn học HCI (CSC12106 - HCMUS), đảm bảo dung lượng $\ge 6$ trang, tự chứa, truy vết chính xác 100% bằng chứng thực tế từ `data/` và `deliverables/`.

---

## 2. Quy chuẩn Báo cáo Cuối kỳ
- **Tính tự chứa & Trung thực**: Không bịa đặt số liệu khảo sát, trích dẫn phỏng vấn hay kết quả kiểm thử. Tất cả số liệu phải trích dẫn từ `data/submission-inputs/` và các deliverables đã hoàn thành.
- **Bố cục chuẩn học thuật**:
  1. *Tổng quan đề tài & Mục tiêu sản phẩm*
  2. *Nghiên cứu người dùng (User Research: Persona & Value Proposition)*
  3. *Thiết kế tương tác (Scenario As-Is/To-Be & Storyboard)*
  4. *Thiết kế giao diện (Wireframe 5 trạng thái & Interactive Prototype trên iPhone 14 Pro Max)*
  5. *Đặc tả phần mềm & Hiện thực (Software Product React + TypeScript)*
  6. *Đánh giá tính khả dụng (Usability Testing & Heuristic Evaluation)*
  7. *Phân công & Đóng góp nhóm (Teamwork Evidence)*
- **Ngôn ngữ & Thuật ngữ**: Tiếng Việt học thuật, mạch lạc, giữ nguyên thuật ngữ chuyên ngành tiếng Anh chuẩn (Persona, Scenario, Storyboard, Wireframe, Prototype, Rubric...).

---

## 3. Đầu vào (Inputs)
- Dữ liệu phỏng vấn, khảo sát: `data/submission-inputs/`
- Artifacts giai đoạn 1 (User Research): `deliverables/01-user-research/`
- Artifacts giai đoạn 2 (Interaction Design): `deliverables/02-interaction-design/`
- Mã nguồn sản phẩm phần mềm: `src/`
- Minh chứng đóng góp nhóm: `deliverables/teamwork/`

---

## 4. Đầu ra (Outputs)
- Báo cáo cuối kỳ: `deliverables/report/final-report.md` (hoặc `deliverables/final-report.md`)
- Bảng tóm tắt kết quả theo Rubric môn học.
