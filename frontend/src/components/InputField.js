import React from 'react';

const InputField = ({ label, type = 'text', value, onChange, placeholder, error, className = '', ...props }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-900 placeholder-gray-500 transition-all duration-300 shadow-lg ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 hover:border-gray-500'
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;