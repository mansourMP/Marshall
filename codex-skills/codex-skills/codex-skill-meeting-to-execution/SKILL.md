---
name: meeting-to-execution
description: Convert meeting notes, transcripts, Slack threads, and rough recaps into actionable tasks, owners, deadlines, decisions, risks, and follow-up drafts. Use when Codex needs to turn messy discussion into a reviewable execution plan instead of a vague summary.
---

# Meeting to Execution

Use this skill when the user has discussion artifacts and needs operational clarity.

## Best Fit

This skill is strongest for:

- meeting recap cleanup
- turning rough notes into tasks and owners
- decision extraction
- risk and blocker capture
- follow-up drafting after a meeting

## Start Here

Collect:

- source material
- meeting purpose
- target audience for the output
- who owns decisions
- what deadlines matter

If the source is messy, normalize it into:

1. decisions made
2. open questions
3. tasks
4. owners
5. dates and risks

## Workflow

1. extract decisions, commitments, and unresolved points
2. separate action items from general discussion
3. assign or propose owners and deadlines
4. draft follow-ups only where the next recipient is clear

## Output Patterns

### Internal action plan

Return:

- objective
- decisions made
- tasks by owner
- dependencies
- risks
- next checkpoint

### External follow-up draft

Return:

- short recap
- requested action
- due date or next step
- questions needing confirmation

## Review Rules

- do not invent commitments that were not made
- mark inferred owners or dates as proposed, not confirmed
- keep decisions separate from ideas that were merely discussed

## Reference Use

- `references/output-patterns.md` for common deliverables
- `references/review-rules.md` for inference and certainty rules
- `references/follow-up-workflows.md` for meeting follow-up patterns

## Example Requests

- "Use $meeting-to-execution to turn these notes into a task list with owners and deadlines."
- "Use $meeting-to-execution to create an action-oriented recap and draft the follow-up email."
