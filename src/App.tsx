import React, { useState, useEffect } from 'react';
import { 
  Pet, 
  Booking, 
  CareHistoryRecord, 
  NotificationItem, 
  NotificationSettingsState, 
  ActiveTab, 
  ActiveFlow, 
  MilestoneStep 
} from './types';
import { 
  initialPets, 
  initialServices, 
  availableTimeSlots, 
  initialActiveBooking, 
  initialCareHistory, 
  initialNotifications, 
  defaultNotificationSettings, 
  isolationRoomSensors 
} from './data/mockData';
import { Header } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { Modal } from './components/common/Modal';
import { HomeDashboard } from './features/home/HomeDashboard';
import { NotificationHub } from './features/notifications/NotificationHub';
import { NotificationSettings } from './features/notifications/NotificationSettings';
import { BookingFlow } from './features/booking/BookingFlow';
import { MultiPetBooking } from './features/booking/MultiPetBooking';
import { PetProfilesManagement } from './features/pets/PetProfilesManagement';
import { MedicalProfileAllergies } from './features/pets/MedicalProfileAllergies';
import { VaccinationHealthBook } from './features/pets/VaccinationHealthBook';
import { AddPetModal } from './features/pets/AddPetModal';
import { IntakeFlow } from './features/intake/IntakeFlow';
import { LiveTracking } from './features/tracking/LiveTracking';
import { ParallelTracking } from './features/tracking/ParallelTracking';
import { IsolationCameraViewer } from './features/tracking/IsolationCameraViewer';
import { DischargeQRModal } from './features/tracking/DischargeQRModal';
import { InspectionReportModal } from './features/tracking/InspectionReportModal';
import { Review5StarModal } from './features/tracking/Review5StarModal';
import { CareHistory } from './features/history/CareHistory';
import { ProductNotesDetail } from './features/history/ProductNotesDetail';
import { DigitalInvoiceView } from './features/history/DigitalInvoiceView';
import { BudgetPlanView } from './features/history/BudgetPlanView';
import { OneClickRebookModal } from './features/history/OneClickRebookModal';
import { EdgeStatesModal, EdgeStateType } from './features/edge-states/EdgeStatesModal';
import './styles/global.css';

export const App: React.FC = () => {
  // 1. Persistence with localStorage fallback
  const [pets, setPets] = useState<Pet[]>(() => {
    const saved = localStorage.getItem('petcare_pets');
    return saved ? JSON.parse(saved) : initialPets;
  });

  const [activeBooking, setActiveBooking] = useState<Booking | null>(() => {
    const saved = localStorage.getItem('petcare_active_booking');
    return saved ? JSON.parse(saved) : initialActiveBooking;
  });

  const [careHistory, setCareHistory] = useState<CareHistoryRecord[]>(() => {
    const saved = localStorage.getItem('petcare_history');
    return saved ? JSON.parse(saved) : initialCareHistory;
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    const saved = localStorage.getItem('petcare_notifications');
    return saved ? JSON.parse(saved) : initialNotifications;
  });

  const [notifSettings, setNotifSettings] = useState<NotificationSettingsState>(() => {
    const saved = localStorage.getItem('petcare_notif_settings');
    return saved ? JSON.parse(saved) : defaultNotificationSettings;
  });

  // Save to localStorage on state changes
  useEffect(() => {
    localStorage.setItem('petcare_pets', JSON.stringify(pets));
  }, [pets]);

  useEffect(() => {
    localStorage.setItem('petcare_active_booking', JSON.stringify(activeBooking));
  }, [activeBooking]);

  useEffect(() => {
    localStorage.setItem('petcare_history', JSON.stringify(careHistory));
  }, [careHistory]);

  useEffect(() => {
    localStorage.setItem('petcare_notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('petcare_notif_settings', JSON.stringify(notifSettings));
  }, [notifSettings]);

  // 2. Navigation State
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [activeFlow, setActiveFlow] = useState<ActiveFlow>('dashboard');
  const [flowHistory, setFlowHistory] = useState<ActiveFlow[]>([]);
  const [currentPersona, setCurrentPersona] = useState<'persona-1' | 'persona-2'>('persona-1');

  // Selected entities for modals
  const [selectedPetId, setSelectedPetId] = useState<string>('pet-bo');
  const [selectedHistoryRecord, setSelectedHistoryRecord] = useState<CareHistoryRecord | null>(null);

  // Sub-flow Modals
  const [showNotificationHub, setShowNotificationHub] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  const [showAddPetModal, setShowAddPetModal] = useState(false);
  const [showMedicalProfileModal, setShowMedicalProfileModal] = useState(false);
  const [showVaccinationModal, setShowVaccinationModal] = useState(false);
  const [showIntakeModal, setShowIntakeModal] = useState(false);
  const [showParallelModal, setShowParallelModal] = useState(false);
  const [showCameraModal, setShowCameraModal] = useState(false);
  const [showDischargeModal, setShowDischargeModal] = useState(false);
  const [showInspectionModal, setShowInspectionModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showProductDetailModal, setShowProductDetailModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showRebookModal, setShowRebookModal] = useState(false);
  const [edgeStateType, setEdgeStateType] = useState<EdgeStateType>(null);

  // Switch between Persona 1 (Lan & Bơ) and Persona 2 (Khoa & Miu)
  const handleSwitchPersona = () => {
    if (currentPersona === 'persona-1') {
      setCurrentPersona('persona-2');
      setSelectedPetId('pet-miu');
    } else {
      setCurrentPersona('persona-1');
      setSelectedPetId('pet-bo');
    }
  };

  // Smart Navigation Handler
  const navigateTo = (flow: ActiveFlow) => {
    setFlowHistory((prev) => [...prev, activeFlow]);
    setActiveFlow(flow);
  };

  const handleBack = () => {
    if (flowHistory.length > 0) {
      const prevFlow = flowHistory[flowHistory.length - 1];
      setFlowHistory((prev) => prev.slice(0, prev.length - 1));
      setActiveFlow(prevFlow);
    } else {
      setActiveFlow('dashboard');
      setActiveTab('home');
    }
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    setFlowHistory([]);
    if (tab === 'home') setActiveFlow('dashboard');
    if (tab === 'booking') setActiveFlow('booking_pet_select');
    if (tab === 'tracking') setActiveFlow('live_tracking');
    if (tab === 'pets') setActiveFlow('pet_list');
  };

  // Milestone change simulation
  const handleMilestoneChange = (step: MilestoneStep) => {
    if (activeBooking) {
      const updated: Booking = { ...activeBooking, status: step };
      setActiveBooking(updated);

      // Thêm thông báo mới tương ứng
      const milestoneNames = ['Đã nhận tại quầy', 'Đang ngâm tắm dược liệu', 'Hoàn tất sấy chuốt lông', 'Sẵn sàng tại quầy đón bé'];
      const newNotif: NotificationItem = {
        id: `notif-${Date.now()}`,
        title: `[TIẾN ĐỘ] Bé Bơ đạt Mốc ${step}: ${milestoneNames[step - 1]}`,
        message: `KTV Hoàng Mai đã cập nhật tiến độ lúc ${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}.`,
        timeAgo: 'Vừa xong',
        category: 'tracking',
        isRead: false
      };
      setNotifications((prev) => [newNotif, ...prev]);

      // Khi chuyển sang mốc 4 -> Gợi ý mở modal QR đón bé
      if (step === 4) {
        setTimeout(() => {
          setShowDischargeModal(true);
        }, 600);
      }
    }
  };

  const handleAddCustomInstruction = (text: string) => {
    if (activeBooking) {
      setActiveBooking({
        ...activeBooking,
        customInstructions: text
      });
    }
  };

  const handleBookingCreated = (newBooking: Booking) => {
    setActiveBooking(newBooking);
  };

  const handleMultiBookingConfirm = (multiBookingData: Partial<Booking>) => {
    const fullBooking: Booking = {
      ...initialActiveBooking,
      ...multiBookingData
    } as Booking;
    setActiveBooking(fullBooking);
    setActiveFlow('dashboard');
    setActiveTab('home');
    setEdgeStateType('success');
  };

  const handleRebookConfirm = (rebookData: Partial<Booking>) => {
    const fullBooking: Booking = {
      ...initialActiveBooking,
      ...rebookData
    } as Booking;
    setActiveBooking(fullBooking);
    setShowRebookModal(false);
    setActiveFlow('dashboard');
    setActiveTab('home');
    setEdgeStateType('success');
  };

  const handleReviewSubmit = (rating: number, comment: string) => {
    if (activeBooking) {
      const newHist: CareHistoryRecord = {
        id: `hist-${Date.now()}`,
        bookingCode: activeBooking.bookingCode,
        petId: activeBooking.petIds[0],
        date: new Date().toLocaleDateString('vi-VN'),
        serviceName: 'Tắm Dược Liệu Trị Liệu Da (Derma-Care)',
        technicianName: activeBooking.technicianName,
        rating: rating,
        productsUsed: [
          { name: 'Derma-Care Sensitive Skin pH 6.5', phLevel: 'pH 6.5', type: 'Dược liệu hữu cơ', verifiedSafe: true }
        ],
        skinHealthScore: 10,
        technicianReviewNote: comment,
        totalCost: activeBooking.totalAmount,
        invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
        beforePhotoDescription: 'Lông rối da ửng đỏ',
        afterPhotoDescription: 'Da sạch dịu mềm mượt đạt 10/10'
      };
      setCareHistory((prev) => [newHist, ...prev]);
    }
  };

  // Header Title & Subtitle Mapping
  const getHeaderInfo = () => {
    switch (activeFlow) {
      case 'dashboard':
        return { title: 'PetCare Pro', subtitle: `Chào mừng ${currentPersona === 'persona-1' ? 'Hoàng Lan' : 'Minh Khoa'}` };
      case 'booking_pet_select':
      case 'booking_service_select':
      case 'booking_slot_matrix':
      case 'booking_review':
      case 'booking_success':
        return { title: 'Đặt lịch chăm sóc', subtitle: 'Xác nhận tức thì • Bảo an 100%' };
      case 'booking_multi_pet':
        return { title: 'Đặt lịch gộp 2 bé', subtitle: 'Ưu đãi combo -10% • Song song' };
      case 'live_tracking':
        return { title: 'Tiến độ trực tiếp', subtitle: 'Cập nhật 4 mốc thời gian thực' };
      case 'pet_list':
        return { title: 'Hồ sơ thú cưng', subtitle: 'Sổ tiêm phòng & Y tế điện tử' };
      default:
        return { title: 'PetCare Pro', subtitle: 'Chăm sóc chuẩn y khoa' };
    }
  };

  const headerInfo = getHeaderInfo();
  const unreadNotifCount = notifications.filter((n) => !n.isRead).length;
  const currentPet = pets.find((p) => p.id === selectedPetId) || pets[0];

  return (
    <main className="mobile-device-container" role="application" aria-label="Ứng dụng PetCare Pro">
      
      {/* 1. Header & Status Bar */}
      <Header
        title={headerInfo.title}
        subtitle={headerInfo.subtitle}
        showBack={activeFlow !== 'dashboard'}
        onBack={handleBack}
        onOpenNotifications={() => setShowNotificationHub(true)}
        unreadCount={unreadNotifCount}
        currentPersona={currentPersona}
        onSwitchPersona={handleSwitchPersona}
      />

      {/* 2. Main Scrollable App Screen Content */}
      <div className="app-screen-content" role="region" aria-label="Nội dung màn hình chính">
        
        {/* TAB 1: TRANG CHỦ DASHBOARD */}
        {activeTab === 'home' && activeFlow === 'dashboard' && (
          <HomeDashboard
            activeBooking={activeBooking}
            pets={pets}
            onNavigateToBooking={(petId) => {
              if (petId) setSelectedPetId(petId);
              setActiveTab('booking');
              setActiveFlow('booking_pet_select');
            }}
            onNavigateToMultiBooking={() => setActiveFlow('booking_multi_pet')}
            onNavigateToTracking={() => {
              setActiveTab('tracking');
              setActiveFlow('live_tracking');
            }}
            onNavigateToPetProfile={(petId) => {
              setSelectedPetId(petId);
              setShowMedicalProfileModal(true);
            }}
            onNavigateToIsolationCam={() => setShowCameraModal(true)}
            onNavigateToRebook={() => {
              if (careHistory.length > 0) {
                setSelectedHistoryRecord(careHistory[0]);
                setShowRebookModal(true);
              }
            }}
            onNavigateToIntakeQr={() => setShowIntakeModal(true)}
            onMilestoneChange={handleMilestoneChange}
          />
        )}

        {/* ĐẶT LỊCH GỘP 2 BÉ (Wireframe 06) */}
        {activeFlow === 'booking_multi_pet' && (
          <MultiPetBooking
            pets={pets}
            onConfirmMultiBooking={handleMultiBookingConfirm}
            onCancel={() => setActiveFlow('dashboard')}
          />
        )}

        {/* TAB 2: ĐẶT LỊCH ĐƠN BÉ (Booking Flow 5 bước) */}
        {activeTab === 'booking' && (
          <BookingFlow
            pets={pets}
            services={initialServices}
            timeSlots={availableTimeSlots}
            initialPetId={selectedPetId}
            onBookingComplete={handleBookingCreated}
            onGoToTracking={() => {
              setActiveTab('tracking');
              setActiveFlow('live_tracking');
            }}
            onGoHome={() => {
              setActiveTab('home');
              setActiveFlow('dashboard');
            }}
          />
        )}

        {/* TAB 3: THEO DÕI TIẾN ĐỘ 4 MỐC */}
        {activeTab === 'tracking' && activeBooking && (
          <LiveTracking
            booking={activeBooking}
            pet={currentPet}
            onMilestoneChange={handleMilestoneChange}
            onOpenParallelTracking={() => setShowParallelModal(true)}
            onOpenIsolationCam={() => setShowCameraModal(true)}
            onOpenDischargeQR={() => setShowDischargeModal(true)}
            onOpenInspectionReport={() => setShowInspectionModal(true)}
            onOpenServiceReview={() => setShowReviewModal(true)}
            onAddCustomInstruction={handleAddCustomInstruction}
          />
        )}

        {activeTab === 'tracking' && !activeBooking && (
          <div className="card" style={{ textAlign: 'center', padding: '40px 16px', marginTop: '20px' }}>
            <h3 className="text-h3">Chưa có ca chăm sóc nào đang chạy</h3>
            <p className="text-sub" style={{ marginTop: '6px', marginBottom: '16px' }}>
              Hãy đặt lịch mới hoặc dùng tính năng Rebook 1-chạm để theo dõi tiến độ.
            </p>
            <button className="btn-primary" onClick={() => handleTabChange('booking')}>
              Đặt lịch mới ngay
            </button>
          </div>
        )}

        {/* TAB 4: QUẢN LÝ HỒ SƠ THÚ CƯNG & LỊCH SỬ */}
        {activeTab === 'pets' && activeFlow === 'pet_list' && (
          <div>
            <PetProfilesManagement
              pets={pets}
              onSelectPet={(id) => setSelectedPetId(id)}
              onOpenMedicalProfile={(id) => {
                setSelectedPetId(id);
                setShowMedicalProfileModal(true);
              }}
              onOpenVaccinationBook={(id) => {
                setSelectedPetId(id);
                setShowVaccinationModal(true);
              }}
              onBookForPet={(id) => {
                setSelectedPetId(id);
                setActiveTab('booking');
                setActiveFlow('booking_pet_select');
              }}
              onOpenAddPet={() => setShowAddPetModal(true)}
            />

            {/* Lịch sử các lần chăm sóc cũ */}
            <div style={{ marginTop: '20px' }}>
              <CareHistory
                historyRecords={careHistory}
                pets={pets}
                onOpenSessionDetail={(rec) => {
                  setSelectedHistoryRecord(rec);
                  setShowProductDetailModal(true);
                }}
                onOpenInvoice={(rec) => {
                  setSelectedHistoryRecord(rec);
                  setShowInvoiceModal(true);
                }}
                onOpenBudgetPlan={() => setShowBudgetModal(true)}
                onOpenRebookModal={(rec) => {
                  setSelectedHistoryRecord(rec);
                  setShowRebookModal(true);
                }}
              />
            </div>
          </div>
        )}

      </div>

      {/* 3. Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={handleTabChange}
        trackingActiveBadge={activeBooking !== null}
      />

      {/* 4. MODALS & SUB-FLOW SHEETS */}

      {/* Notification Hub Modal */}
      <Modal isOpen={showNotificationHub} onClose={() => setShowNotificationHub(false)} title="Trung Tâm Thông Báo">
        <NotificationHub
          notifications={notifications}
          onMarkAllAsRead={() => setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))}
          onOpenSettings={() => {
            setShowNotificationHub(false);
            setShowNotificationSettings(true);
          }}
          onNotificationClick={(notif) => {
            setNotifications((prev) => prev.map((n) => (n.id === notif.id ? { ...n, isRead: true } : n)));
            if (notif.category === 'tracking') {
              setShowNotificationHub(false);
              setActiveTab('tracking');
              setActiveFlow('live_tracking');
            }
          }}
        />
      </Modal>

      {/* Notification Settings Modal */}
      <Modal isOpen={showNotificationSettings} onClose={() => setShowNotificationSettings(false)} title="Cài Đặt Thông Báo">
        <NotificationSettings
          settings={notifSettings}
          onSaveSettings={(newSet) => setNotifSettings(newSet)}
          onClose={() => setShowNotificationSettings(false)}
        />
      </Modal>

      {/* Hồ sơ y tế & Dị ứng Modal */}
      <Modal isOpen={showMedicalProfileModal} onClose={() => setShowMedicalProfileModal(false)} title="Hồ Sơ Y Tế & Dị Ứng Da">
        <MedicalProfileAllergies
          pet={currentPet}
          onUpdatePetNotes={(pId, alg, med) => {
            setPets((prev) => prev.map((p) => (p.id === pId ? { ...p, allergyNotice: alg, medicalNotes: med } : p)));
          }}
          onClose={() => setShowMedicalProfileModal(false)}
        />
      </Modal>

      {/* Sổ tiêm phòng điện tử Modal */}
      <Modal isOpen={showVaccinationModal} onClose={() => setShowVaccinationModal(false)} title="Sổ Tiêm Chủng Số Hóa">
        <VaccinationHealthBook
          pet={currentPet}
          onClose={() => setShowVaccinationModal(false)}
        />
      </Modal>

      {/* Thêm thú cưng mới Modal */}
      <AddPetModal
        isOpen={showAddPetModal}
        onClose={() => setShowAddPetModal(false)}
        onAddPet={(newP) => {
          setPets((prev) => [...prev, newP]);
          setEdgeStateType('success');
        }}
      />

      {/* Intake Tiếp nhận quầy Modal */}
      {activeBooking && (
        <Modal isOpen={showIntakeModal} onClose={() => setShowIntakeModal(false)} title="Tiếp Nhận Tại Quầy Lễ Tân">
          <IntakeFlow
            booking={activeBooking}
            pet={currentPet}
            onConfirmIntakeHandoff={() => {
              handleMilestoneChange(2);
              setShowIntakeModal(false);
              setActiveTab('tracking');
              setActiveFlow('live_tracking');
            }}
            onCancel={() => setShowIntakeModal(false)}
          />
        </Modal>
      )}

      {/* Giám sát song song 2 bé Modal */}
      <Modal isOpen={showParallelModal} onClose={() => setShowParallelModal(false)} title="Giám Sát Song Song 2 Bé">
        <ParallelTracking
          pets={pets}
          onClose={() => setShowParallelModal(false)}
        />
      </Modal>

      {/* Camera Buồng cách ly A-02 Modal */}
      <Modal isOpen={showCameraModal} onClose={() => setShowCameraModal(false)} title="Giám Sát Buồng Cách Ly">
        <IsolationCameraViewer
          sensors={isolationRoomSensors}
          onClose={() => setShowCameraModal(false)}
        />
      </Modal>

      {/* QR Đối Soát Xuất Viện Modal */}
      {activeBooking && (
        <Modal isOpen={showDischargeModal} onClose={() => setShowDischargeModal(false)} title="Đối Soát Nhận Bé">
          <DischargeQRModal
            booking={activeBooking}
            pet={currentPet}
            onDischargeVerified={() => {
              setShowDischargeModal(false);
              setShowInspectionModal(true);
            }}
            onClose={() => setShowDischargeModal(false)}
          />
        </Modal>
      )}

      {/* Báo Cáo Nghiệm Thu Thể Trạng Modal */}
      {activeBooking && (
        <Modal isOpen={showInspectionModal} onClose={() => setShowInspectionModal(false)} title="Nghiệm Thu Thể Trạng">
          <InspectionReportModal
            booking={activeBooking}
            pet={currentPet}
            onProceedToReview={() => {
              setShowInspectionModal(false);
              setShowReviewModal(true);
            }}
            onClose={() => setShowInspectionModal(false)}
          />
        </Modal>
      )}

      {/* Đánh Giá 5 Sao Modal */}
      {activeBooking && (
        <Modal isOpen={showReviewModal} onClose={() => setShowReviewModal(false)} title="Đánh Giá Dịch Vụ">
          <Review5StarModal
            booking={activeBooking}
            pet={currentPet}
            onSubmitReview={(rat, com) => {
              handleReviewSubmit(rat, com);
              setActiveFlow('dashboard');
              setActiveTab('home');
            }}
            onClose={() => setShowReviewModal(false)}
          />
        </Modal>
      )}

      {/* Chi tiết Sản phẩm & Da liễu Modal */}
      {selectedHistoryRecord && (
        <Modal isOpen={showProductDetailModal} onClose={() => setShowProductDetailModal(false)} title="Chi Tiết Dược Phẩm Sử Dụng">
          <ProductNotesDetail
            record={selectedHistoryRecord}
            onClose={() => setShowProductDetailModal(false)}
          />
        </Modal>
      )}

      {/* Hóa đơn điện tử VAT Modal */}
      {selectedHistoryRecord && (
        <Modal isOpen={showInvoiceModal} onClose={() => setShowInvoiceModal(false)} title="Hóa Đơn Điện Tử VAT">
          <DigitalInvoiceView
            record={selectedHistoryRecord}
            onClose={() => setShowInvoiceModal(false)}
          />
        </Modal>
      )}

      {/* Quản lý ngân sách Modal */}
      <Modal isOpen={showBudgetModal} onClose={() => setShowBudgetModal(false)} title="Ngân Sách & Chi Tiêu">
        <BudgetPlanView
          onClose={() => setShowBudgetModal(false)}
        />
      </Modal>

      {/* Tái đặt lịch 1-chạm Modal (Wireframe 25) */}
      {selectedHistoryRecord && (
        <Modal isOpen={showRebookModal} onClose={() => setShowRebookModal(false)} title="Tái Đặt Lịch 1-Chạm">
          <OneClickRebookModal
            record={selectedHistoryRecord}
            pet={pets.find((p) => p.id === selectedHistoryRecord.petId) || pets[0]}
            onConfirmRebook={handleRebookConfirm}
            onClose={() => setShowRebookModal(false)}
          />
        </Modal>
      )}

      {/* 5 Trạng thái biên HCI (Loading, Empty, Conflict, Network, Success) */}
      <EdgeStatesModal
        type={edgeStateType}
        onClose={() => setEdgeStateType(null)}
        onRetry={() => {
          setEdgeStateType('loading');
          setTimeout(() => setEdgeStateType(null), 1200);
        }}
        onNavigateToBooking={() => {
          setActiveTab('booking');
          setActiveFlow('booking_pet_select');
        }}
      />

    </main>
  );
};
