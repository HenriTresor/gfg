import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './lib/authContext';
import { NotificationProvider } from './components/ErrorNotification';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Casuals from './pages/Casuals';
import WorkEntries from './pages/WorkEntries';
import DailyCasualRequests from './pages/DailyCasualRequests';
import AdminDailyCasualRequests from './pages/AdminDailyCasualRequests';
import AdminReports from './pages/AdminReports';
import AdminSupervisors from './pages/AdminSupervisors';

function App() {
  return (
    <ErrorBoundary>
      <NotificationProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="casuals" element={<Casuals />} />
                <Route
                  path="cost-report"
                  element={
                    <ProtectedRoute requiredRole="SYSTEM_ADMIN">
                      <WorkEntries />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="daily-casual-requests"
                  element={<DailyCasualRequests />}
                />
                <Route
                  path="admin/daily-casual-requests"
                  element={<AdminDailyCasualRequests />}
                />
                <Route
                  path="admin/reports"
                  element={
                    <ProtectedRoute requiredRole="SYSTEM_ADMIN">
                      <AdminReports />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="admin/supervisors"
                  element={
                    <ProtectedRoute requiredRole="SYSTEM_ADMIN">
                      <AdminSupervisors />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
      </NotificationProvider>
    </ErrorBoundary>
  );
}

export default App;
