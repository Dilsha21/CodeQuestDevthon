import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  User, 
  Calendar, 
  Search, 
  Leaf, 
  TrendingDown,
  Clock,
  AlertCircle,
  BarChart3,
  Activity,
  Target
} from 'lucide-react';

const UserDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = {
    totalSearches: 47,
    co2Saved: 2.3,
    medicinesFound: 42,
    tripsReduced: 8
  };

  const recentSearches = [
    { medicine: 'Paracetamol 500mg', date: '2024-01-08', pharmacy: 'HealthPlus Pharmacy' },
    { medicine: 'Amoxicillin 250mg', date: '2024-01-07', pharmacy: 'MediCare Center' },
    { medicine: 'Ibuprofen 400mg', date: '2024-01-06', pharmacy: 'Green Pharmacy' },
    { medicine: 'Vitamin D3', date: '2024-01-05', pharmacy: 'QuickMeds' }
  ];

  const refillReminders = [
    { medicine: 'Metformin 500mg', daysLeft: 3, priority: 'high' },
    { medicine: 'Lisinopril 10mg', daysLeft: 7, priority: 'medium' },
    { medicine: 'Atorvastatin 20mg', daysLeft: 14, priority: 'low' }
  ];

  const sustainabilityTips = [
    {
      title: 'Choose Eco-Friendly Pharmacies',
      description: 'Select pharmacies with high eco-scores to reduce your carbon footprint.',
      icon: Leaf
    },
    {
      title: 'Bulk Purchases',
      description: 'Buy multiple medicines in one trip to reduce travel emissions.',
      icon: Target
    },
    {
      title: 'Proper Disposal',
      description: 'Dispose of expired medicines properly to protect the environment.',
      icon: AlertCircle
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-danger-600 bg-danger-100';
      case 'medium': return 'text-warning-600 bg-warning-100';
      case 'low': return 'text-success-600 bg-success-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high': return 'badge-danger';
      case 'medium': return 'badge-warning';
      case 'low': return 'badge-success';
      default: return 'badge-secondary';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            Welcome back, {user?.name || 'User'}!
          </h1>
          <p className="text-secondary-600">
            Here's your health and sustainability dashboard
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Total Searches</p>
                <p className="text-2xl font-bold text-secondary-900">{stats.totalSearches}</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <Search className="text-primary-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">CO₂ Saved</p>
                <p className="text-2xl font-bold text-success-600">{stats.co2Saved} kg</p>
              </div>
              <div className="bg-success-100 p-3 rounded-lg">
                <Leaf className="text-success-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Medicines Found</p>
                <p className="text-2xl font-bold text-secondary-900">{stats.medicinesFound}</p>
              </div>
              <div className="bg-warning-100 p-3 rounded-lg">
                <Activity className="text-warning-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Trips Reduced</p>
                <p className="text-2xl font-bold text-primary-600">{stats.tripsReduced}</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <TrendingDown className="text-primary-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-secondary-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'searches', 'reminders', 'sustainability'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {recentSearches.slice(0, 3).map((search, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-secondary-100 last:border-0">
                        <div>
                          <p className="font-medium text-secondary-900">{search.medicine}</p>
                          <p className="text-sm text-secondary-600">{search.pharmacy}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-secondary-600">{search.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Link to="/search" className="btn btn-primary">
                      Search for Medicines
                    </Link>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                    Sustainability Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-success-50 rounded-lg">
                      <Leaf className="mx-auto text-success-600 mb-2" size={32} />
                      <p className="text-2xl font-bold text-success-600">{stats.co2Saved} kg</p>
                      <p className="text-sm text-secondary-600">CO₂ Saved</p>
                    </div>
                    <div className="text-center p-4 bg-primary-50 rounded-lg">
                      <TrendingDown className="mx-auto text-primary-600 mb-2" size={32} />
                      <p className="text-2xl font-bold text-primary-600">{stats.tripsReduced}</p>
                      <p className="text-sm text-secondary-600">Trips Reduced</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'searches' && (
              <div className="card">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Search History
                </h3>
                <div className="space-y-3">
                  {recentSearches.map((search, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-secondary-100 last:border-0">
                      <div>
                        <p className="font-medium text-secondary-900">{search.medicine}</p>
                        <p className="text-sm text-secondary-600">{search.pharmacy}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-secondary-600">{search.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reminders' && (
              <div className="card">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Refill Reminders
                </h3>
                <div className="space-y-3">
                  {refillReminders.map((reminder, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-secondary-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Clock className={`p-2 rounded-lg ${getPriorityColor(reminder.priority)}`} size={40} />
                        <div>
                          <p className="font-medium text-secondary-900">{reminder.medicine}</p>
                          <p className="text-sm text-secondary-600">
                            {reminder.daysLeft} days remaining
                          </p>
                        </div>
                      </div>
                      <span className={`badge ${getPriorityBadge(reminder.priority)}`}>
                        {reminder.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'sustainability' && (
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                    Your Environmental Impact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-600">Total CO₂ Saved</span>
                      <span className="font-semibold text-success-600">{stats.co2Saved} kg</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-600">Trips Reduced</span>
                      <span className="font-semibold text-primary-600">{stats.tripsReduced}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-600">Eco Score</span>
                      <span className="font-semibold text-success-600">85/100</span>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                    Sustainability Tips
                  </h3>
                  <div className="space-y-4">
                    {sustainabilityTips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-primary-100 p-2 rounded-lg">
                          <tip.icon className="text-primary-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-secondary-900">{tip.title}</h4>
                          <p className="text-sm text-secondary-600">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Link to="/search" className="btn btn-primary w-full">
                  Search Medicine
                </Link>
                <Link to="/sustainability" className="btn btn-secondary w-full">
                  View Sustainability
                </Link>
                <Link to="/chatbot" className="btn btn-secondary w-full">
                  AI Assistant
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                Profile Summary
              </h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="text-primary-600" size={24} />
                </div>
                <div>
                  <p className="font-medium text-secondary-900">{user?.name || 'User'}</p>
                  <p className="text-sm text-secondary-600">{user?.email || 'user@example.com'}</p>
                </div>
              </div>
              <button className="btn btn-secondary w-full">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
