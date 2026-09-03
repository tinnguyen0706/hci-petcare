import React, { useState } from 'react';
import { Booking, Pet, MilestoneStep } from '../../types';
import { TimelineStepper } from '../../components/common/TimelineStepper';
import { 
  QrCodeIcon, 
  CheckIcon, 
  StarIcon, 
  BellIcon
} from '../../components/icons/Icons';
import boPhoto from '../../assets/bo.png';

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
  // Trạng thái hiển thị Banner Mô phỏng Push Notification (Màn hình 4 Prototype)
  const [showPushNotification, setShowPushNotification] = useState(false);

  // Dữ liệu tối giản chuẩn scannable theo từng mốc (khớp Prototype Persona 1 Goal 3)
  const getMilestoneConfig = () => {
    switch (booking.status) {
      case 1:
        return {
          title: `Đã nhận ${pet.name}`,
          subtitle: 'Hồ sơ và lưu ý đã bàn giao',
          badgeText: 'MỐC 1 HOÀN TẤT',
          badgeBg: '#F0FDF4',
          badgeColor: '#166534',
          ctaText: 'Xem cập nhật (Mốc 2)',
          nextMilestone: 2 as MilestoneStep,
          iconBg: '#F0FDF4',
          iconBorder: '#166534',
          heroIcon: <CheckIcon size={44} color="#166534" />
        };
      case 2:
        return {
          title: 'Đang chăm sóc',
          subtitle: `Tắm và cắt tỉa cho ${pet.name}`,
          badgeText: 'ĐANG THỰC HIỆN',
          badgeBg: '#F0FDFA',
          badgeColor: '#0D766E',
          ctaText: 'Xem cập nhật (Mốc 3)',
          nextMilestone: 3 as MilestoneStep,
          iconBg: '#F0FDFA',
          iconBorder: '#0D766E',
          heroIcon: <span style={{ fontSize: '36px' }}>🛁</span>
        };
      case 3:
        return {
          title: 'Chăm sóc hoàn tất',
          subtitle: `${pet.name} đã hoàn thành dịch vụ`,
          badgeText: 'MỐC 3 HOÀN TẤT',
          badgeBg: '#FEF3C7',
          badgeColor: '#B45309',
          ctaText: 'Xem thông báo đẩy',
          nextMilestone: 4 as MilestoneStep,
          iconBg: '#FEF3C7',
          iconBorder: '#D97706',
          heroIcon: <span style={{ fontSize: '36px' }}>✨</span>
        };
      case 4:
        return {
          title: `${pet.name} đang chờ đón`,
          subtitle: 'Lan có thể sang tiệm ngay',
          badgeText: 'MỐC 4 SẴN SÀNG',
          badgeBg: '#F0FDF4',
          badgeColor: '#166534',
          ctaText: 'Đến đón bé',
          nextMilestone: null,
          iconBg: '#F0FDF4',
          iconBorder: '#166534',
          heroIcon: pet.id === 'pet-bo' ? (
            <img src={boPhoto} alt="Bơ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#0D766E' }}>{pet.avatarText}</span>
          )
        };
    }
  };

  const config = getMilestoneConfig();

  return (
    <div style={{ paddingTop: '8px', paddingBottom: '32px' }}>

      {/* ========================================================= */}
      {/* BANNER MÔ PHỎNG PUSH NOTIFICATION (04_push_notification)  */}
      {/* ========================================================= */}
      {showPushNotification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '400px',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1.5px solid #0D766E',
          padding: '16px 18px',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.22)',
          zIndex: 9999,
          animation: 'slideDown 0.3s ease-out'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '14px' }}>🐾</span>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#0D766E', letterSpacing: '0.6px' }}>
                PETCARE · VỪA XONG
              </span>
            </div>
            <button
              onClick={() => setShowPushNotification(false)}
              style={{ background: 'none', border: 'none', fontSize: '16px', color: '#64748B', cursor: 'pointer', padding: 0 }}
              aria-label="Đóng thông báo"
            >
              ✕
            </button>
          </div>

          <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
            {pet.name} đã hoàn tất
          </div>
          <div style={{ fontSize: '13px', color: '#475569', marginBottom: '12px' }}>
            Sẵn sàng chuyển sang chờ đón
          </div>

          <div style={{
            backgroundColor: '#F8FAFC',
            borderRadius: '12px',
            padding: '8px 12px',
            fontSize: '11px',
            color: '#64748B',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span>⚡</span>
            <span>Thông báo tức thì · Không cần gọi điện hỏi tiệm</span>
          </div>

          <button
            type="button"
            onClick={() => {
              setShowPushNotification(false);
              onMilestoneChange(4);
            }}
            style={{
              width: '100%',
              height: '46px',
              borderRadius: '14px',
              backgroundColor: '#0D766E',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Mở tiến độ
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* 1. THANH STEPPER 4 MỐC TRỰC QUAN                          */}
      {/* ========================================================= */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        padding: '16px 14px',
        marginBottom: '16px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#64748B', letterSpacing: '0.6px' }}>
            TIẾN ĐỘ THỜI GIAN THỰC
          </span>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#0D766E' }}>
            Mốc {booking.status}/4
          </span>
        </div>

        <TimelineStepper
          currentStep={booking.status}
          onStepClick={onMilestoneChange}
        />
      </div>

      {/* ========================================================= */}
      {/* 2. HERO STATUS CARD — TỐI GIẢN CHUẨN PROTOTYPE            */}
      {/* ========================================================= */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '28px',
        border: '2px solid #CCFBF1',
        padding: '24px 20px',
        textAlign: 'center',
        marginBottom: '20px',
        boxShadow: '0 4px 18px rgba(13, 118, 110, 0.08)'
      }}>
        {/* Badge mốc */}
        <div style={{ marginBottom: '16px' }}>
          <span style={{
            backgroundColor: config.badgeBg,
            color: config.badgeColor,
            fontSize: '11px',
            fontWeight: 800,
            padding: '4px 14px',
            borderRadius: '12px'
          }}>
            {config.badgeText}
          </span>
        </div>

        {/* Biểu tượng Hero trạng thái */}
        <div style={{
          width: '96px',
          height: '96px',
          borderRadius: '50%',
          backgroundColor: config.iconBg,
          border: `3px solid ${config.iconBorder}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 18px auto',
          boxShadow: '0 6px 20px rgba(13, 118, 110, 0.12)',
          overflow: 'hidden'
        }}>
          {config.heroIcon}
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', margin: '0 0 6px 0' }}>
          {config.title}
        </h2>
        <div style={{ fontSize: '14px', color: '#64748B', marginBottom: '18px' }}>
          {config.subtitle}
        </div>

        {/* Thẻ phụ ngắn gọn: KTV & Phòng chăm sóc */}
        <div style={{
          backgroundColor: '#F8FAFC',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          padding: '12px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: '#334155'
        }}>
          <span>KTV phụ trách: <strong>{booking.technicianName}</strong></span>
          <span style={{ color: '#0D766E', fontWeight: 700 }}>{booking.stationOrRoom}</span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. NÚT CTA CHÍNH (SINGLE PRIMARY CTA Ở ĐÁY)               */}
      {/* ========================================================= */}
      {booking.status === 4 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <button
            type="button"
            onClick={onOpenDischargeQR}
            style={{
              width: '100%',
              height: '60px',
              borderRadius: '18px',
              backgroundColor: '#0D766E',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)'
            }}
          >
            <QrCodeIcon size={20} />
            <span>Đến đón bé (Mã #{booking.dischargeCode})</span>
          </button>

          <button
            type="button"
            onClick={onOpenServiceReview}
            style={{
              width: '100%',
              height: '48px',
              borderRadius: '14px',
              backgroundColor: '#F8FAFC',
              color: '#0F172A',
              fontSize: '13px',
              fontWeight: 700,
              border: '1px solid #E2E8F0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <StarIcon size={16} />
            <span>Đánh giá dịch vụ</span>
          </button>
        </div>
      ) : booking.status === 3 ? (
        <button
          type="button"
          onClick={() => setShowPushNotification(true)}
          style={{
            width: '100%',
            height: '60px',
            borderRadius: '18px',
            backgroundColor: '#0D766E',
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: 800,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)',
            marginBottom: '20px'
          }}
        >
          <BellIcon size={20} />
          <span>Xem thông báo đẩy</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            if (config.nextMilestone) {
              onMilestoneChange(config.nextMilestone);
            }
          }}
          style={{
            width: '100%',
            height: '60px',
            borderRadius: '18px',
            backgroundColor: '#0D766E',
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: 800,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)',
            marginBottom: '20px'
          }}
        >
          <span>{config.ctaText}</span>
        </button>
      )}

    </div>
  );
};
