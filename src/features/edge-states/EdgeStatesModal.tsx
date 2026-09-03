import React from 'react';
import { AlertIcon, CheckIcon, RefreshIcon, PawIcon } from '../../components/icons/Icons';
import { Modal } from '../../components/common/Modal';

export type EdgeStateType = 'loading' | 'empty' | 'error_conflict' | 'error_network' | 'success' | null;

interface EdgeStatesModalProps {
  type: EdgeStateType;
  onClose: () => void;
  onRetry?: () => void;
  onNavigateToBooking?: () => void;
}

export const EdgeStatesModal: React.FC<EdgeStatesModalProps> = ({
  type,
  onClose,
  onRetry,
  onNavigateToBooking
}) => {
  if (!type) return null;

  return (
    <Modal isOpen={type !== null} onClose={onClose} type="center_dialog">
      {/* 1. LOADING STATE (state_loading_wireframe.svg) */}
      {type === 'loading' && (
        <div style={{ textAlign: 'center', padding: '16px 8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
            <div className="skeleton" style={{ height: '24px', width: '70%', margin: '0 auto' }} />
            <div className="skeleton" style={{ height: '14px', width: '90%', margin: '0 auto' }} />
            <div className="skeleton" style={{ height: '80px', width: '100%', borderRadius: '12px', marginTop: '12px' }} />
            <div className="skeleton" style={{ height: '48px', width: '100%', borderRadius: '12px' }} />
          </div>
          <strong style={{ fontSize: '14px', color: '#0D766E' }}>
            Đang đồng bộ dữ liệu thời gian thực...
          </strong>
          <p className="text-sub" style={{ fontSize: '12px', marginTop: '4px' }}>
            Hệ thống đang kết nối cảm biến buồng cách ly và ma trận khung giờ.
          </p>
        </div>
      )}

      {/* 2. EMPTY STATE (state_empty_wireframe.svg) */}
      {type === 'empty' && (
        <div style={{ textAlign: 'center', padding: '16px 8px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#F1F5F9',
            border: '2px solid #CBD5E1',
            color: '#64748B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px auto'
          }}>
            <PawIcon size={32} />
          </div>
          <h2 className="text-h2" style={{ marginBottom: '6px' }}>Chưa Có Lịch Hẹn Nào</h2>
          <p className="text-sub" style={{ fontSize: '12px', marginBottom: '20px', lineHeight: 1.4 }}>
            Hôm nay bé chưa có lịch chăm sóc spa hoặc tất cả các ca trong ngày đã hoàn tất an toàn.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-outline" style={{ flex: 1 }} onClick={onClose}>
              Đóng
            </button>
            <button className="btn-primary" style={{ flex: 2 }} onClick={() => { onClose(); onNavigateToBooking && onNavigateToBooking(); }}>
              Đặt lịch mới ngay
            </button>
          </div>
        </div>
      )}

      {/* 3. ERROR CONFLICT STATE (state_error_wireframe.svg) */}
      {type === 'error_conflict' && (
        <div style={{ textAlign: 'center', padding: '16px 8px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#FFF1F2',
            border: '2px solid #FECDD3',
            color: '#9F1239',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px auto'
          }}>
            <AlertIcon size={32} />
          </div>
          <h2 className="text-h2" style={{ color: '#9F1239', marginBottom: '6px' }}>
            Xung Đột Dị Ứng Y Tế
          </h2>
          <p className="text-sub" style={{ fontSize: '12px', marginBottom: '16px', lineHeight: 1.4 }}>
            Bé Bơ có tiền sử viêm da dị ứng với xà phòng nhiều hương liệu. Dịch vụ này không đảm bảo an toàn cho da bé.
          </p>
          <button className="btn-primary" style={{ backgroundColor: '#0D766E' }} onClick={onClose}>
            Tự động đổi sang Derma-Care (1-Chạm)
          </button>
        </div>
      )}

      {/* 4. NETWORK ERROR STATE (state_error_network_wireframe.svg) */}
      {type === 'error_network' && (
        <div style={{ textAlign: 'center', padding: '16px 8px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#FFFBEB',
            border: '2px solid #FDE68A',
            color: '#D97706',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px auto'
          }}>
            <RefreshIcon size={32} />
          </div>
          <h2 className="text-h2" style={{ color: '#D97706', marginBottom: '6px' }}>
            Mất Kết Nối Mạng
          </h2>
          <p className="text-sub" style={{ fontSize: '12px', marginBottom: '16px', lineHeight: 1.4 }}>
            Không thể tải dữ liệu mới nhất. Đang sử dụng dữ liệu đệm ngoại tuyến (Offline cache).
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-outline" style={{ flex: 1 }} onClick={onClose}>
              Đóng
            </button>
            <button className="btn-primary" style={{ flex: 2 }} onClick={onRetry || onClose}>
              <RefreshIcon size={16} />
              <span>Thử kết nối lại</span>
            </button>
          </div>
        </div>
      )}

      {/* 5. SUCCESS STATE (state_success_wireframe.svg) */}
      {type === 'success' && (
        <div style={{ textAlign: 'center', padding: '16px 8px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#F0FDF4',
            border: '3px solid #166534',
            color: '#166534',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px auto'
          }}>
            <CheckIcon size={34} />
          </div>
          <h2 className="text-h2" style={{ color: '#166534', marginBottom: '6px' }}>
            Thao Tác Thành Công!
          </h2>
          <p className="text-sub" style={{ fontSize: '12px', marginBottom: '20px', lineHeight: 1.4 }}>
            Dữ liệu đã được cập nhật đồng bộ và kích hoạt bảo an CareGuard 100%.
          </p>
          <button className="btn-primary" onClick={onClose}>
            Tiếp tục
          </button>
        </div>
      )}
    </Modal>
  );
};
