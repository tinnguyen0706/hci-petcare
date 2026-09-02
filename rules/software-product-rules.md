# Quy tắc Software Product Frontend

Rule này áp dụng cho việc xây dựng và nghiệm thu ứng dụng web React + TypeScript của dự án.

## 1. Nguồn chuẩn và phạm vi

- `docs/final-rubric.csv` là nguồn duy nhất cho mức điểm: mức cao nhất yêu cầu cài đặt trọn vẹn 100% quy trình nghiệp vụ có tính năng tương tác mới/cải tiến.
- Prototype quyết định chuỗi tương tác và System Feedback đã duyệt.
- Wireframe quyết định Information Architecture, Component, Design Tokens và các UI state.
- **Prototype Coverage Contract bắt buộc:** trước khi sửa code phải kiểm kê toàn bộ SVG trong `deliverables/02-interaction-design/prototype/`. Mỗi SVG phải được ánh xạ tới ít nhất một route/state React, User Action, System Feedback và automated test trong `deliverables/03-software-product/prototype-coverage.md`.
- Không được coi một màn hình Wireframe có nội dung tương tự là đã thay thế Prototype. Wireframe chỉ được dùng làm khung bố cục; mọi bước trung gian, nhánh rẽ, trạng thái trước/sau thao tác và phản hồi có trong Prototype phải xuất hiện trong luồng app hoặc được ánh xạ rõ vào một state động tương đương.
- Nếu còn bất kỳ SVG Prototype nào có trạng thái `Thiếu`, `Tĩnh`, `Không có handler` hoặc `Chưa test`, Software Product chưa được tuyên bố hoàn chỉnh.
- Scenario Future, Persona và dữ liệu nghiên cứu quyết định nội dung nghiệp vụ. Không dùng chi tiết không truy vết được chỉ vì nó xuất hiện trong một màn hình minh họa.
- Người dùng cuối là Pet Owner. Không hiện thực dashboard nhân viên, điều phối viên hoặc quản trị trừ khi đó chỉ là System Feedback nhìn từ phía Pet Owner đã có trong thiết kế được duyệt.

## 2. Bốn quy trình bắt buộc

Software Product phải cho phép người dùng thao tác hoàn chỉnh:

1. **Đặt lịch tức thì:** chọn dữ liệu cần thiết, xử lý validation/xung đột và nhận xác nhận ngay trên frontend.
2. **Hồ sơ và yêu cầu đặc biệt:** xem/chọn thông tin sức khỏe, dị ứng, thuốc, tính cách hoặc dặn dò có nguồn; tự động đính kèm chúng vào booking.
3. **Theo dõi bốn mốc:** Đã nhận → Đang chăm sóc → Hoàn tất → Chờ đón, với phản hồi đa kênh và state local nhất quán.
4. **Lịch sử cá nhân hóa:** xem chi tiết lượt chăm sóc, sản phẩm/ghi chú có nguồn và Rebook nếu tương tác này có trong thiết kế đã duyệt.

Một màn hình tĩnh, CTA không có handler, link chết hoặc state chỉ thay đổi bằng cách sửa source không được tính là cài đặt quy trình.

## 3. Kiến trúc frontend-only

- Dùng React + TypeScript và Modern Vanilla CSS; mobile-first.
- Dữ liệu runtime nằm trong module TypeScript/JSON local hoặc state trình duyệt.
- Không tạo backend, database schema, ORM, API route, mock server, serverless function, WebSocket hoặc live API.
- Không thêm dependency chỉ để giả lập backend.
- `localStorage` được phép cho persistence trong trình duyệt; phải có fallback an toàn khi dữ liệu trống/hỏng.
- Timer được phép để trình diễn Loading hoặc chuyển trạng thái, nhưng UI và tài liệu phải gọi đúng là dữ liệu mô phỏng/local, không gọi là cập nhật real-time thật.
- Không lưu secret, credential hoặc token trong frontend.

## 4. Dữ liệu và tính trung thực

- Mọi tên, lịch hẹn, yêu cầu đặc biệt, sản phẩm, ghi chú và giá trị định lượng phải truy vết được về artifact được phép.
- Nếu nguồn không có dữ liệu cụ thể, dùng microcopy phi định lượng hoặc trạng thái Empty; không tự sáng tác số liệu “demo”.
- Dữ liệu seed phải có chú thích nguồn ở cấp module hoặc trong Acceptance Matrix.
- State dùng chung giữa Booking, Profile, Tracking và History phải dùng một nguồn dữ liệu local thống nhất để tránh mâu thuẫn.

## 5. UI, responsive và Accessibility

- Áp dụng Design Tokens trong `rules/style-rules.md`; không dùng emoji màu làm icon.
- Nội dung chính tối ưu cho chiều rộng thiết kế 430px nhưng không khóa cứng viewport; ứng dụng phải dùng được trên màn hình hẹp và desktop.
- Touch target tối thiểu 44×44px; focus indicator nhìn thấy được.
- Form có label; lỗi liên kết được với field; control có accessible name; thao tác cốt lõi dùng được bằng bàn phím.
- Trạng thái không chỉ truyền đạt bằng màu; kết hợp nhãn chữ và vector/icon phù hợp.
- Tôn trọng `prefers-reduced-motion`; animation không được ngăn hoàn thành tác vụ.

## 6. UI states bắt buộc

- **Main Flow:** dữ liệu và CTA hoạt động.
- **Loading:** thể hiện đúng phần đang chờ; không khóa toàn ứng dụng không cần thiết.
- **Empty:** giải thích trạng thái và có lối thoát/CTA.
- **Error/Conflict:** nêu nguyên nhân và có recovery thao tác được.
- **Success:** tóm tắt kết quả và cung cấp bước tiếp theo.

Không cần nhân năm toàn bộ màn hình; mỗi state phải xuất hiện ở nơi có ý nghĩa và đủ để chứng minh hành vi tương ứng trong Coverage Contract.

## 7. Vị trí tệp

- `src/`: application code, CSS, local data và tests.
- Gốc repository: chỉ các tệp cấu hình/package cần để cài, chạy, typecheck, test và build frontend.
- `deliverables/03-software-product/acceptance-matrix.md`: bằng chứng truy vết tiêu chí → luồng → mã/test → kết quả.
- `deliverables/03-software-product/test-results.md`: các lệnh kiểm tra thực tế và kết quả ngắn gọn.
- Không tạo `templates/` cho Software Product; không tạo script phụ ở bất kỳ đâu.

## 8. Acceptance Gates cho mức 100%

Chỉ được kết luận đạt 100% khi tất cả gate sau đều đạt:

1. **Precondition:** Prototype và Wireframe nguồn tồn tại, không bị bỏ qua.
2. **Coverage:** bốn quy trình bắt buộc hoàn thành end-to-end bằng thao tác UI.
3. **Interaction:** mỗi quy trình có state transition và System Feedback quan sát được.
4. **Improvement:** Auto-attach yêu cầu đặc biệt, xác nhận tức thì, timeline bốn mốc và lịch sử/Rebook tương ứng đã hoạt động theo thiết kế.
5. **Edge states:** Loading, Empty, Error/Recovery và Success có thể tái hiện và thao tác được.
6. **Consistency:** dữ liệu local nhất quán giữa Profile, Booking, Tracking và History.
7. **Accessibility:** keyboard, focus, label, accessible name, touch target và phản hồi đa kênh đạt kiểm tra.
8. **Responsive:** không tràn ngang ở viewport mục tiêu và vẫn dùng được ở các kích thước kiểm tra hợp lý.
9. **Frontend-only:** không có backend/live API hoặc tuyên bố real-time sai bản chất.
10. **Verification:** typecheck, automated tests và production build đều đã chạy thành công; kết quả được ghi trung thực.
11. **Prototype coverage:** 100% SVG Prototype có mapping route/state/action/feedback/test; các chuỗi Persona/Goal chạy được từ entry point đến Goal Completed mà không phải sửa URL thủ công.

Nếu bất kỳ gate nào chưa đạt, báo phần trăm theo bằng chứng hiện có hoặc ghi “chưa đủ cơ sở kết luận”; không làm tròn thành 100%.
