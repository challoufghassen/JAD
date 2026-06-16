"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id as string;
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    }, quantity);
  };

  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link href="/shop" className="inline-flex items-center text-sm uppercase tracking-widest text-gray-500 hover:text-jad-gold transition-colors mb-12">
        <ArrowLeft size={16} className="mr-2" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Product Image */}
        <div className="bg-gray-50 aspect-square relative flex items-center justify-center p-8">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain mix-blend-multiply"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <div className="text-jad-gold text-sm font-semibold uppercase tracking-widest mb-4">
            {product.category}
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 text-jad-black">{product.name}</h1>
          <div className="text-2xl font-medium text-jad-black mb-8">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-gray-600 font-light leading-relaxed mb-10">
            {product.description}
          </p>

          <div className="bg-jad-cream p-8 mb-10">
            <h3 className="font-serif text-xl mb-4">Fragrance Notes</h3>
            <ul className="space-y-3 font-light text-gray-700">
              <li><strong className="text-jad-black uppercase text-xs tracking-widest inline-block w-24">Top Notes:</strong> {product.notes.top}</li>
              <li><strong className="text-jad-black uppercase text-xs tracking-widest inline-block w-24">Heart Notes:</strong> {product.notes.heart}</li>
              <li><strong className="text-jad-black uppercase text-xs tracking-widest inline-block w-24">Base Notes:</strong> {product.notes.base}</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Quantity Selector */}
            <div className="flex border border-gray-300 w-32">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-14 flex items-center justify-center text-gray-500 hover:text-jad-black"
              >
                -
              </button>
              <input 
                type="text" 
                value={quantity} 
                readOnly 
                className="w-12 h-14 text-center font-medium focus:outline-none bg-transparent"
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-14 flex items-center justify-center text-gray-500 hover:text-jad-black"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-jad-black text-white px-8 py-4 uppercase tracking-[0.1em] text-sm hover:bg-jad-gold transition-colors duration-300 flex items-center justify-center"
            >
              <ShoppingBag size={18} className="mr-2" /> Add to Cart
            </button>
            
            {/* Wishlist */}
            <button 
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="w-14 h-14 border border-gray-300 flex items-center justify-center hover:border-jad-black transition-colors"
            >
              <Heart size={20} className={isWishlisted ? "fill-jad-gold text-jad-gold" : "text-gray-500"} />
            </button>
          </div>
          
          <div className="text-sm text-gray-500 flex items-center gap-6">
            <span>✓ In Stock</span>
            <span>✓ Free Shipping over $200</span>
          </div>
        </div>
      </div>
    </div>
  );
}
