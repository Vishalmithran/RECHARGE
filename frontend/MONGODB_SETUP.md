# 🚀 Quick MongoDB Setup (5 minutes)

## Option 1: MongoDB Atlas (Recommended - Free)

### Step 1: Create Account
1. Go to: https://www.mongodb.com/atlas
2. Click "Try Free"
3. Sign up with email

### Step 2: Create Cluster
1. Choose "FREE" tier (M0 Sandbox)
2. Select region (closest to you)
3. Click "Create Cluster"

### Step 3: Setup Database Access
1. Go to "Database Access" in left menu
2. Click "Add New Database User"
3. Username: `recharge_user`
4. Password: `recharge123` (or generate one)
5. Click "Add User"

### Step 4: Setup Network Access
1. Go to "Network Access" in left menu
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Clusters"
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your password

### Step 6: Update .env file
```
MONGODB_URI=mongodb+srv://recharge_user:recharge123@cluster0.xxxxx.mongodb.net/recharge_app?retryWrites=true&w=majority
```

## Option 2: Local MongoDB (Advanced)

### Windows Installation:
1. Download: https://www.mongodb.com/try/download/community
2. Install MongoDB Community Server
3. Create folder: `C:\data\db`
4. Start service: `net start MongoDB`

## Test Connection
```bash
cd backend
npm run test-db
```

## If Connection Fails:
- Check internet connection
- Verify username/password
- Ensure IP is whitelisted (0.0.0.0/0)
- Wait 2-3 minutes after cluster creation