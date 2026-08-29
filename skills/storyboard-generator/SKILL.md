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
  2. *Figure*: Trực quan hóa bối cảnh, nhân vật người que và thao tác.
  3. *Caption đáy*: Cung cấp bối cảnh chi tiết và lời dẫn giải thích.
- **Typography**: Sử dụng font chữ viết tay comic tự nhiên (`Patrick Hand`) để tạo cảm giác đồng nhất, gần gũi với nét vẽ phác thảo tay mực đen.

---

## 2. Cách suy luận & Kiểm tra tính tương thích (Reasoning Strategy)

### 2.1. Kiểm tra tính khớp nối giữa Hình và Chữ
- Tiêu đề trên Header (`stepName`) phải tóm tắt chính xác hành động diễn ra trong hình vẽ ở giữa.
- Caption ở đáy (`story`) phải giải thích lý do, cảm xúc và phản hồi hệ thống tương ứng với hình vẽ, không mâu thuẫn hay lệch pha với hình ảnh.

### 2.2. Kiểm tra Mạch đọc thị giác (Visual Flow)
- Đảm bảo 6 khung hình được xếp đúng thứ tự:
  - Hàng 1: Frame 1 (Bối cảnh/Trigger) $\rightarrow$ Frame 2 (Xem hồ sơ/Dịch vụ) $\rightarrow$ Frame 3 (Đặt lịch)
  - Hàng 2: Frame 4 (Bàn giao tại quầy) $\rightarrow$ Frame 5 (Chăm sóc/Tiến độ) $\rightarrow$ Frame 6 (Kết quả/Lưu lịch sử)

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

  <!-- Tầng 2: Figure ảnh 1:1 -->
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
Để đảm bảo ảnh xuất ra đạt chất lượng in ấn khổ ngang và toàn bộ các ô caption ở hàng đáy hiển thị 100% không bị cắt viền, xuất toàn bộ `storyboard.html` sang PNG, không cắt mép gì cả.
```

---

## 4. Xác thực & Tiêu chí Nghiệm thu (Validation)

Kiểm tra chất lượng thành phẩm theo checklist:
- [ ] **Mã nguồn sạch**: HTML không chứa thẻ thừa, không token `{{...}}` chưa được thay thế.
- [ ] **CSS chuẩn**: Áp dụng font `Patrick Hand`, viền nét đen 2px rõ ràng, bố cục lưới 3 cột x 2 hàng.
- [ ] **Tài liệu `storyboard.md`**: Đầy đủ bảng phân tích Context of Use và mô tả 6 frame.
- [ ] **Ảnh PNG hoàn hảo**: Kiểm tra file `storyboard.png` bằng mắt để đảm bảo nét chữ sắc nét, toàn bộ caption đáy không bị cắt mép.
