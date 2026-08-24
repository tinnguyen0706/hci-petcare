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

- Danh sách các Scenario 1 tương ứng với từng Persona (lưu trong `deliverables/01-user-research/scenario-current.md` hoặc `deliverables/01-user-research/scenario/` / `scenarios.json`).
- Mỗi Scenario 1 được trình bày dưới dạng **một đoạn văn kể chuyện liền mạch (Narrative Paragraph)**, kết nối mượt mà và tự nhiên các yếu tố:
  1. **Bối cảnh & Trigger**: Persona, mục tiêu, thời gian, địa điểm và áp lực thực tế.
  2. **Diễn biến hành động & Điểm tiếp xúc**: Quá trình tương tác thực tế qua các kênh cũ (gọi điện, Zalo, dặn miệng, ghi giấy...).
  3. **Khó khăn & Cảm xúc (Pain Points & Emotions)**: Sự bất tiện, chờ đợi lâu, nguy cơ thất lạc thông tin dị ứng/dặn dò, lo lắng khi không theo dõi được tiến độ và bất tiện khi không có lịch sử dịch vụ.
  4. **Kết quả & Hệ quả**: Trạng thái kết thúc quy trình và cảm xúc còn đọng lại của chủ nuôi.

## Quy trình thực hiện

1. **Đọc danh sách Persona**:
   - Tải toàn bộ danh sách Persona từ `personas.json` (hoặc `deliverables/01-user-research/persona/`).
2. **Với mỗi Persona trong danh sách**:
   - 2.1. **Xác định bối cảnh đặc thù & Trigger**: Dựa vào chân dung Persona (tính cách, hoàn cảnh công việc, đặc điểm thú cưng) để chọn tình huống cụ thể.
   - 2.2. **Viết một đoạn văn kể chuyện liền mạch (Narrative Paragraph)**: 
     - Dẫn dắt câu chuyện tự nhiên theo dòng thời gian từ khi phát sinh nhu cầu đặt lịch đến khi hoàn tất dịch vụ.
     - Lồng ghép khéo léo 4 khó khăn của quy trình cũ (đặt lịch chậm/trùng slot, dặn dò dị ứng dễ bị quên, thiếu cập nhật tiến độ, không có lịch sử lưu vết) và cảm xúc thực tế (sốt ruột, lo âu, ức chế).
3. **Kiểm tra độ phủ & Đối chiếu**:
   - Đảm bảo số lượng Scenario 1 tương ứng 1-1 với số lượng Persona đã duyệt.
   - Đảm bảo văn phong trôi chảy, đọc như một câu chuyện thực tế, không bị chia vụn.
   - Đảm bảo **100% KHÔNG chứa bất kỳ công nghệ/tính năng mới** nào của giải pháp tương lai.
