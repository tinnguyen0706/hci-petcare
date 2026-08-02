# Lộ trình nghiên cứu người dùng

> Trạng thái: bản nháp do agent chuẩn bị để con người review và chấp nhận. Tài liệu không phải bằng chứng rằng nghiên cứu đã diễn ra.

## 1. Chuẩn bị và cổng sẵn sàng

Đối chiếu `docs/proposal.md`, `docs/final-rubric.csv` và bộ giao thức trong `deliverables/01-user-research/`; tách giả thuyết khỏi dữ kiện. Tuyển tối thiểu 5 chủ nuôi là end-user có trải nghiệm trực tiếp, hoàn tất sàng lọc, consent và checklist quản trị dữ liệu trước phiên đầu. Mỗi phiên phải bao phủ bốn đoạn: đặt lịch/xác nhận, yêu cầu đặc biệt, theo dõi tiến độ và lịch sử; dành chiều sâu lớn nhất cho cách người dùng tìm, nhận, hiểu hoặc thiếu cập nhật tiến độ.

**Cổng A — con người duyệt thực địa:** nhóm xác nhận đủ tối thiểu 5 người, lịch/vai trò, consent, nơi lưu ngoài Git và policy repository có thể công khai. Chưa đạt cổng thì agent không được coi biểu mẫu là dữ liệu.

## 2. Thực hiện tối thiểu 5 phiên

Thực hiện P01–P05 (và thêm phiên nếu bằng chứng còn mỏng), kết hợp phỏng vấn bán cấu trúc với quan sát/tái hiện an toàn. Ghi riêng fact, observation, direct quote và interpretation; ghi cả trường hợp phản bác, khác biệt hoặc “không có trải nghiệm”. Sau mỗi phiên, ba vai trò debrief, kiểm tra consent, ẩn danh và mã bằng chứng.

**Cổng B — đủ evidence:** có ít nhất 5 phiên hợp lệ đã đồng thuận; mỗi phiên có ghi chép Markdown ẩn danh, dữ liệu/ghi rõ thiếu dữ liệu cho cả bốn đoạn, debrief và truy vết. Nếu một người rút, xóa dữ liệu được phép khỏi current tree và nguồn ngoài Git, rồi tính lại số phiên; thiếu 5 phiên thì phải bổ sung trước synthesis.

## 3. Synthesis có truy vết

Agent có thể làm sạch Markdown đã ẩn danh, lập ma trận evidence, nhóm mẫu, đếm đúng số người trên tổng phiên, đề xuất interpretation và nêu phản chứng/giới hạn. Chỉ gọi là mẫu lặp khi có từ hai người; không suy rộng thống kê. Theo dõi tiến độ là trục phân tích ưu tiên, nhưng không được làm mất ba đoạn hành trình còn lại.

**Cổng C — con người review synthesis:** con người kiểm tra mã nguồn, consent sử dụng quote, phản chứng, giới hạn và quyết định chấp nhận/sửa/bỏ từng kết luận. Agent không tự chấp nhận finding và không chuyển giả thuyết proposal thành kết quả.

## 4. Persona, Value Proposition và scenario hiện tại

Sau Cổng C, agent đề xuất persona dựa trên mẫu hành vi/mục tiêu, Value Proposition Canvas có đối ứng jobs–pains–gains với pain relievers/gain creators, và scenario hiện tại có persona, mục tiêu, bối cảnh, trình tự, khó khăn và kết quả. Mỗi chi tiết phải truy về synthesis đã được chấp nhận; scenario hiện tại phải thể hiện đủ hành trình, làm nổi bật khoảng thiếu thông tin tiến độ thay vì mô tả giải pháp mới.

**Cổng D — con người chấp nhận artifact:** con người review tính đại diện, đối ứng persona–VPC, độ rõ của khó khăn hiện tại và quyền dùng bằng chứng; chỉ artifact được chấp nhận mới được chuyển sang thiết kế tương tác. Agent chỉ phân tích và đề xuất.

## Policy Git có thể công khai

- Chỉ commit Markdown đã ẩn danh: ghi chép `Pxx`, transcript chữ đã làm sạch nếu có, evidence matrix, synthesis, persona/VPC/scenario và trường consent dạng `Có/Không`.
- Không commit tên/identifier, thông tin liên hệ, bảng nối danh tính–Pxx, chữ ký, withdrawal log nhận diện được, media, screenshot, dữ liệu nhạy cảm hoặc dữ liệu về cơ sở/người thứ ba.
- Trước phiên, phải báo rõ repository có thể công khai. Media mặc định không thu; nếu thật sự cần thì xin consent riêng và chỉ lưu tạm ngoài Git trong nơi riêng tư.
- Khi rút đúng hạn, xóa dữ liệu tương ứng khỏi current tree và nguồn tạm ngoài Git, rồi chạy lại mọi derivative/synthesis. Không hứa xóa khỏi lịch sử Git; tránh commit dữ liệu chưa đủ điều kiện ngay từ đầu.

## Nguồn quyết định

`docs/proposal.md`; `docs/final-rubric.csv`; `references/project-guidelines/notes/guide-project-2026.md`; `references/project-guidelines/notes/rubric-project-final.md`; `references/course-materials/notes/04-user-discovery-technique.md`; `05-persona-value-proposition.md`; `06-scenario-sketching.md`; toàn bộ `deliverables/01-user-research/`.
