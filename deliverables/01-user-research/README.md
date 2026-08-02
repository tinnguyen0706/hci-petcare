# Bộ giao thức nghiên cứu người dùng

## Trạng thái và ranh giới bằng chứng

Đây là **kế hoạch và biểu mẫu trước thực địa**, chưa phải kết quả nghiên cứu. Chưa có phiên nào được thực hiện; không được dùng tài liệu này để khẳng định pain point, persona, Value Proposition Canvas hay scenario. Các mô tả về “chị Lan” và khó khăn trong `docs/proposal.md` là giả thuyết cần kiểm chứng, không phải dữ kiện về người tham gia.

Phạm vi là chủ nuôi trực tiếp đặt và theo dõi dịch vụ chăm sóc thú cưng, tập trung vào: (1) đặt lịch/xác nhận, (2) truyền đạt yêu cầu đặc biệt, (3) theo dõi tiến độ, và (4) tra cứu lịch sử. Không nghiên cứu hệ thống quản trị toàn diện của cơ sở.

## Thành phần và thứ tự sử dụng

1. [Kế hoạch nghiên cứu](research-plan.md): câu hỏi, phương pháp, phân công, lịch và quy tắc phân tích.
2. [Sàng lọc và tuyển người tham gia](participant-screening.md): chọn tối thiểu 5 chủ nuôi có trải nghiệm thực tế.
3. [Checklist quản trị dữ liệu](data-governance-checklist.md): cả nhóm phải hoàn tất trước phiên đầu; đây là bước kiểm tra policy cố định, không phải chỗ tự chọn policy.
4. [Kịch bản đồng thuận](consent-script.md): phải hoàn tất trước mọi thu thập dữ liệu.
5. [Hướng dẫn phỏng vấn](interview-guide.md) và [hướng dẫn quan sát](contextual-observation-guide.md): dùng trong từng phiên.
6. Sao chép [mẫu ghi chép Pxx](templates/session-notes-Pxx.md) thành `session-notes-P01.md`, `P02`…; không ghi tên thật.
7. Sao chép [ma trận bằng chứng](templates/evidence-matrix.md) sau khi rà soát ghi chép; chỉ tổng hợp điều có mã nguồn truy vết.

## Dependency và điều kiện sẵn sàng

- Dependency nội bộ `TASK-KNOW-001`: đã cung cấp mục lục và ghi chú môn học; cần còn hiện diện trước khi phân tích.
- Cần có tối thiểu 5 người vượt sàng lọc, lịch/địa điểm phù hợp, phân công ba vai trò và checklist quản trị dữ liệu đã ký xác nhận trước khi thực địa.
- Mỗi phiên chỉ bắt đầu sau đồng thuận tự nguyện. Ghi âm/chụp ảnh là lựa chọn riêng, mặc định **không**; từ chối không ảnh hưởng việc tham gia.
- Chưa đủ điều kiện tạo persona/VPC/scenario cho đến khi dữ liệu thực được ẩn danh, kiểm tra và tổng hợp có truy vết.

## Quy ước dữ liệu

- Mã người tham gia: `P01`, `P02`…; phiên: `S-P01`; bằng chứng: `P01-O01` (observation), `P01-Q01` (direct quote), `P01-F01` (fact do người tham gia cung cấp), `P01-I01` (interpretation).
- Không thu tên thật, địa chỉ cụ thể, số điện thoại trong ghi chép nghiên cứu, thông tin đăng nhập/thanh toán, hồ sơ y tế chi tiết của người, hay dữ liệu nhạy cảm không cần thiết. Thông tin liên hệ tuyển dụng và bảng nối danh tính–Pxx phải để riêng khỏi ghi chép.
- Không ghi thông tin nhận diện nhân viên/cơ sở hay người thứ ba. Người tham gia có thể bỏ qua câu hỏi hoặc dừng bất cứ lúc nào.
- Repository **có thể được công khai**. Git chỉ nhận Markdown đã ẩn danh: ghi chép `Pxx`, transcript chữ đã làm sạch nếu có, evidence, synthesis, artifact và các trường consent `Có/Không`.
- Không commit identifier, thông tin liên hệ, bảng nối danh tính–Pxx, chữ ký, media, screenshot, dữ liệu nhạy cảm, dữ liệu nhận diện cơ sở/người thứ ba hoặc withdrawal log có khả năng nhận diện. Bảng nối, liên hệ và withdrawal log nhận diện được phải nằm ngoài Git; chỉ research lead truy cập phần cần thiết.
- Ghi chép Markdown Pxx đã ẩn danh có thể vào Git; media và dữ liệu định danh/raw chứa danh tính luôn nằm ngoài Git. Chỉ thu media khi có consent riêng cho từng loại và lưu tạm trong nơi riêng tư ngoài Git.
- Người tham gia có quyền rút đến trước khi nhóm chốt synthesis cho final submission. Khi rút đúng hạn, nhóm loại dữ liệu Pxx khỏi current tree và nơi lưu tạm, rồi chạy lại mọi derivative; nhóm không hứa xóa dữ liệu khỏi lịch sử Git. Sau khi hết hạn rút và bảng nối đã hủy, dữ liệu tổng hợp hoàn toàn ẩn danh không còn cách nhận diện để tách riêng.


## Nguồn đã định hình giao thức

- `docs/proposal.md`, `rules/domain-rules.md`: phạm vi nghiệp vụ và bốn đoạn hành trình; mọi mô tả chị Lan được giữ ở mức giả thuyết.
- `docs/final-rubric.csv`: nhu cầu tạo bằng chứng đủ mạnh cho các deliverable sau, nhưng bộ này chưa tạo các deliverable đó.
- `references/project-guidelines/notes/guide-project-2026.md`: nhóm ba người, tiếp cận ít nhất năm end-user và nêu phương pháp/phân công.
- `references/course-materials/notes/04-user-discovery-technique.md`: phối hợp hỏi và quan sát, tách quan sát khỏi diễn giải.
- `references/course-materials/notes/05-persona-value-proposition.md`: persona/VPC phải dựa trên nghiên cứu và có truy vết.
- `references/course-materials/notes/06-scenario-sketching.md`: thu bối cảnh, mục tiêu và trình tự hiện tại trước khi mô hình hóa scenario.
