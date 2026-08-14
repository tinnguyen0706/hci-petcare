#!/usr/bin/env bash
set -euo pipefail
PYTHON=${PYTHON:-$(command -v python3 || command -v python)}
[[ -n "$PYTHON" ]] || { echo "Không tìm thấy python3 hoặc python." >&2; exit 1; }
export PYTHON

source_root=$(git rev-parse --show-toplevel)
fixture=$(mktemp -d /tmp/hci-coordination-test.XXXXXX)
trap 'rm -rf "$fixture"' EXIT

mkdir -p "$fixture/scripts" "$fixture/coordination/tasks" "$fixture/coordination/handoffs" "$fixture/coordination/templates" "$fixture/.worktrees"
cp -R "$source_root/scripts/coordination" "$fixture/scripts/"
cp "$source_root/coordination/human-artifacts.yml" "$fixture/coordination/human-artifacts.yml"
# Fixture luôn bắt đầu vòng đời AGENTS từ needs-interview, không phụ thuộc
# trạng thái thật của artifact trong repository nguồn.
sed -i '/path: AGENTS.md/{n;s/status: .*/status: needs-interview/;}' "$fixture/coordination/human-artifacts.yml"
cp "$source_root/coordination/templates/task.yml" "$fixture/coordination/templates/task.yml"
cp "$source_root/coordination/templates/handoff.md" "$fixture/coordination/templates/handoff.md"
cd "$fixture"
git init -b main -q
git config user.name "Coordination Smoke Test"
git config user.email "coordination-test@example.invalid"
git config commit.gpgsign false
touch README.md

make_task() {
  local number=$1 tool=$2 scope=$3
  local task="coordination/tasks/TASK-00${number}.yml"
  cp coordination/templates/task.yml "$task"
  sed -i "s/TASK-001/TASK-00${number}/g; s/unassigned/${tool}/g; s#src/example/#${scope}/#" "$task"
}

make_task 1 codex work/one
make_task 2 agy work/two
make_task 3 copilot work/three
make_task 4 opencode work/four
git add . && git commit -qm "test: baseline"

for task in coordination/tasks/*.yml; do scripts/coordination/validate-task "$task"; done

# Artifact được bảo vệ chỉ nhận exact scope ở agent-draft.
cp coordination/tasks/TASK-004.yml coordination/tasks/TASK-098.yml
sed -i 's/TASK-004/TASK-098/g; s/status: ready/status: claimed/; s#work/four/#AGENTS.md#' coordination/tasks/TASK-098.yml
if scripts/coordination/validate-task coordination/tasks/TASK-098.yml >/dev/null 2>&1; then
  echo "Artifact needs-interview vẫn được giao agent" >&2; exit 1
fi
sed -i '/path: AGENTS.md/{n;s/needs-interview/agent-draft/;}' coordination/human-artifacts.yml
scripts/coordination/validate-task coordination/tasks/TASK-098.yml >/dev/null
sed -i '/path: AGENTS.md/{n;s/agent-draft/human-editing/;}' coordination/human-artifacts.yml
if scripts/coordination/validate-task coordination/tasks/TASK-098.yml >/dev/null 2>&1; then
  echo "Artifact human-editing vẫn được giao agent" >&2; exit 1
fi
sed -i '/path: AGENTS.md/{n;s/human-editing/locked/;}' coordination/human-artifacts.yml
if scripts/coordination/validate-task coordination/tasks/TASK-098.yml >/dev/null 2>&1; then
  echo "Artifact locked vẫn được giao agent" >&2; exit 1
fi
sed -i 's#AGENTS.md#.agents/new/SKILL.md#' coordination/tasks/TASK-098.yml
if scripts/coordination/validate-task coordination/tasks/TASK-098.yml >/dev/null 2>&1; then
  echo "Artifact chưa đăng ký vẫn được giao agent" >&2; exit 1
fi
sed -i 's#.agents/new/SKILL.md#.agents/#' coordination/tasks/TASK-098.yml
if scripts/coordination/validate-task coordination/tasks/TASK-098.yml >/dev/null 2>&1; then
  echo "Scope rộng vẫn được phép bao phủ artifact" >&2; exit 1
fi
sed -i 's#.agents/#x/#' coordination/tasks/TASK-098.yml
scripts/coordination/validate-task coordination/tasks/TASK-098.yml >/dev/null
rm coordination/tasks/TASK-098.yml

# Registry chỉ cho phép chuyển tiến đúng một trạng thái.
cp coordination/human-artifacts.yml "$fixture/registry-old.yml"
cp coordination/human-artifacts.yml "$fixture/registry-new.yml"
sed -i '/path: AGENTS.md/{n;s/locked/human-editing/;}' "$fixture/registry-new.yml"
if "$PYTHON" scripts/coordination/tasklib.py --validate-registry-transition "$fixture/registry-old.yml" "$fixture/registry-new.yml" >/dev/null 2>&1; then
  echo "Registry cho phép chuyển lùi" >&2; exit 1
fi
sed -i '/path: AGENTS.md/{n;s/locked/needs-interview/;}' "$fixture/registry-old.yml"
sed -i '/path: AGENTS.md/{n;s/human-editing/locked/;}' "$fixture/registry-new.yml"
if "$PYTHON" scripts/coordination/tasklib.py --validate-registry-transition "$fixture/registry-old.yml" "$fixture/registry-new.yml" >/dev/null 2>&1; then
  echo "Registry cho phép bỏ qua trạng thái" >&2; exit 1
fi
for task in coordination/tasks/*.yml; do scripts/coordination/create-agent-worktree "$task" >/dev/null; done
[[ $(git worktree list --porcelain | grep -c '^worktree ') -eq 5 ]]

# Khóa phải loại trừ orchestrator thứ hai.
scripts/coordination/claim-orchestrator codex session-one >/dev/null
if scripts/coordination/claim-orchestrator agy session-two >/dev/null 2>&1; then
  echo "Hai orchestrator đã giữ khóa đồng thời" >&2; exit 1
fi

# Hai task hoạt động có scope giao nhau phải bị từ chối.
sed -i 's/status: ready/status: claimed/; s#work/two/#work/shared/#' coordination/tasks/TASK-002.yml
sed -i 's/status: ready/status: claimed/; s#work/three/#work/shared/child/#' coordination/tasks/TASK-003.yml
if scripts/coordination/validate-task coordination/tasks/TASK-002.yml >/dev/null 2>&1; then
  echo "Không phát hiện write_scope giao nhau" >&2; exit 1
fi
sed -i 's/status: claimed/status: ready/; s#work/shared/#work/two/#' coordination/tasks/TASK-002.yml
sed -i 's/status: claimed/status: ready/; s#work/shared/child/#work/three/#' coordination/tasks/TASK-003.yml

# Diff thật ngoài write_scope phải bị chặn dù task khai báo hợp lệ.
touch .worktrees/opencode-TASK-004/outside.txt
git -C .worktrees/opencode-TASK-004 add outside.txt
git -C .worktrees/opencode-TASK-004 commit -qm "test: unauthorized diff"
if "$PYTHON" scripts/coordination/tasklib.py --validate-integration coordination/tasks/TASK-004.yml main agent/opencode/TASK-004 >/dev/null 2>&1; then
  echo "Diff ngoài write_scope vẫn được tích hợp" >&2; exit 1
fi

# Scope thư mục thông thường hợp lệ nhưng không cho tạo PLAN.md chưa đăng ký.
sed -i 's#work/two/#x/#' coordination/tasks/TASK-002.yml
mkdir -p .worktrees/agy-TASK-002/x
touch .worktrees/agy-TASK-002/x/PLAN.md
git -C .worktrees/agy-TASK-002 add x/PLAN.md
git -C .worktrees/agy-TASK-002 commit -qm "test: unregistered protected artifact"
if "$PYTHON" scripts/coordination/tasklib.py --validate-integration coordination/tasks/TASK-002.yml main agent/agy/TASK-002 >/dev/null 2>&1; then
  echo "PLAN.md chưa đăng ký trong scope thư mục vẫn được tích hợp" >&2; exit 1
fi
sed -i 's#x/#work/two/#' coordination/tasks/TASK-002.yml

# Luồng đầy đủ của TASK-001.
task=coordination/tasks/TASK-001.yml
sed -i 's/status: ready/status: claimed/' "$task"; scripts/coordination/validate-task "$task" >/dev/null
sed -i 's/status: claimed/status: in-progress/' "$task"; scripts/coordination/validate-task "$task" >/dev/null
mkdir -p .worktrees/codex-TASK-001/work/one
touch .worktrees/codex-TASK-001/work/one/result.txt
git -C .worktrees/codex-TASK-001 add work/one/result.txt
git -C .worktrees/codex-TASK-001 commit -qm "feat: complete task one"
sha=$(git -C .worktrees/codex-TASK-001 rev-parse HEAD)
scripts/coordination/create-handoff "$task" "$sha" >/dev/null
handoff=coordination/handoffs/TASK-001.md
sed -i 's#`command`#`test -f work/one/result.txt`#; s/mô tả kết quả thực tế./đã đạt./; s/`pending`/`approved`/; s/chưa review./đạt acceptance criteria./' "$handoff"
sed -i 's/status: in-progress/status: review/' "$task"; scripts/coordination/validate-task "$task" >/dev/null
scripts/coordination/integrate-task "$task" >/dev/null
grep -q '^status: done$' "$task"
scripts/coordination/validate-task "$task" >/dev/null

# done thiếu bằng chứng phải bị từ chối.
cp coordination/tasks/TASK-004.yml coordination/tasks/TASK-099.yml
sed -i 's/TASK-004/TASK-099/g; s/status: ready/status: done/; s#work/four#work/ninety-nine#g' coordination/tasks/TASK-099.yml
if scripts/coordination/validate-task coordination/tasks/TASK-099.yml >/dev/null 2>&1; then
  echo "Task done thiếu handoff vẫn hợp lệ" >&2; exit 1
fi

scripts/coordination/cleanup-worktree "$task" >/dev/null
git worktree remove .worktrees/agy-TASK-002
git worktree remove .worktrees/copilot-TASK-003
git worktree remove .worktrees/opencode-TASK-004
scripts/coordination/release-orchestrator codex session-one >/dev/null
echo "Coordination smoke test: OK"
