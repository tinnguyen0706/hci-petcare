# Handoff: TASK-DRAFT-005

## Thay đổi

- Đi đúng chuỗi trạng thái `ready → claimed → in-progress → review`; worker không tự review.
- Tạo `PLAN.md` như một lộ trình tái sử dụng có cảnh báo trạng thái, điều kiện sử dụng, đầu vào, đầu ra, năm cổng workflow, điều kiện dừng/thất bại và nguồn quyết định.
- Chặn quy trình đầy đủ đến khi ba nhóm artifact 01–03 đã được con người duyệt, có kết quả kiểm thử thật và có thông báo/template cuối kỳ hiện hành; nếu thiếu, chỉ cho phép readiness/gap report.
- Yêu cầu ma trận đủ 11 mục rubric tới bằng chứng thật, không tự cho điểm, không bịa teamwork và không xem protocol/commit/Git alias là bằng chứng teamwork đầy đủ.
- Bao phủ báo cáo nguồn/PDF, slide nguồn/PDF, speaker notes/Q&A, thiết kế giao diện PDF, video Prototype MP4, code ZIP và poster/bản giấy có điều kiện; kèm render/open, link, giải nén/build/test và package QA.
- Yêu cầu cả ba thành viên xác nhận đóng góp thật, đều có vai trò trình bày/Q&A, human sign-off và cấm agent tự nộp ra hệ thống ngoài.
- Không tạo bất kỳ final package nào trong task này. Trong `SKILL.md`, chỉ thêm một chỉ dẫn bắt buộc đọc `[PLAN.md](PLAN.md)`; giữ nguyên frontmatter và nội dung nghiệp vụ có sẵn.

## Tệp đã sửa

- `.agents/skills/prepare-final-delivery/PLAN.md`
- `.agents/skills/prepare-final-delivery/SKILL.md`
- `coordination/tasks/TASK-DRAFT-005.yml`
- `coordination/handoffs/TASK-DRAFT-005.md`

## Kiểm thử

- Lệnh: `python -X utf8 scripts/coordination/tasklib.py coordination/tasks/TASK-DRAFT-005.yml`.
- Kết quả: `OK` ở cả trạng thái `claimed` và `in-progress`; sẽ chạy lại ở trạng thái `review`.
- Lệnh: `python -X utf8 C:/Users/Asus/.codex/skills/.system/skill-creator/scripts/quick_validate.py .agents/skills/prepare-final-delivery`.
- Kết quả: `Skill is valid!`.
- Lệnh: PowerShell link/frontmatter/minimal-diff check cho `SKILL.md`.
- Kết quả: link tương đối `PLAN.md` phân giải tới tệp thật; frontmatter giống byte-normalized content trên `main`; ngoài dòng trống định dạng, chỉ có đúng một dòng chỉ dẫn mới trong thân skill.
- Lệnh: kiểm tra thủ công và PowerShell content scan cho disclaimer, điều kiện đầu vào, đủ 11 hàng rubric, các thành phần package, QA, ba thành viên, human sign-off, no external submission và điều kiện dừng.
- Kết quả: đạt toàn bộ acceptance criteria; nội dung không tuyên bố package hoặc kết quả nào đã hoàn tất.
- Lệnh: `python -X utf8 scripts/coordination/tasklib.py --validate-integration coordination/tasks/TASK-DRAFT-005.yml main HEAD`.
- Kết quả: sẽ cập nhật sau commit implementation.
- Lệnh: `git diff --check main...HEAD` và `git diff --name-only main...HEAD`.
- Kết quả: sẽ cập nhật sau commit implementation.
- Lệnh: `bash tests/coordination-smoke.sh`.
- Kết quả: không thể khởi chạy trong môi trường Windows hiện tại, lỗi `Bash/Service/CreateInstance/E_ACCESSDENIED`; task validator và integration gate Python trực tiếp được dùng để kiểm tra phần logic liên quan.

## Tài liệu đã ảnh hưởng

- Yêu cầu hiện tại của người dùng và `coordination/handoffs/TASK-LIFE-002.md`: các quyết định đã chốt cho PLAN, package, teamwork, human gate và giới hạn không tự nộp.
- `AGENTS.md`; `coordination/PROTOCOL.md`; `references/README.md`; `agents/roles/documentation-agent.md`.
- `.agents/skills/prepare-final-delivery/SKILL.md` và system skill `C:/Users/Asus/.codex/skills/.system/skill-creator/SKILL.md`.
- `docs/proposal.md`; `docs/final-rubric.csv`; `rules/style-rules.md`; `rules/quality-rules.md`; `rules/assessment-rules.md`.
- `references/project-guidelines/notes/guide-opencode.md`; `references/project-guidelines/notes/guide-project-2026.md`; `references/project-guidelines/notes/rubric-project-final.md`.

## Vấn đề còn lại

- Cần reviewer độc lập đánh giá bản nháp. Sau khi được duyệt và tích hợp, orchestrator mới chuyển cặp PLAN/SKILL sang `human-editing`; worker không tự chuyển registry.
- Repository chưa có yêu cầu nộp cuối kỳ hiện hành trong phạm vi task này. Khi dùng skill, nếu nhóm vẫn chưa cung cấp thông báo/template đang áp dụng thì đầu ra phải dừng ở readiness/gap report.
- Task này không tạo, xác minh hoặc nộp bộ final package thực tế.
- Coordination smoke Bash không chạy được do giới hạn Windows nêu trên; không che giấu giới hạn này và không coi đó là kết quả đạt.

## Commit

- SHA: `sẽ cập nhật sau commit implementation`

## Review

- Kết luận: `pending`
- Ghi chú: chờ reviewer độc lập; worker không tự review.
