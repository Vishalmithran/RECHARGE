import React, { useState, useEffect } from 'react';
import { operators } from '../data/plans.js';
import Button from '../components/Button.js';

const History = () => {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    setTransactions(savedTransactions);
  }, []);

  const getOperatorColor = (operatorId) => {
    const op = operators.find(o => o.id === operatorId);
    return op ? op.color : 'violet';
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">📋 Transaction History</h1>
            <p className="text-gray-700">View all your recharge transactions</p>
          </div>
          
          {transactions.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">📱</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No Transactions Yet</h2>
              <p className="text-gray-600 mb-6">Start your first recharge to see history here</p>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-red-900 hover:bg-red-950"
              >
                🚀 Start Recharging
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {transactions.map(transaction => (
                <div key={transaction.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">📱</span>
                        <div>
                          <div className="font-bold text-lg">{transaction.mobileNumber}</div>
                          <div className={`text-sm font-medium text-${getOperatorColor(transaction.operator)}-600 capitalize`}>
                            {operators.find(op => op.id === transaction.operator)?.name}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div>
                          <span className="text-xs text-gray-500 uppercase">Plan</span>
                          <div className="font-medium">{transaction.plan?.data || 'N/A'}</div>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 uppercase">Validity</span>
                          <div className="font-medium">{transaction.plan?.validity || 'N/A'}</div>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 uppercase">Payment</span>
                          <div className="font-medium capitalize">{transaction.paymentMethod}</div>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 uppercase">Date</span>
                          <div className="font-medium">{new Date(transaction.timestamp).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        ₹{transaction.amount || transaction.plan?.price}
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        ✅ {transaction.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;