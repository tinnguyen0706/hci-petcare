import React from 'react';
import { Pet } from '../../types';
import { 
  ShieldIcon, 
  CalendarIcon, 
  AlertIcon 
} from '../../components/icons/Icons';

interface PetProfilesManagementProps {
  pets: Pet[];
  onSelectPet: (petId: string) => void;
  onOpenMedicalProfile: (petId: string) => void;
  onOpenVaccinationBook: (petId: string) => void;
  onBookForPet: (petId: string) => void;
  onOpenAddPet: () => void;
}

export const PetProfilesManagement: React.FC<PetProfilesManagementProps> = ({
  pets,
  onSelectPet,
  onOpenMedicalProfile,
  onOpenVaccinationBook,
  onBookForPet,
  onOpenAddPet
}) => {
  return (
    <div style={{ paddingTop: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h2 className="text-h2" style={{ margin: 0 }}>Hồ sơ thú cưng</h2>
        <span className="badge badge-teal">{pets.length} bé đã lưu</span>
      </div>

      {pets.map((pet) => (
        <section key={pet.id} className="card" style={{ marginBottom: '12px', padding: '14px' }}>
          {/* Header Card */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: pet.id === 'pet-bo' ? '#F0FDFA' : '#FFFBEB',
              border: `2px solid ${pet.id === 'pet-bo' ? '#0D766E' : '#D97706'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 800,
              color: pet.id === 'pet-bo' ? '#0D766E' : '#D97706'
            }}>
              {pet.avatarText}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '16px', color: '#0F172A' }}>{pet.name}</strong>
                <span style={{ fontSize: '12px', color: '#64748B' }}>{pet.weight} • {pet.age}</span>
              </div>
              <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                {pet.breed}
              </div>
            </div>
          </div>

          {/* Badges Scannable */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
            {pet.isAllergic ? (
              <span className="badge badge-alert">
                <AlertIcon size={11} />
                [DỊ ỨNG XÀ PHÒNG]
              </span>
            ) : (
              <span className="badge badge-amber">
                [BUỒNG CÁCH LY A-02]
              </span>
            )}
            <span className="badge badge-teal">[VẮC-XIN: HỢP LỆ ✓]</span>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px' }}>
            <button
              className="btn-outline"
              onClick={() => onOpenMedicalProfile(pet.id)}
              style={{ height: '36px', fontSize: '12px' }}
              aria-label={`Xem hồ sơ y tế và dị ứng của bé ${pet.name}`}
            >
              <ShieldIcon size={13} color="#0D766E" />
              <span>Y tế & Dị ứng</span>
            </button>

            <button
              className="btn-outline"
              onClick={() => onOpenVaccinationBook(pet.id)}
              style={{ height: '36px', fontSize: '12px' }}
              aria-label={`Xem sổ tiêm phòng của bé ${pet.name}`}
            >
              <CalendarIcon size={13} color="#0D766E" />
              <span>Sổ tiêm phòng</span>
            </button>
          </div>

          <button
            className="btn-primary"
            onClick={() => onBookForPet(pet.id)}
            style={{ height: '44px', fontSize: '13px' }}
            aria-label={`Đặt lịch chăm sóc cho bé ${pet.name}`}
          >
            Đặt lịch cho {pet.name}
          </button>
        </section>
      ))}

      {/* Thẻ Thêm Thú Cưng Mới — Dạng Nét Đứt Tối Giản */}
      <button
        onClick={onOpenAddPet}
        style={{
          width: '100%',
          padding: '14px',
          borderRadius: '14px',
          border: '1.5px dashed #0D766E',
          backgroundColor: '#F0FDFA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          cursor: 'pointer',
          marginBottom: '16px'
        }}
        aria-label="Thêm hồ sơ thú cưng mới"
      >
        <span style={{ fontSize: '18px', fontWeight: 800, color: '#0D766E' }}>+</span>
        <strong style={{ fontSize: '13px', color: '#0D766E' }}>Thêm hồ sơ thú cưng mới</strong>
      </button>
    </div>
  );
};
