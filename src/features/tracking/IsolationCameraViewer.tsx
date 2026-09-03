import React from 'react';
import { EnvironmentSensorData } from '../../types';
import { ThermometerIcon, SoundIcon, ShieldIcon, CameraIcon } from '../../components/icons/Icons';

interface IsolationCameraViewerProps {
  sensors: EnvironmentSensorData;
  onClose: () => void;
}

export const IsolationCameraViewer: React.FC<IsolationCameraViewerProps> = ({
  sensors,
  onClose
}) => {
  return (
    <div style={{ paddingTop: '8px' }}>
      <div className="card" style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', marginBottom: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span className="badge badge-teal">[GIÁM SÁT BUỒNG ĐỘC LẬP A-02]</span>
          <span style={{ fontSize: '11px', color: '#166534', fontWeight: 700 }}>● ĐANG HOẠT ĐỘNG</span>
        </div>
        <h2 className="text-h2" style={{ marginBottom: '2px' }}>Không Gian Riêng Bé Miu</h2>
        <p className="text-sub" style={{ fontSize: '12px' }}>
          Tiêu chuẩn cách âm &lt;30dB, khử khuẩn không khí tia UV cho thú cưng nhút nhát.
        </p>
      </div>

      {/* Frame ảnh mô phỏng buồng riêng (Neutral Vector Graphics) */}
      <div style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#0F172A',
        borderRadius: '16px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#94A3B8',
        marginBottom: '14px',
        overflow: 'hidden',
        border: '2px solid #334155'
      }}>
        <CameraIcon size={48} color="#64748B" />
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#E2E8F0', marginTop: '8px' }}>
          [HÌNH ẢNH TRỰC TIẾP BUỒNG A-02]
        </span>
        <span style={{ fontSize: '11px', color: '#94A3B8' }}>
          Bé Miu đang nằm nghỉ trên đệm lông cừu êm ái
        </span>

        {/* Live overlay tag */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          borderRadius: '6px',
          padding: '2px 8px',
          fontSize: '11px',
          color: '#14B8A6',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#14B8A6' }} />
          CAM-A02 • 09:35
        </div>
      </div>

      {/* 3 Ô cảm biến môi trường (Nhiệt độ, độ ồn, độ ẩm) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
        <div className="card" style={{ padding: '10px 8px', textAlign: 'center', marginBottom: 0 }}>
          <ThermometerIcon size={20} color="#0D766E" />
          <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>
            {sensors.temperature}
          </div>
          <span style={{ fontSize: '10px', color: '#64748B' }}>Nhiệt độ phòng</span>
        </div>

        <div className="card" style={{ padding: '10px 8px', textAlign: 'center', marginBottom: 0 }}>
          <SoundIcon size={20} color="#0D766E" />
          <div style={{ fontSize: '16px', fontWeight: 800, color: '#166534', marginTop: '4px' }}>
            {sensors.noiseLevel.split(' ')[0]}
          </div>
          <span style={{ fontSize: '10px', color: '#64748B' }}>Độ ồn (Cách âm)</span>
        </div>

        <div className="card" style={{ padding: '10px 8px', textAlign: 'center', marginBottom: 0 }}>
          <ShieldIcon size={20} color="#0D766E" />
          <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>
            {sensors.humidity}
          </div>
          <span style={{ fontSize: '10px', color: '#64748B' }}>Độ ẩm êm dịu</span>
        </div>
      </div>

      <div style={{ fontSize: '11px', color: '#64748B', textAlign: 'center', marginBottom: '16px' }}>
        * Hệ thống cảm biến IoT buồng chăm sóc độc lập được giám sát 24/7 theo tiêu chuẩn quốc tế.
      </div>

      <button className="btn-primary" onClick={onClose}>
        Quay lại tiến độ
      </button>
    </div>
  );
};
