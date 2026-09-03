import React, { useState } from 'react';
import { NotificationItem, NotificationSettingsState } from '../../types';
import { BellIcon, CheckIcon, SettingsIcon, ShieldIcon, ClockIcon, InvoiceIcon } from '../../components/icons/Icons';

interface NotificationHubProps {
  notifications: NotificationItem[];
  onMarkAllAsRead: () => void;
  onOpenSettings: () => void;
  onNotificationClick: (notif: NotificationItem) => void;
}

export const NotificationHub: React.FC<NotificationHubProps> = ({
  notifications,
  onMarkAllAsRead,
  onOpenSettings,
  onNotificationClick
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tracking' | 'medical' | 'invoice'>('all');

  const filtered = notifications.filter((n) => {
    if (selectedCategory === 'all') return true;
    return n.category === selectedCategory;
  });

  return (
    <div style={{ paddingTop: '8px' }}>
      {/* Header action bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <button
          onClick={onMarkAllAsRead}
          className="btn-outline"
          style={{ height: '36px', padding: '0 12px', fontSize: '12px' }}
        >
          <CheckIcon size={14} />
          <span>Đọc tất cả</span>
        </button>

        <button
          onClick={onOpenSettings}
          className="btn-secondary"
          style={{ height: '36px', padding: '0 12px', fontSize: '12px' }}
        >
          <SettingsIcon size={14} />
          <span>Cài đặt kênh</span>
        </button>
      </div>

      {/* Category Filter Chips */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '12px' }}>
        {[
          { id: 'all', label: 'Tất cả' },
          { id: 'tracking', label: 'Tiến độ 4 mốc' },
          { id: 'medical', label: 'Y tế & Dị ứng' },
          { id: 'invoice', label: 'Hóa đơn VAT' }
        ].map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`badge ${isActive ? 'badge-teal' : 'badge-neutral'}`}
              style={{
                height: '32px',
                padding: '0 12px',
                fontSize: '12px',
                borderRadius: '16px',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
              aria-pressed={isActive}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Notification List */}
      {filtered.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '32px 16px' }}>
          <BellIcon size={32} color="#94A3B8" />
          <h3 className="text-h3" style={{ marginTop: '8px' }}>Không có thông báo nào</h3>
          <p className="text-sub" style={{ marginTop: '4px' }}>
            Bạn đã cập nhật mọi tin tức mới nhất từ PetCare Pro.
          </p>
        </div>
      ) : (
        filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => onNotificationClick(item)}
            className={`card card-clickable ${!item.isRead ? 'card-selected' : ''}`}
            style={{
              padding: '14px',
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start'
            }}
            role="button"
            tabIndex={0}
            aria-label={item.title}
          >
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: item.category === 'medical' ? '#FFF1F2' : item.category === 'tracking' ? '#F0FDFA' : '#F1F5F9',
              color: item.category === 'medical' ? '#9F1239' : item.category === 'tracking' ? '#0D766E' : '#0F172A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {item.category === 'medical' ? <ShieldIcon size={18} /> : item.category === 'tracking' ? <ClockIcon size={18} /> : <InvoiceIcon size={18} />}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <strong style={{ fontSize: '13px', color: '#0F172A' }}>{item.title}</strong>
                {!item.isRead && (
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0D766E' }} />
                )}
              </div>
              <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.4 }}>{item.message}</p>
              <span style={{ fontSize: '11px', color: '#94A3B8', marginTop: '6px', display: 'inline-block' }}>{item.timeAgo}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
