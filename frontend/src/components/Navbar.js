import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext.js';

const Navbar = () => {
  const { isLoggedIn, user, logout, isAdmin } = useApp();

  return (
    <nav className="bg-white border-b border-cyan-500/20 shadow-2xl backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent text-center">
            Recharge Master
          </Link>
          
          <div className="flex items-center space-x-4">
            {!isLoggedIn && (
              <>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">About</Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 px-4 py-2 rounded-lg text-white shadow-lg shadow-gray-500/25 transition-all"
                >
                  Sign Up
                </Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link to="/mobile-entry" className="text-gray-600 hover:text-black transition-colors">Recharge</Link>
                <Link to="/history" className="text-gray-600 hover:text-black transition-colors">History</Link>
                {isAdmin && (
                  <Link to="/admin" className="text-gray-600 hover:text-black transition-colors">Admin</Link>
                )}
                <span className="text-black">Hi, {user?.email?.split('@')[0]}</span>
                <button
                  onClick={logout}
                  className="bg-gray-100 hover:bg-gray-200 border border-gray-500/30 px-3 py-1 rounded text-black transition-all"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;