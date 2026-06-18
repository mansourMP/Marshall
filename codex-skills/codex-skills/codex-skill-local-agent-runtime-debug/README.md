# local-agent-runtime-debug

A Codex skill for diagnosing local agent runtime failures: queued-but-unclaimed runs, missing worker claims, startup-order issues, connector-triggered execution stalls, and false queue symptoms caused by broken status readers.

## What it provides
- A compact debugging workflow in `SKILL.md`
- A lightweight runtime probe in `scripts/check_local_runtime.py`
- Generic troubleshooting notes in `references/architecture.md` and `references/troubleshooting.md`

## Good fit for
- Local companion / local worker debugging
- Queue and claim failures
- Runtime startup and health issues
- Telegram or connector-triggered runs that never progress

## Skill contents
- `SKILL.md`
- `agents/openai.yaml`
- `scripts/check_local_runtime.py`
- `references/architecture.md`
- `references/troubleshooting.md`

## Install
Copy the `local-agent-runtime-debug` folder into `~/.codex/skills/`.

## Example use
`Use $local-agent-runtime-debug to debug why my local worker is online but not claiming queued runs.`

## License
MIT
