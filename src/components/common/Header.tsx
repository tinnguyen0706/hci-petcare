import React from 'react';
import { ChevronLeftIcon, BellIcon, ShieldIcon, UserIcon } from '../icons/Icons';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  onOpenNotifications?: () => void;
  unreadCount?: number;
  currentPersona: 'persona-1' | 'persona-2';
  onSwitchPersona: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  onBack,
  onOpenNotifications,
  unreadCount = 0,
  currentPersona,
  onSwitchPersona
}) => {
  return (
    <>
      {/* iOS Status Bar */}
      <header className="status-bar" aria-label="Thanh trạng thái hệ thống">
        <span>09:41</span>
        <div className="status-bar-icons">
          <button 
            onClick={onSwitchPersona}
            aria-label={`Tài khoản người dùng: ${currentPersona === 'persona-1' ? 'Nguyễn Hoàng Lan' : 'Trần Minh Khoa'} (Chạm để chuyển đổi)`}
            style={{
              background: '#F0FDFA',
              border: '1px solid #CCFBF1',
              borderRadius: '12px',
              padding: '2px 8px',
              fontSize: '11px',
              fontWeight: 600,
              color: '#0D766E',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0D766E' }} />
            <span>{currentPersona === 'persona-1' ? 'Lan (Bé Bơ)' : 'Khoa (Bé Miu)'}</span>
          </button>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B' }}>5G</span>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#0D766E' }}>100%</span>
        </div>
      </header>

      {/* Main Top Bar */}
      <div className="app-top-nav" role="navigation" aria-label="Điều hướng chính">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {showBack && (
            <button
              onClick={onBack}
              aria-label="Quay lại màn hình trước"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0F172A',
                cursor: 'pointer'
              }}
            >
              <ChevronLeftIcon size={22} />
            </button>
          )}

          <div className="nav-title-group">
            <h1 className="nav-title">{title}</h1>
            {subtitle && <span className="nav-subtitle">{subtitle}</span>}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {onOpenNotifications && (
            <button
              onClick={onOpenNotifications}
              aria-label={`Thông báo (${unreadCount} chưa đọc)`}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#F0FDFA',
                border: '1px solid #CCFBF1',
                color: '#0D766E',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <BellIcon size={20} />
              {unreadCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: '#E06236'
                  }}
                  aria-hidden="true"
                />
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
