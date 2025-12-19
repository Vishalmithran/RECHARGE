# MongoDB Setup Guide

## Option 1: Local MongoDB Installation

1. **Download MongoDB Community Server:**
   - Go to: https://www.mongodb.com/try/download/community
   - Select Windows version
   - Download and install

2. **Start MongoDB Service:**
   ```bash
   # Method 1: Start as Windows Service (after installation)
   net start MongoDB
   
   # Method 2: Start manually
   mongod --dbpath "C:\data\db"
   ```

3. **Create data directory:**
   ```bash
   mkdir C:\data\db
   ```

## Option 2: MongoDB Atlas (Cloud - Recommended)

1. **Create free account:** https://www.mongodb.com/atlas
2. **Create cluster** (free tier available)
3. **Get connection string**
4. **Update .env file**

## Option 3: Docker MongoDB

```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```