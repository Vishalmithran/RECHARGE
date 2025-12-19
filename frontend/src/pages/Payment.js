import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext.js';
import Button from '../components/Button.js';
import { operators } from '../data/plans.js';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addTransaction } = useApp();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [processing, setProcessing] = useState(false);

  const { mobileNumber, operator, plan } = location.state || {};

  const paymentMethods = [
    { id: 'upi', name: 'UPI Payment', icon: '📱', color: 'green' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳', color: 'blue' },
    { id: 'wallet', name: 'Digital Wallet', icon: '👛', color: 'purple' }
  ];

  const getOperatorColor = (operatorId) => {
    const op = operators.find(o => o.id === operatorId);
    return op ? op.color : 'violet';
  };

  const handlePayment = async () => {
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }

    setProcessing(true);
    
    try {
      // Create transaction in MongoDB
      const transaction = await addTransaction({
        mobileNumber,
        operator,
        planId: plan._id || plan.id,
        paymentMethod: selectedMethod
      });
      
      setProcessing(false);
      
      navigate('/success', {
        state: { 
          mobileNumber, 
          operator, 
          plan, 
          paymentMethod: selectedMethod,
          transactionId: transaction.transactionId,
          status: 'success'
        }
      });
    } catch (error) {
      setProcessing(false);
      alert('Payment failed. Please try again.');
      console.error('Payment error:', error);
    }
  };

  if (!plan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-200 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-4">No plan selected</h2>
          <Button onClick={() => navigate('/')}>Go to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200">
      <div className="py-8">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-green-900 text-center mb-8">💳 Payment</h1>
          
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-green-800 mb-4">📋 Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Mobile Number:</span>
                <span className="font-medium">{mobileNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>Operator:</span>
                <span className={`font-medium text-${getOperatorColor(operator)}-600 capitalize`}>
                  {operators.find(op => op.id === operator)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Plan:</span>
                <span className="font-medium">{plan.data} - {plan.validity}</span>
              </div>
              <hr />
              <div className="flex justify-between text-xl font-bold">
                <span>Total Amount:</span>
                <span className="text-green-600">₹{plan.price}</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-green-800 mb-4">💰 Payment Method</h2>
            <div className="space-y-3">
              {paymentMethods.map(method => (
                <label
                  key={method.id}
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedMethod === method.id
                      ? `border-${method.color}-500 bg-${method.color}-50`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={selectedMethod === method.id}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="sr-only"
                  />
                  <span className="text-2xl mr-3">{method.icon}</span>
                  <span className="font-medium">{method.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Payment Button */}
          <Button
            onClick={handlePayment}
            disabled={processing}
            className="w-full text-lg py-4 bg-red-900 hover:bg-red-950"
          >
            {processing ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                Processing UPI Payment...
              </div>
            ) : (
              `Pay ₹${plan.price} 💸`
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;