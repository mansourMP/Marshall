---
name: agent-connector-smoke-test
description: Test agent connectors end-to-end, including auth, read access, safe write/send checks, and whether a connector is visible inside an agent session. Use when Codex needs to verify launch-readiness for connectors such as Google Workspace, Telegram, email-style connectors, or similar integrations, and label the result as working, partial, or broken.
---

# Agent Connector Smoke Test

## Overview

Use this skill to verify that a connector works in practice, not just that its credentials exist. Separate connector health into four layers:
1. authentication
2. direct read access
3. safe write or send access when appropriate
4. visibility inside an agent session

## Core workflow

1. Identify the connector and the exact user action to test.
2. Verify authentication first.
3. Run one direct read operation.
4. Run one safe write or send operation only if appropriate.
5. Verify the connector is visible to the agent session that needs it.
6. Summarize the result as:
   - `✅ CONFIRMED WORKING`
   - `⚠️ PARTIAL`
   - `❌ BROKEN`

## Test order

### 1. Auth check
Confirm the connector is authenticated and the token or credential is still valid.

### 2. Direct read check
Run the smallest useful read operation, such as:
- list a few emails
- list a few files
- fetch a basic profile
- read one lightweight record

### 3. Safe write or send check
Only do this when the user asked for it or when it is clearly safe. Prefer low-risk operations such as:
- sending a test message to yourself
- creating a draft instead of sending
- writing a test record in a known-safe location

### 4. Session visibility check
Verify the connector is actually available inside the agent session or run context. A connector can work directly and still fail inside the agent if it is not injected into session metadata.

## Common failure boundaries

- auth is valid, but the connector is not passed into the agent session
- direct CLI/API usage works, but the agent runtime cannot see the connector
- read works, but write fails due to scopes or approval policy
- connector is healthy, but the runtime or local worker is down

## Output format

Always report:
- what was tested
- what raw response or evidence was returned
- what worked
- what failed
- the final label:
  - `✅ CONFIRMED WORKING`
  - `⚠️ PARTIAL`
  - `❌ BROKEN`

## References

- `references/test-matrix.md` — connector test matrix and result labeling
- `references/common-failures.md` — common connector failure patterns

## Resources

### scripts/
- `scripts/connector_smoke_template.py` — minimal helper to structure smoke-test output for HTTP/JSON-style connector checks
