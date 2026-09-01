# Báo Cáo Đánh Giá Tính Khả Dụng (Usability Evaluation Report)

**Hệ thống**: {{systemName}}  
**Đối tượng mục tiêu**: {{targetUsersDescription}}  
**Phương pháp**: Usability Test (Kiểm thử tính khả dụng)  
**Phạm vi kiểm thử**: {{testingScopeDescription}}  

---

## 1. Mục Tiêu Đánh Giá (Evaluation Objectives)

Đánh giá thực nghiệm nhằm trả lời câu hỏi trung tâm: ***“Người dùng tương tác và sử dụng hệ thống như thế nào?”*** qua 5 mục tiêu usability cốt lõi:
1. **Effectiveness (Tính hiệu quả)**: Đo lường tỷ lệ hoàn thành thành công các luồng nhiệm vụ.
2. **Efficiency (Tính hiệu suất)**: Đo lường thời gian thao tác và số bước thực hiện trên từng giao diện.
3. **Errors (Mức độ lỗi)**: Ghi nhận tần suất, vị trí và các tình huống người dùng thao tác nhầm hoặc bối rối.
4. **Learnability (Khả năng học hỏi)**: Đánh giá mức độ trực quan và khả năng tiếp cận nhanh đối với người dùng mới.
5. **Satisfaction (Mức độ hài lòng)**: Đánh giá cảm nhận chủ quan và sự tin cậy qua thang đo Likert sau khi hoàn thành.

---

## 2. Phương Pháp Đánh Giá (Evaluation Method)

- **Phương pháp chủ đạo**: Usability Testing quan sát tương tác trực tiếp trên giao diện.
- **Kỹ thuật kết hợp**: Ghi nhận chỉ số định lượng khách quan (Performance Metrics) kết hợp khảo sát cảm nhận định tính (Self-reported Likert Survey) ngay sau phiên test.

---

## 3. Đối Tượng Tham Gia (Participants)

- **Tổng số người tham gia**: {{totalParticipants}} người dùng (được mã hóa từ P1 đến P{{totalParticipants}}).
- **Phân bổ theo tập Persona thực tế**:
{{#each personaDistribution}}
  - **{{this.personaName}} ({{this.personaRole}})**: {{this.participantCount}} người tham gia đại diện — {{this.keyCharacteristics}}.
{{/each}}

---

## 4. Danh Mục Nhiệm Vụ Kiểm Thử (Tasks)

| Mã tác vụ | Tên nhiệm vụ cốt lõi | Màn hình đối chiếu | Ngưỡng thời gian chuẩn | Ngưỡng hoàn thành tối thiểu |
| :--- | :--- | :--- | :--- | :--- |
{{#each tasks}}
| **{{this.taskId}}** | {{this.taskName}} | {{this.screenRefs}} | $\le {{this.targetDurationSeconds}}\text{s}$ | $\ge {{this.targetCompletionRatePercent}}\%$ |
{{/each}}

---

## 5. Bộ Chỉ Số Đo Lường (Metrics)

1. **Chỉ số hiệu năng (Performance Metrics)**:
   - *Tỷ lệ hoàn thành (Completion Rate)*: Tỷ lệ % người tham gia hoàn thành tác vụ thành công.
   - *Thời gian thực hiện (Time-on-Task)*: Số giây trung bình ($\bar{T}$) từ lúc bắt đầu đến khi kết thúc tác vụ.
   - *Tần suất lỗi (Error Count)*: Số lần bấm nhầm hoặc thao tác sai hướng.
2. **Chỉ số cảm nhận (Self-reported Metrics)**:
   - *Điểm đánh giá Likert (1–5)*: Thang điểm 5 mức độ thu thập cảm nhận ngay sau bài test.

---

## 6. Quy Trình Thực Hiện (Procedure)

1. **Chuẩn bị & Giới thiệu**: Giải thích bối cảnh, vai trò của người tham gia và thiết lập môi trường thử nghiệm.
2. **Giao nhiệm vụ**: Người tham gia nhận kịch bản từng Pre-defined Task và tự do thao tác trên giao diện.
3. **Quan sát & Ghi nhận**: Ghi nhận trạng thái hoàn thành, bấm giờ chính xác và đánh dấu các điểm thao tác nhầm.
4. **Khảo sát sau test**: Người tham gia điền bảng hỏi Likert và đóng góp ý kiến phản hồi mở.

---

## 7. Kết Quả Đo Lường Thực Tế (Results)

### 7.1. Bảng Tổng Hợp Chỉ Số Hiệu Năng (Performance Metrics)

| Mã tác vụ | Tỷ lệ hoàn thành thực tế | Thời gian trung bình thực tế ($\bar{T}$) | Ngưỡng chuẩn kỳ vọng | Đánh giá đạt chuẩn |
| :--- | :---: | :---: | :---: | :---: |
{{#each taskPerformanceSummary}}
| **{{this.taskId}} ({{this.taskName}})** | {{this.actualCompletionRate}}% | {{this.actualAvgTimeSeconds}}s | $\le {{this.targetDurationSeconds}}\text{s}$ ($\ge {{this.targetCompletionRatePercent}}\%$) | {{this.statusBadge}} |
{{/each}}
| **Trung bình toàn hệ thống** | **{{overallCompletionRate}}%** | — | **$\ge {{overallTargetCompletionRate}}\%$** | **{{overallStatusBadge}}** |

### 7.2. Kết Quả Khảo Sát Cảm Nhận Likert (Self-Reported Metrics)

| STT | Nội dung khảo sát Likert (Thang điểm 1–5) | Điểm trung bình ($\bar{X}$) | Mức độ hài lòng |
| :---: | :--- | :---: | :--- |
{{#each likertQuestionsSummary}}
| **{{this.id}}** | {{this.statement}} | {{this.meanScore}} / 5.0 | {{this.satisfactionLabel}} |
{{/each}}
| **Tổng** | **Điểm hài lòng trung bình toàn hệ thống** | **{{likertOverallMean}} / 5.0** | **{{likertOverallLabel}}** |

---

## 8. Thảo Luận, Phát Hiện Lỗi & Đề Xuất Cải Tiến (Discussion & Actionable Recommendations)

### 8.1. Phân Tích Phát Hiện Khả Dụng & Mức Độ Nghiêm Trọng (Usability Findings)

| ID Lỗi | Màn hình vi phạm | Mô tả hiện tượng quan sát được | Mức độ nghiêm trọng | Nguyên nhân UX |
| :---: | :--- | :--- | :---: | :--- |
{{#each usabilityFindings}}
| **{{this.findingId}}** | `{{this.screenRef}}` | {{this.observedIssue}} | {{this.severityLabel}} | {{this.uxRootCause}} |
{{/each}}

### 8.2. Ma Trận Đề Xuất Cải Tiến Cho Thiết Kế Cuối & Lập Trình Phần Mềm (Key Design Improvements)

| ID Lỗi | Giải pháp cải tiến cụ thể cho giai đoạn lập trình (`03-software-product`) | Màn hình áp dụng | Độ ưu tiên |
| :---: | :--- | :--- | :---: |
{{#each actionableRecommendations}}
| **{{this.findingId}}** | {{this.designSolution}} | `{{this.screenRef}}` $\rightarrow$ `{{this.codeComponentRef}}` | {{this.priority}} |
{{/each}}

### 8.3. Kết Luận Chung

{{overallConclusionText}}
