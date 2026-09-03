# Acceptance Matrix — PetCare Pro (Hệ Thống Chăm Sóc Thú Cưng)

## 1. Kiến Trúc & Tổ Chức Mã Nguồn (100% Đặt Trong `src/`)

Ứng dụng được hiện thực hóa hoàn chỉnh từ 18 màn hình Wireframe kiến trúc và 35 màn hình Interactive Prototype đã hoàn thành của đồ án HCI (CSC12106).
- **Working Directory**: `src/`
- **Toàn bộ cấu hình và mã nguồn đặt 100% trong `src/`**:
  - `src/package.json`: Cấu hình dependencies (React 18, Vite, Vitest, Testing Library).
  - `src/tsconfig.json`, `src/tsconfig.node.json`: Cấu hình trình biên dịch TypeScript chuẩn mực.
  - `src/vite.config.ts`: Cấu hình máy chủ phát triển Vite & Vitest.
  - `src/index.html`: Khung nhìn HTML5 mobile-first.
  - `src/styles/`: Design Tokens CSS (`#0D766E` Deep Teal, Rose Alert `#9F1239`, Success Green `#166534`, Slate 50-900) và `global.css` chuẩn Mobile-first (iPhone 14 Pro Max 430×932px).
  - `src/types/`: Toàn bộ TypeScript interfaces cho Pet, Service, Slot, Booking, History, Notification, Sensor.
  - `src/data/`: Mock data chuẩn hóa 100% truy vết từ User Research & Persona (Bơ - Poodle dị ứng, Miu - Mèo Anh nhút nhát).
  - `src/components/`: Header, Bottom Navigation 4 tabs, Timeline Stepper 4 mốc, Modal bottom sheet & dialog, bộ icon Monochrome Vector cấm 100% emoji.
  - `src/features/`: Phân rã theo feature modules: `home`, `booking`, `pets`, `intake`, `tracking`, `history`, `notifications`, `edge-states`.
  - `src/test/`: Unit & Integration tests toàn diện trong `src/test/app.test.tsx` (kiểm thử 4 quy trình cốt lõi và 5 UI states).
- **Môi trường thực thi**: Hỗ trợ chạy trực tiếp trong Dev Container bằng các lệnh chuẩn với thư mục làm việc `src/`:
  ```bash
  cd src
  npm install
  npm run dev
  ```

## 2. Bảng Đối Chiếu 4 Quy Trình Nghiệp Vụ Cốt Lõi

| STT | Quy trình nghiệp vụ cốt lõi | Thao tác tương tác (User Actions) & Phản hồi hệ thống (System Feedback) | Màn hình/Component đảm nhiệm | Trạng thái nghiệm thu |
| :---: | :--- | :--- | :--- | :---: |
| **1** | **Đặt lịch có xác nhận tức thì** | Chọn thú cưng ➔ Chọn dịch vụ ➔ Chọn ngày & Khung giờ ma trận ➔ Rà soát Auto-attach ➔ Khóa chỗ tức thì (Instant Lock), sinh mã hẹn `#BK-8902` kèm mã QR tiếp nhận quầy. | `BookingFlow.tsx`, `MultiPetBooking.tsx` | **ĐẠT 100%** |
| **2** | **Hồ sơ thú cưng & Yêu cầu đặc biệt** | Quản lý đa hồ sơ bé (Bơ, Miu), sổ tiêm phòng số hóa, cảnh báo dị ứng y tế, quét QR tiếp nhận tại quầy lễ tân và ký khóa cam kết an toàn da liễu. | `PetProfilesManagement.tsx`, `MedicalProfileAllergies.tsx`, `VaccinationHealthBook.tsx`, `IntakeFlow.tsx` | **ĐẠT 100%** |
| **3** | **Theo dõi tiến độ 4 mốc thời gian thực** | Timeline Stepper 4 mốc (*Đã nhận ➔ Đang chăm sóc ➔ Hoàn tất ➔ Chờ đón*), xem ảnh buồng cách ly A-02 có cảm biến môi trường (24.5°C, 28dB), theo dõi song song 2 bé, QR xuất viện `#OUT-BO-0941`, nghiệm thu trước/sau 10/10 và đánh giá 5 sao KTV. | `LiveTracking.tsx`, `ParallelTracking.tsx`, `IsolationCameraViewer.tsx`, `DischargeQRModal.tsx`, `InspectionReportModal.tsx`, `Review5StarModal.tsx` | **ĐẠT 100%** |
| **4** | **Lịch sử cá nhân hóa & Rebook 1-chạm** | Tra cứu lịch sử dịch vụ, chi tiết dược liệu Derma-Care, lưu công thức chăm sóc, hóa đơn điện tử VAT, bảng phân tích chi phí & kế hoạch ngân sách, Modal tái đặt lịch 1-chạm (chu kỳ 2 hoặc 3 tuần). | `CareHistory.tsx`, `ProductNotesDetail.tsx`, `DigitalInvoiceView.tsx`, `BudgetPlanView.tsx`, `OneClickRebookModal.tsx` | **ĐẠT 100%** |

## 3. Độ Bao Phủ 5 Trạng Thái Giao Diện HCI (5 UI States)

| Trạng thái giao diện | Kịch bản & Cơ chế tương tác trong App | Component phụ trách | Đánh giá |
| :--- | :--- | :--- | :---: |
| **1. Main Flow (Lý tưởng)** | Toàn bộ luồng đặt lịch, theo dõi 4 mốc, xem hồ sơ y tế, hóa đơn hoạt động mượt mà. | Toàn bộ các Feature Components | Đạt |
| **2. Loading State** | Skeleton Shimmer hiệu ứng chuyển động sóng mô phỏng nạp dữ liệu ma trận giờ và cảm biến. | `EdgeStatesModal.tsx` (`loading`) | Đạt |
| **3. Empty State** | Hiển thị khi chưa có lịch hẹn nào đang chạy trong ngày, có hình vector và nút CTA Đặt lịch ngay. | `EdgeStatesModal.tsx` (`empty`) | Đạt |
| **4. Error / Conflict State** | Cảnh báo xung đột dị ứng da khi chọn xà phòng tạo bọt cho bé Bơ kèm nút 1-Click Auto-Fix đổi sang Derma-Care. | `AllergyConflictModal.tsx` & `EdgeStatesModal.tsx` | Đạt |
| **4b. Network Error State** | Mất kết nối mạng, chuyển sang chế độ dữ liệu đệm ngoại tuyến (Offline cache) và nút Thử lại. | `EdgeStatesModal.tsx` (`error_network`) | Đạt |
| **5. Success State** | Modal xác nhận thành công chung, đồng bộ lịch vào máy và kích hoạt gói bảo an CareGuard. | `EdgeStatesModal.tsx` (`success`) | Đạt |

## 4. Bằng Chứng Acceptance Gates (Theo Tiêu Chuẩn Rubric)

1. **Precondition Gate**: Toàn bộ 18 Wireframes và 35 Prototypes SVGs có sẵn đầy đủ trong repository.
2. **Coverage Gate**: 4 quy trình nghiệp vụ cốt lõi đều được cài đặt hoàn chỉnh từ đầu đến cuối (End-to-End).
3. **Interaction Gate**: Mọi nút bấm, chuyển tab, chuyển mốc, toggle switch, slider ngân sách đều có state handler và phản hồi giao diện thực.
4. **Improvement Gate**: Đã hiện thực trọn vẹn các tương tác cải tiến: Tự động đính kèm dặn dò dị ứng (Auto-attach), khóa chỗ tức thì, timeline 4 mốc có thể tương tác, và Rebook 1-chạm.
5. **Consistency Gate**: Toàn bộ luồng sử dụng chung một kho dữ liệu local thống nhất trong `src/data/mockData.ts` và đồng bộ qua `localStorage`.
6. **Accessibility Gate**: 100% biểu tượng là vector monochrome (cấm hoàn toàn emoji), touch target $\ge 44\text{px}$, nút CTA $\ge 56\text{px}$, tỷ lệ tương phản WCAG AAA.
7. **Frontend-only Gate**: 100% frontend React + TypeScript, không có backend/database ẩn, dữ liệu mô phỏng minh bạch.
