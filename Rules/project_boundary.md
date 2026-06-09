# Project Boundary Document
## Enterprise Employee Travel & Expense Management System (ETEMS)

**Version:** 2.0
**Status:** Active
**Date:** 2025-06-09
**Project Lead:** Product Management

> **Scope of this document:** How we work — AI collaboration rules, codebase structure, technology decisions, team, dependencies, and risk management.
>
> For **what we build and when** → see `project_scope.md`
> For **product requirements and user flows** → see `prd.md`
> For **KPIs, targets, and guardrails** → see `kpi.md`

---

## 1. AI Collaboration Rules

These rules govern how AI tools (Claude, Cursor, Copilot, etc.) are used within this project. Every team member working with AI assistance **must** follow these rules without exception. They exist to protect code quality, prevent wasted effort, and keep humans in control of every decision that affects the codebase.

---

### Rule 1 — Never Commit Code Autonomously

> **AI must not commit, push, or merge code to any branch under any circumstance.**

- All commits are made by a named team member after reviewing the AI-generated output.
- AI may suggest commit messages, but a human types and executes the actual `git commit`.
- Pull request creation, branch management, and merges remain exclusively human actions.
- This applies to all environments: development, staging, and production.

---

### Rule 2 — No Commands Without Explicit Approval

> **AI must not run terminal commands, scripts, or shell operations without first asking and receiving explicit approval.**

- Before any command is executed (install, build, migrate, deploy, curl, etc.), AI must state what it intends to run and why, and wait for a human to confirm.
- If a task requires multiple commands in sequence, each step must be approved or a full plan must be reviewed and approved upfront.
- AI may **suggest** commands in a code block for the human to copy and run — but must not execute them autonomously.
- This covers: `npm`, `pip`, `docker`, `kubectl`, `terraform`, database migrations, file deletions, and any destructive operations.

**Pattern to follow:**
```
AI: "I'd need to run the following to proceed — shall I?"
    npm install axios
Human: [reviews and runs it themselves, or confirms AI may proceed]
```

---

### Rule 3 — Clarify Before Writing Code

> **AI must not write code without a full understanding of what is being built. When in doubt, ask first.**

- If a request is ambiguous, incomplete, or could be interpreted multiple ways, AI must ask clarifying questions before producing any code.
- AI must reference the relevant sections of `prd.md`, `kpi.md`, or `project_scope.md` to validate its understanding before coding.
- For any new module, endpoint, or component: AI must state its intended approach and get confirmation before writing implementation code.
- This rule exists to avoid building the wrong thing — rework wastes tokens, time, and context window.

**Questions AI should always resolve before coding:**
- Which phase does this belong to? (Phase 1 / 2 / 3) → `project_scope.md`
- Which role(s) does this affect? → `Personas/`
- Is this in scope for the current sprint/milestone? → `project_scope.md §3–6`
- Are there existing patterns in the codebase this should follow? → `Personas/` (engineer personas)
- What is the expected input/output/state change? → `prd.md §4`

---

### Rule 4 — Write Only Maintainable, Modular Code

> **AI must produce code that is modular, readable, and easy to maintain. No monoliths, no shortcuts that create long-term debt.**

All AI-generated code must follow these standards:

| Standard | Requirement |
|---|---|
| **Single Responsibility** | Each function/class/module does one thing well |
| **Naming** | Descriptive names — no abbreviations, no single-letter variables outside loops |
| **File Size** | No file exceeds ~300 lines; split if larger |
| **No Duplication** | Extract shared logic into utilities or services; do not copy-paste |
| **Folder Structure** | Place files in the correct location per Section 2 of this document |
| **Type Safety** | Full TypeScript types — no `any` unless explicitly justified |
| **Error Handling** | All async operations wrapped with proper error handling; no silent failures |
| **Comments** | Comment the *why*, not the *what*; complex logic must be explained |
| **Testability** | Code must be unit-testable without mocking the entire application |

AI must flag any situation where following these standards conflicts with a requested shortcut, and propose a maintainable alternative instead.

---

### AI Collaboration — Quick Reference

```
┌─────────────────────────────────────────────────────────────┐
│ AI Collaboration Rules — Quick Reference                    │
├─────────────────────────────────────────────────────────────┤
│  ❌ Never commit, push, or merge code                       │
│  ❌ Never run commands without explicit human approval      │
│  ❌ Never write code without understanding the full scope   │
│  ✅ Always ask clarifying questions when in doubt          │
│  ✅ Always produce modular, typed, testable code           │
│  ✅ Always reference prd.md / kpi.md before building       │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Project Directory Structure

```
VibeCoding/
│
├── master_prompt.md                   # AI reading order & context setup
│
├── Rules/
│   ├── prd.md                         # Product Requirements (FR-*, NFR, flows, API, edge cases)
│   ├── kpi.md                         # KPI Framework (metrics, guardrails, cadence)
│   ├── project_scope.md               # Phase deliverables, in/out-of-scope, exit gates
│   ├── project_boundary.md            # THIS FILE: AI rules, tech stack, team, risks
│   └── problem_statement.md           # Raw client problem statement (source document)
│
├── Personas/
│   │
│   ├── — User Personas (Product) —
│   ├── user-persona-employee.md       # Traveler / Expense Submitter
│   ├── user-persona-manager.md        # Approval Authority
│   ├── user-persona-finance-admin.md  # Policy & Reimbursement Admin
│   ├── user-persona-hr-admin.md       # Org Hierarchy & User Management
│   └── user-persona-super-admin.md    # System Config & Integrations
│   │
│   └── — Engineer Personas (Technical) —
│       ├── persona-backend.md         # Node.js · TypeScript · Fastify
│       ├── persona-database.md        # MongoDB · Mongoose · Redis
│       ├── persona-frontend-web.md    # React · TypeScript · Vite
│       ├── persona-frontend-mobile.md # React Native · TypeScript
│       └── persona-qa.md              # Vitest · Playwright · Detox · k6
│
├── Frontend/
│   ├── web/
│   │   └── src/
│   │       ├── app/                   # Pages & layouts
│   │       ├── components/
│   │       │   ├── ui/                # Primitive components
│   │       │   └── common/            # Shared components (used by 3+ features)
│   │       ├── hooks/
│   │       ├── lib/
│   │       │   ├── api/               # Axios instance & typed clients
│   │       │   └── validators/        # Zod schemas (shared with backend)
│   │       ├── stores/                # Zustand state
│   │       └── types/
│   │
│   └── mobile/
│       └── src/
│           ├── screens/               # One file per route
│           ├── navigation/            # Navigators + linking config
│           ├── components/
│           │   ├── ui/
│           │   └── common/
│           ├── hooks/
│           ├── lib/
│           │   ├── api/
│           │   └── storage/           # MMKV + Keychain wrappers
│           ├── stores/                # Zustand
│           ├── theme/                 # Colors, spacing, typography tokens
│           └── types/
│
├── Backend/
│   └── src/
│       ├── modules/                   # Feature vertical slices
│       │   ├── trips/
│       │   │   ├── trip.controller.ts
│       │   │   ├── trip.service.ts
│       │   │   ├── trip.routes.ts
│       │   │   └── trip.schema.ts
│       │   ├── reports/
│       │   ├── approvals/
│       │   ├── policies/
│       │   ├── reimbursements/
│       │   ├── analytics/
│       │   └── auth/
│       ├── middleware/
│       │   ├── authenticate.ts
│       │   ├── rbac.ts
│       │   └── errorHandler.ts
│       ├── lib/
│       │   ├── jwt.ts
│       │   └── pagination.ts
│       ├── jobs/                      # BullMQ processors
│       │   ├── autoEscalationJob.ts
│       │   ├── notificationJob.ts
│       │   └── auditPurgeJob.ts
│       ├── config/
│       │   ├── env.ts                 # Zod-validated environment variables
│       │   └── redis.ts
│       └── types/
│
├── tests/
│   ├── unit/                          # Pure logic — services, utils, validators
│   ├── integration/                   # DB-involved — mongodb-memory-server
│   ├── e2e/
│   │   ├── web/                       # Playwright specs
│   │   └── mobile/                    # Detox specs
│   ├── performance/                   # k6 scripts
│   ├── fixtures/                      # Typed data factories
│   └── helpers/
│
├── API/
│   └── openapi.yaml                   # OpenAPI 3.1 spec (auto-generated from code)
│
├── Infrastructure/
│   ├── docker/
│   ├── kubernetes/
│   ├── terraform/
│   ├── ci-cd/
│   └── monitoring/
│
└── Docs/
    ├── DEVELOPMENT.md
    ├── DEPLOYMENT.md
    ├── TESTING_STRATEGY.md
    ├── SECURITY.md
    └── ONBOARDING.md
```

---

## 3. Technology Stack

### 3.1 Backend

| Layer | Technology | Rationale |
|---|---|---|
| **Runtime** | Node.js 20 LTS | Ecosystem maturity, async I/O performance |
| **Framework** | Fastify 4 | Lightweight, schema-driven, fast |
| **Language** | TypeScript 5 | Type safety, IDE support, shared schemas |
| **Validation** | Zod (shared with frontend) | Single schema for API + UI |
| **Database** | MongoDB 7 (Atlas) + Redis | Document store + cache/queue backing |
| **ODM** | Mongoose 8 | Schema enforcement, soft-delete, hooks |
| **Authentication** | JWT RS256 — access (15min) + refresh (30d) | Stateless auth with rotation |
| **Queuing** | BullMQ + Redis | Async jobs: notifications, escalations |
| **Email** | SendGrid / Nodemailer | Notification delivery |
| **Logging** | Pino (structured JSON) + Datadog | Centralized monitoring |
| **Testing** | Vitest + Supertest | Unit, integration, API contract |
| **API Docs** | OpenAPI 3.1 via @fastify/swagger | Auto-generated from route schemas |

### 3.2 Frontend — Web

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | React 18 + TypeScript 5 | Component-based, wide adoption |
| **Bundler** | Vite | Fast dev server, optimized builds |
| **Routing** | React Router v6 | Client-side navigation |
| **Server State** | TanStack Query | Caching, background sync, typed queries |
| **UI State** | Zustand | Lightweight, non-boilerplate state |
| **UI Components** | Tailwind CSS + shadcn/ui | Utility-first styling + accessible primitives |
| **Forms** | React Hook Form + Zod | Performant forms with shared validation |
| **HTTP Client** | Axios | Request management |
| **Testing** | Vitest + React Testing Library + Playwright | Unit + component + E2E |

### 3.3 Frontend — Mobile (iOS + Android)

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | React Native CLI 0.73+ (New Architecture) | Cross-platform, shared logic with web |
| **Language** | TypeScript 5 | Type safety |
| **Navigation** | React Navigation v6 | Standard RN navigation |
| **Server State** | TanStack Query | Offline-first with staleTime per query |
| **UI State** | Zustand | Same pattern as web |
| **Storage** | MMKV (KV), Keychain/Keystore (secure tokens) | Fast + secure |
| **Forms** | React Hook Form + Zod | Shared validation schemas |
| **Push Notifications** | Firebase Cloud Messaging | Cross-platform push delivery |
| **OTA Updates** | CodePush | Hotfix delivery without App Store review |
| **Testing** | Jest + RNTL + Detox | Unit + component + E2E |
| **CI/CD** | Fastlane + GitHub Actions | Automated build + distribution |

### 3.4 DevOps & Infrastructure

| Layer | Technology | Purpose |
|---|---|---|
| **Containerization** | Docker | Consistent dev/prod environments |
| **Orchestration** | Kubernetes | Container management, auto-scaling |
| **Infrastructure** | Terraform | IaC for cloud provisioning |
| **Cloud** | AWS / GCP / Azure | Hosting, managed services |
| **CI/CD** | GitHub Actions | Automated tests, builds, deployments |
| **Monitoring** | Datadog | Metrics, logs, APM |
| **Error Tracking** | Sentry | Exception monitoring |

---

## 4. Team Structure

### 4.1 Phase 1 Core Team

| Role | Count | Responsibilities |
|---|---|---|
| **Product Manager** | 1 | Roadmap, KPI ownership, stakeholder alignment |
| **Engineering Lead** | 1 | Architecture, infrastructure, tech decisions |
| **Backend Engineers** | 2–3 | API development, database design, integrations |
| **Frontend Engineers (Web)** | 2 | Web UI, state management, accessibility |
| **Mobile Engineers** | 1–2 | iOS/Android apps, offline support |
| **QA Engineer** | 1–2 | Test automation, coverage, security testing |
| **DevOps Engineer** | 1 | CI/CD, deployments, monitoring, on-call |
| **Security Engineer** | 0.5 (shared) | Auth design, encryption, compliance review |
| **Scrum Master / PM** | 0.5 | Sprint planning, blockers, communications |

**Total: 9–12 FTE**

### 4.2 Phase 2+ Extended Team

- +1 Backend Engineer (HRMS, ERP, TMC integrations)
- +1 Mobile Engineer (OCR, offline sync optimization)
- +1 Data Engineer (analytics pipeline, KPI aggregations)
- +1 Customer Success Manager (early customer feedback, adoption)

---

## 5. External Dependencies & Constraints

| Dependency | Impact | Mitigation |
|---|---|---|
| **Exchange Rate API** | Currency conversion failures at submission | 24-hour fallback rate; line item tagged `RATE_ESTIMATED` |
| **Email Service (SendGrid)** | Notification delivery failure | Retry logic + fallback SMTP |
| **Cloud Infrastructure** | Uptime SLA | Multi-AZ deployment, auto-scaling, DR plan |
| **HRMS System** | Org hierarchy accuracy | Phase 1: manual CSV; Phase 2: API sync |
| **ERP System** | Reimbursement batch export | Phase 2 integration; Phase 1: manual CSV export |
| **Bank Feed / Card Provider** | Corporate card reconciliation | Phase 3; requires provider CSV or API support |
| **MongoDB Atlas** | Database availability | Managed replica set; Atlas SLA ≥ 99.995% |
| **Firebase (FCM)** | Push notification delivery | Retry queue; email fallback |

---

## 6. Risk Register

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| **User adoption < 80%** | Medium | Cycle time target miss | Early pilot with 5 customers; UX iterations on feedback |
| **Approval delays bottleneck cycle time** | Medium | North Star KPI miss | Auto-escalation in Phase 2; manager load monitoring |
| **Data loss / corruption** | Low | Compliance & trust failure | Daily backups, automated integrity checks, DR rehearsal |
| **Reimbursement processing delays** | Medium | User frustration, guardrail breach | Dedicated Finance support; daily batch processing |
| **Security breach** | Low | Compliance failure, legal exposure | Penetration testing, SOC 2 audit, incident response plan |
| **Exchange rate API outage** | Low | Submission blocked or incorrect conversion | 24h fallback rate; `RATE_ESTIMATED` flagging |
| **Mobile crash rate > 0.5%** | Medium | Phase 2 entry blocked | Aggressive Sentry monitoring; hotfix via CodePush |
| **Scope creep into Phase 2 features** | High | Phase 1 timeline slip | Strict scope gate; all additions require PM sign-off |

---

## 7. Folder Navigation Guide

| Folder / File | Purpose | Navigate Here For... |
|---|---|---|
| `Rules/prd.md` | Product requirements | FR-*, NFR, user flows, API contracts, edge cases |
| `Rules/kpi.md` | Success metrics | KPI formulas, targets, guardrails, review cadence |
| `Rules/project_scope.md` | Phase planning | What's in/out per phase, acceptance criteria, exit gates |
| `Rules/project_boundary.md` | Working standards | AI rules, tech stack, team, risks (this file) |
| `Personas/user-persona-*.md` | User personas | Goals, pain points, UX needs per product role |
| `Personas/persona-*.md` | Engineer personas | Stack, folder structure, coding standards per role |
| `Frontend/web/` | Web application | React + Vite source code |
| `Frontend/mobile/` | Mobile application | React Native source code |
| `Backend/` | API & services | Fastify modules, services, middleware |
| `tests/` | Test suite | Unit, integration, E2E, performance tests |
| `API/openapi.yaml` | API specification | Endpoint contracts, request/response schemas |
| `Infrastructure/` | DevOps | Docker, Kubernetes, Terraform, CI/CD configs |
| `Docs/` | Reference guides | Setup, deployment, testing strategy, security |

---

## 8. Quick Start

### For New Team Members
1. Read: `Rules/prd.md` → `Rules/project_scope.md` → this file
2. Review: `Personas/user-persona-*.md` to understand who you're building for
3. Review: your role's engineer persona in `Personas/persona-*.md`
4. Follow: `Docs/ONBOARDING.md`

### For Developers
1. Clone repo → read your engineer persona (`Personas/persona-<role>.md`)
2. Follow `Docs/DEVELOPMENT.md` for local environment setup
3. Spin up with `docker-compose up`
4. Reference `API/openapi.yaml` for endpoint contracts

### For QA
1. Review `Rules/project_scope.md §4` for acceptance criteria
2. Map every AC-* in `prd.md §6.1` to a Zephyr test case before sprint start
3. Follow `Docs/TESTING_STRATEGY.md`
4. See `Personas/persona-qa.md` for test stack, folder structure, and anti-patterns

### For Product Managers
1. Track milestone progress against `Rules/project_scope.md §3–6`
2. Monitor KPIs via `Rules/kpi.md §5` (activation by phase)
3. Review risk register in Section 6 above

---

## 9. Document Versioning

| Document | Version | Last Updated | Next Review |
|---|---|---|---|
| `prd.md` | 2.0 | 2025-06-09 | Month 2 (Phase 2 planning) |
| `kpi.md` | 2.0 | 2025-06-09 | Month 1 (baseline setup) |
| `project_scope.md` | 2.0 | 2025-06-09 | Month 1 (post-kickoff) |
| `project_boundary.md` | 2.0 | 2025-06-09 | Month 1 (post-kickoff) |

> All documents follow semantic versioning: MAJOR.MINOR (MAJOR = phase change; MINOR = incremental updates within a phase)

---

## Summary

```
┌─────────────────────────────────────────────────────────────┐
│ ETEMS — Project Boundary at a Glance                        │
├─────────────────────────────────────────────────────────────┤
│ AI Rules: No autonomous commits / commands / code           │
│ Stack: Fastify · React · React Native · MongoDB · Redis     │
│ Team: 9–12 FTE (Phase 1), expanding in Phase 2+            │
│ Key Risk: Scope creep & adoption below 80%                  │
├─────────────────────────────────────────────────────────────┤
│ Read requirements   → prd.md                                │
│ Read phase plan     → project_scope.md                      │
│ Read metrics        → kpi.md                                │
│ Read this file for  → AI rules, tech, team, risks           │
└─────────────────────────────────────────────────────────────┘
```
