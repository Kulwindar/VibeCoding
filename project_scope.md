# Project Scope Document: Enterprise Employee Travel & Expense Management System

**Project:** Centralised Digital Travel & Expense (T&E) Management System  
**Organisation:** Large Enterprise (10,000+ employees, multi-location)  
**Document Type:** Project Scope Reference  
**Prepared by:** Senior Product Manager & System Architect  
**Source Documents:** `PRD_&_KPI/kpi.md`, `Rules/prd.md`

---

## 1. Executive Summary

This project transforms the organisation’s travel and expense management from a manual, paper-based process (email, Excel, courier) into a centralised digital system. The solution must measurable improvement across six strategic pillars: Process Efficiency, Financial Control & Cost Management, Compliance & Policy Adherence, User Experience & Adoption, System Performance & Reliability, and Strategic Impact & ROI.

Performance is governed by **42 KPIs** with defined targets, baselines, measurement formulas, reporting frequencies, and owners. All development efforts must map directly to enabling or monitoring these KPIs.

> **Baseline Prerequisite:** A 2-week time-and-motion study must be conducted before go-live to capture actual baseline values for financial and operational KPIs. The before/after comparison forms the core ROI evidence for leadership.

---

## 2. Project Objectives

| # | Objective | Driven By |
|---|---|---|
| 1 | Reduce travel request approval cycle time from 3–5 days to < 24 hours | Pillar 1 (KPI 1.1) |
| 2 | Reduce expense claim processing cost by 60% vs manual baseline | Pillar 2 (KPI 2.5) |
| 3 | Achieve ≥ 80% automation rate of expense processing | Pillar 1 (KPI 1.4) |
| 4 | Achieve 100% digital audit trail completeness | Pillar 3 (KPI 3.2) |
| 5 | Achieve ≥ 90% system adoption within 6 months of go-live | Pillar 4 (KPI 4.1) |
| 6 | Maintain ≥ 99.5% system uptime with < 2s p95 API response time | Pillar 5 (KPI 5.1, 5.2) |
| 7 | Deliver ≥ 200% ROI within 24 months | Pillar 6 (KPI 6.1) |

---

## 3. Functional Requirements

### 3.1 Travel Request Management

| Requirement | Description | KPI Link |
|---|---|---|
| REQ-1.1 | Employees submit travel requests via web or mobile with trip details (dates, destination, purpose, estimated cost) | 1.1, 1.5, 4.1 |
| REQ-1.2 | Configurable multi-level approval routing (manager → finance → admin) based on cost, destination, or employee grade | 1.1, 1.5, 3.7 |
| REQ-1.3 | Real-time approval notifications (email, in-app, SMS fallback) to approvers | 1.1, 1.6, 5.2 |
| REQ-1.4 | Travel request status tracking (draft, submitted, approved, rejected, cancelled) with full audit log | 3.2, 6.5 |
| REQ-1.5 | Admin override capability with mandatory reason capture | 3.2, 3.1 |

### 3.2 Expense Claim Management

| Requirement | Description | KPI Link |
|---|---|---|
| REQ-2.1 | Employees submit expense claims linked to approved travel requests or standalone | 1.2, 1.7, 4.6 |
| REQ-2.2 | Mobile receipt capture via camera with real-time OCR field extraction (vendor, date, amount, tax) | 1.4, 3.3, 5.7, 4.3 |
| REQ-2.3 | Policy auto-check engine (per-diem limits, category restrictions, reimbursable flags) at submission | 1.4, 3.1, 2.4, 3.6 |
| REQ-2.4 | Duplicate claim detection using transaction fingerprinting (amount + date + vendor + employee hash) | 2.3, 1.4 |
| REQ-2.5 | Multi-level approval chain with configurable SLA timers and automated escalation | 1.2, 3.7, 1.6 |
| REQ-2.6 | Rejection/return-for-correction workflow with mandatory reason and resubmission tracking | 1.7, 4.7, 3.1 |
| REQ-2.7 | Integration with ERP for GL coding and budget validation at point of submission | 2.1, 5.3, 5.4, 2.7 |

### 3.3 Reimbursement & Settlement

| Requirement | Description | KPI Link |
|---|---|---|
| REQ-3.1 | Approved claims auto-route to reimbursement queue with payment date tracking | 1.3, 1.4 |
| REQ-3.2 | Travel advance issuance and settlement reconciliation workflow | 2.6, 2.1 |
| REQ-3.3 | Auto-settlement of advances against approved claims with variance alerting | 2.6, 2.7 |

### 3.4 Approval & Workflow Engine

| Requirement | Description | KPI Link |
|---|---|---|
| REQ-4.1 | Configurable approval matrix (by cost band, employee grade, trip type, department) | 1.5, 3.7 |
| REQ-4.2 | SLA enforcement: timer tracks time-in-queue per approver step; escalates on breach | 1.1, 1.2, 3.7, 1.6 |
| REQ-4.3 | Delegation support: approvers can delegate authority during OOO with duration and scope limits | 1.6, 3.7 |
| REQ-4.4 | Bulk approval capability for managers with policy-compliant batch review | 1.5, 4.6 |
| REQ-4.5 | Auto-approval for low-value, policy-compliant claims (straight-through processing) | 1.4, 1.7 |

### 3.5 Reporting & Analytics

| Requirement | Description | KPI Link |
|---|---|---|
| REQ-5.1 | Operational dashboard: pending backlog, approval cycle times, automation rate, P1 incidents | 1.6, 5.5, 5.6 |
| REQ-5.2 | Financial dashboard: spend vs budget, cost per trip, out-of-policy spend, category variance | 2.1, 2.2, 2.4, 2.7, 2.5 |
| REQ-5.3 | Compliance dashboard: policy violation rate, receipt compliance, audit trail completeness, GST accuracy | 3.1, 3.2, 3.3, 3.6 |
| REQ-5.4 | Adoption dashboard: active user count, mobile usage, CSAT, training completion, support tickets | 4.1, 4.2, 4.3, 4.4, 4.5 |
| REQ-5.5 | System performance dashboard: uptime, API response times, ERP sync errors, OCR accuracy | 5.1, 5.2, 5.3, 5.4, 5.7 |
| REQ-5.6 | Strategic ROI dashboard: cost savings, finance hours saved, fraud recovery, sustainability tracking | 6.1, 6.2, 6.3, 6.4, 6.5, 6.6 |
| REQ-5.7 | Real-time data freshness (≤ 1 hour lag from source system) | 6.5, 5.4 |
| REQ-5.8 | Scheduled report delivery (email/pdf) with drill-down to transaction level | 6.5, 3.2 |

### 3.6 Mobile Application

| Requirement | Description | KPI Link |
|---|---|---|
| REQ-6.1 | Native mobile app (iOS + Android) or PWA with offline-first receipt capture | 4.3, 3.3, 1.4 |
| REQ-6.2 | Camera-based receipt scanning with live OCR preview | 5.7, 3.3, 4.6 |
| REQ-6.3 | Push notifications for approval requests, status changes, and reminders | 1.1, 1.6, 3.4 |
| REQ-6.4 | Full claim submission and status tracking on mobile | 4.1, 4.3, 1.3 |

### 3.7 Administration & Configuration

| Requirement | Description | KPI Link |
|---|---|---|
| REQ-7.1 | Policy configuration module (per-diem rates, category limits, reimbursable categories, GST rules) | 3.1, 3.6, 2.4 |
| REQ-7.2 | Approval matrix configuration (routing rules, SLA thresholds, escalation paths) | 1.5, 3.7, 1.6 |
| REQ-7.3 | User and role management (employee, manager, finance, admin, auditor) with attribute-based access | 3.2, 5.4 |
| REQ-7.4 | ERP integration configuration (field mapping, sync schedules, error handling) | 5.3, 5.4, 2.1 |
| REQ-7.5 | Audit log viewer with immutable record of all system actions | 3.2, 3.5 |

### 3.8 Fraud Detection & Anomaly Alerting

| Requirement | Description | KPI Link |
|---|---|---|
| REQ-8.1 | Rule-based fraud detection engine (round-amount bias, weekend spike, same-vendor clustering, duplicate detection) | 6.4, 2.3, 3.1 |
| REQ-8.2 | Automated alert generation with risk scoring and routing to compliance queue | 6.4, 3.5 |
| REQ-8.3 | Investigation workflow with evidence capture, disposition tracking, and recovery flagging | 6.4 |

---

## 4. Non-Functional Requirements

| NFR ID | Requirement | Target | KPI Link |
|---|---|---|---|
| NFR-1 | System uptime / availability | ≥ 99.5% (monthly) | 5.1 |
| NFR-2 | API and page response time (p95) | < 2 seconds | 5.2 |
| NFR-3 | ERP integration sync error rate | < 0.1% of sync records | 5.3 |
| NFR-4 | T&E data accuracy vs ERP general ledger | ≥ 99.9% matched records | 5.4 |
| NFR-5 | OCR / receipt scan field-level accuracy | ≥ 95% | 5.7 |
| NFR-6 | Audit trail completeness | 100% of claims | 3.2 |
| NFR-7 | P1 critical incident rate | 0 per month | 5.5 |
| NFR-8 | MTTR for P1 incidents | < 4 hours | 5.6 |
| NFR-9 | MTTR for P2 incidents | < 24 hours | 5.6 |
| NFR-10 | Scalability | Support 10,000+ concurrent users across multiple locations | 4.1, 5.1 |
| NFR-11 | Data retention | Full audit logs retained for minimum 7 years (statutory) | 3.2, 3.5 |
| NFR-12 | Security | Role-based access control, data encryption at rest and in transit, GDPR/DPDP compliance | 3.2 |
| NFR-13 | Backup & recovery | Daily automated backups; RTO < 4 hours, RPO < 1 hour | 5.1, 5.5 |
| NFR-14 | Mobile offline capability | Users can capture receipts offline; sync on reconnect | 4.3, 3.3 |
| NFR-15 | Browser compatibility | Chrome, Edge, Safari (latest 2 versions); mobile Safari and Chrome | 4.1 |
| NFR-16 | Reporting data freshness | ≤ 1 hour lag for operational dashboards; ≤ 24 hours for financial close reports | 6.5 |

---

## 5. KPI Constraint Matrix

### Pillar 1: Process Efficiency

| KPI ID | KPI Name | Priority | Target | Baseline | Formula | Reporting Freq | Owner |
|---|---|---|---|---|---|---|---|
| 1.1 | Travel Request Approval Cycle Time | 🔴 High | < 24 hours | 3–5 days (email-based) | avg(approval_timestamp − submission_timestamp) | Weekly | HR / Admin |
| 1.2 | Expense Claim Submission-to-Approval Time | 🔴 High | < 48 hours | 7–14 days | avg(approved_at − submitted_at) per claim | Weekly | Finance |
| 1.3 | Reimbursement Turnaround Time | 🔴 High | < 5 business days | 15–30 days | avg(payment_date − claim_approval_date) | Monthly | Finance / Payroll |
| 1.4 | Automation Rate of Expense Processing | 🔴 High | ≥ 80% | 0% (fully manual) | (auto_processed_claims / total_claims) × 100 | Monthly | IT / Finance |
| 1.5 | Number of Manual Touchpoints per Request | 🟡 Medium | ≤ 2 touchpoints | 8–12 (emails, calls, paper) | count(human_steps) per workflow instance | Quarterly | Process Owner |
| 1.6 | Pending Request Backlog | 🟡 Medium | < 50 items | N/A | count(requests WHERE status = 'pending') | Daily | Admin / Finance |
| 1.7 | First-Time Approval Rate | 🟡 Medium | ≥ 90% | ~60% (estimated) | (claims_approved_on_first_pass / total_claims) × 100 | Monthly | HR / Finance |

### Pillar 2: Financial Control & Cost Management

| KPI ID | KPI Name | Priority | Target | Baseline | Formula | Reporting Freq | Owner |
|---|---|---|---|---|---|---|---|
| 2.1 | Total Travel & Expense Spend vs Budget | 🔴 High | ≤ 100% of approved budget | Untracked currently | (actual_spend / approved_budget) × 100 | Monthly | CFO / Finance |
| 2.2 | Average Cost per Business Trip | 🔴 High | Reduce by 15% YoY | Established Month 1 post go-live | total_trip_cost / number_of_trips | Quarterly | Finance / Procurement |
| 2.3 | Duplicate Claim Detection Rate | 🔴 High | ≥ 99% accuracy | 0% (no automated detection) | (auto_flagged_duplicates / actual_duplicates_present) × 100 | Monthly | Finance / IT |
| 2.4 | Out-of-Policy Spend Value | 🔴 High | < 2% of total T&E spend | Unknown | sum(out-of-policy claims) / total_spend × 100 | Monthly | Finance / Compliance |
| 2.5 | Cost per Expense Report Processed | 🟡 Medium | Reduce by 60% vs manual | ₹800–₹1,200 per report | (total_ops_cost + system_cost) / total_reports_processed | Quarterly | Finance / IT |
| 2.6 | Advance Settlement Rate | 🟡 Medium | ≥ 95% within 30 days of return | ~50% tracked/settled on time | (advances_settled_on_time / total_advances_issued) × 100 | Monthly | Finance |
| 2.7 | Spend by Category Variance | 🟡 Medium | Within ±10% per category | No visibility currently | |actual_category_spend − budgeted_category| / budgeted_category × 100 | Monthly | Finance |

### Pillar 3: Compliance & Policy Adherence

| KPI ID | KPI Name | Priority | Target | Baseline | Formula | Reporting Freq | Owner |
|---|---|---|---|---|---|---|---|
| 3.1 | Policy Violation Rate | 🔴 High | < 3% of all claims | Unknown | (flagged_policy_violations / total_claims) × 100 | Monthly | Compliance / HR |
| 3.2 | Audit Trail Completeness | 🔴 High | 100% | ~30% (fragmented paper trail) | (claims_with_complete_audit_log / total_claims) × 100 | Continuous | IT / Finance |
| 3.3 | Receipt Attachment Compliance Rate | 🔴 High | ≥ 98% | ~55% (paper receipts, often lost) | (claims_with_valid_receipt_attached / total_claims) × 100 | Monthly | Finance |
| 3.4 | Timely Claim Submission Rate | 🟡 Medium | ≥ 95% within 7 days of travel end | Unknown | (on_time_submissions / total_submissions) × 100 | Monthly | HR / Finance |
| 3.5 | Internal Audit Finding Rate | 🟡 Medium | < 1% of sampled transactions | No benchmark | (audit_findings / total_sampled_transactions) × 100 | Quarterly | Internal Audit |
| 3.6 | GST / Tax Compliance Accuracy | 🟡 Medium | 100% | Manual process, error-prone | (correct_tax_entries / total_claims) × 100 | Monthly | Finance / Tax |
| 3.7 | Approver SLA Adherence Rate | 🟢 Low | ≥ 95% within SLA | No SLA defined | (approvals_completed_within_SLA / total_approvals) × 100 | Monthly | HR / Line Managers |

### Pillar 4: User Experience & Adoption

| KPI ID | KPI Name | Priority | Target | Baseline | Formula | Reporting Freq | Owner |
|---|---|---|---|---|---|---|---|
| 4.1 | System Adoption Rate | 🔴 High | ≥ 90% within 6 months | 0% (new system) | (active_users_in_period / total_eligible_employees) × 100 | Monthly | HR / IT |
| 4.2 | Employee Satisfaction Score (CSAT) | 🔴 High | ≥ 4.0 / 5.0 | ~2.1 / 5.0 | avg(satisfaction_rating) post-settlement (1–5) | Quarterly | HR |
| 4.3 | Mobile App Usage Rate | 🟡 Medium | ≥ 60% of submissions via mobile | 0% | (mobile_submissions / total_submissions) × 100 | Monthly | IT / HR |
| 4.4 | Support Ticket Volume (T&E related) | 🟡 Medium | Decline by 50% by Month 6 | Measured at go-live | count(helpdesk_tickets WHERE category = 'T&E') | Monthly | IT Helpdesk |
| 4.5 | Training Completion Rate | 🟡 Medium | 100% before go-live; annual refresher ≥ 95% | N/A | (employees_completed_training / total_target_users) × 100 | One-time + Annual | L&D / HR |
| 4.6 | Average Time to Submit an Expense Report | 🟢 Low | < 10 minutes | 45–60 minutes (manual) | avg(session_end − session_start) for completed | Monthly | Product / HR |
| 4.7 | Claim Rejection / Rework Rate | 🟡 Medium | < 5% | ~25% (email back-and-forth) | (claims_rejected_and_resubmitted / total_claims) × 100 | Monthly | Finance / HR |

### Pillar 5: System Performance & Reliability

| KPI ID | KPI Name | Priority | Target | Baseline | Formula | Reporting Freq | Owner |
|---|---|---|---|---|---|---|---|
| 5.1 | System Uptime / Availability | 🔴 High | ≥ 99.5% | N/A | (uptime_minutes / total_minutes) × 100 | Monthly | IT Infrastructure |
| 5.2 | Average Page / API Response Time | 🔴 High | < 2 seconds (p95) | N/A | p95(response_time_ms) across endpoints | Weekly | IT / Vendor |
| 5.3 | ERP Integration Error Rate | 🔴 High | < 0.1% of sync records | N/A | (failed_sync_records / total_sync_records) × 100 | Daily | IT / Finance |
| 5.4 | Data Accuracy Rate (vs ERP Ledger) | 🔴 High | ≥ 99.9% | ~80% (manual reconciliation) | (matched_records / total_records) × 100 | Monthly | Finance / IT |
| 5.5 | Critical Incident Rate (P1) | 🟡 Medium | 0 P1 per month | N/A | count(incidents WHERE severity = 'P1') | Monthly | IT / Vendor |
| 5.6 | Mean Time to Resolve (MTTR) | 🟡 Medium | < 4h P1; < 24h P2 | N/A | avg(resolved_at − opened_at) by severity | Monthly | IT Operations |
| 5.7 | OCR / Receipt Scan Accuracy | 🟢 Low | ≥ 95% field-level | N/A | (correctly_parsed_fields / total_scanned_fields) × 100 | Monthly | IT / Vendor |

### Pillar 6: Strategic Impact & ROI

| KPI ID | KPI Name | Priority | Target | Baseline | Formula | Reporting Freq | Owner |
|---|---|---|---|---|---|---|---|
| 6.1 | Return on Investment (ROI) | 🔴 High | ≥ 200% within 24 months | Calculated from manual process cost study | ((benefits − total_system_cost) / total_system_cost) × 100 | Semi-annual | CFO |
| 6.2 | Annual Cost Savings vs Manual Process | 🔴 High | Defined at kickoff (₹ target) | Measured pre-go-live | manual_process_annual_cost − new_system_annual_cost | Annual | Finance |
| 6.3 | Finance Team Hours Saved per Month | 🔴 High | ≥ 40% reduction in T&E-related finance hours | Time-and-motion study | hours_spent_before − hours_spent_after | Monthly | Finance Head |
| 6.4 | Fraud / Erroneous Claim Recovery Rate | 🔴 High | ≥ 90% of identified fraudulent amounts recovered | No baseline | (amount_recovered / amount_identified_as_fraudulent) × 100 | Quarterly | Compliance / Finance |
| 6.5 | Management Reporting Timeliness | 🟡 Medium | Real-time dashboards (0-day lag) | Manual reports with 5–7 day lag | lag_days = now() − data_as_of_timestamp | Ongoing | Finance / PMO |
| 6.6 | Carbon / Sustainability Tracking Coverage | 🟢 Low | 100% of air and road travel tracked | 0% | (trips_with_emission_data / total_trips) × 100 | Quarterly | Sustainability / HR |
| 6.7 | Preferred Vendor Utilisation Rate | 🟢 Low | ≥ 70% via preferred vendors | Unknown | (preferred_vendor_bookings / total_bookings) × 100 | Monthly | Procurement |

### Constraint Summary

| Constraint Type | Count | Examples |
|---|---|---|
| Hard Targets (🔴 High priority) | 21 | All High-priority KPIs |
| Soft Targets (🟡 Medium priority) | 17 | Medium-priority KPIs |
| Low Priority / Nice-to-Have | 4 | 3.7, 4.6, 5.7, 6.6, 6.7 |

**Rule:** No feature may be released to production if it causes a regression in any High-priority KPI. Medium-priority KPI regressions require steering committee approval. Low-priority KPI regressions require product owner sign-off only.

---

## 6. Stopping Points (Out-of-Scope)

The following are explicitly excluded from this project scope and must not be included in Phase 1 delivery:

### 6.1 Excluded Capabilities

| # | Exclusion | Reason |
|---|---|---|
| 1 | **Global Distribution System (GDS) / Travel Booking Engine** | Scope is expense management only; travel booking is handled via existing corporate travel desk or external portals. No B2B GDS integration required. |
| 2 | **Multi-Currency FX Hedging & Real-Time Conversion** | Organisation operates in INR primarily. FX conversion uses ERP spot rates; no real-time FX engine within T&E system. |
| 3 | **Custom Payroll Module or Salary Disbursement** | Reimbursements integrate with existing payroll/ERP; no standalone payroll functionality. |
| 4 | **AI Chatbot / Conversational UI Support** | No virtual assistant in Phase 1. In-app help and FAQs suffice. May be evaluated in Phase 2 (Months 4–6). |
| 5 | **SAP-Specific Deep Customisations** | Integration uses standard ERP API/REST interfaces. No SAP BAPI, IDoc, or ABAP custom development unless generic REST endpoints exist. |
| 6 | **Custom Mobile Apps (Branded per Department)** | Single enterprise mobile app (or PWA) only. No department-specific white-label apps. |
| 7 | **Blockchain / Immutable Ledger for Expense Records** | Digital audit trail via standard database transaction logs is sufficient. Blockchain adds no incremental compliance value at this scale. |
| 8 | **Predictive Budget Analytics or ML-Based Cost Forecasting** | Descriptive reporting only in Phase 1. Predictive models may be evaluated post-Phase 3 (Month 12+). |
| 9 | **Travel Risk Management / Visa & Immigration Tracking** | Out of scope. HR/Admin handles visa logistics separately. |
| 10 | **Vendor Invoice Management (Accounts Payable Outside T&E)** | Scope limited to employee-submitted T&E claims. Third-party vendor invoices remain in existing AP workflow. |
| 11 | **Corporate Credit Card Automated Feed (Direct Feed)** | Phase 1: manual upload of card statements. Direct bank/issuer API integration evaluated post go-live based on adoption and ROI. |
| 12 | **Customisable Invoice / Receipt Design or Watermarking** | Use standard system-generated claim IDs and audit references. No custom document branding in Phase 1. |

### 6.2 Version 1 Boundary

This project delivers **Version 1.0** with the following hard boundary:

- **Included:** Travel request submission, approval, expense claim submission (web + mobile), policy checks, duplicate detection, ERP sync, reimbursement tracking, advance settlement, dashboards for all 6 pillars, admin configuration, and fraud alerting.
- **Not Included:** Travel booking, payroll, GDS, credit card feeds, AI chatbot, blockchain, predictive analytics.
- **Future Roadmap (Year 2+):** Corporate credit card feed, predictive budget analytics, travel booking integration, chatbot support — subject to ROI review.

---

## 7. Assumptions & Risks

Per PRD rules, all assumptions are explicitly stated and risk-labelled.

| # | Assumption | Risk Level | Impact if False |
|---|---|---|---|
| A1 | Organisation has an existing ERP/accounting system with a documented REST or SOAP API for GL posting and budget checks | 🔴 High | Integration not possible; manual reconciliation required; KPI 5.3, 5.4, 2.1 at risk |
| A2 | 10,000+ employees have corporate email and network/VPN access from all work locations | 🟡 Medium | Adoption barriers; KPI 4.1 at risk |
| A3 | Vendor (system provider) can commit to 99.5% uptime SLA and < 2s p95 response time contractually | 🔴 High | NFR-1 and NFR-2 cannot be guaranteed; KPI 5.1, 5.2 at risk |
| A4 | 2-week time-and-motion baseline study can be completed before Month 1 | 🟡 Medium | Baseline KPIs (2.5, 6.2, 6.3) lack benchmarks; ROI calculation (6.1) weakened |
| A5 | Finance team has capacity to act as product owner and participate in weekly steering reviews without dedicated PMO support | 🟡 Medium | Governance delays; KPI steering review cadence unsustainable |
| A6 | Mobile device penetration (smartphone) among employees is ≥ 70% | 🟡 Medium | Mobile KPI targets (4.3) unrealistic; UX suboptimal |
| A7 | Travel policies, per-diem rates, and approval matrices are documented and can be digitised within Month 1 | 🔴 High | Policy engine (REQ-2.3, REQ-7.1) cannot be configured; KPI 3.1, 2.4 at risk |
| A8 | OCR vendor can deliver ≥ 95% field-level accuracy for Indian receipt formats (English + regional languages, diverse print quality) | 🟡 Medium | KPI 5.7 missed; manual correction burden high; KPI 1.4 impacted |
| A9 | Organisation is registered for GST and requires GST-compliant tax categorization in expense claims | 🟡 Medium | KPI 3.6 irrelevant; tax logic still required for completeness |
| A10 | No major ERP replacement or finance system migration is planned during the 12-month implementation | 🔴 High | Integration rework; KPI 5.3, 5.4 disrupted; project timeline at risk |

---

## 8. Governance & Review Cadence

| Review Type | Frequency | Participants | Scope |
|---|---|---|---|
| Operational Dashboard Review | Weekly | Finance, HR, IT leads | Process efficiency, backlog, P1 incidents |
| KPI Steering Review | Monthly | CFO, CHRO, CTO, PMO | All 42 KPIs — trend analysis |
| Compliance & Audit Review | Quarterly | Internal Audit, Finance, Legal | Compliance pillar deep-dive |
| Strategic ROI Review | Semi-annual | C-suite, Board (if applicable) | Pillar 6 — ROI, savings, sustainability |
| Annual KPI Refresh | Annual | PMO, all pillar owners | Revise targets as system matures |

### KPI Ownership Matrix

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

## 9. Phase-Based Delivery Plan

| Phase | Timeline | Primary KPI Focus | Key Deliverables |
|---|---|---|---|
| **Go-live & Stabilisation** | Months 1–3 | Process Efficiency, System Performance | Core travel request + expense claim workflows (web + mobile), ERP integration, basic dashboards, admin config, SLA enforcement |
| **Adoption** | Months 4–6 | User Experience & Adoption | Training completion, CSAT surveys, mobile push notifications, support ticket tracking, UX refinements |
| **Optimisation** | Months 7–12 | Financial Control, Compliance | Advanced fraud detection, GST compliance enhancements, audit workflow, category-level budget variance alerts |
| **ROI Reporting** | Year 2+ | Strategic Impact & ROI | Predictive analytics (optional), sustainability reporting, preferred vendor tracking, comprehensive ROI dashboard |

### Phase 1 (Months 1–3) Minimum Viable Scope

**Must deliver before go-live:**
1. Employee self-service: travel request submission + expense claim submission (web + mobile)
2. Approval workflows: configurable multi-level routing with SLA timers and escalation
3. Policy engine: per-diem validation, category limits, GST checks
4. Duplicate detection: transaction fingerprinting at submission
5. ERP sync: bidirectional (budget check on submit, GL posting on approval)
6. Admin console: user/role management, policy configuration, approval matrix
7. Dashboards: operational, financial, compliance, adoption (weekly/monthly cadence)
8. Audit trail: immutable log of all transactions and actions
9. Reimbursement queue: payment tracking and advance settlement
10. Training portal and CSAT survey trigger on claim settlement

---

## 10. Definitions & Conventions

| Term | Definition |
|---|---|
| **Active User** | Employee who logs in and completes ≥ 1 transaction in the reporting period |
| **P1 Incident** | Complete system outage or data integrity failure affecting all users |
| **Out-of-Policy Claim** | Any claim exceeding defined per-diem, category limit, or non-reimbursable category |
| **Preferred Vendor** | Suppliers with negotiated corporate agreements (airlines, hotels, cab services) |
| **Baseline** | Pre-go-live measurement used as the before comparison for improvement tracking |
| **Settlement** | Reconciliation of travel advance against actual expenses incurred |
| **Straight-Through Processing** | Claim processed end-to-end without human intervention |
| **Time-and-Motion Study** | Baseline activity measuring actual time spent per transaction in the manual process |

---

## 11. Constraints & Guardrails

1. **No Shadow Process:** Employees must not maintain parallel manual/email processes post go-live. System adoption (KPI 4.1) is measured by active transaction volume.
2. **ERP Dependency:** All financial KPIs (2.1, 2.5, 2.7, 5.4) depend on accurate ERP sync. Any integration gap is treated as a P1 incident (KPI 5.5).
3. **Mobile-First for Receipts:** Receipt capture via mobile camera is the primary submission path. Desktop upload is secondary. Mobile usage (KPI 4.3) directly enables receipt compliance (KPI 3.3).
4. **Baseline Data Requirement:** KPI 6.1 (ROI), KPI 6.2 (cost savings), and KPI 6.3 (hours saved) require baseline data from the pre-go-live study. Project cannot declare Phase 4 success without this data.
5. **Audit Trail Non-Negotiable:** KPI 3.2 (100% audit trail) is a compliance requirement. No claim may exist in the system without a complete, tamper-proof audit log.
6. **Reporting SLA:** Operational dashboards (5.1, 5.2, 5.3, 1.6) must refresh within 1 hour. Financial close reports may have 24-hour lag.

---

*Document Version: 1.0 — Prepared for project initiation and stakeholder alignment.*  
*Review and update targets at 6-month post go-live milestone.*
