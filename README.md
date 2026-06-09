# ETEMS — Enterprise Employee Travel & Expense Management System

A full-stack web and mobile application for managing enterprise employee travel requests, expense submissions, approval workflows, policy enforcement, and reimbursements.

## 📋 Project Structure

```
etems-monorepo/
├── apps/
│   ├── backend/           # Fastify server (Node.js 20, TypeScript)
│   ├── web/              # React web app (React 18, Vite)
│   └── mobile/           # React Native mobile app
├── packages/
│   ├── shared-schemas/   # Zod validation schemas
│   └── shared-types/     # Shared TypeScript types
├── tests/                # Unit, integration, and E2E tests
└── Agent/               # Product specs and personas
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20 LTS
- MongoDB 7+
- Redis
- Git

### Setup

```bash
# Install dependencies (monorepo aware)
npm install

# Copy environment file
cp .env.example .env

# Start all services in development mode
npm run dev
```

### Development Commands

```bash
# Run all builds
npm run build

# Run all tests
npm run test

# Run specific test suite
npm run test:unit
npm run test:integration
npm run test:e2e:web

# Lint all packages
npm run lint

# Type check all packages
npm run type-check
```

## 📱 Apps

### Backend (`/apps/backend`)
Fastify server with:
- JWT authentication (RS256)
- MongoDB + Mongoose
- Redis job queue (BullMQ)
- Structured logging (Pino)
- OpenAPI/Swagger docs

**Key Modules:**
- Users — Authentication & user management
- Trips — Trip request creation & approval
- Expenses — Expense submission & tracking
- Approvals — Multi-level approval workflow
- Policies — Policy enforcement engine
- Reimbursement — Reimbursement processing

### Web (`/apps/web`)
React SPA with:
- React Router for navigation
- TanStack Query for server state
- Zustand for UI state
- React Hook Form + Zod for forms
- Tailwind CSS + shadcn/ui
- Playwright for E2E testing

### Mobile (`/apps/mobile`)
React Native app with:
- React Navigation
- TanStack Query for server state
- MMKV for fast local storage
- Keychain/Keystore for secure tokens
- Detox for E2E testing

## 📦 Shared Packages

### shared-schemas
Zod validators shared between backend and frontend.

### shared-types
TypeScript types and interfaces.

## 🧪 Testing

- **Unit Tests:** Vitest
- **Integration Tests:** Vitest + mongodb-memory-server
- **API Testing:** Supertest + Vitest
- **Web E2E:** Playwright
- **Mobile E2E:** Detox
- **Performance:** k6

## 📖 Documentation

- [`Agent/Rules/prd.md`](Agent/Rules/prd.md) — Product requirements
- [`Agent/Rules/kpi.md`](Agent/Rules/kpi.md) — Success metrics
- [`Agent/Rules/project_scope.md`](Agent/Rules/project_scope.md) — Phase deliverables
- [`Agent/Rules/project_boundary.md`](Agent/Rules/project_boundary.md) — Tech stack & collaboration rules

## 👥 Team Personas

- [Backend Engineer](Agent/Personas/persona-backend.md)
- [Database Engineer](Agent/Personas/persona-database.md)
- [Frontend Web](Agent/Personas/persona-frontend-web.md)
- [Frontend Mobile](Agent/Personas/persona-frontend-mobile.md)
- [QA Engineer](Agent/Personas/persona-qa.md)

## 🔄 Key Rules

✅ **Always reference PRD + KPI before building**
✅ **Clarify scope & phase before coding**
✅ **Write modular, tested code**
✅ **Follow folder structure per persona guidelines**

❌ **Never commit code without human review**
❌ **Never run commands without approval**
❌ **Never skip test coverage targets**

---

**Phase 1 Target:** Reduce expense report cycle time to < 5 business days  
**North Star:** Achieve 90% employee adoption within 6 months of launch
