import React, { useState } from 'react';
import { Pet } from '../../types';
import { ShieldIcon, CheckIcon, CalendarIcon } from '../../components/icons/Icons';

interface VaccinationHealthBookProps {
  pet: Pet;
  onClose: () => void;
}

export const VaccinationHealthBook: React.FC<VaccinationHealthBookProps> = ({
  pet,
  onClose
}) => {
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handleDownload = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 2000);
  };

  return (
    <div style={{ paddingTop: '8px' }}>
      {/* Thẻ định danh số */}
      <div className="card" style={{ backgroundColor: '#F0FDFA', border: '2px solid #0D766E', marginBottom: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span className="badge badge-teal">[SỔ SỨC KHỎE SỐ HÓA]</span>
          <span style={{ fontSize: '11px', color: '#0D766E', fontWeight: 700 }}>HỆ THỐNG CAREGUARD</span>
        </div>
        <h2 className="text-h2" style={{ color: '#0F172A', marginBottom: '2px' }}>
          {pet.name} — {pet.breed}
        </h2>
        <p className="text-sub" style={{ fontSize: '12px' }}>
          Mã số định danh chip thú y: <strong>VN-PET-90248-BO</strong>
        </p>
      </div>

      {/* Danh sách các mũi tiêm phòng */}
      <section className="card" style={{ marginBottom: '16px' }}>
        <h3 className="text-h3" style={{ marginBottom: '12px' }}>Lịch sử tiêm phòng & ngừa dại</h3>

        {pet.vaccines.map((v, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: idx < pet.vaccines.length - 1 ? '1px solid #E2E8F0' : 'none'
            }}
          >
            <div>
              <strong style={{ fontSize: '13px', color: '#0F172A', display: 'block' }}>{v.name}</strong>
              <span className="text-sub" style={{ fontSize: '11px' }}>Hạn bảo hộ miễn dịch: {v.expiryDate}</span>
            </div>
            <span className="badge badge-success" style={{ flexShrink: 0 }}>
              <CheckIcon size={12} />
              [CÒN HẠN]
            </span>
          </div>
        ))}
      </section>

      {/* Thông tin tẩy giun & phòng ve rận */}
      <section className="card" style={{ marginBottom: '16px' }}>
        <h3 className="text-h3" style={{ marginBottom: '8px' }}>Lịch kiểm tra ký sinh trùng</h3>
        <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.4 }}>
          Bé đã được tẩy giun định kỳ ngày 05/08/2026. Lịch nhắc tái chủng ngừa tiếp theo: <strong>05/11/2026</strong>.
        </p>
      </section>

      {downloadNotice && (
        <div className="badge badge-teal" style={{ width: '100%', height: '40px', justifyContent: 'center', marginBottom: '10px', fontSize: '13px' }}>
          <span>✓ Đã tải file PDF sổ tiêm phòng điện tử thành công!</span>
        </div>
      )}

      <div style={{ display: 'flex', gap: '8px' }}>
        <button className="btn-outline" style={{ flex: 1 }} onClick={onClose}>
          Đóng
        </button>
        <button className="btn-primary" style={{ flex: 2 }} onClick={handleDownload}>
          Tải file PDF sổ y tế
        </button>
      </div>
    </div>
  );
};
