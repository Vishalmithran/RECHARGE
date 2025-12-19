import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { mobileNumber, operator, plan, paymentMethod } = location.state || {};

  if (!plan) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-xl font-bold mb-4">No transaction found</h2>
        <Button onClick={() => navigate('/')}>Go to Home</Button>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-rose-600">✓</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Recharge Successful!</h1>
          <p className="text-gray-600">Your mobile has been recharged successfully</p>
        </div>

        {/* Transaction Details */}
        <div className="bg-white border rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Transaction Details</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>Mobile Number:</span>
              <span className="font-medium">{mobileNumber}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>Operator:</span>
              <span className="font-medium capitalize">{operator}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>Plan:</span>
              <span className="font-medium">{plan.data} - {plan.validity}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span>Payment Method:</span>
              <span className="font-medium capitalize">{paymentMethod}</span>
            </div>
            <div className="flex justify-between py-2 font-bold">
              <span>Amount Paid:</span>
              <span>₹{plan.price}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button onClick={() => navigate('/')} className="w-full">
            Recharge Again
          </Button>
          <Button variant="outline" onClick={() => window.print()} className="w-full">
            Download Receipt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;