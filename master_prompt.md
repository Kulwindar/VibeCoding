# AI Context — Reading Order & Setup

Before writing any code or answering any question, read the documents below **in order**. Each document has a specific responsibility; do not skip any.

---

## 1. Understand the Product

| # | File | Purpose |
|---|---|---|
| 1 | `Rules/prd.md` | Full product requirements: problem, roles, FR-*, NFR, user flows, API contracts, edge cases, limitations |
| 2 | `Rules/kpi.md` | Success metrics: KPI formulas, targets, guardrails, phase activation |
| 3 | `Rules/project_scope.md` | What we build, when, and what we don't: phase deliverables, in/out-of-scope, acceptance criteria, exit gates |
| 4 | `Rules/project_boundary.md` | How we work: AI collaboration rules, tech stack, directory structure, team, risks |

## 2. Understand the Users

Read the user persona for the role(s) affected by the feature you are working on:

| File | Role |
|---|---|
| `Personas/user-persona-employee.md` | Employee — Traveler & Expense Submitter |
| `Personas/user-persona-manager.md` | Manager — Approval Authority |
| `Personas/user-persona-finance-admin.md` | Finance Admin — Policy & Reimbursement Controller |
| `Personas/user-persona-hr-admin.md` | HR Admin — Org Hierarchy & User Access |
| `Personas/user-persona-super-admin.md` | Super Admin — System Config & Integrations |

## 3. Follow Engineering Standards

Read the engineer persona for your technical role:

| File | Role |
|---|---|
| `Personas/persona-backend.md` | Backend — Node.js · TypeScript · Fastify |
| `Personas/persona-database.md` | Database — MongoDB · Mongoose · Redis |
| `Personas/persona-frontend-web.md` | Frontend Web — React · TypeScript · Vite |
| `Personas/persona-frontend-mobile.md` | Frontend Mobile — React Native · TypeScript |
| `Personas/persona-qa.md` | QA — Vitest · Playwright · Detox · k6 |

---

## Key Rules (from `project_boundary.md §1`)

- ❌ Never commit, push, or merge code without human review
- ❌ Never run terminal commands without explicit approval
- ❌ Never write code without first confirming scope, phase, and approach
- ✅ Always reference `prd.md` + `kpi.md` before building any feature
- ✅ Always ask: Which phase? Which role? Is it in scope?