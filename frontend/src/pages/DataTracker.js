import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';

const DataTracker = () => {
  const [trackers, setTrackers] = useState([]);
  const [formData, setFormData] = useState({
    number: '',
    totalData: '',
    usedData: '',
    validTill: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('dataTrackers');
    if (saved) {
      setTrackers(JSON.parse(saved));
    }
  }, []);

  const addTracker = () => {
    if (formData.number && formData.totalData && formData.usedData && formData.validTill) {
      const newTracker = {
        id: Date.now(),
        ...formData,
        remainingData: formData.totalData - formData.usedData,
        percentage: Math.round((formData.usedData / formData.totalData) * 100)
      };
      const updated = [...trackers, newTracker];
      setTrackers(updated);
      localStorage.setItem('dataTrackers', JSON.stringify(updated));
      setFormData({ number: '', totalData: '', usedData: '', validTill: '' });
    }
  };

  const updateUsage = (id, newUsed) => {
    const updated = trackers.map(tracker => {
      if (tracker.id === id) {
        const remaining = tracker.totalData - newUsed;
        const percentage = Math.round((newUsed / tracker.totalData) * 100);
        return { ...tracker, usedData: newUsed, remainingData: remaining, percentage };
      }
      return tracker;
    });
    setTrackers(updated);
    localStorage.setItem('dataTrackers', JSON.stringify(updated));
  };

  const deleteTracker = (id) => {
    const updated = trackers.filter(item => item.id !== id);
    setTrackers(updated);
    localStorage.setItem('dataTrackers', JSON.stringify(updated));
  };

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Data Usage Tracker</h1>
        
        {/* Add Tracker Form */}
        <div className="bg-white border rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Add Data Plan</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <InputField
              label="Mobile Number"
              value={formData.number}
              onChange={(e) => setFormData({...formData, number: e.target.value.replace(/\D/g, '').slice(0, 10)})}
            />
            <InputField
              label="Total Data (GB)"
              type="number"
              value={formData.totalData}
              onChange={(e) => setFormData({...formData, totalData: e.target.value})}
            />
            <InputField
              label="Used Data (GB)"
              type="number"
              value={formData.usedData}
              onChange={(e) => setFormData({...formData, usedData: e.target.value})}
            />
            <InputField
              label="Valid Till"
              type="date"
              value={formData.validTill}
              onChange={(e) => setFormData({...formData, validTill: e.target.value})}
            />
          </div>
          <Button onClick={addTracker} className="mt-4">Add Tracker</Button>
        </div>

        {/* Trackers List */}
        <div className="space-y-4">
          {trackers.length === 0 ? (
            <div className="bg-white border rounded-lg p-8 text-center">
              <p className="text-gray-500">No data plans tracked</p>
            </div>
          ) : (
            trackers.map(tracker => (
              <div key={tracker.id} className="bg-white border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="font-medium">{tracker.number}</div>
                    <div className="text-sm text-gray-600">Valid till: {tracker.validTill}</div>
                  </div>
                  <Button variant="outline" onClick={() => deleteTracker(tracker.id)}>
                    Delete
                  </Button>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Data Usage</span>
                    <span>{tracker.percentage}%</span>
                  </div>
                  <div className="w-full bg-pink-100 rounded-full h-2">
                    <div 
                      className="bg-rose-600 h-2 rounded-full" 
                      style={{ width: `${Math.min(tracker.percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-rose-600">{tracker.totalData}GB</div>
                    <div className="text-xs text-gray-600">Total</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-pink-600">{tracker.usedData}GB</div>
                    <div className="text-xs text-gray-600">Used</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-600">{tracker.remainingData}GB</div>
                    <div className="text-xs text-gray-600">Remaining</div>
                  </div>
                </div>
                
                {/* Quick Update */}
                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-sm">Update usage:</span>
                  <input
                    type="number"
                    className="px-2 py-1 border rounded w-20 text-sm"
                    placeholder="GB"
                    onBlur={(e) => e.target.value && updateUsage(tracker.id, parseFloat(e.target.value))}
                  />
                  <span className="text-sm text-gray-600">GB</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DataTracker;