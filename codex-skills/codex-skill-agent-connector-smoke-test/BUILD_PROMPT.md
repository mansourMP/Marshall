Use $skill-creator.

Create a public Codex skill in this folder:
/Users/mansur/codex skills from me/agent-connector-smoke-test

Requirements:
- production-ready for GitHub
- generic, not tied tightly to Empyralis
- aimed at testing real agent connectors end-to-end
- concise and operational, not theoretical
- useful to Codex users launching or debugging agent systems

The skill should help with:
- testing connector auth
- testing connector read operations
- testing connector write/send operations where safe
- checking whether a connector is visible inside an agent session
- labeling results clearly:
  - working
  - partial
  - broken

Include:
- SKILL.md
- agents/openai.yaml
- scripts/ if useful
- references/ if useful

Suggested sections:
- connector test order
- auth checks
- read/write checks
- session injection checks
- launch-readiness summary format

Keep it generic enough to work for:
- Google Workspace
- Telegram
- email-style connectors
- other common app connectors

Do not expose secrets.
Do not copy private product internals unless generalized.

After writing it, tell me:
- publish-readiness
- top 3 strengths
- top 3 weaknesses
- final missing pieces before GitHub
