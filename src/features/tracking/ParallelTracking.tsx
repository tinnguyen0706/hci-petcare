import React from 'react';
import { Pet } from '../../types';
import { ClockIcon, CheckIcon, ShieldIcon } from '../../components/icons/Icons';

interface ParallelTrackingProps {
  pets: Pet[];
  onClose: () => void;
}

export const ParallelTracking: React.FC<ParallelTrackingProps> = ({
  pets,
  onClose
}) => {
  return (
    <div style={{ paddingTop: '8px' }}>
      <div className="card" style={{ backgroundColor: '#F0FDFA', border: '2px solid #0D766E', marginBottom: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <span className="badge badge-teal">[THEO DÕI SONG SONG]</span>
          <span style={{ fontSize: '12px', color: '#0D766E', fontWeight: 700 }}>ĐỒNG BỘ GIỜ ĐÓN: ~10:30</span>
        </div>
        <h2 className="text-h2" style={{ color: '#0D766E', marginBottom: '2px' }}>
          Bảng Điều Phối Tiến Độ 2 Bé
        </h2>
        <p className="text-sub" style={{ fontSize: '12px' }}>
          Cam kết hoàn tất cùng lúc để chủ nuôi đón 2 bé về trong một lượt duy nhất.
        </p>
      </div>

      {/* Tiến độ Bé 1: Bơ */}
      <section className="card" style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#F0FDFA',
              border: '1.5px solid #0D766E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '12px',
              color: '#0D766E'
            }}>BƠ</span>
            <strong style={{ fontSize: '15px' }}>Bé Bơ (Poodle)</strong>
          </div>
          <span className="badge badge-teal">[MỐC 2: ĐANG TẮM BỒN]</span>
        </div>

        <div style={{ fontSize: '12px', color: '#334155', lineHeight: 1.4, marginBottom: '8px' }}>
          • Vị trí: Bồn sục dược liệu 02 • KTV Hoàng Mai
          <br />
          • Tiến trình: Đang ủ bọt Derma-Care chống dị ứng da (15 phút)
        </div>

        <div style={{ height: '6px', backgroundColor: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ width: '50%', height: '100%', backgroundColor: '#0D766E' }} />
        </div>
        <span style={{ fontSize: '11px', color: '#64748B', marginTop: '4px', display: 'block' }}>Tiến độ: 50% • Xong lúc 10:25</span>
      </section>

      {/* Tiến độ Bé 2: Miu */}
      <section className="card" style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#FFFBEB',
              border: '1.5px solid #D97706',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '12px',
              color: '#D97706'
            }}>MIU</span>
            <strong style={{ fontSize: '15px' }}>Bé Miu (Mèo Anh)</strong>
          </div>
          <span className="badge badge-amber">[MỐC 2: CHĂM SÓC BUỒNG RIÊNG]</span>
        </div>

        <div style={{ fontSize: '12px', color: '#334155', lineHeight: 1.4, marginBottom: '8px' }}>
          • Vị trí: Buồng cách ly A-02 (Cách âm 28dB) • KTV Tuấn Anh
          <br />
          • Tiến trình: Chải lông tơ & làm sạch tai bằng tinh chất Feliway
        </div>

        <div style={{ height: '6px', backgroundColor: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ width: '45%', height: '100%', backgroundColor: '#D97706' }} />
        </div>
        <span style={{ fontSize: '11px', color: '#64748B', marginTop: '4px', display: 'block' }}>Tiến độ: 45% • Xong lúc 10:30</span>
      </section>

      <button className="btn-primary" onClick={onClose}>
        Đóng bảng theo dõi
      </button>
    </div>
  );
};
