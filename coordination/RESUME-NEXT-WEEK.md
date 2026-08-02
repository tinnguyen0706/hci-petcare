# Checkpoint tiếp tục đồ án

Cập nhật: 2026-08-02
Nhánh hiện tại: `main`

## Đã hoàn thành

- Chuyển 13 tài liệu PDF/XLSX môn học thành ghi chú Markdown trong `references/`.
- Tạo research protocol cho nghiên cứu tối thiểu 5 chủ nuôi tại `deliverables/01-user-research/`.
- Tạo lifecycle validator cho các artifact cần hỏi người dùng: `AGENTS.md`, `PLAN.md`, `SKILL.md`, `rules/*.md`, `templates/*.md`.
- Tạo và merge bản nháp `AGENTS.md` từ câu trả lời của người dùng.
- Reviewer đã duyệt bản nháp `AGENTS.md`.

## Trạng thái dở dang

- `AGENTS.md` đang ở registry `human-editing`; người dùng phải tự sửa và xác nhận chốt. Agent chỉ được góp ý, không được sửa file.
- `coordination/human-artifacts.yml` và `coordination/tasks/TASK-DRAFT-001.yml` đang có thay đổi chưa commit trên `main`:
  - `AGENTS.md`: `agent-draft → human-editing`.
  - `TASK-DRAFT-001`: `review → done`.
- TASK-AUTH-003 đã được reviewer `approved` nhưng chưa commit kết luận, chưa merge và chưa đánh dấu `done`:
  - Branch: `agent/codex/TASK-AUTH-003`.
  - Worktree: `.worktrees/codex-TASK-AUTH-003/`.
  - Implementation commit: `c255881`.
  - Handoff/review commit chưa tạo.
- Smoke test trên `main` sẽ chỉ sạch sau khi tích hợp TASK-AUTH-003.
- Orchestrator lock hiện thuộc session `draft-agents-md`; kiểm tra chủ sở hữu trước khi tiếp tục hoặc trả khóa nếu không còn dùng session này.

## Thứ tự tiếp tục

1. Commit review TASK-AUTH-003 trên branch riêng, merge vào `main`, đánh dấu `done`, chạy smoke test và cleanup worktree.
2. Commit hai thay đổi đang dở trên `main` sau khi smoke test đạt.
3. Người dùng tự chỉnh `AGENTS.md`; chỉ chuyển registry sang `locked` sau khi người dùng xác nhận rõ.
4. Phỏng vấn người dùng để tạo draft cho bốn cặp `PLAN.md`/`SKILL.md` trong `.agents/skills/`.
5. Phỏng vấn và tạo draft cho năm file Markdown trong `rules/`; template Markdown chỉ tạo khi nhóm đã chốt layout output.
6. Nhóm thực hiện nghiên cứu thật với tối thiểu 5 chủ nuôi, điền P01–P05 và evidence matrix.
7. Sau khi có dữ liệu: làm persona, value proposition, scenario, storyboard, Figma prototype, React product và bộ nộp cuối kỳ.

## Ràng buộc đã chốt

- Agent được tự hoàn thành task hợp lệ trong `write_scope`.
- Mọi task bắt buộc owner, branch, worktree, handoff, reviewer và tích hợp.
- Thứ tự nguồn: yêu cầu hiện tại → rubric/proposal → hướng dẫn đồ án → bài giảng.
- Không bịa dữ liệu nghiên cứu, kết quả kiểm thử hoặc bằng chứng teamwork.
- Sản phẩm: web mobile-first, Figma, React + TypeScript; không tự thêm backend hoặc mở rộng phạm vi.
