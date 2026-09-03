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
    expect(screen.getByText(/Chọn bé chăm sóc/i)).toBeInTheDocument();

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

  it('3. Quy trình 1: Đặt lịch đơn bé thành công và khóa chỗ tức thì (Auto-attach y tế)', () => {
    render(<App />);

    // Mở tab đặt lịch
    fireEvent.click(screen.getByRole('tab', { name: /Tab Đặt lịch hẹn/i }));

    // Bước 1: Chọn thú cưng (Mặc định chọn Bơ) -> bấm Tiếp tục
    fireEvent.click(screen.getByText(/Tiếp tục chọn dịch vụ/i));

    // Bước 2: Chọn dịch vụ Derma-Care an toàn -> bấm Chọn giờ hẹn
    expect(screen.getByText(/Tắm Dược Liệu Trị Liệu Da/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Chọn giờ hẹn/i));

    // Bước 3: Ma trận khung giờ -> bấm Rà soát đặt lịch
    expect(screen.getByText(/Khung giờ khả dụng/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Rà soát đặt lịch/i));

    // Bước 4: Rà soát & Auto-attach ghi chú y tế
    expect(screen.getByText(/TỰ ĐỘNG ĐÍNH KÈM Y TẾ:/i)).toBeInTheDocument();
    expect(screen.getByText(/DÙNG DERMA-CARE/i)).toBeInTheDocument();

    // Bấm Xác nhận đặt lịch ngay
    fireEvent.click(screen.getByText(/Xác nhận đặt lịch/i));

    // Bước 5: Thành công & Khóa chỗ tức thì
    expect(screen.getByText(/ĐÃ KHÓA CHỖ THÀNH CÔNG/i)).toBeInTheDocument();
    expect(screen.getByText(/Xuất trình mã QR tại quầy/i)).toBeInTheDocument();
  });

  it('4. Kích hoạt và tự động xử lý xung đột dị ứng y tế (1-Click Auto-Fix)', () => {
    render(<App />);

    // Mở tab đặt lịch
    fireEvent.click(screen.getByRole('tab', { name: /Tab Đặt lịch hẹn/i }));
    fireEvent.click(screen.getByText(/Tiếp tục chọn dịch vụ/i));

    // Chọn Gói Tiêu Chuẩn (chứa hương liệu gây dị ứng da cho Bơ)
    const standardServiceCard = screen.getByText(/Tắm & Vệ Sinh Tiêu Chuẩn/i);
    fireEvent.click(standardServiceCard);

    // Kỳ vọng modal Cảnh báo xung đột y tế xuất hiện
    expect(screen.getByText(/Cảnh Báo Xung Đột Y Tế/i)).toBeInTheDocument();
    expect(screen.getByText(/Nguy Cơ Kích Ứng Viêm Da!/i)).toBeInTheDocument();

    // Bấm 1-Click Auto-Fix đổi sang Derma-Care
    const autoFixBtn = screen.getByText(/Đổi sang Derma-Care dịu nhẹ/i);
    fireEvent.click(autoFixBtn);

    // Modal đóng và gói Derma-Care được chọn an toàn
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

    // Xem Hóa đơn điện tử VAT
    const invoiceBtns = screen.getAllByRole('button', { name: /Xem hóa đơn điện tử VAT/i });
    fireEvent.click(invoiceBtns[0]);
    expect(screen.getByText(/HÓA ĐƠN ĐIỆN TỬ VAT/i)).toBeInTheDocument();
  });
});
