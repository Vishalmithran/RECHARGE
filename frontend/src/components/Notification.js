import React, { useState, useEffect } from 'react';

const Notification = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700'
  };

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
    }`}>
      <div className={`border-l-4 p-4 rounded-lg shadow-lg max-w-sm ${typeStyles[type]}`}>
        <div className="flex justify-between items-start">
          <p className="text-sm font-medium">{message}</p>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="ml-2 text-lg leading-none hover:opacity-70"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;