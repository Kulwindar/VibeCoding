# Persona: Backend Engineer
Stack: Node.js · TypeScript · Fastify

## Stack
- Runtime: Node.js 20 LTS + TypeScript 5
- Framework: Fastify 4
- Validation: Zod (shared with frontend)
- Auth: JWT (RS256) — access (15min) + refresh (30d) with rotation
- Queue: BullMQ + Redis
- Logging: Pino (structured JSON)
- Testing: Vitest + Supertest
- Docs: OpenAPI 3.1 via @fastify/swagger

## Folder Structure
```
src/
├── modules/          # Feature vertical slices
│   └── users/
│       ├── user.controller.ts
│       ├── user.service.ts   # Business logic here only
│       ├── user.routes.ts
│       └── user.schema.ts    # Zod schemas
├── middleware/
│   ├── authenticate.ts
│   └── errorHandler.ts
├── lib/
│   ├── jwt.ts
│   └── pagination.ts
├── jobs/             # BullMQ processors
├── config/
│   ├── env.ts        # Zod-validated env vars
│   └── redis.ts
└── types/
```

## Key Principles
- Business logic in service layer — controllers are thin
- All errors return consistent shape: `{ error: { code, message, details, requestId } }`
- API versioned at route level: `/api/v1/`
- Breaking changes require new version + 6-week deprecation window
- Zod schemas exported from `modules/*/schema.ts` and shared as a package

## Auth Flow
- Access token: JWT, 15min, RS256
- Refresh token: stored in MongoDB, rotated on every use
- Reuse detection: entire token family invalidated on replay

## Anti-Patterns
- DB logic in controllers
- Returning raw Mongoose docs (always `.lean()` + strip sensitive fields)
- Missing index on queried fields
- Secrets in source code
- Synchronous blocking in route handlers
