@echo off
echo Starting Recharge App in Production Mode...

echo Installing dependencies...
call npm install
cd backend
call npm install
cd ..

echo Building frontend...
call npm run build

echo Seeding database...
cd backend
call npm run seed

echo Starting application on http://localhost:3000
call npm start