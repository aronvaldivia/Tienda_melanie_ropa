import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-serif mb-4">ELEGANCE</h3>
            <p className="text-gray-400">Contemporary women's fashion for the modern, sophisticated woman.</p>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Contact</h3>
            <p className="text-gray-400">Email: contact@elegance.com</p>
            <p className="text-gray-400">WhatsApp: +1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ELEGANCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;