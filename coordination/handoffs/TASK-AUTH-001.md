# Handoff: TASK-AUTH-001

## Thay đổi

- Thêm registry tự parse cho 14 artifact được bảo vệ, gồm `AGENTS.md`, bốn `SKILL.md`, bốn `PLAN.md` dự kiến và năm rule Markdown; tất cả khởi tạo ở `needs-interview`.
- Chặn task agent dùng scope rộng, artifact chưa đăng ký, hoặc artifact không ở `agent-draft`; giữ task lịch sử `done` hợp lệ.
- Kiểm tra diff thật trước tích hợp: đường dẫn ngoài scope, xóa/đổi tên artifact, thiếu exact scope, sai trạng thái trên `main`, và branch tự đổi registry đều bị từ chối.
- Chỉ cho registry tiến một bước; sau merge, công cụ tích hợp chuyển artifact vừa sửa sang `human-editing` để orchestrator commit metadata riêng.
- Mở rộng smoke test cho luồng legacy, exact draft hợp lệ và các trường hợp từ chối theo acceptance criteria.
- Sau changes-requested, giữ scope thư mục không liên quan như `x/`, `src/`, `deliverables/` hợp lệ; chỉ buộc exact-file khi task nhắm tới/vùng scope bao phủ artifact được bảo vệ. Cổng tích hợp từ chối `x/PLAN.md` chưa đăng ký.
- Sửa bốn đường dẫn PLAN dự kiến để mỗi PLAN nằm cùng thư mục với SKILL tương ứng tại `.agents/skills/<skill>/PLAN.md`.

## Tệp đã sửa

- `coordination/PROTOCOL.md`
- `coordination/human-artifacts.yml`
- `scripts/coordination/tasklib.py`
- `scripts/coordination/integrate-task`
- `tests/coordination-smoke.sh`
- `coordination/tasks/TASK-AUTH-001.yml`
- `coordination/handoffs/TASK-AUTH-001.md`

## Nguồn tham khảo đã ảnh hưởng

- `references/project-guidelines/notes/guide-opencode.md`: tách agent/skill/rule/template và duy trì vòng build–tự kiểm chứng–sửa–kiểm chứng lại.
- `coordination/PROTOCOL.md`, `agents/roles/software-implementer.md`, `.agents/skills/build-prototype/SKILL.md`: giới hạn `write_scope`, kiểm thử, commit và handoff; không merge, push hoặc dọn worktree.

## Kiểm thử

- Lệnh: `tests/coordination-smoke.sh`
- Kết quả: `Coordination smoke test: OK`; bốn task legacy hợp lệ, luồng tích hợp cũ hoàn tất, exact draft được chấp nhận, và các ca human-editing/locked/unregistered/broad scope/diff ngoài quyền/backward/skip đều bị từ chối như dự kiến.
- Lệnh: `scripts/coordination/validate-task coordination/tasks/TASK-AUTH-001.yml`
- Kết quả: `OK` ở trạng thái `in-progress` trước commit implementation.
- Lệnh: `python3 -m py_compile scripts/coordination/tasklib.py`
- Kết quả: hoàn tất không lỗi cú pháp.
- Lệnh: `git diff --check`
- Kết quả: không có lỗi whitespace.
- Lệnh sau changes-requested: `tests/coordination-smoke.sh`; `scripts/coordination/validate-task coordination/tasks/TASK-AUTH-001.yml`; `python3 -m py_compile scripts/coordination/tasklib.py`; `git diff --check`.
- Kết quả: tất cả đạt; smoke xác nhận task active với `x/` hợp lệ nhưng branch tạo `x/PLAN.md` chưa đăng ký bị chặn tại integration.

## Vấn đề còn lại

- Không có. Reviewer cần kiểm tra độc lập; worker không tự review hoặc tích hợp.

## Commit

- SHA implementation ban đầu: `3a4c8e4670e607d7ebab968e2f5940d7640691c0`
- SHA: `3f40eb65f987680fb9f9d31ed92ec97628ad051b`

## Review

- Kết luận: `pending`
- Ghi chú: đã xử lý changes-requested tại commit `3f40eb65f987680fb9f9d31ed92ec97628ad051b`; chờ reviewer kiểm tra độc lập lại.
