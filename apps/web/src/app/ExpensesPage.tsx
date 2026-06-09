import { useState } from 'react';
import { mockExpenseReports } from '../lib/mockData';
import { ExpenseReport } from '../types';

export function ExpensesPage() {
  const [reports, setReports] = useState<ExpenseReport[]>(mockExpenseReports);
  const [showForm, setShowForm] = useState(false);
  const [selectedReport, setSelectedReport] = useState<ExpenseReport | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'MEALS',
    amount: '',
    merchant: '',
    date: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: `item_${Date.now()}`,
      category: formData.category,
      amount: parseFloat(formData.amount),
      currency: 'USD',
      date: formData.date,
      merchant: formData.merchant,
      policyStatus: 'compliant' as const,
    };

    if (selectedReport) {
      const updatedReport = {
        ...selectedReport,
        lineItems: [...selectedReport.lineItems, newItem],
        totalAmount: selectedReport.totalAmount + parseFloat(formData.amount),
      };
      setReports(reports.map((r) => (r.id === selectedReport.id ? updatedReport : r)));
      setSelectedReport(updatedReport);
    } else {
      const newReport: ExpenseReport = {
        id: `exp_${Date.now()}`,
        employeeId: 'user_1',
        title: formData.title || 'New Expense Report',
        lineItems: [newItem],
        totalAmount: parseFloat(formData.amount),
        status: 'draft',
        createdAt: new Date().toISOString().split('T')[0],
      };
      setReports([newReport, ...reports]);
    }

    setFormData({
      title: '',
      category: 'MEALS',
      amount: '',
      merchant: '',
      date: '',
    });
  };

  const statusColors: Record<string, string> = {
    draft: 'bg-slate-700 text-slate-200',
    submitted: 'bg-blue-900 text-blue-200',
    pending_approval: 'bg-yellow-900 text-yellow-200',
    approved: 'bg-green-900 text-green-200',
    rejected: 'bg-red-900 text-red-200',
    paid: 'bg-emerald-900 text-emerald-200',
  };

  const policyStatusColors: Record<string, string> = {
    compliant: 'text-green-400',
    flagged: 'text-yellow-400',
    violation: 'text-red-400',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Expense Reports</h1>
          <p className="text-slate-400">Track and submit your business expenses</p>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setSelectedReport(null);
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          {showForm ? '✕ Cancel' : '+ New Report'}
        </button>
      </div>

      {/* Add Expense Form */}
      {showForm && (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Add Expense</h2>
          <form onSubmit={handleAddExpense} className="space-y-4">
            {!selectedReport && (
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Report Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., SF Trip - June 2026"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                >
                  <option>MEALS</option>
                  <option>TRANSPORTATION</option>
                  <option>HOTEL</option>
                  <option>MISCELLANEOUS</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Amount (USD) *</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="e.g., 150.00"
                  step="0.01"
                  required
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Merchant *</label>
                <input
                  type="text"
                  name="merchant"
                  value={formData.merchant}
                  onChange={handleInputChange}
                  placeholder="e.g., Restaurant XYZ"
                  required
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition"
              >
                Add Expense
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setSelectedReport(null);
                  setFormData({
                    title: '',
                    category: 'MEALS',
                    amount: '',
                    merchant: '',
                    date: '',
                  });
                }}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-medium transition"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reports Grid */}
      {!selectedReport ? (
        <div className="grid gap-6">
          {reports.map((report) => (
            <div
              key={report.id}
              onClick={() => setSelectedReport(report)}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-indigo-500 cursor-pointer transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{report.title}</h3>
                  <p className="text-sm text-slate-400">Created: {report.createdAt}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[report.status]}`}>
                  {report.status.replace(/_/g, ' ')}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-slate-400 text-xs">Items</p>
                  <p className="text-xl font-bold text-white">{report.lineItems.length}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Total Amount</p>
                  <p className="text-xl font-bold text-white">${report.totalAmount.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Compliance</p>
                  <p className="text-xl font-bold text-green-400">✓ 100%</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                  View Details
                </button>
                {report.status === 'draft' && (
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                    Submit Report
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Detail View
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <button
            onClick={() => setSelectedReport(null)}
            className="mb-4 text-indigo-400 hover:text-indigo-300 text-sm"
          >
            ← Back to Reports
          </button>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">{selectedReport.title}</h2>
            <p className="text-slate-400">
              Status: <span className={`ml-2 font-medium ${statusColors[selectedReport.status]}`}>{selectedReport.status}</span>
            </p>
          </div>

          {/* Line Items Table */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Expense Items</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-600">
                  <tr>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Category</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Merchant</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Date</th>
                    <th className="text-right py-3 px-4 text-slate-400 font-medium">Amount</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {selectedReport.lineItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-700/30">
                      <td className="py-3 px-4 text-white">{item.category}</td>
                      <td className="py-3 px-4 text-white">{item.merchant}</td>
                      <td className="py-3 px-4 text-slate-400">{item.date}</td>
                      <td className="py-3 px-4 text-white text-right font-medium">${item.amount.toFixed(2)}</td>
                      <td className={`py-3 px-4 font-medium ${policyStatusColors[item.policyStatus]}`}>
                        {item.policyStatus}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-700/30 font-bold">
                    <td colSpan={3} className="py-3 px-4 text-white">
                      Total
                    </td>
                    <td className="py-3 px-4 text-right text-white">${selectedReport.totalAmount.toFixed(2)}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                setShowForm(true);
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              + Add Expense
            </button>
            {selectedReport.status === 'draft' && (
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition">
                Submit Report
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
