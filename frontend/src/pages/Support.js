import React, { useState } from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';

const Support = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const faqs = [
    {
      question: 'How long does recharge take?',
      answer: 'Recharges are processed instantly. You will receive confirmation within 30 seconds.'
    },
    {
      question: 'What if my recharge fails?',
      answer: 'Failed recharges are automatically refunded within 24 hours to your payment method.'
    },
    {
      question: 'Can I get a receipt?',
      answer: 'Yes, you can download receipts from your transaction history page.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you within 24 hours.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Customer Support</h1>
        
        {/* Tabs */}
        <div className="flex space-x-4 mb-6 border-b">
          <button
            onClick={() => setActiveTab('faq')}
            className={`pb-2 ${activeTab === 'faq' ? 'border-b-2 border-rose-600 font-medium text-rose-600' : 'text-gray-600'}`}
          >
            FAQ
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`pb-2 ${activeTab === 'contact' ? 'border-b-2 border-rose-600 font-medium text-rose-600' : 'text-gray-600'}`}
          >
            Contact Us
          </button>
        </div>

        {activeTab === 'faq' && (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border rounded-lg p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="bg-white border rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                label="Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                required
              />
              <InputField
                label="Email"
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                required
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-3 py-2 border border-pink-300 rounded focus:outline-none focus:border-rose-500"
                  rows="4"
                  required
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;