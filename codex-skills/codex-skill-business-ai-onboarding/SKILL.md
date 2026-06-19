---
name: business-ai-onboarding
description: Onboard non-technical business teams to Codex with a controlled rollout, approval model, trust boundaries, role-based workflows, and operational examples. Use when Codex needs to help a company introduce AI to accounting, operations, admin, wholesale-market, or other back-office teams; design first-week rollout plans; define what AI may draft vs what humans must approve; convert recurring work into safe prompts and operating procedures; or produce practical onboarding materials for managers and staff.
---

# Business AI Onboarding

Use this skill to turn vague "train the team on AI" requests into a concrete rollout that non-technical staff can actually follow.

## Workflow

1. Identify the team, the work queue, and the approval bottlenecks.
2. Define the trust boundary before proposing any AI workflow.
3. Start with low-risk, high-frequency tasks that already have a human review step.
4. Assign role-specific use cases instead of one generic AI policy for everyone.
5. Build a first-week plan with named owners, deliverables, and review points.

## Start Here

Collect these facts first:

- Team names and who approves their work
- Systems touched by each team
- Inputs they receive and outputs they produce
- Tasks repeated at least three times per week
- Tasks that already require manager review, dual control, or sign-off
- Data classes involved: public, internal, confidential, regulated, financial, customer

If the user does not provide this structure, derive it by interviewing them in business terms rather than technical terms.

## Trust Boundary

Apply this default policy unless the user gives a stricter one:

- Allow Codex to draft, summarize, reformat, classify, and prepare checklists.
- Require human approval before any message is sent externally, any number is posted to a ledger, any order is committed, any payment is released, or any master data is changed.
- Block fully autonomous use for payroll, banking, tax filing, vendor setup, credit decisions, customer promises, and inventory adjustments unless the user explicitly says the company has approved controls for it.
- Prefer read-only and draft-first workflows during onboarding.

Read `references/approval-trust-setup.md` whenever the user needs approval matrices, escalation rules, or examples of what AI may and may not do.

## How To Choose Pilot Work

Pick work that satisfies most of these conditions:

- Repetitive and text-heavy
- Painful but not legally irreversible
- Easy to compare against an existing human output
- Easy to review in under five minutes
- Useful across several employees, not just one expert

Reject pilot candidates that:

- Require direct system mutation without a review gate
- Depend on undocumented tribal knowledge
- Mix several departments' authority in one step
- Hide errors until month-end or quarter-end

## First-Week Execution

Use `references/first-week-rollout.md` for the full day-by-day plan.

In short:

- Day 1: map roles, approvals, systems, and forbidden actions
- Day 2: choose 3 to 5 pilot tasks and define expected outputs
- Day 3: write and test role-based prompts on real examples
- Day 4: run supervised live work and measure review effort
- Day 5: decide what becomes standard practice, what stays restricted, and what needs more controls

## Role-Based Design

Do not onboard "the company" all at once. Build by role:

- Accounting: close support, invoice matching, variance explanations, collections drafts
- Operations: intake triage, shipment exception handling, SOP drafting, issue handoff notes
- Admin: scheduling support, vendor packet prep, meeting summaries, document cleanup
- Wholesale-market teams: buyer outreach drafts, assortment comparison, promo planning prep, stall or order summary normalization

Read `references/role-based-use-cases.md` when the user asks for department-specific workflows or sample prompts.

## Output Format

When executing this skill, produce these sections unless the user asks for something narrower:

1. Team Scope
2. Approval and Trust Rules
3. First-Week Rollout Plan
4. Role-Based Use Cases
5. Risks and What Must Stay Human
6. Immediate Next Actions

Keep outputs operational. Name owners, review points, and sample artifacts. Avoid generic "AI transformation" language.

## Example Requests

- "Use $business-ai-onboarding to roll out Codex for a three-person accounting team without letting AI post entries."
- "Use $business-ai-onboarding to onboard office admins and operations coordinators in the first week."
- "Use $business-ai-onboarding to design approval rules and safe use cases for a wholesale produce distributor."

## References

- `references/first-week-rollout.md` for the rollout sequence, meeting structure, and adoption metrics
- `references/approval-trust-setup.md` for authority boundaries, human checkpoints, and red-line actions
- `references/role-based-use-cases.md` for accounting, operations, admin, and wholesale-market examples
