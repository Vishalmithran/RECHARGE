@echo off
echo Starting Recharge App Development Environment...

echo.
echo Installing Backend Dependencies...
cd backend
call npm install

echo.
echo Installing Frontend Dependencies...
cd ..
call npm install

echo.
echo Starting MongoDB (make sure MongoDB is installed)...
start "MongoDB" mongod

echo.
echo Seeding Database...
cd backend
timeout /t 3 /nobreak > nul
node seedData.js

echo.
echo Starting Backend Server...
start "Backend" npm run dev

echo.
echo Starting Frontend Server...
cd ..
timeout /t 3 /nobreak > nul
start "Frontend" npm run dev

echo.
echo ========================================
echo   Recharge App is starting up!
echo ========================================
echo   Frontend: http://localhost:5173
echo   Backend:  http://localhost:5000
echo   
echo   Login Credentials:
echo   Admin: admin@recharge.com / admin123
echo   User:  user@test.com / password
echo ========================================

pause