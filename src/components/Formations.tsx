import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Award } from 'lucide-react';

interface FormationsProps {
  onNavigateToFormation: (formation: string) => void;
  onNavigateToCandidature?: () => void;
}

const Formations: React.FC<FormationsProps> = ({ onNavigateToFormation, onNavigateToCandidature }) => {
  const [activeTab, setActiveTab] = useState('postbac');

  const tabs = [
    { id: 'postbac', label: 'Postbac' },
    { id: 'bachelor', label: 'Bachelor' },
    { id: 'mastere', label: 'Mastère' }
  ];

  const formations = {
    postbac: {
      formations: [
        {
          title: "Bachelor 1 & 2 Marketing Digital",
          subtitle: "Communication Opérationnelle & Gestion de Projets Digitaux",
          duration: "2 ans",
          students: "30 étudiants max",
          level: "Bac +2",
          description: "",
          skills: ["Marketing digital", "Communication digitale", "Gestion de projets", "Réseaux sociaux", "Content marketing", "Analytics"],
          image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1200",
          opportunities: ["Assistant marketing digital", "Community manager", "Chargé de communication", "Chef de projet junior"]
        }
      ]
    },
    bachelor: {
      title: "Bachelor 3 Marketing Digital",
      subtitle: "Spécialisation Marketing Digital et E-commerce",
      duration: "1 an",
      students: "30 étudiants max",
      level: "Bac +3",
      description: "",
      skills: ["SEO/SEA", "Social Media", "Google Analytics", "Marketing automation", "Content marketing", "Data analysis"],
      image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1200",
      opportunities: ["Chef de projet digital", "Traffic manager", "Community manager", "Consultant SEO"]
    },
    mastere: {
      title: "Mastère Marketing Digital",
      subtitle: "Management et Stratégie Digitale",
      duration: "2 ans",
      students: "20 étudiants max",
      level: "Bac +5",
      description: "",
      skills: ["Stratégie digitale", "Management d'équipe", "Business intelligence", "Growth hacking", "Marketing automation avancé", "ROI et analytics"],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      opportunities: ["Directeur marketing digital", "Consultant senior", "Chef de projet digital", "Responsable acquisition"]
    }
  };

  const [currentFormationIndex, setCurrentFormationIndex] = useState(0);
  
  const currentFormation = activeTab === 'postbac' 
    ? formations[activeTab].formations[currentFormationIndex]
    : formations[activeTab];

  return (
    <section id="formations" className="py-20 bg-gray-900 dark:bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-gray-800 mb-4">
            Nos <span className="bg-gradient-to-r from-[#6366f1] to-purple-400 bg-clip-text text-transparent">Formations</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 dark:text-gray-600 max-w-2xl mx-auto px-4">
            Formations diplômantes en marketing digital, de Bac à Bac +5, reconnues par l'État
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 dark:bg-white/50 backdrop-blur-sm rounded-xl p-2 border border-gray-800 dark:border-gray-300">
            <div className="flex space-x-1 sm:space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#6366f1] to-purple-600 text-white shadow-lg'
                      : 'text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-800 hover:bg-gray-800/50 dark:hover:bg-gray-200/50'
                  } text-sm sm:text-base px-4 sm:px-6 lg:px-8`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Formation Card */}
        <div className="max-w-6xl mx-auto">
          {/* Affichage des formations */}
          {activeTab === 'postbac' ? (
            <div className="space-y-8">
              {formations[activeTab].formations.map((formation, index) => (
                <div 
                  key={index}
                  onClick={() => onNavigateToFormation('bachelor-12')}
                  className="bg-gray-900/50 dark:bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-800 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-500 transform hover:scale-[1.02] group cursor-pointer"
                >
                  <div className="p-6 lg:p-8 h-full">
                    {/* Title with badge aligned */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3 sm:gap-0">
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white dark:text-gray-800 mb-2">{formation.title}</h3>
                        <p className="text-[#6366f1] font-medium text-base sm:text-lg">{formation.subtitle}</p>
                      </div>
                      <span className="bg-[#6366f1] text-white px-4 py-2 rounded-full text-sm font-medium flex-shrink-0 sm:ml-4 self-start">
                        {formation.level}
                      </span>
                    </div>

                    {/* Info badges */}
                    <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
                      <div className="flex items-center text-gray-300 dark:text-gray-600 bg-gray-800/50 dark:bg-gray-200/50 px-4 py-2 rounded-lg">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{formation.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-300 dark:text-gray-600 bg-gray-800/50 dark:bg-gray-200/50 px-4 py-2 rounded-lg">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">{formation.students}</span>
                      </div>
                      <div className="flex items-center text-gray-300 dark:text-gray-600 bg-gray-800/50 dark:bg-gray-200/50 px-4 py-2 rounded-lg">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="text-sm">Diplôme d'État</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-gray-300 dark:text-gray-600 mb-4 leading-relaxed text-base">
                        {formation.description}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-white dark:text-gray-800 font-semibold mb-3 text-base">Compétences développées :</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {formation.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-[#6366f1]/20 text-[#6366f1] px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm border border-[#6366f1]/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Career opportunities */}
                    <div className="mb-6">
                      <h4 className="text-white dark:text-gray-800 font-semibold mb-3 text-base">Débouchés professionnels :</h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {formation.opportunities.map((opportunity, opportunityIndex) => (
                          <div key={opportunityIndex} className="flex items-center text-gray-300 dark:text-gray-600">
                            <div className="w-2 h-2 bg-[#6366f1] rounded-full mr-3"></div>
                            <span className="text-sm">{opportunity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/candidature"
                        prefetch={true}
                        className="flex-1 bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white py-3 px-4 sm:px-6 rounded-lg font-semibold group-hover:from-[#e11d48] group-hover:to-[#be123c] transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                      >
                        Candidater
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href={index === 0 ? '/bachelor-12' : '/bts-ndrc'}
                        prefetch={true}
                        className="flex-1 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white py-3 px-4 sm:px-6 rounded-lg font-semibold group-hover:from-[#4f46e5] group-hover:to-[#4338ca] transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                      >
                        En savoir plus
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div 
              onClick={activeTab === 'mastere' ? undefined : () => onNavigateToFormation(activeTab)}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl border transition-all duration-500 ${
                activeTab === 'mastere' 
                  ? 'border-gray-700 dark:border-gray-700 dark:bg-white/50 opacity-60 cursor-not-allowed grayscale' 
                  : 'border-gray-800 dark:border-gray-800 dark:bg-white/50 hover:border-[#6366f1]/50 transform hover:scale-[1.02] group cursor-pointer'
              }`}
            >
              <div className="p-6 lg:p-8 h-full relative">
                {/* Badge "À venir" centré pour le Mastère */}
                {activeTab === 'mastere' && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 bg-gray-900/80 rounded-2xl">
                    <div className="bg-orange-[#f43f5e] text-white px-8 py-4 rounded-xl text-4xl font-bold shadow-2xl">
                      À venir
                    </div>
                  </div>
                )}
                
                {/* Title with badge aligned */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3 sm:gap-0">
                  <div>
                    <h3 className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 ${
                      activeTab === 'mastere' ? 'text-gray-500' : 'text-white dark:text-gray-800'
                    }`}>{currentFormation.title}</h3>
                    <p className={`font-medium text-base sm:text-lg ${
                      activeTab === 'mastere' ? 'text-gray-600' : 'text-[#6366f1]'
                    }`}>{currentFormation.subtitle}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium flex-shrink-0 sm:ml-4 self-start ${
                    activeTab === 'mastere' 
                      ? 'bg-gray-600 text-gray-300' 
                      : 'bg-[#6366f1] text-white'
                  }`}>
                    {currentFormation.level}
                  </span>
                </div>

                {/* Info badges */}
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
                  <div className={`flex items-center px-4 py-2 rounded-lg ${
                    activeTab === 'mastere' 
                      ? 'text-gray-500 bg-gray-700/50' 
                      : 'text-gray-300 dark:text-gray-600 bg-gray-800/50 dark:bg-gray-200/50'
                  }`}>
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{currentFormation.duration}</span>
                  </div>
                  <div className={`flex items-center px-4 py-2 rounded-lg ${
                    activeTab === 'mastere' 
                      ? 'text-gray-500 bg-gray-700/50' 
                      : 'text-gray-300 dark:text-gray-600 bg-gray-800/50 dark:bg-gray-200/50'
                  }`}>
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{currentFormation.students}</span>
                  </div>
                  <div className={`flex items-center px-4 py-2 rounded-lg ${
                    activeTab === 'mastere' 
                      ? 'text-gray-500 bg-gray-700/50' 
                      : 'text-gray-300 dark:text-gray-600 bg-gray-800/50 dark:bg-gray-200/50'
                  }`}>
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-sm">Diplôme d'État</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className={`mb-4 leading-relaxed text-base ${
                    activeTab === 'mastere' ? 'text-gray-500' : 'text-gray-300 dark:text-gray-600'
                  }`}>
                    {currentFormation.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className={`font-semibold mb-3 text-base ${
                    activeTab === 'mastere' ? 'text-gray-500' : 'text-white dark:text-gray-800'
                  }`}>Compétences développées :</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {currentFormation.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm border ${
                          activeTab === 'mastere' 
                            ? 'bg-gray-600/20 text-gray-500 border-gray-600/30' 
                            : 'bg-[#6366f1]/20 text-[#6366f1] border-[#6366f1]/30'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career opportunities */}
                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 text-base ${
                    activeTab === 'mastere' ? 'text-gray-500' : 'text-white dark:text-gray-800'
                  }`}>Débouchés professionnels :</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {currentFormation.opportunities.map((opportunity, index) => (
                      <div key={index} className={`flex items-center ${
                        activeTab === 'mastere' ? 'text-gray-500' : 'text-gray-300 dark:text-gray-600'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          activeTab === 'mastere' ? 'bg-gray-600' : 'bg-[#6366f1]'
                        }`}></div>
                        <span className="text-sm">{opportunity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={activeTab === 'mastere' ? '#' : '/candidature'}
                    prefetch={activeTab !== 'mastere'}
                    disabled={activeTab === 'mastere'}
                    className={`flex-1 py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base ${
                    activeTab === 'mastere' 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed pointer-events-none' 
                      : 'bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white group-hover:from-[#e11d48] group-hover:to-[#be123c]'
                  }`}
                  >
                    {activeTab === 'mastere' ? 'Bientôt disponible' : 'Candidater'}
                    {activeTab !== 'mastere' && <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />}
                  </Link>
                  <Link
                    href={activeTab === 'mastere' ? '#' : `/${activeTab}`}
                    prefetch={activeTab !== 'mastere'}
                    disabled={activeTab === 'mastere'}
                    className={`flex-1 border-2 py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base ${
                    activeTab === 'mastere' 
                      ? 'border-gray-600 text-gray-500 cursor-not-allowed pointer-events-none' 
                      : 'border-[#6366f1] text-[#6366f1] group-hover:bg-[#6366f1] group-hover:text-white'
                  }`}
                  >
                    {activeTab === 'mastere' ? 'Informations à venir' : 'En savoir plus'}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Formations;