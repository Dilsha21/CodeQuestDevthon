import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Filter, 
  Clock, 
  Phone, 
  Star,
  Leaf,
  Navigation,
  AlertCircle
} from 'lucide-react';

const MedicineSearchPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filters, setFilters] = useState({
    distance: '5',
    availability: 'all',
    sortBy: 'distance'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pharmacies, setPharmacies] = useState([]);

  // Mock data
  const mockPharmacies = [
    {
      id: 1,
      name: 'HealthPlus Pharmacy',
      address: '123 Main St, Downtown',
      distance: 0.8,
      rating: 4.5,
      phone: '+1 234-567-8901',
      hours: '8:00 AM - 10:00 PM',
      medicineAvailable: true,
      medicinePrice: '$12.99',
      carbonImpact: '0.2 kg CO₂',
      ecoScore: 85
    },
    {
      id: 2,
      name: 'MediCare Center',
      address: '456 Oak Ave, Westside',
      distance: 1.2,
      rating: 4.8,
      phone: '+1 234-567-8902',
      hours: '9:00 AM - 9:00 PM',
      medicineAvailable: true,
      medicinePrice: '$11.49',
      carbonImpact: '0.3 kg CO₂',
      ecoScore: 92
    },
    {
      id: 3,
      name: 'QuickMeds',
      address: '789 Pine Rd, North District',
      distance: 2.1,
      rating: 4.2,
      phone: '+1 234-567-8903',
      hours: '7:00 AM - 11:00 PM',
      medicineAvailable: false,
      medicinePrice: '$13.99',
      carbonImpact: '0.5 kg CO₂',
      ecoScore: 78
    },
    {
      id: 4,
      name: 'Green Pharmacy',
      address: '321 Elm St, Eco District',
      distance: 1.5,
      rating: 4.7,
      phone: '+1 234-567-8904',
      hours: '8:00 AM - 8:00 PM',
      medicineAvailable: true,
      medicinePrice: '$12.49',
      carbonImpact: '0.1 kg CO₂',
      ecoScore: 95
    }
  ];

  useEffect(() => {
    if (initialQuery) {
      handleSearch();
    }
  }, [initialQuery]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setPharmacies(mockPharmacies);
    setLoading(false);
  };

  const handleFilterChange = (key, value) => {
    setFilters({
      ...filters,
      [key]: value
    });
  };

  const getEcoScoreColor = (score) => {
    if (score >= 90) return 'text-success-600';
    if (score >= 70) return 'text-warning-600';
    return 'text-danger-600';
  };

  const getEcoScoreBadge = (score) => {
    if (score >= 90) return 'badge-success';
    if (score >= 70) return 'badge-warning';
    return 'badge-danger';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Search for medicines..."
                  className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn btn-secondary flex items-center space-x-2"
              >
                <Filter size={20} />
                <span>Filters</span>
              </button>
              <button
                onClick={handleSearch}
                disabled={loading}
                className="btn btn-primary flex items-center space-x-2"
              >
                <Search size={20} />
                <span>{loading ? 'Searching...' : 'Search'}</span>
              </button>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-secondary-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Max Distance
                  </label>
                  <select
                    value={filters.distance}
                    onChange={(e) => handleFilterChange('distance', e.target.value)}
                    className="input"
                  >
                    <option value="1">1 km</option>
                    <option value="5">5 km</option>
                    <option value="10">10 km</option>
                    <option value="25">25 km</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Availability
                  </label>
                  <select
                    value={filters.availability}
                    onChange={(e) => handleFilterChange('availability', e.target.value)}
                    className="input"
                  >
                    <option value="all">All Pharmacies</option>
                    <option value="available">In Stock Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                    className="input"
                  >
                    <option value="distance">Distance</option>
                    <option value="price">Price</option>
                    <option value="eco">Eco Score</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {searchQuery && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-secondary-900">
              Search Results for "{searchQuery}"
            </h2>
            <p className="text-secondary-600">
              Found {pharmacies.length} pharmacies near you
            </p>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-secondary-600">Searching pharmacies...</p>
          </div>
        ) : pharmacies.length > 0 ? (
          <div className="grid gap-6">
            {pharmacies.map((pharmacy) => (
              <div key={pharmacy.id} className="card">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                          {pharmacy.name}
                        </h3>
                        <div className="flex items-center text-secondary-600 mb-2">
                          <MapPin size={16} className="mr-1" />
                          <span className="text-sm">{pharmacy.address}</span>
                          <span className="mx-2">•</span>
                          <span className="text-sm font-medium">{pharmacy.distance} km away</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-secondary-600">
                          <div className="flex items-center">
                            <Clock size={16} className="mr-1" />
                            <span>{pharmacy.hours}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone size={16} className="mr-1" />
                            <span>{pharmacy.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="text-warning-400 fill-current" size={16} />
                            <span className="ml-1">{pharmacy.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`badge ${getEcoScoreBadge(pharmacy.ecoScore)}`}>
                        <Leaf size={14} className="mr-1" />
                        Eco {pharmacy.ecoScore}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="mb-4 sm:mb-0">
                          <div className="flex items-center space-x-4">
                            <div>
                              <span className="text-sm text-secondary-600">Availability:</span>
                              {pharmacy.medicineAvailable ? (
                                <span className="ml-2 badge badge-success">In Stock</span>
                              ) : (
                                <span className="ml-2 badge badge-danger">Out of Stock</span>
                              )}
                            </div>
                            <div>
                              <span className="text-sm text-secondary-600">Price:</span>
                              <span className="ml-2 font-semibold text-secondary-900">
                                {pharmacy.medicinePrice}
                              </span>
                            </div>
                            <div className={`flex items-center ${getEcoScoreColor(pharmacy.ecoScore)}`}>
                              <Leaf size={14} className="mr-1" />
                              <span className="text-sm">{pharmacy.carbonImpact}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Link
                            to={`/pharmacy/${pharmacy.id}`}
                            className="btn btn-primary"
                          >
                            View Details
                          </Link>
                          <button className="btn btn-secondary flex items-center space-x-1">
                            <Navigation size={16} />
                            <span>Directions</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center py-12">
            <AlertCircle className="mx-auto text-secondary-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-secondary-900 mb-2">
              No pharmacies found
            </h3>
            <p className="text-secondary-600">
              Try adjusting your search or filters to find available pharmacies.
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="mx-auto text-secondary-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-secondary-900 mb-2">
              Start your search
            </h3>
            <p className="text-secondary-600">
              Enter a medicine name to find nearby pharmacies with availability.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineSearchPage;
