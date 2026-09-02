import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { money, seedHistory, seedPets, services, trackingSteps, type Booking, type HistoryItem, type Pet, type Service } from './productData'
import { screenAssets, screenNames, type ScreenId } from './screens'

const STORAGE_KEY = 'petcare-wireframe-product-v6'
type TrackingStep = 1|2|3|4
type DialogId = null|'pet-picker'|'matrix-pet-picker'|'pet-form'|'pet-detail'|'budget'|'instruction'
type NotificationKey = 'push'|'sms'|'progress'|'alerts'|'quiet'|'milestone1'|'milestone2'|'milestone3'|'milestone4'
type AppState = {
  pets: Pet[]; primaryPetId: string; selectedPetIds: string[]; serviceId: Service['id']|''
  day: string; slot: string; hypoOverride: boolean; hasBooking: boolean; trackingStep: TrackingStep
  notificationSettings: Record<NotificationKey,boolean>; notificationFilter: 'all'|'tracking'|'alerts'|'invoice'
  notificationsRead: boolean; historyFilter: string; rating: number; budget: number
  feedbackTags: string[]; reviewComment: string; tipAmount: number; savePreferredStaff: boolean; autoLinkSafety: boolean
  activeBooking: Booking|null; history: HistoryItem[]
  preferredProducts: Record<string,string>; safetyLocks: Record<string,string[]>
  careInstructions: Record<string,string[]>
  financialPlan: {monthlyLimit:number; reminderEnabled:boolean}|null
}
type Hotspot = { label: string; x: number; y: number; w: number; h: number; action: () => void; selected?: boolean; disabled?: boolean; testId?: string; className?: string; visualLabel?: string }

const initialState: AppState = {
  pets: seedPets, primaryPetId:'bo', selectedPetIds:['bo'], serviceId:'hypo', day:'', slot:'', hypoOverride:false,
  hasBooking:true, trackingStep:2, notificationSettings:{push:true,sms:true,progress:true,alerts:true,quiet:true,milestone1:true,milestone2:true,milestone3:true,milestone4:true},
  notificationFilter:'all', notificationsRead:false, historyFilter:'all', rating:5, budget:1000000,
  feedbackTags:['allergy','live','staff'], reviewComment:'Rất ưng ý! Tiệm nhớ kỹ dặn dò da dị ứng của bé Bơ và cập nhật ảnh liên tục làm mình rất yên tâm.', tipAmount:50000, savePreferredStaff:true, autoLinkSafety:true,
  activeBooking:{id:'active-seed',petIds:['bo'],serviceId:'hypo',date:'Hôm nay',slot:'09:00 - 10:30',requests:seedPets[0].tags,status:2},
  history:seedHistory, preferredProducts:{}, safetyLocks:{}, careInstructions:{}, financialPlan:null,
}
const blankPet = { name:'', species:'', age:'', weight:'', notes:'' }
const processScreenSteps:Partial<Record<ScreenId,TrackingStep>>={intake:1,handover:2,tracking1:1,tracking2:2,tracking3:3,tracking4:4,parallelTracking:2,camera:2,pushReady:4,discharge:4,inspection:4}
const processStepperScreens = new Set<ScreenId>(['tracking1','tracking2','tracking3','tracking4'])
const processStepLabels=['Đã nhận','Đang tắm','Sấy & Tỉa','Chờ đón']

function getQrBookingContext(state:AppState){
  const booking=state.activeBooking
  const petId=booking?.petIds[0]??state.selectedPetIds[0]??state.primaryPetId
  const pet=state.pets.find(item=>item.id===petId)??state.pets[0]
  const service=services.find(item=>item.id===(booking?.serviceId??state.serviceId))
  const slot=booking?.slot||state.slot||'Chưa chọn khung giờ'
  const slotCode=(slot.match(/\d{2}:\d{2}/)?.[0]??'0000').replace(':','')
  return {booking,pet,service,slot,code:`#INTAKE-${pet.id.toLocaleUpperCase('vi')}-${slotCode}`}
}

function readState(): AppState {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '') as Partial<AppState>
    if (!Array.isArray(saved.pets) || saved.pets.length < 2) return initialState
    const migratedDay=({'Thứ 2':'Ngày mai','Thứ 3':'Ngày kia','Thứ 4':'Sau 3 ngày','Thứ 5':'Sau 4 ngày'} as Record<string,string>)[saved.day??'']??saved.day??''
    return { ...initialState, ...saved, day:migratedDay, pets:saved.pets, history:Array.isArray(saved.history)?saved.history:seedHistory, notificationSettings:{...initialState.notificationSettings,...saved.notificationSettings} }
  } catch { return initialState }
}

function App() {
  const [state,setState] = useState<AppState>(readState)
  const [screen,setScreen] = useState<ScreenId>('home')
  const [dialog,setDialog] = useState<DialogId>(null)
  const [editingPetId,setEditingPetId] = useState<string|null>(null)
  const [petDraft,setPetDraft] = useState(blankPet)
  const [detailPetId,setDetailPetId] = useState('bo')
  const [instructionDraft,setInstructionDraft] = useState('')
  const [toast,setToast] = useState('')
  const [now,setNow] = useState(new Date())
  const loadingTarget = useRef<ScreenId>('timeslot')
  const navigationStack = useRef<ScreenId[]>([])

  useEffect(() => localStorage.setItem(STORAGE_KEY,JSON.stringify(state)),[state])
  useEffect(() => { const timer=window.setInterval(()=>setNow(new Date()),1000); return()=>window.clearInterval(timer) },[])
  useEffect(() => { if(!toast)return; const timer=window.setTimeout(()=>setToast(''),1900); return()=>window.clearTimeout(timer) },[toast])
  useEffect(() => {
    const syncFromUrl=()=>{const id=window.location.hash.slice(1) as ScreenId;if(id in screenAssets){navigationStack.current=[];syncTrackingRoute(id);setScreen(id)}}
    syncFromUrl();window.addEventListener('popstate',syncFromUrl)
    return()=>window.removeEventListener('popstate',syncFromUrl)
  },[])

  const selectedPets = state.pets.filter(pet=>state.selectedPetIds.includes(pet.id))
  const selectedService = services.find(service=>service.id===state.serviceId)
  const hasAllergy = selectedPets.some(pet=>pet.notes.toLocaleLowerCase('vi').includes('dị ứng'))
  const conflict = hasAllergy && state.serviceId!=='hypo' && !state.hypoOverride
  const clock = new Intl.DateTimeFormat('vi-VN',{hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(now)

  function syncTrackingRoute(next:ScreenId){const step=processScreenSteps[next];if(!step)return;setState(current=>{const petId=current.selectedPetIds[0]??current.primaryPetId??'bo';const pet=current.pets.find(item=>item.id===petId)??current.pets[0];const serviceId=current.serviceId||(pet?.id==='miu'?'standard':'hypo');const preview:Booking={id:'active-preview',petIds:[pet?.id??'bo'],serviceId,date:current.day||'Hôm nay',slot:current.slot||'08:30 - 09:30',requests:pet?.tags??[],status:step};const active=current.activeBooking?{...current.activeBooking,status:step}:preview;return {...current,hasBooking:true,trackingStep:step,activeBooking:active}})}
  function replaceScreen(next:ScreenId){syncTrackingRoute(next);setDialog(null);setScreen(next);window.history.replaceState(null,'',`#${next}`);window.scrollTo({top:0})}
  function navigate(next:ScreenId){syncTrackingRoute(next);if(next===screen)return;navigationStack.current.push(screen);setDialog(null);setScreen(next);window.history.pushState(null,'',`#${next}`);window.scrollTo({top:0})}
  function goBack(fallback:ScreenId='home'){replaceScreen(navigationStack.current.pop()??fallback)}
  function loadingTo(next:ScreenId){loadingTarget.current=next;navigate('loading');window.setTimeout(()=>replaceScreen(loadingTarget.current),420)}
  function tracking(step:TrackingStep){setState(current=>({...current,hasBooking:true,trackingStep:step,activeBooking:current.activeBooking?{...current.activeBooking,status:step}:current.activeBooking}));navigate(`tracking${step}` as ScreenId)}
  function togglePet(id:string){setState(current=>({...current,selectedPetIds:current.selectedPetIds.includes(id)?current.selectedPetIds.filter(petId=>petId!==id):[...current.selectedPetIds,id],hypoOverride:false}))}
  function selectPrimary(id:string){setState(current=>({...current,primaryPetId:id,selectedPetIds:[id],hypoOverride:false}));setToast(`Đã chọn ${state.pets.find(p=>p.id===id)?.name} làm hồ sơ chính.`)}
  function selectMatrixPet(id:string){const pet=state.pets.find(item=>item.id===id);setState(current=>({...current,primaryPetId:id,selectedPetIds:[id],serviceId:id==='miu'?'':current.serviceId,day:'Hôm nay',slot:'',hypoOverride:false}));setDialog(null);setToast(`Đang xem ma trận thời gian của ${pet?.name??'thú cưng'}.`)}
  function chooseService(id:Service['id']){setState(current=>({...current,serviceId:id,hypoOverride:false}))}
  function continueService(){if(!state.selectedPetIds.length){setToast('Hãy chọn ít nhất một thú cưng.');return setDialog('pet-picker')}if(!state.serviceId)return setToast('Hãy chọn một dịch vụ.');if(conflict)return navigate('error');setState(current=>({...current,day:'',slot:''}));loadingTo('timeslot')}
  function continueSlot(){if(!state.day||!state.slot)return setToast('Hãy tự chọn ngày và khung giờ còn trống.');navigate(state.selectedPetIds.length>1?'multiPet':'confirmation')}
  function confirmBooking(next?:ScreenId){if(!state.serviceId||!state.day||!state.slot)return setToast('Booking chưa đủ thông tin.');const target=typeof next==='string'?next:'success';const productRequests=selectedPets.map(pet=>state.preferredProducts[pet.id]).filter((value):value is string=>Boolean(value)).map(product=>`Sản phẩm ưu tiên: ${product}`);const safetyRequests=selectedPets.flatMap(pet=>pet.id==='miu'&&!state.autoLinkSafety?[]:pet.tags);const booking:Booking={id:`booking-${Date.now()}`,petIds:[...state.selectedPetIds],serviceId:state.serviceId,date:state.day,slot:state.slot,requests:[...safetyRequests,...productRequests],status:1};setState(current=>({...current,hasBooking:true,trackingStep:1,activeBooking:booking}));navigate(target)}
  function openPetForm(pet?:Pet){setEditingPetId(pet?.id??null);setPetDraft(pet?{name:pet.name,species:pet.species,age:pet.age,weight:pet.weight,notes:pet.notes}:blankPet);setDialog('pet-form')}
  function savePet(event:FormEvent){event.preventDefault();if(!petDraft.name.trim()||!petDraft.species.trim())return setToast('Hãy nhập tên và loại/giống.');if(editingPetId)setState(current=>({...current,pets:current.pets.map(p=>p.id===editingPetId?{...p,...petDraft,tags:petDraft.notes?[petDraft.notes]:[]}:p)}));else{const pet:Pet={id:`pet-${Date.now()}`,...petDraft,tags:petDraft.notes?[petDraft.notes]:[]};setState(current=>({...current,pets:[...current.pets,pet],primaryPetId:pet.id,selectedPetIds:[pet.id]}))}setDialog(null);setToast(editingPetId?'Đã cập nhật hồ sơ.':'Đã thêm thú cưng mới.')}
  function bookPet(id:string){setState(current=>({...current,primaryPetId:id,selectedPetIds:[id],serviceId:id==='miu'?'':current.serviceId,day:'',slot:'',hypoOverride:false}));navigate('miuTimeMatrix')}
  function rebook(item?:HistoryItem){const explicit=item&&typeof item==='object'&&'petId' in item?item:undefined;const latest=explicit??state.history.find(entry=>state.historyFilter==='all'||entry.petId===state.historyFilter)??state.history[0]??seedHistory[0];setState(current=>({...current,selectedPetIds:[latest.petId],serviceId:latest.serviceId,day:'',slot:'',hypoOverride:latest.serviceId==='hypo'}));navigate('rebook')}
  function finishReview(){
    const booking=state.activeBooking
    if(booking){
      const service=services.find(item=>item.id===booking.serviceId)!
      const completed=booking.petIds.map((petId,index):HistoryItem=>({id:`${booking.id}-${petId}-${index}`,petId,serviceId:booking.serviceId,dateLabel:'Lượt chăm sóc vừa hoàn tất',staff:'KTV phụ trách',note:'Đã hoàn tất theo dặn dò được tự động đính kèm.',product:service.name,price:service.price}))
      setState(current=>({...current,history:[...completed,...current.history],activeBooking:null,hasBooking:false,trackingStep:1}))
    }
    setToast('Đã lưu đánh giá và lượt chăm sóc vào lịch sử.');navigate('history')
  }
  function saveInstruction(event:FormEvent){event.preventDefault();const content=instructionDraft.trim();if(!content)return setToast('Hãy nhập nội dung dặn dò trước khi gửi.');const bookingId=state.activeBooking?.id??'active-session';setState(current=>({...current,careInstructions:{...current.careInstructions,[bookingId]:[...(current.careInstructions[bookingId]??[]),content]}}));setInstructionDraft('');setDialog(null);setToast('Đã gửi thêm dặn dò vào ca đang chăm sóc.')}

  const hotspots = getHotspots(screen,{state,setState,navigate,goBack,loadingTo,tracking,togglePet,selectPrimary,chooseService,continueService,continueSlot,confirmBooking,finishReview,setDialog,setDetailPetId,openPetForm,bookPet,rebook,setToast})
  return <main className="product-stage" aria-label="PetCare Pro">
    <section className="wireframe-shell" aria-label={screenNames[screen]}>
      <div className="wireframe-canvas">
        <img className="wireframe-image" src={screenAssets[screen]} alt={`Giao diện gốc: ${screenNames[screen]}`} draggable="false"/>
        <time className={`system-clock ${screen==='rebook'?'system-clock--light':''}`} dateTime={now.toISOString()} aria-label={`Giờ hệ thống ${clock}`} data-testid="system-clock">{clock}</time>
        {hotspots.map((spot,index)=><button key={`${spot.label}-${index}`} type="button" aria-label={spot.label} aria-pressed={spot.selected===undefined?undefined:spot.selected} disabled={spot.disabled} data-testid={spot.testId} className={`hotspot ${spot.selected?'is-selected ':''}${spot.className??''}`} style={{left:`${spot.x/4.3}%`,top:`${spot.y/9.32}%`,width:`${spot.w/4.3}%`,height:`${spot.h/9.32}%`}} onClick={spot.action}>{spot.visualLabel}</button>) }
        {screen==='service'&&<ServiceLayer state={state} pets={selectedPets} choose={chooseService} openPets={()=>setDialog('pet-picker')}/>} 
        {screen==='home'&&<HomeBookingLayer state={state} navigate={navigate} tracking={tracking}/>} 
        {screen==='timeslot'&&<TimeslotLayer state={state} setState={setState} now={now}/>} 
        {screen==='miuTimeMatrix'&&<MiuTimeMatrixLayer state={state} setState={setState} openPetPicker={()=>setDialog('matrix-pet-picker')}/>} 
        {screen==='miuSlotSelected'&&<MiuSlotSelectionLayer state={state}/>} 
        {screen==='miuService'&&<MiuServiceLayer state={state} choose={chooseService}/>} 
        {(screen==='miuReview'||screen==='miuSuccess')&&<MiuFlowSummary screen={screen} state={state}/>} 
        {screen==='review'&&<ReviewLayer state={state} setState={setState}/>} 
        {screen==='tracking1'&&<button type="button" className="tracking-instruction-button" aria-label="Gửi thêm dặn dò" data-testid="tracking-instruction-button" onClick={()=>setDialog('instruction')}>GỬI THÊM DẶN DÒ ›</button>}
        {screen==='profiles'&&<ProfileLayer state={state} select={selectPrimary} navigate={navigate} openMatrix={()=>bookPet(state.primaryPetId)}/>} 
        {screen==='medical'&&<MedicalProfileLayer state={state}/>} 
        {(screen==='confirmation'||screen==='multiPet'||screen==='success')&&<BookingSummaryLayer state={state} compact={screen==='success'}/>} 
        {(screen==='appointmentCheckin'||screen==='checkin')&&<QrBookingLayer screen={screen} state={state}/>} 
        {(screen==='medicalAlert'||screen==='careProtocol'||screen==='safetyLocked'||screen==='handover')&&getQrBookingContext(state).pet.id!=='bo'&&<IntakeFlowLayer screen={screen} state={state}/>} 
        {processStepperScreens.has(screen)&&<ProcessStepper step={state.trackingStep} tracking={tracking}/>} 
        {(screen==='tracking1'||screen==='tracking2'||screen==='tracking3'||screen==='tracking4')&&<TrackingLayer state={state}/>} 
        {screen==='notifications'&&<NotificationLayer state={state} setState={setState} navigate={navigate} tracking={tracking}/>} 
        {screen==='history'&&<HistoryLayer state={state} setState={setState} navigate={navigate} rebook={rebook}/>} 
        {screen==='rebook'&&<RebookLayer state={state} setState={setState} confirm={confirmBooking}/>} 
        {screen==='budget'&&state.financialPlan&&<div className="saved-plan-badge" role="status">Kế hoạch đã lưu: hạn mức {money(state.financialPlan.monthlyLimit)} · Nhắc lịch đang bật</div>}
        {toast&&<div className="toast" role="status">{toast}</div>}
        {dialog&&<Dialog id={dialog} state={state} detailPetId={detailPetId} setDetailPetId={setDetailPetId} draft={petDraft} setDraft={setPetDraft} savePet={savePet} instructionDraft={instructionDraft} setInstructionDraft={setInstructionDraft} saveInstruction={saveInstruction} togglePet={togglePet} selectMatrixPet={selectMatrixPet} close={()=>setDialog(null)} openEdit={openPetForm} bookPet={bookPet} setState={setState}/>} 
      </div>
    </section>
  </main>
}

type Actions = {
  state:AppState; setState:React.Dispatch<React.SetStateAction<AppState>>; navigate:(id:ScreenId)=>void; goBack:(fallback?:ScreenId)=>void; loadingTo:(id:ScreenId)=>void; tracking:(step:TrackingStep)=>void; togglePet:(id:string)=>void; selectPrimary:(id:string)=>void; chooseService:(id:Service['id'])=>void; continueService:()=>void; continueSlot:()=>void; confirmBooking:(next?:ScreenId)=>void; finishReview:()=>void; setDialog:(id:DialogId)=>void; setDetailPetId:(id:string)=>void; openPetForm:(pet?:Pet)=>void; bookPet:(id:string)=>void; rebook:(item?:HistoryItem)=>void; setToast:(text:string)=>void
}
const spot=(label:string,x:number,y:number,w:number,h:number,action:()=>void,extra:Partial<Hotspot>={}):Hotspot=>({label,x,y,w,h,action,...extra})
const back=(fallback:ScreenId,a:Actions)=>spot('Quay lại',18,54,52,54,()=>a.goBack(fallback))
const bottom=(a:Actions):Hotspot[]=>[
  spot('Trang chủ',0,812,108,96,()=>a.navigate('home')),spot('Đặt lịch',108,812,107,96,()=>a.navigate('service')),
  spot('Tiến độ',215,812,108,96,()=>a.state.hasBooking?a.tracking(a.state.trackingStep):a.navigate('empty')),
  spot('Hồ sơ',323,812,107,96,()=>a.navigate('profiles')),
]

function getHotspots(screen:ScreenId,a:Actions):Hotspot[]{
  const withBottom=(items:Hotspot[])=>[...items,...bottom(a)]
  const prototypeBottom=(items:Hotspot[])=>[...items,spot('Trang chủ',0,852,108,70,()=>a.navigate('home')),spot('Đặt lịch',108,852,107,70,()=>a.navigate('service')),spot('Tiến độ',215,852,108,70,()=>a.state.hasBooking?a.tracking(a.state.trackingStep):a.navigate('empty')),spot('Hồ sơ',323,852,107,70,()=>a.navigate('profiles'))]
  const toggleSetting=(key:NotificationKey)=>a.setState(current=>({...current,notificationSettings:{...current.notificationSettings,[key]:!current.notificationSettings[key]}}))
  const chooseMatrixSlot=(slot:string)=>a.setState(current=>({...current,day:'Hôm nay',slot}))
  const applyHypo=()=>{a.setState(c=>({...c,serviceId:'hypo',hypoOverride:true}));a.loadingTo('timeslot')}
  const bringOwnProduct=()=>{a.setState(c=>({...c,hypoOverride:true}));a.setToast('Đã ghi nhận mang dầu tắm riêng và đính kèm vào lịch.');a.loadingTo('timeslot')}
  switch(screen){
    case'home':return withBottom([
      spot('Mở thông báo',344,54,64,52,()=>a.navigate('notifications')),
      spot('Xem ca đang chăm sóc',20,112,390,136,()=>a.tracking(2)),
      spot('Đặt lịch chăm sóc',20,284,188,88,()=>a.navigate('service')),
      spot('Đặt lại nhanh',222,284,188,88,()=>a.rebook()),
      spot('Xem hồ sơ y tế của Bơ',20,408,188,114,()=>a.navigate('medical')),
      spot('Xem hồ sơ của Miu',222,408,188,114,()=>a.navigate('profiles')),
      spot('Chọn gói Hypo',20,558,390,74,()=>{a.chooseService('hypo');a.navigate('service')}),
      spot('Chọn gói phòng cách ly',20,642,390,74,()=>{a.chooseService('standard');a.navigate('service')}),
      spot('Đặt lịch hẹn',20,736,390,58,()=>a.navigate('service'),{className:'home-booking-cta',visualLabel:'+ ĐẶT LỊCH HẸN'}),
    ])
    case'notifications':return withBottom([back('home',a),spot('Đánh dấu đã đọc tất cả',286,58,124,44,()=>{a.setState(c=>({...c,notificationsRead:true}));a.setToast('Đã đánh dấu tất cả là đã đọc.')})])
    case'notificationSettings':return withBottom([back('notifications',a),
      spot('Thông báo đẩy ứng dụng',334,152,60,52,()=>toggleSetting('push'),{selected:a.state.notificationSettings.push,className:'toggle'}),
      spot('Tin nhắn SMS hoặc Zalo',334,224,60,52,()=>toggleSetting('sms'),{selected:a.state.notificationSettings.sms,className:'toggle'}),
      spot('Mốc 1: Đã tiếp nhận tại quầy',334,330,60,52,()=>toggleSetting('milestone1'),{selected:a.state.notificationSettings.milestone1,className:'toggle'}),
      spot('Mốc 2: Bắt đầu chăm sóc hoặc tắm',334,400,60,52,()=>toggleSetting('milestone2'),{selected:a.state.notificationSettings.milestone2,className:'toggle'}),
      spot('Mốc 3: Hoàn tất dịch vụ chính',334,468,60,52,()=>toggleSetting('milestone3'),{selected:a.state.notificationSettings.milestone3,className:'toggle'}),
      spot('Mốc 4: Sẵn sàng đón thú cưng',334,536,60,52,()=>toggleSetting('milestone4'),{selected:a.state.notificationSettings.milestone4,className:'toggle'}),
      spot('Giờ yên tĩnh',334,638,60,52,()=>toggleSetting('quiet'),{selected:a.state.notificationSettings.quiet,className:'toggle'}),
      spot('Lưu cấu hình thông báo',20,736,390,58,()=>{a.setToast('Đã lưu cài đặt trên thiết bị.');a.navigate('notifications')})])
    case'service':return withBottom([back('home',a),spot('Tiếp tục chọn khung giờ',20,736,390,58,a.continueService)])
    case'timeslot':{const hasMiu=a.state.selectedPetIds.includes('miu');return withBottom([
      back('service',a),
      spot(hasMiu?'Bỏ Miu khỏi lịch hẹn':'Thêm Miu vào lịch hẹn',20,660,390,56,()=>{a.setState(c=>({...c,selectedPetIds:hasMiu?c.selectedPetIds.filter(id=>id!=='miu'):[...new Set([...c.selectedPetIds,'miu'])]}));a.setToast(hasMiu?'Đã bỏ Miu khỏi lịch hẹn.':'Đã thêm Miu cùng khung giờ.')}),
      spot('Tiếp tục xác nhận lịch hẹn',20,736,390,58,a.continueSlot)
    ])}
    case'multiPet':return withBottom([back('timeslot',a),spot('Xác nhận đặt lịch nhiều thú cưng',20,736,390,58,a.confirmBooking)])
    case'confirmation':return withBottom([back('timeslot',a),spot('Xác nhận và khóa lịch ngay',20,736,390,58,a.confirmBooking)])
    case'success':return withBottom([back('confirmation',a),spot('Mở mã QR check-in',20,550,188,74,()=>a.navigate('appointmentCheckin')),spot('Theo dõi tiến độ',222,550,188,74,()=>a.tracking(1)),spot('Xem vé hẹn và theo dõi live',20,736,390,56,()=>a.tracking(1))])
    case'error':return withBottom([back('service',a),spot('Tự động đổi sang dầu tắm Hypo',36,416,358,52,applyHypo),spot('Chọn tự mang dầu tắm riêng',20,534,390,74,bringOwnProduct),spot('Gọi Hotline Da Liễu',20,620,390,92,()=>{window.open('tel:02838229999','_self');a.setToast('Đang mở cuộc gọi Hotline Da Liễu.')}),spot('Áp dụng dầu Hypo và tiếp tục đặt lịch',20,736,390,56,applyHypo)])
    case'loading':return withBottom([])
    case'empty':return withBottom([back('home',a),spot('Đặt lịch chăm sóc ngay',65,420,300,48,()=>a.navigate('service')),spot('Đặt lại gói chăm sóc gần nhất',20,546,390,88,()=>a.rebook()),spot('Cài đặt tự động nhắc lịch',20,648,390,66,()=>a.navigate('notificationSettings')),spot('Xem lưới giờ trống hôm nay',20,736,390,56,()=>{a.setState(c=>({...c,day:'Hôm nay',slot:''}));a.loadingTo('timeslot')})])
    case'networkError':return withBottom([back('checkin',a),
      spot('Thử kết nối lại ngay',65,412,300,48,()=>a.loadingTo('checkin')),
      spot('Mở mã QR Offline',20,524,390,106,()=>{a.setToast('Đã mở mã QR Check-in #BK-8820 từ dữ liệu offline.');a.navigate('appointmentCheckin')}),
      spot('Gọi tiệm qua kênh hỗ trợ khẩn cấp',20,642,390,74,()=>{window.open('tel:02838229999','_self');a.setToast('Đang mở cuộc gọi đến PetCare.')}),
      spot('Tải lại trang',20,736,390,56,()=>a.loadingTo('checkin'))
    ])
    case'profiles':return withBottom([back('home',a),spot('Chi tiết y tế Bơ',20,238,140,52,()=>{a.selectPrimary('bo');a.navigate('medical')}),spot('Sổ tiêm chủng Bơ',160,238,130,52,()=>a.navigate('vaccination')),spot('Đặt lịch cho Bơ',290,238,120,52,()=>a.bookPet('bo')),spot('Chi tiết y tế Miu',20,432,140,52,()=>{a.selectPrimary('miu');a.navigate('medical')}),spot('Sổ tiêm chủng Miu',160,432,130,52,()=>a.navigate('vaccination')),spot('Đặt lịch cho Miu',290,432,120,52,()=>a.bookPet('miu')),spot('Thêm hồ sơ thú cưng mới',20,512,390,88,()=>a.openPetForm()),spot('Thêm thú cưng mới từ nút chính',20,736,390,56,()=>a.openPetForm())])
    case'medical':return withBottom([back('profiles',a),spot('Sửa hồ sơ dị ứng',20,694,188,54,()=>a.openPetForm(a.state.pets.find(p=>p.id===a.state.primaryPetId))),spot('Đặt lịch ngay',220,694,190,54,()=>a.bookPet(a.state.primaryPetId))])
    case'vaccination':return withBottom([back('profiles',a),spot('Cập nhật sổ tiêm chủng',20,736,390,58,()=>a.setToast('Đã lưu cập nhật sổ tiêm chủng local.'))])
    case'miuTimeMatrix':return prototypeBottom([
      back('profiles',a),
      spot('Tiếp tục với khung giờ đã chọn',20,776,390,56,()=>a.state.slot?a.navigate('miuSlotSelected'):a.setToast('Hãy chọn một khung giờ còn trống cho thú cưng.'),{className:'miu-slot-continue',visualLabel:a.state.slot?`Tiếp tục với ${a.state.slot.slice(0,5)}`:'Chọn khung giờ để tiếp tục'})
    ])
    case'miuSlotSelected':return prototypeBottom([
      back('miuTimeMatrix',a),
      spot('09:00 đã kín chỗ',20,304,90,46,()=>undefined,{disabled:true,className:'miu-mini-slot',visualLabel:'09:00 · Kín chỗ'}),
      spot('Đổi sang khung giờ 10:30',118,304,90,46,()=>chooseMatrixSlot('10:30 - 12:00'),{selected:a.state.slot==='10:30 - 12:00',className:'miu-mini-slot',visualLabel:'10:30'}),
      spot('Đổi sang khung giờ 13:30',216,304,94,46,()=>chooseMatrixSlot('13:30 - 15:00'),{selected:a.state.slot==='13:30 - 15:00',className:'miu-mini-slot',visualLabel:'13:30'}),
      spot('Đổi sang khung giờ 15:30',318,304,92,46,()=>chooseMatrixSlot('15:30 - 17:00'),{selected:a.state.slot==='15:30 - 17:00',className:'miu-mini-slot',visualLabel:'15:30'}),
      spot('Tiếp tục chọn dịch vụ cho thú cưng',20,776,390,56,()=>a.state.slot?a.navigate(a.state.primaryPetId==='miu'?'miuService':'service'):a.setToast('Hãy chọn khung giờ cho thú cưng trước khi tiếp tục.'))
    ])
    case'miuService':return prototypeBottom([back('miuSlotSelected',a),spot('Kiểm tra đặt lịch cho Miu',20,776,390,56,()=>a.state.serviceId==='standard'||a.state.serviceId==='combo'?a.navigate('miuReview'):a.setToast('Hãy chọn một gói dịch vụ cho Miu.'))])
    case'miuReview':return prototypeBottom([back('miuService',a),spot('Xác nhận và khóa lịch cho Miu',20,776,390,56,()=>a.confirmBooking('miuSuccess'))])
    case'miuSuccess':return prototypeBottom([back('miuReview',a),spot('Mở phiếu tiếp nhận của Miu',20,776,390,56,()=>a.navigate('appointmentCheckin'))])
    case'appointmentCheckin':return prototypeBottom([back('success',a),spot('Mở mã QR tiếp nhận',20,776,390,56,()=>a.navigate('checkin'))])
    case'checkin':return prototypeBottom([back('appointmentCheckin',a),spot('Nhân viên đã quét mã',20,776,390,56,()=>a.navigate('medicalAlert'))])
    case'medicalAlert':return prototypeBottom([back('checkin',a),spot('Đối chiếu phương án',20,776,390,56,()=>a.navigate('careProtocol'))])
    case'careProtocol':return prototypeBottom([back('medicalAlert',a),spot('Khóa lưu ý vào ca',20,776,390,56,()=>{a.setState(c=>c.activeBooking?{...c,safetyLocks:{...c.safetyLocks,[c.activeBooking.id]:[...c.activeBooking.requests]}}:c);a.navigate('safetyLocked')})])
    case'safetyLocked':return prototypeBottom([back('careProtocol',a),spot('Hoàn tất tiếp nhận',20,776,390,56,()=>a.navigate('handover'))])
    case'intake':return withBottom([back('checkin',a),spot('Xem Chứng Thư Cam Kết An Toàn và Giao Ca',20,612,390,66,()=>a.navigate('handover')),spot('Theo dõi tiến độ live',20,736,390,58,()=>a.tracking(1))])
    case'handover':return prototypeBottom([back('safetyLocked',a),spot('Bật thông báo đẩy',20,776,390,56,()=>{a.setState(c=>({...c,notificationSettings:{...c.notificationSettings,push:true,progress:true}}));a.setToast('Đã bật thông báo đẩy cho tiến độ chăm sóc.')} )])
    case'tracking1':return withBottom([back('home',a),spot('Xem chữ ký KTV và hình ảnh tiếp nhận',20,476,390,96,()=>a.navigate('handover'))])
    case'tracking2':return withBottom([back('tracking1',a),spot('Theo dõi song song',20,586,390,136,()=>a.navigate('parallelTracking')),spot('Xem camera trực tiếp phòng Spa',20,736,390,58,()=>a.navigate('camera'))])
    case'tracking3':return withBottom([back('tracking2',a),spot('Lấy mã QR đón bé xuất viện',20,736,390,58,()=>a.navigate('discharge'))])
    case'pushReady':return prototypeBottom([back('tracking3',a),spot('Mở thông tin phòng chờ đón bé',18,58,394,136,()=>a.tracking(4)),spot('Sang đón bé ngay',20,776,390,56,()=>a.tracking(4))])
    case'tracking4':return withBottom([back('tracking3',a),spot('Mở mã QR đối soát xuất viện',20,476,390,114,()=>a.navigate('discharge')),spot('Xuất mã QR đón bé ngay',20,736,390,58,()=>a.navigate('discharge'))])
    case'parallelTracking':return withBottom([back('tracking2',a),spot('Xem chi tiết tiến độ của Bơ',286,292,108,52,()=>a.tracking(2)),spot('Xem chi tiết tiến độ của Miu',286,556,108,52,()=>a.tracking(2)),spot('Xem camera phòng cách ly A-02',20,622,390,58,()=>a.navigate('camera')),spot('Đồng bộ giờ đón',20,690,390,52,()=>a.setToast('Đã lưu lựa chọn đồng bộ giờ đón local.'))])
    case'camera':return withBottom([back('tracking2',a),spot('Nhắn tin trực tiếp cho KTV Tuấn Minh',20,674,390,48,()=>a.setToast('Đã gửi tin nhắn cho KTV Tuấn Minh tại buồng A-02.')),spot('Quay lại tiến độ',20,736,390,58,()=>a.tracking(2))])
    case'discharge':return withBottom([back('tracking4',a),spot('Xem ảnh đối chiếu trước và sau dịch vụ',20,604,390,72,()=>a.navigate('inspection')),spot('Hoàn tất đón bé và đánh giá',20,736,390,58,()=>a.navigate('inspection'))])
    case'inspection':return withBottom([back('discharge',a),spot('Phóng to ảnh trước và sau để kiểm tra da',20,124,390,238,()=>a.setToast('Đã mở chế độ đối chiếu ảnh trước và sau ở kích thước lớn.')),spot('Đánh giá và hoàn tất dịch vụ',20,736,390,58,()=>a.navigate('review'))])
    case'review':return withBottom([back('inspection',a),spot('Gửi đánh giá và lưu hồ sơ',20,736,390,58,a.finishReview)])
    case'history':return withBottom([back('home',a)])
    case'session':return withBottom([back('history',a),spot('Xem sản phẩm đã sử dụng',20,314,390,136,()=>a.navigate('productVerified'),{testId:'session-product-card-link'}),spot('Tải hóa đơn PDF',20,616,390,52,()=>a.setToast('Đã chuẩn bị hóa đơn VAT #INV-9921 dạng PDF.')),spot('Đặt lại gói dịch vụ này',20,736,390,58,()=>a.rebook())])
    case'productVerified':return prototypeBottom([back('session',a),spot('Mở ghi chú da của KTV',20,516,390,114,()=>a.navigate('technicianNotes')),spot('Xem ghi chú da của KTV',20,776,390,56,()=>a.navigate('technicianNotes'))])
    case'technicianNotes':return prototypeBottom([back('productVerified',a),spot('Lưu sản phẩm cho lần tới',20,776,390,56,()=>{const entry=a.state.history.find(item=>item.petId==='bo');if(entry)a.setState(c=>({...c,preferredProducts:{...c.preferredProducts,[entry.petId]:entry.product}}));a.navigate('productSaved')})])
    case'productSaved':return prototypeBottom([back('technicianNotes',a),spot('Đặt lịch hẹn đợt tới',20,776,390,56,()=>a.rebook())])
    case'costBreakdown':return prototypeBottom([back('history',a),spot('Xem hóa đơn điện tử',20,776,390,56,()=>a.navigate('invoice'))])
    case'rebook':return [spot('Đóng đặt lại',374,268,36,36,()=>a.navigate('history')),spot('Chọn ngày và khung giờ khác',20,656,390,42,()=>{a.setState(c=>({...c,day:'',slot:''}));a.loadingTo('timeslot')}),spot('Hủy thao tác đặt lại',20,828,390,44,()=>a.navigate('history'))]
    case'budget':return withBottom([back('history',a),spot('Xuất báo cáo chi tiêu PDF hoặc Excel',20,646,390,68,()=>a.setToast('Đã chuẩn bị báo cáo chi tiêu tháng để xuất file.')),spot('Điều chỉnh hạn mức ngân sách',20,736,390,56,()=>a.setDialog('budget'))])
    case'invoice':return withBottom([back('history',a),spot('Tải hóa đơn PDF',20,612,188,54,()=>a.setToast('Đã chuẩn bị bản PDF mô phỏng.')),spot('Gửi hóa đơn qua email',222,612,188,54,()=>a.setToast('Đã ghi nhận yêu cầu gửi email mô phỏng.')),spot('Xem tổng chi tiêu tháng',20,680,390,42,()=>a.navigate('monthlySummary')),spot('Quay về trang chủ',20,736,390,56,()=>a.navigate('home'))])
    case'monthlySummary':return prototypeBottom([back('budget',a),spot('Lập kế hoạch tháng tới',20,776,390,56,()=>a.navigate('budgetPlan'))])
    case'budgetPlan':return prototypeBottom([back('monthlySummary',a),spot('Lưu kế hoạch tài chính',20,776,390,56,()=>{a.setState(c=>({...c,financialPlan:{monthlyLimit:c.budget,reminderEnabled:true}}));a.setToast('Đã lưu kế hoạch tài chính trên thiết bị.');a.navigate('budget')})])
  }
}

function ServiceLayer({state,pets,choose,openPets}:{state:AppState;pets:Pet[];choose:(id:Service['id'])=>void;openPets:()=>void}){
  const hasBo=pets.some(pet=>pet.id==='bo')
  const preferred=pets.length===1?state.preferredProducts[pets[0].id]:''
  const baseAdvisory=pets.length===0?'Chọn thú cưng để tự động đính kèm dặn dò':pets.length>1?'Dặn dò riêng của từng bé sẽ được đính kèm tự động':pets[0].id==='bo'?'Miễn phí đổi dầu tắm Hypo theo hồ sơ dị ứng':pets[0].id==='miu'?'Miu cần buồng riêng và thao tác nhẹ nhàng':`Dặn dò của ${pets[0].name} sẽ được đính kèm tự động`
  const advisory=preferred?`${baseAdvisory} · Ưu tiên: ${preferred}`:baseAdvisory
  return <div className="service-layer">
    <button className="pet-summary" type="button" onClick={openPets} aria-label="Chọn hoặc đổi thú cưng"><span className="avatar">{pets.length===1?pets[0].name.toLocaleUpperCase('vi').slice(0,3):pets.length||'+'}</span><span><strong>{pets.length===1?`${pets[0].species} ${pets[0].name} (${pets[0].weight})`:pets.length>1?pets.map(p=>p.name).join(' + '):'Chưa chọn thú cưng'}</strong><small>{pets.length===1?pets[0].notes:pets.length>1?'Dặn dò của từng bé được tự động đính kèm':'Chọn ít nhất một bé để tiếp tục'}</small></span><b>Đổi bé ›</b></button>
    <div className="dynamic-services">{services.map(service=><button key={service.id} type="button" aria-label={`Chọn ${service.name}`} aria-pressed={state.serviceId===service.id} className={state.serviceId===service.id?'selected':''} onClick={()=>choose(service.id)}><span className="radio">{state.serviceId===service.id?'✓':''}</span><span className="service-text"><span className="service-heading"><strong>{service.name}</strong>{service.badge&&hasBo&&<em>[PHÙ HỢP DA BƠ]</em>}</span>{service.description.map(text=><small key={text}>• {text}</small>)}<span className="service-footer"><small>Thời lượng: {service.duration} phút</small><strong>{new Intl.NumberFormat('vi-VN').format(service.price)}đ</strong></span></span></button>)}</div>
    <div className={`service-advisory ${hasBo?'allergy':''}`} data-testid="service-advisory">! {advisory}</div>
  </div>
}

function TimeslotLayer({state,setState,now}:{state:AppState;setState:React.Dispatch<React.SetStateAction<AppState>>;now:Date}){
  const dayValues=['Hôm nay','Ngày mai','Ngày kia','Sau 3 ngày','Sau 4 ngày']
  const days=dayValues.map((value,index)=>{const date=new Date(now);date.setDate(now.getDate()+index);const weekday=new Intl.DateTimeFormat('vi-VN',{weekday:'short'}).format(date).replace('.','');return {value,label:index===0?'H.Nay':index===1?'Mai':index===2?'Kia':weekday,date:String(date.getDate()).padStart(2,'0'),weekday}})
  const slots=[
    {value:'08:30 - 09:30',availability:'Khuyên dùng'},
    {value:'09:30 - 10:30',availability:'Còn 2 chỗ'},
    {value:'10:30 - 11:30',availability:'Hết chỗ',disabled:true},
    {value:'14:00 - 15:00',availability:'Còn 3 chỗ'},
    {value:'15:30 - 16:30',availability:'Còn 1 chỗ'},
    {value:'17:00 - 18:00',availability:'Hết chỗ',disabled:true},
  ]
  return <div className="timeslot-runtime">
    <div className="timeslot-days" aria-label="Chọn ngày hẹn">{days.map(day=>{const selected=state.day===day.value;return <button key={day.value} type="button" aria-label={`Chọn ${day.value}`} aria-pressed={selected} className={selected?'selected':''} onClick={()=>setState(c=>({...c,day:day.value,slot:''}))}><span>{day.label}</span><strong>{day.date}</strong><small>{day.weekday}</small></button>})}</div>
    <div className="timeslot-slots" aria-label="Chọn khung giờ">{slots.map(slot=>{const selected=state.slot===slot.value;return <button key={slot.value} type="button" aria-label={`${slot.disabled?'Khung giờ đã hết chỗ':'Chọn'} ${slot.value.replace(' - ',' đến ')}`} aria-pressed={slot.disabled?undefined:selected} disabled={slot.disabled} className={selected?'selected':''} onClick={()=>setState(c=>({...c,slot:slot.value}))}><strong>{slot.value}</strong><small>{selected?'Đã chọn':slot.availability}</small></button>})}</div>
    <div className="timeslot-summary" aria-live="polite"><span>{state.day||'Chưa chọn ngày'}</span><strong>{state.slot||'Chưa chọn khung giờ'}</strong><button type="button" onClick={()=>setState(c=>({...c,day:'',slot:''}))}>Chọn lại</button></div>
  </div>
}

function MiuSlotSelectionLayer({state}:{state:AppState}){
  const slot=state.slot
  const pet=state.pets.find(item=>item.id===state.primaryPetId)??state.pets[0]
  const details:Record<string,{status:string;note:string}>={
    '10:30 - 12:00':{status:'Còn 1 chỗ · Mật độ trung bình',note:'Có 3 bé đang chăm sóc; thời gian chờ dự kiến khoảng 15 phút.'},
    '13:30 - 15:00':{status:'Vắng khách · Trống 4/4 vị trí',note:`Không gian yên tĩnh; phù hợp với hồ sơ và tính cách của ${pet.name}.`},
    '15:30 - 17:00':{status:'Còn 2 chỗ · Bắt đầu đông khách',note:'Có tiếng chuông cửa và người ra vào thường xuyên.'},
  }
  const selected=details[slot]
  return <div className="miu-slot-runtime" aria-live="polite">
    <span className="miu-slot-runtime-badge">{slot?`ĐÃ CHỌN ${slot.slice(0,5)}`:'CHƯA CHỌN GIỜ'}</span>
    <section className="miu-slot-runtime-card" data-testid="miu-selected-slot">
      <strong>{slot||'Chưa chọn khung giờ'}</strong>
      <b>{selected?.status??'Hãy quay lại và chọn một khung giờ còn trống.'}</b>
      <p>{selected?.note??'Khung giờ kín chỗ không thể được chọn.'}</p>
      <small>Dặn dò trong hồ sơ của {pet.name} sẽ được tự động đính kèm.</small>
    </section>
  </div>
}

function MiuServiceLayer({state,choose}:{state:AppState;choose:(id:Service['id'])=>void}){
  const choices=[
    {id:'standard' as const,name:'Tắm vệ sinh tiêu chuẩn cho mèo',badge:'GÓI CƠ BẢN',details:['Cắt móng, vệ sinh tai, vắt tuyến hôi','Sữa tắm hữu cơ dịu nhẹ, sấy êm cách âm'],duration:45,price:180000,top:234,height:172},
    {id:'combo' as const,name:'Gói Spa & Cắt tỉa tạo kiểu',badge:'GÓI NÂNG CAO',details:['Toàn bộ quy trình tắm vệ sinh tiêu chuẩn','Tỉa gọn lông chân, bụng và bo tròn gương mặt'],duration:90,price:350000,top:418,height:136},
  ]
  return <div className="miu-service-runtime" aria-label="Chọn gói chăm sóc cho Miu">{choices.map(choice=>{const selected=state.serviceId===choice.id;return <button key={choice.id} type="button" aria-label={`Chọn ${choice.name}`} aria-pressed={selected} className={selected?'selected':''} style={{top:`${choice.top/9.32}%`,height:`${choice.height/9.32}%`}} onClick={()=>choose(choice.id)}>
    <span className="miu-service-heading"><strong>{choice.name}</strong><em>{selected?'ĐÃ CHỌN ✓':choice.badge}</em></span>
    {choice.details.map(detail=><small key={detail}>• {detail}</small>)}
    <span className="miu-service-footer"><small>Thời gian: ~{choice.duration} phút</small><strong>{money(choice.price)}</strong></span>
  </button>})}</div>
}

function MiuFlowSummary({screen,state}:{screen:'miuReview'|'miuSuccess';state:AppState}){
  const service=services.find(item=>item.id===state.serviceId)
  const slot=state.slot||'Chưa chọn khung giờ'
  return <section className={`miu-flow-summary ${screen}`} aria-live="polite" data-testid="miu-flow-summary">
    <strong>Bé Miu · {service?.name??'Chưa chọn dịch vụ'}</strong>
    <span>{state.day||'Hôm nay'} · {slot}</span>
    <b>{service?money(service.price):'Chưa có giá'}</b>
    {screen==='miuSuccess'&&<small>{state.autoLinkSafety?'Đã khóa lịch và tự động đính kèm yêu cầu phòng yên tĩnh.':'Đã khóa lịch; liên kết dặn dò tự động đang tắt.'}</small>}
  </section>
}

function ReviewLayer({state,setState}:{state:AppState;setState:React.Dispatch<React.SetStateAction<AppState>>}){
  const tags=[
    {id:'allergy',label:'Đúng dặn dò dị ứng da',x:20,y:368,w:188},
    {id:'live',label:'Cập nhật tiến độ live chuẩn',x:222,y:368,w:188},
    {id:'staff',label:'KTV Hoàng Mai ân cần',x:20,y:414,w:188},
    {id:'coat',label:'Lông sấy rất bông đẹp',x:222,y:414,w:188},
  ]
  const toggleTag=(id:string)=>setState(current=>({...current,feedbackTags:current.feedbackTags.includes(id)?current.feedbackTags.filter(tag=>tag!==id):[...current.feedbackTags,id]}))
  return <div className="review-runtime">
    <div className="review-stars" role="group" aria-label="Chọn số sao">{[1,2,3,4,5].map(rating=><button key={rating} type="button" aria-label={`Chọn ${rating} sao`} aria-pressed={state.rating===rating} className={state.rating>=rating?'selected':''} onClick={()=>setState(current=>({...current,rating}))}>★</button>)}</div>
    {tags.map(tag=>{const selected=state.feedbackTags.includes(tag.id);return <button key={tag.id} type="button" className={`review-tag ${selected?'selected':''}`} aria-pressed={selected} onClick={()=>toggleTag(tag.id)} style={{left:`${tag.x/4.3}%`,top:`${tag.y/9.32}%`,width:`${tag.w/4.3}%`}}>{selected?'✓ ':''}{tag.label}</button>})}
    <textarea aria-label="Lời nhắn cho tiệm và kỹ thuật viên" maxLength={500} value={state.reviewComment} onChange={event=>setState(current=>({...current,reviewComment:event.target.value}))}/>
    <div className="review-tips" role="group" aria-label="Chọn tiền tip">{[20000,50000,0].map(amount=><button key={amount} type="button" aria-label={amount?`Tip ${money(amount)}`:'Không tip'} aria-pressed={state.tipAmount===amount} className={state.tipAmount===amount?'selected':''} onClick={()=>setState(current=>({...current,tipAmount:amount}))}>{amount?`${amount/1000}k`:'Không tip'}</button>)}</div>
    <button type="button" className={`review-save ${state.savePreferredStaff?'selected':''}`} aria-pressed={state.savePreferredStaff} onClick={()=>setState(current=>({...current,savePreferredStaff:!current.savePreferredStaff}))}>{state.savePreferredStaff?'✓ Đã lưu KTV Hoàng Mai làm chuyên viên ưu tiên':'Lưu KTV Hoàng Mai làm chuyên viên ưu tiên'}</button>
  </div>
}

function MiuTimeMatrixLayer({state,setState,openPetPicker}:{state:AppState;setState:React.Dispatch<React.SetStateAction<AppState>>;openPetPicker:()=>void}){
  const pet=state.pets.find(item=>item.id===state.primaryPetId)??state.pets[0]
  const petProfile=`${pet.notes} ${pet.tags.join(' ')}`.toLocaleLowerCase('vi')
  const needsQuiet=petProfile.includes('nhút')||petProfile.includes('sợ')||petProfile.includes('yên tĩnh')||petProfile.includes('cách ly')
  const recommendedSlot=needsQuiet?'13:30 - 15:00':'10:30 - 12:00'
  const slots=[
    {value:'09:00 - 10:30',period:'Sáng',status:'Kín chỗ (0/4)',description:'Đông khách, nhiều tiếng ồn máy sấy',note:'Không khuyến nghị cho thú cưng nhút nhát',top:234,height:88,disabled:true},
    {value:'10:30 - 12:00',period:'Trưa',status:recommendedSlot==='10:30 - 12:00'?'Khuyên dùng · Còn 1 chỗ':'Còn 1 chỗ (1/4)',description:'Mật độ trung bình, có 3 bé đang chăm sóc',note:recommendedSlot==='10:30 - 12:00'?`Phù hợp với hồ sơ hiện tại của ${pet.name}`:'Thời gian chờ dự kiến khoảng 15 phút',top:332,height:88,recommended:recommendedSlot==='10:30 - 12:00'},
    {value:'13:30 - 15:00',period:'Đầu giờ chiều',status:recommendedSlot==='13:30 - 15:00'?'Khuyên dùng · Vắng khách':'Vắng khách · Trống 4/4',description:'Rất yên tĩnh, không gian tách biệt',note:recommendedSlot==='13:30 - 15:00'?`Phù hợp nhất để ${pet.name} tránh căng thẳng`:'Khung giờ yên tĩnh, còn nhiều vị trí',top:430,height:106,recommended:recommendedSlot==='13:30 - 15:00'},
    {value:'15:30 - 17:00',period:'Chiều muộn',status:'Còn 2 chỗ (2/4)',description:'Bắt đầu đông khách tan ca',note:'Có tiếng chuông cửa và người ra vào thường xuyên',top:546,height:88},
  ]
  return <div className="miu-time-matrix-runtime" aria-label={`Các khung giờ dành cho ${pet.name}`}><section className="matrix-pet-card" aria-label="Thú cưng đang xem ma trận"><div><span className="matrix-pet-avatar">{pet.name.toLocaleUpperCase('vi').slice(0,3)}</span><span><strong>{pet.name}</strong><small>{pet.species} · {pet.age} · {pet.weight}</small></span></div><button type="button" className="matrix-pet-change" aria-label="Đổi thú cưng xem ma trận" onClick={openPetPicker}>Đổi bé ›</button></section>{slots.map(slot=>{const selected=state.slot===slot.value;return <button key={slot.value} type="button" disabled={slot.disabled} aria-label={slot.disabled?`${slot.value} đã kín chỗ`:slot.recommended?`Chọn khung giờ khuyên dùng ${slot.value} cho ${pet.name}`:`Chọn khung giờ ${slot.value} cho ${pet.name}`} aria-pressed={slot.disabled?undefined:selected} className={`${selected?'selected ':''}${slot.recommended?'recommended ':''}`} style={{top:`${slot.top/9.32}%`,height:`${slot.height/9.32}%`}} onClick={()=>setState(current=>({...current,selectedPetIds:[pet.id],day:'Hôm nay',slot:slot.value}))}>
    <span><strong>{slot.value} ({slot.period})</strong><em>{selected?'Đã chọn':slot.status}</em></span><b>{slot.description}</b><small>{slot.note}</small>
  </button>})}<aside className="matrix-advisory"><strong>Gợi ý dành riêng cho {pet.name}:</strong><span>{recommendedSlot.slice(0,5)} là khung phù hợp dựa trên dặn dò và đặc điểm đang lưu trong hồ sơ.</span></aside></div>
}

function ProfileLayer({state,select,navigate,openMatrix}:{state:AppState;select:(id:string)=>void;navigate:(id:ScreenId)=>void;openMatrix:()=>void}){
  return <>{state.pets.slice(0,2).map((pet,index)=>{const selected=state.primaryPetId===pet.id;const top=index===0?124:318;return <div key={pet.id} className={`profile-card-state ${selected?'selected':''}`} style={{top:`${top/9.32}%`}}><button type="button" className="profile-selector" onClick={()=>select(pet.id)} aria-label={`Chọn ${pet.name} làm thú cưng chính`} aria-pressed={selected}><span>{selected?'✓ ĐANG CHỌN':'CHỌN BÉ'}</span></button></div>})}{state.pets.length>2&&<div className="profile-count">+{state.pets.length-2} hồ sơ đã thêm</div>}<button type="button" className="profile-matrix-button" aria-label="Mở ma trận thời gian cho thú cưng đang chọn" onClick={openMatrix}>Ma trận thời gian <span aria-hidden="true">›</span></button><button type="button" className="profile-history-button" aria-label="Lịch sử & Nhật ký dịch vụ" onClick={()=>navigate('history')}>Lịch sử dịch vụ <span aria-hidden="true">›</span></button></>
}

function MedicalProfileLayer({state}:{state:AppState}){
  const pet=state.pets.find(item=>item.id===state.primaryPetId)??state.pets[0]
  const requests=pet.tags.length?pet.tags:[pet.notes].filter(Boolean)
  return <section className="medical-profile-runtime" data-testid="medical-profile-runtime" aria-live="polite">
    <header>
      <span className="medical-profile-avatar">{pet.name.toLocaleUpperCase('vi').slice(0,3)}</span>
      <span><small>HỒ SƠ ĐANG XEM</small><strong>{pet.name}</strong><em>{pet.species} · {pet.age} · {pet.weight}</em></span>
    </header>
    <article>
      <h2>Lưu ý y tế và chăm sóc</h2>
      <p>{pet.notes||'Chưa có ghi chú y tế hoặc dặn dò đặc biệt.'}</p>
      <ul>{requests.map(item=><li key={item}><span aria-hidden="true">!</span><b>{item}</b></li>)}</ul>
    </article>
    <aside>Thông tin của {pet.name} sẽ được tự động đính kèm khi đặt lịch.</aside>
    <div className="medical-profile-actions" aria-hidden="true"><span>SỬA HỒ SƠ</span><strong>ĐẶT LỊCH</strong></div>
  </section>
}

function HomeBookingLayer({state,navigate,tracking}:{state:AppState;navigate:(id:ScreenId)=>void;tracking:(step:TrackingStep)=>void}){
  const booking=state.activeBooking;const pets=booking?state.pets.filter(p=>booking.petIds.includes(p.id)):[];const service=booking?services.find(s=>s.id===booking.serviceId):null;const step=trackingSteps[state.trackingStep-1]
  return <button type="button" className={`home-booking-runtime ${booking?'active':'empty'}`} onClick={()=>booking?tracking(state.trackingStep):navigate('service')} data-testid="home-active-booking">
    <span className="avatar">{booking?pets.map(p=>p.name.slice(0,1)).join(''):'+'}</span><span><small>{booking?`MỐC ${state.trackingStep} / 4`:'LỊCH CHĂM SÓC'}</small><strong>{booking?`${pets.map(p=>`Bé ${p.name}`).join(' + ')} · ${step.title}`:'Chưa có lịch đang diễn ra'}</strong><em>{booking?`${service?.name} · ${booking.slot}`:'Chạm để đặt lịch mới'}</em></span><b>›</b>
  </button>
}

function BookingSummaryLayer({state,compact}:{state:AppState;compact?:boolean}){
  const draftBooking=state.serviceId&&state.day&&state.slot?{petIds:state.selectedPetIds,serviceId:state.serviceId,date:state.day,slot:state.slot,requests:state.pets.filter(p=>state.selectedPetIds.includes(p.id)).flatMap(p=>p.tags)}:null
  const booking=compact?state.activeBooking:draftBooking
  if(!booking)return null
  const pets=state.pets.filter(pet=>booking.petIds.includes(pet.id));const service=services.find(item=>item.id===booking.serviceId)
  if(compact)return <section className="runtime-panel booking-summary compact" data-testid="booking-runtime-summary" aria-label="Tóm tắt lịch hẹn đã xác nhận">
    <h3>{pets.map(p=>p.name).join(' + ')} · {service?.name}</h3>
    <div className="success-booking-grid"><span>Thời gian:</span><strong>{booking.date} · {booking.slot}</strong><span>Kỹ thuật viên:</span><strong>KTV Hoàng Mai</strong><span>Dặn dò:</span><strong className="success-request">{booking.requests.join(' · ')||'Không có dặn dò đặc biệt'}</strong></div>
    <footer><strong>Tổng thanh toán:</strong><b>{money((service?.price??0)*Math.max(1,pets.length))}</b></footer>
  </section>
  return <section className={`runtime-panel booking-summary ${compact?'compact':''}`} data-testid="booking-runtime-summary" aria-label="Tóm tắt lịch hẹn hiện tại">
    <span className="runtime-kicker">LỊCH HẸN ĐÃ ĐỒNG BỘ</span><h3>{pets.map(p=>p.name).join(' + ')}</h3>
    <p><strong>{service?.name}</strong></p><div className="runtime-meta"><span>{booking.date}</span><span>{booking.slot}</span><span>{money((service?.price??0)*Math.max(1,pets.length))}</span></div>
    {!compact&&booking.requests.length>0&&<small>Dặn dò tự động: {booking.requests.join(' · ')}</small>}
  </section>
}

function IntakeFlowLayer({screen,state}:{screen:'medicalAlert'|'careProtocol'|'safetyLocked'|'handover';state:AppState}){
  const {booking,pet,service,slot}=getQrBookingContext(state)
  const requests=booking?.requests.length?booking.requests:pet.tags
  const profileText=`${pet.notes} ${requests.join(' ')}`.toLocaleLowerCase('vi')
  const needsQuiet=profileText.includes('nhút')||profileText.includes('sợ')||profileText.includes('cách ly')||profileText.includes('tiếng ồn')
  const hasAllergy=profileText.includes('dị ứng')
  const protocol=needsQuiet
    ?['Bố trí không gian riêng, tránh thú cưng gây căng thẳng','Giảm tiếng ồn và thao tác tuần tự, nhẹ nhàng','Dừng chăm sóc và báo chủ nuôi nếu thú cưng hoảng sợ']
    :hasAllergy
      ?['Dùng sản phẩm Hypo không chứa hương liệu','Điều chỉnh máy sấy êm và thao tác nhẹ nhàng','Kiểm tra da trước, trong và sau khi chăm sóc']
      :['Đối chiếu đầy đủ dặn dò trong hồ sơ','Thao tác nhẹ nhàng theo tình trạng thực tế','Báo chủ nuôi nếu phát sinh dấu hiệu bất thường']
  const locked=booking?state.safetyLocks[booking.id]??requests:requests
  const content={
    medicalAlert:{pageTitle:'Đối chiếu hồ sơ',step:'BƯỚC 3 / 6',title:`Cảnh báo hồ sơ của ${pet.name}`,description:'Thông tin được lấy từ đúng hồ sơ gắn với booking đang tiếp nhận.',items:requests.length?requests:['Không có dặn dò đặc biệt'],feedback:`Đã mở đúng hồ sơ của ${pet.name}.`},
    careProtocol:{pageTitle:'Phương án chăm sóc',step:'BƯỚC 4 / 6',title:`Phương án chăm sóc cho ${pet.name}`,description:'Chủ nuôi và nhân viên đối chiếu phương án trước khi khóa cam kết.',items:protocol,feedback:'Chưa chuyển sang chăm sóc cho đến khi cam kết được khóa.'},
    safetyLocked:{pageTitle:'Cam kết an toàn',step:'BƯỚC 5 / 6',title:`Cam kết an toàn của ${pet.name}`,description:'Các dặn dò đã được khóa vào ca và dùng chung khi đổi nhân viên phụ trách.',items:locked.length?locked:protocol,feedback:'Cam kết đã lưu vào phiếu tiếp nhận.'},
    handover:{pageTitle:'Hoàn tất tiếp nhận',step:'BƯỚC 6 / 6',title:`${pet.name} đã được tiếp nhận`,description:`${service?.name??'Dịch vụ chăm sóc'} · ${slot}`,items:locked.length?locked:protocol,feedback:'Bàn giao hoàn tất. Bước tiếp theo là Live Tracking Mốc 1: Đã nhận.'},
  }[screen]
  const ctaLabel={
    medicalAlert:'ĐỐI CHIẾU PHƯƠNG ÁN',
    careProtocol:'KHÓA LƯU Ý VÀO CA',
    safetyLocked:'HOÀN TẤT TIẾP NHẬN',
    handover:'BẬT THÔNG BÁO ĐẨY',
  }[screen]
  return <section className={`intake-flow-runtime ${screen}`} data-testid="shared-intake-form" aria-live="polite">
    <h1 className="intake-flow-page-title">{content.pageTitle}</h1>
    <header><span className="intake-avatar">{pet.name.toLocaleUpperCase('vi').slice(0,3)}</span><span><small>{content.step}</small><strong>{content.title}</strong><em>{pet.species} · {pet.weight}</em></span></header>
    <article><p>{content.description}</p><ul>{content.items.map(item=><li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></article>
    <aside>{content.feedback}</aside>
    <div className="intake-flow-cta" aria-hidden="true">{ctaLabel} ›</div>
  </section>
}

function QrBookingLayer({screen,state}:{screen:'appointmentCheckin'|'checkin';state:AppState}){
  const {booking,pet,service,slot,code}=getQrBookingContext(state)
  const requests=booking?.requests.length?booking.requests:pet.tags
  const appointment=<section className="qr-appointment-card">
    <span className="qr-pet-avatar">{pet.name.toLocaleUpperCase('vi').slice(0,3)}</span>
    <span className="qr-pet-copy"><strong>Bé {pet.name} ({pet.species} · {pet.weight})</strong><small>{booking?.date||state.day||'Hôm nay'} · {slot} · {service?.name||'Dịch vụ chăm sóc'}</small><em>{pet.notes||'Không có dặn dò đặc biệt'}</em></span>
  </section>
  if(screen==='appointmentCheckin')return <div className="qr-booking-runtime appointment" data-testid="qr-booking-context" aria-live="polite">
    {appointment}
    <section className="qr-safety-card"><b>TỰ ĐỘNG ĐỒNG BỘ TỪ HỒ SƠ {pet.name.toLocaleUpperCase('vi')}</b><strong>Yêu cầu an toàn khi chăm sóc:</strong>{requests.length?requests.map(item=><span key={item}>• {item}</span>):<span>• Không có dặn dò đặc biệt</span>}<small>Thông tin của {pet.name} đã khóa vào mã QR tiếp nhận.</small></section>
    <section className="qr-pass-card"><strong>Mã Check-in tiếp nhận tại quầy</strong><b>Mã lịch hẹn: {code}</b><span>Quét mã để đối chiếu hồ sơ của bé {pet.name}</span></section>
    <p className="qr-ready-copy">Sẵn sàng bàn giao {pet.name} và đối chiếu dịch vụ</p>
  </div>
  return <div className="qr-booking-runtime checkin" data-testid="qr-booking-context" aria-live="polite">
    {appointment}
    <section className="qr-code-block" data-testid="qr-code-block"><strong>MÃ TIẾP NHẬN: {code}</strong><b>Đã tích hợp hồ sơ và dặn dò của {pet.name}</b><small>Xuất trình mã này tại quầy để nhân viên quét</small></section>
    <section className="qr-checkin-warning"><b>CẢNH BÁO ĐÍNH KÈM TRONG MÃ</b><strong>Khi quét mã, màn hình tiếp nhận sẽ tự động hiện:</strong>{requests.length?requests.slice(0,3).map(item=><span key={item}>• {item}</span>):<span>• Không có dặn dò đặc biệt</span>}<small>Nhân viên tiếp nhận sẽ xác nhận trực tiếp với chủ nuôi.</small></section>
  </div>
}

function ProcessStepper({step,tracking}:{step:TrackingStep;tracking:(step:TrackingStep)=>void}){
  return <nav className="process-stepper-shell" aria-label="Quy trình chăm sóc"><ol className="tracking-stepper" style={{'--step-progress':`${(step-1)*25}%`} as React.CSSProperties}>{trackingSteps.map((item,index)=>{const position=(index+1) as TrackingStep;const completed=position<step;const current=position===step;return <li key={item.title} className={completed?'completed':current?'current':''} aria-current={current?'step':undefined}><button type="button" className="step-marker" aria-label={`Chuyển đến Mốc ${position}: ${processStepLabels[index]}`} aria-pressed={current} onClick={()=>tracking(position)}>{completed?'✓':position}</button><small>{processStepLabels[index]}</small></li>})}</ol></nav>
}

function TrackingLayer({state}:{state:AppState}){
  const booking=state.activeBooking; if(!booking)return null
  const pets=state.pets.filter(pet=>booking.petIds.includes(pet.id));const service=services.find(item=>item.id===booking.serviceId);const step=trackingSteps[state.trackingStep-1]
  const lockedRequests=state.safetyLocks[booking.id]
  const addedInstructions=state.careInstructions[booking.id]??[]
  return <section className="runtime-panel tracking-runtime" data-testid="tracking-runtime-summary" aria-live="polite">
    <span className="runtime-kicker">MỐC {state.trackingStep} / 4</span><h3>{pets.map(p=>`Bé ${p.name}`).join(' và ')}</h3><strong>{step.title}</strong><p>{step.detail}</p>
    <small>{service?.name} · {booking.slot}</small>{booking.requests.length>0&&<small>{lockedRequests?'[DẶN DÒ ĐÃ KHÓA]':'Dặn dò:'} {(lockedRequests??booking.requests).join(' · ')}</small>}{addedInstructions.length>0&&<small className="added-instruction">Dặn dò bổ sung{addedInstructions.length>1?` (${addedInstructions.length})`:''}: {addedInstructions.at(-1)}</small>}
  </section>
}

function NotificationLayer({state,setState,navigate,tracking}:{state:AppState;setState:React.Dispatch<React.SetStateAction<AppState>>;navigate:(id:ScreenId)=>void;tracking:(step:TrackingStep)=>void}){
  const activeNames=state.activeBooking?.petIds.map(id=>state.pets.find(p=>p.id===id)?.name).filter(Boolean).join(' + ')||'Bơ'
  const items=[
    {id:'live',type:'tracking' as const,title:`Mốc ${state.trackingStep}: ${activeNames} đang được chăm sóc`,detail:'Tiến độ được đồng bộ từ lịch hẹn hiện tại.',action:'Xem trực tiếp',run:()=>tracking(state.trackingStep)},
    {id:'ready',type:'tracking' as const,title:'Bé Miu đã sẵn sàng đón',detail:'Bé đang ở buồng cách ly A-02 yên tĩnh.',action:'Lấy mã đón QR',run:()=>tracking(4)},
    {id:'safety',type:'alerts' as const,title:'Đã khóa cam kết an toàn dị ứng',detail:'Dặn dò y tế đã được đính kèm cho KTV.',action:'Xem dặn dò',run:()=>navigate('handover')},
    {id:'booking',type:'invoice' as const,title:'Đặt lịch thành công tức thì',detail:state.activeBooking?`${state.activeBooking.date} · ${state.activeBooking.slot}`:'Mã hẹn đã được giữ chỗ.',action:'Xem lịch hẹn',run:()=>navigate('success')},
  ]
  const visible=state.notificationFilter==='all'?items:items.filter(item=>item.type===state.notificationFilter)
  const filters:[AppState['notificationFilter'],string][]=[['all','Tất cả'],['tracking','Tiến độ live'],['alerts','Cảnh báo'],['invoice','Hóa đơn']]
  return <section className={`notification-runtime ${state.notificationsRead?'read':''}`} data-testid="notification-results" aria-live="polite"><div className="runtime-filters notification-filters">{filters.map(([filter,label])=><button key={filter} type="button" aria-label={`Lọc ${filter}`} aria-pressed={state.notificationFilter===filter} className={state.notificationFilter===filter?'selected':''} onClick={()=>setState(c=>({...c,notificationFilter:filter}))}>{label}</button>)}</div><div className="notification-list">{visible.map(item=><article key={item.id} className={`notification-card ${item.type}`}><div><span className="notification-dot"/><h3>{item.title}</h3>{state.notificationsRead&&<small>Đã đọc</small>}</div><p>{item.detail}</p><button type="button" onClick={item.run}>{item.action} ›</button></article>)}{visible.length===0&&<p className="empty-runtime">Chưa có thông báo trong nhóm này.</p>}</div><button className="runtime-primary" type="button" aria-label="Tùy chỉnh kênh thông báo" onClick={()=>navigate('notificationSettings')}>Tùy chỉnh kênh thông báo ›</button></section>
}

function HistoryLayer({state,setState,navigate,rebook}:{state:AppState;setState:React.Dispatch<React.SetStateAction<AppState>>;navigate:(id:ScreenId)=>void;rebook:(item?:HistoryItem)=>void}){
  const items=state.history.filter(item=>state.historyFilter==='all'||item.petId===state.historyFilter)
  const counts={all:state.history.length,bo:state.history.filter(item=>item.petId==='bo').length,miu:state.history.filter(item=>item.petId==='miu').length}
  return <section className="history-runtime" data-testid="history-results" aria-live="polite"><div className="runtime-filters history-filters"><button type="button" aria-label="Lọc tất cả lịch sử" aria-pressed={state.historyFilter==='all'} className={state.historyFilter==='all'?'selected':''} onClick={()=>setState(c=>({...c,historyFilter:'all'}))}>Tất cả ({counts.all})</button><button type="button" aria-label="Lọc lịch sử của Bơ" aria-pressed={state.historyFilter==='bo'} className={state.historyFilter==='bo'?'selected':''} onClick={()=>setState(c=>({...c,historyFilter:'bo'}))}>Poodle Bơ ({counts.bo})</button><button type="button" aria-label="Lọc lịch sử của Miu" aria-pressed={state.historyFilter==='miu'} className={state.historyFilter==='miu'?'selected':''} onClick={()=>setState(c=>({...c,historyFilter:'miu'}))}>Mèo Miu ({counts.miu})</button></div><div className="history-list">{items.slice(0,3).map(item=>{const pet=state.pets.find(p=>p.id===item.petId);const service=services.find(s=>s.id===item.serviceId);return <article key={item.id}><div><span className="avatar">{pet?.name.toLocaleUpperCase('vi').slice(0,3)}</span><span><small>{item.dateLabel}</small><h3>{pet?.name} · {service?.name}</h3></span></div><p>{item.note}</p><footer><strong>{money(item.price)}</strong><button type="button" onClick={()=>navigate(item.petId==='miu'?'costBreakdown':'session')}>Chi tiết</button><button type="button" onClick={()=>rebook(item)}>Đặt lại</button></footer></article>})}{items.length===0&&<p className="empty-runtime">Chưa có lượt chăm sóc cho thú cưng này.</p>}</div><button className="runtime-primary" type="button" onClick={()=>navigate('budget')}>Theo dõi hạn mức &amp; chi tiêu tháng ›</button></section>
}

function RebookLayer({state,setState,confirm}:{state:AppState;setState:React.Dispatch<React.SetStateAction<AppState>>;confirm:()=>void}){
  const options=[
    {day:'Thứ 2 (14/09/2026)',short:'14/09',slot:'08:30 - 09:30',detail:'Chu kỳ chuẩn 14 ngày · KTV ưu tiên có mặt',recommended:true},
    {day:'Thứ 2 (21/09/2026)',short:'21/09',slot:'08:30 - 09:30',detail:'Chu kỳ 21 ngày · Còn chỗ trống',recommended:false},
  ]
  const selected=options.find(option=>option.day===state.day&&option.slot===state.slot)
  return <div className="rebook-runtime" data-testid="rebook-runtime"><div className="rebook-options">{options.map(option=>{const active=selected===option;return <button key={option.day} type="button" className={active?'selected':''} aria-pressed={active} aria-label={`Chọn lịch ${option.short} lúc 08:30`} onClick={()=>setState(current=>({...current,day:option.day,slot:option.slot}))}><span className="rebook-radio">{active?'✓':''}</span><span><strong>{option.day} · {option.slot}</strong><small>{option.detail}</small></span>{option.recommended&&<em>[GỢI Ý]</em>}</button>})}</div><button className="rebook-confirm" type="button" disabled={!selected} onClick={confirm}>{selected?`✓ Xác nhận Rebook (${selected.short} · 08:30)`:'Chọn lịch để xác nhận'}</button></div>
}

function Dialog({id,state,detailPetId,setDetailPetId,draft,setDraft,savePet,instructionDraft,setInstructionDraft,saveInstruction,togglePet,selectMatrixPet,close,openEdit,bookPet,setState}:{id:Exclude<DialogId,null>;state:AppState;detailPetId:string;setDetailPetId:(id:string)=>void;draft:typeof blankPet;setDraft:(value:typeof blankPet)=>void;savePet:(event:FormEvent)=>void;instructionDraft:string;setInstructionDraft:(value:string)=>void;saveInstruction:(event:FormEvent)=>void;togglePet:(id:string)=>void;selectMatrixPet:(id:string)=>void;close:()=>void;openEdit:(pet?:Pet)=>void;bookPet:(id:string)=>void;setState:React.Dispatch<React.SetStateAction<AppState>>}){
  const detailPet=state.pets.find(p=>p.id===detailPetId)??state.pets[0]
  return <div className="dialog-backdrop" onMouseDown={event=>{if(event.target===event.currentTarget)close()}}><section className="bottom-sheet" role="dialog" aria-modal="true" aria-label={id==='pet-picker'||id==='matrix-pet-picker'?'Chọn thú cưng':id==='pet-form'?'Hồ sơ thú cưng':id==='pet-detail'?'Chi tiết thú cưng':id==='instruction'?'Gửi thêm dặn dò':'Điều chỉnh ngân sách'}><header><div><span>DỮ LIỆU LOCAL</span><h2>{id==='pet-picker'||id==='matrix-pet-picker'?'Chọn thú cưng':id==='pet-form'?'Hồ sơ thú cưng':id==='pet-detail'?detailPet.name:id==='instruction'?'Gửi thêm dặn dò':'Hạn mức tháng'}</h2></div><button type="button" aria-label="Đóng" onClick={close}>×</button></header>
    {id==='pet-picker'&&<><div className="picker-list">{state.pets.map(pet=><label key={pet.id}><input type="checkbox" checked={state.selectedPetIds.includes(pet.id)} onChange={()=>togglePet(pet.id)}/><span className="avatar">{pet.name.toLocaleUpperCase('vi').slice(0,3)}</span><span><strong>{pet.name}</strong><small>{pet.species} · {pet.age} · {pet.weight}</small><p>{pet.notes}</p></span></label>)}</div><button className="sheet-primary" type="button" onClick={close}>Xong</button><button className="sheet-link" type="button" onClick={()=>openEdit()}>+ Thêm thú cưng mới</button></>}
    {id==='matrix-pet-picker'&&<><div className="matrix-picker-list">{state.pets.map(pet=><button key={pet.id} type="button" aria-label={`Chọn ${pet.name} cho ma trận thời gian`} aria-pressed={state.primaryPetId===pet.id} className={state.primaryPetId===pet.id?'selected':''} onClick={()=>selectMatrixPet(pet.id)}><span className="avatar">{pet.name.toLocaleUpperCase('vi').slice(0,3)}</span><span><strong>{pet.name}</strong><small>{pet.species} · {pet.age} · {pet.weight}</small><p>{pet.notes}</p></span><b>{state.primaryPetId===pet.id?'Đang chọn':'Chọn ›'}</b></button>)}</div><button className="sheet-link" type="button" onClick={()=>openEdit()}>+ Thêm hồ sơ thú cưng mới</button></>}
    {id==='pet-form'&&<PetForm draft={draft} setDraft={setDraft} save={savePet}/>} 
    {id==='pet-detail'&&<div className="pet-detail"><div className="picker-tabs">{state.pets.slice(0,2).map(p=><button type="button" key={p.id} className={p.id===detailPetId?'selected':''} onClick={()=>setDetailPetId(p.id)}>{p.name}</button>)}</div><p className="medical-alert">! {detailPet.notes}</p><div className="sheet-actions"><button type="button" onClick={()=>openEdit(detailPet)}>Sửa hồ sơ</button><button type="button" onClick={()=>bookPet(detailPet.id)}>Đặt lịch ngay</button></div></div>}
    {id==='instruction'&&<form className="instruction-form" onSubmit={saveInstruction}><label htmlFor="care-instruction">Nội dung dặn dò bổ sung</label><textarea id="care-instruction" autoFocus maxLength={300} placeholder="Ví dụ: Nếu bé hoảng sợ, hãy tạm dừng và gọi cho tôi." value={instructionDraft} onChange={event=>setInstructionDraft(event.target.value)}/><small>{instructionDraft.length}/300 ký tự · Dặn dò sẽ được gắn vào ca đang chạy.</small><div><button type="button" onClick={()=>{setInstructionDraft('');close()}}>Hủy</button><button type="submit">Gửi dặn dò</button></div></form>}
    {id==='budget'&&<div className="budget-form"><label>Hạn mức tháng<input type="number" aria-label="Hạn mức tháng" value={state.budget} onChange={event=>setState(current=>({...current,budget:Number(event.target.value)}))}/></label><button className="sheet-primary" type="button" onClick={close}>Lưu hạn mức</button></div>}
  </section></div>
}

function PetForm({draft,setDraft,save}:{draft:typeof blankPet;setDraft:(value:typeof blankPet)=>void;save:(event:FormEvent)=>void}){
  const field=(key:keyof typeof draft,label:string,required=false):ReactNode=><label><span>{label}{required?' *':''}</span><input required={required} value={draft[key]} onChange={event=>setDraft({...draft,[key]:event.target.value})}/></label>
  return <form className="pet-form" onSubmit={save}>{field('name','Tên thú cưng',true)}{field('species','Loài/Giống',true)}<div>{field('age','Tuổi')}{field('weight','Cân nặng')}</div><label><span>Dị ứng, tính cách và dặn dò</span><textarea value={draft.notes} onChange={event=>setDraft({...draft,notes:event.target.value})}/></label><button className="sheet-primary" type="submit">Lưu hồ sơ</button></form>
}

export default App
