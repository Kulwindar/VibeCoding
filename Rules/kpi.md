# KPI Framework
## Enterprise Employee Travel & Expense Management System (ETEMS)

**Version:** 2.0
**Status:** Draft
**Owner:** Product Management
**Last Updated:** 2025-06-09
**Reference:** `prd-etems.md` v2.0

---

## 1. Framework Structure

```
North Star Metric
└── Strategic Pillars (5)
    └── KPIs — measurable outcomes per pillar
        └── Leading Indicators — early signals before KPIs move
            └── Guardrail Metrics — hard limits that must never be crossed
```

**Measurement cadence:** Leading indicators → weekly. KPIs → monthly. Guardrails → real-time alerting.

---

## 2. North Star Metric

| North Star | Definition | Target |
|---|---|---|
| **Expense Report Cycle Time** | Median time from report submission to reimbursement marked Paid (business days) | **< 5 business days** |

Captures end-to-end system health — adoption (submission rate), workflow (approval speed), and finance ops (reimbursement throughput) all feed into it.

---

## 3. Strategic Pillars & KPIs

### Pillar 1 — Adoption & Engagement

| ID | KPI | Formula | Target | Phase |
|---|---|---|---|---|
| A-01 | Monthly Active Users (MAU) | Unique users who submitted or actioned a report in the month | ≥ 90% of eligible employees | Phase 2 |
| A-02 | Mobile Adoption Rate | MAU on mobile ÷ total MAU | ≥ 50% | Phase 2 |
| A-03 | Report Submission Rate | Reports submitted ÷ approved trip requests (rolling 30d) | ≥ 95% | Phase 1 |
| A-04 | Draft Abandonment Rate | Drafts never submitted ÷ total drafts created | ≤ 10% | Phase 2 |

**Leading Indicators**
- Week-1 activation rate of new employees: ≥ 70% submit first report within 7 days of onboarding
- Push notification open rate: ≥ 40%

---

### Pillar 2 — Process Efficiency

| ID | KPI | Formula | Target | Phase |
|---|---|---|---|---|
| E-01 | Report Cycle Time (Median) | Submission → Paid (median, business days) | < 5 days | Phase 1 |
| E-02 | Approval Response Time | Notification sent → approver action (median) | < 24 hours | Phase 1 |
| E-03 | Approver SLA Compliance | Approvals actioned within 48h ÷ total approvals | ≥ 85% | Phase 1 |
| E-04 | Auto-Escalation Rate | Reports escalated due to SLA breach ÷ total reports | ≤ 5% | Phase 2 |
| E-05 | Resubmission Rate | Reports rejected/sent-back and resubmitted ÷ total submitted | ≤ 15% | Phase 2 |

**Leading Indicators**
- Pending approval queue depth: alert if > 50 reports pending > 36 hours
- Average time-to-first-action per approver (weekly trend)

---

### Pillar 3 — Policy Compliance

| ID | KPI | Formula | Target | Phase |
|---|---|---|---|---|
| C-01 | Policy Violation Rate | Flagged line items ÷ total line items submitted | ≤ 10% | Phase 2 |
| C-02 | Out-of-Policy Approval Rate | Flagged items approved with justification ÷ total flagged | ≤ 20% | Phase 2 |
| C-03 | Receipt Attachment Rate | Line items with receipt ÷ total items above receipt threshold | ≥ 98% | Phase 1 |
| C-04 | Policy Override Rate | Finance Admin overrides ÷ total approval actions | ≤ 3% | Phase 2 |

**Leading Indicators**
- Top 5 violation categories weekly (signals policy tuning needed)
- Departments with violation rate trending > 15% (early warning)

---

### Pillar 4 — Financial Control

| ID | KPI | Formula | Target | Phase |
|---|---|---|---|---|
| F-01 | Reconciliation Time Reduction | (Baseline hrs/week − ETEMS hrs/week) ÷ Baseline | ≥ 50% | Phase 2 |
| F-02 | Reimbursement Processing Time | Approval → Paid (median, business days) | ≤ 2 days | Phase 2 |
| F-03 | Corporate Card Match Rate | Auto-matched transactions ÷ total imported transactions | ≥ 85% | Phase 3 |
| F-04 | ERP Export Error Rate | Failed GL export batches ÷ total export batches | ≤ 1% | Phase 3 |
| F-05 | Spend Captured in System | Total spend in ETEMS ÷ total company T&E spend | ≥ 95% | Phase 3 |

**Leading Indicators**
- Reimbursement batch backlog: alert if > 20 approved reports unpaid > 3 business days
- GL code mapping coverage: must be 100% before Phase 3 go-live

---

### Pillar 5 — System Reliability

| ID | KPI | Formula | Target | Phase |
|---|---|---|---|---|
| R-01 | System Uptime | Uptime minutes ÷ total minutes per month | ≥ 99.9% | Phase 1 |
| R-02 | API p99 Latency | 99th percentile response time | < 300ms | Phase 1 |
| R-03 | Mobile Crash-Free Session Rate | Sessions without crash ÷ total sessions | ≥ 99.5% | Phase 1 |
| R-04 | App Store Rating | Average rating: iOS App Store + Google Play | ≥ 4.5 | Phase 2 |
| R-05 | Support Ticket Rate | Tickets raised ÷ MAU per month | ≤ 2% | Phase 2 |

**Leading Indicators**
- 5xx error rate: alert if trending > 0.1% in any 1-hour window
- OCR auto-fill accuracy: ≥ 85% (drop signals receipt capture UX regression)

---

## 4. Guardrail Metrics

Hard limits — breaching any guardrail triggers immediate escalation regardless of KPI health.

| ID | Guardrail | Threshold | Action on Breach |
|---|---|---|---|
| G-01 | Unplanned downtime | > 1 hour in any 30-day window | P0 incident — engineering on-call |
| G-02 | Security / data breach | Any confirmed unauthorised data access | Immediate escalation to CISO + legal |
| G-03 | Audit log gap | Any 15-minute window with missing entries | P1 incident — data integrity review |
| G-04 | Reimbursement delay | > 50 approved reports unpaid beyond 5 business days | Finance escalation — process review |
| G-05 | MAU drop | > 20% month-over-month decline | Product + CS joint review within 48h |

---

## 5. KPI Activation by Phase

| ID | KPI | Phase 1 (M1–3) | Phase 2 (M4–6) | Phase 3 (M7–9) |
|---|---|:---:|:---:|:---:|
| A-01 | MAU | Track | ✅ ≥ 90% | Maintain |
| A-02 | Mobile Adoption Rate | — | ✅ ≥ 50% | Maintain |
| A-03 | Report Submission Rate | ✅ ≥ 95% | Maintain | Maintain |
| A-04 | Draft Abandonment Rate | — | ✅ ≤ 10% | Maintain |
| E-01 | Report Cycle Time | ✅ < 5 days | ✅ < 4 days | ✅ < 3 days |
| E-02 | Approval Response Time | Track | ✅ < 24h | Maintain |
| E-03 | Approver SLA Compliance | ✅ ≥ 85% | ✅ ≥ 90% | Maintain |
| E-04 | Auto-Escalation Rate | — | ✅ ≤ 5% | Maintain |
| E-05 | Resubmission Rate | — | ✅ ≤ 15% | Maintain |
| C-01 | Policy Violation Rate | Track | ✅ ≤ 10% | Maintain |
| C-02 | Out-of-Policy Approval Rate | — | ✅ ≤ 20% | Maintain |
| C-03 | Receipt Attachment Rate | ✅ ≥ 98% | Maintain | Maintain |
| C-04 | Policy Override Rate | — | ✅ ≤ 3% | Maintain |
| F-01 | Reconciliation Time Reduction | — | ✅ ≥ 50% | Maintain |
| F-02 | Reimbursement Processing Time | — | ✅ ≤ 2 days | Maintain |
| F-03 | Card Match Rate | — | — | ✅ ≥ 85% |
| F-04 | ERP Export Error Rate | — | — | ✅ ≤ 1% |
| F-05 | Spend Captured in System | — | — | ✅ ≥ 95% |
| R-01 | System Uptime | ✅ ≥ 99.9% | Maintain | Maintain |
| R-02 | API p99 Latency | ✅ < 300ms | Maintain | Maintain |
| R-03 | Mobile Crash-Free Rate | ✅ ≥ 99.5% | Maintain | Maintain |
| R-04 | App Store Rating | — | ✅ ≥ 4.5 | Maintain |
| R-05 | Support Ticket Rate | — | ✅ ≤ 2% | Maintain |

---

## 6. KPI Ownership by Role

| Role | KPIs Owned |
|---|---|
| Product Manager | A-01, A-03, E-01, C-01, R-04, R-05 |
| Engineering Lead | R-01, R-02, R-03, F-04 |
| Finance Admin | F-01, F-02, F-03, F-05, C-02, C-04 |
| HR / Ops Admin | A-01, A-02, E-03, E-04 |
| Customer Success | A-04, E-05, R-05 |

---

## 7. Data Sources

| Pillar | Source |
|---|---|
| Adoption & Engagement | MongoDB `users`, `expenseReports`; analytics event stream |
| Process Efficiency | MongoDB `expenseReports.submittedAt`, `approvalActions.timestamp`, `expenseReports.paidAt` |
| Policy Compliance | MongoDB `expenseLineItems.policyStatus`, `approvalActions` |
| Financial Control | MongoDB `expenseReports` status transitions; ERP export job logs |
| System Reliability | API gateway logs; Sentry; Datadog RUM; App Store Connect / Play Console |

> KPI aggregations run as daily scheduled jobs and write to a dedicated `kpi_snapshots` collection. Dashboards read from snapshots — never from live operational collections.

---

## 8. Review Cadence

| Cadence | Audience | Scope |
|---|---|---|
| Weekly | Engineering Lead | Guardrails, R-01–R-03, leading indicators |
| Monthly | Product + Finance | All active KPIs for current phase |
| Quarterly | Leadership | North Star trend, pillar health, phase target review |
| Post-phase launch | All stakeholders | Full baseline reset; targets updated for next phase |
