---
name: next-move-planner
description: Choose the highest-leverage next step in a project or task and draft the next clean prompt, handoff, or execution request. Use when Codex needs to decide what to do next, reduce ambiguity, clean up messy context into one actionable move, prioritize competing options, or generate the next prompt for itself or another agent.
---

# Next Move Planner

Use this skill when the work is not blocked by lack of ideas, but by too many possible directions.

The goal is to convert vague momentum into one strong next move.

## Best Fit

This skill is strongest for:

- deciding the next highest-leverage task
- turning a messy project state into one actionable step
- drafting the next prompt for Codex or another agent
- cleaning up product or workflow priorities
- deciding what should happen now versus later

It is not for long strategic essays. Keep the output operational.

## Start Here

Collect:

- current objective
- current state
- known blockers
- available assets or evidence
- constraints such as time, risk, or approval
- candidate next moves if any already exist

If the input is messy, normalize it into:

1. goal
2. current state
3. blockers
4. candidate next moves
5. recommended next move

## Core Workflow

### 1. Clarify the real objective

State what success means now, not eventually.

Prefer:

- "publish the repo"
- "fix the broken auth flow"
- "draft the outreach message"

Avoid:

- "improve everything"
- "keep working on it"
- "make it better somehow"

### 2. Generate candidate next moves

List only a small number of serious options.

Prefer 3 to 5 candidate moves, not a giant backlog.

### 3. Rank by leverage

Choose the move that:

- unlocks other work
- reduces uncertainty fastest
- has a clear success condition
- fits current constraints
- does not create unnecessary rework

Read `references/priority-heuristics.md` when several options seem equally attractive.

### 4. Draft the next move cleanly

Produce one of:

- a next action
- a next prompt
- a handoff note
- a cleanup plan
- a short queue ordered by priority

The best output is usually a single recommended move plus a ready-to-use prompt.

### 5. Stop the drift

Do not end with vague advice. End with:

- what to do next
- why this is next
- what done looks like
- what should wait

Read `references/stop-rules.md` when the task risks turning into endless planning.

## Output Patterns

### Single next move

Return:

- current objective
- recommended next move
- why this beats the alternatives
- success condition

### Next prompt

Return:

- prompt ready to paste
- any required inputs
- intended outcome

Use `references/next-prompt-shapes.md` for prompt structures.

### Cleanup queue

Return:

- now
- next
- later

Keep each item short and action-oriented.

## Working Rules

- prefer one strong next move over ten weak suggestions
- prefer moves that reduce uncertainty early
- prefer moves that unlock execution, not more planning
- mark assumptions clearly
- do not recommend work that depends on missing prerequisites without naming them

## Reference Use

- `references/priority-heuristics.md` for choosing the best next move
- `references/next-prompt-shapes.md` for drafting the next clean prompt
- `references/stop-rules.md` for avoiding vague or endless planning loops

## Example Requests

- "Use $next-move-planner to figure out what I should do next on this product launch."
- "Use $next-move-planner to turn this messy project state into one strong next prompt for Codex."
- "Use $next-move-planner to choose the next cleanup move and tell me what should wait."
