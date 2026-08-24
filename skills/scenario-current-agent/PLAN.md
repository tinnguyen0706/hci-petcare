# Kế hoạch thực thi Scenario 1 — Quy trình hiện tại (As-Is Scenario)

## Mục đích

Mô tả chi tiết câu chuyện và hành trình thực tế của chủ nuôi (Persona) khi sử dụng quy trình dịch vụ chăm sóc thú cưng hiện tại; làm nổi bật toàn diện các khó khăn, bất cập và điểm đau (pain points/breakdowns) của hệ thống cũ dựa trên dữ liệu nghiên cứu người dùng.

## Sử dụng skill này khi

- Persona đại diện đã được hoàn thiện và chấp nhận.
- Cần mô tả bối cảnh sử dụng (Context of use), các điểm tiếp xúc hiện tại (Touchpoints: Zalo, gọi điện, sổ giấy), giải pháp tạm thời (Workarounds) và cảm xúc tiêu cực của người dùng.
- Chuẩn bị cơ sở đánh giá rubric mục 3 (Scenario 1) trước khi thiết kế kịch bản tương tác mới (Scenario 2).

## Đầu vào bắt buộc

- Hồ sơ Persona chính (`deliverables/01-user-research/persona/` hoặc `personas.json`).
- Dữ liệu phỏng vấn / khảo sát người dùng (`data/user-research/`).
- Mẫu tài liệu (`templates/scenario-current-template.md`).
- Rubric môn học và phạm vi 4 bài toán cốt lõi trong proposal.

## Đầu ra

- Tệp kịch bản `deliverables/01-user-research/scenario-current.md` (hoặc `scenarios/scenario-current.json` nếu chuẩn hóa dữ liệu), bao gồm:
  1. **Thông tin bối cảnh (Context of Use)**: Persona, mục tiêu, động lực, thời gian, địa điểm, áp lực/ràng buộc ban đầu.
  2. **Câu chuyện kể chi tiết (Story Narrative)**: Đoạn văn kể mạch lạc, giàu cảm xúc, làm nổi bật khó khăn theo góc nhìn người dùng.
  3. **Bảng phân tích từng bước (Step-by-step Journey Table)**: Chi tiết từng hành động, điểm tiếp xúc (touchpoint), phản hồi thực tế, điểm đau (pain point), cảm xúc (emotion) và mã bằng chứng (evidence ID).
  4. **Tổng kết khó khăn & hệ quả (Breakdown Summary)**: 4 điểm đau chính của quy trình cũ.

## Quy trình thực hiện

1. **Xác định bối cảnh & Persona**:
   - Chọn Persona tiêu biểu (ví dụ: chủ nuôi bận rộn, thú cưng có tiền sử dị ứng/nhạy cảm).
   - Thiết lập tình huống khởi phát (Trigger): Thú cưng cần được vệ sinh/cắt tỉa gấp trước chuyến công tác hoặc dịp cuối tuần.
2. **Xây dựng mạch câu chuyện (Story Narrative)**:
   - Viết dưới dạng văn xuôi tự nhiên, giàu hình ảnh và bối cảnh (áp lực thời gian, vừa làm việc vừa nhắn tin, lo lắng khi gửi thú cưng).
   - Mô tả tuần tự 4 chặng: Tìm cách đặt hẹn ➔ Đưa thú cưng đến & dặn dò ➔ Chờ đợi trong lo lắng ➔ Đón thú cưng và thanh toán.
3. **Lập bảng chi tiết từng bước (Action & Touchpoint Breakdown)**:
   - Liệt kê cụ thể từng bước thao tác thực tế (gọi điện thoại bận, nhắn tin Zalo chờ phản hồi, viết giấy nhớ dặn nhân viên...).
   - Đính kèm cảm xúc của người dùng và các workaround họ buộc phải dùng khi gặp lỗi.
4. **Kiểm tra độ phủ & Đối chiếu**:
   - Rà soát đủ 4 bài toán: đặt lịch, dặn dò đặc biệt, theo dõi tiến độ, lưu vết lịch sử.
   - Đảm bảo **100% KHÔNG chứa bất kỳ công nghệ/tính năng mới** nào của giải pháp tương lai.
