# Hệ thống hỗ trợ chăm sóc thú cưng

Đồ án môn **CSC12106 — Tương tác Người–Máy**, tập trung vào trải nghiệm của chủ nuôi khi đặt lịch, gửi yêu cầu đặc biệt và theo dõi tiến độ chăm sóc thú cưng theo thời gian thực.

## Phạm vi sản phẩm

Hệ thống hỗ trợ một hành trình liền mạch: chọn dịch vụ và khung giờ, nhận xác nhận tức thì, tự động đính kèm yêu cầu đặc biệt từ hồ sơ thú cưng, theo dõi các mốc chăm sóc và xem lại lịch sử. Nguồn nghiệp vụ đầy đủ nằm tại [docs/proposal.md](docs/proposal.md).

## Phân công nhiệm vụ (Người vs. Agent)

Hệ thống tuân thủ mô hình cộng tác **Human-in-the-Loop**. Agent đóng vai trò trợ lý thực thi (worker/reviewer/orchestrator), con người chịu trách nhiệm chính về dữ liệu thực tế và quyết định chốt.

### Ma trận 11 mục Rubric

| # | Deliverable | Việc của Người (Human / Nhóm) | Việc của Agent (AI) |
|---|---|---|---|
| 1 | **Persona** | Phỏng vấn thực tế 5 chủ nuôi, thu thập dữ liệu thô, duyệt & chỉnh sửa bản nháp (`human-editing`). | Tổng hợp ghi chép phỏng vấn thành bản nháp Persona 9 phần có mã truy vết (`agent-draft`). |
| 2 | **Value Proposition** | Chốt các định hướng giá trị cốt lõi dựa trên insight thực tế. | Soạn bản nháp Value Proposition Canvas khớp 1-1 giữa Persona và Giá trị đề xuất. |
| 3 | **Scenario 1 (Hiện tại)** | Cung cấp câu chuyện thực tế về khó khăn khi đặt/theo dõi dịch vụ thú cưng. | Chuẩn bị bản nháp Scenario 1 chi tiết bối cảnh, khó khăn của hệ thống cũ. |
| 4 | **Scenario 2 (Mới)** | Đánh giá & duyệt luồng tương tác mới có khả thi và giải quyết đúng pain point không. | Soạn bản nháp Scenario 2 mô tả rõ các mốc tương tác mới (xác nhận tức thì, tiến độ real-time). |
| 5 | **Storyboard** | Vẽ/chỉnh sửa hình minh họa storyboard, chốt câu chuyện. | Soạn kịch bản chi tiết từng khung hình (context, action, caption) cho Storyboard. |
| 6 | **Prototype (Figma)** | Thiết kế UI/UX trên Figma, kiểm tra cảm nhận trực quan. | Gợi ý cấu trúc layout, component system, tạo bản mẫu wireframe/micro-interactions. |
| 7 | **Wireframe** | Đánh giá tính tiện dụng, màu sắc hài hòa và duyệt wireframe. | Tạo file phác thảo wireframe HTML/CSS/React hoặc sơ đồ layout UI. |
| 8 | **Software Product** | Chạy thử nghiệm, kiểm thử trải nghiệm người dùng cuối trên thiết bị di động. | Viết mã nguồn React + TypeScript (`src/`), component UI, kiểm thử tự động (`tests/`). |
| 9 | **Trình bày** | Thực hiện thuyết trình trước lớp, trả lời các câu hỏi phản biện của GV. | Soạn dàn ý slide, chuẩn bị câu hỏi Q&A dự kiến và tài liệu hỗ trợ. |
| 10 | **Báo cáo** | Đọc soát, hoàn thiện văn phong, duyệt và xuất báo cáo cuối kỳ. | Tổng hợp toàn bộ tài liệu từ `01` đến `03` thành báo cáo Markdown hoàn chỉnh (>6 trang). |
| 11 | **Team work** | Phân công giữa 3 thành viên, thực địa, ký duyệt các task & artifact. | Đóng vai các agent (Orchestrator, Researcher, Designer, Implementer, Reviewer) theo đúng `PROTOCOL.md`. |

### Nhiệm vụ của Con người đối với Protected Artifacts

Theo `AGENTS.md` (Mục 6) và `coordination/PROTOCOL.md`, các tài liệu sau là **Protected Artifacts** (Artifacts được bảo vệ):
1. `AGENTS.md` ở thư mục gốc.
2. Mọi tệp `PLAN.md` và `SKILL.md` (trong `.agents/skills/` hoặc bất kỳ đâu).
3. Mọi tệp Markdown bên dưới `rules/` (các quy tắc hệ thống).
4. Mọi tệp Markdown bên dưới `templates/`.

#### Vòng đời Artifact & Nhiệm vụ của Con người

Vòng đời của các file này trải qua 4 trạng thái một chiều:

`needs-interview` ➔ `agent-draft` ➔ `human-editing` ➔ `locked`

| Trạng thái | Nhiệm vụ của Con người (Human) | Hành vi của Agent (AI) |
|---|---|---|
| **1. `needs-interview`** | Trả lời phỏng vấn / đưa ra các quyết định thiết kế ban đầu khi Agent hỏi. | Orchestrator đặt câu hỏi, ghi nhận quyết định của người dùng và tạo task giao draft. |
| **2. `agent-draft`** | Xem bản nháp do Agent khởi tạo, duyệt PR tích hợp. | Worker tạo bản nháp đầu tiên đúng theo chỉ đạo của người dùng. |
| **3. `human-editing`** | **Nhiệm vụ chính của Con người**: Trực tiếp đọc, chỉnh sửa, bổ sung và hoàn thiện nội dung file Markdown theo ý mình. | **Agent CHỈ ĐƯỢC ĐỌC VÀ GÓP Ý**, tuyệt đối không được tự ý sửa nội dung file. |
| **4. `locked`** | Xác nhận chốt file hoàn toàn. Khi cần thay đổi, người dùng chỉ đạo để mở lại quy trình. | Agent chỉ đọc tệp để tuân thủ quy tắc, không được tự mở khóa hay chuyển lùi trạng thái. |

> **Tóm lại**: Sau khi Agent tạo xong bản nháp (`agent-draft`) và được tích hợp, mọi việc đọc, chỉnh sửa nội dung chi tiết của `AGENTS.md`, `PLAN.md`, `SKILL.md`, các file trong `rules/` và `templates/` **hoàn toàn thuộc về CON NGƯỜI** (`human-editing`). Agent không được phép tự ý đè/sửa các file này.

#### Chi tiết các File Markdown do Con người trực tiếp chỉnh sửa (`human-editing`)

| Thư mục | Các file Markdown Con người chỉnh sửa | Mục đích chỉnh sửa của Con người |
|---|---|---|
| Gốc (`/`) | **`AGENTS.md`** | Chỉnh sửa quy tắc chung, nguyên tắc làm việc, thứ tự ưu tiên nguồn và bổ sung lưu ý từ người dùng. |
| `.agents/skills/<skill>/` | **`SKILL.md`** (trong 4 skill: `research-users`, `design-interactions`, `build-prototype`, `prepare-final-delivery`) | Chỉnh sửa hướng dẫn quy trình từng bước, phương pháp thực hiện nhiệm vụ của từng kỹ năng. |
| `.agents/skills/<skill>/` | **`PLAN.md`** (kế hoạch thực hiện từng skill) | Chỉnh sửa kế hoạch hành động, phạm vi công việc và các mốc chốt của skill đó. |
| `rules/` | **`assessment-rules.md`**, **`domain-rules.md`**, **`quality-rules.md`**, **`style-rules.md`**, **`task-rules.md`** | Điều chỉnh các quy định về tiêu chí đánh giá, nghiệp vụ thú cưng, chất lượng kiểm thử, văn phong và quy định task. |
| `templates/` | Mọi tệp `.md` khuôn mẫu | Chỉnh sửa định dạng khung mẫu cho báo cáo, handoff, session notes. |
| `docs/` | **`proposal.md`** | Hoàn thiện nội dung nghiệp vụ Vấn đề - Ý tưởng - Quy trình. |

#### Cách các Agent dựa vào các File Markdown trên để làm việc

| File Markdown | Cách Agent đọc & tuân thủ khi thực thi Task |
|---|---|
| **`AGENTS.md`** | **Quy tắc bắt buộc hàng đầu**: Tất cả Agent đều đọc file này trước tiên để biết ranh giới quyền hạn, thứ tự ưu tiên nguồn, ngôn ngữ (tiếng Việt), và không vi phạm `write_scope`. |
| **`SKILL.md` & `PLAN.md`** | **Hướng dẫn thực thi kỹ năng**: Khi Agent đảm nhận vai trò tương ứng (ví dụ `user-researcher`), Agent sẽ đọc `SKILL.md` để làm đúng các bước và đọc `PLAN.md` để bám sát kế hoạch đã duyệt. |
| **`rules/*.md`** | **Bộ lọc kiểm tra chất lượng**: Agent áp dụng `domain-rules` để không làm sai nghiệp vụ, `style-rules` để không dịch thuật ngữ tiếng Anh, `quality-rules` để chạy kiểm thử thật, `task-rules` để tuân thủ branch/worktree. |
| **`templates/*.md`** | **Khuôn mẫu xuất đầu ra**: Agent sao chép đúng định dạng mẫu khi lập `handoff.md`, `session-notes-Pxx.md`, v.v. |
| **`docs/proposal.md`** | **Nguồn sự thật nghiệp vụ**: Agent đối chiếu để giữ đúng 4 tính năng cốt lõi (xác nhận tức thì, yêu cầu đặc biệt, mốc tiến độ real-time, lịch sử) và không tự ý thêm backend/tính năng ngoài scope. |

> 📌 **Nguyên tắc hoạt động**: Con người giữ quyền chỉnh sửa nội dung các file Markdown trên ở giai đoạn `human-editing`. Agent luôn luôn đọc (view/search) các file này trước mỗi hành động để đảm bảo mọi mã nguồn, tài liệu và giao diện tạo ra đều tuân thủ chính xác 100% chỉ dẫn của con người.

#### Sơ đồ Phân vùng Thư mục (Con người Chỉnh sửa vs. Adapter Kỹ thuật)

```
THƯ MỤC NƠI CON NGƯỜI ĐIỀU KHIỂN & CHỈNH SỬA (Human-Controlled Content)
├── AGENTS.md                          <-- Quy tắc hệ thống tối cao
├── rules/*.md                         <-- Bộ luật kiểm soát chất lượng (style, domain, quality, task, assessment)
├── .agents/skills/<skill>/SKILL.md    <-- Quy trình thực thi kỹ năng dùng chung
├── .agents/skills/<skill>/PLAN.md     <-- Lộ trình kế hoạch & Cổng duyệt dùng chung
├── docs/proposal.md                   <-- Đề xuất nghiệp vụ chính thức
└── templates/*.md                     <-- Các mẫu báo cáo & handoff

THƯ MỤC CẤU HÌNH TỰ ĐỘNG ADAPTER (Hệ thống/Agent quản lý, Con người KHÔNG NÊN sửa tay)
├── .agents/agents/<role>/agent.md     <-- Adapter cho Antigravity CLI (agy)
├── .codex/config.toml & agents/*.toml <-- Adapter cho OpenAI Codex CLI
├── .github/copilot-instructions.md    <-- Adapter cho GitHub Copilot
└── opencode.json & .opencode/         <-- Adapter cho OpenCode AI
```

#### Phân biệt Chi tiết các Vùng Thư mục

| Vùng Thư mục | Ai trực tiếp quản lý/sửa? | Chức năng & Cách Agent sử dụng |
|---|---|---|
| **`/AGENTS.md`** | **CON NGƯỜI** (ở `human-editing`) | **Luật tối cao chung**: Tất cả Agent (`agy`, `codex`, `copilot`, `opencode`) đọc file này trước tiên để tuân thủ thứ tự ưu tiên nguồn, ngôn ngữ tiếng Việt và ranh giới `write_scope`. |
| **`.agents/skills/<skill>/`** | **CON NGƯỜI** (ở `human-editing`) | **Skill & Plan chung**: Chứa `SKILL.md` (hướng dẫn thực thi) và `PLAN.md` (kế hoạch & cổng duyệt). Mọi Adapter Config của 4 công cụ AI đều trỏ về đây để Agent thực thi đúng workflow. |
| **`rules/*.md`** | **CON NGƯỜI** (ở `human-editing`) | **Bộ luật kiểm soát**: Định nghĩa các quy tắc kiểm thử, văn phong (giữ thuật ngữ tiếng Anh), nghiệp vụ petcare. Agent đọc để không vi phạm quy chuẩn. |
| **`docs/proposal.md`** | **CON NGƯỜI** (ở `human-editing`) | **Nguồn sự thật nghiệp vụ**: Agent đối chiếu để giữ đúng 4 tính năng cốt lõi và không tự mở rộng scope. |
| **`.codex/`, `.agents/agents/`, `.github/`, `.opencode/`** | **Cấu hình Adapter kỹ thuật** | **Cầu nối kỹ thuật**: Đã được thiết lập sẵn để tự động khai báo danh sách 6 subagent cho từng phần mềm AI. Con người không cần chỉnh sửa các file này trừ khi muốn thêm role mới. |

## Cấu trúc làm việc

- `docs/`: proposal và rubric chính thức.
- `references/`: mục lục hướng dẫn đồ án và kiến thức môn học dùng để hỗ trợ từng task.
- `deliverables/`: sản phẩm theo bốn nhóm user research, interaction design, software product và final submission.
- `agents/roles/`: sáu vai trò trung lập dùng chung.
- `.agents/skills/`: bốn workflow chuẩn dùng chung.
- `coordination/`: task, handoff, template và protocol cộng tác.
- `scripts/coordination/`: công cụ khóa orchestrator, worktree, kiểm tra task, handoff và tích hợp.
- `.codex/`, `.agents/agents/`, `.github/agents/`, `.opencode/agents/`: adapter cho từng công cụ.

## Bắt đầu

> **Yêu cầu**: [Git](https://git-scm.com/), [Python 3.10+](https://www.python.org/) và [GitHub CLI (`gh`)](https://cli.github.com/). Sau khi cài `gh`, chạy `gh auth login` để xác thực.

1. Đọc `AGENTS.md`, `coordination/PROTOCOL.md`, [mục lục tài liệu tham khảo](references/README.md) và role được giao.
2. Orchestrator nhận khóa bằng `scripts/coordination/claim-orchestrator`.
3. Tạo một task từ `coordination/templates/task.yml`, kiểm tra bằng `scripts/coordination/validate-task`, rồi tạo worktree riêng.
4. Worker commit và tạo handoff; reviewer ghi `approved` hoặc `changes-requested`.
5. Orchestrator tích hợp task đã duyệt qua Pull Request và dọn worktree.

Không làm việc trực tiếp trên `main`; `.worktrees/` chỉ là vùng làm việc cục bộ và không được theo dõi bởi Git.

## Cài đặt trên Windows

Script trong `scripts/coordination/` là bash script. Thành viên dùng Windows cần một trong hai cách sau:

### Cách 1: Git Bash (khuyến nghị)

1. Cài [Git for Windows](https://gitforwindows.org/) — Git Bash được kèm sẵn.
2. Cài [Python 3.10+](https://www.python.org/downloads/) — chọn **"Add Python to PATH"** khi cài.
3. Mở **Git Bash**, clone repository và chạy script bình thường:
   ```bash
   git clone <url> && cd HCI
   scripts/coordination/validate-task coordination/tasks/TASK-RES-001.yml
   ```

### Cách 2: WSL (Windows Subsystem for Linux)

1. Cài WSL theo [hướng dẫn chính thức](https://learn.microsoft.com/en-us/windows/wsl/install).
2. Trong WSL terminal, cài Git và Python: `sudo apt install git python3`.
3. Clone repository trong WSL filesystem và làm việc bình thường.

> **Lưu ý**: Nếu Python trên máy chỉ có lệnh `python` (không có `python3`), script sẽ tự fallback. Hoặc set biến: `export PYTHON=python`.

## Thêm tài liệu tham khảo

Đặt hướng dẫn đồ án trong `references/project-guidelines/` và kiến thức môn học trong `references/course-materials/`. Sau khi thêm tệp, cập nhật bảng mục lục trong `references/README.md` để agent biết nội dung, nguồn và task nào cần sử dụng tài liệu đó.
