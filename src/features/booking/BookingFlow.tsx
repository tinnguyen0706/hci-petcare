import React, { useState } from 'react';
import { Pet, Service, TimeSlot, Booking } from '../../types';
import { 
  CheckIcon, 
  AlertIcon, 
  ClockIcon, 
  ShieldIcon, 
  QrCodeIcon 
} from '../../components/icons/Icons';
import { AllergyConflictModal } from './AllergyConflictModal';

interface BookingFlowProps {
  pets: Pet[];
  services: Service[];
  timeSlots: TimeSlot[];
  initialPetId?: string;
  onBookingComplete: (newBooking: Booking) => void;
  onGoToTracking: () => void;
  onGoHome: () => void;
}

export const BookingFlow: React.FC<BookingFlowProps> = ({
  pets,
  services,
  timeSlots,
  initialPetId,
  onBookingComplete,
  onGoToTracking,
  onGoHome
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedPetId, setSelectedPetId] = useState<string>(initialPetId || pets[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(services[0].id);
  const [selectedDate, setSelectedDate] = useState<string>('Thứ 7, 05/09/2026');
  const [selectedSlotId, setSelectedSlotId] = useState<string>('slot-5'); // 13:30 mặc định
  const [customNotes, setCustomNotes] = useState<string>('');
  
  const [showAllergyModal, setShowAllergyModal] = useState<boolean>(false);
  const [createdBooking, setCreatedBooking] = useState<Booking | null>(null);

  const currentPet = pets.find((p) => p.id === selectedPetId) || pets[0];
  const currentService = services.find((s) => s.id === selectedServiceId) || services[0];
  const currentSlot = timeSlots.find((s) => s.id === selectedSlotId) || timeSlots[0];

  const handleSelectService = (service: Service) => {
    if (currentPet.isAllergic && !service.isHypoallergenic) {
      setSelectedServiceId(service.id);
      setShowAllergyModal(true);
    } else {
      setSelectedServiceId(service.id);
    }
  };

  const handleAutoFix = () => {
    const derma = services.find((s) => s.id === 'srv-derma') || services[0];
    setSelectedServiceId(derma.id);
    setShowAllergyModal(false);
  };

  const handleBringOwn = () => {
    setShowAllergyModal(false);
    setCustomNotes('Tự mang dầu gội riêng của bé');
  };

  const handleConfirmBooking = () => {
    const autoNotes = [
      currentPet.isAllergic 
        ? `[DỊ ỨNG DA] ${currentPet.allergyNotice}`
        : `[TÂM LÝ] ${currentPet.temperament}`,
      `[SẢN PHẨM] ${currentPet.recommendedProduct}`
    ];

    const newBooking: Booking = {
      id: `book-${Date.now()}`,
      bookingCode: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      checkInCode: `IN-${currentPet.name.toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
      dischargeCode: `OUT-${currentPet.name.toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
      petIds: [currentPet.id],
      serviceId: currentService.id,
      dateString: selectedDate,
      timeString: `${currentSlot.time} (${currentService.durationMinutes}p)`,
      technicianName: currentPet.id === 'pet-bo' ? 'Hoàng Mai' : 'Tuấn Anh',
      technicianExperience: 'Chuyên da liễu',
      totalAmount: currentService.price,
      status: 1,
      stationOrRoom: currentPet.id === 'pet-bo' ? 'Bồn sục 02' : 'Buồng riêng A-02',
      autoAttachedNotes: autoNotes,
      customInstructions: customNotes,
      createdAt: new Date().toLocaleDateString('vi-VN')
    };

    setCreatedBooking(newBooking);
    onBookingComplete(newBooking);
    setStep(5);
  };

  return (
    <div style={{ paddingTop: '8px' }}>
      
      {/* Stepper chỉ số bước tối giản */}
      {step < 5 && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', padding: '0 4px' }}>
          {[
            { num: 1, label: 'Thú cưng' },
            { num: 2, label: 'Dịch vụ' },
            { num: 3, label: 'Giờ hẹn' },
            { num: 4, label: 'Rà soát' }
          ].map((s) => (
            <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: step >= s.num ? '#0D766E' : '#E2E8F0',
                color: step >= s.num ? '#FFFFFF' : '#64748B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 800
              }}>
                {s.num}
              </div>
              <span style={{ fontSize: '11px', fontWeight: step === s.num ? 800 : 500, color: step === s.num ? '#0D766E' : '#64748B' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* BƯỚC 1: CHỌN THÚ CƯNG — Scannable (P1/G1/01) */}
      {step === 1 && (
        <div>
          <h2 className="text-h2" style={{ marginBottom: '12px' }}>Chọn bé chăm sóc</h2>

          {pets.map((p) => {
            const isSelected = selectedPetId === p.id;
            return (
              <div
                key={p.id}
                onClick={() => setSelectedPetId(p.id)}
                className={`card card-clickable ${isSelected ? 'card-selected' : ''}`}
                style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px', padding: '12px' }}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: p.id === 'pet-bo' ? '#F0FDFA' : '#FFFBEB',
                  border: `2px solid ${p.id === 'pet-bo' ? '#0D766E' : '#D97706'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '15px',
                  color: p.id === 'pet-bo' ? '#0D766E' : '#D97706'
                }}>
                  {p.avatarText}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '15px', color: '#0F172A' }}>{p.name}</strong>
                    <span style={{ fontSize: '12px', color: '#64748B' }}>{p.breed} • {p.weight}</span>
                  </div>

                  <div>
                    {p.isAllergic ? (
                      <span className="badge badge-alert">
                        [DỊ ỨNG XÀ PHÒNG]
                      </span>
                    ) : (
                      <span className="badge badge-amber">
                        [BUỒNG CÁCH LY A-02]
                      </span>
                    )}
                  </div>
                </div>

                <div style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  border: `2px solid ${isSelected ? '#0D766E' : '#CBD5E1'}`,
                  backgroundColor: isSelected ? '#0D766E' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {isSelected && <CheckIcon size={12} color="#FFFFFF" />}
                </div>
              </div>
            );
          })}

          <button
            className="btn-primary"
            style={{ marginTop: '14px' }}
            onClick={() => setStep(2)}
          >
            Tiếp tục chọn dịch vụ
          </button>
        </div>
      )}

      {/* BƯỚC 2: CHỌN DỊCH VỤ — Scannable (P1/G1/02) */}
      {step === 2 && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h2 className="text-h2" style={{ margin: 0 }}>Gói dịch vụ</h2>
            <span className="badge badge-teal">Bé: {currentPet.name}</span>
          </div>

          {services.map((srv) => {
            const isSelected = selectedServiceId === srv.id;
            const isRecommended = srv.recommendedForPetId === currentPet.id;

            return (
              <div
                key={srv.id}
                onClick={() => handleSelectService(srv)}
                className={`card card-clickable ${isSelected ? 'card-selected' : ''}`}
                style={{ marginBottom: '10px', padding: '12px' }}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <div>
                    <strong style={{ fontSize: '14px', color: '#0F172A' }}>{srv.name}</strong>
                    <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                      <span className="badge badge-teal">{srv.durationMinutes}p</span>
                      {isRecommended && (
                        <span className="badge badge-success">[KHUYÊN DÙNG]</span>
                      )}
                    </div>
                  </div>
                  <span className="text-price" style={{ fontSize: '16px' }}>
                    {srv.price.toLocaleString('vi-VN')}đ
                  </span>
                </div>

                <div style={{ fontSize: '11px', color: '#64748B', marginTop: '6px' }}>
                  {srv.isHypoallergenic ? (
                    <span style={{ color: '#166534', fontWeight: 600 }}>✓ Thảo dược Derma pH 6.5 • Dịu mẩn đỏ</span>
                  ) : (
                    <span style={{ color: '#E06236', fontWeight: 600 }}>! Xà phòng lưu hương (chứa hương liệu)</span>
                  )}
                </div>
              </div>
            );
          })}

          <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
            <button className="btn-outline" style={{ flex: 1 }} onClick={() => setStep(1)}>
              Quay lại
            </button>
            <button className="btn-primary" style={{ flex: 2 }} onClick={() => setStep(3)}>
              Chọn giờ hẹn
            </button>
          </div>
        </div>
      )}

      {/* BƯỚC 3: MA TRẬN KHUNG GIỜ TRỐNG — Large Metrics (P1/G1/03 & P2/G1/01) */}
      {step === 3 && (
        <div>
          <h2 className="text-h2" style={{ marginBottom: '10px' }}>Khung giờ khả dụng</h2>

          {/* Dãy ngày chọn nhanh */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '12px' }}>
            {[
              { label: 'T7 (05/09)', value: 'Thứ 7, 05/09/2026' },
              { label: 'CN (06/09)', value: 'Chủ nhật, 06/09/2026' },
              { label: 'T2 (07/09)', value: 'Thứ 2, 07/09/2026' }
            ].map((d) => (
              <button
                key={d.value}
                onClick={() => setSelectedDate(d.value)}
                className={`btn-outline ${selectedDate === d.value ? 'btn-secondary' : ''}`}
                style={{ height: '36px', padding: '0 10px', fontSize: '12px', whiteSpace: 'nowrap' }}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Lưới các ô giờ to rõ */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '14px' }}>
            {timeSlots.map((slot) => {
              const isSelected = selectedSlotId === slot.id;
              const isAvailable = slot.isAvailable;

              return (
                <button
                  key={slot.id}
                  disabled={!isAvailable}
                  onClick={() => setSelectedSlotId(slot.id)}
                  style={{
                    backgroundColor: !isAvailable ? '#F1F5F9' : isSelected ? '#F0FDFA' : '#FFFFFF',
                    border: `1.5px solid ${!isAvailable ? '#E2E8F0' : isSelected ? '#0D766E' : '#CBD5E1'}`,
                    borderRadius: '10px',
                    padding: '10px',
                    textAlign: 'left',
                    cursor: isAvailable ? 'pointer' : 'not-allowed',
                    opacity: isAvailable ? 1 : 0.5,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                  }}
                  aria-pressed={isSelected}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '16px', color: isAvailable ? (isSelected ? '#0D766E' : '#0F172A') : '#94A3B8' }}>
                      {slot.time}
                    </strong>
                    {isSelected && <CheckIcon size={14} color="#0D766E" />}
                  </div>

                  {isAvailable ? (
                    slot.isQuietRecommended ? (
                      <span className="badge badge-amber" style={{ fontSize: '9px', padding: '1px 4px' }}>
                        [VẮNG VẺ]
                      </span>
                    ) : (
                      <span style={{ fontSize: '10px', color: '#166534', fontWeight: 600 }}>Còn chỗ</span>
                    )
                  ) : (
                    <span style={{ fontSize: '10px', color: '#94A3B8' }}>Đã kín</span>
                  )}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-outline" style={{ flex: 1 }} onClick={() => setStep(2)}>
              Quay lại
            </button>
            <button className="btn-primary" style={{ flex: 2 }} onClick={() => setStep(4)}>
              Rà soát đặt lịch
            </button>
          </div>
        </div>
      )}

      {/* BƯỚC 4: RÀ SOÁT & AUTO-ATTACH — Anti-Text Clutter (P1/G1/04) */}
      {step === 4 && (
        <div>
          <h2 className="text-h2" style={{ marginBottom: '10px' }}>Tóm tắt lịch hẹn</h2>

          <section className="card" style={{ marginBottom: '10px', padding: '12px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
              <span className="text-sub">Bé:</span>
              <strong>{currentPet.name} ({currentPet.breed})</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
              <span className="text-sub">Dịch vụ:</span>
              <strong style={{ color: '#0D766E' }}>{currentService.name}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
              <span className="text-sub">Giờ hẹn:</span>
              <strong>{selectedDate} • {currentSlot.time}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E2E8F0', paddingTop: '8px' }}>
              <span style={{ fontWeight: 700 }}>Thanh toán:</span>
              <span className="text-price" style={{ fontSize: '18px' }}>{currentService.price.toLocaleString('vi-VN')}đ</span>
            </div>
          </section>

          {/* Auto-attach dạng Chips / Badges — Không chữ rườm rà */}
          <section className="card" style={{ backgroundColor: '#FFF1F2', border: '1px solid #FECDD3', marginBottom: '12px', padding: '10px 12px' }}>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '6px' }}>
              <ShieldIcon size={16} color="#9F1239" />
              <strong style={{ fontSize: '12px', color: '#9F1239' }}>TỰ ĐỘNG ĐÍNH KÈM Y TẾ:</strong>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {currentPet.isAllergic && (
                <span className="badge badge-alert">[DỊ ỨNG: DÙNG DERMA-CARE]</span>
              )}
              <span className="badge badge-teal">[SẤY LỒNG: 32°C]</span>
              <span className="badge badge-success">[CAREGUARD 10/10]</span>
            </div>
          </section>

          <button
            className="btn-primary"
            style={{ width: '100%', height: '54px' }}
            onClick={handleConfirmBooking}
            aria-label="Xác nhận đặt lịch ngay"
          >
            <CheckIcon size={18} />
            <span>Xác nhận đặt lịch • {currentService.price.toLocaleString('vi-VN')}đ</span>
          </button>
        </div>
      )}

      {/* BƯỚC 5: XÁC NHẬN THÀNH CÔNG (P1/G1/05) */}
      {step === 5 && createdBooking && (
        <div style={{ textAlign: 'center', paddingTop: '4px' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            backgroundColor: '#F0FDF4',
            border: '2px solid #166534',
            color: '#166534',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 8px auto'
          }}>
            <CheckIcon size={28} />
          </div>

          <span className="badge badge-success" style={{ marginBottom: '6px' }}>
            [ĐÃ KHÓA CHỖ THÀNH CÔNG]
          </span>

          <h2 className="text-h2" style={{ fontSize: '20px', marginBottom: '2px' }}>
            #{createdBooking.bookingCode}
          </h2>
          <p className="text-sub" style={{ fontSize: '12px', marginBottom: '14px' }}>
            {selectedDate} lúc {currentSlot.time}
          </p>

          {/* QR Check-in Quầy */}
          <div className="card" style={{ padding: '14px', backgroundColor: '#FFFFFF', border: '2px dashed #0D766E', marginBottom: '14px' }}>
            <div style={{
              width: '110px',
              height: '110px',
              backgroundColor: '#F8FAFC',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 6px auto',
              color: '#0D766E'
            }}>
              <QrCodeIcon size={60} />
              <span style={{ fontSize: '11px', fontWeight: 800 }}>{createdBooking.checkInCode}</span>
            </div>
            <span style={{ fontSize: '11px', color: '#64748B' }}>Xuất trình mã QR tại quầy để check-in</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button className="btn-primary" onClick={onGoToTracking}>
              <ClockIcon size={18} />
              <span>Xem tiến độ ca chăm sóc</span>
            </button>
            <button className="btn-secondary" onClick={onGoHome}>
              Trang chủ
            </button>
          </div>
        </div>
      )}

      {/* Modal Cảnh Báo Xung Đột Dị Ứng Da */}
      <AllergyConflictModal
        isOpen={showAllergyModal}
        onClose={() => setShowAllergyModal(false)}
        petName={currentPet.name}
        allergyNotice={currentPet.allergyNotice}
        onAutoFixHypoallergenic={handleAutoFix}
        onBringOwnShampoo={handleBringOwn}
      />

    </div>
  );
};
