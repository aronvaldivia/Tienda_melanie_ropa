import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Elegant Black Dress',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
    category: 'dresses'
  },
  {
    id: 2,
    name: 'White Blazer',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    category: 'jackets'
  },
  {
    id: 3,
    name: 'Classic Trousers',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf',
    category: 'pants'
  },
  {
    id: 4,
    name: 'Silk Blouse',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a70b4',
    category: 'tops'
  },
  {
    id: 5,
    name: 'Evening Gown',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae',
    category: 'dresses'
  },
  {
    id: 6,
    name: 'Leather Jacket',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
    category: 'jackets'
  }
];

const categories = ['all', 'dresses', 'jackets', 'pants', 'tops'];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handleOrder = (product: typeof products[0]) => {
    const message = `Hello, I'm interested in ordering the ${product.name} (${formatPrice(product.price)})`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/962231332?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="catalog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif mb-8">Our Collection</h2>
        
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm capitalize ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white text-black border border-black hover:bg-black hover:text-white'
              } transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group">
              <div className="relative aspect-[3/4] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => handleOrder(product)}
                  className="absolute bottom-4 left-4 right-4 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  Order via WhatsApp
                </button>
              </div>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">{formatPrice(product.price)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;