import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Ban,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';

const UserManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Mock data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 234-567-8901',
      registrationDate: '2024-01-05',
      lastActive: '2024-01-08',
      status: 'active',
      totalOrders: 45,
      totalSpent: 1250.50,
      co2Saved: 2.3,
      verificationStatus: 'verified'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '+1 234-567-8902',
      registrationDate: '2024-01-03',
      lastActive: '2024-01-07',
      status: 'active',
      totalOrders: 32,
      totalSpent: 890.75,
      co2Saved: 1.8,
      verificationStatus: 'verified'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@email.com',
      phone: '+1 234-567-8903',
      registrationDate: '2023-12-28',
      lastActive: '2024-01-06',
      status: 'suspended',
      totalOrders: 28,
      totalSpent: 675.25,
      co2Saved: 1.2,
      verificationStatus: 'pending'
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice.brown@email.com',
      phone: '+1 234-567-8904',
      registrationDate: '2023-12-15',
      lastActive: '2024-01-08',
      status: 'active',
      totalOrders: 67,
      totalSpent: 2340.80,
      co2Saved: 3.5,
      verificationStatus: 'verified'
    },
    {
      id: 5,
      name: 'Charlie Wilson',
      email: 'charlie.wilson@email.com',
      phone: '+1 234-567-8905',
      registrationDate: '2023-11-20',
      lastActive: '2023-12-30',
      status: 'inactive',
      totalOrders: 15,
      totalSpent: 425.50,
      co2Saved: 0.8,
      verificationStatus: 'unverified'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-success-600 bg-success-100';
      case 'suspended': return 'text-danger-600 bg-danger-100';
      case 'inactive': return 'text-warning-600 bg-warning-100';
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

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.phone.includes(searchTerm);
    
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const handleStatusChange = (userId, newStatus) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  const handleVerificationChange = (userId, newStatus) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, verificationStatus: newStatus } : user
    ));
  };

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(prev => prev.filter(user => user.id !== userId));
    }
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  const exportUsers = () => {
    // Mock export functionality
    const csvContent = users.map(u => 
      `${u.name},${u.email},${u.phone},${u.status},${u.totalOrders},${u.totalSpent}`
    ).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.click();
  };

  const userStats = {
    total: users.length,
    active: users.filter(u => u.status === 'active').length,
    suspended: users.filter(u => u.status === 'suspended').length,
    inactive: users.filter(u => u.status === 'inactive').length,
    verified: users.filter(u => u.verificationStatus === 'verified').length,
    pending: users.filter(u => u.verificationStatus === 'pending').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">User Management</h1>
          <p className="text-secondary-600">
            Manage user accounts, verification status, and system access.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="card">
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary-900">{userStats.total}</p>
              <p className="text-sm text-secondary-600">Total Users</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-2xl font-bold text-success-600">{userStats.active}</p>
              <p className="text-sm text-secondary-600">Active</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-2xl font-bold text-danger-600">{userStats.suspended}</p>
              <p className="text-sm text-secondary-600">Suspended</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-2xl font-bold text-warning-600">{userStats.inactive}</p>
              <p className="text-sm text-secondary-600">Inactive</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">{userStats.verified}</p>
              <p className="text-sm text-secondary-600">Verified</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-2xl font-bold text-warning-600">{userStats.pending}</p>
              <p className="text-sm text-secondary-600">Pending</p>
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
                  placeholder="Search users by name, email, or phone..."
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
                <option value="suspended">Suspended</option>
                <option value="inactive">Inactive</option>
              </select>
              
              <button
                onClick={exportUsers}
                className="btn btn-secondary flex items-center space-x-2"
              >
                <Download size={16} />
                <span>Export</span>
              </button>
              
              {selectedUsers.length > 0 && (
                <button className="btn btn-danger flex items-center space-x-2">
                  <Ban size={16} />
                  <span>Bulk Action ({selectedUsers.length})</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-secondary-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === filteredUsers.length}
                      onChange={handleSelectAll}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Registration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Activity
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
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-secondary-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-secondary-500">
                          {user.email}
                        </div>
                        <div className="text-sm text-secondary-500">
                          {user.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary-900">
                      {user.registrationDate}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-secondary-900">
                        <div>Orders: {user.totalOrders}</div>
                        <div>Spent: ${user.totalSpent}</div>
                        <div className="text-success-600">CO₂ Saved: {user.co2Saved}kg</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`badge ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`badge ${getVerificationColor(user.verificationStatus)}`}>
                        {user.verificationStatus}
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
                        {user.status === 'active' ? (
                          <button
                            onClick={() => handleStatusChange(user.id, 'suspended')}
                            className="text-warning-600 hover:text-warning-500"
                          >
                            <Ban size={16} />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStatusChange(user.id, 'active')}
                            className="text-success-600 hover:text-success-500"
                          >
                            <CheckCircle size={16} />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(user.id)}
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
        {selectedUsers.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border border-secondary-200 p-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-secondary-600">
                {selectedUsers.length} users selected
              </span>
              <button className="btn btn-secondary btn-sm">Export Selected</button>
              <button className="btn btn-warning btn-sm">Suspend Selected</button>
              <button className="btn btn-success btn-sm">Verify Selected</button>
              <button className="btn btn-danger btn-sm">Delete Selected</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagementPage;
