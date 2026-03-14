import React from 'react';
import { Wifi, Bath, Coffee, Car, Wind, Home, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { rooms, amenitiesIcons } from '../utils/mockData';

const iconComponents = {
  Wifi,
  Bath,
  Coffee,
  Car,
  Wind,
  Home,
  UtensilsCrossed
};

const Rooms = () => {
  const handleRoomBooking = (roomId) => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Store selected room in sessionStorage
      sessionStorage.setItem('selectedRoomId', roomId);
    }
  };

  return (
    <section id="chambres" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Chambres
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos chambres élégantes et confortables, chacune avec son caractère unique
          </p>
          <div className="w-24 h-1 bg-[#6B8E23] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => {
            return (
              <Card 
                key={room.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Room Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#6B8E23] text-white px-3 py-1">
                      {room.available ? 'Disponible' : 'Réservé'}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {room.name}
                    </CardTitle>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-[#6B8E23]">{room.price}€</p>
                      <p className="text-sm text-gray-500">par nuit</p>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {room.capacity}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Équipements :</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity) => {
                        const amenityInfo = amenitiesIcons[amenity];
                        const IconComponent = iconComponents[amenityInfo.icon];
                        return (
                          <div key={amenity} className="flex items-center space-x-2 text-gray-600">
                            <IconComponent className="h-4 w-4 text-[#6B8E23]" />
                            <span className="text-sm">{amenityInfo.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Book Button */}
                  <Button
                    onClick={() => handleRoomBooking(room.id)}
                    className="w-full bg-[#E2725B] hover:bg-[#D35E47] text-white transition-all duration-300 hover:scale-105"
                  >
                    Voir disponibilité
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
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

export default Rooms;
