# PRD - Chambre d'hôtes Carcassonne

**Date de création:** 14 Janvier 2025  
**Dernière mise à jour:** 14 Janvier 2025

## Vue d'ensemble

Site web professionnel pour une chambre d'hôtes près de Carcassonne (Lauraguel, 11300), optimisé pour le SEO et conçu pour attirer des visiteurs recherchant un hébergement dans la région de Carcassonne.

---

## Problème initial

Créer un site web professionnel SEO-optimisé pour une chambre d'hôtes avec :
- Design moderne style boutique hotel/Airbnb luxury
- Système de réservation intégré
- Gestion des réservations
- Notifications automatiques
- Intégration Google Maps
- Optimisation SEO pour mots-clés locaux

---

## Personas utilisateurs

1. **Touristes visitant Carcassonne**
   - Recherchent un hébergement authentique près de la Cité médiévale
   - Utilisent Google pour chercher "chambre d'hôtes Carcassonne", "hôtel Carcassonne"

2. **Couples**
   - Cherchent un séjour romantique dans un cadre paisible
   - Valorisent le confort et l'authenticité

3. **Voyageurs alternatifs Airbnb**
   - Préfèrent une expérience personnalisée
   - Recherchent des alternatives aux plateformes de location classiques

---

## Exigences fonctionnelles

### ✅ Phase 1 - Frontend avec Mock Data (TERMINÉ - 14/01/2025)

**Sections implémentées:**
1. **Header** - Navigation sticky avec menu mobile responsive
2. **Hero Section** - Grande image de Carcassonne avec formulaire de réservation rapide
3. **SEO Content Section** - Texte optimisé pour référencement naturel
4. **Rooms Section** - 3 chambres avec détails (Vignoble, Cité, Suite Familiale)
5. **Booking System** - Système de réservation complet avec calendrier interactif
6. **Tourism Section** - Points d'intérêt + Google Maps intégré
7. **Reviews Section** - Avis clients avec notes 5 étoiles
8. **Contact Section** - Formulaire + informations de contact
9. **Footer** - Navigation, contact, réseaux sociaux, SEO keywords

**Fonctionnalités frontend:**
- Navigation smooth scroll entre sections
- Calendrier interactif pour sélection de dates
- Calcul automatique du prix total
- Détection des dates déjà réservées (mock)
- Formulaires de réservation et contact avec validation
- Toasts de confirmation (Sonner)
- Design responsive (desktop, tablet, mobile)
- Menu mobile hamburger

**Design:**
- Palette: Beige (#F5F5DC), Olive Green (#6B8E23), Terracotta (#E2725B), White
- Style boutique hotel/luxury
- Images professionnelles de Carcassonne (12 images Unsplash/Pexels)
- Animations et transitions smooth
- Composants Shadcn UI

**SEO:**
- Meta title et description optimisés
- Mots-clés: chambre d'hôtes carcassonne, hotel carcassonne, airbnb carcassonne
- Structure sémantique HTML5
- Google Maps basique intégré

---

## Phase 2 - Backend Development (À VENIR)

### API Endpoints à créer

**Réservations:**
```
POST   /api/bookings           - Créer une nouvelle réservation
GET    /api/bookings           - Liste des réservations (admin)
GET    /api/bookings/:id       - Détails d'une réservation
PUT    /api/bookings/:id       - Modifier une réservation
DELETE /api/bookings/:id       - Annuler une réservation
GET    /api/availability       - Vérifier disponibilités par dates
```

**Chambres:**
```
GET    /api/rooms              - Liste des chambres
GET    /api/rooms/:id          - Détails d'une chambre
PUT    /api/rooms/:id          - Modifier une chambre (admin)
```

**Contact:**
```
POST   /api/contact            - Envoyer un message de contact
```

**Notifications:**
```
POST   /api/notifications/email - Envoyer email de confirmation
POST   /api/notifications/sms   - Envoyer SMS de confirmation (optionnel)
```

### Modèles de données

**Booking:**
```javascript
{
  id: string,
  roomId: string,
  guestName: string,
  email: string,
  phone: string,
  checkIn: date,
  checkOut: date,
  guests: number,
  totalPrice: number,
  status: 'pending' | 'confirmed' | 'cancelled',
  message: string,
  createdAt: date
}
```

**Room:**
```javascript
{
  id: string,
  name: string,
  description: string,
  capacity: string,
  price: number,
  image: string,
  amenities: string[],
  available: boolean
}
```

### Intégrations à implémenter

1. **Gmail API** - Pour notifications email
2. **Google Maps API** - Pour carte interactive avancée
3. **MongoDB** - Base de données pour réservations

---

## Données Mock actuelles

**Fichier:** `/app/frontend/src/utils/mockData.js`

- 12 images professionnelles (Carcassonne, chambres, tourisme)
- 3 chambres modèles
- 4 avis clients
- 4 points touristiques
- 2 réservations exemples
- Dates réservées pour démonstration calendrier

---

## Architecture technique

### Frontend
- **Framework:** React 19
- **Routing:** React Router DOM v7
- **UI Components:** Shadcn UI (Radix)
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form + Zod
- **Date Management:** date-fns v4 + react-day-picker
- **Notifications:** Sonner

### Backend (À développer)
- **Framework:** FastAPI
- **Database:** MongoDB (Motor)
- **Email:** Gmail API
- **Authentication:** JWT (pour admin dashboard)

---

## Prochaines étapes prioritaires

### P0 - Backend essentiel
1. Créer modèles MongoDB pour Bookings et Rooms
2. Implémenter endpoints CRUD réservations
3. Système de vérification des disponibilités
4. Intégration Gmail pour notifications email

### P1 - Admin Dashboard
1. Page d'administration pour gérer réservations
2. Calendrier vue admin
3. Gestion des chambres (modifier prix, disponibilité)

### P2 - Améliorations
1. Paiement en ligne (Stripe)
2. Google Maps API avancée
3. Multi-langue (EN/FR)
4. Galerie photos par chambre
5. Blog/actualités

---

## Mots-clés SEO cibles

- chambre d'hôtes carcassonne
- hotel carcassonne  
- airbnb carcassonne
- logement carcassonne
- hébergement carcassonne
- bed and breakfast carcassonne
- maison d'hôtes lauraguel
- séjour près cité médiévale

---

## Notes techniques

- Images modifiables via `/app/frontend/src/utils/mockData.js`
- Google Maps : carte basique intégrée, API key à ajouter plus tard dans .env
- Toutes les données chambres/avis modifiables dans mockData.js
- Les dates réservées sont simulées pour démonstration
