import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext.js';
import Layout from './components/Layout.js';
import About from './pages/About.js';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import MobileEntry from './pages/MobileEntry.js';
import Plans from './pages/Plans.js';
import Payment from './pages/Payment.js';
import Success from './pages/Success.js';
import History from './pages/History.js';
import Admin from './pages/Admin.js';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mobile-entry" element={<MobileEntry />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<Success />} />
            <Route path="/history" element={<History />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;