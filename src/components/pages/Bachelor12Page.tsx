import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, BookOpen, Clock, Award, CheckCircle, Calendar, MapPin, Euro, GraduationCap, Briefcase, TrendingUp, ArrowRight, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Bachelor12PageProps {
  onBack: () => void;
  onNavigateToFormation?: (formation: string) => void;
}

const Bachelor12Page: React.FC<Bachelor12PageProps> = ({ onBack, onNavigateToFormation }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('programme');
  const [expandedBlocks, setExpandedBlocks] = useState<{[key: string]: boolean}>({});

  const tabs = [
    { id: 'programme', label: 'Programme' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'financement', label: 'Financement' }
  ];

  const toggleBlock = (blockId: string) => {
    setExpandedBlocks(prev => ({
      ...prev,
      [blockId]: !prev[blockId]
    }));
  };

  const programDetails = {
    year1: {
      title: "1ère année - Fondamentaux du Marketing Digital",
      blocs: [
        {
          title: "Bloc 1 – Culture digitale & environnement professionnel",
          modules: [
            "Enjeux du numérique (IA, RGPD, web3, cybersécurité, RSE)",
            "Fonctionnement d'une entreprise digitale ou e-commerce",
            "Organisation du travail hybride / outils collaboratifs (Drive, Notion, Trello, Slack)",
            "Posture en entreprise : ponctualité, gestion de la charge, initiative"
          ]
        },
        {
          title: "Bloc 2 – Outils de base en marketing digital",
          modules: [
            "Création de contenus avec IA (Canva, ChatGPT, Copy.ai)",
            "Initiation SEO (logique de mots-clés, structure web)",
            "Réseaux sociaux pro (LinkedIn, Instagram, TikTok)",
            "Emailing (Mailchimp, Brevo) + règles de délivrabilité"
          ]
        },
        {
          title: "Bloc 3 – Communication & savoir-être",
          modules: [
            "Écoute active, assertivité, reformulation",
            "Prise de parole à l'oral (visio / réunion client)",
            "Rédaction professionnelle (mail, compte rendu, post LinkedIn)",
            "Ateliers \"posture professionnelle\" (ex : comment réagir face à un imprévu)"
          ]
        },
        {
          title: "Bloc 4 – Content marketing & ligne éditoriale",
          modules: [
            "Rédiger pour le web : blog, réseaux sociaux, e-commerce",
            "Optimisation IA du contenu (rewriting, prompts avancés)",
            "Planification éditoriale (Notion, Google Calendar)",
            "Initiation au storytelling et à la marque"
          ]
        },
        {
          title: "Bloc 5 – Veille, outils d'analyse & reporting",
          modules: [
            "Mettre en place une veille concurrentielle (Feedly, Google Alertes)",
            "Découverte de Google Analytics 4",
            "Tableaux de suivi simples (KPI, trafic, engagement, ventes)",
            "Utiliser l'IA pour synthétiser les datas"
          ]
        },
        {
          title: "Bloc 6 – Projet pratique + alternance",
          modules: [
            "Réalisation d'un mini-projet en binôme (réseaux sociaux + landing page)",
            "Journal de bord d'alternance (rétrospective mensuelle)",
            "Coaching \"bilan d'intégration entreprise\"",
            "Préparation à la négociation des objectifs pro"
          ]
        }
      ]
    },
    year2: {
      title: "2ème année - Spécialisation et Professionnalisation",
      blocs: [
        {
          title: "Bloc 1 – Parcours client et tunnel de conversion",
          modules: [
            "Définir un buyer persona avec des outils d'IA (Miro, ChatGPT, MakeMyPersona)",
            "Tunnel AIDA / TOFU–MOFU–BOFU",
            "Création d'un lead magnet (PDF, test, quizz…)",
            "UX writing & optimisation des pages d'atterrissage"
          ]
        },
        {
          title: "Bloc 2 – Gestion de campagnes digitales",
          modules: [
            "Brief, rétroplanning, gestion agile (Trello, Notion, Monday)",
            "Conception et diffusion d'une campagne multicanale simple (social media, emailing, SEA de base)",
            "Suivi en live : taux d'ouverture, clics, ROAS, conversion"
          ]
        },
        {
          title: "Bloc 3 – Accessibilité, éthique et inclusion",
          modules: [
            "Règles essentielles d'accessibilité web (RGAA niveau 1)",
            "Rédaction inclusive & visuels respectueux",
            "Audit simple d'un site ou contenu existant",
            "Utilisation éthique de l'IA (propriété, biais, transparence)"
          ]
        },
        {
          title: "Bloc 4 – SEO / SEA & optimisation",
          modules: [
            "Optimisation on-page (structure Hn, méta, contenu)",
            "Initiation à Google Search Console",
            "Initiation au SEA (Google Ads : recherche et retargeting)",
            "IA pour le copywriting & l'analyse concurrentielle"
          ]
        },
        {
          title: "Bloc 5 – Suivi, reporting et amélioration continue",
          modules: [
            "Tableaux de bord Google Looker Studio (ex-Data Studio)",
            "Mise en place d'un système de ticketing (support client / retour utilisateurs)",
            "Outils CRM & marketing automation (HubSpot, Brevo, ActiveCampaign)",
            "Notions de ROI, coût d'acquisition, taux de conversion"
          ]
        },
        {
          title: "Bloc 6 – Projet global + professionnalisation",
          modules: [
            "Projet fil rouge (campagne + tableau de bord + reporting)",
            "Soutenance orale de 15 min + rapport de synthèse écrit",
            "Préparation à l'entrée en Bachelor 3 (simulation d'entretien, personal branding, LinkedIn + portfolio)",
            "Suivi des compétences comportementales : empathie, autonomie, coopération"
          ]
        }
      ]
    },
    internship: "16 semaines de stage sur les 2 ans",
    careers: [
      { title: "Assistant Marketing Digital", salary: "22-28k€", description: "Support aux équipes marketing dans leurs actions digitales" },
      { title: "Community Manager", salary: "24-32k€", description: "Gestion des réseaux sociaux et animation de communautés" },
      { title: "Chargé de Communication Digitale", salary: "26-34k€", description: "Pilotage de la communication digitale d'une entreprise" },
      { title: "Chef de Projet Digital Junior", salary: "28-36k€", description: "Gestion de projets digitaux et coordination d'équipes" },
      { title: "Traffic Manager Junior", salary: "26-35k€", description: "Optimisation des campagnes publicitaires digitales" }
    ]
  };

  return (
    <>
      <div className="min-h-screen bg-gray-800 dark:bg-white">
      <Header 
        showBackButton={true} 
        onBack={onBack}
        onNavigateToFormation={onNavigateToFormation}
      />
      
      {/* Breadcrumb */}
      <div className="relative z-20 bg-transparent pt-20">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400 dark:text-gray-600">
            <span>Accueil</span>
            <span className="mx-2">›</span>
            <span>Formations</span>
            <span className="mx-2">›</span>
            <span className="text-[#6366F1]">Bachelor 1 & 2 Marketing Digital</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:h-[70vh] flex items-center overflow-hidden -mt-20 px-4">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/bachelor.mp4" type="video/mp4" />
            {/* Fallback gradient if video fails to load */}
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-900/70 dark:bg-white/70"></div>
        </div>

        <div className="container mx-auto px-2 sm:px-4 pt-16 sm:pt-20">
          <div className="relative z-10 max-w-full lg:max-w-4xl">
            <div className="max-w-full lg:max-w-2xl">
              {/* Title section */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6 gap-3 sm:gap-0">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white dark:text-gray-800 mb-1 leading-tight">Bachelor 1 & 2 Marketing Digital</h1>
                  <p className="text-[#6366F1] text-lg sm:text-xl lg:text-2xl font-medium">Communication Opérationnelle & Gestion de Projets Digitaux</p>
                </div>
                <span className="bg-[#6366F1] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex-shrink-0 self-start">
                  Bac+2
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
                <div className="flex items-center text-gray-300 dark:text-gray-600 bg-gray-800/50 dark:bg-gray-200/50 px-3 sm:px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">2 ans</span>
                </div>
                <div className="flex items-center text-gray-300 dark:text-gray-600 bg-gray-800/50 dark:bg-gray-200/50 px-3 sm:px-4 py-2 rounded-lg">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">30 étudiants max</span>
                </div>
                <div className="flex items-center text-gray-300 dark:text-gray-600 bg-gray-800/50 dark:bg-gray-200/50 px-3 sm:px-4 py-2 rounded-lg">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="text-sm">Diplôme d'État</span>
                </div>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 dark:text-gray-600 leading-relaxed mb-4">
                Développez vos compétences en marketing digital, communication et gestion de projets. 
                Cette formation complète vous prépare aux métiers du digital avec une approche 
                opérationnelle et stratégique. Maîtrisez les outils et techniques essentiels du marketing numérique.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/candidature"
                  prefetch={true}
                className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 flex items-center justify-center text-sm sm:text-base">
                  Candidater maintenant
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="border-2 border-[#6366F1] text-[#6366F1] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#6366F1] hover:text-white transition-all duration-300 text-sm sm:text-base">
                  Télécharger la brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section informations clés */}
      <section className="py-16 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Diplôme reconnu */}
            <div className="flex items-start space-x-4">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 sm:w-8 h-6 sm:h-8 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-base sm:text-lg mb-2">Diplôme reconnu</h3>
                <p className="text-gray-300 dark:text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Titre de niveau 5 (bac+2) reconnu par l'État
                </p>
              </div>
            </div>

            {/* Prochaines rentrées */}
            <div className="flex items-start space-x-4">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 sm:w-8 h-6 sm:h-8 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-base sm:text-lg mb-2">Prochaines rentrées</h3>
                <p className="text-gray-300 dark:text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Septembre 2025<br />
                  Janvier 2026
                </p>
              </div>
            </div>

            {/* Rythme de formation */}
            <div className="flex items-start space-x-4">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-base sm:text-lg mb-2">Rythme de formation</h3>
                <p className="text-gray-300 dark:text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Formation en initial<br />
                  Possibilité d'alternance en 2ème année
                </p>
              </div>
            </div>

            {/* Durée de formation */}
            <div className="flex items-start space-x-4">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-base sm:text-lg mb-2">Durée de la formation</h3>
                <p className="text-gray-300 dark:text-gray-600 text-xs sm:text-sm leading-relaxed">
                  1ère : 650h et stage de 8 semaines<br />
                  2ème : 600h et stage de 8 semaines
                </p>
              </div>
            </div>

            {/* Profils acceptés */}
            <div className="flex items-start space-x-4">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 sm:w-8 h-6 sm:h-8 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-base sm:text-lg mb-2">Profils acceptés</h3>
                <p className="text-gray-300 dark:text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Bacheliers, bac général, bac pro, bac technologique
                </p>
              </div>
            </div>

            {/* Campus concerné */}
            <div className="flex items-start space-x-4">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-base sm:text-lg mb-2">Campus concernés</h3>
                <p className="text-gray-300 dark:text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Disponible sur tous nos campus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation par onglets */}
      <section className="py-8 bg-gray-800 dark:bg-gray-200 border-b border-gray-700 dark:border-gray-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="flex space-x-0 bg-gray-900/50 dark:bg-white/50 rounded-lg p-1 border border-gray-700 dark:border-gray-300 w-full sm:w-auto overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-8 py-3 font-semibold transition-all duration-300 rounded-md ${
                    activeTab === tab.id
                      ? 'text-white dark:text-gray-800 bg-gray-800 dark:bg-gray-200'
                      : 'text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-800 hover:bg-gray-800/50 dark:hover:bg-gray-200/50'
                  } text-sm sm:text-base px-4 sm:px-6 lg:px-8 whitespace-nowrap`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contenu des onglets */}
      {activeTab === 'programme' && (
        <>
          {/* Programme */}
          <section className="py-16 bg-gray-900 dark:bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Programme de <span className="text-[#6366F1]">Formation</span>
              </h2>
              
              <div className="max-w-full lg:max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 1ère année - Gauche */}
                  <div>
                    <h3 className="text-white dark:text-gray-800 font-bold text-xl sm:text-2xl mb-6 flex items-center">
                      <div className="w-4 h-4 bg-[#6366F1] rounded-full mr-4"></div>
                      {programDetails.year1.title}
                    </h3>
                    <div className="space-y-4">
                      {programDetails.year1.blocs.map((bloc, blocIndex) => (
                        <div key={blocIndex} className="bg-gray-800/50 dark:bg-white/50 rounded-xl border border-gray-700 dark:border-gray-300 overflow-hidden">
                          <button
                            onClick={() => toggleBlock(`year1-bloc-${blocIndex}`)}
                            className="w-full p-3 sm:p-4 text-left flex items-center justify-between hover:bg-gray-700/50 dark:hover:bg-gray-100/50 transition-colors"
                          >
                            <h4 className="text-[#6366F1] font-semibold text-sm sm:text-base lg:text-lg pr-2">{bloc.title}</h4>
                            {expandedBlocks[`year1-bloc-${blocIndex}`] ? (
                              <ChevronUp className="w-5 h-5 text-[#6366F1]" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-[#6366F1]" />
                            )}
                          </button>
                          {expandedBlocks[`year1-bloc-${blocIndex}`] && (
                            <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                              <ul className="space-y-3">
                                {bloc.modules.map((module, moduleIndex) => (
                                  <li key={moduleIndex} className="flex items-start">
                                    <CheckCircle className="w-4 h-4 text-[#6366F1] mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">{module}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2ème année - Droite */}
                  <div>
                    <h3 className="text-white dark:text-gray-800 font-bold text-xl sm:text-2xl mb-6 flex items-center">
                      <div className="w-4 h-4 bg-[#f43f5e] rounded-full mr-4"></div>
                      {programDetails.year2.title}
                    </h3>
                    <div className="space-y-4">
                      {programDetails.year2.blocs.map((bloc, blocIndex) => (
                        <div key={blocIndex} className="bg-gray-800/50 dark:bg-white/50 rounded-xl border border-gray-700 dark:border-gray-300 overflow-hidden">
                          <button
                            onClick={() => toggleBlock(`year2-bloc-${blocIndex}`)}
                            className="w-full p-3 sm:p-4 text-left flex items-center justify-between hover:bg-gray-700/50 dark:hover:bg-gray-100/50 transition-colors"
                          >
                            <h4 className="text-[#f43f5e] font-semibold text-sm sm:text-base lg:text-lg pr-2">{bloc.title}</h4>
                            {expandedBlocks[`year2-bloc-${blocIndex}`] ? (
                              <ChevronUp className="w-5 h-5 text-[#f43f5e]" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-[#f43f5e]" />
                            )}
                          </button>
                          {expandedBlocks[`year2-bloc-${blocIndex}`] && (
                            <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                              <ul className="space-y-3">
                                {bloc.modules.map((module, moduleIndex) => (
                                  <li key={moduleIndex} className="flex items-start">
                                    <CheckCircle className="w-4 h-4 text-[#f43f5e] mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">{module}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stage obligatoire */}
                <div className="mt-8 bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300">
                  <h3 className="text-white dark:text-gray-800 font-bold text-lg sm:text-xl mb-4 flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    Stage obligatoire en entreprise
                  </h3>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-300 dark:text-gray-600 text-base sm:text-lg font-medium">{programDetails.internship}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Débouchés */}
          <section className="py-16 bg-gray-800 dark:bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Débouchés <span className="text-[#6366F1]">Professionnels</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                {programDetails.careers.map((career, index) => (
                  <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-xl p-4 sm:p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366F1]/50 transition-all duration-300 group">
                    <h3 className="text-white dark:text-gray-800 font-semibold text-base sm:text-lg mb-2 group-hover:text-[#6366F1] transition-colors">
                      {career.title}
                    </h3>
                    <div className="text-[#6366F1] font-medium mb-3 text-sm sm:text-base">{career.salary}</div>
                    <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">{career.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Et après votre Bachelor 1&2 ? */}
          <section className="py-16 bg-gray-900 dark:bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Et après votre <span className="text-[#6366F1]">Bachelor 1 & 2 ?</span>
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800/50 dark:bg-white/50 rounded-2xl p-8 border border-gray-700 dark:border-gray-300 hover:border-[#6366F1]/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Contenu texte */}
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="bg-[#6366F1] text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                          Bac +3
                        </span>
                        <h3 className="text-2xl font-bold text-white dark:text-gray-800">Bachelor Marketing Digital</h3>
                      </div>
                      
                      <p className="text-[#6366F1] font-medium text-lg mb-4">
                        Spécialisation Marketing Digital et E-commerce
                      </p>
                      
                      <p className="text-gray-300 dark:text-gray-600 mb-6 leading-relaxed">
                        Poursuivez vos études avec notre Bachelor Marketing Digital pour approfondir 
                        vos compétences et accéder à des postes à plus hautes responsabilités. 
                        Formation intensive d'1 an axée sur la stratégie digitale et l'expertise technique.
                      </p>
                      
                      {/* Points clés */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#6366F1] mr-3" />
                          <span className="text-gray-300 dark:text-gray-600">Formation en 1 an après votre Bachelor 1 & 2</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#6366F1] mr-3" />
                          <span className="text-gray-300 dark:text-gray-600">Spécialisation SEO/SEA, Social Media, Analytics</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#6366F1] mr-3" />
                          <span className="text-gray-300 dark:text-gray-600">Possibilité d'alternance</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#6366F1] mr-3" />
                          <span className="text-gray-300 dark:text-gray-600">Accès direct aux postes de chef de projet digital</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => {
                          window.scrollTo(0, 0);
                          onNavigateToFormation('bachelor');
                        }}
                        className="bg-gradient-to-r from-[#6366F1] to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center"
                      >
                        Découvrir le Bachelor 3
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                    
                    {/* Image/Illustration */}
                    <div className="relative">
                      <div className="relative overflow-hidden rounded-xl">
                        <img 
                          src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800"
                          alt="Bachelor Marketing Digital"
                          className="w-full h-64 object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback when image not found */}
                        <div className="w-full h-64 bg-gradient-to-br from-[#6366F1]/20 to-purple-600/20 flex items-center justify-center rounded-xl" style={{display: 'none'}}>
                          <div className="text-center">
                            <Award className="w-16 h-16 text-[#6366F1] mx-auto mb-4" />
                            <span className="text-[#6366F1] text-xl font-bold">Bachelor Marketing Digital</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Badge flottant */}
                      <div className="absolute -top-4 -right-4 bg-[#f43f5e] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        Bac +3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'admissions' && (
        <section className="py-16 bg-gray-900 dark:bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-8">
                Processus d'<span className="text-[#6366F1]">Admission</span>
              </h2>
              
              <div className="space-y-8">
                {/* Intégration après le bac */}
                <div className="bg-gray-800/50 dark:bg-white/50 rounded-2xl p-8 border border-gray-700 dark:border-gray-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-800 mb-6">
                    Intègrez le Bachelor après le bac ou en terminale
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-900/50 dark:bg-gray-100/50 rounded-lg p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-[#6366F1] mx-auto mb-2" />
                      <h4 className="text-white dark:text-gray-800 font-semibold text-sm sm:text-base">Bac professionnel</h4>
                    </div>
                    <div className="bg-gray-900/50 dark:bg-gray-100/50 rounded-lg p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-[#6366F1] mx-auto mb-2" />
                      <h4 className="text-white dark:text-gray-800 font-semibold text-sm sm:text-base">Bac technologique</h4>
                    </div>
                    <div className="bg-gray-900/50 dark:bg-gray-100/50 rounded-lg p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-[#6366F1] mx-auto mb-2" />
                      <h4 className="text-white dark:text-gray-800 font-semibold text-sm sm:text-base">Bac général</h4>
                      <p className="text-gray-400 dark:text-gray-600 text-sm">(toutes options)</p>
                    </div>
                  </div>
                </div>
                
                {/* Processus d'admission */}
                <div className="bg-gray-800/50 dark:bg-white/50 rounded-2xl p-8 border border-gray-700 dark:border-gray-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-800 mb-6">
                    Comment se déroule l'admission ?
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[#6366F1]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#6366F1] font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-white dark:text-gray-800 font-semibold mb-1 text-sm sm:text-base">Déposez votre candidature en ligne</h4>
                        <p className="text-gray-300 dark:text-gray-600">Remplissez votre dossier sur notre plateforme</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[#6366F1]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#6366F1] font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-white dark:text-gray-800 font-semibold mb-1 text-sm sm:text-base">Exercices en ligne sous forme de QCM</h4>
                        <p className="text-gray-300 dark:text-gray-600">Évaluation de vos connaissances de base</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[#6366F1]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#6366F1] font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-white dark:text-gray-800 font-semibold mb-1 text-sm sm:text-base">Entretien individuel à l'école ou en distanciel</h4>
                        <p className="text-gray-300 dark:text-gray-600">Échange avec notre équipe pédagogique</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-[#6366F1]/10 rounded-xl border border-[#6366F1]/30">
                    <p className="text-white dark:text-gray-800 font-semibold text-center">
                      Les résultats de votre admission vous sont communiqués 48h après votre entretien.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'financement' && (
        <section className="py-16 bg-gray-900 dark:bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="w-full">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Solutions de <span className="text-[#6366F1]">Financement</span>
              </h2>
              
              {/* Description */}
              <div className="mb-8 max-w-4xl mx-auto">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white dark:text-gray-800 mb-4">Coût de votre formation</h3>
                <p className="text-gray-300 dark:text-gray-600 text-base sm:text-lg leading-relaxed">
                  La formation Bachelor 1&2 Marketing Digital est découpée en 2 années avec possibilité 
                  d'alternance en 2ème année pour <span className="text-white dark:text-gray-800 font-semibold">entrer dans le monde professionnel et 
                  avoir votre premier salaire</span>.
                </p>
              </div>

              {/* Tableau de financement */}
              <div className="bg-gray-800/50 dark:bg-white/50 rounded-2xl p-3 sm:p-6 border border-gray-700 dark:border-gray-300 overflow-x-auto w-full">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="bg-[#6366F1]/20 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-left text-white dark:text-gray-800 font-semibold text-xs sm:text-sm"></th>
                      <th className="bg-[#6366F1]/20 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-white dark:text-gray-800 font-semibold text-xs sm:text-sm">Paiement en 1 fois</th>
                      <th className="bg-[#6366F1]/20 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-white dark:text-gray-800 font-semibold text-xs sm:text-sm" colSpan={4}>Paiement en plusieurs fois</th>
                      <th className="bg-[#6366F1]/20 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-white dark:text-gray-800 font-semibold text-xs sm:text-sm">Rémunération en stage</th>
                    </tr>
                    <tr>
                      <th className="bg-[#6366F1]/10 border border-gray-600 dark:border-gray-400 p-2 sm:p-3 text-left text-white dark:text-gray-800 font-medium text-xs sm:text-sm"></th>
                      <th className="bg-[#6366F1]/10 border border-gray-600 dark:border-gray-400 p-2 sm:p-3 text-center text-white dark:text-gray-800 font-medium text-xs sm:text-sm">Tarif net</th>
                      <th className="bg-[#6366F1]/10 border border-gray-600 dark:border-gray-400 p-2 sm:p-3 text-center text-white dark:text-gray-800 font-medium text-xs sm:text-sm">Acompte</th>
                      <th className="bg-[#6366F1]/10 border border-gray-600 dark:border-gray-400 p-2 sm:p-3 text-center text-white dark:text-gray-800 font-medium text-xs sm:text-sm">Solde</th>
                      <th className="bg-[#6366F1]/10 border border-gray-600 dark:border-gray-400 p-2 sm:p-3 text-center text-white dark:text-gray-800 font-medium text-xs sm:text-sm">Solde avec échéances</th>
                      <th className="bg-[#6366F1]/10 border border-gray-600 dark:border-gray-400 p-2 sm:p-3 text-center text-white dark:text-gray-800 font-medium text-xs sm:text-sm">Total</th>
                      <th className="bg-[#6366F1]/10 border border-gray-600 dark:border-gray-400 p-2 sm:p-3 text-center text-white dark:text-gray-800 font-medium text-xs sm:text-sm"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bg-gray-700/50 dark:bg-gray-200/50 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-white dark:text-gray-800 font-medium text-xs sm:text-sm">1e année</td>
                      <td className="bg-green-600/20 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-green-400 font-bold text-xs sm:text-sm">6 200 €</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">2 500€</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">4 200€</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">6 x 700 €</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">6 700€</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">À partir de 500€ /mois</td>
                    </tr>
                    <tr>
                      <td className="bg-gray-700/50 dark:bg-gray-200/50 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-white dark:text-gray-800 font-medium text-xs sm:text-sm">2e année</td>
                      <td className="bg-green-600/20 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-green-400 font-bold text-xs sm:text-sm">6 600€</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">2 500€</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">4 650€</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">6 x 775€</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">7 150€</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">À partir de 600€ / mois</td>
                    </tr>
                    <tr>
                      <td className="bg-gray-700/50 dark:bg-gray-200/50 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-white dark:text-gray-800 font-medium text-xs sm:text-sm">2e année (avec alternance)</td>
                      <td className="bg-green-600/20 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-green-400 font-bold text-xs sm:text-sm">
                        <div>0€</div>
                        <div className="text-xs text-gray-400 dark:text-gray-600 mt-1">prise en charge intégrale grâce à l'alternance</div>
                      </td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">–</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">–</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">–</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">–</td>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-2 sm:p-4 text-center text-gray-300 dark:text-gray-600 text-xs sm:text-sm">À partir de 600€ / mois</td>
                    </tr>
                  </tbody>
                </table>
                
                {/* Note en bas */}
                <p className="text-gray-400 dark:text-gray-600 text-sm mt-4 italic">
                  (*) Une réduction de 5% est accordée pour tout règlement en une fois des frais de formation
                </p>
              </div>

              {/* Informations complémentaires */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 max-w-4xl mx-auto">
                <div className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300">
                  <h3 className="text-white dark:text-gray-800 font-semibold text-base sm:text-lg mb-4">Avantages du financement</h3>
                  <ul className="text-gray-300 dark:text-gray-600 space-y-2">
                    <li>• Paiement échelonné possible</li>
                    <li>• Réduction de 5% pour paiement en une fois</li>
                    <li>• Bourses d'État disponibles</li>
                    <li>• Aide au logement étudiant</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300">
                  <h3 className="text-white dark:text-gray-800 font-semibold text-base sm:text-lg mb-4">Alternance 2e année</h3>
                  <ul className="text-gray-300 dark:text-gray-600 space-y-2">
                    <li>• Formation 100% gratuite</li>
                    <li>• Salaire de 43% à 100% du SMIC</li>
                    <li>• Prise en charge par l'OPCO</li>
                    <li>• Accompagnement recherche entreprise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-[#6366F1]/10 to-purple-600/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white dark:text-gray-800 mb-6">
            Prêt à rejoindre le Bachelor 1 & 2 Marketing Digital ?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
            Lancez votre carrière dans le marketing digital avec une formation complète et reconnue par l'État.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/candidature"
              prefetch={true}
              className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 flex items-center justify-center text-sm sm:text-base">
              Candidater maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="border-2 border-[#6366F1] text-[#6366F1] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#6366F1] hover:text-white transition-all duration-300 text-sm sm:text-base">
              Demander des informations
            </button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Bachelor12Page;