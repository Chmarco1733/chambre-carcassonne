import React, { useState } from 'react';
import { Wifi, Bath, Coffee, Car, Wind, Home, UtensilsCrossed, ArrowRight, Sparkles, Waves, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { rooms, amenitiesIcons, calculateSeasonalPrice, getSeasonByMonth } from '../utils/mockData';

const iconComponents = {
  Wifi,
  Bath,
  Coffee,
  Car,
  Wind,
  Home,
  UtensilsCrossed,
  Sparkles,
  Waves
};

const Rooms = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const handleRoomBooking = (roomId) => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      sessionStorage.setItem('selectedRoomId', roomId);
    }
  };

  const currentSeason = getSeasonByMonth(selectedMonth);

  const months = [
    { value: 1, label: 'Janvier' },
    { value: 2, label: 'Février' },
    { value: 3, label: 'Mars' },
    { value: 4, label: 'Avril' },
    { value: 5, label: 'Mai' },
    { value: 6, label: 'Juin' },
    { value: 7, label: 'Juillet' },
    { value: 8, label: 'Août' },
    { value: 9, label: 'Septembre' },
    { value: 10, label: 'Octobre' },
    { value: 11, label: 'Novembre' },
    { value: 12, label: 'Décembre' }
  ];

  return (
    <section id="chambres" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Chambres
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos chambres élégantes et confortables, chacune avec son caractère unique
          </p>
          <div className="w-24 h-1 bg-[#6B8E23] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Season Selector */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Calendar className="h-5 w-5 text-[#6B8E23] flex-shrink-0" />
                <div className="flex-1">
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Voir les tarifs pour :
                  </label>
                  <Select value={selectedMonth.toString()} onValueChange={(value) => setSelectedMonth(parseInt(value))}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map(month => (
                        <SelectItem key={month.value} value={month.value.toString()}>
                          {month.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Badge className={`${
                  currentSeason.name === 'Haute saison' ? 'bg-[#E2725B]' :
                  currentSeason.name === 'Basse saison' ? 'bg-[#6B8E23]' :
                  'bg-gray-600'
                } text-white px-3 py-1 text-sm whitespace-nowrap`}>
                  {currentSeason.name}
                </Badge>
              </div>
              {currentSeason.name === 'Basse saison' && (
                <p className="text-sm text-[#6B8E23] mt-3 font-medium">
                  🎉 -15% sur tous les tarifs pendant la basse saison !
                </p>
              )}
              {currentSeason.name === 'Haute saison' && (
                <p className="text-sm text-[#E2725B] mt-3 font-medium">
                  ℹ️ Tarifs haute saison (+20%)
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => {
            const seasonalPrice = calculateSeasonalPrice(room.basePrice, selectedMonth);
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
                  {seasonalPrice !== room.basePrice && (
                    <div className="absolute top-4 left-4">
                      <Badge className={`${
                        seasonalPrice < room.basePrice ? 'bg-[#6B8E23]' : 'bg-[#E2725B]'
                      } text-white px-3 py-1 font-semibold`}>
                        {seasonalPrice < room.basePrice ? '-15%' : '+20%'}
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {room.name}
                    </CardTitle>
                    <div className="text-right">
                      {seasonalPrice !== room.basePrice && (
                        <p className="text-sm text-gray-400 line-through">{room.basePrice}€</p>
                      )}
                      <p className="text-3xl font-bold text-[#6B8E23]">{seasonalPrice}€</p>
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

        {/* Pricing Info */}
        <div className="mt-16 bg-gradient-to-r from-[#F5F5DC] to-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Tarification selon les saisons
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-[#6B8E23]">Basse saison</h4>
                <Badge className="bg-[#6B8E23] text-white">-15%</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Janvier, Février, Mars, Novembre, Décembre
              </p>
              <p className="text-xs text-gray-500">
                Profitez de tarifs avantageux pour découvrir la région en toute tranquillité
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-700">Moyenne saison</h4>
                <Badge className="bg-gray-600 text-white">Tarif normal</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Avril, Mai, Septembre, Octobre
              </p>
              <p className="text-xs text-gray-500">
                Parfait pour profiter d'un climat agréable et d'une affluence modérée
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-[#E2725B]">Haute saison</h4>
                <Badge className="bg-[#E2725B] text-white">+20%</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Juin, Juillet, Août
              </p>
              <p className="text-xs text-gray-500">
                Période estivale idéale pour profiter pleinement de la piscine et du soleil
              </p>
            </div>
          </div>
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
