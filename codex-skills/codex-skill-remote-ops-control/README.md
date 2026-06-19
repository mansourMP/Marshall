# remote-ops-control

A Codex skill for disciplined remote operations through existing access paths such as SSH, cloud CLIs, admin APIs, and companion services. It focuses on staged diagnostics, approval-gated changes, rollback, and verification.

## What it provides
- A practical remote-operator workflow in `SKILL.md`
- Approval guidance for remote diagnostics versus mutating actions
- Restart, redeploy, rollback, and verification patterns

## Good fit for
- operators and founders managing live services
- teams doing remote diagnostics through CLI or APIs
- Codex setups that already have a remote execution path

## Skill contents
- `SKILL.md`
- `agents/openai.yaml`
- `references/approval-model.md`
- `references/remote-workflows.md`
- `references/verification-patterns.md`

## Install
Copy the `remote-ops-control` folder into `~/.codex/skills/`.

## Example use
`Use $remote-ops-control to diagnose this service remotely, separate the safe checks from the risky actions, and prepare a restart plan with rollback and verification.`

## License
MIT
