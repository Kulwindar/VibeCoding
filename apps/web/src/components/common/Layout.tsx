import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/', icon: '📊' },
    { label: 'Trip Requests', path: '/trips', icon: '✈️' },
    { label: 'Expenses', path: '/expenses', icon: '💰' },
    { label: 'Approvals', path: '/approvals', icon: '👤' },
    { label: 'Analytics', path: '/analytics', icon: '📈' },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">✈️</div>
            <div>
              <h1 className="text-2xl font-bold text-indigo-400">ETEMS</h1>
              <p className="text-xs text-slate-400">Enterprise Travel & Expense Management</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-white font-medium">John Doe</p>
              <p className="text-xs text-slate-400">Engineering Dept.</p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 text-sm font-medium transition flex items-center gap-2 ${
                  location.pathname === item.path
                    ? 'text-indigo-400 border-b-2 border-indigo-400'
                    : 'text-slate-400 hover:text-indigo-400'
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Notifications */}
        <div className="mb-6 p-4 bg-amber-900 border border-amber-700 rounded-lg text-amber-100 text-sm">
          <strong>📢 Info:</strong> This is a working prototype with mock data. Features will integrate with the backend API.
        </div>
        {children}
      </main>
    </div>
  );
}
