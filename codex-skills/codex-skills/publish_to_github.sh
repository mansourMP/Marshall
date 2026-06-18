#!/usr/bin/env bash
set -euo pipefail

OWNER="${1:-mansourMP}"
ROOT="/Users/mansur/codex skills from me"

skills=(
  "agent-connector-smoke-test"
  "agent-launch-readiness"
  "approval-policy-designer"
  "business-ai-onboarding"
  "codex-for-accounting-workflows"
  "codex-for-ops-teams"
  "customer-support-triage"
  "incident-comms-drafter"
  "local-agent-runtime-debug"
  "local-companion-setup"
  "meeting-to-execution"
  "next-move-planner"
  "remote-ops-control"
  "telegram-agent-ops"
  "telegram-inbox-copilot"
  "telegram-remote-agent"
)

for skill in "${skills[@]}"; do
  repo="codex-skill-$skill"
  dir="$ROOT/$skill"

  if [[ ! -d "$dir/.git" ]]; then
    echo "Skipping $skill: no git repo at $dir" >&2
    continue
  fi

  echo
  echo "=== $repo ==="

  if gh repo view "$OWNER/$repo" >/dev/null 2>&1; then
    git -C "$dir" remote set-url origin "https://github.com/$OWNER/$repo.git"
    git -C "$dir" push -u origin main
  else
    gh repo create "$OWNER/$repo" --public --source "$dir" --remote origin --push
  fi
done
