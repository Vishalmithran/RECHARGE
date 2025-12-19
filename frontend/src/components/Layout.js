import React from 'react';
import Navbar from './Navbar.js';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;