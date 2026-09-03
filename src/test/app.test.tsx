import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../App';

describe('PetCare Pro HCI — 4 Quy Trình Cốt Lõi & Giao Diện Scannable', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('1. Render Home Dashboard thành công với thẻ Active Tracking Card & danh sách thú cưng', () => {
    render(<App />);

    // Kiểm tra title app
    expect(screen.getAllByText(/PetCare Pro/i)[0]).toBeInTheDocument();

    // Kiểm tra thẻ Active Booking đang chạy của Bơ
    expect(screen.getByText(/Bé Bơ — Derma-Care/i)).toBeInTheDocument();
    expect(screen.getByText(/KTV/i)).toBeInTheDocument();

    // Kiểm tra danh sách thú cưng
    expect(screen.getAllByText('Bơ')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Miu')[0]).toBeInTheDocument();
    expect(screen.getAllByText(/DỊ ỨNG XÀ PHÒNG/i)[0]).toBeInTheDocument();
  });

  it('2. Chuyển đổi mượt mà giữa 4 tab trên Bottom Navigation Bar', () => {
    render(<App />);

    // Tab Đặt lịch
    const bookingTab = screen.getByRole('tab', { name: /Tab Đặt lịch hẹn/i });
    fireEvent.click(bookingTab);
    expect(screen.getByText(/CHỌN HỒ SƠ/i)).toBeInTheDocument();

    // Tab Tiến độ
    const trackingTab = screen.getByRole('tab', { name: /Tab Theo dõi tiến độ 4 mốc/i });
    fireEvent.click(trackingTab);
    expect(screen.getByText(/Tiến độ trực tiếp/i)).toBeInTheDocument();

    // Tab Hồ sơ
    const petsTab = screen.getByRole('tab', { name: /Tab Hồ sơ thú cưng/i });
    fireEvent.click(petsTab);
    expect(screen.getByText(/Hồ sơ thú cưng/i)).toBeInTheDocument();

    // Quay về Tab Trang chủ
    const homeTab = screen.getByRole('tab', { name: /Tab Trang chủ/i });
    fireEvent.click(homeTab);
    expect(screen.getByText(/Bé Bơ — Derma-Care/i)).toBeInTheDocument();
  });

  it('3. Persona 1 Goal 1: Đặt lịch 5 bước chuẩn xác theo Prototype Figma (Bơ · Thứ Bảy · 09:00)', () => {
    render(<App />);

    // Mở tab đặt lịch (01_select_pet.svg)
    fireEvent.click(screen.getByRole('tab', { name: /Tab Đặt lịch hẹn/i }));
    expect(screen.getByText(/CHỌN HỒ SƠ/i)).toBeInTheDocument();
    expect(screen.getByText(/Poodle · Hồ sơ của Lan/i)).toBeInTheDocument();
    expect(screen.getByText(/Sẵn sàng chọn dịch vụ/i)).toBeInTheDocument();

    // Bước 1 -> Bấm "Tiếp tục"
    fireEvent.click(screen.getByRole('button', { name: /Tiếp tục/i }));

    // Bước 2 (02_select_service.svg)
    expect(screen.getByText(/Poodle · Đã chọn/i)).toBeInTheDocument();
    expect(screen.getByText(/CHỌN MỘT DỊCH VỤ/i)).toBeInTheDocument();
    expect(screen.getByText(/Gói chăm sóc định kỳ/i)).toBeInTheDocument();

    // Bước 2 -> Bấm "Tiếp tục"
    fireEvent.click(screen.getByRole('button', { name: /Tiếp tục/i }));

    // Bước 3 (03_choose_saturday_slot.svg)
    expect(screen.getByText(/BUỔI SÁNG/i)).toBeInTheDocument();
    expect(screen.getByText(/CÒN TRỐNG/i)).toBeInTheDocument();

    // Bước 3 -> Bấm "Chọn khung giờ này"
    fireEvent.click(screen.getByRole('button', { name: /Chọn khung giờ này/i }));

    // Bước 4 (04_review_booking.svg)
    expect(screen.getByText(/Bơ · Tắm \+ cắt tỉa/i)).toBeInTheDocument();
    expect(screen.getByText(/NGÀY HẸN/i)).toBeInTheDocument();
    expect(screen.getByText(/BẮT ĐẦU/i)).toBeInTheDocument();
    expect(screen.getByText(/Xác nhận tức thì/i)).toBeInTheDocument();
    expect(screen.getByText(/Giữ chỗ ngay khi xác nhận/i)).toBeInTheDocument();

    // Bước 4 -> Bấm "Xác nhận đặt lịch"
    fireEvent.click(screen.getByRole('button', { name: /Xác nhận đặt lịch/i }));

    // Bước 5 (05_booking_success.svg)
    expect(screen.getByText(/HOÀN TẤT/i)).toBeInTheDocument();
    expect(screen.getByText(/Đã đặt lịch/i)).toBeInTheDocument();
    expect(screen.getByText(/Bơ · Thứ Bảy · 09:00/i)).toBeInTheDocument();
    expect(screen.getByText(/BK-8902/i)).toBeInTheDocument();
    expect(screen.getByText(/MÃ ĐÃ TẠO/i)).toBeInTheDocument();
    expect(screen.getByText(/Lịch cuối tuần đã sẵn sàng/i)).toBeInTheDocument();

    // Bấm "Xem lịch hẹn" -> chuyển sang màn hình Live Tracking
    fireEvent.click(screen.getByRole('button', { name: /Xem lịch hẹn/i }));
    expect(screen.getByText(/Tiến độ trực tiếp/i)).toBeInTheDocument();
  });

  it('4. Kích hoạt và tự động xử lý xung đột dị ứng y tế (1-Click Auto-Fix)', () => {
    render(<App />);

    // Mở tab đặt lịch
    fireEvent.click(screen.getByRole('tab', { name: /Tab Đặt lịch hẹn/i }));
    fireEvent.click(screen.getByRole('button', { name: /Tiếp tục/i }));

    // Chọn Gói Tắm tiêu chuẩn (chứa hương liệu gây dị ứng da cho Bơ)
    const standardServiceCard = screen.getByText(/Tắm tiêu chuẩn/i);
    fireEvent.click(standardServiceCard);

    // Kỳ vọng modal Cảnh báo xung đột y tế xuất hiện
    expect(screen.getByText(/Cảnh Báo Xung Đột Y Tế/i)).toBeInTheDocument();
    expect(screen.getByText(/Nguy Cơ Kích Ứng Viêm Da!/i)).toBeInTheDocument();

    // Bấm 1-Click Auto-Fix đổi sang Derma-Care
    const autoFixBtn = screen.getByText(/Đổi sang Derma-Care dịu nhẹ/i);
    fireEvent.click(autoFixBtn);

    // Modal đóng và gói an toàn được giữ
    expect(screen.queryByText(/Nguy Cơ Kích Ứng Viêm Da!/i)).not.toBeInTheDocument();
  });

  it('5. Quy trình 3: Theo dõi tiến độ 4 mốc thời gian thực', () => {
    render(<App />);

    // Chuyển sang tab Tiến độ
    fireEvent.click(screen.getByRole('tab', { name: /Tab Theo dõi tiến độ 4 mốc/i }));

    // Ban đầu ở Mốc 2
    expect(screen.getByText(/Đang ngâm bồn sục Derma-Care/i)).toBeInTheDocument();

    // Bấm chuyển sang Mốc 3 (Hoàn tất)
    const step3Button = screen.getByRole('button', { name: /Mốc 3: Hoàn tất/i });
    fireEvent.click(step3Button);

    // Giao diện cập nhật Mốc 3
    expect(screen.getByText(/Đã sấy chuốt lông sạch thơm/i)).toBeInTheDocument();

    // Bấm chuyển sang Mốc 4 (Chờ đón)
    const step4Button = screen.getByRole('button', { name: /Mốc 4: Chờ đón/i });
    fireEvent.click(step4Button);

    // Giao diện cập nhật Mốc 4 và xuất hiện nút mở QR xuất viện
    expect(screen.getByText(/Bé đang thư giãn tại sảnh chờ/i)).toBeInTheDocument();
    expect(screen.getByText(/Mở QR đón bé/i)).toBeInTheDocument();
  });

  it('6. Quy trình 4: Lịch sử cá nhân hóa, Hóa đơn VAT & Rebook 1-chạm', () => {
    render(<App />);

    // Vào tab Hồ sơ
    fireEvent.click(screen.getByRole('tab', { name: /Tab Hồ sơ thú cưng/i }));

    // Kiểm tra danh sách lịch sử
    expect(screen.getByText(/Lịch sử chăm sóc/i)).toBeInTheDocument();
    expect(screen.getByText(/15\/08\/2026/i)).toBeInTheDocument();

    // Bấm nút Rebook 1-chạm
    const rebookBtns = screen.getAllByRole('button', { name: /Tái đặt lịch 1 chạm/i });
    fireEvent.click(rebookBtns[0]);

    // Modal Rebook mở ra, kế thừa 100% KTV và dặn dò dị ứng
    expect(screen.getByText(/Tái Đặt Lịch Cho Bé Bơ/i)).toBeInTheDocument();
    expect(screen.getByText(/Kế thừa KTV thân quen/i)).toBeInTheDocument();

    // Xác nhận Rebook
    fireEvent.click(screen.getByRole('button', { name: /Xác nhận tái đặt lịch/i }));

    // Trở về trang chủ với thông báo thành công
    expect(screen.getByText(/Thao Tác Thành Công!/i)).toBeInTheDocument();
  });

  it('7. Đặt lịch gộp 2 bé (Bơ + Miu) với ưu đãi Combo 10% (Wireframe 06)', () => {
    render(<App />);

    // Bấm nút Gộp 2 bé trên Dashboard
    const multiPetBtn = screen.getByRole('button', { name: /Đặt lịch gộp 2 bé giảm 10%/i });
    fireEvent.click(multiPetBtn);

    // Kiểm tra màn hình đặt lịch gộp
    expect(screen.getByText(/Chăm Sóc Song Song Bơ & Miu/i)).toBeInTheDocument();
    expect(screen.getByText(/387.000đ/i)).toBeInTheDocument();
    expect(screen.getByText(/Hoàng Mai & Tuấn Anh/i)).toBeInTheDocument();

    // Xác nhận đặt lịch gộp
    fireEvent.click(screen.getByRole('button', { name: /Xác nhận đặt lịch gộp/i }));
    expect(screen.getByText(/Thao Tác Thành Công!/i)).toBeInTheDocument();
  });

  it('8. Chuyển đổi tài khoản mượt mà giữa Lan (Bơ) và Khoa (Miu)', () => {
    render(<App />);

    // Nút chuyển tài khoản người dùng trên status bar
    const switchBtn = screen.getByRole('button', { name: /Tài khoản người dùng/i });
    fireEvent.click(switchBtn);

    // Đổi sang Khoa (Miu)
    expect(screen.getByText(/Minh Khoa/i)).toBeInTheDocument();

    // Đổi lại sang Lan (Bơ)
    fireEvent.click(switchBtn);
    expect(screen.getByText(/Hoàng Lan/i)).toBeInTheDocument();
  });

  it('9. Tra cứu chi tiết dược phẩm an toàn & Hóa đơn điện tử VAT', () => {
    render(<App />);

    // Vào tab Hồ sơ
    fireEvent.click(screen.getByRole('tab', { name: /Tab Hồ sơ thú cưng/i }));

    // Xem chi tiết sản phẩm
    const productBtns = screen.getAllByRole('button', { name: /Xem chi tiết sản phẩm/i });
    fireEvent.click(productBtns[0]);
    expect(screen.getByText(/XÁC MINH SẢN PHẨM DERMA-CARE/i)).toBeInTheDocument();
    expect(screen.getByText(/Derma-Care Hypoallergenic Shampoo/i)).toBeInTheDocument();

    // Đóng modal sản phẩm
    fireEvent.click(screen.getByRole('button', { name: /Đóng hộp thoại/i }));

    // Kiểm tra hóa đơn điện tử
    const viewInvoiceBtn = screen.getByRole('button', { name: /Hóa đơn điện tử VAT/i });
    fireEvent.click(viewInvoiceBtn);
    expect(screen.getByText(/HÓA ĐƠN ĐIỆN TỬ DỊCH VỤ CHĂM SÓC/i)).toBeInTheDocument();
  });

  it('10. Persona 1 Goal 2: Quy trình tiếp nhận 5 bước chuẩn xác (Quét mã, Cảnh báo đỏ dị ứng, Đối chiếu phương án & Gắn phiếu KTV)', () => {
    render(<App />);

    // Mở mã QR tiếp nhận quầy từ thẻ Active Card ở Trang chủ
    const qrBtn = screen.getByRole('button', { name: /Mở mã QR quầy/i });
    fireEvent.click(qrBtn);

    // Bước 1: Xuất trình mã tiếp nhận
    expect(screen.getByText(/ĐƯA MÃ CHO LỄ TÂN/i)).toBeInTheDocument();
    expect(screen.getByText(/BK-8902/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Lễ tân quét mã/i }));

    // Bước 2: Đã quét mã thành công
    expect(screen.getByText(/Đã quét mã/i)).toBeInTheDocument();
    expect(screen.getByText(/Đúng hồ sơ Bơ/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Xem lưu ý của Bơ/i }));

    // Bước 3: Lưu ý của Bơ (2 cảnh báo trọng điểm)
    expect(screen.getByText(/Xà phòng hương liệu/i)).toBeInTheDocument();
    expect(screen.getByText(/CẢNH BÁO ĐỎ/i)).toBeInTheDocument();
    expect(screen.getByText(/Sợ tiếng máy sấy/i)).toBeInTheDocument();
    expect(screen.getByText(/NHÚT NHÁT/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Xem phương án/i }));

    // Bước 4: Đối chiếu 2 phương án giải pháp
    expect(screen.getByText(/Phương án chăm sóc/i)).toBeInTheDocument();
    expect(screen.getByText(/ĐÃ ĐỐI CHIẾU/i)).toBeInTheDocument();
    expect(screen.getByText(/Sữa tắm thảo dược/i)).toBeInTheDocument();
    expect(screen.getByText(/Buồng sấy êm/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Xác nhận/i }));

    // Bước 5: Gắn phiếu KTV & Cam kết an tâm
    expect(screen.getByText(/ĐÃ GHI NHẬN/i)).toBeInTheDocument();
    expect(screen.getByText(/Lưu ý đã được gắn/i)).toBeInTheDocument();
    expect(screen.getByText(/DỊ ỨNG HƯƠNG LIỆU/i)).toBeInTheDocument();
    expect(screen.getByText(/SẤY ÊM/i)).toBeInTheDocument();
    expect(screen.getByText(/Lan có thể an tâm/i)).toBeInTheDocument();

    // Bấm "Theo dõi tiến độ" -> Chuyển sang màn hình Live Tracking
    fireEvent.click(screen.getByRole('button', { name: /Theo dõi tiến độ/i }));
    expect(screen.getByText(/Tiến độ trực tiếp/i)).toBeInTheDocument();
  });
});
