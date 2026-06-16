"use client";

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { User as UserIcon, Package, Heart, LogOut } from 'lucide-react';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  // Redirect to login if no user is found
  useEffect(() => {
    // Small delay to prevent flashing while reading from localStorage
    const timeout = setTimeout(() => {
      if (!user) {
        router.push('/login');
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [user, router]);

  if (!user) return null; // Or a loading spinner

  return (
    <div className="min-h-[80vh] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Profile Card */}
        <div className="bg-white p-8 lg:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 bg-jad-cream rounded-full flex items-center justify-center text-jad-gold">
            <UserIcon size={40} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl text-jad-black font-serif mb-2">Welcome, {user.name}</h1>
            <p className="text-gray-500 font-light">{user.email}</p>
          </div>
          <button 
            onClick={logout}
            className="flex items-center text-gray-500 hover:text-red-500 transition-colors uppercase tracking-widest text-sm font-medium"
          >
            <LogOut size={16} className="mr-2" /> Sign Out
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <Package className="text-jad-gold" size={24} />
              <h2 className="text-xl uppercase tracking-widest text-jad-black">Recent Orders</h2>
            </div>
            <div className="text-gray-500 font-light flex flex-col items-center justify-center h-32">
              <p>No recent orders found.</p>
              <p className="text-sm mt-2">Your WhatsApp orders will be tracked here soon.</p>
            </div>
          </div>

          {/* Wishlist */}
          <div className="bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <Heart className="text-jad-gold" size={24} />
              <h2 className="text-xl uppercase tracking-widest text-jad-black">My Wishlist</h2>
            </div>
            <div className="text-gray-500 font-light flex flex-col items-center justify-center h-32">
              <p>Your wishlist is empty.</p>
              <a href="/shop" className="text-jad-gold hover:text-jad-black transition-colors mt-2 underline underline-offset-4">Browse Collection</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
