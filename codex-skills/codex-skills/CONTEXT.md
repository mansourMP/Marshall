# Codex Skills Workspace Context

## Purpose of This Folder

This folder is the **single public workspace** for Codex skills that may be published to GitHub and used for ambassador or community work.

Path:
- `/Users/mansur/codex skills from me`

This folder is intentionally separate from the Empyralis product repo.

## Important Rule

Work done in this folder should stay focused on **public, reusable Codex skills**.

Do **not** treat this folder as part of the Empyralis product codebase.
Do **not** copy private product internals into these public skills unless they are generalized and safe to publish.

## Current Goal

Polish and publish a compact but credible public portfolio of Codex skills that are:
- useful to the community
- practical, not hype-driven
- differentiated by real operational experience
- publishable to GitHub
- strong enough for public credibility, demos, and ambassador-style applications

## Current Status

As of 2026-03-20, this workspace contains:
- **16 real skills**
- **0 prompt-only skill ideas**

All 16 skills have the basic public release shape:
- `SKILL.md`
- `README.md`
- `LICENSE`
- `agents/openai.yaml`
- optional `references/`
- optional `scripts/`
- optional `.gitignore`

## Current Portfolio

### Core Agent Operations

1. `local-agent-runtime-debug`
2. `telegram-agent-ops`
3. `agent-connector-smoke-test`
4. `agent-launch-readiness`
5. `approval-policy-designer`

### Team Workflow Skills

6. `business-ai-onboarding`
7. `codex-for-ops-teams`
8. `codex-for-accounting-workflows`
9. `customer-support-triage`
10. `meeting-to-execution`
11. `incident-comms-drafter`

### Remote Control And Companion Skills

12. `remote-ops-control`
13. `telegram-inbox-copilot`
14. `telegram-remote-agent`
15. `local-companion-setup`

### Planning And Prioritization

16. `next-move-planner`

## Recommended Publishing Order

### First wave
1. `local-agent-runtime-debug`
2. `telegram-agent-ops`
3. `agent-connector-smoke-test`
4. `codex-for-ops-teams`
5. `remote-ops-control`

### Second wave
6. `approval-policy-designer`
7. `agent-launch-readiness`
8. `telegram-inbox-copilot`
9. `telegram-remote-agent`
10. `local-companion-setup`

### Third wave
11. `business-ai-onboarding`
12. `codex-for-accounting-workflows`
13. `customer-support-triage`
14. `meeting-to-execution`
15. `incident-comms-drafter`
16. `next-move-planner`

## Why This Order

- First wave proves engineering, connector, and runtime depth.
- Second wave proves operational maturity around trust, chat surfaces, and remote control patterns.
- Third wave proves broader business usefulness and non-technical team adoption value.

## Quality Standard For New Skills

Any new skill added to this folder should be:
- generic enough for public use
- not tightly coupled to Empyralis internals
- concise
- practical
- operational
- clearly triggered by real user problems
- structured for GitHub publishing

## What To Avoid

Do not add skills that are:
- vague AGI theory
- hype-driven
- product-internal only
- dependent on private code or private infra
- duplicates with only small wording changes
- so broad that they stop being useful

## Practical Remaining Work

The portfolio is now build-complete. The remaining work is polish and publishing:

1. standardize README presentation across repos
2. create separate GitHub repos using the naming pattern below
3. add optional example prompts or screenshots where they materially help
4. publish the strongest 3 to 5 first

## GitHub Publishing Pattern

Recommended repo naming pattern:
- `codex-skill-<skill-name>`

Examples:
- `codex-skill-local-agent-runtime-debug`
- `codex-skill-telegram-agent-ops`
- `codex-skill-business-ai-onboarding`
- `codex-skill-remote-ops-control`

## Handoff Instruction To Other Agents

If another agent works in this folder, it should:
1. stay inside `/Users/mansur/codex skills from me`
2. treat this folder as the public open-source workspace
3. avoid touching Empyralis product code unless explicitly asked
4. avoid copying private product internals into these skills
5. improve skill quality toward GitHub publication and public reuse

## Bottom Line

This folder is now the public Codex skills portfolio workspace.
The portfolio currently has **16 real public skills**.
The immediate priority is no longer building missing skills. It is polishing and publishing the strongest repos first.
