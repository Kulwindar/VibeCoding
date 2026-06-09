// User fixtures
export const mockUser = {
  id: '507f1f77bcf86cd799439011',
  email: 'employee@company.com',
  firstName: 'John',
  lastName: 'Doe',
  role: 'employee' as const,
  department: 'Engineering',
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockManager = {
  id: '507f1f77bcf86cd799439012',
  email: 'manager@company.com',
  firstName: 'Jane',
  lastName: 'Smith',
  role: 'manager' as const,
  department: 'Engineering',
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockFinanceAdmin = {
  id: '507f1f77bcf86cd799439013',
  email: 'finance@company.com',
  firstName: 'Bob',
  lastName: 'Johnson',
  role: 'finance_admin' as const,
  department: 'Finance',
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};
