// Seed data is transcribed from the approved Wireframe/Prototype artifacts.
// Runtime additions and edits are stored locally by the browser.
export type Pet = {
  id: string
  name: string
  species: string
  age: string
  weight: string
  notes: string
  tags: string[]
}

export type Service = {
  id: 'hypo' | 'standard' | 'combo'
  name: string
  description: string[]
  duration: number
  price: number
  badge?: string
}

export type Booking = {
  id: string
  petIds: string[]
  serviceId: Service['id']
  date: string
  slot: string
  requests: string[]
  status: 1 | 2 | 3 | 4
}

export type HistoryItem = {
  id: string
  petId: string
  serviceId: Service['id']
  dateLabel: string
  staff: string
  note: string
  product: string
  price: number
}

export const seedPets: Pet[] = [
  {
    id: 'bo', name: 'Bơ', species: 'Chó Poodle', age: '2 tuổi', weight: '4.5kg',
    notes: 'Dị ứng xà phòng nhiều hương liệu; nhút nhát với tiếng máy sấy.',
    tags: ['Dị ứng xà phòng hương liệu', 'Nhút nhát máy sấy'],
  },
  {
    id: 'miu', name: 'Miu', species: 'Mèo Anh lông ngắn', age: '1.5 tuổi', weight: '3.8kg',
    notes: 'Rất nhút nhát, sợ tiếng ồn; cần buồng riêng và thao tác nhẹ nhàng.',
    tags: ['Buồng cách ly', 'Sợ thú dữ', 'Đã tiêm 3 mũi chuẩn'],
  },
]

export const services: Service[] = [
  {
    id: 'hypo', name: 'Spa Trị Liệu Thảo Mộc Hypo', duration: 60, price: 250000,
    badge: 'Phù hợp da Bơ',
    description: ['Tắm bồn sục vi bọt khí làm sạch dịu nhẹ', 'Chiết xuất tràm trà hữu cơ không cồn/hương'],
  },
  {
    id: 'standard', name: 'Tắm Vệ Sinh Tiêu Chuẩn', duration: 45, price: 180000,
    description: ['Tắm sạch, vệ sinh tai, vắt tuyến hôi', 'Cắt mài móng, sấy chải bông lông'],
  },
  {
    id: 'combo', name: 'Combo Spa + Cắt Tỉa Tạo Kiểu', duration: 90, price: 350000,
    description: ['Trọn gói Spa Thảo Mộc cao cấp', 'Cắt tỉa tạo kiểu Poodle Teddy theo mẫu'],
  },
]

export const seedHistory: HistoryItem[] = [
  {
    id: 'history-bo', petId: 'bo', serviceId: 'hypo', dateLabel: 'Lượt chăm sóc gần nhất',
    staff: 'KTV Hoàng Mai', note: 'Da khỏe, tiếp tục dùng công thức Hypo.',
    product: 'Dầu thảo mộc Hypo và dưỡng phục hồi Derma-Care', price: 250000,
  },
  {
    id: 'history-miu', petId: 'miu', serviceId: 'standard', dateLabel: 'Lượt chăm sóc trước',
    staff: 'KTV phụ trách phòng cách ly', note: 'Bé hợp tác tốt khi thao tác nhẹ nhàng.',
    product: 'Gói vệ sinh tại buồng cách ly', price: 180000,
  },
]

export const trackingSteps = [
  { title: 'Đã nhận', detail: 'Đã tiếp nhận tại quầy và kiểm tra ngoài da.' },
  { title: 'Đang chăm sóc', detail: 'Đang thực hiện gói chăm sóc đã chọn.' },
  { title: 'Hoàn tất', detail: 'Đã hoàn tất chăm sóc và kiểm tra sau dịch vụ.' },
  { title: 'Chờ đón', detail: 'Bé sẵn sàng được đón tại khu vực nghỉ.' },
] as const

export const money = (value: number) => new Intl.NumberFormat('vi-VN').format(value) + 'đ'
