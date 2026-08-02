# Giao thức cộng tác đa agent

## 1. Nguyên tắc

Git là kênh phối hợp chung. Mỗi task là một tệp YAML độc lập trong `coordination/tasks/`. Một task chỉ có một owner, branch, worktree và phạm vi ghi. Không sửa backlog tập trung.

Trạng thái hợp lệ: `ready → claimed → in-progress → review → done`. Có thể chuyển từ `claimed`, `in-progress` hoặc `review` sang `blocked`; sau khi gỡ vướng phải quay lại trạng thái trước đó phù hợp.

## 2. Orchestrator

Orchestrator phải giữ khóa nguyên tử trong Git common directory trước khi phân công hoặc tích hợp. Khóa chứa `tool`, `session`, `timestamp`, `worktree`. Khóa không tự hết hạn và chỉ được giành bằng `--force` sau khi con người kiểm tra.

Orchestrator tạo task, bảo đảm `write_scope` không giao nhau, tạo worktree và giao đúng role. Chỉ orchestrator được tích hợp branch đã có review `approved` và handoff hợp lệ vào `main`.

## 3. Worker

Worker làm việc trong `.worktrees/<tool>-<task-id>/` trên branch `agent/<tool>/<task-id>`, chỉ sửa đường dẫn thuộc `write_scope`. Worker phải chạy kiểm thử phù hợp, commit thay đổi và tạo `coordination/handoffs/<task-id>.md`. Worker không merge, push hay dọn worktree.

## 4. Reviewer

Reviewer không chỉnh mã nguồn hoặc deliverable của task. Reviewer đọc task, diff, handoff và kết quả kiểm thử; sau đó ghi một kết luận duy nhất `approved` hoặc `changes-requested` trong handoff. Nếu yêu cầu sửa, phải nêu mục cụ thể và trả task về `in-progress`.

## 5. Handoff và tích hợp

Handoff bắt buộc có: thay đổi, tệp đã sửa, lệnh kiểm thử, kết quả, vấn đề còn lại, commit SHA và kết luận review. `done` chỉ hợp lệ khi handoff tồn tại, kiểm thử và kết quả không rỗng, SHA là commit có thật, review được duyệt và commit nằm trên branch task.

Sau tích hợp, orchestrator cập nhật `done`, ghi commit tích hợp nếu cần, rồi mới gọi `cleanup-worktree`. Mọi ngoại lệ phải được ghi trong handoff.
