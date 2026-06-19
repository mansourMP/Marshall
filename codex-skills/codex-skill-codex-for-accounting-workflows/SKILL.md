---
name: codex-for-accounting-workflows
description: Help finance and accounting teams use Codex for safe draft-first workflows such as request triage, document and statement summaries, checklist-based close support, internal note drafting, and approval-aware task preparation. Use when Codex needs to support non-technical or lightly technical accounting users without pretending to replace an accountant, post entries, or provide legal or tax advice.
---

# Codex for Accounting Workflows

Use this skill for narrow accounting-support work that benefits from structure, review, and clear trust boundaries.

## Best Fit

This skill is strongest for:

- finance inbox triage
- summarizing statements, remittance details, and document requests
- month-end or weekly checklist support
- drafting internal notes, collection reminders, and follow-up requests
- classifying what may be drafted versus what must stay human-approved

Do not use it to:

- post journal entries
- release payments
- provide tax or legal advice
- make policy claims without a human reviewer

## Start Here

Collect these facts first:

- what queue or workflow is being handled
- what documents or records are in scope
- who approves the output
- what system is the source of truth
- what actions are draft-only, approval-gated, or blocked
- what "correct" looks like for this step

If the user provides an inbox dump or a document bundle, normalize it into:

1. requests
2. missing documents or facts
3. next actions
4. items needing accountant or manager review

## Workflow

### 1. Classify the work

Decide whether the task is mainly:

- request triage
- document or statement summary
- checklist support
- internal note drafting
- collections or follow-up drafting
- approval-boundary design

### 2. Choose the execution mode

Default to one of these modes:

- `read-only`: summarize, classify, extract dates, amounts, and open questions
- `draft-first`: prepare internal notes, checklists, reminders, and reply drafts
- `approval-gated`: prepare something a reviewer may send or execute after review
- `blocked`: refuse actions that would mutate systems, commit numbers, or give regulated advice

### 3. Produce finance-safe output

Prefer:

- short summaries with dates, amounts, and unknowns called out
- document request checklists
- owner and due-date lists
- internal drafts with placeholders where evidence is missing
- explicit flags for reviewer attention

### 4. Keep the trust boundary visible

Separate:

- confirmed facts
- user claims not yet verified
- missing support
- actions that need accountant, controller, or manager review

## Default Approval Posture

Unless the user gives a stricter rule:

- allow summarization, classification, and checklist prep
- allow internal draft preparation
- require approval for any external send, ledger-impacting action, payment, refund, filing, policy statement, or master-data change
- block autonomous handling of tax advice, payroll, bank instructions, contract terms, and final close sign-off

Read `references/review-boundaries.md` when the workflow touches money movement, filings, customer balances, vendor disputes, or source-of-truth records.

## Common Output Patterns

### Finance inbox triage

Return:

- urgent items
- missing-document items
- items waiting on another party
- items needing controller or manager review
- draft replies or follow-up requests

### Statement or document summary

Return:

- what the document appears to show
- important dates and amounts
- open questions
- missing support
- next accounting action

### Checklist support

Return:

- task
- owner
- due date
- dependency
- review gate

## Reference Use

Load references selectively:

- `references/workflow-examples.md` for practical accounting-support scenarios
- `references/review-boundaries.md` for draft-only, approval-gated, and blocked actions
- `references/draft-first-model.md` for safe rollout patterns with non-technical finance users

## Example Requests

- "Use $codex-for-accounting-workflows to triage this finance inbox and draft missing-document requests."
- "Use $codex-for-accounting-workflows to summarize these statements and list what still needs accountant review."
- "Use $codex-for-accounting-workflows to turn this month-end checklist into owners, dates, and approval gates."
