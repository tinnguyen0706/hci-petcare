# Quy tắc Storyboard

Tệp này quy định các chuẩn mực, ràng buộc và tiêu chuẩn chất lượng bắt buộc mà mọi agent và skill tạo Storyboard phải tuân thủ nghiêm ngặt.

---

## 1. Quy tắc về Tính tương ứng và Nguồn dữ liệu

- **Nguyên tắc 1-1-1**: Một Persona–Goal tương ứng với đúng một Scenario Future và đúng một Storyboard. Tuyệt đối không ghép nhiều Goal vào một Storyboard và không ghi đè dữ liệu của Persona–Goal khác.
- **Phạm vi thực thi**: Mặc định mỗi lần chỉ tạo Storyboard cho một cặp Persona–Goal. Chỉ xử lý batch khi người dùng yêu cầu rõ ràng; mỗi cặp vẫn phải có thư mục và bộ artifact độc lập.
- **Tính trung thực với dữ liệu (Data Integrity)**: Mọi nhân vật, thú cưng, hành động, bối cảnh, điểm đau và giá trị mang lại trong Storyboard phải truy vết trực tiếp từ `personas.json`, `value-proposition.json` và `scenario-future-*.md`.
- **Cấm bịa đặt**: Tuyệt đối không tự ý thêm nhân vật phụ, đổi loại thú cưng, thêm tính năng hoặc đổi bối cảnh ngoài phạm vi nghiên cứu người dùng đã xác thực.
- **Không áp đặt hành trình**: Sáu frame là sáu nhịp kể chuyện, không phải sáu tính năng cố định. Nội dung từng frame phải được suy ra từ đúng Scenario Future của Goal đang xử lý; không tự thêm đặt lịch, bàn giao, theo dõi, lịch sử, đánh giá hoặc kết quả tuyệt đối nếu Scenario không nêu.
- **Truy vết theo frame**: Mỗi frame trong `data.json` phải có `sourceRefs` trỏ tới các nguồn Persona, Value Proposition và Scenario Future đã hỗ trợ nội dung frame đó.
- **Direct quote và Thought Bubble**: Chỉ đặt nội dung trong ngoặc kép hoặc dùng nguyên văn trong Thought Bubble khi nguồn có câu nói nguyên văn và `sourceRefs` chỉ rõ nguồn. Trường hợp còn lại phải paraphrase, không trình bày như lời nói thật của người dùng.
- **Không ghi đè hoặc tự tạo phiên bản**: Nếu thư mục đích hoặc bất kỳ artifact đích nào đã tồn tại, phải dừng và báo người dùng; không ghi đè, nối thêm hay tự sinh tên phiên bản.

---

## 2. Quy tắc về Bố cục và Số lượng Khung tranh

- **Đúng 6 Frame**: Mỗi Storyboard bắt buộc gồm đúng 6 khung tranh xếp theo lưới 3 cột × 2 hàng (từ trái sang phải, từ trên xuống dưới).
- **Canvas cố định**: Storyboard tổng hợp phải đúng `1600 × 900 px` (16:9). Mỗi ảnh nguồn `frame-*.png` phải đúng `1280 × 720 px` (16:9); `character-reference.png` phải đúng `1024 × 1024 px`.
- **Bố cục 3 tầng bắt buộc cho mỗi frame**:
  1. *Tầng 1 (Header)*: Số thứ tự màu trắng trong hình tròn đen và tiêu đề hành động ngắn, in đậm đặt bên cạnh.
  2. *Tầng 2 (Khung hình - Figure)*: Ảnh minh họa 16:9 được thu nhỏ bằng `object-fit: contain`, nằm giữa panel và không bị crop.
  3. *Tầng 3 (Caption đáy)*: Lời dẫn câu chuyện 1–2 câu tiếng Việt, căn giữa, cỡ chữ nhỏ hơn tiêu đề và ngăn cách với hình bằng đường kẻ đen.
- **Phân tách nội dung và hình ảnh**: Số thứ tự, tiêu đề header và caption đáy do mã nguồn HTML/CSS kết xuất bằng font chữ viết tay comic (`Patrick Hand`), tuyệt đối không ghép sẵn chữ hay số vào trong file ảnh asset.
- **CSS monochrome bắt buộc**: Template chỉ dùng đen `#000000` và trắng `#ffffff`; không dùng màu thương hiệu, xám, gradient, shadow hoặc nền trang trí.

### Canonical HTML/CSS presentation template

- **Dùng chung một implementation**: Mọi Storyboard phải dùng cùng cấu trúc HTML và cùng bộ thông số CSS dưới đây. Chỉ các nội dung động được thay đổi theo Persona–Goal: metadata trong `<title>`, eyebrow, tiêu đề Storyboard, thông tin Persona, tiêu đề/caption/alt của 6 frame và đường dẫn ảnh.
- **Bắt buộc tải font trước khi render**: Trong `<head>` phải khai báo Google Fonts `Patrick Hand` bằng `preconnect` tới `fonts.googleapis.com`, `fonts.gstatic.com` và stylesheet `https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap`. CSS dùng `font-family: "Patrick Hand", "Comic Sans MS", cursive;`. Không được chỉ khai báo tên font mà không load/import font trước khi render.
- **Canvas chuẩn**: `@page` và `html, body` cố định `1600 × 900 px`; `.canvas` có `padding: 20px 28px 24px`, `grid-template-rows: 74px 1fr` và `gap: 12px`.
- **Header tổng chuẩn**: `.board-header` là hộp viền đen `3px`, `padding: 8px 16px`, dùng flex căn giữa và `justify-content: space-between`. Khối trái gồm `.eyebrow` (`15px`, `line-height: 1`, `letter-spacing: 1.8px`) và `h1` (`30px`, `line-height: 1`); khối phải là `.persona` (`20px`, `white-space: nowrap`).
- **Lưới chuẩn**: `.grid` gồm 3 cột × 2 hàng bằng nhau, `gap: 12px`, `min-height: 0`.
- **Panel chuẩn**: Viền đen `3px`; ba hàng có kích thước `46px minmax(0, 1fr) 74px`. `.panel-header` có `padding: 5px 10px`, `gap: 9px`, viền đáy `2px`; vòng số `31 × 31 px`, chữ số `22px`; `h2` là `24px`, `line-height: 1`, `font-weight: 700`.
- **Figure và caption chuẩn**: `figure` có `padding: 5px 7px`; ảnh chiếm `100% × 100%` và dùng `object-fit: contain`. `.caption` có `padding: 7px 12px 6px`, viền trên `2px`, chữ căn giữa `17px`, `line-height: 1.08` và `overflow: hidden`.

---

## 3. Quy tắc về Phong cách Hình ảnh (Expressive Stick-figure UI Storyboard)

- **Nhân vật người que có biểu cảm (*Expressive Stick Figure*)**:
  - Đầu tròn, thân và tay chân là nét đơn giản; tư thế đứng, ngồi, di chuyển hoặc thao tác phải tự nhiên và dễ đọc.
  - Được dùng tóc, chiều cao tương đối, dáng người và trang phục nét viền tối giản để nhận diện vai trò, nhưng chỉ khi các đặc điểm đó có căn cứ từ Persona/Scenario.
  - Khuôn mặt dùng vài nét mắt, chân mày và miệng để thể hiện cảm xúc; không cường điệu thành phong cách hoạt hình.
  - Nhân vật phụ chỉ xuất hiện khi Scenario/evidence có vai trò đó; không tự thêm người để làm đầy khung hình.
  - **Cấm**: giải phẫu chi tiết, cơ thể 3D, nếp gấp quần áo dày, tô mảng xám, anime/manga, photorealistic hoặc minh họa hoạt hình phức tạp.
- **Góc nhìn & Phối cảnh (Camera Perspective & Viewpoint)**:
  - Sử dụng **Góc nhìn thứ 3 (Third-person view)** khi cần bao quát bối cảnh, nhân vật và tương tác thực địa có trong Scenario.
  - Sử dụng **Góc nhìn thứ nhất / Cận cảnh (POV - Point-of-View)** khi cần tập trung vào thao tác hoặc UI cốt lõi có trong Scenario.
- **Hiệu ứng chuyển động & Mũi tên mô tả (Motion & Directional Arrows)**:
  - Phác thảo mũi tên tay (nét đứt hoặc nét liền) để chỉ hướng di chuyển của nhân vật, hướng nhấc đồ vật hoặc hướng thao tác trên màn hình (swipe/tap/kéo).
  - Vệt sọc gạch ngắn (action dash lines) minh họa sự cử động tay hoặc rung nhẹ của thiết bị/vật thể.
- **Tương tác vật thể (Holding & Lifting Objects)**:
  - Cử chỉ bàn tay nét đơn phải cho thấy rõ cách cầm, ôm, nhấc hoặc thao tác; chỉ vẽ vật thể được Scenario/evidence nhắc tới.
- **Khung giao diện điện thoại phóng to (*Hand-drawn UI Mockup*)**:
  - Ở frame có tương tác ứng dụng, điện thoại được vẽ như khung chữ nhật bo góc, đặt thoáng cạnh nhân vật hoặc theo góc nhìn POV.
  - Bên trong chỉ thể hiện các thành phần liên quan trực tiếp đến thao tác: nút, dropdown, checkbox, lịch/giờ, trạng thái hoặc icon đơn giản. UI phải đủ rõ để hiểu user flow nhưng không thay thế Wireframe hoàn chỉnh và không tự thêm dữ liệu.
  - Khi Scenario cần thể hiện thời gian, dùng đồng hồ số trên điện thoại/màn hình và hiển thị chính xác thời gian có căn cứ từ Scenario/evidence. Không tự đặt giờ khi nguồn không cung cấp; không vẽ đồng hồ kim, mặt đồng hồ tròn hoặc kim giờ–kim phút.
- **Bóng thoại suy nghĩ (*Thought Bubble*)**:
  - Chỉ sử dụng hình đám mây/oval chứa câu nguyên văn khi có direct quote trong nguồn và `sourceRefs` tương ứng. Nếu không có nguyên văn, thể hiện nhu cầu hoặc nỗi lo bằng biểu tượng hay caption paraphrase, không đặt trong ngoặc kép như lời nói thật.
- **Nền và Màu sắc**:
  - Bảng màu thiết kế chỉ gồm nét đen `#000000` trên nền trắng `#ffffff`, độ tương phản cao; không dùng màu, mảng tô xám, gradient, texture màu, shadow hoặc khối 3D. Anti-aliasing kỹ thuật ở mép nét và chữ được chấp nhận.
  - Bối cảnh phụ chỉ gồm vài nét gợi không gian và chỉ xuất hiện khi có căn cứ; không thêm chi tiết trang trí rườm rà.

---

## 4. Quy tắc về Tiêu chuẩn Nghiệm thu (Acceptance Criteria)

Một Storyboard chỉ được nghiệm thu đạt chuẩn khi đáp ứng đủ các tiêu chí:
1. Đầy đủ các tệp bàn giao trong `deliverables/02-interaction-design/storyboard/<persona-id>/<goal-id>/`:
   - `data.json` (đầy đủ metadata 6 frame, không thiếu trường).
   - `assets/frame-1.png` đến `assets/frame-6.png` (đúng `1280 × 720 px`, tỷ lệ 16:9, chuẩn Expressive Stick-figure UI line art đen–trắng).
   - `character-reference.png` (đúng `1024 × 1024 px`, nằm trong cùng thư mục Persona–Goal và khớp nhân vật, thú cưng xuyên suốt 6 frame).
   - `storyboard.html` & `style.css` (bố cục 3 tầng chuẩn).
   - `storyboard.png` (đúng `1600 × 900 px`, không bị cắt cụt caption hay mất viền).
2. Hình ảnh thể hiện rõ sự kết hợp giữa **Storytelling** và **Sketching**: nhân vật có nhận diện, tư thế và cảm xúc dễ đọc; UI mockup và bối cảnh phụ thoáng, không che khuất nhau.
3. Mỗi frame có `sourceRefs` hợp lệ và không có direct quote hoặc Thought Bubble giả nguồn.
4. `storyboard.png` đã được mở và kiểm tra trực quan; đủ 6 frame, đúng thứ tự, chữ đọc được, không bị cắt hình, caption hoặc viền.
5. Toàn bộ template và asset có bảng màu thiết kế đen–trắng; không xuất hiện màu, mảng tô xám, gradient hoặc shadow. Anti-aliasing kỹ thuật ở mép nét/chữ không bị xem là vi phạm.
6. Kích thước pixel được kiểm tra từ metadata PNG: 6 frame `1280 × 720`, Character Reference `1024 × 1024`, Storyboard tổng `1600 × 900`.
