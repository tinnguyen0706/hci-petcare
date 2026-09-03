import React, { useState } from 'react';
import { CareHistoryRecord, Pet } from '../../types';
import { 
  StarIcon, 
  ShieldIcon, 
  InvoiceIcon, 
  RefreshIcon, 
  ChevronRightIcon, 
  CalendarIcon 
} from '../../components/icons/Icons';

interface CareHistoryProps {
  historyRecords: CareHistoryRecord[];
  pets: Pet[];
  onOpenSessionDetail: (record: CareHistoryRecord) => void;
  onOpenInvoice: (record: CareHistoryRecord) => void;
  onOpenBudgetPlan: () => void;
  onOpenRebookModal: (record: CareHistoryRecord) => void;
}

export const CareHistory: React.FC<CareHistoryProps> = ({
  historyRecords,
  pets,
  onOpenSessionDetail,
  onOpenInvoice,
  onOpenBudgetPlan,
  onOpenRebookModal
}) => {
  const [filterPetId, setFilterPetId] = useState<string>('all');

  const filtered = historyRecords.filter((r) => {
    if (filterPetId === 'all') return true;
    return r.petId === filterPetId;
  });

  return (
    <div style={{ paddingTop: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div>
          <h2 className="text-h2">Lịch sử chăm sóc</h2>
          <p className="text-sub" style={{ fontSize: '12px' }}>Lưu trữ sản phẩm, điểm da liễu & hóa đơn điện tử</p>
        </div>

        <button
          className="btn-outline"
          onClick={onOpenBudgetPlan}
          style={{ height: '36px', padding: '0 10px', fontSize: '12px' }}
          aria-label="Xem tổng chi tiêu & kế hoạch ngân sách"
        >
          <InvoiceIcon size={14} color="#0D766E" />
          <span>Ngân sách</span>
        </button>
      </div>

      {/* Bộ lọc theo Pet */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
        <button
          onClick={() => setFilterPetId('all')}
          className={`badge ${filterPetId === 'all' ? 'badge-teal' : 'badge-neutral'}`}
          style={{ height: '32px', padding: '0 12px', borderRadius: '16px', cursor: 'pointer' }}
        >
          Tất cả các bé
        </button>
        {pets.map((p) => (
          <button
            key={p.id}
            onClick={() => setFilterPetId(p.id)}
            className={`badge ${filterPetId === p.id ? 'badge-teal' : 'badge-neutral'}`}
            style={{ height: '32px', padding: '0 12px', borderRadius: '16px', cursor: 'pointer' }}
          >
            Bé {p.name}
          </button>
        ))}
      </div>

      {/* Danh sách các buổi chăm sóc */}
      {filtered.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '32px 16px' }}>
          <CalendarIcon size={32} color="#94A3B8" />
          <h3 className="text-h3" style={{ marginTop: '8px' }}>Chưa có lượt chăm sóc nào</h3>
          <p className="text-sub" style={{ marginTop: '4px' }}>
            Các lượt chăm sóc hoàn tất sẽ được lưu chi tiết tại đây.
          </p>
        </div>
      ) : (
        filtered.map((record) => {
          const pet = pets.find((p) => p.id === record.petId) || pets[0];
          return (
            <section key={record.id} className="card" style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="badge badge-teal">
                  Bé {pet.name} • {record.date}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#D97706', fontSize: '13px', fontWeight: 700 }}>
                  <StarIcon size={16} filled color="#D97706" />
                  <span>{record.rating}.0</span>
                </div>
              </div>

              <h3 className="text-h3" style={{ fontSize: '15px', color: '#0F172A', marginBottom: '4px' }}>
                {record.serviceName}
              </h3>
              <p className="text-sub" style={{ fontSize: '12px', marginBottom: '10px' }}>
                KTV phụ trách: <strong>{record.technicianName}</strong> • Chi phí: <strong>{record.totalCost.toLocaleString('vi-VN')}đ</strong>
              </p>

              {/* Thẻ tóm tắt kết quả da liễu */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '8px', padding: '8px 10px', fontSize: '12px', color: '#334155', marginBottom: '10px', lineHeight: 1.4 }}>
                <strong>Nhật ký KTV:</strong> {record.technicianReviewNote}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr', gap: '6px' }}>
                <button
                  className="btn-outline"
                  onClick={() => onOpenSessionDetail(record)}
                  style={{ height: '36px', fontSize: '11px', padding: '0 6px' }}
                  aria-label="Xem chi tiết sản phẩm và da liễu"
                >
                  <ShieldIcon size={13} color="#0D766E" />
                  <span>Sản phẩm</span>
                </button>

                <button
                  className="btn-outline"
                  onClick={() => onOpenInvoice(record)}
                  style={{ height: '36px', fontSize: '11px', padding: '0 6px' }}
                  aria-label="Xem hóa đơn điện tử VAT"
                >
                  <InvoiceIcon size={13} color="#0D766E" />
                  <span>Hóa đơn</span>
                </button>

                <button
                  className="btn-secondary"
                  onClick={() => onOpenRebookModal(record)}
                  style={{ height: '36px', fontSize: '11px', padding: '0 6px', fontWeight: 700 }}
                  aria-label="Tái đặt lịch 1 chạm kế thừa thông tin"
                >
                  <RefreshIcon size={13} />
                  <span>Rebook 1-chạm</span>
                </button>
              </div>
            </section>
          );
        })
      )}
    </div>
  );
};
