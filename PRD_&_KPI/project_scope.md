# Project Scope Document
## Enterprise Employee Travel & Expense Management System (ETEMS)

**Version:** 1.0
**Status:** Active
**Date:** 2025-06-09
**Reference Documents:** `prd.md` v2.0, `kpi.md` v2.0

---

## 1. Executive Summary

ETEMS is a cross-platform (web + mobile) system that manages the full lifecycle of employee travel and expense management — from trip request through reimbursement. This document defines the project scope, success metrics (KPIs), technical requirements, and explicit stopping points for controlled, phased delivery.

---

## 2. Project Vision & North Star Metric

### 2.1 Primary Objective
Enable enterprises to reduce expense report cycle time from days to hours while enforcing travel policies at the point of booking and providing Finance real-time spend visibility.

### 2.2 North Star Metric
**Expense Report Cycle Time** (submission → reimbursement paid)
- **Target:** < 5 business days (median)
- **Baseline:** Unknown (enterprise baseline ~ 7–14 days)
- **Measurement:** Monthly; tracks adoption, workflow efficiency, and finance ops throughput

---

## 3. KPI Framework & Constraints

### 3.1 Strategic Pillars & KPIs

#### **Pillar 1: Adoption & Engagement**
| KPI | Target | Phase | Constraint |
|---|---|---|---|
| MAU (Monthly Active Users) | ≥ 90% eligible employees | Phase 2 | Requires Phase 1 MVP feedback |
| Mobile Adoption Rate | ≥ 50% | Phase 2 | Requires Phase 1 mobile stability |
| Report Submission Rate | ≥ 95% of approved trips | Phase 1 | User must approve trips first |
| Draft Abandonment Rate | ≤ 10% | Phase 2 | Tracks UX friction; Phase 1 may have higher rate |

#### **Pillar 2: Process Efficiency**
| KPI | Target | Phase | Constraint |
|---|---|---|---|
| Report Cycle Time (Median) | < 5 days | Phase 1 | Baseline required at launch |
| Approval Response Time | < 24 hours | Phase 1 | Dependent on user notifications |
| Approver SLA Compliance | ≥ 85% | Phase 1 | 48-hour SLA for escalation |
| Auto-Escalation Rate | ≤ 5% | Phase 2 | Requires auto-escalation logic |
| Resubmission Rate | ≤ 15% | Phase 2 | Soft-block warnings reduce this |

#### **Pillar 3: Policy Compliance**
| KPI | Target | Phase | Constraint |
|---|---|---|---|
| Policy Violation Rate | ≤ 10% | Phase 2 | Requires advanced policy engine |
| Out-of-Policy Approval Rate | ≤ 20% | Phase 2 | Finance review required |
| Receipt Attachment Rate | ≥ 98% | Phase 1 | Blocking requirement in Phase 1 |
| Policy Override Rate | ≤ 3% | Phase 2 | Finance Admin override tracking |

#### **Pillar 4: Financial Control**
| KPI | Target | Phase | Constraint |
|---|---|---|---|
| Reconciliation Time Reduction | ≥ 50% vs. baseline | Phase 2 | Requires Finance process baseline |
| Reimbursement Processing Time | ≤ 2 days | Phase 2 | Post-Phase 1 optimization |
| Corporate Card Match Rate | ≥ 85% | Phase 3 | Requires bank feed integration |
| ERP Export Error Rate | ≤ 1% | Phase 3 | Post-Phase 2 integration |
| Spend Captured in System | ≥ 95% | Phase 3 | Full rollout required |

#### **Pillar 5: System Reliability**
| KPI | Target | Phase | Constraint |
|---|---|---|---|
| System Uptime | ≥ 99.9% | Phase 1 | Monthly SLA metric |
| API p99 Latency | < 300ms | Phase 1 | All endpoints must meet this |
| Mobile Crash-Free Session Rate | ≥ 99.5% | Phase 1 | Blocks Phase 2 launch |
| App Store Rating | ≥ 4.5 | Phase 2 | Post-Phase 1 stabilization |
| Support Ticket Rate | ≤ 2% of MAU | Phase 2 | Phase 1 may exceed this |

### 3.2 Guardrail Metrics (Hard Limits)

| Guardrail | Threshold | Action on Breach |
|---|---|---|
| **Unplanned Downtime** | > 1 hour per month | P0 incident; engineering on-call |
| **Security / Data Breach** | Any unauthorised access | Immediate CISO + legal escalation |
| **Audit Log Gap** | Missing > 15 min of entries | P1 incident; data integrity review |
| **Reimbursement Delay** | > 50 reports unpaid beyond 5 days | Finance process review |
| **MAU Drop** | > 20% month-over-month | Product + CS review within 48h |

---

## 4. Functional Requirements

### 4.1 Trip Request & Booking

| ID | Requirement | Phase | Priority |
|---|---|---|---|
| **FR-TR-01** | Employee creates trip with destination, dates, purpose, budget | Phase 1 | P0 |
| **FR-TR-02** | System validates against active travel policy before submission | Phase 1 | P0 |
| **FR-TR-03** | Employee can attach pre-booked confirmations or request TMC assistance | Phase 2 | P1 |
| **FR-TR-04** | Trip displays cost breakdown (flight, hotel, per diem, misc) | Phase 1 | P1 |
| **FR-TR-05** | Employee notified (in-app, email) of approval/rejection with comments | Phase 1 | P0 |
| **FR-TR-06** | Approved trip auto-creates expense report shell with pre-filled metadata | Phase 1 | P0 |

### 4.2 Expense Submission

| ID | Requirement | Phase | Priority |
|---|---|---|---|
| **FR-EX-01** | Employee adds line items (category, amount, currency, date, merchant, receipt) | Phase 1 | P0 |
| **FR-EX-02** | Each line item requires receipt attachment OR category exception | Phase 1 | P0 |
| **FR-EX-03** | Mobile: receipt capture via camera with OCR auto-fill | Phase 2 | P1 |
| **FR-EX-04** | System flags policy-violating items with reason code | Phase 1 | P0 |
| **FR-EX-05** | Employee can submit flagged reports; flagged items get additional review | Phase 1 | P0 |
| **FR-EX-06** | Multi-currency: convert to base currency using daily exchange rate | Phase 1 | P1 |
| **FR-EX-07** | Per diem auto-calculated from approved trip dates and destination | Phase 2 | P1 |
| **FR-EX-08** | Employee can save draft and return later | Phase 1 | P0 |

### 4.3 Approval Workflow

| ID | Requirement | Phase | Priority |
|---|---|---|---|
| **FR-AP-01** | Fixed 2-level approval chain (Manager → Finance) in Phase 1 | Phase 1 | P0 |
| **FR-AP-02** | Approver notified (in-app, email, push) when report pending | Phase 1 | P0 |
| **FR-AP-03** | Approver can approve, reject, or send-back with comments | Phase 1 | P0 |
| **FR-AP-04** | Rejected/sent-back reports return to employee with inline comments | Phase 1 | P0 |
| **FR-AP-05** | Auto-escalation if no action within 48h SLA | Phase 2 | P1 |
| **FR-AP-06** | Approvers can delegate authority for date range | Phase 2 | P1 |
| **FR-AP-07** | Finance Admin can override approval with mandatory audit note | Phase 2 | P1 |

### 4.4 Policy Engine

| ID | Requirement | Phase | Priority |
|---|---|---|---|
| **FR-PE-01** | Finance Admin defines policies with category limits and receipt thresholds | Phase 1 | P0 |
| **FR-PE-02** | Policy rules: max amount/category/day, max total/trip, receipt requirement, blocked categories | Phase 1 | P0 |
| **FR-PE-03** | Policies enforced at submission (soft-block) and approval (hard-block) | Phase 1 | P0 |
| **FR-PE-04** | Policy versions maintained; changes do not retroactively affect submitted reports | Phase 1 | P0 |
| **FR-PE-05** | Out-of-policy submissions require mandatory employee justification | Phase 1 | P1 |

### 4.5 Reimbursement & Accounting

| ID | Requirement | Phase | Priority |
|---|---|---|---|
| **FR-RM-01** | Finance Admin marks approved reports as Processing → Paid with payment reference | Phase 1 | P0 |
| **FR-RM-02** | System generates reimbursement batches (CSV/XLSX) for ERP import | Phase 2 | P1 |
| **FR-RM-03** | Employee notified when reimbursement processed; status visible in-app | Phase 1 | P0 |
| **FR-RM-04** | Corporate card transactions imported (bank CSV/API) and matched to line items | Phase 3 | P2 |
| **FR-RM-05** | Expense categories map to GL codes; GL export file generated | Phase 2 | P1 |

### 4.6 Analytics & Reporting

| ID | Requirement | Phase | Priority |
|---|---|---|---|
| **FR-AN-01** | Finance dashboard: MTD/QTD/YTD spend by dept/category, top spenders, violation rate | Phase 2 | P1 |
| **FR-AN-02** | Manager dashboard: pending approvals, team spend summary, report stages | Phase 2 | P1 |
| **FR-AN-03** | All reports exportable as CSV or PDF | Phase 2 | P1 |
| **FR-AN-04** | Scheduled automated email delivery of summary reports (weekly/monthly) | Phase 3 | P2 |
| **FR-AN-05** | Charts are drillable to underlying expense line items | Phase 2 | P1 |

### 4.7 Admin & Configuration

| ID | Requirement | Phase | Priority |
|---|---|---|---|
| **FR-AD-01** | Super Admin manages org hierarchy via CSV import (HRMS API sync is Phase 2) | Phase 1 | P0 |
| **FR-AD-02** | Finance Admin configures: categories, GL codes, cost centers, base currency | Phase 1 | P0 |
| **FR-AD-03** | Super Admin configures all integrations (HRMS, ERP, TMC, bank feed) | Phase 2+ | P1 |
| **FR-AD-04** | Full audit log: every state change logged with actor, timestamp, IP | Phase 1 | P0 |
| **FR-AD-05** | User role management: users can hold multiple roles | Phase 1 | P0 |

---

## 5. Non-Functional Requirements

| Category | Requirement | Target | Phase |
|---|---|---|---|
| **Performance** | API p99 latency | < 300ms | Phase 1 |
| **Performance** | Report list load time | < 1.5 seconds | Phase 1 |
| **Availability** | System uptime (monthly SLA) | ≥ 99.9% | Phase 1 |
| **Scalability** | Concurrent users | ≥ 50,000 | Phase 3 |
| **Security** | Authentication | JWT with refresh rotation | Phase 1 |
| **Security** | Authorization | RBAC per role | Phase 1 |
| **Security** | Data encryption at rest | AES-256 | Phase 1 |
| **Security** | Data encryption in transit | TLS 1.3 | Phase 1 |
| **Compliance** | GDPR compliance | EU employee data protected | Phase 1 |
| **Compliance** | Audit log retention | 7 years | Phase 1 |
| **Mobile Reliability** | Crash-free session rate | ≥ 99.5% | Phase 1 |
| **Mobile Offline** | Offline functionality | Receipt capture + draft save | Phase 1 |
| **Web Accessibility** | WCAG standard | WCAG 2.1 AA | Phase 2 |
| **Localization** | Multi-currency support | From day 1 | Phase 1 |
| **Localization** | Timezone support | From day 1 | Phase 1 |

---

## 6. Stopping Points (Out of Scope)

### 6.1 Phase 1 Limitations (MVP — Months 1–3)

| Feature | Reason | Target Phase |
|---|---|---|
| Dynamic multi-level approval chains | Complexity; fixed 2-level chain sufficient for MVP | Phase 2 |
| Per-grade and per-destination policies | Category-level limits sufficient for MVP | Phase 2 |
| OCR on mobile | Requires stable mobile infrastructure first | Phase 2 |
| HRMS real-time API sync | CSV import sufficient; API integration adds complexity | Phase 2 |
| Analytics dashboard UI | Raw CSV exports acceptable for Phase 1 Finance | Phase 2 |
| ERP integration (GL export) | Requires stable core workflows first | Phase 2 |
| Corporate card reconciliation | Requires bank integrations; post-MVP priority | Phase 3 |

### 6.2 Permanent Out of Scope (All Phases)

| Feature | Reason | Impact |
|---|---|---|
| **Payroll processing** | Not expense management; belongs in separate system | ETEMS produces files for ERP/payroll |
| **Salary disbursement** | Financial transfer not in scope | ERP system owns payment execution |
| **Direct flight/hotel booking** | TMC APIs provide booking; ETEMS does not book | ETEMS imports booking data only |
| **Cash advance requests** | Not in v1 product scope | Tracked as future enhancement |
| **Multi-language UI** | English-only in v1 | Localization scoped for v2 |
| **ERP replacement** | ETEMS is a standalone feeder system | Integrates with existing ERPs |

### 6.3 Technical Constraints (Affecting Scope)

| Constraint | Impact | Mitigation |
|---|---|---|
| **OCR accuracy** | Handwritten/damaged receipts fail OCR | Manual entry fallback; Phase 1 has no OCR |
| **Currency API downtime** | Exchange rate unavailable at submission | Use 24-hour-old rate; flag line item as `RATE_ESTIMATED` |
| **Bank feed format variation** | Different banks have different CSV formats | Support SAP/Oracle formats; custom formats require engagement |
| **Mobile offline limitations** | Approval actions require connectivity | Phase 1 supports capture + draft save only |

---

## 7. In-Scope Development (Phase 1 MVP)

### 7.1 Phase 1 Deliverables (Months 1–3)

#### **Core Modules**
1. **Trip Request & Booking**
   - Create trip request (destination, dates, purpose, budget)
   - Policy validation (soft-block with warning)
   - In-app + email notifications
   - Auto-create expense report shell

2. **Expense Submission (Web + Mobile)**
   - Add line items (category, amount, merchant, date, receipt)
   - Manual receipt upload
   - Policy flag detection
   - Save as draft
   - Submit for approval

3. **Approval Workflow**
   - Fixed 2-level approval chain (Manager → Finance)
   - Approver queue
   - Approve / Reject / Send-back actions
   - Email + in-app notifications

4. **Policy Engine**
   - Category-level limits and receipt thresholds
   - Soft-block at submission; hard-block at approval
   - Flagged item detection and reporting

5. **Reimbursement**
   - Mark approved reports as Processing / Paid
   - Payment reference tracking
   - Employee reimbursement notifications
   - Status dashboard

6. **Admin & Configuration**
   - Org hierarchy CSV import
   - Category, GL code, cost center setup
   - Base currency configuration
   - User role assignment
   - Audit log (read-only UI)

#### **Technical Infrastructure**
- REST API (OpenAPI 3.1 documented)
- JWT authentication + RBAC
- PostgreSQL / MongoDB data store
- Multi-currency support (daily exchange rates)
- Email notification system
- TLS 1.3 encryption in transit
- AES-256 encryption at rest
- Audit logging on every state change

#### **Acceptance Criteria (Phase 1)**
- ✅ Trip request approval triggers notification within 30 seconds
- ✅ Policy validation runs synchronously before submission
- ✅ Approved trip auto-creates expense report shell
- ✅ All API endpoints meet p99 < 300ms
- ✅ System uptime ≥ 99.9% monthly
- ✅ Mobile crash-free rate ≥ 99.5%
- ✅ Receipt attachment rate ≥ 98%
- ✅ No sensitive data in API responses or logs

---

### 7.2 Phase 1 Screen List

#### **Web Application**
1. Dashboard (Employee, Manager, Finance view)
2. Trip Request Form
3. Expense Report Form (Create / Edit)
4. Expense Report Detail (Review)
5. Approval Queue
6. Policy Configuration (Finance Admin)
7. Organization & User Management (Super Admin)
8. Audit Log (Super Admin, read-only)
9. Reimbursement Status Dashboard

#### **Mobile Application**
1. Home / My Reports
2. New Expense (manual receipt upload)
3. Trip Request Form
4. Approval Queue
5. Notification Center
6. Profile & Settings

---

### 7.3 Phase 1 Integrations

| Integration | Scope | Phase |
|---|---|---|
| **Email** | Notifications (trip status, expense status, approval pending) | Phase 1 |
| **CSV Import** | Org hierarchy upload | Phase 1 |
| **Exchange Rate API** | Daily currency conversion | Phase 1 |
| **HRMS** | CSV import only (API sync is Phase 2) | Phase 1 |
| **ERP** | None in Phase 1 (GL export is Phase 2) | Phase 2 |
| **TMC** | None in Phase 1 (booking data import is Phase 2) | Phase 2 |
| **Bank Feed** | None in Phase 1 (corporate card match is Phase 3) | Phase 3 |

---

## 8. Phase Breakdown

### 8.1 Phase 1 — MVP (Months 1–3)
**Objectives:** Core T&E lifecycle, 2-level approvals, basic policy enforcement, email notifications.

**Fixed-scope checklist:**
- ✅ Trip request + expense submission
- ✅ 2-level approval workflow
- ✅ Basic policy engine (categories, amounts, receipt thresholds)
- ✅ Reimbursement status tracking
- ✅ CSV org hierarchy import
- ✅ Full audit logging
- ✅ Email notifications
- ✅ REST API with RBAC
- ✅ 99.9% uptime SLA
- ✅ p99 < 300ms API latency

**Not included:**
- ❌ OCR receipt auto-fill
- ❌ Multi-level dynamic approval chains
- ❌ Advanced policies (per-grade, per-destination)
- ❌ Analytics dashboard
- ❌ ERP GL export
- ❌ Corporate card reconciliation
- ❌ HRMS API sync

---

### 8.2 Phase 2 — Core Enterprise (Months 4–6)
**Objectives:** OCR, advanced policies, multi-level approvals, analytics, HRMS sync.

**Additions:**
- ✅ OCR receipt auto-fill (mobile)
- ✅ Dynamic approval chains (amount thresholds)
- ✅ Per-grade and per-destination policies
- ✅ Auto-escalation (48h SLA)
- ✅ Approver delegation
- ✅ Per diem auto-calculation
- ✅ Analytics dashboard (Finance + Manager views)
- ✅ HRMS API sync
- ✅ ERP GL export
- ✅ Finance Admin override capability

---

### 8.3 Phase 3 — Integrations & Scale (Months 7–9)
**Objectives:** Full ERP integration, corporate card reconciliation, scheduled reporting.

**Additions:**
- ✅ Corporate card transaction import + auto-matching
- ✅ ERP batch reimbursement export
- ✅ Scheduled automated report emails
- ✅ Audit log UI
- ✅ Multi-tenant support
- ✅ 50K+ concurrent user scaling

---

## 9. Success Criteria & Exit Metrics (Phase 1)

### 9.1 Product Metrics to Verify at Phase 1 Completion

| Metric | Target | Validation |
|---|---|---|
| System uptime | ≥ 99.9% | 30-day monitoring post-launch |
| API p99 latency | < 300ms | Load test results + production monitoring |
| Mobile crash-free rate | ≥ 99.5% | Crash reporting service (Sentry/Crashlytics) |
| Trip approval notification latency | < 30 seconds | Automated test + production monitoring |
| Report cycle time (median) | Baseline established | 4-week production data |
| Approver response time (median) | < 24 hours | User behavior analytics |
| Receipt attachment compliance | ≥ 98% | Data query on submitted reports |
| Audit log completeness | 100% of actions logged | Spot audit of state change logs |

### 9.2 No Go-To-Phase-2 Criteria (Blockers)

If any blocker is unresolved, Phase 2 does not begin:
1. **System uptime < 99.9%** — Re-stabilize in Phase 1
2. **Mobile crash-free rate < 99.5%** — Debug and fix crashes before rollout
3. **API p99 latency > 300ms** — Optimize database queries or caching
4. **Audit log has gaps > 15 minutes** — Investigate data loss; cannot proceed

---

## 10. Roles & Responsibilities (Phase 1)

| Role | Responsibilities |
|---|---|
| **Product Manager** | Drive adoption, track KPIs (A-01, E-01, C-03, R-04) |
| **Engineering Lead** | Ensure infrastructure KPIs (R-01, R-02, R-03) |
| **Finance Admin** | Configure policies, oversee reimbursement process |
| **HR/Ops Admin** | Org hierarchy uploads, user access management |
| **QA Lead** | Test coverage, acceptance criteria validation |
| **Customer Success** | Early customer feedback, adoption support |

---

## 11. Risk Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| **Exchange rate API downtime** | Line item amounts may stale | Use 24-hour-old rate fallback; flag items |
| **Approver overload** | SLA breaches increase | Auto-escalation at 48h; delegation in Phase 2 |
| **High policy violation rate** | User frustration | Soft-block warnings; Phase 2 refines policies |
| **Mobile crashes** | Adoption failure | Aggressive crash monitoring + hotfix process |
| **Reimbursement backlog** | Guardrail breach | Finance staffing; prioritize Processing → Paid |
| **GDPR data residency** | Compliance violation | EU data stored in EU regions only |

---

## 12. Summary: What Is & Isn't in Phase 1

### ✅ Phase 1 Includes
- Trip request submission with policy validation
- Expense report submission with manual receipt upload
- 2-level approval workflow (Manager → Finance)
- Basic policy engine (category limits, receipt thresholds)
- Reimbursement status tracking
- Email notifications
- Full audit logging
- RBAC-based access control
- Multi-currency support (static daily rates)
- 99.9% uptime SLA
- Web + mobile apps

### ❌ Phase 1 Does NOT Include
- OCR receipt auto-fill (Phase 2)
- Multi-level dynamic approval chains (Phase 2)
- Advanced policies per employee grade/destination (Phase 2)
- Analytics dashboard (Phase 2)
- ERP GL export (Phase 2)
- HRMS API sync (Phase 2)
- Corporate card reconciliation (Phase 3)
- Scheduled report emails (Phase 3)
- Multi-tenant support (Phase 3)
- Direct flight/hotel booking integration (Out of scope)
- Payroll or direct bank transfers (Out of scope)

---

## Appendix: Document Cross-References

| Topic | Source Document | Location |
|---|---|---|
| Detailed KPI formulas | kpi.md | Section 3–6 |
| API endpoint specifications | prd.md | Section 4 |
| Functional requirement details | prd.md | Section 2.4 |
| Non-functional specifications | prd.md | Section 2.5 |
| Screen mockups / wireframes | *To be created* | TBD |
| Data schema | *To be created* | TBD |
| API OpenAPI spec | `packages/api-spec/openapi.yaml` | TBD |
| Test cases | PRD_&_KPI/Tasks/TestCases/ | TBD |
