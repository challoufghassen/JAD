"use client";

import Image from 'next/image';

const originalImages = [
  '/images/exposition/1.jpg',
  '/images/exposition/2.jpg',
  '/images/exposition/3.jpg',
  '/images/exposition/4.jpg',
];

// Duplicate enough times to create a seamless infinite marquee
const images = [...originalImages, ...originalImages, ...originalImages];

export default function ExpositionCarousel() {
  return (
    <section className="bg-jad-cream relative py-24 overflow-hidden border-t border-gray-200">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-jad-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Découvrez
        </h2>
        <h3 className="text-4xl md:text-5xl font-serif text-jad-black">
          Exposition Privée
        </h3>
      </div>

      {/* Horizontal Auto-Scrolling Infinite Marquee Gallery */}
      <div className="relative z-10 w-full overflow-hidden pb-8">
        <div className="flex gap-8 w-max animate-marquee hover:pause-animation">
          {images.map((src, idx) => (
            <div 
              key={idx}
              className="relative w-72 md:w-80 h-96 md:h-[30rem] flex-shrink-0 group rounded-sm shadow-xl"
            >
              <div className="absolute inset-0 overflow-hidden rounded-sm">
                <Image
                  src={src}
                  alt={`Exposition Privée ${idx}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
