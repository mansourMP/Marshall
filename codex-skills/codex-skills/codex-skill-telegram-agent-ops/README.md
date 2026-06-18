# telegram-agent-ops

A Codex skill for building, probing, and debugging Telegram-based agent workflows. It focuses on the operational failure modes that matter in practice: inbound/outbound verification, session routing, connector use, and "bot is online but not replying" incidents.

## What it provides
- A practical Telegram operations workflow in `SKILL.md`
- A lightweight probe in `scripts/telegram_bot_probe.py`
- A troubleshooting reference for common Telegram bot failure modes

## Good fit for
- Telegram bot setup verification
- Inbound/outbound message checks
- Agent session routing issues
- Connector-backed Telegram agent debugging

## Skill contents
- `SKILL.md`
- `agents/openai.yaml`
- `scripts/telegram_bot_probe.py`
- `references/troubleshooting.md`

## Install
Copy the `telegram-agent-ops` folder into `~/.codex/skills/`.

## Example use
`Use $telegram-agent-ops to debug why my Telegram bot is online but not replying to inbound messages.`

## License
MIT
