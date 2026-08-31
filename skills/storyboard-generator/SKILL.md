---
name: storyboard-generator
description: Hướng dẫn chi tiết cách suy luận, kỹ thuật ghép mã nguồn HTML/CSS 3 tầng và quy trình kết xuất ảnh Storyboard PNG chất lượng cao.
---

# Kỹ năng Tổng hợp & Kết xuất Storyboard (Storyboard Generator)

## 1. Kiến thức nền tảng (Domain Knowledge)

### 1.1. Phân biệt Storyboard với Wireframe và Prototype
- **Storyboard**: Tập trung vào **con người, ngữ cảnh sử dụng thực tế và dòng trải nghiệm cảm xúc**. Khung UI phóng to chỉ là một phần để minh họa hành động của nhân vật.
- **Wireframe**: Tập trung vào **cấu trúc giao diện, bố cục thành phần, hệ thống phân cấp thông tin và luồng màn hình**.
- **Prototype**: Tập trung vào **khả năng tương tác trực tiếp, phản hồi trạng thái và kiểm thử tính khả dụng**.

### 1.2. Vai trò của Bố cục 3 tầng và Typography
- **Bố cục 3 tầng**: Giúp người xem nắm bắt thông tin theo trình tự tự nhiên:
  1. *Header*: Định hướng hành động chính của bước.
  2. *Figure*: Trực quan hóa bối cảnh, nhân vật *Expressive Stick-figure* và thao tác UI có evidence.
  3. *Caption đáy*: Cung cấp bối cảnh chi tiết và lời dẫn giải thích.
- **Typography**: Sử dụng font chữ viết tay comic tự nhiên (`Patrick Hand`) để tạo cảm giác đồng nhất với line art đen `#000` trên nền trắng `#fff`; không dùng màu, mảng tô xám, gradient hoặc shadow. Anti-aliasing kỹ thuật của font được chấp nhận.

---

## 2. Cách suy luận & Kiểm tra tính tương thích (Reasoning Strategy)

### 2.1. Kiểm tra tính khớp nối giữa Hình và Chữ
- Tiêu đề trên Header (`stepName`) phải tóm tắt chính xác hành động diễn ra trong hình vẽ ở giữa.
- Caption ở đáy (`story`) phải giải thích lý do, cảm xúc và phản hồi hệ thống tương ứng với hình vẽ, không mâu thuẫn hay lệch pha với hình ảnh.

### 2.2. Kiểm tra Mạch đọc thị giác (Visual Flow)
- Đảm bảo 6 khung hình được xếp đúng thứ tự kể chuyện đã ghi trong `data.json`:
  - Hàng 1: Frame 1 $\rightarrow$ Frame 2 $\rightarrow$ Frame 3.
  - Hàng 2: Frame 4 $\rightarrow$ Frame 5 $\rightarrow$ Frame 6.
- Tên bước và nội dung mỗi frame phải được suy ra từ đúng Scenario Future của Persona–Goal, không áp đặt một chuỗi tính năng cố định.

---

## 3. Cách làm chi tiết & Render PNG (Execution Guide)

### 3.1. Cấu trúc mã HTML 3 tầng chuẩn
Mỗi khung tranh được render trong `storyboard.html` theo cấu trúc semantic:
```html
<article class="storyboard-frame">
  <!-- Tầng 1: Header -->
  <header class="storyboard-frame__header">
    <span class="storyboard-frame__number">1</span>
    <h2 class="storyboard-frame__title">Tiêu đề bước</h2>
  </header>

  <!-- Tầng 2: Figure ảnh ngang 16:9 -->
  <figure class="storyboard-frame__figure">
    <img src="assets/frame-1.png" alt="Mô tả frame 1" class="storyboard-frame__image">
  </figure>

  <!-- Tầng 3: Caption đáy -->
  <footer class="storyboard-frame__caption">
    <p>Lời dẫn diễn biến câu chuyện 1-2 câu tiếng Việt.</p>
  </footer>
</article>
```

### 3.2. Lệnh kết xuất ảnh PNG tối ưu (Render Command)
Kết xuất toàn bộ `storyboard.html` vào canvas PNG cố định `1600×900` (`16:9`) và đảm bảo toàn bộ caption, viền cùng 6 frame nằm trong viewport, không cắt mép.
```
python tools/render-html-to-png.py "<output-dir>/storyboard.html" "<output-dir>/storyboard.png" --width 1600 --height 900 --scale 1 --wait-ms 1500
```

---

## 4. Xác thực & Tiêu chí Nghiệm thu (Validation)

Kiểm tra chất lượng thành phẩm theo checklist:
- [ ] **Mã nguồn sạch**: HTML không chứa thẻ thừa, không token `{{...}}` chưa được thay thế.
- [ ] **CSS chuẩn**: Áp dụng font `Patrick Hand`, viền nét đen 2px rõ ràng, bố cục lưới 3 cột x 2 hàng.
- [ ] **Canvas và Figure đúng contract**: Canvas CSS và PNG cuối là `1600×900` (`16:9`); vùng Figure dùng tỷ lệ `16:9`, không còn giả định ảnh vuông.
- [ ] **Monochrome đồng nhất**: HTML/CSS và mọi asset dùng bảng màu thiết kế `#000` trên `#fff`; không màu, mảng tô xám, gradient, shadow hoặc shading. Anti-aliasing kỹ thuật ở mép nét/chữ được chấp nhận.
- [ ] **Style hình ảnh đạt chuẩn**: Nhân vật có tóc, trang phục viền đơn, dáng tự nhiên, biểu cảm rõ và diện mạo đúng Persona; không anatomy chi tiết hoặc 3D.
- [ ] **UI đúng mức chi tiết**: UI phone mockup đủ hiểu nút, dropdown, checkbox, lịch hoặc icon có evidence nhưng không biến thành Wireframe hoàn chỉnh.
- [ ] **Bộ đầu vào tự chứa**: Có `data.json`, `character-reference.png` và đúng 6 ảnh trong `assets/` tại cùng thư mục Persona–Goal.
- [ ] **Kích thước input chính xác**: `character-reference.png` là `1024×1024`; từng frame là `1280×720` PNG; `frameSize` và `canvasSize` trong `data.json` khớp các file thực tế.
- [ ] **Truy vết đầy đủ**: Mỗi frame trong `data.json` có `sourceRefs` hợp lệ và nội dung khớp với Persona, Value Proposition, Scenario Future tương ứng.
- [ ] **Không ghi đè**: Các artifact mà Generator chuẩn bị tạo (`storyboard.html`, `style.css`, `storyboard.png`) chưa tồn tại; nếu đã tồn tại thì dừng, không ghi đè hoặc tự tạo phiên bản.
- [ ] **Ảnh PNG hoàn hảo**: `storyboard.png` có kích thước pixel chính xác `1600×900`; kiểm tra bằng mắt để đảm bảo nét chữ sắc nét, đủ 6 frame và toàn bộ caption đáy không bị cắt mép.
