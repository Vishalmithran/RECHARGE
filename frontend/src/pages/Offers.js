import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Offers = () => {
  const navigate = useNavigate();

  const offers = [
    {
      id: 1,
      title: 'First Recharge Bonus',
      description: 'Get ₹50 cashback on your first recharge of ₹199 or above',
      code: 'FIRST50',
      validity: 'Valid till 31st Dec 2024'
    },
    {
      id: 2,
      title: 'Weekend Special',
      description: 'Extra 1GB data on all weekend recharges',
      code: 'WEEKEND',
      validity: 'Valid on Saturdays & Sundays'
    },
    {
      id: 3,
      title: 'Loyalty Reward',
      description: '10% cashback for users with 5+ recharges',
      code: 'LOYAL10',
      validity: 'Auto-applied for eligible users'
    }
  ];

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Special Offers</h1>
        
        <div className="space-y-4">
          {offers.map(offer => (
            <div key={offer.id} className="bg-white border rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-2">{offer.description}</p>
                  <div className="text-sm text-gray-500">{offer.validity}</div>
                </div>
                <div className="ml-4 text-center">
                  <div className="bg-pink-100 text-rose-700 px-3 py-1 rounded text-sm font-mono mb-2">
                    {offer.code}
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/plans')}
                    className="text-xs"
                  >
                    Use Offer
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;