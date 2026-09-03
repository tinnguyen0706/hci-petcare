import React, { useState } from 'react';
import { Pet } from '../../types';
import { ShieldIcon, AlertIcon, CheckIcon } from '../../components/icons/Icons';

interface MedicalProfileAllergiesProps {
  pet: Pet;
  onUpdatePetNotes: (petId: string, allergyNotice: string, medicalNotes: string) => void;
  onClose: () => void;
}

export const MedicalProfileAllergies: React.FC<MedicalProfileAllergiesProps> = ({
  pet,
  onUpdatePetNotes,
  onClose
}) => {
  const [allergyNotice, setAllergyNotice] = useState(pet.allergyNotice);
  const [medicalNotes, setMedicalNotes] = useState(pet.medicalNotes);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    onUpdatePetNotes(pet.id, allergyNotice, medicalNotes);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <div style={{ paddingTop: '8px' }}>
      {/* Alert Header */}
      <div className="card" style={{ backgroundColor: '#FFF1F2', border: '1px solid #FECDD3', marginBottom: '14px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '6px' }}>
          <AlertIcon size={22} color="#9F1239" />
          <strong style={{ fontSize: '15px', color: '#9F1239' }}>
            Hồ Sơ Y Tế & Dị Ứng Da — Bé {pet.name}
          </strong>
        </div>
        <p style={{ fontSize: '12px', color: '#881337', lineHeight: 1.4 }}>
          Thông tin được lưu vĩnh viễn và tự động đồng bộ vào màn hình làm việc của Kỹ thuật viên khi tiếp nhận.
        </p>
      </div>

      {/* Thông tin tiền sử dị ứng */}
      <div className="card" style={{ marginBottom: '14px' }}>
        <label htmlFor="allergy-input" style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
          Tiền sử dị ứng hóa chất / xà phòng:
        </label>
        <textarea
          id="allergy-input"
          value={allergyNotice}
          onChange={(e) => setAllergyNotice(e.target.value)}
          rows={3}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #CBD5E1',
            fontSize: '13px',
            fontFamily: 'inherit',
            lineHeight: 1.4,
            outline: 'none'
          }}
        />
        <span style={{ fontSize: '11px', color: '#64748B', marginTop: '4px', display: 'block' }}>
          Cảnh báo này sẽ tự động chặn việc đặt các gói dịch vụ có xà phòng chứa hương liệu sulfate.
        </span>
      </div>

      {/* Chỉ định y khoa & Tính cách */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <label htmlFor="medical-notes-input" style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
          Chỉ định kỹ thuật & Đặc điểm tâm lý:
        </label>
        <textarea
          id="medical-notes-input"
          value={medicalNotes}
          onChange={(e) => setMedicalNotes(e.target.value)}
          rows={4}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #CBD5E1',
            fontSize: '13px',
            fontFamily: 'inherit',
            lineHeight: 1.4,
            outline: 'none'
          }}
        />
      </div>

      {/* Cam kết bảo mật */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '20px', padding: '0 4px' }}>
        <ShieldIcon size={18} color="#0D766E" />
        <span style={{ fontSize: '12px', color: '#64748B' }}>
          Được bảo mật theo tiêu chuẩn hồ sơ y tế thú cưng CareGuard.
        </span>
      </div>

      {saveSuccess ? (
        <div className="badge badge-success" style={{ width: '100%', height: '48px', justifyContent: 'center', fontSize: '14px' }}>
          <CheckIcon size={18} />
          <span>Đã lưu hồ sơ y tế thành công!</span>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn-outline" style={{ flex: 1 }} onClick={onClose}>
            Đóng
          </button>
          <button className="btn-primary" style={{ flex: 2 }} onClick={handleSave}>
            Lưu hồ sơ y tế
          </button>
        </div>
      )}
    </div>
  );
};
