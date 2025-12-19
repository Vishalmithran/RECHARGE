@echo off
echo MongoDB Setup for Recharge App
echo ================================

echo.
echo Choose MongoDB option:
echo 1. Test existing MongoDB connection
echo 2. Setup MongoDB Atlas (Cloud)
echo 3. Install local MongoDB
echo.

set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" (
    echo Testing MongoDB connection...
    cd backend
    npm run test-db
    pause
    goto end
)

if "%choice%"=="2" (
    echo.
    echo MongoDB Atlas Setup:
    echo 1. Go to https://www.mongodb.com/atlas
    echo 2. Create free account
    echo 3. Create new cluster
    echo 4. Get connection string
    echo 5. Update backend/.env file with your connection string
    echo.
    echo Example:
    echo MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/recharge_app
    echo.
    pause
    goto end
)

if "%choice%"=="3" (
    echo.
    echo Local MongoDB Installation:
    echo 1. Download from: https://www.mongodb.com/try/download/community
    echo 2. Install MongoDB Community Server
    echo 3. Create directory: C:\data\db
    echo 4. Start MongoDB service
    echo.
    echo After installation, run this script again and choose option 1 to test
    echo.
    pause
    goto end
)

echo Invalid choice!
pause

:end