import React, { useState } from 'react';
import { Pet, Service, Booking } from '../../types';
import { PawIcon, ShieldIcon, CheckIcon, ClockIcon, UserIcon } from '../../components/icons/Icons';

interface MultiPetBookingProps {
  pets: Pet[];
  onConfirmMultiBooking: (booking: Partial<Booking>) => void;
  onCancel: () => void;
}

export const MultiPetBooking: React.FC<MultiPetBookingProps> = ({
  pets,
  onConfirmMultiBooking,
  onCancel
}) => {
  const [selectedDate, setSelectedDate] = useState('Thứ 7, 05/09/2026');
  const [selectedTime, setSelectedTime] = useState('09:30 - 10:30');

  const bo = pets.find((p) => p.id === 'pet-bo') || pets[0];
  const miu = pets.find((p) => p.id === 'pet-miu') || pets[1];

  const handleConfirm = () => {
    onConfirmMultiBooking({
      bookingCode: 'BK-MULTI-904',
      checkInCode: 'IN-MULTI-904',
      dischargeCode: 'OUT-MULTI-904',
      petIds: [bo.id, miu.id],
      serviceId: 'srv-combo-multi',
      dateString: selectedDate,
      timeString: selectedTime,
      technicianName: 'Hoàng Mai & Tuấn Anh (Song song)',
      technicianExperience: '2 KTV chuyên trách 1-1',
      totalAmount: 387000,
      discountAmount: 83000, // Combo -10% và ưu đãi gộp
      status: 1, // Mốc 1: Đã nhận / Sẵn sàng
      stationOrRoom: 'Bồn sục 02 & Buồng cách ly A-02',
      autoAttachedNotes: [
        'Bơ: Dị ứng xà phòng hương liệu -> Sử dụng Derma-Care pH 6.5',
        'Miu: Nhút nhát -> Bố trí buồng riêng A-02 yên tĩnh cách âm',
        'Điều phối đồng bộ: Cả 2 bé hoàn tất cùng lúc ~10:30'
      ],
      customInstructions: 'Gia đình mang theo túi vận chuyển đôi đón 2 bé cùng lúc'
    });
  };

  return (
    <div style={{ paddingTop: '8px' }}>
      {/* Banner Combo Ưu Đãi */}
      <div className="card" style={{ backgroundColor: '#F0FDFA', border: '2px solid #0D766E', marginBottom: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span className="badge badge-teal">[ĐẶT LỊCH GỘP 2 BÉ]</span>
          <span className="badge badge-amber" style={{ fontWeight: 800 }}>-10% COMBO</span>
        </div>
        <h2 className="text-h2" style={{ color: '#0D766E', marginBottom: '4px' }}>
          Chăm Sóc Song Song Bơ & Miu
        </h2>
        <p className="text-sub" style={{ fontSize: '12px' }}>
          Bố trí 2 KTV chuyên trách phục vụ cùng khung giờ, đón 2 bé về cùng 1 lượt thuận tiện!
        </p>
      </div>

      {/* Thông tin bé 1: Bơ */}
      <section className="card" style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#F0FDFA',
            border: '2px solid #0D766E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            color: '#0D766E'
          }}>
            {bo.avatarText}
          </div>
          <div>
            <strong style={{ fontSize: '15px' }}>Bé {bo.name}</strong> • <span className="text-sub">{bo.breed}</span>
            <div style={{ fontSize: '12px', color: '#0D766E', fontWeight: 600, marginTop: '2px' }}>
              Dịch vụ: Tắm dược liệu Derma-Care (Bồn sục 02)
            </div>
          </div>
        </div>
        <div style={{ background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '8px', padding: '6px 10px', fontSize: '11px', color: '#9F1239' }}>
          <strong>Đã khóa dặn dò:</strong> Dị ứng xà phòng hương liệu, sấy lồng êm nhiệt độ thấp
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '12px', color: '#64748B' }}>
          <span>KTV phụ trách: Hoàng Mai</span>
          <span>Giá gốc: 250.000đ</span>
        </div>
      </section>

      {/* Thông tin bé 2: Miu */}
      <section className="card" style={{ marginBottom: '14px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#FFFBEB',
            border: '2px solid #D97706',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            color: '#D97706'
          }}>
            {miu.avatarText}
          </div>
          <div>
            <strong style={{ fontSize: '15px' }}>Bé {miu.name}</strong> • <span className="text-sub">{miu.breed}</span>
            <div style={{ fontSize: '12px', color: '#D97706', fontWeight: 600, marginTop: '2px' }}>
              Dịch vụ: Spa Buồng Cách Ly A-02 Yên Tĩnh
            </div>
          </div>
        </div>
        <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '8px', padding: '6px 10px', fontSize: '11px', color: '#92400E' }}>
          <strong>Đã khóa dặn dò:</strong> Bé rất nhút nhát, giữ phòng cách âm, không tiếp xúc thú cưng khác
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '12px', color: '#64748B' }}>
          <span>KTV phụ trách: Tuấn Anh</span>
          <span>Giá gốc: 220.000đ</span>
        </div>
      </section>

      {/* Chọn Ngày & Giờ gộp */}
      <section className="card" style={{ marginBottom: '16px' }}>
        <h3 className="text-h3" style={{ marginBottom: '8px' }}>Thời gian hẹn chăm sóc song song</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #E2E8F0' }}>
          <span style={{ fontSize: '13px', color: '#64748B' }}>Ngày hẹn:</span>
          <strong style={{ fontSize: '13px', color: '#0F172A' }}>{selectedDate}</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
          <span style={{ fontSize: '13px', color: '#64748B' }}>Khung giờ khả dụng 2 KTV:</span>
          <strong style={{ fontSize: '13px', color: '#0D766E' }}>{selectedTime}</strong>
        </div>
      </section>

      {/* Tổng thanh toán */}
      <div className="card" style={{ backgroundColor: '#F8FAFC', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '13px' }}>
          <span style={{ color: '#64748B' }}>Tổng chi phí gốc (2 bé):</span>
          <span>470.000đ</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px', color: '#166534' }}>
          <span>Ưu đãi Combo gộp 2 bé (-10%):</span>
          <strong>-83.000đ</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E2E8F0', paddingTop: '8px' }}>
          <span style={{ fontWeight: 700, fontSize: '15px' }}>Số tiền thanh toán:</span>
          <span className="text-price">387.000đ</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button className="btn-outline" style={{ flex: 1 }} onClick={onCancel}>
          Quay lại
        </button>
        <button className="btn-primary" style={{ flex: 2 }} onClick={handleConfirm}>
          <CheckIcon size={18} />
          <span>Xác nhận đặt lịch gộp</span>
        </button>
      </div>
    </div>
  );
};
