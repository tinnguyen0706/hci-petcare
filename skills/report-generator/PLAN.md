# Soạn báo cáo cuối kỳ

## Mục đích

Tổng hợp toàn bộ quá trình nghiên cứu và thiết kế dựa trên Proposal đã duyệt, user research, requirements, existing system analysis, design artifacts, prototype, evaluation results và evidence thành báo cáo tự chứa, đúng format chuẩn môn học và có claim truy vết được.

## Dùng skill này khi

- Cần soạn, cập nhật hoặc hoàn thiện báo cáo cuối kỳ HCI/UX.
- Báo cáo phải bắt buộc viết dựa trên Proposal (`docs/proposal.md`) và tuân thủ tiêu đề 100% tiếng Việt (không mở ngoặc tiếng Anh).
- **Quy tắc cô lập template**: Mỗi lần viết báo cáo, bắt buộc sao chép template từ `templates/report/` sang `docs/` rồi mới làm; **tuyệt đối KHÔNG sửa trực tiếp vào thư mục `templates/report/`**.
- **Quy tắc Persona & Value Proposition**: Có bao nhiêu Persona phải đưa vào **ĐẦY ĐỦ HẾT** và tương ứng có bao nhiêu Persona thì phải có **bấy nhiêu bản Đề xuất giá trị (Value Proposition Canvas) đối ứng 1-1**.
- Các deliverable 1–8 đã duyệt và có evidence kiểm thử thực tế.
- Cần đối chiếu format, cấu trúc và tiêu chuẩn rubric submission.

## Input bắt buộc

- **Tài liệu Proposal (`docs/proposal.md`) — Căn cứ nền tảng bắt buộc số 1**: Kế thừa toàn bộ bài toán, đối tượng chủ nuôi bận rộn, điểm đau quy trình cũ, 4 trụ cột giải pháp cốt lõi và luồng quy trình As-Is / To-Be.
- `deliverables/01-user-research/` (đầy đủ các Persona tại `persona/` và Value Proposition Canvas tương ứng tại `value-proposition/`).
- `deliverables/02-interaction-design/`.
- Yêu cầu hiện hành trong `data/submission-inputs/`.
- Template báo cáo LaTeX trong `templates/report/` (dùng để copy sang `docs/` làm việc), hướng dẫn build trong `templates/report/README.md` và rubric chấm điểm.

## Output

Thư mục làm việc tại `docs/` (và đóng gói nộp tại `deliverables/04-final-submission/report/`) gồm:
- Source LaTeX hoàn chỉnh (`main.tex`, `content/`, `ref/`, `title/`, `style.sty`).
- Thư mục hình ảnh / bảng biểu minh họa.
- File PDF biên dịch tạm thời trong `build/main.pdf`.
- **File PDF hoàn tất cuối cùng `report.pdf`** được tự động sao chép ra ngoài cùng thư mục báo cáo trong `docs/` (ngang cấp với `main.tex`).

## Cấu trúc 9 chương chuẩn HCI (100% Tiếng Việt, Tuyệt đối không mở ngoặc Tiếng Anh)

- **Chương 1. Giới thiệu** (`content/01_gioi_thieu.tex`): 1.1 Bối cảnh đề tài, 1.2 Phát biểu bài toán, 1.3 Mục tiêu đề tài, 1.4 Phạm vi đề tài.
- **Chương 2. Nghiên cứu người dùng** (`content/02_nghien_cuu_nguoi_dung.tex`): 2.1 Đối tượng người dùng mục tiêu, 2.2 Phương pháp nghiên cứu, 2.3 Kết quả nghiên cứu, 2.4 Nhu cầu và điểm đau của người dùng, 2.5 Chân dung người dùng (đầy đủ tất cả Persona), 2.6 Đề xuất giá trị (đối ứng 1-1 với từng Persona).

- **Chương 3. Yêu cầu và mục tiêu thiết kế** (`content/03_yeu_cau_muc_tieu.tex`): 3.1 Yêu cầu người dùng, 3.2 Mục tiêu trải nghiệm người dùng, 3.3 Mục tiêu thiết kế.
- **Chương 4. Phân tích hệ thống và trải nghiệm hiện tại** (`content/04_phan_tich_hien_tai.tex`): 4.1 Hệ thống và quy trình hiện tại, 4.2 Phân tích tác vụ, 4.3 Luồng người dùng và quy trình tác vụ, 4.4 Các vấn đề về trải nghiệm người dùng.
- **Chương 5. Quá trình thiết kế** (`content/05_qua_trinh_thiet_ke.tex`): 5.1 Kiến trúc thông tin, 5.2 Luồng thao tác người dùng, 5.3 Phác thảo và phát triển ý tưởng, 5.4 Bảng phân cảnh, 5.5 Khung giao diện, 5.6 Các phương án thiết kế.
- **Chương 6. Thiết kế bản mẫu tương tác** (`content/06_thiet_ke_prototype.tex`): 6.1 Tổng quan bản mẫu, 6.2 Các màn hình bản mẫu, 6.3 Thiết kế tương tác, 6.4 Lý giải thiết kế.
- **Chương 7. Đánh giá thiết kế** (`content/07_danh_gia_thiet_ke.tex`): 7.1 Mục tiêu đánh giá, 7.2 Phương pháp đánh giá, 7.3 Người tham gia đánh giá, 7.4 Tác vụ kiểm thử, 7.5 Chỉ số đo lường, 7.6 Quy trình đánh giá, 7.7 Kết quả đánh giá, 7.8 Thảo luận và phân tích.
- **Chương 8. Thiết kế cuối cùng** (`content/08_thiet_ke_cuoi_cung.tex`): 8.1 Bản mẫu hoàn thiện, 8.2 Các cải tiến thiết kế then chốt, 8.3 So sánh trước và sau cải tiến.
- **Chương 9. Kết luận** (`content/09_ket_luan.tex`): 9.1 Tổng kết đề tài, 9.2 Đóng góp của đề tài, 9.3 Hạn chế của đề tài, 9.4 Hướng phát triển tương lai.
- **Lời cảm ơn** (`ref/acknowledgement.tex`), **Tài liệu tham khảo** (`ref/ref.tex`, `ref/ref.bib`) & **Phụ lục** (`ref/appendix.tex`).

## Workflow

1. **Khởi tạo & Cô lập Template**: Tuyệt đối KHÔNG sửa trực tiếp vào `templates/report/`. Mỗi lần viết báo cáo, sao chép toàn bộ template từ `templates/report/` sang `docs/`.
2. **Nghiên cứu Proposal & Lập ma trận**: Đọc kỹ Proposal (`docs/proposal.md`) và ma trận phần báo cáo → evidence đã duyệt.
3. **Soạn thảo nội dung**: Viết/cập nhật từng chương báo cáo LaTeX trong `docs/` theo đúng cấu trúc tiếng Việt chuẩn mực; đảm bảo 100% tiêu đề là tiếng Việt thuần túy, không mở ngoặc tiếng Anh.
4. **Tự động build PDF**: Chạy build PDF ngay khi có thay đổi (ưu tiên XeLaTeX trên máy, fallback Docker).
5. **Xuất bản `report.pdf`**: Sau khi biên dịch thành công `build/main.pdf`, tự động sao chép ra ngoài cùng thư mục `docs/` và đổi tên thành `report.pdf`.
6. **Kiểm thử chất lượng**: Kiểm tra mọi claim, hình, bảng, link, thuật ngữ, tính nhất quán với Proposal và kiểm tra trực quan file `docs/report.pdf`.
7. **Nghiệm thu**: Đối chiếu checklist submission và ghi nhận trạng thái báo cáo (DRAFT / REVIEW-READY / SUBMISSION-READY).


