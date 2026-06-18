---
name: telegram-inbox-copilot
description: Help teams use Codex inside Telegram-centered workflows by triaging inbound Telegram messages, preparing reply drafts, structuring handoffs, summarizing chat activity, and enforcing approval-aware reply behavior. Use when Codex needs to operate on Telegram message flows themselves rather than debug Telegram bot plumbing.
---

# Telegram Inbox Copilot

This skill complements `telegram-agent-ops`. Use `telegram-agent-ops` for bot setup, routing, probes, and delivery debugging. Use this skill for the workflow layer after Telegram messages are already flowing.

## Best Fit

This skill is strongest for:

- triaging Telegram inbound messages
- drafting replies for review
- summarizing chat activity or operator queues
- preparing handoffs between Telegram responders
- deciding what may be auto-drafted versus what must stay approval-gated

## Start Here

Collect:

- which Telegram surface is in scope: direct messages, groups, or topics
- who is allowed to reply
- what counts as urgent
- what messages are informational versus actionable
- what types of replies require approval

## Workflow

1. classify messages by urgency, issue type, and owner
2. separate chat noise from real tasks or commitments
3. draft concise replies only where the target recipient and policy are clear
4. prepare a handoff or summary for anything that needs human review

## Default Approval Posture

- allow summarization, classification, and internal handoff notes
- allow draft replies for routine or internal cases
- require approval for external commitments, financial statements, support compensation, legal claims, or sensitive disclosures
- block autonomous replies in ambiguous, hostile, or high-impact conversations unless the user provides a policy path

## Common Output Patterns

### Telegram queue triage

Return:

- urgent items
- items waiting on reply
- items needing another owner
- messages that should not be answered yet

### Reply draft set

Return:

- one short reply draft per message
- missing facts or placeholders
- approval flag where needed

### Handoff summary

Return:

- what happened
- who is waiting
- what was promised
- next responder

## Reference Use

- `references/inbox-patterns.md` for DM, group, and topic workflows
- `references/approval-boundaries.md` for what may be drafted or sent
- `references/routing-handoff.md` for multi-operator handoff patterns

## Example Requests

- "Use $telegram-inbox-copilot to triage these Telegram messages and draft replies for the routine ones."
- "Use $telegram-inbox-copilot to summarize this Telegram group thread and prepare a handoff for the next operator."
