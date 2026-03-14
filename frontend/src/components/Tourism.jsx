import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { tourismSpots } from '../utils/mockData';

const Tourism = () => {
  return (
    <section id="tourisme" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Découvrez Carcassonne et sa région
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explorez les trésors de l'Aude : patrimoine, nature et gastronomie
          </p>
          <div className="w-24 h-1 bg-[#6B8E23] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Tourism Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {tourismSpots.map((spot, index) => (
            <Card 
              key={spot.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{spot.name}</h3>
                  <div className="flex items-center space-x-2 text-white/90">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{spot.distance}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  {spot.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-[#6B8E23] to-[#556B1E] text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Notre emplacement</h3>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <p>Lauraguel, 11300 - Proche de Carcassonne, Occitanie</p>
                </div>
              </div>
              <div className="relative h-96 bg-gray-200">
                {/* Basic embedded map - API key can be added later */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92589.09853655516!2d2.2117934!3d43.2128872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae2bbd4d08e9f1%3A0x406f69c2f41f7f0!2sCarcassonne%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Lauraguel près de Carcassonne"
                ></iframe>
                {/* Overlay for future API key integration */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-xs">
                  <h4 className="font-semibold text-gray-900 mb-2">Distances</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between">
                      <span>Cité de Carcassonne</span>
                      <span className="font-semibold">12 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Aéroport de Carcassonne</span>
                      <span className="font-semibold">15 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Gare de Carcassonne</span>
                      <span className="font-semibold">14 km</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Canal du Midi</span>
                      <span className="font-semibold">18 km</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Tourism;
