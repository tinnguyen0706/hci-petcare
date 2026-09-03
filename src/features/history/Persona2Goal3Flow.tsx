import React, { useState, useEffect } from 'react';
import { Pet } from '../../types';
import { 
  CheckIcon, 
  ChevronRightIcon, 
  InvoiceIcon, 
  CalendarIcon, 
  ClockIcon,
  ShieldIcon,
  StarIcon
} from '../../components/icons/Icons';

interface Persona2Goal3FlowProps {
  pet: Pet;
  step?: 1 | 2 | 3 | 4 | 5;
  onStepChange?: (step: 1 | 2 | 3 | 4 | 5) => void;
  onFinish: () => void;
  onBackToPetList: () => void;
}

export const Persona2Goal3Flow: React.FC<Persona2Goal3FlowProps> = ({
  pet,
  step: externalStep = 1,
  onStepChange,
  onFinish,
  onBackToPetList
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(externalStep);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [savePlanSuccess, setSavePlanSuccess] = useState(false);

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

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 1500);
  };

  const handleShare = () => {
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 1500);
  };

  const handleSavePlan = () => {
    setSavePlanSuccess(true);
    setTimeout(() => {
      setSavePlanSuccess(false);
      onFinish();
    }, 1200);
  };

  return (
    <div style={{ paddingTop: '8px', paddingBottom: '32px' }}>

      {/* ========================================================= */}
      {/* BƯỚC 1: LỊCH SỬ CHĂM SÓC CỦA MIU (01_service_history)     */}
      {/* ========================================================= */}
      {step === 1 && (
        <div>
          {/* Thẻ Hồ Sơ Miu */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            padding: '18px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}>
            <div style={{
              width: '58px',
              height: '58px',
              borderRadius: '50%',
              backgroundColor: '#FFFBEB',
              border: '2.5px solid #D97706',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 800,
              color: '#D97706',
              flexShrink: 0
            }}>
              MIU
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>Miu</span>
                <span style={{
                  backgroundColor: '#F0FDF4',
                  color: '#166534',
                  fontSize: '10px',
                  fontWeight: 800,
                  padding: '3px 8px',
                  borderRadius: '8px'
                }}>
                  ĐÃ LƯU TẬP TRUNG
                </span>
              </div>
              <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                Nhật ký chăm sóc · Mèo Anh lông ngắn
              </div>
            </div>
          </div>

          <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.6px', marginBottom: '12px' }}>
            CÁC LƯỢT GẦN ĐÂY
          </div>

          {/* Lượt 1: Mới nhất (Có thể chạm để xem) */}
          <div 
            onClick={() => goToStep(2)}
            style={{
              width: '100%',
              borderRadius: '22px',
              backgroundColor: '#FFFFFF',
              border: '2px solid #0D766E',
              padding: '18px 20px',
              marginBottom: '12px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.08)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                Tắm vệ sinh
              </span>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#0D766E' }}>
                250.000đ
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#64748B' }}>
                Hoàn tất · Hóa đơn đã lưu
              </span>
              <span style={{
                backgroundColor: '#F0FDFA',
                color: '#0D766E',
                fontSize: '10px',
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: '8px'
              }}>
                XEM CHI TIẾT ›
              </span>
            </div>
          </div>

          {/* Lượt 2: Trước đó */}
          <div style={{
            width: '100%',
            borderRadius: '22px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            padding: '18px 20px',
            marginBottom: '16px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>
                Tắm vệ sinh & Cắt móng
              </span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#64748B' }}>
                220.000đ
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>
              Đã lưu trong hồ sơ · 02/08/2026
            </div>
          </div>

          {/* Banner Không lo thất lạc */}
          <div style={{
            width: '100%',
            backgroundColor: '#F0FDF4',
            borderRadius: '20px',
            border: '1.5px solid #BBF7D0',
            padding: '16px 20px',
            marginBottom: '26px'
          }}>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#166534', marginBottom: '4px' }}>
              Không lo thất lạc
            </div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>
              Dữ liệu hóa đơn và chi phí luôn được lưu trữ nguyên vẹn trên hệ thống.
            </div>
          </div>

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
            Xem chi phí
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* BƯỚC 2: PHÂN TÍCH CHI PHÍ CHĂM SÓC (02_service_cost)      */}
      {/* ========================================================= */}
      {step === 2 && (
        <div>
          {/* Hero Banner Tổng Quan */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #0D766E 0%, #0F4C45 100%)',
            padding: '22px 20px',
            color: '#FFFFFF',
            marginBottom: '20px',
            boxShadow: '0 6px 20px rgba(13, 118, 110, 0.2)'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#CCFBF1', letterSpacing: '0.6px', marginBottom: '6px' }}>
              TỔNG QUAN
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
              <div style={{ fontSize: '22px', fontWeight: 800 }}>Chăm sóc Miu</div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#CCFBF1' }}>250.000đ</div>
            </div>
            <div style={{ fontSize: '12px', color: '#CCFBF1' }}>
              Minh bạch từng hạng mục · Không phát sinh phụ phí
            </div>
          </div>

          <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.6px', marginBottom: '12px' }}>
            PHÂN BỔ CHI TIẾT
          </div>

          {/* Danh mục chi phí phân bổ */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '22px',
            border: '1.5px solid #E2E8F0',
            padding: '16px 20px',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9', paddingBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>Tắm vệ sinh thảo dược</div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>Dầu tắm dịu nhẹ chuyên mèo</div>
              </div>
              <strong style={{ fontSize: '14px', color: '#0F172A' }}>180.000đ</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9', paddingBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>Vệ sinh tai & cắt móng</div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>Thao tác êm, chống căng thẳng</div>
              </div>
              <strong style={{ fontSize: '14px', color: '#0F172A' }}>50.000đ</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>Buồng sấy êm ái A-02</div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>Nhiệt độ 24.5°C · Âm lượng 28dB</div>
              </div>
              <strong style={{ fontSize: '14px', color: '#0F172A' }}>20.000đ</strong>
            </div>
          </div>

          {/* Thẻ Đối Chiếu Dễ Dàng */}
          <div style={{
            width: '100%',
            backgroundColor: '#F0FDFA',
            borderRadius: '20px',
            border: '1.5px solid #CCFBF1',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '26px'
          }}>
            <span style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#0D766E',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              fontWeight: 800,
              flexShrink: 0
            }}>
              ✓
            </span>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0F4C45' }}>
              Đối chiếu dễ dàng · Khớp 100% với báo giá ban đầu
            </span>
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
            Xem hóa đơn
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* BƯỚC 3: HÓA ĐƠN ĐIỆN TỬ CỦA MIU (03_digital_invoice)       */}
      {/* ========================================================= */}
      {step === 3 && (
        <div>
          {/* Phiếu Hóa Đơn Điện Tử */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #CBD5E1',
            padding: '22px 20px',
            marginBottom: '16px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #CBD5E1', paddingBottom: '12px', marginBottom: '14px' }}>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                  Phiếu chăm sóc Miu
                </div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>
                  Mã HĐ: #INV-MIU-8902 · 28/08/2026
                </div>
              </div>
              <span style={{
                backgroundColor: '#F0FDF4',
                color: '#166534',
                fontSize: '10px',
                fontWeight: 800,
                padding: '4px 8px',
                borderRadius: '8px'
              }}>
                HỢP LỆ ✓
              </span>
            </div>

            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Khách hàng:</span>
                <strong>Minh Khoa</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Thú cưng:</span>
                <strong>Miu (Mèo Anh lông ngắn)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Đơn vị thực hiện:</span>
                <span>PetCare Pro HCMUS</span>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9', padding: '12px 0', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span>Gói dịch vụ chính</span>
                <span>231.481đ</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span>Thuế VAT (8%)</span>
                <span>18.519đ</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>TỔNG THANH TOÁN</span>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#0D766E' }}>250.000đ</span>
            </div>

            {/* Badge Đã Lưu An Toàn */}
            <div style={{
              backgroundColor: '#F0FDF4',
              borderRadius: '14px',
              padding: '10px 14px',
              textAlign: 'center',
              border: '1px solid #BBF7D0'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#166534' }}>
                ĐÃ LƯU AN TOÀN
              </div>
              <div style={{ fontSize: '11px', color: '#64748B' }}>
                Không phai mực · Không thất lạc
              </div>
            </div>
          </div>

          {/* 2 Nút Tiện Ích: Tải PDF & Chia sẻ */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
            <button
              type="button"
              onClick={handleDownload}
              style={{
                height: '46px',
                borderRadius: '14px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #0D766E',
                color: '#0D766E',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <span>{downloadSuccess ? '✓ Đã tải PDF' : '📥 Tải bản lưu (PDF)'}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              style={{
                height: '46px',
                borderRadius: '14px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #CBD5E1',
                color: '#475569',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <span>{shareSuccess ? '✓ Đã sao chép' : '📤 Chia sẻ'}</span>
            </button>
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
            Xem tổng tháng
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* BƯỚC 4: TỔNG CHI TIÊU THÁNG (04_monthly_expense)          */}
      {/* ========================================================= */}
      {step === 4 && (
        <div>
          {/* Thẻ Ngân Sách Miu */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            padding: '18px 20px',
            marginBottom: '16px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A' }}>
                Ngân sách của Miu
              </span>
              <span style={{
                backgroundColor: '#F0FDF4',
                color: '#166534',
                fontSize: '10px',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '8px'
              }}>
                TRONG KẾ HOẠCH
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>
              Theo dõi định kỳ · Tháng này: <strong>500.000đ</strong> (2 lượt)
            </div>
          </div>

          {/* Biểu Đồ Cột Xu Hướng (Chart tương tác sống động) */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            padding: '20px',
            marginBottom: '16px'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.6px', marginBottom: '18px' }}>
              XU HƯỚNG CHI TIÊU (5 THÁNG GẦN ĐÂY)
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              height: '140px',
              padding: '0 8px 10px 8px',
              borderBottom: '1px solid #F1F5F9',
              marginBottom: '12px'
            }}>
              {/* T1 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '10px', color: '#64748B' }}>450k</span>
                <div style={{ width: '36px', height: '80px', backgroundColor: '#E2E8F0', borderRadius: '8px 8px 0 0' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B' }}>T1</span>
              </div>

              {/* T2 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '10px', color: '#64748B' }}>480k</span>
                <div style={{ width: '36px', height: '90px', backgroundColor: '#E2E8F0', borderRadius: '8px 8px 0 0' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B' }}>T2</span>
              </div>

              {/* T3 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '10px', color: '#64748B' }}>450k</span>
                <div style={{ width: '36px', height: '80px', backgroundColor: '#E2E8F0', borderRadius: '8px 8px 0 0' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B' }}>T3</span>
              </div>

              {/* T4 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '10px', color: '#64748B' }}>520k</span>
                <div style={{ width: '36px', height: '105px', backgroundColor: '#E2E8F0', borderRadius: '8px 8px 0 0' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B' }}>T4</span>
              </div>

              {/* NAY */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#0D766E' }}>500k</span>
                <div style={{
                  width: '36px',
                  height: '100px',
                  backgroundColor: '#0D766E',
                  borderRadius: '8px 8px 0 0',
                  boxShadow: '0 4px 10px rgba(13, 118, 110, 0.25)'
                }} />
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#0D766E' }}>NAY</span>
              </div>
            </div>

            <div style={{ fontSize: '11px', color: '#64748B', textAlign: 'center' }}>
              Mức chi tiêu trung bình: <strong>480.000đ / tháng</strong>
            </div>
          </div>

          {/* 2 Ô Giá Trị Song Song */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '26px' }}>
            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '20px',
              border: '1.5px solid #E2E8F0',
              padding: '16px'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                Dễ theo dõi
              </div>
              <div style={{ fontSize: '11px', color: '#64748B' }}>
                Phân loại rành mạch theo từng tháng
              </div>
            </div>

            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '20px',
              border: '1.5px solid #E2E8F0',
              padding: '16px'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                Chủ động
              </div>
              <div style={{ fontSize: '11px', color: '#64748B' }}>
                Cân đối sinh hoạt tài chính cá nhân
              </div>
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
            Lập kế hoạch
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* BƯỚC 5: KẾ HOẠCH THÁNG TỚI (05_next_month_budget_plan)    */}
      {/* ========================================================= */}
      {step === 5 && (
        <div>
          {/* Hero Banner Mục Tiêu */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #0D766E 0%, #0F4C45 100%)',
            padding: '22px 20px',
            color: '#FFFFFF',
            marginBottom: '20px',
            boxShadow: '0 6px 20px rgba(13, 118, 110, 0.2)'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#CCFBF1', letterSpacing: '0.6px', marginBottom: '6px' }}>
              MỤC TIÊU
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
              <div style={{ fontSize: '20px', fontWeight: 800 }}>Chăm Miu chủ động</div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#CCFBF1' }}>550.000đ</div>
            </div>
            <div style={{ fontSize: '12px', color: '#CCFBF1' }}>
              Không ảnh hưởng sinh hoạt tài chính cá nhân
            </div>
          </div>

          <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.6px', marginBottom: '12px' }}>
            PHÂN BỔ DỰ KIẾN (THÁNG 09/2026)
          </div>

          {/* Biểu đồ phân bổ tỷ lệ ngân sách */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '22px',
            border: '1.5px solid #E2E8F0',
            padding: '18px 20px',
            marginBottom: '16px'
          }}>
            {/* Thanh thanh tỷ lệ màu */}
            <div style={{
              display: 'flex',
              height: '14px',
              borderRadius: '7px',
              overflow: 'hidden',
              marginBottom: '16px'
            }}>
              <div style={{ width: '60%', backgroundColor: '#0D766E' }} title="Định kỳ 60%" />
              <div style={{ width: '25%', backgroundColor: '#D97706' }} title="Dự phòng 25%" />
              <div style={{ width: '15%', backgroundColor: '#94A3B8' }} title="Khác 15%" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#0D766E' }} />
                  <span>Chăm sóc định kỳ (60%)</span>
                </div>
                <strong>330.000đ</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                  <span>Khoản dự phòng (25%)</span>
                </div>
                <strong>140.000đ</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#94A3B8' }} />
                  <span>Phần còn lại (15%)</span>
                </div>
                <strong style={{ color: '#64748B' }}>80.000đ</strong>
              </div>
            </div>
          </div>

          {/* Thẻ Cam Kết */}
          <div style={{
            width: '100%',
            backgroundColor: '#F0FDF4',
            borderRadius: '20px',
            border: '1.5px solid #BBF7D0',
            padding: '16px 20px',
            marginBottom: '26px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#166534' }}>
                Kế hoạch cân đối
              </span>
              <span style={{
                backgroundColor: '#DCFCE7',
                color: '#166534',
                fontSize: '10px',
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: '8px'
              }}>
                SẴN SÀNG CHO THÁNG TỚI
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>
              Dựa trên lịch sử chi tiêu thực tế đã lưu của Miu
            </div>
          </div>

          <button
            type="button"
            onClick={handleSavePlan}
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
            <span>{savePlanSuccess ? '✓ Đã lưu kế hoạch ngân sách!' : 'Lưu kế hoạch'}</span>
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
            Về danh sách hồ sơ
          </button>
        </div>
      )}

    </div>
  );
};
