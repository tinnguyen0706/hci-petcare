# Lộ trình hiện thực prototype

> Trạng thái: bản nháp vận hành do agent chuẩn bị để con người review và chấp nhận. Đây là lộ trình tái sử dụng, không phải bằng chứng rằng mã nguồn, kiểm thử, đối chiếu Figma hoặc Software product đã hoàn tất. Task tạo tài liệu này không scaffold hay hiện thực sản phẩm.

## Khi dùng

Chỉ dùng lộ trình sau khi con người đã duyệt gói thiết kế trong `deliverables/02-interaction-design/`. Gói đầu vào phải ghim được nguồn Figma bằng link, ngày hoặc mã phiên bản, kèm bản export phục vụ review và acceptance matrix cho màn hình, tương tác, trạng thái cùng viewport. Nếu thiếu một điều kiện, chỉ lập gap report và dừng trước khi viết mã.

## Đầu vào

- Gói Figma đã duyệt và ghim phiên bản, gồm flow mobile-first, frame tham chiếu, component, trạng thái và bản export.
- Acceptance matrix ánh xạ từng yêu cầu tới frame/màn hình, hành động, kết quả quan sát được, trạng thái tải/rỗng/lỗi, yêu cầu accessibility và viewport kiểm tra.
- Bốn năng lực theo `docs/proposal.md`: đặt lịch/xác nhận; hồ sơ/yêu cầu đặc biệt; tiến độ theo mốc/thông báo; lịch sử chăm sóc.
- Task có `write_scope`, Acceptance Criteria, thiết kế đã duyệt và danh sách sai khác được con người chấp nhận nếu có.
- Quy tắc nghiệp vụ, trình bày, chất lượng và đánh giá hiện hành trong repository.

## Đầu ra

- Prototype web mobile-first bằng React + TypeScript, khởi tạo và build bằng Vite; không có backend hay live API.
- Component/integration test bằng Testing Library và Vitest; browser-flow, responsive và visual comparison test bằng Playwright.
- Fixture cục bộ xác định được, state trong trình duyệt và thao tác reset về dữ liệu gốc.
- Bản production build và bằng chứng kiểm chứng thực tế trong `deliverables/03-software-product/`, có truy vết ngược tới acceptance matrix và phiên bản Figma.
- Handoff nêu lệnh đã chạy, kết quả thật, sai khác, vấn đề hoãn và quyết định chấp nhận của con người; không thay kết quả bằng kế hoạch hoặc tuyên bố chung chung.

## Workflow theo cổng

### Cổng A — đóng băng thiết kế và acceptance

1. Đối chiếu Figma với proposal, rubric và đủ bốn năng lực; không tự thêm màn hình quản trị, backend hoặc nghiệp vụ ngoài hành trình của chủ nuôi.
2. Ghim link và ngày/mã phiên bản Figma, lưu bản export review, rồi hoàn tất acceptance matrix cho mọi màn hình, tương tác, trạng thái và viewport.
3. Ghi rõ tiêu chí có thể quan sát cho từng bước, gồm nội dung hiển thị, hành động hợp lệ, phản hồi, điều hướng, lỗi và khả năng phục hồi.
4. Ghi mọi mâu thuẫn hoặc khoảng trống thành câu hỏi/sai khác; con người chọn nguồn đúng hoặc chấp nhận sai khác trước khi viết mã.

**Điều kiện qua cổng:** con người xác nhận bằng chứng duyệt gói Figma đã ghim và acceptance matrix bao phủ đủ phạm vi. Link Figma không ghim phiên bản, export đơn lẻ hoặc suy đoán của agent không đạt cổng.

### Cổng B — nền tảng kỹ thuật và dữ liệu xác định

1. Dùng React + TypeScript với Vite. Dùng Testing Library/Vitest cho component và integration test; dùng Playwright cho luồng trình duyệt, responsive và visual comparison. Ghim dependency bằng lockfile phù hợp khi task hiện thực được giao.
2. Định nghĩa fixture cục bộ có ID, thời điểm, khung giờ, hồ sơ, yêu cầu, mốc tiến độ và lịch sử ổn định. Không phụ thuộc đồng hồ ngẫu nhiên, dữ liệu mạng hoặc thứ tự không xác định trong kiểm thử.
3. Chỉ giữ state trong bộ nhớ của phiên chạy (ví dụ React state); reload trang hoặc thao tác Reset phải khôi phục fixture gốc. Không dùng `localStorage`, `sessionStorage`, IndexedDB hay bất kỳ cơ chế persistence qua phiên nào.
4. Không tạo backend, không gọi live API và không giả vờ đồng bộ ngoài thiết bị. Mọi thay đổi tiến độ/thông báo là mô phỏng cục bộ, phải được diễn đạt là dữ liệu prototype; không tuyên bố cập nhật “real-time” thật.
5. Thiết lập mobile-first, semantic landmarks, heading/label/control đúng vai trò, thứ tự focus dự kiến và vùng thông báo trạng thái dễ tiếp cận ngay từ cấu trúc nền.

**Điều kiện qua cổng:** ứng dụng nền có thể chạy với fixture ổn định, reset tái lập được cùng một trạng thái, không phát sinh live network và có test nền chứng minh hành vi dữ liệu/reset thực tế.

### Cổng C — hiện thực trọn hành trình

Hiện thực theo lát cắt end-to-end và truy vết mỗi lát cắt tới acceptance matrix:

1. **Đặt lịch và xác nhận:** chọn thú cưng, dịch vụ, khung giờ khả dụng từ fixture; ngăn chọn khung giờ kín; hiển thị xác nhận rõ ràng sau khi đặt.
2. **Hồ sơ và yêu cầu đặc biệt:** xem/sửa dữ liệu prototype về dị ứng, thuốc hoặc hành vi; tự đính kèm yêu cầu vào lịch và cho người dùng kiểm tra trước khi xác nhận.
3. **Tiến độ và thông báo:** thể hiện các mốc đã nhận, đang thực hiện, hoàn tất và chờ đón; mô phỏng thay đổi bằng hành động cục bộ có chủ đích; cập nhật trạng thái nhìn thấy được và thông báo dễ tiếp cận.
4. **Lịch sử chăm sóc:** lưu và tra cứu dịch vụ, sản phẩm cùng ghi chú prototype sau khi hoàn tất, nhất quán với state hiện tại và reset được.

Với từng lát cắt:

- Hiện thực trạng thái mặc định, loading, empty và error phù hợp; cung cấp hành động thử lại, quay lại hoặc sửa đầu vào khi có thể.
- Không chỉ truyền đạt trạng thái bằng màu sắc; dùng nhãn, văn bản, icon có tên dễ tiếp cận và feedback cụ thể.
- Kiểm tra semantic HTML, accessible name, keyboard-only flow, focus sau điều hướng/dialog/lỗi và live status không làm gián đoạn người dùng.
- Kiểm tra từ viewport điện thoại trước, sau đó tablet và desktop theo acceptance matrix; không để nội dung tràn, mục tiêu chạm quá khó dùng hoặc hành động chính mất khỏi luồng.
- Viết/cập nhật Testing Library và Vitest test cho hành vi quan trọng trước khi chuyển sang lát cắt tiếp theo.

**Điều kiện qua cổng:** cả bốn năng lực chạy thành một hành trình liên tục, có trạng thái biên, accessibility và responsive; test thực tế tương ứng đạt. Giao diện rời rạc hoặc chỉ minh họa một phần quy trình chưa đạt tiêu chí Software product.

### Cổng D — kiểm chứng và chấp nhận

1. Chạy typecheck, toàn bộ Vitest, toàn bộ Playwright và production build bằng các script đã khai báo trong repository.
2. Chạy Playwright trên các viewport trong acceptance matrix cho luồng chính, reset, loading/empty/error, keyboard/focus và thông báo trạng thái.
3. Chụp kết quả ở trạng thái/viewport đã ghim và đối chiếu với đúng frame Figma. Ghi expected, actual, ảnh/diff, mức ảnh hưởng và quyết định cho từng sai khác; không dùng visual comparison thay cho kiểm tra hành vi hoặc accessibility.
4. Lưu bằng chứng thật gồm commit, môi trường, phiên bản công cụ, lệnh, thời điểm, exit status và đường dẫn report/screenshot. Chỉ ghi “đạt” cho lệnh đã chạy thành công trên chính revision bàn giao.
5. Trình con người review demo, ma trận truy vết, kết quả kiểm thử và mọi sai khác/vấn đề hoãn. Con người phải chấp nhận rõ bản build cùng từng sai khác còn lại trước handoff hoàn tất.

**Điều kiện qua cổng:** typecheck, Vitest, Playwright, production build và visual comparison đều có kết quả thực tế chấp nhận được; acceptance matrix có bằng chứng cho từng mục; con người xác nhận bản build và sai khác. Không suy diễn từ việc có test file hoặc protocol rằng kiểm thử đã chạy.

## Điều kiện dừng hoặc thất bại

- Dừng trước khi viết mã nếu Figma chưa được duyệt/ghim, thiếu bản export hoặc acceptance matrix chưa đủ màn hình, tương tác, trạng thái và viewport.
- Dừng và xin quyết định khi proposal, rubric, Figma và task mâu thuẫn; không tự chọn bằng suy đoán nếu lựa chọn làm đổi hành vi sản phẩm.
- Từ chối tự thêm backend, live API, đồng bộ thiết bị hoặc tuyên bố “real-time” thật. Yêu cầu như vậy cần task và quyết định phạm vi mới.
- Không qua cổng khi reset không tái lập fixture, còn network dependency, thiếu một trong bốn năng lực, thiếu loading/empty/error, hoặc còn lỗi semantics, keyboard, focus, live status hay responsive chưa được xử lý/chấp nhận.
- Typecheck, Vitest, Playwright, production build hoặc visual comparison lỗi thì giữ task ở vòng sửa–chạy lại; không ghi kết quả dự kiến như kết quả thật.
- Sai khác Figma hoặc vấn đề hoãn chưa được con người chấp nhận thì không tuyên bố bản build hoàn tất và không chuyển sang chuẩn bị nộp.

## Nguồn quyết định

- `AGENTS.md`; `coordination/PROTOCOL.md`; `agents/roles/software-implementer.md`; `.agents/skills/build-prototype/SKILL.md`.
- `docs/proposal.md`; `docs/final-rubric.csv`; `rules/domain-rules.md`; `rules/style-rules.md`; `rules/quality-rules.md`; `rules/assessment-rules.md`.
- `references/project-guidelines/notes/guide-opencode.md`; `guide-project-2026.md`; `guide-wireframe.md`; `rubric-project-final.md`.
- `references/course-materials/notes/02-foundation.md`; `03-design-process-overview.md`.
- Gói Figma đã được con người duyệt, acceptance matrix và task hiện thực cụ thể tại thời điểm kích hoạt lộ trình.
