import React, { useState } from 'react';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { images } from '../utils/mockData';

const Hero = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2
  });

  const handleQuickBooking = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image avec overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero}
          alt="Cité médiévale de Carcassonne"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
            Chambre d'hôtes près de Carcassonne
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
            Séjournez à Lauraguel, au calme, à seulement quelques minutes de la Cité Médiévale de Carcassonne
          </p>
        </div>

        {/* Quick Booking Form */}
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 mb-8 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Date d'arrivée
              </label>
              <Input
                type="date"
                value={bookingData.checkIn}
                onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                className="w-full"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Date de départ
              </label>
              <Input
                type="date"
                value={bookingData.checkOut}
                onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                className="w-full"
                min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="inline h-4 w-4 mr-1" />
                Voyageurs
              </label>
              <Input
                type="number"
                min="1"
                max="6"
                value={bookingData.guests}
                onChange={(e) => setBookingData({ ...bookingData, guests: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
            <Button
              onClick={handleQuickBooking}
              className="bg-[#6B8E23] hover:bg-[#556B1E] text-white h-11 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Vérifier les disponibilités
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleQuickBooking}
            size="lg"
            className="bg-[#E2725B] hover:bg-[#D35E47] text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Réserver maintenant
          </Button>
          <Button
            onClick={() => document.getElementById('chambres')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            variant="outline"
            className="bg-white/90 hover:bg-white text-gray-900 border-2 border-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Découvrir nos chambres
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
