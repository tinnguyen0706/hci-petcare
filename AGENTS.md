# Bản nháp do agent tổng hợp từ câu trả lời người dùng; chờ người dùng tự sửa và xác nhận chốt

# Quy tắc agent cho dự án HCI (CSC12106)

## 1. Bối cảnh và phạm vi sản phẩm

Dự án thiết kế **hệ thống hỗ trợ đặt lịch, gửi yêu cầu và theo dõi quá trình chăm sóc thú cưng**, lấy **chủ nuôi** làm người dùng cuối. Sản phẩm là web theo hướng **mobile-first**. Công cụ và công nghệ đã chốt là **Figma** cho thiết kế, **React và TypeScript** cho hiện thực. Không tự thêm backend, đổi công nghệ hoặc mở rộng phạm vi sản phẩm khi chưa có yêu cầu rõ ràng của người dùng.

Nghiệp vụ chi tiết phải nhất quán với `docs/proposal.md`. Khi sửa proposal, luôn giữ cấu trúc **Vấn đề – Ý tưởng – Quy trình**.

## 2. Ngôn ngữ và tính trung thực

- Trả lời người dùng và viết tài liệu bằng tiếng Việt, trừ khi người dùng yêu cầu khác.
- Nội dung phải tự chứa, rõ ràng và nhất quán với bằng chứng hiện có trong repository.
- Không bịa dữ liệu, số liệu, trích dẫn, kết quả nghiên cứu, kết quả kiểm thử hoặc bằng chứng teamwork.
- Không trình bày suy đoán như một dữ kiện đã được xác nhận.

## 3. Thứ tự ưu tiên nguồn

Khi các nguồn khác nhau, áp dụng theo thứ tự:

1. Yêu cầu hiện tại, rõ ràng của người dùng.
2. Rubric và proposal trong `docs/final-rubric.csv` và `docs/proposal.md`.
3. Hướng dẫn đồ án trong `references/project-guidelines/`.
4. Bài giảng và kiến thức môn học trong `references/course-materials/`.

Trước mỗi task, đọc `references/README.md`, xác định và đọc đầy đủ tài liệu có phạm vi áp dụng trực tiếp. Ghi đường dẫn các tài liệu đã ảnh hưởng đến quyết định quan trọng trong đầu ra hoặc handoff. Tài liệu tham khảo không được dùng để ghi đè proposal, rubric, tự mở rộng phạm vi hoặc thay đổi công nghệ.

## 4. Quyền tự chủ của agent

Agent tự hoàn thành một task hợp lệ trong `write_scope` đã giao, gồm thực hiện thay đổi, kiểm thử phù hợp, commit, tạo handoff và chuyển task sang review theo `coordination/PROTOCOL.md`. Agent chỉ hỏi người dùng khi thiếu một quyết định quan trọng có thể làm thay đổi kết quả hoặc khi cần quyền mới ngoài phạm vi đã được giao.

Quyền tự chủ không cho phép agent:

- sửa ngoài `write_scope`;
- mở rộng phạm vi sản phẩm, đổi công nghệ hoặc tự thêm backend;
- tự cấp thêm quyền, tự thay đổi quyết định của người dùng hoặc bỏ qua quy trình review và tích hợp;
- merge, push, xóa worktree hoặc sửa trực tiếp nhánh `main` khi đang làm worker.

## 5. Quy trình bắt buộc cho mọi task

Mọi task phải có đúng một owner, một branch `agent/<tool>/<task-id>`, một worktree `.worktrees/<tool>-<task-id>/`, một `write_scope` không giao nhau với task đang hoạt động, một handoff, một lượt review và bước tích hợp theo `coordination/PROTOCOL.md`.

- Worker chỉ sửa các đường dẫn được khai báo trong `write_scope`, chạy kiểm thử phù hợp, commit trên branch task, tạo handoff và chuyển task sang `review`.
- Reviewer chỉ đọc task, diff, handoff và kết quả kiểm thử; reviewer ghi một kết luận `approved` hoặc `changes-requested`, không sửa sản phẩm của task.
- Chỉ orchestrator đang giữ khóa mới được tích hợp task đã được duyệt vào `main` và thực hiện các bước metadata, trạng thái hoặc dọn worktree theo protocol.

Trước khi nhận hoặc thực hiện task, phải đọc `coordination/PROTOCOL.md`, `references/README.md`, `agents/manifest.json`, file agent tương ứng trong `agents/` và cặp `SKILL.md`/`PLAN.md` canonical trong `skills/`.

## 6. Vòng đời artifact cần quyết định của con người

Các artifact được bảo vệ gồm `AGENTS.md` ở gốc, mọi `PLAN.md` hoặc `SKILL.md` canonical bên dưới `skills/`, và mọi tệp Markdown bên dưới `rules/` hoặc `templates/`. Các file redirect sinh tự động trong `.agents/skills/` và `.agent/skills/` chỉ là adapter kỹ thuật, không phải nguồn nội dung và không tham gia lifecycle. Artifact canonical tuân theo vòng đời một chiều:

`needs-interview → agent-draft → human-editing → locked`

- `needs-interview`: orchestrator hỏi người dùng và ghi nhận quyết định trước khi giao task tạo bản nháp.
- `agent-draft`: agent chỉ được sửa khi task khai báo chính xác đường dẫn tệp trong `write_scope`; agent tạo bản nháp, kiểm thử, handoff và gửi review.
- `human-editing`: sau khi bản nháp được duyệt và tích hợp, người dùng trực tiếp sửa nội dung; agent chỉ góp ý, không sửa tệp.
- `locked`: chỉ được chuyển sang trạng thái này sau xác nhận rõ ràng của người dùng; agent chỉ đọc.

Agent không được tự tuyên bố artifact đã được người dùng chốt, tự mở khóa, chuyển lùi hoặc bỏ qua trạng thái. Đối với `AGENTS.md`, `skills/**/PLAN.md`, `skills/**/SKILL.md`, các tệp Markdown trong `rules/` và các template Markdown, sau giai đoạn agent tạo draft, mọi chỉnh sửa nội dung thuộc về người dùng; agent chỉ góp ý. Adapter phải được sinh lại từ manifest và không được chỉnh workflow trực tiếp trong adapter. Mọi thao tác với artifact được bảo vệ phải tiếp tục tuân thủ registry và các kiểm tra trong `coordination/PROTOCOL.md`.
