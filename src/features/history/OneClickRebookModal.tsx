import React, { useState } from 'react';
import { CareHistoryRecord, Pet, Booking } from '../../types';
import { RefreshIcon, CheckIcon, ShieldIcon, CalendarIcon } from '../../components/icons/Icons';

interface OneClickRebookModalProps {
  record: CareHistoryRecord;
  pet: Pet;
  onConfirmRebook: (newBooking: Partial<Booking>) => void;
  onClose: () => void;
}

export const OneClickRebookModal: React.FC<OneClickRebookModalProps> = ({
  record,
  pet,
  onConfirmRebook,
  onClose
}) => {
  // Gợi ý chu kỳ 2 tuần hoặc 3 tuần theo Wireframe 25
  const [cycleOption, setCycleOption] = useState<'2weeks' | '3weeks'>('2weeks');
  const [selectedSlot, setSelectedSlot] = useState('09:30');

  const cycleDates = {
    '2weeks': 'Thứ 7, 19/09/2026 (Chu kỳ 2 tuần)',
    '3weeks': 'Thứ 7, 26/09/2026 (Chu kỳ 3 tuần)'
  };

  const handleConfirm = () => {
    onConfirmRebook({
      bookingCode: `BK-REBOOK-${Math.floor(100 + Math.random() * 900)}`,
      checkInCode: `IN-${pet.name.toUpperCase()}-REB`,
      dischargeCode: `OUT-${pet.name.toUpperCase()}-REB`,
      petIds: [pet.id],
      serviceId: 'srv-derma',
      dateString: cycleDates[cycleOption],
      timeString: `${selectedSlot} (~45 phút)`,
      technicianName: record.technicianName,
      technicianExperience: 'Kế thừa KTV thân quen',
      totalAmount: record.totalCost,
      status: 1,
      stationOrRoom: 'Bồn sục dược liệu 02',
      autoAttachedNotes: [
        `Kế thừa từ lượt ngày ${record.date}: Dị ứng xà phòng hương liệu`,
        'Sử dụng công thức đã lưu: Derma-Care Hypoallergenic pH 6.5',
        'Ưu tiên KTV Hoàng Mai phụ trách'
      ],
      customInstructions: 'Tái đặt lịch định kỳ 1-chạm giữ nguyên thói quen'
    });
  };

  return (
    <div style={{ paddingTop: '8px' }}>
      <div className="card" style={{ backgroundColor: '#F0FDFA', border: '2px solid #0D766E', marginBottom: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <span className="badge badge-teal">[TÁI ĐẶT LỊCH 1-CHẠM]</span>
          <span style={{ fontSize: '11px', color: '#0D766E', fontWeight: 700 }}>KẾ THỪA 100% THÔNG TIN</span>
        </div>
        <h2 className="text-h2" style={{ color: '#0D766E', marginBottom: '2px' }}>
          Tái Đặt Lịch Cho Bé {pet.name}
        </h2>
        <p className="text-sub" style={{ fontSize: '12px' }}>
          Kế thừa gói dịch vụ, KTV {record.technicianName} và toàn bộ dặn dò dị ứng da từ đợt trước!
        </p>
      </div>

      {/* Thông tin kế thừa */}
      <section className="card" style={{ marginBottom: '14px', fontSize: '13px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span className="text-sub">Dịch vụ kế thừa:</span>
          <strong>{record.serviceName}</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span className="text-sub">KTV ưu tiên:</span>
          <strong style={{ color: '#0D766E' }}>{record.technicianName} (Kinh nghiệm 4 năm)</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span className="text-sub">Sản phẩm dùng:</span>
          <span>Derma-Care Sensitive pH 6.5</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '6px' }}>
          <span style={{ fontWeight: 700 }}>Chi phí giữ nguyên:</span>
          <span className="text-price" style={{ fontSize: '16px' }}>{record.totalCost.toLocaleString('vi-VN')}đ</span>
        </div>
      </section>

      {/* Gợi ý chu kỳ hẹn */}
      <section className="card" style={{ marginBottom: '16px' }}>
        <h3 className="text-h3" style={{ marginBottom: '10px' }}>Chọn chu kỳ chăm sóc gợi ý</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            borderRadius: '10px',
            border: `1.5px solid ${cycleOption === '2weeks' ? '#0D766E' : '#E2E8F0'}`,
            backgroundColor: cycleOption === '2weeks' ? '#F0FDFA' : '#FFFFFF',
            cursor: 'pointer'
          }}>
            <input
              type="radio"
              name="cycle"
              checked={cycleOption === '2weeks'}
              onChange={() => setCycleOption('2weeks')}
              style={{ accentColor: '#0D766E' }}
            />
            <div>
              <strong style={{ fontSize: '13px', color: '#0F172A', display: 'block' }}>
                Sau 2 tuần (Khuyên dùng cho da dị ứng): 19/09/2026
              </strong>
              <span className="text-sub" style={{ fontSize: '11px' }}>Duy trì độ ẩm và lớp màng bảo vệ da cho Poodle</span>
            </div>
          </label>

          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            borderRadius: '10px',
            border: `1.5px solid ${cycleOption === '3weeks' ? '#0D766E' : '#E2E8F0'}`,
            backgroundColor: cycleOption === '3weeks' ? '#F0FDFA' : '#FFFFFF',
            cursor: 'pointer'
          }}>
            <input
              type="radio"
              name="cycle"
              checked={cycleOption === '3weeks'}
              onChange={() => setCycleOption('3weeks')}
              style={{ accentColor: '#0D766E' }}
            />
            <div>
              <strong style={{ fontSize: '13px', color: '#0F172A', display: 'block' }}>
                Sau 3 tuần: 26/09/2026
              </strong>
              <span className="text-sub" style={{ fontSize: '11px' }}>Chu kỳ spa vệ sinh thông thường</span>
            </div>
          </label>
        </div>
      </section>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button className="btn-outline" style={{ flex: 1 }} onClick={onClose}>
          Hủy
        </button>
        <button className="btn-primary" style={{ flex: 2 }} onClick={handleConfirm}>
          <RefreshIcon size={16} />
          <span>Xác nhận tái đặt lịch</span>
        </button>
      </div>
    </div>
  );
};
