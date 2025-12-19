import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext.js';
import Button from '../components/Button.js';
import { operators } from '../data/plans.js';

const Plans = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plans } = useApp();
  const [selectedOperator, setSelectedOperator] = useState('all');

  const { mobileNumber, operator } = location.state || {};

  const filteredPlans = plans.filter(plan => 
    selectedOperator === 'all' || plan.operator === selectedOperator
  );

  const getOperatorColor = (operatorId) => {
    const op = operators.find(o => o.id === operatorId);
    return op ? op.color : 'violet';
  };

  const handlePlanSelect = (plan) => {
    navigate('/payment', { 
      state: { mobileNumber, operator, plan } 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
            {mobileNumber && (
              <div className="bg-white rounded-lg p-4 inline-block shadow-md">
                <p className="text-gray-700">
                  📱 <strong>{mobileNumber}</strong> | Operator: <strong className="capitalize">{operator}</strong>
                </p>
              </div>
            )}
          </div>

          {/* Operator Filter */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-2 shadow-md">
              <button
                onClick={() => setSelectedOperator('all')}
                className={`px-4 py-2 rounded ${
                  selectedOperator === 'all' 
                    ? 'bg-red-900 text-white' 
                    : 'text-red-900 hover:bg-red-50'
                }`}
              >
                All Plans
              </button>
              {operators.map(op => (
                <button
                  key={op.id}
                  onClick={() => setSelectedOperator(op.id)}
                  className={`px-4 py-2 rounded ml-2 ${
                    selectedOperator === op.id
                      ? `bg-${op.color}-600 text-white`
                      : `text-${op.color}-600 hover:bg-${op.color}-50`
                  }`}
                >
                  {op.name}
                </button>
              ))}
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlans.map(plan => (
              <div 
                key={plan._id || plan.id} 
                className={`bg-white rounded-lg shadow-lg p-6 border-l-4 border-${getOperatorColor(plan.operator)}-500 hover:shadow-xl transition-shadow`}
              >
                {plan.popular && (
                  <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold mb-3 inline-block">
                    🔥 POPULAR
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className={`text-3xl font-bold text-${getOperatorColor(plan.operator)}-600 mb-2`}>
                    ₹{plan.price}
                  </div>
                  <div className="text-gray-600">{plan.validity}</div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className={`text-lg font-semibold text-${getOperatorColor(plan.operator)}-700`}>
                    📊 {plan.data}
                  </div>
                  <div className="text-sm text-gray-600">
                    {plan.description}
                  </div>
                  <div className={`text-xs font-medium text-${getOperatorColor(plan.operator)}-600 uppercase`}>
                    {operators.find(op => op.id === plan.operator)?.name}
                  </div>
                </div>
                
                <Button
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full bg-${getOperatorColor(plan.operator)}-600 hover:bg-${getOperatorColor(plan.operator)}-700`}
                >
                  Select Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;