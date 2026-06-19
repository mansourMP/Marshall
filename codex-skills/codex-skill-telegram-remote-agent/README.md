# telegram-remote-agent

A Codex skill for using Telegram as the command surface for remote operations. It focuses on intent classification, approval-aware execution, and concise status replies rather than Telegram bot plumbing itself.

## What it provides
- A Telegram command workflow in `SKILL.md`
- Patterns for status, plan, approval, and handoff messages
- A clean bridge between Telegram and an existing remote execution path

## Good fit for
- operators who want to control remote workflows from Telegram
- Codex setups with a companion service or remote runner behind Telegram
- teams that need approval-aware chatops behavior

## Skill contents
- `SKILL.md`
- `agents/openai.yaml`
- `references/command-patterns.md`
- `references/approval-routing.md`
- `references/reply-shapes.md`

## Install
Copy the `telegram-remote-agent` folder into `~/.codex/skills/`.

## Example use
`Use $telegram-remote-agent to design a Telegram-based remote ops flow with status checks, approval-gated actions, and concise operator replies.`

## License
MIT
