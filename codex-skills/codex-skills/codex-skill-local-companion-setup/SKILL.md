---
name: local-companion-setup
description: Set up and harden a local companion or daemon that receives remote requests, runs approved Codex-compatible tasks, and returns results safely. Use when Codex needs to define the execution path behind remote control features such as Telegram chatops, local worker flows, or controlled remote command handling.
---

# Local Companion Setup

Use this skill when the user wants the execution layer that makes remote Codex workflows actually possible.

The companion is the bridge between a remote control surface and real work on a machine. It can be:

- a local daemon
- a background worker
- a webhook receiver
- a command runner with approval hooks

## Best Fit

This skill is strongest for:

- defining the architecture of a local companion
- deciding what the companion may execute
- specifying approval checks and audit logging
- separating remote request intake from actual execution
- designing a safe result-return path

## Start Here

Collect:

- where the companion runs
- what remote control surface triggers it
- what commands or actions it may execute
- how approvals are represented
- how logs, audit, and results are stored or returned
- how the companion is started, supervised, and updated

## Core Design Rules

1. Separate request intake from execution.
2. Verify authorization before execution.
3. Keep allowed actions narrow and explicit.
4. Log requests, approvals, actions, and results.
5. Return short machine-readable and human-readable outcomes.
6. Provide a supervisor, restart strategy, and health check.

## Minimum Architecture

Define these components:

- intake surface
- auth and approval check
- task router
- execution runner
- result reporter
- audit log

## Approval Posture

- allow status checks with low risk
- require explicit approval for mutating commands
- block raw arbitrary shell unless the user explicitly wants a high-risk model and understands it

## Output Pattern

When using this skill, produce:

- architecture sketch
- allowed action classes
- approval model
- audit and logging model
- failure handling
- startup and supervision plan

## Reference Use

- `references/architecture-patterns.md` for companion design choices
- `references/security-boundaries.md` for authorization and execution limits
- `references/runtime-operations.md` for startup, health, and supervision patterns

## Example Requests

- "Use $local-companion-setup to design the local daemon behind a Telegram-controlled Codex worker."
- "Use $local-companion-setup to define a safe companion that can run approved remote ops commands and report back results."
