# Kế Hoạch Kiểm Thử Tính Khả Dụng (Usability Test Plan)

**Hệ thống**: {{systemName}}  
**Giai đoạn**: {{evaluationStage}}  
**Ngày thực hiện**: {{testDate}}  

---

## 1. Mục Tiêu Kiểm Thử (Evaluation Goals)

Kiểm thử nhằm trả lời câu hỏi trung tâm: ***“Người dùng sử dụng sản phẩm như thế nào?”*** thông qua 5 mục tiêu Usability cốt lõi:
1. **Effectiveness (Tính hiệu quả)**: Kiểm tra tỷ lệ người dùng hoàn thành thành công các luồng nhiệm vụ chính.
2. **Efficiency (Tính hiệu suất)**: Đo lường thời gian thao tác và số bước cần thiết để hoàn thành từng tác vụ.
3. **Errors (Mức độ lỗi)**: Ghi nhận các điểm thao tác nhầm, bối rối hoặc thao tác sai thông tin.
4. **Learnability (Khả năng học hỏi)**: Đánh giá mức độ trực quan và khả năng làm quen nhanh của người dùng mới.
5. **Satisfaction (Mức độ hài lòng)**: Thu thập mức độ hài lòng, an tâm và sẵn sàng sử dụng lâu dài qua thang đo Likert.

---

## 2. Đối Tượng Tham Gia (Participants)

- **Tổng số người tham gia**: {{participantCount}} người dùng mục tiêu (được mã hóa từ P1 đến P{{participantCount}}).
- **Phân bổ theo tập Persona thực tế**:
{{#each personaDistribution}}
  - **{{this.personaName}} ({{this.personaRole}})**: {{this.participantCount}} người tham gia đại diện — {{this.keyCharacteristics}}.
{{/each}}

---

## 3. Tiêu Chí Lượng Hóa Thành Công (Operationalized Success Criteria)

| Mã tác vụ | Tên nhiệm vụ cốt lõi | Màn hình đối chiếu | Ngưỡng thời gian chuẩn | Ngưỡng hoàn thành tối thiểu |
| :--- | :--- | :--- | :--- | :--- |
{{#each tasks}}
| **{{this.taskId}}** | {{this.taskName}} | {{this.screenRefs}} | $\le {{this.targetDurationSeconds}}\text{s}$ | $\ge {{this.targetCompletionRatePercent}}\%$ |
{{/each}}

- **Ngưỡng thành công chung toàn hệ thống**:
  - Tỷ lệ hoàn thành trung bình: $\ge {{overallTargetCompletionRate}}\%$.
  - Điểm đánh giá mức độ hài lòng Likert trung bình: $\ge {{overallTargetLikertScore}} / 5.0$.

---

## 4. Phương Thức Thu Thập Dữ Liệu

1. **Performance Metrics (Khách quan)**: Ghi nhận trạng thái hoàn thành (Thành công / Thất bại), thời gian thực hiện (giây), và số lỗi thao tác.
2. **Self-reported Metrics (Chủ quan)**: Khảo sát 5 câu hỏi thang đo Likert (1–5) sau khi kết thúc phiên thử nghiệm.
