# IMPLEMENTATION ROADMAP

## Phase 1 — MVP (Current Sprint)

### Week 1-2: Core Infrastructure ✅
- [x] Monorepo setup with Turborepo
- [x] Backend Fastify server scaffold
- [x] Frontend React + Vite scaffold
- [x] Mobile React Native scaffold
- [x] Database schemas (User, Trip, Expense, Approval, Policy, Reimbursement)
- [x] Shared packages (schemas, types)
- [ ] Authentication & JWT setup
- [ ] CORS and error handling

### Week 3-4: Users Module
- [ ] User creation (CRUD)
- [ ] Role-based access control
- [ ] JWT token generation/validation
- [ ] User authentication endpoints
- [ ] Tests: Unit + Integration (≥85% coverage)

### Week 5-6: Trip Request Module
- [ ] Create trip request endpoint
- [ ] Trip approval workflow (manager)
- [ ] Policy validation
- [ ] Email notifications (mock in Phase 1)
- [ ] Tests: Unit + Integration + E2E

### Week 7-8: Expense Module
- [ ] Create expense report (web + mobile)
- [ ] Add line items
- [ ] Receipt upload handling
- [ ] Multi-currency conversion
- [ ] Draft save functionality
- [ ] Tests: Unit + Integration + E2E

### Week 9-10: Approval Workflow
- [ ] 2-level approval chain (Manager → Finance)
- [ ] Approval notifications
- [ ] Comment/rejection flow
- [ ] SLA tracking setup
- [ ] Tests: Integration + E2E

### Week 11-12: Reimbursement & Polish
- [ ] Mark as paid workflow
- [ ] Status tracking
- [ ] Analytics/export (basic CSV)
- [ ] Performance testing (k6)
- [ ] Production deployment prep

## Key Implementation Constraints

### Database
- MongoDB Atlas (managed)
- Mongoose ODM with full indexing
- Soft delete pattern (deletedAt field)
- All queries must use indexes

### Backend
- Fastify for high performance
- Zod schemas for runtime validation
- Pino for structured JSON logging
- BullMQ for async jobs (queues)
- JWT RS256 (RS = RSA Signing)

### Frontend
- Server state in TanStack Query only
- Zustand for UI state (modals, forms)
- React Hook Form + Zod for forms
- No prop drilling beyond 2 levels

### Mobile
- MMKV for fast storage
- Keychain/Keystore for tokens (secure)
- Detox for E2E (not Firebase emulator)
- Platform-specific styles via Platform.select()

## Testing Coverage Targets

| Layer | Target | Enforced |
|---|---|---|
| Unit | 85%+ | CI |
| Integration | 100% of endpoints | CI |
| E2E Web | All Phase 1 flows | CI |
| E2E Mobile | All Phase 1 flows | CI |
| Performance | Baseline established | Pre-release |

## File Structure Checklist

### Backend Modules
- [ ] users/ — ✅ schema, ✅ service, ✅ controller, ✅ routes
- [ ] trips/ — ✅ schema, ✅ service, ⬜️ controller, ⬜️ routes
- [ ] expenses/ — ✅ schema, ⬜️ service, ⬜️ controller, ⬜️ routes
- [ ] approvals/ — ✅ schema, ⬜️ service, ⬜️ controller, ⬜️ routes
- [ ] policies/ — ✅ schema, ⬜️ service, ⬜️ controller, ⬜️ routes
- [ ] reimbursement/ — ✅ schema, ⬜️ service, ⬜️ controller, ⬜️ routes

### Frontend Web Components
- [ ] pages/
  - [ ] Dashboard
  - [ ] Trip Requests (list + create)
  - [ ] Expenses (list + create)
  - [ ] Approvals (list + action)
  - [ ] Settings
- [ ] components/
  - [ ] TripForm
  - [ ] ExpenseForm
  - [ ] ApprovalCard
  - [ ] StatusBadge
  - [ ] ErrorAlert
  - [ ] Loading spinner

### Mobile Screens
- [ ] Dashboard
- [ ] Trip Request List
- [ ] Trip Request Create
- [ ] Expense List
- [ ] Expense Create (with camera)
- [ ] Approval Queue
- [ ] Profile

## Go/No-Go Gates (Phase Exit Criteria)

### Before Release
- ✅ All Phase 1 PRD features implemented (FR-*)
- ✅ 85%+ test coverage across all layers
- ✅ Zero accessibility violations (axe-core)
- ✅ Load test baseline (k6): 100 concurrent users ≥95% success
- ✅ Security review: no hardcoded secrets, HTTPS enforced
- ✅ Documentation: API docs + E2E test scenarios
- ✅ Performance: P95 response time <200ms

### North Star Metrics
- ✅ Expense report cycle time < 5 business days
- ✅ Approval SLA compliance ≥85%
- ✅ Receipt attachment rate ≥98%

---

**Status:** In Progress (Week 1/12)
**Last Updated:** 2026-06-09
