import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  BarChart3, 
  AlertTriangle,
  Package,
  Download,
  Filter,
  Eye,
  Target
} from 'lucide-react';

const DemandForecastingPage = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data
  const forecastData = [
    {
      id: 1,
      medicine: 'Paracetamol 500mg',
      category: 'Pain Relief',
      currentDemand: 120,
      forecastedDemand: 145,
      confidence: 85,
      trend: 'increasing',
      recommendation: 'Increase stock by 20%',
      priority: 'high',
      seasonalFactor: 'Winter season increase'
    },
    {
      id: 2,
      medicine: 'Amoxicillin 250mg',
      category: 'Antibiotics',
      currentDemand: 80,
      forecastedDemand: 75,
      confidence: 78,
      trend: 'stable',
      recommendation: 'Maintain current stock levels',
      priority: 'medium',
      seasonalFactor: 'No seasonal variation'
    },
    {
      id: 3,
      medicine: 'Vitamin D3',
      category: 'Vitamins',
      currentDemand: 60,
      forecastedDemand: 85,
      confidence: 92,
      trend: 'increasing',
      recommendation: 'Increase stock by 40%',
      priority: 'high',
      seasonalFactor: 'Winter vitamin deficiency'
    },
    {
      id: 4,
      medicine: 'Ibuprofen 400mg',
      category: 'Pain Relief',
      currentDemand: 95,
      forecastedDemand: 88,
      confidence: 71,
      trend: 'decreasing',
      recommendation: 'Reduce stock by 10%',
      priority: 'low',
      seasonalFactor: 'Post-holiday decrease'
    },
    {
      id: 5,
      medicine: 'Metformin 500mg',
      category: 'Diabetes',
      currentDemand: 150,
      forecastedDemand: 165,
      confidence: 88,
      trend: 'increasing',
      recommendation: 'Increase stock by 10%',
      priority: 'high',
      seasonalFactor: 'Diabetes awareness month'
    }
  ];

  const categoryStats = [
    { category: 'Pain Relief', growth: 12, confidence: 82, trend: 'increasing' },
    { category: 'Antibiotics', growth: -5, confidence: 75, trend: 'stable' },
    { category: 'Vitamins', growth: 25, confidence: 90, trend: 'increasing' },
    { category: 'Diabetes', growth: 8, confidence: 85, trend: 'increasing' },
    { category: 'Cardiovascular', growth: 3, confidence: 78, trend: 'stable' }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="text-success-600" size={20} />;
      case 'decreasing': return <TrendingDown className="text-danger-600" size={20} />;
      default: return <Target className="text-warning-600" size={20} />;
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'increasing': return 'text-success-600';
      case 'decreasing': return 'text-danger-600';
      default: return 'text-warning-600';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'badge-danger';
      case 'medium': return 'badge-warning';
      case 'low': return 'badge-success';
      default: return 'badge-secondary';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 85) return 'text-success-600';
    if (confidence >= 70) return 'text-warning-600';
    return 'text-danger-600';
  };

  const filteredData = selectedCategory === 'all' 
    ? forecastData 
    : forecastData.filter(item => item.category === selectedCategory);

  const overallStats = {
    totalMedicines: forecastData.length,
    increasingTrend: forecastData.filter(item => item.trend === 'increasing').length,
    decreasingTrend: forecastData.filter(item => item.trend === 'decreasing').length,
    averageConfidence: Math.round(forecastData.reduce((acc, item) => acc + item.confidence, 0) / forecastData.length)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">Demand Forecasting</h1>
          <p className="text-secondary-600">
            AI-powered demand predictions to optimize your inventory and reduce waste.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Total Medicines</p>
                <p className="text-2xl font-bold text-secondary-900">{overallStats.totalMedicines}</p>
                <p className="text-xs text-secondary-500">Analyzed</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <Package className="text-primary-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Increasing Demand</p>
                <p className="text-2xl font-bold text-success-600">{overallStats.increasingTrend}</p>
                <p className="text-xs text-success-500 flex items-center">
                  <TrendingUp size={12} className="mr-1" />
                  Need more stock
                </p>
              </div>
              <div className="bg-success-100 p-3 rounded-lg">
                <TrendingUp className="text-success-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Decreasing Demand</p>
                <p className="text-2xl font-bold text-danger-600">{overallStats.decreasingTrend}</p>
                <p className="text-xs text-danger-500 flex items-center">
                  <TrendingDown size={12} className="mr-1" />
                  Reduce stock
                </p>
              </div>
              <div className="bg-danger-100 p-3 rounded-lg">
                <TrendingDown className="text-danger-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Avg. Confidence</p>
                <p className="text-2xl font-bold text-primary-600">{overallStats.averageConfidence}%</p>
                <p className="text-xs text-secondary-500">Prediction accuracy</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <BarChart3 className="text-primary-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-secondary-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="week">Next Week</option>
                <option value="month">Next Month</option>
                <option value="quarter">Next Quarter</option>
                <option value="year">Next Year</option>
              </select>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="Pain Relief">Pain Relief</option>
                <option value="Antibiotics">Antibiotics</option>
                <option value="Vitamins">Vitamins</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Cardiovascular">Cardiovascular</option>
              </select>
            </div>
            
            <div className="flex gap-2">
              <button className="btn btn-secondary flex items-center space-x-2">
                <Filter size={16} />
                <span>Advanced Filters</span>
              </button>
              <button className="btn btn-secondary flex items-center space-x-2">
                <Download size={16} />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Forecast Table */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                Demand Forecast Details
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-secondary-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Medicine
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Current vs Forecast
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Trend
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Confidence
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Priority
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-secondary-200">
                    {filteredData.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-4">
                          <div>
                            <div className="text-sm font-medium text-secondary-900">
                              {item.medicine}
                            </div>
                            <div className="text-sm text-secondary-500">
                              {item.category}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-sm">
                            <div className="flex items-center space-x-2">
                              <span className="text-secondary-900">{item.currentDemand}</span>
                              <span className="text-secondary-500">→</span>
                              <span className={`font-medium ${getTrendColor(item.trend)}`}>
                                {item.forecastedDemand}
                              </span>
                            </div>
                            <div className="text-xs text-secondary-500">
                              {Math.round(((item.forecastedDemand - item.currentDemand) / item.currentDemand) * 100)}% change
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center space-x-2">
                            {getTrendIcon(item.trend)}
                            <span className={`text-sm capitalize ${getTrendColor(item.trend)}`}>
                              {item.trend}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-secondary-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  item.confidence >= 85 ? 'bg-success-600' :
                                  item.confidence >= 70 ? 'bg-warning-600' : 'bg-danger-600'
                                }`}
                                style={{ width: `${item.confidence}%` }}
                              ></div>
                            </div>
                            <span className={`text-sm font-medium ${getConfidenceColor(item.confidence)}`}>
                              {item.confidence}%
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`badge ${getPriorityColor(item.priority)}`}>
                            {item.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recommendations */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                AI Recommendations
              </h3>
              <div className="space-y-4">
                {filteredData.filter(item => item.priority === 'high').map((item) => (
                  <div key={item.id} className="border-l-4 border-danger-500 bg-danger-50 p-4 rounded">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="text-danger-600 mt-1" size={20} />
                      <div className="flex-1">
                        <h4 className="font-medium text-secondary-900">{item.medicine}</h4>
                        <p className="text-sm text-secondary-700 mt-1">{item.recommendation}</p>
                        <p className="text-xs text-secondary-600 mt-2">
                          <strong>Seasonal Factor:</strong> {item.seasonalFactor}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Category Performance */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                Category Performance
              </h3>
              <div className="space-y-3">
                {categoryStats.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-secondary-900">{category.category}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        {getTrendIcon(category.trend)}
                        <span className={`text-sm ${getTrendColor(category.trend)}`}>
                          {category.growth > 0 ? '+' : ''}{category.growth}%
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-secondary-600">Confidence</div>
                      <div className={`text-sm font-medium ${getConfidenceColor(category.confidence)}`}>
                        {category.confidence}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Forecast Insights */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                Key Insights
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-success-600 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-secondary-900">Vitamin demand increasing</p>
                    <p className="text-xs text-secondary-600">Winter season deficiency pattern</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-warning-600 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-secondary-900">Pain relief stable</p>
                    <p className="text-xs text-secondary-600">Consistent year-round demand</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-danger-600 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-secondary-900">Antibiotics decreasing</p>
                    <p className="text-xs text-secondary-600">Seasonal variation expected</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Model Accuracy */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                Model Performance
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-secondary-600">Overall Accuracy</span>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div className="bg-success-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-secondary-600">Last Month Accuracy</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div className="bg-warning-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
                  <p className="text-sm text-primary-800">
                    <strong>Model Update:</strong> New training data incorporated on January 1, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandForecastingPage;
