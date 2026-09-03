import React, { useState } from 'react';
import { NotificationSettingsState } from '../../types';
import { CheckIcon, BellIcon, ShieldIcon } from '../../components/icons/Icons';

interface NotificationSettingsProps {
  settings: NotificationSettingsState;
  onSaveSettings: (newSettings: NotificationSettingsState) => void;
  onClose: () => void;
}

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  settings,
  onSaveSettings,
  onClose
}) => {
  const [form, setForm] = useState<NotificationSettingsState>({ ...settings });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleToggle = (key: 'appPush' | 'sms' | 'zalo' | 'quietHours') => {
    setForm((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleMilestoneToggle = (step: 'step1' | 'step2' | 'step3' | 'step4') => {
    setForm((prev) => ({
      ...prev,
      milestones: {
        ...prev.milestones,
        [step]: !prev.milestones[step]
      }
    }));
  };

  const handleSave = () => {
    onSaveSettings(form);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const renderSwitch = (checked: boolean, onChange: () => void, label: string) => (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      style={{
        width: '48px',
        height: '28px',
        borderRadius: '14px',
        backgroundColor: checked ? '#0D766E' : '#CBD5E1',
        border: 'none',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        padding: '2px'
      }}
    >
      <span
        style={{
          display: 'block',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          transform: checked ? 'translateX(20px)' : 'translateX(0)',
          transition: 'transform 0.2s ease'
        }}
      />
    </button>
  );

  return (
    <div style={{ padding: '4px 0' }}>
      {/* Kênh nhận tin */}
      <section className="card" style={{ marginBottom: '14px' }}>
        <h3 className="text-h3" style={{ marginBottom: '12px' }}>Kênh nhận thông báo</h3>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div>
            <strong style={{ fontSize: '13px', color: '#0F172A' }}>Thông báo ứng dụng (App Push)</strong>
            <p className="text-sub" style={{ fontSize: '11px' }}>Cập nhật tức thời kèm chuông báo</p>
          </div>
          {renderSwitch(form.appPush, () => handleToggle('appPush'), 'Bật thông báo ứng dụng')}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div>
            <strong style={{ fontSize: '13px', color: '#0F172A' }}>Tin nhắn SMS khẩn</strong>
            <p className="text-sub" style={{ fontSize: '11px' }}>Gửi khi đến giờ đón hoặc y tế cấp bách</p>
          </div>
          {renderSwitch(form.sms, () => handleToggle('sms'), 'Bật tin nhắn SMS')}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <strong style={{ fontSize: '13px', color: '#0F172A' }}>Thông báo Zalo ZNS</strong>
            <p className="text-sub" style={{ fontSize: '11px' }}>Nhận biên nhận và ảnh nghiệm thu</p>
          </div>
          {renderSwitch(form.zalo, () => handleToggle('zalo'), 'Bật thông báo Zalo')}
        </div>
      </section>

      {/* Mốc tiến độ */}
      <section className="card" style={{ marginBottom: '14px' }}>
        <h3 className="text-h3" style={{ marginBottom: '12px' }}>Thông báo 4 mốc chăm sóc</h3>

        {[
          { key: 'step1' as const, label: 'Mốc 1: Đã nhận thú cưng tại quầy' },
          { key: 'step2' as const, label: 'Mốc 2: Bắt đầu ngâm tắm dược liệu' },
          { key: 'step3' as const, label: 'Mốc 3: Hoàn tất sấy chải sạch thơm' },
          { key: 'step4' as const, label: 'Mốc 4: Sẵn sàng tại quầy đón bé' }
        ].map((m) => (
          <div key={m.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '13px', color: '#0F172A' }}>{m.label}</span>
            {renderSwitch(form.milestones[m.key], () => handleMilestoneToggle(m.key), m.label)}
          </div>
        ))}
      </section>

      {/* Chế độ im lặng giờ hành chính */}
      <section className="card" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <strong style={{ fontSize: '13px', color: '#0F172A' }}>Chế độ im lặng giờ làm việc</strong>
            <p className="text-sub" style={{ fontSize: '11px' }}>09:00 - 17:00 (chỉ rung nhẹ, không phát chuông lớn)</p>
          </div>
          {renderSwitch(form.quietHours, () => handleToggle('quietHours'), 'Bật chế độ im lặng')}
        </div>
      </section>

      {savedSuccess ? (
        <div className="badge badge-success" style={{ width: '100%', height: '48px', justifyContent: 'center', fontSize: '14px' }}>
          <CheckIcon size={18} />
          <span>Đã lưu cấu hình cài đặt thành công!</span>
        </div>
      ) : (
        <button className="btn-primary" onClick={handleSave}>
          Lưu cài đặt thông báo
        </button>
      )}
    </div>
  );
};
