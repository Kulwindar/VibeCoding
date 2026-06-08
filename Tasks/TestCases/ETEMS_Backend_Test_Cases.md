# ETEMS Backend Test Cases

## Module 1: Travel Request Management

### Test Suite: Travel Request Submission

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| TR-001 | Employee submits travel request with valid data through API | Positive | High | KPI 1.1 |
| TR-002 | System auto-populates reporting manager and cost centre from HRMS | Positive | High | N/A |
| TR-003 | Employee saves draft and resumes submission later | Positive | Medium | N/A |
| TR-004 | Submission fails without mandatory fields (purpose, destination, dates, estimated cost, cost centre, project code) | Negative | High | N/A |
| TR-005 | Submission fails with invalid date range (end date before start date) | Negative | High | N/A |
| TR-006 | System supports domestic and international travel types | Positive | Medium | N/A |
| TR-007 | Employee attaches supporting documents (JPG, PNG, PDF, max 10MB) | Positive | Medium | N/A |
| TR-008 | Attachment upload rejects unsupported formats (e.g., .exe, .zip) | Negative | High | N/A |
| TR-009 | Duplicate travel request detection (same employee, same dates, same destination within 7 days) | Edge Case | Medium | N/A |
| TR-010 | Estimated cost field accepts zero amount (internal travel, no cost) | Edge Case | Low | N/A |
| TR-011 | Formatted amount validation for multiple currencies with auto-conversion to INR | Boundary | High | KPI 2.1 |
| TR-012 | Submission concurrent request handling (same employee submits from two sessions) | Edge Case | Medium | KPI 5.3 |
| TR-013 | Large batch travel request submission by admin on behalf of employees | Boundary | Low | N/A |
| TR-014 | Special characters and SQL injection attempts in mandatory text fields | Negative | High | KPI 3.2 |
| TR-015 | Unicode and regional language characters in destination and purpose fields | Edge Case | Medium | N/A |

---

### Test Suite: Travel Request Approval Workflow

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| TA-001 | Configurable multi-level approval workflow (L1 → L2 → L3) executes correctly | Positive | High | KPI 1.1 |
| TA-002 | Approval thresholds trigger L3 Finance approval for high-value requests | Positive | High | KPI 1.1 |
| TA-003 | Approver receives push notification and email within 60 seconds of submission | Positive | High | KPI 1.1 |
| TA-004 | Approver can approve with mandatory comment | Positive | High | N/A |
| TA-005 | Approver can reject with mandatory comment and reason | Positive | High | N/A |
| TA-006 | Approver can return for clarification with mandatory comment | Positive | High | N/A |
| TA-007 | Auto-escalation to next level after SLA breach (default 24 hours) | Positive | High | KPI 1.1 |
| TA-008 | Delegation of approval authority during leave period activates correctly | Positive | Medium | KPI 3.7 |
| TA-009 | Submission without approval authority (unauthorised user) returns 403 | Negative | High | KPI 5.3 |
| TA-010 | Approval by non-sequential approver (skipping levels) is rejected | Negative | High | N/A |
| TA-011 | Approval after request is already cancelled returns appropriate error | Negative | Medium | N/A |
| TA-012 | Concurrent approval by two approvers at same level - first wins, second rejected | Edge Case | Medium | KPI 5.3 |
| TA-013 | Maximum approval threshold boundary test (exactly at threshold triggers L2, below triggers L1) | Boundary | High | KPI 1.1 |
| TA-014 | SLA calculation correct across timezone boundaries | Edge Case | Medium | KPI 1.1 |
| TA-015 | Approval data record contains correct exception log entries for audit trail | Positive | High | KPI 3.2 |
| TA-016 | Retry logic: approval state machine recovers after notification service failure | Edge Case | Medium | KPI 5.3 |

---

### Test Suite: Travel Advance Management

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| TM-001 | Employee requests advance linked to approved travel request | Positive | High | KPI 2.6 |
| TM-002 | Advance request routed through Finance approval | Positive | High | KPI 2.6 |
| TM-003 | System tracks advance issuance, outstanding balance, settlement status | Positive | High | KPI 2.6 |
| TM-004 | Automated reminders sent after grace period (default 30 days post return) | Positive | Medium | KPI 2.6 |
| TM-005 | Finance sets maximum advance amount per employee grade/level | Positive | High | KPI 2.6 |
| TM-006 | Advance request exceeds grade limit is rejected with clear error | Negative | High | KPI 2.6 |
| TM-007 | Advance request for non-existent/unapproved travel request is rejected | Negative | High | N/A |
| TM-008 | Settlement automatically nets off advance against reimbursement | Positive | High | KPI 2.6 |
| TM-009 | Recovery request generated when actual expenses less than advance | Positive | High | KPI 2.6 |
| TM-010 | Net payable calculated correctly when actual expenses exceed advance | Positive | High | KPI 2.6 |
| TM-011 | Advance settlement boundary: exactly at limit accepted | Boundary | Medium | KPI 2.6 |
| TM-012 | Overdue advance data correctly reflected in outstanding balance report | Edge Case | Medium | KPI 2.6 |
| TM-013 | Bulk reminder generation for 10,000+ overdue advances | Boundary | Medium | KPI 5.2 |

---

## Module 2: Expense Claim Submission

### Test Suite: Expense Report Creation

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| ER-001 | Employee creates expense report with multiple line items | Positive | High | KPI 1.2 |
| ER-002 | System supports all standard categories (flights, trains, hotels, local transport, meals, etc.) | Positive | High | N/A |
| ER-003 | Multi-currency expense entry with automatic INR conversion via configured rate source | Positive | High | KPI 2.1 |
| ER-004 | Line item validation: date, category, amount, currency, vendor, purpose, project code, cost centre | Positive | High | N/A |
| ER-005 | Expense linked to approved travel request | Positive | Medium | N/A |
| ER-006 | Standalone expense claim submission without travel request | Positive | Medium | N/A |
| ER-007 | Draft save and resume functionality | Positive | Medium | N/A |
| ER-008 | Submission fails when mandatory line item fields are missing | Negative | High | N/A |
| ER-009 | Submission fails with past date older than configurable claim window (default 7 days) | Negative | High | KPI 3.4 |
| ER-010 | Future dated expense claim handled per policy (rejected or flagged) | Negative | Medium | N/A |
| ER-011 | Duplicate detection: same date, same vendor, same amount within 90 days blocks submission | Positive | High | KPI 2.3 |
| ER-012 | Currency conversion test with extreme exchange rate values | Boundary | Medium | KPI 2.1 |
| ER-013 | Maximum line items per report boundary test (1000+) | Boundary | Low | KPI 5.2 |
| ER-014 | Total amount rounding and precision across multiple currencies | Edge Case | Medium | KPI 2.1 |
| ER-015 | Concurrency: same employee submits duplicate report simultaneously | Edge Case | Medium | KPI 5.3 |

---

### Test Suite: Receipt Capture & OCR

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| RC-001 | Receipt image (JPG, PNG) uploaded and OCR parsed within 5 seconds | Positive | High | KPI 5.7 |
| RC-002 | PDF receipt upload and parsing | Positive | High | KPI 5.7 |
| RC-003 | OCR extracts date, merchant name, amount with ≥ 95% field-level accuracy | Positive | High | KPI 5.7 |
| RC-004 | OCR values are editable by employee before submission | Positive | High | N/A |
| RC-005 | Warning displayed when expense above ₹500 lacks receipt | Positive | High | KPI 3.3 |
| RC-006 | Upload rejects files > 10MB | Negative | High | N/A |
| RC-007 | Upload rejects corrupt/invalid image files | Negative | High | N/A |
| RC-008 | Handwritten receipt OCR handles gestational error gracefully | Edge Case | Medium | KPI 5.7 |
| RC-009 | Faded/low-light receipt image fallback to manual entry | Edge Case | Medium | KPI 5.7 |
| RC-010 | Vernacular language receipt handling (Hindi, regional languages) | Edge Case | Medium | KPI 5.7 |
| RC-011 | OCR confidence score below threshold triggers manual review workflow | Boundary | High | KPI 3.3 |
| RC-012 | Simultaneous receipt upload for same expense from multiple sessions | Edge Case | Medium | KPI 5.3 |
| RC-013 | Batch OCR processing of 100+ receipts within SLA | Boundary | Medium | KPI 5.7 |
| RC-014 | Receipt image storage encryption and access control | Security | High | KPI 3.2 |

---

### Test Suite: Policy Validation Engine

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| PV-001 | Real-time policy validation on each expense line item at submission | Positive | High | KPI 3.1 |
| PV-002 | Policy violation flagged with clear reason in plain language | Positive | High | KPI 3.1 |
| PV-003 | Employee can correct entry after policy violation flagged | Positive | High | KPI 3.1 |
| PV-004 | Employee can submit with justification for configurable violation types | Positive | High | KPI 3.1 |
| PV-005 | Per-diem limit by city/grade enforced correctly | Positive | High | KPI 3.1 |
| PV-006 | Category spending caps enforced | Positive | High | KPI 3.1 |
| PV-007 | Non-reimbursable category claims blocked | Positive | High | KPI 3.1 |
| PV-008 | Receipt threshold enforcement (default ₹500) | Positive | High | KPI 3.3 |
| PV-009 | Advance utilisation rules enforced (expense linked to advance deducted) | Positive | High | KPI 2.6 |
| PV-010 | Admin updates policy rules without code deployment | Positive | Medium | N/A |
| PV-011 | Policy change versioned with effective date; historical claims evaluated against policy in effect | Positive | High | N/A |
| PV-012 | Duplicate claim detection: same date, same vendor, same amount within 90 days blocked | Positive | High | KPI 2.3 |
| PV-013 | Near-duplicate detection (amount off by 1-2 INR, same date/vendor) | Edge Case | Medium | KPI 2.3 |
| PV-014 | Policy violation at exact boundary (claim amount exactly equals per-diem limit) | Boundary | High | KPI 3.1 |
| PV-015 | Concurrent policy updates during active claim submission | Edge Case | Medium | N/A |
| PV-016 | Policy engine performance: 1,000 validations per hour under load | Boundary | High | KPI 5.2 |

---

### Test Suite: Expense Claim Approval Workflow

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| EA-001 | Configurable approval chain (Line Manager → Finance Reviewer → Finance Controller for high-value) | Positive | High | KPI 1.2 |
| EA-002 | Approver sees full expense report with policy flags, receipt thumbnails, budget impact | Positive | High | KPI 1.2 |
| EA-003 | Finance Reviewer approves without manual action (STP) when all checks pass | Positive | High | KPI 1.4 |
| EA-004 | Finance Reviewer approves with override for flagged claim | Positive | High | N/A |
| EA-005 | Finance Reviewer rejects with mandatory comment | Positive | High | N/A |
| EA-006 | Finance Reviewer queries individual line item with comment | Positive | High | N/A |
| EA-007 | Approved claims auto-queued for reimbursement processing | Positive | High | KPI 1.2 |
| EA-008 | Returned/rejected claims sent back to employee with mandatory comments | Positive | High | N/A |
| EA-009 | Approval by unauthorised user rejected | Negative | High | N/A |
| EA-010 | Approval of already-processed claim rejected with error | Negative | Medium | N/A |
| EA-011 | High-value claim boundary: exactly at threshold triggers Controller review | Boundary | High | KPI 1.2 |
| EA-012 | Partially approved claim handling for multi-line reports | Edge Case | High | N/A |
| EA-013 | Audit log records every approval action with timestamp and user identity | Positive | High | KPI 3.2 |

---

## Module 3: Reimbursement Processing

### Test Suite: Reimbursement Workflow

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| RP-001 | Approved claims auto-queued for reimbursement without manual re-entry | Positive | High | KPI 1.3 |
| RP-002 | Payroll integration processes reimbursement in next payroll cycle | Positive | High | KPI 1.3 |
| RP-003 | Out-of-cycle bank transfer processed on Finance request | Positive | Medium | KPI 1.3 |
| RP-004 | Employee receives notification with amount and expected credit date | Positive | High | KPI 1.3 |
| RP-005 | Finance places individual claim on hold without blocking other claims | Positive | Medium | KPI 1.3 |
| RP-006 | Hold claim released and queued for next run | Positive | Medium | N/A |
| RP-007 | Processing fails when payroll API unavailable - dead-letter queue used | Negative | High | KPI 5.3 |
| RP-008 | Invalid bank details detected before transfer initiation | Negative | High | N/A |
| RP-009 | Reimbursement amount zero handling (fully settled by advance) | Edge Case | Medium | KPI 2.6 |
| RP-010 | Concurrent claim submissions during payroll cut-off window | Edge Case | Medium | KPI 5.3 |
| RP-011 | Duplicate reimbursement prevention for same claim ID | Negative | High | KPI 2.3 |
| RP-012 | Reconciliation mismatch triggers alert to Finance | Edge Case | High | KPI 5.4 |

---

### Test Suite: Advance Settlement

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| AS-001 | Automatic net-off of advance balance against reimbursement | Positive | High | KPI 2.6 |
| AS-002 | Recovery request generated when actual expenses < advance | Positive | High | KPI 2.6 |
| AS-003 | Net payable calculated when expenses > advance | Positive | High | KPI 2.6 |
| AS-004 | Recovery request email notification to employee | Positive | Medium | KPI 2.6 |
| AS-005 | Settlement boundary: exact advance amount equals expenses - zero net | Boundary | Medium | KPI 2.6 |
| AS-006 | Multiple advances for single trip settled correctly | Edge Case | Medium | KPI 2.6 |
| AS-007 | Currency conversion for international advance settlement | Edge Case | Medium | KPI 2.6 |

---

## Module 4: Administration & Policy Configuration

### Test Suite: Policy Management Console

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| PM-001 | Admin configures per-diem rates by city tier and employee grade | Positive | High | KPI 3.1 |
| PM-002 | Admin configures hotel caps, meal limits, category caps | Positive | High | KPI 3.1 |
| PM-003 | Admin maintains non-reimbursable item list | Positive | High | KPI 3.1 |
| PM-004 | Admin configures advance limits per grade | Positive | High | KPI 2.6 |
| PM-005 | Admin configures receipt thresholds | Positive | High | KPI 3.3 |
| PM-006 | Admin configures claim submission window (days post travel) | Positive | High | KPI 3.4 |
| PM-007 | Policy change versioned with effective date in isolated storage | Positive | High | N/A |
| PM-008 | Historical claims evaluated against policy version active at travel date | Positive | High | N/A |
| PM-009 | Unauthorised user access to admin console rejected (403) | Negative | High | KPI 5.3 |
| PM-010 | Invalid date range for policy effective dates rejected | Negative | High | N/A |
| PM-011 | Policy update concurrent modification handles gracefully | Edge Case | Medium | N/A |
| PM-012 | Policy export to JSON/CSV for backup and audit | Positive | Medium | N/A |

---

### Test Suite: User & Role Management

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| UR-001 | RBAC roles assigned: Employee, Line Manager, Finance Reviewer, Finance Controller, HR Admin, System Admin, Audit/Read-Only | Positive | High | N/A |
| UR-002 | Role sync from HRMS integration per configurable schedule | Positive | High | N/A |
| UR-003 | Delegation of approval authority with defined period | Positive | High | N/A |
| UR-004 | Cross-department data access without explicit grant returns 403 | Negative | High | KPI 3.2 |
| UR-005 | User can only access data within organisational scope | Positive | High | KPI 3.2 |
| UR-006 | Concurrent role modification during active session handled safely | Edge Case | Medium | N/A |
| UR-007 | Max concurrent sessions per user enforced | Edge Case | Low | N/A |

---

### Test Suite: Cost Centre & Budget Management

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| CB-001 | Cost centre hierarchy synced from ERP | Positive | High | N/A |
| CB-002 | Budget allocations configurable per fiscal period | Positive | High | KPI 2.1 |
| CB-003 | Real-time budget utilisation alert at 75% threshold | Positive | High | KPI 2.1 |
| CB-004 | Real-time budget utilisation alert at 90% threshold | Positive | High | KPI 2.1 |
| CB-005 | Alert at 100% budget blocks further claims unless override granted | Positive | High | KPI 2.1 |
| CB-006 | Budget data sync failure triggers compensating transaction and alert | Negative | High | KPI 5.3 |
| CB-007 | Zero budget allocation handling for new cost centre | Edge Case | Medium | N/A |
| CB-008 | Budget recalculation after mid-period correction | Edge Case | Medium | KPI 2.1 |

---

## Module 5: Reporting & Analytics

### Test Suite: Management Dashboard

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MD-001 | Dashboard displays total T&E spend vs budget | Positive | High | KPI 2.1 |
| MD-002 | Spend by department, cost centre, category breakdown displayed | Positive | High | KPI 2.1 |
| MD-003 | Pending approval queue size visible | Positive | High | KPI 1.6 |
| MD-004 | Out-of-policy claim volume and value displayed | Positive | High | KPI 2.4 |
| MD-005 | Top spenders list generated | Positive | High | KPI 2.1 |
| MD-006 | Finance Controller accesses full organisation dashboard | Positive | High | N/A |
| MD-007 | Department Head accesses department-scoped dashboard only | Positive | High | N/A |
| MD-008 | Dashboard refresh lag ≤ 15 minutes | Positive | High | KPI 5.2 |
| MD-009 | Budget alert at 90% threshold triggers notification to Finance Controller and Department Head | Positive | High | KPI 2.1 |
| MD-010 | Unauthorised user access to Finance Controller dashboard rejected | Negative | High | KPI 5.3 |
| MD-011 | Dashboard renders correctly with 5,000+ concurrent users | Boundary | High | KPI 5.2 |
| MD-012 | Query performance: department drill-down returns in < 2 seconds for 12 months data | Boundary | High | KPI 5.2 |

---

### Test Suite: Standard Reports

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| SR-001 | Expense Claim Status Report generated and exported to Excel (.xlsx) | Positive | High | N/A |
| SR-002 | Policy Violation Report generated and exported to PDF | Positive | High | N/A |
| SR-003 | Advance Settlement Report generated | Positive | Medium | N/A |
| SR-004 | Reimbursement Register exported to Excel | Positive | High | N/A |
| SR-005 | Budget Utilisation Report generated | Positive | High | N/A |
| SR-006 | Vendor Analysis Report generated | Positive | Medium | N/A |
| SR-007 | Carbon Emission Report generated | Positive | Medium | KPI 6.6 |
| SR-008 | Preferred Vendor Utilisation Report generated | Positive | Medium | KPI 6.7 |
| SR-009 | Report generation completes within 30 seconds for 12 months of data | Positive | High | N/A |
| SR-010 | Scheduled report emailed to defined recipients at scheduled time | Positive | Medium | N/A |
| SR-011 | Report generation fails gracefully with large dataset (> 100,000 records) | Negative | Medium | N/A |
| SR-012 | Concurrent report generation by 50+ users | Boundary | Medium | KPI 5.2 |

---

### Test Suite: Audit & Compliance Reports

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| AC-001 | Audit Trail Report shows every action (submission, edit, approval, rejection, payment) with timestamp and user | Positive | High | KPI 3.2 |
| AC-002 | Audit trail is immutable - no updates or deletes allowed | Positive | High | KPI 3.2 |
| AC-003 | Audit log retention 7 years (immutable S3 storage) | Positive | High | N/A |
| AC-004 | GST ITC Report generated for Finance and Tax teams | Positive | High | KPI 3.6 |
| AC-005 | Audit log includes source, payload hash, timestamp, status for all actions | Positive | High | KPI 6.3 |
| AC-006 | Audit log search and filter by transaction ID, user, date range | Positive | Medium | KPI 3.2 |
| AC-007 | Unauthorised access to audit log rejected | Negative | High | KPI 3.2 |
| AC-008 | Audit log growth handled without performance degradation | Edge Case | Medium | KPI 5.2 |

---

## Module 6: Integration Services

### Test Suite: HRMS Integration

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| HI-001 | Daily sync retrieves employee master data | Positive | High | N/A |
| HI-002 | Real-time sync on employee data change (new hire, role change, termination) | Positive | High | N/A |
| HI-003 | Reporting hierarchy correctly mapped | Positive | High | N/A |
| HI-004 | Cost centre and grade data synced | Positive | High | N/A |
| HI-005 | Leave status imported for delegation logic | Positive | Medium | N/A |
| HI-006 | HRMS API unavailable - system uses last known data with alert | Negative | High | KPI 5.3 |
| HI-007 | Partial sync failure with retry logic (exponential backoff) | Edge Case | High | KPI 5.3 |
| HI-008 | Dead-letter queue captures failed sync records for manual review | Edge Case | Medium | KPI 5.3 |

---

### Test Suite: ERP Integration

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| EI-001 | Cost centre budgets imported from ERP | Positive | High | N/A |
| EI-002 | Approved claims exported as journal entries to ERP | Positive | High | N/A |
| EI-003 | Vendor master imported | Positive | High | N/A |
| EI-004 | Real-time sync for approvals (sub-second latency) | Positive | High | KPI 5.3 |
| EI-005 | Nightly reconciliation completes without errors | Positive | High | KPI 5.3 |
| EI-006 | ERP sync error rate < 0.1% of records | Positive | High | KPI 5.3 |
| EI-007 | ERP API timeout handled with retry and fallback | Negative | High | KPI 5.3 |
| EI-008 | Reconciliation mismatch triggers alert to Finance/IT within 5 minutes | Negative | High | KPI 5.4 |
| EI-009 | ERP data format validation rejects malformed payloads | Negative | High | N/A |
| EI-010 | Integration failure continues sync after ERP recovery (resilience test) | Edge Case | High | KPI 5.3 |

---

### Test Suite: Payroll Integration

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| PI-001 | Approved reimbursement amounts sent to payroll system | Positive | High | KPI 1.3 |
| PI-002 | Employee bank details reference passed securely | Positive | High | N/A |
| PI-003 | Out-of-cycle payment instruction processed on demand | Positive | Medium | KPI 1.3 |
| PI-004 | Payroll system unavailable - retry with exponential backoff | Negative | High | KPI 5.3 |
| PI-005 | Invalid bank detail format rejected before transmission | Negative | High | N/A |
| PI-006 | Payroll API authentication failure handled with alert | Negative | High | N/A |

---

### Test Suite: Notification Services

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| NS-001 | Email notification sent for approval request within 60 seconds | Positive | High | N/A |
| NS-002 | Push notification sent to mobile app | Positive | High | N/A |
| NS-003 | Reminder notification sent for pending approvals | Positive | Medium | N/A |
| NS-004 | Status update notifications (approved, rejected, paid) | Positive | High | N/A |
| NS-005 | SMTP server failure - message queued and retried | Negative | High | KPI 5.3 |
| NS-006 | Push notification failure falls back to email | Negative | Medium | N/A |
| NS-007 | Bulk notification to 10,000+ users within 5 minutes | Boundary | Medium | KPI 5.2 |
| NS-008 | Notification delivery failure triggers dead-letter queue | Edge Case | Medium | KPI 5.3 |

---

### Test Suite: OCR / AI Receipt Parser Integration

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| OC-001 | Receipt image sent to OCR service, parsed fields returned | Positive | High | KPI 5.7 |
| OC-002 | Parsed field values auto-populated in expense form | Positive | High | N/A |
| OC-003 | OCR field-level accuracy ≥ 95% on clean receipts | Positive | High | KPI 5.7 |
| OC-004 | OCR service timeout (> 5s) handled with manual fallback | Negative | High | N/A |
| OC-005 | Invalid image format rejected by OCR service | Negative | High | N/A |
| OC-006 | Handwritten receipt low confidence triggers manual entry prompt | Edge Case | Medium | KPI 5.7 |

---

### Test Suite: Carbon Emission API & Preferred Vendor Directory

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| CE-001 | Trip details sent to Carbon API on travel request approval | Positive | Medium | KPI 6.6 |
| CE-002 | Emission value in kg CO2 stored and reported | Positive | Medium | KPI 6.6 |
| CE-003 | Carbon API failure logged without blocking approval flow | Negative | Medium | KPI 5.3 |
| PV-001 | Preferred vendor directory synced weekly | Positive | Medium | KPI 6.7 |
| PV-002 | Non-preferred vendor booking flagged in analytics | Positive | Medium | KPI 6.7 |

---

## Cross-Cutting Concerns Tests

### Test Suite: Authentication & Authorization

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| AU-001 | SSO login via SAML 2.0 works correctly | Positive | High | N/A |
| AU-002 | MFA required for Finance, Admin, and Approver roles | Positive | High | N/A |
| AU-003 | JWT token expiry enforces re-authentication | Positive | High | N/A |
| AU-004 | Session auto-logout after 30 minutes inactivity | Positive | High | N/A |
| AU-005 | Concurrent session limits enforced per user | Positive | Medium | N/A |
| AU-006 | Invalid credentials return 401 with generic error (no user enumeration) | Security | High | N/A |
| AU-007 | Token replay attack detected and rejected | Security | High | N/A |
| AU-008 | RBAC enforcement across all API endpoints | Security | High | KPI 3.2 |
| AU-009 | JWT secret rotation handled without user disruption | Edge Case | Medium | N/A |

---

### Test Suite: API Gateway & Rate Limiting

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| AG-001 | Authenticated API call routes to correct microservice | Positive | High | N/A |
| AG-002 | Rate limiting applied per user/IP | Positive | High | N/A |
| AG-003 | Rate limit exceeded returns 429 with retry-after header | Negative | High | N/A |
| AG-004 | API versioning: v1 and v2 endpoints coexist during migration | Positive | Medium | N/A |
| AG-005 | Malformed JSON payload returns 400 with descriptive error | Negative | High | N/A |
| AG-006 | CORS headers correctly configured | Security | Medium | N/A |

---

### Test Suite: Database & Data Integrity

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| DB-001 | Transaction rollback on partial failure maintains data consistency | Positive | High | KPI 5.4 |
| DB-002 | PostgreSQL connection pooling handles 5,000 concurrent sessions | Boundary | High | KPI 5.2 |
| DB-003 | Redis cache hit rate > 90% for read-heavy endpoints | Positive | Medium | KPI 5.2 |
| DB-004 | Database failover to standby without data loss | Positive | High | KPI 5.5 |
| DB-005 | Daily full backup and incremental backup every 4 hours | Positive | High | N/A |
| DB-006 | Partition/sharding strategy scales to 15,000 employees | Boundary | Medium | N/A |
| DB-007 | SQL injection prevention across all repository queries | Security | High | N/A |
| DB-008 | Audit log append-only enforcement at database level | Security | High | KPI 3.2 |

---

### Test Suite: Event-Driven Architecture (Kafka/SQS)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| EA-001 | Event published to message broker on claim approval | Positive | High | N/A |
| EA-002 | Consumer processes event and triggers notification within SLA | Positive | High | N/A |
| EA-003 | Dead-letter queue captures unprocessable messages | Positive | High | N/A |
| EA-004 | Broker unavailability: messages queued locally and sent on recovery | Negative | High | KPI 5.3 |
| EA-005 | Message ordering guaranteed for approval chain events | Positive | High | N/A |
| EA-006 | Event replay from DLQ after fix | Edge Case | Medium | N/A |

---

### Test Suite: Error Handling & Logging

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| EH-001 | All API errors return consistent error response schema with error code, message, timestamp | Positive | High | N/A |
| EH-002 | 500 errors do not leak stack traces or internal details in production | Security | High | N/A |
| EH-003 | Unhandled exception caught by global handler and logged with correlation ID | Positive | High | N/A |
| EH-004 | Correlation ID propagated across all microservices for traceability | Positive | High | N/A |
| EH-005 | Sensitive data (passwords, tokens, PAN, bank details) masked in logs | Security | High | N/A |
| EH-006 | Integration failure triggers alert to IT Operations within 5 minutes | Positive | High | KPI 5.3 |
| EH-007 | Retry logic with exponential backoff for transient errors | Positive | High | KPI 5.3 |
| EH-008 | Circuit breaker pattern applied for downstream service failures | Edge Case | High | KPI 5.3 |

---

### Test Suite: Data Encryption & Security

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| DS-001 | AES-256 encryption applied to stored data (receipts, personal details, financial records) | Security | High | KPI 3.2 |
| DS-002 | TLS 1.3 enforced for all client-server and server-server communication | Security | High | N/A |
| DS-003 | PAN and bank account details encrypted with additional field-level encryption | Security | High | N/A |
| DS-004 | Data residency: primary data stored in India-based data centres | Security | High | KPI 3.6 |
| DS-005 | GDPR/DPDPA: data deletion request processed within mandated timeframe | Security | High | N/A |
| DS-006 | Dependency scanning in CI/CD pipeline | Security | Medium | N/A |
| DS-007 | OWASP Top 10 compliance verified | Security | High | N/A |

---

## API Contracts & Contract Tests

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| CT-001 | POST /api/v1/travel-requests contract test (request/response schema) | Positive | High | N/A |
| CT-002 | GET /api/v1/travel-requests/{id} contract test | Positive | High | N/A |
| CT-003 | POST /api/v1/expense-claims contract test | Positive | High | N/A |
| CT-004 | POST /api/v1/expense-claims/{id}/approve contract test | Positive | High | N/A |
| CT-005 | POST /api/v1/expense-claims/{id}/reject contract test | Positive | High | N/A |
| CT-006 | GET /api/v1/reports/summary contract test | Positive | High | N/A |
| CT-007 | API versioning: backward compatibility maintained | Positive | High | N/A |
| CT-008 | Breaking change requires 90-day deprecation notice | Positive | High | N/A |

---

## Performance & Load Tests (Backend API)

| Test ID | Test Scenario | Target | Priority | KPI Link |
|---------|--------------|--------|----------|----------|
| PL-001 | API response time: read operations < 500ms (p95) | p95 < 500ms | High | KPI 5.2 |
| PL-002 | API response time: write operations < 1 second (p95) | p95 < 1s | High | KPI 5.2 |
| PL-003 | System handles 5,000 concurrent active sessions | 5,000 users | High | N/A |
| PL-004 | Expense claim submission throughput: 1,000 per hour during peak | 1,000/hour | High | N/A |
| PL-005 | Standard report generation: 12 months data within 30 seconds | < 30s | High | N/A |
| PL-006 | OCR processing: receipt scan results returned within 5 seconds of upload | < 5s | High | KPI 5.7 |
| PL-007 | Approval workflow transition completes within 10 seconds | < 10s | High | KPI 1.1 |
| PL-008 | Dashboard data refresh completes within 15 minutes | < 15 min | High | KPI 5.2 |
| PL-009 | Load test: simulate 10,000 user sign-in storm at go-live | No errors | High | N/A |
| PL-010 | Stress test: system recovers gracefully from 200% peak load | Auto-scaling | Medium | N/A |

---

## Regression & Integration Tests

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| RG-001 | End-to-end: travel request → approval → advance → expense → reimbursement → payroll | Integration | High | N/A |
| RG-002 | End-to-end with policy violation, correction, and resubmission | Integration | High | N/A |
| RG-003 | End-to-end multi-level approval with auto-escalation | Integration | High | N/A |
| RG-004 | End-to-end OCR → policy check → STP → payment | Integration | High | KPI 1.4 |
| RG-005 | ERP sync failure recovery and reconciliation | Integration | High | KPI 5.3 |
| RG-006 | Previous sprint bug fixes do not regress | Regression | High | TDD Rule 7 |
| RG-007 | Database migration scripts tested on production-like dataset | Regression | High | N/A |
