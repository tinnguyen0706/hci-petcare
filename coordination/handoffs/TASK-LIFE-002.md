# Handoff: TASK-LIFE-002

## Thay đổi

- Chuyển đúng sáu artifact từ `needs-interview` sang `agent-draft`: ba cặp `PLAN.md` và `SKILL.md` của `design-interactions`, `build-prototype` và `prepare-final-delivery`.
- Giữ nguyên trạng thái của `AGENTS.md`, cặp artifact `research-users`, toàn bộ rule và mọi entry khác trong registry.
- Không tạo hoặc sửa nội dung của protected artifact; task này chỉ mở lifecycle và ghi lại quyết định đã được người dùng cung cấp để ba task soạn thảo độc lập sử dụng.
- Đi đúng chuỗi trạng thái task `ready → claimed → in-progress → review`; worker không tự review.

## Quyết định đã ghi nhận

### Giao diện chung của ba skill

1. Tạo ba lộ trình tái sử dụng tại `.agents/skills/design-interactions/PLAN.md`, `.agents/skills/build-prototype/PLAN.md` và `.agents/skills/prepare-final-delivery/PLAN.md`.
2. Trong mỗi `SKILL.md`, chỉ thêm chỉ dẫn bắt buộc đọc `[PLAN.md](PLAN.md)`; giữ nguyên frontmatter và nội dung nghiệp vụ khác.
3. Mỗi PLAN phải có trạng thái hoặc cảnh báo, khi dùng, đầu vào, đầu ra, workflow theo cổng, điều kiện dừng hoặc thất bại và nguồn quyết định.
4. PLAN chỉ là lộ trình vận hành, không phải bằng chứng rằng thiết kế, phần mềm, kiểm thử hay bộ nộp đã hoàn tất.
5. Không sửa `.agents/skills/research-users/PLAN.md` vì artifact đó đang ở `human-editing`.

### Thiết kế tương tác

- Chỉ kích hoạt khi synthesis, Persona, Value Proposition và scenario hiện tại đã được con người chấp nhận; persona “chị Lan” trong proposal không được dùng như finding nghiên cứu.
- Đầu ra gồm Scenario 2, Storyboard, Wireframe, Figma Prototype, ma trận truy vết và bằng chứng đánh giá trong `deliverables/02-interaction-design/`.
- Workflow có bốn cổng: kiểm tra evidence và ánh xạ evidence → pain/value → nhu cầu; tạo Scenario 2, user flow và nhiều phương án sketch để con người chọn; hoàn thiện bốn artifact thiết kế mobile-first với đủ bốn đoạn hành trình, trạng thái tải/rỗng/lỗi, accessibility, review 10 heuristic Nielsen và rubric; cuối cùng thực hiện đúng một vòng usability test rồi lặp thiết kế.
- Vòng usability test phải có tối thiểu năm end-user hợp lệ, consent riêng và ghi chép ẩn danh. Không commit media hoặc dữ liệu nhận diện participant.
- Figma là nguồn thiết kế có thể chỉnh sửa. Phiên bản được duyệt phải ghi link, ngày hoặc phiên bản, có bản export phục vụ review và được con người duyệt trước khi chuyển sang build.

### Hiện thực prototype

- Chỉ kích hoạt khi gói thiết kế Figma đã được duyệt, ghim phiên bản và có acceptance matrix cho màn hình, tương tác và trạng thái.
- Toolchain đã chốt là React + TypeScript với Vite, Testing Library/Vitest cho component và integration test, Playwright cho luồng trình duyệt, responsive và visual comparison.
- Dùng fixture cục bộ xác định được cùng state trong trình duyệt và có cơ chế reset; không thêm backend, không gọi live API và không tuyên bố mock là cập nhật “real-time” thật.
- Hiện thực trọn bốn năng lực: đặt lịch/xác nhận; hồ sơ và yêu cầu đặc biệt; tiến độ theo mốc/thông báo; lịch sử chăm sóc.
- Bao phủ trạng thái tải/rỗng/lỗi, semantics, keyboard/focus flow, thông báo trạng thái dễ tiếp cận và responsive mobile-first.
- Cổng hoàn tất phải có kết quả thực tế của typecheck, Vitest, Playwright, production build và đối chiếu hình ảnh với Figma; sai khác hoặc vấn đề hoãn phải được ghi nhận và con người chấp nhận.

### Chuẩn bị bộ nộp cuối kỳ

- Chỉ kích hoạt khi artifact 01–03 đã được duyệt, kiểm thử sản phẩm có kết quả thật và nhóm cung cấp thông báo hoặc template cuối kỳ hiện hành.
- Khi chưa có yêu cầu nộp hiện hành, skill chỉ tạo readiness/gap report; không đóng gói dựa hoàn toàn vào ghi chú cũ.
- Phải xác nhận format, title, deadline, kênh nộp, yêu cầu bản giấy/poster và quy tắc đặt tên trước khi chuẩn bị package.
- Lập ma trận đủ 11 mục rubric tới bằng chứng thật; không tự cho điểm và không xem protocol hoặc Git alias là bằng chứng teamwork đầy đủ.
- Package dự kiến gồm báo cáo nguồn/PDF, slide nguồn/PDF, speaker notes/Q&A, thiết kế giao diện PDF, video prototype, code ZIP và poster hoặc bản giấy chỉ khi yêu cầu hiện hành xác nhận.
- Phải render và mở kiểm tra mọi tệp, kiểm tra link, thử build/test từ gói code, xác nhận đóng góp thật và phân vai trình bày cho cả ba thành viên.
- Con người ký duyệt package cuối; agent không tự nộp ra hệ thống bên ngoài.

## Tệp đã sửa

- `coordination/human-artifacts.yml`
- `coordination/tasks/TASK-LIFE-002.yml`
- `coordination/handoffs/TASK-LIFE-002.md`

## Kiểm thử

- Lệnh: validator `validate_registry_transition` với registry tại `main` và registry trong worktree.
- Kết quả: `OK`; đúng sáu entry mục tiêu tiến một bước `needs-interview → agent-draft`, không entry nào khác đổi.
- Lệnh: `python -X utf8 scripts/coordination/tasklib.py coordination/tasks/TASK-LIFE-002.yml`.
- Kết quả: `OK` ở cả `claimed`, `in-progress` và `review`.
- Lệnh: `python -X utf8 scripts/coordination/tasklib.py --validate-integration coordination/tasks/TASK-LIFE-002.yml main HEAD`.
- Kết quả: `OK`; diff thật chỉ gồm ba tệp metadata và handoff trong `write_scope`, không có protected artifact bị sửa.
- Lệnh: `git diff --check main...HEAD` và `git diff --name-only main...HEAD`.
- Kết quả: không có lỗi whitespace; danh sách diff chỉ có đúng ba tệp trong `write_scope`.

## Tài liệu đã ảnh hưởng

- Yêu cầu hiện tại của người dùng: nguồn quyết định cho toàn bộ nội dung phỏng vấn được ghi nhận ở trên.
- `AGENTS.md`: lifecycle artifact được bảo vệ, thứ tự ưu tiên nguồn và giới hạn quyền worker.
- `coordination/PROTOCOL.md`: state machine của task, quy tắc registry, handoff, review và integration gate.
- `references/README.md`: định tuyến nguồn; task metadata này không tạo nội dung thiết kế, mã sản phẩm hoặc package.
- `agents/roles/orchestrator.md`: trách nhiệm ghi quyết định người dùng và chuẩn bị task có scope hợp lệ.
- `.agents/skills/design-interactions/SKILL.md`, `.agents/skills/build-prototype/SKILL.md`, `.agents/skills/prepare-final-delivery/SKILL.md`: phạm vi hiện tại của ba skill sẽ nhận PLAN.
- `docs/proposal.md`: phạm vi bốn năng lực của hành trình chủ nuôi và ràng buộc không mở rộng sản phẩm.
- `docs/final-rubric.csv`: danh sách 11 deliverable dùng cho cổng truy vết của bộ nộp.
- `references/project-guidelines/notes/guide-opencode.md`: phân vai PLAN/SKILL và yêu cầu build–kiểm chứng bằng công cụ cụ thể.

## Vấn đề còn lại

- Sáu artifact hiện chỉ ở `agent-draft`; ba task soạn thảo riêng phải tạo PLAN và thêm liên kết SKILL, qua review độc lập rồi mới được orchestrator tích hợp và chuyển sang `human-editing`.
- Chưa có thiết kế, phần mềm, kết quả usability test hay package cuối kỳ nào được tạo hoặc xác nhận bởi task lifecycle này.

## Commit

- SHA implementation: `0a9c14d914145ae606523409617869d264fef917`

## Review

- Kết luận: `pending`
- Ghi chú: chờ reviewer độc lập; worker không tự review task.
