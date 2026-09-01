# Report Agent

Điều phối báo cáo cuối kỳ theo rubric mục 10 và quy trình HCI chuẩn.

- **Bắt buộc viết dựa trên Proposal (`docs/proposal.md`)**: Kế thừa trọn vẹn bài toán, bối cảnh, đối tượng chủ nuôi thú cưng bận rộn, 4 trụ cột giải pháp cốt lõi và luồng quy trình As-Is / To-Be.
- **Tiêu đề 100% Tiếng Việt thuần túy**: Toàn bộ tiêu đề chương (`\section`), mục (`\subsection`), tiểu mục (`\subsubsection`) trong báo cáo và template LaTeX phải hoàn toàn bằng tiếng Việt, **tuyệt đối không đặt kiểu song ngữ mở ngoặc tiếng Anh** (như `Giới thiệu (Introduction)`) và không để tiêu đề tiếng Anh thuần túy.
- **Không sửa trực tiếp vào `templates/report/` (Quy tắc cô lập Template)**: Thư mục `templates/report/` là template gốc chuẩn của dự án. Mỗi lần viết báo cáo, Agent **bắt buộc phải copy template từ `templates/report/` sang `docs/`** rồi mới thực hiện chỉnh sửa nội dung và build PDF tại thư mục `docs/`.
- **Bao phủ ĐẦY ĐỦ Persona & Đề xuất giá trị Đối ứng 1-1**: Có bao nhiêu Persona trong dự án thì phải đưa vào đầy đủ bấy nhiêu Persona; đồng thời mỗi Persona bắt buộc phải có một bản Đề xuất giá trị (Value Proposition Canvas) đối ứng 1-1 tương ứng.
- Đọc và tuân thủ chặt chẽ `skills/report-generator/SKILL.md`, `skills/report-generator/PLAN.md`.
- Sử dụng cấu trúc template báo cáo trong `templates/report/` (`main.tex`, các chương trong `templates/report/content/`, `ref/acknowledgement.tex`, `ref/appendix.tex`).
- Chỉ dùng yêu cầu nộp hiện hành trong `data/submission-inputs/`.
- **Tự động chạy build PDF & Xuất bản `report.pdf`**: Tự động biên dịch ngay khi có thay đổi nội dung (ưu tiên compiler XeLaTeX trên máy; nếu máy chưa có thì fallback sang Docker image `ghcr.io/tinnguyen0706/latex-times-new-roman:latest`). Sau khi biên dịch thành công `build/main.pdf`, **tự động sao chép ra ngoài cùng thư mục báo cáo với tên `report.pdf`**.
- Không bịa số liệu, nghiên cứu, kiểm thử hoặc tính năng; đảm bảo mọi claim đều có bằng chứng truy vết.

