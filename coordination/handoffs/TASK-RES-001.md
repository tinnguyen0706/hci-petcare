# Handoff: TASK-RES-001

## Thay đổi

- Tạo bộ research protocol tự chứa cho tối thiểu năm chủ nuôi có trải nghiệm trực tiếp, gồm kế hoạch, tuyển/sàng lọc, consent, phỏng vấn, quan sát và hai template dữ liệu.
- Bao phủ đặt lịch/xác nhận, yêu cầu đặc biệt, theo dõi tiến độ và lịch sử bằng câu hỏi trung lập; không tạo kết quả, persona, VPC hoặc scenario.
- Quy định ẩn danh, dữ liệu tối thiểu, consent riêng cho ghi âm/ảnh/quote, quyền dừng/rút và thời hạn xóa.
- Tách `FACT`, `OBSERVATION`, `DIRECT_QUOTE`, `INTERPRETATION`; giữ mọi đặc điểm “chị Lan” ở trạng thái giả thuyết cần kiểm chứng.
- Phân công ba vai trò điều phối–ghi chép–quan sát theo chu kỳ luân phiên cho nhóm ba người, không bịa tên.
- Sau changes-requested, chốt policy quản trị dữ liệu bằng checklist bắt buộc: cloud riêng tư ngoài Git, phân quyền ba thành viên/research lead, repository chỉ chứa dữ liệu ẩn danh, kênh và hạn rút cố định.
- Đồng bộ consent, kế hoạch và session template với quy trình xóa toàn bộ dữ liệu/dẫn xuất có thể truy ngược, chạy lại tổng hợp, hủy mapping và xóa raw data/media đúng hạn.

## Tệp đã sửa

- `deliverables/01-user-research/README.md`
- `deliverables/01-user-research/research-plan.md`
- `deliverables/01-user-research/participant-screening.md`
- `deliverables/01-user-research/consent-script.md`
- `deliverables/01-user-research/data-governance-checklist.md`
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
- Lệnh sau changes-requested: `rg` đối chiếu các cụm policy bắt buộc trong `README.md`, `research-plan.md`, `consent-script.md`, `data-governance-checklist.md`; kiểm tra liên kết README bằng `test -f`.
- Kết quả: policy về nơi lưu/quyền truy cập, mapping, kênh/hạn/phạm vi rút, chạy lại tổng hợp và hạn xóa đều hiện diện; không có liên kết hỏng.
- Lệnh sau changes-requested: `scripts/coordination/validate-task coordination/tasks/TASK-RES-001.yml`; `git diff --check`; rà placeholder bằng `rg`.
- Kết quả: task hợp lệ, không có lỗi whitespace và không có placeholder chưa xử lý.

## Vấn đề còn lại

- Chưa có dữ liệu thực địa; task sau chỉ được tạo finding/persona/VPC/scenario sau tối thiểu năm phiên hợp lệ và qua cổng bằng chứng.
- Nhóm phải hoàn tất checklist kiểm tra policy cố định trước phiên đầu; checklist không cho phép tự chọn policy khác.

## Commit

- SHA implementation ban đầu: `29d606f5e069f6adbc162bd46c1f2bd31397a4ec`
- SHA: `f8fdffb72a6c7069a3813f2bb050d76a93b2b7e5`

## Review

- Kết luận: `pending`
- Ghi chú: chờ re-review. Changes-requested trước đó:
  - Chưa đạt acceptance criterion “đủ để ba thành viên thực hiện nhất quán mà không cần tự quyết định thêm”. `consent-script.md` nói người tham gia được rút dữ liệu qua “cách liên hệ đã được cung cấp” và dữ liệu tuân theo “quy tắc lưu trữ nhóm đã công bố”, nhưng bộ giao thức không cung cấp trường/cơ chế để nhóm điền và đọc cho người tham gia kênh liên hệ, nơi lưu, người được truy cập, thời điểm hết quyền rút hoặc thời hạn xóa. `research-plan.md` vẫn để nhóm tự thống nhất nơi lưu trước phiên đầu. Cần bổ sung một checklist/phiếu cấu hình trước thực địa với các quyết định bắt buộc này và liên kết nó vào consent; không được bắt đầu thu dữ liệu khi các trường còn trống.
  - Cần làm rõ cách xử lý dữ liệu văn bản khi người tham gia rút. `research-plan.md` hiện chỉ yêu cầu xóa “artifact nhận diện/media”, trong khi consent nói có thể yêu cầu rút “dữ liệu”; quy trình phải nhất quán và nêu rõ ghi chép, quote, ma trận/tổng hợp dẫn xuất nào bị loại hoặc xóa, ai thực hiện và cách xác nhận hoàn tất.
  - Các phần còn lại đạt yêu cầu review: mẫu tối thiểu 5 end-user là chủ nuôi có trải nghiệm trực tiếp; câu hỏi phỏng vấn/quan sát trung lập; consent trước thu thập và consent riêng cho media/quote; hạn chế PII; tách `FACT`/`OBSERVATION`/`DIRECT_QUOTE`/`INTERPRETATION`; “chị Lan” và pain point proposal được đánh dấu là giả thuyết; không có kết quả/persona bịa.
  - Đã chạy `scripts/coordination/validate-task coordination/tasks/TASK-RES-001.yml`: OK; `git diff --check main...HEAD` và `git diff --cached --check`: không có lỗi; commit `29d606f5e069f6adbc162bd46c1f2bd31397a4ec` tồn tại và là tổ tiên của HEAD; kiểm tra liên kết Markdown tương đối: không có liên kết hỏng; rà `TODO|TBD|FIXME|PLACEHOLDER|example.com|[link]`: không có placeholder chưa xử lý, `Pxx`/`Cxx` là mã template có hướng dẫn thay.
