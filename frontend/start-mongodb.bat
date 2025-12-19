@echo off
echo Starting MongoDB locally...

echo Creating MongoDB data directory...
if not exist "C:\data\db" mkdir "C:\data\db"

echo.
echo Starting MongoDB server...
echo (This will keep running - don't close this window)
echo.

mongod --dbpath "C:\data\db"