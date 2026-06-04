# Error Handling Rules

Mandatory Rules

1. Assume every external dependency can fail.

Examples:

- APIs
- Databases
- File systems
- Third-party SDKs
- Payment gateways

---

2. Never trust input.

Validate:

- Request body
- Query params
- Route params
- Headers
- User input

before processing.

---

3. Every async operation must handle failure.

Avoid:

await service()

Prefer:

try {
   await service()
} catch (error) {
   handleError(error)
}

---

4. Never expose internal errors to users.

Bad:

"SQL Error at line 32"

Good:

"Something went wrong. Please try again."

---

5. Log all unexpected errors.

Include:

- Timestamp
- Error type
- Context
- Correlation ID

---

6. Do not swallow exceptions.

Bad:

catch (error) {}

Good:

catch (error) {
   logger.error(error);
   throw error;
}

---

7. Use custom error classes.

Example:

ValidationError

AuthenticationError

AuthorizationError

BusinessRuleError

NotFoundError

ConflictError

InternalServerError

---

8. Handle API timeouts.

Always define:

- Timeout
- Retry strategy
- Fallback behavior

---

9. Handle offline scenarios.

For mobile apps:

Detect:

- No network
- Slow network
- Interrupted requests

Provide:

- Retry action
- Cached data when possible

---

10. Handle empty responses.

Never assume:

response.data.length > 0

Check first.

---

11. Handle null and undefined.

Validate before use.

---

12. Use centralized error handling.

Avoid:

Repeated try/catch logic everywhere.

Prefer:

Global error handlers.

---

13. Never ignore Promise rejections.

Handle all rejected promises.

---

14. Every error path must be testable.

Create tests for:

- Failure scenarios
- Validation failures
- Timeout failures
- Network failures

---

15. Every bug fix must include:

- Root cause
- Regression test
- Prevention strategy

---

16. Every feature must define:

Success Flow

Failure Flow

Recovery Flow

before implementation.

---

17. Critical actions must support retries.

Examples:

- Payments
- Uploads
- Sync operations
- Data saves

---

18. Use graceful degradation.

If one feature fails:

The entire application should not fail.

---

19. Error messages must be:

- Actionable
- Human-readable
- Non-technical

---

20. Production code must never crash because of an unhandled exception.