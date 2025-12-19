import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [plans, setPlans] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('userEmail');
    
    if (isLoggedIn === 'true' && userEmail) {
      setUser({ email: userEmail, role: userEmail.includes('admin') ? 'admin' : 'user' });
      setIsLoggedIn(true);
      setIsAdmin(userEmail.includes('admin'));
    } else if (token) {
      checkAuth();
    }
    loadPlans();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await apiService.getCurrentUser();
      if (response.success) {
        setUser(response.user);
        setIsLoggedIn(true);
        setIsAdmin(response.user.role === 'admin');
        loadTransactions();
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      logout();
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await apiService.login(email, password);
      if (response.success) {
        setUser(response.user);
        setIsLoggedIn(true);
        setIsAdmin(response.user.role === 'admin');
        loadTransactions();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    apiService.logout();
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setUser(null);
    setIsLoggedIn(false);
    setIsAdmin(false);
    setTransactions([]);
    window.location.href = '/';
  };

  const loadPlans = async () => {
    try {
      const response = await apiService.getPlans();
      if (response.success) {
        setPlans(response.plans);
      }
    } catch (error) {
      console.error('Failed to load plans from API, using local data:', error);
      // Load local plans as fallback
      const { rechargePlans } = await import('../data/plans.js');
      setPlans(rechargePlans);
    }
  };

  const loadTransactions = async () => {
    try {
      const response = await apiService.getTransactions();
      if (response.success) {
        setTransactions(response.transactions);
      }
    } catch (error) {
      console.error('Failed to load transactions:', error);
    }
  };

  const addTransaction = async (transactionData) => {
    try {
      const response = await apiService.createTransaction(transactionData);
      if (response.success) {
        setTransactions(prev => [response.transaction, ...prev]);
        return response.transaction;
      }
    } catch (error) {
      console.error('Failed to create transaction:', error);
      throw error;
    }
  };

  const addPlan = async (planData) => {
    try {
      const response = await apiService.createPlan(planData);
      if (response.success) {
        setPlans(prev => [...prev, response.plan]);
        return response.plan;
      }
    } catch (error) {
      console.error('Failed to create plan:', error);
      throw error;
    }
  };

  const updatePlan = async (id, planData) => {
    try {
      const response = await apiService.updatePlan(id, planData);
      if (response.success) {
        setPlans(prev => prev.map(plan => plan._id === id ? response.plan : plan));
        return response.plan;
      }
    } catch (error) {
      console.error('Failed to update plan:', error);
      throw error;
    }
  };

  const deletePlan = async (id) => {
    try {
      const response = await apiService.deletePlan(id);
      if (response.success) {
        setPlans(prev => prev.filter(plan => plan._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete plan:', error);
      throw error;
    }
  };

  return (
    <AppContext.Provider value={{
      user, isLoggedIn, isAdmin, plans, transactions, loading,
      login, logout, addTransaction, addPlan, updatePlan, deletePlan,
      loadPlans, loadTransactions
    }}>
      {children}
    </AppContext.Provider>
  );
};