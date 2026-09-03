import React, { useState, useEffect } from 'react';
import { Booking, Pet } from '../../types';
import { CheckIcon, AlertIcon, ShieldIcon } from '../../components/icons/Icons';
import boPhoto from '../../assets/bo.png';

interface IntakeFlowProps {
  booking: Booking;
  pet: Pet;
  step?: 1 | 2 | 3 | 4 | 5;
  onStepChange?: (step: 1 | 2 | 3 | 4 | 5) => void;
  onConfirmIntakeHandoff: () => void;
  onCancel: () => void;
}

export const IntakeFlow: React.FC<IntakeFlowProps> = ({
  booking,
  pet,
  step: externalStep = 1,
  onStepChange,
  onConfirmIntakeHandoff,
  onCancel
}) => {
  // Quản lý state nội bộ để đảm bảo cập nhật UI 100% độc lập và tức thì khi click
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(externalStep);

  useEffect(() => {
    if (externalStep) {
      setStep(externalStep);
    }
  }, [externalStep]);

  const goToStep = (nextStep: 1 | 2 | 3 | 4 | 5) => {
    setStep(nextStep);
    if (onStepChange) {
      onStepChange(nextStep);
    }
  };

  return (
    <div style={{ paddingBottom: '32px' }}>

      {/* ========================================================= */}
      {/* MÀN HÌNH 1: XUẤT TRÌNH MÃ QR TIẾP NHẬN (01_show_checkin_code) */}
      {/* ========================================================= */}
      {step === 1 && (
        <div>
          {/* Thẻ tóm tắt bé & dịch vụ đã đặt */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '18px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#F0FDFA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              flexShrink: 0
            }}>
              {pet.id === 'pet-bo' ? (
                <img src={boPhoto} alt="Bơ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span style={{ fontSize: '22px', fontWeight: 800, color: '#D97706' }}>{pet.avatarText}</span>
              )}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>{pet.name}</div>
              <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Tắm + cắt tỉa</div>
            </div>

            <span style={{
              backgroundColor: '#F0FDFA',
              color: '#0D766E',
              fontSize: '11px',
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: '12px'
            }}>
              ĐÃ ĐẶT
            </span>
          </div>

          {/* Label: ĐƯA MÃ CHO LỄ TÂN */}
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            color: '#64748B',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            ĐƯA MÃ CHO LỄ TÂN
          </div>

          {/* Khung Mã QR Lớn Chuẩn Định Vị 3 Góc */}
          <div style={{
            width: '100%',
            borderRadius: '28px',
            backgroundColor: '#FFFFFF',
            border: '2px solid #CCFBF1',
            padding: '24px 20px',
            textAlign: 'center',
            marginBottom: '24px',
            boxShadow: '0 4px 18px rgba(13, 118, 110, 0.08)'
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 800,
              color: '#64748B',
              letterSpacing: '0.8px',
              marginBottom: '14px'
            }}>
              MÃ LỊCH HẸN
            </div>

            {/* Khối Mã QR Vector Chân Thực (3 Finder Patterns) */}
            <div style={{
              width: '190px',
              height: '190px',
              backgroundColor: '#FFFFFF',
              border: '2.5px solid #0D766E',
              borderRadius: '22px',
              margin: '0 auto 14px auto',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.12)'
            }}>
              <svg width="160" height="160" viewBox="0 0 160 160" fill="#0F172A">
                {/* 1. Góc trên trái */}
                <rect x="4" y="4" width="44" height="44" rx="6" fill="none" stroke="#0D766E" strokeWidth="7" />
                <rect x="17" y="17" width="18" height="18" rx="3" fill="#0D766E" />

                {/* 2. Góc trên phải */}
                <rect x="112" y="4" width="44" height="44" rx="6" fill="none" stroke="#0D766E" strokeWidth="7" />
                <rect x="125" y="17" width="18" height="18" rx="3" fill="#0D766E" />

                {/* 3. Góc dưới trái */}
                <rect x="4" y="112" width="44" height="44" rx="6" fill="none" stroke="#0D766E" strokeWidth="7" />
                <rect x="17" y="125" width="18" height="18" rx="3" fill="#0D766E" />

                {/* Các pixel QR hoa văn */}
                <rect x="60" y="8" width="12" height="12" rx="2" />
                <rect x="80" y="8" width="20" height="12" rx="2" />
                <rect x="60" y="28" width="24" height="12" rx="2" />
                <rect x="92" y="28" width="12" height="24" rx="2" />
                <rect x="60" y="48" width="12" height="18" rx="2" />

                <rect x="8" y="60" width="18" height="12" rx="2" />
                <rect x="36" y="60" width="16" height="12" rx="2" />
                <rect x="8" y="80" width="12" height="20" rx="2" />
                <rect x="28" y="80" width="24" height="12" rx="2" />

                {/* Ô logo PetCare ở trung tâm */}
                <rect x="62" y="62" width="36" height="36" rx="8" fill="#F0FDFA" stroke="#0D766E" strokeWidth="2" />
                <text x="80" y="86" fontSize="18" textAnchor="middle">🐾</text>

                <rect x="112" y="60" width="20" height="12" rx="2" />
                <rect x="140" y="60" width="16" height="20" rx="2" />
                <rect x="112" y="80" width="12" height="20" rx="2" />
                <rect x="132" y="88" width="24" height="12" rx="2" />

                <rect x="60" y="112" width="12" height="18" rx="2" />
                <rect x="80" y="112" width="20" height="12" rx="2" />
                <rect x="112" y="112" width="18" height="12" rx="2" />
                <rect x="138" y="112" width="18" height="12" rx="2" />
                <rect x="60" y="138" width="24" height="18" rx="2" />
                <rect x="92" y="130" width="12" height="24" rx="2" />
                <rect x="112" y="132" width="44" height="24" rx="2" />
              </svg>
            </div>

            <div style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', letterSpacing: '1px' }}>
              {booking.bookingCode}
            </div>
            <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>
              Mã check-in: {booking.checkInCode}
            </div>
          </div>

          {/* Nút CTA: Lễ tân quét mã (Chuyển ngay sang bước 2) */}
          <button
            type="button"
            onClick={() => goToStep(2)}
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
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)'
            }}
          >
            Lễ tân quét mã
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* MÀN HÌNH 2: ĐÃ QUÉT MÃ TIẾP NHẬN (02_intake_scanned)       */}
      {/* ========================================================= */}
      {step === 2 && (
        <div style={{ paddingTop: '10px' }}>
          {/* Header trạng thái quét thành công */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              backgroundColor: '#F0FDF4',
              border: '3px solid #166534',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              boxShadow: '0 6px 20px rgba(22, 101, 52, 0.15)'
            }}>
              <CheckIcon size={48} color="#166534" />
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', margin: '0 0 4px 0' }}>
              Đã quét mã
            </h2>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0D766E' }}>
              Đúng hồ sơ {pet.name}
            </div>
          </div>

          {/* Thẻ Hồ sơ được khớp (Matched Profile Card) - Chuẩn Prototype */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '2px solid #CCFBF1',
            padding: '20px',
            marginBottom: '28px',
            boxShadow: '0 4px 16px rgba(13, 118, 110, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#F0FDFA',
                overflow: 'hidden',
                flexShrink: 0,
                border: '2px solid #0D766E'
              }}>
                {pet.id === 'pet-bo' ? (
                  <img src={boPhoto} alt="Bơ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ fontSize: '24px', fontWeight: 800, color: '#D97706' }}>{pet.avatarText}</span>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>{pet.name}</span>
                  <span style={{
                    backgroundColor: '#F0FDF4',
                    color: '#166534',
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '8px'
                  }}>
                    XÁC THỰC
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: '#64748B', marginTop: '2px' }}>
                  Poodle · 4.5kg · Đã xác thực hồ sơ
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              padding: '12px 16px',
              border: '1px solid #E2E8F0',
              fontSize: '13px',
              color: '#334155',
              lineHeight: 1.5
            }}>
              ✓ Toàn bộ lịch sử y tế và các cảnh báo của <strong>{pet.name}</strong> đã được đồng bộ lên màn hình tiếp nhận quầy.
            </div>
          </div>

          {/* Nút CTA: Xem lưu ý */}
          <button
            type="button"
            onClick={() => goToStep(3)}
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
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)'
            }}
          >
            Xem lưu ý
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* MÀN HÌNH 3: LƯU Ý CỦA BÉ (03_profile_alerts)               */}
      {/* ========================================================= */}
      {step === 3 && (
        <div>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            color: '#64748B',
            marginBottom: '16px'
          }}>
            {pet.name} · 2 lưu ý quan trọng
          </div>

          {/* Card 1: DỊ ỨNG */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFF1F2',
            border: '1.5px solid #FECDD3',
            padding: '18px 20px',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#FFE4E6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9F1239',
              flexShrink: 0
            }}>
              <AlertIcon size={22} />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#9F1239', letterSpacing: '0.5px' }}>
                  DỊ ỨNG
                </span>
                <span style={{
                  backgroundColor: '#9F1239',
                  color: '#FFFFFF',
                  fontSize: '9px',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '10px'
                }}>
                  CẢNH BÁO ĐỎ
                </span>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                Xà phòng hương liệu
              </div>
              <div style={{ fontSize: '12px', color: '#881337', marginTop: '3px' }}>
                Không dùng hương liệu tổng hợp
              </div>
            </div>
          </div>

          {/* Card 2: TÍNH CÁCH */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFBEB',
            border: '1.5px solid #FDE68A',
            padding: '18px 20px',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#FEF3C7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D97706',
              flexShrink: 0
            }}>
              <ShieldIcon size={22} color="#D97706" />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#B45309', letterSpacing: '0.5px' }}>
                  TÍNH CÁCH
                </span>
                <span style={{
                  backgroundColor: '#D97706',
                  color: '#FFFFFF',
                  fontSize: '9px',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '10px'
                }}>
                  NHÚT NHÁT
                </span>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                Sợ tiếng máy sấy
              </div>
              <div style={{ fontSize: '12px', color: '#92400E', marginTop: '3px' }}>
                Cần không gian sấy êm
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => goToStep(4)}
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
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)'
            }}
          >
            Xem phương án
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* MÀN HÌNH 4: PHƯƠNG ÁN CHĂM SÓC (04_care_plan_confirmed)    */}
      {/* ========================================================= */}
      {step === 4 && (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <span style={{
              backgroundColor: '#F0FDF4',
              color: '#166534',
              fontSize: '11px',
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: '12px'
            }}>
              ĐÃ ĐỐI CHIẾU
            </span>
          </div>

          {/* Phương án 1: Sữa tắm thảo dược */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#F0FDFA',
            border: '2px solid #0D766E',
            padding: '18px 20px',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 2px 8px rgba(13, 118, 110, 0.06)'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '2px solid #0D766E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              flexShrink: 0
            }}>
              🧴
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                Sữa tắm thảo dược
              </div>
              <div style={{ fontSize: '13px', color: '#0F4C45', marginTop: '2px' }}>
                Dịu nhẹ cho da {pet.name}
              </div>
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#0D766E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CheckIcon size={16} color="#FFFFFF" />
            </div>
          </div>

          {/* Phương án 2: Buồng sấy êm */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#F0FDFA',
            border: '2px solid #0D766E',
            padding: '18px 20px',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 2px 8px rgba(13, 118, 110, 0.06)'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '2px solid #0D766E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              flexShrink: 0
            }}>
              🌬️
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                Buồng sấy êm
              </div>
              <div style={{ fontSize: '13px', color: '#0F4C45', marginTop: '2px' }}>
                Giảm tiếng ồn cho {pet.name}
              </div>
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#0D766E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CheckIcon size={16} color="#FFFFFF" />
            </div>
          </div>

          <button
            type="button"
            onClick={() => goToStep(5)}
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
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)'
            }}
          >
            Xác nhận
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* MÀN HÌNH 5: LƯU Ý ĐÃ ĐƯỢC GẮN (05_notes_attached_success)   */}
      {/* ========================================================= */}
      {step === 5 && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '8px' }}>
            <span style={{
              backgroundColor: '#F0FDFA',
              color: '#0D766E',
              fontSize: '12px',
              fontWeight: 800,
              padding: '4px 14px',
              borderRadius: '12px'
            }}>
              ĐÃ GHI NHẬN
            </span>
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', textAlign: 'center', margin: '0 0 4px 0' }}>
            Lưu ý đã được gắn
          </h2>
          <div style={{ fontSize: '13px', color: '#64748B', textAlign: 'center', marginBottom: '22px' }}>
            Theo cùng {pet.name} trong quy trình chăm sóc
          </div>

          {/* Thẻ Phiếu Kỹ Thuật (Technician Ticket Card) */}
          <div style={{
            width: '100%',
            borderRadius: '26px',
            backgroundColor: '#FFFFFF',
            border: '2px solid #0D766E',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0 4px 18px rgba(13, 118, 110, 0.08)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.8px' }}>
                HỒ SƠ · PHIẾU KỸ THUẬT
              </span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#0D766E' }}>
                KTV {booking.technicianName}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                backgroundColor: '#FFF1F2',
                border: '1px solid #FECDD3',
                borderRadius: '14px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '14px' }}>🏷️</span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#9F1239' }}>
                  DỊ ỨNG HƯƠNG LIỆU
                </span>
              </div>

              <div style={{
                backgroundColor: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '14px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '14px' }}>🏷️</span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#B45309' }}>
                  SẤY ÊM
                </span>
              </div>
            </div>

            <div style={{ fontSize: '11px', color: '#64748B', textAlign: 'center' }}>
              Phiếu ca trực số: #{booking.bookingCode}-SAFE
            </div>
          </div>

          <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            backgroundColor: '#F0FDFA',
            border: '1px solid #CCFBF1',
            borderRadius: '20px',
            padding: '14px 16px',
            marginBottom: '26px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#0D766E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '18px',
              flexShrink: 0
            }}>
              ✓
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                Lan có thể an tâm
              </div>
              <div style={{ fontSize: '12px', color: '#0F4C45', marginTop: '2px' }}>
                Thông tin đã được tiếp nhận minh bạch
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onConfirmIntakeHandoff}
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
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)'
            }}
          >
            Theo dõi tiến độ
          </button>
        </div>
      )}

    </div>
  );
};
