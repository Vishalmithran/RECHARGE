import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext.js';
import InputField from '../components/InputField.js';
import Button from '../components/Button.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/mobile-entry');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            <Button type="submit" className="w-full bg-red-900 hover:bg-red-950">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Don't have an account?{' '}
              <Link to="/signup" className="text-gray-800 hover:text-gray-600 font-medium">
                Sign Up
              </Link>
            </p>
            <div className="text-xs text-gray-500 bg-gray-100 p-3 rounded">
              <strong>Available Accounts:</strong><br/>
              Admin: admin@recharge.com / admin123<br/>
              User: user@test.com / password<br/>
              John: john@example.com / john123<br/>
              Sarah: sarah@example.com / sarah123<br/>
              Vishal: vishalmithran0@gmail.com / vishal123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;