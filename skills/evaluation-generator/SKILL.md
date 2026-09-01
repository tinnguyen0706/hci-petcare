---
name: evaluation-generator
description: Hướng dẫn chuyên sâu về phương pháp Usability Test, chuẩn bị công cụ kiểm thử, phân tích dữ liệu thực nghiệm khách quan và quy trình đề xuất cải tiến UI.
---

# Kỹ Năng Đánh Giá Tính Khả Dụng (Usability Evaluation Generator)

## 1. Kiến Thức Nền Tảng (Domain Knowledge)

### 1.1. Bản Chất Của Usability Test Trong HCI
Usability Test là phương pháp thực nghiệm trung tâm trong Tương tác Người–Máy, trả lời câu hỏi cốt lõi: ***“Người dùng sử dụng sản phẩm như thế nào?”***.
- Phương pháp này quan sát hành vi thực tế của người dùng mục tiêu khi thao tác trên giao diện mẫu (Wireframe/Prototype) để hoàn thành các tác vụ định trước, thay vì chỉ hỏi ý kiến chủ quan.
- **Triết lý cốt lõi**: *"Fail early, fail cheap"* — Phát hiện và khắc phục các điểm nghẽn tương tác ngay trên bản vẽ trước khi tốn kém chi phí lập trình phần mềm.

### 1.2. Năm (5) Mục Tiêu Usability Cốt Lõi (Core Usability Goals)
1. **Effectiveness (Tính hiệu quả)**: Đánh giá khả năng hoàn thành nhiệm vụ của người dùng. Hệ thống có hỗ trợ người dùng đạt được mục tiêu mong muốn mà không bị thất bại hay bỏ cuộc không?
2. **Efficiency (Tính hiệu suất)**: Đánh giá tốc độ và mức độ tốn sức của người dùng. Một quy trình tốt giúp người dùng hoàn thành công việc nhanh chóng với số bước tối thiểu.
3. **Errors (Mức độ lỗi)**: Đánh giá tần suất và mức độ nghiêm trọng của các lỗi thao tác mà người dùng mắc phải (ví dụ: bấm nhầm nút, hiểu sai trạng thái, chọn nhầm dữ liệu).
4. **Learnability (Khả năng học hỏi)**: Đánh giá mức độ dễ dàng để một người dùng mới làm quen và sử dụng thành thạo hệ thống ngay từ lần đầu tiên tiếp xúc.
5. **Satisfaction (Mức độ hài lòng)**: Đánh giá cảm nhận chủ quan, mức độ thoải mái, tin cậy và hài lòng của người dùng đối với trải nghiệm tổng thể.

### 1.3. Phân Biệt Hai Nhóm Chỉ Số (Metrics)
- **Chỉ số hiệu năng (Performance Metrics - Khách quan)**:
  - *Task Completion Rate (%):* $\frac{\text{Số người hoàn thành}}{\text{Tổng số người tham gia}} \times 100\%$.
  - *Task Completion Time (giây):* Thời gian trung bình ($\bar{x}$) và độ lệch chuẩn ($SD$) để hoàn thành tác vụ.
  - *Error Rate / Misclicks:* Số lượt thao tác sai hướng hoặc bấm nhầm.
- **Chỉ số cảm nhận (Self-reported Metrics - Chủ quan)**:
  - Điểm đánh giá mức độ hài lòng trên thang đo Likert 5 mức độ thu thập ngay sau khi hoàn thành các tác vụ.

### 1.4. Nguyên Tắc Tính Trung Thực Dữ Liệu
- **Tuyệt đối KHÔNG tự ý bịa dữ liệu**: Mọi chỉ số thời gian, tỷ lệ hoàn thành, số lỗi và điểm Likert bắt buộc phải được tính toán từ các phiên thử nghiệm thực tế lưu trữ trong thư mục `data/evaluation/` (cụ thể là `task_metrics.csv` và `likert_survey.csv`).

---

## 2. Quy Trình 2 Pha Chuẩn Hóa (Two-Phase Execution)

Quy trình đánh giá được chia làm 2 pha tách biệt nhằm bảo đảm tính trung thực khoa học:

```
[PHA 1: CHUẨN BỊ & THIẾT LẬP]
1. Xác định mục tiêu ──► 2. Định nghĩa tác vụ ──► 3. Chọn nhóm tham gia ──► 4. Xuất Test Plan & Mẫu CSV
                                                                                   │
                                                         (Tiến hành test thực tế / Điền data/evaluation/*.csv)
                                                                                   │
                                                                                   ▼
[PHA 2: PHÂN TÍCH & BÁO CÁO]                                     5. Đọc data/evaluation/*.csv
7. Xuất Báo cáo & Cải tiến UI ◄── 6. Phân tích lỗi (Severity 1-4) ◄── (Tính toán Metrics)
```

### Pha 1: Chuẩn Bị & Thiết Lập Công Cụ Kiểm Thử (Test Preparation)
1. **Bước 1 — Xác định mục tiêu**: Thiết lập câu hỏi nghiên cứu dựa trên 5 mục tiêu Usability cho các phân hệ tương tác chính của sản phẩm.
2. **Bước 2 — Định nghĩa tác vụ (Pre-defined Tasks)**: Xây dựng các kịch bản nhiệm vụ cụ thể, rõ ràng, không thiên kiến, ánh xạ trực tiếp từ các luồng Scenario Future và màn hình Wireframe tương ứng.
3. **Bước 3 — Chọn người tham gia**: Tuyển chọn nhóm người tham gia được phân bổ và ánh xạ động trực tiếp từ tập Persona có trong `deliverables/01-user-research/persona/personas.json`.
4. **Bước 4 — Xuất Kế hoạch & Khung nhập dữ liệu CSV**: Xuất tệp `deliverables/02-interaction-design/evaluation/usability-test-plan.md` và khởi tạo các tệp CSV mẫu tại `data/evaluation/task_metrics.csv`, `data/evaluation/likert_survey.csv`. Sau đó dừng lại (HALT) chờ dữ liệu thực tế từ buổi test.

### Pha 2: Phân Tích Thực Nghiệm & Báo Cáo (Analysis & Reporting)
5. **Bước 5 — Đọc & Tính toán Chỉ số từ `data/evaluation/`**: Đọc dữ liệu từ `data/evaluation/task_metrics.csv` và `data/evaluation/likert_survey.csv`, tính toán tỷ lệ hoàn thành trung bình, thời gian thực hiện trung bình ($\bar{T}$), số lỗi trung bình và điểm Likert trung bình.
6. **Bước 6 — Phân tích lỗi Usability**: Tổng hợp các phát hiện khó khăn quan sát được của người dùng từ các ghi chú, phân cấp mức độ nghiêm trọng (Cosmetic / Minor / Major / Catastrophe).
7. **Bước 7 — Xuất Báo cáo & Đề xuất cải tiến**: Xuất báo cáo hoàn chỉnh `deliverables/02-interaction-design/evaluation/usability-evaluation-report.md` gồm 8 mục khớp với cấu trúc Báo cáo cuối kỳ và ma trận cải tiến thiết kế cho `software-product-agent`.

---

## 3. Cách Suy Luận & Phân Tích (Reasoning Strategy)

### 3.1. Đối Chiếu Hành Vi Khách Quan và Cảm Nhận Chủ Quan
- Khi phân tích dữ liệu thực tế, luôn đặt kết quả *Performance metrics* cạnh *Self-reported Likert metrics*:
  - Nếu Task có thời gian hoàn thành nhanh và điểm Likert cao $\rightarrow$ Luồng tương tác đạt chuẩn, sẵn sàng lập trình.
  - Nếu Task có tỷ lệ hoàn thành thấp hoặc thời gian kéo dài $\rightarrow$ Tìm nguyên nhân tại bước tương tác cụ thể trong Wireframe (ví dụ: nút CTA chưa rõ, nhãn chữ khó hiểu).

### 3.2. Chuyển Đổi Phát Hiện (Findings) Thành Đề Xuất Cải Tiến (Actionable Recommendations)
Mỗi vấn đề khả dụng phát hiện được phải được cấu trúc theo định dạng 4 thành phần:
1. **Vấn đề quan sát được**: Người dùng ngập ngừng ở đâu? Thao tác nhầm ở màn hình nào?
2. **Mức độ nghiêm trọng**: Minor hay Major?
3. **Nguyên nhân UX**: Do vị trí nút bấm, độ tương phản màu sắc hay cấu trúc thông tin?
4. **Giải pháp khắc phục cụ thể**: Đổi màu nút, tăng kích thước vùng chạm $\ge 44\text{px}$, hoặc bố trí lại thông tin cảnh báo.

---

## 4. Xác Thực & Tiêu Chí Nghiệm Thu (Validation Checklist)

Trước khi bàn giao kết quả đánh giá, kiểm tra các tiêu chí sau:
- [ ] **Tính trung thực dữ liệu**: Toàn bộ số liệu trong báo cáo được trích xuất và tính toán trực tiếp từ các file CSV trong `data/evaluation/`, tuyệt đối không tự bịa số liệu.
- [ ] **Bao phủ 5 mục tiêu**: Báo cáo có phân tích đầy đủ Effectiveness, Efficiency, Errors, Learnability, Satisfaction.
- [ ] **Đủ các tác vụ cốt lõi**: Kiểm thử đúng các Pre-defined Tasks tương ứng với các luồng kịch bản tương lai (Scenario Future) của dự án.
- [ ] **Người tham gia phản ánh đúng Persona**: Có đủ dữ liệu người tham gia đại diện cho tất cả các Persona đã được định nghĩa trong `personas.json`.
- [ ] **Không chứa thành phần thừa**: Hoàn toàn không chứa các phép thống kê suy luận phức tạp ($t$-test, ANOVA) không thuộc phạm vi yêu cầu.
- [ ] **Tính hành động cao**: Mọi khuyến nghị cải tiến đều chỉ rõ mã màn hình Wireframe cần sửa đổi và cung cấp hướng dẫn rõ ràng cho `software-product-agent`.
