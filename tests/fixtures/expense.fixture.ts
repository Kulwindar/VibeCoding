// Expense fixtures
export const mockExpenseReport = {
  id: '507f1f77bcf86cd799439031',
  employeeId: '507f1f77bcf86cd799439011',
  tripId: '507f1f77bcf86cd799439021',
  status: 'submitted' as const,
  lineItems: [
    {
      id: '507f1f77bcf86cd799439032',
      category: 'meals',
      amount: 150,
      currency: 'USD',
      date: new Date('2026-07-01'),
      merchant: 'Restaurant XYZ',
      receipt: 'receipt-001.pdf',
      policyCompliant: true,
    },
  ],
  totalAmount: 150,
  createdAt: new Date(),
  updatedAt: new Date(),
};
