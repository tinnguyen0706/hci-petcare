# Handoff: TASK-KNOW-001

## Thay đổi

- Tạo 13 ghi chú Markdown tiếng Việt tương ứng 8 PDF bài giảng, 3 PDF hướng dẫn và 2 XLSX rubric; mỗi ghi chú có metadata truy vết, phạm vi áp dụng và nội dung có thể hành động.
- Cập nhật mục lục `references/README.md` đủ 13 nguồn cùng Markdown companion, loại nguồn và phạm vi áp dụng.
- Giới hạn ignore cho PDF/XLSX/DOCX/PPTX trong `references/`, không ảnh hưởng `docs/proposal.pdf` đang được theo dõi.
- Phân biệt yêu cầu chính thức trong guide/rubric với kiến thức tham khảo từ bài giảng; không tự cho điểm hoặc tạo dữ liệu nghiên cứu.

## Tệp đã sửa

- `.gitignore`
- `references/README.md`
- `references/course-materials/notes/*.md` (8 tệp)
- `references/project-guidelines/notes/*.md` (5 tệp)
- `coordination/tasks/TASK-KNOW-001.yml`
- `coordination/handoffs/TASK-KNOW-001.md`

## Nguồn tham khảo đã ảnh hưởng

- `docs/proposal.md` và `docs/final-rubric.csv`: giữ phạm vi nghiệp vụ, cấu trúc proposal và 11 tiêu chí chuẩn của repository.
- `rules/assessment-rules.md`, `rules/domain-rules.md`, `rules/quality-rules.md`, `rules/style-rules.md`, `rules/task-rules.md`: ranh giới nguồn chuẩn, chống bịa dữ liệu và yêu cầu handoff.
- `references/course-materials/lectures/*.pdf` (8 tệp): nội dung kiến thức HCI trong các ghi chú bài giảng.
- `references/project-guidelines/original/*.pdf` (3 tệp) và `references/project-guidelines/original/*.xlsx` (2 tệp): yêu cầu đồ án, công cụ và rubric trong các ghi chú hướng dẫn.

## Kiểm thử

- Lệnh: `scripts/coordination/validate-task coordination/tasks/TASK-KNOW-001.yml`
- Kết quả: `OK: coordination/tasks/TASK-KNOW-001.yml`.
- Lệnh: `git diff --check`
- Kết quả: thành công, không có lỗi whitespace.
- Lệnh: kiểm đếm `find`/`rg` đối với notes, mục lục và metadata.
- Kết quả: đủ 13 ghi chú, 13 dòng mục lục và 13 metadata `Tệp gốc`.
- Lệnh: `git check-ignore -v` cho một PDF và một XLSX trong `references/`; `git ls-files docs/proposal.pdf`.
- Kết quả: nhị phân trong `references/` khớp quy tắc ignore; `docs/proposal.pdf` vẫn được theo dõi.

## Vấn đề còn lại

- Một số slide scenario/sketching/storyboard chủ yếu là hình ảnh và ít chữ trích xuất; ghi chú đã nêu giới hạn và không suy diễn nội dung hình không rõ.

## Commit

- SHA: `1e34e88a06b46055d0e273302750d527c66bc231`

## Review

- Kết luận: `pending`
- Ghi chú: chưa review.
