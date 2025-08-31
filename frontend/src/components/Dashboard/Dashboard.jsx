import React, { useState, useEffect } from 'react';
import { useAuth } from '../../components/context/AuthContext';
import { 
  Users, 
  Heart, 
  Target, 
  Globe, 
  TrendingUp, 
  Calendar,
  LogOut,
  Settings,
  Bell,
  BarChart3,
  Activity
} from 'lucide-react';
import api from '../../services/api';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAdmins: 0,
    totalVolunteers: 0,
    recentLogins: 0,
    totalPrograms: 25,
    activeCommunities: 15,
    livesImpacted: 10000
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await api.get('/dashboard/stats');
      if (response.data.status === 'success') {
        setStats(response.data.data.stats);
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const StatCard = ({ icon: Icon, title, value, change, color, bgColor }) => (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-slate-800">{value.toLocaleString()}</p>
          {change && (
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-600 font-medium">+{change}%</span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6A0DAD] mx-auto mb-4"></div>
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#6A0DAD] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#228B22] opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-white/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              
              {/* Logo & Title */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#6A0DAD] to-[#228B22] rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-800">Admin Dashboard</h1>
                  <p className="text-sm text-slate-600">Saaz Welfare Foundation</p>
                </div>
              </div>

              {/* User Menu */}
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-colors duration-200">
                  <Bell className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-800">{user?.name}</p>
                    <p className="text-xs text-slate-600 capitalize">{user?.role}</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-[#6A0DAD] to-[#228B22] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Welcome back, {user?.name}! 👋
            </h2>
            <p className="text-slate-600">
              Here's an overview of your welfare foundation's impact and activities.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={Heart}
              title="Lives Impacted"
              value={stats.livesImpacted}
              change={12}
              color="text-red-600"
              bgColor="bg-red-100"
            />
            <StatCard
              icon={Users}
              title="Active Volunteers"
              value={stats.totalVolunteers}
              change={8}
              color="text-blue-600"
              bgColor="bg-blue-100"
            />
            <StatCard
              icon={Target}
              title="Active Programs"
              value={stats.totalPrograms}
              change={5}
              color="text-purple-600"
              bgColor="bg-purple-100"
            />
            <StatCard
              icon={Globe}
              title="Communities Served"
              value={stats.activeCommunities}
              change={15}
              color="text-green-600"
              bgColor="bg-green-100"
            />
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Recent Activity */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-5 h-5 text-[#6A0DAD]" />
                <h3 className="text-lg font-semibold text-slate-800">Recent Activity</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">New volunteer registered</p>
                    <p className="text-xs text-slate-600">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">Health camp completed</p>
                    <p className="text-xs text-slate-600">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">Donation received</p>
                    <p className="text-xs text-slate-600">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-5 h-5 text-[#228B22]" />
                <h3 className="text-lg font-semibold text-slate-800">System Status</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Total Users</span>
                    <span className="text-sm font-semibold text-slate-800">{stats.totalUsers}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#6A0DAD] to-[#228B22] h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Recent Logins</span>
                    <span className="text-sm font-semibold text-slate-800">{stats.recentLogins}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#228B22] to-[#6A0DAD] h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#6A0DAD]" />
                <h3 className="text-lg font-semibold text-slate-800">Upcoming Events</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm font-medium text-slate-800">Community Health Camp</p>
                  <p className="text-xs text-slate-600">Jan 15, 2025 • 9:00 AM</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm font-medium text-slate-800">Education Workshop</p>
                  <p className="text-xs text-slate-600">Jan 20, 2025 • 2:00 PM</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm font-medium text-slate-800">Volunteer Training</p>
                  <p className="text-xs text-slate-600">Jan 25, 2025 • 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-4 gap-4">
            <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#6A0DAD] to-[#5a0b96] text-white px-6 py-4 rounded-xl font-semibold hover:from-[#5a0b96] hover:to-[#6A0DAD] transition-all duration-300 transform hover:scale-105">
              <Users className="w-5 h-5" />
              Manage Users
            </button>
            <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#228B22] to-[#1e7a1e] text-white px-6 py-4 rounded-xl font-semibold hover:from-[#1e7a1e] hover:to-[#228B22] transition-all duration-300 transform hover:scale-105">
              <Target className="w-5 h-5" />
              Programs
            </button>
            <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              <BarChart3 className="w-5 h-5" />
              Analytics
            </button>
            <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
