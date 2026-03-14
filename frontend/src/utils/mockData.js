// Mock data pour le site chambre-carcassonne.fr

export const images = {
  hero: 'https://images.unsplash.com/photo-1719396727280-1972257abe18?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxDYXJjYXNzb25uZSUyMG1lZGlldmFsfGVufDB8fHx8MTc3MzQ1NjkxMnww&ixlib=rb-4.1.0&q=85',
  heroSecondary: 'https://images.unsplash.com/photo-1580513860129-dee8825dfe44?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwzfHxDYXJjYXNzb25uZSUyMG1lZGlldmFsfGVufDB8fHx8MTc3MzQ1NjkxMnww&ixlib=rb-4.1.0&q=85',
  carcassonne: 'https://images.unsplash.com/photo-1588278183316-7c7a88cc683d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwyfHxDYXJjYXNzb25uZSUyMG1lZGlldmFsfGVufDB8fHx8MTc3MzQ1NjkxMnww&ixlib=rb-4.1.0&q=85',
  canalDuMidi: 'https://images.unsplash.com/photo-1645390841042-77720e06e2b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxDYW5hbCUyMGR1JTIwTWlkaXxlbnwwfHx8fDE3NzM0NTY5MTh8MA&ixlib=rb-4.1.0&q=85',
  vineyard: 'https://images.unsplash.com/photo-1717240049346-b6a9f43f4e1c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHxGcmVuY2glMjB2aW5leWFyZHxlbnwwfHx8fDE3NzM0NTY5MjF8MA&ixlib=rb-4.1.0&q=85',
  vineyardSecondary: 'https://images.unsplash.com/photo-1678784845141-ad88424b6202?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxGcmVuY2glMjB2aW5leWFyZHxlbnwwfHx8fDE3NzM0NTY5MjF8MA&ixlib=rb-4.1.0&q=85',
  countryside: 'https://images.unsplash.com/photo-1729799635070-cd0c54160d9c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxGcmVuY2glMjBjb3VudHJ5c2lkZXxlbnwwfHx8fDE3NzM0NTY5MjZ8MA&ixlib=rb-4.1.0&q=85',
  countrysideSecondary: 'https://images.unsplash.com/photo-1560706834-afe1ba5d6737?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxGcmVuY2glMjBjb3VudHJ5c2lkZXxlbnwwfHx8fDE3NzM0NTY5MjZ8MA&ixlib=rb-4.1.0&q=85',
  countrysideTertiary: 'https://images.unsplash.com/photo-1573031522107-b9447e67479c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxGcmVuY2glMjBjb3VudHJ5c2lkZXxlbnwwfHx8fDE3NzM0NTY5MjZ8MA&ixlib=rb-4.1.0&q=85'
};

export const rooms = [
  {
    id: 1,
    name: 'Chambre Vignoble',
    description: 'Chambre spacieuse avec vue sur les vignobles environnants. Décoration authentique alliant charme traditionnel et confort moderne.',
    capacity: '2 personnes',
    price: 95,
    image: 'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBiZWRyb29tfGVufDB8fHx8MTc3MzQ1NjkxNXww&ixlib=rb-4.1.0&q=85',
    amenities: ['wifi', 'bathroom', 'breakfast', 'parking', 'ac'],
    available: true
  },
  {
    id: 2,
    name: 'Chambre Cité',
    description: 'Chambre élégante offrant une atmosphère paisible et relaxante. Parfaite pour un séjour romantique près de Carcassonne.',
    capacity: '2 personnes',
    price: 110,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tfGVufDB8fHx8MTc3MzQ1NjkxNXww&ixlib=rb-4.1.0&q=85',
    amenities: ['wifi', 'bathroom', 'breakfast', 'parking', 'ac', 'balcony'],
    available: true
  },
  {
    id: 3,
    name: 'Suite Familiale',
    description: 'Suite spacieuse pouvant accueillir jusqu\'à 4 personnes. Idéale pour les familles souhaitant découvrir la région de Carcassonne.',
    capacity: '4 personnes',
    price: 150,
    image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    amenities: ['wifi', 'bathroom', 'breakfast', 'parking', 'ac', 'kitchen'],
    available: true
  }
];

export const amenitiesIcons = {
  wifi: { label: 'Wi-Fi gratuit', icon: 'Wifi' },
  bathroom: { label: 'Salle de bain privée', icon: 'Bath' },
  breakfast: { label: 'Petit-déjeuner inclus', icon: 'Coffee' },
  parking: { label: 'Parking gratuit', icon: 'Car' },
  ac: { label: 'Climatisation', icon: 'Wind' },
  balcony: { label: 'Balcon', icon: 'Home' },
  kitchen: { label: 'Kitchenette', icon: 'UtensilsCrossed' }
};

export const reviews = [
  {
    id: 1,
    name: 'Sophie Martin',
    location: 'Paris, France',
    rating: 5,
    date: 'Novembre 2024',
    comment: 'Un séjour magnifique ! La chambre était impeccable, le petit-déjeuner délicieux et l\'accueil chaleureux. Parfait pour visiter la Cité de Carcassonne.'
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    location: 'Lyon, France',
    rating: 5,
    date: 'Octobre 2024',
    comment: 'Excellent rapport qualité-prix. L\'emplacement est idéal, au calme tout en étant proche de Carcassonne. Nous recommandons vivement !'
  },
  {
    id: 3,
    name: 'Emma & Lucas',
    location: 'Toulouse, France',
    rating: 5,
    date: 'Septembre 2024',
    comment: 'Parfait pour un week-end romantique. La chambre avec vue sur les vignobles est un vrai coup de cœur. Les propriétaires sont adorables.'
  },
  {
    id: 4,
    name: 'Marie Leclerc',
    location: 'Bordeaux, France',
    rating: 5,
    date: 'Août 2024',
    comment: 'Une adresse à retenir ! Bien mieux qu\'un hôtel impersonnel. Le cadre est authentique et reposant. Idéal pour découvrir la région.'
  }
];

export const tourismSpots = [
  {
    id: 1,
    name: 'Cité Médiévale de Carcassonne',
    description: 'Classée au patrimoine mondial de l\'UNESCO, la Cité médiévale de Carcassonne est une forteresse spectaculaire datant du Moyen Âge. À seulement 15 minutes de notre chambre d\'hôtes.',
    distance: '12 km - 15 min',
    image: images.carcassonne
  },
  {
    id: 2,
    name: 'Canal du Midi',
    description: 'Magnifique canal historique parfait pour des balades à vélo ou des promenades paisibles. Découvrez les écluses pittoresques et la beauté naturelle de l\'Aude.',
    distance: '18 km - 20 min',
    image: images.canalDuMidi
  },
  {
    id: 3,
    name: 'Vignobles de l\'Aude',
    description: 'Partez à la découverte des vignobles réputés de la région. Dégustations de vins locaux et visites de domaines viticoles disponibles toute l\'année.',
    distance: '5 km - 10 min',
    image: images.vineyard
  },
  {
    id: 4,
    name: 'Randonnées & Nature',
    description: 'Profitez de nombreux sentiers de randonnée dans la campagne environnante. Paysages magnifiques, villages pittoresques et nature préservée.',
    distance: 'À proximité',
    image: images.countryside
  }
];

export const contactInfo = {
  phone: '+33 4 68 XX XX XX',
  email: 'contact@chambre-carcassonne.fr',
  address: 'Lauraguel, 11300, Occitanie, France',
  coordinates: {
    lat: 43.2470,
    lng: 2.1310
  }
};

// Mock bookings data (simule des réservations existantes)
export const mockBookings = [
  {
    id: 1,
    roomId: 1,
    guestName: 'Jean Dupont',
    email: 'jean.dupont@email.fr',
    phone: '+33 6 12 34 56 78',
    checkIn: '2024-12-20',
    checkOut: '2024-12-22',
    guests: 2,
    totalPrice: 190,
    status: 'confirmed',
    message: 'Arrivée prévue en fin d\'après-midi'
  },
  {
    id: 2,
    roomId: 2,
    guestName: 'Marie Laurent',
    email: 'marie.laurent@email.fr',
    phone: '+33 6 23 45 67 89',
    checkIn: '2024-12-25',
    checkOut: '2024-12-27',
    guests: 2,
    totalPrice: 220,
    status: 'pending',
    message: ''
  }
];

// Dates déjà réservées (pour le calendrier)
export const bookedDates = [
  { start: new Date('2024-12-20'), end: new Date('2024-12-22'), roomId: 1 },
  { start: new Date('2024-12-25'), end: new Date('2024-12-27'), roomId: 2 },
  { start: new Date('2024-12-28'), end: new Date('2024-12-30'), roomId: 1 },
  { start: new Date('2025-01-05'), end: new Date('2025-01-08'), roomId: 3 }
];
