import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:h-[80vh] bg-jad-cream flex items-center overflow-hidden py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center relative z-10">
        
        {/* Content */}
        <div className="w-full md:w-1/2 pt-4 md:pt-0 pb-12 md:pb-0 z-20 mt-8 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 md:mb-6 text-jad-black">
            Experience the <br />
            <span className="italic text-jad-gold">Essence</span> of Luxury
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-md font-light leading-relaxed">
            Exclusive Perfume Extracts Crafted for Lasting Elegance. Discover your signature scent with JAD Perfume.
          </p>
          <Link 
            href="/shop" 
            className="inline-block bg-jad-black text-white px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-jad-gold transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Image Area - Using absolute positioning for the image on desktop to allow bleed */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-full md:absolute md:right-0 md:top-0 md:w-1/2 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-jad-cream via-jad-cream/50 to-transparent z-10 hidden md:block"></div>
          <Image
            src="/images/1x.png"
            alt="Luxury Perfume Collection"
            fill
            priority
            className="object-cover object-left md:object-center"
          />
        </div>
      </div>
    </section>
  );
}
