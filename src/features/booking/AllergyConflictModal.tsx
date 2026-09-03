import React from 'react';
import { AlertIcon, CheckIcon } from '../../components/icons/Icons';
import { Modal } from '../../components/common/Modal';

interface AllergyConflictModalProps {
  isOpen: boolean;
  onClose: () => void;
  petName: string;
  allergyNotice: string;
  onAutoFixHypoallergenic: () => void;
  onBringOwnShampoo: () => void;
}

export const AllergyConflictModal: React.FC<AllergyConflictModalProps> = ({
  isOpen,
  onClose,
  petName,
  allergyNotice,
  onAutoFixHypoallergenic,
  onBringOwnShampoo
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cảnh Báo Xung Đột Y Tế" type="center_dialog">
      <div style={{ textAlign: 'center', padding: '4px 0' }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#FFF1F2',
          border: '2px solid #FECDD3',
          color: '#9F1239',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 10px auto'
        }}>
          <AlertIcon size={26} />
        </div>

        <h3 className="text-h3" style={{ color: '#9F1239', marginBottom: '6px' }}>
          Nguy Cơ Kích Ứng Viêm Da!
        </h3>

        <div className="card" style={{ backgroundColor: '#FFF1F2', border: '1px solid #FECDD3', textAlign: 'left', marginBottom: '14px', padding: '10px 12px' }}>
          <div style={{ fontSize: '12px', color: '#9F1239', fontWeight: 700, marginBottom: '2px' }}>
            Hồ sơ y tế bé {petName}:
          </div>
          <div style={{ fontSize: '12px', color: '#881337', marginBottom: '6px' }}>
            {allergyNotice}
          </div>
          <div style={{ fontSize: '11px', color: '#9F1239', borderTop: '1px dashed #FECDD3', paddingTop: '4px' }}>
            Gói Tiêu chuẩn chứa chất tạo bọt sulfate & hương liệu dễ gây ngứa rát.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button
            className="btn-primary"
            onClick={onAutoFixHypoallergenic}
            style={{ backgroundColor: '#0D766E', height: '48px', fontSize: '13px' }}
            aria-label="Tự động đổi sang gói Derma-Care dịu nhẹ 1-chạm"
          >
            <CheckIcon size={16} />
            <span>Đổi sang Derma-Care dịu nhẹ (1-Chạm)</span>
          </button>

          <button
            className="btn-outline"
            onClick={onBringOwnShampoo}
            style={{ height: '42px', fontSize: '12px' }}
          >
            Tôi tự mang dầu tắm riêng của bé
          </button>

          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '11px', cursor: 'pointer', padding: '4px' }}
          >
            Hủy và chọn lại
          </button>
        </div>
      </div>
    </Modal>
  );
};
