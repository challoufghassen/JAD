"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-jad-cream border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-jad-black">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="JAD Perfume Logo" 
                width={800} 
                height={800} 
                quality={100}
                priority
                className="h-16 md:h-20 w-auto object-contain scale-[1.7] origin-center md:origin-left"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-jad-black hover:text-jad-gold transition-colors text-sm uppercase tracking-wider font-medium">Home</Link>
            <Link href="/shop" className="text-jad-black hover:text-jad-gold transition-colors text-sm uppercase tracking-wider font-medium">Shop</Link>
            <Link href="/about" className="text-jad-black hover:text-jad-gold transition-colors text-sm uppercase tracking-wider font-medium">About Us</Link>
            <Link href="/contact" className="text-jad-black hover:text-jad-gold transition-colors text-sm uppercase tracking-wider font-medium">Contact</Link>
          </nav>

          {/* Icons & Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-jad-black hover:text-jad-gold transition-colors">
              <Search size={20} />
            </button>
            <Link href={user ? "/profile" : "/login"} className="text-jad-black hover:text-jad-gold transition-colors">
              <User size={20} />
            </Link>
            <button onClick={() => setIsCartOpen(true)} className="text-jad-black hover:text-jad-gold transition-colors relative">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-jad-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <button onClick={() => setIsCartOpen(true)} className="text-jad-black hover:text-jad-gold transition-colors relative">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-jad-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-jad-black hover:text-jad-gold transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            <Link href="/" className="block px-3 py-3 text-base uppercase tracking-wider font-medium text-jad-black hover:text-jad-gold hover:bg-gray-50">Home</Link>
            <Link href="/shop" className="block px-3 py-3 text-base uppercase tracking-wider font-medium text-jad-black hover:text-jad-gold hover:bg-gray-50">Shop</Link>
            <Link href="/about" className="block px-3 py-3 text-base uppercase tracking-wider font-medium text-jad-black hover:text-jad-gold hover:bg-gray-50">About Us</Link>
            <Link href="/contact" className="block px-3 py-3 text-base uppercase tracking-wider font-medium text-jad-black hover:text-jad-gold hover:bg-gray-50">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
