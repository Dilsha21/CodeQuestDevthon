import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Package, 
  TrendingUp, 
  Users, 
  AlertCircle,
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  ArrowUp,
  ArrowDown,
  Calendar,
  DollarSign
} from 'lucide-react';

const PharmacyDashboard = () => {
  const { pharmacy } = useAuth();
  const [timeRange, setTimeRange] = useState('week');

  // Mock data
  const stats = {
    totalMedicines: 847,
    lowStock: 12,
    outOfStock: 3,
    todayOrders: 45,
    weeklyRevenue: 12500,
    monthlyRevenue: 48000,
    customerSatisfaction: 4.6,
    ecoScore: 85
  };

  const recentOrders = [
    { id: 1, medicine: 'Paracetamol 500mg', customer: 'John Doe', quantity: 2, status: 'completed', time: '10:30 AM' },
    { id: 2, medicine: 'Amoxicillin 250mg', customer: 'Jane Smith', quantity: 1, status: 'pending', time: '10:15 AM' },
    { id: 3, medicine: 'Ibuprofen 400mg', customer: 'Bob Johnson', quantity: 3, status: 'completed', time: '09:45 AM' },
    { id: 4, medicine: 'Vitamin D3', customer: 'Alice Brown', quantity: 1, status: 'processing', time: '09:30 AM' }
  ];

  const lowStockMedicines = [
    { name: 'Metformin 500mg', currentStock: 5, minStock: 10, demand: 'High' },
    { name: 'Lisinopril 10mg', currentStock: 8, minStock: 15, demand: 'Medium' },
    { name: 'Atorvastatin 20mg', currentStock: 3, minStock: 12, demand: 'High' },
    { name: 'Omeprazole 20mg', currentStock: 7, minStock: 10, demand: 'Low' }
  ];

  const alerts = [
    { type: 'warning', message: 'Metformin 500mg stock below minimum level', time: '2 hours ago' },
    { type: 'danger', message: 'Atorvastatin 20mg is out of stock', time: '4 hours ago' },
    { type: 'success', message: 'Weekly inventory update completed', time: '6 hours ago' },
    { type: 'info', message: 'New demand forecast available', time: '1 day ago' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-success-600 bg-success-100';
      case 'pending': return 'text-warning-600 bg-warning-100';
      case 'processing': return 'text-primary-600 bg-primary-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'danger': return 'text-danger-600 bg-danger-100 border-danger-200';
      case 'warning': return 'text-warning-600 bg-warning-100 border-warning-200';
      case 'success': return 'text-success-600 bg-success-100 border-success-200';
      case 'info': return 'text-primary-600 bg-primary-100 border-primary-200';
      default: return 'text-secondary-600 bg-secondary-100 border-secondary-200';
    }
  };

  const getDemandColor = (demand) => {
    switch (demand) {
      case 'High': return 'text-danger-600';
      case 'Medium': return 'text-warning-600';
      case 'Low': return 'text-success-600';
      default: return 'text-secondary-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            Welcome back, {pharmacy?.name || 'Pharmacy'}!
          </h1>
          <p className="text-secondary-600">
            Here's your pharmacy dashboard with real-time insights and alerts.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Total Medicines</p>
                <p className="text-2xl font-bold text-secondary-900">{stats.totalMedicines}</p>
                <p className="text-xs text-secondary-500">In inventory</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <Package className="text-primary-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Low Stock Items</p>
                <p className="text-2xl font-bold text-warning-600">{stats.lowStock}</p>
                <p className="text-xs text-secondary-500">Need attention</p>
              </div>
              <div className="bg-warning-100 p-3 rounded-lg">
                <AlertCircle className="text-warning-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Today's Orders</p>
                <p className="text-2xl font-bold text-success-600">{stats.todayOrders}</p>
                <p className="text-xs text-success-500 flex items-center">
                  <ArrowUp size={12} className="mr-1" />
                  12% from yesterday
                </p>
              </div>
              <div className="bg-success-100 p-3 rounded-lg">
                <Users className="text-success-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Eco Score</p>
                <p className="text-2xl font-bold text-primary-600">{stats.ecoScore}</p>
                <p className="text-xs text-secondary-500">Sustainability rating</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <TrendingUp className="text-primary-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Orders */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-secondary-900">Recent Orders</h3>
                <Link to="/pharmacy/orders" className="text-primary-600 hover:text-primary-500 text-sm">
                  View all
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-secondary-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Medicine
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Qty
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-secondary-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-4 py-3 text-sm text-secondary-900">{order.medicine}</td>
                        <td className="px-4 py-3 text-sm text-secondary-600">{order.customer}</td>
                        <td className="px-4 py-3 text-sm text-secondary-900">{order.quantity}</td>
                        <td className="px-4 py-3">
                          <span className={`badge ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-secondary-600">{order.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Low Stock Alert */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-secondary-900">Low Stock Alert</h3>
                <Link to="/pharmacy/inventory" className="text-primary-600 hover:text-primary-500 text-sm">
                  Manage inventory
                </Link>
              </div>
              <div className="space-y-3">
                {lowStockMedicines.map((medicine, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-warning-50 border border-warning-200 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-secondary-900">{medicine.name}</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-secondary-600">
                          Current: <span className="font-medium">{medicine.currentStock}</span>
                        </span>
                        <span className="text-sm text-secondary-600">
                          Min: <span className="font-medium">{medicine.minStock}</span>
                        </span>
                        <span className={`text-sm font-medium ${getDemandColor(medicine.demand)}`}>
                          Demand: {medicine.demand}
                        </span>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm">
                      Reorder
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Chart Placeholder */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-secondary-900">Revenue Overview</h3>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="text-sm border border-secondary-300 rounded px-3 py-1"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-success-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-success-600">Weekly Revenue</span>
                    <DollarSign className="text-success-600" size={20} />
                  </div>
                  <p className="text-2xl font-bold text-success-900">${stats.weeklyRevenue.toLocaleString()}</p>
                  <p className="text-xs text-success-700 flex items-center mt-1">
                    <ArrowUp size={12} className="mr-1" />
                    8% from last week
                  </p>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-600">Monthly Revenue</span>
                    <BarChart3 className="text-primary-600" size={20} />
                  </div>
                  <p className="text-2xl font-bold text-primary-900">${stats.monthlyRevenue.toLocaleString()}</p>
                  <p className="text-xs text-primary-700 flex items-center mt-1">
                    <ArrowUp size={12} className="mr-1" />
                    15% from last month
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/pharmacy/inventory" className="btn btn-primary w-full">
                  <Package size={16} className="mr-2" />
                  Update Inventory
                </Link>
                <Link to="/pharmacy/forecasting" className="btn btn-secondary w-full">
                  <TrendingUp size={16} className="mr-2" />
                  View Forecast
                </Link>
                <Link to="/pharmacy/profile" className="btn btn-secondary w-full">
                  <Eye size={16} className="mr-2" />
                  Edit Profile
                </Link>
              </div>
            </div>

            {/* Alerts */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Recent Alerts</h3>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className={`p-3 border rounded-lg ${getAlertColor(alert.type)}`}>
                    <p className="text-sm font-medium mb-1">{alert.message}</p>
                    <p className="text-xs opacity-75">{alert.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-600">Customer Satisfaction</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">{stats.customerSatisfaction}/5</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xs ${
                            i < Math.floor(stats.customerSatisfaction)
                              ? 'text-warning-400'
                              : 'text-secondary-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-600">Order Fulfillment</span>
                  <span className="text-sm font-medium text-success-600">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-600">Inventory Accuracy</span>
                  <span className="text-sm font-medium text-primary-600">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-600">Eco Score</span>
                  <span className="text-sm font-medium text-success-600">{stats.ecoScore}/100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDashboard;
