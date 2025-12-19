import React, { createContext, useContext, useState } from 'react';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    // Simple validation
    if (email && password) {
      setUser({ email });
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const signup = (email, password) => {
    // Simple validation
    if (email && password) {
      setUser({ email });
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const value = {
    user,
    isLoggedIn,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};