# Quy tắc Sử Dụng Công Cụ & Quản Lý Tệp (Tool & File Management Rules)

Quy tắc này áp dụng **bắt buộc và đồng nhất cho tất cả các Subagents, Agent Modules và AI Assistants** trong toàn bộ dự án HCI (CSC12106).

---

## 1. Tuyệt đối KHÔNG tự ý tạo Script / Tool mới

- **Cấm tạo tool trong `tools/`**: Tuyệt đối không được tự ý viết, tạo thêm bất kỳ tệp script hoặc công cụ phụ trợ dùng một lần nào (như các file python build tạm `build_prototype.py`, `export_*.py`, `temp_*.py`...) trong thư mục `tools/` hoặc ở bất kỳ đâu trong repository.
- **Chỉ sử dụng công cụ chuẩn hóa có sẵn**: Chỉ được phép gọi và sử dụng các công cụ cốt lõi đã có sẵn trong dự án:
  1. `tools/generate-figma-svg.py`: Bộ công cụ sinh mã SVG vector chuẩn Figma.
  2. `tools/render-html-to-png.py`: Bộ công cụ kết xuất HTML sang PNG chất lượng cao.
  3. `tools/validate-svg.py`: Bộ công cụ kiểm thử & đánh giá hợp lệ mã SVG (iPhone 14 Pro Max, chống tràn chữ, cấm emoji, layer Figma).

---

## 2. Xuất bản tệp trực tiếp vào đúng phạm vi Deliverables

- **Sinh mã trực tiếp (Direct Output Generation)**: Khi cần tạo màn hình SVG, tài liệu HTML/Markdown, hay dữ liệu JSON, Agent phải xuất bản trực tiếp nội dung hoàn chỉnh vào đúng tệp đích, không qua khâu trung gian là viết code script để chạy ngầm sinh file.
- **Đúng cấu trúc thư mục quy định**: Tất cả sản phẩm bàn giao phải nằm đúng vị trí theo từng giai đoạn:
  - User Research: `deliverables/01-user-research/`
  - Interaction Design (Prototype, Wireframe): `deliverables/02-interaction-design/`
  - Software Product: `deliverables/03-software-product/`
  - Final Submission (Slide, Báo cáo): `deliverables/04-final-submission/`
- **Không tạo file ngoài danh mục**: Không tự ý tạo các tệp `.md` ngoài lề, file tạm, file log rác làm ô nhiễm cây thư mục của dự án.

---

## 3. Chế tài kiểm tra & Nghiệm thu (Enforcement)

- Bất kỳ Agent hay Subagent nào vi phạm việc tạo script/tool ngoài danh mục sẽ bị coi là không đạt chuẩn kiểm thử và phải xóa bỏ ngay lập tức.
- Reviewer có trách nhiệm kiểm tra thư mục `tools/` để đảm bảo không có file lạ phát sinh trong suốt vòng đời dự án.
