# Mobile Recharge Application

A complete full-stack mobile recharge application with React frontend and Express.js backend.

## Features

✅ **Home Page** - Hero section with mobile number input and service selection
✅ **Mobile Number Input & Operator Detection** - Auto-detect operator based on number prefix
✅ **Recharge Plans Page** - Display plans in responsive cards
✅ **Plan Details Modal** - Popup with full plan details
✅ **Login/Signup Pages** - Authentication with form validation
✅ **Payment UI** - Frontend-only payment selection (UPI, Card, Net Banking)
✅ **Success Page** - Transaction summary with receipt option

## Tech Stack

### Frontend
- **React 18** with functional components
- **Vite** for fast development
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Context API** for state management

### Backend
- **Express.js** REST API
- **MongoDB** with Mongoose
- **JWT** authentication
- **bcryptjs** for password hashing
- **CORS** enabled

## Quick Start

### Single Port Setup (Recommended)
```bash
# Run on single port 3000
start-production.bat
```

### Development Mode (Two Ports)
```bash
# Frontend: 5173, Backend: 3000
start-dev.bat
```

### Manual Setup

1. **Install MongoDB** (if not installed)

2. **Production (Single Port):**
   ```bash
   npm install
   cd backend && npm install && cd ..
   npm run build
   cd backend && npm run seed && npm start
   ```

3. **Development (Two Ports):**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm install && npm run seed && npm run dev
   
   # Terminal 2 - Frontend
   npm install && npm run dev
   ```

## Default Login Credentials

- **Admin**: admin@recharge.com / admin123
- **User**: user@test.com / password

## Application URLs

- **Production**: http://localhost:3000 (Single Port)
- **Development**: Frontend http://localhost:5173 + Backend http://localhost:3000

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer component
│   ├── Button.jsx      # Reusable button
│   ├── InputField.jsx  # Form input component
│   ├── PlanCard.jsx    # Plan display card
│   └── Modal.jsx       # Modal/popup component
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Plans.jsx       # Plans listing page
│   ├── Login.jsx       # Login page
│   ├── Signup.jsx      # Signup page
│   ├── Payment.jsx     # Payment page
│   └── Summary.jsx     # Success/summary page
├── context/            # React Context
│   └── AuthContext.jsx # Authentication context
├── data/               # Static data
│   └── plans.js        # Plans and operators data
└── App.jsx             # Main app component
```

## Features Overview

### 🏠 Home Page
- Clean hero section with gradient background
- Mobile number input with validation
- Auto-operator detection based on number prefix
- Service type selection (Prepaid/Postpaid/DTH)
- Popular plans showcase

### 📱 Mobile & Operator Detection
- 10-digit mobile number validation
- Auto-detect operator from first 2 digits
- Manual operator selection dropdown
- Support for Jio, Airtel, VI, BSNL

### 💳 Recharge Plans
- Responsive grid layout
- Plan cards with price, validity, data, description
- Popular plan highlighting
- Modal popup for detailed plan view

### 🔐 Authentication
- Login/Signup forms with validation
- Email format validation
- Password strength requirements
- Context-based state management

### 💰 Payment Flow
- Order summary display
- Payment method selection (UPI/Card/Net Banking)
- Processing simulation
- Success confirmation

### 📄 Transaction Summary
- Complete transaction details
- Formatted timestamp
- Print receipt option
- Navigation back to home

## Responsive Design

- **Mobile First** approach
- **Tablet** optimized layouts
- **Desktop** enhanced experience
- Tailwind CSS breakpoints used throughout

## Usage

1. Enter mobile number on home page
2. Select service type (Prepaid/Postpaid/DTH)
3. Choose from available plans
4. View plan details in modal
5. Proceed to payment
6. Select payment method
7. View transaction summary

## Customization

- **Plans**: Edit `src/data/plans.js` to modify available plans
- **Operators**: Update operator list and prefixes in same file
- **Styling**: Modify Tailwind classes or extend `tailwind.config.js`
- **Components**: All components are modular and reusable

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License