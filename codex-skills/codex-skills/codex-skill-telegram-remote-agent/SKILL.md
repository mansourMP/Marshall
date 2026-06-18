---
name: telegram-remote-agent
description: Operate Codex-backed remote workflows through Telegram as the chat surface. Use when Codex needs to receive Telegram commands, classify intent, prepare approval-aware actions, return operator-friendly status updates, and hand work off to an existing remote execution path such as a companion daemon, SSH runner, or admin API.
---

# Telegram Remote Agent

Use this skill when Telegram is the control surface for a remote Codex operator.

This skill is not for Telegram transport debugging. Use `telegram-agent-ops` for bot setup, probes, and routing failures. Use this skill for the command-and-response layer once Telegram delivery works.

## Best Fit

This skill is strongest for:

- receiving remote-ops requests through Telegram
- classifying commands as diagnostics, draft plans, or approval-gated actions
- sending concise operator-style updates back through Telegram
- managing human approval before remote changes happen

## Start Here

Collect:

- which Telegram surface is used
- who is authorized to issue commands
- which actions require explicit approval
- which remote execution path exists behind Telegram
- how results should be summarized back to the user

## Workflow

1. classify the inbound Telegram request
2. separate informational requests from real remote actions
3. convert vague commands into staged plans
4. require approval before mutating remote systems
5. return short, high-signal status messages

## Command Classes

- `status`: health, logs, version, queue, process checks
- `plan`: what Codex would do next, with approvals and rollback
- `approve-and-run`: explicit approved action through the existing remote path
- `handoff`: summarize what happened and what remains

## Default Approval Posture

- allow status and plan generation
- require explicit approval for remote mutations
- block ambiguous requests like "fix it" unless they are narrowed into an actionable target and plan

## Reply Style

Keep Telegram replies:

- short
- target-specific
- explicit about whether anything changed
- clear on approval state

## Reference Use

- `references/command-patterns.md` for Telegram command shapes
- `references/approval-routing.md` for approval and authorization rules
- `references/reply-shapes.md` for concise operator replies

## Example Requests

- "Use $telegram-remote-agent to design a Telegram command flow for remote diagnostics and approval-gated restarts."
- "Use $telegram-remote-agent to turn these Telegram operator requests into a safe status-plan-approve-run workflow."
