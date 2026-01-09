import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Edit, 
  Save, 
  X,
  Camera,
  Award,
  Users,
  Star,
  Leaf,
  CheckCircle
} from 'lucide-react';

const PharmacyProfilePage = () => {
  const { pharmacy } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'HealthPlus Pharmacy',
    email: 'info@healthplus.com',
    phone: '+1 234-567-8901',
    address: '123 Main St, Downtown, City 12345',
    licenseNumber: 'PH-2024-001',
    description: 'Your trusted community pharmacy committed to providing quality healthcare services and sustainable practices.',
    website: 'www.healthpluspharmacy.com',
    established: '2010'
  });

  const [operatingHours, setOperatingHours] = useState({
    monday: '8:00 AM - 10:00 PM',
    tuesday: '8:00 AM - 10:00 PM',
    wednesday: '8:00 AM - 10:00 PM',
    thursday: '8:00 AM - 10:00 PM',
    friday: '8:00 AM - 10:00 PM',
    saturday: '9:00 AM - 9:00 PM',
    sunday: '9:00 AM - 6:00 PM'
  });

  const [services, setServices] = useState([
    'Prescription Filling',
    'Health Consultation',
    'Vaccination',
    'Health Screening',
    'Medicine Delivery',
    'Compounding Services'
  ]);

  const stats = {
    totalReviews: 234,
    averageRating: 4.5,
    totalCustomers: 1250,
    yearsInService: 14,
    ecoScore: 85,
    certifications: 3
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleHoursChange = (day, value) => {
    setOperatingHours({
      ...operatingHours,
      [day]: value
    });
  };

  const handleServiceToggle = (service) => {
    if (services.includes(service)) {
      setServices(services.filter(s => s !== service));
    } else {
      setServices([...services, service]);
    }
  };

  const handleSave = () => {
    // Save logic here
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data
    setIsEditing(false);
  };

  const allServices = [
    'Prescription Filling',
    'Health Consultation',
    'Vaccination',
    'Health Screening',
    'Medicine Delivery',
    'Compounding Services',
    'Diabetes Care',
    'Blood Pressure Monitoring',
    'Medication Therapy Management',
    'Home Healthcare Supplies'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-secondary-900 mb-2">Pharmacy Profile</h1>
              <p className="text-secondary-600">
                Manage your pharmacy information and services
              </p>
            </div>
            <div className="flex space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="btn btn-success flex items-center space-x-2"
                  >
                    <Save size={16} />
                    <span>Save Changes</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn btn-secondary flex items-center space-x-2"
                  >
                    <X size={16} />
                    <span>Cancel</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-primary flex items-center space-x-2"
                >
                  <Edit size={16} />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Basic Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                      <Building2 className="text-primary-600" size={32} />
                    </div>
                    {isEditing && (
                      <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-1 rounded-full">
                        <Camera size={14} />
                      </button>
                    )}
                  </div>
                  <div className="flex-1">
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="text-xl font-semibold text-secondary-900 input"
                      />
                    ) : (
                      <h2 className="text-xl font-semibold text-secondary-900">{formData.name}</h2>
                    )}
                    <p className="text-sm text-secondary-600">License: {formData.licenseNumber}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Mail className="text-secondary-400" size={16} />
                        <span>{formData.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Phone className="text-secondary-400" size={16} />
                        <span>{formData.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Address
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="input"
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <MapPin className="text-secondary-400" size={16} />
                        <span>{formData.address}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Website
                    </label>
                    {isEditing ? (
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="input"
                      />
                    ) : (
                      <a href={`https://${formData.website}`} className="text-primary-600 hover:underline">
                        {formData.website}
                      </a>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Established
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="established"
                        value={formData.established}
                        onChange={handleChange}
                        className="input"
                      />
                    ) : (
                      <span>{formData.established}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Description
                  </label>
                  {isEditing ? (
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      className="input"
                    />
                  ) : (
                    <p className="text-secondary-600">{formData.description}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Operating Hours</h3>
              <div className="space-y-3">
                {Object.entries(operatingHours).map(([day, hours]) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="capitalize font-medium text-secondary-900 w-24">
                      {day}
                    </span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={hours}
                        onChange={(e) => handleHoursChange(day, e.target.value)}
                        className="input flex-1 ml-4"
                        placeholder="e.g., 8:00 AM - 10:00 PM"
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Clock className="text-secondary-400" size={16} />
                        <span>{hours}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Services Offered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {allServices.map((service) => (
                  <label key={service} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={services.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      disabled={!isEditing}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                    />
                    <span className="text-sm text-secondary-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance Stats */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Performance Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="text-warning-400 fill-current" size={16} />
                    <span className="text-sm text-secondary-600">Rating</span>
                  </div>
                  <span className="font-semibold text-secondary-900">{stats.averageRating}/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="text-primary-600" size={16} />
                    <span className="text-sm text-secondary-600">Customers</span>
                  </div>
                  <span className="font-semibold text-secondary-900">{stats.totalCustomers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="text-warning-600" size={16} />
                    <span className="text-sm text-secondary-600">Reviews</span>
                  </div>
                  <span className="font-semibold text-secondary-900">{stats.totalReviews}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Leaf className="text-success-600" size={16} />
                    <span className="text-sm text-secondary-600">Eco Score</span>
                  </div>
                  <span className="font-semibold text-success-600">{stats.ecoScore}/100</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success-600" size={20} />
                  <div>
                    <p className="font-medium text-secondary-900">Licensed Pharmacy</p>
                    <p className="text-xs text-secondary-600">State Board of Pharmacy</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success-600" size={20} />
                  <div>
                    <p className="font-medium text-secondary-900">Eco-Certified</p>
                    <p className="text-xs text-secondary-600">Green Pharmacy Program</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success-600" size={20} />
                  <div>
                    <p className="font-medium text-secondary-900">Quality Assured</p>
                    <p className="text-xs text-secondary-600">ISO 9001:2015</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="btn btn-secondary w-full text-left">
                  <Award size={16} className="mr-2" />
                  View Certificates
                </button>
                <button className="btn btn-secondary w-full text-left">
                  <Users size={16} className="mr-2" />
                  Customer Reviews
                </button>
                <button className="btn btn-secondary w-full text-left">
                  <Leaf size={16} className="mr-2" />
                  Sustainability Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyProfilePage;
