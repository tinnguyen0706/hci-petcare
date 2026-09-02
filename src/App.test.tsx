import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { screenAssets } from './screens'

describe('PetCare Pro — giao diện Wireframe và tương tác React',()=>{
  beforeEach(()=>{localStorage.clear();window.location.hash='';window.scrollTo=()=>undefined})

  it('giữ đủ 32 Wireframe và bổ sung 21 màn hình Prototype',()=>{
    expect(Object.keys(screenAssets)).toHaveLength(53)
    expect(screenAssets.appointmentCheckin).toContain('appointment_checkin_card')
    expect(screenAssets.miuTimeMatrix).toContain('time_matrix_view')
    expect(screenAssets.miuSafety).toContain('live_care_safety_status')
    render(<App/>)
    expect(screen.getByRole('img',{name:'Giao diện gốc: Trang chủ'})).toHaveAttribute('src',expect.stringContaining('01_home_dashboard_wireframe'))
  })

  it('dùng đồng hồ hệ thống thay cho giờ cố định',()=>{
    render(<App/>);const expected=new Intl.DateTimeFormat('vi-VN',{hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date())
    expect(screen.getByTestId('system-clock')).toHaveTextContent(expected)
  })

  it('Booking hiển thị lựa chọn động và xử lý xung đột dị ứng',async()=>{
    const user=userEvent.setup();render(<App/>);await user.click(screen.getByRole('button',{name:'Đặt lịch'}))
    const standard=screen.getByRole('button',{name:'Chọn Tắm Vệ Sinh Tiêu Chuẩn'});await user.click(standard)
    expect(standard).toHaveAttribute('aria-pressed','true')
    await user.click(screen.getByRole('button',{name:'Tiếp tục chọn khung giờ'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Xung đột dị ứng'})).toBeInTheDocument()
    expect(screen.getByRole('button',{name:'Chọn tự mang dầu tắm riêng'})).toBeInTheDocument()
    expect(screen.getByRole('button',{name:'Gọi Hotline Da Liễu'})).toBeInTheDocument()
    expect(screen.getByRole('button',{name:'Áp dụng dầu Hypo và tiếp tục đặt lịch'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Tự động đổi sang dầu tắm Hypo'}))
    await act(async()=>{await new Promise(resolve=>window.setTimeout(resolve,460))})
    expect(screen.getByRole('img',{name:'Giao diện gốc: Chọn khung giờ'})).toBeInTheDocument()
  })

  it('Conflict cho phép mang dầu riêng và tiếp tục với lựa chọn hiện tại',async()=>{
    const user=userEvent.setup();render(<App/>);await user.click(screen.getByRole('button',{name:'Đặt lịch'}));await user.click(screen.getByRole('button',{name:'Chọn Tắm Vệ Sinh Tiêu Chuẩn'}));await user.click(screen.getByRole('button',{name:'Tiếp tục chọn khung giờ'}))
    await user.click(screen.getByRole('button',{name:'Chọn tự mang dầu tắm riêng'}));await act(async()=>{await new Promise(resolve=>window.setTimeout(resolve,460))})
    expect(screen.getByRole('img',{name:'Giao diện gốc: Chọn khung giờ'})).toBeInTheDocument()
    const saved=JSON.parse(localStorage.getItem('petcare-wireframe-product-v6')??'{}');expect(saved.serviceId).toBe('standard');expect(saved.hypoOverride).toBe(true)
  })

  it('Booking bắt người dùng tự chọn ngày và giờ rồi xác nhận thành công',async()=>{
    const user=userEvent.setup();render(<App/>);await user.click(screen.getByRole('button',{name:'Đặt lịch'}))
    await user.click(screen.getByRole('button',{name:'Tiếp tục chọn khung giờ'}));await act(async()=>{await new Promise(resolve=>window.setTimeout(resolve,460))})
    await user.click(screen.getByRole('button',{name:'Chọn Ngày mai'}));const selectedSlot=screen.getByRole('button',{name:'Chọn 09:30 đến 10:30'});await user.click(selectedSlot)
    expect(selectedSlot).toHaveAttribute('aria-pressed','true')
    await user.click(screen.getByRole('button',{name:'Tiếp tục xác nhận lịch hẹn'}));await user.click(screen.getByRole('button',{name:'Xác nhận và khóa lịch ngay'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Đặt lịch thành công'})).toBeInTheDocument()
  })

  it('đồng bộ Pet đã chọn xuyên suốt Confirmation, Success và Tracking',async()=>{
    const user=userEvent.setup();render(<App/>);await user.click(screen.getByRole('button',{name:'Đặt lịch'}));await user.click(screen.getByRole('button',{name:'Chọn hoặc đổi thú cưng'}))
    await user.click(screen.getByRole('checkbox',{name:/Bơ/}));await user.click(screen.getByRole('checkbox',{name:/Miu/}));await user.click(screen.getByRole('button',{name:'Xong'}))
    await user.click(screen.getByRole('button',{name:'Tiếp tục chọn khung giờ'}));await act(async()=>{await new Promise(resolve=>window.setTimeout(resolve,460))})
    await user.click(screen.getByRole('button',{name:'Chọn Ngày mai'}));await user.click(screen.getByRole('button',{name:'Chọn 09:30 đến 10:30'}));await user.click(screen.getByRole('button',{name:'Tiếp tục xác nhận lịch hẹn'}))
    expect(within(screen.getByTestId('booking-runtime-summary')).getByText('Miu')).toBeInTheDocument();expect(screen.getByTestId('booking-runtime-summary')).not.toHaveTextContent('Bơ')
    await user.click(screen.getByRole('button',{name:'Xác nhận và khóa lịch ngay'}));expect(screen.getByTestId('booking-runtime-summary')).toHaveTextContent('Miu');expect(screen.getByTestId('booking-runtime-summary')).toHaveTextContent('KTV Hoàng Mai');expect(screen.getByRole('button',{name:'Mở mã QR check-in'})).toBeInTheDocument();expect(screen.getByRole('button',{name:'Xem vé hẹn và theo dõi live'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Theo dõi tiến độ'}));expect(screen.getByTestId('tracking-runtime-summary')).toHaveTextContent('Bé Miu')
  })

  it('chọn được nhiều Pet và cập nhật Pet summary',async()=>{
    const user=userEvent.setup();render(<App/>);await user.click(screen.getByRole('button',{name:'Đặt lịch'}));await user.click(screen.getByRole('button',{name:'Chọn hoặc đổi thú cưng'}))
    await user.click(screen.getByRole('checkbox',{name:/Miu/}));await user.click(screen.getByRole('button',{name:'Xong'}))
    expect(screen.getByRole('button',{name:'Chọn hoặc đổi thú cưng'})).toHaveTextContent('Bơ + Miu')
  })

  it('Miu dùng đúng màn chọn giờ và dịch vụ riêng, không quay về nội dung da Bơ',async()=>{
    const user=userEvent.setup();render(<App/>);await user.click(screen.getByRole('button',{name:'Hồ sơ'}));await user.click(screen.getByRole('button',{name:'Chọn Miu làm thú cưng chính'}));await user.click(screen.getByRole('button',{name:'Đặt lịch cho Miu'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Ma trận thời gian thú cưng'})).toBeInTheDocument();await user.click(screen.getByRole('button',{name:'Chọn khung giờ khuyên dùng 13:30 - 15:00 cho Miu'}));await user.click(screen.getByRole('button',{name:'Tiếp tục với khung giờ đã chọn'}));await user.click(screen.getByRole('button',{name:'Tiếp tục chọn dịch vụ cho thú cưng'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Chọn dịch vụ cho Miu'})).toBeInTheDocument()
  })

  it('Ma trận thời gian dùng chung cho mọi thú cưng, cho đổi bé và khóa giờ kín chỗ',async()=>{
    const user=userEvent.setup();window.location.hash='miuTimeMatrix';render(<App/>)
    expect(screen.getByRole('button',{name:'09:00 - 10:30 đã kín chỗ'})).toBeDisabled()
    expect(within(screen.getByLabelText('Thú cưng đang xem ma trận')).getByText('Bơ')).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Đổi thú cưng xem ma trận'}));await user.click(screen.getByRole('button',{name:'Chọn Miu cho ma trận thời gian'}));expect(within(screen.getByLabelText('Thú cưng đang xem ma trận')).getByText('Miu')).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Tiếp tục với khung giờ đã chọn'}));expect(screen.getByRole('status')).toHaveTextContent('Hãy chọn một khung giờ còn trống cho thú cưng.')
    const slot1030=screen.getByRole('button',{name:'Chọn khung giờ 10:30 - 12:00 cho Miu'});const slot1530=screen.getByRole('button',{name:'Chọn khung giờ 15:30 - 17:00 cho Miu'})
    await user.click(slot1030);expect(slot1030).toHaveAttribute('aria-pressed','true');expect(document.querySelectorAll('.miu-time-matrix-runtime > button.selected')).toHaveLength(1)
    await user.click(slot1530);expect(slot1530).toHaveAttribute('aria-pressed','true');expect(slot1030).toHaveAttribute('aria-pressed','false');expect(document.querySelectorAll('.miu-time-matrix-runtime > button.selected')).toHaveLength(1);expect(screen.getByRole('button',{name:'Tiếp tục với khung giờ đã chọn'})).toHaveTextContent('Tiếp tục với 15:30')
    await user.click(screen.getByRole('button',{name:'Tiếp tục với khung giờ đã chọn'}));expect(screen.getByTestId('miu-selected-slot')).toHaveTextContent('15:30 - 17:00')
    await user.click(screen.getByRole('button',{name:'Đổi sang khung giờ 10:30'}));expect(screen.getByTestId('miu-selected-slot')).toHaveTextContent('10:30 - 12:00')
  })

  it('Profile chọn Miu làm hồ sơ chính và thêm Pet mới',async()=>{
    const user=userEvent.setup();render(<App/>);await user.click(screen.getByRole('button',{name:'Hồ sơ'}))
    const miu=screen.getByRole('button',{name:'Chọn Miu làm thú cưng chính'});await user.click(miu);expect(miu).toHaveAttribute('aria-pressed','true');expect(miu).toHaveTextContent('ĐANG CHỌN');expect(screen.getByRole('button',{name:'Chọn Bơ làm thú cưng chính'})).toHaveTextContent('CHỌN BÉ')
    await user.click(screen.getByRole('button',{name:'Thêm thú cưng mới từ nút chính'}));await user.type(screen.getByLabelText(/Tên thú cưng/),'Na');await user.type(screen.getByLabelText(/Loài\/Giống/),'Mèo ta');await user.click(screen.getByRole('button',{name:'Lưu hồ sơ'}))
    expect(JSON.parse(localStorage.getItem('petcare-wireframe-product-v6')??'{}').pets.map((pet:{name:string})=>pet.name)).toContain('Na')
  })

  it('Notification filter và Settings hoạt động',async()=>{
    const user=userEvent.setup();render(<App/>);await user.click(screen.getByRole('button',{name:'Mở thông báo'}));await user.click(screen.getByRole('button',{name:'Lọc alerts'}));expect(screen.getByRole('button',{name:'Lọc alerts'})).toHaveAttribute('aria-pressed','true')
    expect(screen.getByRole('button',{name:'Lọc alerts'})).toHaveTextContent('Cảnh báo')
    const invoice=screen.getByRole('button',{name:'Lọc invoice'});await user.click(invoice);expect(invoice).toHaveTextContent('Hóa đơn');expect(invoice).toHaveAttribute('aria-pressed','true')
    expect(screen.getByTestId('notification-results')).toHaveTextContent('Đặt lịch thành công tức thì');expect(screen.getByTestId('notification-results')).not.toHaveTextContent('Đã khóa cam kết')
    await user.click(screen.getByRole('button',{name:'Tùy chỉnh kênh thông báo'}));const push=screen.getByRole('button',{name:'Thông báo đẩy ứng dụng'});await user.click(push);expect(push).toHaveAttribute('aria-pressed','false')
  })

  it('Notification Settings dùng đủ công tắc động cho bốn mốc tiến độ',async()=>{
    const user=userEvent.setup();window.location.hash='notificationSettings';render(<App/>)
    const milestoneNames=['Mốc 1: Đã tiếp nhận tại quầy','Mốc 2: Bắt đầu chăm sóc hoặc tắm','Mốc 3: Hoàn tất dịch vụ chính','Mốc 4: Sẵn sàng đón thú cưng']
    for(const name of milestoneNames){
      const toggle=screen.getByRole('button',{name});expect(toggle).toHaveClass('toggle');expect(toggle).toHaveAttribute('aria-pressed','true')
      await user.click(toggle);expect(toggle).toHaveAttribute('aria-pressed','false');expect(toggle).not.toHaveClass('is-selected')
    }
  })

  it('Check-in đi đủ luồng an toàn Prototype rồi tới Tracking',async()=>{
    const user=userEvent.setup();window.location.hash='checkin';render(<App/>)
    expect(screen.getByRole('img',{name:'Giao diện gốc: Mã QR tiếp nhận'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Xác nhận Check-in tại quầy'}))
    await user.click(screen.getByRole('button',{name:'Đối chiếu phương án'}))
    await user.click(screen.getByRole('button',{name:'Khóa lưu ý vào ca'}))
    await user.click(screen.getByRole('button',{name:'Hoàn tất tiếp nhận'}))
    await user.click(screen.getByRole('button',{name:'Bắt đầu theo dõi tiến độ'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Tiến độ mốc 1'})).toBeInTheDocument()
  })

  it('Tracking chuyển đủ bốn mốc',async()=>{
    const user=userEvent.setup();render(<App/>);await user.click(screen.getByRole('button',{name:'Tiến độ'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Tiến độ mốc 2'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Chuyển đến Mốc 3: Sấy & Tỉa'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Tiến độ mốc 3'})).toBeInTheDocument();await user.click(screen.getByRole('button',{name:'Chuyển đến Mốc 4: Chờ đón'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Tiến độ mốc 4'})).toBeInTheDocument()
  })

  it('Review thay đổi rating và lưu về History',async()=>{
    const user=userEvent.setup();window.location.hash='review';render(<App/>)
    const four=screen.getByRole('button',{name:'Chọn 4 sao'});await user.click(four)
    expect(four).toHaveAttribute('aria-pressed','true');expect(screen.getByRole('button',{name:'Chọn 5 sao'})).toHaveAttribute('aria-pressed','false')
    await user.click(screen.getByRole('button',{name:'Gửi đánh giá và lưu hồ sơ'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Lịch sử chăm sóc'})).toBeInTheDocument()
    expect(screen.getByTestId('history-results')).toHaveTextContent('Lượt chăm sóc vừa hoàn tất')
  })

  it('History lọc, xem chi tiết và Rebook về bước chọn giờ',async()=>{
    const user=userEvent.setup();render(<App/>);await user.click(screen.getByRole('button',{name:'Trang chủ'}));await user.click(screen.getByRole('button',{name:'Đặt lại nhanh'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Đặt lại một chạm'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Chọn ngày và khung giờ khác'}));await act(async()=>{await new Promise(resolve=>window.setTimeout(resolve,460))});expect(screen.getByText('Chưa chọn khung giờ')).toBeInTheDocument()
  })

  it('Empty State có đủ hành động và mở lưới giờ trống hôm nay',async()=>{
    const user=userEvent.setup();window.location.hash='empty';render(<App/>);expect(screen.getByRole('button',{name:'Đặt lịch chăm sóc ngay'})).toBeInTheDocument();expect(screen.getByRole('button',{name:'Đặt lại gói chăm sóc gần nhất'})).toBeInTheDocument();expect(screen.getByRole('button',{name:'Cài đặt tự động nhắc lịch'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Xem lưới giờ trống hôm nay'}));await act(async()=>{await new Promise(resolve=>window.setTimeout(resolve,460))});expect(screen.getByRole('img',{name:'Giao diện gốc: Chọn khung giờ'})).toBeInTheDocument();expect(screen.getByTestId('system-clock')).toBeInTheDocument();expect(screen.getByText('Hôm nay')).toBeInTheDocument()
  })

  it('Rebook chọn lịch gợi ý và tạo booking mới từ lựa chọn của người dùng',async()=>{
    const user=userEvent.setup();render(<App/>);await user.click(screen.getByRole('button',{name:'Đặt lại nhanh'}))
    expect(screen.getByRole('button',{name:'Chọn lịch để xác nhận'})).toBeDisabled()
    const second=screen.getByRole('button',{name:'Chọn lịch 21/09 lúc 08:30'});await user.click(second);expect(second).toHaveAttribute('aria-pressed','true')
    await user.click(screen.getByRole('button',{name:'✓ Xác nhận Rebook (21/09 · 08:30)'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Đặt lịch thành công'})).toBeInTheDocument();expect(screen.getByTestId('booking-runtime-summary')).toHaveTextContent('Thứ 2 (21/09/2026)');expect(screen.getByTestId('booking-runtime-summary')).toHaveTextContent('08:30 - 09:30')
  })

  it('Timeslot cho chọn ngày, giờ, thêm Miu, chọn lại và chặn giờ hết chỗ',async()=>{
    const user=userEvent.setup();window.location.hash='timeslot';render(<App/>)
    const full=screen.getByRole('button',{name:'Khung giờ đã hết chỗ 10:30 đến 11:30'});expect(full).toBeDisabled()
    const day=screen.getByRole('button',{name:'Chọn Ngày mai'});await user.click(day);expect(day).toHaveAttribute('aria-pressed','true')
    const slot=screen.getByRole('button',{name:'Chọn 08:30 đến 09:30'});await user.click(slot);expect(slot).toHaveAttribute('aria-pressed','true')
    await user.click(screen.getByRole('button',{name:'Thêm Miu vào lịch hẹn'}));expect(screen.getByRole('button',{name:'Bỏ Miu khỏi lịch hẹn'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Chọn lại'}));expect(screen.getByText('Chưa chọn ngày')).toBeInTheDocument();expect(screen.getByText('Chưa chọn khung giờ')).toBeInTheDocument()
  })

  it('Prototype Intake chạy đủ cảnh báo, đối chiếu, khóa cam kết và bàn giao',async()=>{
    const user=userEvent.setup();window.location.hash='appointmentCheckin';render(<App/>)
    await user.click(screen.getByRole('button',{name:'Mở mã QR tiếp nhận'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Mã QR tiếp nhận'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Xác nhận Check-in tại quầy'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Cảnh báo y tế tiếp nhận'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Đối chiếu phương án'}));await user.click(screen.getByRole('button',{name:'Khóa lưu ý vào ca'}));await user.click(screen.getByRole('button',{name:'Hoàn tất tiếp nhận'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Biên bản bàn giao'})).toBeInTheDocument();const saved=JSON.parse(localStorage.getItem('petcare-wireframe-product-v6')??'{}');expect(saved.safetyLocks['active-seed']).toContain('Dị ứng xà phòng hương liệu')
  })

  it('Prototype Tracking hiển thị thông báo đón bé trước mốc 4',async()=>{
    const user=userEvent.setup();window.location.hash='pushReady';render(<App/>)
    expect(screen.getByRole('img',{name:'Giao diện gốc: Thông báo sẵn sàng đón'})).toBeInTheDocument();await user.click(screen.getByRole('button',{name:'Sang đón bé ngay'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Tiến độ mốc 4'})).toBeInTheDocument()
  })

  it('Prototype History chạy đủ sản phẩm, ghi chú và lưu cho lần sau',async()=>{
    const user=userEvent.setup();window.location.hash='session';render(<App/>);await user.click(screen.getByRole('button',{name:'Xem sản phẩm đã sử dụng'}));await user.click(screen.getByRole('button',{name:'Xem ghi chú da của KTV'}));await user.click(screen.getByRole('button',{name:'Lưu sản phẩm cho lần tới'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Đã lưu sản phẩm ưu tiên'})).toBeInTheDocument();expect(screen.getByRole('button',{name:'Đặt lịch hẹn đợt tới'})).toBeInTheDocument();expect(JSON.parse(localStorage.getItem('petcare-wireframe-product-v6')??'{}').preferredProducts.bo).toContain('Hypo')
    await user.click(screen.getByRole('button',{name:'Đặt lịch'}));expect(screen.getByTestId('service-advisory')).toHaveTextContent('Ưu tiên:')
  })

  it('Prototype Chi phí chạy từ History đến kế hoạch tháng tới',async()=>{
    const user=userEvent.setup();window.location.hash='history';render(<App/>);await user.click(screen.getByRole('button',{name:'Lọc lịch sử của Miu'}));await user.click(screen.getAllByRole('button',{name:'Chi tiết'})[0]);expect(screen.getByRole('img',{name:'Giao diện gốc: Phân tích chi phí'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Xem hóa đơn điện tử'}));await user.click(screen.getByRole('button',{name:'Xem tổng chi tiêu tháng'}));await user.click(screen.getByRole('button',{name:'Lập kế hoạch tháng tới'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Kế hoạch tài chính tháng tới'})).toBeInTheDocument();await user.click(screen.getByRole('button',{name:'Lưu kế hoạch tài chính'}));expect(screen.getByText(/Kế hoạch đã lưu:/)).toBeInTheDocument();expect(JSON.parse(localStorage.getItem('petcare-wireframe-product-v6')??'{}').financialPlan).toEqual({monthlyLimit:1000000,reminderEnabled:true})
  })

  it('Persona 2 Goal 1 và Goal 2 chạy end-to-end từ Trang chủ với đúng dữ liệu Miu',async()=>{
    const user=userEvent.setup();render(<App/>);await user.click(screen.getByRole('button',{name:'Hồ sơ'}));await user.click(screen.getByRole('button',{name:'Chi tiết y tế Miu'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Dặn dò an toàn của Miu'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Đặt lịch chăm sóc cho Miu'}));await user.click(screen.getByRole('button',{name:'Chọn khung giờ khuyên dùng 13:30 - 15:00 cho Miu'}));await user.click(screen.getByRole('button',{name:'Tiếp tục với khung giờ đã chọn'}));await user.click(screen.getByRole('button',{name:'Tiếp tục chọn dịch vụ cho thú cưng'}));await user.click(screen.getByRole('button',{name:'Chọn Tắm vệ sinh tiêu chuẩn cho mèo'}));await user.click(screen.getByRole('button',{name:'Kiểm tra đặt lịch cho Miu'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Dặn dò Miu đã tự động liên kết'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Xác nhận dặn dò tự động của Miu'}));await user.click(screen.getByRole('button',{name:'Xác nhận và khóa lịch cho Miu'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Đã khóa lịch cho Miu'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Mở phiếu tiếp nhận và theo dõi Miu'}));await user.click(screen.getByRole('button',{name:'Mở mã QR tiếp nhận'}));await user.click(screen.getByRole('button',{name:'Xác nhận Check-in tại quầy'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Bàn giao Miu tại quầy'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Xác nhận bàn giao Miu'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Xác nhận buồng cách ly của Miu'})).toBeInTheDocument();await user.click(screen.getByRole('button',{name:'Theo dõi tiến độ an toàn của Miu'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Trạng thái chăm sóc an toàn của Miu'})).toBeInTheDocument();await user.click(screen.getByRole('button',{name:'Bật thông báo tiến độ của Miu'}))
    const saved=JSON.parse(localStorage.getItem('petcare-wireframe-product-v6')??'{}');expect(saved.activeBooking.petIds).toEqual(['miu']);expect(saved.safetyLocks[saved.activeBooking.id]).toContain('Buồng cách ly');expect(saved.notificationSettings.push).toBe(true)
  })

  it('nút Quay lại dùng đúng lịch sử điều hướng thay vì đích đến cố định',async()=>{
    const user=userEvent.setup();render(<App/>)
    await user.click(screen.getByRole('button',{name:'Tiến độ'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Tiến độ mốc 2'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Xem ảnh phòng chăm sóc'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Ảnh phòng cách ly'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Quay lại'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Tiến độ mốc 2'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Quay lại'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Trang chủ'})).toBeInTheDocument()
  })

  it('thanh tiến độ cho nhấn trực tiếp qua cả bốn giai đoạn',async()=>{
    const user=userEvent.setup();window.location.hash='tracking1';render(<App/>)
    const labels=['Chuyển đến Mốc 2: Đang tắm','Chuyển đến Mốc 3: Sấy & Tỉa','Chuyển đến Mốc 4: Chờ đón','Chuyển đến Mốc 1: Đã nhận']
    const screens=['Tiến độ mốc 2','Tiến độ mốc 3','Tiến độ mốc 4','Tiến độ mốc 1']
    for(let index=0;index<labels.length;index++){
      await user.click(screen.getByRole('button',{name:labels[index]}))
      expect(screen.getByRole('img',{name:`Giao diện gốc: ${screens[index]}`})).toBeInTheDocument()
    }
  })

  it('bốn màn Tracking dùng chung thanh Mốc, các màn phụ không bị lớp tiến độ đè lên',()=>{
    const routes=['tracking1','tracking2','tracking3','tracking4']
    for(const route of routes){window.location.hash=route;const view=render(<App/>);expect(screen.getByRole('navigation',{name:'Quy trình chăm sóc'})).toBeInTheDocument();for(const label of ['Chuyển đến Mốc 1: Đã nhận','Chuyển đến Mốc 2: Đang tắm','Chuyển đến Mốc 3: Sấy & Tỉa','Chuyển đến Mốc 4: Chờ đón'])expect(screen.getByRole('button',{name:label})).toBeInTheDocument();view.unmount()}
    for(const route of ['intake','handover','parallelTracking','camera','pushReady','miuHandoff','miuIsolation','miuSafety','discharge','inspection']){window.location.hash=route;const view=render(<App/>);expect(screen.queryByRole('navigation',{name:'Quy trình chăm sóc'})).not.toBeInTheDocument();view.unmount()}
  })

  it('quay lại từ một Mốc vẫn tiếp tục chọn được Mốc khác',async()=>{
    const user=userEvent.setup();window.location.hash='tracking1';render(<App/>)
    await user.click(screen.getByRole('button',{name:'Chuyển đến Mốc 2: Đang tắm'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Tiến độ mốc 2'})).toBeInTheDocument()
    await user.click(screen.getByRole('button',{name:'Quay lại'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Tiến độ mốc 1'})).toBeInTheDocument();expect(screen.getByRole('button',{name:'Chuyển đến Mốc 1: Đã nhận'})).toHaveAttribute('aria-pressed','true')
    await user.click(screen.getByRole('button',{name:'Chuyển đến Mốc 3: Sấy & Tỉa'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Tiến độ mốc 3'})).toBeInTheDocument();expect(screen.getByRole('button',{name:'Chuyển đến Mốc 3: Sấy & Tỉa'})).toHaveAttribute('aria-pressed','true')
  })

  it('Gửi thêm dặn dò mở form, lưu nội dung và không gắn tên nhân viên vào nút',async()=>{
    const user=userEvent.setup();window.location.hash='tracking1';render(<App/>)
    const open=screen.getByRole('button',{name:'Gửi thêm dặn dò'});expect(open).toHaveTextContent('GỬI THÊM DẶN DÒ');expect(open).not.toHaveTextContent('Hoàng Mai');await user.click(open)
    const input=screen.getByLabelText('Nội dung dặn dò bổ sung');await user.type(input,'Nếu Miu hoảng sợ, hãy tạm dừng và gọi cho tôi.');await user.click(screen.getByRole('button',{name:'Gửi dặn dò'}))
    expect(screen.getByTestId('tracking-runtime-summary')).toHaveTextContent('Dặn dò bổ sung: Nếu Miu hoảng sợ, hãy tạm dừng và gọi cho tôi.')
    const saved=JSON.parse(localStorage.getItem('petcare-wireframe-product-v6')??'{}');expect(saved.careInstructions['active-seed']).toContain('Nếu Miu hoảng sợ, hãy tạm dừng và gọi cho tôi.')
  })

  it('cả bốn màn Tracking đều có nút Quay lại và màn dự phòng an toàn',async()=>{
    const routes=[['tracking1','Trang chủ'],['tracking2','Tiến độ mốc 1'],['tracking3','Tiến độ mốc 2'],['tracking4','Tiến độ mốc 3']] as const
    for(const [route,fallback] of routes){
      const user=userEvent.setup();window.location.hash=route;const view=render(<App/>)
      await user.click(screen.getByRole('button',{name:'Quay lại'}))
      expect(screen.getByRole('img',{name:`Giao diện gốc: ${fallback}`})).toBeInTheDocument()
      view.unmount()
    }
  })

  it('bốn nút Bottom Navigation trên Handover đều điều hướng được',async()=>{
    const targets=[['Trang chủ','Trang chủ'],['Đặt lịch','Chọn gói dịch vụ'],['Tiến độ','Tiến độ mốc 2'],['Hồ sơ','Quản lý hồ sơ thú cưng']] as const
    for(const [buttonName,screenName] of targets){
      const user=userEvent.setup();window.location.hash='handover';const view=render(<App/>)
      await user.click(screen.getByRole('button',{name:buttonName}))
      expect(screen.getByRole('img',{name:`Giao diện gốc: ${screenName}`})).toBeInTheDocument()
      view.unmount()
    }
  })

  it('mọi màn có thanh Bottom Navigation đều đủ bốn hotspot cố định',()=>{
    const routes=Object.keys(screenAssets).filter(route=>route!=='rebook')
    for(const route of routes){
      window.location.hash=route;const view=render(<App/>)
      for(const label of ['Trang chủ','Đặt lịch','Tiến độ','Hồ sơ'])expect(screen.getByRole('button',{name:label})).toBeInTheDocument()
      view.unmount()
    }
  })

  it('màn dịch vụ Miu bắt buộc chọn và cho đổi gói bằng thao tác người dùng',async()=>{
    const user=userEvent.setup();window.location.hash='miuService';render(<App/>)
    await user.click(screen.getByRole('button',{name:'Kiểm tra đặt lịch cho Miu'}));expect(screen.getByRole('status')).toHaveTextContent('Hãy chọn một gói dịch vụ cho Miu.')
    const standard=screen.getByRole('button',{name:'Chọn Tắm vệ sinh tiêu chuẩn cho mèo'});const combo=screen.getByRole('button',{name:'Chọn Gói Spa & Cắt tỉa tạo kiểu'})
    await user.click(standard);expect(standard).toHaveAttribute('aria-pressed','true');await user.click(combo);expect(combo).toHaveAttribute('aria-pressed','true');expect(standard).toHaveAttribute('aria-pressed','false')
    await user.click(screen.getByRole('button',{name:'Kiểm tra đặt lịch cho Miu'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Dặn dò Miu đã tự động liên kết'})).toBeInTheDocument()
  })

  it('màn đánh giá cho sửa đủ sao, tag, lời nhắn, tip và KTV ưu tiên',async()=>{
    const user=userEvent.setup();window.location.hash='review';render(<App/>)
    const coat=screen.getByRole('button',{name:'Lông sấy rất bông đẹp'});await user.click(coat);expect(coat).toHaveAttribute('aria-pressed','true')
    const comment=screen.getByRole('textbox',{name:'Lời nhắn cho tiệm và kỹ thuật viên'});await user.clear(comment);await user.type(comment,'Miu hợp tác tốt trong phòng yên tĩnh.');expect(comment).toHaveValue('Miu hợp tác tốt trong phòng yên tĩnh.')
    const noTip=screen.getByRole('button',{name:'Không tip'});await user.click(noTip);expect(noTip).toHaveAttribute('aria-pressed','true')
    const preferred=screen.getByRole('button',{name:/KTV Hoàng Mai làm chuyên viên ưu tiên/});await user.click(preferred);expect(preferred).toHaveAttribute('aria-pressed','false')
  })

  it('các quick action còn lại ở Intake và Network Error đều điều hướng được',async()=>{
    const user=userEvent.setup();window.location.hash='intake';const view=render(<App/>)
    await user.click(screen.getByRole('button',{name:'Xem Chứng Thư Cam Kết An Toàn và Giao Ca'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Biên bản bàn giao'})).toBeInTheDocument();view.unmount()
    window.location.hash='networkError';render(<App/>);await user.click(screen.getByRole('button',{name:'Mở mã QR Offline'}));expect(screen.getByRole('img',{name:'Giao diện gốc: Lịch hẹn tiếp nhận'})).toBeInTheDocument()
  })

  it('mở Lịch sử và Nhật ký dịch vụ trực tiếp từ trang Hồ sơ',async()=>{
    const user=userEvent.setup();window.location.hash='profiles';render(<App/>)
    await user.click(screen.getByRole('button',{name:'Lịch sử & Nhật ký dịch vụ'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Lịch sử chăm sóc'})).toBeInTheDocument()
    expect(screen.getByTestId('history-results')).toBeInTheDocument()
  })

  it('mở Ma trận thời gian từ Hồ sơ và giữ đúng thú cưng đang chọn',async()=>{
    const user=userEvent.setup();window.location.hash='profiles';render(<App/>)
    await user.click(screen.getByRole('button',{name:'Chọn Miu làm thú cưng chính'}))
    await user.click(screen.getByRole('button',{name:'Mở ma trận thời gian cho thú cưng đang chọn'}))
    expect(screen.getByRole('img',{name:'Giao diện gốc: Ma trận thời gian thú cưng'})).toBeInTheDocument()
    expect(within(screen.getByLabelText('Thú cưng đang xem ma trận')).getByText('Miu')).toBeInTheDocument()
  })
})
