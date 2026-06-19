# agent-launch-readiness

A Codex skill for running practical pre-launch reviews of agent systems. It acts as a release gate, not a generic checklist.

## What it provides
- A structured release-gate workflow in `SKILL.md`
- Launch criteria covering runtime, connectors, approvals, safety, fallback behavior, logging, rollout, and operator handoff
- Reference material for failure modes, rollout stages, and concrete go / no-go examples

## Good fit for
- agent builders preparing first real users
- internal pilot reviews
- pre-launch operational checks
- deciding whether a system is ready now or should be held back

## Skill contents
- `SKILL.md`
- `agents/openai.yaml`
- `references/launch-criteria.md`
- `references/failure-modes.md`
- `references/rollout-stages.md`
- `references/review-examples.md`

## Install
Copy the `agent-launch-readiness` folder into `~/.codex/skills/`.

## Example use
`Use $agent-launch-readiness to review this agent deployment and give me a GO, GO WITH FIXES TRACKED, or NO-GO decision.`

## License
MIT
