import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Collecte des données</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous collectons les données personnelles suivantes lors de votre réservation :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Dates de séjour</li>
              <li>Nombre de voyageurs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Utilisation des données</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vos données personnelles sont utilisées uniquement pour :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Gérer votre réservation</li>
              <li>Vous envoyer une confirmation de réservation</li>
              <li>Vous contacter en cas de besoin concernant votre séjour</li>
              <li>Améliorer nos services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Conservation des données</h2>
            <p className="text-gray-700 leading-relaxed">
              Vos données personnelles sont conservées pendant la durée nécessaire à la gestion de votre 
              réservation, puis archivées conformément aux obligations légales (3 ans pour les données comptables).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Vos droits</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Droit d'accès :</strong> vous pouvez demander l'accès à vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> vous pouvez demander la correction de vos données</li>
              <li><strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> vous pouvez demander le transfert de vos données</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Pour exercer ces droits, contactez-nous à : <strong>contact@chambre-carcassonne.fr</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Sécurité</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour 
              protéger vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, 
              la divulgation, l'altération ou la destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Notre site utilise des cookies pour améliorer votre expérience. Ces cookies ne collectent 
              aucune information personnelle identifiable. Vous pouvez désactiver les cookies dans les 
              paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Les modifications seront publiées sur cette page avec la date de dernière mise à jour.
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Dernière mise à jour :</strong> Janvier 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
