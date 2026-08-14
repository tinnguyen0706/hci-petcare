# Điều phối dự án HCI

## Mục đích

Định tuyến yêu cầu tới đúng agent, kiểm tra dependency và tổng hợp mức sẵn sàng của 11 deliverable trong rubric.

## Dùng skill này khi

- Cần xác định agent nào sở hữu một output hoặc rubric item.
- Cần lập thứ tự thực hiện theo dependency.
- Cần tổng hợp readiness, gap hoặc quyết định con người còn thiếu.

## Input bắt buộc

- `agents/manifest.json`.
- `docs/proposal.md` và `docs/final-rubric.csv`.
- Artifact thật trong `data/`, `deliverables/`, `coordination/tasks/` và `coordination/handoffs/` khi có liên quan.

## Output

- Task phù hợp trong `coordination/tasks/` khi cần giao việc.
- Handoff trong `coordination/handoffs/` khi task hoàn tất.
- Báo cáo ngắn nêu agent phụ trách, dependency, gap và hành động kế tiếp.

## Workflow

1. Xác định rubric item và output đích từ yêu cầu.
2. Tra manifest để chọn agent sở hữu output.
3. Kiểm tra từng dependency bằng artifact thật và trạng thái chấp nhận.
4. Tạo task có owner, branch, worktree và `write_scope` không giao nhau.
5. Điều phối theo chuỗi Research → Interaction Design → Prototype/Wireframe → Software → Final submission.
6. Giao reviewer không sở hữu artifact kiểm tra ở chế độ chỉ đọc.
7. Tổng hợp kết quả, gap và human gate còn thiếu.
