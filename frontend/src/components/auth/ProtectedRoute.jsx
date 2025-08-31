import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../components/context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6A0DAD] mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // Check if user has admin role for dashboard access
  if (user && user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Access Denied</h2>
          <p className="text-slate-600 mb-6">You don't have permission to access this area.</p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gradient-to-r from-[#6A0DAD] to-[#228B22] text-white rounded-xl font-semibold hover:from-[#5a0b96] hover:to-[#1e7a1e] transition-all duration-300"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return children;
}