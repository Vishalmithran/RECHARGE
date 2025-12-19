const express = require('express');
const Plan = require('../models/Plan');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Get All Plans
router.get('/', async (req, res) => {
  try {
    const { operator } = req.query;
    const filter = { active: true };
    
    if (operator && operator !== 'all') {
      filter.operator = operator;
    }

    const plans = await Plan.find(filter).sort({ popular: -1, price: 1 });
    
    res.json({
      success: true,
      plans
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get Plan by ID
router.get('/:id', async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);
    
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    res.json({
      success: true,
      plan
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create Plan (Admin Only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const { price, validity, data, description, operator, popular } = req.body;

    const plan = new Plan({
      price,
      validity,
      data,
      description,
      operator,
      popular: popular || false
    });

    await plan.save();

    res.status(201).json({
      success: true,
      plan
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update Plan (Admin Only)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const { price, validity, data, description, operator, popular, active } = req.body;

    const plan = await Plan.findByIdAndUpdate(
      req.params.id,
      { price, validity, data, description, operator, popular, active },
      { new: true, runValidators: true }
    );

    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    res.json({
      success: true,
      plan
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete Plan (Admin Only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const plan = await Plan.findByIdAndDelete(req.params.id);

    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    res.json({
      success: true,
      message: 'Plan deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;