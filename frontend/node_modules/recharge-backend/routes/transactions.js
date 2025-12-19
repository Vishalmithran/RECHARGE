const express = require('express');
const Transaction = require('../models/Transaction');
const Plan = require('../models/Plan');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Create Transaction (Process Payment)
router.post('/', auth, async (req, res) => {
  try {
    const { mobileNumber, operator, planId, paymentMethod } = req.body;

    // Get plan details
    const plan = await Plan.findById(planId);
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    // Create transaction
    const transaction = new Transaction({
      userId: req.user._id,
      mobileNumber,
      operator,
      plan: {
        planId: plan._id,
        price: plan.price,
        validity: plan.validity,
        data: plan.data,
        description: plan.description
      },
      paymentMethod,
      amount: plan.price
    });

    await transaction.save();

    // Simulate payment processing delay
    setTimeout(async () => {
      try {
        transaction.status = 'completed';
        await transaction.save();
      } catch (error) {
        console.error('Error updating transaction status:', error);
      }
    }, 5000);

    res.status(201).json({
      success: true,
      transaction: {
        id: transaction._id,
        transactionId: transaction.transactionId,
        mobileNumber: transaction.mobileNumber,
        operator: transaction.operator,
        plan: transaction.plan,
        paymentMethod: transaction.paymentMethod,
        amount: transaction.amount,
        status: transaction.status,
        createdAt: transaction.createdAt
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get User Transactions
router.get('/', auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id })
      .populate('plan.planId')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      transactions
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get Transaction by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      userId: req.user._id
    }).populate('plan.planId');

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.json({
      success: true,
      transaction
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Check Transaction Status
router.get('/:id/status', auth, async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.json({
      success: true,
      status: transaction.status,
      transactionId: transaction.transactionId
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;