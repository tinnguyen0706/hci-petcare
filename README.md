# Hệ thống hỗ trợ chăm sóc thú cưng

Đồ án môn **CSC12106 — Tương tác Người–Máy**, tập trung vào trải nghiệm của chủ nuôi khi đặt lịch, gửi yêu cầu đặc biệt và theo dõi tiến độ chăm sóc thú cưng theo thời gian thực.

## Phạm vi sản phẩm

Hệ thống hỗ trợ một hành trình liền mạch: chọn dịch vụ và khung giờ, nhận xác nhận tức thì, tự động đính kèm yêu cầu đặc biệt từ hồ sơ thú cưng, theo dõi các mốc chăm sóc và xem lại lịch sử. Nguồn nghiệp vụ đầy đủ nằm tại [docs/proposal.md](docs/proposal.md).

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
