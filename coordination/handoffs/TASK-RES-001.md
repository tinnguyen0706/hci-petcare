# Handoff: TASK-RES-001

## Thay đổi

- Tạo bộ research protocol tự chứa cho tối thiểu năm chủ nuôi có trải nghiệm trực tiếp, gồm kế hoạch, tuyển/sàng lọc, consent, phỏng vấn, quan sát và hai template dữ liệu.
- Bao phủ đặt lịch/xác nhận, yêu cầu đặc biệt, theo dõi tiến độ và lịch sử bằng câu hỏi trung lập; không tạo kết quả, persona, VPC hoặc scenario.
- Quy định ẩn danh, dữ liệu tối thiểu, consent riêng cho ghi âm/ảnh/quote, quyền dừng/rút và thời hạn xóa.
- Tách `FACT`, `OBSERVATION`, `DIRECT_QUOTE`, `INTERPRETATION`; giữ mọi đặc điểm “chị Lan” ở trạng thái giả thuyết cần kiểm chứng.
- Phân công ba vai trò điều phối–ghi chép–quan sát theo chu kỳ luân phiên cho nhóm ba người, không bịa tên.

## Tệp đã sửa

- `deliverables/01-user-research/README.md`
- `deliverables/01-user-research/research-plan.md`
- `deliverables/01-user-research/participant-screening.md`
- `deliverables/01-user-research/consent-script.md`
- `deliverables/01-user-research/interview-guide.md`
- `deliverables/01-user-research/contextual-observation-guide.md`
- `deliverables/01-user-research/templates/session-notes-Pxx.md`
- `deliverables/01-user-research/templates/evidence-matrix.md`
- `coordination/tasks/TASK-RES-001.yml`
- `coordination/handoffs/TASK-RES-001.md`

## Nguồn tham khảo đã ảnh hưởng

- `docs/proposal.md`, `rules/domain-rules.md`, `rules/quality-rules.md`: phạm vi chủ nuôi, bốn năng lực cốt lõi và ranh giới chống bịa dữ liệu.
- `docs/final-rubric.csv`: yêu cầu bằng chứng cho persona/VPC/scenario về sau, không tạo sớm các artifact này.
- `references/project-guidelines/notes/guide-project-2026.md`: tối thiểu năm end-user, nhóm ba người và phương pháp/phân công rõ.
- `references/course-materials/notes/04-user-discovery-technique.md`: phối hợp hỏi–quan sát và tách quan sát khỏi suy luận.
- `references/course-materials/notes/05-persona-value-proposition.md`: persona/VPC phải dựa trên bằng chứng có truy vết.
- `references/course-materials/notes/06-scenario-sketching.md`: thu bối cảnh, mục tiêu và trình tự hiện tại trước scenario.

## Kiểm thử

- Lệnh: `scripts/coordination/validate-task coordination/tasks/TASK-RES-001.yml`
- Kết quả: `OK: coordination/tasks/TASK-RES-001.yml`.
- Lệnh: `git diff --check` và `git diff --cached --check` trước commit implementation.
- Kết quả: không có lỗi whitespace sau khi chuẩn hóa newline cuối tệp.
- Lệnh: kiểm tra các liên kết Markdown tương đối từ `deliverables/01-user-research/README.md` bằng `test -f`.
- Kết quả: không có liên kết hỏng.
- Lệnh: `rg -n 'TODO|TBD|FIXME|PLACEHOLDER|\[link\]|example\.com' deliverables/01-user-research`.
- Kết quả: không có placeholder chưa xử lý; `Pxx`/`Cxx` là mã có chủ đích và được hướng dẫn cách thay trong template.

## Vấn đề còn lại

- Chưa có dữ liệu thực địa; task sau chỉ được tạo finding/persona/VPC/scenario sau tối thiểu năm phiên hợp lệ và qua cổng bằng chứng.
- Nhóm cần chọn nơi lưu có kiểm soát trước phiên đầu; nếu chưa có thì protocol cấm thu media.

## Commit

- SHA: `29d606f5e069f6adbc162bd46c1f2bd31397a4ec`

## Review

- Kết luận: `pending`
- Ghi chú: chưa review.
