---
name: agent-launch-readiness
description: Run a practical pre-launch review for agent systems and decide whether the system is ready for real users. Use when Codex needs to evaluate runtime reliability, connector readiness, approval policies, fallback behavior, observability, safety checks, rollout readiness, operator handoff, known failure modes, and produce a go / no-go launch decision.
---

# Agent Launch Readiness

## Overview

Use this skill as a release gate for real agent deployments. The goal is not to praise the system. The goal is to determine whether it is safe and practical to put in front of users now, what must be fixed before launch, and what can wait until after first release.

## Inputs

Gather these inputs before making a launch decision:
- target user type
- launch surface (chat, Telegram, email, desktop, browser, internal tool, etc.)
- runtime model (cloud, local companion, hybrid)
- connector set
- approval model
- known fallback behavior
- observability and logs available to operators
- current failure history or bug list
- rollout scope (private test, internal team, first customer, broader public)

If some inputs are missing, state that clearly and continue with the best available evidence.

## Review workflow

### 1. Runtime reliability
Check whether the runtime starts cleanly, stays healthy, and recovers from restart or transient failure.

### 2. Connector readiness
Check whether each required connector actually works in the intended session path, not only as a direct API or CLI test.

### 3. Approval policy quality
Check whether sensitive or external actions are gated appropriately, and whether low-risk actions are not over-blocked.

### 4. Fallback behavior
Check what happens when connectors fail, workers go offline, models time out, or a requested action is unsafe.

### 5. Observability and logging
Check whether an operator can understand what happened from logs, status surfaces, queue state, or audit history.

### 6. Safety checks
Check whether destructive, financial, customer-facing, or privileged actions are either blocked or clearly approval-gated.

### 7. Rollout readiness
Check whether the system is appropriate for the actual rollout stage. A system may be acceptable for internal pilot and still unacceptable for first external users.

### 8. Operator handoff
Check whether a human operator can take over when the agent gets stuck, makes a weak result, or needs help.

### 9. Known failure modes
Check whether the team already understands the top failure modes and has a response for them.

### 10. Launch decision
Produce one of:
- `GO`
- `GO WITH FIXES TRACKED`
- `NO-GO`

## Output format

Always structure the review as:
- system being reviewed
- launch scope
- what was tested or evaluated
- confirmed strengths
- launch blockers
- important but non-blocking gaps
- known failure modes
- operator handoff readiness
- final decision:
  - `GO`
  - `GO WITH FIXES TRACKED`
  - `NO-GO`

## Decision rules

### GO
Use only when:
- the runtime is stable enough for the launch scope
- required connectors work in the real execution path
- approvals are sensible
- fallback behavior is acceptable
- operators can diagnose and intervene
- no critical safety gap is unresolved

### GO WITH FIXES TRACKED
Use when:
- the system is usable for the intended launch scope
- there are meaningful gaps, but they are not launch-blocking for that scope
- failures are understandable and recoverable
- the team has a clear operating plan

### NO-GO
Use when:
- runtime health is unreliable
- core connectors fail in session
- approval policy is unsafe or incoherent
- operator handoff is missing
- critical failures are not observable
- the intended user rollout is broader than the system can safely support

## References

- `references/launch-criteria.md`
- `references/failure-modes.md`
- `references/rollout-stages.md`
- `references/review-examples.md`
