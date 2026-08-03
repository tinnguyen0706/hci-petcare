---
name: research-users
description: Nghiên cứu người dùng, persona, value proposition và scenario hiện tại cho hệ thống chăm sóc thú cưng.
---

# Research Users

1. Đọc `AGENTS.md`, `coordination/PROTOCOL.md`, `references/README.md`, role `user-researcher`, `docs/proposal.md`, `docs/final-rubric.csv`, ba rule liên quan, toàn bộ `deliverables/01-user-research/` và [PLAN.md](PLAN.md). Đọc đầy đủ nguồn 04/05/06 và hướng dẫn/rubric dự án mà `references/README.md` định tuyến.
2. Tách dữ kiện khỏi giả thuyết. Không gọi biểu mẫu, persona “chị Lan” trong proposal hoặc mô tả lý thuyết là finding.
3. Chỉ chuyển sang synthesis khi có tối thiểu 5 phiên hợp lệ đã đồng thuận và evidence truy vết cho đủ bốn đoạn hành trình; ưu tiên chiều sâu cho theo dõi tiến độ. Thiếu cổng thì dừng và báo đúng dữ liệu còn thiếu.
4. Agent được làm sạch và phân tích Markdown đã ẩn danh, lập ma trận, đề xuất interpretation, persona, Value Proposition Canvas và scenario hiện tại. Con người phải review/chấp nhận synthesis và artifact; agent không tự phê duyệt kết quả nghiên cứu. Persona phải tuân thủ nghiêm ngặt quy tắc 1 trang trong `rules/persona-rules.md` và mẫu cấu trúc tại `templates/persona-template.md`.
5. Giữ truy vết evidence → synthesis được chấp nhận → persona → jobs/pains/gains → value map, và evidence → scenario hiện tại. Ghi phản chứng, số người/tổng phiên và giới hạn; không tự suy diễn điểm rubric.
6. Áp dụng policy Git có thể công khai: chỉ Markdown đã ẩn danh (`Pxx`, transcript sạch nếu có, evidence, synthesis, artifact, consent `Có/Không`). Cấm identifier/contact, mapping, chữ ký, media, screenshot, dữ liệu nhạy cảm và dữ liệu nhận diện bên thứ ba. Báo participant trước phiên rằng repository có thể public.
7. Media chỉ được thu với consent riêng, lưu tạm ngoài Git. Khi participant rút đúng hạn, xóa dữ liệu khỏi current tree và nơi tạm, rồi chạy lại derivative; không hứa xóa Git history. Nếu giao thức cũ chưa phản ánh policy này, ghi remaining issue và coi cổng chuẩn bị chưa đạt; không tự sửa ngoài `write_scope`.
8. Chỉ ghi trong `write_scope`; chạy validator task, integration gate, privacy scan, coordination smoke khi môi trường cho phép và `git diff --check`; commit, tạo handoff rồi chuyển task sang `review`. Không tự review.
