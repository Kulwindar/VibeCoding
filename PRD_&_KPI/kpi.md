# KPI Framework: Enterprise Employee Travel & Expense Management System

**Organisation:** Large Enterprise (10,000+ employees, multi-location)
**Document Type:** Key Performance Indicator (KPI) Master Reference
**Total KPIs:** 42 across 6 strategic pillars
**Prepared by:** Senior Product Manager & System Architect

---

## Executive Summary

This KPI framework supports the transition from a manual travel & expense management process (email, Excel, paper documents) to a centralised digital system. Metrics are organised across six pillars, each with defined targets, measurement formulas, reporting frequency, and ownership. Priority levels (High / Medium / Low) guide phased focus during implementation.

### KPI Summary at a Glance

| Pillar | KPIs | High | Medium | Low |
|---|---|---|---|---|
| 1. Process Efficiency | 7 | 4 | 3 | 0 |
| 2. Financial Control & Cost Management | 7 | 4 | 3 | 0 |
| 3. Compliance & Policy Adherence | 7 | 3 | 3 | 1 |
| 4. User Experience & Adoption | 7 | 2 | 4 | 1 |
| 5. System Performance & Reliability | 7 | 4 | 2 | 1 |
| 6. Strategic Impact & ROI | 7 | 4 | 1 | 2 |
| **Total** | **42** | **14** | **20** | **8** |

---

## Implementation Roadmap by Phase

| Phase | Timeline | Primary KPI Focus |
|---|---|---|
| Go-live & Stabilisation | Months 1–3 | Process Efficiency, System Performance |
| Adoption | Months 4–6 | User Experience & Adoption |
| Optimisation | Months 7–12 | Financial Control, Compliance |
| ROI Reporting | Year 2+ | Strategic Impact & ROI |

> **Baseline Note:** Conduct a 2-week time-and-motion study before go-live to capture actual baseline values. The before/after comparison forms the core ROI evidence for leadership.

---

## Pillar 1: Process Efficiency

> Speed, automation, and cycle time of travel & expense workflows.

---

### KPI 1.1 — Travel Request Approval Cycle Time

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | < 24 hours |
| **Baseline** | 3–5 days (email-based) |
| **Reporting Frequency** | Weekly |
| **Owner** | HR / Admin |
| **Formula** | `avg(approval_timestamp − submission_timestamp)` |

**Description:** Measures end-to-end time from when an employee submits a travel request to when it receives final approval. The primary indicator of workflow digitisation success.

---

### KPI 1.2 — Expense Claim Submission-to-Approval Time

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | < 48 hours |
| **Baseline** | 7–14 days |
| **Reporting Frequency** | Weekly |
| **Owner** | Finance |
| **Formula** | `avg(approved_at − submitted_at) per claim` |

**Description:** Tracks how quickly submitted expense claims move through the approval chain. A key indicator of manager responsiveness and workflow efficiency.

---

### KPI 1.3 — Reimbursement Turnaround Time

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | < 5 business days |
| **Baseline** | 15–30 days |
| **Reporting Frequency** | Monthly |
| **Owner** | Finance / Payroll |
| **Formula** | `avg(payment_date − claim_approval_date)` |

**Description:** Measures time from approval to actual reimbursement. Directly impacts employee satisfaction and trust in the new system.

---

### KPI 1.4 — Automation Rate of Expense Processing

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | ≥ 80% |
| **Baseline** | 0% (fully manual) |
| **Reporting Frequency** | Monthly |
| **Owner** | IT / Finance |
| **Formula** | `(auto_processed_claims / total_claims) × 100` |

**Description:** Percentage of expense claims processed without manual intervention (via OCR, policy auto-checks, and straight-through processing). Core measure of digital transformation value.

---

### KPI 1.5 — Number of Manual Touchpoints per Request

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | ≤ 2 touchpoints |
| **Baseline** | 8–12 (emails, calls, paper) |
| **Reporting Frequency** | Quarterly |
| **Owner** | Process Owner |
| **Formula** | `count(human_steps) per workflow instance` |

**Description:** Counts discrete human actions required to complete a single travel or expense workflow. Captures process simplification beyond just speed.

---

### KPI 1.6 — Pending Request Backlog

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | < 50 items at any point in time |
| **Baseline** | N/A |
| **Reporting Frequency** | Daily |
| **Owner** | Admin / Finance |
| **Formula** | `count(requests WHERE status = 'pending') at report time` |

**Description:** Real-time view of requests awaiting action. A rising backlog is an early warning indicator of approver bottlenecks or system issues.

---

### KPI 1.7 — First-Time Approval Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | ≥ 90% |
| **Baseline** | ~60% (estimated) |
| **Reporting Frequency** | Monthly |
| **Owner** | HR / Finance |
| **Formula** | `(claims_approved_on_first_pass / total_claims) × 100` |

**Description:** Measures the proportion of claims approved without rejection or return for correction. Low rates indicate poor employee understanding of policy or unclear submission requirements.

---

## Pillar 2: Financial Control & Cost Management

> Spend visibility, budget adherence, and cost optimisation.

---

### KPI 2.1 — Total Travel & Expense Spend vs Budget

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | ≤ 100% of approved budget |
| **Baseline** | Untracked currently |
| **Reporting Frequency** | Monthly |
| **Owner** | CFO / Finance |
| **Formula** | `(actual_spend / approved_budget) × 100` |

**Description:** Organisation-wide T&E spend against approved budget. The foundational financial control metric. Requires ERP integration for accurate real-time reporting.

---

### KPI 2.2 — Average Cost per Business Trip

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | Reduce by 15% year-on-year |
| **Baseline** | Established in Month 1 post go-live |
| **Reporting Frequency** | Quarterly |
| **Owner** | Finance / Procurement |
| **Formula** | `total_trip_cost / number_of_trips` |

**Description:** Tracks per-trip cost trends across categories (domestic, international, city-specific). Enables benchmarking and identification of high-cost travel patterns.

---

### KPI 2.3 — Duplicate Claim Detection Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | ≥ 99% detection accuracy |
| **Baseline** | 0% (no automated detection) |
| **Reporting Frequency** | Monthly |
| **Owner** | Finance / IT |
| **Formula** | `(auto_flagged_duplicates / actual_duplicates_present) × 100` |

**Description:** Measures the system's ability to automatically detect and flag duplicate expense submissions. Directly prevents financial leakage.

---

### KPI 2.4 — Out-of-Policy Spend Value

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | < 2% of total T&E spend |
| **Baseline** | Unknown (no visibility currently) |
| **Reporting Frequency** | Monthly |
| **Owner** | Finance / Compliance |
| **Formula** | `sum(out-of-policy claims) / total_spend × 100` |

**Description:** Monetary value of claims that exceed policy limits or fall into non-reimbursable categories. Tracks the financial impact of policy non-compliance.

---

### KPI 2.5 — Cost per Expense Report Processed

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | Reduce by 60% vs manual baseline |
| **Baseline** | ₹800–₹1,200 per report (manual estimate) |
| **Reporting Frequency** | Quarterly |
| **Owner** | Finance / IT |
| **Formula** | `(total_ops_cost + system_cost) / total_reports_processed` |

**Description:** Total cost (people + technology) to process one expense report. A key ROI metric that demonstrates the direct financial benefit of automation.

---

### KPI 2.6 — Advance Settlement Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | ≥ 95% settled within 30 days of return |
| **Baseline** | ~50% tracked/settled on time |
| **Reporting Frequency** | Monthly |
| **Owner** | Finance |
| **Formula** | `(advances_settled_on_time / total_advances_issued) × 100` |

**Description:** Tracks timely reconciliation of travel advances. Particularly critical in Indian enterprise travel where unreconciled advances create accounting and compliance complications.

---

### KPI 2.7 — Spend by Category Variance

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | Within ±10% per spend category |
| **Baseline** | No category-level visibility currently |
| **Reporting Frequency** | Monthly |
| **Owner** | Finance |
| **Formula** | `|actual_category_spend − budgeted_category| / budgeted_category × 100` |

**Description:** Variance between actual and budgeted spend by category (flights, hotels, meals, local transport, etc.). Enables targeted budget corrections and procurement negotiations.

---

## Pillar 3: Compliance & Policy Adherence

> Regulatory, audit, and travel policy conformance across 10,000+ employees.

---

### KPI 3.1 — Policy Violation Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | < 3% of all claims |
| **Baseline** | Unknown (no audit trail exists) |
| **Reporting Frequency** | Monthly |
| **Owner** | Compliance / HR |
| **Formula** | `(flagged_policy_violations / total_claims) × 100` |

**Description:** Percentage of claims that breach defined travel and expense policies. High rates indicate the need for employee communication or policy clarification.

---

### KPI 3.2 — Audit Trail Completeness

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | 100% |
| **Baseline** | ~30% (fragmented paper trail) |
| **Reporting Frequency** | Continuous |
| **Owner** | IT / Finance |
| **Formula** | `(claims_with_complete_audit_log / total_claims) × 100` |

**Description:** Measures the proportion of transactions with a complete, tamper-proof digital audit log. Non-negotiable for statutory compliance and internal audit readiness.

---

### KPI 3.3 — Receipt Attachment Compliance Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | ≥ 98% |
| **Baseline** | ~55% (paper receipts, often lost) |
| **Reporting Frequency** | Monthly |
| **Owner** | Finance |
| **Formula** | `(claims_with_valid_receipt_attached / total_claims) × 100` |

**Description:** Tracks whether employees are uploading valid receipts with their claims. Digital photo capture via mobile should be the primary enabler of improvement.

---

### KPI 3.4 — Timely Claim Submission Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | ≥ 95% submitted within 7 days of travel end |
| **Baseline** | Unknown |
| **Reporting Frequency** | Monthly |
| **Owner** | HR / Finance |
| **Formula** | `(on_time_submissions / total_submissions) × 100` |

**Description:** Ensures employees submit claims promptly after travel. Late submissions complicate period-end accounting and can indicate disengagement with the system.

---

### KPI 3.5 — Internal Audit Finding Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | < 1% of sampled transactions |
| **Baseline** | No benchmark available |
| **Reporting Frequency** | Quarterly |
| **Owner** | Internal Audit |
| **Formula** | `(audit_findings / total_sampled_transactions) × 100` |

**Description:** Proportion of transactions flagged by internal audit as non-compliant or requiring investigation. Measured via periodic sample audits by the internal audit team.

---

### KPI 3.6 — GST / Tax Compliance Accuracy

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | 100% |
| **Baseline** | Manual process, error-prone |
| **Reporting Frequency** | Monthly |
| **Owner** | Finance / Tax |
| **Formula** | `(correct_tax_entries / total_claims) × 100` |

**Description:** Accuracy of GST input tax credit claims and tax categorisation of expenses. Critical for organisations claiming input tax credits and for statutory filing accuracy.

---

### KPI 3.7 — Approver SLA Adherence Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🟢 Low |
| **Target** | ≥ 95% of approvals within defined SLA |
| **Baseline** | No SLA defined currently |
| **Reporting Frequency** | Monthly |
| **Owner** | HR / Line Managers |
| **Formula** | `(approvals_completed_within_SLA / total_approvals) × 100` |

**Description:** Measures how consistently approving managers act within their defined SLA window. Feeds into automated escalation logic and manager performance reviews.

---

## Pillar 4: User Experience & Adoption

> Employee satisfaction, adoption rates, and training across all locations.

---

### KPI 4.1 — System Adoption Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | ≥ 90% within 6 months of go-live |
| **Baseline** | 0% (new system) |
| **Reporting Frequency** | Monthly |
| **Owner** | HR / IT |
| **Formula** | `(active_users_in_period / total_eligible_employees) × 100` |

**Description:** The primary change management metric. An active user is defined as someone who has logged in and performed at least one transaction in the reporting period.

---

### KPI 4.2 — Employee Satisfaction Score (CSAT)

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | ≥ 4.0 / 5.0 |
| **Baseline** | ~2.1 / 5.0 (current manual process survey) |
| **Reporting Frequency** | Quarterly |
| **Owner** | HR |
| **Formula** | `avg(satisfaction_rating) from post-submission survey (1–5 scale)` |

**Description:** Employee-rated satisfaction with the T&E process. Survey delivered automatically after claim settlement. A strong predictor of long-term adoption and low shadow-process usage.

---

### KPI 4.3 — Mobile App Usage Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | ≥ 60% of submissions via mobile |
| **Baseline** | 0% |
| **Reporting Frequency** | Monthly |
| **Owner** | IT / HR |
| **Formula** | `(mobile_submissions / total_submissions) × 100` |

**Description:** Adoption of the mobile channel, which enables real-time receipt capture and reduces claim submission time. High mobile usage correlates with better receipt compliance.

---

### KPI 4.4 — Support Ticket Volume (T&E related)

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | Decline by 50% by Month 6 vs go-live baseline |
| **Baseline** | Measured at go-live (Month 1) |
| **Reporting Frequency** | Monthly |
| **Owner** | IT Helpdesk |
| **Formula** | `count(helpdesk_tickets WHERE category = 'T&E') per month` |

**Description:** Volume of IT and process support tickets related to the T&E system. A declining trend indicates improved usability and employee self-sufficiency.

---

### KPI 4.5 — Training Completion Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | 100% before go-live; annual refresher ≥ 95% |
| **Baseline** | N/A |
| **Reporting Frequency** | One-time at launch; annually thereafter |
| **Owner** | L&D / HR |
| **Formula** | `(employees_completed_training / total_target_users) × 100` |

**Description:** Ensures all employees are trained before system launch. Tracks annual refresher completion to maintain policy awareness as the workforce grows.

---

### KPI 4.6 — Average Time to Submit an Expense Report

| Attribute | Detail |
|---|---|
| **Priority** | 🟢 Low |
| **Target** | < 10 minutes |
| **Baseline** | 45–60 minutes (manual, paper-based) |
| **Reporting Frequency** | Monthly |
| **Owner** | Product / HR |
| **Formula** | `avg(submission_session_end − session_start)` for completed submissions |

**Description:** End-user effort required to submit a claim. Directly measures UX quality. Declining time indicates improved form design, OCR accuracy, and employee familiarity.

---

### KPI 4.7 — Claim Rejection / Rework Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | < 5% |
| **Baseline** | ~25% (email back-and-forth for corrections) |
| **Reporting Frequency** | Monthly |
| **Owner** | Finance / HR |
| **Formula** | `(claims_rejected_and_resubmitted / total_claims) × 100` |

**Description:** Measures how often claims are sent back for correction. High rates increase processing time, employee frustration, and finance team workload.

---

## Pillar 5: System Performance & Reliability

> Uptime, response speed, integration health, and data integrity.

---

### KPI 5.1 — System Uptime / Availability

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | ≥ 99.5% |
| **Baseline** | N/A (new system) |
| **Reporting Frequency** | Monthly |
| **Owner** | IT Infrastructure |
| **Formula** | `(uptime_minutes / total_minutes_in_period) × 100` |

**Description:** Core SLA metric for the platform. Downtime during business hours directly impacts employee productivity and trust. Should be contractualised with the vendor.

---

### KPI 5.2 — Average Page / API Response Time

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | < 2 seconds (p95) |
| **Baseline** | N/A |
| **Reporting Frequency** | Weekly |
| **Owner** | IT / Vendor |
| **Formula** | `p95(response_time_ms) across all monitored endpoints` |

**Description:** 95th percentile response time for key user-facing pages and API calls. Slow response times are the leading cause of low adoption in enterprise SaaS deployments.

---

### KPI 5.3 — ERP Integration Error Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | < 0.1% of sync records |
| **Baseline** | N/A |
| **Reporting Frequency** | Daily |
| **Owner** | IT / Finance |
| **Formula** | `(failed_sync_records / total_sync_records) × 100` |

**Description:** Failure rate of data synchronisation between the T&E system and the ERP/accounting ledger. Errors cause reconciliation issues and require manual correction.

---

### KPI 5.4 — Data Accuracy Rate (vs ERP Ledger)

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | ≥ 99.9% |
| **Baseline** | ~80% (manual reconciliation issues) |
| **Reporting Frequency** | Monthly |
| **Owner** | Finance / IT |
| **Formula** | `(matched_records / total_records) × 100` |

**Description:** Measures how accurately T&E system records match the ERP general ledger. Mismatches trigger costly manual reconciliation and delay period-end close.

---

### KPI 5.5 — Critical Incident Rate (P1)

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | 0 P1 incidents per month |
| **Baseline** | N/A |
| **Reporting Frequency** | Monthly |
| **Owner** | IT / Vendor |
| **Formula** | `count(incidents WHERE severity = 'P1') per calendar month` |

**Description:** Number of critical system outages or data loss incidents per month. P1 incidents are defined as complete system unavailability or data integrity failures affecting all users.

---

### KPI 5.6 — Mean Time to Resolve (MTTR)

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | < 4 hours for P1; < 24 hours for P2 |
| **Baseline** | N/A |
| **Reporting Frequency** | Monthly |
| **Owner** | IT Operations |
| **Formula** | `avg(incident_resolved_at − incident_opened_at)` segmented by severity |

**Description:** Average time to restore service after an incident is reported. A contractual SLA metric with the system vendor and internal IT team.

---

### KPI 5.7 — OCR / Receipt Scan Accuracy

| Attribute | Detail |
|---|---|
| **Priority** | 🟢 Low |
| **Target** | ≥ 95% field-level accuracy |
| **Baseline** | N/A |
| **Reporting Frequency** | Monthly |
| **Owner** | IT / Vendor |
| **Formula** | `(correctly_parsed_fields / total_scanned_fields) × 100` |

**Description:** Accuracy of optical character recognition when employees photograph receipts via mobile. Low accuracy increases manual correction burden and reduces the value of automated processing.

---

## Pillar 6: Strategic Impact & ROI

> Business outcomes, return on investment, and organisational benefits.

---

### KPI 6.1 — Return on Investment (ROI)

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | ≥ 200% within 24 months |
| **Baseline** | Calculated from manual process cost study |
| **Reporting Frequency** | Semi-annual |
| **Owner** | CFO |
| **Formula** | `((benefits_realised − total_system_cost) / total_system_cost) × 100` |

**Description:** Overall financial return from the system investment. Benefits include labour savings, fraud reduction, cost avoidance, and improved spend negotiation. Present to leadership as the primary project success metric.

---

### KPI 6.2 — Annual Cost Savings vs Manual Process

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | Defined at project kickoff (₹ target agreed with CFO) |
| **Baseline** | Measured pre-go-live (time-and-motion study) |
| **Reporting Frequency** | Annual |
| **Owner** | Finance |
| **Formula** | `manual_process_annual_cost − new_system_annual_cost` |

**Description:** Net annual cost reduction. Captures savings in finance team headcount effort, paper and printing, courier costs, error correction time, and reconciliation labour.

---

### KPI 6.3 — Finance Team Hours Saved per Month

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | ≥ 40% reduction in T&E-related finance hours |
| **Baseline** | Time-and-motion study before go-live |
| **Reporting Frequency** | Monthly |
| **Owner** | Finance Head |
| **Formula** | `hours_spent_before_system − hours_spent_after (sampled monthly)` |

**Description:** Quantifies the operational time freed up in the finance team. Hours saved can be redirected to higher-value activities such as financial analysis and strategic planning.

---

### KPI 6.4 — Fraud / Erroneous Claim Recovery Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🔴 High |
| **Target** | ≥ 90% of identified fraudulent amounts recovered |
| **Baseline** | No detection or recovery baseline |
| **Reporting Frequency** | Quarterly |
| **Owner** | Compliance / Finance |
| **Formula** | `(amount_recovered / amount_identified_as_fraudulent) × 100` |

**Description:** Measures both detection effectiveness and recovery action rates. System-generated fraud alerts should be reviewed within 5 business days and actioned through HR / legal where confirmed.

---

### KPI 6.5 — Management Reporting Timeliness

| Attribute | Detail |
|---|---|
| **Priority** | 🟡 Medium |
| **Target** | Real-time dashboards (0-day lag) |
| **Baseline** | Manual reports with 5–7 day lag |
| **Reporting Frequency** | Ongoing |
| **Owner** | Finance / PMO |
| **Formula** | `lag_days = now() − data_as_of_timestamp` (target = 0) |

**Description:** Measures the currency of management information available from the T&E system. Real-time reporting enables in-period budget corrections rather than reactive post-period adjustments.

---

### KPI 6.6 — Carbon / Sustainability Tracking Coverage

| Attribute | Detail |
|---|---|
| **Priority** | 🟢 Low |
| **Target** | 100% of air and road travel trips tracked for emissions |
| **Baseline** | 0% (no tracking currently) |
| **Reporting Frequency** | Quarterly |
| **Owner** | Sustainability / HR |
| **Formula** | `(trips_with_emission_data / total_trips) × 100` |

**Description:** Enables the organisation to measure and report on the carbon footprint of business travel. Supports ESG reporting commitments and can identify opportunities for travel substitution (e.g., video conferencing).

---

### KPI 6.7 — Preferred Vendor Utilisation Rate

| Attribute | Detail |
|---|---|
| **Priority** | 🟢 Low |
| **Target** | ≥ 70% of bookings via preferred / contracted vendors |
| **Baseline** | Unknown (no tracking currently) |
| **Reporting Frequency** | Monthly |
| **Owner** | Procurement |
| **Formula** | `(preferred_vendor_bookings / total_bookings) × 100` |

**Description:** Measures adherence to negotiated vendor agreements (airlines, hotel chains, cab aggregators). Higher utilisation unlocks volume discounts and strengthens procurement negotiating position.

---

## Governance & Review Cadence

| Review Type | Frequency | Participants | Scope |
|---|---|---|---|
| Operational Dashboard Review | Weekly | Finance, HR, IT leads | Process efficiency, backlog, P1 incidents |
| KPI Steering Review | Monthly | CFO, CHRO, CTO, PMO | All 42 KPIs — trend analysis |
| Compliance & Audit Review | Quarterly | Internal Audit, Finance, Legal | Compliance pillar deep-dive |
| Strategic ROI Review | Semi-annual | C-suite, Board (if applicable) | Pillar 6 — ROI, savings, sustainability |
| Annual KPI Refresh | Annual | PMO, all pillar owners | Revise targets as system matures |

---

## KPI Ownership Matrix

| Role | KPI Ownership |
|---|---|
| CFO / Finance Head | 2.1, 2.2, 2.5, 6.1, 6.2, 6.3 |
| CHRO / HR Head | 1.1, 1.7, 3.1, 4.1, 4.2, 4.5 |
| CTO / IT Head | 1.4, 3.2, 5.1–5.7 |
| Internal Audit | 3.5 |
| Compliance Officer | 3.1, 3.6, 6.4 |
| Procurement Head | 2.7, 6.7 |
| Sustainability Lead | 6.6 |
| L&D / Training Head | 4.5 |
| Process / PMO Owner | 1.5, 6.5 |

---

## Definitions & Conventions

| Term | Definition |
|---|---|
| **Active User** | Employee who logs in and completes ≥ 1 transaction in the reporting period |
| **P1 Incident** | Complete system outage or data integrity failure affecting all users |
| **Out-of-Policy Claim** | Any claim exceeding defined per-diem, category limit, or non-reimbursable category |
| **Preferred Vendor** | Suppliers with negotiated corporate agreements (airlines, hotels, cab services) |
| **Baseline** | Pre-go-live measurement used as the before comparison for improvement tracking |
| **Settlement** | Reconciliation of travel advance against actual expenses incurred |
| **Straight-Through Processing** | Claim processed end-to-end without human intervention |

---

*Document Version: 1.0 — Prepared for project initiation and stakeholder alignment.*
*Review and update targets at 6-month post go-live milestone.*
