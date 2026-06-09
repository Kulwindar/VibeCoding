# Product Requirements Document
## Enterprise Employee Travel & Expense Management System (ETEMS)

**Version:** 2.0
**Status:** Draft
**Author:** Product Management
**Last Updated:** 2025-06-09

---

## 1. Problem Statement

### 1.1 Background
Enterprise employees travel and incur business expenses regularly. Today, most organizations handle this through a fragmented mix of email, spreadsheets, and paper receipts — with no unified system connecting booking, submission, approval, and reimbursement.

### 1.2 Pain Points

| Who | Pain Point |
|---|---|
| **Employee** | Manual receipt tracking, no visibility on reimbursement status, policy rules unclear at time of spending |
| **Manager** | Approval requests arrive via email with no context, no consolidated view of team spend |
| **Finance** | 60%+ of reconciliation time is manual, policy violations discovered after the fact, no real-time spend visibility |
| **Organization** | No consolidated analytics, no policy enforcement at point of booking, compliance risk from unaudited spend |

### 1.3 Problem in One Line
Enterprises lack a unified system to manage the full T&E lifecycle — from trip request to reimbursement — resulting in slow processing, policy violations, and manual financial overhead.

### 1.4 Goals
- Reduce expense report cycle time from days to hours
- Enforce travel policies at the point of booking, not after the fact
- Give Finance real-time visibility into committed and actual spend
- Achieve ≥ 90% employee adoption within 6 months of launch

### 1.5 Non-Goals
- Payroll processing or salary disbursement
- ERP replacement (ETEMS integrates with existing ERP systems)
- Direct flight or hotel booking engine (integrates with TMC APIs)

---

## 2. Solution Overview

### 2.1 What We Are Building
ETEMS is a cross-platform (web + mobile) system that manages the full lifecycle of employee travel and expense — trip request, policy validation, expense submission, multi-level approval, and reimbursement — in a single unified platform.

### 2.2 Users & Roles

| Role | Description |
|---|---|
| **Employee (Traveler)** | Submits trip requests, uploads receipts, tracks reimbursement |
| **Manager (Approver)** | Reviews and approves/rejects trip requests and expense reports |
| **Finance Admin** | Configures policies, manages reimbursements, views analytics |
| **HR Admin** | Manages employee hierarchy and delegation rules |
| **Super Admin** | System configuration, integrations, audit access |

### 2.3 Module Overview

```
ETEMS
├── Trip Request & Booking
├── Expense Submission
├── Approval Workflow
├── Policy Engine
├── Reimbursement & Accounting
├── Analytics & Reporting
└── Admin & Configuration
```

### 2.4 Functional Requirements

#### Trip Request & Booking
**FR-TR-01** Employee creates a trip request with destination, dates, purpose, and estimated budget.
**FR-TR-02** System validates the request against the active travel policy before submission.
**FR-TR-03** Employee can attach pre-booked tickets/hotel confirmations or request TMC booking assistance.
**FR-TR-04** Trip request displays estimated cost breakdown: flight, hotel, per diem, miscellaneous.
**FR-TR-05** Employee receives in-app and email notification on approval or rejection with approver comments.
**FR-TR-06** Approved trips auto-create an expense report shell pre-populated with trip details.

#### Expense Submission
**FR-EX-01** Employee adds line items to a trip expense report or creates a standalone non-travel report.
**FR-EX-02** Each line item requires: category, amount, currency, date, merchant, and receipt attachment.
**FR-EX-03** Mobile app supports receipt capture via camera with OCR auto-fill for amount, date, and merchant.
**FR-EX-04** System flags line items that violate policy (over limit, missing receipt, disallowed category) with a reason.
**FR-EX-05** Employee can submit partially flagged reports; flagged items are routed for additional review.
**FR-EX-06** Multi-currency: employee enters in local currency; system converts to base currency using daily exchange rate.
**FR-EX-07** Per diem is auto-calculated based on destination and trip duration from the approved trip request.
**FR-EX-08** Employee can save a draft and return to complete it later.

#### Approval Workflow
**FR-AP-01** Approval chain is driven by org hierarchy (Manager → Dept Head → Finance) based on amount thresholds.
**FR-AP-02** Approver is notified (in-app, email, push) when a report is pending their action.
**FR-AP-03** Approver can approve, reject, or send back with comments at line-item or report level.
**FR-AP-04** Rejected or sent-back reports return to the employee with inline approver comments.
**FR-AP-05** Auto-escalation triggers if an approver does not act within the configured SLA (default: 48 hours).
**FR-AP-06** Approvers can delegate authority for a defined date range (e.g., during leave).
**FR-AP-07** Finance Admin can override and approve/reject any report at any stage with a mandatory audit note.

#### Policy Engine
**FR-PE-01** Finance Admin defines policies per employee grade, department, trip destination, and expense category.
**FR-PE-02** Policy rules include: max amount per category per day, max total per trip, receipt threshold, allowed/blocked categories.
**FR-PE-03** Policies enforced at submission (soft-block with warning) and at approval (hard-block if configured).
**FR-PE-04** Policy versions are maintained with effective dates; changes do not retroactively affect submitted reports.
**FR-PE-05** Out-of-policy submissions require a mandatory justification note from the employee.

#### Reimbursement & Accounting
**FR-RM-01** Finance Admin marks approved reports as "Processing" and "Paid" with payment reference and date.
**FR-RM-02** System generates reimbursement batches (CSV/XLSX) compatible with the configured ERP or payroll system.
**FR-RM-03** Employee is notified when reimbursement is processed and can view payment status in-app.
**FR-RM-04** Corporate card transactions can be imported (bank feed or CSV) and matched to expense line items.
**FR-RM-05** Expense categories map to configurable GL codes exported in the accounting file.

#### Analytics & Reporting
**FR-AN-01** Finance dashboard shows: total spend (MTD/QTD/YTD), spend by department/category, top spenders, policy violation rate.
**FR-AN-02** Manager dashboard shows: pending approvals, team spend summary, reports by stage.
**FR-AN-03** All reports exportable as CSV or PDF.
**FR-AN-04** Finance Admin can schedule automated email delivery of summary reports (weekly/monthly).
**FR-AN-05** Any chart is drillable to the underlying expense line items.

#### Admin & Configuration
**FR-AD-01** Super Admin manages org hierarchy via HRMS API sync or CSV import.
**FR-AD-02** Finance Admin configures expense categories, GL codes, cost centers, and base currency.
**FR-AD-03** Super Admin configures all integrations (HRMS, ERP, TMC, bank feed).
**FR-AD-04** Full audit log: every report state change is logged with actor, timestamp, and IP.
**FR-AD-05** A user can hold multiple roles; role assignment is managed per user.

### 2.5 Non-Functional Requirements

| Category | Requirement |
|---|---|
| **Performance** | API p99 < 300ms; report list load < 1.5s |
| **Availability** | 99.9% uptime (monthly SLA) |
| **Scalability** | Up to 50,000 concurrent users |
| **Security** | JWT auth with refresh rotation; RBAC; AES-256 at rest; TLS 1.3 in transit |
| **Compliance** | GDPR-compliant; audit log retained 7 years |
| **Offline (Mobile)** | Receipt capture and draft saving work offline; sync on reconnect |
| **Accessibility** | WCAG 2.1 AA on web |
| **Localization** | Multi-currency, date format, and timezone from day 1 |

### 2.6 Screens & Pages

**Web**

| Screen | Role |
|---|---|
| Dashboard | Employee, Manager, Finance |
| Trip Request Form | Employee |
| Expense Report (create/edit) | Employee |
| Expense Report Detail (review) | Manager, Finance |
| Approval Queue | Manager, Finance |
| Analytics Dashboard | Finance |
| Policy Configuration | Finance Admin |
| Organization & User Management | Super Admin |
| Audit Log | Super Admin |

**Mobile**

| Screen | Role |
|---|---|
| Home / My Reports | Employee |
| New Expense (receipt capture) | Employee |
| Trip Request | Employee |
| Approval Queue | Manager |
| Notification Center | All |
| Profile & Settings | All |

### 2.7 Notifications

| Event | In-App | Email | Push |
|---|---|---|---|
| Trip request submitted | ✅ Approver | ✅ Approver | ✅ Approver |
| Trip approved / rejected | ✅ Employee | ✅ Employee | ✅ Employee |
| Expense report submitted | ✅ Approver | ✅ Approver | ✅ Approver |
| Expense approved / rejected | ✅ Employee | ✅ Employee | ✅ Employee |
| Approval SLA breached | ✅ Manager | ✅ Manager | — |
| Reimbursement processed | ✅ Employee | ✅ Employee | ✅ Employee |
| Policy violation flagged | ✅ Employee | — | — |

### 2.8 Milestones & Phasing

**Phase 1 — MVP (Month 1–3)**
- Trip request, expense submission, receipt upload (web + mobile)
- 2-level approval workflow (Manager → Finance)
- Basic policy engine (category limits, receipt threshold)
- Reimbursement tracking and CSV export
- Email notifications

**Phase 2 — Core Enterprise (Month 4–6)**
- OCR receipt auto-fill (mobile)
- Multi-level dynamic approval chains
- Advanced policy engine (per grade, per destination)
- HRMS sync, analytics dashboard, per diem auto-calculation
- Delegation and auto-escalation

**Phase 3 — Integrations & Scale (Month 7–9)**
- ERP integration (GL export, reimbursement batch)
- TMC API integration, corporate card reconciliation
- Audit log UI, scheduled report emails
- Multi-tenant / multi-entity support

---

## 3. User Flows

### 3.1 Core Flow — Employee Submits Trip & Gets Reimbursed

```
Employee                  System                    Manager          Finance
   │                         │                          │                │
   │── Create Trip Request ──▶│                          │                │
   │                         │── Policy Check           │                │
   │◀── Validation Result ───│                          │                │
   │── Submit Request ───────▶│── Notify Approver ──────▶│                │
   │                         │                          │── Review       │
   │◀── Approved Notif. ─────│◀─────────────────────────│                │
   │── Upload Receipts        │                          │                │
   │── Submit Expense Report ▶│── Notify Approver ──────▶│                │
   │                         │                          │── Approve      │
   │                         │◀─────────────────────────│                │
   │                         │── Route to Finance ──────────────────────▶│
   │                         │                          │                │── Mark Paid
   │◀── Reimbursement Notif. ─│◀────────────────────────────────────────│
```

### 3.2 Policy Violation Flow

```
Employee submits line item
  → System checks against active policy
  → Violation detected (over limit / missing receipt / blocked category)
  → Line item flagged with reason code
  → Employee adds mandatory justification note
  → Report submitted with flagged items marked
  → Additional approval step inserted into chain
  → Finance reviews each flagged item individually
  → Approved with justification or rejected with comment
```

### 3.3 Approver Delegation Flow

```
Approver sets delegation (date range + delegate user)
  → System records delegation with effective dates
  → Report arrives during delegation period
  → Notification routed to delegate
  → Delegate approves/rejects — audit log records both delegator and delegate
  → Delegation expires → approvals route back to original approver
```

### 3.4 Auto-Escalation Flow

```
Report submitted → Approver notified
  → 36 hours: reminder notification sent
  → 48 hours: no action taken
  → System auto-escalates to approver's manager
  → Escalation logged in audit trail
  → Both approver and escalation target notified
```

---

## 4. API Design

> Full OpenAPI 3.1 spec is maintained in `packages/api-spec/openapi.yaml`. This section defines the contract surface — resource groups, key endpoints, request/response shapes, and auth requirements.

### 4.1 Auth

All endpoints require `Authorization: Bearer <accessToken>` unless marked public.

| Endpoint | Method | Description |
|---|---|---|
| `/api/v1/auth/login` | POST | Email + password → access token + refresh token |
| `/api/v1/auth/refresh` | POST | Refresh token → new access token |
| `/api/v1/auth/logout` | POST | Invalidate refresh token |

**Request — Login**
```json
{ "email": "user@company.com", "password": "string" }
```
**Response — 200**
```json
{
  "accessToken": "eyJ...",
  "expiresIn": 900,
  "user": { "id": "string", "name": "string", "role": ["employee"] }
}
```

---

### 4.2 Trip Requests

| Endpoint | Method | Role | Description |
|---|---|---|---|
| `/api/v1/trips` | POST | Employee | Create trip request |
| `/api/v1/trips` | GET | Employee, Manager | List trips (paginated, filterable) |
| `/api/v1/trips/:tripId` | GET | Employee, Manager, Finance | Get trip detail |
| `/api/v1/trips/:tripId` | PATCH | Employee | Update draft trip |
| `/api/v1/trips/:tripId/submit` | POST | Employee | Submit trip for approval |
| `/api/v1/trips/:tripId/approve` | POST | Manager | Approve trip request |
| `/api/v1/trips/:tripId/reject` | POST | Manager | Reject trip with comment |

**Request — Create Trip**
```json
{
  "destination": "Mumbai, India",
  "startDate": "2025-07-10",
  "endDate": "2025-07-13",
  "purpose": "Client meeting — Acme Corp",
  "estimatedBudget": { "amount": 45000, "currency": "INR" }
}
```
**Response — 201**
```json
{
  "tripId": "trip_abc123",
  "status": "draft",
  "policyStatus": "ok",
  "estimatedBreakdown": {
    "flight": 18000, "hotel": 20000, "perDiem": 4800, "misc": 2200
  },
  "createdAt": "2025-06-09T10:00:00Z"
}
```

---

### 4.3 Expense Reports

| Endpoint | Method | Role | Description |
|---|---|---|---|
| `/api/v1/reports` | POST | Employee | Create expense report |
| `/api/v1/reports` | GET | Employee, Manager, Finance | List reports (paginated) |
| `/api/v1/reports/:reportId` | GET | All roles | Get report detail |
| `/api/v1/reports/:reportId/submit` | POST | Employee | Submit report for approval |
| `/api/v1/reports/:reportId/approve` | POST | Manager, Finance | Approve report |
| `/api/v1/reports/:reportId/reject` | POST | Manager, Finance | Reject with comment |
| `/api/v1/reports/:reportId/send-back` | POST | Manager, Finance | Return to employee with comments |

**Request — Create Report**
```json
{
  "tripId": "trip_abc123",
  "title": "Mumbai Client Visit – Jul 2025"
}
```

---

### 4.4 Expense Line Items

| Endpoint | Method | Role | Description |
|---|---|---|---|
| `/api/v1/reports/:reportId/items` | POST | Employee | Add line item |
| `/api/v1/reports/:reportId/items` | GET | All roles | List line items |
| `/api/v1/reports/:reportId/items/:itemId` | PATCH | Employee | Update line item |
| `/api/v1/reports/:reportId/items/:itemId` | DELETE | Employee | Remove line item |
| `/api/v1/receipts/upload` | POST | Employee | Upload receipt → returns `receiptUrl` |

**Request — Add Line Item**
```json
{
  "category": "MEALS",
  "amount": 1200,
  "currency": "INR",
  "date": "2025-07-10",
  "merchant": "The Bombay Canteen",
  "receiptUrl": "https://storage.etems.io/receipts/rec_xyz.jpg",
  "justification": null
}
```
**Response — 201**
```json
{
  "itemId": "item_def456",
  "policyStatus": "flagged",
  "flagReason": "EXCEEDS_DAILY_MEAL_LIMIT",
  "convertedAmount": { "amount": 1200, "baseCurrency": "INR" }
}
```

---

### 4.5 Approval Actions

| Endpoint | Method | Role | Description |
|---|---|---|---|
| `/api/v1/approvals/queue` | GET | Manager, Finance | Pending approvals for current user |
| `/api/v1/approvals/delegate` | POST | Manager | Set approval delegation |
| `/api/v1/approvals/delegate` | DELETE | Manager | Remove delegation |

---

### 4.6 Analytics

| Endpoint | Method | Role | Description |
|---|---|---|---|
| `/api/v1/analytics/spend-summary` | GET | Finance | MTD/QTD/YTD spend by department and category |
| `/api/v1/analytics/violations` | GET | Finance | Policy violation rate and top categories |
| `/api/v1/analytics/reports/export` | POST | Finance | Trigger CSV or PDF report export |

---

### 4.7 Standard Response Conventions

**Success envelope**
```json
{
  "data": {},
  "meta": { "requestId": "req_abc", "timestamp": "2025-06-09T10:00:00Z" }
}
```

**Paginated list**
```json
{
  "data": [],
  "pagination": { "nextCursor": "string", "hasMore": true, "total": 342 },
  "meta": { "requestId": "req_abc", "timestamp": "2025-06-09T10:00:00Z" }
}
```

**Error envelope**
```json
{
  "error": {
    "code": "POLICY_VIOLATION",
    "message": "Meal expense exceeds daily limit of ₹800",
    "details": [{ "field": "amount", "message": "Exceeds limit by ₹400" }],
    "requestId": "req_abc",
    "timestamp": "2025-06-09T10:00:00Z"
  }
}
```

**HTTP status code conventions**

| Code | When |
|---|---|
| 200 | Successful GET / PATCH |
| 201 | Successful POST (resource created) |
| 400 | Validation error |
| 401 | Missing or expired token |
| 403 | Authenticated but insufficient role |
| 404 | Resource not found |
| 409 | Conflict (e.g., report already submitted) |
| 422 | Business rule violation (e.g., policy hard-block) |
| 500 | Unexpected server error |

---

## 5. Edge Cases

### 5.1 Trip Request
| # | Scenario | System Behaviour |
|---|---|---|
| T-01 | Employee submits trip with dates in the past | Block with validation error: `INVALID_TRIP_DATES` |
| T-02 | Trip destination matches a policy-blocked region | Soft-block with warning; employee must add justification to proceed |
| T-03 | Approver is the same person as the employee (self-approval) | System auto-escalates to approver's manager |
| T-04 | Trip approved but employee never submits an expense report | Report shell expires after 90 days; Finance Admin notified |
| T-05 | Estimated budget exceeds policy max for the employee's grade | Warning shown inline; approval chain adds Finance review step |

### 5.2 Expense Submission
| # | Scenario | System Behaviour |
|---|---|---|
| E-01 | Receipt image is unreadable / OCR fails | OCR fields left blank; employee fills manually; no block on submission |
| E-02 | Same receipt uploaded to two different line items | System detects duplicate hash; warns employee before save |
| E-03 | Employee submits a report with all items flagged | Allowed; entire report routes through Finance with a flag banner |
| E-04 | Currency conversion API is unavailable at submission time | Last successful rate (≤ 24h old) used; line item tagged `RATE_ESTIMATED`; Finance notified |
| E-05 | Employee edits a line item after report is submitted | Blocked; employee must request send-back from approver first |
| E-06 | Report submitted with zero line items | Blocked with validation error: `EMPTY_REPORT` |

### 5.3 Approval Workflow
| # | Scenario | System Behaviour |
|---|---|---|
| A-01 | Approver is on leave with no delegation set | System escalates to approver's manager after 48h SLA |
| A-02 | Delegate tries to approve a report belonging to the delegator's own team | Allowed; audit log records both delegator and delegate identities |
| A-03 | Approver rejects a report that has already been paid (race condition) | Rejection blocked; report state is immutable once marked Paid |
| A-04 | Multi-level approval: level-2 approver approves before level-1 acts | Not possible; approval chain is strictly sequential; level-2 notified only after level-1 approves |
| A-05 | Finance Admin overrides an approval mid-chain | Override recorded in audit log with mandatory note; remaining approval steps skipped |

### 5.4 Policy Engine
| # | Scenario | System Behaviour |
|---|---|---|
| P-01 | Policy is updated while a report is under review | Report continues under the policy version active at submission time |
| P-02 | Employee's grade changes after trip is approved but before expense submission | Expense submission validated against the new grade's policy |
| P-03 | Two policies match the same employee (grade + department overlap) | Most restrictive rule wins; Finance Admin is alerted about the conflict |
| P-04 | Policy hard-block is triggered at approval stage | Report returned to employee automatically with the specific rule cited |

### 5.5 Reimbursement & Integrations
| # | Scenario | System Behaviour |
|---|---|---|
| R-01 | ERP export fails mid-batch | Failed records logged; Finance notified; successful records committed; retry available |
| R-02 | Corporate card import contains a transaction already matched | Duplicate flagged; existing match preserved; Finance must manually resolve |
| R-03 | Employee's bank account details are missing at time of reimbursement | Report held in "Processing" state; HR Admin notified to collect bank details |
| R-04 | HRMS sync removes an employee who has a pending expense report | Report preserved; employee marked inactive; Finance Admin notified to process |
| R-05 | Report approved but ERP GL code for the category is unmapped | Export blocked for that report; Finance Admin notified to complete GL mapping |

---

## 6. Success Metrics & Acceptance Criteria

> KPI definitions, formulas, guardrail metrics, leading indicators, and phase-by-phase targets are maintained exclusively in → **`kpi.md`**.
> Phase deliverable checklists and go/no-go gate criteria are maintained in → **`project_scope.md` §7–9**.

### 6.1 Acceptance Criteria by Module

These acceptance criteria define testable pass/fail conditions for each module. For metric targets, see `kpi.md`.

**Trip Request**
- AC-TR-01: A submitted trip request triggers approver notification within 30 seconds.
- AC-TR-02: Policy validation runs synchronously and returns a result before the employee can submit.
- AC-TR-03: Approved trip auto-creates an expense report shell with trip metadata pre-filled.

**Expense Submission**
- AC-EX-01: OCR auto-fill populates amount, date, and merchant with ≥ 85% accuracy on clear receipts.
- AC-EX-02: Currency conversion applies within 500ms of amount entry using the latest available rate.
- AC-EX-03: A flagged line item shows the violated policy rule name and the allowed limit inline.

**Approval Workflow**
- AC-AP-01: Auto-escalation triggers at exactly 48 hours with no manual intervention required.
- AC-AP-02: Delegation activates and deactivates at the configured start/end dates without manual toggling.
- AC-AP-03: Every approval action (approve/reject/send-back/override) appears in the audit log within 5 seconds.

**Reimbursement**
- AC-RM-01: Reimbursement batch export generates a valid, ERP-importable file for all approved reports in the selected date range.
- AC-RM-02: Employee receives a reimbursement notification within 60 seconds of Finance marking the report Paid.

**System**
- AC-SY-01: All API endpoints meet p99 < 300ms under normal load.
- AC-SY-02: The system remains available at ≥ 99.9% uptime per calendar month.
- AC-SY-03: No sensitive field (password, token, bank details) is returned in any API response or written to application logs.

---

## 7. Limitations

### 7.1 Phase 1 Limitations (MVP — Month 1–3)
- Approval chain is fixed at 2 levels (Manager → Finance); dynamic multi-level chains are Phase 2.
- Policy engine supports only category-level limits; per-grade and per-destination rules are Phase 2.
- No OCR on mobile; employees fill receipt details manually in Phase 1.
- HRMS integration is CSV import only; real-time API sync is Phase 2.
- Analytics dashboard is not available; Finance uses raw CSV exports in Phase 1.

### 7.2 Functional Limitations (All Phases)
- ETEMS does not process payroll or initiate bank transfers; it produces reimbursement files consumed by external ERP/payroll systems.
- Cash advance requests are not supported in v1.
- Direct flight or hotel booking is not available; ETEMS imports booking data from TMC but does not book travel.
- Mobile offline mode supports receipt capture and draft saving only; approval actions require connectivity.
- Multi-language UI is not supported in v1; English only.

### 7.3 Technical Constraints
- Corporate card reconciliation requires the bank or card provider to support CSV export or a compatible API feed; direct bank integrations vary by provider and may require additional setup time.
- ERP integration file format (CSV/XLSX) is compatible with SAP and Oracle by default; custom ERP formats require a configuration engagement.
- OCR accuracy is dependent on receipt image quality; handwritten or heavily damaged receipts require manual entry.
- Currency conversion rates are sourced from a third-party exchange rate API; a maximum 24-hour stale rate is used as a fallback during outages (line items tagged `RATE_ESTIMATED`).

### 7.4 Compliance Scope
- GDPR compliance covers EU employee data only in v1; additional regional compliance frameworks (CCPA, PDPA) are post-launch.
- Audit log retention is 7 years per policy; actual purge jobs are the responsibility of the Super Admin per their organization's data retention policy.

---

## Document Cross-References

| Topic | Authoritative Source |
|---|---|
| KPI definitions, targets, guardrails, formulas | → `kpi.md` |
| Phase deliverables, in/out-of-scope checklist, exit gates | → `project_scope.md` |
| AI collaboration rules, tech stack, team structure, folder layout, risks | → `project_boundary.md` |
| Developer engineering standards | → `Personas/` (engineer personas) |
| User role needs & goals | → `Personas/` (user personas) |
