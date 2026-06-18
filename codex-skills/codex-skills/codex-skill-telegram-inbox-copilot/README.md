# telegram-inbox-copilot

A Codex skill for working inside Telegram-centered message flows once the bot or chat path already works. It focuses on triage, reply drafting, summaries, and handoffs rather than Telegram transport debugging.

## What it provides
- A Telegram workflow layer in `SKILL.md`
- References for message patterns, approval boundaries, and handoff rules
- A complementary skill to `telegram-agent-ops`, not a duplicate of it

## Good fit for
- Telegram-based support or ops teams
- founders handling Telegram inbound
- teams using Telegram groups or topics as an operations surface
- hybrid human-plus-agent reply workflows

## Skill contents
- `SKILL.md`
- `agents/openai.yaml`
- `references/inbox-patterns.md`
- `references/approval-boundaries.md`
- `references/routing-handoff.md`

## Install
Copy the `telegram-inbox-copilot` folder into `~/.codex/skills/`.

## Example use
`Use $telegram-inbox-copilot to triage these Telegram messages, draft replies for the routine ones, and prepare a handoff note for anything approval-gated.`

## License
MIT
