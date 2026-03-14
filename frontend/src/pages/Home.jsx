import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SEOContent from '../components/SEOContent';
import Rooms from '../components/Rooms';
import BookingSystem from '../components/BookingSystem';
import Tourism from '../components/Tourism';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/sonner';

const Home = () => {
  useEffect(() => {
    // Set page title and meta for SEO
    document.title = 'Chambre d\'hôtes Carcassonne | Hôtel proche Carcassonne | chambre-carcassonne.fr';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Chambre d\'hôtes près de Carcassonne à Lauraguel. Séjournez au calme à quelques minutes de la Cité médiévale. Réservation en ligne facile. Alternative idéale à hôtel ou Airbnb à Carcassonne.'
      );
    }

    // Add keywords meta if not exists
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'chambre d\'hôtes carcassonne, hotel carcassonne, airbnb carcassonne, logement carcassonne, hébergement carcassonne, chambre carcassonne, séjour carcassonne'
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SEOContent />
        <Rooms />
        <BookingSystem />
        <Tourism />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Home;
