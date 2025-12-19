import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import PlanCard from '../components/PlanCard';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const handlePlanSelect = (plan) => {
    navigate('/payment', {
      state: {
        plan,
        mobileNumber: '',
        operator: '',
        service: 'prepaid'
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Favorite Plans</h1>
        
        {favorites.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500 mb-4">No favorite plans yet</p>
            <Button onClick={() => navigate('/plans')}>
              Browse Plans
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map(plan => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onSelect={handlePlanSelect}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;