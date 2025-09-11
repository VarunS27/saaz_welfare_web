import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Heart } from 'lucide-react';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-[#6A0DAD] to-[#228B22] rounded-2xl flex items-center justify-center mb-4 mx-auto animate-pulse">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6A0DAD] mx-auto mb-4"></div>
          <p className="text-slate-600">Verifying access...</p>
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
        <div className="text-center max-w-md mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Access Denied</h2>
            <p className="text-slate-600 mb-6">
              You don't have permission to access this area. Admin role required.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-[#6A0DAD] to-[#228B22] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#228B22] hover:to-[#6A0DAD] transition-all duration-300"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
}