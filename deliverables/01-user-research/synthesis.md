# Tổng hợp User Discovery cho Persona chủ nuôi

> **Trạng thái:** Bản tổng hợp do agent đề xuất, chờ con người review/chấp nhận. Persona đi kèm là bản nháp được dựng từ các finding dưới đây.

## 1. Phạm vi và cách đọc bằng chứng

- **Mẫu chính (`n = 5`):** P01–P05, đều là chủ nuôi/chăm sóc trực tiếp, dưới 22 tuổi (học sinh/sinh viên) và đã trực tiếp đặt lịch chăm sóc thú cưng.
- **Bằng chứng bổ sung:** P06 là phỏng vấn bán cấu trúc, dùng để làm rõ trải nghiệm nhưng không tính vào mẫu số của tần suất khảo sát.
- **Quyết định hiện hành của người dùng:** không loại phiên chỉ vì tệp không có trường kiểm tra consent. Sáu tệp đều được dùng dưới mã Pxx; đầu ra không lặp lại nhãn có khả năng nhận diện.
- Tần suất `x/5` chỉ phản ánh năm khảo sát hiện có, không đại diện cho toàn bộ chủ nuôi. Chỉ gọi là **mẫu lặp** khi có ít nhất hai người.

| Mã | Tệp nguồn | Vai trò trong tổng hợp |
|---|---|---|
| P01 | `data/user-research/01_respondent_08-06.md` | Khảo sát chính |
| P02 | `data/user-research/02_respondent_08-07_0503.md` | Khảo sát chính |
| P03 | `data/user-research/03_respondent_08-07_0722.md` | Khảo sát chính |
| P04 | `data/user-research/04_respondent_08-13_1450.md` | Khảo sát chính |
| P05 | `data/user-research/05_respondent_08-13_1512.md` | Khảo sát chính |
| P06 | `data/user-research/06_interview_member.md` | Phỏng vấn bổ sung |

## 2. Evidence matrix

| Finding | Loại suy luận | Tần suất và truy vết | Phản chứng / khác biệt / giới hạn |
|---|---|---|---|
| Nhóm khảo sát là chủ nuôi trẻ, chủ yếu gắn với việc chăm sóc mèo: cả năm đều dưới 22 tuổi, là học sinh/sinh viên và đều có nuôi mèo. | `FACT` | **5/5:** P01, P02, P03, P04, P05 | P04 nuôi cả chó và mèo; không có dữ liệu về giới tính, thành phố, thu nhập hoặc mức thành thạo công nghệ. P06 không ghi tuổi/nghề nghiệp. |
| Khi bàn giao, người dùng phải nhắc trực tiếp hoặc lặp lại đặc điểm hành vi của thú cưng để tránh bị bỏ sót. | `OBSERVATION` | **5/5:** P01, P03, P04, P05 nhắc miệng; P02 dặn qua tin nhắn rồi nhắc lại khi bàn giao. P06 bổ sung việc khai báo dị ứng và hành vi qua Zalo. | Chỉ P02 báo sự cố thực tế do thú cưng bị để chung với con dữ; không khái quát sự cố này cho cả mẫu. |
| Nhu cầu biết tiến độ xuất hiện rõ ở nhóm thường lo lắng nhưng ngại hoặc không được phản hồi khi chủ động hỏi. | `INTERPRETATION` | **3/5:** P01, P03, P05 nêu lo lắng/ngại gọi và muốn được cập nhật. **P06 bổ sung mạnh:** hỏi qua Zalo nhưng phản hồi chậm, chỉ nhận tin khi xong. | P04 ít lo và chỉ thỉnh thoảng cần biết; P02 tập trung vào an toàn/bằng chứng và tự đến tiệm chờ, không nêu trực tiếp nhu cầu cập nhật tiến độ. |
| Tra cứu lịch sử hiện phụ thuộc vào giấy tờ, tin nhắn hoặc hỏi lại tiệm; nhu cầu về một nguồn tập trung lặp lại trong mẫu. | `INTERPRETATION` | **3/5 nêu pain/wish trực tiếp:** P03, P04, P05. P01 dùng giấy tờ vật lý; P02 tự lưu ảnh/video/hóa đơn. P06 dùng lịch sử Zalo và hóa đơn. | P02 đã có cách tự lưu bằng chứng; P01 không mô tả việc tra cứu hiện tại là bất tiện. Vì vậy không kết luận cả 5 đều thấy đau đớn như nhau. |
| Việc biết lịch trống hoặc chờ phản hồi khi đặt lịch gây mất chủ động cho một phần đáng kể người dùng. | `INTERPRETATION` | **3/5:** P01 và P03 không biết trước khung giờ đã hết; P02 chờ tiệm phản hồi lâu. P06 cũng phản ánh thời gian phản hồi khá lâu. | P03 đồng thời cho biết tiệm cụ thể trả lời rất nhanh; P04 nói không gặp khó khăn; P05 chỉ mong quy trình đơn giản chứ không nêu sự cố xác nhận. |
| Kênh đặt lịch và lưu thông tin bị phân mảnh, từ đến trực tiếp đến Zalo/Fanpage, hotline, website/app và giấy tờ. | `OBSERVATION` | **5/5:** P01–P05 dùng các tổ hợp kênh khác nhau; P06 bổ sung Google Maps, điện thoại và Zalo. | Đa kênh không luôn là pain: P04 coi sự linh hoạt kênh là mục tiêu tích cực. Thiết kế không nên ép bỏ các touchpoint quen thuộc. |
| Mẫu hành vi nổi trội là cố giảm bất định bằng hai cách: chờ tiệm chủ động báo hoặc tự tạo lớp bảo vệ (nhắc lại, đến chờ, lưu bằng chứng). | `INTERPRETATION` | **5/5:** chờ thụ động ở P01/P05; giấy tờ hoặc hỏi lại ở P03; đa kênh ở P04; đề phòng chủ động ở P02. P06 vừa chủ động hỏi vừa hạ kỳ vọng vì không được phản hồi. | Đây là hai chiến lược khác nhau, không phải một mức độ tin tưởng đồng nhất. Persona chỉ gom chúng ở động cơ chung là muốn giảm bất định. |

## 3. Mục tiêu, nhiệm vụ và nhu cầu đã được giữ lại

| Nhóm | Nội dung tổng hợp | Bằng chứng |
|---|---|---|
| Goals | Đặt lịch gọn và chủ động; thú cưng được chăm sóc an toàn, đúng đặc điểm; biết tình trạng khi đang gửi; tra cứu được lượt chăm sóc cũ. | P01–P06; riêng tra cứu tập trung nổi bật ở P03–P05. |
| Tasks | Chọn/liên hệ kênh đặt lịch; cung cấp và nhắc lại đặc điểm thú cưng; bàn giao rồi chờ/hỏi tiến độ; giữ hoặc tìm lại giấy tờ, chat, ảnh và hóa đơn. | P01–P06. |
| Motivations | Giảm rủi ro cho thú cưng nhút nhát và giảm bất định trong thời gian chờ; tiết kiệm công sức liên hệ lặp lại. | P01–P05; P06 bổ sung chiều sâu về lo lắng. |
| Pain points | Không biết trước lịch trống/chờ phản hồi; yêu cầu dễ phụ thuộc vào nhắc miệng; thiếu tiến độ; lịch sử phân tán. | P01–P06 với mức độ khác nhau như evidence matrix. |
| Needs / Wishes | Lịch trống và xác nhận rõ; yêu cầu đặc biệt được lưu và chuyển tiếp; cập nhật theo mốc; lịch sử tập trung, dễ tra cứu. | P01–P06. |

## 4. Quote và phản chứng cần giữ nguyên

- Quote đại diện được chọn từ P06 vì diễn đạt trực tiếp khoảng trống tiến độ: **“Không nhận được thông tin cập nhật, chỉ khi nào mèo được tắm xong thì tôi mới nhận được thông tin.”**
- Không được xóa các trải nghiệm thuận lợi: P01 nói **“Không có bất tiện gì nhiều.”**, P03 nói **“Tiệm trả lời rất nhanh, ko mất quá nhiều thời gian cho việc book lịch.”**, và P04 nói **“Không gặp khó khăn gì.”**
- Không khái quát sự cố mèo bị trầy và hói đầu của P02 thành trải nghiệm chung; sự kiện này chỉ chứng minh hậu quả có thể nghiêm trọng khi ghi chú hành vi bị bỏ sót.

## 5. Đối chiếu proposal và giới hạn

- Evidence **ủng hộ định hướng nghiệp vụ** trong `docs/proposal.md`: đặt lịch/xác nhận rõ, lưu yêu cầu đặc biệt, theo dõi tiến độ và lịch sử chăm sóc đều liên hệ trực tiếp với finding.
- Evidence **không ủng hộ Persona giả thuyết** “Lan, 28 tuổi, nhân viên văn phòng, nuôi chó Poodle tại Thành phố Hồ Chí Minh”. Mẫu hiện có là 5/5 dưới 22 tuổi, học sinh/sinh viên và 5/5 có nuôi mèo; do đó Persona mới không sao chép tên, tuổi, nghề, địa điểm hoặc giống chó từ proposal.
- Dị ứng chỉ xuất hiện ở P06; P01–P05 chủ yếu mô tả tính cách nhút nhát. Persona dùng khái niệm “đặc điểm/yêu cầu chăm sóc” và không biến dị ứng thành thuộc tính phổ biến.
- Chưa xác định giới tính, tuổi cụ thể, nơi sống, thu nhập và mức thành thạo công nghệ. Cần mẫu đa dạng hơn nếu muốn đại diện cho chủ nuôi ngoài nhóm học sinh/sinh viên dưới 22 tuổi.

## 6. Nguồn ảnh hưởng quyết định

- `docs/proposal.md`
- `docs/final-rubric.csv`
- `references/course-materials/notes/05-persona-value-proposition.md`
- `references/project-guidelines/notes/rubric-project-final.md`
- `rules/persona-rules.md`, `rules/quality-rules.md`, `rules/style-rules.md`
- `templates/persona-template.md`
