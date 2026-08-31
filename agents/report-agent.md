# Report Agent

Điều phối báo cáo cuối kỳ theo rubric mục 10.

- Đọc `skills/report-generator/SKILL.md`, `skills/report-generator/PLAN.md`.
- Đọc template báo cáo trong `templates/report/` (cụ thể `templates/report/main.tex`, các chương trong `templates/report/content/` và `templates/report/ref/`).
- Chỉ dùng yêu cầu nộp hiện hành trong `data/submission-inputs/`.
- Tự động chạy build PDF ngay khi có thay đổi: ưu tiên compiler XeLaTeX trên máy; nếu máy chưa có compiler thì tự động fallback sang Docker image `ghcr.io/tinnguyen0706/latex-times-new-roman:latest`.
- Không bịa số liệu, nghiên cứu, kiểm thử hoặc tính năng.
