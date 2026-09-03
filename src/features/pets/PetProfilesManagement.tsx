import React from 'react';
import { Pet } from '../../types';
import { 
  ShieldIcon, 
  CalendarIcon, 
  AlertIcon,
  CheckIcon
} from '../../components/icons/Icons';
import boPhoto from '../../assets/bo.png';

interface PetProfilesManagementProps {
  pets: Pet[];
  selectedPetId: string;
  onSelectPet: (petId: string) => void;
  onOpenPetProfile: (petId: string) => void;
  onBookForPet: (petId: string) => void;
  onOpenAddPet: () => void;
}

export const PetProfilesManagement: React.FC<PetProfilesManagementProps> = ({
  pets,
  selectedPetId,
  onSelectPet,
  onOpenPetProfile,
  onBookForPet,
  onOpenAddPet
}) => {
  const currentPet = pets.find((p) => p.id === selectedPetId) || pets[0];

  return (
    <div style={{ paddingTop: '8px', paddingBottom: '32px' }}>
      
      {/* Danh sách thẻ thú cưng (Theo chuẩn Wireframe 08) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '18px' }}>
        {pets.map((pet) => {
          const isSelected = pet.id === selectedPetId;
          const isBo = pet.id === 'pet-bo';

          return (
            <div
              key={pet.id}
              onClick={() => {
                onSelectPet(pet.id);
                onOpenPetProfile(pet.id);
              }}
              style={{
                width: '100%',
                borderRadius: '24px',
                backgroundColor: '#FFFFFF',
                border: isSelected ? '2px solid #0D766E' : '1.5px solid #E2E8F0',
                padding: '18px 20px',
                cursor: 'pointer',
                boxShadow: isSelected ? '0 4px 18px rgba(13, 118, 110, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.2s ease'
              }}
              role="button"
              tabIndex={0}
              aria-label={`Xem hồ sơ của ${pet.name}`}
            >
              {/* Header của thẻ: Avatar + Tên + Nút sửa */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: isBo ? '#F0FDFA' : '#FFFBEB',
                  border: `2px solid ${isBo ? '#0D766E' : '#D97706'}`,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {isBo ? (
                    <img src={boPhoto} alt="Bơ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ fontSize: '18px', fontWeight: 800, color: '#D97706' }}>{pet.avatarText}</span>
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>
                      {isBo ? 'Poodle Bơ' : pet.name}
                    </div>
                    <span style={{ fontSize: '13px', color: isSelected ? '#0D766E' : '#64748B', fontWeight: 600 }}>
                      Xem hồ sơ ›
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748B', marginTop: '2px' }}>
                    • {pet.age} • {pet.weight}
                  </div>
                </div>
              </div>

              {/* 2 Badges đặc trưng theo Wireframe 08 */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                {isBo ? (
                  <>
                    <span style={{
                      backgroundColor: '#FFF1F2',
                      color: '#9F1239',
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '8px'
                    }}>
                      [DỊ ỨNG XÀ PHÒNG]
                    </span>
                    <span style={{
                      backgroundColor: '#F0FDFA',
                      color: '#0D766E',
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '8px'
                    }}>
                      [DẦU HYPOALGENIC]
                    </span>
                  </>
                ) : (
                  <>
                    <span style={{
                      backgroundColor: '#FEF3C7',
                      color: '#92400E',
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '8px'
                    }}>
                      [RẤT NHÚT NHÁT]
                    </span>
                    <span style={{
                      backgroundColor: '#F0FDFA',
                      color: '#0D766E',
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '8px'
                    }}>
                      [BUỒNG CÁCH LY]
                    </span>
                  </>
                )}
              </div>

              {/* Thông tin lần chăm sóc trước */}
              <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '10px' }}>
                Lần chăm sóc trước: {isBo ? '15/09 • KTV Hoàng Mai' : '02/09 • KTV Bảo Trâm'}
              </div>

              {/* Trạng thái chọn hồ sơ mặc định */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: 700,
                color: isSelected ? '#0D766E' : '#64748B',
                borderTop: '1px solid #F1F5F9',
                paddingTop: '10px'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: isSelected ? '#0D766E' : '#CBD5E1'
                }} />
                <span>{isSelected ? 'Đang chọn làm hồ sơ mặc định' : 'Chạm để chọn làm hồ sơ'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hộp nét đứt Thêm thú cưng mới (Add_Pet_Dashed_Box theo Wireframe 08) */}
      <button
        type="button"
        onClick={onOpenAddPet}
        style={{
          width: '100%',
          height: '74px',
          borderRadius: '20px',
          border: '1.5px dashed #CBD5E1',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
        aria-label="Thêm hồ sơ thú cưng mới"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '18px', fontWeight: 800, color: '#64748B' }}>+</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Thêm hồ sơ thú cưng mới</span>
        </div>
        <span style={{ fontSize: '18px', color: '#64748B' }}>›</span>
      </button>

      {/* Nút Primary CTA ở đáy (Theo Wireframe 08) */}
      <button
        type="button"
        onClick={() => onBookForPet(selectedPetId)}
        style={{
          width: '100%',
          height: '60px',
          borderRadius: '18px',
          backgroundColor: '#0D766E',
          color: '#FFFFFF',
          fontSize: '16px',
          fontWeight: 800,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)'
        }}
      >
        <span>Đặt lịch cho {currentPet.name} ›</span>
      </button>

    </div>
  );
};
