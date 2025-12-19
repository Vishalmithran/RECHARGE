import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '', disabled = false }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white shadow-lg shadow-gray-500/25 border border-gray-400/30',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/10',
    outline: 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900 shadow-lg shadow-cyan-500/25',
    airtel: 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400 text-white shadow-lg shadow-red-500/25',
    jio: 'bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white shadow-lg shadow-gray-500/25',
    bsnl: 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white shadow-lg shadow-green-500/25'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;