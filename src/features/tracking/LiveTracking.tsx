import React, { useState } from 'react';
import { Booking, Pet, MilestoneStep } from '../../types';
import { TimelineStepper } from '../../components/common/TimelineStepper';
import { 
  ClockIcon, 
  ShieldIcon, 
  CameraIcon, 
  QrCodeIcon, 
  CheckIcon, 
  StarIcon, 
  PawIcon 
} from '../../components/icons/Icons';
import { Modal } from '../../components/common/Modal';

interface LiveTrackingProps {
  booking: Booking;
  pet: Pet;
  onMilestoneChange: (step: MilestoneStep) => void;
  onOpenParallelTracking: () => void;
  onOpenIsolationCam: () => void;
  onOpenDischargeQR: () => void;
  onOpenInspectionReport: () => void;
  onOpenServiceReview: () => void;
  onAddCustomInstruction: (text: string) => void;
}

export const LiveTracking: React.FC<LiveTrackingProps> = ({
  booking,
  pet,
  onMilestoneChange,
  onOpenParallelTracking,
  onOpenIsolationCam,
  onOpenDischargeQR,
  onOpenInspectionReport,
  onOpenServiceReview,
  onAddCustomInstruction
}) => {
  const [showInstructionModal, setShowInstructionModal] = useState(false);
  const [instructionText, setInstructionText] = useState('');
  const [instructionSuccess, setInstructionSuccess] = useState(false);

  const handleSendInstruction = () => {
    if (instructionText.trim()) {
      onAddCustomInstruction(instructionText.trim());
      setInstructionSuccess(true);
      setTimeout(() => {
        setInstructionSuccess(false);
        setShowInstructionModal(false);
        setInstructionText('');
      }, 800);
    }
  };

  const getMilestoneData = (step: MilestoneStep) => {
    switch (step) {
      case 1:
        return {
          badge: '[MỐC 1: TIẾP NHẬN QUẦY]',
          title: 'Đã hoàn tất tiếp nhận bé',
          detail: 'Thể trạng 4.5kg • Đã khóa dặn dò dị ứng xà phòng hương liệu',
          timeEstimate: '09:02'
        };
      case 2:
        return {
          badge: '[MỐC 2: ĐANG TẮM BỒN DƯỢC LIỆU]',
          title: 'Đang ngâm bồn sục Derma-Care',
          detail: 'Cân bằng pH 6.5 làm dịu da • KTV Hoàng Mai',
          timeEstimate: 'Dự kiến: 09:30'
        };
      case 3:
        return {
          badge: '[MỐC 3: HOÀN TẤT CHĂM SÓC]',
          title: 'Đã sấy chuốt lông sạch thơm',
          detail: 'Sấy lồng êm nhiệt độ 32°C • Da dịu sạch 10/10',
          timeEstimate: 'Hoàn tất lúc 09:40'
        };
      case 4:
        return {
          badge: '[MỐC 4: SẴN SÀNG ĐÓN BÉ]',
          title: 'Bé đang thư giãn tại sảnh chờ',
          detail: 'Mời bạn đến quầy số 01 xuất trình QR nhận bé',
          timeEstimate: 'Sẵn sàng đón'
        };
    }
  };

  const currentInfo = getMilestoneData(booking.status);

  return (
    <div style={{ paddingTop: '8px' }}>
      
      {/* Thẻ chính Live Tracking — Glanceable & Tối giản (Wireframe 18) */}
      <section className="card" style={{ border: '2px solid #0D766E', backgroundColor: '#FFFFFF', padding: '16px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span className="badge badge-teal">{currentInfo.badge}</span>
          <span style={{ fontSize: '12px', color: '#0D766E', fontWeight: 800 }}>{currentInfo.timeEstimate}</span>
        </div>

        <h2 className="text-h2" style={{ fontSize: '18px', color: '#0F172A', marginBottom: '4px' }}>
          {currentInfo.title}
        </h2>

        <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '12px' }}>
          {currentInfo.detail}
        </p>

        {/* Stepper 4 mốc */}
        <div style={{ margin: '10px 0' }}>
          <TimelineStepper
            currentStep={booking.status}
            onStepClick={onMilestoneChange}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC', borderRadius: '8px', padding: '8px 10px', fontSize: '12px' }}>
          <span>Phụ trách: <strong>{booking.technicianName}</strong></span>
          <span style={{ color: '#0D766E', fontWeight: 700 }}>{booking.stationOrRoom}</span>
        </div>

        {booking.customInstructions && (
          <div style={{ marginTop: '8px', backgroundColor: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '8px', padding: '6px 10px', fontSize: '11px', color: '#92400E' }}>
            <strong>Dặn dò của bạn:</strong> {booking.customInstructions}
          </div>
        )}
      </section>

      {/* Lưới thao tác bổ trợ — Scannable 4 ô */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '14px' }}>
        <button
          className="btn-outline"
          onClick={() => setShowInstructionModal(true)}
          style={{ height: '40px', fontSize: '12px' }}
        >
          <span>Gửi dặn dò KTV</span>
        </button>

        <button
          className="btn-outline"
          onClick={onOpenParallelTracking}
          style={{ height: '40px', fontSize: '12px' }}
        >
          <PawIcon size={14} color="#0D766E" />
          <span>Tiến độ 2 bé</span>
        </button>

        <button
          className="btn-outline"
          onClick={onOpenIsolationCam}
          style={{ height: '40px', fontSize: '12px' }}
        >
          <CameraIcon size={14} color="#0D766E" />
          <span>Buồng riêng A-02</span>
        </button>

        <button
          className="btn-outline"
          onClick={onOpenInspectionReport}
          style={{ height: '40px', fontSize: '12px' }}
        >
          <ShieldIcon size={14} color="#0D766E" />
          <span>Nghiệm thu da 10/10</span>
        </button>
      </section>

      {/* 1 Primary Action Button ở đáy màn hình (Quy tắc 1 CTA chính) */}
      {booking.status === 4 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          <button className="btn-primary" onClick={onOpenDischargeQR} aria-label="Mở mã QR xuất viện để nhận bé">
            <QrCodeIcon size={20} />
            <span>Mở QR đón bé (#{booking.dischargeCode})</span>
          </button>
          <button className="btn-secondary" onClick={onOpenServiceReview} aria-label="Đánh giá dịch vụ">
            <StarIcon size={16} />
            <span>Đánh giá 5 sao ca chăm sóc</span>
          </button>
        </div>
      ) : (
        <button
          className="btn-primary"
          onClick={() => onMilestoneChange(((booking.status % 4) + 1) as MilestoneStep)}
          style={{ marginBottom: '16px' }}
        >
          <span>
            {booking.status === 1 && 'Bắt đầu ngâm bồn Derma-Care (Mốc 2)'}
            {booking.status === 2 && 'Hoàn tất tắm & Chuyển sang sấy (Mốc 3)'}
            {booking.status === 3 && 'Chuyển bé ra sảnh sẵn sàng đón (Mốc 4)'}
          </span>
        </button>
      )}

      {/* Modal gửi dặn dò */}
      <Modal isOpen={showInstructionModal} onClose={() => setShowInstructionModal(false)} title="Dặn Dò Kỹ Thuật Viên">
        <textarea
          value={instructionText}
          onChange={(e) => setInstructionText(e.target.value)}
          placeholder="Nhập lưu ý nhanh cho KTV..."
          rows={2}
          style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '13px', marginBottom: '10px' }}
        />
        {instructionSuccess ? (
          <div className="badge badge-success" style={{ width: '100%', height: '40px', justifyContent: 'center' }}>
            <span>✓ Đã gửi tới KTV!</span>
          </div>
        ) : (
          <button className="btn-primary" onClick={handleSendInstruction}>
            Gửi dặn dò ngay
          </button>
        )}
      </Modal>

    </div>
  );
};
