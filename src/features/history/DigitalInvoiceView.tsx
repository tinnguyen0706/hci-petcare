import React, { useState } from 'react';
import { CareHistoryRecord } from '../../types';
import { InvoiceIcon, CheckIcon } from '../../components/icons/Icons';

interface DigitalInvoiceViewProps {
  record: CareHistoryRecord;
  onClose: () => void;
}

export const DigitalInvoiceView: React.FC<DigitalInvoiceViewProps> = ({
  record,
  onClose
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2000);
  };

  return (
    <div style={{ paddingTop: '8px' }}>
      <div className="card" style={{ border: '2px dashed #0D766E', backgroundColor: '#FFFFFF', marginBottom: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span className="badge badge-teal">[HÓA ĐƠN ĐIỆN TỬ VAT]</span>
          <span style={{ fontSize: '11px', color: '#64748B' }}>{record.date}</span>
        </div>

        <h2 className="text-h2" style={{ marginBottom: '2px' }}>
          Mã HĐ: {record.invoiceNumber}
        </h2>
        <p className="text-sub" style={{ fontSize: '12px' }}>
          Đơn vị: CÔNG TY CỔ PHẦN CHĂM SÓC THÚ CƯNG PETCARE PRO
        </p>

        {/* Bảng phân tích chi phí từng hạng mục */}
        <div style={{ marginTop: '14px', borderTop: '1px solid #E2E8F0', paddingTop: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
            <span>{record.serviceName}:</span>
            <strong>{(record.totalCost * 0.85).toLocaleString('vi-VN')}đ</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
            <span>Sữa tắm dược liệu Derma-Care:</span>
            <span>Miễn phí (Theo gói)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
            <span>Bảo an y tế CareGuard 100%:</span>
            <span>Đã bao gồm</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '8px' }}>
            <span>Thuế GTGT (VAT 8%):</span>
            <span>{(record.totalCost * 0.08).toLocaleString('vi-VN')}đ</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #0F172A', paddingTop: '8px' }}>
            <span style={{ fontWeight: 800, fontSize: '15px' }}>Tổng thanh toán:</span>
            <span className="text-price">{record.totalCost.toLocaleString('vi-VN')}đ</span>
          </div>
        </div>

        <div style={{ marginTop: '12px', fontSize: '11px', color: '#64748B', textAlign: 'center' }}>
          Mã tra cứu hóa đơn điện tử: <strong>#E-INV-2026-HCMUS-902</strong>
        </div>
      </div>

      {downloadSuccess && (
        <div className="badge badge-success" style={{ width: '100%', height: '40px', justifyContent: 'center', marginBottom: '10px' }}>
          <span>✓ Đã xuất hóa đơn VAT điện tử về email của bạn!</span>
        </div>
      )}

      <div style={{ display: 'flex', gap: '8px' }}>
        <button className="btn-outline" style={{ flex: 1 }} onClick={onClose}>
          Đóng
        </button>
        <button className="btn-primary" style={{ flex: 2 }} onClick={handleDownload}>
          <InvoiceIcon size={16} />
          <span>Tải hóa đơn điện tử</span>
        </button>
      </div>
    </div>
  );
};
