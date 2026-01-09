import React, { useState } from 'react';
import { 
  Leaf, 
  TrendingDown, 
  Recycle, 
  Droplets,
  TreePine,
  Award,
  BarChart3,
  Target,
  Lightbulb,
  Globe,
  Heart,
  Calculator,
  MapPin,
  Package,
  Search
} from 'lucide-react';

const SustainabilityPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const userStats = {
    totalCO2Saved: 2.3,
    tripsReduced: 8,
    medicinesOptimized: 15,
    ecoScore: 85,
    rank: 'Gold',
    treesEquivalent: 12
  };

  const impactData = [
    {
      category: 'Transportation',
      amount: 1.8,
      unit: 'kg CO₂',
      description: 'Reduced emissions from optimized pharmacy visits',
      icon: TrendingDown,
      color: 'primary'
    },
    {
      category: 'Medicine Waste',
      amount: 0.3,
      unit: 'kg CO₂',
      description: 'Prevented waste through better stock management',
      icon: Recycle,
      color: 'success'
    },
    {
      category: 'Energy',
      amount: 0.2,
      unit: 'kg CO₂',
      description: 'Energy saved from eco-friendly pharmacy choices',
      icon: Lightbulb,
      color: 'warning'
    }
  ];

  const tips = [
    {
      title: 'Choose Nearby Pharmacies',
      description: 'Select the closest pharmacy with your medicine to minimize travel emissions.',
      icon: MapPin,
      impact: 'High'
    },
    {
      title: 'Bundle Your Purchases',
      description: 'Buy multiple medicines in one trip to reduce the number of visits.',
      icon: Package,
      impact: 'Medium'
    },
    {
      title: 'Check Stock Online',
      description: 'Verify availability before visiting to avoid wasted trips.',
      icon: Search,
      impact: 'High'
    },
    {
      title: 'Proper Medicine Disposal',
      description: 'Dispose of expired medicines at designated collection points.',
      icon: Recycle,
      impact: 'Medium'
    },
    {
      title: 'Use Generic Alternatives',
      description: 'Choose generic medicines when available to reduce manufacturing impact.',
      icon: Target,
      impact: 'Low'
    },
    {
      title: 'Digital Prescriptions',
      description: 'Opt for e-prescriptions to reduce paper waste.',
      icon: Globe,
      impact: 'Low'
    }
  ];

  const achievements = [
    {
      title: 'Eco Warrior',
      description: 'Saved over 2kg CO₂',
      icon: Award,
      unlocked: true,
      progress: 100
    },
    {
      title: 'Trip Reducer',
      description: 'Reduced 5+ pharmacy trips',
      icon: TrendingDown,
      unlocked: true,
      progress: 100
    },
    {
      title: 'Green Guardian',
      description: 'Maintain eco score above 80',
      icon: Leaf,
      unlocked: true,
      progress: 85
    },
    {
      title: 'Sustainability Champion',
      description: 'Save 5kg CO₂ total',
      icon: TreePine,
      unlocked: false,
      progress: 46
    }
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-success-600 bg-success-100';
      case 'Medium': return 'text-warning-600 bg-warning-100';
      case 'Low': return 'text-secondary-600 bg-secondary-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-success-600';
    if (score >= 70) return 'text-warning-600';
    return 'text-danger-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            Sustainability Dashboard
          </h1>
          <p className="text-secondary-600">
            Track your environmental impact and learn how to make more sustainable healthcare choices.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">CO₂ Saved</p>
                <p className="text-2xl font-bold text-success-600">{userStats.totalCO2Saved} kg</p>
                <p className="text-xs text-secondary-500">Equivalent to {userStats.treesEquivalent} trees</p>
              </div>
              <div className="bg-success-100 p-3 rounded-lg">
                <Leaf className="text-success-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Trips Reduced</p>
                <p className="text-2xl font-bold text-primary-600">{userStats.tripsReduced}</p>
                <p className="text-xs text-secondary-500">This month</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <TrendingDown className="text-primary-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Eco Score</p>
                <p className={`text-2xl font-bold ${getScoreColor(userStats.ecoScore)}`}>
                  {userStats.ecoScore}/100
                </p>
                <p className="text-xs text-secondary-500">{userStats.rank} Level</p>
              </div>
              <div className="bg-warning-100 p-3 rounded-lg">
                <Award className="text-warning-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Medicines Optimized</p>
                <p className="text-2xl font-bold text-secondary-900">{userStats.medicinesOptimized}</p>
                <p className="text-xs text-secondary-500">Total</p>
              </div>
              <div className="bg-secondary-100 p-3 rounded-lg">
                <Target className="text-secondary-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-secondary-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'impact', 'tips', 'achievements'].map((tab) => (
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
                    Your Environmental Impact
                  </h3>
                  <div className="space-y-4">
                    {impactData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`bg-${item.color}-100 p-2 rounded-lg`}>
                            <item.icon className={`text-${item.color}-600`} size={20} />
                          </div>
                          <div>
                            <h4 className="font-medium text-secondary-900">{item.category}</h4>
                            <p className="text-sm text-secondary-600">{item.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-secondary-900">
                            {item.amount} {item.unit}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                    Monthly Progress
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-secondary-600">CO₂ Reduction Goal</span>
                        <span className="text-sm font-medium">2.3kg / 3kg</span>
                      </div>
                      <div className="w-full bg-secondary-200 rounded-full h-2">
                        <div className="bg-success-600 h-2 rounded-full" style={{ width: '77%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-secondary-600">Trip Reduction Goal</span>
                        <span className="text-sm font-medium">8 / 10</span>
                      </div>
                      <div className="w-full bg-secondary-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'impact' && (
              <div className="card">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Carbon Footprint Calculator
                </h3>
                <div className="space-y-6">
                  <div className="bg-success-50 border border-success-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-success-900">Your Total Impact</h4>
                      <Calculator className="text-success-600" size={24} />
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-success-900 mb-2">
                        {userStats.totalCO2Saved} kg CO₂
                      </p>
                      <p className="text-success-700">
                        That's equivalent to planting {userStats.treesEquivalent} trees!
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                      <h5 className="font-medium text-primary-900 mb-2">Transportation Savings</h5>
                      <p className="text-2xl font-bold text-primary-900 mb-1">1.8 kg CO₂</p>
                      <p className="text-sm text-primary-700">From optimized pharmacy visits</p>
                    </div>
                    <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
                      <h5 className="font-medium text-warning-900 mb-2">Waste Reduction</h5>
                      <p className="text-2xl font-bold text-warning-900 mb-1">0.3 kg CO₂</p>
                      <p className="text-sm text-warning-700">From better stock management</p>
                    </div>
                  </div>

                  <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4">
                    <h5 className="font-medium text-secondary-900 mb-3">How We Calculate</h5>
                    <ul className="space-y-2 text-sm text-secondary-700">
                      <li>• Distance traveled to pharmacies</li>
                      <li>• Mode of transportation (car, walk, bike)</li>
                      <li>• Number of trips avoided</li>
                      <li>• Medicine waste prevented</li>
                      <li>• Energy efficiency of chosen pharmacies</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tips' && (
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                    Sustainability Tips
                  </h3>
                  <div className="space-y-4">
                    {tips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 border border-secondary-200 rounded-lg">
                        <div className="bg-primary-100 p-2 rounded-lg">
                          <tip.icon className="text-primary-600" size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-secondary-900">{tip.title}</h4>
                            <span className={`badge ${getImpactColor(tip.impact)}`}>
                              {tip.impact} Impact
                            </span>
                          </div>
                          <p className="text-sm text-secondary-600">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="card">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Your Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg ${
                        achievement.unlocked
                          ? 'border-success-200 bg-success-50'
                          : 'border-secondary-200 bg-secondary-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div
                          className={`p-2 rounded-lg ${
                            achievement.unlocked
                              ? 'bg-success-100'
                              : 'bg-secondary-200'
                          }`}
                        >
                          <achievement.icon
                            className={achievement.unlocked ? 'text-success-600' : 'text-secondary-400'}
                            size={20}
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-secondary-900">{achievement.title}</h4>
                          <p className="text-sm text-secondary-600">{achievement.description}</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-secondary-600">Progress</span>
                          <span className="text-xs font-medium">{achievement.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              achievement.unlocked ? 'bg-success-600' : 'bg-secondary-400'
                            }`}
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
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
                <button className="btn btn-primary w-full">
                  <Search size={16} className="mr-2" />
                  Find Eco-Friendly Pharmacies
                </button>
                <button className="btn btn-secondary w-full">
                  <Calculator size={16} className="mr-2" />
                  Calculate Your Impact
                </button>
                <button className="btn btn-secondary w-full">
                  <Heart size={16} className="mr-2" />
                  Share Your Progress
                </button>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                Did You Know?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Droplets className="text-primary-600 mt-1" size={16} />
                  <p className="text-sm text-secondary-600">
                    Pharmaceutical waste contributes to 20% of water pollution in some areas.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <TreePine className="text-success-600 mt-1" size={16} />
                  <p className="text-sm text-secondary-600">
                    One tree absorbs about 21 kg of CO₂ per year.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <Globe className="text-warning-600 mt-1" size={16} />
                  <p className="text-sm text-secondary-600">
                    Healthcare accounts for 8.5% of US carbon emissions.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                Community Impact
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-secondary-600">Total Users</span>
                  <span className="font-medium">50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary-600">CO₂ Saved (All)</span>
                  <span className="font-medium">12,500 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary-600">Trees Equivalent</span>
                  <span className="font-medium">595 trees</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary-600">Trips Reduced</span>
                  <span className="font-medium">25,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;
