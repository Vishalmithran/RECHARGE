# Recharge App Backend

Express.js backend API for the mobile recharge application.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

3. Seed the database:
```bash
npm run seed
```

4. Start the server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Plans
- `GET /api/plans` - Get all plans
- `GET /api/plans/:id` - Get plan by ID
- `POST /api/plans` - Create plan (Admin only)
- `PUT /api/plans/:id` - Update plan (Admin only)
- `DELETE /api/plans/:id` - Delete plan (Admin only)

### Transactions
- `POST /api/transactions` - Create transaction
- `GET /api/transactions` - Get user transactions
- `GET /api/transactions/:id` - Get transaction by ID
- `GET /api/transactions/:id/status` - Check transaction status

## Default Users

After seeding:
- **Admin**: admin@recharge.com / admin123
- **User**: user@test.com / password

## Environment Variables

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/recharge_app
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```