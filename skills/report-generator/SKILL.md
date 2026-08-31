---

name: report-agent

description: Soạn, kiểm tra và hoàn thiện báo cáo cuối kỳ HCI/UX từ research, requirements, system analysis, design artifacts, prototype, evaluation results và evidence đã được duyệt. Dùng khi cần tạo báo cáo theo cấu trúc HCI gồm Introduction, User Research, Requirements & Design Goals, Existing System Analysis, Design Process, Prototype Design, Design Evaluation, Final Design và Conclusion.

---

# Skill: HCI/UX Report Agent

## 1. Mục đích

Biến các artifact đã được duyệt thành một **báo cáo HCI/UX hoàn chỉnh, mạch lạc, có thể kiểm chứng và đúng yêu cầu submission**.

Báo cáo phải thể hiện được toàn bộ quá trình:

**Problem → User Research → User Needs → Requirements → Existing System Analysis → Design → Prototype → Evaluation → Final Design → Conclusion**

Agent phải ưu tiên **tính trung thực của evidence, tính nhất quán và logic của quá trình thiết kế** hơn độ dài hoặc hình thức.

---

# 2. Nguồn dữ liệu bắt buộc

Trước khi viết báo cáo, đọc và kiểm tra các nguồn sau nếu chúng tồn tại:

1. `PLAN.md`
2. Project manifest / artifact manifest
3. Project rules / submission requirements
4. Template báo cáo LaTeX trong `templates/latex/sample/` (`main.tex`, thư mục `content/` gồm 9 chương từ `01_gioi_thieu.tex` đến `09_ket_luan.tex`, `ref/appendix.tex`) và hướng dẫn trong `templates/latex/README.md`
5. User research artifacts
6. Requirements artifacts
7. Existing system analysis
8. User flow / task flow
9. Information architecture
10. Ideation / sketches / storyboards
11. Wireframes
12. Prototype
13. Usability evaluation materials
14. Evaluation results
15. Screenshots / figures / tables
16. Software implementation artifacts nếu có
17. Approved references / citations

Không được coi một artifact là evidence nếu artifact đó chưa tồn tại hoặc chưa được xác nhận.

---

# 3. Cấu trúc báo cáo bắt buộc

Nếu project yêu cầu báo cáo HCI/UX theo cấu trúc này, phải sử dụng đầy đủ các chapter sau.

## 1. Introduction

### 1.1. Project Background

Trình bày:

* Bối cảnh của vấn đề
* Hệ thống/sản phẩm đang được nghiên cứu
* Context trong đó hệ thống được sử dụng
* Tại sao vấn đề đáng quan tâm

Không biến phần này thành literature review dài nếu rubric không yêu cầu.

### 1.2. Problem Statement

Trình bày:

* Vấn đề người dùng đang gặp phải
* Những hạn chế của hệ thống/giao diện hiện tại
* Consequences của vấn đề đối với user hoặc task

Problem statement phải dựa trên research hoặc evidence hiện có.

### 1.3. Project Objectives

Trình bày:

* Đồ án muốn cải thiện điều gì
* Mục tiêu UX/Usability
* Những kết quả dự kiến đạt được

Objectives phải phù hợp với scope và evidence thực tế.

### 1.4. Project Scope

Trình bày:

* Những chức năng/task nằm trong phạm vi
* Những đối tượng người dùng nằm trong phạm vi
* Những phần không được thực hiện
* Các giới hạn kỹ thuật hoặc nghiên cứu nếu có

---

# 4. User Research

## 2.1. Target Users

Mô tả:

* Người dùng mục tiêu
* Đặc điểm liên quan đến hệ thống
* Context of use
* Các task chính của họ

Chỉ mô tả characteristics có evidence.

## 2.2. Research Methods

Trình bày các phương pháp thực sự được sử dụng, ví dụ:

* Interview
* Observation
* Survey
* Questionnaire
* Contextual inquiry
* Usability testing

Với mỗi method nếu có đủ evidence, nêu:

* Purpose
* Participants
* Procedure
* Data collected

Không được tự tạo participant hoặc research method chưa được thực hiện.

## 2.3. Research Findings

Đây là phần **findings**, không phải nhật ký quá trình nghiên cứu.

Ưu tiên trình bày các phát hiện có ý nghĩa đối với thiết kế, ví dụ:

* Users frequently make errors when...
* Users have difficulty finding...
* Users expect...
* Users prefer...
* Users are confused by...

Mỗi finding quan trọng phải có evidence tương ứng.

## 2.4. User Needs / Pain Points

Tổng hợp research findings thành các:

* User needs
* Pain points
* Frustrations
* Expectations
* Opportunities for improvement

Không tạo pain point mới nếu research không hỗ trợ.

## 2.5. Personas

Nếu project có persona artifact, trình bày:

* Primary persona
* Secondary persona nếu cần
* Goals
* Behaviors
* Pain points
* Needs
* Context

Persona phải trace được về research.

Nếu không có đủ research để xây dựng persona đáng tin cậy, không tự bịa persona.

---

# 5. Requirements and Design Goals

## 3.1. User Requirements

Chuyển User Needs / Pain Points thành requirements có thể hành động.

Ví dụ:

> Users need a simple way to verify the selected file before submission.

Mỗi requirement nên trace được:

**Research Finding → User Need → User Requirement**

## 3.2. Usability Goals

Có thể sử dụng các mục tiêu:

* Effectiveness
* Efficiency
* Learnability
* Error prevention
* User satisfaction
* Memorability
* Accessibility nếu thuộc scope

Usability goals phải liên quan trực tiếp đến vấn đề được phát hiện.

## 3.3. Design Goals

Chuyển requirements và usability goals thành design goals.

Ví dụ:

* Reduce the possibility of users submitting the wrong file.
* Make the submission status immediately visible.
* Simplify navigation between important tasks.
* Provide clear feedback after user actions.

Design goals phải được sử dụng để đánh giá design ở các chapter sau.

---

# 6. Analysis of Existing System

## 4.1. Existing System / Existing Interface

Trình bày:

* Hệ thống hiện tại
* Các màn hình liên quan
* Navigation hiện tại
* Các chức năng chính liên quan đến scope

Sử dụng screenshots hoặc figures nếu có.

## 4.2. Task Analysis

Phân tích các task quan trọng mà user cần thực hiện.

Ví dụ:

**Login → Select Assignment → Upload File → Verify File → Submit**

Có thể sử dụng:

* Task decomposition
* Hierarchical task analysis
* Step-by-step task analysis

Chỉ phân tích task thực sự thuộc scope.

## 4.3. User Flow / Task Flow

Trình bày flow hiện tại của user.

Nếu có diagram artifact, ưu tiên sử dụng artifact thay vì tự tạo lại logic khác.

## 4.4. Usability Problems

Tổng hợp các usability problems của hệ thống hiện tại.

Mỗi problem nên có:

* Problem
* Evidence
* Impact on user/task
* Related research finding nếu có

Ví dụ:

| Problem                                    | Evidence                  | Impact                                           |
| ------------------------------------------ | ------------------------- | ------------------------------------------------ |
| Users cannot clearly see submission status | Research / usability test | Users are uncertain whether submission succeeded |

Không chỉ liệt kê lỗi giao diện; phải giải thích **tại sao đó là usability problem**.

---

# 7. Design Process

## 5.1. Information Architecture

Trình bày:

* Sitemap
* Navigation structure
* Content organization

Chỉ sử dụng những artifact thực tế của project.

## 5.2. User Flow

Trình bày các flow được thiết kế lại.

Nếu flow thay đổi so với existing system, giải thích lý do.

## 5.3. Ideation

Trình bày:

* Brainstorming
* Sketching
* Design alternatives
* Các ý tưởng được xem xét
* Design decisions

Không cần liệt kê mọi ý tưởng nếu không có giá trị đối với final design.

## 5.4. Storyboards

Nếu có storyboard:

* Trình bày scenario
* User context
* User action
* System response
* Desired experience

Storyboard phải hỗ trợ giải thích design context.

Nếu project không sử dụng storyboard, không tạo artifact giả.

## 5.5. Wireframes

Trình bày:

* Low-fidelity wireframes
* Các màn hình chính
* Các iteration quan trọng

Tập trung vào evolution của thiết kế.

## 5.6. Design Alternatives

Nếu có nhiều phương án:

**Design A → Design B → Design C → Final Design**

Giải thích:

* Ưu điểm
* Nhược điểm
* Trade-offs
* Lý do lựa chọn

Không bắt buộc phải có nhiều alternatives nếu project thực tế chỉ có một hướng thiết kế.

---

# 8. Prototype Design

## 6.1. Prototype Overview

Trình bày:

* Prototype được xây dựng bằng công cụ nào
* Fidelity level
* Các chức năng được mô phỏng
* Phạm vi prototype

Phải phân biệt rõ:

**Prototype ≠ Fully Functional Software**

Không mô tả prototype như một hệ thống backend hoàn chỉnh nếu backend không tồn tại.

## 6.2. Prototype Screens

Trình bày các màn hình chính.

Mỗi screen nên có:

* Screen name
* Purpose
* Main UI elements
* Related user task

Không đưa screenshot không có chú thích hoặc vai trò rõ ràng.

## 6.3. Interaction Design

Giải thích các interaction quan trọng:

* Button behavior
* Navigation
* Feedback
* Error handling
* Confirmation
* Undo
* Notifications
* Empty states
* Loading states nếu có

Chỉ mô tả interaction thực sự tồn tại trong prototype/software.

## 6.4. Design Rationale

Đây là phần quan trọng để chứng minh thiết kế dựa trên HCI process.

Ưu tiên format:

**Research Finding → Design Decision → Expected UX Improvement**

Ví dụ:

> Research revealed that users frequently submitted the wrong file. Therefore, a file preview and confirmation step were added to help users verify their selection before submission.

Mỗi design decision quan trọng phải có rationale.

---

# 9. Design Evaluation

## 7.1. Evaluation Objectives

Nêu rõ design muốn kiểm tra điều gì.

Ví dụ:

* Does the redesigned interface help users complete the task more effectively?
* Does the new navigation reduce task completion time?
* Does the redesigned interface reduce user errors?
* Are users more satisfied with the new design?

Evaluation objectives phải liên quan đến usability/design goals.

## 7.2. Evaluation Method

Trình bày method thực tế:

* Usability testing
* A/B testing
* Comparative usability testing
* Think-aloud
* Questionnaire

Không được tuyên bố A/B testing nếu project không thực hiện A/B testing.

## 7.3. Participants

Trình bày:

* Number of participants
* User characteristics
* Recruitment criteria

Chỉ sử dụng participant data thực tế.

Không được bịa sample size hoặc demographic information.

## 7.4. Tasks

Liệt kê các task participants phải thực hiện.

Task phải phản ánh những interaction quan trọng của prototype.

## 7.5. Metrics

Có thể sử dụng:

* Task completion rate
* Task completion time
* Error rate
* Number of errors
* Satisfaction score
* SUS nếu thực sự sử dụng
* Other defined metrics

Không tự tạo metrics sau khi evaluation đã kết thúc.

## 7.6. Procedure

Mô tả:

1. Participant preparation
2. Task execution
3. Observation / measurement
4. Questionnaire/interview nếu có
5. Data collection

## 7.7. Results

Trình bày kết quả bằng:

* Tables
* Charts
* Descriptive statistics
* Statistical tests nếu thực sự được thực hiện

Phải giữ nguyên số liệu từ evaluation artifacts.

Không làm tròn hoặc thay đổi số liệu theo cách gây hiểu nhầm.

## 7.8. Discussion

Không chỉ lặp lại Results.

Giải thích:

* Kết quả có ý nghĩa gì?
* Design goal có đạt được không?
* Problem ban đầu có được cải thiện không?
* Có usability issue nào vẫn tồn tại?
* Có trade-off nào xuất hiện không?

Ví dụ:

> The redesigned interface increased task completion from 60% to 80%, suggesting that the new file-verification step helped users avoid submission errors.

Không được suy luận nhân quả mạnh hơn mức evidence cho phép.

---

# 10. Final Design

## 8.1. Final Prototype

Trình bày phiên bản thiết kế cuối cùng sau evaluation.

Nếu final design khác prototype được evaluation, phải giải thích những thay đổi sau evaluation.

## 8.2. Key Design Improvements

Tổng hợp các cải tiến quan trọng.

Ưu tiên bảng:

| Problem                            | Design Solution             | UX Improvement           |
| ---------------------------------- | --------------------------- | ------------------------ |
| Users submit wrong file            | File preview + confirmation | Reduce submission errors |
| Users cannot see submission status | Clear status indicator      | Improve visibility       |
| Users are unsure before submission | Confirmation step           | Increase confidence      |

Mỗi improvement phải trace được về problem hoặc research finding.

## 8.3. Before vs. After

So sánh:

* Existing design
* Redesigned/final design
* Main change
* Expected or measured improvement

Nếu có evaluation data, ưu tiên dùng measured improvement thay vì chỉ nói expected improvement.

---

# 11. Conclusion

## 9.1. Summary

Tóm tắt:

**Initial Problem → Research → Design Solution → Evaluation → Final Result**

Không lặp lại toàn bộ báo cáo.

## 9.2. Contributions

Nêu những gì project đã đóng góp:

* UX improvement
* Usability improvement
* Design solution
* Prototype
* Research findings
* Evaluation evidence

Chỉ nêu contribution có căn cứ.

## 9.3. Limitations

Nêu các giới hạn thực tế, ví dụ:

* Small sample size
* Limited participant diversity
* Prototype chưa fully functional
* Limited testing duration
* Limited research scope
* Technical constraints

Không cố che giấu limitation.

## 9.4. Future Work

Đề xuất những việc có thể thực hiện tiếp:

* Test với larger sample
* Test với different user groups
* Improve accessibility
* Implement full functionality
* Conduct additional usability testing
* Improve design based on remaining issues

Future work phải xuất phát từ limitation hoặc unresolved problem.

---

# 12. Evidence Traceability

Báo cáo phải duy trì traceability giữa các phần.

Ưu tiên chuỗi:

**Research Finding**
↓
**User Need / Pain Point**
↓
**User Requirement**
↓
**Design Goal**
↓
**Design Decision**
↓
**Prototype**
↓
**Evaluation Task / Metric**
↓
**Evaluation Result**
↓
**Final Design Improvement**

Nếu một design decision không thể trace về user need, requirement hoặc usability problem, agent phải kiểm tra lại rationale.

Nếu một claim không có evidence, không được trình bày claim đó như fact.

---

# 13. Figures and Tables

Mỗi figure/table phải có:

* Number
* Title/caption
* Context trong nội dung
* Source hoặc artifact reference nếu cần

Không chèn hình chỉ để làm báo cáo dài.

Khi reference figure trong nội dung, dùng cách nhất quán:

> As shown in Figure 4, ...

Bảng phải phục vụ một mục đích phân tích cụ thể.

---

# 14. Citation and References

Chỉ sử dụng:

* Approved references
* Sources thực sự được sử dụng
* Sources có thể kiểm chứng

Không được:

* Bịa citation
* Bịa DOI
* Bịa URL
* Bịa author
* Bịa publication
* Thêm reference chỉ để làm bibliography dài hơn

Mọi source được liệt kê trong References phải thực sự được sử dụng trong báo cáo.

Mọi citation quan trọng trong nội dung phải có entry tương ứng trong References.

---

# 15. Writing Rules

Báo cáo phải:

* Viết theo academic/professional style
* Rõ ràng và trực tiếp
* Không kể chuyện lan man
* Không lặp lại cùng một thông tin ở nhiều chapter
* Phân biệt rõ observation, evidence, interpretation và conclusion
* Dùng thuật ngữ HCI/UX nhất quán
* Giữ nhất quán tên hệ thống, user role, task và feature
* Giữ nguyên số liệu và version
* Không phóng đại kết quả

Không viết:

> The design completely solved the usability problem.

Nếu evidence chỉ cho thấy improvement, viết:

> The evaluation results suggest that the redesign improved the identified usability problem.

---

# 16. Missing Evidence

Khi thiếu dữ liệu:

1. Xác định chính xác phần bị thiếu.
2. Đánh dấu phần đó là incomplete/draft.
3. Nêu artifact hoặc input cần bổ sung.
4. Không tự tạo dữ liệu để lấp khoảng trống.

Ví dụ:

> [Evidence required: usability evaluation results for task completion rate.]

Không viết:

> The task completion rate improved significantly.

nếu chưa có dữ liệu.

---

# 17. Consistency Check

Trước khi hoàn thành báo cáo, kiểm tra:

### Content

* [ ] Background phù hợp với Problem Statement
* [ ] Problem được hỗ trợ bởi User Research
* [ ] Research Findings dẫn đến User Needs
* [ ] User Needs dẫn đến Requirements
* [ ] Requirements dẫn đến Design Goals
* [ ] Design Problems được giải quyết bằng Design Decisions
* [ ] Prototype phản ánh Design Decisions
* [ ] Evaluation kiểm tra Design Goals
* [ ] Results được dùng để giải thích Final Design
* [ ] Conclusion phản ánh đúng Results

### Evidence

* [ ] Không có fabricated research
* [ ] Không có fabricated participants
* [ ] Không có fabricated results
* [ ] Không có fabricated citations
* [ ] Không có unsupported claims
* [ ] Prototype không bị mô tả thành fully functional software

### Structure

* [ ] Đủ Chapter 1–9
* [ ] Đủ subsection theo template
* [ ] Figures được đánh số
* [ ] Tables được đánh số
* [ ] References đầy đủ
* [ ] Appendix chứa supplementary materials nếu cần

### Submission

* [ ] Title đúng yêu cầu hiện hành
* [ ] Format đúng yêu cầu hiện hành
* [ ] Page/word limit đúng yêu cầu
* [ ] File naming đúng yêu cầu
* [ ] Required sections đầy đủ
* [ ] Links/attachments hoạt động
* [ ] PDF render không lỗi

---

# 18. Quy trình tự động Build LaTeX thông minh (Dual-Mode Automated Build)

Mỗi khi có **bất kỳ thay đổi nào** trong nội dung báo cáo (file `.tex`, hình ảnh, bảng biểu, trích dẫn, references hoặc file phụ trợ), `report-agent` **PHẢI tự động chạy tiến trình build PDF** theo cơ chế 2 trường hợp (Dual-Mode):

### 18.1. Cơ chế tự động phát hiện & Lựa chọn công cụ

Agent kiểm tra môi trường hệ thống để quyết định phương thức biên dịch:

```text
[Kiểm tra xelatex trên máy]
       │
       ├─► (Có sẵn compiler) ──► Trường hợp 1: Biên dịch trực tiếp qua Local XeLaTeX (Nhanh, không cần Docker)
       │
       └─► (Chưa cài compiler) ─► Trường hợp 2: Biên dịch qua Docker Container (Chứa sẵn TeX Live + Font)
```

---

### 18.2. Chi tiết 2 Trường hợp Biên dịch

#### Trường hợp 1: Sử dụng Compiler có sẵn trên máy (Local XeLaTeX)
- **Áp dụng khi**: Máy host đã cài sẵn `MiKTeX` hoặc `TeX Live` (lệnh `xelatex` khả dụng).
- **Lệnh thực thi (PowerShell):**
  ```powershell
  cd <thư_mục_chứa_file_tex>
  if (!(Test-Path build)) { New-Item -ItemType Directory build }
  xelatex -synctex=1 -interaction=nonstopmode -file-line-error -output-directory=build <file_chính>.tex
  ```
- **Ví dụ cho sample hoặc final report:**
  ```powershell
  cd templates\latex\sample; if (!(Test-Path build)) { New-Item -ItemType Directory build }; xelatex -synctex=1 -interaction=nonstopmode -file-line-error -output-directory=build main.tex
  ```

#### Trường hợp 2: Biên dịch qua Docker Image (Fallback Docker)
- **Áp dụng khi**: Máy host chưa cài TeX Live / MiKTeX hoặc bị thiếu package/font.
- **Docker Image**: `ghcr.io/tinnguyen0706/latex-times-new-roman:latest`
- **Lệnh thực thi (PowerShell):**
  ```powershell
  docker run --rm --volume "${PWD}:/workspace" --workdir /workspace/<thư_mục_chứa_file_tex> ghcr.io/tinnguyen0706/latex-times-new-roman:latest latexmk -synctex=1 -interaction=nonstopmode -file-line-error -xelatex -outdir=build <file_chính>.tex
  ```
- **Lệnh thực thi (Linux/Bash):**
  ```bash
  docker run --rm \
    --volume "$PWD:/workspace" \
    --workdir /workspace/<thư_mục_chứa_file_tex> \
    ghcr.io/tinnguyen0706/latex-times-new-roman:latest \
    latexmk -synctex=1 -interaction=nonstopmode -file-line-error -xelatex -outdir=build <file_chính>.tex
  ```

---

### 18.3. Quy tắc bắt buộc sau khi Build

1. **Kiểm tra Log & Exit Code**: Đảm bảo quá trình biên dịch trả về exit code 0, không có lỗi fatal (missing package, unescaped character như `&`, broken syntax).
2. **Kiểm tra File đầu ra**: File PDF đầu ra phải xuất hiện tại `<thư_mục_chứa_file_tex>/build/<tên_file>.pdf` và có timestamp mới nhất.
3. **Không đánh dấu hoàn thành nếu build lỗi**: Tuyệt đối không hoàn tất tác vụ hoặc báo cáo thành công nếu lệnh build PDF thất bại hoặc file PDF chưa được render.

---

# 19. Final Validation

Chỉ gọi báo cáo là **submission-ready** khi:

1. Nội dung đã hoàn chỉnh.
2. Evidence đã được kiểm tra.
3. Citation đã được kiểm tra.
4. Structure đúng yêu cầu.
5. Formatting đúng yêu cầu.
6. PDF đã được tự động build và render thành công (qua Local XeLaTeX hoặc Docker).
7. PDF đã được mở/kiểm tra trực quan.
8. Không có:

   * Broken links
   * Missing figures
   * Missing tables
   * Overflowing text
   * Blank pages bất thường
   * Broken characters
   * Incorrect page numbering
   * Inconsistent headings

Nếu còn lỗi, trạng thái phải là:

**DRAFT / NEEDS REVISION**

Không gọi là submission-ready khi chưa qua validation.

---

# 20. Output States

Agent phải phân biệt rõ ba trạng thái:

### DRAFT

Báo cáo còn thiếu evidence hoặc chưa hoàn thiện.

### REVIEW-READY

Nội dung đã tương đối hoàn chỉnh nhưng còn cần human review hoặc format validation.

### SUBMISSION-READY

Đã hoàn tất content, evidence, citation, formatting và PDF validation.

Không tự nâng trạng thái chỉ vì đã viết đủ các chapter.

