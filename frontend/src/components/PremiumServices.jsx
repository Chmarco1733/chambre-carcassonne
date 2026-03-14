import React from 'react';
import { Car, Waves, Sparkles, Flower2, Check } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { premiumServices } from '../utils/mockData';

const iconComponents = {
  Car,
  Waves,
  Sparkles,
  Flower2
};

const PremiumServices = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F5DC] via-white to-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des expériences uniques pour rendre votre séjour inoubliable
          </p>
          <div className="w-24 h-1 bg-[#E2725B] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {premiumServices.map((service, index) => {
            const IconComponent = iconComponents[service.icon];
            return (
              <Card 
                key={service.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInScale 0.6s ease-out forwards'
                }}
              >
                {/* Service Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                      <IconComponent className="h-8 w-8 text-[#6B8E23]" />
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-6 right-6">
                    <Badge className={`${
                      service.price === 'Inclus' || service.price.includes('Inclus')
                        ? 'bg-[#6B8E23]' 
                        : 'bg-[#E2725B]'
                    } text-white px-4 py-2 text-sm font-semibold`}>
                      {service.price}
                    </Badge>
                  </div>

                  {/* Service Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Service Details */}
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Check className="h-5 w-5 text-[#6B8E23] mr-2" />
                      Points forts :
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="h-2 w-2 bg-[#E2725B] rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#6B8E23] to-[#556B1E] rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Envie de vivre une expérience unique ?
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Réservez dès maintenant et profitez de tous nos services pour un séjour mémorable près de Carcassonne
          </p>
          <button
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#6B8E23] hover:bg-[#F5F5DC] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Réserver maintenant
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default PremiumServices;
