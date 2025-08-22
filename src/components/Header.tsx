import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, ArrowLeft, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  onNavigateToCandidature?: () => void;
  showBackButton?: boolean;
  onBack?: () => void;
  onNavigateToFormation?: (formation: string) => void;
  onNavigateToCampus?: (campus: string) => void;
  onNavigateToQuiSommesNous?: () => void;
  onNavigateToDiplomesCertifications?: () => void;
  onNavigateToRentrees?: () => void;
  onNavigateToCommentIntegrer?: () => void;
  onNavigateToHorsParcoursup?: () => void;
  onNavigateToParrainage?: () => void;
  onNavigateToHandicap?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateToCandidature, showBackButton = false, onBack, onNavigateToFormation, onNavigateToCampus, onNavigateToQuiSommesNous, onNavigateToDiplomesCertifications, onNavigateToRentrees, onNavigateToCommentIntegrer, onNavigateToHorsParcoursup, onNavigateToParrainage, onNavigateToHandicap }) => {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormationsOpen, setIsFormationsOpen] = useState(false);
  const [isCampusOpen, setIsCampusOpen] = useState(false);
  const [isEcoleOpen, setIsEcoleOpen] = useState(false);
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);

  const navItems = [
  ];

  const formations = [
    { name: "Bachelor 1 & 2 Marketing Digital", href: "/bachelor-12" },
    { name: "BTS NDRC", href: "/bts-ndrc" },
    { name: "Bachelor 3 Marketing Digital", href: "/bachelor" }
  ];

  const campusList = [
    "Paris",
    "Saint-Quentin en Yvelines", 
    "Val d'Europe",
    "Lille",
    "Lyon",
    "Nice",
    "Montpellier",
    "Bordeaux"
  ];

  const ecoleItems = [
    { name: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
    { name: "Nos diplômes et certifications", href: "/diplomes-certifications" },
    { name: "Dates de rentrées 2025/26", href: "/rentrees" },
    { name: "Événements", href: "/evenements" }
  ];

  const admissionsItems = [
    { name: "Comment intégrer HENCIA ?", href: "/comment-integrer", action: "comment-integrer" },
    { name: "Hors Parcoursup !", href: "/hors-parcoursup", action: "hors-parcoursup" },
    { name: "Parrainez vos amis", href: "/parrainage", action: "parrainage" },
    { name: "Dates de rentrées 2025/26", href: "/rentrees", action: "rentrees" }
  ];

  const handleFormationClick = (href: string) => {
    router.push(`/${href.replace('/', '')}`);
    setIsFormationsOpen(false);
    setIsMenuOpen(false);
  };

  const handleCampusClick = (campusName: string) => {
    const hashName = campusName.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
    router.push(`/campus/${hashName}`);
    setIsCampusOpen(false);
    setIsMenuOpen(false);
  };

  const handleEcoleClick = (href: string) => {
    router.push(href);
    setIsEcoleOpen(false);
  };

  const handleAdmissionsClick = (href: string) => {
    router.push(`/${href.replace('/', '')}`);
    setIsAdmissionsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800/95 dark:bg-white/95 backdrop-blur-sm border-b border-gray-700 dark:border-gray-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Back button (if needed) */}
          {showBackButton && onBack && (
            <button 
              onClick={onBack}
              className="flex items-center text-gray-300 dark:text-gray-600 hover:text-[#6366f1] transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour
            </button>
          )}

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <img 
              src={isDarkMode ? "/images/about/logo-dark.png" : "/images/about/logo.png"}
              alt="Logo École" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {/* L'école Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsEcoleOpen(!isEcoleOpen);
                  setIsFormationsOpen(false);
                  setIsCampusOpen(false);
                  setIsAdmissionsOpen(false);
                }}
                className="flex items-center text-gray-300 dark:text-gray-700 hover:text-[#6366f1] transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                L'école
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isEcoleOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isEcoleOpen && (
                <div 
                  className="absolute top-full left-0 w-64 xl:w-72 bg-gray-900 dark:bg-white border-l border-r border-b border-gray-700 dark:border-gray-300 rounded-b-lg shadow-xl z-50"
                >
                  <div className="py-1">
                    {ecoleItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        prefetch={true}
                        onClick={() => setIsEcoleOpen(false)}
                        className="block w-full text-left px-3 xl:px-4 py-2 text-gray-300 dark:text-gray-700 hover:text-[#6366f1] hover:bg-gray-800/50 dark:hover:bg-gray-100 transition-colors duration-200 font-medium text-sm xl:text-base"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Campus Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsCampusOpen(!isCampusOpen);
                  setIsFormationsOpen(false);
                  setIsEcoleOpen(false);
                  setIsAdmissionsOpen(false);
                }}
                className="flex items-center text-gray-300 dark:text-gray-700 hover:text-[#6366f1] transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                Campus
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isCampusOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isCampusOpen && (
                <div 
                  className="absolute top-full left-0 w-80 xl:w-96 bg-gray-900 dark:bg-white border-l border-r border-b border-gray-700 dark:border-gray-300 rounded-b-lg shadow-xl z-50"
                >
                  <div className="py-1 grid grid-cols-2 gap-0">
                    {campusList.map((campus, index) => (
                      <Link
                        key={index}
                        href={`/campus/${campus.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                        prefetch={true}
                        onClick={() => setIsCampusOpen(false)}
                        className="block text-left px-2 xl:px-4 py-2 text-gray-300 dark:text-gray-700 hover:text-[#6366f1] hover:bg-gray-800/50 dark:hover:bg-gray-100 transition-colors duration-200 font-medium text-xs xl:text-sm"
                      >
                        {campus}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Voir tous les campus */}
                </div>
              )}
            </div>

            {/* Formations Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsFormationsOpen(!isFormationsOpen);
                  setIsCampusOpen(false);
                  setIsEcoleOpen(false);
                  setIsAdmissionsOpen(false);
                }}
                className="flex items-center text-gray-300 dark:text-gray-700 hover:text-[#6366f1] transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                Formations
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isFormationsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isFormationsOpen && (
                <div 
                  className="absolute top-full left-0 w-72 xl:w-80 bg-gray-900 dark:bg-white border-l border-r border-b border-gray-700 dark:border-gray-300 rounded-b-lg shadow-xl z-50"
                >
                  <div className="py-1">
                    {formations.map((formation, index) => (
                      <Link
                        key={index}
                        href={formation.href}
                        prefetch={true}
                        onClick={() => setIsFormationsOpen(false)}
                        className="block w-full text-left px-3 xl:px-4 py-2 text-gray-300 dark:text-gray-700 hover:text-[#6366f1] hover:bg-gray-800/50 dark:hover:bg-gray-100 transition-colors duration-200 font-medium text-sm xl:text-base"
                      >
                        {formation.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div> 

            {/* Admissions Link */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsAdmissionsOpen(!isAdmissionsOpen);
                  setIsFormationsOpen(false);
                  setIsCampusOpen(false);
                  setIsEcoleOpen(false);
                }}
                className="flex items-center text-gray-300 dark:text-gray-700 hover:text-[#6366f1] transition-colors duration-300 font-medium whitespace-nowrap text-sm xl:text-base"
              >
                Admissions
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isAdmissionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isAdmissionsOpen && (
                <div 
                  className="absolute top-full left-0 w-64 xl:w-72 bg-gray-900 dark:bg-white border-l border-r border-b border-gray-700 dark:border-gray-300 rounded-b-lg shadow-xl z-50"
                >
                  <div className="py-1">
                    {admissionsItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        prefetch={true}
                        onClick={() => setIsAdmissionsOpen(false)}
                        className="block w-full text-left px-3 xl:px-4 py-2 text-gray-300 dark:text-gray-700 hover:text-[#6366f1] hover:bg-gray-800/50 dark:hover:bg-gray-100 transition-colors duration-200 font-medium text-sm xl:text-base"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <ThemeToggle />
            <button className="border-2 border-[#6366f1] text-[#6366f1] px-3 xl:px-6 py-2 rounded-lg font-semibold hover:bg-[#6366f1] hover:text-white transition-all duration-300 transform hover:scale-105 text-sm xl:text-base whitespace-nowrap">
              Événements
            </button>
            <Link
              href="/candidature"
              prefetch={true}
              className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-3 xl:px-6 py-2 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 transform hover:scale-105 text-sm xl:text-base whitespace-nowrap"
            >
              Candidature
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="text-white dark:text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 dark:border-gray-300 max-h-[70vh] overflow-y-auto">
            <nav className="flex flex-col space-y-4 mt-4">
              {/* L'école Mobile */}
              <div className="border-b border-gray-700 dark:border-gray-300 pb-4">
                <span className="text-gray-400 dark:text-gray-600 text-sm font-medium mb-2 block">L'école</span>
                {ecoleItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    prefetch={true}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left text-gray-300 dark:text-gray-700 hover:text-[#6366f1] transition-colors duration-300 font-medium py-2 pl-4"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Formations Mobile */}
              <div className="border-b border-gray-700 dark:border-gray-300 pb-4">
                <span className="text-gray-400 dark:text-gray-600 text-sm font-medium mb-2 block">Formations</span>
                {formations.map((formation) => (
                  <Link
                    key={formation.href}
                    href={formation.href}
                    prefetch={true}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left text-gray-300 dark:text-gray-700 hover:text-[#6366f1] transition-colors duration-300 font-medium py-2 pl-4"
                  >
                    {formation.name}
                  </Link>
                ))}
              </div>
              
              {/* Campus Mobile */}
              <div className="border-b border-gray-700 dark:border-gray-300 pb-4">
                <span className="text-gray-400 dark:text-gray-600 text-sm font-medium mb-2 block">Campus</span>
                {campusList.map((campus, index) => (
                  <Link
                    key={index}
                    href={`/campus/${campus.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                    prefetch={true}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left text-gray-300 dark:text-gray-700 hover:text-[#6366f1] transition-colors duration-300 font-medium py-2 pl-4"
                  >
                    {campus}
                  </Link>
                ))}
              </div>
              
              {/* Admissions Mobile */}
              <div className="border-b border-gray-700 dark:border-gray-300 pb-4">
                <span className="text-gray-400 dark:text-gray-600 text-sm font-medium mb-2 block">Admissions</span>
                {admissionsItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    prefetch={true}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left text-gray-300 dark:text-gray-700 hover:text-[#6366f1] transition-colors duration-300 font-medium py-2 pl-4"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <button className="border-2 border-[#6366f1] text-[#6366f1] px-4 py-3 rounded-lg font-semibold hover:bg-[#6366f1] hover:text-white transition-all duration-300 mt-4 w-full">
                Événements
              </button>
              <Link
                href="/candidature"
                prefetch={true}
                className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-4 py-3 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 mt-4 w-full"
              >
                Candidature
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;