import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pharmacy, setPharmacy] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth data on mount
    const storedUser = localStorage.getItem('user');
    const storedPharmacy = localStorage.getItem('pharmacy');
    const storedAdmin = localStorage.getItem('admin');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedPharmacy) {
      setPharmacy(JSON.parse(storedPharmacy));
    }
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const loginPharmacy = (pharmacyData) => {
    setPharmacy(pharmacyData);
    localStorage.setItem('pharmacy', JSON.stringify(pharmacyData));
  };

  const loginAdmin = (adminData) => {
    setAdmin(adminData);
    localStorage.setItem('admin', JSON.stringify(adminData));
  };

  const logout = () => {
    setUser(null);
    setPharmacy(null);
    setAdmin(null);
    localStorage.removeItem('user');
    localStorage.removeItem('pharmacy');
    localStorage.removeItem('admin');
  };

  const value = {
    user,
    pharmacy,
    admin,
    loading,
    login,
    loginPharmacy,
    loginAdmin,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
