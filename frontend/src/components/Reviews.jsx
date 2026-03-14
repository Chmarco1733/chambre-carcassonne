import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { reviews } from '../utils/mockData';

const Reviews = () => {
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <section id="avis" className="py-20 bg-gradient-to-br from-[#F5F5DC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Avis de nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ce que disent nos hôtes de leur séjour
          </p>
          <div className="w-24 h-1 bg-[#6B8E23] mx-auto mt-6 rounded-full"></div>
          
          {/* Overall Rating */}
          <div className="mt-8 inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-1 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#FFD700] text-[#FFD700]" />
              ))}
            </div>
            <div className="border-l pl-4">
              <p className="text-2xl font-bold text-gray-900">5.0</p>
              <p className="text-sm text-gray-600">{reviews.length} avis</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-10 w-10 text-[#6B8E23] opacity-20" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-4 pt-4 border-t">
                  <Avatar className="h-12 w-12 bg-[#6B8E23]">
                    <AvatarFallback className="text-white font-semibold">
                      {getInitials(review.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.location}</p>
                    <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-[#6B8E23] mb-2">100%</div>
            <p className="text-gray-700 font-medium">Avis positifs</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-[#E2725B] mb-2">500+</div>
            <p className="text-gray-700 font-medium">Séjours réalisés</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-[#6B8E23] mb-2">95%</div>
            <p className="text-gray-700 font-medium">Clients qui reviennent</p>
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

export default Reviews;
