import React, { useState } from 'react';
import { CareHistoryRecord } from '../../types';
import { ShieldIcon, CheckIcon, StarIcon } from '../../components/icons/Icons';

interface ProductNotesDetailProps {
  record: CareHistoryRecord;
  onClose: () => void;
}

export const ProductNotesDetail: React.FC<ProductNotesDetailProps> = ({
  record,
  onClose
}) => {
  const [savedPreference, setSavedPreference] = useState(false);

  const handleSavePref = () => {
    setSavedPreference(true);
    setTimeout(() => {
      setSavedPreference(false);
      onClose();
    }, 1000);
  };

  return (
    <div style={{ paddingTop: '8px' }}>
      <div className="card" style={{ backgroundColor: '#F0FDFA', border: '1px solid #CCFBF1', marginBottom: '14px' }}>
        <span className="badge badge-teal" style={{ marginBottom: '6px' }}>[XÁC MINH SẢN PHẨM DERMA-CARE]</span>
        <h2 className="text-h2" style={{ color: '#0D766E', marginBottom: '2px' }}>
          Dược Phẩm & Dưỡng Da Sử Dụng
        </h2>
        <p className="text-sub" style={{ fontSize: '12px' }}>
          Buổi chăm sóc ngày {record.date} • KTV: {record.technicianName}
        </p>
      </div>

      {/* Danh mục sản phẩm */}
      <section className="card" style={{ marginBottom: '14px' }}>
        <h3 className="text-h3" style={{ marginBottom: '10px' }}>Danh mục sản phẩm tiếp xúc da</h3>
        {record.productsUsed.map((prod, idx) => (
          <div
            key={idx}
            style={{
              padding: '10px 0',
              borderBottom: idx < record.productsUsed.length - 1 ? '1px solid #E2E8F0' : 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <strong style={{ fontSize: '13px', color: '#0F172A', display: 'block' }}>{prod.name}</strong>
              <span className="text-sub" style={{ fontSize: '11px' }}>{prod.type} • Nồng độ: {prod.phLevel}</span>
            </div>
            <span className="badge badge-success" style={{ flexShrink: 0 }}>
              <CheckIcon size={12} />
              [AN TOÀN ✓]
            </span>
          </div>
        ))}
      </section>

      {/* Đánh giá thể trạng da liễu */}
      <section className="card" style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h3 className="text-h3">Chỉ số hồi phục da</h3>
          <span className="badge badge-success">ĐẠT: {record.skinHealthScore}/10</span>
        </div>
        <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.4 }}>
          {record.technicianReviewNote}
        </p>
      </section>

      {savedPreference ? (
        <div className="badge badge-success" style={{ width: '100%', height: '48px', justifyContent: 'center', fontSize: '14px' }}>
          <CheckIcon size={18} />
          <span>Đã lưu công thức sản phẩm ưu tiên vào hồ sơ!</span>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn-outline" style={{ flex: 1 }} onClick={onClose}>
            Đóng
          </button>
          <button className="btn-primary" style={{ flex: 2 }} onClick={handleSavePref}>
            <CheckIcon size={16} />
            <span>Lưu sản phẩm cho lần tới</span>
          </button>
        </div>
      )}
    </div>
  );
};
