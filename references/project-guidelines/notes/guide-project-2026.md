# Ghi Chú Hướng Dẫn Đồ Án CSC12106 Năm 2026

- **Tệp gốc:** `references/project-guidelines/original/Guide4Project_2026-1.pdf` & `Guide4Project_2026.pdf`
- **Loại nguồn:** Hướng dẫn đồ án chính thức (Bộ môn Hệ thống Thông tin - Khoa CNTT - HCMUS).
- **Phạm vi áp dụng:** Tổ chức nhóm, chọn đề tài, phương pháp thực hiện, mốc nộp giữa kỳ và yêu cầu trọn gói giai đoạn CUỐI KỲ (Final Submission).

---

## 1. Yêu Cầu Tổ Chức & Phương Pháp Tiếp Cận

- **Quy mô nhóm:** Nhóm 3 sinh viên, phân công vai trò rõ ràng (Trưởng nhóm, Thiết kế, Kiểm định/Kiểm thử, Soạn tài liệu, Phát triển & Cài đặt) và đảm bảo mức độ đóng góp cân bằng giữa các thành viên.
- **Tiếp cận người dùng:** Tiếp cận tối thiểu 5 end-users mục tiêu trong hệ thống thông tin quản lý.
- **Vòng lặp thiết kế:** Khảo sát vấn đề $\rightarrow$ Tìm điểm đòn bẩy $\rightarrow$ Thiết kế can thiệp $\rightarrow$ Quan sát thực nghiệm $\rightarrow$ Lặp lại cải tiến.
- **Đồ án phải chỉ ra được:**
  1. *Sự thay đổi:* Thay đổi hành vi người dùng theo chiều hướng có lợi và hiệu quả hơn.
  2. *Tính sáng tạo:* Giúp người dùng linh hoạt giải quyết công việc.

---

## 2. Yêu Cầu Bàn Giao Giai Đoạn Cuối Kỳ (Tuần 13 - Final Submission)

### 2.1. Danh mục sản phẩm nộp qua tập tin (Digital Submissions)
1. **Báo cáo đồ án hoàn chỉnh** (`.pdf` & `.md`): Được biên soạn theo cấu trúc chuẩn 9 chương và phụ lục.
2. **Slide trình bày đồ án** (`.pdf`): Phục vụ báo cáo bảo vệ, trả lời câu hỏi *"Tại sao"* và có sự tham gia của mọi thành viên.
3. **Các thiết kế giao diện bằng công cụ** (`.pdf` / SVG / Figma): Bộ Wireframe & Prototype chi tiết.
4. **Video Prototype** (`.mp4`): Video tương tác mô tả trọn vẹn luồng trải nghiệm người dùng mới.
5. **VibeCode / Software Product** (`.zip`): Mã nguồn phần mềm hoàn chỉnh 100% quy trình nghiệp vụ tương tác cải tiến.

### 2.2. Danh mục sản phẩm nộp trực tiếp (Physical Submissions)
- Poster & Prototype giấy.
- Báo cáo đồ án bản in.

---

## 3. Cấu Trúc Báo Cáo Cuối Kỳ Chuẩn 9 Chương (Final Report Structure)

1. **Chương 1: Giới thiệu (Introduction)**
   - 1.1. Project Background (Bối cảnh vấn đề, sản phẩm nghiên cứu, lý do quan tâm).
   - 1.2. Problem Statement (Vấn đề người dùng gặp phải, hạn chế của thiết kế hiện tại).
   - 1.3. Project Objectives (Mục tiêu cải thiện, mục tiêu UX/Usability).
   - 1.4. Project Scope (Phạm vi dự án).
2. **Chương 2: Nghiên cứu người dùng (User Research)**
   - 2.1. Target Users (Người dùng mục tiêu, đặc điểm, context of use).
   - 2.2. Research Methods (Interview, Observation, Survey, Usability testing).
   - 2.3. Research Findings (Dữ liệu và phát hiện hành vi, khó khăn).
   - 2.4. User Needs/Pain Points (Tổng hợp nhu cầu và điểm đau).
   - 2.5. Personas (Primary persona, Secondary persona).
3. **Chương 3: Yêu cầu và mục tiêu thiết kế (Requirements & Goals)**
   - 3.1. User Requirements (Chuyển findings thành yêu cầu người dùng).
   - 3.2. Usability Goals (Effectiveness, Efficiency, Learnability, Error prevention, Satisfaction).
   - 3.3. Design Goals (Mục tiêu thiết kế giao diện cụ thể).
4. **Chương 4: Phân tích hệ thống và trải nghiệm hiện tại (Current System Analysis)**
   - 4.1. Existing System / Interface (Giao diện/quy trình hiện tại).
   - 4.2. Task Analysis (Phân tích các tác vụ quan trọng).
   - 4.3. User Flow / Task Flow (Sơ đồ luồng thao tác hiện tại).
   - 4.4. Usability Problems (Vấn đề và điểm nghẽn của thiết kế cũ).
5. **Chương 5: Quá trình thiết kế (Design Process)**
   - 5.1. Information Architecture (Sitemap, cấu trúc điều hướng).
   - 5.2. User Flow (Luồng tương tác mới).
   - 5.3. Ideation (Brainstorming, phác thảo, các phương án).
   - 5.4. Storyboards (Bảng phân cảnh trực quan).
   - 5.5. Wireframes (Khung giao diện chi tiết).
   - 5.6. Design Alternatives (So sánh các phương án A, B, C $\rightarrow$ Final Design).
6. **Chương 6: Thiết kế Prototype (Prototype Design)**
   - 6.1. Prototype Overview (Giới thiệu prototype tương tác).
   - 6.2. Prototype Screens (Trình bày các màn hình chính).
   - 6.3. Interaction Design (Giải thích hành vi nút bấm, điều hướng, phản hồi, undo, thông báo).
   - 6.4. Design Rationale (Research finding $\rightarrow$ Design decision $\rightarrow$ Expected UX improvement).
7. **Chương 7: Đánh giá thiết kế (Design Evaluation)**
   - 7.1. Evaluation Objectives (Mục tiêu kiểm thử).
   - 7.2. Evaluation Method (Usability testing, Likert questionnaire).
   - 7.3. Participants (Số lượng, đặc điểm người tham gia).
   - 7.4. Tasks (Danh mục nhiệm vụ kiểm thử).
   - 7.5. Metrics (Task completion, Time on task, Error rate, Satisfaction score).
   - 7.6. Procedure (Quy trình tiến hành test).
   - 7.7. Results (Bảng số liệu, biểu đồ đo lường thực tế).
   - 7.8. Discussion (Ý nghĩa kết quả, giải thích cải thiện).
8. **Chương 8: Thiết kế cuối cùng (Final Design)**
   - 8.1. Final Prototype / Software (Giới thiệu sản phẩm hoàn thiện).
   - 8.2. Key Design Improvements (Bảng Problem $\rightarrow$ Design Solution $\rightarrow$ UX Improvement).
   - 8.3. Before vs. After (So sánh trực quan và định lượng giữa quy trình cũ và giải pháp mới).
9. **Chương 9: Kết luận (Conclusion)**
   - 9.1. Summary (Tóm tắt vấn đề, giải pháp và kết quả đánh giá).
   - 9.2. Contributions (Đóng góp của đồ án).
   - 9.3. Limitations (Hạn chế về cỡ mẫu, phạm vi, thời gian).
   - 9.4. Future Work (Hướng phát triển tương lai).
- **Tài liệu tham khảo (References)**
- **Phụ lục (Appendix):** Interview questions, Survey questionnaire, Raw usability testing data, Consent form, Detailed user flows, Additional wireframes, Screenshots.
