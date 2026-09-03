import React, { useState, useEffect } from 'react';
import { Pet } from '../../types';
import { CheckIcon } from '../../components/icons/Icons';

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
  const [selectedMonth, setSelectedMonth] = useState<'T1' | 'T2' | 'T3' | 'T4' | 'NAY'>('NAY');

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

  // Dữ liệu chi tiêu các tháng cho biểu đồ đường
  const expenseData = {
    T1: { cost: '220.000đ', note: '1 lượt tắm vệ sinh' },
    T2: { cost: '280.000đ', note: '1 lượt tắm + cắt tỉa móng' },
    T3: { cost: '250.000đ', note: '1 lượt tắm vệ sinh' },
    T4: { cost: '320.000đ', note: '1 lượt tắm + dưỡng lông mềm' },
    NAY: { cost: '250.000đ', note: 'Lượt tắm thảo dược dịu nhẹ' }
  };

  return (
    <div style={{ paddingTop: '4px', paddingBottom: '32px' }}>

      {/* ========================================================= */}
      {/* FLOW PROGRESS: 5 CHẤM TRÒN CHUẨN PROTOTYPE                */}
      {/* ========================================================= */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '18px'
      }}>
        {[1, 2, 3, 4, 5].map((s) => (
          <div
            key={s}
            onClick={() => goToStep(s as 1 | 2 | 3 | 4 | 5)}
            style={{
              width: s === step ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: s === step ? '#0D766E' : s < step ? '#14B8A6' : '#CBD5E1',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          />
        ))}
      </div>

      {/* ========================================================= */}
      {/* MÀN HÌNH 1: LỊCH SỬ CỦA MIU (01_service_history.svg)       */}
      {/* ========================================================= */}
      {step === 1 && (
        <div>
          {/* Miu_History_Hero */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #CCFBF1',
            padding: '18px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#FFFBEB',
              border: '2px solid #D97706',
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
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>
                Miu
              </div>
              <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px', marginBottom: '6px' }}>
                Nhật ký chăm sóc
              </div>
              <span style={{
                backgroundColor: '#F0FDF4',
                color: '#166534',
                fontSize: '9px',
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: '8px'
              }}>
                ĐÃ LƯU TẬP TRUNG
              </span>
            </div>
          </div>

          <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.6px', marginBottom: '12px' }}>
            CÁC LƯỢT GẦN ĐÂY
          </div>

          {/* Session_Recent (Lượt gần nhất - tương tác mở chi tiết) */}
          <div 
            onClick={() => goToStep(2)}
            style={{
              width: '100%',
              borderRadius: '24px',
              backgroundColor: '#FFFFFF',
              border: '2px solid #0D766E',
              padding: '18px 20px',
              marginBottom: '12px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.08)',
              transition: 'transform 0.15s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>
                Tắm vệ sinh
              </span>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#0D766E' }}>
                250.000đ
              </span>
            </div>
            <div style={{ fontSize: '11px', color: '#64748B', marginBottom: '10px' }}>
              Hoàn tất · Hóa đơn đã lưu · 28/08/2026
            </div>
            <span style={{
              backgroundColor: '#F0FDFA',
              color: '#0D766E',
              fontSize: '9px',
              fontWeight: 800,
              padding: '4px 10px',
              borderRadius: '8px',
              display: 'inline-block'
            }}>
              XEM CHI TIẾT ›
            </span>
          </div>

          {/* Session_Older (Lượt chăm sóc trước) */}
          <div style={{
            width: '100%',
            borderRadius: '22px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            padding: '18px 20px',
            marginBottom: '14px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                Tắm vệ sinh
              </span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B' }}>
                220.000đ
              </span>
            </div>
            <div style={{ fontSize: '11px', color: '#64748B' }}>
              Đã lưu trong hồ sơ · 05/08/2026
            </div>
          </div>

          {/* History_Safe (Không lo thất lạc) */}
          <div style={{
            width: '100%',
            backgroundColor: '#F0FDF4',
            borderRadius: '20px',
            border: '1.5px solid #BBF7D0',
            padding: '14px 18px',
            marginBottom: '26px'
          }}>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#166534', marginBottom: '2px' }}>
              Không lo thất lạc
            </div>
            <div style={{ fontSize: '10px', color: '#64748B' }}>
              Dữ liệu vẫn nguyên vẹn · Không bị mờ hay mất như hóa đơn in nhiệt
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
      {/* MÀN HÌNH 2: PHÂN TÍCH CHI PHÍ (02_service_cost_breakdown)  */}
      {/* ========================================================= */}
      {step === 2 && (
        <div>
          {/* Cost_Overview (Banner teal đậm) */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#0D766E',
            padding: '22px 20px',
            color: '#FFFFFF',
            marginBottom: '20px',
            boxShadow: '0 6px 20px rgba(13, 118, 110, 0.2)'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#CCFBF1', letterSpacing: '0.6px', marginBottom: '6px' }}>
              TỔNG QUAN
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '20px', fontWeight: 800 }}>Chăm sóc Miu</span>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#CCFBF1' }}>250.000đ</span>
            </div>
            <div style={{ fontSize: '11px', color: '#CCFBF1' }}>
              Minh bạch từng hạng mục · Khớp báo giá tiếp nhận
            </div>
          </div>

          <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.6px', marginBottom: '12px' }}>
            PHÂN BỔ
          </div>

          {/* Cost_Bars: Khối phân bổ 3 dòng thực tế */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            padding: '20px',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {/* Dòng 1: Tắm vệ sinh */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>Tắm vệ sinh</span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#0D766E' }}>180.000đ</span>
              </div>
              <div style={{ height: '8px', borderRadius: '4px', backgroundColor: '#F0FDFA', overflow: 'hidden' }}>
                <div style={{ width: '72%', height: '100%', backgroundColor: '#0D766E', borderRadius: '4px' }} />
              </div>
            </div>

            {/* Dòng 2: Chăm sóc nhẹ */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>Chăm sóc nhẹ</span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#D97706' }}>50.000đ</span>
              </div>
              <div style={{ height: '8px', borderRadius: '4px', backgroundColor: '#FFFBEB', overflow: 'hidden' }}>
                <div style={{ width: '20%', height: '100%', backgroundColor: '#D97706', borderRadius: '4px' }} />
              </div>
            </div>

            {/* Dòng 3: Hạng mục khác */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>Hạng mục khác</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B' }}>20.000đ</span>
              </div>
              <div style={{ height: '8px', borderRadius: '4px', backgroundColor: '#F1F5F9', overflow: 'hidden' }}>
                <div style={{ width: '8%', height: '100%', backgroundColor: '#94A3B8', borderRadius: '4px' }} />
              </div>
            </div>
          </div>

          {/* Transparent_Note (Đối chiếu dễ dàng) */}
          <div style={{
            width: '100%',
            height: '58px',
            borderRadius: '20px',
            backgroundColor: '#F0FDFA',
            border: '1.5px solid #99F6E4',
            padding: '0 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
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
              fontWeight: 800
            }}>
              ✓
            </span>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0F4C45' }}>
              Đối chiếu dễ dàng
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
      {/* MÀN HÌNH 3: HÓA ĐƠN ĐIỆN TỬ (03_digital_invoice.svg)       */}
      {/* ========================================================= */}
      {step === 3 && (
        <div>
          {/* Tờ Hóa Đơn Điện Tử Thực Sự Đầy Đủ Thông Tin */}
          <div style={{
            width: '100%',
            maxWidth: '360px',
            margin: '0 auto 18px auto',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #CBD5E1',
            padding: '22px 20px',
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.05)',
            position: 'relative'
          }}>
            {/* Header phiếu */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #CBD5E1', paddingBottom: '14px', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>🧾</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                    Phiếu chăm sóc Miu
                  </div>
                  <div style={{ fontSize: '10px', color: '#64748B' }}>
                    #HD-2026-0828 · 28/08/2026
                  </div>
                </div>
              </div>
              <span style={{
                backgroundColor: '#F0FDF4',
                color: '#166534',
                fontSize: '9px',
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: '8px'
              }}>
                HỢP LỆ
              </span>
            </div>

            {/* Chi tiết nội dung hóa đơn thực tế */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#475569', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Khách hàng:</span>
                <strong style={{ color: '#0F172A' }}>Minh Khoa</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Thú cưng:</span>
                <strong style={{ color: '#0F172A' }}>Miu (Mèo Anh lông ngắn)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Kỹ thuật viên:</span>
                <span>Bảo Trâm (Buồng A-02)</span>
              </div>
            </div>

            {/* Bảng hạng mục tính tiền */}
            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '14px',
              padding: '12px 14px',
              marginBottom: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontSize: '12px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>1. Tắm vệ sinh thảo dược</span>
                <strong style={{ color: '#0F172A' }}>180.000đ</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>2. Vệ sinh tai & cắt móng</span>
                <strong style={{ color: '#0F172A' }}>50.000đ</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>3. Buồng sấy êm ái</span>
                <strong style={{ color: '#0F172A' }}>20.000đ</strong>
              </div>
              <div style={{ borderTop: '1px dashed #E2E8F0', paddingTop: '8px', marginTop: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontSize: '13px', color: '#0F172A' }}>Tổng cộng:</strong>
                <strong style={{ fontSize: '17px', color: '#0D766E' }}>250.000đ</strong>
              </div>
            </div>

            {/* Digital_Seal (Con dấu số an toàn) */}
            <div style={{
              backgroundColor: '#F0FDF4',
              borderRadius: '16px',
              padding: '12px 14px',
              textAlign: 'center',
              border: '1px solid #BBF7D0'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#166534', marginBottom: '2px' }}>
                ĐÃ LƯU AN TOÀN
              </div>
              <div style={{ fontSize: '10px', color: '#64748B' }}>
                Không phai · Không thất lạc
              </div>
            </div>
          </div>

          {/* 2 Nút Tiện Ích: Tải bản lưu & Chia sẻ */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            <button
              type="button"
              onClick={handleDownload}
              style={{
                height: '54px',
                borderRadius: '16px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #0D766E',
                color: '#0D766E',
                fontSize: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(13, 118, 110, 0.08)'
              }}
            >
              <span>{downloadSuccess ? '✓ Đã tải PDF' : 'Tải bản lưu'}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              style={{
                height: '54px',
                borderRadius: '16px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #E2E8F0',
                color: '#64748B',
                fontSize: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)'
              }}
            >
              <span>{shareSuccess ? '✓ Đã sao chép' : 'Chia sẻ'}</span>
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
      {/* MÀN HÌNH 4: CHI TIÊU THÁNG (04_monthly_expense_summary)     */}
      {/* ========================================================= */}
      {step === 4 && (
        <div>
          {/* Monthly_Hero */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #CCFBF1',
            padding: '18px 20px',
            marginBottom: '16px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                Ngân sách của Miu
              </span>
              <span style={{
                backgroundColor: '#F0FDF4',
                color: '#166534',
                fontSize: '9px',
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: '8px'
              }}>
                TRONG KẾ HOẠCH
              </span>
            </div>
            <div style={{ fontSize: '11px', color: '#64748B' }}>
              Theo dõi định kỳ
            </div>
          </div>

          {/* Monthly_Chart: BIỂU ĐỒ ĐƯỜNG (LINE / AREA CHART CHUẨN SVG) */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            padding: '20px',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.6px' }}>
                XU HƯỚNG
              </span>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#0D766E' }}>
                {selectedMonth}: {expenseData[selectedMonth].cost}
              </span>
            </div>

            {/* Biểu đồ SVG đường chuẩn xác theo tọa độ trong prototype */}
            <div style={{ width: '100%', height: '170px', position: 'relative' }}>
              <svg viewBox="0 0 390 170" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                {/* Lưới tọa độ xám mờ */}
                <line x1="30" y1="140" x2="360" y2="140" stroke="#CBD5E1" strokeWidth="1" />
                <line x1="30" y1="20" x2="30" y2="140" stroke="#CBD5E1" strokeWidth="1" />

                {/* Vùng diện tích mờ dưới đường (Area fill) */}
                <path
                  d="M50 110 L 120 75 L 190 95 L 260 30 L 335 50 L 335 140 L 50 140 Z"
                  fill="#CCFBF1"
                  opacity="0.6"
                />

                {/* Đường biểu đồ (Line chart stroke) */}
                <path
                  d="M50 110 L 120 75 L 190 95 L 260 30 L 335 50"
                  fill="none"
                  stroke="#0D766E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* 5 Điểm tròn trên đường (Data Points) */}
                {[
                  { id: 'T1', cx: 50, cy: 110 },
                  { id: 'T2', cx: 120, cy: 75 },
                  { id: 'T3', cx: 190, cy: 95 },
                  { id: 'T4', cx: 260, cy: 30 },
                  { id: 'NAY', cx: 335, cy: 50 }
                ].map((pt) => {
                  const isSelected = selectedMonth === pt.id;
                  return (
                    <g key={pt.id} onClick={() => setSelectedMonth(pt.id as any)} style={{ cursor: 'pointer' }}>
                      <circle
                        cx={pt.cx}
                        cy={pt.cy}
                        r={isSelected ? 8 : 6}
                        fill={isSelected ? '#0D766E' : '#FFFFFF'}
                        stroke="#0D766E"
                        strokeWidth={isSelected ? 3 : 2}
                      />
                      {isSelected && (
                        <circle cx={pt.cx} cy={pt.cy} r={13} fill="#0D766E" opacity="0.15" />
                      )}
                    </g>
                  );
                })}

                {/* Nhãn trục hoành */}
                <text x="50" y="160" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight={selectedMonth === 'T1' ? '800' : '500'}>T1</text>
                <text x="120" y="160" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight={selectedMonth === 'T2' ? '800' : '500'}>T2</text>
                <text x="190" y="160" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight={selectedMonth === 'T3' ? '800' : '500'}>T3</text>
                <text x="260" y="160" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight={selectedMonth === 'T4' ? '800' : '500'}>T4</text>
                <text x="335" y="160" textAnchor="middle" fill="#0D766E" fontSize="12" fontWeight="800">NAY</text>
              </svg>
            </div>

            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '11px', color: '#64748B' }}>
              Chi tiết: <strong>{expenseData[selectedMonth].note}</strong>
            </div>
          </div>

          {/* Monthly_Insights (2 ô song song: Dễ theo dõi & Chủ động) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            <div style={{
              backgroundColor: '#F0FDFA',
              borderRadius: '20px',
              border: '1.5px solid #CCFBF1',
              padding: '16px'
            }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                Dễ theo dõi
              </div>
              <div style={{ fontSize: '9px', color: '#64748B' }}>
                Theo từng tháng
              </div>
            </div>

            <div style={{
              backgroundColor: '#FFF7ED',
              borderRadius: '20px',
              border: '1.5px solid #FED7AA',
              padding: '16px'
            }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                Chủ động
              </div>
              <div style={{ fontSize: '9px', color: '#64748B' }}>
                Cân đối sinh hoạt
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
      {/* MÀN HÌNH 5: KẾ HOẠCH THÁNG TỚI (05_next_month_budget_plan)  */}
      {/* ========================================================= */}
      {step === 5 && (
        <div>
          {/* Plan_Hero (Banner teal) */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#0D766E',
            padding: '24px 20px',
            color: '#FFFFFF',
            marginBottom: '20px',
            boxShadow: '0 6px 20px rgba(13, 118, 110, 0.2)'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#CCFBF1', letterSpacing: '0.6px', marginBottom: '6px' }}>
              MỤC TIÊU
            </div>
            <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px' }}>
              Chăm Miu chủ động
            </div>
            <div style={{ fontSize: '11px', color: '#CCFBF1' }}>
              Không ảnh hưởng sinh hoạt
            </div>
          </div>

          <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.6px', marginBottom: '12px' }}>
            PHÂN BỔ DỰ KIẾN
          </div>

          {/* Plan_Allocation: BIỂU ĐỒ TRÒN (DONUT CHART) BÊN TRÁI + CHÚ THÍCH BÊN PHẢI */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            padding: '20px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}>
            {/* Biểu đồ Donut Chart SVG chuẩn */}
            <div style={{ width: '130px', height: '130px', position: 'relative', flexShrink: 0 }}>
              <svg viewBox="0 0 140 140" style={{ width: '100%', height: '100%' }}>
                {/* Vòng tròn nền xám */}
                <circle cx="70" cy="70" r="50" fill="none" stroke="#E2E8F0" strokeWidth="16" />

                {/* Cung 1: Chăm sóc định kỳ (60% - màu #0D766E) */}
                <circle
                  cx="70"
                  cy="70"
                  r="50"
                  fill="none"
                  stroke="#0D766E"
                  strokeWidth="16"
                  strokeDasharray="188 314"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                />

                {/* Cung 2: Khoản dự phòng (25% - màu #E06236) */}
                <circle
                  cx="70"
                  cy="70"
                  r="50"
                  fill="none"
                  stroke="#E06236"
                  strokeWidth="16"
                  strokeDasharray="78 314"
                  strokeDashoffset="-195"
                  strokeLinecap="round"
                />

                {/* Tâm tròn trắng & Dấu checkmark xanh */}
                <circle cx="70" cy="70" r="28" fill="#FFFFFF" />
                <path d="M62 70 l6 6 13-14" fill="none" stroke="#166534" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Chú thích 3 dòng bên phải */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0D766E' }} />
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#0F172A' }}>Chăm sóc định kỳ</span>
                </div>
                <div style={{ fontSize: '10px', color: '#64748B', marginLeft: '14px' }}>60% · 2 lượt tắm</div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E06236' }} />
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#0F172A' }}>Khoản dự phòng</span>
                </div>
                <div style={{ fontSize: '10px', color: '#64748B', marginLeft: '14px' }}>25% · Dự trữ sức khỏe</div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#CBD5E1' }} />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748B' }}>Phần còn lại</span>
                </div>
                <div style={{ fontSize: '10px', color: '#94A3B8', marginLeft: '14px' }}>15% · Linh hoạt</div>
              </div>
            </div>
          </div>

          {/* Plan_Checklist (Kế hoạch cân đối) */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#F0FDF4',
            border: '1.5px solid #BBF7D0',
            padding: '16px 20px',
            marginBottom: '26px'
          }}>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>
              Kế hoạch cân đối
            </div>
            <div style={{ fontSize: '10px', color: '#64748B', marginBottom: '10px' }}>
              Dựa trên lịch sử đã lưu
            </div>
            <span style={{
              backgroundColor: '#DCFCE7',
              color: '#166534',
              fontSize: '10px',
              fontWeight: 800,
              padding: '4px 10px',
              borderRadius: '8px',
              display: 'inline-block'
            }}>
              SẴN SÀNG CHO THÁNG TỚI
            </span>
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
              marginBottom: '10px'
            }}
          >
            <span>{savePlanSuccess ? '✓ Đã lưu kế hoạch!' : 'Lưu kế hoạch'}</span>
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
              fontSize: '13px',
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
