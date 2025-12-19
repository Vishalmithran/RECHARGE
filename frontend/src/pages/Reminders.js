import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';

const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    amount: '',
    date: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('reminders');
    if (saved) {
      setReminders(JSON.parse(saved));
    }
  }, []);

  const addReminder = () => {
    if (formData.name && formData.number && formData.amount && formData.date) {
      const newReminder = {
        id: Date.now(),
        ...formData,
        status: 'pending'
      };
      const updated = [...reminders, newReminder];
      setReminders(updated);
      localStorage.setItem('reminders', JSON.stringify(updated));
      setFormData({ name: '', number: '', amount: '', date: '' });
    }
  };

  const deleteReminder = (id) => {
    const updated = reminders.filter(item => item.id !== id);
    setReminders(updated);
    localStorage.setItem('reminders', JSON.stringify(updated));
  };

  const markCompleted = (id) => {
    const updated = reminders.map(item => 
      item.id === id ? { ...item, status: 'completed' } : item
    );
    setReminders(updated);
    localStorage.setItem('reminders', JSON.stringify(updated));
  };

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Bill Reminders</h1>
        
        {/* Add Reminder Form */}
        <div className="bg-white border rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Set New Reminder</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <InputField
              label="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <InputField
              label="Mobile Number"
              value={formData.number}
              onChange={(e) => setFormData({...formData, number: e.target.value.replace(/\D/g, '').slice(0, 10)})}
            />
            <InputField
              label="Amount"
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
            />
            <InputField
              label="Reminder Date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
          <Button onClick={addReminder} className="mt-4">Add Reminder</Button>
        </div>

        {/* Reminders List */}
        <div className="space-y-4">
          {reminders.length === 0 ? (
            <div className="bg-white border rounded-lg p-8 text-center">
              <p className="text-gray-500">No reminders set</p>
            </div>
          ) : (
            reminders.map(reminder => (
              <div key={reminder.id} className="bg-white border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{reminder.name}</div>
                    <div className="text-sm text-gray-600">{reminder.number}</div>
                    <div className="text-sm text-gray-600">₹{reminder.amount} - {reminder.date}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      reminder.status === 'completed' 
                        ? 'bg-rose-100 text-rose-700' 
                        : 'bg-pink-100 text-pink-700'
                    }`}>
                      {reminder.status}
                    </span>
                    {reminder.status === 'pending' && (
                      <Button variant="secondary" onClick={() => markCompleted(reminder.id)}>
                        Mark Done
                      </Button>
                    )}
                    <Button variant="outline" onClick={() => deleteReminder(reminder.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Reminders;