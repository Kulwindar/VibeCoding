# Expense Calculation Service

Calculate and validate expense totals following ETEMS policy rules.

## Features

- Multi-currency support
- Policy compliance checking
- Per diem calculations
- Exchange rate integration (Phase 2)

## Usage

```typescript
import { ExpenseCalculationService } from './expense.service';

const service = new ExpenseCalculationService();

// Calculate total with policy checks
const result = await service.calculateTotal(expenseReport);

// Get policy violations
const violations = await service.checkPolicyCompliance(expenseReport);
```

## Implementation Notes

- All amounts stored in base currency (USD)
- Exchange rates cached in Redis
- Policy violations trigger manual review queue
- Soft-blocking allows submission with justification
