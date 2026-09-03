import React, { useState } from 'react';
import { InvoiceIcon, CheckIcon } from '../../components/icons/Icons';

interface BudgetPlanViewProps {
  onClose: () => void;
}

export const BudgetPlanView: React.FC<BudgetPlanViewProps> = ({
  onClose
}) => {
  const [budgetLimit, setBudgetLimit] = useState(500000);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const spentSoFar = 470000; // Chi tiêu tháng này

  const handleSaveBudget = () => {
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div style={{ paddingTop: '8px' }}>
      <div className="card" style={{ backgroundColor: '#F0FDFA', border: '1px solid #CCFBF1', marginBottom: '14px' }}>
        <span className="badge badge-teal" style={{ marginBottom: '6px' }}>[QUẢN LÝ TÀI CHÍNH & NGÂN SÁCH]</span>
        <h2 className="text-h2" style={{ color: '#0D766E', marginBottom: '2px' }}>
          Chi Tiêu Chăm Sóc Tháng 08/2026
        </h2>
        <p className="text-sub" style={{ fontSize: '12px' }}>
          Giúp chủ nuôi sinh viên và người bận rộn chủ động quản lý chi phí định kỳ.
        </p>
      </div>

      {/* Tiến độ chi tiêu tháng này */}
      <section className="card" style={{ marginBottom: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span className="text-sub">Đã chi tiêu tháng này:</span>
          <strong style={{ fontSize: '15px', color: '#0F172A' }}>{spentSoFar.toLocaleString('vi-VN')}đ</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span className="text-sub">Hạn mức ngân sách đặt ra:</span>
          <strong>{budgetLimit.toLocaleString('vi-VN')}đ</strong>
        </div>

        {/* Thanh progress bar */}
        <div style={{ height: '8px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{
            width: `${Math.min(100, (spentSoFar / budgetLimit) * 100)}%`,
            height: '100%',
            backgroundColor: spentSoFar > budgetLimit ? '#E06236' : '#0D766E'
          }} />
        </div>
        <span style={{ fontSize: '11px', color: '#166534', marginTop: '6px', display: 'block', fontWeight: 600 }}>
          ✓ Còn lại 30.000đ trong ngân sách tháng 8
        </span>
      </section>

      {/* Lập kế hoạch tháng tới */}
      <section className="card" style={{ marginBottom: '16px' }}>
        <h3 className="text-h3" style={{ marginBottom: '8px' }}>Thiết lập ngân sách Tháng 09/2026</h3>
        <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '10px' }}>
          Dự trù 1 buổi tắm dược liệu cho Bơ + 1 buổi spa buồng riêng cho Miu (gợi ý: 500.000đ).
        </p>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input
            type="range"
            min="300000"
            max="1000000"
            step="50000"
            value={budgetLimit}
            onChange={(e) => setBudgetLimit(Number(e.target.value))}
            style={{ flex: 1, accentColor: '#0D766E' }}
          />
          <strong style={{ fontSize: '15px', color: '#0D766E', minWidth: '90px', textAlign: 'right' }}>
            {budgetLimit.toLocaleString('vi-VN')}đ
          </strong>
        </div>
      </section>

      {saveSuccess ? (
        <div className="badge badge-success" style={{ width: '100%', height: '48px', justifyContent: 'center', fontSize: '14px' }}>
          <CheckIcon size={18} />
          <span>Đã cập nhật kế hoạch ngân sách thành công!</span>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn-outline" style={{ flex: 1 }} onClick={onClose}>
            Đóng
          </button>
          <button className="btn-primary" style={{ flex: 2 }} onClick={handleSaveBudget}>
            Lưu kế hoạch ngân sách
          </button>
        </div>
      )}
    </div>
  );
};
