"use client";

import LoginModel from '@/components/LoginModel';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ 
      name: isLogin ? formData.email.split('@')[0] : formData.name || 'Luxury User', 
      email: formData.email 
    });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white relative">
      {/* Absolute Back Button */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 z-50 inline-flex items-center text-sm uppercase tracking-widest text-jad-black hover:text-jad-gold transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full"
      >
        <ArrowLeft size={16} className="mr-2" /> Back to Home
      </Link>

      {/* Left side: 3D Model Viewer */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative border-r border-gray-100">
        <LoginModel />
      </div>

      {/* Right side: Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24">
        <div className="w-full max-w-md">
          <div className="mb-12 text-center">
            <Image 
              src="/logo.png" 
              alt="JAD Perfume" 
              width={800} 
              height={800} 
              quality={100}
              className="h-24 w-auto object-contain mx-auto mb-8 scale-[1.5] origin-center"
            />
            <h1 className="text-3xl text-jad-black mb-2">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-gray-500 font-light">
              {isLogin ? "Sign in to access your exclusive benefits" : "Register to discover luxury"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-jad-gold transition-colors text-jad-black"
                  placeholder="Enter your full name"
                />
              </div>
            )}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-jad-gold transition-colors text-jad-black"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Password</label>
              <input 
                type="password" 
                required
                className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-jad-gold transition-colors text-jad-black"
                placeholder="Enter your password"
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between mt-6">
                <label className="flex items-center text-sm text-gray-500 cursor-pointer">
                  <input type="checkbox" className="mr-2 accent-jad-gold" />
                  Remember me
                </label>
                <button type="button" className="text-sm text-gray-500 hover:text-jad-gold transition-colors">Forgot Password?</button>
              </div>
            )}

            <button 
              type="submit" 
              className="w-full bg-jad-black text-white px-8 py-4 mt-8 uppercase tracking-[0.2em] text-sm hover:bg-jad-gold transition-colors duration-300"
            >
              {isLogin ? "Sign In" : "Register"}
            </button>
          </form>

          <div className="mt-12 text-center text-sm text-gray-500">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button 
                  onClick={() => setIsLogin(false)}
                  className="text-jad-black hover:text-jad-gold uppercase tracking-wider font-medium ml-1 transition-colors"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button 
                  onClick={() => setIsLogin(true)}
                  className="text-jad-black hover:text-jad-gold uppercase tracking-wider font-medium ml-1 transition-colors"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
