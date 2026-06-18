---
name: codex-for-ops-teams
description: Help operations teams use Codex for practical daily work such as inbox triage, summaries, follow-up drafting, task breakdown, recurring operational workflows, approvals, and handoff prep. Use when Codex needs to support mixed-technical or non-technical ops users with concrete, reviewable, low-friction workflows instead of vague AI advice.
---

# Codex for Ops Teams

Use this skill when the user needs Codex to reduce operational mess without hiding decisions. Favor read-only analysis, draft-first assistance, and clear review points.

## Best Fit

This skill is strongest for:

- inbox and queue triage
- drafting follow-ups, reminders, and escalations
- turning messy notes into tasks, owners, and deadlines
- producing daily or weekly operating summaries
- preparing handoff notes between coordinators, operators, managers, or founders
- defining which recurring workflows may be automated and which must stay human-reviewed

It is not for broad "AI transformation" strategy. Keep the scope operational and near-term.

## Start Here

Collect these facts first:

- what queue or workflow is under pressure
- who receives the work and who approves actions
- what tools or inboxes are involved
- what outputs the team already produces
- what actions are read-only, draft-only, approval-gated, or blocked
- what "done correctly" looks like for this workflow

If the user gives a messy dump of messages, emails, or notes, normalize it before doing anything else:

1. separate facts from requests
2. identify deadlines, blockers, and owners
3. mark missing information
4. propose a reviewable next-step list

## Workflow

### 1. Classify the work shape

Decide whether the task is mainly:

- triage
- summarization
- follow-up drafting
- task breakdown
- recurring checklist execution
- handoff preparation
- approval-policy design for an ops workflow

### 2. Choose the execution mode

Default to one of these modes:

- `read-only`: summarize, classify, compare, extract tasks
- `draft-first`: write replies, updates, handoff notes, agendas, checklists
- `approval-gated`: prepare an action that a human must review before send or execution
- `blocked`: refuse or narrow the request when it would silently change systems, send sensitive content, or make a commitment without review

### 3. Produce operator-friendly output

Prefer:

- short summaries with explicit priorities
- tables or bullets that map item -> owner -> next action
- follow-up drafts with placeholders where facts are missing
- checklists with approval gates called out
- status notes that separate confirmed facts from assumptions

### 4. Force clarity at handoff points

When work crosses people or teams, make the handoff explicit:

- what happened
- what is blocked
- who owns the next step
- what approval is needed
- when the next checkpoint should happen

## Working Rules

Optimize for:

- clarity over cleverness
- shorter outputs that operators can scan quickly
- explicit owners and deadlines
- safe defaults
- decisions that can be reviewed in under five minutes

Avoid:

- over-automation of messy human processes
- invisible decisions on behalf of the team
- external sends without clear approval
- vague "AI strategy" language when the user needs concrete operational help
- fake precision when inputs are incomplete
- burying the real blocker under a long summary

## Approval Posture

Use this default posture unless the user gives a stricter policy:

- allow read-only analysis, summarization, classification, and extraction
- allow internal draft preparation
- require approval before any external send, system mutation, record deletion, commitment, refund, escalation to a customer or vendor, or sensitive data disclosure
- block autonomous handling of payroll, payments, contracts, legal promises, inventory adjustments, or source-of-truth edits unless the user explicitly says there is an approved control path

Read `references/review-boundaries.md` when the user needs a concrete approval matrix or when the workflow touches customer, vendor, financial, or privileged actions.

## Common Output Patterns

### Inbox triage

Return:

- urgent items
- waiting items
- items that can be closed
- items missing information
- draft replies or follow-ups for the top items

### Task breakdown

Return:

- objective
- tasks
- proposed owners
- dependencies
- approval gates
- next checkpoint

### Ops summary

Return:

- what changed
- what is blocked
- risks to watch
- decisions needed
- next actions by owner

### Handoff note

Return:

- current state
- unresolved items
- priority order
- promised deadlines
- follow-up drafts if needed

## First-Week Rollout

When the user is adopting Codex for an ops team rather than solving one task, use `references/first-week-workflows.md` to build a one-week rollout around low-risk queues first.

## Reference Use

Load references selectively:

- `references/use-cases.md` for role-specific and queue-specific examples
- `references/first-week-workflows.md` for rollout sequencing, pilot selection, and operating cadence
- `references/review-boundaries.md` for what may auto-run, what needs approval, and what should stay blocked

## Example Requests

- "Use $codex-for-ops-teams to triage this shared inbox and draft follow-ups for the top five items."
- "Use $codex-for-ops-teams to turn these Slack notes into an ops handoff with owners and due dates."
- "Use $codex-for-ops-teams to design a safe weekly workflow for status summaries and approval-gated outbound messages."
