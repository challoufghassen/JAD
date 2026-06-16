"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Eye, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ id, name, category, price, imageUrl }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart({ id, name, price, imageUrl }, 1);
  };

  const handleQuickView = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="group text-center">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square mb-6 flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Actions (Always visible on mobile, hover on desktop) */}
        <div className="absolute bottom-0 md:-bottom-16 left-0 w-full bg-white/95 backdrop-blur-sm py-4 flex justify-center gap-6 transition-all duration-300 md:group-hover:bottom-0 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
          <button onClick={handleAddToCart} className="text-jad-black hover:text-jad-gold transition-colors" title="Add to Cart">
            <ShoppingBag size={20} />
          </button>
          <button onClick={handleQuickView} className="text-jad-black hover:text-jad-gold transition-colors" title="Quick View">
            <Eye size={20} />
          </button>
          <button onClick={() => setIsWishlisted(!isWishlisted)} className="text-jad-black hover:text-jad-gold transition-colors" title="Add to Wishlist">
            <Heart size={20} className={isWishlisted ? "fill-jad-gold text-jad-gold" : ""} />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="text-jad-gold text-xs font-semibold uppercase tracking-widest mb-2">
        {category}
      </div>
      <h3 className="text-xl mb-2">
        <Link href={`/product/${id}`} className="hover:text-jad-gold transition-colors">
          {name}
        </Link>
      </h3>
      <div className="text-lg font-medium text-jad-black">
        ${price.toFixed(2)}
      </div>
    </div>
  );
}
