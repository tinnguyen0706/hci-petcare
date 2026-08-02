# Handoff: TASK-REF-001

## Thay đổi

- Tạo thư viện `references/` để phân loại hướng dẫn đồ án và kiến thức môn học.
- Quy định quy trình đọc theo mục lục, áp dụng tài liệu liên quan và ưu tiên nguồn chuẩn.
- Cập nhật hướng dẫn chung để mọi agent sử dụng thư viện trước mỗi task.

## Tệp đã sửa

- `references/README.md`
- `references/project-guidelines/`
- `references/course-materials/`
- `AGENTS.md`
- `README.md`
- `coordination/tasks/TASK-REF-001.yml`

## Kiểm thử

- Lệnh: `scripts/coordination/validate-task coordination/tasks/TASK-REF-001.yml && git diff --check`
- Kết quả: task hợp lệ; diff không có lỗi khoảng trắng.
- Lệnh: `find references -maxdepth 4 -print | sort`
- Kết quả: đủ bốn thư mục đích và các tệp giữ thư mục sau khi clone.
- Lệnh: `rg -n "references/README.md|project-guidelines|course-materials|Thứ tự ưu tiên|Quy trình bắt buộc" AGENTS.md README.md references/README.md`
- Kết quả: hướng dẫn đọc, áp dụng, phân loại và ưu tiên nguồn xuất hiện tại các vị trí dự kiến.

## Vấn đề còn lại

- Cần reviewer độc lập ghi kết luận trước khi orchestrator tích hợp.

## Commit

- SHA: `be28a3e76babfc3cec072639b876fe0891e6a4a0`

## Review

- Kết luận: `approved`
- Ghi chú: Diff đáp ứng đủ bốn acceptance criteria: bốn thư mục đích được giữ bằng `.gitkeep`; `AGENTS.md` bắt buộc đọc mục lục, đọc và áp dụng tài liệu liên quan; `references/README.md` quy định rõ thứ tự ưu tiên nguồn chuẩn trước tài liệu tham khảo; `README.md` hướng dẫn thêm tài liệu và liên kết tới mục lục hợp lệ. Reviewer đã chạy lại `validate-task`, `git diff --check`, kiểm tra cấu trúc và truy vết nội dung; tất cả đều đạt. SHA `be28a3e76babfc3cec072639b876fe0891e6a4a0` tồn tại và nằm trên branch task; các tệp trong diff đều thuộc `write_scope`.
