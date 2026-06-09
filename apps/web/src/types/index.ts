export type UserRole = 'employee' | 'manager' | 'finance_admin' | 'hr_admin' | 'super_admin';
export type TripStatus = 'draft' | 'pending' | 'approved' | 'rejected' | 'cancelled';
export type ExpenseStatus = 'draft' | 'submitted' | 'pending_approval' | 'approved' | 'rejected' | 'paid';
export type PolicyStatus = 'compliant' | 'flagged' | 'violation';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  department: string;
}

export interface Trip {
  id: string;
  employeeId: string;
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
  estimatedBudget: number;
  status: TripStatus;
  createdAt: string;
}

export interface ExpenseLineItem {
  id: string;
  category: string;
  amount: number;
  currency: string;
  date: string;
  merchant: string;
  receipt?: string;
  policyStatus: PolicyStatus;
}

export interface ExpenseReport {
  id: string;
  employeeId: string;
  tripId?: string;
  title: string;
  lineItems: ExpenseLineItem[];
  totalAmount: number;
  status: ExpenseStatus;
  createdAt: string;
  submittedAt?: string;
  paidAt?: string;
}

export interface ApprovalRequest {
  id: string;
  reportId: string;
  approverId: string;
  status: 'pending' | 'approved' | 'rejected' | 'sent_back';
  approvalLevel: number;
  comments?: string;
  createdAt: string;
}

export interface DashboardMetrics {
  totalSpend: number;
  pendingApprovals: number;
  reportsThisMonth: number;
  complianceRate: number;
  averageCycleTime: number;
}
