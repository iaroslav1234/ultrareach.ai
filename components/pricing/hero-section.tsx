'use client';

import { useState } from 'react';

export function HeroSection() {
  const [billingType, setBillingType] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Simple, transparent{' '}
          <span className="relative">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-lg opacity-50"></span>
            <span className="relative bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              pricing
            </span>
          </span>
        </h1>
        
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Choose the perfect plan for your business. Scale your voice AI capabilities
          as your needs grow.
        </p>

        <div className="inline-flex items-center gap-2 bg-gray-900/50 p-1 rounded-lg border border-gray-800">
          <button 
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              billingType === 'monthly' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                : 'text-white hover:text-blue-400'
            }`}
            onClick={() => setBillingType('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              billingType === 'annual' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                : 'text-white hover:text-blue-400'
            }`}
            onClick={() => setBillingType('annual')}
          >
            Annual
          </button>
        </div>

        <div className="mt-6 text-sm text-white/60">
          {billingType === 'annual' && 'Save up to 20% with annual billing'}
        </div>
      </div>
    </section>
  );
}
