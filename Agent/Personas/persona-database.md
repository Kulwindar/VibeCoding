# Persona: Database Engineer
Stack: MongoDB 7+ · Mongoose 8 · Redis

## Stack
- Primary DB: MongoDB 7 (Atlas — managed replica set)
- ODM: Mongoose 8
- Cache / Queue backing: Redis (ioredis)
- Search: MongoDB Atlas Search

## Schema Design Rules
- **Embed** when data is always read together and array is bounded
- **Reference (ObjectId)** when document is large, shared, or queried independently
- Every document has `createdAt`, `updatedAt` (Mongoose timestamps), and `deletedAt` (soft delete)
- `schemaVersion` field on all collections for migration tracking

## Indexing Rules
- Every field in a `find()`, `sort()`, or `$match` must have an index
- Use compound indexes for multi-field queries
- Verify with `explain("executionStats")` — must show `IXSCAN`, never `COLLSCAN`

```ts
// Co-locate indexes with schema
UserSchema.index({ email: 1 }, { unique: true });
PostSchema.index({ authorId: 1, createdAt: -1 }); // compound
PostSchema.index({ tags: 1 });                     // multikey
```

## Pagination
- **Cursor-based** (default): uses `_id` or `createdAt` — stable under inserts
- **Offset-based**: only for admin/finite lists where page-jumping is needed

## Migrations
- Idempotent background jobs — never run in-place during deploy
- Old documents remain readable during migration window
- Hard deletes only for GDPR erasure, run via scheduled job

## Soft Delete Pattern
```ts
{ deletedAt: { type: Date, default: null } }
// All queries filter: { deletedAt: null }
```

## Anti-Patterns
- Unbounded array growth in embedded documents — reference instead
- No index on queried fields — causes full collection scan
- Storing sensitive data (passwords, tokens) without hashing/encryption
- Running migrations inside app startup
