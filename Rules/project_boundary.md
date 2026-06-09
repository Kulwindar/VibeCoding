# Project Boundary Document
## Enterprise Employee Travel & Expense Management System (ETEMS)

**Version:** 2.0
**Status:** Active
**Date:** 2025-06-09
**Project Lead:** Product Management
**Reference:** `prd.md` v2.0, `kpi.md` v2.0, `project_scope.md` v1.0

---

## 1. Project Overview

### 1.1 Executive Summary
ETEMS is an enterprise-grade, cross-platform (web + mobile) Travel & Expense Management system designed to streamline the complete employee travel and expense lifecycle — from trip request through reimbursement. The system enforces travel policies at the point of booking, provides real-time spend visibility to Finance, and reduces expense report cycle time from days to hours.

### 1.2 Project Vision
Enable enterprises to eliminate fragmented T&E processes (email, spreadsheets, paper receipts) with a unified, policy-compliant, and auditable platform that reduces manual reconciliation overhead by ≥50% while achieving ≥90% employee adoption.

### 1.3 North Star Metric
**Expense Report Cycle Time: < 5 business days (median, submission → reimbursement paid)**

### 1.4 Stakeholders
| Stakeholder | Role | Interest |
|---|---|---|
| **Employees (Travelers)** | System Users | Speed, simplicity, mobile access |
| **Managers (Approvers)** | System Users | Consolidated view, contextual approvals |
| **Finance Admin** | System Operators | Policy control, real-time visibility, reconciliation speed |
| **HR Admin** | System Operators | Org hierarchy, employee management |
| **Super Admin** | System Operators | Integrations, security, compliance |
| **Product Manager** | Project Owner | KPI delivery, adoption, user satisfaction |
| **Engineering Lead** | Technical Lead | Reliability, performance, scalability |
| **Customer Success** | Support | User adoption, issue resolution |

---

## 2. AI Collaboration Rules

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
- Which phase does this belong to? (Phase 1 / 2 / 3)
- Which role(s) does this affect? (see `/Personas/`)
- Is this in scope for the current sprint/milestone?
- Are there existing patterns in the codebase this should follow?
- What is the expected input/output/state change?

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
| **Folder Structure** | Place files in the correct location per Section 6 of this document |
| **Type Safety** | Full TypeScript types — no `any` unless explicitly justified |
| **Error Handling** | All async operations wrapped with proper error handling; no silent failures |
| **Comments** | Comment the *why*, not the *what*; complex logic must be explained |
| **Testability** | Code must be unit-testable without mocking the entire application |

AI must flag any situation where following these standards conflicts with a requested shortcut, and propose a maintainable alternative instead.

---

### Summary: AI Collaboration at a Glance

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

## 3. Project Scope at a Glance

### 2.1 In Scope (Phase 1 MVP)

#### **Core Modules**
- ✅ Trip Request & Booking (create, validate, approve)
- ✅ Expense Submission (line items, receipts, draft save)
- ✅ 2-Level Approval Workflow (Manager → Finance)
- ✅ Basic Policy Engine (category limits, receipt thresholds)
- ✅ Reimbursement Status Tracking
- ✅ Admin & Configuration (users, policies, categories)
- ✅ Audit Logging (full state change history)

#### **Platform & Integrations**
- ✅ Web Application (desktop-optimized UI)
- ✅ Mobile Application (iOS + Android native/web)
- ✅ REST API (100+ endpoints, OpenAPI 3.1 documented)
- ✅ Email Notifications
- ✅ Multi-currency Support (daily exchange rates)
- ✅ CSV Organization Import

#### **Technical Standards**
- ✅ JWT Authentication + RBAC
- ✅ TLS 1.3 Encryption (in transit)
- ✅ AES-256 Encryption (at rest)
- ✅ 99.9% Uptime SLA
- ✅ p99 < 300ms API Latency
- ✅ GDPR Compliance (EU data)
- ✅ 7-Year Audit Log Retention

### 2.2 Out of Scope (Phase 1)

| Feature | Reason | Target Phase |
|---|---|---|
| OCR Receipt Auto-fill | Requires stable mobile infrastructure | Phase 2 |
| Multi-level Dynamic Approval Chains | Fixed 2-level sufficient for MVP | Phase 2 |
| Advanced Policies (per-grade, per-destination) | Category-level limits sufficient | Phase 2 |
| Analytics Dashboard | Raw CSV exports acceptable | Phase 2 |
| ERP GL Export | Post-MVP integration | Phase 2 |
| Corporate Card Reconciliation | Requires bank feed integrations | Phase 3 |
| HRMS API Sync | CSV import sufficient; API sync Phase 2 | Phase 2 |
| Multi-language UI | English-only v1 | Post-launch |
| Direct Flight/Hotel Booking | Data import from TMC only | Out of scope |
| Payroll Processing | Separate system responsibility | Out of scope |

---

## 4. Key Metrics & Success Criteria

### 3.1 North Star & Primary KPIs

| KPI | Target | Phase | Owner |
|---|---|---|---|
| **Expense Report Cycle Time** | < 5 business days | Phase 1 | Product Manager |
| **Approver SLA Compliance** | ≥ 85% (48h SLA) | Phase 1 | HR/Ops Admin |
| **Receipt Attachment Rate** | ≥ 98% | Phase 1 | Finance Admin |
| **System Uptime** | ≥ 99.9% monthly | Phase 1 | Engineering Lead |
| **API p99 Latency** | < 300ms | Phase 1 | Engineering Lead |
| **Mobile Crash-Free Rate** | ≥ 99.5% | Phase 1 | QA Lead |
| **Report Submission Rate** | ≥ 95% of approved trips | Phase 1 | Product Manager |

### 3.2 Guardrail Metrics (Hard Limits)

| Guardrail | Threshold | Action |
|---|---|---|
| Unplanned Downtime | > 1 hour per month | P0 incident escalation |
| Security/Data Breach | Any unauthorised access | CISO + Legal escalation |
| Audit Log Gap | > 15 min missing | P1 data integrity review |
| Reimbursement Delay | > 50 reports unpaid > 5 days | Finance process review |
| MAU Drop | > 20% month-over-month | Product + CS 48h review |

---

## 5. Project Directory Structure

```
VibeCoding/
│
├── README.md                          # Project overview & getting started
├── project_boundary.md                # THIS FILE: Project boundaries & structure
├── project_scope.md                   # Detailed scope, requirements, phases
│
├── master_prompt.md                   # Master prompt for AI/LLM interactions
│
├── PRD_&_KPI/
│   ├── prd.md                         # Product Requirements Document v2.0
│   ├── kpi.md                         # KPI Framework & Metrics v2.0
│   ├── problem_statement_2nd_June.txt # Problem statement snapshot
│   └── README.md                      # PRD/KPI reference guide
│
├── Personas/
│   ├── persona-employee.md            # Traveler / Expense Submitter
│   ├── persona-manager.md             # Approval Authority
│   ├── persona-finance-admin.md       # Policy & Reimbursement Admin
│   ├── persona-hr-admin.md            # Org Hierarchy & User Management
│   └── persona-super-admin.md         # System Config & Integrations
│
├── Rules/
│   ├── approval-workflow-rules.md     # 2-level approval logic
│   ├── policy-engine-rules.md         # Category limits, receipt thresholds
│   ├── notification-rules.md          # Event-triggered notifications
│   ├── reimbursement-rules.md         # Payment status transitions
│   └── security-rules.md              # RBAC, data access control
│
├── Tasks/
│   ├── Phase_1_Deliverables.md        # MVP tasks & checklist
│   ├── Phase_2_Roadmap.md             # Phase 2 features (OCR, analytics, etc.)
│   ├── Phase_3_Roadmap.md             # Phase 3 features (integrations, scale)
│   │
│   └── TestCases/
│       ├── trip_request_tests.md      # FR-TR-* test scenarios
│       ├── expense_submission_tests.md # FR-EX-* test scenarios
│       ├── approval_workflow_tests.md  # FR-AP-* test scenarios
│       ├── policy_engine_tests.md      # FR-PE-* test scenarios
│       ├── reimbursement_tests.md      # FR-RM-* test scenarios
│       ├── admin_config_tests.md       # FR-AD-* test scenarios
│       ├── edge_cases_tests.md         # Section 5 edge case validation
│       ├── api_contract_tests.md       # API endpoint validation
│       └── nfr_tests.md                # Performance, security, compliance
│
├── API/
│   ├── openapi.yaml                   # OpenAPI 3.1 spec (auto-generated from code)
│   ├── endpoints.md                   # Endpoint reference (Section 4 of PRD)
│   ├── auth-schema.md                 # JWT, refresh token, RBAC details
│   ├── error-codes.md                 # Error code reference
│   └── examples/
│       ├── trip_request_examples.md
│       ├── expense_submission_examples.md
│       ├── approval_workflow_examples.md
│       └── reimbursement_examples.md
│
├── Architecture/
│   ├── system_architecture.md         # High-level system design
│   ├── database_schema.md             # Entity relationships, tables
│   ├── data_flow.md                   # Data flow diagrams (user → API → DB)
│   ├── deployment_architecture.md     # Cloud infrastructure, services
│   └── security_architecture.md       # Auth, encryption, compliance
│
├── Frontend/
│   ├── web/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Dashboard/
│   │   │   │   ├── TripRequest/
│   │   │   │   ├── ExpenseReport/
│   │   │   │   ├── ApprovalQueue/
│   │   │   │   ├── PolicyConfig/
│   │   │   │   ├── AdminPanel/
│   │   │   │   └── AuditLog/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── store/
│   │   │   ├── styles/
│   │   │   └── App.tsx
│   │   ├── public/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── README.md
│   │
│   └── mobile/
│       ├── src/
│       │   ├── screens/
│       │   │   ├── HomeScreen/
│       │   │   ├── NewExpenseScreen/
│       │   │   ├── TripRequestScreen/
│       │   │   ├── ApprovalQueueScreen/
│       │   │   ├── NotificationCenter/
│       │   │   └── Profile/
│       │   ├── components/
│       │   ├── navigation/
│       │   ├── services/
│       │   ├── store/
│       │   ├── utils/
│       │   └── App.tsx
│       ├── android/
│       ├── ios/
│       ├── package.json
│       └── README.md
│
├── Backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── trips.routes.ts
│   │   │   ├── reports.routes.ts
│   │   │   ├── approvals.routes.ts
│   │   │   ├── policies.routes.ts
│   │   │   ├── analytics.routes.ts
│   │   │   ├── admin.routes.ts
│   │   │   └── health.routes.ts
│   │   │
│   │   ├── controllers/
│   │   │   ├── tripController.ts
│   │   │   ├── reportController.ts
│   │   │   ├── approvalController.ts
│   │   │   ├── policyController.ts
│   │   │   ├── reimbursementController.ts
│   │   │   ├── analyticsController.ts
│   │   │   ├── adminController.ts
│   │   │   └── authController.ts
│   │   │
│   │   ├── services/
│   │   │   ├── tripService.ts
│   │   │   ├── reportService.ts
│   │   │   ├── approvalService.ts
│   │   │   ├── policyService.ts
│   │   │   ├── reimbursementService.ts
│   │   │   ├── notificationService.ts
│   │   │   ├── auditService.ts
│   │   │   └── authService.ts
│   │   │
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── Trip.ts
│   │   │   ├── ExpenseReport.ts
│   │   │   ├── ExpenseLineItem.ts
│   │   │   ├── ApprovalAction.ts
│   │   │   ├── Policy.ts
│   │   │   ├── AuditLog.ts
│   │   │   └── Notification.ts
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.ts
│   │   │   ├── rbacMiddleware.ts
│   │   │   ├── validationMiddleware.ts
│   │   │   ├── errorHandler.ts
│   │   │   └── requestLogger.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── currency.ts
│   │   │   ├── validation.ts
│   │   │   ├── encryption.ts
│   │   │   ├── logger.ts
│   │   │   └── constants.ts
│   │   │
│   │   ├── jobs/
│   │   │   ├── autoEscalationJob.ts
│   │   │   ├── notificationJob.ts
│   │   │   ├── kpiSnapshotJob.ts
│   │   │   └── auditPurgeJob.ts
│   │   │
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   ├── auth.ts
│   │   │   ├── email.ts
│   │   │   ├── storage.ts
│   │   │   └── integrations.ts
│   │   │
│   │   └── app.ts
│   │
│   ├── tests/
│   │   ├── unit/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── utils/
│   │   │   └── middleware/
│   │   │
│   │   ├── integration/
│   │   │   ├── trip.integration.test.ts
│   │   │   ├── report.integration.test.ts
│   │   │   ├── approval.integration.test.ts
│   │   │   └── policy.integration.test.ts
│   │   │
│   │   ├── e2e/
│   │   │   ├── employee-flow.e2e.test.ts
│   │   │   ├── approval-flow.e2e.test.ts
│   │   │   └── reimbursement-flow.e2e.test.ts
│   │   │
│   │   └── fixtures/
│   │       ├── users.fixtures.ts
│   │       ├── trips.fixtures.ts
│   │       ├── policies.fixtures.ts
│   │       └── mocks.ts
│   │
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   ├── docker-compose.yml
│   └── README.md
│
├── Database/
│   ├── migrations/
│   │   ├── 001_initial_schema.sql
│   │   ├── 002_audit_tables.sql
│   │   ├── 003_policy_tables.sql
│   │   ├── 004_indexes_and_constraints.sql
│   │   └── README.md
│   │
│   ├── seeds/
│   │   ├── initial_data.sql
│   │   ├── test_data.sql
│   │   └── README.md
│   │
│   └── schema/
│       ├── users.sql
│       ├── trips.sql
│       ├── expense_reports.sql
│       ├── approvals.sql
│       ├── policies.sql
│       ├── audit_logs.sql
│       ├── notifications.sql
│       └── indexes.sql
│
├── Integrations/
│   ├── email/
│   │   ├── emailService.ts
│   │   ├── templates/
│   │   │   ├── trip-approved.html
│   │   │   ├── expense-submitted.html
│   │   │   ├── approval-requested.html
│   │   │   └── reimbursement-processed.html
│   │   └── README.md
│   │
│   ├── exchange-rates/
│   │   ├── currencyService.ts
│   │   └── README.md
│   │
│   ├── hrms/
│   │   ├── hrmsImportService.ts
│   │   ├── csvUploadHandler.ts
│   │   └── README.md
│   │
│   ├── erp/
│   │   ├── erpExportService.ts
│   │   ├── glMappingService.ts
│   │   └── README.md (Phase 2)
│   │
│   ├── tmc/
│   │   ├── tmcService.ts
│   │   └── README.md (Phase 2)
│   │
│   └── banking/
│       ├── bankFeedService.ts
│       └── README.md (Phase 3)
│
├── Infrastructure/
│   ├── docker/
│   │   ├── Dockerfile.backend
│   │   ├── Dockerfile.web
│   │   ├── Dockerfile.mobile
│   │   └── docker-compose.yml
│   │
│   ├── kubernetes/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   ├── configmap.yaml
│   │   ├── secrets.yaml
│   │   └── ingress.yaml
│   │
│   ├── terraform/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   └── modules/
│   │
│   ├── ci-cd/
│   │   ├── .github/workflows/
│   │   │   ├── backend-tests.yml
│   │   │   ├── frontend-tests.yml
│   │   │   ├── build-deploy.yml
│   │   │   └── security-scan.yml
│   │   └── jenkins/ (optional)
│   │
│   └── monitoring/
│       ├── datadog-config.yaml
│       ├── sentry-config.js
│       ├── prometheus-rules.yml
│       └── dashboards.json
│
├── Docs/
│   ├── DEVELOPMENT.md              # Dev environment setup
│   ├── DEPLOYMENT.md               # Production deployment guide
│   ├── API_REFERENCE.md            # API documentation
│   ├── DATABASE_GUIDE.md           # Database setup & migrations
│   ├── SECURITY.md                 # Security best practices
│   ├── TESTING_STRATEGY.md         # Test coverage & execution
│   ├── ARCHITECTURE_DECISIONS.md   # ADRs (Architecture Decision Records)
│   ├── ONBOARDING.md               # New developer onboarding
│   └── TROUBLESHOOTING.md          # Common issues & solutions
│
├── Changelog/
│   ├── CHANGELOG.md                # Release notes & version history
│   ├── ROADMAP.md                  # Phase 1/2/3 timeline & milestones
│   └── BREAKING_CHANGES.md         # Deprecation notices
│
├── .gitignore
├── .env.example
├── docker-compose.yml
├── package.json                    # Root monorepo package.json
├── tsconfig.json                   # Root TypeScript config
├── README.md                       # Project root README
└── LICENSE


```

---

## 6. Technology Stack (Recommended)

### 5.1 Backend
| Layer | Technology | Rationale |
|---|---|---|
| **Runtime** | Node.js 18+ | JavaScript ecosystem; fast development |
| **Framework** | Express.js or Fastify | Lightweight, RESTful, battle-tested |
| **Language** | TypeScript | Type safety, better IDE support |
| **Database** | PostgreSQL + MongoDB | Relational (structured) + document (flexible) |
| **Authentication** | JWT + Passport.js | Standard, scalable auth pattern |
| **Queuing** | Bull or RabbitMQ | Async jobs (notifications, escalations) |
| **Caching** | Redis | Session, API response caching |
| **Email** | SendGrid / Nodemailer | Notification delivery |
| **Logging** | Winston + Datadog | Structured logs, centralized monitoring |
| **Testing** | Jest + Supertest | Unit, integration, e2e coverage |

### 5.2 Frontend (Web)
| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | React 18+ | Component-based, widespread adoption |
| **Language** | TypeScript | Type safety in UI code |
| **State** | Redux Toolkit or Zustand | Centralized state management |
| **Routing** | React Router v6+ | Client-side navigation |
| **UI Framework** | Material-UI or Tailwind + Shadcn | Rich component library + styling |
| **Forms** | React Hook Form | Lightweight, performant forms |
| **HTTP Client** | Axios or TanStack Query | Request management + caching |
| **Testing** | Vitest + React Testing Library | Component & integration testing |

### 5.3 Mobile (iOS + Android)
| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | React Native or Flutter | Cross-platform code sharing |
| **Language** | TypeScript (RN) or Dart (Flutter) | Type safety |
| **State** | Redux Toolkit (RN) / Provider (Flutter) | State management |
| **HTTP Client** | Axios (RN) / http (Flutter) | API communication |
| **Offline** | SQLite + WatermelonDB (RN) | Local storage, sync on reconnect |
| **Receipt Capture** | Expo Camera (RN) / camera_android/ios (Flutter) | OCR-ready for Phase 2 |
| **Notifications** | Firebase Cloud Messaging | Push notification delivery |
| **Testing** | Detox (RN) / Flutter Test | E2E mobile testing |

### 5.4 DevOps & Deployment
| Layer | Technology | Purpose |
|---|---|---|
| **Containerization** | Docker | Consistent dev/prod environments |
| **Orchestration** | Kubernetes or Docker Compose | Container management, scaling |
| **Infrastructure** | Terraform | IaC for cloud provisioning |
| **Cloud Provider** | AWS / GCP / Azure | Hosting, managed services |
| **CI/CD** | GitHub Actions or GitLab CI | Automated testing, builds, deployments |
| **Monitoring** | Datadog / New Relic | Metrics, logs, APM |
| **Error Tracking** | Sentry | Exception monitoring, alerting |

---

## 7. Timeline & Milestones

### 6.1 Phase 1 — MVP (Months 1–3)

| Milestone | Month | Deliverables |
|---|---|---|
| **M1.1 - Infrastructure & Foundation** | Month 1 | API scaffolding, DB schema, auth system, deployment pipeline |
| **M1.2 - Core APIs** | Month 1–2 | Trip, Report, Policy, Approval endpoints (70% complete) |
| **M1.3 - Web Frontend** | Month 1–2 | Dashboard, Trip Form, Expense Form, Approval Queue |
| **M1.4 - Mobile Frontend** | Month 1–2 | Home, New Expense, Trip Request, Notifications |
| **M1.5 - Integrations** | Month 2 | Email, CSV Import, Currency API |
| **M1.6 - Testing & QA** | Month 2–3 | API tests, UI tests, E2E tests, load testing |
| **M1.7 - Documentation** | Month 3 | API docs, deployment guide, runbooks |
| **Phase 1 Go-Live** | Month 3 (End) | Production release, monitoring active |

### 6.2 Phase 2 — Core Enterprise (Months 4–6)

| Feature | Month | KPIs Activated |
|---|---|---|
| OCR Receipt Auto-fill | Month 4 | — |
| Dynamic Approval Chains | Month 4 | E-04, E-05 |
| Advanced Policies | Month 4–5 | C-01, C-02 |
| HRMS API Sync | Month 5 | A-01 |
| Analytics Dashboard | Month 5 | F-01 |
| ERP GL Export | Month 5–6 | F-02 |
| Auto-Escalation & Delegation | Month 6 | A-02, E-03 |
| **Phase 2 Go-Live** | Month 6 (End) | All Phase 2 KPIs active |

### 6.3 Phase 3 — Integrations & Scale (Months 7–9)

| Feature | Month | KPIs Activated |
|---|---|---|
| Corporate Card Reconciliation | Month 7–8 | F-03 |
| ERP Batch Reimbursement | Month 8 | F-02 (improved) |
| Scheduled Report Emails | Month 8 | — |
| Audit Log UI | Month 8–9 | — |
| Multi-tenant Support | Month 9 | — |
| Performance Optimization (50K+ users) | Month 9 | R-01, R-02 |
| **Phase 3 Go-Live** | Month 9 (End) | Full enterprise scale |

---

## 8. Team Structure

### 7.1 Core Team (Phase 1)

| Role | Count | Responsibilities |
|---|---|---|
| **Product Manager** | 1 | Roadmap, KPI ownership, stakeholder alignment |
| **Engineering Lead** | 1 | Architecture, infrastructure, tech decisions |
| **Backend Engineers** | 2–3 | API development, database design, integrations |
| **Frontend Engineers (Web)** | 2 | Web UI, state management, accessibility |
| **Mobile Engineers** | 1–2 | iOS/Android apps, offline support |
| **QA Engineer** | 1–2 | Test automation, coverage, security testing |
| **DevOps Engineer** | 1 | CI/CD, deployments, monitoring, on-call |
| **Security Engineer** | 0.5 (shared) | Auth design, encryption, compliance |
| **Scrum Master / Project Manager** | 0.5 | Sprint planning, blockers, communications |

**Total: 9–12 FTE**

### 7.2 Extended Team (Phase 2+)

- +1 Backend Engineer (integrations: HRMS, ERP, TMC)
- +1 Mobile Engineer (OCR, offline sync optimization)
- +1 Data Engineer (analytics, KPI aggregations, dashboards)
- +1 Customer Success Manager (early customer feedback)

---

## 9. Key Dependencies & Constraints

### 8.1 External Dependencies
| Dependency | Impact | Mitigation |
|---|---|---|
| **Exchange Rate API** | Currency conversion failures | 24-hour fallback rate; line item flagged as `RATE_ESTIMATED` |
| **Email Service** | Notification delivery | Retry logic + fallback service |
| **Cloud Infrastructure** | Uptime SLA | Multi-AZ deployment, auto-scaling |
| **HRMS System** | Org hierarchy accuracy | Phase 1 uses manual CSV; Phase 2 API sync |
| **ERP System** | Reimbursement batch export | Phase 2 integration; Phase 1 manual export |

### 8.2 Internal Constraints
| Constraint | Impact | Mitigation |
|---|---|---|
| **2-Level Approval Chain (Phase 1)** | Limited flexibility | Auto-escalation in Phase 2 |
| **Manual Receipt Upload (Phase 1)** | User friction | OCR in Phase 2 |
| **No Analytics Dashboard (Phase 1)** | Finance visibility gap | CSV exports; Phase 2 dashboards |
| **Single-Tenant (Phase 1)** | Only one org can deploy | Multi-tenant in Phase 3 |
| **English-Only (Phase 1)** | Localization gaps | Multi-language post-v1 |

---

## 10. Success Criteria & Go/No-Go Gates

### 9.1 Phase 1 Go-Live Gates

All gates **must** pass before production release:

- ✅ **System Uptime:** ≥ 99.9% in 7-day pre-prod load test
- ✅ **API Latency:** p99 < 300ms under target load
- ✅ **Mobile Stability:** Crash-free rate ≥ 99.5% (10K+ test sessions)
- ✅ **Approval Notification:** < 30 seconds latency (automated test)
- ✅ **Receipt Attachment:** ≥ 98% compliance (manual audit of 100 reports)
- ✅ **Audit Log:** 100% complete; no gaps > 15 minutes (spot audit)
- ✅ **Security Review:** OAuth/JWT, RBAC, encryption validated by security team
- ✅ **Documentation:** API docs, runbooks, deployment guide complete

### 9.2 Phase 2 Entry Criteria

- ✅ Phase 1 in production ≥ 2 weeks with < 5% critical bugs
- ✅ User adoption baseline established (MAU data)
- ✅ Approver SLA data collected (< 24h response time validated)
- ✅ No outstanding Phase 1 blockers

---

## 11. Risks & Mitigation

### 10.1 High-Impact Risks

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| **User adoption < 80%** | Medium | Project delays or pivot | Early pilot with 5 customers; UX iterations based on feedback |
| **Approval delays bottleneck** | Medium | Cycle time target miss | Auto-escalation + manager load monitoring |
| **Data loss / corruption** | Low | Compliance violation | Daily backups, automated integrity checks, DR plan |
| **Payment processing delays** | Medium | User frustration | Dedicated Finance support team; daily reimbursement batch runs |
| **Security breach** | Low | Compliance failure | Penetration testing, SOC 2 audit, incident response plan |

---

## 12. Artifact Inventory

### 11.1 Strategic Documents
- ✅ `prd.md` — Product Requirements Document (v2.0)
- ✅ `kpi.md` — KPI Framework (v2.0)
- ✅ `project_scope.md` — Detailed Scope & Phases
- ✅ `project_boundary.md` — THIS FILE: Boundaries & Structure

### 11.2 Operational Documents (To Be Created)
| Document | Purpose | Owner | Target Date |
|---|---|---|---|
| API OpenAPI Spec | Endpoint contract | Backend Lead | Month 1 |
| Database Schema | Entity relationships | Backend Lead | Month 1 |
| Architecture Design Document | System design | Engineering Lead | Week 1–2 |
| UI/UX Mockups | Screen designs | Product + Design | Week 2–3 |
| Test Strategy | QA coverage plan | QA Lead | Week 1 |
| Deployment Runbook | Production procedures | DevOps Lead | Month 1 |
| Security Audit Report | Security review | Security Eng. | Month 2 |

---

## 13. Folder Navigation Guide

| Folder | Purpose | Navigate For... |
|---|---|---|
| `/PRD_&_KPI/` | Product & metrics | Product requirements, success metrics |
| `/Personas/` | User roles & personas | User stories, role capabilities |
| `/Rules/` | Business logic rules | Approval flows, policy enforcement |
| `/Tasks/` | Work tracking | Sprint tasks, test cases |
| `/API/` | API specifications | Endpoint docs, error codes |
| `/Architecture/` | System design | Database schema, data flows |
| `/Frontend/` | UI applications | Web & mobile code |
| `/Backend/` | API & services | Server logic, integrations |
| `/Database/` | Data layer | Migrations, seeds, schema |
| `/Integrations/` | External services | Email, currency, HRMS configs |
| `/Infrastructure/` | DevOps & deployment | Docker, K8s, CI/CD configs |
| `/Docs/` | Reference guides | Setup, deployment, security |

---

## 14. Quick Start

### 13.1 For New Team Members
1. Read: `README.md` → `project_boundary.md` (this file) → `project_scope.md`
2. Review: `/Personas/` for your role
3. Study: `/Architecture/system_architecture.md`
4. Follow: `/Docs/ONBOARDING.md`

### 13.2 For Developers
1. Clone repo & read `/Backend/README.md` or `/Frontend/README.md`
2. Follow `/Docs/DEVELOPMENT.md` for local setup
3. Check `docker-compose.yml` to spin up local environment
4. Review relevant test cases in `/Tasks/TestCases/`

### 13.3 For QA/Testing
1. Review `/Tasks/Phase_1_Deliverables.md` for acceptance criteria
2. Study test cases in `/Tasks/TestCases/`
3. Follow `/Docs/TESTING_STRATEGY.md`
4. Use `/API/examples/` for API payload reference

### 13.4 For Project Managers
1. Track milestone progress against `/Tasks/Phase_1_Deliverables.md`
2. Monitor KPIs in `/PRD_&_KPI/kpi.md` (Section 5: Activation by Phase)
3. Review risk mitigation in Section 12 above

---

## 15. Document Versioning

| Document | Current Version | Last Updated | Next Review |
|---|---|---|---|
| project_boundary.md | 2.0 | 2025-06-09 | Month 1 (post-kickoff) |
| project_scope.md | 1.0 | 2025-06-09 | Month 1 (post-kickoff) |
| prd.md | 2.0 | 2025-06-09 | Month 2 (Phase 2 planning) |
| kpi.md | 2.0 | 2025-06-09 | Month 1 (baseline setup) |

> All documents follow semantic versioning: MAJOR.MINOR (MAJOR = phase change; MINOR = incremental updates)

---

## 16. Summary: Project Boundary at a Glance

```
┌─────────────────────────────────────────────────────────────┐
│ ETEMS — Enterprise T&E Management System                    │
├─────────────────────────────────────────────────────────────┤
│ North Star: < 5 business day cycle time (submit → paid)     │
│ MVP Duration: 3 months (Phase 1)                            │
│ Team Size: 9–12 FTE                                         │
│ Primary KPIs: Adoption, Cycle Time, SLA Compliance          │
├─────────────────────────────────────────────────────────────┤
│ In Scope (Phase 1):                                         │
│  ✅ Trip requests + 2-level approvals                       │
│  ✅ Expense submission + policy flags                       │
│  ✅ Reimbursement tracking + email notifications            │
│  ✅ Web + mobile + REST API                                 │
│  ✅ 99.9% uptime, p99 < 300ms, GDPR-compliant              │
├─────────────────────────────────────────────────────────────┤
│ Out of Scope (Phases 2–3):                                  │
│  ❌ OCR, analytics, advanced policies, ERP integration      │
│  ❌ Multi-tenant, multi-language, direct booking            │
├─────────────────────────────────────────────────────────────┤
│ Success Criteria: Go-live gates validated, guardrails met   │
└─────────────────────────────────────────────────────────────┘
```

---

## Appendix: Cross-Reference Index

| Topic | Document Location |
|---|---|
| Detailed KPIs & targets | `PRD_&_KPI/kpi.md` (Section 3) |
| Functional requirements | `PRD_&_KPI/prd.md` (Section 2.4) |
| API endpoints & contracts | `PRD_&_KPI/prd.md` (Section 4) + `/API/openapi.yaml` |
| Edge cases & validation | `PRD_&_KPI/prd.md` (Section 5) |
| Phase 1 scope & acceptance | `project_scope.md` (Section 7) |
| Technical requirements (NFR) | `project_scope.md` (Section 5) |
| Go/No-Go gates | Section 11.1 above + `project_scope.md` (Section 9) |
| Team roles & responsibilities | Section 9 above |
| Risk register | Section 12 above |
