# Lộ trình chuẩn bị bộ nộp cuối kỳ

> Trạng thái: bản nháp do agent chuẩn bị để con người review và chấp nhận. Đây là lộ trình tái sử dụng, không phải bằng chứng rằng artifact, kiểm thử, tài liệu trình bày hoặc bộ nộp đã hoàn tất. Task tạo PLAN này không tạo bộ nộp cuối kỳ.

## Khi dùng

Chỉ dùng lộ trình đầy đủ khi đồng thời có:

- artifact trong `deliverables/01-user-research/`, `deliverables/02-interaction-design/` và `deliverables/03-software-product/` đã được con người duyệt;
- kết quả kiểm thử sản phẩm thực tế, tái kiểm chứng được; và
- thông báo hoặc template cuối kỳ hiện hành do nhóm cung cấp, xác định được nguồn và thời điểm áp dụng.

Nếu thiếu bất kỳ điều kiện nào, chỉ lập readiness/gap report nêu rõ bằng chứng đã có, phần thiếu, người cần xác nhận và hành động tiếp theo. Không dựng package từ ghi chú cũ và không trình bày giả định như yêu cầu hiện hành.

## Đầu vào

- `docs/proposal.md`, `docs/final-rubric.csv`, các rule đánh giá/chất lượng và ba nhóm artifact 01–03 đã duyệt.
- Phiên bản Figma được duyệt cùng bản export; mã nguồn và kết quả build/test thực tế của sản phẩm.
- Thông báo/template cuối kỳ hiện hành: format, title, deadline và múi giờ, kênh nộp, quy tắc đặt tên, giới hạn tệp, yêu cầu poster hoặc bản giấy.
- Bằng chứng đóng góp thực tế và khả năng tham gia trình bày của cả ba thành viên.

## Đầu ra

- Readiness/gap report hoặc, khi đủ điều kiện, ma trận 11 mục rubric trỏ tới bằng chứng thật.
- Báo cáo ở định dạng nguồn có thể chỉnh sửa và PDF; slide nguồn và PDF; speaker notes cùng bộ câu hỏi–trả lời dự kiến.
- PDF thiết kế giao diện, video Prototype MP4 và code ZIP có thể build/test lại.
- Poster hoặc bản giấy chỉ khi yêu cầu hiện hành xác nhận cần có.
- Manifest/checklist QA ghi phiên bản, tệp, kết quả kiểm tra, sai khác được chấp nhận và xác nhận cuối của con người.

## Workflow theo cổng

### Cổng 1 — Xác nhận mức sẵn sàng và yêu cầu hiện hành

1. Kiểm tra trạng thái duyệt của từng artifact 01–03 và đối chiếu sản phẩm với kết quả kiểm thử thật; không xem kế hoạch hoặc lệnh chưa chạy là kết quả.
2. Ghi nguồn, ngày/phiên bản và nội dung của thông báo/template hiện hành. Xác nhận tối thiểu format, title, deadline/múi giờ, kênh nộp, cách đặt tên, giới hạn tệp và yêu cầu poster/bản giấy.
3. Khi nguồn mâu thuẫn, áp dụng thứ tự ưu tiên của `AGENTS.md`, ghi rõ mâu thuẫn và xin con người quyết định. Khi chưa đủ đầu vào, dừng ở readiness/gap report.

**Điều kiện qua cổng:** con người xác nhận ba nhóm artifact đã duyệt, bằng chứng test thật và bộ yêu cầu nộp đang áp dụng.

### Cổng 2 — Truy vết đủ 11 mục rubric

Lập một hàng cho mỗi mục dưới đây với các cột: mục rubric, đường dẫn bằng chứng, phiên bản/ngày, trạng thái duyệt hoặc kiểm chứng, gap và người phụ trách.

| Mục rubric | Nguồn bằng chứng chính |
|---|---|
| 1. Persona | `deliverables/01-user-research/` |
| 2. Value Proposition | `deliverables/01-user-research/` |
| 3. Scenario 1 | `deliverables/01-user-research/` |
| 4. Scenario 2 mới | `deliverables/02-interaction-design/` |
| 5. Storyboard | `deliverables/02-interaction-design/` |
| 6. Prototype | `deliverables/02-interaction-design/` |
| 7. Wireframe | `deliverables/02-interaction-design/` |
| 8. Software product | `deliverables/03-software-product/` và kết quả kiểm thử thật |
| 9. Trình bày | slide, speaker notes/Q&A và phân vai đã xác nhận |
| 10. Báo cáo | báo cáo nguồn/PDF theo format và title hiện hành |
| 11. Team work | xác nhận đóng góp thực tế của cả ba thành viên |

Không tự cho điểm, suy diễn mức đạt hoặc bịa bằng chứng. Protocol, task metadata, commit hay Git alias chỉ hỗ trợ truy vết công việc, không tự chúng chứng minh đóng góp cân bằng hoặc teamwork đầy đủ.

**Điều kiện qua cổng:** đủ 11 hàng, mỗi kết luận đều có bằng chứng mở được; mọi gap còn lại được ghi rõ và con người quyết định xử lý.

### Cổng 3 — Tạo tài liệu và package ứng viên

1. Soạn báo cáo tự chứa từ bằng chứng đã duyệt, rồi xuất PDF theo đúng format/title hiện hành.
2. Tạo slide nguồn và PDF; chuẩn bị speaker notes, câu hỏi “tại sao” và câu trả lời dựa trên quyết định, bằng chứng cùng giới hạn thực tế.
3. Xuất thiết kế giao diện PDF từ phiên bản được duyệt; tạo video Prototype MP4 phản ánh đúng luồng có thật.
4. Tạo code ZIP từ mã nguồn đã kiểm thử. Chỉ chuẩn bị poster hoặc bản giấy khi yêu cầu hiện hành xác nhận.
5. Ghi manifest gồm tên tệp, phiên bản/nguồn, quy tắc đặt tên áp dụng và quan hệ tới ma trận rubric.

**Điều kiện qua cổng:** package ứng viên đúng danh mục đã xác nhận, không chứa kết quả, tính năng hoặc bằng chứng chưa tồn tại.

### Cổng 4 — QA nội dung, tệp và khả năng tái kiểm chứng

1. Render rồi mở kiểm tra toàn bộ báo cáo, slide, PDF và poster nếu có; rà bố cục, font, nội dung bị cắt, hình ảnh và khả năng đọc.
2. Mở và phát hết video; kiểm tra âm thanh/phụ đề nếu package có dùng, độ chính xác của luồng và khả năng mở bằng công cụ phổ biến.
3. Kiểm tra mọi liên kết và đường dẫn bằng chứng. Giải nén code ZIP vào môi trường sạch, chạy lại đúng lệnh cài đặt, typecheck, test và production build của sản phẩm; ghi lệnh, kết quả thật và môi trường.
4. Đối chiếu tên, định dạng, dung lượng và cấu trúc package với yêu cầu hiện hành. Ghi mọi sai khác hoặc kiểm tra bị hoãn; chỉ giữ sai khác khi con người chấp nhận rõ ràng.

**Điều kiện qua cổng:** mọi tệp mở được, link hợp lệ, code trong ZIP build/test lại thành công và checklist QA có kết quả thực tế.

### Cổng 5 — Teamwork, trình bày và ký duyệt

1. Cả ba thành viên tự xác nhận phần đóng góp thực tế của mình; giải quyết mục thiếu hoặc chồng chéo mà không suy diễn từ Git alias.
2. Phân vai để cả ba thành viên đều tham gia trình bày/trả lời; rehearsal theo thời lượng hiện hành và ghi phần phụ trách cùng chủ đề Q&A của từng người.
3. Con người mở kiểm tra package cuối, ma trận rubric, manifest, kết quả QA và mọi sai khác rồi ký duyệt phiên bản nộp.

**Điều kiện hoàn tất:** có xác nhận của cả ba thành viên và human sign-off cho đúng package/version. Agent không tự đăng tải, gửi email, nộp lên LMS hoặc thực hiện bất kỳ thao tác nộp ra hệ thống bên ngoài nào.

## Điều kiện dừng hoặc thất bại

- Dừng ở gap report khi thiếu phê duyệt artifact, kết quả test thật hoặc yêu cầu nộp hiện hành.
- Dừng đóng gói khi format/deadline/kênh nộp mâu thuẫn chưa được con người giải quyết; khi bằng chứng không mở được; hoặc khi tệp, link, video, build hay test thất bại.
- Không đánh dấu hoàn tất khi thiếu một trong 11 mục, chưa xác nhận đóng góp/phân vai của đủ ba thành viên, còn sai khác chưa được chấp nhận hoặc chưa có human sign-off.
- Không tự sửa/bịa bằng chứng để vượt cổng và không tự nộp package ra bên ngoài.

## Nguồn quyết định

- Yêu cầu hiện tại của người dùng và quyết định đã ghi tại `coordination/handoffs/TASK-LIFE-002.md`.
- `AGENTS.md`; `coordination/PROTOCOL.md`; `docs/proposal.md`; `docs/final-rubric.csv`.
- `rules/style-rules.md`; `rules/quality-rules.md`; `rules/assessment-rules.md`.
- `references/project-guidelines/notes/guide-opencode.md`; `references/project-guidelines/notes/guide-project-2026.md`; `references/project-guidelines/notes/rubric-project-final.md`.
- Thông báo/template cuối kỳ hiện hành do nhóm cung cấp khi thực thi lộ trình; ghi chú năm 2026 chỉ dùng làm nguồn tham khảo cho đến khi được đối chiếu.
