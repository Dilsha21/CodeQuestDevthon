import React, { useState } from 'react';
import { 
  BarChart3, 
  Download, 
  Calendar, 
  Filter, 
  Settings, 
  FileText,
  TrendingUp,
  Users,
  Building2,
  Leaf,
  DollarSign,
  Activity,
  AlertCircle,
  Save,
  RefreshCw
} from 'lucide-react';

const ReportsSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('reports');
  const [dateRange, setDateRange] = useState('month');
  const [reportType, setReportType] = useState('overview');

  // Mock data
  const reportData = {
    overview: {
      totalUsers: 50234,
      totalPharmacies: 1247,
      totalOrders: 15678,
      totalRevenue: 245678,
      co2Saved: 12500,
      growth: 15.3
    },
    users: {
      newUsers: 892,
      activeUsers: 12450,
      userRetention: 78.5,
      avgSessionDuration: '12:45',
      topFeatures: ['Search', 'Dashboard', 'Sustainability']
    },
    pharmacies: {
      newPharmacies: 45,
      activePharmacies: 1187,
      avgRating: 4.6,
      totalMedicines: 84750,
      topCategories: ['Pain Relief', 'Antibiotics', 'Vitamins']
    },
    sustainability: {
      totalCO2Saved: 12500,
      treesEquivalent: 595,
      tripsReduced: 25000,
      wasteReduced: 2300,
      ecoScoreImprovement: 12.5
    },
    financial: {
      totalRevenue: 245678,
      subscriptionRevenue: 125000,
      transactionFees: 45678,
      growth: 23.4,
      profitMargin: 18.7
    }
  };

  const systemSettings = {
    notifications: {
      emailAlerts: true,
      smsAlerts: false,
      pushNotifications: true,
      weeklyReports: true,
      monthlyReports: true,
      criticalAlerts: true
    },
    carbonCalculation: {
      transportFactor: 0.12,
      wasteFactor: 0.08,
      energyFactor: 0.05,
      updateFrequency: 'daily',
      accuracy: 85
    },
    dataRetention: {
      userData: '365',
      orderData: '730',
      analyticsData: '1095',
      logData: '90',
      autoCleanup: true
    },
    security: {
      twoFactorAuth: true,
      sessionTimeout: '30',
      passwordPolicy: 'strong',
      encryptionLevel: 'AES-256',
      auditLogging: true
    }
  };

  const [settings, setSettings] = useState(systemSettings);

  const handleSettingChange = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const exportReport = (type) => {
    // Mock export functionality
    const data = reportData[type];
    const csvContent = Object.entries(data).map(([key, value]) => 
      `${key},${value}`
    ).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}-report-${dateRange}.csv`;
    a.click();
  };

  const saveSettings = () => {
    // Mock save functionality
    console.log('Settings saved:', settings);
  };

  const renderReportContent = () => {
    const data = reportData[reportType] || reportData.overview;

    return (
      <div className="space-y-6">
        {/* Report Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 capitalize">
              {reportType} Report
            </h3>
            <p className="text-sm text-secondary-600">
              Generated on {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="flex space-x-2">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border border-secondary-300 rounded-lg text-sm"
            >
              <option value="day">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
            <button
              onClick={() => exportReport(reportType)}
              className="btn btn-secondary flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(data).slice(0, 6).map(([key, value]) => (
            <div key={key} className="bg-secondary-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-600 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                {typeof value === 'number' && key.includes('growth') && (
                  <TrendingUp className="text-success-600" size={16} />
                )}
              </div>
              <p className="text-xl font-bold text-secondary-900 mt-1">
                {typeof value === 'number' ? value.toLocaleString() : value}
              </p>
            </div>
          ))}
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h4 className="font-semibold text-secondary-900 mb-4">Performance Trend</h4>
            <div className="h-64 bg-secondary-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-secondary-500">
                <BarChart3 size={48} className="mx-auto mb-2" />
                <p>Chart visualization would go here</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h4 className="font-semibold text-secondary-900 mb-4">Distribution Analysis</h4>
            <div className="h-64 bg-secondary-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-secondary-500">
                <Activity size={48} className="mx-auto mb-2" />
                <p>Pie chart visualization would go here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSettingsContent = () => (
    <div className="space-y-6">
      {/* Notification Settings */}
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Notification Settings</h3>
        <div className="space-y-4">
          {Object.entries(settings.notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-secondary-900 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <p className="text-sm text-secondary-600">
                  {key === 'emailAlerts' && 'Receive email notifications for important events'}
                  {key === 'smsAlerts' && 'Receive SMS alerts for critical issues'}
                  {key === 'pushNotifications' && 'Receive push notifications in the app'}
                  {key === 'weeklyReports' && 'Get weekly performance reports'}
                  {key === 'monthlyReports' && 'Get monthly analytics reports'}
                  {key === 'criticalAlerts' && 'Immediate alerts for critical system issues'}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => handleSettingChange('notifications', key, e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Carbon Calculation Settings */}
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Carbon Calculation Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Transport Factor (kg CO₂/km)
            </label>
            <input
              type="number"
              step="0.01"
              value={settings.carbonCalculation.transportFactor}
              onChange={(e) => handleSettingChange('carbonCalculation', 'transportFactor', parseFloat(e.target.value))}
              className="input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Waste Factor (kg CO₂/unit)
            </label>
            <input
              type="number"
              step="0.01"
              value={settings.carbonCalculation.wasteFactor}
              onChange={(e) => handleSettingChange('carbonCalculation', 'wasteFactor', parseFloat(e.target.value))}
              className="input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Energy Factor (kg CO₂/kWh)
            </label>
            <input
              type="number"
              step="0.01"
              value={settings.carbonCalculation.energyFactor}
              onChange={(e) => handleSettingChange('carbonCalculation', 'energyFactor', parseFloat(e.target.value))}
              className="input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Update Frequency
            </label>
            <select
              value={settings.carbonCalculation.updateFrequency}
              onChange={(e) => handleSettingChange('carbonCalculation', 'updateFrequency', e.target.value)}
              className="input"
            >
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
        </div>
      </div>

      {/* Data Retention Settings */}
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Data Retention Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(settings.dataRetention).map(([key, value]) => (
            <div key={key}>
              {key === 'autoCleanup' ? (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-secondary-900 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-sm text-secondary-600">
                      Automatically clean up expired data
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => handleSettingChange('dataRetention', key, e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    {key.replace(/([A-Z])/g, ' $1').trim()} (days)
                  </label>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => handleSettingChange('dataRetention', key, e.target.value)}
                    className="input"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Security Settings */}
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Security Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Session Timeout (minutes)
            </label>
            <input
              type="number"
              value={settings.security.sessionTimeout}
              onChange={(e) => handleSettingChange('security', 'sessionTimeout', e.target.value)}
              className="input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Password Policy
            </label>
            <select
              value={settings.security.passwordPolicy}
              onChange={(e) => handleSettingChange('security', 'passwordPolicy', e.target.value)}
              className="input"
            >
              <option value="weak">Weak</option>
              <option value="medium">Medium</option>
              <option value="strong">Strong</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Encryption Level
            </label>
            <select
              value={settings.security.encryptionLevel}
              onChange={(e) => handleSettingChange('security', 'encryptionLevel', e.target.value)}
              className="input"
            >
              <option value="AES-128">AES-128</option>
              <option value="AES-256">AES-256</option>
            </select>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {['twoFactorAuth', 'auditLogging'].map((key) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-secondary-900">
                  {key === 'twoFactorAuth' ? 'Two-Factor Authentication' : 'Audit Logging'}
                </p>
                <p className="text-sm text-secondary-600">
                  {key === 'twoFactorAuth' ? 'Require 2FA for admin accounts' : 'Log all system activities'}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.security[key]}
                  onChange={(e) => handleSettingChange('security', key, e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={saveSettings}
          className="btn btn-primary flex items-center space-x-2"
        >
          <Save size={16} />
          <span>Save Settings</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            Reports & System Settings
          </h1>
          <p className="text-secondary-600">
            Generate reports and configure system-wide settings for the MedFinder platform.
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-secondary-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('reports')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reports'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <BarChart3 size={16} />
                <span>Reports</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Settings size={16} />
                <span>Settings</span>
              </div>
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'reports' && (
          <div>
            {/* Report Type Selector */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {['overview', 'users', 'pharmacies', 'sustainability', 'financial'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setReportType(type)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      reportType === type
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-secondary-700 border border-secondary-300 hover:bg-secondary-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {type === 'overview' && <BarChart3 size={16} />}
                      {type === 'users' && <Users size={16} />}
                      {type === 'pharmacies' && <Building2 size={16} />}
                      {type === 'sustainability' && <Leaf size={16} />}
                      {type === 'financial' && <DollarSign size={16} />}
                      <span className="capitalize">{type}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {renderReportContent()}
          </div>
        )}

        {activeTab === 'settings' && renderSettingsContent()}
      </div>
    </div>
  );
};

export default ReportsSettingsPage;
