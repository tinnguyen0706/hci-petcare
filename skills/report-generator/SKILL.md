---

name: report-agent

description: Soạn, kiểm tra và hoàn thiện báo cáo cuối kỳ HCI/UX từ Proposal đã duyệt, user research, requirements, existing system analysis, design artifacts, prototype, evaluation results và evidence. Báo cáo bắt buộc viết dựa trên Proposal và tuân thủ tiêu đề 100% tiếng Việt (không mở ngoặc tiếng Anh), cấu trúc 9 chương chuẩn HCI: Giới thiệu, Nghiên cứu người dùng, Yêu cầu và mục tiêu thiết kế, Phân tích hệ thống và trải nghiệm hiện tại, Quá trình thiết kế, Thiết kế bản mẫu tương tác, Đánh giá thiết kế, Thiết kế cuối cùng và Kết luận.

---

# Skill: HCI/UX Report Agent

## 1. Mục đích

Biến các artifact đã được duyệt thành một **báo cáo HCI/UX hoàn chỉnh, mạch lạc, có thể kiểm chứng và đúng yêu cầu submission**.

Toàn bộ nội dung báo cáo **BẮT BUỘC PHẢI VIẾT DỰA TRÊN PROPOSAL ĐÃ ĐƯỢC DUYỆT** (`docs/proposal.md` / `docs/proposal.pdf`). Báo cáo phải kế thừa và thể hiện xuyên suốt toàn bộ quá trình:

**Bài toán (Proposal) → Nghiên cứu người dùng → Nhu cầu & Điểm đau → Yêu cầu & Mục tiêu thiết kế → Phân tích hệ thống & Quy trình hiện tại → Quá trình thiết kế → Thiết kế bản mẫu tương tác → Đánh giá thiết kế → Thiết kế cuối cùng → Kết luận**

Agent phải ưu tiên **tính trung thực của evidence, tính nhất quán với Proposal và logic của quá trình thiết kế** hơn độ dài hoặc hình thức.

---

# 2. Nguồn dữ liệu bắt buộc

Trước khi viết báo cáo, đọc và kiểm tra các nguồn sau nếu chúng tồn tại:

1. **Tài liệu Proposal (`docs/proposal.md` hoặc `docs/proposal.pdf`)** — **Căn cứ nền tảng bắt buộc số 1**: Báo cáo bắt buộc phải kế thừa bài toán, đối tượng người dùng (chủ nuôi bận rộn), khó khăn trong quy trình cũ, 4 nhóm chức năng cốt lõi (Đặt lịch có xác nhận tức thì, Hồ sơ thú cưng & yêu cầu đặc biệt, Theo dõi tiến độ thời gian thực, Lịch sử chăm sóc cá nhân hóa) và luồng quy trình As-Is / To-Be từ Proposal. Tuyệt đối không được viết lệch khỏi định hướng đã cam kết trong Proposal.
2. `PLAN.md` của skill
3. Project manifest / artifact manifest
4. Project rules / submission requirements
5. Template báo cáo LaTeX trong `templates/report/` (`main.tex`, thư mục `content/` gồm 9 chương từ `01_gioi_thieu.tex` đến `09_ket_luan.tex`, `ref/appendix.tex`) và hướng dẫn trong `templates/report/README.md`
6. User research artifacts
7. Requirements artifacts
8. Existing system analysis
9. User flow / task flow
10. Information architecture
11. Ideation / sketches / storyboards
12. Wireframes
13. Prototype
14. Usability evaluation materials
15. Evaluation results
16. Screenshots / figures / tables
17. Software implementation artifacts nếu có
18. Approved references / citations

Không được coi một artifact là evidence nếu artifact đó chưa tồn tại hoặc chưa được xác nhận.

---

# 3. Ba Quy tắc Vận hành Cốt lõi

### Quy tắc 1: Bắt buộc Bám sát Proposal (Proposal-Based Mandate)
- Báo cáo phải phát triển trực tiếp từ Proposal (`docs/proposal.md`).
- Phải giữ trọn vẹn:
  1. Tên đề tài: "Hệ thống hỗ trợ đặt lịch, gửi yêu cầu và theo dõi quá trình chăm sóc thú cưng".
  2. Bối cảnh và bài toán: Chủ nuôi thú cưng bận rộn gặp khó khăn với quy trình thủ công cũ (chờ xác nhận, thất lạc dặn dò dị ứng/thuốc, thiếu thông tin tiến độ, không có lịch sử chăm sóc).
  3. Persona đại diện nền tảng: Chị Lan, 28 tuổi, nhân viên văn phòng tại TP.HCM, nuôi chó Poodle có tiền sử dị ứng sữa tắm.
  4. 4 trụ cột giải pháp cốt lõi:
     - Đặt lịch có xác nhận tức thì
     - Hồ sơ thú cưng và yêu cầu đặc biệt
     - Theo dõi tiến độ theo thời gian thực (4 mốc: Đã nhận ➔ Đang chăm sóc ➔ Hoàn tất ➔ Chờ đón)
     - Lịch sử chăm sóc cá nhân hóa
  5. Đối chiếu quy trình: So sánh chi tiết 6 bước quy trình hiện tại (As-Is) với 6 bước quy trình đề xuất (To-Be).

### Quy tắc 2: Tiêu đề 100% Tiếng Việt Thuần túy (Vietnamese Headings Only)
- **Tất cả các tiêu đề chương (`\section`), mục (`\subsection`), tiểu mục (`\subsubsection`)** trong báo cáo và template LaTeX PHẢI được viết hoàn toàn bằng tiếng Việt chuẩn mực, học thuật.
- **TUYỆT ĐỐI CẤM** đặt tiêu đề theo kiểu song ngữ mở ngoặc tiếng Anh kèm theo (như `Giới thiệu (Introduction)`, `Nghiên cứu người dùng (User Research)`, `Yêu cầu và mục tiêu thiết kế (Requirements & Design Goals)`...).
- **TUYỆT ĐỐI CẤM** để tiêu đề bằng tiếng Anh thuần túy (như `Project Background`, `Problem Statement`, `Target Users`...).
- Các thuật ngữ chuyên ngành (Persona, Storyboard, Wireframe, Prototype, Usability Testing, Think-aloud, SUS...) vẫn được sử dụng trong nội dung văn bản (body text), nhưng riêng TIÊU ĐỀ thì 100% tiếng Việt, không mở ngoặc tiếng Anh.

### Quy tắc 3: Bảo toàn Template gốc — Sao chép sang `docs/` trước khi viết (Template Isolation)
- Thư mục `templates/report/` là bộ khung chuẩn hóa (clean template) của dự án, phải luôn được bảo toàn nguyên vẹn. **TUYỆT ĐỐI KHÔNG SỬA TRỰC TIẾP VÀO `templates/report/`**.
- Mỗi lần bắt đầu viết hoặc cập nhật báo cáo, Agent **BẮT BUỘC phải sao chép (copy) toàn bộ template từ `templates/report/` sang `docs/` (hoặc `docs/report/`)**, sau đó mới thực hiện việc viết bài, chỉnh sửa các file `.tex` trong `content/`, gắn hình ảnh và biên dịch PDF tại thư mục làm việc trong `docs/`.
- Tuyệt đối không ghi đè bài làm thật vào thư mục template mẫu.

### Quy tắc 4: Bao phủ Toàn bộ Persona & Đề xuất giá trị Đối ứng 1-1 (Full Persona & 1-1 Value Proposition Coverage)
- Dự án có bao nhiêu Persona thì trong báo cáo bắt buộc phải đưa vào **ĐẦY ĐỦ TẤT CẢ** các Persona đó (`deliverables/01-user-research/persona/`), tuyệt đối không được bỏ sót bất kỳ Persona nào.
- Tương ứng với mỗi Persona, **BẮT BUỘC phải có một bản Đề xuất giá trị (Value Proposition Canvas) đối ứng trực tiếp 1-1** (`deliverables/01-user-research/value-proposition/`). Có bao nhiêu Persona thì phải có bấy nhiêu Value Proposition Canvas tương ứng, thể hiện đầy đủ Hồ sơ khách hàng (Customer Profile: Tác vụ, Điểm đau, Điểm mong muốn) và Bản đồ giá trị (Value Map: Sản phẩm & Dịch vụ, Trợ thủ giải tỏa đau đớn, Yếu tố tạo lợi ích).

---

# 4. Cấu trúc báo cáo bắt buộc (9 Chương chuẩn HCI)

Nếu project yêu cầu báo cáo HCI/UX theo cấu trúc này, phải sử dụng đầy đủ các chapter sau với 100% tiêu đề tiếng Việt:

## Chương 1. Giới thiệu

### 1.1. Bối cảnh đề tài

Trình bày:

* Bối cảnh của vấn đề (kế thừa trực tiếp từ Proposal)
* Hệ thống/sản phẩm đang được nghiên cứu
* Ngữ cảnh thực tế trong đó hệ thống được sử dụng
* Tại sao vấn đề đáng quan tâm

Không biến phần này thành literature review dài nếu rubric không yêu cầu.

### 1.2. Phát biểu bài toán

Trình bày:

* Vấn đề người dùng đang gặp phải trong quy trình thủ công
* Những hạn chế của hệ thống/giao diện/quy trình hiện tại (đối chiếu Proposal: chờ phản hồi, xác nhận không rõ ràng, thất lạc dặn dò đặc biệt, thiếu minh bạch tiến độ)
* Tác động của vấn đề đối với người dùng hoặc quy trình chăm sóc

Phát biểu bài toán phải nhất quán với Proposal và được chứng minh bởi research/evidence.

### 1.3. Mục tiêu đề tài

Trình bày:

* Đồ án muốn cải thiện điều gì theo mục tiêu trong Proposal
* Mục tiêu UX/Usability
* Những kết quả dự kiến đạt được

Mục tiêu phải phù hợp với scope và evidence thực tế.

### 1.4. Phạm vi đề tài

Trình bày:

* Những chức năng/tác vụ nằm trong phạm vi (In-scope: 4 trụ cột tính năng phục vụ chủ nuôi)
* Đối tượng người dùng mục tiêu (Chủ nuôi thú cưng bận rộn)
* Những phần không được thực hiện (Out-of-scope: không xây lại toàn bộ ERP quản lý cơ sở)
* Các giới hạn kỹ thuật hoặc nghiên cứu nếu có

---

## Chương 2. Nghiên cứu người dùng

### 2.1. Đối tượng người dùng mục tiêu

Mô tả:

* Người dùng mục tiêu (Chủ nuôi thú cưng bận rộn theo Proposal)
* Đặc điểm liên quan đến hệ thống
* Ngữ cảnh sử dụng (Context of use)
* Các tác vụ chính của họ

Chỉ mô tả đặc điểm có căn cứ từ dữ liệu nghiên cứu và Proposal.

### 2.2. Phương pháp nghiên cứu

Trình bày các phương pháp thực sự được sử dụng, ví dụ:

* Phỏng vấn sâu (Interview)
* Quan sát thực tế (Observation)
* Khảo sát bằng bảng hỏi (Survey / Questionnaire)
* Kiểm thử khả năng sử dụng (Usability testing)

Với mỗi phương pháp nếu có đủ bằng chứng, nêu:

* Mục đích (Purpose)
* Người tham gia (Participants)
* Quy trình thực hiện (Procedure)
* Dữ liệu thu thập được (Data collected)

Không được tự tạo đối tượng tham gia hoặc phương pháp nghiên cứu chưa được thực hiện.

### 2.3. Kết quả nghiên cứu

Đây là phần **kết quả phát hiện (findings)**, không phải nhật ký quá trình nghiên cứu.

Ưu tiên trình bày các phát hiện có ý nghĩa đối với thiết kế, ví dụ:

* Người dùng thường gặp khó khăn hoặc sai sót khi đặt lịch...
* Người dùng kỳ vọng được cập nhật tiến độ liên tục...
* Người dùng lo lắng việc dặn dò đặc biệt/dị ứng bị quên...

Mỗi phát hiện quan trọng phải có bằng chứng tương ứng.

### 2.4. Nhu cầu và điểm đau của người dùng

Tổng hợp kết quả nghiên cứu thành các:

* Nhu cầu người dùng (User needs)
* Điểm đau (Pain points - đối chiếu với 5 khó khăn trong Proposal)
* Sự thất vọng và rào cản (Frustrations)
* Kỳ vọng (Expectations)
* Cơ hội cải tiến (Opportunities for improvement)

Không tạo điểm đau mới nếu nghiên cứu và Proposal không hỗ trợ.

### 2.5. Chân dung người dùng

Bắt buộc trình bày **ĐẦY ĐỦ TẤT CẢ** các Persona có trong dự án (`deliverables/01-user-research/persona/`), không được bỏ sót bất kỳ Persona nào:

* Persona 1: Nguyễn Hoàng Lan (26 tuổi, Chuyên viên Marketing) — Chủ nuôi cẩn trọng, nuôi mèo Mochi có tiền sử dị ứng.
* Persona 2: Lê Hoàng Minh (22 tuổi, Sinh viên / Lập trình viên tập sự) — Chủ nuôi bận rộn, nuôi 2 thú cưng (chó Poodle Bơ & mèo Miu).
* Bất kỳ Persona bổ sung nào khác đã được duyệt trong dự án.

Với mỗi Persona, trình bày đầy đủ: Bối cảnh, Mục tiêu (Goals), Hành vi (Behaviors), Điểm đau (Pain points), Nhu cầu (Needs).

### 2.6. Đề xuất giá trị

Bắt buộc trình bày bản Đề xuất giá trị (Value Proposition Canvas) **ĐỐI ỨNG 1-1 TƯƠNG ỨNG VỚI TỪNG PERSONA** (`deliverables/01-user-research/value-proposition/`):
(Nguyên tắc: Có bao nhiêu Persona thì phải có bấy nhiêu bản Đề xuất giá trị tương ứng).

Với mỗi Persona, trình bày đủ:
* Hồ sơ khách hàng (Customer Profile): Tác vụ (Customer Jobs), Điểm đau (Pains), Điểm mong muốn (Gains).
* Bản đồ giá trị (Value Map): Sản phẩm & Dịch vụ (Products & Services), Trợ thủ giải tỏa đau đớn (Pain Relievers), Yếu tố tạo lợi ích (Gain Creators).


---

## Chương 3. Yêu cầu và mục tiêu thiết kế

### 3.1. Yêu cầu người dùng

Chuyển Nhu cầu & Điểm đau thành yêu cầu hành động được (bám sát 4 trụ cột tính năng trong Proposal):

1. Đặt lịch và nhận xác nhận tức thì trên ứng dụng.
2. Lưu hồ sơ thú cưng và tự động đính kèm thông tin dị ứng/thuốc/dặn dò vào đơn đặt.
3. Theo dõi tiến độ chăm sóc theo thời gian thực qua 4 mốc rõ ràng.
4. Tra cứu lịch sử chăm sóc cá nhân hóa (dịch vụ, sản phẩm, ghi chú).

Mỗi yêu cầu nên truy vết được:

**Kết quả nghiên cứu → Nhu cầu người dùng → Yêu cầu người dùng**

### 3.2. Mục tiêu trải nghiệm người dùng

Xác định các mục tiêu trải nghiệm định lượng và định tính:

* Tính hiệu quả (Effectiveness)
* Hiệu suất hoàn thành tác vụ (Efficiency)
* Tính dễ học (Learnability)
* Phòng ngừa lỗi và sai sót (Error prevention)
* Sự hài lòng và an tâm của chủ nuôi (User satisfaction)
* Khả năng ghi nhớ (Memorability)

Mục tiêu trải nghiệm phải liên quan trực tiếp đến vấn đề được phát hiện trong Proposal.

### 3.3. Mục tiêu thiết kế

Chuyển yêu cầu và mục tiêu trải nghiệm thành các mục tiêu thiết kế cụ thể:

* Thiết kế luồng đặt lịch trực quan từng bước (Stepper) có xác nhận tức thì.
* Thiết kế thẻ cảnh báo dị ứng/dặn dò màu đỏ nổi bật trong hồ sơ và đơn tiếp nhận.
* Thiết kế thanh tiến trình 4 mốc thời gian thực minh bạch.
* Thiết kế kho lưu trữ lịch sử chăm sóc theo dòng thời gian chi tiết.

Mục tiêu thiết kế phải được sử dụng để đánh giá bản mẫu ở các chương sau.

---

## Chương 4. Phân tích hệ thống và trải nghiệm hiện tại

### 4.1. Hệ thống và quy trình hiện tại

Trình bày:

* Quy trình hoặc kênh hiện tại (nhắn tin Fanpage/Zalo, gọi điện, ghi chép sổ tay)
* Các màn hình hoặc kênh liên lạc liên quan
* Các chức năng chính liên quan đến phạm vi đề tài

Sử dụng hình ảnh minh họa thực tế nếu có.

### 4.2. Phân tích tác vụ

Phân tích các tác vụ quan trọng mà người dùng thực hiện trong quy trình cũ (bám sát 6 bước As-Is trong Proposal):

1. Chủ nuôi gọi điện hoặc nhắn tin hỏi lịch trống.
2. Chủ nuôi chờ phản hồi và chưa biết chắc lịch được ghi nhận.
3. Chủ nuôi khai báo lại dị ứng hoặc yêu cầu đặc biệt.
4. Chủ nuôi bàn giao thú cưng tại cơ sở.
5. Trong thời gian chăm sóc, chủ nuôi không có cập nhật và phải gọi điện hỏi.
6. Cơ sở thông báo khi hoàn tất; thông tin không được lưu thành lịch sử nhất quán.

### 4.3. Luồng người dùng và quy trình tác vụ

Trình bày sơ đồ luồng tương tác hiện tại của người dùng và các điểm nghẽn (bottlenecks).

Nếu có sơ đồ trong artifact, ưu tiên sử dụng artifact thay vì tự tạo lại logic khác.

### 4.4. Các vấn đề về trải nghiệm người dùng

Tổng hợp các vấn đề trải nghiệm của quy trình cũ:

* Vấn đề 1: Chờ xác nhận lâu, không chủ động được thời gian.
* Vấn đề 2: Dặn dò đặc biệt (dị ứng da/thuốc) dễ bị quên hoặc thất lạc.
* Vấn đề 3: Thiếu minh bạch tiến độ, gây bất an và làm gián đoạn công việc hai bên.
* Vấn đề 4: Thiếu lịch sử chăm sóc có cấu trúc để tra cứu lại.

Không chỉ liệt kê bề nổi; phải giải thích **tại sao đó là vấn đề trải nghiệm người dùng**.


---

## Chương 5. Quá trình thiết kế

### 5.1. Kiến trúc thông tin

Trình bày:

* Sơ đồ cấu trúc ứng dụng (Sitemap)
* Cấu trúc điều hướng (Navigation structure)
* Tổ chức nội dung và các phân hệ chức năng

Chỉ sử dụng những artifact thực tế của dự án.

### 5.2. Luồng thao tác người dùng

Trình bày các luồng thao tác được thiết kế lại (bám sát quy trình đề xuất trong Proposal):

* Luồng đặt lịch dịch vụ và đính kèm ghi chú dị ứng/dặn dò đặc biệt
* Luồng theo dõi tiến độ chăm sóc từ xa theo thời gian thực

Nếu luồng thay đổi so với quy trình cũ, giải thích rõ lý do cải tiến.

### 5.3. Phác thảo và phát triển ý tưởng

Trình bày:

* Quá trình phác thảo ý tưởng (Ideation & Sketching)
* Các phương án sơ bộ được xem xét
* Các quyết định thiết kế cốt lõi

Không cần liệt kê mọi ý tưởng nếu không có giá trị đối với thiết kế cuối cùng.

### 5.4. Bảng phân cảnh

Nếu có kịch bản phân cảnh (Storyboard):

* Trình bày kịch bản bối cảnh người dùng (Scenario)
* Ngữ cảnh và hành động của chủ nuôi
* Phản hồi của hệ thống
* Trải nghiệm mong muốn đạt được

Bảng phân cảnh phải hỗ trợ giải thích bối cảnh sử dụng của chủ nuôi thú cưng bận rộn.

### 5.5. Khung giao diện

Trình bày:

* Khung giao diện độ chi tiết thấp (Low-fidelity wireframes) theo chuẩn Mobile-first
* Các màn hình chính (Trang chủ, Đặt lịch, Theo dõi, Hồ sơ)
* Sự tiến triển qua các vòng lặp thiết kế (Iterations)

### 5.6. Các phương án thiết kế

Nếu có nhiều phương án:

**Phương án A → Phương án B → Thiết kế tối ưu**

Giải thích:

* Ưu điểm
* Nhược điểm
* Đánh đổi (Trade-offs)
* Lý do lựa chọn giải pháp tối ưu

---

## Chương 6. Thiết kế bản mẫu tương tác

### 6.1. Tổng quan bản mẫu

Trình bày:

* Công cụ xây dựng bản mẫu (Figma High-fidelity Interactive Prototype)
* Mức độ chi tiết (Fidelity level)
* Các chức năng được mô phỏng theo 4 trụ cột trong Proposal
* Phạm vi mô phỏng

Phải phân biệt rõ:

**Bản mẫu tương tác (Prototype) ≠ Phần mềm hoàn chỉnh toàn diện (Fully Functional Software)**

Không mô tả bản mẫu như một hệ thống backend cơ sở dữ liệu hoàn chỉnh nếu backend chưa tồn tại.

### 6.2. Các màn hình bản mẫu

Trình bày các màn hình chính của bản mẫu:

* Màn hình Trang chủ & Đặt lịch nhanh
* Màn hình Đặt lịch dịch vụ & Đính kèm hồ sơ dặn dò/dị ứng
* Màn hình Theo dõi tiến độ thời gian thực (4 mốc)
* Màn hình Hồ sơ thú cưng & Lịch sử chăm sóc

Mỗi màn hình cần nêu rõ:

* Tên màn hình
* Mục đích sử dụng
* Các thành phần giao diện chính
* Tác vụ người dùng tương ứng

### 6.3. Thiết kế tương tác

Giải thích các hành vi tương tác quan trọng:

* Hành vi nút bấm và trạng thái (Button states, Feedback)
* Điều hướng và xác nhận thao tác (Navigation, Modal confirmation)
* Phản hồi trạng thái (Feedback, Notification)
* Ngăn ngừa và xử lý lỗi (Error handling, Validation)
* Trạng thái rỗng và đang tải (Empty states, Loading states)

Chỉ mô tả tương tác thực sự tồn tại trong bản mẫu hoặc mã nguồn.

### 6.4. Lý giải thiết kế

Đây là phần quan trọng để chứng minh thiết kế dựa trên quy trình HCI khoa học:

**Kết quả nghiên cứu / Điểm đau Proposal → Quyết định thiết kế → Cải thiện trải nghiệm mong đợi**

Ví dụ:

> Nghiên cứu và Proposal chỉ ra rằng chủ nuôi luôn bất an khi không biết thú cưng đang ở bước nào và dặn dò dị ứng dễ bị quên. Do đó, thiết kế bổ sung thẻ dặn dò dị ứng màu đỏ nổi bật tự động đính kèm và thanh tiến trình 4 mốc thời gian thực để chủ nuôi luôn an tâm theo dõi từ xa.

---

## Chương 7. Đánh giá thiết kế

### 7.1. Mục tiêu đánh giá

Nêu rõ đợt đánh giá nhằm kiểm tra điều gì:

* Giao diện mới có giúp chủ nuôi đặt lịch nhanh chóng và chính xác hơn không?
* Tính năng theo dõi tiến độ 4 mốc có mang lại sự an tâm và minh bạch không?
* Giao diện có giảm thiểu sai sót trong việc ghi nhận dặn dò đặc biệt/dị ứng không?
* Mức độ hài lòng của người dùng đối với thiết kế mới ra sao?

Mục tiêu đánh giá phải bám sát mục tiêu trải nghiệm và mục tiêu thiết kế.

### 7.2. Phương pháp đánh giá

Trình bày phương pháp thực tế đã sử dụng:

* Kiểm thử tính khả dụng (Usability testing) kết hợp giao thức nghĩ thành tiếng (Think-aloud)
* Đo lường thang đo tính khả dụng hệ thống (System Usability Scale - SUS)
* Khảo sát hoặc phỏng vấn sau kiểm thử (Post-test questionnaire / interview)

Không được tuyên bố A/B testing nếu dự án không thực hiện A/B testing.

### 7.3. Người tham gia đánh giá

Trình bày:

* Số lượng người tham gia
* Đặc điểm người dùng (Chủ nuôi thú cưng)
* Tiêu chí tuyển chọn

Chỉ sử dụng dữ liệu người tham gia thực tế, không bịa số liệu.

### 7.4. Tác vụ kiểm thử

Liệt kê các tác vụ người tham gia thực hiện trong kịch bản kiểm thử:

* Tác vụ 1: Đặt lịch dịch vụ tắm & cắt tỉa, chọn khung giờ còn trống và kiểm tra dặn dò dị ứng.
* Tác vụ 2: Theo dõi tiến độ chăm sóc thú cưng trên màn hình Live Tracking.
* Tác vụ 3: Tra cứu lịch sử chăm sóc và ghi chú của lượt chăm sóc trước.

### 7.5. Chỉ số đo lường

Trình bày các chỉ số đo lường định lượng và định tính:

* Tỷ lệ hoàn thành tác vụ (Task completion rate - %)
* Thời gian thực hiện tác vụ (Time on task - giây)
* Tỷ lệ lỗi / Số lỗi phát sinh (Error rate / Number of errors)
* Điểm số hài lòng SUS (SUS score)

Không tự tạo chỉ số sau khi đánh giá đã kết thúc.

### 7.6. Quy trình đánh giá

Mô tả các bước tổ chức:

1. Chuẩn bị người tham gia và thiết bị
2. Thực hiện tác vụ theo kịch bản
3. Quan sát và ghi nhận hành vi/lời nói
4. Điền phiếu đánh giá / Phỏng vấn nhanh
5. Tổng hợp và phân tích dữ liệu

### 7.7. Kết quả đánh giá

Trình bày kết quả bằng:

* Bảng số liệu tổng hợp
* Biểu đồ trực quan
* Thống kê mô tả

Phải giữ nguyên số liệu từ các artifact đánh giá thực tế.

### 7.8. Thảo luận và phân tích

Giải thích:

* Kết quả đo lường phản ánh điều gì?
* Các mục tiêu thiết kế ban đầu có đạt được không?
* Các điểm đau nêu trong Proposal có được giải quyết triệt để không?
* Còn tồn tại vấn đề trải nghiệm nào cần tiếp tục tinh chỉnh?

---

## Chương 8. Thiết kế cuối cùng

### 8.1. Bản mẫu hoàn thiện

Trình bày phiên bản thiết kế cuối cùng sau khi đã tiếp thu và hoàn thiện từ kết quả đánh giá. Nêu rõ những điểm điều chỉnh sau đợt kiểm thử.

### 8.2. Các cải tiến thiết kế then chốt

Tổng hợp các cải tiến then chốt so với quy trình cũ:

| Vấn đề quy trình cũ (Proposal) | Giải pháp thiết kế mới | Cải thiện trải nghiệm đạt được |
| :--- | :--- | :--- |
| Chờ xác nhận lịch hẹn lâu | Đặt lịch có xác nhận tức thì | Chủ động thời gian, biết chắc lịch được nhận |
| Thất lạc dặn dò đặc biệt/dị ứng | Tự động đính kèm hồ sơ thú cưng | Loại bỏ 100% rủi ro quên dặn dò nguy hiểm |
| Mù mờ về tiến độ chăm sóc | Thanh tiến trình 4 mốc thời gian thực | Minh bạch thông tin, an tâm tuyệt đối |
| Không có lịch sử lưu trữ | Nhật ký chăm sóc cá nhân hóa | Dễ dàng tra cứu lại dịch vụ và sản phẩm |

### 8.3. So sánh trước và sau cải tiến

So sánh trực quan và định lượng giữa:

* Quy trình/giao diện cũ (As-Is)
* Thiết kế cải tiến hoàn thiện (To-Be)
* Các chỉ số đo lường cải thiện thực tế

---

## Chương 9. Kết luận

### 9.1. Tổng kết đề tài

Tóm tắt ngắn gọn hành trình của đề tài:

**Vấn đề ban đầu (Proposal) → Nghiên cứu người dùng → Yêu cầu & Thiết kế → Bản mẫu tương tác → Đánh giá kiểm thử → Kết quả hoàn thiện**

### 9.2. Đóng góp của đề tài

Nêu cụ thể những đóng góp của đồ án:

* Cải thiện trải nghiệm đặt lịch và theo dõi chăm sóc thú cưng cho chủ nuôi bận rộn.
* Bản mẫu tương tác hoàn chỉnh giải quyết triệt để 4 điểm đau cốt lõi trong Proposal.
* Bộ dữ liệu nghiên cứu và kết quả đánh giá tính khả dụng thực tế.

### 9.3. Hạn chế của đề tài

Nêu các giới hạn khách quan:

* Quy mô mẫu khảo sát và kiểm thử còn khiêm tốn.
* Bản mẫu tập trung vào trải nghiệm ứng dụng phía chủ nuôi, chưa tích hợp phần cứng camera giám sát trực tiếp tại cơ sở.
* Thời gian kiểm thử giới hạn trong phạm vi đồ án môn học.

### 9.4. Hướng phát triển tương lai

Đề xuất định hướng mở rộng:

* Mở rộng kiểm thử với nhóm người dùng đa dạng hơn.
* Phát triển phân hệ dành cho nhân viên cơ sở chăm sóc để cập nhật mốc tiến độ tự động qua quét mã QR.
* Tích hợp nhắc lịch tiêm chủng và gợi ý dịch vụ chăm sóc định kỳ cá nhân hóa.


---

# 12. Evidence Traceability

Báo cáo phải duy trì traceability giữa các phần.

Ưu tiên chuỗi:

**Research Finding**
↓
**User Need / Pain Point**
↓
**User Requirement**
↓
**Design Goal**
↓
**Design Decision**
↓
**Prototype**
↓
**Evaluation Task / Metric**
↓
**Evaluation Result**
↓
**Final Design Improvement**

Nếu một design decision không thể trace về user need, requirement hoặc usability problem, agent phải kiểm tra lại rationale.

Nếu một claim không có evidence, không được trình bày claim đó như fact.

---

# 13. Figures and Tables

Mỗi figure/table phải có:

* Number
* Title/caption
* Context trong nội dung
* Source hoặc artifact reference nếu cần

Không chèn hình chỉ để làm báo cáo dài.

Khi reference figure trong nội dung, dùng cách nhất quán:

> As shown in Figure 4, ...

Bảng phải phục vụ một mục đích phân tích cụ thể.

---

# 14. Citation and References

Chỉ sử dụng:

* Approved references
* Sources thực sự được sử dụng
* Sources có thể kiểm chứng

Không được:

* Bịa citation
* Bịa DOI
* Bịa URL
* Bịa author
* Bịa publication
* Thêm reference chỉ để làm bibliography dài hơn

Mọi source được liệt kê trong References phải thực sự được sử dụng trong báo cáo.

Mọi citation quan trọng trong nội dung phải có entry tương ứng trong References.

---

# 15. Writing Rules

Báo cáo phải:

* Viết theo academic/professional style
* Rõ ràng và trực tiếp
* Không kể chuyện lan man
* Không lặp lại cùng một thông tin ở nhiều chapter
* Phân biệt rõ observation, evidence, interpretation và conclusion
* Dùng thuật ngữ HCI/UX nhất quán
* Giữ nhất quán tên hệ thống, user role, task và feature
* Giữ nguyên số liệu và version
* Không phóng đại kết quả

Không viết:

> The design completely solved the usability problem.

Nếu evidence chỉ cho thấy improvement, viết:

> The evaluation results suggest that the redesign improved the identified usability problem.

---

# 16. Missing Evidence

Khi thiếu dữ liệu:

1. Xác định chính xác phần bị thiếu.
2. Đánh dấu phần đó là incomplete/draft.
3. Nêu artifact hoặc input cần bổ sung.
4. Không tự tạo dữ liệu để lấp khoảng trống.

Ví dụ:

> [Evidence required: usability evaluation results for task completion rate.]

Không viết:

> The task completion rate improved significantly.

nếu chưa có dữ liệu.

---

---

# 17. Consistency Check

Trước khi hoàn thành báo cáo, kiểm tra:

### Proposal Alignment (Bắt buộc)

* [ ] Tên đề tài, bối cảnh và bài toán khớp hoàn toàn với Proposal (`docs/proposal.md`)
* [ ] Đối tượng người dùng mục tiêu và Persona nền tảng bám sát Proposal (chủ nuôi thú cưng bận rộn)
* [ ] 4 trụ cột tính năng cốt lõi được kế thừa trung thực: Đặt lịch tức thì, Hồ sơ dặn dò dị ứng/thuốc, Theo dõi tiến độ 4 mốc thời gian thực, Lịch sử chăm sóc cá nhân hóa
* [ ] So sánh quy trình hiện tại (As-Is) và quy trình đề xuất (To-Be) nhất quán với 6 bước trong Proposal
* [ ] Không tự ý mở rộng phạm vi sản phẩm vượt ngoài định hướng Proposal đã duyệt

### Persona & Value Proposition Coverage (Bắt buộc)

* [ ] Đưa vào đầy đủ 100% tất cả các Persona của dự án (`deliverables/01-user-research/persona/`), không bỏ sót Persona nào
* [ ] Mỗi Persona đều có bản Đề xuất giá trị (Value Proposition Canvas) đối ứng 1-1 tương ứng (`deliverables/01-user-research/value-proposition/`)
* [ ] Tỷ lệ đối ứng chuẩn: Số lượng Persona = Số lượng bản Đề xuất giá trị


### Heading Language (100% Tiếng Việt)

* [ ] 100% tiêu đề chương (`\section`), mục (`\subsection`), tiểu mục (`\subsubsection`) là tiếng Việt thuần túy
* [ ] Tuyệt đối không có tiêu đề dạng song ngữ mở ngoặc tiếng Anh kèm theo (như `Giới thiệu (Introduction)`, `Nghiên cứu người dùng (User Research)`...)
* [ ] Tuyệt đối không có tiêu đề tiếng Anh thuần túy (như `Project Background`, `Target Users`...)

### Content

* [ ] Bối cảnh đề tài phù hợp với Phát biểu bài toán
* [ ] Vấn đề được hỗ trợ bởi Nghiên cứu người dùng
* [ ] Kết quả nghiên cứu dẫn đến Nhu cầu người dùng
* [ ] Nhu cầu người dùng dẫn đến Yêu cầu người dùng
* [ ] Yêu cầu người dùng dẫn đến Mục tiêu thiết kế
* [ ] Vấn đề quy trình cũ được giải quyết bằng các Quyết định thiết kế
* [ ] Bản mẫu phản ánh đúng các Quyết định thiết kế
* [ ] Đánh giá kiểm thử đo lường đúng Mục tiêu thiết kế
* [ ] Kết quả đánh giá được dùng để giải thích Thiết kế cuối cùng
* [ ] Kết luận phản ánh trung thực Kết quả đạt được

### Evidence

* [ ] Không có fabricated research
* [ ] Không có fabricated participants
* [ ] Không có fabricated results
* [ ] Không có fabricated citations
* [ ] Không có unsupported claims
* [ ] Bản mẫu không bị mô tả thành fully functional software

### Structure

* [ ] Đủ Chương 1–9 chuẩn HCI
* [ ] Đủ các mục con theo template tiếng Việt
* [ ] Hình ảnh (Figures) được đánh số và chú thích
* [ ] Bảng biểu (Tables) được đánh số và chú thích
* [ ] Danh mục Tài liệu tham khảo đầy đủ
* [ ] Phụ lục (Appendix) chứa Ma trận Bằng chứng và Bảng đóng góp thành viên

### Submission

* [ ] Tiêu đề đúng yêu cầu hiện hành
* [ ] Định dạng đúng yêu cầu hiện hành
* [ ] Dung lượng / số trang đúng quy định (>6 trang)
* [ ] File PDF hoàn tất `report.pdf` đã được sao chép ra ngoài cùng thư mục báo cáo
* [ ] PDF render không lỗi cú pháp hoặc tràn chữ

---

# 18. Quy trình tự động Build LaTeX thông minh & Xuất bản `report.pdf`

Mỗi khi có **bất kỳ thay đổi nào** trong nội dung báo cáo (file `.tex`, hình ảnh, bảng biểu, trích dẫn, references hoặc file phụ trợ), `report-agent` **PHẢI tự động chạy tiến trình build PDF** theo cơ chế 2 trường hợp (Dual-Mode), sau đó **tự động sao chép file `build/main.pdf` ra ngoài cùng thư mục báo cáo với tên `report.pdf`**:

### 18.1. Cơ chế tự động phát hiện & Lựa chọn công cụ

Agent kiểm tra môi trường hệ thống để quyết định phương thức biên dịch:

```text
[Kiểm tra xelatex trên máy]
       │
       ├─► (Có sẵn compiler) ──► Trường hợp 1: Biên dịch trực tiếp qua Local XeLaTeX (Nhanh, không cần Docker)
       │                         └──► Sao chép: build/main.pdf ➔ report.pdf
       │
       └─► (Chưa cài compiler) ─► Trường hợp 2: Biên dịch qua Docker Container (Chứa sẵn TeX Live + Font)
                                 └──► Sao chép: build/main.pdf ➔ report.pdf
```

---

### 18.2. Chi tiết 2 Trường hợp Biên dịch & Tự động sao chép `report.pdf`

#### Trường hợp 1: Sử dụng Compiler có sẵn trên máy (Local XeLaTeX)
- **Áp dụng khi**: Máy host đã cài sẵn `MiKTeX` hoặc `TeX Live` (lệnh `xelatex` khả dụng).
- **Lệnh thực thi (PowerShell):**
  ```powershell
  cd <thư_mục_chứa_file_tex>
  if (!(Test-Path build)) { New-Item -ItemType Directory build }
  xelatex -synctex=1 -interaction=nonstopmode -file-line-error -output-directory=build <file_chính>.tex
  if (Test-Path build/<file_chính>.pdf) { Copy-Item build/<file_chính>.pdf -Destination report.pdf -Force }
  ```
- **Ví dụ cụ thể:**
  ```powershell
  cd templates\report; if (!(Test-Path build)) { New-Item -ItemType Directory build }; xelatex -synctex=1 -interaction=nonstopmode -file-line-error -output-directory=build main.tex; if (Test-Path build/main.pdf) { Copy-Item build/main.pdf -Destination report.pdf -Force }
  ```

#### Trường hợp 2: Biên dịch qua Docker Image (Fallback Docker)
- **Áp dụng khi**: Máy host chưa cài TeX Live / MiKTeX hoặc bị thiếu package/font.
- **Docker Image**: `ghcr.io/tinnguyen0706/latex-times-new-roman:latest`
- **Lệnh thực thi (PowerShell):**
  ```powershell
  docker run --rm --volume "${PWD}:/workspace" --workdir /workspace/<thư_mục_chứa_file_tex> ghcr.io/tinnguyen0706/latex-times-new-roman:latest latexmk -synctex=1 -interaction=nonstopmode -file-line-error -xelatex -outdir=build <file_chính>.tex
  if (Test-Path <thư_mục_chứa_file_tex>/build/<file_chính>.pdf) { Copy-Item <thư_mục_chứa_file_tex>/build/<file_chính>.pdf -Destination <thư_mục_chứa_file_tex>/report.pdf -Force }
  ```
- **Lệnh thực thi (Linux/Bash):**
  ```bash
  docker run --rm \
    --volume "$PWD:/workspace" \
    --workdir /workspace/<thư_mục_chứa_file_tex> \
    ghcr.io/tinnguyen0706/latex-times-new-roman:latest \
    latexmk -synctex=1 -interaction=nonstopmode -file-line-error -xelatex -outdir=build <file_chính>.tex && \
  cp <thư_mục_chứa_file_tex>/build/<file_chính>.pdf <thư_mục_chứa_file_tex>/report.pdf
  ```

---

### 18.3. Quy tắc bắt buộc sau khi Build

1. **Kiểm tra Log & Exit Code**: Đảm bảo quá trình biên dịch trả về exit code 0, không có lỗi fatal (missing package, unescaped character, broken syntax).
2. **Kiểm tra File đầu ra `report.pdf`**:
   - File PDF gốc được tạo tại `<thư_mục_chứa_file_tex>/build/main.pdf`.
   - File xuất bản cuối cùng **BẮT BUỘC** phải xuất hiện tại `<thư_mục_chứa_file_tex>/report.pdf` (nằm ở ngoài cùng thư mục báo cáo, cùng cấp với `main.tex`) và có timestamp mới nhất.
3. **Không đánh dấu hoàn thành nếu build lỗi hoặc thiếu `report.pdf`**: Tuyệt đối không hoàn tất tác vụ hoặc báo cáo thành công nếu lệnh build thất bại hoặc file `report.pdf` chưa được sao chép ra ngoài cùng.

---

# 19. Final Validation

Chỉ gọi báo cáo là **submission-ready** khi:

1. Nội dung đã hoàn chỉnh và bám sát Proposal.
2. 100% tiêu đề chương và mục là Tiếng Việt thuần túy, không mở ngoặc tiếng Anh.
3. Evidence đã được kiểm tra và truy vết đầy đủ.
4. Citation đã được kiểm tra.
5. Structure đúng yêu cầu 9 chương chuẩn HCI.
6. PDF đã được tự động build và render thành công (qua Local XeLaTeX hoặc Docker).
7. File `report.pdf` đã hiện diện ở ngoài cùng thư mục báo cáo và được kiểm tra trực quan.
8. Không có:
   * Broken links
   * Missing figures / tables
   * Overflowing text
   * Blank pages bất thường
   * Broken characters / font issues
   * Incorrect page numbering
   * Inconsistent headings

Nếu còn lỗi, trạng thái phải là:

**DRAFT / NEEDS REVISION**

---

# 20. Output States

Agent phải phân biệt rõ ba trạng thái:

### DRAFT

Báo cáo còn thiếu evidence, chưa bám sát Proposal hoặc chưa hoàn thiện nội dung.

### REVIEW-READY

Nội dung đã hoàn chỉnh theo Proposal, tiêu đề 100% tiếng Việt, đã build ra `report.pdf` nhưng còn cần human review hoặc format validation.

### SUBMISSION-READY

Đã hoàn tất content bám sát Proposal, evidence, citation, formatting, tiêu đề 100% tiếng Việt, PDF validation và file `report.pdf` hoàn chỉnh ở ngoài cùng thư mục báo cáo.


