import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';

const QuickRecharge = () => {
  const [savedNumbers, setSavedNumbers] = useState([]);
  const [newNumber, setNewNumber] = useState('');
  const [newName, setNewName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('savedNumbers');
    if (saved) {
      setSavedNumbers(JSON.parse(saved));
    }
  }, []);

  const saveNumber = () => {
    if (newNumber.length === 10 && newName) {
      const updated = [...savedNumbers, { id: Date.now(), name: newName, number: newNumber }];
      setSavedNumbers(updated);
      localStorage.setItem('savedNumbers', JSON.stringify(updated));
      setNewNumber('');
      setNewName('');
    }
  };

  const deleteNumber = (id) => {
    const updated = savedNumbers.filter(item => item.id !== id);
    setSavedNumbers(updated);
    localStorage.setItem('savedNumbers', JSON.stringify(updated));
  };

  const rechargeNumber = (number) => {
    navigate('/plans', { state: { mobileNumber: number } });
  };

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Quick Recharge</h1>
        
        {/* Add New Number */}
        <div className="bg-white border rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Save New Number</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <InputField
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <InputField
              placeholder="Mobile Number"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
            />
            <Button onClick={saveNumber}>Save Number</Button>
          </div>
        </div>

        {/* Saved Numbers */}
        <div className="space-y-4">
          {savedNumbers.length === 0 ? (
            <div className="bg-white border rounded-lg p-8 text-center">
              <p className="text-gray-500">No saved numbers yet</p>
            </div>
          ) : (
            savedNumbers.map(item => (
              <div key={item.id} className="bg-white border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-600">{item.number}</div>
                </div>
                <div className="flex space-x-2">
                  <Button onClick={() => rechargeNumber(item.number)}>Recharge</Button>
                  <Button variant="outline" onClick={() => deleteNumber(item.id)}>Delete</Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickRecharge;