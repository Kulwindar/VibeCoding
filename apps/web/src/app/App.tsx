import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { Layout } from '@/components/common/Layout';
import { DashboardPage } from './DashboardPage';
import { TripsPage } from './TripsPage';
import { ExpensesPage } from './ExpensesPage';
import { ApprovalsPage } from './ApprovalsPage';
import { AnalyticsPage } from './AnalyticsPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <ErrorBoundary>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <Layout>
              <main className="p-6">
                <div className="max-w-7xl mx-auto">
                  <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/trips" element={<TripsPage />} />
                    <Route path="/expenses" element={<ExpensesPage />} />
                    <Route path="/approvals" element={<ApprovalsPage />} />
                    <Route path="/analytics" element={<AnalyticsPage />} />
                  </Routes>
                </div>
              </main>
            </Layout>
          </div>
        </ErrorBoundary>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
