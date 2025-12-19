import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.js';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section with Professional Layout */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-black/5 rounded-full">
                  <span className="text-sm font-medium text-gray-600">✨ Professional Recharge Platform</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Smart Mobile
                  <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Recharge Solution
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your mobile recharge experience with our enterprise-grade platform. 
                  Instant processing, secure transactions, and premium customer support.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => navigate('/signup')}
                    className="text-lg px-8 py-4 text-white font-semibold"
                  >
                    Get Started
                  </Button>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex items-center space-x-8 pt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">50M+</div>
                    <div className="text-sm text-gray-600">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
              
              {/* Right Visual */}
              <div className="relative">
                {/* Phone Mockup using CSS */}
                <div className="relative mx-auto w-80 h-96">
                  {/* Phone Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-3xl shadow-2xl">
                    {/* Screen */}
                    <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-2xl overflow-hidden">
                      {/* Status Bar */}
                      <div className="h-6 bg-gray-100 flex items-center justify-between px-4">
                        <div className="text-xs font-medium">9:41</div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-6 space-y-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-2">RechargeMaster</div>
                          <div className="text-sm text-gray-600">Mobile Recharge</div>
                        </div>
                        
                        {/* Input Field Mockup */}
                        <div className="space-y-3">
                          <div className="h-12 bg-gray-100 rounded-lg flex items-center px-4">
                            <span className="text-gray-500 text-sm">Enter mobile number</span>
                          </div>
                          
                          {/* Operator Cards */}
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-16 bg-red-100 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-medium text-red-600">Airtel</span>
                            </div>
                            <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-medium text-blue-600">Jio</span>
                            </div>
                            <div className="h-16 bg-green-100 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-medium text-green-600">BSNL</span>
                            </div>
                          </div>
                          
                          {/* Recharge Button */}
                          <div className="h-12 bg-black rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm font-medium">Recharge Now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Built for businesses and individuals who demand excellence in mobile recharge services</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Processing</h3>
              <p className="text-gray-600">Lightning-fast recharges completed in under 3 seconds with 99.9% success rate</p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bank-Grade Security</h3>
              <p className="text-gray-600">Advanced encryption and fraud protection to keep your transactions secure</p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Support</h3>
              <p className="text-gray-600">24/7 dedicated customer support with average response time under 2 minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Operators Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted Network Partners</h2>
            <p className="text-xl text-gray-600">Supporting all major telecom operators across India</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-red-600 mb-2">Airtel</h3>
              <p className="text-gray-600 mb-4">India's largest telecom network</p>
              <div className="text-sm text-gray-500">5G Ready • Pan India Coverage</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-black mb-2">Jio</h3>
              <p className="text-gray-600 mb-4">Digital India pioneer</p>
              <div className="text-sm text-gray-500">4G/5G Leader • Digital Services</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-green-600 mb-2">BSNL</h3>
              <p className="text-gray-600 mb-4">Government trusted network</p>
              <div className="text-sm text-gray-500">Rural Reach • Reliable Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Recharge Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join millions of users who trust RechargeMaster for their mobile recharge needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/signup')}
              className="text-lg px-8 py-4 text-white font-semibold"
            >
              Get Started
            </Button>
            <button className="text-lg px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-colors font-semibold">
              Contact Sales
            </button>
          </div>
          
          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50M+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1B+</div>
              <div className="text-gray-400">Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;