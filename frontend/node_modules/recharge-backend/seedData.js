const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Plan = require('./models/Plan');

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('🔄 Connected to MongoDB for seeding...');

    // Clear existing data
    await User.deleteMany({});
    await Plan.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Create sample users
    const users = [
      {
        email: 'admin@recharge.com',
        password: 'admin123',
        role: 'admin',
        name: 'System Administrator'
      },
      {
        email: 'user@test.com',
        password: 'password',
        role: 'user',
        name: 'Test User'
      },
      {
        email: 'john@example.com',
        password: 'john123',
        role: 'user',
        name: 'John Doe'
      },
      {
        email: 'sarah@example.com',
        password: 'sarah123',
        role: 'user',
        name: 'Sarah Wilson'
      }
    ];

    for (const userData of users) {
      const user = new User(userData);
      await user.save();
    }

    // Create comprehensive plans for all operators
    const plans = [
      // Jio Plans
      {
        price: 149,
        validity: '20 days',
        data: '1GB/day',
        description: 'Unlimited calls, 100 SMS/day',
        operator: 'jio',
        category: 'prepaid'
      },
      {
        price: 199,
        validity: '23 days',
        data: '1.5GB/day',
        description: 'Unlimited calls, 100 SMS/day, JioTV',
        operator: 'jio',
        popular: true,
        category: 'prepaid'
      },
      {
        price: 299,
        validity: '28 days',
        data: '2GB/day',
        description: 'Unlimited calls, 100 SMS/day, Disney+ Hotstar',
        operator: 'jio',
        category: 'prepaid'
      },
      {
        price: 719,
        validity: '84 days',
        data: '1.5GB/day',
        description: 'Unlimited calls, 100 SMS/day, JioTV, JioCinema',
        operator: 'jio',
        popular: true,
        category: 'prepaid'
      },
      
      // Airtel Plans
      {
        price: 179,
        validity: '24 days',
        data: '2GB/day',
        description: 'Unlimited calls, 100 SMS/day',
        operator: 'airtel',
        category: 'prepaid'
      },
      {
        price: 265,
        validity: '30 days',
        data: '1GB/day',
        description: 'Unlimited calls, 100 SMS/day, Airtel Xstream',
        operator: 'airtel',
        category: 'prepaid'
      },
      {
        price: 359,
        validity: '28 days',
        data: '2.5GB/day',
        description: 'Unlimited calls, 100 SMS/day, Netflix Mobile',
        operator: 'airtel',
        popular: true,
        category: 'prepaid'
      },
      {
        price: 549,
        validity: '56 days',
        data: '2GB/day',
        description: 'Unlimited calls, 100 SMS/day, Disney+ Hotstar',
        operator: 'airtel',
        category: 'prepaid'
      },
      
      // VI (Vodafone Idea) Plans
      {
        price: 155,
        validity: '24 days',
        data: '1GB/day',
        description: 'Unlimited calls, 100 SMS/day',
        operator: 'vi',
        category: 'prepaid'
      },
      {
        price: 219,
        validity: '28 days',
        data: '1GB/day',
        description: 'Unlimited calls, 100 SMS/day, Vi Movies & TV',
        operator: 'vi',
        category: 'prepaid'
      },
      {
        price: 319,
        validity: '28 days',
        data: '2GB/day',
        description: 'Unlimited calls, 100 SMS/day, Weekend Data Rollover',
        operator: 'vi',
        popular: true,
        category: 'prepaid'
      },
      
      // BSNL Plans
      {
        price: 107,
        validity: '25 days',
        data: '2GB/day',
        description: 'Unlimited calls, 100 SMS/day',
        operator: 'bsnl',
        category: 'prepaid'
      },
      {
        price: 187,
        validity: '28 days',
        data: '2GB/day',
        description: 'Unlimited calls, 100 SMS/day, BSNL Tunes',
        operator: 'bsnl',
        popular: true,
        category: 'prepaid'
      },
      {
        price: 397,
        validity: '70 days',
        data: '2GB/day',
        description: 'Unlimited calls, 100 SMS/day, Extended validity',
        operator: 'bsnl',
        category: 'prepaid'
      },
      
      // DTH Plans
      {
        price: 153,
        validity: '30 days',
        data: 'N/A',
        description: 'South Gold Pack - 70+ channels',
        operator: 'tata-sky',
        category: 'dth'
      },
      {
        price: 230,
        validity: '30 days',
        data: 'N/A',
        description: 'Hindi Basic Pack - 100+ channels',
        operator: 'airtel-dth',
        category: 'dth'
      }
    ];

    await Plan.insertMany(plans);

    console.log('✅ Sample data created successfully!');
    console.log('\n📊 DATABASE SUMMARY:');
    console.log(`👥 Users created: ${users.length}`);
    console.log(`📋 Plans created: ${plans.length}`);
    console.log('\n🔐 LOGIN CREDENTIALS:');
    console.log('👤 Admin: admin@recharge.com / admin123');
    console.log('👤 User: user@test.com / password');
    console.log('👤 John: john@example.com / john123');
    console.log('👤 Sarah: sarah@example.com / sarah123');
    console.log('\n🎯 PLAN CATEGORIES:');
    console.log(`📱 Prepaid Plans: ${plans.filter(p => p.category === 'prepaid').length}`);
    console.log(`📺 DTH Plans: ${plans.filter(p => p.category === 'dth').length}`);
    console.log(`⭐ Popular Plans: ${plans.filter(p => p.popular).length}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedData();