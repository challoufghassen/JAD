"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-jad-cream pt-20 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image 
              src="/logo.png" 
              alt="JAD Perfume" 
              width={800} 
              height={800} 
              quality={100}
              className="h-20 w-auto object-contain mb-8 scale-[1.5] origin-left"
            />
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Luxury in Every Drop. Exclusive perfume extracts crafted for lasting elegance.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=100066927381782&sk=photos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-jad-black hover:bg-jad-gold hover:text-white transition-all shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/jadperfume2026" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-jad-black hover:bg-jad-gold hover:text-white transition-all shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans font-semibold uppercase tracking-widest text-sm mb-6 text-jad-black">Shop</h4>
            <ul className="space-y-4">
              <li><Link href="/shop?category=mens" className="text-gray-600 hover:text-jad-gold transition-colors text-sm">Men's Collection</Link></li>
              <li><Link href="/shop?category=womens" className="text-gray-600 hover:text-jad-gold transition-colors text-sm">Women's Collection</Link></li>
              <li><Link href="/shop?category=unisex" className="text-gray-600 hover:text-jad-gold transition-colors text-sm">Unisex</Link></li>
              <li><Link href="/shop?category=new" className="text-gray-600 hover:text-jad-gold transition-colors text-sm">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="font-sans font-semibold uppercase tracking-widest text-sm mb-6 text-jad-black">Information</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-600 hover:text-jad-gold transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-jad-gold transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-jad-gold transition-colors text-sm">Shipping & Returns</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-jad-gold transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans font-semibold uppercase tracking-widest text-sm mb-6 text-jad-black">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex mt-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-jad-gold font-sans text-sm bg-white"
                required
              />
              <button 
                type="submit" 
                className="bg-jad-black text-white px-6 py-3 hover:bg-jad-gold transition-colors flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans tracking-wide uppercase">
          <p>&copy; {new Date().getFullYear()} JAD Perfume. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
