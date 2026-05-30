'use client';

import { useState } from 'react';
import { ChevronDown, Shield, Lock, Target, Wallet, DollarSign, Home } from 'lucide-react';
import logo from "../assets/piggyvestlogo.svg"
export default function Header() {
  const [saveOpen, setSaveOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const saveProducts = [
    { name: 'Piggybank', desc: 'Automated Savings', icon: Shield, color: 'text-blue-500' },
    { name: 'Safelock', desc: 'Fixed Savings', icon: Lock, color: 'text-blue-500' },
    { name: 'Target Savings', desc: 'Goal-oriented Savings', icon: Target, color: 'text-green-500' },
    { name: 'Flex Naira', desc: 'Flexible Savings', icon: Wallet, color: 'text-pink-500' },
    { name: 'Flex Dollar', desc: 'Dollar Savings', icon: DollarSign, color: 'text-green-500' },
    { name: 'House Money', desc: 'Semi Strict Wallet', icon: Home, color: 'text-orange-500' },
  ];

  return (
    <header className="bg-backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        {/* Main Navigation */}
        <div className="flex items-center h-16 gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
             <img src = {logo} alt ="piggyvestlogo"/>
          </div>

          {/* Center Navigation */}
          <nav className="hidden min-[985px]:w-[985px]:flex items-center gap-8" style={{ marginRight: '10px' }}>
            {/* Save Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setSaveOpen(true)}
                onMouseLeave={() => setSaveOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                Save
                <ChevronDown size={16} />
              </button>

              {saveOpen && (
                <div
                  onMouseEnter={() => setSaveOpen(true)}
                  onMouseLeave={() => setSaveOpen(false)}
                  className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg p-6 z-50"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {saveProducts.map((product) => {
                      const IconComponent = product.icon;
                      return (
                        <div key={product.name} className="flex gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                          <div className="flex-shrink-0">
                            <div className={`w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center ${product.color}`}>
                              <IconComponent size={20} />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{product.name}</h4>
                            <p className="text-gray-600 text-xs">{product.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Invest
            </a>

            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Stories
            </a>

            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              FAQs
            </a>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                Resources
                <ChevronDown size={16} />
              </button>

              {resourcesOpen && (
                <div
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                  className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50"
                >
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">
                    Blog
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">
                    Help Center
                  </a>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">
                    Contact Us
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3 ml-auto">
            <button className="hidden min-w-[985px]:block px-7 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Create free account
            </button>
            <button className="hidden min-w-[985px]:block px-7 py-3 border border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Sign in
            </button>
            <button className="max-w-[984px]:hidden text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
