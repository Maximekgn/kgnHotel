import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Tv, Coffee, Bath } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      title: 'Chambre Standard',
      price: '75,000 FCFA',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Parfaite pour les voyageurs d\'affaires ou les couples, notre chambre standard offre un confort optimal.',
      amenities: ['Lit Queen Size', 'Wi-Fi Gratuit', 'TV LED', 'Salle de bain privée']
    },
    {
      title: 'Suite Deluxe',
      price: '150,000 FCFA',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Spacieuse et élégante, notre suite deluxe vous offre un séjour premium avec des services exclusifs.',
      amenities: ['Lit King Size', 'Salon séparé', 'Mini-bar', 'Vue sur la ville']
    },
    {
      title: 'Suite Présidentielle',
      price: '300,000 FCFA',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Notre suite la plus luxueuse, offrant une expérience incomparable avec un service personnalisé.',
      amenities: ['2 Chambres', 'Terrasse privée', 'Majordome personnel', 'Jacuzzi']
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12">Nos Chambres</h1>
        </motion.div>

        <div className="space-y-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="uppercase tracking-wide text-gold-600 font-semibold">
                    {room.title}
                  </div>
                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    {room.price}
                    <span className="text-sm font-normal text-gray-500"> / nuit</span>
                  </p>
                  <p className="mt-4 text-gray-600">{room.description}</p>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Équipements</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {room.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center text-gray-600">
                          <div className="flex items-center">
                            {amenity.includes('Wi-Fi') && <Wifi className="h-5 w-5 mr-2 text-gold-600" />}
                            {amenity.includes('TV') && <Tv className="h-5 w-5 mr-2 text-gold-600" />}
                            {amenity.includes('bar') && <Coffee className="h-5 w-5 mr-2 text-gold-600" />}
                            {amenity.includes('bain') && <Bath className="h-5 w-5 mr-2 text-gold-600" />}
                            {!amenity.includes('Wi-Fi') && !amenity.includes('TV') && 
                             !amenity.includes('bar') && !amenity.includes('bain') && 
                             <div className="h-2 w-2 bg-gold-600 rounded-full mr-2" />}
                          </div>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href="/booking"
                      className="inline-block bg-gold-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-gold-700 transition"
                    >
                      Réserver Maintenant
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;