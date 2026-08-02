# Thư viện tài liệu tham khảo

Thư mục này lưu hướng dẫn đồ án và kiến thức môn học hỗ trợ quá trình thực hiện. Đây là **nguồn tham khảo**; phạm vi nghiệp vụ và tiêu chí đánh giá chính thức vẫn được xác định bởi `docs/proposal.md` và `docs/final-rubric.csv`.

## Cấu trúc

- `project-guidelines/original/`: tài liệu hướng dẫn đồ án nguyên bản từ giảng viên hoặc môn học.
- `project-guidelines/notes/`: bản tóm tắt, chuyển đổi sang Markdown hoặc ghi chú về hướng dẫn đồ án.
- `course-materials/lectures/`: slide, bài đọc và tài liệu kiến thức theo buổi học.
- `course-materials/notes/`: ghi chú và nội dung tổng hợp kiến thức môn học.

## Mục lục tài liệu

Khi thêm tài liệu, bổ sung một dòng vào bảng sau để agent xác định nội dung cần đọc. Không ghi thông tin chưa được kiểm chứng.

| Tên tài liệu | Đường dẫn | Loại | Nguồn | Phạm vi áp dụng |
|---|---|---|---|---|
| Giới thiệu môn học CSC12106 | `course-materials/lectures/00_Welcome_23HTTT.pdf` · [Markdown](course-materials/notes/00-welcome-23httt.md) | Bài giảng | CSC12106, Lê Thị Nhàn | Mục tiêu môn, phạm vi đồ án và thông tin tổ chức lớp |
| Nhập môn HCI | `course-materials/lectures/01_Introduction.pdf` · [Markdown](course-materials/notes/01-introduction.md) | Bài giảng | CSC12106, Lê Thị Nhàn | Khái niệm HCI, interaction design, UI/UX và HCI trong hệ thống thông tin |
| Nền tảng HCI | `course-materials/lectures/02_Foundation.pdf` · [Markdown](course-materials/notes/02-foundation.md) | Bài giảng | CSC12106, Lê Thị Nhàn | Thiết bị tương tác, nhận thức, trí nhớ, lỗi và mô hình tương tác |
| Tổng quan quy trình thiết kế | `course-materials/lectures/03_DesignProcess_Overview.pdf` · [Markdown](course-materials/notes/03-design-process-overview.md) | Bài giảng | CSC12106, Lê Thị Nhàn | Thiết kế lặp, nguyên lý usability và heuristic |
| Kỹ thuật khám phá người dùng | `course-materials/lectures/04_UserDiscovery_Technique.pdf` · [Markdown](course-materials/notes/04-user-discovery-technique.md) | Bài giảng | CSC12106, Lê Thị Nhàn | Chọn người dùng, hỏi, quan sát, ethnography, shadowing và think-aloud |
| Persona và Value Proposition | `course-materials/lectures/05_UserDiscovery_Persona_ValueProposition.pdf` · [Markdown](course-materials/notes/05-persona-value-proposition.md) | Bài giảng | CSC12106, Lê Thị Nhàn | Persona dựa trên nghiên cứu và Value Proposition Canvas |
| Scenario và Sketching | `course-materials/lectures/06_Conception_Scenario_Sketching.pdf` · [Markdown](course-materials/notes/06-scenario-sketching.md) | Bài giảng | CSC12106, Lê Thị Nhàn | Scenario hiện tại/tương lai, mô hình nhiệm vụ và phác thảo giải pháp |
| Storyboard | `course-materials/lectures/07_Conception_Storyboard.pdf` · [Markdown](course-materials/notes/07-storyboard.md) | Bài giảng | CSC12106, Lê Thị Nhàn | Storyboard, context of use, UI/usability/UX |
| Hướng dẫn đồ án 2026 | `project-guidelines/original/Guide4Project_2026.pdf` · [Markdown](project-guidelines/notes/guide-project-2026.md) | Hướng dẫn đồ án | CSC12106, Lê Thị Nhàn | Nhóm, đề tài, mốc nộp, proposal và phương pháp |
| Hướng dẫn OpenCode và vibecoding | `project-guidelines/original/Guide4Project_OpenCode.pdf` · [Markdown](project-guidelines/notes/guide-opencode.md) | Hướng dẫn công cụ | CSC12106, Lê Thị Nhàn | Agent/skill/rule/template/tool và vòng build–kiểm chứng |
| Hướng dẫn wireframe/mockup | `project-guidelines/original/Guide4Project_Wireframe.pdf` · [Markdown](project-guidelines/notes/guide-wireframe.md) | Hướng dẫn đồ án | CSC12106, Lê Thị Nhàn | Khảo sát, đánh giá và chọn công cụ wireframe/mockup |
| Rubric đồ án cuối kỳ | `project-guidelines/original/CSC12106_Rubric_Project_Final.xlsx` · [Markdown](project-guidelines/notes/rubric-project-final.md) | Rubric chính thức | CSC12106, Bộ môn Hệ thống Thông tin | 11 deliverable, trọng số và mức mô tả cuối kỳ |
| Rubric proposal giữa kỳ | `project-guidelines/original/CSC12106_Rubric_Project_Proposal.xlsx` · [Markdown](project-guidelines/notes/rubric-project-proposal.md) | Rubric chính thức | CSC12106, Bộ môn Hệ thống Thông tin | Vấn đề–Ý tưởng–Quy trình và trình bày proposal |

Nếu tài liệu có cả bản gốc và bản Markdown, liệt kê cả hai trên cùng một dòng và ưu tiên bản Markdown để tìm kiếm nội dung. Bản gốc được dùng để đối chiếu khi bản chuyển đổi thiếu hoặc không rõ nghĩa.

## Quy trình bắt buộc cho agent

Trước khi lập kế hoạch hoặc thực hiện một task, agent phải:

1. Đọc tệp mục lục này.
2. Xác định tài liệu có phạm vi áp dụng liên quan trực tiếp đến task.
3. Đọc đầy đủ các tài liệu liên quan, không chỉ dựa vào tên tệp hoặc bản tóm tắt.
4. Áp dụng yêu cầu, phương pháp và thuật ngữ phù hợp vào đầu ra của task.
5. Ghi đường dẫn tài liệu đã ảnh hưởng đến quyết định quan trọng trong task hoặc handoff.
6. Đối chiếu đầu ra với nguồn chuẩn trước khi hoàn tất.

Không cần đọc toàn bộ thư viện nếu mục lục cho thấy tài liệu không liên quan đến task hiện tại.

## Thứ tự ưu tiên

Khi có khác biệt, áp dụng theo thứ tự:

1. Yêu cầu hiện tại, rõ ràng của người dùng.
2. Nguồn chuẩn trong `docs/proposal.md` và `docs/final-rubric.csv`.
3. Hướng dẫn đồ án trong `project-guidelines/`.
4. Kiến thức môn học trong `course-materials/`.

Agent không được tự ý dùng tài liệu tham khảo để mở rộng phạm vi, thay đổi công nghệ hoặc ghi đè nguồn chuẩn. Nếu mâu thuẫn ảnh hưởng đến kết quả, agent phải nêu rõ nguồn và xin người dùng quyết định.

Kiến thức lý thuyết chỉ được dùng để lựa chọn phương pháp hoặc giải thích thiết kế; không được trình bày như dữ liệu người dùng, số liệu khảo sát, trích dẫn hay kết quả kiểm thử nếu chưa có bằng chứng tương ứng.

## Cách thêm tài liệu

1. Đặt bản gốc và ghi chú vào đúng thư mục.
2. Dùng tên tệp ngắn, có ý nghĩa; nên gồm chủ đề và tuần hoặc phiên bản khi cần.
3. Giữ nguyên thông tin nguồn, tác giả và thời điểm phát hành nếu có.
4. Cập nhật bảng mục lục và mô tả cụ thể phạm vi áp dụng.
5. Không commit tài liệu có bản quyền vào repository công khai nếu chưa có quyền phân phối; khi đó chỉ lưu ghi chú tự viết hoặc liên kết truy cập hợp lệ.
