import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informations légales</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Nom de l'établissement :</strong> Chambre d'hôtes Carcassonne<br />
              <strong>Adresse :</strong> Lauraguel, 11300, Occitanie, France<br />
              <strong>Téléphone :</strong> +33 4 68 XX XX XX<br />
              <strong>Email :</strong> contact@chambre-carcassonne.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hébergement du site</h2>
            <p className="text-gray-700 leading-relaxed">
              Le site chambre-carcassonne.fr est hébergé par Hostinger.<br />
              Vous pouvez contacter l'hébergeur pour toute question technique.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété exclusive 
              de Chambre d'hôtes Carcassonne, sauf mention contraire. Toute reproduction, même partielle, 
              est interdite sans autorisation préalable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Protection des données personnelles</h2>
            <p className="text-gray-700 leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un 
              droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer 
              ce droit, contactez-nous à : contact@chambre-carcassonne.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site utilise des cookies pour améliorer votre expérience de navigation. En continuant 
              à utiliser ce site, vous acceptez l'utilisation de cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
