# local-companion-setup

A Codex skill for designing the local execution layer behind remote control workflows. It focuses on companion daemons, approval checks, execution boundaries, audit logging, and supervised runtime behavior.

## What it provides
- A practical companion-architecture workflow in `SKILL.md`
- References for architecture, security boundaries, and runtime operations
- A clean way to define the execution path behind Telegram or other remote control surfaces

## Good fit for
- operators building a Codex companion service
- Telegram or chatops-style control setups
- teams that want safe remote execution rather than arbitrary shell access

## Skill contents
- `SKILL.md`
- `agents/openai.yaml`
- `references/architecture-patterns.md`
- `references/security-boundaries.md`
- `references/runtime-operations.md`

## Install
Copy the `local-companion-setup` folder into `~/.codex/skills/`.

## Example use
`Use $local-companion-setup to design the local companion behind a Telegram-controlled Codex agent, including approvals, audit logs, and supervised execution.`

## License
MIT
