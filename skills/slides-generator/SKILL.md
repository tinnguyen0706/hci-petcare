---
name: slides-generator
description: Tạo bộ slide thuyết trình LaTeX Beamer theme Madrid từ báo cáo đồ án HCI đã hoàn tất. Kế thừa 100% nội dung báo cáo, chắt lọc ý chính thành bullet, numeric, metric cards với văn phong tạp chí truyền thông. Thực hiện sao chép tài nguyên từ docs/report sang docs/slides, tự động build và xuất bản docs/slides.pdf.
---

# Skill: Slides Generator

## 1. Mục Đích

Kỹ năng này chịu trách nhiệm chuyển thể toàn bộ quá trình nghiên cứu, thiết kế và kết quả từ **Báo cáo cuối kỳ** (`docs/report/`) thành một bộ **Slide thuyết trình chuyên nghiệp, lôi cuốn theo phong cách tạp chí truyền thông (Editorial Media Magazine)**, sử dụng LaTeX Beamer với theme **Madrid**, và tự động biên dịch xuất bản ra file `docs/slides.pdf`.

---

## 2. Tiền Điều Kiện Bắt Buộc (Strict Precondition Enforcement)

> [!IMPORTANT]
> **Quy tắc Bất Khả Xâm Phạm**: Slides phải được xây dựng **100% dựa trên Báo cáo đã hoàn tất**. Nếu chưa có báo cáo thì **TUYỆT ĐỐI KHÔNG ĐƯỢC THỰC HIỆN** mà phải dừng lại ngay lập tức và báo lỗi.

### Quy trình kiểm tra tiền điều kiện:
Trước khi thực hiện bất kỳ thao tác nào, Agent/Skill phải kiểm tra:
1. Thư mục `docs/report/` có tồn tại hay không.
2. File `docs/report/main.tex` và thư mục `docs/report/content/` có tồn tại và đã chứa nội dung báo cáo hoàn chỉnh hay chưa.
3. Nếu không tìm thấy hoặc nội dung báo cáo rỗng:
   - **DỪNG LẠI NGAY LẬP TỨC (HALT)**.
   - Xuất thông báo lỗi rõ ràng ra màn hình:
     ```text
     [LỖI TIỀN ĐIỀU KIỆN - PRECONDITION FAILED]: 
     Không tìm thấy báo cáo tại 'docs/report/' hoặc nội dung báo cáo chưa hoàn thiện!
     Tác vụ tạo Slides bắt buộc phải dựa hoàn toàn vào Báo cáo cuối kỳ đã được hoàn tất.
     Vui lòng chạy 'report-agent' để hoàn thành báo cáo trước khi khởi tạo Slides.
     ```
   - Tuyệt đối không tự suy diễn nội dung hoặc tạo slide khi chưa có báo cáo.

---

## 3. Cẩm Nang Văn Phong Tạp Chí Truyền Thông (Media Magazine Style Guide)

Slide thuyết trình không phải là nơi đọc lại tài liệu, mà là phương tiện truyền thông trực quan dẫn dắt câu chuyện (Storytelling).

### 3.1. Kỹ thuật đặt tiêu đề Editorial (Insight-Driven Headlines)
- **Không dùng tiêu đề mục vụng về**: Tránh đặt tiêu đề trơ trọi như `Chương 2. Nghiên cứu người dùng`, `2.3. Khảo sát`, `5.1. Kiến trúc`.
- **Dùng Headline mang tính báo chí**: Đặt tiêu đề gợi mở, nêu bật phát hiện hoặc thông điệp cốt lõi:
  - Thay vì *"2.1. Vấn đề quy trình cũ"*, dùng: *"Nghịch lý thời gian: Khi 78% chủ nuôi bận rộn đối mặt quy trình thủ công"*.
  - Thay vì *"3.2. Mục tiêu thiết kế"*, dùng: *"4 Trụ cột chuyển dịch: Tái định hình trải nghiệm chăm sóc thú cưng"*.
  - Thay vì *"7.7. Kết quả đánh giá"*, dùng: *"Chứng thực thực nghiệm: SUS đạt 84.5 điểm và tỷ lệ hoàn thành tác vụ 95%"*.

### 3.2. Quy chuẩn Chắt lọc Nội dung: Bullet, Numeric & Metric Callouts
- **Tuyệt đối CẤM copy nguyên đoạn văn**: Toàn bộ văn bản phải được cô đọng hóa.
- **Quy tắc 4–6 gạch đầu dòng**: Mỗi slide chỉ chứa tối đa 4 đến 6 ý chính.
- **Quy tắc 1 ý / dòng với từ khóa in đậm**: Luôn có cụm từ dẫn dắt nổi bật ở đầu mỗi bullet:
  ```latex
  \begin{itemize}
    \item \textbf{Xác nhận tức thì:} Cắt giảm thời gian chờ phản hồi từ 45 phút xuống dưới 3 giây.
    \item \textbf{Hồ sơ y tế tự động:} Loại bỏ hoàn toàn tình trạng thất lạc thông tin dị ứng hay dặn dò thuốc.
    \item \textbf{Theo dõi thời gian thực:} Cập nhật minh bạch tiến trình chăm sóc qua 4 mốc rõ ràng.
  \end{itemize}
  ```
- **Hộp số liệu nổi bật (Metric Callout Boxes)**: Sử dụng các khối Beamer block hoặc cột để làm nổi bật số liệu quan trọng:
  ```latex
  \begin{columns}
    \begin{column}{0.32\textwidth}
      \begin{block}{\centering Tỷ lệ hài lòng}
        \centering \Large \textbf{94.2\%}\\
        \small Người dùng đánh giá cao
      \end{block}
    \end{column}
    \begin{column}{0.32\textwidth}
      \begin{block}{\centering Thời gian tác vụ}
        \centering \Large \textbf{-68\%}\\
        \small So với quy trình cũ
      \end{block}
    \end{column}
    \begin{column}{0.32\textwidth}
      \begin{block}{\centering Điểm SUS}
        \centering \Large \textbf{84.5 / 100}\\
        \small Mức độ sử dụng Xuất sắc
      \end{block}
    \end{column}
  \end{columns}
  ```
- **Trích dẫn Tiếng nói Người dùng (User Voice / Pull Quote)**:
  ```latex
  \begin{exampleblock}{Tiếng nói từ thực tế phỏng vấn}
    \textit{"Mỗi lần gửi cún đi spa là tôi phải nhắn tin dặn đi dặn lại chuyện bé dị ứng xà phòng, nhưng nhân viên vẫn thỉnh thoảng quên vì đông khách."}
    \vskip 2mm
    \hfill --- \textbf{Chị Lan (28 tuổi, Nhân viên văn phòng, TP.HCM)}
  \end{exampleblock}
  ```

---

## 4. Thiết Kế LaTeX Beamer Theme Madrid

### 4.1. Quy tắc Template & Chuyển đổi Khối
- **Khai báo chuẩn**:
  ```latex
  \documentclass[aspectratio=169, 10pt]{beamer}
  \usetheme{Madrid}
  \usecolortheme{whale} % hoặc tùy chỉnh màu nhận diện Deep Teal/Slate Blue
  ```
- **Hỗ trợ Tiếng Việt & Font**: Sử dụng `fontspec` với font sans-serif hiện đại hoặc Times New Roman tương thích với môi trường XeLaTeX / Docker của dự án:
  ```latex
  \usepackage{fontspec}
  \usepackage{graphicx}
  \usepackage{tikz}
  \usepackage{booktabs}
  \usepackage{tabularx}
  ```
- **Tùy biến Màu sắc thương hiệu (Petcare Branding)**:
  ```latex
  \definecolor{PetcarePrimary}{RGB}{24, 76, 120}   % Deep Teal / Navy
  \definecolor{PetcareSecondary}{RGB}{46, 117, 182} % Accent Blue
  \definecolor{PetcareAccent}{RGB}{220, 108, 43}   % Warm Coral/Orange
  \setbeamercolor{palette primary}{bg=PetcarePrimary,fg=white}
  \setbeamercolor{palette secondary}{bg=PetcareSecondary,fg=white}
  \setbeamercolor{structure}{fg=PetcarePrimary}
  ```

### 4.2. Khung Nội Dung Slide Ánh Xạ Từ 9 Chương Báo Cáo

Bộ slide chuẩn gồm khoảng 10–14 frames súc tích, bao phủ trọn vẹn mạch logic của Báo cáo:

| Slide # | Tiêu đề Editorial | Nguồn từ Báo cáo | Cấu trúc trình bày |
| :---: | :--- | :--- | :--- |
| **1** | Title Slide | Trang bìa báo cáo | Tên đề tài, Nhóm sinh viên, Giảng viên hướng dẫn, Logo trường |
| **2** | Executive Hook: Bối cảnh & Bài toán | Chương 1 | Headline báo chí + 3 điểm đau nhức nhối quy trình cũ |
| **3** | Bức tranh Thực tế: Nghiên cứu Người dùng | Chương 2 | Phương pháp nghiên cứu + 3–4 số liệu phát hiện đắt giá |
| **4** | Chân dung Người dùng & Bản đồ Giá trị | Chương 2 | Persona đại diện (Chị Lan) đối ứng với Value Proposition Canvas |
| **5** | Đột phá Trải nghiệm: Quy trình Cũ vs Mới | Chương 4 | Bảng so sánh 6 bước As-Is (thủ công) vs 6 bước To-Be (số hóa) |
| **6** | Thiết kế Tương tác & Kiến trúc Thông tin | Chương 5 | Sơ đồ luồng tác vụ chính + Khung giao diện (Wireframe) cốt lõi |
| **7** | Bản mẫu Tương tác: 4 Trụ cột Giải pháp | Chương 6 | Mockup 4 màn hình chính: Đặt lịch, Hồ sơ thú cưng, Tracking, Lịch sử |
| **8** | Đánh giá Trải nghiệm: Dữ liệu Thực nghiệm | Chương 7 | Thẻ số liệu SUS (84.5), Tỷ lệ hoàn thành tác vụ (TSR), Thời gian thực hiện |
| **9** | Thiết kế Cuối cùng & Cải tiến Then chốt | Chương 8 | So sánh Before & After sau kiểm thử người dùng (Heuristic + Usability) |
| **10** | Tầm nhìn Tương lai & Kết luận | Chương 9 | Đóng góp thực tiễn, hạn chế và lộ trình mở rộng tính năng |
| **11** | Phiên Hỏi & Đáp (Q&A) | Lời cảm ơn | Lời cảm ơn hội đồng và mở phiên thảo luận |

---

## 5. Quy Trình Kỹ Thuật Từng Bước (Technical Workflow)

### Bước 1: Kiểm tra Tiền điều kiện Báo cáo
Kiểm tra sự tồn tại của `docs/report/main.tex` và `docs/report/content/`. Nếu thiếu $\rightarrow$ Dừng lại và báo lỗi.

### Bước 2: Khởi tạo Thư mục & Sao chép Tài nguyên
1. Tạo thư mục `docs/slides/` (nếu chưa có).
2. Sao chép toàn bộ nội dung từ `docs/report/` sang `docs/slides/` (bao gồm `content/`, thư mục hình ảnh `img/`, các file cấu hình và tham chiếu).

### Bước 3: Tái cấu trúc sang LaTeX Beamer Theme Madrid
1. Thay thế file `main.tex` trong `docs/slides/` bằng file `main.tex` cấu hình chuẩn Beamer (`\documentclass{beamer}`, `\usetheme{Madrid}`).
2. Viết lại các file trong `docs/slides/content/` tương ứng theo định dạng các `\begin{frame} ... \end{frame}`, áp dụng triệt để phong cách tạp chí truyền thông, bullet, numeric, metric cards.

### Bước 4: Tự động Biên dịch (Dual-Mode Build System)
Biên dịch tài liệu tại thư mục `docs/slides/`:

#### Chế độ 1: Local XeLaTeX (Nếu máy host có sẵn compiler)
```powershell
cd docs/slides
if (!(Test-Path build)) { New-Item -ItemType Directory build }
xelatex -synctex=1 -interaction=nonstopmode -file-line-error -output-directory=build main.tex
```

#### Chế độ 2: Docker Fallback (Nếu máy host chưa cài compiler)
```powershell
docker run --rm `
  --volume "${PWD}:/workspace" `
  --workdir /workspace/docs/slides `
  ghcr.io/tinnguyen0706/latex-times-new-roman:latest `
  latexmk -synctex=1 -interaction=nonstopmode -file-line-error -xelatex -outdir=build main.tex
```

### Bước 5: Kiểm tra Lỗi & Chống Tràn Trang (Zero Overfull)
- Đọc file `docs/slides/build/main.log`.
- Đảm bảo biên dịch trả về mã lỗi 0 (exit code 0).
- Đảm bảo các khung slide không bị tràn chữ (`Overfull \vbox`). Nếu có tràn, lập tức điều chỉnh giảm số lượng dòng hoặc co cỡ chữ (`\small`, `\footnotesize`) cho vừa vặn.

### Bước 6: Xuất bản `docs/slides.pdf`
Sau khi biên dịch thành công `docs/slides/build/main.pdf`:
- Tự động sao chép file PDF ra ngoài ngay trong thư mục `docs/` và đổi tên thành `slides.pdf`:
  ```powershell
  Copy-Item docs/slides/build/main.pdf -Destination docs/slides.pdf -Force
  ```
- Xác nhận file `docs/slides.pdf` đã tồn tại với dung lượng > 0 bytes.

---

## 6. Tiêu Chuẩn Nghiệm Thu (Acceptance Checklist)

Một bộ slide chỉ được công nhận đạt chuẩn khi thỏa mãn toàn bộ các tiêu chí:

- [ ] **Tiền điều kiện**: Báo cáo tại `docs/report/` tồn tại và đầy đủ trước khi thực hiện.
- [ ] **Tính trung thực**: 100% dữ liệu, số liệu, persona, luồng quy trình lấy từ báo cáo, không bịa đặt.
- [ ] **Thư mục & Tệp**: `docs/slides/` chứa đầy đủ mã nguồn Beamer và tài nguyên hình ảnh.
- [ ] **Theme Madrid**: Áp dụng theme `Madrid` chuẩn mực, màu sắc hài hòa, hiển thị thanh điều hướng rõ ràng.
- [ ] **Văn phong Tạp chí**: Tiêu đề giật tít tinh tế (Editorial Headlines), nội dung dạng bullet, numeric, metric callouts; không có đoạn văn bản dài quá 3 dòng.
- [ ] **Zero Overfull**: Không có slide nào bị tràn biên, cắt chữ hoặc đè hình.
- [ ] **Xuất bản hoàn tất**: File `docs/slides.pdf` đã được tự động copy ra ngay trong thư mục `docs/` và sẵn sàng trình chiếu.
