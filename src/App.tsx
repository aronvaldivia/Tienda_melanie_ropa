import React, { useState } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import Catalog from './components/Catalog';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-serif">ELEGANCE</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#home" className="text-gray-900 hover:text-gray-600">Home</a>
                <a href="#new" className="text-gray-900 hover:text-gray-600">New Collection</a>
                <a href="#catalog" className="text-gray-900 hover:text-gray-600">Catalog</a>
                <a href="#contact" className="text-gray-900 hover:text-gray-600">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-900">Home</a>
              <a href="#new" className="block px-3 py-2 text-gray-900">New Collection</a>
              <a href="#catalog" className="block px-3 py-2 text-gray-900">Catalog</a>
              <a href="#contact" className="block px-3 py-2 text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <section id="new" className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-8">New Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc" 
                  alt="New Collection" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-serif mb-2">Spring Collection</h3>
                  <a href="#catalog" className="flex items-center text-sm hover:underline">
                    Discover More <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              <div className="relative h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b" 
                  alt="Exclusive Pieces" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-serif mb-2">Exclusive Pieces</h3>
                  <a href="#catalog" className="flex items-center text-sm hover:underline">
                    Shop Now <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Catalog />

        <section id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-serif mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-8">Get in touch via WhatsApp for orders and inquiries</p>
              <a 
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-black text-base font-medium text-black hover:bg-black hover:text-white transition-colors duration-200"
              >
                <Phone size={20} className="mr-2" />
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;