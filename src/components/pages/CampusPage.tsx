import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Users, Car, Train, Bus, Wifi, Coffee, BookOpen, Monitor, Award, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CampusPageProps {
  onBack: () => void;
  campusName: string;
  onNavigateToFormation?: (formation: string) => void;
}


const CampusPage: React.FC<CampusPageProps> = ({ onBack, campusName, onNavigateToFormation }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Galeries personnalisées pour chaque campus
  const campusGalleries = {
    'Paris': [
      { src: '/images/campus/paris1.png', title: '' },
      { src: '/images/campus/paris2.png', title: '' },
      { src: '/images/campus/paris3.png', title: '' },
      { src: '/images/about/campus.png', title: '' },
      { src: '/images/campus/paris4.png', title: '' },
      { src: '/images/campus/paris5.png', title: '' }
    ],
    'Saint-Quentin en Yvelines': [
      { src: '/images/campus/sqy1.png', title: '' },
      { src: '/images/about/pedagogie.jpg', title: '' },
      { src: '/images/campus/sqy2.png', title: '' },
      { src: '/images/campus/sqy3.png', title: '' },
      { src: '/images/campus/sqy4.png', title: '' },
      { src: '/images/campus/sqy5.png', title: '' }
    ],
    'Val d\'Europe': [
      { src: '/images/campus/val2.png', title: '' },
      { src: '/images/about/pedagogie.jpg', title: '' },
      { src: '/images/about/pedagogie2.jpg', title: '' },
      { src: '/images/campus/val1.png', title: '' },
      { src: '/images/about/val2.png', title: '' },
      { src: '/images/campus/val3.png', title: '' }
    ],
    'Nice': [
      { src: '/images/campus/nice6.png', title: '' },
      { src: '/images/campus/nice2.png', title: '' },
      { src: '/images/campus/nice3.png', title: '' },
      { src: '/images/campus/nnice4.png', title: '' },
      { src: '/images/campus/nice5.png', title: '' },
      { src: '/images/campus/nice1.png', title: '' }
    ],
    'Montpellier': [
      { src: '/images/campus/mtp1.png', title: '' },
      { src: '/images/campus/mtp2.png', title: '' },
      { src: '/images/campus/mtp3.png', title: '' },
      { src: '/images/campus/mtp4.png', title: '' },
      { src: '/images/campus/mtp5.png', title: '' },
      { src: '/images/campus/mtp6.png', title: '' }
    ]
  };

  // Récupérer la galerie du campus actuel
  const currentGallery = campusGalleries[campusName] || campusGalleries['Paris'];

  // Coordonnées des campus pour la carte
  const campusCoordinates = {
    'Paris': { lat: 48.8698, lng: 2.3075 },
    'Saint-Quentin en Yvelines': { lat: 48.7833, lng: 2.0333 },
    'Val d\'Europe': { lat: 48.8547, lng: 2.7806 },
    'Lille': { lat: 50.6292, lng: 3.0573 },
    'Lyon': { lat: 45.7640, lng: 4.8357 },
    'Nice': { lat: 43.7102, lng: 7.2620 },
    'Montpellier': { lat: 43.6047, lng: 3.8767 },
    'Bordeaux': { lat: 44.8378, lng: -0.5792 }
  };

  // FAQ spécifiques par campus
  const campusFAQ = { 
    'Paris': [
      {
        question: "Le campus Paris est-il bien desservi par les transports ?",
        reponse: "Oui, notre campus parisien est idéalement situé à 2 minutes à pied de la station Reuilly Diderot (métro lignes 1 et 8) et à 5 minutes de Nation (RER A). De nombreuses lignes de bus desservent également le quartier."
      },
      {
        question: "Y a-t-il des logements étudiants près du campus Paris ?",
        reponse: "Le 12ème arrondissement offre de nombreuses options de logement étudiant. Nous pouvons vous accompagner dans vos recherches et vous orienter vers nos partenaires logement."
      },
      {
        question: "Quelles sont les opportunités de stage à Paris ?",
        reponse: "Paris concentre de nombreuses entreprises du digital, startups et agences marketing. Notre réseau de partenaires parisiens facilite l'accès aux stages et à l'alternance."
      },
      {
        question: "Le campus dispose-t-il d'une cafétéria ?",
        reponse: "Oui, notre campus parisien dispose d'une cafétéria ainsi que de nombreux restaurants et commerces à proximité immédiate."
      }
    ],
    'Saint-Quentin en Yvelines': [
      {
        question: "Comment rejoindre le campus depuis Paris ?",
        reponse: "Le campus est accessible en 30 minutes depuis Paris via le RER C (station Saint-Quentin-en-Yvelines) ou les lignes Transilien N et U. Un parking gratuit est disponible pour ceux qui viennent en voiture."
      },
      {
        question: "Y a-t-il des entreprises tech à proximité ?",
        reponse: "Saint-Quentin-en-Yvelines est une technopole majeure avec de nombreuses entreprises technologiques et sièges sociaux, offrant d'excellentes opportunités de stage et d'emploi."
      },
      {
        question: "Le campus propose-t-il un parking ?",
        reponse: "Oui, un parking gratuit est mis à disposition des étudiants, ce qui est un avantage considérable par rapport aux campus parisiens."
      },
      {
        question: "Quels sont les avantages de ce campus ?",
        reponse: "Campus moderne dans un environnement technologique, parking gratuit, proximité des entreprises tech, et cadre de vie agréable avec espaces verts."
      }
    ],
    'Val d\'Europe': [
      {
        question: "Le campus est-il proche de Disneyland Paris ?",
        reponse: "Oui, notre campus de Val d'Europe est situé à proximité immédiate de Disneyland Paris, accessible en quelques minutes. Cela offre un environnement unique et des opportunités de stage dans l'industrie du divertissement."
      },
      {
        question: "Comment accéder au campus depuis Paris ?",
        reponse: "Le campus est directement accessible via le RER A (station Val d'Europe) en 45 minutes depuis le centre de Paris. La gare TGV de Marne-la-Vallée est également très proche."
      },
      {
        question: "Y a-t-il des commerces à proximité ?",
        reponse: "Val d'Europe dispose du plus grand centre commercial d'Europe à quelques minutes du campus, avec restaurants, commerces et services."
      },
      {
        question: "Quelles opportunités professionnelles dans la région ?",
        reponse: "La région offre des opportunités dans le tourisme, l'e-commerce, les services digitaux et les entreprises internationales implantées dans la zone."
      }
    ],
    'Lille': [
      {
        question: "Le campus Lille est-il bien situé dans la ville ?",
        reponse: "Notre campus est idéalement situé sur le Boulevard Louis XIV, à 2 minutes à pied de la station Grand Palais (métro M2), en plein cœur de la métropole lilloise."
      },
      {
        question: "Quels sont les avantages de la région Nord ?",
        reponse: "Lille bénéficie d'une position stratégique proche de la Belgique et de l'Angleterre, d'un coût de la vie attractif et d'un écosystème digital en pleine expansion."
      },
      {
        question: "Y a-t-il des opportunités à l'international ?",
        reponse: "La proximité avec la Belgique et l'accès facilité vers l'Angleterre offrent de nombreuses opportunités de stages et d'emplois à l'international."
      },
      {
        question: "Comment est la vie étudiante à Lille ?",
        reponse: "Lille est une ville étudiante dynamique avec une vie nocturne animée, de nombreux événements culturels et un coût de la vie abordable."
      }
    ],
    'Lyon': [
      {
        question: "Pourquoi choisir le campus de Lyon ?",
        reponse: "Lyon est la capitale économique de la région Auvergne-Rhône-Alpes avec un écosystème digital en pleine expansion. Notre campus bénéficie de cette dynamique économique."
      },
      {
        question: "Le campus est-il proche de la gare Part-Dieu ?",
        reponse: "Oui, notre campus est situé à seulement 10 minutes de la gare Part-Dieu, facilitant les déplacements depuis toute la France."
      },
      {
        question: "Quelles entreprises recrutent nos étudiants à Lyon ?",
        reponse: "Lyon accueille de nombreuses entreprises tech, des sièges sociaux et des startups innovantes dans le digital, offrant d'excellentes perspectives d'emploi."
      },
      {
        question: "Le campus dispose-t-il d'espaces de détente ?",
        reponse: "Oui, notre campus lyonnais dispose d'une terrasse et d'espaces de coworking pour favoriser les échanges entre étudiants."
      }
    ],
    'Nice': [
      {
        question: "Quels sont les avantages d'étudier à Nice ?",
        reponse: "Nice offre un cadre de vie exceptionnel sur la Côte d'Azur, un climat agréable toute l'année et un environnement technologique en développement."
      },
      {
        question: "Y a-t-il des opportunités dans le secteur du tourisme digital ?",
        reponse: "La Côte d'Azur est une destination touristique majeure avec de nombreuses opportunités dans le marketing digital touristique, l'e-commerce et les services numériques."
      },
      {
        question: "Comment accéder au campus depuis l'aéroport ?",
        reponse: "Le campus est accessible depuis l'aéroport Nice Côte d'Azur via le tramway ligne 3 (Grand Arénas) ou les lignes de bus 20, 21, 54."
      },
      {
        question: "Le campus a-t-il une vue particulière ?",
        reponse: "Notre campus niçois dispose d'une terrasse avec vue, offrant un cadre d'études privilégié dans un environnement méditerranéen."
      }
    ],
    'Montpellier': [
      {
        question: "Pourquoi Montpellier pour ses études ?",
        reponse: "Montpellier est une ville étudiante dynamique avec un écosystème jeune et innovant, propice à l'entrepreneuriat et aux nouvelles technologies."
      },
      {
        question: "Le campus est-il bien desservi par les transports ?",
        reponse: "Oui, accessible via les tramways T3 (Pablo Picasso) et T1 (Millénaire), ainsi que la ligne de bus 14. La gare TGV Sud de France est à 15 minutes."
      },
      {
        question: "Quelles sont les spécificités du campus ?",
        reponse: "Notre campus montpelliérain dispose d'un jardin intérieur et d'une salle de créativité, favorisant l'innovation et le bien-être étudiant."
      },
      {
        question: "Y a-t-il des événements tech à Montpellier ?",
        reponse: "Montpellier accueille régulièrement des événements tech, des meetups et des conférences sur l'innovation, créant un écosystème dynamique pour nos étudiants."
      }
    ],
    'Bordeaux': [
      {
        question: "Quels sont les atouts du campus bordelais ?",
        reponse: "Bordeaux bénéficie d'une excellente réputation dans le digital, d'un cadre de vie agréable et d'un écosystème économique dynamique avec de nombreuses entreprises innovantes."
      },
      {
        question: "Comment rejoindre le campus depuis la gare ?",
        reponse: "Le campus est accessible depuis la gare Bordeaux Saint-Jean via le tramway ligne D (arrêt Fondaudège – Muséum) ou les lignes de bus C, 5, 15, 23 (arrêt Jardin Public)."
      },
      {
        question: "Y a-t-il des partenariats avec les entreprises locales ?",
        reponse: "Oui, nous avons développé un réseau solide avec les entreprises bordelaises du digital, facilitant l'accès aux stages, à l'alternance et à l'emploi."
      },
      {
        question: "Quelles sont les spécialités économiques de Bordeaux ?",
        reponse: "Bordeaux excelle dans le digital, l'e-commerce, les services numériques et l'innovation technologique, avec un fort développement des startups."
      }
    ]
  };

  const campusData = {
    'Paris': {
      name: 'Paris',
      fullName: 'Campus Paris',
      address: '25 Rue Claude Tillier, 75012 Paris',
      phone: '01 55 43 26 64',
      email: 'paris@hencia.fr',
      image: '/images/campus/ecole marketing paris.jpg',
      description: 'Notre campus parisien, situé au cœur de la capitale, offre un environnement d\'apprentissage exceptionnel. Proche des entreprises du digital et des startups, il constitue un tremplin idéal pour votre carrière.',
      transport: [
        'Métro : Ligne de métro 1 et 8 - À 2 min à pied de la station Reuilly Diderot',
        'RER : RER A - À 5 min à pied de Nation',
        'Bus : Lignes 28, 32, 42, 73, 80, 93'
      ],
      facilities: [
        'Salles de cours équipées',
        'Laboratoire informatique',
        'Espace coworking',
        'Cafétéria',
        'WiFi haut débit',
        'Bibliothèque numérique'
      ],
      formations: [
        'Bachelor 1 & 2 Marketing Digital',
        'BTS NDRC',
        'Bachelor Marketing Digital'
      ],
      stats: {
        students: '250+',
        teachers: '15',
        companies: '50+'
      }
    },
    'Saint-Quentin en Yvelines': {
      name: 'Saint-Quentin en Yvelines',
      fullName: 'Campus Saint-Quentin en Yvelines',
      address: '8 rue Germain Sufflot, 78180 Montigny-le-Bretonneux',
      phone: '01 81 80 38 50',
      email: 'sqy@hencia.fr',
      image: '/images/campus/ecole marketing versaille.jpg',
      description: 'Situé dans la technopole de Saint-Quentin-en-Yvelines, notre campus bénéficie d\'un environnement moderne et innovant, à proximité de nombreuses entreprises technologiques.',
      transport: [
        'RER : RER C - Station Saint-Quentin-en-Yvelines',
        'Transilien : Ligne N & U - Station Montigny-le-Bretonneux',
        'Bus : Lignes 441, 442, 443'
      ],
      facilities: [
        'Salles de cours modernes',
        'Laboratoire informatique',
        'Espace détente',
        'Parking gratuit',
        'WiFi haut débit',
        'Salle de conférence'
      ],
      formations: [
        'Bachelor 1 & 2 Marketing Digital',
        'BTS NDRC',
        'Bachelor Marketing Digital'
      ],
      stats: {
        students: '180+',
        teachers: '12',
        companies: '35+'
      }
    },
    'Val d\'Europe': {
      name: 'Val d\'Europe',
      fullName: 'Campus Val d\'Europe',
      address: '24-26 Cours du Danube, 77700 Serris',
      phone: '01 81 80 77 10',
      email: 'valdeurope@hencia.fr',
      image: '/images/campus/ecole marketing marne la vallee.jpg',
      description: 'Notre campus de Val d\'Europe, proche de Disneyland Paris, offre un cadre d\'études unique dans un environnement international et dynamique.',
      transport: [
        'RER : RER A - Station Val d\'Europe',
        'TGV : Gare de Marne-la-Vallée - Chessy',
        'Bus : Lignes 23, 34, PEP\'S'
      ],
      facilities: [
        'Salles de cours équipées',
        'Laboratoire informatique',
        'Espace coworking',
        'Centre commercial à proximité',
        'WiFi haut débit',
        'Salle de créativité'
      ],
      formations: [
        'Bachelor 1 & 2 Marketing Digital',
        'BTS NDRC',
        'Bachelor Marketing Digital'
      ],
      stats: {
        students: '160+',
        teachers: '10',
        companies: '30+'
      }
    },
    'Lille': {
      name: 'Lille',
      fullName: 'Campus Lille',
      address: '24 Boulevard Louis XIV, 59000 Lille',
      phone: 'O3 74 74 06 37',
      email: 'lille@hencia.fr',
      image: '/images/campus/ecole marketing lille.jpg',
      description: 'Au cœur de la métropole lilloise, notre campus bénéficie de la dynamique économique du Nord et de la proximité avec la Belgique et l\'Angleterre.',
      transport: [
        'Métro : Métro ligne M2 - À 2 minutes à pied de Station Grand Palais',
        'TGV : Gare Lille Flandres',
        'Bus : Lignes Citadines'
      ],
      facilities: [
        'Salles de cours modernes',
        'Laboratoire informatique',
        'Espace étudiant',
        'Cafétéria',
        'WiFi haut débit',
        'Salle de projet'
      ],
      formations: [
        'Bachelor 1 & 2 Marketing Digital',
        'BTS NDRC',
        'Bachelor Marketing Digital'
      ],
      stats: {
        students: '200+',
        teachers: '13',
        companies: '40+'
      }
    },
    'Lyon': {
      name: 'Lyon',
      fullName: 'Campus Lyon',
      address: '10 rue des Cuirrasiers, 69002 Lyon',
      phone: '04 26 46 48 66',
      email: 'lyon@hencia.fr',
      image: '/images/campus/ecole marketing lyon.jpeg',
      description: 'Situé dans la capitale économique de la région Auvergne-Rhône-Alpes, notre campus lyonnais offre de nombreuses opportunités dans un écosystème digital en pleine expansion.',
      transport: [
        'Métro : 10 min de la gare Part-Dieu',
        'Tramway : Ligne B ou T1 - Gare Part-Dieu V.Merle',
        'Bus : C7 - Part-Dieu Renaudel'
      ],
      facilities: [
        'Salles de cours modernes',
        'Laboratoire informatique',
        'Espace détente',
        'Terrasse avec vue',
        'WiFi haut débit',
        'Salle multimédia'
      ],
      formations: [
        'Bachelor 1 & 2 Marketing Digital',
        'BTS NDRC',
        'Bachelor Marketing Digital'
      ],
      stats: {
        students: '170+',
        teachers: '11',
        companies: '32+'
      }
    },
    'Nice': {
      name: 'Nice',
      fullName: 'Campus Nice',
      address: '143 Boulevard René Cassin, 06200 Nice',
      phone: '04 22 20 04 80.',
      email: 'nice@hencia.fr',
      image: '/images/campus/ecole marketing nice.jpeg',
      description: 'Sur la Côte d\'Azur, notre campus niçois combine cadre de vie exceptionnel et opportunités professionnelles dans un environnement technologique en développement.',
      transport: [
        'Tramway : Ligne 3 - Grand Arénas',
        'Bus : Lignes 20, 21, 54',
        'Train : Gare Saint Augustin'
      ],
      facilities: [
        'Salles de cours modernes',
        'Laboratoire informatique',
        'Espace détente',
        'Terrasse avec vue',
        'WiFi haut débit',
        'Salle multimédia'
      ],
      formations: [
        'Bachelor 1 & 2 Marketing Digital',
        'BTS NDRC',
        'Bachelor Marketing Digital'
      ],
      stats: {
        students: '140+',
        teachers: '9',
        companies: '25+'
      }
    },
    'Montpellier': {
      name: 'Montpellier',
      fullName: 'Campus Montpellier',
      address: '290 Avenue Nina Simon, 34000 Montpellier',
      phone: '04 48 48 04 69',
      email: 'montpellier@hencia.fr',
      image: '/images/campus/ecole marketing montpellier.jpg',
      description: 'Dans la ville étudiante du Sud, notre campus montpelliérain profite d\'un écosystème jeune et dynamique, propice à l\'innovation et à l\'entrepreneuriat.',
      transport: [
        'Tramway : T3 - Pablo Picasso et T1 - Millènaire ',
        'Bus : Lignes 14',
        'TGV : 15 min de la gare Sud de France'
      ],
      facilities: [
        'Salles de cours équipées',
        'Laboratoire informatique',
        'Espace coworking',
        'Jardin intérieur',
        'WiFi haut débit',
        'Salle de créativité'
      ],
      formations: [
        'Bachelor 1 & 2 Marketing Digital',
        'BTS NDRC',
        'Bachelor Marketing Digital'
      ],
      stats: {
        students: '170+',
        teachers: '11',
        companies: '32+'
      }
    },
    'Bordeaux': {
      name: 'Bordeaux',
      fullName: 'Campus Bordeaux',
      address: '10 rue Fondaudège, 33000 Bordeaux',
      phone: '05 56 48 44 84',
      email: 'bordeaux@hencia.fr',
      image: '/images/campus/ecole de marketing bordeaux.jpg',
      description: 'Dans la capitale girondine, notre campus bordelais bénéficie d\'un écosystème économique dynamique et d\'un cadre de vie exceptionnel.',
      transport: [
        'Tramway : Ligne D - Fondaudège – Muséum',
        'Bus : Lignes Bus ligne C, 5, 15, 23 - Jardin Public',
        'TGV : Gare Bordeaux Saint-Jean'
      ],
      facilities: [
        'Salles de cours modernes',
        'Laboratoire informatique',
        'Espace étudiant',
        'Cafétéria',
        'WiFi haut débit',
        'Salle de conférence'
      ],
      formations: [
        'Bachelor 1 & 2 Marketing Digital',
        'BTS NDRC',
        'Bachelor Marketing Digital'
      ],
      stats: {
        students: '190+',
        teachers: '12',
        companies: '38+'
      }
    }
  };

  const campus = campusData[campusName as keyof typeof campusData];

  // Génération du JSON-LD pour les FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": campusFAQ[campusName as keyof typeof campusFAQ]?.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.reponse
      }
    })) || []
  };

  if (!campus) {
    return (
      <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Campus non trouvé</h1>
          <button onClick={onBack} className="text-[#6366f1] hover:underline">
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-800 dark:bg-white">
      <Header showBackButton={true} onBack={onBack} />
      
      {/* Breadcrumb */}
      <div className="relative z-20 bg-transparent pt-24">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400 dark:text-gray-600">
            <span>Accueil</span>
            <span className="mx-2"></span>
            <span>Campus</span>
            <span className="mx-2"></span>
            <span className="text-[#6366f1]">{campus.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 dark:bg-gray-50">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            key={`campus-video-${campusName}`}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={
              campus.name === 'Paris' || campus.name === 'Lille' || campus.name === 'Bordeaux' 
                ? '/video/campus-nice.mp4' 
                : `/video/campus-${campus.name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}.mp4`
            } type="video/mp4" />
            {/* Fallback gradient if video fails to load */}
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-900/70 dark:bg-white/70"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="max-w-4xl">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold text-white dark:text-gray-800 mb-6">
                  {campus.fullName}
                </h1>
                <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 leading-relaxed">
                  {campus.description}
                </p>
                
                {/* Informations de contact */}
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300 dark:text-gray-600">
                    <MapPin className="w-5 h-5 text-[#6366f1] mr-3" />
                    <span>{campus.address}</span>
                  </div>
                  <div className="flex items-center text-gray-300 dark:text-gray-600">
                    <Phone className="w-5 h-5 text-[#6366f1] mr-3" />
                    <span>{campus.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-300 dark:text-gray-600">
                    <Mail className="w-5 h-5 text-[#6366f1] mr-3" />
                    <span>{campus.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}

      {/* Formations disponibles */}
      <section className="py-16 bg-gray-900 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Formations <span className="text-[#6366f1]">disponibles</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Bachelor 1 & 2 Marketing Digital */}
              <div className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 group flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#6366f1]/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[#6366f1]" />
                  </div>
                  <span className="bg-[#6366f1] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Bac +2
                  </span>
                </div>
                
                <h3 className="text-white dark:text-gray-800 font-bold text-xl mb-2 group-hover:text-[#6366f1] transition-colors">
                  Bachelor 1 & 2 Marketing Digital
                </h3>
                <p className="text-[#6366f1] font-medium mb-3">
                  Communication Opérationnelle & Gestion de Projets Digitaux
                </p>
                <p className="text-gray-300 dark:text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                  
                </p>
                
                <div className="flex items-center text-gray-400 dark:text-gray-600 text-sm mb-6 mt-auto">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="mr-4">2 ans</span>
                  <Users className="w-4 h-4 mr-2" />
                  <span>30 étudiants max</span>
                </div>
                
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => onNavigateToFormation && onNavigateToFormation('bachelor-12')}
                    className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white py-3 px-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 flex items-center justify-center"
                  >
                    Découvrir la formation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>

              {/* BTS NDRC */}
              <div className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 group flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#6366f1]/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#6366f1]" />
                  </div>
                  <span className="bg-[#6366f1] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Bac +2
                  </span>
                </div>
                
                <h3 className="text-white dark:text-gray-800 font-bold text-xl mb-2 group-hover:text-[#6366f1] transition-colors">
                  BTS NDRC
                </h3>
                <p className="text-[#6366f1] font-medium mb-3">
                  Négociation et Digitalisation de la Relation Client
                </p>
                <p className="text-gray-300 dark:text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                  
                </p>
                
                <div className="flex items-center text-gray-400 dark:text-gray-600 text-sm mb-6 mt-auto">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="mr-4">2 ans</span>
                  <Users className="w-4 h-4 mr-2" />
                  <span>25 étudiants max</span>
                </div>
                
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => onNavigateToFormation && onNavigateToFormation('bts-ndrc')}
                    className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white py-3 px-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 flex items-center justify-center"
                  >
                    Découvrir la formation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>

              {/* Bachelor Marketing Digital */}
              <div className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 group flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#6366f1]/20 rounded-lg flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-[#6366f1]" />
                  </div>
                  <span className="bg-[#6366f1] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Bac +3
                  </span>
                </div>
                
                <h3 className="text-white dark:text-gray-800 font-bold text-xl mb-2 group-hover:text-[#6366f1] transition-colors">
                  Bachelor Marketing Digital
                </h3>
                <p className="text-[#6366f1] font-medium mb-3">
                  Spécialisation Marketing Digital et E-commerce
                </p>
                <p className="text-gray-300 dark:text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
               
                </p>
                
                <div className="flex items-center text-gray-400 dark:text-gray-600 text-sm mb-6 mt-auto">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="mr-4">1 an</span>
                  <Users className="w-4 h-4 mr-2" />
                  <span>30 étudiants max</span>
                </div>
                
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => onNavigateToFormation && onNavigateToFormation('bachelor')}
                    className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white py-3 px-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 flex items-center justify-center"
                  >
                    Découvrir la formation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipements */}
      <section className="py-16 bg-gray-800 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Nos <span className="text-[#6366f1]">équipements</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campus.facilities.map((facility, index) => (
                <div key={index} className="flex items-center bg-gray-900/50 dark:bg-white/50 rounded-lg p-4 border border-gray-700 dark:border-gray-300">
                  <div className="w-10 h-10 bg-[#6366f1]/20 rounded-full flex items-center justify-center mr-4">
                    {facility.includes('WiFi') && <Wifi className="w-5 h-5 text-[#6366f1]" />}
                    {facility.includes('Cafétéria') && <Coffee className="w-5 h-5 text-[#6366f1]" />}
                    {facility.includes('informatique') && <Monitor className="w-5 h-5 text-[#6366f1]" />}
                    {facility.includes('Bibliothèque') && <BookOpen className="w-5 h-5 text-[#6366f1]" />}
                    {!facility.includes('WiFi') && !facility.includes('Cafétéria') && !facility.includes('informatique') && !facility.includes('Bibliothèque') && <MapPin className="w-5 h-5 text-[#6366f1]" />}
                  </div>
                  <span className="text-white dark:text-gray-800 font-medium">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16 bg-gray-900 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Galerie du <span className="text-[#6366f1]">Campus</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Image principale - Grande */}
              <div className="lg:col-span-2 lg:row-span-2">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-full min-h-[400px]">
                  {currentGallery[0] && (
                    <>
                      <img 
                        src={currentGallery[0].src}
                        alt={currentGallery[0].title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback */}
                      <div className="w-full h-full bg-gradient-to-br from-[#6366f1]/20 to-purple-600/20 flex items-center justify-center rounded-2xl" style={{display: 'none'}}>
                        <div className="text-center">
                          <MapPin className="w-16 h-16 text-[#6366f1] mx-auto mb-4" />
                          <span className="text-[#6366f1] text-xl font-bold">Campus {campusName}</span>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Overlay avec titre */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-white font-bold text-xl">{currentGallery[0]?.title}</h3>
                      <p className="text-gray-300">Vue principale</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Images secondaires */}
              {currentGallery.slice(1).map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg h-48">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-[#6366f1]/20 to-purple-600/20 flex items-center justify-center rounded-xl" style={{display: 'none'}}>
                    <Users className="w-12 h-12 text-[#6366f1]" />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-white font-semibold">{image.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Transports */}
      <section className="py-16 bg-gray-900 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Comment <span className="text-[#6366f1]">nous rejoindre</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Informations transport */}
              <div className="bg-gray-800/50 dark:bg-white/50 rounded-2xl p-8 border border-gray-700 dark:border-gray-300">
                <h3 className="text-white dark:text-gray-800 font-semibold text-xl mb-6 flex items-center">
                  <Train className="w-6 h-6 text-[#6366f1] mr-3" />
                  Transports en commun
                </h3>
                <div className="space-y-4">
                  {campus.transport.map((transport, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-10 h-10 bg-[#6366f1]/20 rounded-full flex items-center justify-center mr-4">
                        {transport.includes('Métro') && <Train className="w-5 h-5 text-[#6366f1]" />}
                        {transport.includes('RER') && <Train className="w-5 h-5 text-[#6366f1]" />}
                        {transport.includes('TGV') && <Train className="w-5 h-5 text-[#6366f1]" />}
                        {transport.includes('Tramway') && <Train className="w-5 h-5 text-[#6366f1]" />}
                        {transport.includes('Bus') && <Bus className="w-5 h-5 text-[#6366f1]" />}
                        {transport.includes('Train') && <Train className="w-5 h-5 text-[#6366f1]" />}
                        {transport.includes('Transilien') && <Train className="w-5 h-5 text-[#6366f1]" />}
                      </div>
                      <span className="text-gray-300 dark:text-gray-600">{transport}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carte Google Maps */}
              <div className="bg-gray-800/50 dark:bg-white/50 rounded-2xl p-8 border border-gray-700 dark:border-gray-300">
                <h3 className="text-white dark:text-gray-800 font-semibold text-xl mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-[#6366f1] mr-3" />
                  Notre campus
                </h3>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img 
                    src={campus.image}
                    alt={`Campus ${campus.name}`}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback when image not found */}
                  <div className="w-full h-full bg-gradient-to-br from-[#6366f1]/20 to-purple-600/20 flex items-center justify-center rounded-xl" style={{display: 'none'}}>
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-[#6366f1] mx-auto mb-4" />
                      <span className="text-[#6366f1] text-xl font-bold">Campus {campus.name}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-900/50 dark:bg-gray-100/50 rounded-lg">
                  <p className="text-gray-300 dark:text-gray-600 text-sm flex items-start">
                    <MapPin className="w-4 h-4 text-[#6366f1] mr-2 mt-0.5 flex-shrink-0" />
                    {campus.address}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 mt-3">
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(campus.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#6366f1]600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#6366f1] transition-colors text-center"
                    >
                      Ouvrir dans Google Maps
                    </a>
                    <a
                      href={`https://maps.apple.com/?q=${encodeURIComponent(campus.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#6366f1] text-[#6366f1] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#6366f1] hover:text-white transition-colors text-center"
                    >
                      Ouvrir dans Apple Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ spécifique au campus */}
      <section className="py-16 bg-gray-900 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Questions fréquentes sur <span className="text-[#6366f1]">{campus.name}</span>
            </h2>
            
            <div className="space-y-6">
              {campusFAQ[campusName as keyof typeof campusFAQ]?.map((faq, index) => (
                <div key={index} className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300">
                  <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-300 dark:text-gray-600 leading-relaxed">{faq.reponse}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#6366f1]/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6">
            Prêt à nous rejoindre sur {campus.name} ?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez notre campus et lancez votre carrière dans le marketing digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/candidature"
              prefetch={true}
              className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300">
              Candidater maintenant
            </Link>
            <button className="border-2 border-[#6366f1] text-[#6366f1] px-8 py-4 rounded-lg font-semibold hover:bg-[#6366f1] hover:text-white transition-all duration-300">
              Visiter le campus
            </button>
          </div>
        </div>
      </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <Footer />
    </>
    
    );
  };

export default CampusPage; 