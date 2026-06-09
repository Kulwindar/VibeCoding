# Project Scope Document
## Enterprise Employee Travel & Expense Management System (ETEMS)

**Version:** 2.0
**Status:** Active
**Date:** 2025-06-09
**Owned by:** Product Management

> **Scope of this document:** What we build, when, and what we don't — per phase.
> This document owns phase deliverable checklists, in/out-of-scope decisions, integration scope, acceptance criteria, and phase exit gates.
>
> For **functional requirements (FR-*)** → see `prd.md §2.4`
> For **non-functional requirements** → see `prd.md §2.5`
> For **KPI definitions, targets, and guardrails** → see `kpi.md`
> For **tech stack, team structure, and AI rules** → see `project_boundary.md`

---

## 1. North Star

**Expense Report Cycle Time < 5 business days** (median, submission → reimbursement paid)

→ Full KPI framework: `kpi.md §2`

---

## 2. Stopping Points — Out of Scope

### 2.1 Phase 1 Limitations (MVP — Months 1–3)

| Feature | Reason | Target Phase |
|---|---|---|
| Dynamic multi-level approval chains | Fixed 2-level chain sufficient for MVP | Phase 2 |
| Per-grade and per-destination policies | Category-level limits sufficient | Phase 2 |
| OCR receipt auto-fill on mobile | Requires stable mobile infrastructure first | Phase 2 |
| HRMS real-time API sync | CSV import sufficient; API adds scope risk | Phase 2 |
| Analytics dashboard UI | Raw CSV exports acceptable for Phase 1 Finance | Phase 2 |
| ERP GL export | Requires stable core workflows first | Phase 2 |
| Corporate card reconciliation | Requires bank feed integrations | Phase 3 |
| Per diem auto-calculation | Requires destination rate tables | Phase 2 |
| Approver delegation | Complexity deferred to Phase 2 | Phase 2 |
| Auto-escalation | Requires Phase 2 dynamic approval chains | Phase 2 |

### 2.2 Permanently Out of Scope (All Phases)

| Feature | Reason |
|---|---|
| Payroll processing or salary disbursement | Belongs in ERP/payroll systems; ETEMS produces export files only |
| Direct flight or hotel booking engine | TMC APIs handle booking; ETEMS imports data only |
| Cash advance requests | Not in v1 product scope |
| Multi-language UI | English-only in v1 |
| ERP system replacement | ETEMS is a feeder system; integrates with existing ERPs |

### 2.3 Technical Constraints Affecting Scope

| Constraint | Impact | Mitigation |
|---|---|---|
| OCR accuracy | Handwritten/damaged receipts fail | Manual entry fallback; no OCR in Phase 1 |
| Currency API downtime | Exchange rate unavailable | Use 24-hour-old rate; flag as `RATE_ESTIMATED` |
| Bank feed format variation | Different CSV formats per bank | SAP/Oracle default; custom formats require engagement |
| Mobile offline limitations | Approval actions need connectivity | Phase 1: capture + draft save only |

---

## 3. Phase 1 — MVP (Months 1–3)

### 3.1 Core Module Deliverables

#### Trip Request & Booking
- Create trip request (destination, dates, purpose, estimated budget)
- Policy validation at submission (soft-block with warning)
- In-app + email notification on approval/rejection with approver comments
- Approved trip auto-creates expense report shell pre-populated with trip details
- → FR-TR-01 through FR-TR-06 (`prd.md §2.4`)

#### Expense Submission (Web + Mobile)
- Add line items: category, amount, currency, date, merchant, receipt attachment
- Manual receipt upload (camera or file)
- Policy flag detection with reason code shown inline
- Save as draft; return to complete later
- Submit partially flagged reports (flagged items route for additional review)
- Multi-currency: employee enters local currency; converted using daily rate
- → FR-EX-01, 02, 04, 05, 06, 08 (`prd.md §2.4`)

#### Approval Workflow
- Fixed 2-level approval chain: Manager → Finance
- Approver notification: in-app + email + push
- Actions: approve / reject / send-back with comments (report or line-item level)
- Rejected/sent-back reports return to employee with inline comments
- → FR-AP-01 through FR-AP-04 (`prd.md §2.4`)

#### Policy Engine
- Finance Admin defines category-level limits and receipt thresholds
- Soft-block at submission; hard-block at approval if configured
- Policy versions maintained; changes do not retroactively affect in-flight reports
- Out-of-policy submissions require mandatory employee justification
- → FR-PE-01 through FR-PE-05 (`prd.md §2.4`)

#### Reimbursement & Status
- Finance Admin marks approved reports Processing → Paid with payment reference + date
- Employee notified when reimbursement processed; status visible in-app
- Reimbursement status dashboard
- → FR-RM-01, FR-RM-03 (`prd.md §2.4`)

#### Admin & Configuration
- Org hierarchy upload via CSV
- Configure: expense categories, GL codes, cost centers, base currency
- User role assignment (users may hold multiple roles)
- Full audit log: every state change logged with actor, timestamp, IP
- → FR-AD-01, 02, 04, 05 (`prd.md §2.4`)

### 3.2 Technical Infrastructure (Phase 1)

- REST API — OpenAPI 3.1 documented
- JWT authentication + RBAC
- PostgreSQL / MongoDB data store
- Multi-currency support (daily exchange rates from third-party API)
- Email notification system
- TLS 1.3 encryption in transit; AES-256 at rest
- Audit logging on every state change (7-year retention)

### 3.3 Phase 1 Screen Inventory

**Web Application**
1. Dashboard (Employee, Manager, Finance role views)
2. Trip Request Form
3. Expense Report Form (Create / Edit)
4. Expense Report Detail (Approver review)
5. Approval Queue
6. Policy Configuration (Finance Admin)
7. Organization & User Management (Super Admin)
8. Audit Log (Super Admin — read-only)
9. Reimbursement Status Dashboard

**Mobile Application**
1. Home / My Reports
2. New Expense (manual receipt upload)
3. Trip Request Form
4. Approval Queue (Manager)
5. Notification Center
6. Profile & Settings

### 3.4 Phase 1 Integration Scope

| Integration | Phase 1 Scope |
|---|---|
| Email | ✅ Notifications: trip status, expense status, approval pending |
| CSV Import | ✅ Org hierarchy upload |
| Exchange Rate API | ✅ Daily currency conversion |
| HRMS | ✅ CSV import only (API sync is Phase 2) |
| ERP | ❌ Not in Phase 1 (GL export is Phase 2) |
| TMC | ❌ Not in Phase 1 (booking data import is Phase 2) |
| Bank Feed / Card | ❌ Not in Phase 1 (corporate card match is Phase 3) |

---

## 4. Phase 1 — Acceptance Criteria & Exit Gates

### 4.1 Acceptance Criteria

All items must be verified before Phase 1 go-live:

| Criterion | Validation Method |
|---|---|
| Trip approval notification fires within 30 seconds | Automated test + production monitoring |
| Policy validation runs synchronously before submission | Integration test |
| Approved trip auto-creates expense report shell | E2E test |
| All API endpoints: p99 < 300ms | k6 load test under 500 concurrent users |
| System uptime ≥ 99.9% | 7-day pre-prod load test |
| Mobile crash-free rate ≥ 99.5% | Sentry/Crashlytics — 10K+ sessions |
| Receipt attachment compliance ≥ 98% | Data query on 100 submitted reports (manual audit) |
| Audit log: 100% complete, no gaps > 15 minutes | Spot audit of state change logs |
| No sensitive data (password, token, bank details) in API responses or logs | Security review |
| OAuth/JWT, RBAC, encryption validated | Security team sign-off |
| API docs, runbooks, deployment guide complete | Documentation review |

### 4.2 Phase 1 → Phase 2 Blockers (No-Go Criteria)

Phase 2 does **not** begin if any of the following remain unresolved:

1. **System uptime < 99.9%** — Re-stabilize; root cause fix required
2. **Mobile crash-free rate < 99.5%** — Debug and fix before rolling out to more users
3. **API p99 latency > 300ms** — Optimize queries or caching; re-test
4. **Audit log gaps > 15 minutes** — Investigate data loss; compliance blocker
5. **Any open P0 or P1 bugs** — All critical/high defects must be resolved
6. **Phase 1 in production < 2 weeks** — Minimum stabilization window required

---

## 5. Phase 2 — Core Enterprise (Months 4–6)

**Objective:** Add intelligence, advanced workflows, and Finance tooling.

### 5.1 Phase 2 Additions

| Feature | Activates KPI |
|---|---|
| OCR receipt auto-fill (mobile) | — |
| Dynamic multi-level approval chains (amount thresholds) | E-04 |
| Per-grade and per-destination policies | C-01, C-02 |
| Auto-escalation (48h SLA enforcement) | E-04 |
| Approver delegation (date-range based) | E-03 |
| Per diem auto-calculation (destination + duration) | — |
| Analytics dashboard (Finance + Manager views) | F-01 |
| HRMS API sync | A-01 |
| ERP GL export | F-02 |
| Finance Admin override capability | C-04 |

### 5.2 Phase 2 Entry Criteria

- ✅ Phase 1 in production ≥ 2 weeks with < 5% critical bug rate
- ✅ All Phase 1 no-go blockers resolved
- ✅ MAU baseline established from Phase 1 production data
- ✅ Approver SLA baseline collected

→ KPI targets for Phase 2: `kpi.md §5`

---

## 6. Phase 3 — Integrations & Scale (Months 7–9)

**Objective:** Full ERP integration, corporate card automation, and enterprise scale.

### 6.1 Phase 3 Additions

| Feature | Activates KPI |
|---|---|
| Corporate card transaction import + auto-matching | F-03 |
| ERP batch reimbursement export (improved) | F-02 |
| Scheduled automated report emails (weekly/monthly) | — |
| Audit log UI (searchable, filterable) | — |
| Multi-tenant support | — |
| Performance optimization: ≥ 50K concurrent users | R-01, R-02 |

→ KPI targets for Phase 3: `kpi.md §5`

---

## 7. Roles & Responsibilities (Phase 1)

| Role | Scope Responsibilities |
|---|---|
| **Product Manager** | Owns scope decisions, KPI tracking, phase gate approval |
| **Engineering Lead** | Infrastructure KPIs, NFR compliance (uptime, latency) |
| **Finance Admin** | Policy configuration, reimbursement processing |
| **HR/Ops Admin** | Org hierarchy CSV uploads, user access management |
| **QA Lead** | Acceptance criteria validation, release sign-off checklist |
| **Customer Success** | Phase 1 pilot feedback, adoption support |

→ Full stakeholder list: `prd.md §2.2`
→ Team headcount and structure: `project_boundary.md §8`

---

## Document Cross-References

| Topic | Authoritative Source |
|---|---|
| Functional requirements (FR-*) detail | → `prd.md §2.4` |
| Non-functional requirements | → `prd.md §2.5` |
| API design and contracts | → `prd.md §4` |
| Edge cases and system behaviours | → `prd.md §5` |
| KPI definitions, formulas, guardrails | → `kpi.md` |
| AI collaboration rules, tech stack, team, risks | → `project_boundary.md` |
| User acceptance criteria (module-level AC-*) | → `prd.md §6.1` |
