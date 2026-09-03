import React from 'react';
import { HomeIcon, CalendarIcon, ClockIcon, UserIcon } from '../icons/Icons';
import { ActiveTab } from '../../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  trackingActiveBadge?: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  trackingActiveBadge = false
}) => {
  return (
    <nav className="app-bottom-nav" role="tablist" aria-label="Thanh điều hướng chuyển đổi tab">
      <button
        role="tab"
        aria-selected={activeTab === 'home'}
        aria-label="Tab Trang chủ"
        className={`nav-tab-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => onTabChange('home')}
      >
        <HomeIcon size={22} color={activeTab === 'home' ? '#0D766E' : '#64748B'} />
        <span className="nav-tab-label">Trang chủ</span>
      </button>

      <button
        role="tab"
        aria-selected={activeTab === 'booking'}
        aria-label="Tab Đặt lịch hẹn"
        className={`nav-tab-item ${activeTab === 'booking' ? 'active' : ''}`}
        onClick={() => onTabChange('booking')}
      >
        <CalendarIcon size={22} color={activeTab === 'booking' ? '#0D766E' : '#64748B'} />
        <span className="nav-tab-label">Đặt lịch</span>
      </button>

      <button
        role="tab"
        aria-selected={activeTab === 'tracking'}
        aria-label="Tab Theo dõi tiến độ 4 mốc"
        className={`nav-tab-item ${activeTab === 'tracking' ? 'active' : ''}`}
        onClick={() => onTabChange('tracking')}
        style={{ position: 'relative' }}
      >
        <ClockIcon size={22} color={activeTab === 'tracking' ? '#0D766E' : '#64748B'} />
        <span className="nav-tab-label">Tiến độ</span>
        {trackingActiveBadge && (
          <span
            style={{
              position: 'absolute',
              top: '4px',
              right: '18px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#0D766E',
              border: '2px solid #FFFFFF'
            }}
            aria-hidden="true"
          />
        )}
      </button>

      <button
        role="tab"
        aria-selected={activeTab === 'pets'}
        aria-label="Tab Hồ sơ thú cưng"
        className={`nav-tab-item ${activeTab === 'pets' ? 'active' : ''}`}
        onClick={() => onTabChange('pets')}
      >
        <UserIcon size={22} color={activeTab === 'pets' ? '#0D766E' : '#64748B'} />
        <span className="nav-tab-label">Hồ sơ</span>
      </button>
    </nav>
  );
};
