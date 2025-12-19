const mongoose = require('mongoose');

// Simple connection test
const testMongoDB = async () => {
  try {
    console.log('🔄 Testing MongoDB Connection...');
    
    // Try connecting to local MongoDB first
    await mongoose.connect('mongodb://localhost:27017/recharge_app');
    
    console.log('✅ MongoDB Connected Successfully!');
    console.log('📡 Connected to: localhost:27017');
    console.log('🗄️  Database: recharge_app');
    
    process.exit(0);
  } catch (error) {
    console.log('❌ Local MongoDB not running');
    console.log('💡 Please start MongoDB or use MongoDB Atlas');
    console.log('');
    console.log('To start local MongoDB:');
    console.log('1. Install MongoDB from: https://www.mongodb.com/try/download/community');
    console.log('2. Run: mongod');
    console.log('');
    console.log('Or use MongoDB Atlas (cloud):');
    console.log('1. Go to: https://www.mongodb.com/atlas');
    console.log('2. Create free account and cluster');
    console.log('3. Update .env with connection string');
    
    process.exit(1);
  }
};

testMongoDB();