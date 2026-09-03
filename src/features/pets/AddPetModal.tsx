import React, { useState } from 'react';
import { Pet } from '../../types';
import { Modal } from '../../components/common/Modal';
import { CheckIcon } from '../../components/icons/Icons';

interface AddPetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPet: (pet: Pet) => void;
}

export const AddPetModal: React.FC<AddPetModalProps> = ({
  isOpen,
  onClose,
  onAddPet
}) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isAllergic, setIsAllergic] = useState(false);
  const [allergyNotice, setAllergyNotice] = useState('');
  const [temperament, setTemperament] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newPet: Pet = {
      id: `pet-${Date.now()}`,
      name: name.trim(),
      avatarText: name.trim().slice(0, 2).toUpperCase(),
      breed: breed.trim() || 'Chó cảnh',
      age: age.trim() || '1 tuổi',
      weight: weight.trim() ? `${weight} kg` : '4.0 kg',
      gender: 'Đực',
      isAllergic: isAllergic,
      allergyNotice: allergyNotice.trim() || (isAllergic ? 'Dị ứng da nhạy cảm' : 'Không có tiền sử dị ứng'),
      temperament: temperament.trim() || 'Thân thiện, hoạt bát',
      medicalNotes: isAllergic ? 'Khuyên dùng sữa tắm dịu nhẹ không bọt' : 'Thể trạng bình thường',
      recommendedProduct: isAllergic ? 'Derma-Care Sensitive Skin' : 'Sữa tắm dưỡng ẩm tự nhiên',
      vaccines: [
        { name: 'Vắc-xin phòng ngừa tổng hợp', expiryDate: '12/2026', status: 'valid' },
        { name: 'Phòng ngừa dại', expiryDate: '10/2026', status: 'valid' }
      ]
    };

    onAddPet(newPet);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Thêm Hồ Sơ Thú Cưng Mới">
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="pet-name" style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>
            Tên thú cưng:
          </label>
          <input
            id="pet-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="VD: Kem, Lu, Đậu Đậu..."
            style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #CBD5E1', outline: 'none' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
          <div>
            <label htmlFor="pet-breed" style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
              Giống loài:
            </label>
            <input
              id="pet-breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              placeholder="VD: Corgi, Mèo Xiêm..."
              style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '12px' }}
            />
          </div>

          <div>
            <label htmlFor="pet-weight" style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
              Cân nặng (kg):
            </label>
            <input
              id="pet-weight"
              type="number"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="VD: 4.5"
              style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '12px' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>
            <input
              type="checkbox"
              checked={isAllergic}
              onChange={(e) => setIsAllergic(e.target.checked)}
              style={{ width: '18px', height: '18px', accentColor: '#0D766E' }}
            />
            Bé có tiền sử dị ứng xà phòng / viêm da?
          </label>
        </div>

        {isAllergic && (
          <div style={{ marginBottom: '12px' }}>
            <label htmlFor="pet-allergy" style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#9F1239', marginBottom: '4px' }}>
              Chi tiết dị ứng:
            </label>
            <input
              id="pet-allergy"
              value={allergyNotice}
              onChange={(e) => setAllergyNotice(e.target.value)}
              placeholder="VD: Dị ứng chất tạo bọt, ngứa khi dùng hương liệu..."
              style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #FECDD3', backgroundColor: '#FFF1F2', outline: 'none', fontSize: '12px' }}
            />
          </div>
        )}

        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="pet-temperament" style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
            Tính cách / thói quen:
          </label>
          <input
            id="pet-temperament"
            value={temperament}
            onChange={(e) => setTemperament(e.target.value)}
            placeholder="VD: Sợ tiếng ồn, nhút nhát với người lạ..."
            style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '12px' }}
          />
        </div>

        <button type="submit" className="btn-primary">
          <CheckIcon size={18} />
          <span>Lưu hồ sơ bé</span>
        </button>
      </form>
    </Modal>
  );
};
