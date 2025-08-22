import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Users, Award, CheckCircle, ArrowRight, Target, Globe, Calendar, Zap, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BTSNDRCPageProps {
  onBack: () => void;
  onNavigateToFormation?: (formation: string) => void;
}

const BTSNDRCPage: React.FC<BTSNDRCPageProps> = ({ onBack, onNavigateToFormation }) => {
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
      title: "1ère année - Fondamentaux de la relation client",
      blocs: [
        {
          title: "Bloc 1 – Relation client et négociation-vente",
          modules: [
            "Maîtriser la relation client et l'animation réseaux",
            "Organiser et animer un événement commercial",
            "Exploiter et mutualiser l'information commerciale",
            "Maîtriser les technologies commerciales"
          ]
        },
        {
          title: "Bloc 2 – Relation client à distance et digitalisation",
          modules: [
            "Animer la relation client digitale",
            "Développer la relation client à distance",
            "Organiser son activité professionnelle",
            "Mettre en œuvre la politique commerciale"
          ]
        },
        {
          title: "Bloc 3 – Relation client et animation de réseaux",
          modules: [
            "Développer et piloter un réseau de partenaires",
            "Créer et animer un réseau de vente directe",
            "Encadrer une équipe commerciale",
            "Optimiser la performance de l'équipe commerciale"
          ]
        }
      ]
    },
    year2: {
      title: "2ème année - Spécialisation et professionnalisation",
      blocs: [
        {
          title: "Bloc 1 – Relation client et négociation-vente (approfondissement)",
          modules: [
            "Gérer la relation client omnicanale",
            "Animer un réseau de distributeurs",
            "Vendre et négocier avec les grands comptes",
            "Créer et développer un portefeuille clients"
          ]
        },
        {
          title: "Bloc 2 – Relation client à distance et digitalisation (expertise)",
          modules: [
            "Concevoir une stratégie omnicanale",
            "Animer les réseaux sociaux professionnels",
            "Développer les ventes en ligne",
            "Analyser les performances digitales"
          ]
        },
        {
          title: "Bloc 3 – Relation client et animation de réseaux (management)",
          modules: [
            "Manager une équipe commerciale",
            "Développer un réseau de franchise",
            "Piloter la performance commerciale",
            "Conduire un projet commercial innovant"
          ]
        }
      ]
    },
    internship: "14 semaines de stage sur les 2 ans",
    careers: [
      { title: "Commercial terrain", salary: "25-35k€", description: "Développement commercial en B2B ou B2C" },
      { title: "Chargé de clientèle", salary: "24-32k€", description: "Gestion et développement d'un portefeuille clients" },
      { title: "Conseiller commercial", salary: "23-30k€", description: "Conseil et vente de produits/services" },
      { title: "Responsable e-commerce", salary: "28-38k€", description: "Gestion d'une boutique en ligne" },
      { title: "Chef des ventes", salary: "35-45k€", description: "Management d'équipe commerciale" }
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
            <span className="mx-2">></span>
            <span>Formations</span>
            <span className="mx-2">></span>
            <span className="text-[#6366F1]">BTS NDRC</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden -mt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/BTS.mp4" type="video/mp4" />
            {/* Fallback gradient if video fails to load */}
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        <div className="container mx-auto px-4 pt-20">
          <div className="relative z-10 max-w-4xl">
            <div className="max-w-2xl">
              {/* Title section */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-1">BTS NDRC</h1>
                  <p className="text-[#6366F1] text-2xl font-medium">Négociation et Digitalisation de la Relation Client</p>
                </div>
                <span className="bg-[#6366F1] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Bac +2
                </span>
              </div>
              
              <div className="flex gap-6 mb-4">
                <div className="flex items-center text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>2 ans</span>
                </div>
                <div className="flex items-center text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg">
                  <Users className="w-4 h-4 mr-2" />
                  <span>25 étudiants max</span>
                </div>
                <div className="flex items-center text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg">
                  <Award className="w-4 h-4 mr-2" />
                  <span>Diplôme d'État</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                Le BTS NDRC forme des commerciaux polyvalents capables de gérer 
                la relation client dans un environnement omnicanal. Maîtrisez les 
                techniques de vente, de négociation et les outils digitaux.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/candidature"
                  prefetch={true}
                  className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 flex items-center justify-center">
                  Candidater maintenant
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="border-2 border-[#6366F1] text-[#6366F1] px-8 py-4 rounded-lg font-semibold hover:bg-[#6366F1] hover:text-white transition-all duration-300">
                  Télécharger la brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section informations clés */}
      <section className="py-16 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Diplôme reconnu */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2">Diplôme reconnu</h3>
                <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">
                  BTS reconnu par l'État, inscrit au RNCP niveau 5
                </p>
              </div>
            </div>

            {/* Prochaines rentrées */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-8 h-8 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2">Prochaines rentrées</h3>
                <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">
                  Septembre 2025<br />
                  Janvier 2026
                </p>
              </div>
            </div>

            {/* Rythme de formation */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2">Rythme de formation</h3>
                <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">
                  Formation en initial<br />
                  Alternance possible en 2ème année
                </p>
              </div>
            </div>

            {/* Durée de formation */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2">Durée de la formation</h3>
                <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">
                  1350h de formation<br />
                  + 14 semaines de stage
                </p>
              </div>
            </div>

            {/* Profils acceptés */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2">Profils acceptés</h3>
                <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">
                  Bacheliers toutes filières
                </p>
              </div>
            </div>

            {/* Campus concerné */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-[#6366F1]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2">Campus concernés</h3>
                <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">
                  Disponible sur tous nos campus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation par onglets */}
      <section className="py-8 bg-gray-800 dark:bg-gray-200 border-b border-gray-700 dark:border-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-0 bg-gray-900/50 dark:bg-white/50 rounded-lg p-1 border border-gray-700 dark:border-gray-300">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-8 py-3 font-semibold transition-all duration-300 rounded-md ${
                    activeTab === tab.id
                      ? 'text-white dark:text-gray-800 bg-gray-800 dark:bg-gray-200'
                      : 'text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-800 hover:bg-gray-800/50 dark:hover:bg-gray-200/50'
                  }`}
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
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Programme de <span className="text-[#6366F1]">Formation</span>
              </h2>
              
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 1ère année - Gauche */}
                  <div>
                    <h3 className="text-white dark:text-gray-800 font-bold text-2xl mb-6 flex items-center">
                      <div className="w-4 h-4 bg-[#6366F1] rounded-full mr-4"></div>
                      {programDetails.year1.title}
                    </h3>
                    <div className="space-y-4">
                      {programDetails.year1.blocs.map((bloc, blocIndex) => (
                        <div key={blocIndex} className="bg-gray-800/50 dark:bg-white/50 rounded-xl border border-gray-700 dark:border-gray-300 overflow-hidden">
                          <button
                            onClick={() => toggleBlock(`year1-bloc-${blocIndex}`)}
                            className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-700/50 dark:hover:bg-gray-100/50 transition-colors"
                          >
                            <h4 className="text-[#6366F1] font-semibold text-lg pr-2">{bloc.title}</h4>
                            {expandedBlocks[`year1-bloc-${blocIndex}`] ? (
                              <ChevronUp className="w-5 h-5 text-[#6366F1]" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-[#6366F1]" />
                            )}
                          </button>
                          {expandedBlocks[`year1-bloc-${blocIndex}`] && (
                            <div className="px-4 pb-4">
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
                    <h3 className="text-white dark:text-gray-800 font-bold text-2xl mb-6 flex items-center">
                      <div className="w-4 h-4 bg-[#f43f5e] rounded-full mr-4"></div>
                      {programDetails.year2.title}
                    </h3>
                    <div className="space-y-4">
                      {programDetails.year2.blocs.map((bloc, blocIndex) => (
                        <div key={blocIndex} className="bg-gray-800/50 dark:bg-white/50 rounded-xl border border-gray-700 dark:border-gray-300 overflow-hidden">
                          <button
                            onClick={() => toggleBlock(`year2-bloc-${blocIndex}`)}
                            className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-700/50 dark:hover:bg-gray-100/50 transition-colors"
                          >
                            <h4 className="text-[#f43f5e] font-semibold text-lg pr-2">{bloc.title}</h4>
                            {expandedBlocks[`year2-bloc-${blocIndex}`] ? (
                              <ChevronUp className="w-5 h-5 text-[#f43f5e]" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-[#f43f5e]" />
                            )}
                          </button>
                          {expandedBlocks[`year2-bloc-${blocIndex}`] && (
                            <div className="px-4 pb-4">
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
                  <h3 className="text-white dark:text-gray-800 font-bold text-xl mb-4 flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    Stage obligatoire en entreprise
                  </h3>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-300 dark:text-gray-600 text-lg font-medium">{programDetails.internship}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Débouchés */}
          <section className="py-16 bg-gray-800 dark:bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Débouchés <span className="text-[#6366F1]">Professionnels</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {programDetails.careers.map((career, index) => (
                  <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366F1]/50 transition-all duration-300 group">
                    <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2 group-hover:text-[#6366F1] transition-colors">
                      {career.title}
                    </h3>
                    <div className="text-[#6366F1] font-medium mb-3">{career.salary}</div>
                    <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">{career.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Et après votre BTS NDRC ? */}
          <section className="py-16 bg-gray-900 dark:bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Et après votre <span className="text-[#6366F1]">BTS NDRC ?</span>
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
                        vos compétences commerciales avec une expertise digitale. Formation intensive 
                        d'1 an axée sur le marketing digital et l'e-commerce.
                      </p>
                      
                      {/* Points clés */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#6366F1] mr-3" />
                          <span className="text-gray-300 dark:text-gray-600">Formation en 1 an après votre BTS</span>
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
                          <span className="text-gray-300 dark:text-gray-600">Accès direct aux postes de responsable marketing</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => {
                          window.scrollTo(0, 0);
                          onNavigateToFormation && onNavigateToFormation('bachelor');
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
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-8">
                Processus d'<span className="text-[#6366F1]">Admission</span>
              </h2>
              <div className="bg-gray-800/50 dark:bg-white/50 rounded-2xl p-8 border border-gray-700 dark:border-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#6366F1]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#6366F1] font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-white dark:text-gray-800 font-semibold mb-2">Dossier de candidature</h3>
                    <p className="text-gray-300 dark:text-gray-600 text-sm">CV, lettre de motivation, relevés de notes du bac</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#6366F1]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#6366F1] font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-white dark:text-gray-800 font-semibold mb-2">Tests et entretien</h3>
                    <p className="text-gray-300 dark:text-gray-600 text-sm">Évaluation des compétences et de la motivation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#6366F1]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#6366F1] font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-white dark:text-gray-800 font-semibold mb-2">Admission</h3>
                    <p className="text-gray-300 dark:text-gray-600 text-sm">Décision sous 48h et accompagnement personnalisé</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'financement' && (
        <section className="py-16 bg-gray-900 dark:bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Solutions de <span className="text-[#6366F1]">Financement</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300">
                  <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-4">Formation initiale</h3>
                  <ul className="text-gray-300 dark:text-gray-600 space-y-2">
                    <li>• Frais de scolarité : 6 500€/an</li>
                    <li>• Paiement en plusieurs fois possible</li>
                    <li>• Bourses d'État disponibles</li>
                    <li>• Prêts étudiants partenaires</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300">
                  <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-4">Alternance (2ème année)</h3>
                  <ul className="text-gray-300 dark:text-gray-600 space-y-2">
                    <li>• Formation 100% gratuite</li>
                    <li>• Salaire de 43% à 100% du SMIC</li>
                    <li>• Prise en charge par l'OPCO</li>
                    <li>• Réseau entreprises partenaires</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-[#6366F1]/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6">
            Prêt à devenir un expert de la relation client ?
          </h2>
          <p className="text-2xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez notre BTS NDRC et développez toutes les compétences pour réussir dans le commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/candidature"
              prefetch={true}
              className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 flex items-center justify-center">
              Candidater maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="border-2 border-[#6366F1] text-[#6366F1] px-8 py-4 rounded-lg font-semibold hover:bg-[#6366F1] hover:text-white transition-all duration-300">
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

export default BTSNDRCPage;