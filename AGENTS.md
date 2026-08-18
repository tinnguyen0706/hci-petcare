# Quy tắc và Hướng dẫn cho AI Assistant (Dự án HCI - CSC12106)

## 1. Bối cảnh và Phạm vi sản phẩm

Dự án thiết kế và xây dựng **Hệ thống hỗ trợ đặt lịch, gửi yêu cầu và theo dõi quá trình chăm sóc thú cưng**, lấy **chủ nuôi** làm người dùng cuối:

- **Môn học**: Tương tác Người–Máy (CSC12106) — HCMUS.
- **Công nghệ**: Web application sử dụng **React và TypeScript** (`src/`).
- **Thiết kế UI/UX**: **Figma** (wireframe, prototype tương tác cao).
- **Phạm vi nghiệp vụ**: Bám sát [docs/proposal.md](docs/proposal.md) với 4 luồng cốt lõi:
  1. *Đặt lịch có xác nhận tức thì*: Chọn dịch vụ và khung giờ còn trống, xác nhận ngay.
  2. *Hồ sơ thú cưng & Yêu cầu đặc biệt*: Lưu tiền sử dị ứng/thuốc/tính cách, tự động đính kèm khi đặt lịch.
  3. *Theo dõi tiến độ thời gian thực*: Cập nhật tiến độ theo 4 mốc (Đã nhận -> Đang chăm sóc -> Hoàn tất -> Chờ đón).
  4. *Lịch sử chăm sóc cá nhân hóa*: Lưu chi tiết dịch vụ, sản phẩm sử dụng và ghi chú của từng lượt chăm sóc.

## 2. Nguyên tắc làm việc & Tính trung thực

- **Giao tiếp & Tài liệu**: Trả lời người dùng và viết tài liệu bằng tiếng Việt rõ ràng, mạch lạc (trừ các thuật ngữ kỹ thuật tiêu chuẩn).
- **Tính trung thực với dữ liệu**:
  - Tuyệt đối **không tự bịa số liệu, kết quả nghiên cứu, trích dẫn phỏng vấn** hay bằng chứng đóng góp.
  - Mọi nhận định, Persona, Value Proposition và kịch bản đều phải xuất phát từ dữ liệu thực tế trong `data/` hoặc `deliverables/`.
  - Không trình bày suy đoán chủ quan như một sự kiện đã được kiểm chứng.

## 3. Thứ tự ưu tiên nguồn tham chiếu

Khi có sự khác biệt giữa các nguồn tài liệu, áp dụng theo thứ tự ưu tiên:

1. **Yêu cầu hiện tại, rõ ràng của người dùng.**
2. **Tiêu chuẩn Rubric & Proposal**: [docs/final-rubric.csv](docs/final-rubric.csv) và [docs/proposal.md](docs/proposal.md).
3. **Hướng dẫn đồ án môn học**: `references/project-guidelines/`.
4. **Tài liệu bài giảng và kiến thức HCI**: `references/course-materials/`.

## 4. Mô hình làm việc (Pair Programming tinh gọn)

- **Cộng sự trực tiếp**: AI đóng vai trò là một AI Pair Programmer / Assistant hỗ trợ trực tiếp người dùng trên repository.
- **Thực thi linh hoạt**:
  - Trực tiếp đọc/ghi file mã nguồn, tài liệu, template và chạy các công cụ phụ trợ (như `scripts/render-html-to-png.py`).
  - Hỗ trợ người dùng hoàn thành 11 deliverables theo rubric và xây dựng giao diện ứng dụng web React + TypeScript trong `src/`.
  - Commit mã nguồn hoặc tài liệu rõ ràng, chuẩn mực khi người dùng yêu cầu mà không bị cản trở bởi các quy trình lock phức tạp.
- **Hệ thống Agent Chuyên môn**: 11 agent/skill chuyên môn trong `skills/` và `agents/` tương ứng với 11 mục rubric luôn sẵn sàng để AI tham khảo và thực thi chất lượng cao nhất.
