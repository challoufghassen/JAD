import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

const MOCK_PRODUCTS = [
  { id: '1', name: "Lumière d'Or", category: "Women's Collection", price: 245.00, imageUrl: '/images/1f.jpg' },
  { id: '2', name: 'Noir Absolu', category: "Men's Collection", price: 285.00, imageUrl: '/images/1h.jpg' },
  { id: '3', name: 'Oud Royal', category: 'Unisex Collection', price: 320.00, imageUrl: '/images/1x.png' },
  { id: '4', name: 'Rose Blanche', category: "Women's Collection", price: 195.00, imageUrl: '/images/2f.jpg' },
  { id: '5', name: 'Santal Mystique', category: "Men's Collection", price: 210.00, imageUrl: '/images/2h.jpg' },
  { id: '6', name: 'Fleur de Coton', category: "Women's Collection", price: 180.00, imageUrl: '/images/3f.jpg' },
  { id: '7', name: 'Ambre Nuit', category: "Women's Collection", price: 190.00, imageUrl: '/images/4f.jpg' },
  { id: '8', name: 'Jasmin Secret', category: "Women's Collection", price: 205.00, imageUrl: '/images/5f.jpg' },
  { id: '9', name: 'Vanille Exquise', category: "Women's Collection", price: 220.00, imageUrl: '/images/6f.jpg' },
];

export default async function Shop({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams;
  const currentCategory = params.category || 'all';

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    if (currentCategory === 'mens') return product.category === "Men's Collection";
    if (currentCategory === 'womens') return product.category === "Women's Collection";
    if (currentCategory === 'unisex') return product.category === "Unisex Collection";
    return true; // 'all'
  });

  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center py-16 bg-jad-cream mb-16">
        <h1 className="text-4xl md:text-5xl mb-4 text-jad-black">Our Collections</h1>
        <p className="text-gray-500 font-light max-w-2xl mx-auto px-4">
          Explore our exclusive range of luxury perfume extracts. Find your perfect signature scent.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-6 border-b border-gray-100">
        <div className="flex space-x-6 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
          <Link href="/shop" className={`${currentCategory === 'all' ? 'text-jad-gold font-medium' : 'text-gray-500 hover:text-jad-gold transition-colors'} uppercase tracking-widest text-sm whitespace-nowrap`}>All Collections</Link>
          <Link href="/shop?category=mens" className={`${currentCategory === 'mens' ? 'text-jad-gold font-medium' : 'text-gray-500 hover:text-jad-gold transition-colors'} uppercase tracking-widest text-sm whitespace-nowrap`}>Men's</Link>
          <Link href="/shop?category=womens" className={`${currentCategory === 'womens' ? 'text-jad-gold font-medium' : 'text-gray-500 hover:text-jad-gold transition-colors'} uppercase tracking-widest text-sm whitespace-nowrap`}>Women's</Link>
          <Link href="/shop?category=unisex" className={`${currentCategory === 'unisex' ? 'text-jad-gold font-medium' : 'text-gray-500 hover:text-jad-gold transition-colors'} uppercase tracking-widest text-sm whitespace-nowrap`}>Unisex</Link>
        </div>
        <div className="mt-4 md:mt-0 self-end md:self-auto text-sm text-gray-500">
          Showing {filteredProducts.length} results
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
