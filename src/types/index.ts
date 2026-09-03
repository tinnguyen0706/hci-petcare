export type MilestoneStep = 1 | 2 | 3 | 4; // 1: Đã nhận, 2: Đang chăm sóc, 3: Hoàn tất, 4: Chờ đón

export interface Pet {
  id: string;
  name: string;
  avatarText: string;
  avatarUrl?: string;
  breed: string;
  age: string;
  weight: string;
  gender: 'Đực' | 'Cái';
  isAllergic: boolean;
  allergyNotice: string;
  temperament: string;
  medicalNotes: string;
  recommendedProduct: string;
  vaccines: {
    name: string;
    expiryDate: string;
    status: 'valid' | 'expiring' | 'expired';
  }[];
}

export interface Service {
  id: string;
  name: string;
  badge: string;
  description: string;
  durationMinutes: number;
  price: number;
  isHypoallergenic: boolean;
  recommendedForPetId?: string;
  warningNotice?: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  period: 'morning' | 'afternoon';
  isAvailable: boolean;
  isQuietRecommended?: boolean; // Khung vắng thích hợp mèo nhút nhát
  reasonIfNotAvailable?: string;
}

export interface Booking {
  id: string;
  bookingCode: string;
  checkInCode: string;
  dischargeCode: string;
  petIds: string[];
  serviceId: string;
  dateString: string;
  timeString: string;
  technicianName: string;
  technicianExperience: string;
  totalAmount: number;
  discountAmount?: number;
  status: MilestoneStep;
  autoAttachedNotes: string[];
  customInstructions?: string;
  createdAt: string;
  stationOrRoom: string; // VD: "Bồn sục 02" hoặc "Buồng riêng A-02"
}

export interface CareHistoryRecord {
  id: string;
  bookingCode: string;
  petId: string;
  date: string;
  serviceName: string;
  technicianName: string;
  rating: number;
  productsUsed: {
    name: string;
    phLevel: string;
    type: string;
    verifiedSafe: boolean;
  }[];
  skinHealthScore: number; // Thang 10
  technicianReviewNote: string;
  totalCost: number;
  invoiceNumber: string;
  beforePhotoDescription: string;
  afterPhotoDescription: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timeAgo: string;
  category: 'all' | 'tracking' | 'medical' | 'invoice';
  isRead: boolean;
  relatedBookingId?: string;
}

export interface NotificationSettingsState {
  appPush: boolean;
  sms: boolean;
  zalo: boolean;
  milestones: {
    step1: boolean;
    step2: boolean;
    step3: boolean;
    step4: boolean;
  };
  quietHours: boolean; // 09:00 - 17:00
}

export interface EnvironmentSensorData {
  roomCode: string;
  temperature: string;
  noiseLevel: string;
  humidity: string;
  status: string;
}

export type ActiveTab = 'home' | 'booking' | 'tracking' | 'pets';
export type ActiveFlow = 
  | 'dashboard'
  | 'notifications_hub'
  | 'notifications_settings'
  | 'booking_pet_select'
  | 'booking_service_select'
  | 'booking_slot_matrix'
  | 'booking_multi_pet'
  | 'booking_review'
  | 'booking_success'
  | 'intake_qr'
  | 'intake_medical_alert'
  | 'intake_commitment'
  | 'live_tracking'
  | 'parallel_tracking'
  | 'isolation_room_cam'
  | 'discharge_qr'
  | 'inspection_report'
  | 'service_review'
  | 'pet_list'
  | 'medical_profile'
  | 'vaccination_book'
  | 'care_history'
  | 'history_session_detail'
  | 'digital_invoice'
  | 'monthly_budget_plan';
