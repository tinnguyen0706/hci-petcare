import React from 'react';
import { Booking, Pet } from '../../types';
import { ShieldIcon, CheckIcon, StarIcon } from '../../components/icons/Icons';

interface InspectionReportModalProps {
  booking: Booking;
  pet: Pet;
  onProceedToReview: () => void;
  onClose: () => void;
}

export const InspectionReportModal: React.FC<InspectionReportModalProps> = ({
  booking,
  pet,
  onProceedToReview,
  onClose
}) => {
  return (
    <div style={{ paddingTop: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span className="badge badge-teal">[NGHIỆM THU THỂ TRẠNG TRƯỚC/SAU]</span>
        <span style={{ fontSize: '11px', color: '#0D766E', fontWeight: 700 }}>CAREGUARD AUDIT</span>
      </div>

      <h2 className="text-h2" style={{ marginBottom: '4px' }}>Báo Cáo An Toàn Da Liễu</h2>
      <p className="text-sub" style={{ fontSize: '12px', marginBottom: '14px' }}>
        Đối chiếu tình trạng da & lông của bé {pet.name} trước và sau khi hoàn tất quy trình spa.
      </p>

      {/* Điểm số an toàn 10/10 */}
      <div className="card" style={{ backgroundColor: '#F0FDF4', border: '2px solid #166534', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <div>
          <strong style={{ fontSize: '15px', color: '#166534' }}>Điểm An Toàn Da Liễu:</strong>
          <p style={{ fontSize: '12px', color: '#14532D', marginTop: '2px' }}>Không có dấu hiệu kích ứng hay ửng đỏ</p>
        </div>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#166534',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          fontWeight: 800
        }}>
          10/10
        </div>
      </div>

      {/* So sánh trước và sau */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
        <div className="card" style={{ padding: '12px', backgroundColor: '#F8FAFC', marginBottom: 0 }}>
          <strong style={{ fontSize: '13px', color: '#64748B', display: 'block', marginBottom: '4px' }}>
            [TRƯỚC KHI TẮM]
          </strong>
          <div style={{
            height: '100px',
            backgroundColor: '#E2E8F0',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            color: '#64748B',
            textAlign: 'center',
            padding: '6px'
          }}>
            Lông rối kết bết, da bụng hơi ửng hồng do gãi nhiều
          </div>
          <span style={{ fontSize: '11px', color: '#64748B', marginTop: '4px', display: 'block' }}>Ghi nhận lúc 09:05</span>
        </div>

        <div className="card" style={{ padding: '12px', backgroundColor: '#F0FDFA', border: '1px solid #CCFBF1', marginBottom: 0 }}>
          <strong style={{ fontSize: '13px', color: '#0D766E', display: 'block', marginBottom: '4px' }}>
            [SAU KHI TẮM DERMA]
          </strong>
          <div style={{
            height: '100px',
            backgroundColor: '#CCFBF1',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            color: '#0F4C45',
            textAlign: 'center',
            padding: '6px',
            fontWeight: 600
          }}>
            Lông trắng tơi xốp mềm mượt, da sạch dịu mẩn đỏ 100%
          </div>
          <span style={{ fontSize: '11px', color: '#0D766E', marginTop: '4px', display: 'block' }}>Nghiệm thu lúc 09:42</span>
        </div>
      </div>

      {/* Xác nhận của KTV */}
      <div className="card" style={{ marginBottom: '16px', fontSize: '12px', color: '#334155' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span>Kỹ thuật viên thực hiện:</span>
          <strong>{booking.technicianName}</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span>Sản phẩm sử dụng:</span>
          <strong>Derma-Care Sensitive Skin pH 6.5</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Ký xác nhận:</span>
          <strong style={{ color: '#166534' }}>Đã đối soát an toàn ✓</strong>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button className="btn-outline" style={{ flex: 1 }} onClick={onClose}>
          Đóng
        </button>
        <button className="btn-primary" style={{ flex: 2 }} onClick={onProceedToReview}>
          <StarIcon size={16} />
          <span>Đánh giá dịch vụ 5 sao</span>
        </button>
      </div>
    </div>
  );
};
