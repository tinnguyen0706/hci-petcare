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
| Khi bàn giao, người dùng đều nhắc đặc điểm hành vi của thú cưng; có người lặp lại thông tin qua nhiều touchpoint. | `OBSERVATION` | **5/5:** P01, P03, P04, P05 nhắc miệng; P02 dặn qua tin nhắn rồi nhắc lại khi bàn giao. P06 bổ sung việc khai báo dị ứng và hành vi qua Zalo. | Chỉ P02 báo sự cố thực tế do thông tin đã dặn không được thực hiện đúng; không khái quát sự cố này cho cả mẫu. Outcome có căn cứ là yêu cầu được ghi nhận, truyền đúng và có thể kiểm tra lại, không mặc định cách hiện thực. |
| Nhu cầu biết tiến độ xuất hiện rõ ở nhóm thường lo lắng nhưng ngại hoặc không được phản hồi khi chủ động hỏi. | `INTERPRETATION` | **3/5:** P01, P03, P05 nêu lo lắng/ngại gọi và muốn được cập nhật. **P06 bổ sung mạnh:** hỏi qua Zalo nhưng phản hồi chậm, chỉ nhận tin khi xong. | P04 ít lo và chỉ thỉnh thoảng cần biết; P02 tập trung vào an toàn/bằng chứng và tự đến tiệm chờ, không nêu trực tiếp nhu cầu cập nhật tiến độ. |
| Tra cứu lịch sử hiện phụ thuộc vào giấy tờ, tin nhắn hoặc hỏi lại tiệm; mong muốn xem lại thông tin thuận tiện hơn lặp lại trong mẫu. | `INTERPRETATION` | **3/5 nêu pain/wish trực tiếp:** P03, P04, P05. P01 dùng giấy tờ vật lý; P02 tự lưu ảnh/video/hóa đơn. P06 dùng lịch sử Zalo và hóa đơn. | P02 đã có cách tự lưu bằng chứng; P01 không mô tả việc tra cứu hiện tại là bất tiện. Vì vậy không kết luận cả 5 đều có cùng pain hoặc cần một hình thức lưu trữ cụ thể. |
| Việc biết lịch trống hoặc chờ phản hồi khi đặt lịch gây mất chủ động cho một phần đáng kể người dùng. | `INTERPRETATION` | **3/5:** P01 và P03 không biết trước khung giờ đã hết; P02 chờ tiệm phản hồi lâu. P06 cũng phản ánh thời gian phản hồi khá lâu. | P03 đồng thời cho biết tiệm cụ thể trả lời rất nhanh; P04 nói không gặp khó khăn; P05 chỉ mong quy trình đơn giản chứ không nêu sự cố xác nhận. |
| Kênh đặt lịch và lưu thông tin bị phân mảnh, từ đến trực tiếp đến Zalo/Fanpage, hotline, website/app và giấy tờ. | `OBSERVATION` | **5/5:** P01–P05 dùng các tổ hợp kênh khác nhau; P06 bổ sung Google Maps, điện thoại và Zalo. | Đa kênh không luôn là pain: P04 coi sự linh hoạt kênh là mục tiêu tích cực. Thiết kế không nên ép bỏ các touchpoint quen thuộc. |
| Ở nhóm nổi trội, lo lắng hoặc rủi ro khi gửi thú cưng dẫn đến hành vi chờ tiệm báo, ngại hỏi, đến chờ hoặc tự lưu bằng chứng. | `INTERPRETATION` | **4/5:** P01 và P05 chờ tiệm chủ động báo; P03 ngại hỏi và dùng giấy tờ/hỏi lại; P02 chủ động đến chờ, nhắc lại và lưu bằng chứng. P06 bổ sung việc chủ động hỏi rồi hạ kỳ vọng vì không được phản hồi. | **P04 là phản chứng:** ít lo lắng, tin tưởng tiệm hơn và chỉ thỉnh thoảng cần biết tình trạng. Persona lấy mẫu nổi trội, không gán động lực này cho toàn bộ mẫu. |

## 3. Mục tiêu, nhiệm vụ và nhu cầu đã được giữ lại

| Nhóm | Nội dung tổng hợp | Bằng chứng |
|---|---|---|
| Goals | Đặt lịch gọn hoặc linh hoạt (**P03, P04, P05**); thú cưng được chăm sóc an toàn/đúng đặc điểm (**P01, P02**); biết tình trạng khi đang gửi (**P01, P03, P05**, P06 bổ sung); xem lại lượt chăm sóc cũ (**P03, P04, P05**). | Truy vết theo từng cụm; không coi mọi goal là của cả 5 người. |
| Tasks | Liên hệ/đến tiệm để đặt lịch (**P01–P05**, P06 bổ sung); cung cấp hoặc nhắc lại đặc điểm thú cưng (**P01–P05**, P06 bổ sung); chờ tiệm báo, hỏi hoặc đến chờ (**P01, P02, P03, P05**, P06 bổ sung); giữ/tìm lại giấy tờ, chat, ảnh hoặc hóa đơn (**P01–P05**, P06 bổ sung). | P04 không thể hiện hành vi lo lắng/chờ hỏi tình trạng như nhóm nổi trội. |
| Motivations | Giảm rủi ro hoặc bảo đảm chăm sóc đúng cho thú cưng nhút nhát (**P01, P02**); an tâm hơn trong lúc chờ (**P01, P03, P05**, P06 bổ sung); giảm thời gian/công sức đặt lịch (**P03, P05**). | P04 tin tưởng tiệm hơn và không đặt nặng theo dõi sát. |
| Pain points | Không biết trước lịch trống hoặc chờ phản hồi (**P01, P02, P03**, P06 bổ sung); phải nhắc đặc điểm thú cưng khi bàn giao (**P01–P05**, hậu quả chỉ ở P02); thiếu cập nhật tình trạng (**P01, P03, P05**, P06 bổ sung); khó xem lại lịch sử (**P03, P04, P05**). | P01, P03, P04 cũng có phát biểu trải nghiệm thuận lợi; xem phản chứng ở evidence matrix và mục 4. |
| Needs / Wishes | Biết lịch trống hoặc được phản hồi đặt lịch kịp thời (**P01, P02, P03**, P06 bổ sung); yêu cầu chăm sóc được ghi nhận/truyền đúng và có thể kiểm tra lại (**P01–P05**, nhu cầu tránh hậu quả thể hiện rõ ở P02); được cập nhật tình trạng trong lúc chờ (**P01, P03, P05**, P06 bổ sung); tra cứu lại lịch sử thuận tiện (**P03, P04, P05**). | Chỉ mô tả outcome có evidence; không quy định hồ sơ thú cưng, xác nhận tức thì, trạng thái theo mốc hay một cấu trúc lưu trữ cụ thể. |

## 4. Quote và phản chứng cần giữ nguyên

- Quote đại diện được chọn từ P06 vì diễn đạt trực tiếp khoảng trống tiến độ: **“Không nhận được thông tin cập nhật, chỉ khi nào mèo được tắm xong thì tôi mới nhận được thông tin.”**
- Không được xóa các trải nghiệm thuận lợi: P01 nói **“Không có bất tiện gì nhiều.”**, P03 nói **“Tiệm trả lời rất nhanh, ko mất quá nhiều thời gian cho việc book lịch.”**, và P04 nói **“Không gặp khó khăn gì.”**
- Không khái quát sự cố mèo bị trầy và hói đầu của P02 thành trải nghiệm chung; sự kiện này chỉ chứng minh hậu quả có thể nghiêm trọng khi ghi chú hành vi bị bỏ sót.

## 5. Đối chiếu proposal và giới hạn

- Evidence **ủng hộ các outcome vấn đề** liên quan trong `docs/proposal.md`: biết lịch trống/được phản hồi kịp thời, yêu cầu chăm sóc được ghi nhận và truyền đúng, được cập nhật tình trạng khi chờ, và tra cứu lại lịch sử. Evidence chưa tự động xác nhận các hình thức giải pháp như xác nhận tức thì, hồ sơ thú cưng, trạng thái theo mốc hoặc lịch sử có cấu trúc.
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
