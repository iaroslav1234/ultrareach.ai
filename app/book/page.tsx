'use client';

import { useEffect } from 'react';
import { Header } from "@/components/header";

export default function BookingPage() {
  useEffect(() => {
    // Load the msgsndr embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Schedule a{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                Demo
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Experience how UltraReach AI can transform your real estate business
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 md:p-8">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/tlaJb8dWKRpOQRILWOsC" 
              style={{ width: '100%', border: 'none', overflow: 'hidden' }}
              scrolling="no"
              id="msgsndr-calendar"
              className="min-h-[600px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
