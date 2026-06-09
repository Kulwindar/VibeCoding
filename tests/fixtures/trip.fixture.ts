// Trip fixtures
export const mockTrip = {
  id: '507f1f77bcf86cd799439021',
  employeeId: '507f1f77bcf86cd799439011',
  destination: 'San Francisco, CA',
  startDate: new Date('2026-07-01'),
  endDate: new Date('2026-07-03'),
  purpose: 'Client meeting',
  estimatedBudget: 2500,
  status: 'approved' as const,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockTripRequest = {
  destination: 'New York, NY',
  startDate: new Date('2026-08-15'),
  endDate: new Date('2026-08-17'),
  purpose: 'Team training',
  estimatedBudget: 3000,
};
