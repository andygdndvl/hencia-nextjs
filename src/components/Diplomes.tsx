import React from 'react';
import { Award, CheckCircle, Shield } from 'lucide-react';

const Diplomes = () => {
  const certifications = [
    "Diplômes reconnus par l'État",
    "Certification professionnelle RNCP",
    "Partenariats avec les entreprises"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#6366f1]/8 to-purple-600/8 dark:from-gray-100 dark:to-gray-200 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gray-800/90 dark:bg-white/90"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title centered */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-[#6366f1] to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-800 mb-6">
            Diplômes reconnus à <span className="bg-gradient-to-r from-[#6366f1] to-purple-400 bg-clip-text text-transparent">HENCIA Business School</span>
          </h2>
        </div>

        {/* Content layout: Image left, Text right */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image left */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/images/about/diplomereconnu.png"
                  alt="Diplômes reconnus par l'État"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback when image not found */}
                <div className="w-full h-96 bg-gradient-to-br from-[#6366f1]/20 to-purple-600/20 flex items-center justify-center rounded-2xl" style={{display: 'none'}}>
                  <div className="text-center">
                    <Award className="w-16 h-16 text-[#6366f1] mx-auto mb-4" />
                    <span className="text-[#6366f1] text-xl font-bold">Diplômes Reconnus</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content right */}
            <div className="space-y-8">
              {/* Description */}
              <div>
                <p className="text-2xl text-gray-300 dark:text-gray-600 leading-relaxed mb-8">
                 Votre parcours à HENCIA vous permet d’obtenir plusieurs diplômes et titres reconnus par l’État, certifiés Qualiopi et France Compétences, du BTS au Bac+5. Bénéficiez d’une formation complète en marketing digital, commerce et management, avec la possibilité d’obtenir jusqu’à 3 diplômes reconnus pour booster votre carrière.
                </p>
              </div>

              {/* Certifications list */}
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-12 h-12 bg-[#6366f1]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#6366f1]/30 transition-colors">
                      <CheckCircle className="w-6 h-6 text-[#6366f1]" />
                    </div>
                    <span className="text-white dark:text-gray-800 font-medium text-lg group-hover:text-[#6366f1] transition-colors">{cert}</span>
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

export default Diplomes;