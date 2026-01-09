import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Search, 
  User, 
  Building2, 
  Shield, 
  Menu, 
  X, 
  Leaf,
  LogOut,
  Home,
  BarChart3,
  Package,
  Settings,
  Users,
  FileText
} from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, pharmacy, admin, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const userNavItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/search', label: 'Search Medicine', icon: Search },
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/sustainability', label: 'Sustainability', icon: Leaf },
    { path: '/chatbot', label: 'AI Assistant', icon: User },
  ];

  const pharmacyNavItems = [
    { path: '/pharmacy/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/pharmacy/inventory', label: 'Inventory', icon: Package },
    { path: '/pharmacy/forecasting', label: 'Demand Forecast', icon: BarChart3 },
    { path: '/pharmacy/profile', label: 'Profile', icon: Settings },
  ];

  const adminNavItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/admin/users', label: 'User Management', icon: Users },
    { path: '/admin/pharmacies', label: 'Pharmacy Management', icon: Building2 },
    { path: '/admin/reports', label: 'Reports & Settings', icon: FileText },
  ];

  const getNavItems = () => {
    if (admin) return adminNavItems;
    if (pharmacy) return pharmacyNavItems;
    if (user) return userNavItems;
    return [
      { path: '/', label: 'Home', icon: Home },
      { path: '/search', label: 'Search Medicine', icon: Search },
    ];
  };

  const getAuthButtons = () => {
    if (user || pharmacy || admin) {
      return (
        <div className="flex items-center space-x-4">
          <span className="text-sm text-secondary-600">
            {user?.name || pharmacy?.name || admin?.name}
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-secondary-600 hover:text-secondary-800 transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-4">
        <Link
          to="/login"
          className="btn btn-secondary"
          onClick={() => setIsMenuOpen(false)}
        >
          Login
        </Link>
        <Link
          to="/register"
          className="btn btn-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          Register
        </Link>
        <Link
          to="/pharmacy/login"
          className="text-sm text-secondary-600 hover:text-secondary-800"
          onClick={() => setIsMenuOpen(false)}
        >
          Pharmacy Login
        </Link>
        <Link
          to="/admin/login"
          className="text-sm text-secondary-600 hover:text-secondary-800"
          onClick={() => setIsMenuOpen(false)}
        >
          Admin Login
        </Link>
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-sm border-b border-secondary-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary-600 text-white p-2 rounded-lg">
              <Search size={24} />
            </div>
            <span className="text-xl font-bold text-secondary-900">MedFinder</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {getNavItems().map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:block">
            {getAuthButtons()}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-600 hover:text-secondary-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-secondary-200 py-4">
            <div className="space-y-2">
              {getNavItems().map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-secondary-200">
              {getAuthButtons()}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
