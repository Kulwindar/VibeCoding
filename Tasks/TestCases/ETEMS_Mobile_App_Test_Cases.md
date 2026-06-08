# ETEMS Mobile App Test Cases

## Module 1: Mobile Authentication & Onboarding

### Test Suite: SSO & MFA

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MAA-001 | SSO login via SAML 2.0 redirects to organisation IdP and returns to app | Positive | High | N/A |
| MAA-002 | SSO login via OAuth 2.0 works for supported IdP (e.g., Azure AD, Google) | Positive | High | N/A |
| MAA-003 | MFA challenge presented for Finance, Admin, and Approver roles on mobile | Positive | High | N/A |
| MAA-004 | Biometric authentication (Face ID / fingerprint) works as secondary factor | Positive | Medium | N/A |
| MAA-005 | Biometric fallback to PIN/password when biometric fails | Edge Case | Medium | N/A |
| MAA-006 | Session persists across app restarts within 30-minute inactivity window | Positive | High | N/A |
| MAA-007 | Auto-logout after 30 minutes of inactivity with unsaved draft warning | Positive | High | N/A |
| MAA-008 | Invalid credentials return generic error (no user enumeration) | Security | High | N/A |
| MAA-009 | Rate limiting: 5 failed login attempts locks for 15 minutes | Negative | High | N/A |
| MAA-010 | Token expiry during active use triggers silent re-auth | Edge Case | Medium | N/A |
| MAA-011 | Concurrent session limit enforced per user across devices | Edge Case | Medium | N/A |
| MAA-012 | Logout clears all local session data and tokens | Security | High | N/A |

---

### Test Suite: App Onboarding (First Launch)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MBO-001 | Welcome screen displayed on first launch | Positive | High | N/A |
| MBO-002 | SSO login option prominently displayed | Positive | High | N/A |
| MBO-003 | Organisation branding (logo, colours) applied correctly | Positive | Medium | N/A |
| MBO-004 | Terms of service / privacy policy acknowledgment | Positive | High | N/A |
| MBO-005 | Push notification permission request after first login | Positive | High | N/A |
| MBO-006 | Camera permission request for receipt capture | Positive | High | N/A |
| MBO-007 | Notification permission denied - app still functional with in-app alerts | Negative | Medium | N/A |
| MBO-008 | Camera permission denied - fallback to manual entry and gallery | Negative | High | N/A |
| MBO-009 | Biometric enrolment prompt after first successful login | Positive | Medium | N/A |
| MBO-010 | Skip onboarding returns to login screen | Positive | Medium | N/A |

---

## Module 2: Mobile Receipt Capture & Expense Submission

### Test Suite: Camera & Receipt Capture

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MRC-001 | Camera opens directly from 'Add Expense' flow | Positive | High | KPI 4.3 |
| MRC-002 | Camera switches between front and rear cameras | Positive | Medium | N/A |
| MRC-003 | Flash toggle works in low-light conditions | Positive | Medium | KPI 5.7 |
| MRC-004 | Receipt photo captured and preview shown before upload | Positive | High | N/A |
| MRC-005 | Retake option available after preview | Positive | High | N/A |
| MRC-006 | Receipt image cropped/document detection guides framing | Positive | Medium | KPI 5.7 |
| MRC-007 | Gallery image selected for upload | Positive | High | KPI 4.3 |
| MRC-008 | Multiple receipts captured in single session (batch mode) | Positive | Medium | N/A |
| MRC-009 | Receipt image stored locally before upload (offline support) | Positive | Medium | N/A |
| MRC-010 | Maximum file size enforced (10MB per image) | Negative | High | N/A |
| MRC-011 | Unsupported image format blocked (.heic on older Android, .webp) | Negative | High | N/A |
| MRC-012 | Camera permission denied - app navigates to settings prompt | Negative | High | N/A |
| MRC-013 | Camera in use by another app - graceful timeout | Negative | Medium | N/A |
| MRC-014 | Very large image: auto-compressed before upload | Edge Case | Medium | N/A |
| MRC-015 | Blurry receipt detected via camera shake - prompt to retake | Edge Case | Medium | KPI 5.7 |

---

### Test Suite: OCR Integration (Mobile)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MOR-001 | OCR processes receipt within 5 seconds and auto-populates fields | Positive | High | KPI 5.7 |
| MOR-002 | Date, merchant name, and amount extracted correctly | Positive | High | KPI 5.7 |
| MOR-003 | OCR confidence score displayed to user | Positive | Medium | KPI 5.7 |
| MOR-004 | Low confidence OCR shows warning but allows submission | Edge Case | Medium | KPI 5.7 |
| MOR-005 | Very low confidence OCR suggests manual entry | Edge Case | Medium | KPI 5.7 |
| MOR-006 | OCR values fully editable before submission | Positive | High | N/A |
| MOR-007 | Manual entry fallback when OCR fails or times out | Positive | High | KPI 5.7 |
| MOR-008 | OCR service unavailable - clear error with manual entry option | Negative | High | N/A |
| MOR-009 | Handwritten receipt: partial extraction with manual correction | Edge Case | Medium | KPI 5.7 |
| MOR-010 | Vernacular language receipt (Hindi, regional): OCR handles gracefully | Edge Case | Medium | KPI 5.7 |
| MOR-011 | Faded/thermal receipt: OCR handles low contrast | Edge Case | Medium | KPI 5.7 |
| MOR-012 | OCR timeout (> 5s) shows loading indicator and falls back | Negative | High | KPI 5.7 |

---

### Test Suite: Expense Form (Mobile)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MEF-001 | Add expense line item with all fields | Positive | High | KPI 1.2 |
| MEF-002 | Category selector with search and recent categories | Positive | High | N/A |
| MEF-003 | Multi-currency input with live INR conversion preview | Positive | High | KPI 2.1 |
| MEF-004 | Date picker defaults to today, supports past dates | Positive | High | N/A |
| MEF-005 | Vendor/merchant name with autocomplete from history | Positive | Medium | N/A |
| MEF-006 | Project code search with recent projects | Positive | Medium | N/A |
| MEF-007 | Cost centre auto-populated from HRMS | Positive | High | N/A |
| MEF-008 | Link to approved travel request via search/barcode | Positive | Medium | N/A |
| MEF-009 | Auto-save draft every 30 seconds | Positive | Medium | N/A |
| MEF-010 | Draft list shows all saved drafts with date and amount | Positive | Medium | N/A |
| MEF-011 | Receipt thumbnail attached to line item | Positive | High | N/A |
| MEF-012 | Receipt thumbnail tappable for full-screen preview | Positive | Medium | N/A |
| MEF-013 | Remove receipt attachment with confirmation | Positive | Medium | N/A |
| MEF-014 | Policy violation shown inline in real-time as user types | Positive | High | KPI 3.1 |
| MEF-015 | Duplicate claim warning shown before submission | Positive | High | KPI 2.3 |
| MEF-016 | Submission blocked for mandatory field validation | Positive | High | N/A |
| MEF-017 | Past date beyond 7-day window blocked with clear message | Negative | High | KPI 3.4 |
| MEF-018 | Amount field: zero accepted for internal travel | Edge Case | Low | N/A |
| MEF-019 | Amount field: extremely large value (₹10,00,000+) flagged | Edge Case | Medium | KPI 3.1 |
| MEF-020 | Form scrolls to first error on submission attempt | Positive | Medium | N/A |
| MEF-021 | Swipe to delete line item with undo | Positive | Low | N/A |
| MEF-022 | Receipt warning shown when expense > ₹500 lacks attachment | Positive | High | KPI 3.3 |

---

### Test Suite: Expense Report Submission

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MES-021 | Submit claim with valid data succeeds | Positive | High | KPI 1.2 |
| MES-022 | Success confirmation displayed with claim reference number | Positive | High | N/A |
| MES-023 | Email notification received within 60 seconds | Positive | High | N/A |
| MES-024 | Submission state transitions correctly (draft → submitted) | Positive | High | N/A |
| MES-025 | Duplicate submission prevented (idempotency key) | Negative | High | KPI 5.3 |
| MES-026 | Network error during submission: retry with backoff | Negative | High | N/A |
| MES-027 | Offline submission queued locally, synced on reconnect | Positive | Medium | N/A |
| MES-028 | App backgrounded during submission - resumes gracefully | Edge Case | Medium | N/A |
| MES-029 | Submission with justification for policy violation accepted | Positive | High | KPI 3.1 |
| MES-030 | Concurrent submission from web and mobile blocked | Edge Case | Medium | KPI 5.3 |

---

## Module 3: Mobile Approvals

### Test Suite: Push Notifications

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MPN-001 | Push notification received on iOS (APNs) within 60 seconds | Positive | High | N/A |
| MPN-002 | Push notification received on Android (FCM) within 60 seconds | Positive | High | N/A |
| MPN-003 | Notification shows employee name, amount, and purpose | Positive | High | N/A |
| MPN-004 | Tap notification opens correct claim detail screen | Positive | High | N/A |
| MPN-005 | Deep link from email opens correct claim in app | Positive | High | N/A |
| MPN-006 | Notification badge count updates correctly | Positive | Medium | N/A |
| MPN-007 | Notification sound plays by default | Positive | Low | N/A |
| MPN-008 | Silent/Do Not Disturb mode respected | Negative | Medium | N/A |
| MPN-009 | Notification tap after app restarted from killed state | Edge Case | Medium | N/A |
| MPN-010 | Multiple pending approvals shown in notification summary | Positive | High | N/A |

---

### Test Suite: Approval Actions

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MAP-012 | Approver views full claim detail: employee info, purpose, amount, policy flags | Positive | High | KPI 1.1 |
| MAP-013 | Policy violation flags shown with violation reason | Positive | High | KPI 3.1 |
| MAP-014 | Receipt thumbnails tappable for full-screen view | Positive | High | N/A |
| MAP-015 | Budget impact shown for high-value claims | Positive | High | KPI 2.1 |
| MAP-016 | One-tap Approve with optional comment | Positive | High | N/A |
| MAP-017 | One-tap Reject with mandatory comment and reason selector | Positive | High | N/A |
| MAP-018 | Return for clarification with mandatory comment | Positive | High | N/A |
| MAP-019 | Approve with override for policy violation | Positive | High | N/A |
| MAP-020 | Partial approval of multi-line report | Positive | High | N/A |
| MAP-021 | Approval confirmation shown before final submit | Positive | High | N/A |
| MAP-022 | Success state after approval with animation | Positive | Medium | N/A |
| MAP-023 | Approval queue sorted by submission date (oldest first) | Positive | Medium | KPI 1.1 |
| MAP-024 | Approval queue shows SLA countdown timer | Positive | Medium | KPI 3.7 |
| MAP-025 | Auto-escalated requests highlighted in queue | Positive | High | KPI 1.1 |
| MAP-026 | Delegated requests marked with delegator name | Positive | High | KPI 3.7 |
| MAP-027 | Approval of already-processed claim shows error | Negative | Medium | N/A |
| MAP-028 | Approval of claim outside hierarchy returns 403 | Negative | High | N/A |
| MAP-029 | Network lost during approval - queued and synced on reconnect | Negative | High | N/A |
| MAP-030 | Approval takes > 10 seconds - timeout and retry | Negative | Medium | N/A |

---

### Test Suite: Approval Queue & History

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MAQ-001 | Pending queue shows all awaitinapprovals | Positive | High | KPI 1.1 |
| MAQ-002 | Filter by claim type (travel request / expense) | Positive | Medium | N/A |
| MAQ-003 | Search by employee name or claim ID | Positive | Medium | N/A |
| MAQ-004 | Sort by amount, date, employee | Positive | Medium | N/A |
| MAQ-005 | Pull-to-refresh updates queue | Positive | Medium | N/A |
| MAQ-006 | Empty state when no pending approvals | Edge Case | Medium | N/A |
| MAQ-007 | Previously approved/rejected claims visible in history | Positive | Medium | N/A |
| MAQ-008 | History filter by date range and status | Positive | Medium | N/A |

---

## Module 4: Mobile Dashboard & Status

### Test Suite: Dashboard (Mobile)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MDS-001 | Dashboard loads within 3 seconds on 4G | Performance | High | N/A |
| MDS-002 | My pending approvals widget prominent at top | Positive | High | KPI 1.1 |
| MDS-003 | My submitted claims status summary | Positive | High | N/A |
| MDS-004 | My team spend overview (for managers) | Positive | High | N/A |
| MDS-005 | Quick action buttons: Submit Expense, Submit Travel Request | Positive | High | N/A |
| MDS-006 | Team member submission activity feed | Positive | Medium | N/A |
| MDS-007 | Budget alert banner when team approaches limit | Positive | High | KPI 2.1 |
| MDS-008 | Notification list with unread indicator | Positive | High | N/A |
| MDS-009 | Swipe to dismiss notifications | Positive | Medium | N/A |
| MDS-010 | Empty dashboard state for new employee | Edge Case | Medium | N/A |
| MDS-011 | Dashboard chart readable on small screen | Accessibility | Medium | N/A |

---

### Test Suite: Claim Status Tracking

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MCS-001 | My Claims list shows all claims with status badges | Positive | High | N/A |
| MCS-002 | Claim detail shows full approval history | Positive | High | N/A |
| MCS-003 | Reimbursement status: pending, processed, paid | Positive | High | N/A |
| MCS-004 | Expected credit date displayed for paid claims | Positive | Medium | N/A |
| MCS-005 | Filter by status: pending, approved, rejected, paid | Positive | Medium | N/A |
| MCS-006 | Search by claim ID or date | Positive | Medium | N/A |
| MCS-007 | Tap claim to view line-item details | Positive | High | N/A |
| MCS-008 | Receipt thumbnails visible in claim detail | Positive | High | N/A |
| MCS-009 | Policy violation history shown in claim detail | Positive | High | N/A |
| MCS-010 | Share claim status as PDF/email | Positive | Low | N/A |

---

## Module 5: Mobile-Specific Platform Tests

### Test Suite: iOS Platform

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MIO-001 | iOS back swipe navigates correctly within app | Platform | High | N/A |
| MIO-002 | Safe area insets respected on notch devices (iPhone X+) | Platform | High | N/A |
| MIO-003 | Dynamic Island / Live Activities supported for approval notifications | Platform | Medium | N/A |
| MIO-004 | Haptic feedback on approval actions | Platform | Low | N/A |
| MIO-005 | iOS share sheet integration for exporting reports | Platform | Medium | N/A |
| MIO-006 | iOS widget for pending approval count | Platform | Low | N/A |
| MIO-007 | iOS background fetch for sync | Platform | Medium | N/A |
| MIO-008 | App store compliance (no private API usage) | Platform | High | N/A |
| MIO-009 | iPad layout adapts to larger screen | Platform | Medium | N/A |
| MIO-010 | iOS accessibility: VoiceOver reads all interactive elements | Accessibility | High | N/A |

---

### Test Suite: Android Platform

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MIP-001 | Android back button navigates correctly within app | Platform | High | N/A |
| MIP-002 | Safe area / cutout handling on notch devices | Platform | High | N/A |
| MIP-003 | Android share sheet integration for exporting reports | Platform | Medium | N/A |
| MIP-004 | Android widget for pending approval count | Platform | Low | N/A |
| MIP-005 | Android background sync via WorkManager | Platform | Medium | N/A |
| MIP-006 | Play Store compliance (target SDK, permissions) | Platform | High | N/A |
| MIP-007 | Android accessibility: TalkBack reads all interactive elements | Accessibility | High | N/A |
| MIP-008 | Adaptive icon rendered correctly on various launchers | Platform | Low | N/A |
| MIP-009 | Split-screen and multi-window mode supported | Platform | Medium | N/A |
| MIP-010 | Android notification channels configured correctly | Platform | High | N/A |

---

### Test Suite: App Lifecycle & Background

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MAL-001 | App backgrounded during OCR - foregrounded shows result | Positive | High | KPI 5.7 |
| MAL-002 | App killed during submission - relaunch shows sync status | Edge Case | High | N/A |
| MAL-003 | Offline actions queued and synced when app foregrounded | Positive | Medium | N/A |
| MAL-004 | Push notification tap opens app to correct screen from killed state | Positive | High | N/A |
| MAL-005 | App update: local data migration handled without data loss | Edge Case | Medium | N/A |
| MAL-006 | Low memory warning: cached images released gracefully | Edge Case | Medium | N/A |
| MAL-007 | App backgrounded during approval - action queued and confirmed | Edge Case | High | N/A |
| MAL-008 | Network change (WiFi → 4G → offline) handled without crash | Edge Case | Medium | N/A |
| MAL-009 | Deep sleep / Doze mode: background sync still works | Edge Case | Medium | N/A |
| MAL-010 | App relaunch after device reboot restores session | Edge Case | Medium | N/A |

---

## Module 6: Mobile Offline & Sync

### Test Suite: Offline Mode

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MOF-001 | Work offline: view cached claims and approvals | Positive | High | N/A |
| MOF-002 | Offline draft expense saved locally | Positive | Medium | N/A |
| MOF-003 | Offline submission queued and synced on reconnect | Positive | Medium | N/A |
| MOF-004 | Offline approval queued and synced on reconnect | Positive | High | N/A |
| MOF-005 | Sync conflict: server version wins, local changes not lost | Edge Case | High | N/A |
| MOF-006 | Offline indicator banner visible | Positive | High | N/A |
| MOF-007 | Retry failed syncs with exponential backoff | Positive | Medium | N/A |
| MOF-008 | Sync queue displayed to user with status | Positive | Medium | N/A |
| MOF-009 | Large offline queue (50+ items) syncs without crash | Boundary | Medium | N/A |
| MOF-010 | Offline to online: optimistic UI updates with server confirmation | Positive | Medium | N/A |

---

## Module 7: Mobile Performance & Stability

### Test Suite: Performance

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MPE-015 | Cold start: app launch to login < 3 seconds | Performance | High | N/A |
| MPE-016 | Warm start: app launch from background < 1 second | Performance | High | N/A |
| MPE-017 | Dashboard scroll: 500+ items at 60fps | Performance | High | N/A |
| MPE-018 | Approval queue scroll: 1000+ items at 60fps | Performance | High | N/A |
| MPE-019 | FlatList / RecyclerListView used (no ScrollView for long lists) | Code Quality | High | N/A |
| MPE-020 | No inline functions in render props | Code Quality | Medium | N/A |
| MPE-021 | Images lazy-loaded and cached (FastImage / similar) | Performance | Medium | N/A |
| MPE-022 | Memory usage < 200MB during normal operation | Performance | Medium | N/A |
| MPE-023 | Memory leak test: 10 min usage without unmounting screens | Performance | Medium | N/A |
| MPE-024 | Memory recovered on screen unmount | Performance | Medium | N/A |
| MPE-025 | Network bundle size < 500KB gzipped initial load | Performance | Medium | N/A |
| MPE-026 | OCR image compressed before upload (< 1MB) | Performance | Medium | N/A |
| MPE-027 | No jank during navigation transitions | Performance | High | N/A |
| MPE-028 | App stable on slow 3G network | Performance | High | N/A |
| MPE-029 | App does not crash on low-memory devices (1GB RAM) | Boundary | Medium | N/A |
| MPE-030 | Photo library with 10,000+ images scrolls without lag | Boundary | Medium | N/A |

---

### Test Suite: Stability & Crash Testing

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MST-001 | No crash on rapid tap of approval button (double-tap protection) | Stability | High | N/A |
| MST-002 | No crash during rapid navigation between screens | Stability | High | N/A |
| MST-003 | No crash on receiving 100+ push notifications | Stability | Medium | N/A |
| MST-004 | No crash on malformed API response | Stability | High | N/A |
| MST-005 | No crash on corrupted local database | Stability | High | N/A |
| MST-006 | No crash on receiving unparseable deep link | Stability | Medium | N/A |
| MST-007 | App restored from killed state during active sync | Edge Case | Medium | N/A |
| MST-008 | Orientation change during OCR processing | Edge Case | Medium | N/A |
| MST-009 | Incoming call during expense submission | Edge Case | Medium | N/A |
| MST-010 | App updated from App Store / Play Store launches cleanly | Edge Case | High | N/A |
| MST-011 | Crashlytics / Sentry captures crash with full context | Positive | High | N/A |
| MST-012 | ANR (Application Not Responding): no 5-second freezes | Stability | High | N/A |

---

## Module 8: Mobile Security

### Test Suite: Mobile Security

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| MSS-001 | Tokens stored in secure storage (Keychain / Keystore), not AsyncStorage | Security | High | N/A |
| MSS-002 | Sensitive data (PAN, bank details) never stored locally | Security | High | N/A |
| MSS-003 | Screenshot blocked on secure screens (payment, login) | Security | High | N/A |
| MSS-004 | SSL pinning prevents MITM attacks | Security | High | N/A |
| MSS-005 | App does not log credentials or tokens in debug | Security | High | N/A |
| MSS-006 | Clipboard cleared after copy-sensitive operations | Security | Medium | N/A |
| MSS-007 | Biometric data never leaves device | Security | High | N/A |
| MSS-008 | Deep link validation: only app schemes accepted | Security | Medium | N/A |
| MSS-009 | Rooted / jailbroken device detection with warning | Security | Medium | N/A |
| MSS-010 | App obfuscation enabled for release builds | Security | Medium | N/A |
| MSS-011 | Sensitive data excluded from App Store / Play Store screenshots | Security | Medium | N/A |

---

## Module 9: Mobile E2E & Regression

### Test Suite: Core E2E Flows (Detox / Appium)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| E2M-001 | Login → submit travel request → view in approval queue | E2E | High | KPI 1.1 |
| E2M-002 | Login → capture receipt → OCR → correct → submit expense → view status | E2E | High | KPI 1.2 |
| E2M-003 | Login → receive push → approve claim → verify status update | E2E | High | KPI 1.1 |
| E2M-004 | Login → view dashboard → export report → verify file | E2E | High | N/A |
| E2M-005 | Offline: capture receipt → go offline → submit → go online → verify sync | E2E | High | N/A |
| E2M-006 | Policy violation flow: submit out-of-policy → flag → justify → approve | E2E | High | KPI 3.1 |
| E2M-007 | Duplicate detection: submit same expense → blocked → correct → submit | E2E | High | KPI 2.3 |
| E2M-008 | Advance: request advance → settle via expense → verify net payment | E2E | High | KPI 2.6 |
| E2M-009 | Manager delegation: set delegate → delegate receives → approves | E2E | Medium | KPI 3.7 |
| E2M-010 | Budget alert: cost centre hits 90% → notification → manager action | E2E | Medium | KPI 2.1 |
| E2M-011 | Multi-currency: submit USD expense → verify INR conversion | E2E | High | KPI 2.1 |
| E2M-012 | Deep link: tap email notification → opens claim detail | E2E | High | N/A |

---

### Test Suite: Regression Tests (Mobile)

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| RGM-001 | Core flows: receipt capture, expense submission, approval | Regression | High | N/A |
| RGM-002 | SSO login after RN / dependency upgrade | Regression | High | N/A |
| RGM-003 | Push notifications after FCM / APNs SDK update | Regression | High | N/A |
| RGM-004 | Camera after React NativeCamera update | Regression | Medium | N/A |
| RGM-005 | Navigation after React Navigation update | Regression | High | N/A |
| RGM-006 | State management after Redux / Zustand update | Regression | Medium | N/A |

---

### Test Suite: Installability & Store Readiness

| Test ID | Test Scenario | Test Type | Priority | KPI Link |
|---------|--------------|-----------|----------|----------|
| INR-001 | App installs from App Store | Positive | High | N/A |
| INR-002 | App installs from Play Store | Positive | High | N/A |
| INR-003 | App installs via Enterprise MDM distribution | Positive | Medium | N/A |
| INR-004 | App size < 100MB initial download | Performance | Medium | N/A |
| INR-005 | App updates seamlessly without data loss | Positive | High | N/A |
| INR-006 | App runs on iOS 14+ devices | Compatibility | High | N/A |
| INR-007 | App runs on Android 10+ devices | Compatibility | High | N/A |
| INR-008 | App functions on 1GB RAM Android devices | Boundary | Medium | N/A |
