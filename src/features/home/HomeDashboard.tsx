import React from 'react';
import { Pet, Booking, MilestoneStep } from '../../types';
import { 
  ClockIcon, 
  CalendarIcon, 
  PawIcon, 
  ShieldIcon, 
  CameraIcon, 
  RefreshIcon, 
  QrCodeIcon, 
  ChevronRightIcon, 
  AlertIcon 
} from '../../components/icons/Icons';
import { TimelineStepper } from '../../components/common/TimelineStepper';

interface HomeDashboardProps {
  activeBooking: Booking | null;
  pets: Pet[];
  onNavigateToBooking: (petId?: string) => void;
  onNavigateToMultiBooking: () => void;
  onNavigateToTracking: () => void;
  onNavigateToPetProfile: (petId: string) => void;
  onNavigateToIsolationCam: () => void;
  onNavigateToRebook: () => void;
  onNavigateToIntakeQr: () => void;
  onMilestoneChange: (step: MilestoneStep) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  activeBooking,
  pets,
  onNavigateToBooking,
  onNavigateToMultiBooking,
  onNavigateToTracking,
  onNavigateToPetProfile,
  onNavigateToIsolationCam,
  onNavigateToRebook,
  onNavigateToIntakeQr,
  onMilestoneChange
}) => {
  return (
    <div className="home-dashboard" style={{ paddingTop: '8px' }}>
      
      {/* 1. Thẻ Active Tracking Card — Glanceable trong 2 giây (Wireframe 01) */}
      {activeBooking ? (
        <section className="card" style={{ border: '2px solid #0D766E', backgroundColor: '#FFFFFF', padding: '16px' }} aria-labelledby="active-tracking-title">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="badge badge-teal" style={{ fontSize: '11px', fontWeight: 800 }}>
              {activeBooking.status === 1 && '[MỐC 1: TIẾP NHẬN]'}
              {activeBooking.status === 2 && '[MỐC 2: ĐANG TẮM BỒN]'}
              {activeBooking.status === 3 && '[MỐC 3: HOÀN TẤT]'}
              {activeBooking.status === 4 && '[MỐC 4: SẴN SÀNG ĐÓN]'}
            </span>
            <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>
              #{activeBooking.bookingCode}
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
            <h2 id="active-tracking-title" className="text-h2" style={{ fontSize: '18px', margin: 0 }}>
              Bé Bơ — Derma-Care
            </h2>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0D766E' }}>
              09:45 Xong
            </span>
          </div>
          
          <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '12px' }}>
            KTV <strong>{activeBooking.technicianName}</strong> • {activeBooking.stationOrRoom}
          </div>

          {/* Stepper 4 mốc Scannable */}
          <TimelineStepper 
            currentStep={activeBooking.status} 
            onStepClick={onMilestoneChange} 
          />

          <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
            <button
              className="btn-primary"
              style={{ height: '48px', flex: 1, fontSize: '14px' }}
              onClick={onNavigateToTracking}
              aria-label="Xem chi tiết tiến độ chăm sóc trực tiếp"
            >
              <ClockIcon size={18} />
              <span>Xem tiến độ</span>
            </button>
            
            <button
              className="btn-secondary"
              style={{ height: '48px', width: '52px', padding: 0 }}
              onClick={onNavigateToIntakeQr}
              aria-label="Mở mã QR quầy"
              title="Mã QR tiếp nhận"
            >
              <QrCodeIcon size={22} />
            </button>
          </div>
        </section>
      ) : (
        <section className="card" style={{ backgroundColor: '#F8FAFC', textAlign: 'center', padding: '24px 16px' }}>
          <PawIcon size={36} color="#0D766E" />
          <h3 className="text-h3" style={{ marginTop: '8px' }}>Chưa có lịch hẹn hôm nay</h3>
          <button className="btn-primary" style={{ marginTop: '12px' }} onClick={() => onNavigateToBooking()}>
            Đặt lịch ngay
          </button>
        </section>
      )}

      {/* 2. Lưới tác vụ nhanh — Phân khối Chunking tối giản (Wireframe 01) */}
      <section style={{ marginTop: '14px', marginBottom: '18px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px'
        }}>
          <button
            onClick={() => onNavigateToBooking()}
            className="card card-clickable"
            style={{
              padding: '10px 4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              textAlign: 'center',
              marginBottom: 0
            }}
            aria-label="Đặt lịch dịch vụ mới"
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#F0FDFA', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0D766E' }}>
              <CalendarIcon size={18} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#0F172A' }}>Đặt lịch</span>
          </button>

          <button
            onClick={onNavigateToMultiBooking}
            className="card card-clickable"
            style={{
              padding: '10px 4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              textAlign: 'center',
              marginBottom: 0
            }}
            aria-label="Đặt lịch gộp 2 bé giảm 10%"
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#FFFBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706' }}>
              <PawIcon size={18} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#0F172A' }}>Gộp 2 bé</span>
          </button>

          <button
            onClick={onNavigateToIsolationCam}
            className="card card-clickable"
            style={{
              padding: '10px 4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              textAlign: 'center',
              marginBottom: 0
            }}
            aria-label="Giám sát buồng cách ly Miu"
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#F0FDFA', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0D766E' }}>
              <CameraIcon size={18} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#0F172A' }}>Buồng A-02</span>
          </button>

          <button
            onClick={onNavigateToRebook}
            className="card card-clickable"
            style={{
              padding: '10px 4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              textAlign: 'center',
              marginBottom: 0
            }}
            aria-label="Tái đặt lịch 1-chạm"
          >
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#166534' }}>
              <RefreshIcon size={18} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#0F172A' }}>Rebook</span>
          </button>
        </div>
      </section>

      {/* 3. Danh sách hồ sơ — Visual Scannable Badges (Wireframe 08) */}
      <section style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h3 className="text-h3" style={{ fontSize: '15px' }}>Hồ sơ thú cưng</h3>
          <span style={{ fontSize: '12px', color: '#64748B' }}>2 bé</span>
        </div>

        {pets.map((p) => (
          <div 
            key={p.id} 
            className="card card-clickable" 
            onClick={() => onNavigateToPetProfile(p.id)}
            style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 14px', marginBottom: '10px' }}
            role="button"
            tabIndex={0}
            aria-label={`Xem hồ sơ bé ${p.name}`}
          >
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: p.id === 'pet-bo' ? '#F0FDFA' : '#FFFBEB',
              border: `2px solid ${p.id === 'pet-bo' ? '#0D766E' : '#D97706'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '15px',
              fontWeight: 800,
              color: p.id === 'pet-bo' ? '#0D766E' : '#D97706',
              flexShrink: 0
            }}>
              {p.avatarText}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <strong style={{ fontSize: '15px', color: '#0F172A' }}>{p.name}</strong>
                <span style={{ fontSize: '12px', color: '#64748B' }}>{p.breed} • {p.weight}</span>
              </div>

              <div>
                {p.isAllergic ? (
                  <span className="badge badge-alert">
                    <AlertIcon size={11} />
                    [DỊ ỨNG XÀ PHÒNG]
                  </span>
                ) : (
                  <span className="badge badge-amber">
                    [BUỒNG CÁCH LY A-02]
                  </span>
                )}
              </div>
            </div>

            <ChevronRightIcon size={18} color="#CBD5E1" />
          </div>
        ))}
      </section>

      {/* 4. Thẻ cam kết bảo an CareGuard — Cực kỳ súc tích */}
      <section className="card" style={{ backgroundColor: '#F0FDFA', border: '1px solid #CCFBF1', display: 'flex', gap: '10px', alignItems: 'center', padding: '10px 14px' }}>
        <ShieldIcon size={22} color="#0D766E" />
        <div style={{ fontSize: '12px', color: '#0F4C45', fontWeight: 600 }}>
          CareGuard 100%: Bảo an y tế & Giám sát độc lập từng ca spa
        </div>
      </section>

    </div>
  );
};
