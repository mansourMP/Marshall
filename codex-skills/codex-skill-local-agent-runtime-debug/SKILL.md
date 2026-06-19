---
name: local-agent-runtime-debug
description: Debug a local agent runtime when runs stay queued, workers do not claim work, heartbeats stop, completion never lands, or connector-triggered executions fail locally. Use for queue/claim issues, worker registration problems, startup failures, and misleading run-status symptoms.
---

# Local Agent Runtime Debug

Use this skill when a local runtime accepts work but local execution does not progress.

## Workflow

1. Confirm the runtime is reachable.
2. Check worker visibility and heartbeat freshness.
3. Compare queue state with the reported run state.
4. Trace the claim path from queue to worker poll loop.
5. Check execution, heartbeat renewal, and terminal reporting.
6. Only then inspect connector-specific routing or metadata.

## Quick Check

Run the helper first:

`scripts/check_local_runtime.py --base-url <runtime-url> --api-key <key>`

Default paths:
- `/health`
- `/local/workers/status`
- `/runs/queue/local`

If your runtime uses different paths, pass them explicitly:

`scripts/check_local_runtime.py --base-url <url> --health-path <path> --workers-path <path> --queue-path <path>`

## Decision Rules

- Health fails: fix startup, bind, auth, or connectivity first.
- No workers visible: fix worker startup, registration, credentials, or base URL.
- Workers visible, queue not moving: inspect claim logic, worker polling, and request blocking.
- Runs are claimed but never finish: inspect execution handler, heartbeat renewal, and complete/fail reporting.
- Queue looks stuck but worker logs show progress: inspect the run-status endpoint and UI polling path before blaming the queue.
- Connector-triggered runs fail while direct local runs work: inspect routing, injected metadata, and connector credentials after the local path is healthy.

## What To Verify

- Runtime health endpoint responds.
- Worker status shows at least one fresh worker.
- Queue counts match observed run transitions.
- Claim endpoint accepts the run's current status.
- Worker can reach the runtime with the configured URL and auth.
- Caller is not synchronously blocking the same process that must serve claim or status requests.

## References

- `references/architecture.md` for the debugging order and failure boundaries
- `references/troubleshooting.md` for symptom-to-check mapping
- `scripts/check_local_runtime.py` for a fast health, worker, and queue probe
