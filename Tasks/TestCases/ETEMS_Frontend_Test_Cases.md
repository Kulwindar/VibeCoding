# ETEMS Frontend Test Cases

## Module 1: Web Application (React / Next.js)

### Test Suite: Authentication & SSO

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| WA-001 | SSO login via SAML 2.0 redirects correctly and returns authenticated session | Positive | High | N/A |
| WA-002 | SSO login via OAuth 2.0 works for supported IdP | Positive | High | N/A |
| WA-003 | MFA challenge presented for Finance, Admin, and Approver roles | Positive | High | N/A |
| WA-004 | Session persists across page refreshes within 30-minute window | Positive | High | N/A |
| WA-005 | Auto-logout after 30 minutes of inactivity with unsaved data warning | Positive | High | N/A |
| WA-006 | Invalid credentials show generic error (no user enumeration) | Security | High | N/A |
| WA-007 | Rate limiting on login attempts: 5 failed attempts locks for 15 minutes | Negative | High | N/A |
| WA-008 | Concurrent session limit enforced per user | Edge Case | Medium | N/A |
| WA-009 | Token expiry during active session triggers silent re-auth or redirect | Edge Case | Medium | N/A |

---

### Test Suite: Travel Request Submission (Web)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| TRW-001 | New travel request form accessible and functional | Positive | High | KPI 1.1 |
| TRW-002 | Auto-population of reporting manager from HRMS data | Positive | High | N/A |
| TRW-003 | Auto-population of cost centre from HRMS data | Positive | High | N/A |
| TRW-004 | Draft save and resume with local/remote persistence | Positive | Medium | N/A |
| TRW-005 | Domestic and international travel type toggle updates form fields | Positive | Medium | N/A |
| TRW-006 | File attachment: JPG, PNG, PDF upload preview | Positive | Medium | N/A |
| TRW-007 | Required field validation: empty submission blocked with field-level errors | Positive | High | N/A |
| TRW-008 | Date validation: end date before start date blocked | Negative | High | N/A |
| TRW-009 | Amount validation: negative values blocked | Negative | High | N/A |
| TRW-010 | Future date validation for claim submission date | Negative | High | KPI 3.4 |
| TRW-011 | File upload rejects unsupported formats (.exe, .zip, .doc) | Negative | High | N/A |
| TRW-012 | Maximum file size (10MB) enforced | Boundary | High | N/A |
| TRW-013 | Character limit enforcement on text fields (purpose, destination) | Boundary | Medium | N/A |
| TRW-014 | Unicode input (Hindi, regional languages, emoji) handled correctly | Edge Case | Medium | N/A |
| TRW-015 | Form state preserved on accidental navigation (browser back button) | Edge Case | Medium | N/A |
| TRW-016 | Parallel submission blocked until previous request completes | Edge Case | Medium | KPI 5.3 |
| TRW-017 | Inline validation messages visible and associated with correct fields (WCAG) | Accessibility | High | N/A |
| TRW-018 | Error messages readable by screen reader with appropriate ARIA live region | Accessibility | High | N/A |
| TRW-019 | Form keyboard navigable: Tab, Enter, Escape work correctly | Accessibility | High | N/A |
| TRW-020 | Color contrast ratio meets WCAG 2.1 AA (4.5:1 for normal text) | Accessibility | High | N/A |

---

### Test Suite: Travel Request Approval (Web)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| TAW-001 | Approval queue displays pending requests | Positive | High | KPI 1.1 |
| TAW-002 | Approver sees employee name, purpose, total amount, policy flags, receipt thumbnails, budget impact | Positive | High | KPI 1.1 |
| TAW-003 | Approve action with mandatory comment succeeds | Positive | High | N/A |
| TAW-004 | Reject action with mandatory comment and reason succeeds | Positive | High | N/A |
| TAW-005 | Return for clarification with mandatory comment succeeds | Positive | High | N/A |
| TAW-006 | Unauthorised user cannot approve requests outside their hierarchy (403 shown) | Negative | High | N/A |
| TAW-007 | Approval of already-approved request shows error | Negative | Medium | N/A |
| TAW-008 | Approval form pre-filled with correct context data | Positive | High | N/A |
| TAW-009 | Auto-escalated requests highlighted visually in queue | Positive | Medium | KPI 1.1 |
| TAW-010 | Delegation indicator shown for delegated requests | Positive | Medium | KPI 3.7 |
| TAW-011 | Keyboard-only approval workflow (no mouse required) | Accessibility | High | N/A |
| TAW-012 | Focus management: focus moves to next item after approval | Accessibility | Medium | N/A |

---

### Test Suite: Expense Claim Submission (Web)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| ECW-001 | Create expense report with multiple line items | Positive | High | KPI 1.2 |
| ECW-002 | Add, edit, delete line items | Positive | High | N/A |
| ECW-003 | Multi-currency selector with auto-conversion preview | Positive | High | KPI 2.1 |
| ECW-004 | Link to approved travel request via search | Positive | High | N/A |
| ECW-005 | Standalone claim submission | Positive | Medium | N/A |
| ECW-006 | OCR receipt upload triggers auto-fill after 5 seconds | Positive | High | N/A |
| ECW-007 | Receipt preview shown with zoom capability | Positive | High | N/A |
| ECW-008 | Policy violation shown inline during entry (real-time) | Positive | High | KPI 3.1 |
| ECW-009 | Duplicate detection warning before submission | Positive | High | KPI 2.3 |
| ECW-010 | Draft saved on interval (auto-save every 30 seconds) | Positive | Medium | N/A |
| ECW-011 | Submission blocked when mandatory fields empty | Negative | High | N/A |
| ECW-012 | Receipt required warning for expenses above ₹500 threshold | Negative | High | KPI 3.3 |
| ECW-013 | Out-of-policy submission with justification accepted when configured | Positive | High | KPI 3.1 |
| ECW-014 | Past expense date beyond 7-day window blocked | Negative | High | KPI 3.4 |
| ECW-015 | Concurrent submission: double-click submit creates only one request | Edge Case | Medium | KPI 5.3 |
| ECW-016 | Slow network: optimistic UI update with sync indicator | Edge Case | Medium | N/A |
| ECW-017 | Offline mode: draft saved locally, synced when online | Edge Case | Medium | N/A |
| ECW-018 | Large file upload progress indicator visible | Positive | Medium | N/A |
| ECW-019 | Screen reader announces policy violation as user types | Accessibility | High | KPI 3.1 |
| ECW-020 | Error summary at top of form with jump-to-error links | Accessibility | High | N/A |

---

### Test Suite: Dashboard & Management Reports (Web)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| DSW-001 | Dashboard loads with T&E spend vs budget chart | Positive | High | KPI 2.1 |
| DSW-002 | Department and cost centre filter dropdowns functional | Positive | High | KPI 2.1 |
| DSW-003 | Category breakdown chart (flights, hotels, meals, etc.) | Positive | High | KPI 2.1 |
| DSW-004 | Pending approval queue widget with drill-down | Positive | High | KPI 1.6 |
| DSW-005 | Out-of-policy alert section with claim details | Positive | High | KPI 2.4 |
| DSW-006 | Top spenders table with sorting and pagination | Positive | Medium | KPI 2.1 |
| DSW-007 | Date range picker functional with preset options (MTD, QTD, YTD) | Positive | High | N/A |
| DSW-008 | Real-time data refresh indicator shown every 15 minutes | Positive | High | KPI 5.2 |
| DSW-009 | Department Head sees only department-scoped data | Positive | High | N/A |
| DSW-010 | Finance Controller sees full organisation data | Positive | High | N/A |
| DSW-011 | Unauthorised access to Finance dashboard returns 403 / access denied page | Negative | High | KPI 3.2 |
| DSW-012 | Empty state: no data message with actionable next steps | Edge Case | Medium | N/A |
| DSW-013 | Large dataset: 100,000 records paginated without lag | Boundary | High | KPI 5.2 |
| DSW-014 | Export to Excel (.xlsx) downloads within 30 seconds | Positive | High | N/A |
| DSW-015 | Export to PDF downloads within 30 seconds | Positive | High | N/A |
| DSW-016 | Chart screen reader accessible with data table alternative | Accessibility | High | N/A |
| DSW-017 | Dashboard color scheme supports high-contrast mode | Accessibility | Medium | N/A |

---

### Test Suite: Standard Reports (Web)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| SRW-001 | Expense Claim Status Report generated with correct filters | Positive | High | N/A |
| SRW-002 | Policy Violation Report with violation type breakdown | Positive | High | N/A |
| SRW-003 | Advance Settlement Report with outstanding balances | Positive | Medium | N/A |
| SRW-004 | Reimbursement Register with payment status | Positive | High | N/A |
| SRW-005 | Budget Utilisation Report with variance calculation | Positive | High | N/A |
| SRW-006 | Vendor Analysis Report generated | Positive | Medium | N/A |
| SRW-007 | Carbon Emission Report with kg CO2 values | Positive | Medium | KPI 6.6 |
| SRW-008 | Preferred Vendor Utilisation Report | Positive | Medium | KPI 6.7 |
| SRW-009 | Excel export (.xlsx) opens correctly with formatting | Positive | High | N/A |
| SRW-010 | PDF export renders correctly | Positive | High | N/A |
| SRW-011 | Scheduled report email delivery to multiple recipients | Positive | Medium | N/A |
| SRW-012 | Scheduled report cancellation works | Positive | Medium | N/A |
| SRW-013 | Report generation shows loading state with progress indicator | Positive | Medium | N/A |
| SRW-014 | Empty report state: no data message | Edge Case | Medium | N/A |
| SRW-015 | Very large report: pagination and lazy loading | Boundary | Medium | N/A |

---

### Test Suite: Administration Console (Web)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| ADW-001 | Policy Management Console accessible to authorised admin | Positive | High | N/A |
| ADW-002 | Per-diem rates CRUD operations by city tier and grade | Positive | High | N/A |
| ADW-003 | Policy change versioned with effective date | Positive | High | N/A |
| ADW-004 | Historical claims evaluated against active policy version | Positive | High | N/A |
| ADW-005 | User & Role Management: assign/modify roles | Positive | High | N/A |
| ADW-006 | Delegation configuration with date range picker | Positive | High | N/A |
| ADW-007 | Cost Centre Budget Management with allocation form | Positive | High | N/A |
| ADW-008 | Budget threshold configuration (75%, 90%, 100%) | Positive | High | KPI 2.1 |
| ADW-009 | Unauthorised access returns access denied | Negative | High | N/A |
| ADW-010 | Invalid policy data (future effective date before current) blocked | Negative | High | N/A |
| ADW-011 | Confirmation dialog for destructive actions (delete policy) | Positive | High | N/A |
| ADW-012 | Admin action audit log visible | Positive | High | KPI 3.2 |

---

### Test Suite: Accessibility & Internationalisation (Web)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| AXW-001 | WCAG 2.1 Level AA: all interactive elements focusable | Accessibility | High | N/A |
| AXW-002 | Focus indicator visible on all interactive elements | Accessibility | High | N/A |
| AXW-003 | Page has descriptive title and heading hierarchy | Accessibility | High | N/A |
| AXW-004 | Images have alt text or marked decorative | Accessibility | High | N/A |
| AXW-005 | Form labels correctly associated with inputs | Accessibility | High | N/A |
| AXW-006 | Error messages announced via aria-live region | Accessibility | High | N/A |
| AXW-007 | Data tables use TH elements and scope attributes | Accessibility | High | N/A |
| AXW-008 | Skip-to-content link present and functional | Accessibility | High | N/A |
| AXW-009 | Language attribute set correctly (en, hi) | Accessibility | Medium | N/A |
| AXW-010 | Right-to-left language placeholder support (future Phase 4) | Edge Case | Low | N/A |

---

### Test Suite: Browser Compatibility (Web)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| BCW-001 | Chrome (latest 2 versions): all features functional | Compatibility | High | N/A |
| BCW-002 | Firefox (latest 2 versions): all features functional | Compatibility | High | N/A |
| BCW-003 | Safari (latest 2 versions): all features functional | Compatibility | High | N/A |
| BCW-004 | Edge (latest 2 versions): all features functional | Compatibility | High | N/A |
| BCW-005 | Responsive design: works on 1920x1080, 1440x900, 1366x768 | Compatibility | Medium | N/A |
| BCW-006 | Mobile web: responsive on 375px, 414px widths | Compatibility | Medium | N/A |
| BCW-007 | Print stylesheet renders reports correctly | Edge Case | Low | N/A |

---

### Test Suite: Performance & UX (Web)

| Test ID | Test Scenario | Target | Priority | KPI Link |
|---------|--------------|--------|----------|----------|
| PXW-001 | Page load time < 2 seconds (p95) under normal load | < 2s | High | KPI 5.2 |
| PXW-002 | Initial bundle size < 500KB gzipped | < 500KB | Medium | N/A |
| PXW-003 | Lazy loading for report data tables | Performance | Medium | N/A |
| PXW-004 | Debounced search input (300ms) for large datasets | Performance | Low | N/A |
| PXW-005 | Optimistic UI updates with rollback on failure | Positive | Medium | N/A |
| PXW-006 | Loading skeletons for async content | Positive | Medium | N/A |
| PXW-007 | Error boundaries catch React errors and show fallback UI | Positive | High | N/A |
| PXW-008 | Memory leak: component unmount cancels pending API calls | Edge Case | Medium | N/A |
| PXW-009 | Many open tabs: 50+ dashboard sessions no memory degradation | Boundary | Medium | N/A |
| PXW-010 | CDN-served assets load from nearest PoP | Performance | Medium | N/A |

---

### Test Suite: State Management (Web)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| SMW-001 | Auth state persisted across page refreshes | Positive | High | N/A |
| SMW-002 | Draft expense reports persisted across sessions | Positive | Medium | N/A |
| SMW-003 | Optimistic update on approval action with server sync | Positive | High | N/A |
| SMW-004 | State reset on logout | Positive | High | N/A |
| SMW-005 | Concurrent tab state: action in one tab reflects in another | Edge Case | Medium | N/A |
| SMW-006 | State hydration from server on initial load | Positive | High | N/A |
| SMW-007 | Invalid cached state handled gracefully on API schema change | Edge Case | Medium | N/A |

---

### Test Suite: Notification & Messaging (Web)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| NTW-001 | In-app notification bell shows unread count | Positive | High | N/A |
| NTW-002 | Notification list fetched and displayed on click | Positive | High | N/A |
| NTW-003 | Real-time status update when claim is approved (WebSocket/polling) | Positive | High | N/A |
| NTW-004 | Read receipt marks notification as read | Positive | Medium | N/A |
| NTW-005 | Notification dismissed with undo action | Positive | Low | N/A |
| NTW-006 | Loading and empty states for notification list | Edge Case | Medium | N/A |

---

## Module 2: Mobile Application (React Native)

### Test Suite: Mobile Authentication

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MAA-001 | SSO login via organisation IdP on mobile | Positive | High | N/A |
| MAA-002 | MFA challenge works on mobile | Positive | High | N/A |
| MAA-003 | Biometric authentication (Face ID / fingerprint) as secondary factor | Positive | Medium | N/A |
| MAA-004 | Auto-logout after 30 minutes | Positive | High | N/A |
| MAA-005 | Session persistence across app restarts | Positive | High | N/A |
| MAA-006 | Invalid credentials error shown securely | Security | High | N/A |
| MAA-007 | Biometric fallback to PIN/password | Edge Case | Medium | N/A |

---

### Test Suite: Mobile Receipt Capture & Expense Submission

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MES-001 | Camera opens and captures receipt photo | Positive | High | KPI 4.3 |
| MES-002 | Gallery image selected for upload | Positive | High | KPI 4.3 |
| MES-003 | OCR results returned within 5 seconds and auto-populate fields | Positive | High | KPI 5.7 |
| MES-004 | OCR fields editable before submission | Positive | High | N/A |
| MES-005 | Manual entry fallback when OCR fails | Positive | High | KPI 5.7 |
| MES-006 | Receipt thumbnail visible in expense report | Positive | High | N/A |
| MES-007 | Policy violation shown inline during entry | Positive | High | KPI 3.1 |
| MES-008 | Duplicate claim warning before submission | Positive | High | KPI 2.3 |
| MES-009 | Expense linked to travel request via search | Positive | Medium | N/A |
| MES-010 | Offline draft saved locally, uploaded when connection restored | Positive | Medium | N/A |
| MES-011 | Save draft functionality | Positive | Medium | N/A |
| MES-012 | Camera permission denied - graceful fallback to gallery | Negative | High | N/A |
| MES-013 | Storage permission denied - graceful degradation | Negative | High | N/A |
| MES-014 | No network - offline mode with sync queue | Negative | High | N/A |
| MES-015 | Low-light receipt captured with flash toggle | Edge Case | Medium | KPI 5.7 |
| MES-016 | Blurry receipt: still accepted with OCR confidence warning | Edge Case | Medium | KPI 5.7 |
| MES-017 | Multiple receipts added to single expense report | Edge Case | Medium | N/A |
| MES-018 | App backgrounded during OCR - resumes gracefully | Edge Case | Medium | KPI 5.7 |
| MES-019 | Screen reader: expense form fully accessible | Accessibility | High | N/A |
| MES-020 | Dynamic font size: UI scales correctly | Accessibility | Medium | N/A |

---

### Test Suite: Mobile Approvals

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MAP-001 | Push notification received for pending approval | Positive | High | KPI 1.1 |
| MAP-002 | Tap notification opens approval screen | Positive | High | N/A |
| MAP-003 | Approver sees employee name, purpose, amount, policy flags | Positive | High | KPI 1.1 |
| MAP-004 | One-tap approve with comment | Positive | High | N/A |
| MAP-005 | One-tap reject with reason | Positive | High | N/A |
| MAP-006 | Return for clarification with comment | Positive | High | N/A |
| MAP-007 | Approval queue loads within 3 seconds on 4G | Positive | High | N/A |
| MAP-008 | Offline: approval queued and synced on reconnect | Edge Case | Medium | N/A |
| MAP-009 | Push notification on iOS (APNs) | Platform | High | N/A |
| MAP-010 | Push notification on Android (FCM) | Platform | High | N/A |
| MAP-011 | Notification sound and badge count | Edge Case | Low | N/A |

---

### Test Suite: Mobile Performance & UX

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MPE-001 | App launch to dashboard < 3 seconds | Performance | High | N/A |
| MPE-002 | Scroll performance: 500+ expense items at 60fps | Performance | High | N/A |
| MPE-003 | Re-render optimisation: FlatList / RecyclerListView used | Performance | Medium | N/A |
| MPE-004 | No inline functions in render props (React Native rule) | Code Quality | Medium | N/A |
| MPE-005 | Images lazy-loaded and cached | Performance | Medium | N/A |
| MPE-006 | Memory usage stays under 200MB during normal operation | Performance | Medium | N/A |
| MPE-007 | App does not crash on low-memory devices (1GB RAM) | Boundary | Medium | N/A |
| MPE-008 | Screenshot attachment in receipt capture | Positive | Medium | KPI 4.3 |
| MPE-009 | Deep link from email notification opens correct claim | Positive | High | N/A |
| MPE-010 | Platform conventions: iOS back swipe, Android back button | Platform | Medium | N/A |
| MPE-011 | Safe area handling on notch devices | Platform | High | N/A |
| MPE-012 | Orientation change handled without state loss | Platform | Medium | N/A |
| MPE-013 | Offline to online transition without duplicate submissions | Edge Case | High | N/A |
| MPE-014 | App update: local data migration handled | Edge Case | Medium | N/A |

---

## Cross-Cutting Frontend Tests

### Test Suite: Responsive Layout

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| RSL-001 | Desktop layout: 1920px+ uses full sidebar | Compatibility | Medium | N/A |
| RSL-002 | Tablet layout: 1024px to 1919px uses collapsible sidebar | Compatibility | Medium | N/A |
| RSL-003 | Mobile layout: < 1024px uses hamburger menu | Compatibility | Medium | N/A |
| RSL-004 | Tables collapse to cards on mobile | Compatibility | Medium | N/A |
| RSL-005 | Forms stack vertically on narrow screens | Compatibility | Medium | N/A |

---

### Test Suite: Error Handling & User Feedback

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| EHF-001 | API 400: field-level errors shown inline | Positive | High | N/A |
| EHF-002 | API 401: user redirected to login | Positive | High | N/A |
| EHF-003 | API 403: access denied message shown | Positive | High | N/A |
| EHF-004 | API 404: not found page with home navigation | Positive | Medium | N/A |
| EHF-005 | API 429: retry-after countdown shown | Positive | High | N/A |
| EHF-006 | API 500: friendly error page, no stack trace to user | Security | High | N/A |
| EHF-007 | Network offline: banner shown, queue for uploads | Positive | High | N/A |
| EHF-008 | Network timeout: retry button with manual retry option | Positive | High | N/A |
| EHF-009 | Slow API: loading skeleton with timeout message after 10s | Positive | Medium | N/A |
| EHF-010 | Action confirmation for destructive operations (delete, cancel) | Positive | High | N/A |
| EHF-011 | Success toast for completed actions | Positive | Medium | N/A |

---

### Test Suite: Visual Regression & UI Consistency

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| VRF-001 | Design system components match approved mock (button, input, card) | Positive | Medium | N/A |
| VRF-002 | Typography scale consistent across pages | Positive | Medium | N/A |
| VRF-003 | Color palette matches brand guidelines | Positive | Medium | N/A |
| VRF-004 | Spacing system consistent (8px grid) | Positive | Medium | N/A |
| VRF-005 | Icon usage consistent (same icon per action) | Positive | Low | N/A |

---

### Test Suite: Internationalisation (i18n)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| INW-001 | English (en) locale renders correctly | Positive | High | N/A |
| INW-002 | Hindi (hi) locale renders correctly with correct font | Positive | High | N/A |
| INW-003 | Locale switch updates all visible text | Positive | Medium | N/A |
| INW-004 | Number/currency formatting respects locale | Positive | Medium | N/A |
| INW-005 | Date formatting respects locale | Positive | Medium | N/A |
| INW-006 | Missing translation falls back to English (no raw key shown) | Negative | Medium | N/A |
| INW-007 | Long German translations: layout does not break | Edge Case | Medium | N/A |
| INW-008 | RTL layout (for future Phase 4) | Edge Case | Low | N/A |

---

### Test Suite: Security (Frontend)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| SFW-001 | No secrets/API keys hardcoded in source | Security | High | N/A |
| SFW-002 | Tokens stored in httpOnly cookies, not localStorage | Security | High | N/A |
| SFW-003 | XSS prevention: user input sanitised before render | Security | High | N/A |
| SFW-004 | CSRF token validation on all state-changing requests | Security | High | N/A |
| SFW-005 | Clickjacking prevention: X-Frame-Options header respected | Security | High | N/A |
| SFW-006 | Sensitive data not logged to console in production | Security | Medium | N/A |
| SFW-007 | URL parameters do not expose internal IDs (use UUIDs) | Security | Medium | N/A |
| SFW-008 | Error boundaries do not leak error details in production | Security | Medium | N/A |

---

### Test Suite: E2E Tests (Playwright / Cypress)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| E2E-001 | Employee journey: SSO login → submit travel request → view approval status | E2E | High | KPI 1.1 |
| E2E-002 | Manager journey: login → approve travel request → approve expense | E2E | High | KPI 1.1 |
| E2E-003 | Employee journey: submit expense with OCR → correct → submit for approval | E2E | High | KPI 1.2 |
| E2E-004 | Finance journey: view queue → override policy flag → approve → export report | E2E | High | KPI 1.2 |
| E2E-005 | Full E2E: travel request → approval → advance → expense → STP → payment | E2E | High | KPI 1.4 |
| E2E-006 | Approval escalation: submit → wait → verify auto-escalation | E2E | High | KPI 1.1 |
| E2E-007 | Policy violation: submit out-of-policy → flag → justify → resubmit → approve | E2E | High | KPI 3.1 |
| E2E-008 | Duplicate detection: submit claim → blocked → submit corrected claim | E2E | High | KPI 2.3 |
| E2E-009 | Budget alert: cost centre reaches 90% → trigger alert → Finance sees notification | E2E | Medium | KPI 2.1 |
| E2E-010 | Report generation: navigate → generate → export Excel → verify file | E2E | High | N/A |
| E2E-011 | Admin: configure per-diem policy → version saved → effective date applied | E2E | High | N/A |
| E2E-012 | Admin: modify user role → logout/login → verify access | E2E | High | N/A |
| E2E-013 | Handler delegation: manager sets delegate → delegate receives and approves | E2E | Medium | KPI 3.7 |
| E2E-014 | Mobile to desktop session continuity | E2E | Medium | N/A |
| E2E-015 | Accessibility: full keyboard-only E2E (enterprise workflow) | Accessibility | High | N/A |

---

### Test Suite: Regression Tests (Web)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| RGW-001 | Previous sprint bug fixes verified | Regression | High | TDD Rule 7 |
| RGW-002 | Core flows: travel request, expense submission, approval | Regression | High | N/A |
| RGW-003 | SSO login after recent dependency update | Regression | High | N/A |
| RGW-004 | Dashboard charts render after chart library upgrade | Regression | Medium | N/A |
| RGW-005 | Report export after PDF library update | Regression | Medium | N/A |
| RGW-006 | Mobile responsive after CSS framework update | Regression | Medium | N/A |

---

## E2E Test Data Strategy

| ID | Description | Source |
|----|-------------|--------|
| ETD-01 | Employee: Priya (travel 8-10 days/month, sales) | PRD Persona 1 |
| ETD-02 | Finance Reviewer: Ramesh (200+ claims/month) | PRD Persona 2 |
| ETD-03 | Line Manager: Shalini (25-30 approvals/month) | PRD Persona 3 |
| ETD-04 | Finance Controller: Vikram (budget oversight) | PRD Persona 4 |
| ETD-05 | Compliance: Ananya (audit, GST compliance) | PRD Persona 5 |
| ETD-06 | High-value claim (> L2 threshold) | KPI 1.1 |
| ETD-07 | Policy violation claim (exceeds per-diem) | KPI 3.1 |
| ETD-08 | Duplicate claim (same date/vendor/amount within 90 days) | KPI 2.3 |
| ETD-09 | Out-of-policy claim (non-reimbursable category) | KPI 2.4 |
| ETD-10 | Multi-level approval chain (3 levels) | KPI 1.1 |
| ETD-11 | Advance settlement (over, under, exact) | KPI 2.6 |
| ETD-12 | Budget at 75%, 90%, 100% thresholds | KPI 2.1 |
| ETD-13 | Concurrent submission (2 users, same employee) | KPI 5.3 |
| ETD-14 | Low-confidence OCR receipt | KPI 5.7 |
