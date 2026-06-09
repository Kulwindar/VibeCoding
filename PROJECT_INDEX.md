# 🎯 ETEMS — Project Quick Reference

## Project Overview

**Enterprise Employee Travel & Expense Management System** — A full-stack web and mobile platform for managing travel requests, expense submissions, approval workflows, policy enforcement, and reimbursements.

**Phase:** 1 (MVP — 3 months)
**Team Size:** 5 personas (Backend, Database, Web, Mobile, QA)
**North Star:** Reduce expense report cycle time to **< 5 business days**

---

## 📁 Key Files & Documentation

### Product Specifications (Read in Order)

| File | Purpose |
|---|---|
| [`Agent/Rules/prd.md`](Agent/Rules/prd.md) | **Product Requirements** — Features, user flows, FR-* requirements |
| [`Agent/Rules/kpi.md`](Agent/Rules/kpi.md) | **Success Metrics** — KPIs, targets, guardrails, leading indicators |
| [`Agent/Rules/project_scope.md`](Agent/Rules/project_scope.md) | **Phase Deliverables** — What's in/out of scope, acceptance criteria, exit gates |
| [`Agent/Rules/project_boundary.md`](Agent/Rules/project_boundary.md) | **How We Work** — Tech stack, collaboration rules, team, risks |

### Team Personas & Standards

| File | Role |
|---|---|
| [`Agent/Personas/persona-backend.md`](Agent/Personas/persona-backend.md) | Backend Engineer — Fastify, TypeScript, MongoDB patterns |
| [`Agent/Personas/persona-database.md`](Agent/Personas/persona-database.md) | Database Engineer — MongoDB, Mongoose, indexing, schema design |
| [`Agent/Personas/persona-frontend-web.md`](Agent/Personas/persona-frontend-web.md) | Frontend Web — React, Vite, TanStack Query, form handling |
| [`Agent/Personas/persona-frontend-mobile.md`](Agent/Personas/persona-frontend-mobile.md) | Frontend Mobile — React Native, navigation, storage, offline-first |
| [`Agent/Personas/persona-qa.md`](Agent/Personas/persona-qa.md) | QA Engineer — Vitest, Playwright, Detox, test coverage targets |

### Project Setup & Roadmap

| File | Purpose |
|---|---|
| [`README.md`](README.md) | Project overview & quick start |
| [`SETUP_GUIDE.md`](SETUP_GUIDE.md) | Detailed development setup instructions |
| [`IMPLEMENTATION_ROADMAP.md`](IMPLEMENTATION_ROADMAP.md) | 12-week sprint plan, file structure checklist, go/no-go gates |

---

## 🚀 Quick Start (5 Minutes)

```bash
# 1. Prerequisites: Node.js 20, MongoDB 7+, Redis
#    See SETUP_GUIDE.md for installation links

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env
# Edit .env with your settings

# 4. Start all services
npm run dev

# 5. Open browser
# Backend health: http://localhost:3000/api/v1/health
# Frontend:      http://localhost:5173
```

See [`SETUP_GUIDE.md`](SETUP_GUIDE.md) for troubleshooting.

---

## 📊 Project Structure

```
VibeCoding/
├── apps/
│   ├── backend/              # Fastify server (Node.js, TypeScript)
│   │   ├── src/modules/      # Feature modules (users, trips, expenses, etc.)
│   │   ├── src/middleware/   # Auth, error handling
│   │   ├── src/config/       # Env, database, redis
│   │   └── src/jobs/         # BullMQ job processors
│   ├── web/                  # React SPA (Vite)
│   │   ├── src/app/          # Main app & pages
│   │   ├── src/components/   # UI components
│   │   ├── src/lib/          # API client, validators
│   │   └── src/stores/       # Zustand state
│   └── mobile/               # React Native CLI
│       ├── src/screens/      # Route-level screens
│       ├── src/components/   # UI components
│       └── src/lib/          # API, storage, theme
├── packages/
│   ├── shared-schemas/       # Zod validators (shared across apps)
│   └── shared-types/         # TypeScript types (shared)
├── tests/
│   ├── unit/                 # Pure function tests (Vitest)
│   ├── integration/          # API + DB tests (Vitest + mongodb-memory-server)
│   ├── e2e/
│   │   ├── web/              # Playwright specs
│   │   └── mobile/           # Detox specs
│   ├── fixtures/             # Test data factories
│   └── performance/          # k6 load tests (coming Phase 2)
└── Agent/                    # Product specs & personas (read this!)
```

---

## 🎯 Phase 1 Core Modules

### 1. **Users & Authentication**
- JWT auth (RS256, 15min access + 30d refresh)
- Role-based access control
- User hierarchy (employee → manager → finance)

### 2. **Trip Request & Booking**
- Create trip request (destination, dates, budget)
- Policy validation (soft-block with warning)
- Approval notification (in-app + email)
- Auto-create expense report shell

### 3. **Expense Submission** (Web + Mobile)
- Add line items (category, amount, date, merchant, receipt)
- Receipt capture via camera (mobile)
- Multi-currency conversion
- Policy flagging (inline violations)
- Draft save & return later

### 4. **Approval Workflow**
- **2-level chain:** Manager → Finance
- **Actions:** Approve / Reject / Send Back (with comments)
- **Notifications:** In-app + email + push
- **SLA tracking:** 48 hours (monitored)

### 5. **Policy Engine**
- Finance Admin configures category limits
- Soft-block at submission; hard-block at approval
- Policy versions (no retroactive changes)
- Out-of-policy requires justification

### 6. **Reimbursement & Status**
- Finance marks report as Paid
- Payment reference + date
- Status tracking (draft → submitted → approved → paid)

---

## 🧪 Testing Strategy

| Layer | Tool | Target | Enforced |
|---|---|---|---|
| **Unit** | Vitest | 85%+ | CI ✅ |
| **Integration** | Vitest + mongodb-memory-server | 100% endpoints | CI ✅ |
| **API Contract** | Supertest + Vitest | All documented | CI ✅ |
| **Web E2E** | Playwright | Phase 1 flows | CI ✅ |
| **Mobile E2E** | Detox | Phase 1 flows | CI ✅ |
| **Performance** | k6 | Baseline | Pre-release ✅ |
| **Accessibility** | axe-core | Zero violations | CI ✅ |

See [`Agent/Personas/persona-qa.md`](Agent/Personas/persona-qa.md) for QA standards.

---

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js 20 LTS
- **Language:** TypeScript 5
- **Framework:** Fastify 4
- **Database:** MongoDB 7 (Atlas)
- **ODM:** Mongoose 8
- **Cache/Queue:** Redis + BullMQ
- **Logging:** Pino (structured JSON)
- **Validation:** Zod
- **Auth:** JWT RS256

### Frontend Web
- **Framework:** React 18 + TypeScript
- **Bundler:** Vite
- **Routing:** React Router v6
- **Server State:** TanStack Query
- **UI State:** Zustand
- **Forms:** React Hook Form + Zod
- **Styling:** Tailwind CSS + shadcn/ui
- **Testing:** Vitest + React Testing Library + Playwright

### Mobile
- **Framework:** React Native CLI 0.73+
- **Navigation:** React Navigation
- **State:** TanStack Query + Zustand
- **Storage:** MMKV (fast), Keychain (secure)
- **Forms:** React Hook Form + Zod
- **Testing:** Jest + RNTL + Detox

### Monorepo & Tooling
- **Monorepo:** npm workspaces + Turborepo
- **Linting:** ESLint + TypeScript
- **Formatting:** Prettier
- **CI/CD:** GitHub Actions (prepared)
- **Git Hooks:** Husky (prepared)

---

## 📝 Key Principles

### Code Quality
✅ **Modular, single-responsibility functions**
✅ **All errors return consistent shape**
✅ **Zod schemas shared between frontend & backend**
✅ **TypeScript strict mode — no `any`**
✅ **Full test coverage (85%+)**

### Database
✅ **Mongoose with full indexing** (every queried field indexed)
✅ **Cursor-based pagination** (stable under inserts)
✅ **Soft delete pattern** (deletedAt field)
✅ **Schema versioning** for migrations
✅ **Compound indexes** for multi-field queries

### API Design
✅ **Versioned at route level** (`/api/v1/`)
✅ **6-week deprecation window** for breaking changes
✅ **OpenAPI/Swagger docs** auto-generated
✅ **Consistent error responses** with `requestId` for debugging

### Collaboration
✅ **Always reference PRD + KPI before building**
✅ **Clarify scope, phase, and approach first**
✅ **Write modular code following persona patterns**
✅ **Get code review before committing**
✅ **Never run commands without approval**

---

## ⚡ Common Commands

```bash
# Development
npm run dev              # Start all services (backend + web)
npm run build           # Build all packages
npm run type-check      # Check TypeScript

# Testing
npm run test            # All tests
npm run test:unit       # Unit tests only
npm run test:integration # Integration tests
npm run test:e2e:web    # Web E2E (Playwright)

# Code Quality
npm run lint            # ESLint
npm run format          # Prettier

# Backend Specific
cd apps/backend
npm run dev             # Fastify server only
npm run test:unit
npm run test:integration

# Web Frontend Specific
cd apps/web
npm run dev             # Vite dev server
npm run build           # Production build
npm run test:e2e:web    # Playwright tests

# Mobile Specific
cd apps/mobile
npm run android         # Build & run Android emulator
npm run ios             # Build & run iOS simulator
npm run test:e2e        # Detox tests
```

---

## 🎓 Getting Started

### For Backend Engineers
1. Read [`Agent/Personas/persona-backend.md`](Agent/Personas/persona-backend.md)
2. Study `apps/backend/src/modules/users/` pattern
3. Check [`Agent/Rules/prd.md`](Agent/Rules/prd.md) §2.4 for feature specs
4. Build following folder structure: `module/ → schema.ts → service.ts → controller.ts → routes.ts`

### For Frontend Web Engineers
1. Read [`Agent/Personas/persona-frontend-web.md`](Agent/Personas/persona-frontend-web.md)
2. Study `apps/web/src/app/App.tsx` setup
3. Check TanStack Query + Zustand patterns
4. Build pages in `app/`, components in `components/`

### For Mobile Engineers
1. Read [`Agent/Personas/persona-frontend-mobile.md`](Agent/Personas/persona-frontend-mobile.md)
2. Study `apps/mobile/src/screens/HomeScreen.tsx` pattern
3. Setup React Navigation linking
4. Use MMKV for storage, Keychain for tokens

### For QA Engineers
1. Read [`Agent/Personas/persona-qa.md`](Agent/Personas/persona-qa.md)
2. Study test fixtures in `tests/fixtures/`
3. Learn Playwright for web E2E
4. Learn Detox for mobile E2E
5. Setup test data factories

### For Database Engineers
1. Read [`Agent/Personas/persona-database.md`](Agent/Personas/persona-database.md)
2. Review schema files: `**/schema.ts` in each module
3. Ensure all queried fields are indexed
4. Plan pagination strategy (cursor-based preferred)
5. Setup indexes on compound fields for sorting/filtering

---

## 📞 Support & Questions

**Before asking:**
1. ✅ Check the relevant PRD section
2. ✅ Check your role's persona
3. ✅ Review project boundary rules
4. ✅ Search existing issues/PRs

**Ask about:**
- Scope clarification (which phase? which role?)
- Design review (before coding)
- Code review (before committing)
- Unblocking issues

**Never:**
- ❌ Commit code without review
- ❌ Run commands without approval
- ❌ Skip test coverage targets
- ❌ Build features outside scope

---

## 🎉 Next Steps

1. **Setup Complete?** → Run `npm run dev`
2. **Assigned a Task?** → Read relevant PRD section + persona
3. **Before Coding?** → Confirm scope, approach, phase with team
4. **Done Coding?** → Run tests, get review, then commit
5. **Need Help?** → Check Agent docs first, then ask team

---

**Last Updated:** 2026-06-09
**Project Status:** Phase 1 — Weeks 1-12 (In Progress)
**Version:** 1.0.0 (MVP)

🚀 **Let's build a world-class expense management system!**
