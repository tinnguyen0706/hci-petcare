# PLAN — Thiết kế tương tác

## Trạng thái và cảnh báo

- Đây là lộ trình vận hành tái sử dụng, không phải bằng chứng rằng thiết kế, review hay usability test đã được thực hiện hoặc đạt yêu cầu.
- Chỉ ghi nhận kết quả, số liệu và quyết định khi có artifact hoặc evidence thật. Không tự cho điểm theo rubric.
- Giữ phạm vi ở trải nghiệm mobile-first của chủ nuôi với Figma; không tự thêm backend, đổi công nghệ hoặc mở rộng thành hệ thống quản trị cơ sở.

## Khi dùng

Dùng PLAN này để chuyển nghiên cứu người dùng đã được chấp nhận thành Scenario 2, Storyboard, Wireframe và Figma Prototype trong `deliverables/02-interaction-design/`.

Chỉ bắt đầu khi có bằng chứng rõ ràng rằng con người đã chấp nhận toàn bộ synthesis, Persona, Value Proposition và Scenario 1 hiện tại, đồng thời các artifact này truy vết được về evidence nghiên cứu đã ẩn danh. Persona “chị Lan” trong `docs/proposal.md` chỉ là bối cảnh proposal; không dùng như finding nghiên cứu nếu evidence được chấp nhận chưa hỗ trợ.

Không dùng PLAN này để thay cho User Discovery, hiện thực phần mềm hoặc chuẩn bị bộ nộp cuối kỳ.

## Đầu vào bắt buộc

- Synthesis, Persona, Value Proposition và Scenario 1 đã được con người chấp nhận, kèm đường dẫn tới evidence ẩn danh và bản ghi quyết định chấp nhận.
- Phạm vi bốn đoạn hành trình trong proposal: đặt lịch/xác nhận; hồ sơ/yêu cầu đặc biệt; tiến độ theo mốc/thông báo; lịch sử chăm sóc.
- Rubric cho Scenario 2, Storyboard, Prototype và Wireframe; các ràng buộc style, quality, accessibility và thiết bị mobile-first.
- Quyền truy cập tệp Figma chỉnh sửa được và nơi ghi link, ngày hoặc mã phiên bản cùng bản export.
- Kế hoạch tuyển end-user, tiêu chí phiên hợp lệ, protocol nhiệm vụ và biểu mẫu consent riêng cho usability test.

Thiếu bất kỳ đầu vào nào thì dừng tại Cổng 1 và ghi gap; không điền bằng giả định.

## Đầu ra

Đặt artifact có thể commit trong `deliverables/02-interaction-design/`:

1. Scenario 2 mô tả quy trình mới và các tương tác cải tiến.
2. Storyboard thể hiện bối cảnh, tương tác, phản hồi và cảm xúc.
3. Wireframe mobile-first đủ luồng và trạng thái.
4. Bản ghi Figma Prototype gồm link nguồn chỉnh sửa, ngày hoặc mã phiên bản, các frame chính và bản export dùng để review.
5. Ma trận truy vết xuyên suốt bốn đoạn hành trình.
6. Evidence đánh giá thật: checklist Heuristic/rubric, protocol usability test, ghi chép ẩn danh, synthesis vấn đề và change log sau iteration.

Figma là nguồn thiết kế chỉnh sửa được. Export chỉ là snapshot phục vụ review và phải khớp phiên bản được ghi nhận; không dùng export thay cho link nguồn.

## Workflow bốn cổng

### Cổng 1 — Research đủ điều kiện

1. Kiểm tra bản ghi chấp nhận của con người cho synthesis, Persona, Value Proposition và Scenario 1; xác minh chuỗi `evidence → synthesis → artifact` có thật.
2. Đối chiếu người dùng, mục tiêu, bối cảnh, pain và value với proposal nhưng không biến nội dung proposal thành finding.
3. Khởi tạo ma trận theo chuỗi `evidence đã chấp nhận → pain/value → nhu cầu thiết kế → Scenario 2/user flow → Storyboard → Wireframe/Figma và trạng thái → evidence đánh giá/thay đổi`.
4. Tạo đủ bốn hàng bắt buộc: đặt lịch/xác nhận; hồ sơ/yêu cầu đặc biệt; tiến độ theo mốc/thông báo; lịch sử chăm sóc. Ưu tiên chiều sâu cho tiến độ nhưng không bỏ ba đoạn còn lại.

**Human gate 1:** Con người xác nhận gói research và ma trận đầu vào đủ điều kiện. Chưa xác nhận thì không tạo phương án thiết kế.

### Cổng 2 — Chọn hướng tương tác

1. Viết Scenario 2 bằng ngôn ngữ người dùng, có persona dựa trên research, mục tiêu, bối cảnh, trình tự hành động–phản hồi và kết quả. Đối chiếu với Scenario 1 để thấy rõ tương tác mới và giá trị cải tiến.
2. Vẽ user flow xuyên suốt bốn đoạn hành trình, gồm điểm quyết định, đường thành công và cách quay lại/phục hồi khi đầu vào hoặc trạng thái không hợp lệ.
3. Phác thảo ít nhất hai phương án cho các điểm quyết định chính trước khi tăng độ trung thực; ghi trade-off về tải nhận thức, số bước, khả năng nhận biết, phòng lỗi và phản hồi.

**Human gate 2:** Con người chọn hướng Scenario 2/user flow/sketch và ghi lý do chọn cùng trade-off được chấp nhận. Không có lựa chọn thì không phát triển Figma.

### Cổng 3 — Hoàn thiện và duyệt bản test-ready

1. Tạo Storyboard sao cho mỗi khung làm rõ ai, ở đâu/khi nào, làm gì, hệ thống phản hồi gì và cảm xúc ra sao; duy trì mạch Scenario 2 và Value Proposition.
2. Tạo Wireframe và Figma Prototype mobile-first cho đủ bốn đoạn hành trình. Với nơi phù hợp, bao phủ trạng thái loading, empty, error, success/confirmation và khả năng phục hồi; không tuyên bố cập nhật “real-time” thật khi mới là prototype mô phỏng.
3. Annotate accessibility: không chỉ dùng màu để truyền đạt trạng thái; bảo đảm tương phản và chữ dễ đọc; nhãn/icon rõ nghĩa; vùng chạm phù hợp; thứ tự focus/keyboard hợp lý; feedback và lỗi có cách nhận biết, diễn giải, phục hồi.
4. Review đủ 10 Heuristic Nielsen: visibility of system status; match with the real world; user control and freedom; consistency and standards; error prevention; recognition rather than recall; flexibility and efficiency; aesthetic and minimalist design; error recognition/diagnosis/recovery; help and documentation.
5. Đối chiếu bốn mục rubric Scenario 2, Storyboard, Prototype và Wireframe bằng đường dẫn artifact; chỉ ghi gap hoặc evidence, không tự suy diễn điểm.
6. Cập nhật ma trận truy vết; ghi link Figma, ngày hoặc mã phiên bản test-ready, frame tương ứng và tạo export để review.

**Human gate 3:** Con người duyệt bản test-ready, ma trận truy vết, checklist Heuristic/rubric, protocol, nhiệm vụ test, tiêu chí end-user và nội dung consent. Chưa duyệt thì không tuyển hoặc chạy phiên test.

### Cổng 4 — Một vòng usability test và iteration

1. Thực hiện đúng **một vòng** usability test theo protocol đã duyệt, với tối thiểu 5 phiên end-user hợp lệ. Phiên không đạt tiêu chí bị loại và được thay trong cùng vòng cho đến khi đủ 5 phiên hợp lệ; không biến phiên không hợp lệ thành evidence.
2. Trước mỗi phiên, lấy consent usability test riêng với consent nghiên cứu trước đây và báo rõ repository có thể công khai. Nếu cần ghi âm, ghi hình hoặc chụp màn hình participant, lấy consent media riêng và lưu media tạm ngoài Git.
3. Trong Git chỉ lưu Markdown ẩn danh bằng mã `Pxx`, trạng thái consent `Có/Không`, quan sát cần thiết và evidence đã làm sạch. Không commit tên, contact, mapping mã–danh tính, chữ ký, media, screenshot participant hoặc dữ liệu nhạy cảm/nhận diện bên thứ ba.
4. Tổng hợp theo chuỗi `vấn đề → evidence Pxx → ảnh hưởng → mức ưu tiên → quyết định sửa/hoãn`; không bịa tỷ lệ thành công, trích dẫn, hành vi hoặc kết quả.
5. Iteration trên Scenario 2/Storyboard/Wireframe/Figma theo synthesis thật; ghi change log, lý do và issue hoãn. Cập nhật ma trận truy vết và checklist liên quan.
6. Ghi link Figma cuối, ngày hoặc mã phiên bản, các frame được duyệt và tạo export khớp phiên bản đó.

**Human gate 4:** Con người duyệt synthesis, quyết định iteration/hoãn và phiên bản Figma cuối. Chỉ sau gate này mới handoff sang `build-prototype`; PLAN không tự tuyên bố thiết kế hay usability test đã hoàn tất.

## Điều kiện dừng hoặc thất bại

- Dừng tại gate hiện tại nếu thiếu evidence, bản ghi human approval, artifact truy vết, quyền Figma hoặc quyết định của con người.
- Dừng nếu Persona/nhu cầu chỉ dựa vào “chị Lan” trong proposal, nếu evidence mâu thuẫn chưa được xử lý, hoặc nếu một trong bốn đoạn hành trình bị bỏ trống.
- Không chạy hoặc không công nhận phiên usability test khi participant không đúng end-user, thiếu consent, lệch protocol nghiêm trọng hoặc evidence không đủ. Không handoff nếu sau một vòng chưa đủ 5 phiên hợp lệ.
- Khi phát hiện dữ liệu nhận diện hoặc media trong vùng Git, dừng commit/handoff và xử lý theo chính sách dữ liệu; không che giấu sự cố.
- Không handoff sang build nếu thiếu link/phiên bản/export Figma, còn lỗi chặn luồng cốt lõi, hoặc issue hoãn chưa được con người chấp nhận.
- Nếu cần vòng usability test thứ hai, thay đổi phạm vi, backend, live API hoặc quyết định sản phẩm mới, dừng và xin một quyết định/task mới; PLAN này chỉ cho phép một vòng.
- Khi không đạt gate, ghi rõ gap, evidence đã có và việc cần quyết định; không thay thế bằng kết quả giả định.

## Nguồn quyết định

Áp dụng thứ tự ưu tiên: yêu cầu hiện tại của người dùng → proposal/rubric → hướng dẫn đồ án → bài giảng. Các nguồn đã định hình PLAN:

- [`AGENTS.md`](../../../AGENTS.md), [`coordination/PROTOCOL.md`](../../../coordination/PROTOCOL.md) và [quyết định lifecycle `TASK-LIFE-002`](../../../coordination/handoffs/TASK-LIFE-002.md).
- [`docs/proposal.md`](../../../docs/proposal.md), [`docs/final-rubric.csv`](../../../docs/final-rubric.csv), [`rules/domain-rules.md`](../../../rules/domain-rules.md), [`rules/style-rules.md`](../../../rules/style-rules.md), [`rules/quality-rules.md`](../../../rules/quality-rules.md) và [`rules/assessment-rules.md`](../../../rules/assessment-rules.md).
- [`guide-opencode.md`](../../../references/project-guidelines/notes/guide-opencode.md), [`guide-project-2026.md`](../../../references/project-guidelines/notes/guide-project-2026.md), [`guide-wireframe.md`](../../../references/project-guidelines/notes/guide-wireframe.md) và [`rubric-project-final.md`](../../../references/project-guidelines/notes/rubric-project-final.md).
- Ghi chú bài giảng [`02-foundation.md`](../../../references/course-materials/notes/02-foundation.md), [`03-design-process-overview.md`](../../../references/course-materials/notes/03-design-process-overview.md), [`06-scenario-sketching.md`](../../../references/course-materials/notes/06-scenario-sketching.md) và [`07-storyboard.md`](../../../references/course-materials/notes/07-storyboard.md).
