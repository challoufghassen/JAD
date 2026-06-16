import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import ExpositionCarousel from '@/components/ExpositionCarousel';

// Mock Data for the homepage
const MOCK_BEST_SELLERS = [
  {
    id: '1',
    name: 'Noir Absolu',
    category: "Men's Collection",
    price: 285.00,
    imageUrl: '/images/1h.jpg',
  },
  {
    id: '2',
    name: "Lumière d'Or",
    category: "Women's Collection",
    price: 245.00,
    imageUrl: '/images/1f.jpg',
  },
  {
    id: '3',
    name: 'Oud Royal',
    category: 'Unisex Collection',
    price: 320.00,
    imageUrl: '/images/1x.png', 
  },
  {
    id: '4',
    name: 'Rose Blanche',
    category: "Women's Collection",
    price: 195.00,
    imageUrl: '/images/2f.jpg', 
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Exposition Privée Horizontal Carousel */}
      <ExpositionCarousel />
      
      {/* Featured Collections Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl relative inline-block mb-4 pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-jad-gold">
          Best Sellers
        </h2>
        <p className="text-gray-500 font-light mb-16 text-lg">Our most coveted fragrances</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {MOCK_BEST_SELLERS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="mt-16">
          <Link 
            href="/shop" 
            className="inline-block border border-jad-black text-jad-black px-8 py-4 uppercase tracking-widest text-sm hover:bg-jad-black hover:text-white transition-colors duration-300"
          >
            View All Collections
          </Link>
        </div>
      </section>

      {/* Brand Story Highlight */}
      <section className="bg-jad-cream py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl mb-6">The Art of Perfumery</h2>
          <p className="text-gray-600 font-light text-lg mb-10 leading-relaxed">
            Every bottle of JAD Perfume is a testament to luxury craftsmanship. We source only the rarest and finest ingredients from around the globe to create unforgettable scent profiles that linger and evolve gracefully on your skin.
          </p>
          <Link 
            href="/about" 
            className="inline-block bg-jad-gold text-white px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-jad-black transition-colors duration-300"
          >
            Discover Our Story
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-jad-black text-white py-24 px-4 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-jad-gold mb-12">A Symphony of Scents</h2>
          <p className="font-serif italic text-2xl md:text-3xl leading-relaxed mb-8 text-jad-cream">
            "Plus qu’une fragrance, un cadeau pour les sens. Un instant parfumé, à offrir ou à s’offrir"
          </p>
          <div className="text-sm uppercase tracking-[0.2em] text-jad-gold font-semibold">
            - EMNA
          </div>
        </div>
      </section>
    </>
  );
}
