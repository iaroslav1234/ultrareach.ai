import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="UltraReach Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="font-bold text-lg">UltraReach.ai</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
