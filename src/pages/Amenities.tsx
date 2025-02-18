import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Wifi, Car, School as Pool, Dumbbell, Coffee, Wine, Users } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Restaurant Gastronomique',
      description: 'Savourez une cuisine raffinée mêlant saveurs locales et internationales.'
    },
    {
      icon: <Pool className="w-8 h-8" />,
      title: 'Piscine Extérieure',
      description: 'Profitez de notre piscine avec vue panoramique sur la ville.'
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Salle de Sport',
      description: 'Restez en forme dans notre centre de fitness entièrement équipé.'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Café-Bar',
      description: 'Détendez-vous avec un café ou un cocktail dans notre bar élégant.'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Parking Privé',
      description: 'Stationnement sécurisé gratuit pour tous nos clients.'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Wi-Fi Haut Débit',
      description: 'Connexion Internet gratuite dans tout l\'établissement.'
    },
    {
      icon: <Wine className="w-8 h-8" />,
      title: 'Cave à Vins',
      description: 'Une sélection exclusive de vins locaux et internationaux.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Salles de Conférence',
      description: 'Espaces modernes pour vos réunions et événements.'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          <p className="text-xl text-gray-600">
            Découvrez nos installations et services premium pour un séjour inoubliable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-gold-600 mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;