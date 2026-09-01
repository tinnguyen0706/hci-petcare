# Kế Hoạch Thực Thi: Usability Evaluation Generator

Tài liệu này mô tả chi tiết các bước xử lý kỹ thuật, cấu trúc đầu vào và định dạng đầu ra của kỹ năng `evaluation-generator` khi thực hiện đánh giá tính khả dụng cho toàn bộ dự án.

---

## 1. Dùng Kỹ Năng Này Khi

- Cần lập Kế hoạch kiểm thử tính khả dụng (**Usability Test Plan**) cho toàn bộ hệ thống Wireframe/Prototype.
- Cần tạo kịch bản các nhiệm vụ định trước (**Pre-defined Tasks**) ánh xạ từ `scenario-future/` và bảng câu hỏi khảo sát **Likert 1–5**.
- Cần khởi tạo cấu trúc dữ liệu thực nghiệm CSV trong thư mục `data/evaluation/` (`task_metrics.csv`, `likert_survey.csv`) để ghi nhận dữ liệu từ các phiên kiểm thử người dùng thực tế.
- Cần tính toán chỉ số hiệu năng (*Task Completion Rate*, *Task Completion Time*, *Error Count*) và chỉ số cảm nhận (*Mean Likert Score*) từ tệp dữ liệu thực tế.
- Cần xuất **Báo cáo Đánh giá Tính Khả Dụng hoàn chỉnh** (`usability-evaluation-report.md`) phục vụ Báo cáo cuối kỳ và bàn giao cho `software-product-agent`.

---

## 2. Đầu Vào Bắt Buộc (Input)

1. **Tiền điều kiện bắt buộc**:
   - Toàn bộ hệ thống Wireframe hoàn chỉnh tại `deliverables/02-interaction-design/wireframe/`.
   - Dữ liệu Persona đã hoàn thành tại `deliverables/01-user-research/persona/personas.json`.
2. Kịch bản tương lai tại `deliverables/01-user-research/scenario-future/`.
3. Quy tắc đánh giá khả dụng tại `rules/evaluation-rules.md`.
4. **Dữ liệu thực nghiệm thực tế từ các buổi kiểm thử trong thư mục `data/evaluation/`**:
   - `data/evaluation/task_metrics.csv` (Chỉ số đo đạc hiệu năng hoàn thành, thời gian, số lỗi).
   - `data/evaluation/likert_survey.csv` (Điểm số khảo sát Likert 1–5 và phản hồi cảm nhận).
5. Hệ thống mẫu chuẩn hóa tại `templates/evaluation/`:
   - `01_usability_test_plan.md`
   - `02_predefined_tasks.md`
   - `03_post_test_likert_survey.md`
   - `04_test_data_schema.json`
   - `05_usability_evaluation_report.md`

---

## 3. Đầu Ra Mục Tiêu (Output)

Toàn bộ kết quả được lưu trữ trực tiếp tại thư mục: `deliverables/02-interaction-design/evaluation/`:

1. `usability-test-plan.md`: Tài liệu Kế hoạch kiểm thử (Mục tiêu 5 yếu tố, đối tượng tham gia nạp động từ Persona, danh mục tác vụ và tiêu chí lượng hóa).
2. `usability-evaluation-report.md`: Báo cáo đánh giá tổng hợp hoàn chỉnh 8 phần (khớp nối trực tiếp với cấu trúc Báo cáo cuối kỳ).

*(Dữ liệu thực nghiệm thô được quản lý và cập nhật tại thư mục `data/evaluation/`).*

---

## 4. Các Bước Thực Thi Chi Tiết (Execution Workflow - 2 Pha)

```mermaid
graph TD
    subgraph Phase1["PHA 1: Chuẩn bị & Thiết lập Công cụ"]
        Step1["Bước 1: Kiểm tra Tiền điều kiện (Wireframe & Persona)"] --> Step2["Bước 2: Nạp Persona Động & Lập Kế hoạch Test"]
        Step2 --> Step3["Bước 3: Thiết lập Pre-defined Tasks & Bảng hỏi Likert"]
        Step3 --> Step4["Bước 4: Khởi tạo file mẫu CSV tại data/evaluation/"]
    end
    
    subgraph Testing["Tiến hành Kiểm thử Thực tế"]
        Step4 -.->|"Người dùng test thực tế & Điền số liệu vào CSV"| RealData["data/evaluation/*.csv đã có dữ liệu"]
    end

    subgraph Phase2["PHA 2: Phân tích & Báo cáo"]
        RealData --> Step5["Bước 5: Đọc CSV & Tính toán Chỉ số Performance & Likert"]
        Step5 --> Step6["Bước 6: Phân tích Lỗi Khả dụng (Severity 1-4)"]
        Step6 --> Step7["Bước 7: Xuất Báo cáo Đánh giá & Ma trận Cải tiến UI"]
    end
```

### Chi tiết từng bước:

- **Bước 1 — Kiểm tra Tiền điều kiện**:
  - Đọc thư mục `deliverables/02-interaction-design/wireframe/` và file `deliverables/01-user-research/persona/personas.json`.
  - Nếu thiếu một trong hai $\rightarrow$ Dừng ngay lập tức (HALT).
- **Bước 2 — Nạp Persona Động & Lập Kế hoạch Test**:
  - Nạp danh sách Persona từ `personas.json`, tự động trích xuất tên, vai trò, bối cảnh và phân bổ số lượng người tham gia đại diện tương ứng.
  - Nạp template `templates/evaluation/01_usability_test_plan.md`, điền 5 mục tiêu Usability cốt lõi, danh sách nhóm người tham gia theo Persona động, và các ngưỡng lượng hóa tiêu chí thành công.
  - Xuất ra `deliverables/02-interaction-design/evaluation/usability-test-plan.md`.
- **Bước 3 — Thiết lập Pre-defined Tasks & Bảng hỏi Likert**:
  - Xây dựng các kịch bản nhiệm vụ không thiên kiến, ánh xạ từ các luồng kịch bản trong `scenario-future/` và màn hình Wireframe tương ứng.
  - Chuẩn hóa các câu hỏi Likert 5 mức độ thu thập cảm nhận sau test.
- **Bước 4 — Khởi tạo Khung Nhập Dữ liệu Thực nghiệm CSV tại `data/evaluation/`**:
  - Khởi tạo các file `data/evaluation/task_metrics.csv` và `data/evaluation/likert_survey.csv` với các dòng định danh sẵn theo `participant_id` (P1 đến P5) và `persona_id` từ `personas.json`.
  - **Dừng lại (HALT) nếu chưa có dữ liệu test**: Hướng dẫn người dùng tiến hành các phiên test thực tế và điền kết quả vào file CSV trong `data/evaluation/` trước khi chạy Pha 2. Tuyệt đối không tự bịa số liệu.
- **Bước 5 — Đọc & Tính toán Chỉ số từ Dữ liệu Thực tế trong `data/evaluation/`**:
  - Đọc toàn bộ các phiên test trong `data/evaluation/task_metrics.csv` và `data/evaluation/likert_survey.csv`.
  - Tính toán cho từng tác vụ:
    - Tỷ lệ hoàn thành: $\text{Completion Rate} = \frac{\text{Số ca thành công}}{\text{Tổng số người tham gia}} \times 100\%$.
    - Thời gian trung bình: $\bar{T} = \frac{1}{N} \sum T_i$ (giây).
    - Tỷ lệ lỗi trung bình trên mỗi tác vụ.
  - Tính toán điểm Likert trung bình cho từng câu hỏi và điểm trung bình chung toàn hệ thống từ `likert_survey.csv`.
- **Bước 6 — Phân tích Lỗi Khả dụng (Usability Findings)**:
  - Tổng hợp các lỗi/bối rối người dùng gặp phải dựa trên các ghi chú và số liệu quan sát được từ phiên test.
  - Phân loại mức độ nghiêm trọng: Cosmetic (1), Minor (2), Major (3), Catastrophe (4).
- **Bước 7 — Xuất Báo cáo Đánh giá Tổng hợp**:
  - Nạp template `templates/evaluation/05_usability_evaluation_report.md`.
  - Điền toàn bộ số liệu tính toán từ thực tế, bảng phân tích lỗi và ma trận khuyến nghị cải tiến UI cho `software-product-agent`.
  - Lưu vào `deliverables/02-interaction-design/evaluation/usability-evaluation-report.md`.
