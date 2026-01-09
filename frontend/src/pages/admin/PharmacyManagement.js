import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  MapPin,
  Phone,
  Mail,
  Star,
  Leaf
} from 'lucide-react';

const PharmacyManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedPharmacies, setSelectedPharmacies] = useState([]);

  // Mock data
  const [pharmacies, setPharmacies] = useState([
    {
      id: 1,
      name: 'HealthPlus Pharmacy',
      email: 'info@healthplus.com',
      phone: '+1 234-567-8901',
      address: '123 Main St, Downtown, City 12345',
      registrationDate: '2024-01-05',
      licenseNumber: 'PH-2024-001',
      status: 'active',
      verificationStatus: 'verified',
      rating: 4.8,
      totalOrders: 1247,
      totalRevenue: 45678.50,
      ecoScore: 92,
      contactPerson: 'Dr. Sarah Johnson',
      operatingHours: '8:00 AM - 10:00 PM'
    },
    {
      id: 2,
      name: 'MediCare Center',
      email: 'contact@medicare.com',
      phone: '+1 234-567-8902',
      address: '456 Oak Ave, Westside, City 12345',
      registrationDate: '2024-01-03',
      licenseNumber: 'PH-2024-002',
      status: 'active',
      verificationStatus: 'verified',
      rating: 4.6,
      totalOrders: 1098,
      totalRevenue: 39876.25,
      ecoScore: 88,
      contactPerson: 'Dr. Michael Chen',
      operatingHours: '9:00 AM - 9:00 PM'
    },
    {
      id: 3,
      name: 'QuickMeds',
      email: 'hello@quickmeds.com',
      phone: '+1 234-567-8903',
      address: '789 Pine Rd, North District, City 12345',
      registrationDate: '2023-12-28',
      licenseNumber: 'PH-2023-156',
      status: 'pending',
      verificationStatus: 'pending',
      rating: 4.5,
      totalOrders: 987,
      totalRevenue: 34567.75,
      ecoScore: 85,
      contactPerson: 'Dr. Emily Davis',
      operatingHours: '7:00 AM - 11:00 PM'
    },
    {
      id: 4,
      name: 'Green Pharmacy',
      email: 'info@greenpharmacy.com',
      phone: '+1 234-567-8904',
      address: '321 Elm St, Eco District, City 12345',
      registrationDate: '2023-12-15',
      licenseNumber: 'PH-2023-145',
      status: 'active',
      verificationStatus: 'verified',
      rating: 4.7,
      totalOrders: 876,
      totalRevenue: 29876.50,
      ecoScore: 95,
      contactPerson: 'Dr. Robert Green',
      operatingHours: '8:00 AM - 8:00 PM'
    },
    {
      id: 5,
      name: 'City Pharmacy',
      email: 'contact@citypharmacy.com',
      phone: '+1 234-567-8905',
      address: '555 Market St, City Center, City 12345',
      registrationDate: '2023-11-20',
      licenseNumber: 'PH-2023-134',
      status: 'suspended',
      verificationStatus: 'unverified',
      rating: 4.4,
      totalOrders: 765,
      totalRevenue: 25678.25,
      ecoScore: 78,
      contactPerson: 'Dr. Lisa Anderson',
      operatingHours: '9:00 AM - 7:00 PM'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-success-600 bg-success-100';
      case 'pending': return 'text-warning-600 bg-warning-100';
      case 'suspended': return 'text-danger-600 bg-danger-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  const getVerificationColor = (status) => {
    switch (status) {
      case 'verified': return 'text-success-600 bg-success-100';
      case 'pending': return 'text-warning-600 bg-warning-100';
      case 'unverified': return 'text-danger-600 bg-danger-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  const getEcoScoreColor = (score) => {
    if (score >= 90) return 'text-success-600';
    if (score >= 70) return 'text-warning-600';
    return 'text-danger-600';
  };

  const filteredPharmacies = pharmacies.filter(pharmacy => {
    const matchesSearch = pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pharmacy.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pharmacy.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pharmacy.licenseNumber.includes(searchTerm);
    
    const matchesFilter = filterStatus === 'all' || pharmacy.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const handleStatusChange = (pharmacyId, newStatus) => {
    setPharmacies(prev => prev.map(pharmacy => 
      pharmacy.id === pharmacyId ? { ...pharmacy, status: newStatus } : pharmacy
    ));
  };

  const handleVerificationChange = (pharmacyId, newStatus) => {
    setPharmacies(prev => prev.map(pharmacy => 
      pharmacy.id === pharmacyId ? { ...pharmacy, verificationStatus: newStatus } : pharmacy
    ));
  };

  const handleDelete = (pharmacyId) => {
    if (window.confirm('Are you sure you want to delete this pharmacy?')) {
      setPharmacies(prev => prev.filter(pharmacy => pharmacy.id !== pharmacyId));
    }
  };

  const handleSelectPharmacy = (pharmacyId) => {
    setSelectedPharmacies(prev => 
      prev.includes(pharmacyId) 
        ? prev.filter(id => id !== pharmacyId)
        : [...prev, pharmacyId]
    );
  };

  const handleSelectAll = () => {
    if (selectedPharmacies.length === filteredPharmacies.length) {
      setSelectedPharmacies([]);
    } else {
      setSelectedPharmacies(filteredPharmacies.map(pharmacy => pharmacy.id));
    }
  };

  const exportPharmacies = () => {
    // Mock export functionality
    const csvContent = pharmacies.map(p => 
      `${p.name},${p.email},${p.phone},${p.status},${p.rating},${p.totalOrders},${p.totalRevenue}`
    ).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pharmacies.csv';
    a.click();
  };

  const pharmacyStats = {
    total: pharmacies.length,
    active: pharmacies.filter(p => p.status === 'active').length,
    pending: pharmacies.filter(p => p.status === 'pending').length,
    suspended: pharmacies.filter(p => p.status === 'suspended').length,
    verified: pharmacies.filter(p => p.verificationStatus === 'verified').length,
    avgEcoScore: Math.round(pharmacies.reduce((acc, p) => acc + p.ecoScore, 0) / pharmacies.length)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">Pharmacy Management</h1>
          <p className="text-secondary-600">
            Manage pharmacy registrations, verification status, and compliance.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="card">
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary-900">{pharmacyStats.total}</p>
              <p className="text-sm text-secondary-600">Total Pharmacies</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-2xl font-bold text-success-600">{pharmacyStats.active}</p>
              <p className="text-sm text-secondary-600">Active</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-2xl font-bold text-warning-600">{pharmacyStats.pending}</p>
              <p className="text-sm text-secondary-600">Pending</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-2xl font-bold text-danger-600">{pharmacyStats.suspended}</p>
              <p className="text-sm text-secondary-600">Suspended</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">{pharmacyStats.verified}</p>
              <p className="text-sm text-secondary-600">Verified</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-2xl font-bold text-success-600">{pharmacyStats.avgEcoScore}</p>
              <p className="text-sm text-secondary-600">Avg Eco Score</p>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-secondary-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search pharmacies by name, email, address, or license..."
                  className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
              </select>
              
              <button className="btn btn-primary flex items-center space-x-2">
                <Plus size={16} />
                <span>Add Pharmacy</span>
              </button>
              
              <button
                onClick={exportPharmacies}
                className="btn btn-secondary flex items-center space-x-2"
              >
                <Download size={16} />
                <span>Export</span>
              </button>
              
              {selectedPharmacies.length > 0 && (
                <button className="btn btn-warning flex items-center space-x-2">
                  <AlertCircle size={16} />
                  <span>Bulk Action ({selectedPharmacies.length})</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Pharmacies Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-secondary-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedPharmacies.length === filteredPharmacies.length}
                      onChange={handleSelectAll}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Pharmacy
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Verification
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-secondary-200">
                {filteredPharmacies.map((pharmacy) => (
                  <tr key={pharmacy.id}>
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedPharmacies.includes(pharmacy.id)}
                        onChange={() => handleSelectPharmacy(pharmacy.id)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-secondary-900">
                          {pharmacy.name}
                        </div>
                        <div className="text-sm text-secondary-500">
                          {pharmacy.licenseNumber}
                        </div>
                        <div className="text-sm text-secondary-500">
                          <MapPin size={12} className="inline mr-1" />
                          {pharmacy.address}
                        </div>
                        <div className="text-sm text-secondary-500">
                          Contact: {pharmacy.contactPerson}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-secondary-900">
                        <div className="flex items-center">
                          <Mail size={12} className="mr-1" />
                          {pharmacy.email}
                        </div>
                        <div className="flex items-center">
                          <Phone size={12} className="mr-1" />
                          {pharmacy.phone}
                        </div>
                        <div className="text-xs text-secondary-500">
                          Hours: {pharmacy.operatingHours}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-secondary-900">
                        <div className="flex items-center">
                          <Star className="text-warning-400 fill-current" size={12} />
                          <span className="ml-1">{pharmacy.rating}</span>
                        </div>
                        <div>Orders: {pharmacy.totalOrders}</div>
                        <div>Revenue: ${pharmacy.totalRevenue.toLocaleString()}</div>
                        <div className={`flex items-center ${getEcoScoreColor(pharmacy.ecoScore)}`}>
                          <Leaf size={12} className="mr-1" />
                          <span>Eco: {pharmacy.ecoScore}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`badge ${getStatusColor(pharmacy.status)}`}>
                        {pharmacy.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`badge ${getVerificationColor(pharmacy.verificationStatus)}`}>
                        {pharmacy.verificationStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-primary-600 hover:text-primary-500">
                          <Eye size={16} />
                        </button>
                        <button className="text-secondary-600 hover:text-secondary-500">
                          <Edit size={16} />
                        </button>
                        {pharmacy.verificationStatus === 'pending' ? (
                          <button
                            onClick={() => handleVerificationChange(pharmacy.id, 'verified')}
                            className="text-success-600 hover:text-success-500"
                          >
                            <CheckCircle size={16} />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleVerificationChange(pharmacy.id, 'pending')}
                            className="text-warning-600 hover:text-warning-500"
                          >
                            <AlertCircle size={16} />
                          </button>
                        )}
                        {pharmacy.status === 'active' ? (
                          <button
                            onClick={() => handleStatusChange(pharmacy.id, 'suspended')}
                            className="text-warning-600 hover:text-warning-500"
                          >
                            <XCircle size={16} />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStatusChange(pharmacy.id, 'active')}
                            className="text-success-600 hover:text-success-500"
                          >
                            <CheckCircle size={16} />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(pharmacy.id)}
                          className="text-danger-600 hover:text-danger-500"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bulk Actions Panel */}
        {selectedPharmacies.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border border-secondary-200 p-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-secondary-600">
                {selectedPharmacies.length} pharmacies selected
              </span>
              <button className="btn btn-secondary btn-sm">Export Selected</button>
              <button className="btn btn-success btn-sm">Approve Selected</button>
              <button className="btn btn-warning btn-sm">Suspend Selected</button>
              <button className="btn btn-danger btn-sm">Delete Selected</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PharmacyManagementPage;
