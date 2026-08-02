# Handoff: TASK-LIFE-001

## Thay đổi

- Chuyển đúng năm artifact từ `needs-interview` sang `agent-draft`: `.agents/skills/research-users/PLAN.md`, `.agents/skills/research-users/SKILL.md`, `rules/domain-rules.md`, `rules/quality-rules.md` và `rules/assessment-rules.md`.
- Giữ nguyên trạng thái của `AGENTS.md` và toàn bộ artifact còn lại; không sửa nội dung protected artifact.
- Ghi nhận các quyết định phỏng vấn làm đầu vào cho task soạn thảo tiếp theo.

## Quyết định đã ghi nhận

### Phạm vi và tiến độ nghiên cứu

1. `PLAN.md` phải bao trọn hành trình từ chuẩn bị nghiên cứu, thực hiện đủ năm phiên, synthesis, đến tạo persona, Value Proposition Canvas và scenario hiện tại.
2. Đoạn tiến độ thứ nhất phải làm rõ khâu chuẩn bị và điều kiện sẵn sàng trước khi tiếp xúc participant.
3. Đoạn tiến độ thứ hai phải làm rõ việc hoàn tất lần lượt đủ năm phiên; đoạn thứ ba phải làm rõ synthesis; đoạn thứ tư phải làm rõ việc chuyển insight thành persona, Value Proposition Canvas và scenario hiện tại.
4. Agent được phân tích dữ liệu đã ẩn danh để hỗ trợ synthesis và tạo artifact; con người phải duyệt kết quả trước khi xem là đầu ra nghiên cứu được chấp nhận.

### Chính sách dữ liệu, Git và consent

- Repository có thể public, nhưng Git chỉ được chứa Markdown đã ẩn danh cho transcript sạch, evidence, synthesis và artifact; mỗi transcript sạch chỉ ghi consent ở dạng `Có` hoặc `Không`.
- Cấm đưa vào Git mọi identifier, bảng ánh xạ danh tính, chữ ký, media và dữ liệu nhạy cảm. Participant phải được thông báo rõ repository có thể public trước khi đồng ý tham gia.
- Khi participant rút consent, loại dữ liệu liên quan khỏi current tree và chạy lại synthesis cùng các artifact phụ thuộc; không hứa xóa được lịch sử Git đã tồn tại.
- Media phải nằm ngoài Git và chỉ được thu hoặc lưu khi có consent riêng cho media.

## Tệp đã sửa

- `coordination/human-artifacts.yml`
- `coordination/tasks/TASK-LIFE-001.yml`
- `coordination/handoffs/TASK-LIFE-001.md`

## Kiểm thử

- Lệnh: validator chuyển registry bằng `validate_registry_transition` trên bản `main` và worktree.
- Kết quả: `OK`; đúng năm mục chuyển một bước `needs-interview → agent-draft`.
- Lệnh: `python scripts/coordination/tasklib.py coordination/tasks/TASK-LIFE-001.yml`.
- Kết quả: `OK` ở cả trạng thái `in-progress` và `review`.
- Lệnh: `python scripts/coordination/tasklib.py --validate-integration coordination/tasks/TASK-LIFE-001.yml main HEAD`.
- Kết quả: đạt trên commit review-ready; diff thật chỉ gồm ba tệp thuộc `write_scope`.
- Lệnh: `git diff --check` và `git diff --name-only main...HEAD`.
- Kết quả: không có lỗi whitespace; diff `main...HEAD` chỉ có ba tệp metadata/handoff trong `write_scope` và không sửa protected artifact.

## Tài liệu đã ảnh hưởng

- `AGENTS.md`: lifecycle artifact được bảo vệ và giới hạn quyền worker.
- `coordination/PROTOCOL.md`: state machine của task, yêu cầu registry, handoff, review và integration gate.
- `references/README.md`: định tuyến nguồn; task metadata này không cần dùng thêm bài giảng vì không tạo nội dung nghiên cứu.
- `agents/roles/orchestrator.md`: trách nhiệm ghi nhận quyết định người dùng và chuẩn bị task hợp lệ.
- `.agents/skills/research-users/SKILL.md`: phạm vi nghiên cứu người dùng và nguyên tắc chỉ dùng dữ liệu thực.

## Vấn đề còn lại

- Năm artifact đang ở `agent-draft` để task soạn thảo riêng thực hiện; task này không sửa nội dung của chúng.

## Commit

- SHA: `666f2b62b9e2faa1906422a5efe31349fe03e3cc`

## Review

- Kết luận: `approved`
- Ghi chú: Review độc lập xác nhận diff `main...agent/codex/TASK-LIFE-001` chỉ gồm ba tệp nằm trong `write_scope`. Registry chuyển đúng năm artifact `.agents/skills/research-users/PLAN.md`, `.agents/skills/research-users/SKILL.md`, `rules/domain-rules.md`, `rules/quality-rules.md` và `rules/assessment-rules.md` từ `needs-interview` sang `agent-draft`; `AGENTS.md`, các artifact còn lại và nội dung protected artifact không đổi. Handoff ghi đầy đủ quyết định về phạm vi/tiến độ nghiên cứu, quyền agent phân tích dữ liệu đã ẩn danh với duyệt của con người, chính sách repository có thể public, consent, dữ liệu cấm đưa vào Git, rút consent và media ngoài Git. `tasklib.py` validate task, validator registry transition, cổng `--validate-integration`, kiểm tra SHA/ancestry và `git diff --check` đều đạt. Wrapper Bash `scripts/coordination/validate-task` không khởi chạy được trong môi trường Windows do `Bash/Service/CreateInstance/E_ACCESSDENIED`; cùng logic validator đã được chạy trực tiếp bằng Python và trả `OK`.
