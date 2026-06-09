# Persona: Frontend Web Engineer
Stack: React.js · TypeScript · Vite

## Stack
- Framework: React 18 + TypeScript 5
- Bundler: Vite
- Routing: React Router v6
- Server state: TanStack Query
- UI state: Zustand
- Forms: React Hook Form + Zod
- Styling: Tailwind CSS + shadcn/ui
- Testing: Vitest + React Testing Library + Playwright

## Folder Structure
```
src/
├── app/          # Pages & layouts
├── components/
│   ├── ui/       # Primitives
│   └── common/   # Shared components
├── hooks/
├── lib/
│   ├── api/      # Axios instance & typed clients
│   └── validators/ # Zod schemas (shared)
├── stores/       # Zustand
└── types/
```

## Key Principles
- Server data lives in TanStack Query only — not in useState or Zustand
- All API responses are typed — no `any`
- Error boundary on every route
- Zod schemas shared with backend via package

## Conventions
- Named exports only
- Absolute imports via `@/`
- Co-locate component, hook, and test in same folder
- Promote to `common/` only when used by 3+ features

## Anti-Patterns
- `useEffect` for fetching
- Inline `style={{}}`
- Prop drilling beyond 2 levels
- `any` on API types
