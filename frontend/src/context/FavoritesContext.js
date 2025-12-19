import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (plan) => {
    setFavorites(prev => [...prev, plan]);
  };

  const removeFromFavorites = (planId) => {
    setFavorites(prev => prev.filter(plan => plan.id !== planId));
  };

  const isFavorite = (planId) => {
    return favorites.some(plan => plan.id === planId);
  };

  return (
    <FavoritesContext.Provider value={{ 
      favorites, 
      addToFavorites, 
      removeFromFavorites, 
      isFavorite 
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};