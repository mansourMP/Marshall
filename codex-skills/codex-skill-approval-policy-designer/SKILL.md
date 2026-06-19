---
name: approval-policy-designer
description: Design practical approval policies for agent actions, including what should always ask, what can auto-run, and what should never run. Use when Codex needs to help a team or builder define trust boundaries for local execution, messaging, email, file edits, external actions, or rollout modes such as strict, balanced, and experimental.
---

# Approval Policy Designer

## Overview

Use this skill to design approval policies that make agent systems useful without making them reckless. Treat approvals as an operating model, not a generic safety checkbox.

## Core workflow

1. Identify the real actions the agent may take.
2. Sort those actions by risk, reversibility, and external impact.
3. Decide which actions should:
   - always ask first
   - be allowed in balanced mode
   - be allowed only in experimental mode
   - never run automatically
4. Write the result in plain operational language.
5. Prefer draft-first and reviewable actions when uncertainty is high.

## Risk model

Evaluate each action on these dimensions:
- **External impact** — does it send, publish, buy, delete, or modify outside the system?
- **Reversibility** — can the action be undone easily?
- **Data sensitivity** — does it touch private, financial, legal, or customer information?
- **Execution confidence** — is the action deterministic or likely to misfire?
- **User expectation** — would a normal user expect an approval prompt here?

## Approval levels

### Always ask
Use for actions such as:
- sending messages or emails to external recipients
- deleting or overwriting important files
- purchases, transfers, or financial actions
- actions with customer, legal, or compliance impact
- anything the user would reasonably expect to approve personally

### Balanced mode
Allow only when the action is low-risk and easy to review or undo, such as:
- drafting content without sending it
- summarizing documents
- reading connected data sources
- preparing structured outputs for review
- creating internal notes or tasks

### Experimental mode
Use for users who explicitly want more autonomy. Even here, keep hard stops for:
- destructive actions
- payments or financial commitments
- irreversible external actions
- privileged account or infrastructure changes

### Never auto-run
Reserve for actions that are too risky, too ambiguous, or too high-impact without explicit confirmation.

## Practical output format

When producing a policy, organize it into:
- actions allowed without approval
- actions requiring approval
- actions blocked from automatic execution
- rollout notes for strict, balanced, and experimental modes

## References

- `references/risk-matrix.md` — action categories and approval guidance
- `references/rollout-modes.md` — practical rollout guidance for approval modes
- `references/examples.md` — examples for founders, ops teams, and non-technical teams
