# Giao thức cộng tác đa agent

## 1. Nguyên tắc

Git là kênh phối hợp chung. Mỗi task là một tệp YAML độc lập trong `coordination/tasks/`. Một task chỉ có một owner, branch, worktree và phạm vi ghi. Không sửa backlog tập trung.

Trạng thái hợp lệ: `ready → claimed → in-progress → review → done`. Có thể chuyển từ `claimed`, `in-progress` hoặc `review` sang `blocked`; sau khi gỡ vướng phải quay lại trạng thái trước đó phù hợp.

## 2. Orchestrator

Orchestrator phải giữ khóa nguyên tử trong Git common directory trước khi phân công hoặc tích hợp. Khóa chứa `tool`, `session`, `timestamp`, `worktree`. Khóa không tự hết hạn và chỉ được giành bằng `--force` sau khi con người kiểm tra.

Orchestrator tạo task, bảo đảm `write_scope` không giao nhau, tạo worktree và giao đúng role. Chỉ orchestrator được tích hợp branch đã có review `approved` và handoff hợp lệ vào `main`.

## 3. Worker

Worker làm việc trong `.worktrees/<tool>-<task-id>/` trên branch `agent/<tool>/<task-id>`, chỉ sửa đường dẫn thuộc `write_scope`. Worker phải chạy kiểm thử phù hợp, commit thay đổi và tạo `coordination/handoffs/<task-id>.md`. Worker không merge, push hay dọn worktree.

### Vòng đời artifact cần quyết định của con người

`coordination/human-artifacts.yml` là registry cho `AGENTS.md` ở gốc, mọi `PLAN.md`/`SKILL.md` (không phân biệt hoa thường), và mọi tệp Markdown bên dưới `rules/` hoặc `templates/`. Template Markdown phải được đăng ký trước khi được tạo. Vòng đời chỉ tiến theo thứ tự:

`needs-interview → agent-draft → human-editing → locked`

1. Orchestrator phỏng vấn người dùng khi artifact ở `needs-interview`, rồi ghi nhận rõ quyết định và chuyển sang `agent-draft`.
2. Task agent chỉ được khai báo đúng đường dẫn tệp trong `write_scope`; không được dùng scope thư mục hoặc ancestor. Agent tạo draft và gửi review trong khi registry vẫn là `agent-draft`.
3. Sau khi review được duyệt, orchestrator kiểm tra diff thật của branch, merge draft, rồi chuyển registry sang `human-editing` trong commit tích hợp riêng.
4. Ở `human-editing`, người dùng trực tiếp chỉnh nội dung. Agent chỉ được góp ý, không được sửa tệp.
5. Chỉ sau xác nhận rõ ràng của người dùng, orchestrator mới chuyển artifact sang `locked`. Không có thao tác mở khóa, chuyển lùi hoặc bỏ qua trạng thái.

Artifact được bảo vệ nhưng chưa đăng ký, thao tác xóa/đổi tên, scope rộng, hoặc branch tự đổi artifact khỏi `agent-draft` đều bị từ chối. Task cũ đã `done` vẫn là bằng chứng lịch sử hợp lệ khi trạng thái registry thay đổi về sau.

## 4. Reviewer

Reviewer không chỉnh mã nguồn hoặc deliverable của task. Reviewer đọc task, diff, handoff và kết quả kiểm thử; sau đó ghi một kết luận duy nhất `approved` hoặc `changes-requested` trong handoff. Nếu yêu cầu sửa, phải nêu mục cụ thể và trả task về `in-progress`.

## 5. Handoff và tích hợp

Handoff bắt buộc có: thay đổi, tệp đã sửa, lệnh kiểm thử, kết quả, vấn đề còn lại, commit SHA và kết luận review. `done` chỉ hợp lệ khi handoff tồn tại, kiểm thử và kết quả không rỗng, SHA là commit có thật, review được duyệt và commit nằm trên branch task.

Trước tích hợp, orchestrator phải kiểm tra diff thật giữa `main` và branch: mọi đường dẫn đều thuộc `write_scope`, và artifact được bảo vệ phải có đúng scope tệp và đang là `agent-draft` trên `main`. Sau tích hợp, orchestrator cập nhật `done`, chuyển các artifact vừa tích hợp sang `human-editing`, commit metadata tích hợp, rồi mới gọi `cleanup-worktree`. Mọi ngoại lệ phải được ghi trong handoff.
