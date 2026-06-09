import { Trip, ExpenseReport, ApprovalRequest, DashboardMetrics, User } from '../types';

export const mockUser: User = {
  id: 'user_1',
  email: 'john.doe@company.com',
  firstName: 'John',
  lastName: 'Doe',
  role: 'employee',
  department: 'Engineering',
};

export const mockTrips: Trip[] = [
  {
    id: 'trip_1',
    employeeId: 'user_1',
    destination: 'San Francisco, CA',
    startDate: '2026-06-15',
    endDate: '2026-06-18',
    purpose: 'Client Meeting - Acme Corp',
    estimatedBudget: 3500,
    status: 'approved',
    createdAt: '2026-06-09',
  },
  {
    id: 'trip_2',
    employeeId: 'user_1',
    destination: 'New York, NY',
    startDate: '2026-07-01',
    endDate: '2026-07-03',
    purpose: 'Team Training',
    estimatedBudget: 4200,
    status: 'pending',
    createdAt: '2026-06-08',
  },
  {
    id: 'trip_3',
    employeeId: 'user_1',
    destination: 'Austin, TX',
    startDate: '2026-06-20',
    endDate: '2026-06-22',
    purpose: 'Conference',
    estimatedBudget: 2800,
    status: 'draft',
    createdAt: '2026-06-09',
  },
];

export const mockExpenseReports: ExpenseReport[] = [
  {
    id: 'exp_1',
    employeeId: 'user_1',
    tripId: 'trip_1',
    title: 'San Francisco Trip - June 2026',
    lineItems: [
      {
        id: 'item_1',
        category: 'MEALS',
        amount: 245.50,
        currency: 'USD',
        date: '2026-06-15',
        merchant: 'Restaurant XYZ',
        receipt: 'receipt_1.pdf',
        policyStatus: 'compliant',
      },
      {
        id: 'item_2',
        category: 'TRANSPORTATION',
        amount: 89.00,
        currency: 'USD',
        date: '2026-06-15',
        merchant: 'Uber',
        policyStatus: 'compliant',
      },
      {
        id: 'item_3',
        category: 'HOTEL',
        amount: 450.00,
        currency: 'USD',
        date: '2026-06-15',
        merchant: 'Marriott Hotel',
        receipt: 'receipt_2.pdf',
        policyStatus: 'compliant',
      },
    ],
    totalAmount: 784.50,
    status: 'approved',
    createdAt: '2026-06-09',
    submittedAt: '2026-06-16',
    paidAt: '2026-06-20',
  },
  {
    id: 'exp_2',
    employeeId: 'user_1',
    title: 'Standalone Expenses - June 2026',
    lineItems: [
      {
        id: 'item_4',
        category: 'MEALS',
        amount: 156.75,
        currency: 'USD',
        date: '2026-06-18',
        merchant: 'Coffee Shop',
        policyStatus: 'flagged',
      },
    ],
    totalAmount: 156.75,
    status: 'pending_approval',
    createdAt: '2026-06-18',
    submittedAt: '2026-06-19',
  },
];

export const mockApprovals: ApprovalRequest[] = [
  {
    id: 'appr_1',
    reportId: 'exp_2',
    approverId: 'user_2',
    status: 'pending',
    approvalLevel: 1,
    createdAt: '2026-06-19',
  },
];

export const mockMetrics: DashboardMetrics = {
  totalSpend: 2145.75,
  pendingApprovals: 3,
  reportsThisMonth: 5,
  complianceRate: 96,
  averageCycleTime: 2.5,
};
