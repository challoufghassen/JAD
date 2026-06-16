import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | JAD Perfume',
  description: 'The story and heritage of JAD Perfume.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full bg-[#111] flex items-center justify-center">
        {/* Subtle background texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Our Heritage</h1>
          <p className="text-[#d4af37] tracking-[0.3em] uppercase text-sm">The Art of Fine Perfumery</p>
        </div>
      </div>

      {/* Main Story Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="text-center mb-24">
          <h2 className="text-3xl text-jad-black font-serif mb-8 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-jad-gold">
            A Legacy of Excellence
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg font-light">
            Founded on the principles of passion, elegance, and exclusivity, JAD Perfume is more than a fragrance house—it is a journey into the world of pure luxury. We believe that a scent is the most profound memory one can leave behind, an invisible signature that speaks before you even utter a word.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="bg-jad-cream aspect-[4/5] relative">
            {/* Using a placeholder aesthetic image style from your home page */}
            <div className="absolute inset-4 border border-jad-gold/30"></div>
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
              <p className="font-serif italic text-2xl text-jad-black">
                "Crafting moments that last forever, locked in a bottle."
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-jad-black mb-6 font-serif">The Craftsmanship</h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              Every drop of JAD Perfume is meticulously crafted by master perfumers. We source only the rarest and most exquisite raw materials from around the globe—from the fields of Grasse to the deep forests of the Orient. 
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              Our extraction processes honor traditional techniques while embracing modern innovation, ensuring that every note, from the top to the deep base, sings in perfect harmony.
            </p>
          </div>
        </div>

        <div className="text-center bg-[#111] text-white p-12 lg:p-24 rounded-sm">
          <h2 className="text-3xl font-serif mb-6 text-[#d4af37]">Discover Your Signature Scent</h2>
          <p className="text-gray-400 mb-10 font-light max-w-2xl mx-auto">
            Explore our curated collections and find the fragrance that perfectly resonates with your soul.
          </p>
          <Link 
            href="/shop" 
            className="inline-block border border-[#d4af37] text-[#d4af37] px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#d4af37] hover:text-[#111] transition-all duration-300"
          >
            Visit the Boutique
          </Link>
        </div>

      </div>
    </div>
  );
}
