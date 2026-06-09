import { mockApprovals, mockExpenseReports } from '../lib/mockData';

export function ApprovalsPage() {
  const approvals = mockApprovals;
  const expenseReports = mockExpenseReports;

  const getReport = (reportId: string) => expenseReports.find((r) => r.id === reportId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Approval Queue</h1>
        <p className="text-slate-400">Review and action pending expense reports</p>
      </div>

      {/* Approval Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <p className="text-slate-400 text-sm mb-2">Pending Approvals</p>
          <p className="text-3xl font-bold text-yellow-400">{approvals.filter((a) => a.status === 'pending').length}</p>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <p className="text-slate-400 text-sm mb-2">Approved This Month</p>
          <p className="text-3xl font-bold text-green-400">8</p>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <p className="text-slate-400 text-sm mb-2">Avg. Response Time</p>
          <p className="text-3xl font-bold text-blue-400">18 hrs</p>
        </div>
      </div>

      {/* Approvals List */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
        {approvals.length > 0 ? (
          <div className="divide-y divide-slate-700">
            {approvals.map((approval) => {
              const report = getReport(approval.reportId);
              if (!report) return null;

              return (
                <div key={approval.id} className="p-6 hover:bg-slate-700/30 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{report.title}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-slate-400 text-xs">From</p>
                          <p className="text-white font-medium">John Doe</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-xs">Total Amount</p>
                          <p className="text-white font-medium">${report.totalAmount.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-xs">Items</p>
                          <p className="text-white font-medium">{report.lineItems.length}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-xs">Submitted</p>
                          <p className="text-white font-medium">{report.submittedAt}</p>
                        </div>
                      </div>

                      {/* Line Items Preview */}
                      <div className="mb-4 bg-slate-700/30 rounded p-3">
                        <p className="text-xs text-slate-400 mb-2">Items:</p>
                        <div className="space-y-1">
                          {report.lineItems.map((item) => (
                            <div key={item.id} className="flex justify-between text-sm text-slate-300">
                              <span>
                                {item.category} - {item.merchant}
                              </span>
                              <span>${item.amount.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-900 text-yellow-200 ml-4 whitespace-nowrap">
                      Pending
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
                      ✓ Approve
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
                      ✕ Reject
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
                      ⟲ Send Back
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center">
            <p className="text-slate-400 text-lg">No pending approvals</p>
            <p className="text-slate-500 text-sm mt-2">You're all caught up! 🎉</p>
          </div>
        )}
      </div>
    </div>
  );
}
