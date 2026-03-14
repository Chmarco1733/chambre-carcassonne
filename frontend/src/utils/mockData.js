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
  countrysideTertiary: 'https://images.unsplash.com/photo-1573031522107-b9447e67479c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxGcmVuY2glMjBjb3VudHJ5c2lkZXxlbnwwfHx8fDE3NzM0NTY5MjZ8MA&ixlib=rb-4.1.0&q=85',
  // Premium services images
  citroen2cv: 'https://images.unsplash.com/photo-1627756355834-e8f8e0b0de17',
  citroen2cvCountryside: 'https://images.unsplash.com/photo-1729799635070-cd0c54160d9c',
  pool: 'https://images.unsplash.com/photo-1729719022559-34978ede47d1',
  poolSecondary: 'https://images.unsplash.com/photo-1661333587575-25c87c14f398',
  hammam: 'https://images.unsplash.com/photo-1760564019103-81cd3c225cd1',
  hammamSecondary: 'https://images.unsplash.com/photo-1604161926875-bb58f9a0d81b',
  zenGarden: 'https://images.unsplash.com/photo-1770057728274-50fc5130a9f2',
  koiPond: 'https://images.unsplash.com/photo-1759495381644-be4b35d59aef'
};

// Pricing seasons
export const seasons = {
  lowSeason: {
    name: 'Basse saison',
    months: [1, 2, 3, 11, 12], // Janvier, Février, Mars, Novembre, Décembre
    discount: 0.85 // 15% de réduction
  },
  midSeason: {
    name: 'Moyenne saison',
    months: [4, 5, 9, 10], // Avril, Mai, Septembre, Octobre
    discount: 1.0 // Prix normal
  },
  highSeason: {
    name: 'Haute saison',
    months: [6, 7, 8], // Juin, Juillet, Août
    discount: 1.2 // +20%
  }
};

// Function to get season by month
export const getSeasonByMonth = (month) => {
  if (seasons.lowSeason.months.includes(month)) return seasons.lowSeason;
  if (seasons.highSeason.months.includes(month)) return seasons.highSeason;
  return seasons.midSeason;
};

// Function to calculate price based on season
export const calculateSeasonalPrice = (basePrice, month) => {
  const season = getSeasonByMonth(month);
  return Math.round(basePrice * season.discount);
};

export const rooms = [
  {
    id: 1,
    name: 'Chambre Vignoble',
    description: 'Chambre spacieuse avec vue sur les vignobles environnants. Décoration authentique alliant charme traditionnel et confort moderne.',
    capacity: '2 personnes',
    basePrice: 95,
    image: 'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBiZWRyb29tfGVufDB8fHx8MTc3MzQ1NjkxNXww&ixlib=rb-4.1.0&q=85',
    amenities: ['wifi', 'bathroom', 'breakfast', 'parking', 'ac', 'poolAccess'],
    available: true
  },
  {
    id: 2,
    name: 'Chambre Cité',
    description: 'Chambre élégante offrant une atmosphère paisible et relaxante. Parfaite pour un séjour romantique près de Carcassonne.',
    capacity: '2 personnes',
    basePrice: 110,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tfGVufDB8fHx8MTc3MzQ1NjkxNXww&ixlib=rb-4.1.0&q=85',
    amenities: ['wifi', 'bathroom', 'breakfast', 'parking', 'ac', 'balcony', 'poolAccess'],
    available: true
  },
  {
    id: 3,
    name: 'Suite Familiale',
    description: 'Suite spacieuse pouvant accueillir jusqu\'à 4 personnes avec salle de bain équipée d\'un hammam. Idéale pour les familles souhaitant découvrir la région de Carcassonne.',
    capacity: '4 personnes',
    basePrice: 150,
    image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    amenities: ['wifi', 'bathroom', 'breakfast', 'parking', 'ac', 'kitchen', 'hammam', 'poolAccess'],
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
  kitchen: { label: 'Kitchenette', icon: 'UtensilsCrossed' },
  hammam: { label: 'Hammam privatif', icon: 'Sparkles' },
  poolAccess: { label: 'Accès piscine', icon: 'Waves' }
};

// Premium services / "Nos Plus"
export const premiumServices = [
  {
    id: 1,
    name: 'Excursions en 2CV Citroën',
    description: 'Découvrez la région de Carcassonne et ses environs à bord d\'une authentique 2CV Citroën. Balade guidée dans les vignobles, villages médiévaux et paysages pittoresques de l\'Aude.',
    image: images.citroen2cv,
    icon: 'Car',
    features: [
      'Voiture vintage authentique',
      'Chauffeur guide expérimenté',
      'Circuits personnalisés',
      'Découverte des vignobles',
      'Villages médiévaux'
    ],
    price: 'Sur demande'
  },
  {
    id: 2,
    name: 'Piscine extérieure chauffée',
    description: 'Profitez de notre magnifique piscine extérieure de 8m x 4m, nichée dans un jardin méditerranéen. Transats et parasols à disposition pour des moments de détente absolue.',
    image: images.pool,
    icon: 'Waves',
    features: [
      'Dimensions: 8m x 4m',
      'Eau chauffée en saison',
      'Transats et parasols',
      'Jardin méditerranéen',
      'Vue dégagée sur la campagne'
    ],
    price: 'Inclus'
  },
  {
    id: 3,
    name: 'Hammam privatif',
    description: 'La Suite Familiale dispose d\'un hammam privatif dans sa salle de bain. Moment de détente et de bien-être garanti après vos visites touristiques.',
    image: images.hammam,
    icon: 'Sparkles',
    features: [
      'Hammam privatif',
      'Suite Familiale uniquement',
      'Produits de soin naturels',
      'Serviettes moelleuses',
      'Ambiance zen'
    ],
    price: 'Inclus (Suite)'
  },
  {
    id: 4,
    name: 'Jardin zen & Bassin à carpes Koi',
    description: 'Ressourcez-vous dans notre jardin zen japonais avec son bassin de carpes Koi. Un havre de paix pour méditer et se reconnecter avec la nature.',
    image: images.zenGarden,
    icon: 'Flower2',
    features: [
      'Jardin japonais authentique',
      'Bassin avec carpes Koi',
      'Espace méditation',
      'Végétation zen',
      'Accès libre'
    ],
    price: 'Inclus'
  }
];

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
