import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Hotel } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Hotel className="h-8 w-8 text-gold-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Zindnaaba</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gold-600 transition">Accueil</Link>
            <Link to="/rooms" className="text-gray-700 hover:text-gold-600 transition">Chambres</Link>
            <Link to="/amenities" className="text-gray-700 hover:text-gold-600 transition">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gold-600 transition">Contact</Link>
            <Link to="/booking" className="bg-gold-600 text-white px-4 py-2 rounded-md hover:bg-gold-700 transition">
              Réserver
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gold-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-gold-600">Accueil</Link>
            <Link to="/rooms" className="block px-3 py-2 text-gray-700 hover:text-gold-600">Chambres</Link>
            <Link to="/amenities" className="block px-3 py-2 text-gray-700 hover:text-gold-600">Services</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-gold-600">Contact</Link>
            <Link to="/booking" className="block px-3 py-2 bg-gold-600 text-white rounded-md">Réserver</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;