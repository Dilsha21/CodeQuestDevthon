import React, { useState } from 'react';
import { 
  Package, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  AlertCircle,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Upload
} from 'lucide-react';

const InventoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Mock data
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: 'Paracetamol 500mg',
      manufacturer: 'MediCorp',
      category: 'Pain Relief',
      currentStock: 45,
      minStock: 20,
      maxStock: 100,
      unitPrice: 12.99,
      expiryDate: '2024-12-31',
      demand: 'High',
      lastUpdated: '2024-01-08'
    },
    {
      id: 2,
      name: 'Amoxicillin 250mg',
      manufacturer: 'PharmaCo',
      category: 'Antibiotics',
      currentStock: 12,
      minStock: 15,
      maxStock: 80,
      unitPrice: 18.49,
      expiryDate: '2024-08-15',
      demand: 'Medium',
      lastUpdated: '2024-01-07'
    },
    {
      id: 3,
      name: 'Ibuprofen 400mg',
      manufacturer: 'HealthLabs',
      category: 'Pain Relief',
      currentStock: 0,
      minStock: 25,
      maxStock: 100,
      unitPrice: 9.99,
      expiryDate: '2024-06-30',
      demand: 'High',
      lastUpdated: '2024-01-06'
    },
    {
      id: 4,
      name: 'Vitamin D3',
      manufacturer: 'NutriWell',
      category: 'Vitamins',
      currentStock: 67,
      minStock: 30,
      maxStock: 150,
      unitPrice: 15.99,
      expiryDate: '2025-03-31',
      demand: 'Low',
      lastUpdated: '2024-01-05'
    },
    {
      id: 5,
      name: 'Metformin 500mg',
      manufacturer: 'DiabCare',
      category: 'Diabetes',
      currentStock: 5,
      minStock: 20,
      maxStock: 100,
      unitPrice: 22.49,
      expiryDate: '2024-09-30',
      demand: 'High',
      lastUpdated: '2024-01-04'
    }
  ]);

  const getStockStatus = (medicine) => {
    if (medicine.currentStock === 0) return { status: 'out', color: 'danger', label: 'Out of Stock' };
    if (medicine.currentStock <= medicine.minStock) return { status: 'low', color: 'warning', label: 'Low Stock' };
    if (medicine.currentStock >= medicine.maxStock * 0.9) return { status: 'high', color: 'warning', label: 'Overstocked' };
    return { status: 'normal', color: 'success', label: 'In Stock' };
  };

  const getDemandColor = (demand) => {
    switch (demand) {
      case 'High': return 'text-danger-600';
      case 'Medium': return 'text-warning-600';
      case 'Low': return 'text-success-600';
      default: return 'text-secondary-600';
    }
  };

  const getExpiryStatus = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { status: 'expired', color: 'danger', label: 'Expired' };
    if (diffDays <= 30) return { status: 'expiring', color: 'warning', label: 'Expiring Soon' };
    if (diffDays <= 90) return { status: 'warning', color: 'warning', label: 'Monitor' };
    return { status: 'good', color: 'success', label: 'Good' };
  };

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const stockStatus = getStockStatus(medicine);
    const matchesFilter = filterStatus === 'all' || stockStatus.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const handleStockUpdate = (id, newStock) => {
    setMedicines(prev => prev.map(medicine => 
      medicine.id === id 
        ? { ...medicine, currentStock: newStock, lastUpdated: new Date().toISOString().split('T')[0] }
        : medicine
    ));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this medicine?')) {
      setMedicines(prev => prev.filter(medicine => medicine.id !== id));
    }
  };

  const exportInventory = () => {
    // Mock export functionality
    const csvContent = medicines.map(m => 
      `${m.name},${m.manufacturer},${m.category},${m.currentStock},${m.unitPrice},${m.expiryDate}`
    ).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inventory.csv';
    a.click();
  };

  const stockStats = {
    total: medicines.length,
    outOfStock: medicines.filter(m => m.currentStock === 0).length,
    lowStock: medicines.filter(m => m.currentStock <= m.minStock && m.currentStock > 0).length,
    normalStock: medicines.filter(m => {
      const status = getStockStatus(m);
      return status.status === 'normal';
    }).length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">Inventory Management</h1>
          <p className="text-secondary-600">
            Manage your medicine inventory, track stock levels, and monitor expiry dates.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Total Medicines</p>
                <p className="text-2xl font-bold text-secondary-900">{stockStats.total}</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <Package className="text-primary-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Out of Stock</p>
                <p className="text-2xl font-bold text-danger-600">{stockStats.outOfStock}</p>
              </div>
              <div className="bg-danger-100 p-3 rounded-lg">
                <XCircle className="text-danger-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Low Stock</p>
                <p className="text-2xl font-bold text-warning-600">{stockStats.lowStock}</p>
              </div>
              <div className="bg-warning-100 p-3 rounded-lg">
                <AlertCircle className="text-warning-600" size={24} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 mb-1">Normal Stock</p>
                <p className="text-2xl font-bold text-success-600">{stockStats.normalStock}</p>
              </div>
              <div className="bg-success-100 p-3 rounded-lg">
                <CheckCircle className="text-success-600" size={24} />
              </div>
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
                  placeholder="Search medicines, manufacturers, or categories..."
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
                <option value="normal">In Stock</option>
                <option value="low">Low Stock</option>
                <option value="out">Out of Stock</option>
              </select>
              
              <button
                onClick={() => setShowAddModal(true)}
                className="btn btn-primary flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Add Medicine</span>
              </button>
              
              <button
                onClick={exportInventory}
                className="btn btn-secondary flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-secondary-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Medicine
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Stock Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Demand
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Expiry
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-secondary-200">
                {filteredMedicines.map((medicine) => {
                  const stockStatus = getStockStatus(medicine);
                  const expiryStatus = getExpiryStatus(medicine.expiryDate);
                  
                  return (
                    <tr key={medicine.id}>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-secondary-900">
                            {medicine.name}
                          </div>
                          <div className="text-sm text-secondary-500">
                            {medicine.manufacturer}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-secondary-900">
                        {medicine.category}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <span className={`badge badge-${stockStatus.color}`}>
                            {stockStatus.label}
                          </span>
                          <span className="text-sm text-secondary-600">
                            {medicine.currentStock}/{medicine.maxStock}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm font-medium ${getDemandColor(medicine.demand)}`}>
                          {medicine.demand}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <span className={`badge badge-${expiryStatus.color}`}>
                            {expiryStatus.label}
                          </span>
                          <span className="text-sm text-secondary-600">
                            {medicine.expiryDate}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-secondary-900">
                        ${medicine.unitPrice}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setEditingItem(medicine)}
                            className="text-primary-600 hover:text-primary-500"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(medicine.id)}
                            className="text-danger-600 hover:text-danger-500"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add/Edit Medicine Modal */}
        {(showAddModal || editingItem) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                  {editingItem ? 'Edit Medicine' : 'Add New Medicine'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Medicine Name
                    </label>
                    <input
                      type="text"
                      defaultValue={editingItem?.name || ''}
                      className="input"
                      placeholder="Enter medicine name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Manufacturer
                    </label>
                    <input
                      type="text"
                      defaultValue={editingItem?.manufacturer || ''}
                      className="input"
                      placeholder="Enter manufacturer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Category
                    </label>
                    <select className="input" defaultValue={editingItem?.category || ''}>
                      <option value="">Select category</option>
                      <option value="Pain Relief">Pain Relief</option>
                      <option value="Antibiotics">Antibiotics</option>
                      <option value="Vitamins">Vitamins</option>
                      <option value="Diabetes">Diabetes</option>
                      <option value="Cardiovascular">Cardiovascular</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Unit Price
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      defaultValue={editingItem?.unitPrice || ''}
                      className="input"
                      placeholder="Enter price"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Current Stock
                    </label>
                    <input
                      type="number"
                      defaultValue={editingItem?.currentStock || ''}
                      className="input"
                      placeholder="Enter current stock"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Minimum Stock
                    </label>
                    <input
                      type="number"
                      defaultValue={editingItem?.minStock || ''}
                      className="input"
                      placeholder="Enter minimum stock"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Maximum Stock
                    </label>
                    <input
                      type="number"
                      defaultValue={editingItem?.maxStock || ''}
                      className="input"
                      placeholder="Enter maximum stock"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      defaultValue={editingItem?.expiryDate || ''}
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Demand Level
                    </label>
                    <select className="input" defaultValue={editingItem?.demand || ''}>
                      <option value="">Select demand</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingItem(null);
                    }}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // Handle save logic here
                      setShowAddModal(false);
                      setEditingItem(null);
                    }}
                    className="btn btn-primary"
                  >
                    {editingItem ? 'Update' : 'Add'} Medicine
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryManagement;
