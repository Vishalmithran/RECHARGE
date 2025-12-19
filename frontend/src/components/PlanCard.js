import React from 'react';
import Button from './Button';

const PlanCard = ({ plan, onSelect }) => {
  return (
    <div className={`bg-white border rounded-lg p-6 ${plan.popular ? 'border-rose-500 shadow-lg bg-rose-50' : 'border-pink-200'}`}>
      {plan.popular && (
        <div className="text-xs font-medium text-rose-600 mb-2">POPULAR</div>
      )}
      
      <div className="text-2xl font-bold text-rose-600 mb-1">₹{plan.price}</div>
      <div className="text-sm text-gray-600 mb-4">{plan.validity}</div>
      
      <div className="mb-4">
        <div className="font-medium text-pink-600">{plan.data}</div>
        <div className="text-sm text-gray-600">{plan.description}</div>
      </div>
      
      <Button onClick={() => onSelect(plan)} className="w-full">
        Select Plan
      </Button>
    </div>
  );
};

export default PlanCard;