import React, { useState } from 'react';
import { Booking, Pet } from '../../types';
import { QrCodeIcon, ShieldIcon, CheckIcon, AlertIcon } from '../../components/icons/Icons';

interface IntakeFlowProps {
  booking: Booking;
  pet: Pet;
  onConfirmIntakeHandoff: () => void;
  onCancel: () => void;
}

export const IntakeFlow: React.FC<IntakeFlowProps> = ({
  booking,
  pet,
  onConfirmIntakeHandoff,
  onCancel
}) => {
  // 1: Mã QR khách hàng, 2: KTV quét mã & cảnh báo y tế, 3: Khóa cam kết y tế & bàn giao
  const [intakeStep, setIntakeStep] = useState<1 | 2 | 3>(1);

  return (
    <div style={{ paddingTop: '8px' }}>
      
      {/* BƯỚC 1: XUẤT TRÌNH MÃ QR TIẾP NHẬN TẠI QUẦY (P1/G2/01) */}
      {intakeStep === 1 && (
        <div style={{ textAlign: 'center' }}>
          <h2 className="text-h2" style={{ marginBottom: '4px' }}>Mã QR tiếp nhận tại quầy</h2>
          <p className="text-sub" style={{ marginBottom: '16px' }}>
            Xuất trình mã này cho nhân viên lễ tân khi đưa bé {pet.name} đến tiệm.
          </p>

          <div className="card" style={{ padding: '24px 16px', backgroundColor: '#FFFFFF', border: '2px solid #0D766E', marginBottom: '16px' }}>
            <div style={{
              width: '160px',
              height: '160px',
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
              <QrCodeIcon size={96} />
              <span style={{ fontSize: '13px', fontWeight: 800, marginTop: '6px' }}>
                {booking.checkInCode}
              </span>
            </div>

            <div style={{ fontSize: '13px', color: '#0F172A', fontWeight: 600 }}>
              Lịch hẹn: {booking.bookingCode} • Bé {pet.name} ({pet.breed})
            </div>
            <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>
              Dịch vụ: Tắm dược liệu Derma-Care • KTV: {booking.technicianName}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-outline" style={{ flex: 1 }} onClick={onCancel}>
              Quay lại
            </button>
            <button 
              className="btn-primary" 
              style={{ flex: 2 }} 
              onClick={() => setIntakeStep(2)}
              aria-label="Xác nhận tiếp nhận tại quầy lễ tân"
            >
              <CheckIcon size={18} />
              <span>Tiếp nhận & Đối soát y tế</span>
            </button>
          </div>
        </div>
      )}

      {/* BƯỚC 2: KTV QUÉT MÃ & ĐỐI CHIẾU CẢNH BÁO Y TẾ (P1/G2/02 & 03) */}
      {intakeStep === 2 && (
        <div>
          <div className="card" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', marginBottom: '14px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <CheckIcon size={20} color="#166534" />
              <strong style={{ fontSize: '14px', color: '#166534' }}>
                Đã tiếp nhận bé {pet.name} tại quầy lễ tân!
              </strong>
            </div>
            <p style={{ fontSize: '12px', color: '#14532D', marginTop: '4px' }}>
              Thời gian quét tiếp nhận: 09:02 • Thể trạng ghi nhận: 4.5kg, hoạt bát.
            </p>
          </div>

          <section className="card" style={{ backgroundColor: '#FFF1F2', border: '1.5px solid #FECDD3', marginBottom: '14px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
              <AlertIcon size={20} color="#9F1239" />
              <strong style={{ fontSize: '14px', color: '#9F1239' }}>
                CẢNH BÁO Y TẾ ĐỐI SOÁT TRỰC TIẾP TẠI QUẦY
              </strong>
            </div>
            
            <div style={{ fontSize: '13px', color: '#881337', lineHeight: 1.5, marginBottom: '8px' }}>
              • <strong>Tiền sử dị ứng:</strong> {pet.allergyNotice}
              <br />
              • <strong>Chỉ định:</strong> Tuyệt đối không dùng xà phòng hương liệu tạo bọt. Sử dụng 100% Derma-Care Hypoallergenic pH 6.5.
              <br />
              • <strong>Tâm lý:</strong> Sấy lồng êm nhiệt độ 32°C, tránh làm bé hoảng sợ.
            </div>

            <div style={{ borderTop: '1px dashed #FECDD3', paddingTop: '8px', fontSize: '12px', color: '#9F1239', fontWeight: 600 }}>
              KTV {booking.technicianName} đã trực tiếp kiểm tra da bụng bé trước khi vào bồn sục.
            </div>
          </section>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-outline" style={{ flex: 1 }} onClick={() => setIntakeStep(1)}>
              Mã QR
            </button>
            <button className="btn-primary" style={{ flex: 2 }} onClick={() => setIntakeStep(3)}>
              <span>Khóa cam kết an toàn ca</span>
            </button>
          </div>
        </div>
      )}

      {/* BƯỚC 3: KHÓA CAM KẾT Y TẾ & BIÊN BẢN BÀN GIAO (P1/G2/04 & 05) */}
      {intakeStep === 3 && (
        <div>
          <div className="card" style={{ border: '2px solid #0D766E', backgroundColor: '#F0FDFA', marginBottom: '14px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
              <ShieldIcon size={24} color="#0D766E" />
              <div>
                <strong style={{ fontSize: '15px', color: '#0D766E' }}>
                  CAM KẾT AN TOÀN CA CHĂM SÓC ĐÃ KHÓA
                </strong>
                <p style={{ fontSize: '11px', color: '#0F4C45' }}>Bảo an CareGuard mã chứng chỉ: #CG-8902-SAFE</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '10px', border: '1px solid #CCFBF1', fontSize: '12px', color: '#0F172A', lineHeight: 1.5 }}>
              ✓ KTV <strong>{booking.technicianName}</strong> cam kết tuân thủ 100% quy trình ngâm bồn thảo dược Derma-Care.
              <br />
              ✓ Bồn sục số 02 đã được khử khuẩn tia UV trước khi bé vào.
              <br />
              ✓ Bật chế độ tự động cập nhật tiến độ qua 4 mốc thời gian thực.
            </div>
          </div>

          <div className="card" style={{ marginBottom: '18px' }}>
            <h3 className="text-h3" style={{ marginBottom: '8px' }}>Trạng thái tiếp nhận</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
              <span className="text-sub">Thời gian bắt đầu:</span>
              <strong>09:05</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
              <span className="text-sub">Dự kiến hoàn tất:</span>
              <strong>09:45</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span className="text-sub">Vị trí chăm sóc:</span>
              <strong style={{ color: '#0D766E' }}>{booking.stationOrRoom}</strong>
            </div>
          </div>

          <button className="btn-primary" onClick={onConfirmIntakeHandoff}>
            <CheckIcon size={18} />
            <span>Bắt đầu theo dõi tiến độ (Chuyển Mốc 2)</span>
          </button>
        </div>
      )}

    </div>
  );
};
