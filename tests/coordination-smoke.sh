#!/usr/bin/env bash
set -euo pipefail

source_root=$(git rev-parse --show-toplevel)
fixture=$(mktemp -d /tmp/hci-coordination-test.XXXXXX)
trap 'rm -rf "$fixture"' EXIT

mkdir -p "$fixture/scripts" "$fixture/coordination/tasks" "$fixture/coordination/handoffs" "$fixture/coordination/templates" "$fixture/.worktrees"
cp -R "$source_root/scripts/coordination" "$fixture/scripts/"
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
