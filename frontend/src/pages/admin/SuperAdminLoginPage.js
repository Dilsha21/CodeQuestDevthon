import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Eye, EyeOff, AlertCircle, Shield, Lock } from 'lucide-react';

const SuperAdminLoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { loginAdmin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock login - in real app, this would be an API call
      if (formData.username && formData.password) {
        const adminData = {
          id: 1,
          name: 'Super Administrator',
          username: formData.username,
          role: 'super_admin',
          permissions: ['all']
        };
        loginAdmin(adminData);
        navigate('/admin/dashboard');
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-900 to-secondary-700 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-white rounded-lg flex items-center justify-center">
            <Shield className="text-secondary-900" size={24} />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Admin Portal
          </h2>
          <p className="mt-2 text-center text-sm text-secondary-300">
            Secure access for system administrators
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-danger-50 border border-danger-200 rounded-md p-4">
              <div className="flex">
                <AlertCircle className="text-danger-400 mr-2" size={20} />
                <span className="text-sm text-danger-800">{error}</span>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-secondary-200">
                Admin Username
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Shield className="text-secondary-400" size={20} />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-90 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Enter admin username"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-secondary-200">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-secondary-400" size={20} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 bg-white bg-opacity-90 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="text-secondary-400" size={20} />
                  ) : (
                    <Eye className="text-secondary-400" size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-white focus:ring-white border-secondary-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-secondary-200">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-white hover:text-secondary-200">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full bg-white text-secondary-900 font-semibold py-3 px-4 rounded-lg hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-secondary-300">
              Are you a pharmacy?{' '}
              <Link
                to="/pharmacy/login"
                className="font-medium text-white hover:text-secondary-200"
              >
                Pharmacy Login
              </Link>
            </p>
            <p className="text-sm text-secondary-300 mt-2">
              Are you a patient?{' '}
              <Link
                to="/login"
                className="font-medium text-white hover:text-secondary-200"
              >
                Patient Login
              </Link>
            </p>
          </div>
        </form>

        <div className="mt-6">
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-4">
            <h3 className="text-sm font-semibold text-white mb-2">Security Notice</h3>
            <p className="text-xs text-secondary-300">
              This is a restricted access area. Unauthorized access attempts are monitored and logged. 
              By proceeding, you confirm that you have the necessary permissions to access this system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLoginPage;
