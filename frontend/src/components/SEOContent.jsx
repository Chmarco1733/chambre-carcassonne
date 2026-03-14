import React from 'react';
import { MapPin, Award, Heart, Sparkles } from 'lucide-react';

const SEOContent = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F5DC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chambre d'hôtes près de Carcassonne – Séjour à Lauraguel
          </h2>
          <div className="w-24 h-1 bg-[#6B8E23] mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#6B8E23] first-letter:mr-2 first-letter:float-left">
              Bienvenue dans notre chambre d'hôtes située à <strong>Lauraguel, près de Carcassonne</strong>, au cœur de l'Aude en Occitanie.
            </p>
            <p>
              Notre <strong>maison d'hôtes</strong> vous accueille dans un cadre calme et authentique, idéal pour découvrir la célèbre <strong>Cité médiévale de Carcassonne</strong>, classée au patrimoine mondial de l'UNESCO.
            </p>
            <p>
              Que vous recherchiez une <strong>chambre d'hôtes à Carcassonne</strong>, un <strong>hôtel proche de Carcassonne</strong>, une alternative à <strong>Airbnb à Carcassonne</strong>, ou un <strong>hébergement touristique dans l'Aude</strong>, notre maison d'hôtes est l'endroit idéal pour un séjour reposant.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MapPin className="h-10 w-10 text-[#6B8E23] mb-3" />
              <h3 className="font-bold text-lg mb-2">Emplacement Idéal</h3>
              <p className="text-gray-600 text-sm">À quelques minutes de Carcassonne</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Award className="h-10 w-10 text-[#E2725B] mb-3" />
              <h3 className="font-bold text-lg mb-2">UNESCO</h3>
              <p className="text-gray-600 text-sm">Proche de la Cité médiévale</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Heart className="h-10 w-10 text-[#E2725B] mb-3" />
              <h3 className="font-bold text-lg mb-2">Accueil Chaleureux</h3>
              <p className="text-gray-600 text-sm">Service personnalisé</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Sparkles className="h-10 w-10 text-[#6B8E23] mb-3" />
              <h3 className="font-bold text-lg mb-2">Confort Premium</h3>
              <p className="text-gray-600 text-sm">Chambres tout équipées</p>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              Située à seulement quelques minutes de <strong>Carcassonne</strong>, notre chambre d'hôtes vous permet de profiter de :
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              <li className="flex items-start space-x-3">
                <span className="text-[#6B8E23] text-2xl">•</span>
                <span>La <strong>Cité de Carcassonne</strong>, joyau médiéval</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#6B8E23] text-2xl">•</span>
                <span>Le <strong>Canal du Midi</strong>, patrimoine mondial</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#6B8E23] text-2xl">•</span>
                <span>Les <strong>vignobles de l'Aude</strong></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#6B8E23] text-2xl">•</span>
                <span>Les <strong>paysages du sud de la France</strong></span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed bg-[#F5F5DC] p-6 rounded-xl border-l-4 border-[#6B8E23]">
              Profitez d'un séjour confortable dans une <strong>chambre chaleureuse</strong>, avec <strong>petit déjeuner</strong> et <strong>accueil personnalisé</strong>. Notre établissement est une alternative parfaite aux hôtels traditionnels et aux locations Airbnb, offrant une expérience authentique de la région.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
