@echo off
echo Starting Recharge App on Single Port 3000...

echo.
echo Installing Backend Dependencies...
cd backend
call npm install

echo.
echo Installing Frontend Dependencies...
cd ..
call npm install

echo.
echo Starting MongoDB...
start "MongoDB" mongod

echo.
echo Seeding Database...
cd backend
timeout /t 3 /nobreak > nul
node seedData.js

echo.
echo Building Frontend...
cd ..
call npm run build

echo.
echo Starting Full Application on Port 3000...
cd backend
call npm start

echo.
echo ========================================
echo   Recharge App is running!
echo ========================================
echo   Application: http://localhost:3000
echo   
echo   Login Credentials:
echo   Admin: admin@recharge.com / admin123
echo   User:  user@test.com / password
echo ========================================

pause