---
name: incident-comms-drafter
description: Draft clear internal and customer-facing incident communications, timeline summaries, status updates, holding replies, and post-incident follow-ups. Use when Codex needs to support incident response communication without inventing root cause, over-promising fixes, or sending unreviewed high-risk updates.
---

# Incident Comms Drafter

Use this skill when the team needs communication clarity during or after an operational incident.

## Best Fit

This skill is strongest for:

- incident update drafting
- internal status summaries
- customer-safe holding replies
- timeline normalization
- post-incident follow-up drafts

## Start Here

Collect:

- what is confirmed
- what is suspected but unconfirmed
- who is affected
- current severity
- who approves external updates
- next known checkpoint

## Workflow

1. separate confirmed facts from hypotheses
2. identify the audience: internal team, leadership, customers, vendors, or partners
3. draft the shortest useful update for that audience
4. keep the next checkpoint visible

## Default Rules

- never invent root cause
- never promise resolution time unless the source says it
- avoid technical detail that outruns certainty
- keep external updates approval-gated

## Common Output Patterns

### Internal update

Return:

- current impact
- confirmed facts
- active investigation status
- next checkpoint
- owner if known

### Customer-safe update

Return:

- acknowledgement
- current impact in plain language
- what the team is doing
- next update timing if known

### Post-incident follow-up

Return:

- what happened
- customer impact
- status now
- follow-up action or prevention note

## Reference Use

- `references/incident-update-patterns.md` for in-incident messaging
- `references/approval-boundaries.md` for internal versus external review rules
- `references/post-incident-follow-up.md` for post-resolution communication structure

## Example Requests

- "Use $incident-comms-drafter to draft an internal incident update and a customer-safe holding message."
- "Use $incident-comms-drafter to turn these logs and notes into a clean timeline and post-incident follow-up."
