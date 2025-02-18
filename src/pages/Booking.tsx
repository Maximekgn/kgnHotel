import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, CreditCard } from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Réservation</h1>
          <p className="text-xl text-gray-600">
            Réservez votre séjour à l'Hôtel Zindnaaba
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            <div className="flex items-center">
              <div className={`rounded-full h-10 w-10 flex items-center justify-center ${
                step >= 1 ? 'bg-gold-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                <Calendar className="h-5 w-5" />
              </div>
              <span className="ml-2 font-medium">Dates</span>
            </div>
            <div className="flex items-center">
              <div className={`rounded-full h-10 w-10 flex items-center justify-center ${
                step >= 2 ? 'bg-gold-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                <Users className="h-5 w-5" />
              </div>
              <span className="ml-2 font-medium">Détails</span>
            </div>
            <div className="flex items-center">
              <div className={`rounded-full h-10 w-10 flex items-center justify-center ${
                step >= 3 ? 'bg-gold-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                <CreditCard className="h-5 w-5" />
              </div>
              <span className="ml-2 font-medium">Paiement</span>
            </div>
          </div>

          {/* Step 1: Dates */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="check-in" className="block text-sm font-medium text-gray-700">
                  Date d'arrivée
                </label>
                <input
                  type="date"
                  id="check-in"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              
              <div>
                <label htmlFor="check-out" className="block text-sm font-medium text-gray-700">
                  Date de départ
                </label>
                <input
                  type="date"
                  id="check-out"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              
              <button
                onClick={() => setStep(2)}
                className="w-full bg-gold-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-gold-700 transition"
              >
                Continuer
              </button>
            </motion.div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="room-type" className="block text-sm font-medium text-gray-700">
                  Type de chambre
                </label>
                <select
                  id="room-type"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                >
                  <option>Chambre Standard</option>
                  <option>Suite Deluxe</option>
                  <option>Suite Présidentielle</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                  Nombre de personnes
                </label>
                <input
                  type="number"
                  id="guests"
                  min="1"
                  max="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => setStep(1)}
                  className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition"
                >
                  Retour
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="w-full bg-gold-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-gold-700 transition"
                >
                  Continuer
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                  Numéro de carte
                </label>
                <input
                  type="text"
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                    Date d'expiration
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    placeholder="MM/YY"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    placeholder="123"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                  />
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition"
                >
                  Retour
                </button>
                <button
                  onClick={() => alert('Réservation confirmée!')}
                  className="w-full bg-gold-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-gold-700 transition"
                >
                  Confirmer la réservation
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;