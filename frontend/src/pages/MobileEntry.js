import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext.js';
import Button from '../components/Button.js';
import InputField from '../components/InputField.js';
import { operators } from '../data/plans.js';

const MobileEntry = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const navigate = useNavigate();
  const { isLoggedIn } = useApp();

  // Redirect if not logged in
  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  const detectOperator = (number) => {
    if (number.length >= 2) {
      const prefix = number.substring(0, 2);
      const operator = operators.find(op => op.prefixes.includes(prefix));
      if (operator) setSelectedOperator(operator.id);
    }
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
    detectOperator(value);
  };

  const handleContinue = () => {
    if (mobileNumber.length === 10 && selectedOperator) {
      navigate('/plans', { state: { mobileNumber, operator: selectedOperator } });
    } else {
      alert('Please enter a valid 10-digit mobile number and select operator');
    }
  };

  const getOperatorColor = (operatorId) => {
    const operator = operators.find(op => op.id === operatorId);
    return operator ? operator.color : 'violet';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-cyan-200">
      <div className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-teal-900 mb-4">📱 Enter Mobile Details</h1>
            <p className="text-xl text-teal-700">Enter your mobile number to continue</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="mb-8">
              <InputField
                label="Mobile Number"
                value={mobileNumber}
                onChange={handleMobileChange}
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
                className="text-lg"
              />
              
              {mobileNumber.length === 10 && (
                <div className="text-sm text-green-600 mt-1">
                  ✅ Valid mobile number
                </div>
              )}
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select Your Operator
              </label>
              <div className="grid grid-cols-1 gap-4">
                {operators.map(op => (
                  <button
                    key={op.id}
                    onClick={() => setSelectedOperator(op.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedOperator === op.id
                        ? `border-${op.color}-500 bg-${op.color}-50`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full bg-${op.color}-500 mr-3`}></div>
                      <div>
                        <div className={`font-bold text-lg text-${op.color}-600`}>{op.name}</div>
                        <div className="text-sm text-gray-600">
                          Prefixes: {op.prefixes.slice(0, 3).join(', ')}...
                        </div>
                      </div>
                      {selectedOperator === op.id && (
                        <div className="ml-auto">
                          <span className="text-2xl">✅</span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={handleContinue}
              disabled={mobileNumber.length !== 10 || !selectedOperator}
              className={`w-full text-lg py-4 ${
                mobileNumber.length === 10 && selectedOperator
                  ? 'bg-red-900 hover:bg-red-950'
                  : 'bg-gray-400'
              }`}
            >
              {mobileNumber.length === 10 && selectedOperator 
                ? `Continue with ${operators.find(op => op.id === selectedOperator)?.name} →`
                : 'Enter Mobile Number & Select Operator'
              }
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEntry;