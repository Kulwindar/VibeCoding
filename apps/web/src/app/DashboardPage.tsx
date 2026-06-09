import { mockMetrics, mockExpenseReports } from '../lib/mockData';

export function DashboardPage() {
  const metrics = mockMetrics;
  const recentReports = mockExpenseReports.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <KPICard
          title="Total Spend"
          value={`$${metrics.totalSpend.toFixed(2)}`}
          subtitle="This month"
          icon="💰"
          trend="+12% from last month"
        />
        <KPICard
          title="Pending Approvals"
          value={metrics.pendingApprovals}
          subtitle="Action needed"
          icon="👤"
          trend="2 overdue"
          highlight={metrics.pendingApprovals > 0}
        />
        <KPICard
          title="Reports"
          value={metrics.reportsThisMonth}
          subtitle="This month"
          icon="📄"
          trend="3 submitted, 2 in draft"
        />
        <KPICard
          title="Compliance Rate"
          value={`${metrics.complianceRate}%`}
          subtitle="Policy adherence"
          icon="✅"
          trend="Target: 98%"
        />
        <KPICard
          title="Cycle Time"
          value={`${metrics.averageCycleTime} days`}
          subtitle="Median"
          icon="⏱️"
          trend="Target: < 5 days"
        />
      </div>

      {/* Recent Reports */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Expense Reports</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-600">
              <tr>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Title</th>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Amount</th>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report) => (
                <tr key={report.id} className="border-b border-slate-700 hover:bg-slate-700/50 transition">
                  <td className="py-3 px-4 text-white">{report.title}</td>
                  <td className="py-3 px-4 text-white font-medium">${report.totalAmount.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <StatusBadge status={report.status} />
                  </td>
                  <td className="py-3 px-4 text-slate-400">{report.submittedAt || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <QuickActionCard
          title="Create New Trip Request"
          description="Plan and request a new business trip"
          icon="✈️"
          href="/trips"
          buttonText="Start Trip"
        />
        <QuickActionCard
          title="Submit Expense Report"
          description="Add receipts and submit expenses for reimbursement"
          icon="💰"
          href="/expenses"
          buttonText="Add Expense"
        />
      </div>
    </div>
  );
}

function KPICard({
  title,
  value,
  subtitle,
  icon,
  trend,
  highlight,
}: {
  title: string;
  value: string | number;
  subtitle: string;
  icon: string;
  trend?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        highlight ? 'bg-red-900/20 border-red-700' : 'bg-slate-700/50 border-slate-600'
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="text-2xl">{icon}</div>
        <span className="text-xs text-slate-400">{subtitle}</span>
      </div>
      <h3 className="text-slate-400 text-xs font-medium mb-2">{title}</h3>
      <p className="text-2xl font-bold text-white mb-2">{value}</p>
      {trend && <p className="text-xs text-slate-400">{trend}</p>}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const statusColors: Record<string, string> = {
    draft: 'bg-slate-700 text-slate-200',
    submitted: 'bg-blue-900 text-blue-200',
    pending_approval: 'bg-yellow-900 text-yellow-200',
    approved: 'bg-green-900 text-green-200',
    rejected: 'bg-red-900 text-red-200',
    paid: 'bg-emerald-900 text-emerald-200',
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[status] || 'bg-slate-700'}`}>
      {status.replace(/_/g, ' ')}
    </span>
  );
}

function QuickActionCard({
  title,
  description,
  icon,
  href,
  buttonText,
}: {
  title: string;
  description: string;
  icon: string;
  href: string;
  buttonText: string;
}) {
  return (
    <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
      <div className="flex items-start gap-4">
        <div className="text-4xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-white font-bold mb-1">{title}</h3>
          <p className="text-slate-400 text-sm mb-4">{description}</p>
          <a
            href={href}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
