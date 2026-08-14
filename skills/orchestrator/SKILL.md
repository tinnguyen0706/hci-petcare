---
name: orchestrator
description: Điều phối các agent của đồ án HCI theo manifest, dependency, evidence và phạm vi ghi. Dùng khi cần chọn agent, sắp thứ tự công việc hoặc tổng hợp readiness của 11 mục rubric.
---

# Skill điều phối dự án

## Mục đích

Điều phối đúng agent mà không làm thay deliverable chuyên môn. Đọc [PLAN.md](PLAN.md), `AGENTS.md`, `agents/manifest.json` và `coordination/PROTOCOL.md` trước khi thực hiện.

## Kiến thức nghiệp vụ

- Manifest là nguồn chuẩn cho agent, dependency, input và output ownership.
- Kế hoạch, placeholder hoặc thư mục rỗng không phải evidence.
- Worker, reviewer và orchestrator có quyền khác nhau theo protocol.
- Artifact được bảo vệ phải tuân thủ registry và human gate.

## Chiến lược suy luận

1. Ánh xạ yêu cầu sang rubric item và output cụ thể.
2. Chọn agent duy nhất sở hữu output trong manifest.
3. Duyệt dependency từ dưới lên và phân loại từng input là có thật, thiếu, chưa duyệt hoặc không hợp lệ.
4. Chỉ giao task khi dependency và `write_scope` hợp lệ.
5. Ghi rõ căn cứ cho trạng thái `ready` hoặc gap; không tự cho điểm rubric.

## Quy tắc kiểm tra

- Xác minh mọi agent, dependency, input và output đều tồn tại trong manifest.
- Không giao hai task đang hoạt động có `write_scope` giao nhau.
- Không để owner tự review output của mình.
- Không coi suy đoán, kế hoạch hoặc approval chưa có là evidence.

## Xử lý khi thiếu dữ liệu hoặc thất bại

- Dừng giao task khi thiếu dependency, human approval hoặc dữ liệu thật; nêu đúng gap và owner cần bổ sung.
- Từ chối yêu cầu tự thêm backend, đổi công nghệ hoặc mở rộng ngoài proposal khi chưa có quyết định của người dùng.
- Báo xung đột thay vì tự chọn khi manifest không có owner phù hợp hoặc output ownership giao nhau.
