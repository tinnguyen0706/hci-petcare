import React, { useState } from 'react';
import { Pet, Service, TimeSlot, Booking } from '../../types';
import { CheckIcon, CalendarIcon, ClockIcon } from '../../components/icons/Icons';
import { AllergyConflictModal } from './AllergyConflictModal';
import boPhoto from '../../assets/bo.png';

interface BookingFlowProps {
  pets: Pet[];
  services: Service[];
  timeSlots: TimeSlot[];
  initialPetId?: string;
  step?: 1 | 2 | 3 | 4 | 5;
  onStepChange?: (step: 1 | 2 | 3 | 4 | 5) => void;
  onBookingComplete: (newBooking: Booking) => void;
  onGoToTracking: () => void;
  onGoHome: () => void;
}

export const BookingFlow: React.FC<BookingFlowProps> = ({
  pets,
  services,
  timeSlots,
  initialPetId,
  step: externalStep,
  onStepChange,
  onBookingComplete,
  onGoToTracking,
  onGoHome
}) => {
  const [internalStep, setInternalStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const currentStep = externalStep !== undefined ? externalStep : internalStep;

  const setStep = (newStep: 1 | 2 | 3 | 4 | 5) => {
    setInternalStep(newStep);
    if (onStepChange) onStepChange(newStep);
  };

  // State tương tác thật
  const [selectedPetId, setSelectedPetId] = useState<string>(initialPetId || 'pet-bo');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('srv-derma');
  const [selectedDate, setSelectedDate] = useState<string>('Thứ Bảy, 05/09/2026');
  const [selectedSlotTime, setSelectedSlotTime] = useState<string>('09:00');
  
  const [showAllergyConflict, setShowAllergyConflict] = useState<boolean>(false);
  const [createdBooking, setCreatedBooking] = useState<Booking | null>(null);

  const currentPet = pets.find((p) => p.id === selectedPetId) || pets[0];
  const currentService = services.find((s) => s.id === selectedServiceId) || services[0];

  // Danh sách gói dịch vụ tinh gọn theo đúng Style Prototype (Không nhồi nhét chữ)
  const displayServices = [
    {
      id: 'srv-derma',
      name: 'Tắm + cắt tỉa',
      subtitle: 'Gói chăm sóc dịu nhẹ định kỳ',
      price: 250000,
      iconType: 'bath_cut',
      isHypoallergenic: true
    },
    {
      id: 'srv-standard',
      name: 'Tắm tiêu chuẩn',
      subtitle: 'Làm sạch tạo bọt hương hoa',
      price: 180000,
      iconType: 'bath',
      isHypoallergenic: false // Gây xung đột nếu bé có tiền sử dị ứng
    },
    {
      id: 'srv-grooming',
      name: 'Cắt tỉa tạo kiểu',
      subtitle: 'Gọn lông & tạo phom chuyên nghiệp',
      price: 320000,
      iconType: 'cut',
      isHypoallergenic: true
    }
  ];

  // Xử lý chọn dịch vụ (tự động kiểm tra xung đột dị ứng của bé)
  const handleSelectService = (srv: typeof displayServices[0]) => {
    if (currentPet.isAllergic && !srv.isHypoallergenic) {
      // Bé Bơ dị ứng xà phòng hương liệu -> cảnh báo
      setShowAllergyConflict(true);
    } else {
      setSelectedServiceId(srv.id);
    }
  };

  const handleConfirmBooking = () => {
    const bookingCode = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: Booking = {
      id: `book-${Date.now()}`,
      bookingCode: bookingCode,
      checkInCode: `IN-${currentPet.name.toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
      dischargeCode: `OUT-${currentPet.name.toUpperCase()}-0941`,
      petIds: [currentPet.id],
      serviceId: currentService.id,
      dateString: selectedDate,
      timeString: `${selectedSlotTime} (Gói chăm sóc)`,
      technicianName: currentPet.id === 'pet-bo' ? 'Hoàng Mai' : 'Tuấn Anh',
      technicianExperience: 'Chuyên da liễu',
      totalAmount: currentService.price,
      status: 1, // Mốc 1: Đã nhận
      stationOrRoom: currentPet.id === 'pet-bo' ? 'Bồn sục 02' : 'Buồng riêng A-02',
      autoAttachedNotes: [
        currentPet.isAllergic 
          ? `Dị ứng xà phòng hương liệu -> Sử dụng Derma-Care pH 6.5`
          : `Nhút nhát -> Bố trí không gian yên tĩnh`,
        `Bảo an CareGuard: Giữ chỗ tức thì 100%`
      ],
      customInstructions: 'Lịch cuối tuần đã sẵn sàng • Lan có thể quay lại công việc',
      createdAt: selectedDate
    };

    setCreatedBooking(newBooking);
    onBookingComplete(newBooking);
    setStep(5);
  };

  return (
    <div style={{ paddingBottom: '24px' }}>

      {/* ========================================================= */}
      {/* BƯỚC 1: CHỌN THÚ CƯNG (Style Prototype 01)                */}
      {/* ========================================================= */}
      {currentStep === 1 && (
        <div>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            color: '#64748B',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            CHỌN HỒ SƠ
          </div>

          {pets.map((pet) => {
            const isSelected = selectedPetId === pet.id;
            return (
              <div
                key={pet.id}
                onClick={() => setSelectedPetId(pet.id)}
                style={{
                  width: '100%',
                  backgroundColor: isSelected ? '#FFFFFF' : '#F8FAFC',
                  border: isSelected ? '2.5px solid #0D766E' : '1px solid #E2E8F0',
                  borderRadius: '24px',
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '14px',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 4px 14px rgba(13, 118, 110, 0.08)' : 'none'
                }}
              >
                {/* Avatar */}
                <div style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: '#F0FDFA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  {pet.id === 'pet-bo' ? (
                    <img src={boPhoto} alt="Bơ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ fontSize: '20px', fontWeight: 800, color: '#D97706' }}>{pet.avatarText}</span>
                  )}
                </div>

                {/* Thông tin */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                      {pet.name}
                    </h2>
                    <span style={{ fontSize: '12px', color: '#64748B' }}>{pet.weight}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px', marginBottom: '6px' }}>
                    {pet.breed}
                  </div>
                  {isSelected && (
                    <span style={{
                      display: 'inline-block',
                      backgroundColor: '#F0FDFA',
                      color: '#0D766E',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '2px 10px',
                      borderRadius: '10px'
                    }}>
                      ĐÃ CHỌN
                    </span>
                  )}
                </div>

                {/* Nút check */}
                {isSelected && (
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#F0FDF4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <CheckIcon size={16} color="#166534" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Minh họa trung tâm */}
          <div style={{
            width: '100%',
            height: '220px',
            borderRadius: '26px',
            backgroundColor: '#F0FDFA',
            border: '1px solid #CCFBF1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '18px 0 24px 0'
          }}>
            {currentPet.id === 'pet-bo' ? (
              <img src={boPhoto} alt="Bơ" style={{ width: '120px', height: '140px', objectFit: 'contain' }} />
            ) : (
              <span style={{ fontSize: '48px', marginBottom: '8px' }}>🐱</span>
            )}
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0D766E', marginTop: '8px' }}>
              Sẵn sàng chọn dịch vụ cho {currentPet.name}
            </div>
          </div>

          <button
            onClick={() => setStep(2)}
            style={{
              width: '100%',
              height: '60px',
              borderRadius: '18px',
              backgroundColor: '#0D766E',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Tiếp tục
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* BƯỚC 2: CHỌN DỊCH VỤ — TỐI GIẢN THEO STYLE PROTOTYPE 02    */}
      {/* (Không nhồi nhét chữ, chỉ tên + 1 dòng subtitle + giá)   */}
      {/* ========================================================= */}
      {currentStep === 2 && (
        <div>
          {/* Thẻ tóm tắt bé đã chọn ở trên */}
          <div style={{
            width: '100%',
            height: '84px',
            borderRadius: '22px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '16px'
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: '#F0FDFA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              flexShrink: 0
            }}>
              {currentPet.id === 'pet-bo' ? (
                <img src={boPhoto} alt="Bơ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#D97706' }}>{currentPet.avatarText}</span>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>{currentPet.name}</div>
              <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>{currentPet.breed} · Đã chọn</div>
            </div>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#F0FDF4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CheckIcon size={16} color="#166534" />
            </div>
          </div>

          {/* Section title */}
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            color: '#64748B',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>
            CHỌN MỘT DỊCH VỤ
          </div>

          {/* Danh sách dịch vụ: Cực kỳ sạch sẽ, thoáng, đẹp theo đúng Prototype */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {displayServices.map((srv) => {
              const isSelected = selectedServiceId === srv.id;

              return (
                <div
                  key={srv.id}
                  onClick={() => handleSelectService(srv)}
                  style={{
                    width: '100%',
                    borderRadius: '24px',
                    backgroundColor: isSelected ? '#F0FDFA' : '#FFFFFF',
                    border: isSelected ? '2.5px solid #0D766E' : '1px solid #E2E8F0',
                    padding: '16px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 4px 14px rgba(13, 118, 110, 0.08)' : 'none'
                  }}
                >
                  {/* Icon tròn bồn tắm hoặc kéo */}
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#FFFFFF' : '#F8FAFC',
                    border: isSelected ? '2px solid #0D766E' : '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    flexShrink: 0
                  }}>
                    {srv.iconType === 'bath_cut' && '🛁'}
                    {srv.iconType === 'bath' && '🚿'}
                    {srv.iconType === 'cut' && '✂️'}
                  </div>

                  {/* Tên & 1 dòng Subtitle ngắn */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                      {srv.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748B', marginTop: '3px' }}>
                      {srv.subtitle}
                    </div>
                    {isSelected && (
                      <span style={{
                        display: 'inline-block',
                        marginTop: '6px',
                        backgroundColor: '#0D766E',
                        color: '#FFFFFF',
                        fontSize: '9px',
                        fontWeight: 800,
                        padding: '2px 10px',
                        borderRadius: '10px'
                      }}>
                        ĐÃ CHỌN
                      </span>
                    )}
                  </div>

                  {/* Giá tiền to rõ */}
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: isSelected ? '#0D766E' : '#0F172A' }}>
                      {srv.price.toLocaleString('vi-VN')}đ
                    </div>
                    {isSelected && (
                      <div style={{
                        marginTop: '4px',
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        backgroundColor: '#0D766E',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 'auto'
                      }}>
                        <CheckIcon size={14} color="#FFFFFF" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Primary CTA */}
          <button
            onClick={() => setStep(3)}
            style={{
              width: '100%',
              height: '60px',
              borderRadius: '18px',
              backgroundColor: '#0D766E',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Tiếp tục
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* BƯỚC 3: CHỌN KHUNG GIỜ (Style Prototype 03)                */}
      {/* ========================================================= */}
      {currentStep === 3 && (
        <div>
          {/* Thanh Chọn Ngày */}
          <div style={{
            width: '100%',
            height: '96px',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            marginBottom: '16px'
          }}>
            {[
              { label: 'Thứ Sáu', date: 'Thứ Sáu, 04/09/2026' },
              { label: 'Thứ Bảy', date: 'Thứ Bảy, 05/09/2026' },
              { label: 'Chủ nhật', date: 'Chủ nhật, 06/09/2026' }
            ].map((d) => {
              const isSelected = selectedDate === d.date;
              return (
                <button
                  key={d.label}
                  onClick={() => setSelectedDate(d.date)}
                  style={{
                    flex: 1,
                    height: isSelected ? '76px' : '64px',
                    borderRadius: '20px',
                    backgroundColor: isSelected ? '#0D766E' : '#F8FAFC',
                    color: isSelected ? '#FFFFFF' : '#64748B',
                    border: 'none',
                    fontWeight: isSelected ? 800 : 600,
                    fontSize: isSelected ? '14px' : '13px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '3px'
                  }}
                >
                  {isSelected && <CheckIcon size={12} color="#FFFFFF" />}
                  <span>{d.label}</span>
                </button>
              );
            })}
          </div>

          {/* Thẻ Lưới Giờ */}
          <div style={{
            width: '100%',
            borderRadius: '28px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            padding: '20px 18px',
            marginBottom: '24px'
          }}>
            {/* Khối Giờ Nổi Bật Lớn ở trên */}
            <div style={{
              width: '134px',
              height: '124px',
              borderRadius: '22px',
              backgroundColor: '#FFFFFF',
              border: '3px solid #0D766E',
              margin: '0 auto 18px auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.1)'
            }}>
              <div style={{
                fontSize: '11px',
                fontWeight: 800,
                color: '#0D766E',
                marginBottom: '4px'
              }}>
                GIỜ ĐÃ CHỌN
              </div>
              <div style={{ fontSize: '30px', fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>
                {selectedSlotTime}
              </div>
              <span style={{
                marginTop: '6px',
                backgroundColor: '#F0FDFA',
                color: '#0D766E',
                fontSize: '9px',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '9px'
              }}>
                CÒN TRỐNG
              </span>
            </div>

            <div style={{
              fontSize: '11px',
              fontWeight: 800,
              color: '#64748B',
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              BUỔI SÁNG & CHIỀU
            </div>

            {/* Lưới các ô giờ 3 cột */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {timeSlots.map((slot) => {
                const isSelected = selectedSlotTime === slot.time;
                const isAvailable = slot.isAvailable;

                return (
                  <button
                    key={slot.id}
                    disabled={!isAvailable}
                    onClick={() => setSelectedSlotTime(slot.time)}
                    style={{
                      height: isSelected ? '74px' : '60px',
                      borderRadius: isSelected ? '20px' : '16px',
                      backgroundColor: !isAvailable ? '#F1F5F9' : isSelected ? '#0D766E' : '#FFFFFF',
                      border: `1.5px solid ${!isAvailable ? '#E2E8F0' : isSelected ? '#0D766E' : '#CBD5E1'}`,
                      color: !isAvailable ? '#94A3B8' : isSelected ? '#FFFFFF' : '#0F172A',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: isAvailable ? 'pointer' : 'not-allowed',
                      transform: isSelected ? 'translateY(-4px)' : 'none',
                      boxShadow: isSelected ? '0 4px 12px rgba(13, 118, 110, 0.25)' : 'none'
                    }}
                  >
                    {isAvailable ? (
                      <>
                        {isSelected && <CheckIcon size={12} color="#FFFFFF" />}
                        <span style={{ fontSize: '15px', fontWeight: 800 }}>{slot.time}</span>
                      </>
                    ) : (
                      <>
                        <span style={{ fontSize: '11px' }}>✕</span>
                        <span style={{ fontSize: '11px', marginTop: '2px' }}>Hết</span>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setStep(4)}
            style={{
              width: '100%',
              height: '60px',
              borderRadius: '18px',
              backgroundColor: '#0D766E',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Chọn khung giờ này
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* BƯỚC 4: XÁC NHẬN LỊCH (Style Prototype 04)                  */}
      {/* ========================================================= */}
      {currentStep === 4 && (
        <div>
          <div style={{
            width: '100%',
            borderRadius: '30px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            padding: '24px 20px',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {/* Chân dung bé */}
            <div style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '3px solid #0D766E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              marginBottom: '14px'
            }}>
              {currentPet.id === 'pet-bo' ? (
                <img src={boPhoto} alt="Bơ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span style={{ fontSize: '42px' }}>🐱</span>
              )}
            </div>

            {/* Tiêu đề: Tên bé + Dịch vụ */}
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', margin: '0 0 16px 0', textAlign: 'center' }}>
              {currentPet.name} · {currentService.name}
            </h2>

            {/* 2 ô NGÀY HẸN & BẮT ĐẦU */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%', marginBottom: '18px' }}>
              <div style={{
                height: '84px',
                borderRadius: '18px',
                backgroundColor: '#F0FDFA',
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748B', letterSpacing: '0.5px' }}>
                  NGÀY HẸN
                </div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', marginTop: '3px' }}>
                  {selectedDate.split(',')[0]}
                </div>
              </div>

              <div style={{
                height: '84px',
                borderRadius: '18px',
                backgroundColor: '#FFF7ED',
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#C2410C', letterSpacing: '0.5px' }}>
                  BẮT ĐẦU
                </div>
                <div style={{ fontSize: '19px', fontWeight: 800, color: '#C2410C', marginTop: '1px' }}>
                  {selectedSlotTime}
                </div>
              </div>
            </div>

            {/* Cam kết tức thì */}
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '6px 0' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: '#F0FDF4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <CheckIcon size={16} color="#166534" />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>Xác nhận tức thì</div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>Không cần gọi điện chờ tiệm</div>
              </div>
            </div>
          </div>

          {/* Thẻ Giữ chỗ */}
          <div style={{
            width: '100%',
            height: '70px',
            borderRadius: '20px',
            backgroundColor: '#F0FDFA',
            border: '1px solid #CCFBF1',
            padding: '0 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '18px' }}>🔒</span>
            <span style={{ fontSize: '13px', fontWeight: 800, color: '#0D766E' }}>
              Giữ chỗ ngay khi xác nhận
            </span>
          </div>

          <button
            onClick={handleConfirmBooking}
            style={{
              width: '100%',
              height: '60px',
              borderRadius: '18px',
              backgroundColor: '#0D766E',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Xác nhận đặt lịch • {currentService.price.toLocaleString('vi-VN')}đ
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* BƯỚC 5: HOÀN TẤT (Style Prototype 05)                      */}
      {/* ========================================================= */}
      {currentStep === 5 && (
        <div style={{
          backgroundColor: '#F0FDFA',
          margin: '-16px -16px 0 -16px',
          padding: '24px 16px 32px 16px',
          minHeight: '660px'
        }}>
          <div style={{
            textAlign: 'center',
            fontSize: '15px',
            fontWeight: 800,
            color: '#0D766E',
            letterSpacing: '0.8px',
            marginBottom: '14px'
          }}>
            HOÀN TẤT
          </div>

          {/* Vòng tròn Checkmark lớn */}
          <div style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '3.5px solid #0D766E',
            margin: '0 auto 16px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 18px rgba(13, 118, 110, 0.15)'
          }}>
            <CheckIcon size={56} color="#0D766E" />
          </div>

          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#0F172A', textAlign: 'center', margin: '0 0 4px 0' }}>
            Đã đặt lịch
          </h1>
          <div style={{ fontSize: '13px', color: '#64748B', textAlign: 'center', marginBottom: '18px' }}>
            {currentPet.name} · {selectedDate.split(',')[0]} · {selectedSlotTime}
          </div>

          {/* Thẻ tóm tắt */}
          <div style={{
            width: '100%',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            border: '2px solid #CCFBF1',
            padding: '18px',
            marginBottom: '18px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#F0FDFA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                flexShrink: 0
              }}>
                {currentPet.id === 'pet-bo' ? (
                  <img src={boPhoto} alt="Bơ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ fontSize: '20px' }}>🐱</span>
                )}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748B' }}>DỊCH VỤ</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', margin: '2px 0 4px 0' }}>
                  {currentService.name}
                </div>
                <span style={{
                  backgroundColor: '#F0FDF4',
                  color: '#166534',
                  fontSize: '9px',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '10px'
                }}>
                  ĐÃ XÁC NHẬN
                </span>
              </div>
            </div>

            <div style={{ width: '100%', borderTop: '1.5px dashed #E2E8F0', margin: '12px 0 14px 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748B' }}>MÃ LỊCH HẸN</div>
                <strong style={{ fontSize: '16px', color: '#0F172A', marginTop: '2px', display: 'block' }}>
                  {createdBooking ? createdBooking.bookingCode : 'BK-8902'}
                </strong>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#0D766E' }}>
                MÃ ĐÃ TẠO
              </span>
            </div>
          </div>

          {/* Phản hồi tức thì */}
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', padding: '0 4px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#0D766E',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              flexShrink: 0
            }}>
              ✓
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>Lịch cuối tuần đã sẵn sàng</div>
              <div style={{ fontSize: '11px', color: '#64748B' }}>Lan có thể quay lại công việc</div>
            </div>
          </div>

          <button
            onClick={onGoToTracking}
            style={{
              width: '100%',
              height: '60px',
              borderRadius: '18px',
              backgroundColor: '#0D766E',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(13, 118, 110, 0.25)'
            }}
          >
            Xem lịch hẹn
          </button>
        </div>
      )}

      {/* Modal Cảnh Báo Xung Đột Dị Ứng Da (Kích hoạt tự nhiên khi bé Bơ chọn gói tắm có hương liệu) */}
      <AllergyConflictModal
        isOpen={showAllergyConflict}
        onClose={() => setShowAllergyConflict(false)}
        petName={currentPet.name}
        allergyNotice={currentPet.allergyNotice}
        onAutoFixHypoallergenic={() => {
          setSelectedServiceId('srv-derma');
          setShowAllergyConflict(false);
        }}
        onBringOwnShampoo={() => {
          setSelectedServiceId('srv-standard');
          setShowAllergyConflict(false);
        }}
      />

    </div>
  );
};
