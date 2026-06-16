import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | JAD Perfume',
  description: 'Get in touch with JAD Perfume for any inquiries about our luxury extracts.',
};

export default function ContactPage() {
  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center py-16 bg-jad-cream mb-16">
        <h1 className="text-4xl md:text-5xl mb-4 text-jad-black font-serif">Contact Us</h1>
        <p className="text-gray-500 font-light max-w-2xl mx-auto px-4">
          We are here to assist you with any questions about our exclusive collections, your orders, or custom requests.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl text-jad-black font-serif mb-8 border-b border-gray-100 pb-4">Get In Touch</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-jad-cream flex items-center justify-center flex-shrink-0 mr-6">
                <MapPin className="text-jad-gold" size={24} />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-jad-black font-medium mb-2">Visit Us</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Le Bardo<br />
                  Tunis, Tunisia
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-jad-cream flex items-center justify-center flex-shrink-0 mr-6">
                <Phone className="text-jad-gold" size={24} />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-jad-black font-medium mb-2">Call Us</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  +216 56 754 968
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-jad-cream flex items-center justify-center flex-shrink-0 mr-6">
                <Mail className="text-jad-gold" size={24} />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-jad-black font-medium mb-2">Email Us</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  contact@jadperfume.com
                </p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-100">
              <a 
                href="https://wa.me/21656754968" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 uppercase tracking-[0.1em] text-sm hover:bg-[#128C7E] transition-colors duration-300 font-medium"
              >
                <MessageCircle size={20} className="mr-3" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 sm:p-12">
          <h2 className="text-2xl text-jad-black font-serif mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-jad-gold transition-colors text-jad-black"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-jad-gold transition-colors text-jad-black"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-jad-gold transition-colors text-jad-black"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-jad-gold transition-colors text-jad-black resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button 
              type="button" 
              className="w-full bg-jad-black text-white px-8 py-4 mt-4 uppercase tracking-[0.2em] text-sm hover:bg-jad-gold transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
