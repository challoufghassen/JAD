"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      alert("Votre panier est vide.");
      return;
    }

    const date = new Date().toLocaleDateString('fr-FR');
    
    // Build articles list
    let articlesText = '';
    items.forEach(item => {
      articlesText += `🏷️ *${item.name}*\n`;
      articlesText += `   • Qté: ${item.quantity}\n`;
      articlesText += `   • ID Produit: #${item.id}\n`;
      articlesText += `   • Prix: $${item.price.toFixed(2)}\n\n`;
    });

    const message = `*⭐ NOUVELLE COMMANDE JAD PERFUME ⭐*

👤 *Date:* ${date}
👤 *Client:* ${formData.name}
📞 *Tel (Contact):* ${formData.phone}
📍 *Adresse:* ${formData.address}

🛍️ *ARTICLES:*

${articlesText}──────────────────
💰 *TOTAL À PAYER:* $${cartTotal.toFixed(2)}
──────────────────

Je souhaite confirmer ma commande. Voici mes coordonnées pour la livraison.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/21650556705?text=${encodedMessage}`;
    
    // Redirect to WhatsApp safely without popup blocker issues
    window.location.href = whatsappUrl;
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl uppercase tracking-widest text-jad-black mb-6">Votre panier est vide</h2>
        <Link href="/shop" className="bg-jad-black text-white px-8 py-3 uppercase tracking-[0.2em] text-sm hover:bg-jad-gold transition-colors">
          Retour à la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/shop" className="inline-flex items-center text-sm uppercase tracking-widest text-gray-500 hover:text-jad-gold transition-colors mb-8">
          <ArrowLeft size={16} className="mr-2" /> Retour
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Checkout Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 shadow-sm">
            <h1 className="text-3xl text-jad-black mb-8 font-serif">Détails de Livraison</h1>
            
            <form onSubmit={handleWhatsAppCheckout} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nom Complet</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-jad-gold transition-colors text-jad-black"
                  placeholder="Entrez votre nom et prénom"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Numéro de Téléphone</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-jad-gold transition-colors text-jad-black"
                  placeholder="Ex: +216 50 123 456"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Adresse de Livraison</label>
                <textarea 
                  name="address"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-jad-gold transition-colors text-jad-black resize-none"
                  placeholder="Rue, Ville, Code Postal"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#25D366] text-white px-8 py-4 mt-8 uppercase tracking-[0.1em] text-sm hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center font-medium"
              >
                <MessageCircle size={20} className="mr-3" /> Confirmer via WhatsApp
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-jad-cream p-8 sticky top-24">
              <h2 className="text-xl uppercase tracking-widest text-jad-black mb-8 border-b border-gray-200 pb-4">Résumé de la Commande</h2>
              
              <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-white relative flex-shrink-0 flex items-center justify-center">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.name} 
                        fill 
                        className="object-contain mix-blend-multiply p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-jad-black font-medium text-sm">{item.name}</h3>
                      <p className="text-gray-500 text-xs mt-1">Qté: {item.quantity}</p>
                    </div>
                    <div className="text-jad-gold font-medium text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Sous-total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Livraison</span>
                  <span>Calculé sur WhatsApp</span>
                </div>
                <div className="flex justify-between text-lg text-jad-black font-medium pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
