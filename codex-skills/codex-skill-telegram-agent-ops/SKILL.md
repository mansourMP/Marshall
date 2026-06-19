---
name: telegram-agent-ops
description: Set up, verify, route, and debug Telegram bot agents. Use when Codex needs to configure a Telegram bot token and webhook or polling flow, verify inbound and outbound delivery, map Telegram chats to agent sessions, or diagnose why a Telegram agent appears online but does not reply.
---

# Telegram Agent Ops

Operate Telegram bot agents with a short, repeatable workflow. Prefer proving each hop in the message path before changing code.

## Quick Start

1. Identify the delivery mode: webhook or long polling.
2. Verify the bot token and control plane with `getMe` and `getWebhookInfo`.
3. Verify inbound delivery separately from agent execution.
4. Verify outbound delivery separately from session routing.
5. Fix the first broken hop instead of changing multiple layers at once.

Use `scripts/telegram_bot_probe.py` for the control-plane checks:

```bash
TELEGRAM_BOT_TOKEN=... \
python3 scripts/telegram_bot_probe.py --expected-webhook-url https://bot.example.com/telegram/webhook
```

Add `--chat-id <id> --send-text "probe"` only when the user explicitly wants an outbound test message sent.

## Setup Pattern

Keep the Telegram integration split into four concerns:

- Bot identity: token, bot username, API reachability.
- Inbound transport: webhook registration or polling loop.
- Session routing: map an incoming Telegram event to the correct agent session or conversation key.
- Outbound transport: send replies with the correct bot token and destination chat.

Prefer this event shape inside the app:

```text
telegram update -> normalized event -> routing key -> session lookup/create -> agent run -> reply send
```

Normalize early. Preserve at least:

- `update_id`
- `message_id`
- `chat.id`
- `from.id`
- `text` or callback payload
- delivery mode metadata such as webhook request id or poll batch id

## Inbound Verification

Prove inbound delivery before looking at model or agent logic.

For webhooks:

- Confirm the public URL is reachable by Telegram.
- Confirm only one environment owns the webhook.
- Confirm the registered webhook matches the intended environment.
- Check `last_error_date` and `last_error_message` from `getWebhookInfo`.
- Compare application logs with Telegram `pending_update_count`.

For polling:

- Confirm no webhook is still configured.
- Confirm only one poller process is active for the bot token.
- Confirm offsets advance after updates are received.
- Confirm the worker that polls also hands off events to the agent runtime.

If inbound is uncertain, read [references/troubleshooting.md](/Users/mansur/codex skills from me/telegram-agent-ops/references/troubleshooting.md).

## Outbound Verification

Prove outbound delivery separately from generation.

- Verify the bot can call `sendMessage` successfully to a known chat.
- Verify the chat id used for replies comes from the active routed session, not a stale cache entry.
- Verify the reply path preserves thread-like context when the product supports it, but do not assume Telegram itself provides thread semantics outside topics.
- Verify rate limits, 403s, and blocked-bot errors are surfaced in logs.

If the agent produced text but the user saw nothing, the bug is usually in destination selection, bot permissions, or suppressed send failures.

## Session Routing

Use a routing key that is stable enough for the product, then document it in code. Common patterns:

- Direct-message agent: `telegram:<bot_id>:chat:<chat_id>`
- Per-user session inside a shared support bot: `telegram:<bot_id>:chat:<chat_id>:user:<user_id>`
- Topic-aware group routing: `telegram:<bot_id>:chat:<chat_id>:topic:<message_thread_id>`

Choose one rule and apply it consistently on both inbound and outbound paths.

Check for these failure modes:

- New inbound events create sessions under one key, but replies look up another key.
- Group messages are routed by `from.id` even though replies must target `chat.id`.
- Topic ids are ignored, so replies land in the wrong place or disappear into the main chat.
- A staging bot and production bot share session storage without token or bot id namespacing.

## Online But Not Replying

Treat this as a hop-by-hop failure analysis:

1. Bot online: process exists, health checks pass, or dashboard says connected.
2. Telegram reachable: `getMe` succeeds.
3. Inbound working: updates arrive at the app.
4. Routing working: update resolves to the expected session.
5. Agent working: a run is created and completes.
6. Outbound working: `sendMessage` or equivalent succeeds.

Do not conclude "Telegram is broken" from step 1 alone. Most incidents are steps 3 to 6.

## Operating Rules

- Do not print or commit bot tokens.
- Mask secrets in logs and examples.
- Do not send outbound probes without explicit user intent.
- Prefer read-only diagnostics first.
- When debugging production incidents, capture one failing update and trace it across all hops before patching.

## References

- Read [references/troubleshooting.md](/Users/mansur/codex skills from me/telegram-agent-ops/references/troubleshooting.md) for a compact symptom-to-cause matrix and command snippets.
- Use [scripts/telegram_bot_probe.py](/Users/mansur/codex skills from me/telegram-agent-ops/scripts/telegram_bot_probe.py) for token, webhook, and optional outbound verification.
