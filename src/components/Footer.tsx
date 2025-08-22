import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  const footerLinks = {
    school: [
      { name: "Qui sommes-nous", href: "qui-sommes-nous" },
      { name: "Nos diplômes", href: "diplomes-certifications" },
      { name: "Dates de rentrées", href: "rentrees" },
      { name: "Actualités", href: "#" }
    ],
    formations: [
      { name: "BTS NDRC", href: "bts-ndrc" },
      { name: "Bachelor Marketing Digital", href: "bachelor-12" },
      { name: "Bachelor 3", href: "bachelor" }
    ],
    campus: [
      { name: "Tous les campus", href: "campus" }
    ],
    support: [
      { name: "Admission", href: "comment-integrer" },
      { name: "Hors Parcoursup", href: "hors-parcoursup" },
      { name: "Parrainage", href: "parrainage" }
    ],
    accessibilite: [
      { name: "Adaptation au public en situation de handicap", href: "handicap" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Twitter, href: "#", name: "Twitter" }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-100 border-t border-gray-700 dark:border-gray-300">
      <div className="container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={isDarkMode ? "/images/about/logo-dark.png" : "/images/about/logo.png"}
                alt="Logo HENCIA" 
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 dark:text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              Formez-vous aux métiers du commerce digital avec nos formations reconnues par l'État. 
              Développez vos compétences et lancez votre carrière dans le marketing digital.
            </p>
            
            {/* Contact info */}
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-white dark:text-gray-800 font-semibold mb-4 text-sm sm:text-base">L'École</h4>
            <ul className="space-y-2">
              {footerLinks.school.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 dark:text-gray-600 hover:text-[#6366f1] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white dark:text-gray-800 font-semibold mb-4 text-sm sm:text-base">Formations</h4>
            <ul className="space-y-2">
              {footerLinks.formations.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 dark:text-gray-600 hover:text-[#6366f1] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white dark:text-gray-800 font-semibold mb-4 text-sm sm:text-base">Campus</h4>
            <ul className="space-y-2">
              {footerLinks.campus.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 dark:text-gray-600 hover:text-[#6366f1] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white dark:text-gray-800 font-semibold mb-4 text-sm sm:text-base">Admissions</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 dark:text-gray-600 hover:text-[#6366f1] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white dark:text-gray-800 font-semibold mb-4 text-sm sm:text-base">Accessibilité</h4>
            <ul className="space-y-2">
              {footerLinks.accessibilite.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 dark:text-gray-600 hover:text-[#6366f1] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social links and newsletter */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between justify-center gap-4 py-6 sm:py-8 border-t border-gray-800 dark:border-gray-300">
          {/* Réseaux sociaux à gauche (ou au-dessus sur mobile) */}
          <div className="flex items-center space-x-3 sm:space-x-4 order-2 sm:order-1">
            <span className="text-gray-400 dark:text-gray-600 mr-2 text-sm sm:text-base">Suivez-nous :</span>
            <div className="flex space-x-2 sm:space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#6366f1] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-600 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter bouton à droite (ou en-dessous sur mobile) */}
          <div className="flex justify-center sm:justify-end w-full sm:w-auto order-1 sm:order-2">
            <button className="bg-gradient-to-r from-[#6366f1] to-[#6366f1] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:from-[#f43f5e] hover:to-[#f43f5e] transition-all duration-300 text-sm sm:text-base">
              Newsletter
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;