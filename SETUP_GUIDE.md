# ETEMS Project Setup Guide

## 📋 Prerequisites

Before starting, ensure you have:

- **Node.js 20 LTS** — [Download](https://nodejs.org/)
- **MongoDB 7+** — [Download](https://www.mongodb.com/try/download/community)
- **Redis** — [Download](https://redis.io/download)
- **Git** — [Download](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone & Install Dependencies

```bash
# Navigate to project directory
cd VibeCoding

# Run setup script
chmod +x setup.sh
./setup.sh

# Or install manually
npm install
```

### 2. Configure Environment

```bash
# Copy example env
cp .env.example .env

# Edit .env with your settings:
# - MongoDB URI
# - Redis host/port
# - JWT keys
# - API port
```

### 3. Start Services

**Terminal 1 — MongoDB:**
```bash
mongod
```

**Terminal 2 — Redis:**
```bash
redis-server
```

**Terminal 3 — Backend:**
```bash
cd apps/backend
npm run dev
```

**Terminal 4 — Web Frontend:**
```bash
cd apps/web
npm run dev
```

**Optional — Mobile (requires React Native setup):**
```bash
cd apps/mobile
npm run android  # or npm run ios
```

## 📁 Project Structure

```
VibeCoding/
├── apps/
│   ├── backend/          # Fastify Node.js server
│   ├── web/             # React web application
│   └── mobile/          # React Native app
├── packages/
│   ├── shared-schemas/  # Zod validation schemas
│   └── shared-types/    # TypeScript type definitions
├── tests/               # Unit, integration, E2E tests
├── Agent/              # Product specs & team personas
└── README.md           # Project overview
```

## 🧪 Testing

```bash
# Run all tests
npm run test

# Unit tests only
npm run test:unit

# Integration tests
npm run test:integration

# Web E2E tests
npm run test:e2e:web

# Watch mode
npm run test -- --watch
```

## 🔨 Development Commands

```bash
# Start all services (backend, web frontend in parallel)
npm run dev

# Build all packages
npm run build

# Lint all code
npm run lint

# Type check all packages
npm run type-check

# Format code
npm run format
```

## 📚 Documentation

Read these in order before starting work:

1. **Product Requirements** — [Agent/Rules/prd.md](Agent/Rules/prd.md)
   - Full feature descriptions, user flows, API contracts
   
2. **Success Metrics** — [Agent/Rules/kpi.md](Agent/Rules/kpi.md)
   - KPIs, targets, guardrails for Phase 1
   
3. **Project Scope** — [Agent/Rules/project_scope.md](Agent/Rules/project_scope.md)
   - What's in Phase 1, what's deferred, acceptance criteria
   
4. **Project Boundary** — [Agent/Rules/project_boundary.md](Agent/Rules/project_boundary.md)
   - Tech stack, team structure, collaboration rules
   
5. **Your Role's Persona** — [Agent/Personas/persona-*.md](Agent/Personas/)
   - Backend, database, frontend web, frontend mobile, or QA guidelines

## 🛠️ Useful Commands

### Backend

```bash
# Generate new module skeleton (coming soon)
npm run generate:module -- trip-request

# Run database migrations
npm run db:migrate

# Seed test data
npm run db:seed
```

### Frontend Web

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Open component storybook (coming soon)
npm run storybook
```

### Mobile

```bash
# Android
npm run android

# iOS (macOS only)
npm run ios

# Build APK
npm run android -- --release
```

## 🔒 Security Notes

- Never commit `.env` to Git (already in `.gitignore`)
- JWT keys should be strong and rotated regularly
- All database queries should use parameterized queries (Mongoose handles this)
- Always validate and sanitize user input with Zod schemas
- Use HTTPS in production

## 🐛 Troubleshooting

### MongoDB Connection Failed
```bash
# Check MongoDB is running
mongod --version

# Check default port (27017) is not blocked
lsof -i :27017
```

### Redis Connection Failed
```bash
# Check Redis is running
redis-cli ping  # Should return PONG

# Check default port (6379)
lsof -i :6379
```

### Port Already in Use
```bash
# Backend (default 3000)
lsof -i :3000

# Web frontend (default 5173)
lsof -i :5173

# Kill process
kill -9 <PID>
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

For questions or issues:
1. Check the PRD and relevant persona docs
2. Review existing issues/PRs
3. Ask in team Slack/chat
4. Reference project boundary rules for AI collaboration

## 📖 Next Steps

1. **Setup Complete?** → Start reading the Agent documentation
2. **Assigned a Task?** → Confirm phase, role, and scope from product docs
3. **Building a Feature?** → Follow the folder structure and patterns in personas
4. **Running Tests?** → Ensure 85%+ coverage per QA guidelines
5. **Ready to Commit?** → Get code review before pushing

---

**Happy coding! 🚀**
