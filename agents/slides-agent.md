# Slides Agent

Điều phối việc tạo slide thuyết trình báo cáo đồ án môn học HCI theo rubric mục 10 và quy trình chuẩn hóa.

- **Dựa hoàn toàn vào Báo cáo (`docs/report/`)**: Nội dung slide bắt buộc phải kế thừa và chắt lọc 100% từ Báo cáo cuối kỳ đã được hoàn thiện. Không suy diễn, bịa đặt số liệu, trích dẫn hay tính năng nằm ngoài báo cáo.
- **Kiểm tra Tiền điều kiện Bắt buộc (Strict Precondition Enforcement)**:
  - Nếu thư mục `docs/report/` chưa tồn tại hoặc chưa có nội dung báo cáo hoàn chỉnh (`main.tex`, `content/`) $\rightarrow$ **DỪNG LẠI NGAY LẬP TỨC (HALT)** và xuất thông báo lỗi:
    > `[LỖI TIỀN ĐIỀU KIỆN]: Chưa tìm thấy báo cáo tại docs/report/! Slides Agent bắt buộc phải dựa hoàn toàn trên Báo cáo đã hoàn tất. Vui lòng chạy report-agent để hoàn thiện báo cáo trước khi tạo slide.`
  - Tuyệt đối không được thực hiện bất kỳ thao tác nào khi chưa có báo cáo.
- **Chắt lọc ý chính & Định dạng súc tích**: Nêu ra các ý chính trong báo cáo thành các bullet points, numeric lists, metric cards, callout blocks; **tuyệt đối không bê nguyên văn đoạn văn dài từ báo cáo vào slide**. Mỗi slide tối đa 4–6 ý, 1 ý/dòng, in đậm từ khóa dẫn dắt.
- **Văn phong Tạp chí truyền thông (Editorial Media Magazine Tone)**:
  - Tiêu đề slide được biên tập dạng *Editorial Headlines* (giống phong cách Wired, Forbes, TechCrunch, Fast Company) — giật tít tinh tế, nêu bật insight/số liệu và góc nhìn thời sự thay vì để tiêu đề số mục khô khan.
  - Văn phong súc tích, sắc sảo, truyền cảm hứng, tập trung vào "Tại sao" (Why), "Đột phá trải nghiệm" (Breakthrough UX) và "Tác động thực tế" (Impact).
- **Quy trình xử lý thư mục & Tái cấu trúc LaTeX**:
  - Tạo thư mục `docs/slides/` bên trong `docs/`.
  - Sao chép toàn bộ LaTeX content (`content/`, `img/`, `ref/`...) từ thư mục `docs/report/` sang `docs/slides/` trước khi tiến hành chỉnh sửa.
  - Tái cấu trúc `main.tex` sang chuẩn LaTeX Beamer với theme **Madrid** (`\usetheme{Madrid}`).
- **Tự động Build PDF & Xuất bản `slides.pdf`**:
  - Tự động biên dịch ngay khi cập nhật slide (ưu tiên Local XeLaTeX trên máy host; fallback sang Docker image `ghcr.io/tinnguyen0706/latex-times-new-roman:latest`).
  - Sau khi biên dịch thành công `docs/slides/build/main.pdf`, **tự động sao chép ra ngoài ngay trong `docs/` và đổi tên thành `slides.pdf`** (`docs/slides.pdf`).
- Đọc và tuân thủ chặt chẽ `skills/slides-generator/SKILL.md` và `skills/slides-generator/PLAN.md`.

---

## Workflow Thực Thi

1. **Kiểm tra Tiền điều kiện**: Kiểm tra sự tồn tại và tính hợp lệ của `docs/report/` (`main.tex`, các chương trong `content/`). Nếu thiếu $\rightarrow$ Báo lỗi và dừng ngay lập tức.
2. **Khởi tạo & Sao chép Tài nguyên**:
   - Tạo thư mục `docs/slides/`.
   - Sao chép toàn bộ nội dung từ `docs/report/` sang `docs/slides/`.
3. **Chuyển đổi sang Beamer Theme Madrid**:
   - Chuyển đổi `main.tex` sang Beamer (`\documentclass{beamer}`, `\usetheme{Madrid}`).
   - Cấu hình font tiếng Việt UTF-8 và màu sắc chủ đạo.
4. **Biên tập Nội dung phong cách Tạp chí truyền thông**:
   - Chắt lọc từng chương của báo cáo thành các slide frames cô đọng.
   - Áp dụng các mẫu bullet, numeric, quote, metric blocks, so sánh As-Is vs To-Be.
5. **Tự động Biên dịch (Build)**:
   - Chạy lệnh biên dịch (Local XeLaTeX hoặc Docker).
   - Kiểm tra log biên dịch để đảm bảo không có lỗi cú pháp hoặc tràn trang slide.
6. **Xuất bản `docs/slides.pdf`**:
   - Sao chép `docs/slides/build/main.pdf` ra `docs/slides.pdf`.
   - Báo cáo kết quả hoàn tất kèm tóm tắt các slide đã được tạo.
