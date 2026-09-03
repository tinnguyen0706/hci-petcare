import React, { useEffect } from 'react';
import { CloseIcon } from '../icons/Icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  type?: 'bottom_sheet' | 'center_dialog';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  type = 'bottom_sheet'
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog" 
      aria-modal="true"
      aria-label={title || 'Hộp thoại'}
    >
      <div
        className={type === 'bottom_sheet' ? 'bottom-sheet' : 'card'}
        style={type === 'center_dialog' ? {
          margin: 'auto 16px',
          maxHeight: '90%',
          overflowY: 'auto',
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.25)'
        } : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        {type === 'bottom_sheet' && <div className="sheet-handle" aria-hidden="true" />}
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          paddingBottom: '8px',
          borderBottom: '1px solid #E2E8F0'
        }}>
          {title ? (
            <h2 className="text-h2" style={{ margin: 0 }}>{title}</h2>
          ) : <div />}
          <button
            onClick={onClose}
            aria-label="Đóng hộp thoại"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#F1F5F9',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#64748B'
            }}
          >
            <CloseIcon size={18} />
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};
