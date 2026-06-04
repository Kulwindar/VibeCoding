# Project Boundary Document

**Project:** Enterprise Employee Travel & Expense Management System (ETEMS)
**Project Code:** ETEMS-2025
**Organisation:** Large Enterprise (10,000+ employees, multi-location)
**Document Type:** Project Boundary & Directory Structure Reference
**Status:** Draft for Review
**Source Documents:** `PRD_&_KPI/prd.docx`, `PRD_&_KPI/kpi.md`

---

## 1. Executive Summary

ETEMS transforms the organisation from a manual, email-and-Excel-based travel & expense management process into a centralised digital platform. The system serves 10,000+ employees across multiple locations via web and mobile interfaces, with deep ERP, HRMS, and payroll integration.

Performance and success are governed by **42 KPIs across 6 strategic pillars**: Process Efficiency, Financial Control & Cost Management, Compliance & Policy Adherence, User Experience & Adoption, System Performance & Reliability, and Strategic Impact & ROI.

**Target Release:** Q3 2025 (Phase 1 Go-Live)

---

## 2. Project Boundary Summary

### In Scope

| Domain | Scope |
|---|---|
| Travel Request Management | Submission, multi-level approval, advance management, auto-escalation |
| Expense Claim Management | Submission (web + mobile), OCR receipt capture, policy validation, duplicate detection |
| Approval Workflows | Configurable routing, SLA enforcement, delegation, bulk approval, straight-through processing |
| Reimbursement & Settlement | Automated reimbursement queue, payroll integration, advance net-off |
| Reporting & Analytics | Real-time dashboards (operational, financial, compliance, adoption, system, ROI), standard reports, audit reports |
| Administration & Policy | Policy engine, approval matrix, user/role management, cost centre/budget config |
| Fraud Detection | Rule-based anomaly detection, alerting, investigation workflow |
| Mobile Experience | Native iOS/Android app or PWA, offline receipt capture, push notifications |
| Integrations | HRMS, ERP, Payroll, SSO/IdP, Email, OCR service, Carbon API, Vendor directory |
| Compliance | 100% audit trail, GST/tax accuracy, DPDPA compliance, 7-year data retention |

### Out of Scope (Phase 1)

| Exclusion | Reason |
|---|---|
| Online travel booking engine (GDS) | Scope is expense management only; handled via external portals |
| Corporate credit card issuing & direct feed | Manual upload in Phase 1; API integration evaluated post go-live |
| International tax compliance beyond GST | Organisation operates primarily in India |
| Payment gateway / bank API for reimbursements | Out-of-cycle handled via existing payroll/ERP workflow |
| AI chatbot / conversational support | In-app help and FAQs suffice for Phase 1 |
| Predictive analytics / ML forecasting | Descriptive reporting only in Phase 1 |
| Blockchain / immutable ledger | Standard database transaction logs sufficient |
| Historical data migration from legacy systems | Open balances entered manually; no bulk migration |
| Travel risk management / visa tracking | Handled separately by HR/Admin |

### Hard Constraints

- **No regression** in High-priority KPIs (14 total) at any release
- ERP integration is **Critical** — all financial KPIs depend on accurate sync
- 100% digital audit trail is **non-negotiable** (KPI 3.2)
- 2-week time-and-motion baseline study **mandatory** before go-live
- All P0/P1 functional requirements must pass UAT before go-live sign-off

---

## 3. Directory / Folder Structure

```
/Users/apple/Downloads/VibeCoding/
│
├── PRD_&_KPI/                          # Source documents & reference materials
│   ├── prd.docx                        # Primary PRD (authoritative requirements)
│   ├── prd.md                          # PRD text extraction / markdown version
│   ├── kpi.md                          # 42 KPIs across 6 pillars
│   └── problem_statement_2nd_June.txt  # Problem statement dated June 2nd
│
├── Personas/                           # Developer/team personas for implementation governance
│   ├── backend_engineer_persona.md
│   ├── frontend_engineer_persona.md
│   ├── api_architect_persona.md
│   ├── database_architect_persona.md
│   ├── devOps_engineer_persona.md
│   ├── security_engineer_persona.md
│   ├── performance_engineer_persona.md
│   ├── qa_engineer_persona.md
│   ├── code_reviewer_persona.md
│   ├── hallucination-prevention-engineer.md
│   ├── error-handling-engineer.md
│   └── tdd-engineer.md
│
├── Rules/                              # Development & process rules
│   ├── prd.md                          # PRD rules (user stories, acceptance criteria)
│   ├── requirements_analysis.md        # Requirements analysis guidelines
│   ├── api_design.md                   # API design standards
│   ├── backend_development.md          # Backend development conventions
│   ├── frontend_development.md         # Frontend development conventions
│   ├── database_design.md              # Database design standards
│   ├── security_review.md              # Security review checklist
│   ├── performance_review.md           # Performance review guidelines
│   ├── code_review.md                  # Code review standards
│   ├── qa_validation.md                # QA/validation rules
│   ├── tdd-rules.md                    # Test-driven development rules
│   ├── error-handling-rules.md         # Error handling standards
│   ├── refactoring.md                  # Refactoring guidelines
│   ├── deployment.md                   # Deployment procedures
│   ├── documentation.md                # Documentation standards
│   └── hallucination_prevention.md     # Hallucination prevention guidelines
│
├── Tasks/                              # Implementation task tracking (to be populated)
│   └── [Phase 1 / Phase 2 / ... task files]
│
├── .kilo/                              # Kilo configuration & planning
│   └── plans/
│       └── 1780549029254-hidden-comet.md  # Implementation plan history
│
├── project_scope.md                   # Scope document (functional + non-functional requirements)
├── project_boundary.md               # This document — project summary & directory overview
└── master_prompt.md                  # Master prompt / system context
```

---

## 4. Module-to-File Mapping

| Module | Key Source Files | Primary Owner |
|---|---|---|
| Travel Request Management | `PRD_&_KPI/prd.docx` §4, FR-1.1–1.3 | Backend Engineer |
| Expense Claim Submission | `PRD_&_KPI/prd.docx` §4, FR-2.1–2.4 | Frontend + Backend |
| Receipt Capture & OCR | `PRD_&_KPI/prd.docx` §4, FR-2.2; KPI 5.7 | Backend Engineer |
| Policy & Compliance | `PRD_&_KPI/prd.docx` §4, FR-2.3, FR-4.1; KPI 3.1, 3.6 | Backend Engineer |
| Approval Workflows | `PRD_&_KPI/prd.docx` FR-1.2, FR-2.4, FR-4.2; KPI 1.1, 1.2, 3.7 | Backend Engineer |
| Reimbursement | `PRD_&_KPI/prd.docx` FR-3.1–3.2; KPI 1.3, 2.6 | Backend Engineer |
| ERP Integration | `PRD_&_KPI/prd.docx` §6; KPI 5.3, 5.4 | API Architect + DevOps |
| Reporting & Dashboards | `PRD_&_KPI/prd.docx` FR-5.1–5.3; KPI 6.5 | Frontend Engineer |
| Security & Auth | `PRD_&_KPI/prd.docx` §5.4; Rules/security_review.md | Security Engineer |
| Mobile App | `PRD_&_KPI/prd.docx` §7.2; KPI 4.3 | Frontend Engineer |
| Database Design | `PRD_&_KPI/prd.docx` §7.2; Rules/database_design.md | Database Architect |
| Testing & QA | `PRD_&_KPI/prd.docx` §9.2; Rules/qa_validation.md, tdd-rules.md | QA Engineer |
| DevOps & Deployment | `PRD_&_KPI/prd.docx` §7.1; Rules/deployment.md | DevOps Engineer |

---

## 5. Phase Boundaries

| Phase | Timeline | In Scope | Out of Scope |
|---|---|---|---|
| **Phase 1 — Core** | Months 1–6 | Travel request/approval; expense claim (web); OCR; basic policy; Finance approval; ERP sync; reimbursement; email; standard reports; mobile (basic) | Advanced fraud rules; GST ITC report; carbon tracking; preferred vendor; mobile push |
| **Phase 2 — Mobile & Automation** | Months 7–12 | Full mobile app (iOS/Android); push notifications; STP; duplicate detection; advance management; HRMS sync; management dashboards | Travel booking engine; corporate card feed; predictive analytics |
| **Phase 3 — Intelligence & Compliance** | Months 13–18 | Fraud detection; GST ITC reporting; carbon tracking; preferred vendor; budget alerts; audit reports; policy self-service; BI layer | Multi-language (regional); travel booking |
| **Phase 4 — Strategic Expansion** | Year 2+ | Multi-language; travel booking integration; corporate card integration; multi-currency; sustainability dashboard | — |

---

## 6. Key Boundaries & Guardrails

1. **Single Source of Truth:** `PRD_&_KPI/prd.docx` is the authoritative requirements document. All scope decisions trace back to it.
2. **KPI-Driven Delivery:** All features must map to at least one KPI. No orphan features.
3. **Phase 1 Scope Lock:** No changes after PRD sign-off without Steering Committee approval (Finance + IT + HR).
4. **Persona Governance:** All implementation work must follow the relevant persona rules in `Personas/` and `Rules/`.
5. **Documentation First:** All API contracts, database schemas, and architecture decisions documented before code.
6. **No Shadow Process:** Employees must not maintain parallel manual/email processes post go-live.

---

*Document Version: 1.0 — Prepared for project initiation and stakeholder alignment.*
