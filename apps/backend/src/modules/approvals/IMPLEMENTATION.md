# Approval Workflow

Multi-level approval workflow for expense reports following org hierarchy.

## Phase 1 — 2-Level Approval

1. **Manager Level** (Approver 1)
   - Employee's direct manager reviews submitted report
   - Can approve, reject, or send back with comments
   - SLA: 48 hours (tracked)
   
2. **Finance Level** (Approver 2)
   - Finance Admin reviews manager-approved reports
   - Final approval authority
   - Can override at any stage with audit note

## Approval Chain Rules

- Determined by employee's org hierarchy
- Escalation if approver doesn't act within 48h (Phase 2)
- Finance can delegate authority (Phase 2)
- All actions logged for audit

## API Endpoints (TODO)

- `POST /api/v1/approvals/:reportId/approve` — Approve report
- `POST /api/v1/approvals/:reportId/reject` — Reject report
- `POST /api/v1/approvals/:reportId/send-back` — Send back for revision
- `GET /api/v1/approvals/pending` — List pending approvals for user

## Database Schema

See `approval.schema.ts` for data structure and indexes.
