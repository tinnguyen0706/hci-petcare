import { 
  Pet, 
  Service, 
  TimeSlot, 
  Booking, 
  CareHistoryRecord, 
  NotificationItem, 
  NotificationSettingsState,
  EnvironmentSensorData 
} from '../types';

export const initialPets: Pet[] = [
  {
    id: 'pet-bo',
    name: 'Bơ',
    avatarText: 'BƠ',
    breed: 'Chó Poodle',
    age: '2 tuổi',
    weight: '4.5 kg',
    gender: 'Đực',
    isAllergic: true,
    allergyNotice: 'Dị ứng xà phòng tạo bọt & hương liệu nhân tạo; da nhạy cảm dễ ửng đỏ',
    temperament: 'Hiền lành, nhút nhát với tiếng máy sấy công suất lớn',
    medicalNotes: 'Tiền sử viêm da tiếp xúc tháng 04/2026. Chỉ định tắm thảo dược Derma-Care pH 6.5 và sấy lồng êm nhiệt độ thấp.',
    recommendedProduct: 'Sữa tắm dược liệu Derma-Care Sensitive Skin',
    vaccines: [
      { name: 'Vắc-xin 7 bệnh phòng ngừa (Vanguard Plus 5/CV-L)', expiryDate: '15/12/2026', status: 'valid' },
      { name: 'Phòng ngừa dại (Rabisin)', expiryDate: '20/10/2026', status: 'valid' },
      { name: 'Tẩy giun định kỳ (Endogard)', expiryDate: '05/08/2026', status: 'valid' }
    ]
  },
  {
    id: 'pet-miu',
    name: 'Miu',
    avatarText: 'MIU',
    breed: 'Mèo Anh lông ngắn',
    age: '1.5 tuổi',
    weight: '3.8 kg',
    gender: 'Cái',
    isAllergic: false,
    allergyNotice: 'Không có tiền sử dị ứng thuốc/hóa chất',
    temperament: 'Rất nhút nhát, hoảng loạn khi gặp chó lớn hoặc tiếng động bất ngờ',
    medicalNotes: 'Cần bố trí buồng cách ly độc lập A-02 yên tĩnh, tránh để tiếp xúc với các thú cưng khác.',
    recommendedProduct: 'Dầu tắm khô dịu nhẹ chuyên dụng cho mèo & xịt pheromone thư giãn',
    vaccines: [
      { name: 'Vắc-xin 4 bệnh cho mèo (Purevax RCPCh)', expiryDate: '10/11/2026', status: 'valid' },
      { name: 'Phòng ngừa dại (Rabisin)', expiryDate: '15/10/2026', status: 'valid' },
      { name: 'Nhỏ gáy ngừa ve rận & giun tim (Revolution Plus)', expiryDate: '01/09/2026', status: 'valid' }
    ]
  }
];

export const initialServices: Service[] = [
  {
    id: 'srv-derma',
    name: 'Tắm Dược Liệu Trị Liệu Da (Derma-Care)',
    badge: 'Khuyên Dùng Y Tế',
    description: 'Quy trình ngâm bồn sục vi bọt khí thảo dược thiên nhiên, cân bằng pH 6.5, dịu mẩn đỏ, không hương liệu.',
    durationMinutes: 45,
    price: 250000,
    isHypoallergenic: true,
    recommendedForPetId: 'pet-bo'
  },
  {
    id: 'srv-standard',
    name: 'Tắm & Vệ Sinh Tiêu Chuẩn',
    badge: 'Phổ Thông',
    description: 'Tắm xà phòng tạo bọt lưu hương thơm lâu, vệ sinh tai, vắt tuyến hôi, cắt móng và sấy chải bông xù.',
    durationMinutes: 40,
    price: 180000,
    isHypoallergenic: false,
    warningNotice: 'Chứa tinh dầu hương liệu hoa sứ; không phù hợp cho thú cưng có tiền sử viêm da dị ứng!'
  },
  {
    id: 'srv-grooming',
    name: 'Cắt Tỉa & Tạo Kiểu Poodle Chuyên Nghiệp',
    badge: 'Chuyên Sâu',
    description: 'Cắt tỉa tạo kiểu gấu bông Teddy hoặc phong cách Lamb Cut, bo tròn đầu tai bằng kéo cong Nhật Bản.',
    durationMinutes: 60,
    price: 320000,
    isHypoallergenic: true
  },
  {
    id: 'srv-cat-spa',
    name: 'Spa Thư Giãn Buồng Cách Ly Cho Mèo',
    badge: 'Buồng Riêng Yên Tĩnh',
    description: 'Chăm sóc riêng biệt trong phòng cách âm <30dB, khử khuẩn tia UV, sấy phòng êm ái kèm xịt Feliway an thần.',
    durationMinutes: 45,
    price: 220000,
    isHypoallergenic: true,
    recommendedForPetId: 'pet-miu'
  }
];

export const availableTimeSlots: TimeSlot[] = [
  { id: 'slot-1', time: '08:30', period: 'morning', isAvailable: true },
  { id: 'slot-2', time: '09:00', period: 'morning', isAvailable: false, reasonIfNotAvailable: 'Đã kín lịch tiếp nhận buổi sáng' },
  { id: 'slot-3', time: '09:30', period: 'morning', isAvailable: true },
  { id: 'slot-4', time: '10:30', period: 'morning', isAvailable: false, reasonIfNotAvailable: 'KTV Hoàng Mai đang phụ trách ca tắm bồn' },
  { id: 'slot-5', time: '13:30', period: 'afternoon', isAvailable: true, isQuietRecommended: true },
  { id: 'slot-6', time: '14:30', period: 'afternoon', isAvailable: true },
  { id: 'slot-7', time: '15:30', period: 'afternoon', isAvailable: false, reasonIfNotAvailable: 'Khu sấy đang bảo trì vệ sinh' },
  { id: 'slot-8', time: '16:30', period: 'afternoon', isAvailable: true }
];

export const initialActiveBooking: Booking = {
  id: 'book-current',
  bookingCode: 'BK-8902',
  checkInCode: 'IN-BO-0901',
  dischargeCode: 'OUT-BO-0941',
  petIds: ['pet-bo'],
  serviceId: 'srv-derma',
  dateString: 'Hôm nay, 03/09/2026',
  timeString: '09:00 - 09:45',
  technicianName: 'Hoàng Mai',
  technicianExperience: '4 năm kinh nghiệm • Chuyên da liễu',
  totalAmount: 250000,
  discountAmount: 0,
  status: 2, // Mốc 2: Đang chăm sóc
  stationOrRoom: 'Bồn sục dược liệu 02',
  autoAttachedNotes: [
    'Tiền sử dị ứng xà phòng hương liệu: Sử dụng 100% Derma-Care pH 6.5',
    'Nhút nhát với tiếng ồn: Bật máy sấy lồng êm mức 1 (nhiệt độ 32°C)',
    'Khóa cam kết y tế: KTV Hoàng Mai đã ký nhận bàn giao lúc 09:02'
  ],
  customInstructions: 'Xin kiểm tra kỹ kẽ móng chân trước của bé vì bé hay liếm chân',
  createdAt: '03/09/2026 08:15'
};

export const initialCareHistory: CareHistoryRecord[] = [
  {
    id: 'hist-1',
    bookingCode: 'BK-8420',
    petId: 'pet-bo',
    date: '15/08/2026',
    serviceName: 'Tắm Dược Liệu Trị Liệu Da (Derma-Care)',
    technicianName: 'Hoàng Mai',
    rating: 5,
    productsUsed: [
      { name: 'Derma-Care Hypoallergenic Shampoo', phLevel: 'pH 6.5', type: 'Dầu gội thảo dược', verifiedSafe: true },
      { name: 'Xịt dưỡng phục hồi tế bào da mẩn đỏ Derma-Mist', phLevel: 'pH 6.8', type: 'Dưỡng da kẽ chân', verifiedSafe: true }
    ],
    skinHealthScore: 10,
    technicianReviewNote: 'Bé Bơ rất ngoan khi tắm bồn sục. Vùng da bụng đã giảm mẩn đỏ rõ rệt sau khi tắm Derma-Care. Bé không bị hoảng sợ khi sấy lồng.',
    totalCost: 250000,
    invoiceNumber: 'INV-2026-0815-BO',
    beforePhotoDescription: 'Lông rối, da vùng ngực hơi ửng hồng do cọ xát',
    afterPhotoDescription: 'Lông trắng bông tơi xốp, da dịu sáng khỏe khoắn đạt điểm an toàn 10/10'
  },
  {
    id: 'hist-2',
    bookingCode: 'BK-7911',
    petId: 'pet-miu',
    date: '20/07/2026',
    serviceName: 'Spa Thư Giãn Buồng Cách Ly Cho Mèo',
    technicianName: 'Tuấn Anh',
    rating: 5,
    productsUsed: [
      { name: 'Dầu tắm khô Feli-Clean No-Water Foam', phLevel: 'pH 6.2', type: 'Bọt tắm khô thảo mộc', verifiedSafe: true },
      { name: 'Tinh chất xịt Pheromone Feliway Classic', phLevel: 'Trung tính', type: 'Thư giãn giảm stress', verifiedSafe: true }
    ],
    skinHealthScore: 10,
    technicianReviewNote: 'Bé Miu được ở phòng A-02 cách âm hoàn toàn, không nghe tiếng chó sủa nên rất bình tĩnh, chải lông mượt mà không cào cắn.',
    totalCost: 220000,
    invoiceNumber: 'INV-2026-0720-MIU',
    beforePhotoDescription: 'Lông rụng nhiều vùng lưng, bé có biểu hiện căng thẳng',
    afterPhotoDescription: 'Lông bóng mượt, được loại bỏ 95% lông chết, bé ăn hết súp thưởng'
  }
];

export const initialNotifications: NotificationItem[] = [
  {
    id: 'notif-1',
    title: '[TIẾN ĐỘ] Bé Bơ đang ở Mốc 2: Đang chăm sóc',
    message: 'KTV Hoàng Mai đang ngâm bồn sục thảo dược Derma-Care cho bé tại Bồn 02. Thời gian dự kiến hoàn tất: 09:45.',
    timeAgo: '12 phút trước',
    category: 'tracking',
    isRead: false,
    relatedBookingId: 'book-current'
  },
  {
    id: 'notif-2',
    title: '[Y TẾ] Đã khóa cam kết an toàn dị ứng da',
    message: 'Hồ sơ y tế của bé Bơ (dị ứng xà phòng hương liệu) đã được đồng bộ vào ca làm việc của KTV Hoàng Mai.',
    timeAgo: '35 phút trước',
    category: 'medical',
    isRead: false
  },
  {
    id: 'notif-3',
    title: '[HÓA ĐƠN] Hóa đơn điện tử VAT đợt chăm sóc trước',
    message: 'Hóa đơn #INV-2026-0815-BO trị giá 250.000đ đã được lưu vào mục Lịch sử & Hóa đơn số hóa.',
    timeAgo: '2 tuần trước',
    category: 'invoice',
    isRead: true
  }
];

export const defaultNotificationSettings: NotificationSettingsState = {
  appPush: true,
  sms: true,
  zalo: false,
  milestones: {
    step1: true,
    step2: true,
    step3: true,
    step4: true
  },
  quietHours: false
};

export const isolationRoomSensors: EnvironmentSensorData = {
  roomCode: 'Phòng riêng A-02',
  temperature: '24.5°C',
  noiseLevel: '28 dB (Rất yên tĩnh)',
  humidity: '55%',
  status: 'Không gian cách âm tiêu chuẩn y tế • Khử khuẩn tia cực tím'
};
