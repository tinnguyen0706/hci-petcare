# Kế hoạch Soạn thảo Báo cáo Cuối kỳ (Report Agent Plan)

## 1. Mục tiêu
Biên soạn báo cáo đồ án môn Tương tác Người–Máy (CSC12106) đạt tiêu chuẩn xuất sắc (Rubric mục 10), dung lượng tối thiểu 6 trang, tự chứa và tích hợp toàn bộ các bằng chứng thiết kế đã hoàn thành.

---

## 2. Quy trình Thực hiện (Workflow)

```mermaid
graph TD
    Step1["1. Thu thập & Đối chiếu Artifacts đã duyệt"] --> Step2["2. Phác thảo đề cương chi tiết (>6 trang)"]
    Step2 --> Step3["3. Biên soạn các chương nội dung"]
    Step3 --> Step4["4. Nhúng biểu đồ, sơ đồ & bảng dữ liệu"]
    Step4 --> Step5["5. Kiểm tra tính nhất quán & Đối chiếu Rubric"]
    Step5 --> Step6["6. Hoàn thiện & Xuất bản báo cáo"]
```

### Chi tiết các bước:

1. **Bước 1 — Thu thập Artifacts**:
   - Rà soát hồ sơ Persona & Value Proposition (`deliverables/01-user-research/`).
   - Rà soát Scenario hiện tại, Scenario tương lai, Storyboard (`deliverables/01-user-research/`).
   - Rà soát 5 trạng thái Wireframe và 6 màn hình Prototype (`deliverables/02-interaction-design/`).
   - Rà soát cấu trúc React TypeScript (`src/`).

2. **Bước 2 — Biên soạn Báo cáo Tự chứa**:
   - Trình bày mạch lạc, logic từ vấn đề thực tế (Problem Statement) ➔ Nghiên cứu người dùng ➔ Giải pháp thiết kế ➔ Hiện thực sản phẩm ➔ Đánh giá tính khả dụng.
   - Nhúng bảng ma trận tương tác (Interaction Matrix) và bảng đối chiếu Heuristics.

3. **Bước 3 — Nghiệm thu theo Rubric**:
   - Kiểm tra dung lượng $\ge 6$ trang.
   - Đảm bảo 100% số liệu trung thực, có trích dẫn nguồn.
   - Không chứa bất kỳ emoji màu mè hay thông số thiết bị cũ ($375\text{px}$).
