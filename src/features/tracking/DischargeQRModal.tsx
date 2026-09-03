import React, { useState } from 'react';
import { Booking, Pet } from '../../types';
import { QrCodeIcon, ShieldIcon, CheckIcon } from '../../components/icons/Icons';

interface DischargeQRModalProps {
  booking: Booking;
  pet: Pet;
  onDischargeVerified: () => void;
  onClose: () => void;
}

export const DischargeQRModal: React.FC<DischargeQRModalProps> = ({
  booking,
  pet,
  onDischargeVerified,
  onClose
}) => {
  const [scanned, setScanned] = useState(false);

  const handleSimulateScan = () => {
    setScanned(true);
    setTimeout(() => {
      onDischargeVerified();
    }, 900);
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
        <span className="badge badge-teal">[ĐỐI SOÁT XUẤT VIỆN 2 CHIỀU]</span>
      </div>

      <h2 className="text-h2" style={{ marginBottom: '4px' }}>
        Mã QR Nhận Bé {pet.name}
      </h2>
      <p className="text-sub" style={{ fontSize: '12px', marginBottom: '16px' }}>
        Xuất trình mã này tại quầy giao nhận để kiểm tra vòng cổ định danh chống giao nhầm thú cưng.
      </p>

      <div className="card" style={{ padding: '24px 16px', backgroundColor: '#FFFFFF', border: '2px solid #0D766E', marginBottom: '16px' }}>
        <div style={{
          width: '180px',
          height: '180px',
          backgroundColor: '#F8FAFC',
          border: '2px solid #CCFBF1',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 12px auto',
          color: '#0D766E'
        }}>
          <QrCodeIcon size={110} />
          <strong style={{ fontSize: '15px', color: '#0F172A', marginTop: '6px' }}>
            {booking.dischargeCode}
          </strong>
        </div>

        <div style={{ fontSize: '13px', color: '#0F172A', fontWeight: 700 }}>
          Hồ sơ: Bé {pet.name} ({pet.breed} • {pet.weight})
        </div>
        <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>
          Người nhận: Nguyễn Hoàng Lan • SĐT: 0903 *** 892
        </div>
      </div>

      <div className="card" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px', textAlign: 'left' }}>
        <ShieldIcon size={20} color="#166534" />
        <span style={{ fontSize: '12px', color: '#166534', fontWeight: 600 }}>
          Bảo mật định danh CareGuard 100%: Quầy chỉ bàn giao khi mã QR trùng khớp với vòng đeo chân của bé.
        </span>
      </div>

      {scanned ? (
        <div className="badge badge-success" style={{ width: '100%', height: '48px', justifyContent: 'center', fontSize: '14px' }}>
          <CheckIcon size={18} />
          <span>Đối soát thành công! Chuyển sang nghiệm thu thể trạng...</span>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn-outline" style={{ flex: 1 }} onClick={onClose}>
            Đóng
          </button>
          <button className="btn-primary" style={{ flex: 2 }} onClick={handleSimulateScan}>
            <CheckIcon size={18} />
            <span>Xác nhận nhận bé tại quầy</span>
          </button>
        </div>
      )}
    </div>
  );
};
