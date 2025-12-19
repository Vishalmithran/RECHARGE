const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Plan = require('./models/Plan');

dotenv.config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅ Connected to MongoDB');
};

// Add new plan
const addPlan = async (planData) => {
  try {
    await connectDB();
    const plan = new Plan(planData);
    await plan.save();
    console.log('✅ Plan added successfully:', plan);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error adding plan:', error);
    process.exit(1);
  }
};

// Update plan
const updatePlan = async (planId, updateData) => {
  try {
    await connectDB();
    const plan = await Plan.findByIdAndUpdate(planId, updateData, { new: true });
    if (!plan) {
      console.log('❌ Plan not found');
      process.exit(1);
    }
    console.log('✅ Plan updated successfully:', plan);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error updating plan:', error);
    process.exit(1);
  }
};

// Delete plan
const deletePlan = async (planId) => {
  try {
    await connectDB();
    const plan = await Plan.findByIdAndDelete(planId);
    if (!plan) {
      console.log('❌ Plan not found');
      process.exit(1);
    }
    console.log('✅ Plan deleted successfully:', plan);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error deleting plan:', error);
    process.exit(1);
  }
};

// List all plans
const listPlans = async () => {
  try {
    await connectDB();
    const plans = await Plan.find({});
    console.log('\n📋 ALL PLANS:');
    plans.forEach((plan, index) => {
      console.log(`\n${index + 1}. ID: ${plan._id}`);
      console.log(`   Price: ₹${plan.price}`);
      console.log(`   Operator: ${plan.operator}`);
      console.log(`   Validity: ${plan.validity}`);
      console.log(`   Data: ${plan.data}`);
      console.log(`   Category: ${plan.category}`);
      console.log(`   Popular: ${plan.popular ? 'Yes' : 'No'}`);
      console.log(`   Description: ${plan.description}`);
    });
    console.log(`\n📊 Total Plans: ${plans.length}`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error listing plans:', error);
    process.exit(1);
  }
};

// List all users
const listUsers = async () => {
  try {
    await connectDB();
    const users = await User.find({});
    console.log('\n👥 ALL USERS:');
    users.forEach((user, index) => {
      console.log(`\n${index + 1}. ID: ${user._id}`);
      console.log(`   Email: ${user.email}`);
      console.log(`   Name: ${user.name || 'N/A'}`);
      console.log(`   Role: ${user.role}`);
      console.log(`   Created: ${user.createdAt}`);
    });
    console.log(`\n📊 Total Users: ${users.length}`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error listing users:', error);
    process.exit(1);
  }
};

// Command line interface
const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
  case 'add-plan':
    if (args.length < 6) {
      console.log('Usage: node adminTools.js add-plan <price> <validity> <data> <description> <operator> <category> [popular]');
      console.log('Example: node adminTools.js add-plan 399 "28 days" "3GB/day" "Unlimited calls" "jio" "prepaid" true');
      process.exit(1);
    }
    addPlan({
      price: parseInt(args[0]),
      validity: args[1],
      data: args[2],
      description: args[3],
      operator: args[4],
      category: args[5],
      popular: args[6] === 'true'
    });
    break;

  case 'update-plan':
    if (args.length < 2) {
      console.log('Usage: node adminTools.js update-plan <planId> <field> <value>');
      console.log('Example: node adminTools.js update-plan 64f... price 299');
      process.exit(1);
    }
    const updateObj = {};
    updateObj[args[1]] = args[1] === 'price' ? parseInt(args[2]) : args[1] === 'popular' ? args[2] === 'true' : args[2];
    updatePlan(args[0], updateObj);
    break;

  case 'delete-plan':
    if (args.length < 1) {
      console.log('Usage: node adminTools.js delete-plan <planId>');
      process.exit(1);
    }
    deletePlan(args[0]);
    break;

  case 'list-plans':
    listPlans();
    break;

  case 'list-users':
    listUsers();
    break;

  default:
    console.log('\n🛠️  ADMIN TOOLS - Available Commands:');
    console.log('📋 node adminTools.js list-plans          - List all plans');
    console.log('👥 node adminTools.js list-users          - List all users');
    console.log('➕ node adminTools.js add-plan ...        - Add new plan');
    console.log('✏️  node adminTools.js update-plan ...     - Update existing plan');
    console.log('🗑️  node adminTools.js delete-plan ...    - Delete plan');
    console.log('\nFor detailed usage, run any command without arguments');
    process.exit(0);
}