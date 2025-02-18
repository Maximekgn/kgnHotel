import React from 'react';
import { motion } from 'framer-motion';
import { Star, Coffee, Wifi, Car } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Hotel Zindnaaba"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Bienvenue à l'Hôtel Zindnaaba
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Découvrez le luxe et le confort au cœur de Lomé
            </p>
            <a
              href="/booking"
              className="bg-gold-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gold-700 transition"
            >
              Réserver Maintenant
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services Premium</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-gold-600" />
              <h3 className="text-xl font-semibold mb-2">Service 5 Étoiles</h3>
              <p className="text-gray-600">Un service personnalisé de haute qualité</p>
            </div>
            <div className="text-center">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-gold-600" />
              <h3 className="text-xl font-semibold mb-2">Restaurant Gourmet</h3>
              <p className="text-gray-600">Une cuisine raffinée et locale</p>
            </div>
            <div className="text-center">
              <Wifi className="w-12 h-12 mx-auto mb-4 text-gold-600" />
              <h3 className="text-xl font-semibold mb-2">Wi-Fi Gratuit</h3>
              <p className="text-gray-600">Connexion haut débit dans tout l'hôtel</p>
            </div>
            <div className="text-center">
              <Car className="w-12 h-12 mx-auto mb-4 text-gold-600" />
              <h3 className="text-xl font-semibold mb-2">Parking Privé</h3>
              <p className="text-gray-600">Stationnement sécurisé gratuit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Chambres</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Chambre Standard"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chambre Standard</h3>
                <p className="text-gray-600 mb-4">Confort et élégance pour votre séjour</p>
                <a href="/rooms" className="text-gold-600 font-semibold hover:text-gold-700">
                  En savoir plus →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Suite Deluxe"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Suite Deluxe</h3>
                <p className="text-gray-600 mb-4">Luxe et espace pour un séjour premium</p>
                <a href="/rooms" className="text-gold-600 font-semibold hover:text-gold-700">
                  En savoir plus →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Suite Présidentielle"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Suite Présidentielle</h3>
                <p className="text-gray-600 mb-4">L'excellence à son apogée</p>
                <a href="/rooms" className="text-gold-600 font-semibold hover:text-gold-700">
                  En savoir plus →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;