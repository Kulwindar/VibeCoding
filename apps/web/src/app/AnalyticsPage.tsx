import { mockExpenseReports, mockMetrics } from '../lib/mockData';

export function AnalyticsPage() {
  const metrics = mockMetrics;
  const reports = mockExpenseReports;

  // Calculate category breakdown
  const categoryBreakdown = reports.reduce(
    (acc, report) => {
      report.lineItems.forEach((item) => {
        if (!acc[item.category]) {
          acc[item.category] = 0;
        }
        acc[item.category] += item.amount;
      });
      return acc;
    },
    {} as Record<string, number>,
  );

  // Calculate status breakdown
  const statusBreakdown = reports.reduce(
    (acc, report) => {
      acc[report.status] = (acc[report.status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Analytics & Reporting</h1>
        <p className="text-slate-400">Expense trends and insights</p>
      </div>

      {/* KPI Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Spend" value={`$${metrics.totalSpend.toFixed(2)}`} subtitle="This month" />
        <MetricCard title="Reports" value={metrics.reportsThisMonth} subtitle="Submitted" />
        <MetricCard title="Compliance" value={`${metrics.complianceRate}%`} subtitle="Policy adherence" />
        <MetricCard title="Avg. Cycle Time" value={`${metrics.averageCycleTime} days`} subtitle="Median" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Breakdown */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-4">Spend by Category</h2>
          <div className="space-y-3">
            {Object.entries(categoryBreakdown).map(([category, amount]) => (
              <div key={category}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{category}</span>
                  <span className="text-white font-medium">${amount.toFixed(2)}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-indigo-500 h-2 rounded-full"
                    style={{
                      width: `${(amount / metrics.totalSpend) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Breakdown */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-4">Reports by Status</h2>
          <div className="space-y-3">
            {Object.entries(statusBreakdown).map(([status, count]) => (
              <div key={status} className="flex items-center justify-between">
                <span className="text-slate-300 capitalize">{status.replace(/_/g, ' ')}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${(count / metrics.reportsThisMonth) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-white font-medium w-8 text-right">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Reports Table */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg">
        <div className="p-6 border-b border-slate-700">
          <h2 className="text-lg font-bold text-white">All Reports</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-700/50 border-b border-slate-600">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-slate-300">Title</th>
                <th className="px-6 py-3 text-left font-semibold text-slate-300">Amount</th>
                <th className="px-6 py-3 text-left font-semibold text-slate-300">Status</th>
                <th className="px-6 py-3 text-left font-semibold text-slate-300">Created</th>
                <th className="px-6 py-3 text-left font-semibold text-slate-300">Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-slate-700/30 transition">
                  <td className="px-6 py-3 text-white">{report.title}</td>
                  <td className="px-6 py-3 text-white font-medium">${report.totalAmount.toFixed(2)}</td>
                  <td className="px-6 py-3">
                    <StatusBadge status={report.status} />
                  </td>
                  <td className="px-6 py-3 text-slate-400">{report.createdAt}</td>
                  <td className="px-6 py-3 text-slate-400">{report.submittedAt || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-lg font-bold text-white mb-4">Export Reports</h2>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
            📊 Export as CSV
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
            📄 Export as PDF
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
            📧 Schedule Report
          </button>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string | number;
  subtitle: string;
}) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
      <p className="text-slate-400 text-xs font-medium mb-2 uppercase">{title}</p>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-xs text-slate-500">{subtitle}</p>
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
