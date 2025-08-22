import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, Award, Target, Heart, Globe, Lightbulb, CheckCircle, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface QuiSommesNousPageProps {
  onBack: () => void;
}

const QuiSommesNousPage: React.FC<QuiSommesNousPageProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Excellence pédagogique",
      description: "Des formations de qualité reconnues par l'État et adaptées aux besoins du marché"
    },
    {
      icon: Heart,
      title: "Accompagnement personnalisé",
      description: "Un suivi individualisé pour garantir la réussite de chaque étudiant"
    },
    {
      icon: Lightbulb,
      title: "Innovation constante",
      description: "Des programmes actualisés intégrant les dernières technologies et tendances"
    },
    {
      icon: Globe,
      title: "Ouverture internationale",
      description: "Une vision globale du marketing digital avec des partenariats internationaux"
    }
  ];

  const stats = [
    { number: "30", label: "Ans d'expertise", description: "avec l'IPSSI" },
    { number: "8", label: "Campus en France", description: "pour vous accompagner" },
    { number: "95%", label: "Taux de réussite", description: "aux examens" },
    { number: "2000+", label: "Étudiants formés", description: "chaque année" }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-800 dark:bg-white">
      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          50% { transform: translateY(-4px) rotate(0deg); }
          75% { transform: translateY(-12px) rotate(-1deg); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0px) translateX(-50%); }
          50% { transform: translateY(-4px) translateX(-50%); }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 1s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .group:hover .animate-shine {
          animation-duration: 1.5s;
        }
      `}</style>
      
      <Header showBackButton={true} onBack={onBack} />
      
      {/* Breadcrumb */}
      <div className="relative z-20 bg-transparent pt-20">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400 dark:text-gray-600">
            <span>Accueil</span>
            <span className="mx-2">></span>
            <span>L'école</span>
            <span className="mx-2">></span>
            <span className="text-[#6366f1]">Qui sommes-nous ?</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 dark:bg-gray-50 overflow-hidden -mt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/quisommesnous.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-900/70 dark:bg-white/70"></div>
        </div>
        
      {/* Title section */}
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <div className="max-w-4xl">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-gray-800 mb-6">
                Votre Business School <span className="bg-gradient-to-r from-[#6366f1] to-purple-400 bg-clip-text text-transparent">du Digital</span>
              </h1>
            
            <p className="text-2xl text-gray-300 dark:text-gray-600 mb-8 leading-relaxed">
              HENCIA, l'école de commerce portée par l'expertise de l'IPSSI, 
              forme une nouvelle génération d'experts en marketing, innovation et technologies émergentes.
            </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Notre Histoire */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenu texte */}
              <div>
                <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6">
                  Notre <span className="text-[#6366f1]">Histoire</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed">
                    HENCIA est une business school spécialisée en marketing digital et en formation aux métiers du commerce connecté. Elle fait partie du groupe ABSSIA, un acteur engagé depuis plusieurs décennies dans la formation aux métiers du numérique. Ce groupe regroupe notamment IPSSI, une école de référence depuis plus de 30 ans dans les domaines de l'informatique, de la cybersécurité et du développement web.
                  </p>
                  
                  <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed">
                    Initialement centrée sur la formation de techniciens et experts IT, IPSSI a su évoluer avec les exigences du marché pour répondre aux besoins croissants en compétences numériques. C'est dans cette dynamique que HENCIA est née : une école de commerce dédiée à former des professionnels du marketing digital capables d'allier compétences commerciales et maîtrise des technologies numériques pour concevoir des stratégies innovantes et performantes.
                  </p>

                  <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed">
                    Ensemble, IPSSI et HENCIA incarnent la vision du groupe ABSSIA : former des talents polyvalents, autonomes et adaptés aux réalités du marché du travail, dans un environnement où la technologie et le marketing digital fusionnent au service du commerce de demain.
                  </p>
                  
                  <div className="bg-[#6366f1]/10 rounded-xl p-6 border border-[#6366f1]/30">
                    <h3 className="text-white dark:text-gray-800 font-semibold text-xl mb-3">Notre vision</h3>
                    <p className="text-gray-300 dark:text-gray-600">
                      Devenir la référence en France pour la formation en marketing digital, 
                      en préparant nos étudiants aux défis de demain avec des compétences 
                      techniques et humaines d'excellence.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/images/about/pedagogie.jpg"
                    alt="Notre équipe HENCIA"
                    className="w-full h-96 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback when image not found */}
                  <div className="w-full h-96 bg-gradient-to-br from-[#6366f1]/20 to-purple-600/20 flex items-center justify-center rounded-2xl" style={{display: 'none'}}>
                    <div className="text-center">
                      <Users className="w-16 h-16 text-[#6366f1] mx-auto mb-4" />
                      <span className="text-[#6366f1] text-xl font-bold">Notre Équipe</span>
                    </div>
                  </div>
                </div>
                
                {/* Deuxième image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl mt-6">
                  <img 
                    src="/images/about/pedagogie2.jpg"
                    alt="Nos campus HENCIA"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback when image not found */}
                  <div className="w-full h-64 bg-gradient-to-br from-[#6366f1]/20 to-purple-600/20 flex items-center justify-center rounded-2xl" style={{display: 'none'}}>
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-[#6366f1] mx-auto mb-4" />
                      <span className="text-[#6366f1] text-xl font-bold">Nos Campus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Nos <span className="text-[#6366f1]">Valeurs</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[#6366f1]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#6366f1]/30 transition-colors">
                      <value.icon className="w-8 h-8 text-[#6366f1]" />
                    </div>
                    <div>
                      <h3 className="text-white dark:text-gray-800 font-semibold text-xl mb-3 group-hover:text-[#6366f1] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-300 dark:text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres Clés */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
             Le groupe ABSSIA en <span className="text-[#6366f1]">Chiffres</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-[#6366f1]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6366f1]/30 transition-colors">
                    <TrendingUp className="w-10 h-10 text-[#6366f1]" />
                  </div>
                  <div className="text-5xl font-bold text-white dark:text-gray-800 mb-2 group-hover:text-[#f43f5e] transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-gray-300 dark:text-gray-600 mb-1">{stat.label}</div>
                  <div className="text-gray-400 dark:text-gray-600 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partenariats */}
      <section className="py-16 bg-gray-800 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Nos <span className="text-[#6366f1]">Partenaires</span>
            </h2>
            
            <div className="text-center mb-12">
              <p className="text-gray-300 dark:text-gray-600 text-lg max-w-3xl mx-auto">
                Nous collaborons avec les plus grandes entreprises françaises et internationales 
                pour offrir à nos étudiants des opportunités de stage, d'alternance et d'emploi.
              </p>
            </div>
            
            {/* Défilement horizontal des logos */}
            <div className="relative overflow-hidden bg-gray-900/30 dark:bg-gray-100/30 rounded-2xl py-8">
              {/* Gradient de fondu sur les côtés */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-800 dark:from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-800 dark:from-white to-transparent z-10"></div>
              
              {/* Container de défilement */}
              <div className="flex animate-scroll">
                {/* Premier set de logos */}
                <div className="flex items-center space-x-12 min-w-max">
                  {[
                    { name: "Air France", logo: "/images/partenaire/airfrance.avif" },
                    { name: "Société Générale", logo: "/images/partenaire/societegenerale.avif" },
                    { name: "McDonald's", logo: "/images/partenaire/macdo.avif" },
                    { name: "Orange", logo: "/images/partenaire/Orange.avif" },
                    { name: "RATP", logo: "/images/partenaire/RATP.avif" },
                    { name: "Carrefour", logo: "/images/partenaire/Carrefour.avif" },
                    { name: "Total", logo: "/images/partenaire/Total.avif" },
                    { name: "Louis Vuitton", logo: "/images/partenaire/louisvuitton.avif" },
                    { name: "BMW", logo: "/images/partenaire/bmw.avif" },
                    { name: "EDF", logo: "/images/partenaire/edf.avif" },
                    { name: "SNCF", logo: "/images/partenaire/sncf.avif" },
                    { name: "Coca-Cola", logo: "/images/partenaire/coca.avif" },
                    { name: "Caisse d'Épargne", logo: "/images/partenaire/caisse.avif" }
                  ].map((partner, index) => (
                    <div 
                      key={`first-${index}`}
                      className="relative flex-shrink-0 w-32 h-20 bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-xl border border-gray-700/50 dark:border-gray-300/50"
                    >
                      <div className="flex items-center justify-center h-full p-4">
                        <img 
                          src={partner.logo}
                          alt={`Logo ${partner.name}`}
                          className="max-h-12 max-w-full object-contain filter brightness-0 invert dark:invert-0 opacity-70"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden items-center justify-center h-full text-white dark:text-gray-800 font-semibold text-xs">
                          {partner.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Deuxième set de logos (duplication pour défilement continu) */}
                <div className="flex items-center space-x-12 min-w-max ml-12">
                  {[
                    { name: "Air France", logo: "/images/partenaire/airfrance.avif" },
                    { name: "Société Générale", logo: "/images/partenaire/societegenerale.avif" },
                    { name: "McDonald's", logo: "/images/partenaire/macdo.avif" },
                    { name: "Orange", logo: "/images/partenaire/Orange.avif" },
                    { name: "RATP", logo: "/images/partenaire/RATP.avif" },
                    { name: "Carrefour", logo: "/images/partenaire/Carrefour.avif" },
                    { name: "Total", logo: "/images/partenaire/Total.avif" },
                    { name: "Louis Vuitton", logo: "/images/partenaire/louisvuitton.avif" },
                    { name: "BMW", logo: "/images/partenaire/bmw.avif" },
                    { name: "EDF", logo: "/images/partenaire/edf.avif" },
                    { name: "SNCF", logo: "/images/partenaire/sncf.avif" },
                    { name: "Coca-Cola", logo: "/images/partenaire/coca.avif" },
                    { name: "Caisse d'Épargne", logo: "/images/partenaire/caisse.avif" }
                  ].map((partner, index) => (
                    <div 
                      key={`second-${index}`}
                      className="relative flex-shrink-0 w-32 h-20 bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-xl border border-gray-700/50 dark:border-gray-300/50"
                    >
                      <div className="flex items-center justify-center h-full p-4">
                        <img 
                          src={partner.logo}
                          alt={`Logo ${partner.name}`}
                          className="max-h-12 max-w-full object-contain filter brightness-0 invert dark:invert-0 opacity-70"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden items-center justify-center h-full text-white dark:text-gray-800 font-semibold text-xs">
                          {partner.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Message de confiance */}
            <div className="mt-12 text-center">
              <p className="text-gray-400 dark:text-gray-600 text-sm">
                Et bien d'autres entreprises partenaires qui font confiance à nos étudiants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 bg-gray-900 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Pourquoi choisir <span className="text-[#6366f1]">HENCIA ?</span>
            </h2>
            
            <div className="space-y-6">
              {[
                "Formations reconnues par l'État et certifiées Qualiopi",
                "Pédagogie innovante alliant théorie et pratique",
                "Intervenants professionnels en activité",
                "Accompagnement personnalisé tout au long du parcours",
                "Réseau d'entreprises partenaires pour l'alternance et l'emploi",
                "Campus modernes équipés des dernières technologies",
                "Taux d'insertion professionnelle élevé",
                "Communauté d'alumni active et solidaire"
              ].map((reason, index) => (
                <div key={index} className="flex items-center bg-gray-800/50 dark:bg-white/50 rounded-lg p-4 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 group">
                  <CheckCircle className="w-6 h-6 text-[#6366f1] mr-4 flex-shrink-0" />
                  <span className="text-gray-300 dark:text-gray-600 group-hover:text-white dark:group-hover:text-gray-800 transition-colors">{reason}</span>
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
            Prêt à rejoindre l'aventure HENCIA ?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez nos formations et lancez votre carrière dans le marketing digital 
            avec une école qui vous accompagne vers la réussite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/candidature"
              prefetch={true}
              className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300">
              Candidater maintenant
            </Link>
            <button className="border-2 border-[#6366f1] text-[#6366f1] px-8 py-4 rounded-lg font-semibold hover:bg-[#6366f1] hover:text-white transition-all duration-300">
              Découvrir nos formations
            </button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default QuiSommesNousPage;