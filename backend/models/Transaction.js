const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    length: 10
  },
  operator: {
    type: String,
    required: true,
    enum: ['airtel', 'jio', 'bsnl', 'vi', 'tata-sky', 'airtel-dth']
  },
  plan: {
    planId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Plan',
      required: true
    },
    price: Number,
    validity: String,
    data: String,
    description: String
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['upi', 'card', 'wallet', 'netbanking']
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  transactionId: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

transactionSchema.pre('save', function(next) {
  if (!this.transactionId) {
    this.transactionId = 'TXN' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
  }
  next();
});

module.exports = mongoose.model('Transaction', transactionSchema);