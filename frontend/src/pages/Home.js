import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { operators } from '../data/plans';

const Home = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const navigate = useNavigate();

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

  const handleRecharge = () => {
    if (mobileNumber.length === 10 && selectedOperator) {
      navigate('/plans', { state: { mobileNumber, operator: selectedOperator } });
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  const getOperatorColor = (operatorId) => {
    const operator = operators.find(op => op.id === operatorId);
    return operator ? operator.color : 'blue';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-slate-800 mb-8 leading-tight">
              Mobile Recharge Platform
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Professional mobile recharge services for all major operators with instant processing and secure transactions
            </p>
          </div>
          
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-slate-800 mb-3">Start Your Recharge</h2>
              <p className="text-slate-500">Enter your mobile number to begin</p>
            </div>
            
            <div className="space-y-6">
              <InputField
                label="Mobile Number"
                value={mobileNumber}
                onChange={handleMobileChange}
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
                className="text-lg"
              />
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-4">
                  Select Network Operator
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {operators.map(op => (
                    <button
                      key={op.id}
                      onClick={() => setSelectedOperator(op.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 font-medium ${
                        selectedOperator === op.id
                          ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {op.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <Button 
                onClick={handleRecharge} 
                className="w-full text-lg py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200"
              >
                Continue to Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Why Choose Our Platform</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the most reliable and secure mobile recharge service with industry-leading features
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Instant Processing</h3>
              <p className="text-slate-600 leading-relaxed px-4">
                Lightning-fast recharge processing with real-time confirmation and instant balance updates
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Bank Grade Security</h3>
              <p className="text-slate-600 leading-relaxed px-4">
                Advanced encryption and security protocols ensuring 100% safe and secure financial transactions
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Premium Support</h3>
              <p className="text-slate-600 leading-relaxed px-4">
                Round-the-clock dedicated customer support with expert assistance for all your queries
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;