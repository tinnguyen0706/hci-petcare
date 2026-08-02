# Handoff: TASK-DRAFT-001

## Thay đổi

- Soạn lại `AGENTS.md` thành bản nháp tiếng Việt tự chứa và ghi rõ trạng thái chờ người dùng tự sửa, xác nhận chốt.
- Ghi nhận phạm vi pet care cho chủ nuôi, web mobile-first, Figma, React và TypeScript; không tự thêm backend, đổi công nghệ hoặc mở rộng phạm vi.
- Quy định quyền tự chủ trong task hợp lệ, thứ tự ưu tiên nguồn, quy trình cộng tác bắt buộc và vòng đời artifact được bảo vệ mà không thay đổi registry.

## Tệp đã sửa

- `AGENTS.md`
- `coordination/tasks/TASK-DRAFT-001.yml`
- `coordination/handoffs/TASK-DRAFT-001.md`

## Kiểm thử

- Lệnh: `scripts/coordination/validate-task coordination/tasks/TASK-DRAFT-001.yml`
- Kết quả: `OK` ở trạng thái `review`.
- Lệnh: `git diff --check HEAD^..HEAD && git diff --check`
- Kết quả: không có lỗi whitespace trong commit implementation hoặc metadata chưa commit.
- Lệnh: `rg -n 'Bản nháp do agent tổng hợp|mobile-first|Figma|React và TypeScript|Không tự thêm backend|Vấn đề – Ý tưởng – Quy trình|không bịa|owner|branch|worktree|write_scope|handoff|review|needs-interview → agent-draft → human-editing → locked|không được tự|chỉ góp ý|chỉ đọc|Yêu cầu hiện tại|docs/final-rubric.csv|references/project-guidelines|references/course-materials' AGENTS.md`
- Kết quả: tìm thấy đầy đủ các quyết định bắt buộc trong bản nháp.
- Lệnh: `git diff --name-only main...HEAD`
- Kết quả: trước commit metadata, diff implementation chỉ có `AGENTS.md`, đúng `write_scope`.

## Tài liệu tham khảo đã ảnh hưởng

- `docs/proposal.md`: phạm vi nghiệp vụ pet care, chủ nuôi và cấu trúc Vấn đề – Ý tưởng – Quy trình.
- `docs/final-rubric.csv`: yêu cầu đầu ra cuối kỳ và nguyên tắc không bịa bằng chứng.
- `references/README.md`: quy trình đọc tài liệu liên quan và thứ tự ưu tiên nguồn.
- `references/project-guidelines/notes/guide-project-2026.md`: phạm vi đồ án và cấu trúc proposal, được áp dụng sau nguồn chuẩn.
- `references/project-guidelines/notes/guide-opencode.md`: nội dung hướng dẫn agent, công nghệ, workflow và kiểm chứng.
- `references/project-guidelines/notes/rubric-project-final.md` và `references/project-guidelines/notes/rubric-project-proposal.md`: đối chiếu rubric, không tự cho điểm và giữ ba phần proposal liên kết.
- `coordination/PROTOCOL.md`: ranh giới vai trò, task lifecycle, handoff, review, tích hợp và vòng đời artifact được bảo vệ.
- `coordination/handoffs/TASK-AUTH-002.md`: các quyết định người dùng đã được ghi nhận trước khi tạo draft.

## Vấn đề còn lại

- Đây chỉ là bản nháp ở `agent-draft`; sau review và tích hợp, người dùng cần trực tiếp sửa ở `human-editing` và xác nhận rõ ràng trước khi orchestrator chuyển sang `locked`.

## Commit

- SHA: `7cc8355ef852737f3304765c812cd5224b1c06f2`

## Review

- Kết luận: `approved`
- Ghi chú: Diff `main...agent/codex/TASK-DRAFT-001` chỉ sửa `AGENTS.md` và thêm metadata task/handoff, đều nằm đúng `write_scope`; không sửa registry hoặc artifact được bảo vệ nào khác. Bản nháp giữ đúng phạm vi chủ nuôi thú cưng, tiếng Việt, tính trung thực, cấu trúc proposal, mobile-first/Figma/React TypeScript và ràng buộc không tự thêm backend, đổi công nghệ hay mở rộng phạm vi. Quyền tự chủ chỉ áp dụng cho task hợp lệ trong scope/quyền đã giao; protocol vẫn yêu cầu đầy đủ owner, branch, worktree, handoff, review, tích hợp và khóa orchestrator. Thứ tự nguồn đúng yêu cầu người dùng → rubric/proposal → hướng dẫn đồ án → bài giảng; reference routing và lifecycle `needs-interview → agent-draft → human-editing → locked` được mô tả nhất quán, không tự tuyên bố đã chốt. `validate-task`, cổng `--validate-integration`, kiểm tra SHA, `git diff --check` và diff phạm vi đều đạt.
