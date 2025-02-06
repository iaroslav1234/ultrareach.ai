'use client';

import Link from 'next/link';
import { MoreHorizontal, X } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Success Stories', href: '/success' },
  { name: 'Features', href: '/features' },
  { name: 'Insights', href: '/insights' },
  { name: 'Careers', href: '/careers' }
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
            <Link href="/" className="text-xl font-bold flex items-center">
              <span className="text-white">Ultra</span>
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">Reach.ai</span>
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
                href="/login"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all"
              >
                Login
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
              href="/login"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white text-xl hover:bg-blue-700 transition-all mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
