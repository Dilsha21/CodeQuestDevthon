import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  Navigation,
  Leaf,
  CheckCircle,
  XCircle,
  AlertCircle,
  Share2,
  Heart
} from 'lucide-react';

const PharmacyDetailsPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('medicines');

  // Mock pharmacy data
  const pharmacy = {
    id: id,
    name: 'HealthPlus Pharmacy',
    address: '123 Main St, Downtown, City 12345',
    phone: '+1 234-567-8901',
    email: 'info@healthplus.com',
    hours: {
      monday: '8:00 AM - 10:00 PM',
      tuesday: '8:00 AM - 10:00 PM',
      wednesday: '8:00 AM - 10:00 PM',
      thursday: '8:00 AM - 10:00 PM',
      friday: '8:00 AM - 10:00 PM',
      saturday: '9:00 AM - 9:00 PM',
      sunday: '9:00 AM - 6:00 PM'
    },
    rating: 4.5,
    totalReviews: 234,
    ecoScore: 85,
    carbonImpact: '0.2 kg CO₂',
    distance: 0.8,
    services: ['Prescription Filling', 'Health Consultation', 'Vaccination', 'Health Screening'],
    description: 'HealthPlus Pharmacy is your trusted community pharmacy committed to providing quality healthcare services and sustainable practices.'
  };

  const medicines = [
    { name: 'Paracetamol 500mg', price: '$12.99', stock: 45, available: true, manufacturer: 'MediCorp' },
    { name: 'Amoxicillin 250mg', price: '$18.49', stock: 12, available: true, manufacturer: 'PharmaCo' },
    { name: 'Ibuprofen 400mg', price: '$9.99', stock: 0, available: false, manufacturer: 'HealthLabs' },
    { name: 'Vitamin D3', price: '$15.99', stock: 67, available: true, manufacturer: 'NutriWell' },
    { name: 'Metformin 500mg', price: '$22.49', stock: 28, available: true, manufacturer: 'DiabCare' },
    { name: 'Lisinopril 10mg', price: '$25.99', stock: 5, available: true, manufacturer: 'CardioHealth' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2024-01-05',
      comment: 'Great pharmacy with excellent service. Found my medicine quickly and the staff was very helpful.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 4,
      date: '2024-01-03',
      comment: 'Good selection of medicines and reasonable prices. The eco-friendly initiatives are commendable.'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      rating: 5,
      date: '2023-12-28',
      comment: 'Always have what I need in stock. The online inventory system is very accurate.'
    }
  ];

  const getEcoScoreColor = (score) => {
    if (score >= 90) return 'text-success-600 bg-success-100';
    if (score >= 70) return 'text-warning-600 bg-warning-100';
    return 'text-danger-600 bg-danger-100';
  };

  const getEcoScoreBadge = (score) => {
    if (score >= 90) return 'badge-success';
    if (score >= 70) return 'badge-warning';
    return 'badge-danger';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-secondary-900 mb-2">{pharmacy.name}</h1>
              <div className="flex items-center space-x-4 text-secondary-600">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  <span>{pharmacy.address}</span>
                </div>
                <span>•</span>
                <span>{pharmacy.distance} km away</span>
                <span>•</span>
                <div className="flex items-center">
                  <Star className="text-warning-400 fill-current" size={16} />
                  <span className="ml-1">{pharmacy.rating} ({pharmacy.totalReviews} reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-4 lg:mt-0">
              <div className={`badge ${getEcoScoreBadge(pharmacy.ecoScore)}`}>
                <Leaf size={14} className="mr-1" />
                Eco Score {pharmacy.ecoScore}
              </div>
              <button className="btn btn-secondary">
                <Heart size={16} className="mr-1" />
                Save
              </button>
              <button className="btn btn-secondary">
                <Share2 size={16} className="mr-1" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="border-b border-secondary-200">
                <nav className="flex space-x-8 px-6" aria-label="Tabs">
                  {['medicines', 'info', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
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

              <div className="p-6">
                {activeTab === 'medicines' && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4">Available Medicines</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-secondary-200">
                          <thead className="bg-secondary-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                                Medicine
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                                Price
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                                Stock
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-secondary-200">
                            {medicines.map((medicine, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div>
                                    <div className="text-sm font-medium text-secondary-900">
                                      {medicine.name}
                                    </div>
                                    <div className="text-sm text-secondary-500">
                                      {medicine.manufacturer}
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                                  {medicine.price}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                                  {medicine.stock} units
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {medicine.available ? (
                                    <span className="badge badge-success">
                                      <CheckCircle size={12} className="mr-1" />
                                      In Stock
                                    </span>
                                  ) : (
                                    <span className="badge badge-danger">
                                      <XCircle size={12} className="mr-1" />
                                      Out of Stock
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'info' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4">About</h3>
                      <p className="text-secondary-600">{pharmacy.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <MapPin className="text-secondary-400 mr-3" size={20} />
                          <span>{pharmacy.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="text-secondary-400 mr-3" size={20} />
                          <span>{pharmacy.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <AlertCircle className="text-secondary-400 mr-3" size={20} />
                          <span>{pharmacy.email}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4">Operating Hours</h3>
                      <div className="space-y-2">
                        {Object.entries(pharmacy.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between">
                            <span className="capitalize font-medium">{day}</span>
                            <span className="text-secondary-600">{hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4">Services</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {pharmacy.services.map((service, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="text-success-500 mr-2" size={16} />
                            <span className="text-secondary-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4">Environmental Impact</h3>
                      <div className="bg-success-50 border border-success-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-success-800 mb-1">
                              Estimated CO₂ for your visit
                            </p>
                            <p className="text-lg font-semibold text-success-900">
                              {pharmacy.carbonImpact}
                            </p>
                          </div>
                          <div className={`p-3 rounded-lg ${getEcoScoreColor(pharmacy.ecoScore)}`}>
                            <Leaf size={24} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4">Customer Reviews</h3>
                      <div className="space-y-4">
                        {reviews.map((review) => (
                          <div key={review.id} className="border-b border-secondary-200 pb-4 last:border-0">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-primary-600 font-semibold">
                                    {review.name.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <p className="font-medium text-secondary-900">{review.name}</p>
                                  <p className="text-sm text-secondary-600">{review.date}</p>
                                </div>
                              </div>
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="text-warning-400 fill-current" size={16} />
                                ))}
                              </div>
                            </div>
                            <p className="text-secondary-700">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Actions</h3>
              <div className="space-y-3">
                <button className="btn btn-primary w-full flex items-center justify-center">
                  <Navigation size={16} className="mr-2" />
                  Get Directions
                </button>
                <button className="btn btn-secondary w-full">
                  <Phone size={16} className="mr-2" />
                  Call Pharmacy
                </button>
                <Link to="/search" className="btn btn-secondary w-full">
                  Search Other Pharmacies
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Eco Score Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-secondary-600">Overall Score</span>
                  <span className="font-semibold text-success-600">{pharmacy.ecoScore}/100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-600">Energy Efficiency</span>
                  <span className="font-semibold text-success-600">A+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-600">Waste Management</span>
                  <span className="font-semibold text-warning-600">B</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-600">Sustainable Practices</span>
                  <span className="font-semibold text-success-600">A</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Quick Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary-600">Distance</span>
                  <span className="font-medium">{pharmacy.distance} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Rating</span>
                  <span className="font-medium">{pharmacy.rating}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Reviews</span>
                  <span className="font-medium">{pharmacy.totalReviews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Carbon Impact</span>
                  <span className="font-medium">{pharmacy.carbonImpact}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDetailsPage;
