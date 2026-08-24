# Ghi chú: Evaluation (Đánh giá tương tác)

- **Tệp gốc:** `references/course-materials/lectures/10_Evaluation.pdf`
- **Loại nguồn:** Bài giảng môn học (kiến thức tham khảo).
- **Phạm vi áp dụng:** Lựa chọn phương pháp đánh giá (Focus Group, Wizard-of-Oz, Usability Testing) và phân tích định lượng (Quantitative Analysis / thống kê suy luận) cho sản phẩm tương tác.

## Các phương pháp đánh giá chính

HCI sử dụng nhiều phương pháp đánh giá trải dài từ định tính đến định lượng: Focus Group, Wizard-of-Oz, Usability Test, Controlled Experiments / A/B Testing, Fieldwork, Survey và Eyetracking.

### 1. Focus Group (Nhóm tập trung)
- **Trong Discovery (Khám phá):** Kỹ thuật hỏi nhóm 6–8 người dùng mục tiêu để nắm bắt vấn đề, nhu cầu và kỳ vọng.
- **Trong Evaluation (Đánh giá):** Đánh giá phản ứng của người dùng đối với mẫu thiết kế; thu thập ý kiến về tính phù hợp (suitability), tính dễ hiểu (usability), luồng công việc (workflow) và các điểm cần làm nổi bật (improvement).

### 2. Wizard-of-Oz Test
- Người tham gia tương tác với một hệ thống trông như vận hành tự động, nhưng thực tế có người phía sau bí mật điều khiển/tráo giao diện thủ công.
- **Ba vai trò cốt lõi:** Facilitator (người hướng dẫn/điều phối), “Computer” (người đóng vai hệ thống phản hồi tác vụ) và Note-taker (người quan sát và ghi chép hành vi).
- **Mục đích:** Kiểm chứng ý tưởng và luồng thao tác tự nhiên của người dùng trước khi đầu tư xây dựng hệ thống phần mềm hoàn chỉnh; giúp chuyển đổi từ giao diện chỉ hiển thị dữ liệu thuần túy sang giao diện hỗ trợ luồng công việc tối ưu.

### 3. Usability Test (Kiểm thử tính khả dụng)
- Trả lời câu hỏi: *“Người dùng sử dụng sản phẩm như thế nào?”*
- **5 mục tiêu cốt lõi:**
  1. *Effectiveness (Tính hiệu quả):* Người dùng có hoàn thành được nhiệm vụ không?
  2. *Efficiency (Tính hiệu suất):* Hoàn thành nhanh và tốn ít công sức đến mức nào?
  3. *Errors (Mức độ lỗi):* Người dùng mắc phải những lỗi thao tác nào?
  4. *Learnability (Khả năng học hỏi):* Học cách sử dụng hệ thống dễ dàng ra sao?
  5. *Satisfaction (Mức độ hài lòng):* Người dùng có cảm thấy thoải mái và thỏa mãn không?
- **Lập kế hoạch kiểm thử:** Xác định câu hỏi nghiên cứu, phương pháp thu thập dữ liệu (quan sát, quay màn hình ghi nhận chuột/phím tắt, Think Aloud, phỏng vấn/bảng hỏi sau test), định nghĩa trước các nhiệm vụ cụ thể (Pre-defined tasks), và số lượng người thử nghiệm (thường từ 5 đến 12 người dùng mục tiêu).
- **Chỉ số đo lường (Metrics):**
  - *Performance metrics (Hành vi thực tế):* Tỷ lệ hoàn thành nhiệm vụ (Task completion rate), thời gian hoàn thành (Task completion time), tỷ lệ lỗi (Error rate).
  - *Self-reported metrics (Cảm nhận chủ quan):* Khảo sát thang đo Likert sau kiểm thử.
- **Lượng hóa tiêu chí thành công (Operationalize):** Đặt ngưỡng định lượng rõ ràng trước khi test (ví dụ: hoàn thành xác minh trong vòng 30 giây không cần trợ giúp).
- **Quy trình 7 bước:** (1) Xác định mục tiêu ➔ (2) Định nghĩa tác vụ ➔ (3) Chọn người tham gia ➔ (4) Xác định phương thức thu thập dữ liệu ➔ (5) Tiến hành kiểm thử ➔ (6) Phân tích kết quả ➔ (7) Chỉ ra lỗi usability và cải tiến thiết kế.

### 4. Quantitative Analysis (Phân tích định lượng)
- **Cấu trúc biến trong thực nghiệm:**
  - *Independent variable (Biến độc lập / thao túng):* Điều kiện được thay đổi có chủ đích (chỉ có 1 biến độc lập trong mỗi thử nghiệm).
  - *Dependent variable (Biến phụ thuộc / phản hồi):* Yếu tố được đo lường, quan sát để thu thập dữ liệu.
  - *Controlled variables (Biến kiểm soát):* Các yếu tố được giữ cố định không đổi để đảm bảo tính khách quan.
- **Kiểm định giả thuyết (Hypothesis Testing):**
  - Giả thuyết nghiên cứu (Hypothesis) vs. Giả thuyết không (Null Hypothesis - $H_0$).
  - Giá trị p-value: Xác suất quan sát được kết quả cực đoan nếu $H_0$ đúng; p-value càng nhỏ so với mức ý nghĩa $\alpha = 0.05$ thì bằng chứng bác bỏ $H_0$ càng mạnh mẽ.
- **Các phép kiểm định thống kê thông dụng:**
  - *Chi-squared test ($\chi^2$):* Phù hợp cho dữ liệu phân loại / tỷ lệ (ví dụ: tỷ lệ thích/không thích, so sánh số lượt nhấp chuột giữa 2 phiên bản giao diện).
  - *t-test (One-sample / Two-sample / Welch t-test):* So sánh giá trị trung bình dữ liệu liên tục (ví dụ: thời gian thực hiện tác vụ của nhóm người dùng so với ngưỡng 50s hoặc so sánh giữa phiên bản A và B).
  - *ANOVA:* Phân tích phương sai khi so sánh nhiều điều kiện hoặc đa nhóm.

## Điểm có thể hành động

- Trước khi kiểm thử, phải định nghĩa rõ tác vụ mẫu và lượng hóa tiêu chí thành công cụ thể (không đặt câu hỏi định tính thiên kiến như “Bạn có thích giao diện này không?”).
- Tận dụng Wizard-of-Oz để tinh chỉnh luồng tương tác ngay trên bản prototype giấy/low-fi.
- Kết hợp cả Performance metrics (khách quan từ hành vi) và Self-reported metrics (cảm nhận người dùng) để đánh giá toàn diện usability.
- Khi đưa ra kết luận cải tiến dựa trên số liệu, phải áp dụng đúng công cụ phân tích thống kê để kiểm chứng ý nghĩa thực nghiệm.
