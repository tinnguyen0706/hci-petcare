# Bảng Khảo Sát Cảm Nhận Sau Test (Post-Test Likert Survey)

**Mã người tham gia**: P{{participantId}}  
**Thời gian hoàn thành**: {{completionTimestamp}}  

---

### Hướng Dẫn:
Vui lòng đánh giá mức độ đồng ý của bạn đối với các nhận định dưới đây theo thang điểm từ 1 đến 5:
- **1**: Rất không đồng ý / Rất khó
- **2**: Không đồng ý / Hơi khó
- **3**: Trung lập / Bình thường
- **4**: Đồng ý / Khá dễ
- **5**: Rất đồng ý / Rất dễ & Hài lòng

---

### Bảng Câu Hỏi:

| STT | Nội dung nhận định | Điểm đánh giá (1–5) | Ghi chú / Cảm nhận thêm |
| :---: | :--- | :---: | :--- |
{{#each likertQuestions}}
| **{{this.id}}** | {{this.statement}} | `[ 1 | 2 | 3 | 4 | 5 ]` | {{this.userComment}} |
{{/each}}

---

### Ý Kiến Đóng Góp Mở:
- **Điểm bạn hài lòng nhất**: {{bestFeedback}}
- **Điểm cần cải tiến nhất**: {{improvementFeedback}}
