import React, { useState } from "react";
import { MapPin } from 'lucide-react';

interface CampusProps {
  onNavigateToCampus?: (campus: string) => void;
}

const Campus: React.FC<CampusProps> = ({ onNavigateToCampus }) => {
  const [hoveredCampus, setHoveredCampus] = React.useState<string>('');
  const [imgError, setImgError] = useState(false);

  const campusData = [
    { name: "Paris", image: "/images/campus/ecole marketing paris.jpg" },
    { name: "Saint-Quentin en Yvelines", image: "/images/campus/ecole marketing versaille.jpg" },
    { name: "Val d'Europe", image: "/images/campus/ecole marketing marne la vallee.jpg" },
    { name: "Lyon", image: "/images/campus/ecole marketing lyon.jpeg" },
    { name: "Lille", image: "/images/campus/ecole marketing lille.jpg" },
    { name: "Montpellier", image: "/images/campus/ecole marketing montpellier.jpg" },
    { name: "Nice", image: "/images/campus/ecole marketing nice.jpeg" },
    { name: "Bordeaux", image: "/images/campus/ecole de marketing bordeaux.jpg" }
  ];

  return (
    <section id="campus" className="py-20 bg-gradient-to-br from-gray-800 to-gray-700 dark:from-gray-100 dark:to-gray-200 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16">
          {/* Titre et texte à gauche */}
          <div className="text-left mb-8 lg:mb-0 flex-1 lg:pr-8 px-4 lg:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-gray-800 mb-4">
              Nos <span className="bg-gradient-to-r from-[#6366f1] to-purple-400 bg-clip-text text-transparent">Campus</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 dark:text-gray-600 max-w-2xl">
             Retrouvez HENCIA Business School, votre école de commerce, dans 8 villes de France pour une formation de proximité, alliant excellence académique et immersion digitale.
            </p>
            
            {/* Icône et feature en dessous du texte */}
            <div className="flex items-center mt-6">
              <div className="w-12 h-12 bg-[#6366f1]/20 rounded-full flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-[#6366f1]" />
              </div>
              <div>
                <h4 className="text-white dark:text-gray-800 font-semibold mb-1">Accès facilité</h4>
                <p className="text-gray-400 dark:text-gray-600 text-sm">
                  Campus à 5 min. des transports en commun.
                </p>
              </div>
            </div>
          </div>


          {/* Image à droite */}
<div className="flex-shrink-0 w-full lg:w-[28rem] px-4 lg:px-0">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
    {!imgError ? (
      <img
        src="/images/about/campus.png"
        alt="Campus HENCIA"
        className="w-full h-48 sm:h-64 lg:h-80 object-cover"
        onError={() => setImgError(true)}
      />
    ) : (
      <div className="flex items-center justify-center w-full h-48 sm:h-64 lg:h-80 bg-gray-200 dark:bg-gray-800">
        <span className="text-sm opacity-70">Image indisponible</span>
      </div>
    )}
  </div>
</div>


          
          
          
              {/* Fallback when image not found */}
              <div className="w-full h-48 sm:h-64 lg:h-80 bg-gradient-to-br from-[#6366f1]/20 to-purple-600/20 flex items-center justify-center rounded-2xl" style={{display: 'none'}}>
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#6366f1] mx-auto mb-4" />
                  <span className="text-[#6366f1] text-xl font-bold">Nos Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Layout principal : Carte à gauche, Villes à droite */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start px-4 lg:px-0">
            
            {/* Carte de France - Gauche */}
            <div className="bg-gray-900/50 dark:bg-white/50 rounded-2xl p-6 border border-gray-800 dark:border-gray-300">
              <h3 className="text-white dark:text-gray-800 font-bold text-lg sm:text-xl mb-6 text-center">
                Nos 8 campus en France
              </h3>
              <div className="relative bg-gray-800/30 dark:bg-gray-200/30 rounded-xl p-2 sm:p-4">
                <div className="relative">
                  {/* SVG de la France */}
                  <div className="relative">
                    <img 
                      src="/images/france.svg" 
                      alt="Carte de France" 
                      className="w-full h-auto max-h-60 sm:max-h-80 mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300 france-map"
                    />
                    
                    {/* Overlay pour les pins - positionnés en absolu sur l'image */}
                    <div className="absolute inset-0">
                      {/* Paris - Centre */}
                      <button 
                        onClick={() => onNavigateToCampus && onNavigateToCampus('Paris')}
                        onMouseEnter={() => setHoveredCampus('Paris')}
                        onMouseLeave={() => setHoveredCampus('')}
                        className="absolute cursor-pointer group" 
                        style={{ top: '22%', left: '48%' }}
                      >
                        <div className="relative">
        {/* Styles CSS pour colorer la carte */}
        <style jsx>{`
          .france-map {
            filter: brightness(0) invert(1);
          }
          
          /* Effet hover pour la carte */
          .france-map:hover {
            filter: brightness(0) invert(1) drop-shadow(0 0 10px rgba(122, 39, 253, 0.3));
          }
        `}</style>

                          <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                            hoveredCampus === 'Paris' ? 'w-4 h-4 sm:w-5 sm:h-5 bg-[#f43f5e]' : 'bg-[#6366f1] group-hover:w-4 group-hover:h-4 sm:group-hover:w-5 sm:group-hover:h-5 group-hover:bg-[#f43f5e]'
                          }`}></div>
                          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 animate-pulse ${
                            hoveredCampus === 'Paris' ? 'bg-[#f43f5e]/30' : 'bg-[#6366f1]/30'
                          }`}></div>
                          <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Paris
                          </div>
                        </div>
                      </button>

                      {/* St-Quentin - Nord de Paris */}
                      <button 
                        onClick={() => onNavigateToCampus && onNavigateToCampus('Saint-Quentin en Yvelines')}
                        onMouseEnter={() => setHoveredCampus('Saint-Quentin en Yvelines')}
                        onMouseLeave={() => setHoveredCampus('')}
                        className="absolute cursor-pointer group" 
                        style={{ top: '21%', left: '45%' }}
                      >
                        <div className="relative">
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                            hoveredCampus === 'Saint-Quentin en Yvelines' ? 'w-3 h-3 sm:w-4 sm:h-4 bg-[#f43f5e]' : 'bg-[#6366f1] group-hover:w-3 group-hover:h-3 sm:group-hover:w-4 sm:group-hover:h-4 group-hover:bg-[#f43f5e]'
                          }`}></div>
                          <div className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full absolute -top-1 -left-1 sm:-top-1.5 sm:-left-1.5 animate-pulse ${
                            hoveredCampus === 'Saint-Quentin en Yvelines' ? 'bg-[#f43f5e]/30' : 'bg-[#6366f1]/30'
                          }`}></div>
                          <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Saint-Quentin en Yvelines
                          </div>
                        </div>
                      </button>

                      {/* Val d'Europe - Est de Paris */}
                      <button 
                        onClick={() => onNavigateToCampus && onNavigateToCampus('Val d\'Europe')}
                        onMouseEnter={() => setHoveredCampus('Val d\'Europe')}
                        onMouseLeave={() => setHoveredCampus('')}
                        className="absolute cursor-pointer group" 
                        style={{ top: '21%', left: '52%' }}
                      >
                        <div className="relative">
                          <div className={`w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                            hoveredCampus === 'Val d\'Europe' ? 'w-4 h-4 bg-[#f43f5e]' : 'bg-[#6366f1] group-hover:w-4 group-hover:h-4 group-hover:bg-[#f43f5e]'
                          }`}></div>
                          <div className={`w-6 h-6 rounded-full absolute -top-1.5 -left-1.5 animate-pulse ${
                            hoveredCampus === 'Val d\'Europe' ? '[#f43f5e]/30' : 'bg-[#6366f1]/30'
                          }`}></div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Val d'Europe
                          </div>
                        </div>
                      </button>

                      {/* Lyon - Sud-Est */}
                      <button 
                        onClick={() => onNavigateToCampus && onNavigateToCampus('Lyon')}
                        onMouseEnter={() => setHoveredCampus('Lyon')}
                        onMouseLeave={() => setHoveredCampus('')}
                        className="absolute cursor-pointer group" 
                        style={{ top: '55%', left: '58%' }}
                      >
                        <div className="relative">
                          <div className={`w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                            hoveredCampus === 'Lyon' ? 'w-4 h-4 bg-[#f43f5e]' : 'bg-[#6366f1] group-hover:w-4 group-hover:h-4 group-hover:bg-[#f43f5e]'
                          }`}></div>
                          <div className={`w-6 h-6 rounded-full absolute -top-1.5 -left-1.5 animate-pulse ${
                            hoveredCampus === 'Lyon' ? 'bg-[#f43f5e]/30' : 'bg-[#6366f1]/30'
                          }`}></div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Lyon
                          </div>
                        </div>
                      </button>

                      {/* Lille - Nord */}
                      <button 
                        onClick={() => onNavigateToCampus && onNavigateToCampus('Lille')}
                        onMouseEnter={() => setHoveredCampus('Lille')}
                        onMouseLeave={() => setHoveredCampus('')}
                        className="absolute cursor-pointer group" 
                        style={{ top: '3%', left: '50%' }}
                      >
                        <div className="relative">
                          <div className={`w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                            hoveredCampus === 'Lille' ? 'w-4 h-4 bg-[#f43f5e]' : 'bg-[#6366f1] group-hover:w-4 group-hover:h-4 group-hover:bg-[#f43f5e]'
                          }`}></div>
                          <div className={`w-6 h-6 rounded-full absolute -top-1.5 -left-1.5 animate-pulse ${
                            hoveredCampus === 'Lille' ? 'bg-[#f43f5e]/30' : 'bg-[#6366f1]/30'
                          }`}></div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Lille
                          </div>
                        </div>
                      </button>

                      {/* Montpellier - Sud */}
                      <button 
                        onClick={() => onNavigateToCampus && onNavigateToCampus('Montpellier')}
                        onMouseEnter={() => setHoveredCampus('Montpellier')}
                        onMouseLeave={() => setHoveredCampus('')}
                        className="absolute cursor-pointer group" 
                        style={{ top: '75%', left: '53%' }}
                      >
                        <div className="relative">
                          <div className={`w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                            hoveredCampus === 'Montpellier' ? 'w-4 h-4 bg-[#f43f5e]' : 'bg-[#6366f1] group-hover:w-4 group-hover:h-4 group-hover:bg-[#f43f5e]'
                          }`}></div>
                          <div className={`w-6 h-6 rounded-full absolute -top-1.5 -left-1.5 animate-pulse ${
                            hoveredCampus === 'Montpellier' ? 'bg-[#f43f5e]/30' : 'bg-[#6366f1]/30'
                          }`}></div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Montpellier
                          </div>
                        </div>
                      </button>

                      {/* Nice - Sud-Est côte */}
                      <button 
                        onClick={() => onNavigateToCampus && onNavigateToCampus('Nice')}
                        onMouseEnter={() => setHoveredCampus('Nice')}
                        onMouseLeave={() => setHoveredCampus('')}
                        className="absolute cursor-pointer group" 
                        style={{ top: '75%', left: '72%' }}
                      >
                        <div className="relative">
                          <div className={`w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                            hoveredCampus === 'Nice' ? 'w-4 h-4 bg-[#f43f5e]' : 'bg-[#6366f1] group-hover:w-4 group-hover:h-4 group-hover:bg-[#f43f5e]'
                          }`}></div>
                          <div className={`w-6 h-6 rounded-full absolute -top-1.5 -left-1.5 animate-pulse ${
                            hoveredCampus === 'Nice' ? 'bg-[#f43f5e]/30' : 'bg-[#6366f1]/30'
                          }`}></div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Nice
                          </div>
                        </div>
                      </button>

                      {/* Bordeaux - Sud-Ouest */}
                      <button 
                        onClick={() => onNavigateToCampus && onNavigateToCampus('Bordeaux')}
                        onMouseEnter={() => setHoveredCampus('Bordeaux')}
                        onMouseLeave={() => setHoveredCampus('')}
                        className="absolute cursor-pointer group" 
                        style={{ top: '60%', left: '32%' }}
                      >
                        <div className="relative">
                          <div className={`w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                            hoveredCampus === 'Bordeaux' ? 'w-4 h-4 bg-[#f43f5e]' : 'bg-[#6366f1] group-hover:w-4 group-hover:h-4 group-hover:bg-[#f43f5e]'
                          }`}></div>
                          <div className={`w-6 h-6 rounded-full absolute -top-1.5 -left-1.5 animate-pulse ${
                            hoveredCampus === 'Bordeaux' ? 'bg-[#f43f5e]/30' : 'bg-[#6366f1]/30'
                          }`}></div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Bordeaux
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Légende */}
                <div className="flex items-center justify-center mt-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#6366f1] rounded-full mr-2"></div>
                    <span className="text-gray-300 dark:text-gray-600 text-sm">Campus de l'HENCIA</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Liste des campus - Droite */}
            <div className="space-y-4">
              <h3 className="text-white dark:text-gray-800 font-bold text-lg sm:text-xl mb-6">
                Découvrez nos campus
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
                {campusData.map((campus, index) => (
                  <div
                    key={index}
                    onClick={() => onNavigateToCampus && onNavigateToCampus(campus.name)}
                    onMouseEnter={() => setHoveredCampus(campus.name)}
                    onMouseLeave={() => setHoveredCampus('')}
                    className={`bg-gray-900/50 rounded-xl p-3 sm:p-4 border transition-all duration-300 transform group cursor-pointer ${
                      hoveredCampus === campus.name ? 'scale-105 bg-gray-800/50 dark:bg-white/90' : 'hover:scale-105 hover:bg-gray-800/50 dark:bg-white/90'
                    } border-transparent dark:border-gray-300`}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      {/* Image plus petite */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 dark:bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={campus.image}
                          alt={`Campus ${campus.name}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback when image not found */}
                        <div className="w-full h-full bg-gradient-to-br from-[#6366f1]/20 to-purple-600/20 flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-[#6366f1] text-lg font-bold">{campus.name.charAt(0)}</span>
                        </div>
                      </div>

                      {/* Informations */}
                      <div className="flex-1">
                        <h4 className={`font-bold text-lg mb-1 transition-colors ${
                          hoveredCampus === campus.name ? 'text-[#6366f1]' : 'text-white dark:text-gray-800 group-hover:text-[#6366f1]'
                        } text-sm sm:text-base lg:text-lg`}>
                          {campus.name}
                        </h4>
                        <div className="flex items-center text-gray-400 dark:text-gray-600 text-xs sm:text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>Campus disponible</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;