---
name: customer-support-triage
description: Help support and operations teams triage incoming customer requests, classify urgency and ownership, draft replies for review, prepare escalations, and separate safe automation from human-reviewed actions. Use when Codex needs to turn messy support queues into reviewable next steps without making unsupported promises to customers.
---

# Customer Support Triage

Use this skill to reduce support queue chaos while keeping the trust boundary explicit.

## Best Fit

This skill is strongest for:

- queue triage
- bug report normalization
- escalation prep
- response drafting for review
- handoff notes between support, ops, and engineering

Do not let it silently:

- promise refunds
- promise delivery dates
- commit product behavior
- close sensitive customer issues without review

## Start Here

Collect:

- queue source
- severity criteria
- response-time expectation
- available facts
- missing facts
- who approves replies, refunds, or escalations

## Workflow

1. classify the item by issue type, urgency, and ownership
2. separate confirmed facts from customer claims
3. draft the next best response or escalation path
4. mark what needs human approval before anything is sent or changed

## Default Approval Posture

- allow classification, summarization, and internal handoff notes
- allow draft replies and draft escalation notes
- require approval for refunds, credits, policy claims, commitments, or high-risk customer statements
- block autonomous handling of abusive, legal, financial, or public-escalation cases unless the user provides a clear policy path

## Common Output Patterns

### Queue triage

Return:

- priority
- issue type
- owner
- next action
- response draft if helpful

### Escalation prep

Return:

- customer issue summary
- confirmed facts
- missing facts
- recommended destination team
- customer-safe holding reply

## Reference Use

- `references/queue-patterns.md` for common support queue shapes
- `references/escalation-boundaries.md` for approval and routing rules
- `references/reply-patterns.md` for short response structures

## Example Requests

- "Use $customer-support-triage to classify these tickets and draft replies for the high-priority ones."
- "Use $customer-support-triage to turn this angry customer thread into an escalation note and a safe holding reply."
