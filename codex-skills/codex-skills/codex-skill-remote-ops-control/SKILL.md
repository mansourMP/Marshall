---
name: remote-ops-control
description: Operate remote machines and services through existing remote-access tools such as SSH, cloud CLIs, admin APIs, deployment hooks, or approved scripts. Use when Codex needs to run staged diagnostics, approval-gated remote actions, restarts, redeploys, rollback steps, and operator-style incident handling without pretending it has built-in remote control.
---

# Remote Ops Control

Use this skill when the user wants Codex to act like a disciplined remote operator through tools that already exist in the environment.

This skill does not create remote access. It assumes a real control path already exists:

- SSH
- deployment or cloud CLI
- admin API
- remote script runner
- companion service

## Best Fit

This skill is strongest for:

- remote diagnostics
- staged restart or redeploy workflows
- rollback execution
- service health verification
- incident-time operator actions
- turning "fix prod" into an explicit, reviewable plan

## Start Here

Collect these facts first:

- target machine, service, or environment
- remote control path available
- who approves impactful actions
- what counts as safe diagnostics versus a mutating action
- what rollback path exists
- what evidence should be captured before changing anything

If the user asks for a broad fix, narrow it immediately into:

1. diagnostic goal
2. command or action candidates
3. approval gates
4. rollback plan
5. verification steps

## Workflow

### 1. Prove the target and control path

Confirm:

- which host, cluster, or service is in scope
- which access method is intended
- whether the current session can actually use it

Do not assume "remote control" exists because the user wants it.

### 2. Separate diagnostics from mutations

Start with read-only evidence gathering:

- status
- logs
- process health
- recent errors
- deployment version
- queue depth
- disk, CPU, memory, or network symptoms

Only after that, propose mutating actions:

- restart
- redeploy
- config change
- scale change
- rollback
- cache clear

### 3. Stage the remote action

For any mutating action, specify:

- exact target
- expected effect
- approval requirement
- rollback path
- success check

### 4. Report like an operator

Return:

- what was observed
- what action is proposed or taken
- why it is the next step
- what risk remains
- how success will be verified

## Default Approval Posture

Unless the user gives a looser but credible control model:

- allow read-only diagnostics
- require approval for restart, redeploy, rollback, scale, config, or destructive actions
- block actions that have no clear target, no rollback path, or no verification plan

Read `references/approval-model.md` when the user needs a practical approval boundary for remote work.

## Common Output Patterns

### Diagnostic plan

Return:

- target
- suspected issue
- read-only checks
- likely next actions
- required approvals

### Restart or redeploy plan

Return:

- target
- reason
- exact action
- rollback path
- post-action verification

### Incident operator note

Return:

- current symptom
- evidence gathered
- approved next step
- owner
- next checkpoint

## Reference Use

Load references selectively:

- `references/approval-model.md` for safe default approval gates
- `references/remote-workflows.md` for restart, redeploy, and rollback patterns
- `references/verification-patterns.md` for post-action checks and evidence capture

## Example Requests

- "Use $remote-ops-control to diagnose this unhealthy service over SSH and tell me the safest next action."
- "Use $remote-ops-control to prepare a restart plan with rollback and verification."
- "Use $remote-ops-control to turn this prod issue into an operator-style runbook for Codex."
