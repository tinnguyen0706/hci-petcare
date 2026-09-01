# Quy Tắc Đánh Giá Tính Khả Dụng (Usability Evaluation Rules)

Tệp này quy định các chuẩn mực, ràng buộc và tiêu chí nghiệm thu bắt buộc đối với phương pháp **Usability Test (Kiểm thử tính khả dụng)** trong toàn bộ quy trình thiết kế tương tác của dự án.

---

## 1. Tiền Điều Kiện Bắt Buộc (Strict Precondition Gate)

- **Bắt buộc phải có Wireframe và Persona trước khi Đánh giá**:
  - Giai đoạn Evaluation chỉ được phép kích hoạt khi:
    1. Toàn bộ hệ thống Wireframe hoàn chỉnh tại `deliverables/02-interaction-design/wireframe/` đã tồn tại đầy đủ.
    2. Dữ liệu Persona đã được xây dựng và xuất ra tại `deliverables/01-user-research/persona/personas.json`.
  - **Quy tắc dừng ngay lập tức (HALT)**: Nếu kiểm tra thấy thiếu Wireframe hoặc Persona, Agent **tuyệt đối KHÔNG ĐƯỢC PHÉP tạo dữ liệu đánh giá mà PHẢI BÁO LỖI VÀ DỪNG LẠI NGAY LẬP TỨC**, hướng dẫn người dùng kích hoạt subagent tương ứng trước.

---

## 2. Nguyên Tắc KHÔNG Gán Cứng Thông Tin (Zero-Hardcoding Principle)

1. **Tuyệt đối KHÔNG gán cứng thông tin nhân khẩu học / Persona**:
   - Tên, vai trò, số lượng người tham gia, phân bổ nhóm thử nghiệm bắt buộc phải được đọc động từ tệp `deliverables/01-user-research/persona/personas.json`.
   - Mỗi người tham gia thử nghiệm (Participant) phải gắn mã tham chiếu (`personaRef`) tương ứng với Persona thực tế trong project.
2. **Tuyệt đối KHÔNG gán cứng số lượng hay mã màn hình cố định**:
   - Danh mục màn hình và số lượng màn hình được kiểm thử phải được quét và trích xuất động từ thư mục `deliverables/02-interaction-design/wireframe/`.
3. **Nhiệm vụ kiểm thử (Pre-defined Tasks) dẫn xuất từ kịch bản thực tế**:
   - Các tác vụ kiểm thử được xây dựng trực tiếp từ các luồng tương tác trong `deliverables/01-user-research/scenario-future/` và các màn hình Wireframe tương ứng, không gán cứng cố định một kịch bản giả định ngoài dự án.
4. **Trung thực với dữ liệu**:
   - Số liệu thời gian thao tác (giây) và tỷ lệ hoàn thành (%) phải phản ánh đúng độ phức tạp thực tế của các tác vụ trên giao diện.

---

## 3. Ràng Buộc Bao Phủ 5 Mục Tiêu Usability Cốt Lõi

Mọi kế hoạch và báo cáo kiểm thử bắt buộc phải đo lường và đánh giá đầy đủ 5 mục tiêu usability:
1. **Effectiveness (Tính hiệu quả)**: Đo bằng *Tỷ lệ hoàn thành tác vụ (Task Completion Rate %)*.
2. **Efficiency (Tính hiệu suất)**: Đo bằng *Thời gian hoàn thành tác vụ (Task Completion Time — giây)* và số lượt tương tác.
3. **Errors (Mức độ lỗi)**: Đo bằng *Tỷ lệ lỗi (Error Rate)* và số lần thao tác nhầm/bối rối quan sát được.
4. **Learnability (Khả năng học hỏi)**: Đo lường tốc độ làm quen và mức độ trực quan qua các tác vụ liên tiếp.
5. **Satisfaction (Mức độ hài lòng)**: Đo bằng *Khảo sát thang đo Likert (1–5)* sau khi hoàn thành phiên test.

---

## 4. Lượng Hóa Tiêu Chí Thành Công (Operationalized Success Criteria)

Trước khi tiến hành kiểm thử, mỗi tác vụ bắt buộc phải được lượng hóa tiêu chí thành công với các ngưỡng định lượng rõ ràng:
- **Ngưỡng thời gian chuẩn cho từng tác vụ**: Căn cứ trên độ phức tạp của luồng màn hình (ví dụ: tác vụ chọn lịch $\le 45\text{s}$, tác vụ nhận diện trạng thái $\le 10\text{s}$).
- **Ngưỡng tỷ lệ hoàn thành tối thiểu**: Đặt ngưỡng thành công tối thiểu cho từng tác vụ (thường $\ge 80\% - 90\%$).
- **Ngưỡng thành công chung toàn hệ thống**:
  - Tỷ lệ hoàn thành trung bình: $\ge 85\%$.
  - Điểm đánh giá mức độ hài lòng Likert trung bình: $\ge 4.0 / 5.0$.

---

## 5. Ràng Buộc Khảo Sát Likert Sau Test

Bảng hỏi sau test bắt buộc sử dụng **thang đo Likert 5 mức độ** (1 = Rất không đồng ý / Rất khó $\rightarrow$ 5 = Rất đồng ý / Rất dễ) để khảo sát cảm nhận của người dùng về:
1. Tính rõ ràng, trực quan và dễ hiểu của quy trình thao tác chính.
2. Độ nổi bật và sự an tâm từ các thông tin cảnh báo/dặn dò quan trọng.
3. Tính minh bạch và độ dễ theo dõi của trạng thái/tiến độ phản hồi từ hệ thống.
4. Tính tiện lợi và khả năng tiết kiệm thời gian của các tính năng tương tác mới/cải tiến.
5. Mức độ hài lòng tổng thể và sự sẵn sàng sử dụng hệ thống lâu dài.

---

## 6. Tiêu Chuẩn Phân Loại Lỗi Khả Dụng (Usability Severity Ratings)

Mọi vấn đề khả dụng phát hiện được phải được gắn nhãn mức độ nghiêm trọng từ 1 đến 4:
- **Mức 1 — Lỗi Thẩm mỹ (Cosmetic)**: Lỗi nhỏ về hiển thị, không ảnh hưởng đến việc hoàn thành tác vụ.
- **Mức 2 — Lỗi Nhẹ (Minor)**: Gây ngập ngừng nhỏ nhưng người dùng vẫn tự hoàn thành được.
- **Mức 3 — Lỗi Nặng (Major)**: Gây bối rối lớn hoặc tỷ lệ bấm nhầm cao, bắt buộc phải khắc phục trước khi lập trình.
- **Mức 4 — Thảm họa Khả dụng (Catastrophe)**: Làm gián đoạn hoàn toàn luồng tương tác, người dùng bế tắc.

---

## 7. Yêu Cầu Đầu Ra & Tính Truy Vết (Deliverables & Traceability)

Toàn bộ kết quả đánh giá phải được lưu trữ tập trung tại `deliverables/02-interaction-design/evaluation/`:
1. `usability-test-plan.md`: Kế hoạch kiểm thử chi tiết.
2. `usability-test-data.json`: Dữ liệu thô của các phiên thử nghiệm (được ánh xạ từ tập Persona thực tế).
3. `usability-evaluation-report.md`: Báo cáo đánh giá tổng hợp 8 phần hoàn chỉnh (khớp nối trực tiếp với cấu trúc Báo cáo cuối kỳ).
4. **Tính truy vết**: Mọi lỗi phát hiện và khuyến nghị cải tiến phải liên kết trực tiếp với mã màn hình Wireframe cụ thể và làm đầu vào trực tiếp cho `software-product-agent`.
