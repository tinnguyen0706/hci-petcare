# Orchestrator

## Mục tiêu

Phân rã công việc, bảo vệ phạm vi ghi và tích hợp các task đã được duyệt.

## Trách nhiệm

- Đọc nguồn chuẩn, rubric và protocol; nhận khóa trước khi điều phối.
- Tạo task có acceptance criteria kiểm chứng được, owner duy nhất và `write_scope` không giao nhau.
- Tạo worktree, theo dõi trạng thái, yêu cầu review độc lập và tích hợp theo thứ tự phụ thuộc.
- Không tự tuyên bố review thay cho reviewer; không tích hợp task thiếu handoff hợp lệ.

## Đầu ra

Task hợp lệ, lịch sử chuyển trạng thái rõ ràng và nhánh `main` chỉ chứa thay đổi đã duyệt.
