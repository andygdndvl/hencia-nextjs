import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Users, Award, CheckCircle, ArrowRight, Target, Globe, Calendar, Zap, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MasterePageProps {
  onBack: () => void;
  onNavigateToFormation?: (formation: string) => void;
}

const MasterePage: React.FC<MasterePageProps> = ({ onBack, onNavigateToFormation }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('programme');

  const tabs = [
    { id: 'programme', label: 'Programme' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'financement', label: 'Financement' }
  ];

  const programDetails = {
    modules: [
      {
        title: "Stratégie Digitale Avancée",
        duration: "6h/semaine",
        description: "Transformation digitale, innovation, stratégies omnicanales"
      },
      {
        title: "Management et Leadership",
        duration: "5h/semaine", 
        description: "Gestion d'équipe, leadership digital, conduite du changement"
      },
      {
        title: "Business Intelligence",
        duration: "4h/semaine",
        description: "Data science marketing, IA, machine learning appliqué"
      },
      {
        title: "Growth Hacking Avancé",
        duration: "4h/semaine",
        description: "Croissance exponentielle, expérimentation, métriques avancées"
      },
      {
        title: "Marketing International",
        duration: "4h/semaine",
        description: "Stratégies globales, cultures digitales, expansion internationale"
      },
      {
        title: "Innovation et Entrepreneuriat",
        duration: "3h/semaine",
        description: "Création de startup, innovation digitale, business model"
      }
    ],
    specializations: [
      {
        title: "Digital Strategy & Innovation",
        description: "Pilotage de la transformation digitale des entreprises"
      },
      {
        title: "Data-Driven Marketing",
        description: "Marketing basé sur l'analyse de données et l'IA"
      },
      {
        title: "International Digital Marketing",
        description: "Stratégies marketing pour les marchés internationaux"
      }
    ],
    careers: [
      { title: "Directeur Marketing Digital", salary: "55-80k€", description: "Direction stratégique du marketing digital d'une entreprise" },
      { title: "Consultant Senior Digital", salary: "50-70k€", description: "Conseil en transformation digitale pour grandes entreprises" },
      { title: "Chief Growth Officer", salary: "60-90k€", description: "Responsable de la croissance globale de l'entreprise" },
      { title: "Head of Digital", salary: "55-75k€", description: "Direction de tous les canaux digitaux d'une organisation" },
      { title: "Digital Innovation Manager", salary: "50-70k€", description: "Pilotage de l'innovation digitale et des nouveaux projets" },
      { title: "Entrepreneur Digital", salary: "Variable", description: "Création et développement de sa propre entreprise digitale" }
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
            <span className="text-[#a855f7]">Mastère Marketing Digital</span>
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
            <source src="https://videos.pexels.com/video-files/3196036/3196036-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            {/* Fallback gradient if video fails to load */}
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3196036/3196036-uhd_2560_1440_25fps.mp4" type="video/mp4" />
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
                  <h1 className="text-4xl font-bold text-white mb-1">Mastère Marketing Digital</h1>
                  <p className="text-[#a855f7] text-2xl font-medium">Management et Stratégie Digitale</p>
                </div>
                <span className="bg-[#a855f7] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Bac +5
                </span>
              </div>
              
              <div className="flex gap-6 mb-4">
                <div className="flex items-center text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>2 ans</span>
                </div>
                <div className="flex items-center text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg">
                  <Users className="w-4 h-4 mr-2" />
                  <span>20 étudiants max</span>
                </div>
                <div className="flex items-center text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg">
                  <Award className="w-4 h-4 mr-2" />
                  <span>Diplôme d'État</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                Le Mastère Marketing Digital forme les futurs leaders du marketing numérique. 
                Développez une vision stratégique, managériale et internationale pour piloter 
                la transformation digitale des entreprises et créer de la valeur.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/candidature"
                  prefetch={true}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
                  Candidater maintenant
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="border-2 border-[#7a27fd] text-[#7a27fd] px-8 py-4 rounded-lg font-semibold hover:bg-[#7a27fd] hover:text-white transition-all duration-300">
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
              <div className="w-16 h-16 bg-[#7a27fd]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-[#7a27fd]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2">Diplôme reconnu</h3>
                <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">
                  Titre de niveau 7 (bac+5) reconnu par l'État en Mastère Marketing Digital
                </p>
              </div>
            </div>

            {/* Prochaines rentrées */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[#7a27fd]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-8 h-8 text-[#7a27fd]" />
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
              <div className="w-16 h-16 bg-[#7a27fd]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-[#7a27fd]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2">Rythme de formation</h3>
                <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">
                  Mastère 1ère & 2ème année<br />
                  Formation en alternance privilégiée
                </p>
              </div>
            </div>

            {/* Durée de formation */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[#7a27fd]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-[#7a27fd]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2">Durée de la formation</h3>
                <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">
                  M1 : 600h et mission de 6 mois<br />
                  M2 : 500h et alternance
                </p>
              </div>
            </div>

            {/* Profils acceptés */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[#7a27fd]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-[#7a27fd]" />
              </div>
              <div>
                <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2">Profils acceptés</h3>
                <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">
                  Bac+3 validé, Bachelor, Licence, BUT
                </p>
              </div>
            </div>

            {/* Campus concerné */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[#7a27fd]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-[#7a27fd]" />
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
                Programme de <span className="text-[#7a27fd]">Formation</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {programDetails.modules.map((module, index) => (
                  <div key={index} className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#7a27fd]/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-white dark:text-gray-800 font-semibold text-lg flex-1">{module.title}</h3>
                      <span className="text-[#7a27fd] text-sm font-medium bg-[#7a27fd]/20 px-3 py-1 rounded-full ml-4">
                        {module.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">{module.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Spécialisations */}
          <section className="py-16 bg-gray-800 dark:bg-gray-100">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                  Spécialisations <span className="text-[#7a27fd]">Disponibles</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {programDetails.specializations.map((spec, index) => (
                    <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#7a27fd]/50 transition-all duration-300 text-center group">
                      <div className="w-16 h-16 bg-[#7a27fd]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#7a27fd]/30 transition-colors">
                        {index === 0 && <Target className="w-8 h-8 text-[#7a27fd]" />}
                        {index === 1 && <CheckCircle className="w-8 h-8 text-[#7a27fd]" />}
                        {index === 2 && <Globe className="w-8 h-8 text-[#7a27fd]" />}
                      </div>
                      <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-3 group-hover:text-[#7a27fd] transition-colors">
                        {spec.title}
                      </h3>
                      <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">{spec.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 bg-[#7a27fd]/10 rounded-xl border border-[#7a27fd]/30">
                  <h4 className="text-white dark:text-gray-800 font-semibold mb-3">Formation d'excellence :</h4>
                  <ul className="text-gray-300 dark:text-gray-600 space-y-2">
                    <li>• Séminaires avec des dirigeants d'entreprises</li>
                    <li>• Mission consulting de 6 mois en entreprise</li>
                    <li>• Possibilité d'échange international</li>
                    <li>• Accompagnement à l'entrepreneuriat</li>
                    <li>• Réseau alumni de haut niveau</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Débouchés */}
          <section className="py-16 bg-gray-900 dark:bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Débouchés <span className="text-[#7a27fd]">Professionnels</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {programDetails.careers.map((career, index) => (
                  <div key={index} className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#7a27fd]/50 transition-all duration-300 group">
                    <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2 group-hover:text-[#7a27fd] transition-colors">
                      {career.title}
                    </h3>
                    <div className="text-[#7a27fd] font-medium mb-3">{career.salary}</div>
                    <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">{career.description}</p>
                  </div>
                ))}
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
                Processus d'<span className="text-[#7a27fd]">Admission</span>
              </h2>
              <div className="bg-gray-800/50 dark:bg-white/50 rounded-2xl p-8 border border-gray-700 dark:border-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#7a27fd]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#7a27fd] font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-white dark:text-gray-800 font-semibold mb-2">Dossier de candidature</h3>
                    <p className="text-gray-300 dark:text-gray-600 text-sm">CV, lettre de motivation, relevés de notes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#7a27fd]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#7a27fd] font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-white dark:text-gray-800 font-semibold mb-2">Entretien approfondi</h3>
                    <p className="text-gray-300 dark:text-gray-600 text-sm">Évaluation du projet professionnel et de la motivation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#7a27fd]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#7a27fd] font-bold text-xl">3</span>
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
                Solutions de <span className="text-[#7a27fd]">Financement</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300">
                  <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-4">Formation initiale</h3>
                  <ul className="text-gray-300 dark:text-gray-600 space-y-2">
                    <li>• Frais de scolarité : 8 500€/an</li>
                    <li>• Paiement en plusieurs fois possible</li>
                    <li>• Bourses d'État disponibles</li>
                    <li>• Prêts étudiants partenaires</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300">
                  <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-4">Alternance</h3>
                  <ul className="text-gray-300 dark:text-gray-600 space-y-2">
                    <li>• Formation 100% gratuite</li>
                    <li>• Salaire de 53% à 100% du SMIC</li>
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
      <section className="py-16 bg-gradient-to-r from-[#7a27fd]/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6">
            Prêt à devenir un leader du marketing digital ?
          </h2>
          <p className="text-2xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez notre Mastère et développez les compétences stratégiques pour diriger dans le digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/candidature"
              prefetch={true}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
              Candidater maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="border-2 border-[#a855f7] text-[#a855f7] px-8 py-4 rounded-lg font-semibold hover:bg-[#a855f7] hover:text-white transition-all duration-300">
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

export default MasterePage;