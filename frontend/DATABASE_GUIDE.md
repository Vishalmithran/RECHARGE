# Database Connection Guide

## ✅ Database Status: FULLY CONNECTED AND WORKING

Your application is successfully connected to MongoDB and all CRUD operations are working correctly!

---

## 📊 Current Database Status

**Database**: MongoDB (Local)  
**Connection**: `mongodb://127.0.0.1:27017/recharge_app`  
**Status**: ✅ Connected and Operational

### Current Data:
- **👥 Users**: 5 users (1 admin, 4 regular users)
- **📋 Plans**: 17 recharge plans
- **🔄 Operations**: Create, Read, Update, Delete - ALL WORKING

---

## 🔐 Sample Login Credentials

### Admin Account
- **Email**: admin@recharge.com
- **Password**: admin123
- **Role**: Admin (can add/edit/delete plans)

### User Accounts
1. **Email**: user@test.com | **Password**: password
2. **Email**: john@example.com | **Password**: john123
3. **Email**: sarah@example.com | **Password**: sarah123
4. **Email**: test@newuser.com | **Password**: test123

---

## 📋 Sample Plans in Database

### Jio Plans (5 plans)
- ₹149 - 20 days - 1GB/day
- ₹199 - 23 days - 1.5GB/day (Popular)
- ₹299 - 28 days - 2GB/day
- ₹499 - 42 days - 4GB/day (Popular)
- ₹719 - 84 days - 1.5GB/day (Popular)

### Airtel Plans (4 plans)
- ₹179 - 24 days - 2GB/day
- ₹265 - 30 days - 1GB/day
- ₹359 - 28 days - 2.5GB/day (Popular)
- ₹549 - 56 days - 2GB/day

### VI Plans (3 plans)
- ₹155 - 24 days - 1GB/day
- ₹219 - 28 days - 1GB/day
- ₹319 - 28 days - 2GB/day (Popular)

### BSNL Plans (3 plans)
- ₹107 - 25 days - 2GB/day
- ₹187 - 28 days - 2GB/day (Popular)
- ₹397 - 70 days - 2GB/day

### DTH Plans (2 plans)
- ₹153 - Tata Sky - South Gold Pack
- ₹230 - Airtel DTH - Hindi Basic Pack

---

## 🚀 How to Start the Application

### Option 1: Production Mode (Single Port 3000)
```bash
# From project root
npm run build
cd backend
npm start
```
Access at: http://localhost:3000

### Option 2: Development Mode (Two Ports)
```bash
# Terminal 1 - Backend (Port 3000)
cd backend
npm start

# Terminal 2 - Frontend (Port 5173)
npm run dev
```
Access at: http://localhost:5173

---

## 🛠️ Database Management Tools

### 1. List All Plans
```bash
cd backend
node adminTools.js list-plans
```

### 2. List All Users
```bash
cd backend
node adminTools.js list-users
```

### 3. Add New Plan
```bash
cd backend
node adminTools.js add-plan <price> <validity> <data> <description> <operator> <category> [popular]

# Example:
node adminTools.js add-plan 399 "28 days" "3GB/day" "Unlimited calls, 100 SMS/day" "jio" "prepaid" true
```

### 4. Update Plan
```bash
cd backend
node adminTools.js update-plan <planId> <field> <value>

# Example:
node adminTools.js update-plan 6943c27a5da67609948d1aa9 price 199
```

### 5. Delete Plan
```bash
cd backend
node adminTools.js delete-plan <planId>

# Example:
node adminTools.js delete-plan 6943c27a5da67609948d1aa9
```

### 6. Re-seed Database (Reset to default data)
```bash
cd backend
npm run seed
```

### 7. Test Database Connection
```bash
cd backend
npm run test-db
```

---

## 🔄 How Database Operations Work

### User Registration
1. User fills signup form on frontend
2. Frontend sends POST request to `/api/auth/register`
3. Backend creates new user in MongoDB
4. User is automatically saved to database
5. JWT token is returned for authentication

**Test it**: Go to signup page and create a new account - it will be saved to database!

### Plan Management
1. Admin logs in with admin credentials
2. Admin can add/edit/delete plans via admin panel
3. All changes are immediately saved to MongoDB
4. Frontend automatically refreshes to show updated plans

**Test it**: Login as admin and try adding a new plan!

### Viewing Plans
1. Frontend loads plans from database on startup
2. Plans are fetched from `/api/plans` endpoint
3. If API fails, falls back to local data
4. Plans are displayed in real-time from database

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Plans
- `GET /api/plans` - Get all plans
- `GET /api/plans/:id` - Get specific plan
- `POST /api/plans` - Create plan (Admin only)
- `PUT /api/plans/:id` - Update plan (Admin only)
- `DELETE /api/plans/:id` - Delete plan (Admin only)

### Transactions
- `POST /api/transactions` - Create transaction
- `GET /api/transactions` - Get user transactions
- `GET /api/transactions/:id` - Get specific transaction

---

## ✅ Verification Tests

### Test 1: User Registration
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"email":"newuser@test.com","password":"test123"}' \
  http://localhost:3000/api/auth/register
```

### Test 2: Get All Plans
```bash
curl http://localhost:3000/api/auth/plans
```

### Test 3: Health Check
```bash
curl http://localhost:3000/api/health
```

---

## 🔧 Troubleshooting

### Issue: "Cannot connect to database"
**Solution**: Make sure MongoDB is running
```bash
# Check if MongoDB is running
net start MongoDB

# Or start MongoDB service
mongod
```

### Issue: "Plans not updating"
**Solution**: 
1. Check if backend server is running
2. Clear browser cache
3. Refresh the page
4. Check browser console for errors

### Issue: "User registration not working"
**Solution**:
1. Verify backend is running on port 3000
2. Check CORS is enabled in backend
3. Verify MongoDB connection
4. Check browser network tab for API errors

---

## 📝 Important Notes

1. **All database operations are working correctly** - Users and plans are being saved to MongoDB
2. **Frontend is connected to backend** - API calls are working
3. **Admin features require admin login** - Use admin@recharge.com / admin123
4. **Changes persist across restarts** - All data is stored in MongoDB
5. **Real-time updates** - Frontend fetches latest data from database

---

## 🎯 Quick Test Checklist

- [x] MongoDB connection working
- [x] User registration saves to database
- [x] User login authenticates from database
- [x] Plans load from database
- [x] Admin can add plans to database
- [x] Admin can update plans in database
- [x] Admin can delete plans from database
- [x] All CRUD operations working
- [x] API endpoints responding correctly
- [x] Frontend-backend integration working

---

## 📞 Need Help?

Run these commands to verify everything is working:

```bash
# Test database connection
cd backend && npm run test-db

# Run comprehensive API test
cd backend && node testAPI.js

# List current data
cd backend && node adminTools.js list-users
cd backend && node adminTools.js list-plans
```

**Everything is working! Your database is fully connected and operational!** 🎉
