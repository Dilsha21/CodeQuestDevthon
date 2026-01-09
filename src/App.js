import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider } from './contexts/AuthContext';

// Normal User Pages
import HomePage from './pages/user/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import MedicineSearchPage from './pages/user/MedicineSearchPage';
import PharmacyDetailsPage from './pages/user/PharmacyDetailsPage';
import UserDashboard from './pages/user/UserDashboard';
import SustainabilityPage from './pages/user/SustainabilityPage';
import ChatbotPage from './pages/user/ChatbotPage';

// Pharmacy Admin Pages
import PharmacyLoginPage from './pages/pharmacy/PharmacyLoginPage';
import PharmacyDashboard from './pages/pharmacy/PharmacyDashboard';
import InventoryManagement from './pages/pharmacy/InventoryManagement';
import DemandForecasting from './pages/pharmacy/DemandForecasting';
import PharmacyProfile from './pages/pharmacy/PharmacyProfile';

// Super Admin Pages
import SuperAdminLoginPage from './pages/admin/SuperAdminLoginPage';
import SuperAdminDashboard from './pages/admin/SuperAdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import PharmacyManagement from './pages/admin/PharmacyManagement';
import ReportsSettings from './pages/admin/ReportsSettings';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/login" element={<Layout><LoginPage /></Layout>} />
          <Route path="/register" element={<Layout><RegisterPage /></Layout>} />
          
          {/* User Routes */}
          <Route path="/search" element={<Layout><MedicineSearchPage /></Layout>} />
          <Route path="/pharmacy/:id" element={<Layout><PharmacyDetailsPage /></Layout>} />
          <Route path="/dashboard" element={<Layout><UserDashboard /></Layout>} />
          <Route path="/sustainability" element={<Layout><SustainabilityPage /></Layout>} />
          <Route path="/chatbot" element={<Layout><ChatbotPage /></Layout>} />
          
          {/* Pharmacy Admin Routes */}
          <Route path="/pharmacy/login" element={<Layout><PharmacyLoginPage /></Layout>} />
          <Route path="/pharmacy/dashboard" element={<Layout><PharmacyDashboard /></Layout>} />
          <Route path="/pharmacy/inventory" element={<Layout><InventoryManagement /></Layout>} />
          <Route path="/pharmacy/forecasting" element={<Layout><DemandForecasting /></Layout>} />
          <Route path="/pharmacy/profile" element={<Layout><PharmacyProfile /></Layout>} />
          
          {/* Super Admin Routes */}
          <Route path="/admin/login" element={<Layout><SuperAdminLoginPage /></Layout>} />
          <Route path="/admin/dashboard" element={<Layout><SuperAdminDashboard /></Layout>} />
          <Route path="/admin/users" element={<Layout><UserManagement /></Layout>} />
          <Route path="/admin/pharmacies" element={<Layout><PharmacyManagement /></Layout>} />
          <Route path="/admin/reports" element={<Layout><ReportsSettings /></Layout>} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
