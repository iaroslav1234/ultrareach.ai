'use client';

import Link from 'next/link';
import { MoreHorizontal, X } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Success Stories', href: '/success' },
  { name: 'Careers', href: '/careers' },
  { name: 'Pricing', href: '/pricing' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Header */}
      <div className="bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
              <span className="text-white">Ultra</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Reach.ai</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/demo"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full text-white hover:bg-gray-800 transition-colors relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MoreHorizontal className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl text-white hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/demo"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl hover:from-blue-600 hover:to-purple-600 transition-all mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
