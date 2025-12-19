const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const testConnection = async () => {
  try {
    console.log('Testing MongoDB connection...');
    console.log('Connection URI:', process.env.MONGODB_URI);
    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected successfully!');
    
    // Test database operations
    const testCollection = mongoose.connection.db.collection('test');
    await testCollection.insertOne({ test: 'connection', timestamp: new Date() });
    console.log('✅ Database write test successful!');
    
    const result = await testCollection.findOne({ test: 'connection' });
    console.log('✅ Database read test successful!', result);
    
    await testCollection.deleteOne({ test: 'connection' });
    console.log('✅ Database delete test successful!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

testConnection();