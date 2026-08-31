# Soạn báo cáo cuối kỳ

## Mục đích

Tổng hợp research, design, implementation và evaluation thành báo cáo tự chứa, đúng format và có claim truy vết được.

## Dùng skill này khi

- Các deliverable 1–8 đã duyệt và có evidence kiểm thử thật.
- Cần soạn, cập nhật hoặc kiểm tra báo cáo cuối kỳ.
- Cần đối chiếu title, format và nội dung với yêu cầu nộp hiện hành.

## Input bắt buộc

- `deliverables/01-user-research/`.
- `deliverables/02-interaction-design/`.
- `deliverables/03-software-product/`.
- Yêu cầu hiện hành trong `data/submission-inputs/`.
- Đọc template báo cáo LaTeX trong `templates/latex/sample/` (`main.tex`, thư mục `content/` gồm 9 chương và `ref/appendix.tex`), hướng dẫn build trong `templates/latex/README.md`, proposal và rubric.

## Output

`deliverables/04-final-submission/report/` gồm source LaTeX (`main.tex`, `content/`, `ref/`), hình/bảng có nguồn và bản PDF đã build/kiểm tra qua Docker (`build/main.pdf`).

## Cấu trúc 9 chương chuẩn HCI (tương ứng các file trong template LaTeX)

- **Chương 1. Giới thiệu (Introduction)** (`content/01_gioi_thieu.tex`): 1.1 Project Background, 1.2 Problem Statement, 1.3 Project Objectives, 1.4 Project Scope.
- **Chương 2. Nghiên cứu người dùng (User Research)** (`content/02_nghien_cuu_nguoi_dung.tex`): 2.1 Target Users, 2.2 Research Methods, 2.3 Research Findings, 2.4 User Needs / Pain Points, 2.5 Personas.
- **Chương 3. Yêu cầu và mục tiêu thiết kế (Requirements & Design Goals)** (`content/03_yeu_cau_muc_tieu.tex`): 3.1 User Requirements, 3.2 Usability Goals, 3.3 Design Goals.
- **Chương 4. Phân tích hệ thống và trải nghiệm hiện tại (Existing System Analysis)** (`content/04_phan_tich_hien_tai.tex`): 4.1 Existing System / Interface, 4.2 Task Analysis, 4.3 User Flow / Task Flow, 4.4 Usability Problems.
- **Chương 5. Quá trình thiết kế (Design Process)** (`content/05_qua_trinh_thiet_ke.tex`): 5.1 Information Architecture, 5.2 User Flow, 5.3 Ideation, 5.4 Storyboards, 5.5 Wireframes, 5.6 Design Alternatives.
- **Chương 6. Thiết kế Prototype (Prototype Design)** (`content/06_thiet_ke_prototype.tex`): 6.1 Prototype Overview, 6.2 Prototype Screens, 6.3 Interaction Design, 6.4 Design Rationale.
- **Chương 7. Đánh giá thiết kế (Design Evaluation)** (`content/07_danh_gia_thiet_ke.tex`): 7.1 Evaluation Objectives, 7.2 Evaluation Method, 7.3 Participants, 7.4 Tasks, 7.5 Metrics, 7.6 Procedure, 7.7 Results, 7.8 Discussion.
- **Chương 8. Thiết kế cuối cùng (Final Design)** (`content/08_thiet_ke_cuoi_cung.tex`): 8.1 Final Prototype, 8.2 Key Design Improvements, 8.3 Before vs. After.
- **Chương 9. Kết luận (Conclusion)** (`content/09_ket_luan.tex`): 9.1 Summary, 9.2 Contributions, 9.3 Limitations, 9.4 Future Work.
- **Tài liệu tham khảo (References)** (`ref/ref.tex`, `ref/ref.bib`) & **Phụ lục (Appendix)** (`ref/appendix.tex`).

## Workflow

1. Đọc và tải cấu trúc template báo cáo LaTeX trong `templates/latex/sample/` (`main.tex`, `content/`, `ref/`), lập ma trận phần báo cáo → evidence.
2. Viết/cập nhật từng chương báo cáo LaTeX theo đúng cấu trúc và cú pháp của template.
3. Tự động chạy build PDF qua Docker (`ghcr.io/tinnguyen0706/latex-times-new-roman:latest` + `latexmk -xelatex`) theo đúng công thức `.vscode/settings.json` ngay sau khi có thay đổi trong source báo cáo.
4. Kiểm tra mọi claim, hình, bảng, link và thuật ngữ; kiểm tra file PDF đã render trong thư mục `build/`.
5. Đối chiếu format, title, độ dài và danh mục yêu cầu hiện hành.
6. Ghi version, gap và human sign-off còn thiếu.
