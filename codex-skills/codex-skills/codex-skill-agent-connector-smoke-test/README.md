# agent-connector-smoke-test

A Codex skill for testing connectors end-to-end: auth, read access, safe write/send checks, and agent-session visibility.

## What it provides
- A practical connector smoke-test workflow in `SKILL.md`
- A tiny output helper in `scripts/connector_smoke_template.py`
- Generic references for connector result labeling and common failures

## Good fit for
- Google Workspace checks
- Telegram bot checks
- email-style connector checks
- launch-readiness validation for agent integrations

## Skill contents
- `SKILL.md`
- `agents/openai.yaml`
- `scripts/connector_smoke_template.py`
- `references/test-matrix.md`
- `references/common-failures.md`

## Install
Copy the `agent-connector-smoke-test` folder into `~/.codex/skills/`.

## Example use
`Use $agent-connector-smoke-test to verify whether this connector really works end-to-end and tell me if it is working, partial, or broken.`

## License
MIT
