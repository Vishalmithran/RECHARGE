import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button.js';
import { operators } from '../data/plans.js';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { mobileNumber, operator, plan, paymentMethod } = location.state || {};

  const getOperatorColor = (operatorId) => {
    const op = operators.find(o => o.id === operatorId);
    return op ? op.color : 'violet';
  };

  if (!plan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-200 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-4">No transaction found</h2>
          <Button onClick={() => navigate('/')}>Go to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-teal-200">
      <div className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          {/* Success Animation */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <span className="text-4xl text-white">✅</span>
            </div>
            <h1 className="text-4xl font-bold text-green-800 mb-4">🎉 Recharge Successful!</h1>
            <p className="text-xl text-green-700">Your mobile has been recharged successfully</p>
          </div>

          {/* Transaction Details */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">📄 Transaction Details</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">📱 Mobile Number:</span>
                <span className="font-bold text-lg">{mobileNumber}</span>
              </div>
              
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">📡 Operator:</span>
                <span className={`font-bold text-lg text-${getOperatorColor(operator)}-600 capitalize`}>
                  {operators.find(op => op.id === operator)?.name}
                </span>
              </div>
              
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">📊 Plan:</span>
                <span className="font-bold">{plan.data} - {plan.validity}</span>
              </div>
              
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">💳 Payment Method:</span>
                <span className="font-bold capitalize">{paymentMethod}</span>
              </div>
              
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">🕒 Transaction Time:</span>
                <span className="font-bold">{new Date().toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between py-4 text-2xl font-bold bg-green-50 rounded-lg px-4">
                <span className="text-green-800">💰 Amount Paid:</span>
                <span className="text-green-600">₹{plan.price}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button
              onClick={() => navigate('/history')}
              className="w-full text-lg py-3 bg-green-600 hover:bg-green-700"
            >
              📋 View Transaction History
            </Button>
            
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="w-full text-lg py-3 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              🏠 Recharge Again
            </Button>
            
            <Button
              onClick={() => window.print()}
              variant="secondary"
              className="w-full text-lg py-3"
            >
              🖨️ Print Receipt
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;