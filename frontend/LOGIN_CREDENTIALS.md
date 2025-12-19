# 🔐 Working Login Credentials

## ✅ All These Users Can Login Successfully

### 1. Admin Account
- **Email**: admin@recharge.com
- **Password**: admin123
- **Role**: Admin (can manage plans)

### 2. Test Users
- **Email**: user@test.com
- **Password**: password
- **Role**: User

- **Email**: john@example.com
- **Password**: john123
- **Role**: User

- **Email**: sarah@example.com
- **Password**: sarah123
- **Role**: User

- **Email**: test@newuser.com
- **Password**: test123
- **Role**: User

### 3. Your Personal Account
- **Email**: vishalmithran0@gmail.com
- **Password**: vishal123
- **Role**: User

---

## 🚀 How to Login

1. Go to the login page
2. Enter any of the above email/password combinations
3. Click "Sign In"
4. You will be logged in successfully!

---

## 📝 How to Create New Users

### Option 1: Via Signup Page
1. Go to signup page
2. Enter new email and password
3. User will be automatically created and saved to database

### Option 2: Via API (for testing)
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"email":"newemail@example.com","password":"newpassword"}' \
  http://localhost:3000/api/auth/register
```

---

## ✅ Verification

All login functionality is working correctly:
- ✅ User registration saves to database
- ✅ User login authenticates from database
- ✅ Password hashing and verification working
- ✅ JWT tokens generated properly
- ✅ All existing users can login

---

## 🔧 Troubleshooting

**Issue**: "Invalid credentials" error
**Solutions**:
1. Make sure you're using the exact email and password from above
2. Check that backend server is running on port 3000
3. Verify the user exists in database: `cd backend && node adminTools.js list-users`

**Issue**: User can't login after signup
**Solutions**:
1. Check browser console for errors
2. Verify API calls are reaching backend
3. Clear browser cache and try again