const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Plan = require('./models/Plan');

dotenv.config();

const testAPI = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Test 1: Count users
    const userCount = await User.countDocuments();
    console.log(`👥 Total Users in DB: ${userCount}`);

    // Test 2: Count plans
    const planCount = await Plan.countDocuments();
    console.log(`📋 Total Plans in DB: ${planCount}`);

    // Test 3: Create a test user
    const testEmail = `test${Date.now()}@example.com`;
    const newUser = new User({
      email: testEmail,
      password: 'test123'
    });
    await newUser.save();
    console.log(`✅ Created test user: ${testEmail}`);

    // Test 4: Create a test plan
    const newPlan = new Plan({
      price: 99,
      validity: '7 days',
      data: '1GB/day',
      description: 'Test plan',
      operator: 'jio',
      category: 'prepaid'
    });
    await newPlan.save();
    console.log(`✅ Created test plan: ₹${newPlan.price}`);

    // Test 5: Update the test plan
    newPlan.price = 149;
    await newPlan.save();
    console.log(`✅ Updated test plan price to: ₹${newPlan.price}`);

    // Test 6: Delete the test plan
    await Plan.findByIdAndDelete(newPlan._id);
    console.log(`✅ Deleted test plan`);

    // Test 7: Delete the test user
    await User.findByIdAndDelete(newUser._id);
    console.log(`✅ Deleted test user`);

    console.log('\\n🎉 ALL DATABASE OPERATIONS WORKING CORRECTLY!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
};

testAPI();