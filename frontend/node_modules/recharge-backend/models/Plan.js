const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true
  },
  validity: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  operator: {
    type: String,
    required: true,
    enum: ['airtel', 'jio', 'bsnl', 'vi', 'tata-sky', 'airtel-dth']
  },
  category: {
    type: String,
    required: true,
    enum: ['prepaid', 'postpaid', 'dth'],
    default: 'prepaid'
  },
  popular: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Plan', planSchema);