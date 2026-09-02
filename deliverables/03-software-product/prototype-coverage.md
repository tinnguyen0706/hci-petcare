# Prototype Coverage Contract — PetCare Pro

Nguồn kiểm kê: 43 SVG trong `deliverables/02-interaction-design/prototype/`. Wireframe chỉ cung cấp bố cục; Prototype quyết định thứ tự thao tác và System Feedback.

| Prototype nguồn | Route/state trong app | User Action → System Feedback | Automated coverage |
|---|---|---|---|
| P1/G1/01 `pet_service_selection` | `service` | Chọn Pet/dịch vụ → trạng thái chọn + dặn dò tự động | Booking interaction |
| P1/G1/02 `available_slots_matrix` | `timeslot` / chưa chọn | Chọn ngày → tải ma trận giờ tương ứng | Timeslot interaction |
| P1/G1/03 `slot_selection_active` | `timeslot` / đã chọn | Chọn giờ → viền teal, nhãn Đã chọn, cập nhật tóm tắt | Timeslot interaction |
| P1/G1/04 `booking_confirmation` | `confirmation` | Tiếp tục → tóm tắt Pet/dịch vụ/giờ/dặn dò | Booking happy path |
| P1/G1/05 `instant_booking_success` | `success` | Xác nhận → tạo booking local + Success | Booking happy path |
| P1/G2/01 `appointment_checkin_card` | `appointmentCheckin` | Mở QR → màn hình QR tiếp nhận | Prototype Intake flow |
| P1/G2/02 `qr_intake_scan` | `checkin` | Nhân viên đã quét mã → cảnh báo y tế tự động | Dùng trực tiếp SVG Prototype + dữ liệu booking động |
| P1/G2/03 `medical_alert_intake_view` | `medicalAlert` | Đối chiếu → phương án chăm sóc | Prototype Intake flow |
| P1/G2/04 `care_protocol_consultation` | `careProtocol` | Khóa lưu ý → cam kết đã khóa | Prototype Intake flow |
| P1/G2/05 `intake_safety_commitment_locked` | `safetyLocked` | Hoàn tất → biên bản bàn giao | Prototype Intake flow |
| P1/G2/06 `confirmed_handoff_peace_of_mind` | `handover` / Mốc 2 | Bật thông báo đẩy → lưu cấu hình và phản hồi xác nhận | Dùng trực tiếp SVG Prototype 06 |
| P1/G3/01 `step1_received_status` | `tracking1` | Chuyển mốc → Đang chăm sóc | Tracking 4 mốc |
| P1/G3/02 `step2_in_progress_care` | `tracking2` | Xem ảnh/tiến mốc → System Feedback | Tracking 4 mốc |
| P1/G3/03 `step3_care_completed` | `tracking3` | Hoàn tất → Push notification | Prototype Tracking notification |
| P1/G3/04 `push_notification_popup` | `pushReady` | Sang đón → mốc Chờ đón | Prototype Tracking notification |
| P1/G3/05 `step4_ready_for_pickup` | `tracking4` | Lấy QR → quy trình nhận bé | Tracking 4 mốc |
| P1/G4/01 `pet_profile_history_entry` | `profiles` / `history` | Mở hồ sơ/lịch sử → dữ liệu theo Pet | Profile + History |
| P1/G4/02 `care_service_history_list` | `history` | Lọc/chọn lượt → chi tiết lượt | History interaction |
| P1/G4/03 `service_session_details` | `session` | Xem sản phẩm → sản phẩm đã xác minh | Prototype History product flow |
| P1/G4/04 `herbal_shampoo_product_verified` | `productVerified` | Xem ghi chú → đánh giá da | Prototype History product flow |
| P1/G4/05 `technician_notes_skin_health` | `technicianNotes` | Lưu sản phẩm → ghi `preferredProducts` vào state/localStorage | Prototype History persistence |
| P1/G4/06 `save_product_for_next_care` | `productSaved` | Đặt đợt tới → Rebook tự nạp sản phẩm ưu tiên | Prototype History persistence |
| P2/G1/01 `time_matrix_view` | `miuTimeMatrix` | Chọn một trong ba giờ còn chỗ; giờ kín bị khóa → lưu ngày/giờ cho Miu | Persona 2 Goal 1 end-to-end + Miu time matrix interaction |
| P2/G1/02 `slot_selection` | `miuSlotSelected` | Xem đúng giờ đã chọn, đổi giữa các giờ còn chỗ rồi tiếp tục → màn chọn dịch vụ | Persona 2 Goal 1 end-to-end + Miu time matrix interaction |
| P2/G1/03 `service_selection` | `miuService` | Chọn dịch vụ → cảnh báo dặn dò tự liên kết | Persona 2 Goal 1 end-to-end |
| P2/G1/04 `booking_review` | `miuReview` | Rà soát → tạo booking Miu từ state local | Persona 2 Goal 1 end-to-end |
| P2/G1/05 `instant_lock_success` | `miuSuccess` | Khóa chỗ → Success dùng dữ liệu Miu | Persona 2 Goal 1 end-to-end |
| P2/G2/01 `step1_received_status` | `tracking1` / Miu | Chuyển mốc → Đang chăm sóc | Tracking 4 mốc |
| P2/G2/02 `step2_in_progress_care` | `tracking2` / Miu | Tiến mốc → Hoàn tất | Tracking 4 mốc |
| P2/G2/03 `step3_care_completed` | `tracking3` / Miu | Hoàn tất → Push notification | Prototype Tracking notification |
| P2/G2/04 `push_notification_popup` | `pushReady` / booking hiện tại | Mở thông báo → Chờ đón | Prototype Tracking notification |
| P2/G2/05 `step4_ready_for_pickup` | `tracking4` / Miu | Lấy QR → nhận bé | Tracking 4 mốc |
| P2/G3/01 `service_history_list` | `history` / filter Miu | Chi tiết → bảng kê chi phí | Prototype Cost flow |
| P2/G3/02 `service_cost_breakdown` | `costBreakdown` | Xem hóa đơn → E-invoice | Prototype Cost flow |
| P2/G3/03 `digital_einvoice_view` | `invoice` | Xem tổng chi tiêu → tổng kết tháng | Prototype Cost flow |
| P2/G3/04 `monthly_expense_summary` | `monthlySummary` | Lập kế hoạch → tháng tới | Prototype Cost flow |
| P2/G3/05 `next_month_budget_plan` | `budgetPlan` | Lưu → ghi `financialPlan` vào state/localStorage + feedback | Prototype Cost persistence |

Tổng: **37/37 Prototype đã có mapping**. Điều kiện duy trì: khi thêm SVG Prototype mới, CI/test và bảng này phải được cập nhật trước khi tuyên bố Software Product hoàn chỉnh.

## Trạng thái nghiệm thu theo Goal

| Goal | Entry point → Goal Completed | State/persistence | Trạng thái |
|---|---|---|---|
| Persona 1 / Goal 1 | Trang chủ → Service → Timeslot → Confirmation → Success | Booking local | Đạt |
| Persona 1 / Goal 2 | Success → QR → cảnh báo → khóa dặn dò → Handover | `safetyLocks` | Đạt |
| Persona 1 / Goal 3 | Tiến độ → 4 mốc → Push → QR đón bé | `activeBooking.status` | Đạt |
| Persona 1 / Goal 4 | History → Session → Product → Notes → Save → Rebook | `preferredProducts` | Đạt |
| Persona 2 / Goal 1 | Hồ sơ Miu → Time Matrix → Service → Review → Success | Booking Miu local | Đạt |
| Persona 2 / Goal 2 | Tiến độ Miu → 4 mốc → Push → QR đón bé | `activeBooking.status` | Đạt |
| Persona 2 / Goal 3 | History Miu → Cost → Invoice → Monthly → Plan | `financialPlan` | Đạt |
