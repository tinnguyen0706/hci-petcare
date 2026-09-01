# Kế hoạch thực thi Software Product Generator

Áp dụng kế hoạch này khi xây mới hoặc hoàn thiện ứng dụng frontend để đạt tiêu chí Software Product cao nhất. Không bỏ qua bước chỉ vì đã có SVG giao diện.

## Giai đoạn 1 — Precondition Gate và kiểm kê nguồn

1. Xác nhận Prototype, Wireframe và `wireframe-spec.md` tồn tại, có nội dung thực.
2. Kiểm kê các Persona/Goal và màn hình Prototype có liên quan.
3. Đọc `wireframe-spec.md`, lập bảng làm việc nội bộ ánh xạ:
   - quy trình nghiệp vụ;
   - User Action;
   - System Feedback;
   - màn hình/Component;
   - dữ liệu nguồn;
   - trạng thái Main, Loading, Empty, Error và Success.
4. Nếu Prototype và Wireframe mâu thuẫn về hành vi, dừng và báo xung đột; không tự chọn một bên.

## Giai đoạn 2 — Chốt Coverage Contract 100%

Coverage Contract phải bao phủ bốn quy trình đầu-cuối:

1. Đặt lịch có xác nhận tức thì.
2. Hồ sơ thú cưng và tự động đính kèm yêu cầu đặc biệt.
3. Theo dõi tiến độ bốn mốc: Đã nhận → Đang chăm sóc → Hoàn tất → Chờ đón.
4. Lịch sử chăm sóc cá nhân hóa và hành động đặt lại khi thiết kế nguồn có yêu cầu.

Với mỗi quy trình, xác định rõ entry point, các bước thao tác, validation, phản hồi, recovery và điều kiện hoàn tất. Không tính một quy trình là đã cài đặt nếu chỉ có trang tĩnh hoặc nút không làm thay đổi state.

## Giai đoạn 3 — Thiết kế kiến trúc frontend

Chọn cấu trúc nhỏ nhất đáp ứng Coverage Contract:

```text
src/
├── app/          # App shell, route và providers nếu cần
├── components/   # Component dùng lại
├── features/     # booking, pets, tracking, history
├── data/         # seed data local có nguồn
├── types/        # kiểu dữ liệu dùng chung
├── styles/       # Design Tokens và global CSS
└── test/         # test setup/helper nếu thực sự cần
```

- Không bắt buộc tạo mọi thư mục nếu ứng dụng chưa cần.
- State thuộc quy trình đặt gần feature sở hữu nó; tránh một store toàn cục quá lớn.
- Dữ liệu hiển thị không được chép tùy ý từ SVG nếu SVG chứa chi tiết không truy vết được. Ưu tiên artifact nghiên cứu và Scenario đã duyệt.
- Điều hướng phải hỗ trợ hoàn thành bốn quy trình mà không cần chỉnh URL thủ công.

## Giai đoạn 4 — Hiện thực App Shell và Design System

1. Tạo cấu hình React + TypeScript tối thiểu phù hợp với repository.
2. Hiện thực mobile-first theo khung nội dung 430px nhưng phải responsive trên viewport hẹp và rộng hơn.
3. Chuyển Design Tokens bắt buộc thành CSS custom properties.
4. Xây Component dùng chung cho Button, Card, Badge, Alert, Stepper, Form Field, Skeleton và Navigation.
5. Mọi control tương tác có accessible name, keyboard focus hiển thị rõ và touch target tối thiểu 44px.
6. Không dùng emoji màu làm icon; dùng SVG/vector đơn sắc hoặc nhãn chữ.

## Giai đoạn 5 — Hiện thực bốn vertical slice

Thực hiện từng quy trình theo lát cắt hoàn chỉnh từ UI đến state local:

### 5.1. Booking

- Chọn thú cưng, dịch vụ, ngày/khung giờ còn trống.
- Validation trạng thái chưa chọn và xung đột slot.
- Tự đính kèm yêu cầu đặc biệt từ hồ sơ đã chọn.
- Xác nhận đặt lịch tức thì và tạo bản ghi local để các feature khác sử dụng.

### 5.2. Pet Profile và Special Requests

- Xem/chọn hồ sơ thú cưng.
- Hiển thị dị ứng, tính cách, thuốc và dặn dò có trong nguồn.
- Cho phép cập nhật state local nếu thiết kế nguồn có thao tác chỉnh sửa.
- Booking đọc cùng một nguồn state để chứng minh Auto-attach, không sao chép nội dung rời rạc.

### 5.3. Tracking

- Hiển thị đúng bốn mốc và trạng thái hiện tại.
- Cho phép trình diễn chuyển mốc bằng dữ liệu/state local theo hành vi thiết kế.
- Phản hồi trạng thái bằng chữ, hình và màu; không chỉ dùng màu.
- Mọi ảnh hoặc media phải là asset có sẵn; nếu không có thì dùng placeholder vector trung tính và không tuyên bố live camera thật.

### 5.4. History

- Hiển thị các lượt chăm sóc và chi tiết dịch vụ/sản phẩm/ghi chú có nguồn.
- Nếu nguồn thiết kế có Rebook, thao tác phải nạp lại dữ liệu hợp lệ vào Booking và cho phép người dùng xác nhận/chỉnh sửa.
- Bản ghi mới từ Booking hoặc Tracking phải phản ánh nhất quán trong state local phù hợp.

## Giai đoạn 6 — Edge states và tính bền vững của tương tác

1. Cài Loading bằng UI simulation kiểm soát được.
2. Cài Empty với hướng thoát và CTA phù hợp.
3. Cài Error/Conflict với nguyên nhân rõ và thao tác recovery thực sự thay đổi state.
4. Cài Success có tóm tắt kết quả và đường đi tiếp theo.
5. Kiểm tra refresh/back/forward và trạng thái form; không để người dùng rơi vào dead end.

## Giai đoạn 7 — Kiểm thử và đối chiếu Rubric

1. Typecheck không lỗi.
2. Test Component/state cho các quy tắc quan trọng: validation đặt lịch, Auto-attach yêu cầu, chuyển bốn mốc, Rebook/History và recovery.
3. Integration test ít nhất một happy path cho mỗi quy trình cốt lõi và các edge state trọng yếu.
4. Production build thành công.
5. Kiểm tra responsive, keyboard navigation, focus, accessible name và contrast.
6. Rà soát không có request tới backend/live API, secret hoặc dữ liệu không có nguồn.
7. Ghi kết quả thực vào ma trận nghiệm thu; không ghi “đạt” nếu chưa chạy.

## Giai đoạn 8 — Bàn giao

1. Tạo/cập nhật `deliverables/03-software-product/acceptance-matrix.md` với mapping từ tiêu chí → luồng → mã/test → kết quả thực.
2. Tạo/cập nhật `deliverables/03-software-product/test-results.md` bằng lệnh đã chạy, thời điểm và kết quả; không dán log dài.
3. Báo rõ giới hạn frontend-only và các trạng thái được mô phỏng.
4. Chỉ tuyên bố “100%” khi toàn bộ Acceptance Gates trong rule đều đạt.

