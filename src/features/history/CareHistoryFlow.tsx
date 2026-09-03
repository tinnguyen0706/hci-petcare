import React, { useState, useEffect } from 'react';
import { Pet } from '../../types';
import { 
  CheckIcon, 
  ChevronRightIcon, 
  ShieldIcon, 
  StarIcon, 
  CalendarIcon, 
  ClockIcon,
  AlertIcon
} from '../../components/icons/Icons';
import boPhoto from '../../assets/bo.png';

interface CareHistoryFlowProps {
  pet: Pet;
  step?: 1 | 2 | 3 | 4 | 5;
  onStepChange?: (step: 1 | 2 | 3 | 4 | 5) => void;
  onRebook: () => void;
  onBackToPetList: () => void;
}

export const CareHistoryFlow: React.FC<CareHistoryFlowProps> = ({
  pet,
  step: externalStep = 1,
  onStepChange,
  onRebook,
  onBackToPetList
}) => {
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
    <div style={{ paddingTop: '8px', paddingBottom: '32px' }}>

      {/* ========================================================= */}
      {/* MÀN HÌNH 1: HỒ SƠ CỦA BƠ (Theo Prototype 01)              */}
      {/* ========================================================= */}
      {step === 1 && (
        <div>
          {/* Avatar Bơ tròn lớn ở giữa tâm */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{
              width: '136px',
              height: '136px',
              borderRadius: '50%',
              backgroundColor: '#F0FDFA',
              border: '3px solid #0D766E',
              margin: '0 auto 14px auto',
              overflow: 'hidden',
              boxShadow: '0 6px 20px rgba(13, 118, 110, 0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {pet.id === 'pet-bo' ? (
                <img src={boPhoto} alt="Bơ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span style={{ fontSize: '32px', fontWeight: 800, color: '#0D766E' }}>{pet.avatarText}</span>
              )}
            </div>

            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', margin: '0 0 4px 0' }}>
              {pet.name}
            </h2>
            <div style={{ fontSize: '13px', color: '#64748B', fontWeight: 500 }}>
              Hồ sơ chăm sóc
            </div>
          </div>

          {/* Lưới 2 cột song song: Sức khỏe & Lịch sử */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
            {/* Ô trái: Sức khỏe (viền hồng) */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '22px',
              border: '1.5px solid #FECDD3',
              padding: '18px 16px',
              minHeight: '110px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
            }}>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                Sức khỏe
              </div>
              <div style={{ fontSize: '12px', color: '#64748B' }}>
                Lưu ý của {pet.name}
              </div>
            </div>

            {/* Ô phải: Lịch sử (Highlight viền teal) */}
            <div 
              onClick={() => goToStep(2)}
              style={{
                backgroundColor: '#F0FDFA',
                borderRadius: '22px',
                border: '2px solid #0D766E',
                padding: '18px 16px',
                minHeight: '110px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(13, 118, 110, 0.12)'
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                Lịch sử
              </div>
              <div style={{ fontSize: '12px', color: '#0D766E', fontWeight: 700 }}>
                Xem lượt trước ›
              </div>
            </div>
          </div>

          {/* Thẻ Sở thích chăm sóc */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '22px',
            border: '1.5px solid #E2E8F0',
            padding: '18px 20px',
            marginBottom: '28px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Sở thích chăm sóc
            </div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>
              Lựa chọn đã lưu cho {pet.name}
            </div>
          </div>

          {/* Nút Primary CTA */}
          <button
            type="button"
            onClick={() => goToStep(2)}
            style={{
              width: '100%',
              height: '60px',
              borderRadius: '18px',
              backgroundColor: '#0D766E',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)'
            }}
          >
            Mở lịch sử
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* MÀN HÌNH 2: LỊCH SỬ DỊCH VỤ CỦA BƠ (Theo Prototype 02)     */}
      {/* ========================================================= */}
      {step === 2 && (
        <div>
          {/* Thẻ Lượt Gần Nhất (280px) */}
          <div 
            onClick={() => goToStep(3)}
            style={{
              width: '100%',
              borderRadius: '24px',
              backgroundColor: '#FFFFFF',
              border: '2px solid #0D766E',
              padding: '20px',
              marginBottom: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(13, 118, 110, 0.08)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A' }}>
                Lượt gần nhất
              </span>
              <span style={{
                backgroundColor: '#F0FDF4',
                color: '#166534',
                fontSize: '11px',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '12px'
              }}>
                HOÀN TẤT
              </span>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.6px', marginBottom: '4px' }}>
                DỊCH VỤ
              </div>
              <div style={{ fontSize: '19px', fontWeight: 800, color: '#0F172A' }}>
                Gói cắt tỉa lông
              </div>
            </div>

            {/* Hộp sản phẩm xem trước màu cam nhạt */}
            <div style={{
              backgroundColor: '#FFF7ED',
              borderRadius: '16px',
              padding: '12px 16px',
              marginBottom: '14px'
            }}>
              <div style={{ fontSize: '11px', color: '#64748B', marginBottom: '2px' }}>
                Sản phẩm
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                Dầu tắm thảo dược
              </div>
            </div>

            <div style={{ fontSize: '13px', color: '#0D766E', fontWeight: 700, textAlign: 'right' }}>
              Chạm để xem chi tiết →
            </div>
          </div>

          {/* Thẻ Lượt Chăm Sóc Trước */}
          <div style={{
            width: '100%',
            borderRadius: '22px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            padding: '18px 20px',
            marginBottom: '16px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
          }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Lượt chăm sóc trước
            </div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>
              Thông tin đã được lưu
            </div>
          </div>

          {/* Banner giải quyết điểm đau: Không cần tìm tin nhắn cũ */}
          <div style={{
            width: '100%',
            backgroundColor: '#FFF1F2',
            borderRadius: '22px',
            border: '1.5px solid #FECDD3',
            padding: '16px 20px',
            marginBottom: '24px'
          }}>
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#9F1239', marginBottom: '4px' }}>
              Không cần tìm tin nhắn cũ
            </div>
            <div style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.4 }}>
              Mọi thông tin nằm trong một lượt
            </div>
          </div>

          <button
            type="button"
            onClick={() => goToStep(3)}
            style={{
              width: '100%',
              height: '60px',
              borderRadius: '18px',
              backgroundColor: '#0D766E',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)'
            }}
          >
            Xem chi tiết lượt này
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* MÀN HÌNH 3: CHI TIẾT LƯỢT CHĂM SÓC (Theo Prototype 03)     */}
      {/* ========================================================= */}
      {step === 3 && (
        <div>
          {/* Header Hero */}
          <div style={{
            width: '100%',
            borderRadius: '22px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #CCFBF1',
            padding: '18px 20px',
            marginBottom: '14px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                Lượt chăm sóc gần nhất
              </span>
              <span style={{
                backgroundColor: '#F0FDF4',
                color: '#166534',
                fontSize: '10px',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '10px'
              }}>
                HOÀN TẤT
              </span>
            </div>
            <div style={{ fontSize: '13px', color: '#64748B' }}>
              {pet.name} · Gói cắt tỉa lông
            </div>
          </div>

          {/* Grid 2 cột: Ngày & Giờ */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1.5px solid #E2E8F0',
              padding: '14px 16px'
            }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', marginBottom: '4px' }}>NGÀY</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>28/08/2026</div>
            </div>

            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1.5px solid #E2E8F0',
              padding: '14px 16px'
            }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', marginBottom: '4px' }}>GIỜ</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>09:00 - 10:30</div>
            </div>
          </div>

          {/* Thẻ Dịch vụ */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '22px',
            border: '1.5px solid #FED7AA',
            padding: '16px 20px',
            marginBottom: '14px'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', marginBottom: '4px' }}>
              DỊCH VỤ
            </div>
            <div style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>
              Cắt tỉa lông
            </div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>
              Thông tin từ lượt trước
            </div>
          </div>

          {/* Grid 2 cột: Dầu tắm & Ghi chú da */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '26px' }}>
            <div style={{
              backgroundColor: '#F0FDFA',
              borderRadius: '20px',
              border: '1.5px solid #CCFBF1',
              padding: '16px'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                Dầu tắm
              </div>
              <div style={{ fontSize: '12px', color: '#0D766E', fontWeight: 700 }}>
                Thảo dược dịu nhẹ
              </div>
            </div>

            <div style={{
              backgroundColor: '#FFF1F2',
              borderRadius: '20px',
              border: '1.5px solid #FECDD3',
              padding: '16px'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                Ghi chú da
              </div>
              <div style={{ fontSize: '12px', color: '#9F1239', fontWeight: 700 }}>
                Từ kỹ thuật viên
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
              fontSize: '16px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)'
            }}
          >
            Xem sản phẩm & ghi chú
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* MÀN HÌNH 4: THÔNG TIN ĐÃ DÙNG (Theo Prototype 04)          */}
      {/* ========================================================= */}
      {step === 4 && (
        <div>
          {/* Avatar bé ở trên */}
          <div style={{ textAlign: 'center', marginBottom: '22px' }}>
            <div style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              backgroundColor: '#F0FDFA',
              border: '3px solid #0D766E',
              margin: '0 auto 12px auto',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {pet.id === 'pet-bo' ? (
                <img src={boPhoto} alt="Bơ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span style={{ fontSize: '28px', fontWeight: 800, color: '#0D766E' }}>{pet.avatarText}</span>
              )}
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', margin: 0 }}>
              Chăm sóc của {pet.name}
            </h2>
          </div>

          {/* Thẻ 1: SẢN PHẨM ĐÃ DÙNG (cam nhạt) */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFF7ED',
            border: '1.5px solid #FED7AA',
            padding: '18px 20px',
            marginBottom: '16px'
          }}>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#D97706', letterSpacing: '0.6px', marginBottom: '6px' }}>
              SẢN PHẨM ĐÃ DÙNG
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>
                Dầu tắm thảo dược
              </span>
              <span style={{
                backgroundColor: '#FFFFFF',
                color: '#166534',
                fontSize: '11px',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '12px'
              }}>
                DỊU NHẸ
              </span>
            </div>
          </div>

          {/* Thẻ 2: GHI CHÚ KỸ THUẬT VIÊN (hồng nhạt) */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFF1F2',
            border: '1.5px solid #FECDD3',
            padding: '18px 20px',
            marginBottom: '28px'
          }}>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#9F1239', letterSpacing: '0.6px', marginBottom: '6px' }}>
              GHI CHÚ KỸ THUẬT VIÊN
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A' }}>
                Tình trạng da của {pet.name}
              </span>
              <span style={{
                backgroundColor: '#FFFFFF',
                color: '#9F1239',
                fontSize: '11px',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '12px'
              }}>
                ĐÃ GHI NHẬN
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 1.4 }}>
              Da bé phục hồi rất tốt, lông mềm mượt và không hề kích ứng da.
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
              fontSize: '16px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)'
            }}
          >
            Lưu lựa chọn
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* MÀN HÌNH 5: LỰA CHỌN CỦA BƠ (Theo Prototype 05)            */}
      {/* ========================================================= */}
      {step === 5 && (
        <div style={{ textAlign: 'center', paddingTop: '16px' }}>
          {/* Checkmark xanh lớn */}
          <div style={{
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            backgroundColor: '#F0FDF4',
            border: '3px solid #166534',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 18px auto',
            boxShadow: '0 6px 20px rgba(22, 101, 52, 0.15)'
          }}>
            <CheckIcon size={48} color="#166534" />
          </div>

          <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', margin: '0 0 6px 0' }}>
            Đã lưu lựa chọn
          </h2>
          <div style={{ fontSize: '14px', color: '#64748B', marginBottom: '26px' }}>
            Sẵn sàng dùng cho lần chăm sóc tới
          </div>

          {/* Thẻ Sản phẩm đã lưu cho Bơ */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '2px solid #BBF7D0',
            padding: '20px',
            textAlign: 'left',
            marginBottom: '32px',
            boxShadow: '0 4px 16px rgba(22, 101, 52, 0.06)'
          }}>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#166534', letterSpacing: '0.6px', marginBottom: '6px' }}>
              ĐÃ LƯU CHO {pet.name.toUpperCase()}
            </div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Dầu tắm thảo dược
            </div>
            <div style={{ fontSize: '13px', color: '#64748B' }}>
              Dịu nhẹ · lựa chọn phù hợp
            </div>
          </div>

          {/* Nút CTA Rebook trực tiếp */}
          <button
            type="button"
            onClick={onRebook}
            style={{
              width: '100%',
              height: '60px',
              borderRadius: '18px',
              backgroundColor: '#0D766E',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)',
              marginBottom: '12px'
            }}
          >
            Đặt lịch lại ngay (Rebook)
          </button>

          <button
            type="button"
            onClick={onBackToPetList}
            style={{
              width: '100%',
              height: '46px',
              borderRadius: '14px',
              backgroundColor: '#F8FAFC',
              color: '#64748B',
              fontSize: '14px',
              fontWeight: 700,
              border: '1px solid #E2E8F0',
              cursor: 'pointer'
            }}
          >
            Về danh sách thú cưng
          </button>
        </div>
      )}

    </div>
  );
};
