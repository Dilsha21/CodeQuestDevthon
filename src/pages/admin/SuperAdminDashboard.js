import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Users, 
  Building2, 
  Activity, 
  TrendingUp,
  AlertCircle,
  DollarSign,
  Leaf,
  Shield,
  BarChart3,
  Calendar,
  Download,
  Eye,
  Settings,
  Globe
} from 'lucide-react';

const SuperAdminDashboard = () => {
  const { admin } = useAuth();
  const [timeRange, setTimeRange] = useState('month');

  // Mock data
  const stats = {
    totalUsers: 50234,
    totalPharmacies: 1247,
    activeUsers: 12450,
    newUsers: 892,
    totalRevenue: 245678,
    systemUptime: 99.9,
    avgResponseTime: 1.2,
    totalCO2Saved: 12500
  };

  const recentActivities = [
    { id: 1, type: 'user', action: 'New user registration', user: 'John Doe', time: '2 minutes ago', status: 'success' },
    { id: 2, type: 'pharmacy', action: 'New pharmacy registered', user: 'HealthPlus Pharmacy', time: '15 minutes ago', status: 'success' },
    { id: 3, type: 'system', action: 'System backup completed', user: 'System', time: '1 hour ago', status: 'success' },
    { id: 4, type: 'alert', action: 'High server load detected', user: 'System', time: '2 hours ago', status: 'warning' },
    { id: 5, type: 'user', action: 'User account suspended', user: 'Jane Smith', time: '3 hours ago', status: 'danger' }
  ];

  const topPharmacies = [
    { name: 'HealthPlus Pharmacy', orders: 1247, revenue: 45678, rating: 4.8, ecoScore: 92 },
    { name: 'MediCare Center', orders: 1098, revenue: 39876, rating: 4.6, ecoScore: 88 },
    { name: 'QuickMeds', orders: 987, revenue: 34567, rating: 4.5, ecoScore: 85 },
    { name: 'Green Pharmacy', orders: 876, revenue: 29876, rating: 4.7, ecoScore: 95 },
    { name: 'City Pharmacy', orders: 765, revenue: 25678, rating: 4.4, ecoScore: 78 }
  ];

  const systemMetrics = [
    { name: 'Server Load', value: 65, status: 'normal', unit: '%' },
    { name: 'Memory Usage', value: 78, status: 'warning', unit: '%' },
    { name: 'Database Size', value: 245, status: 'normal', unit: 'GB' },
    { name: 'API Requests', value: 12567, status: 'normal', unit: '/min' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'user': return <Users className="text-primary-600" size={16} />;
      case 'pharmacy': return <Building2 className="text-success-600" size={16} />;
      case 'system': return <Settings className="text-secondary-600" size={16} />;
      case 'alert': return <AlertCircle className="text-warning-600" size={16} />;
      default: return <Activity className="text-secondary-600" size={16} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-success-600 bg-success-100';
      case 'warning': return 'text-warning-600 bg-warning-100';
      case 'danger': return 'text-danger-600 bg-danger-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  const getMetricStatus = (status) => {
    switch (status) {
      case 'normal': return 'text-success-600';
      case 'warning': return 'text-warning-600';
      case 'danger': return 'text-danger-600';
      default: return 'text-secondary-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-secondary-600">
            System overview and management controls for MedFinder platform
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Total Users</p>
                <p className="text-2xl font-bold text-secondary-900">{stats.totalUsers.toLocaleString()}</p>
                <p className="text-xs text-success-500 flex items-center">
                  <TrendingUp size={12} className="mr-1" />
                  +{stats.newUsers} this week
                </p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <Users className="text-primary-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Partner Pharmacies</p>
                <p className="text-2xl font-bold text-secondary-900">{stats.totalPharmacies}</p>
                <p className="text-xs text-secondary-500">Active locations</p>
              </div>
              <div className="bg-success-100 p-3 rounded-lg">
                <Building2 className="text-success-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Active Users</p>
                <p className="text-2xl font-bold text-primary-600">{stats.activeUsers.toLocaleString()}</p>
                <p className="text-xs text-secondary-500">Last 24 hours</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <Activity className="text-primary-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">CO₂ Saved</p>
                <p className="text-2xl font-bold text-success-600">{stats.totalCO2Saved.toLocaleString()} kg</p>
                <p className="text-xs text-success-500">Environmental impact</p>
              </div>
              <div className="bg-success-100 p-3 rounded-lg">
                <Leaf className="text-success-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activities */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-secondary-900">Recent Activities</h3>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="text-sm border border-secondary-300 rounded px-3 py-1"
                >
                  <option value="day">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
              </div>
              <div className="space-y-3">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getActivityIcon(activity.type)}
                      <div>
                        <p className="text-sm font-medium text-secondary-900">{activity.action}</p>
                        <p className="text-xs text-secondary-600">{activity.user}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`badge ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                      <p className="text-xs text-secondary-500 mt-1">{activity.time}</p>
                </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Pharmacies */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-secondary-900">Top Performing Pharmacies</h3>
                <Link to="/admin/pharmacies" className="text-primary-600 hover:text-primary-500 text-sm">
                  View all
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-secondary-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Pharmacy
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Orders
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Revenue
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Rating
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Eco Score
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-secondary-200">
                    {topPharmacies.map((pharmacy, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 text-sm font-medium text-secondary-900">
                          {pharmacy.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-secondary-900">
                          {pharmacy.orders}
                        </td>
                        <td className="px-4 py-3 text-sm text-secondary-900">
                          ${pharmacy.revenue.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-sm text-secondary-900">
                          {pharmacy.rating}
                        </td>
                        <td className="px-4 py-3">
                          <span className="badge badge-success">
                            {pharmacy.ecoScore}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* System Metrics */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">System Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {systemMetrics.map((metric, index) => (
                  <div key={index} className="bg-secondary-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-secondary-600">{metric.name}</span>
                      <span className={`text-sm font-medium ${getMetricStatus(metric.status)}`}>
                        {metric.value}{metric.unit}
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          metric.status === 'normal' ? 'bg-success-600' :
                          metric.status === 'warning' ? 'bg-warning-600' : 'bg-danger-600'
                        }`}
                        style={{ width: `${Math.min(metric.value, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/admin/users" className="btn btn-secondary w-full text-left">
                  <Users size={16} className="mr-2" />
                  Manage Users
                </Link>
                <Link to="/admin/pharmacies" className="btn btn-secondary w-full text-left">
                  <Building2 size={16} className="mr-2" />
                  Manage Pharmacies
                </Link>
                <Link to="/admin/reports" className="btn btn-secondary w-full text-left">
                  <BarChart3 size={16} className="mr-2" />
                  View Reports
                </Link>
                <button className="btn btn-secondary w-full text-left">
                  <Download size={16} className="mr-2" />
                  Export Data
                </button>
              </div>
            </div>

            {/* System Health */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">System Health</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-600">Uptime</span>
                  <span className="text-sm font-medium text-success-600">{stats.systemUptime}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-600">Response Time</span>
                  <span className="text-sm font-medium text-primary-600">{stats.avgResponseTime}s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-600">Last Backup</span>
                  <span className="text-sm font-medium text-secondary-900">2 hours ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-600">Security Status</span>
                  <span className="text-sm font-medium text-success-600">Secure</span>
                </div>
              </div>
            </div>

            {/* Recent Alerts */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">System Alerts</h3>
              <div className="space-y-3">
                <div className="p-3 bg-warning-50 border border-warning-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="text-warning-600" size={16} />
                    <span className="text-sm font-medium text-warning-900">High Memory Usage</span>
                  </div>
                  <p className="text-xs text-warning-700 mt-1">Server memory at 78% capacity</p>
                </div>
                <div className="p-3 bg-success-50 border border-success-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="text-success-600" size={16} />
                    <span className="text-sm font-medium text-success-900">Security Update</span>
                  </div>
                  <p className="text-xs text-success-700 mt-1">All systems patched successfully</p>
                </div>
              </div>
            </div>

            {/* Admin Info */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Admin Session</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Shield className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900">{admin?.name || 'Super Admin'}</p>
                    <p className="text-sm text-secondary-600">{admin?.username || 'admin'}</p>
                  </div>
                </div>
                <div className="text-sm text-secondary-600">
                  <p>Session started: 2 hours ago</p>
                  <p>Last activity: 5 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
