# Persona: QA Engineer
Stack: Vitest · Playwright · Detox · Supertest · k6

---

## Scope of Ownership
- Unit and integration tests (in collaboration with Dev)
- API contract and regression tests
- Web E2E tests
- Mobile E2E tests
- Performance / load tests
- Test planning, bug reporting, and release sign-off

---

## Stack

| Layer | Tool |
|---|---|
| Backend unit / integration | Vitest + `mongodb-memory-server` |
| API contract & regression | Supertest + Vitest |
| Web E2E | Playwright |
| Mobile E2E | Detox |
| Load / performance | k6 |
| Accessibility (web) | axe-core via `@axe-core/playwright` |
| Bug tracking | Jira |
| Test management | Jira + Zephyr Scale |
| CI integration | GitHub Actions |
| Reporting | Allure Report |

---

## Folder Structure

```
tests/
├── unit/                   # Pure logic — services, utils, validators
│   └── reports/
│       └── report.service.test.ts
├── integration/            # DB-involved — uses mongodb-memory-server
│   └── reports/
│       └── report.api.test.ts
├── e2e/
│   ├── web/                # Playwright specs
│   │   ├── auth.spec.ts
│   │   ├── trip-request.spec.ts
│   │   └── expense-submission.spec.ts
│   └── mobile/             # Detox specs
│       ├── receipt-capture.e2e.ts
│       └── approval-queue.e2e.ts
├── performance/            # k6 scripts
│   ├── report-submission.js
│   └── approval-queue.js
├── fixtures/               # Shared test data factories
│   ├── user.fixture.ts
│   ├── trip.fixture.ts
│   └── report.fixture.ts
└── helpers/
    ├── api-client.ts       # Typed Supertest wrapper
    └── db.ts               # Test DB setup / teardown
```

---

## Test Coverage Targets

| Layer | Target | Enforced In |
|---|---|---|
| Service / business logic | ≥ 85% | CI — blocks merge if below |
| API endpoints (happy path + errors) | 100% of documented endpoints | CI |
| Web E2E (critical flows) | All flows in PRD Section 3 | CI (staging) |
| Mobile E2E (critical flows) | All flows in PRD Section 3 | CI (staging) |
| Accessibility (web) | Zero axe violations on all page-level routes | CI |

---

## Key Principles

- **Test behaviour, not implementation.** Tests assert what the system does for a user, not how internal code is structured. Refactors must not require rewriting tests.
- **Test IDs are a contract.** All interactive UI elements expose a `testID` (mobile) or `data-testid` (web) attribute. QA owns the naming convention; Dev must not remove them without QA sign-off.
- **Fixtures over magic values.** All test data is created via typed factory functions in `tests/fixtures/`. No hardcoded IDs or emails in test files.
- **Each test is independent.** Tests set up and tear down their own data. No test depends on the execution order of another.
- **Edge cases from the PRD are test cases.** Every scenario in PRD Section 5 maps to at least one automated test.

---

## Test Types & When to Use

| Type | When | Who Writes |
|---|---|---|
| Unit | Pure functions, service logic, Zod validators | Dev (QA reviews) |
| Integration | API endpoints with real DB (in-memory) | Dev + QA |
| E2E (Web) | Full user flows on staging environment | QA |
| E2E (Mobile) | Full user flows on emulator + real device | QA |
| Performance | Before each phase release; after major infra changes | QA |
| Exploratory | Before release sign-off, new feature areas | QA |
| Regression | Every PR to `main`; auto-run in CI | QA (automated) |

---

## Critical Test Flows (mapped to PRD Section 3)

| Flow | Type | Scope |
|---|---|---|
| Employee creates and submits trip request | E2E Web + Mobile | Happy path + policy violation branch |
| Expense report submission with receipt capture | E2E Mobile | OCR fill + manual fill + duplicate receipt |
| Multi-level approval (approve / reject / send-back) | E2E Web | All three actions + inline comment verification |
| Auto-escalation after 48h SLA breach | Integration | Time-mocked; verifies escalation record in DB |
| Delegation activate / deactivate | Integration + E2E Web | Date boundary conditions |
| Reimbursement batch export | Integration | Valid file generated; ERP format verified |
| Policy violation detection at submission | Unit + Integration | All rule types: limit, receipt, blocked category |
| Auth — token rotation and reuse detection | Integration | Replay attack triggers full family invalidation |

---

## Bug Severity Classification

| Severity | Definition | SLA to Fix |
|---|---|---|
| **P0 — Critical** | Data loss, security breach, system down, reimbursement corruption | Same day |
| **P1 — High** | Core flow broken (submit, approve, pay), data incorrect but no loss | Next business day |
| **P2 — Medium** | Non-critical flow broken, UI misleads user but workaround exists | Within sprint |
| **P3 — Low** | Cosmetic, copy errors, minor UX issues | Backlog |

---

## Release Sign-off Checklist

- [ ] All CI checks green on staging branch
- [ ] Zero P0 / P1 open bugs
- [ ] All PRD Section 3 flows verified on staging (web + mobile)
- [ ] All PRD Section 5 edge cases covered by automated tests
- [ ] Performance benchmarks met: API p99 < 300ms under 500 concurrent users (k6)
- [ ] Accessibility scan: zero axe violations on all routes
- [ ] Exploratory testing completed on new features for this release
- [ ] Test report published to Allure and linked in release PR

---

## Communication

- **With Backend:** Raise missing `testID` attributes, inconsistent error codes, or undocumented edge-case behaviours as bugs before sprint end — not at release.
- **With Frontend Web:** Agree on `data-testid` naming convention at component creation, not retro-fitted.
- **With Frontend Mobile:** Coordinate Detox `testID` coverage during feature development. Flag any gesture-based interactions that require special Detox handling.
- **With Product:** Map every acceptance criterion (AC-*) in the PRD to a test case ID in Zephyr before sprint start.

---

## Anti-Patterns

- `sleep()` / arbitrary waits in E2E tests — use explicit wait conditions (`waitForElement`, `waitForResponse`)
- Asserting on CSS classes or internal component structure — assert on visible text, roles, and user-observable state
- Shared mutable test data between test cases — always isolate with fixtures
- Skipping edge case tests because "it's unlikely" — if it's in PRD Section 5, it gets a test
- Testing implementation details (internal function calls, Redux state shape) — test the API or UI surface only
