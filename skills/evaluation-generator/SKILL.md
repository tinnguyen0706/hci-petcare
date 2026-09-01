---
name: evaluation-generator
description: Hướng dẫn chuyên sâu về phương pháp Usability Test, cách lượng hóa tiêu chí thành công, thu thập chỉ số Performance & Likert, và quy trình phân tích cải tiến UI.
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

### 1.4. Lượng Hóa Tiêu Chí Thành Công (Operationalize)
Trong HCI, một mục tiêu chỉ có thể kiểm chứng khi được **lượng hóa thành các con số cụ thể** trước khi test:
- Không dùng câu hỏi cảm tính mơ hồ như *"Giao diện có đẹp không?"*.
- Đặt ngưỡng định lượng rõ ràng: *"Hoàn thành tác vụ trong vòng thời gian quy định không cần trợ giúp; tỷ lệ hoàn thành đạt ngưỡng kỳ vọng $\ge 85\%$"*.

---

## 2. Quy Trình 7 Bước Kiểm Thử Tính Khả Dụng

Kỹ năng thực hiện đánh giá tuân thủ quy trình 7 bước:

```
[1. Xác định mục tiêu] ──► [2. Định nghĩa tác vụ] ──► [3. Chọn người tham gia]
                                                              │
[7. Đề xuất cải tiến] ◄── [6. Phân tích kết quả] ◄── [5. Tiến hành kiểm thử] ◄── [4. Phương thức thu thập]
```

1. **Bước 1 — Xác định mục tiêu**: Thiết lập câu hỏi nghiên cứu dựa trên 5 mục tiêu Usability cho các phân hệ tương tác chính của sản phẩm.
2. **Bước 2 — Định nghĩa tác vụ (Pre-defined Tasks)**: Xây dựng các kịch bản nhiệm vụ cụ thể, rõ ràng, không thiên kiến, ánh xạ trực tiếp từ các luồng Scenario Future và màn hình Wireframe tương ứng.
3. **Bước 3 — Chọn người tham gia**: Tuyển chọn nhóm người tham gia (thường từ 5–12 người) được phân bổ và ánh xạ động trực tiếp từ tập Persona có trong `deliverables/01-user-research/persona/personas.json`.
4. **Bước 4 — Xác định phương thức thu thập**: Kết hợp ghi nhận thời gian thao tác, tỷ lệ thành công và bảng hỏi Likert sau test.
5. **Bước 5 — Tiến hành kiểm thử**: Người dùng thao tác trên bộ hình ảnh Wireframe/Prototype trực quan.
6. **Bước 6 — Phân tích kết quả**: Tính toán tỷ lệ hoàn thành trung bình, thời gian thực hiện trung bình, và điểm Likert trung bình.
7. **Bước 7 — Chỉ ra lỗi Usability & Đề xuất cải tiến**: Tổng hợp các phát hiện khó khăn của người dùng, phân cấp mức độ nghiêm trọng (Cosmetic / Minor / Major / Catastrophe) và đưa ra giải pháp thiết kế cụ thể cho giai đoạn code phần mềm.

---

## 3. Cách Suy Luận & Phân Tích (Reasoning Strategy)

### 3.1. Đối Chiếu Hành Vi Khách Quan và Cảm Nhận Chủ Quan
- Khi phân tích, luôn đặt kết quả *Performance metrics* cạnh *Self-reported Likert metrics*:
  - Nếu Task có thời gian hoàn thành nhanh và điểm Likert cao ($\ge 4.0/5.0$) $\rightarrow$ Luồng tương tác đạt chuẩn, sẵn sàng lập trình.
  - Nếu Task có tỷ lệ hoàn thành thấp ($< 80\%$) hoặc thời gian kéo dài $\rightarrow$ Tìm nguyên nhân tại bước tương tác cụ thể trong Wireframe (ví dụ: nút CTA chưa rõ, nhãn chữ khó hiểu).

### 3.2. Chuyển Đổi Phát Hiện (Findings) Thành Đề Xuất Cải Tiến (Actionable Recommendations)
Mỗi vấn đề khả dụng phát hiện được phải được cấu trúc theo định dạng 4 thành phần:
1. **Vấn đề quan sát được**: Người dùng ngập ngừng ở đâu? Thao tác nhầm ở màn hình nào?
2. **Mức độ nghiêm trọng**: Minor hay Major?
3. **Nguyên nhân UX**: Do vị trí nút bấm, độ tương phản màu sắc hay cấu trúc thông tin?
4. **Giải pháp khắc phục cụ thể**: Đổi màu nút, tăng kích thước vùng chạm $\ge 44\text{px}$, hoặc bố trí lại thông tin cảnh báo ở nửa dưới màn hình.

---

## 4. Xác Thực & Tiêu Chí Nghiệm Thu (Validation Checklist)

Trước khi bàn giao kết quả đánh giá, kiểm tra các tiêu chí sau:
- [ ] **Bao phủ 5 mục tiêu**: Báo cáo có phân tích đầy đủ Effectiveness, Efficiency, Errors, Learnability, Satisfaction.
- [ ] **Đủ các tác vụ cốt lõi**: Kiểm thử đúng các Pre-defined Tasks tương ứng với các luồng kịch bản tương lai (Scenario Future) của dự án.
- [ ] **Người tham gia phản ánh đúng Persona**: Có đủ dữ liệu người tham gia đại diện cho tất cả các Persona đã được định nghĩa trong `personas.json`.
- [ ] **Số liệu trung thực & Khớp ngưỡng**: Các giá trị tỷ lệ %, thời gian giây và điểm Likert được tính toán chính xác, không làm tròn sai lệch.
- [ ] **Không chứa thành phần thừa**: Hoàn toàn không chứa các phép thống kê suy luận phức tạp ($t$-test, ANOVA) không thuộc phạm vi yêu cầu.
- [ ] **Tính hành động cao**: Mọi khuyến nghị cải tiến đều chỉ rõ mã màn hình Wireframe cần sửa đổi và cung cấp hướng dẫn rõ ràng cho `software-product-agent`.
