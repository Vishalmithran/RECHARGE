import React, { useState } from 'react';
import { rechargePlans } from '../data/plans';
import Button from '../components/Button';

const Compare = () => {
  const [selectedPlans, setSelectedPlans] = useState([]);

  const handlePlanToggle = (plan) => {
    if (selectedPlans.find(p => p.id === plan.id)) {
      setSelectedPlans(selectedPlans.filter(p => p.id !== plan.id));
    } else if (selectedPlans.length < 3) {
      setSelectedPlans([...selectedPlans, plan]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Compare Plans</h1>
        
        {/* Plan Selection */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Select Plans to Compare (Max 3)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {rechargePlans.map(plan => (
              <button
                key={plan.id}
                onClick={() => handlePlanToggle(plan)}
                disabled={!selectedPlans.find(p => p.id === plan.id) && selectedPlans.length >= 3}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedPlans.find(p => p.id === plan.id)
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <div className="text-lg font-bold">₹{plan.price}</div>
                <div className="text-sm text-gray-600">{plan.data}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedPlans.length > 0 && (
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                  {selectedPlans.map(plan => (
                    <th key={plan.id} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                      Plan {plan.id}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Price</td>
                  {selectedPlans.map(plan => (
                    <td key={plan.id} className="px-6 py-4 text-center font-bold text-green-600">
                      ₹{plan.price}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Data</td>
                  {selectedPlans.map(plan => (
                    <td key={plan.id} className="px-6 py-4 text-center">{plan.data}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Validity</td>
                  {selectedPlans.map(plan => (
                    <td key={plan.id} className="px-6 py-4 text-center">{plan.validity}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Benefits</td>
                  {selectedPlans.map(plan => (
                    <td key={plan.id} className="px-6 py-4 text-center text-sm">{plan.description}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Value per Day</td>
                  {selectedPlans.map(plan => (
                    <td key={plan.id} className="px-6 py-4 text-center">
                      ₹{(plan.price / parseInt(plan.validity)).toFixed(2)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;