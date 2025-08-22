import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAProps {
  onNavigateToCandidature?: () => void;
}

const CTA: React.FC<CTAProps> = ({ onNavigateToCandidature }) => {
  return (
    <section className="relative py-20 bg-gray-900 dark:bg-gray-100 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#6366f1]/15 via-transparent to-purple-600/15"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-r from-[#6366f1] to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-bold text-white dark:text-gray-800 mb-6 leading-tight">
            Prêt à transformer
            <br />
            <span className="bg-gradient-to-r from-[#6366f1] to-purple-400 bg-clip-text text-transparent">
              votre avenir ?
            </span>
          </h2>

          {/* Description */}
          <p className="text-2xl md:text-3xl text-gray-300 dark:text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Rejoignez une communauté d’experts en devenir du marketing digital.
Développez vos compétences, élargissez votre réseau et donnez un coup d’accélérateur à votre carrière dans un secteur en pleine expansion.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/candidature"
              prefetch={true}
              className="group bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-12 py-6 rounded-xl font-bold text-lg hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 transform hover:scale-105 flex items-center shadow-2xl"
            >
              Candidater maintenant !
              <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <button className="border-2 border-[#6366f1] text-[#6366f1] px-12 py-6 rounded-xl font-bold text-lg hover:bg-[#6366f1] hover:text-white transition-all duration-300">
              Télécharger la brochure
            </button>
          </div>

          {/* Trust message */}
          <p className="text-gray-400 dark:text-gray-600 text-sm mt-8">
            Candidature gratuite • Réponse sous 48h • Accompagnement personnalisé
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;