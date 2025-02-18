import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Hotel Zindnaaba</h3>
            <p className="text-gray-400">Votre séjour de luxe au cœur de la ville</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +226 00 00 00 00
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                contact@zindnaaba.com
              </p>
              <p className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Ouagadougou, Burkina Faso
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="/rooms" className="text-gray-400 hover:text-white">Nos Chambres</a></li>
              <li><a href="/amenities" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/booking" className="text-gray-400 hover:text-white">Réservations</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Nous Contacter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hotel Zindnaaba. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;