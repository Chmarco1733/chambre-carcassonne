import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Home } from 'lucide-react';
import { contactInfo } from '../utils/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-[#6B8E23] rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Chambre Carcassonne</h3>
                <p className="text-sm text-gray-400">Lauraguel</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre chambre d'hôtes de charme près de Carcassonne. Séjour authentique au cœur de l'Occitanie.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('accueil')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('chambres')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Nos Chambres
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tourisme')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Découvrir la région
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('avis')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Avis clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-[#6B8E23] mt-1 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-[#6B8E23] mt-1 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#6B8E23] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {contactInfo.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-[#6B8E23] rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-[#E2725B] rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-gray-300">Horaires d'arrivée</h5>
              <p className="text-sm text-gray-400">Lun - Dim : 16h - 20h</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} chambre-carcassonne.fr - Tous droits réservés
            </p>
            <div className="flex space-x-6">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Keywords Footer */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Chambre d'hôtes Carcassonne | Hôtel Carcassonne | Airbnb Carcassonne | Logement Carcassonne | Hébergement Carcassonne | 
            Chambre Carcassonne | Séjour Carcassonne | Bed and Breakfast Carcassonne | Maison d'hôtes Aude | Lauraguel 11300
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
