import React, { useState } from 'react';
import { useApp } from '../context/AppContext.js';
import Button from '../components/Button.js';
import InputField from '../components/InputField.js';
import { operators } from '../data/plans.js';

const Admin = () => {
  const { plans, addPlan, updatePlan, deletePlan } = useApp();
  const [editingPlan, setEditingPlan] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    price: '',
    validity: '',
    data: '',
    description: '',
    operator: 'airtel',
    popular: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPlan) {
        await updatePlan(editingPlan._id, formData);
        setEditingPlan(null);
      } else {
        await addPlan(formData);
      }
      setFormData({ price: '', validity: '', data: '', description: '', operator: 'airtel', popular: false });
      setShowAddForm(false);
    } catch (error) {
      alert('Operation failed. Please try again.');
    }
  };

  const handleEdit = (plan) => {
    setEditingPlan(plan);
    setFormData(plan);
    setShowAddForm(true);
  };

  const getOperatorColor = (operatorId) => {
    const op = operators.find(o => o.id === operatorId);
    return op ? op.color : 'violet';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-purple-900 mb-4">🔧 Admin Dashboard</h1>
            <p className="text-purple-700">Manage recharge plans and settings</p>
          </div>

          {/* Add Plan Button */}
          <div className="mb-6">
            <Button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              ➕ Add New Plan
            </Button>
          </div>

          {/* Add/Edit Form */}
          {showAddForm && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-purple-800 mb-4">
                {editingPlan ? '✏️ Edit Plan' : '➕ Add New Plan'}
              </h2>
              
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
                <InputField
                  label="Price (₹)"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  required
                />
                
                <InputField
                  label="Validity"
                  value={formData.validity}
                  onChange={(e) => setFormData({...formData, validity: e.target.value})}
                  placeholder="e.g., 28 days"
                  required
                />
                
                <InputField
                  label="Data"
                  value={formData.data}
                  onChange={(e) => setFormData({...formData, data: e.target.value})}
                  placeholder="e.g., 2GB/day"
                  required
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Operator
                  </label>
                  <select
                    value={formData.operator}
                    onChange={(e) => setFormData({...formData, operator: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                  >
                    {operators.map(op => (
                      <option key={op.id} value={op.id}>{op.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <InputField
                    label="Description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="e.g., Unlimited calls, 100 SMS/day"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.popular}
                      onChange={(e) => setFormData({...formData, popular: e.target.checked})}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">Mark as Popular</span>
                  </label>
                </div>
                
                <div className="md:col-span-2 flex space-x-4">
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                    {editingPlan ? '💾 Update Plan' : '➕ Add Plan'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowAddForm(false);
                      setEditingPlan(null);
                      setFormData({ price: '', validity: '', data: '', description: '', operator: 'airtel', popular: false });
                    }}
                  >
                    ❌ Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Plans List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-lg shadow-lg p-6 border-l-4 border-${getOperatorColor(plan.operator)}-500`}
              >
                {plan.popular && (
                  <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold mb-3 inline-block">
                    🔥 POPULAR
                  </div>
                )}
                
                <div className="mb-4">
                  <div className={`text-2xl font-bold text-${getOperatorColor(plan.operator)}-600 mb-1`}>
                    ₹{plan.price}
                  </div>
                  <div className="text-gray-600">{plan.validity}</div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className={`font-semibold text-${getOperatorColor(plan.operator)}-700`}>
                    📊 {plan.data}
                  </div>
                  <div className="text-sm text-gray-600">{plan.description}</div>
                  <div className={`text-xs font-medium text-${getOperatorColor(plan.operator)}-600 uppercase`}>
                    {operators.find(op => op.id === plan.operator)?.name}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    onClick={() => handleEdit(plan)}
                    variant="secondary"
                    className="flex-1"
                  >
                    ✏️ Edit
                  </Button>
                  <Button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this plan?')) {
                        deletePlan(plan._id);
                      }
                    }}
                    className="flex-1 bg-red-600 hover:bg-red-700"
                  >
                    🗑️ Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;