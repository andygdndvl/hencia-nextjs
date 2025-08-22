import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Award, Shield, CheckCircle, Star, Globe, Users, TrendingUp, BookOpen, AlignCenterVertical as Certificate } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface DiplomesCertificationsPageProps {
  onBack: () => void;
}

const DiplomesCertificationsPage: React.FC<DiplomesCertificationsPageProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const diplomes = [
    {
      title: "BTS NDRC",
      subtitle: "Négociation et Digitalisation de la Relation Client",
      level: "Bac +2",
      rncp: "RNCP38368",
      duration: "2 ans",
      recognition: "Diplôme d'État",
      description: "Formation reconnue par l'État formant aux métiers de la vente et de la relation client dans un environnement digitalisé.",
      competences: [
        "Prospection et négociation commerciale",
        "Gestion de la relation client digitale",
        "Animation de réseaux commerciaux",
        "Utilisation des outils CRM et e-commerce"
      ],
      debouches: [
        "Commercial terrain",
        "Chargé de clientèle",
        "Conseiller commercial",
        "Responsable e-commerce"
      ]
    },
    {
      title: "Bachelor Marketing Digital",
      subtitle: "Spécialisation Marketing Digital et E-commerce",
      level: "Bac +3",
      rncp: "RNCP40377",
      duration: "1 an",
      recognition: "Titre certifié",
      description: "Spécialisation avancée en marketing digital avec expertise technique et stratégique pour devenir un expert du secteur.",
      competences: [
        "SEO/SEA et référencement avancé",
        "Social Media et influence marketing",
        "Google Analytics et data analysis",
        "Marketing automation et growth hacking"
      ],
      debouches: [
        "Chef de projet digital",
        "Traffic manager",
        "Consultant SEO/SEA",
        "Responsable marketing digital"
      ]
    }
  ];

  const certifications = [
    {
      title: "Certification Qualiopi",
      description: "Certification qualité des organismes de formation",
      icon: Shield,
      details: "Garantit la qualité de nos processus de formation selon les critères du Référentiel National Qualité."
    },
    {
      title: "Reconnaissance France Compétences",
      description: "Titres inscrits au Répertoire National des Certifications Professionnelles",
      icon: Certificate,
      details: "Nos formations sont reconnues par l'État et inscrites au RNCP, garantissant leur valeur sur le marché du travail."
    },
    {
      title: "Partenariats Entreprises",
      description: "Réseau de plus de 500 entreprises partenaires",
      icon: Users,
      details: "Collaborations étroites avec les entreprises pour adapter nos formations aux besoins du marché."
    },
    {
      title: "Certification Professionnelle",
      description: "Formations alignées sur les métiers d'avenir",
      icon: TrendingUp,
      details: "Programmes conçus en collaboration avec les professionnels du secteur pour une insertion optimale."
    }
  ];

  const avantages = [
    {
      title: "Reconnaissance Nationale",
      description: "Diplômes et titres reconnus par l'État français",
      icon: Award
    },
    {
      title: "Insertion Professionnelle",
      description: "95% de nos diplômés trouvent un emploi dans les 6 mois",
      icon: TrendingUp
    },
    {
      title: "Poursuite d'Études",
      description: "Possibilité de continuer en Master ou école de commerce",
      icon: BookOpen
    },
    {
      title: "Mobilité Internationale",
      description: "Diplômes reconnus dans l'espace européen",
      icon: Globe
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-800 dark:bg-white">
      <Header showBackButton={true} onBack={onBack} />
      
      {/* Breadcrumb */}
      <div className="relative z-20 bg-transparent pt-20">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400 dark:text-gray-600">
            <span>Accueil</span>
            <span className="mx-2">></span>
            <span className="text-[#6366F1]">Diplômes et Certifications</span>
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
            preload="auto"
            controls={false}
            disablePictureInPicture
            webkit-playsinline="true"
            className="w-full h-full object-cover"
            onLoadedData={(e) => {
              const video = e.target as HTMLVideoElement;
              video.play().catch(() => {
                // Si l'autoplay échoue, on peut ajouter un bouton play
                console.log('Autoplay failed');
              });
            }}
          >
            <source src="/video/diplome.mp4" type="video/mp4" />
            {/* Fallback si la vidéo ne charge pas */}
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-900/40 dark:bg-white/40"></div>
        </div>
        
         {/* Title section */}
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <div className="max-w-4xl">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-gray-800 mb-6">
               Nos Diplômes de Commerce, 
 <span className="bg-gradient-to-r from-[#6366F1] to-purple-400 bg-clip-text text-transparent"> Reconnus</span>
              </h1>
            
            <p className="text-2xl text-gray-300 dark:text-gray-600 mb-8 leading-relaxed">
              Chez HENCIA, Business School spécialisée en marketing digital et en commerce, nous proposons des formations diplômantes de Bac à Bac+5. Tous nos cursus sont reconnus par l'État, inscrits au RNCP et certifiés Qualiopi, vous garantissant une reconnaissance professionnelle et académique. Préparez votre avenir avec des diplômes adaptés aux besoins du marché du digital.


            </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nos Diplômes */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Nos <span className="text-[#6366F1]">Diplômes</span>
            </h2>
            
            <div className="space-y-8">
              {diplomes.map((diplome, index) => (
                <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-2xl p-8 border border-gray-700 dark:border-gray-300 hover:border-[#6366F1]/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Informations principales */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-3xl font-bold text-white dark:text-gray-800 mb-2">{diplome.title}</h3>
                          <p className="text-[#6366F1] font-medium text-lg mb-2">{diplome.subtitle}</p>
                          <div className="flex flex-wrap gap-3 mb-4">
                            <span className="bg-gradient-to-r from-[#6366F1] to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {diplome.level}
                            </span>
                            <span className="bg-gradient-to-r from-[#6366F1] to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {diplome.recognition}
                            </span>
                            <span className="bg-gradient-to-r from-[#6366F1] to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {diplome.rncp}
                            </span>
                            <span className="bg-gradient-to-r from-[#6366F1] to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {diplome.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed mb-6">
                        {diplome.description}
                      </p>
                      
                      {/* Compétences */}
                      <div className="mb-6">
                        <h4 className="text-white dark:text-gray-800 font-semibold text-lg mb-3">Compétences développées :</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {diplome.competences.map((competence, compIndex) => (
                            <div key={compIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-[#6366F1] mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 dark:text-gray-600">{competence}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Débouchés */}
                    <div>
                      <h4 className="text-white dark:text-gray-800 font-semibold text-lg mb-4">Débouchés professionnels :</h4>
                      <div className="space-y-3">
                        {diplome.debouches.map((debouche, debIndex) => (
                          <div key={debIndex} className="bg-gray-800/50 dark:bg-gray-100/50 rounded-lg p-3 border border-gray-700 dark:border-gray-300">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-[#6366F1] mr-2" />
                              <span className="text-gray-300 dark:text-gray-600 font-medium">{debouche}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Lien spécifique pour BTS NDRC */}
                    {diplome.title === "BTS NDRC" && (
                      <div className="mt-6 pt-6 border-t border-gray-700 dark:border-gray-300">
                        <a 
                          href="https://www.francecompetences.fr/recherche/rncp/38368/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#6366f1] hover:text-[#f43f5e] transition-colors duration-300 underline decoration-[#6366f1]/50 hover:decoration-[#f43f5e]"
                        >
                          Votre BTS NDRC reconnu par l'État
                        </a>
                      </div>
                    )}
                    
                    {/* Lien spécifique pour Bachelor Marketing Digital */}
                    {diplome.title === "Bachelor Marketing Digital" && (
                      <div className="mt-6 pt-6 border-t border-gray-700 dark:border-gray-300">
                        <a 
                          href="https://www.francecompetences.fr/recherche/rncp/40377/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#6366f1] hover:text-[#f43f5e] transition-colors duration-300 underline decoration-[#6366f1]/50 hover:decoration-[#f43f5e]"
                        >
                          Votre Bachelor reconnu par l'État
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Nos <span className="text-[#6366F1]">Certifications</span>
            </h2>
            
            
            {/* Cartes de certifications en dessous */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366F1]/50 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[#6366F1]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#6366F1]/30 transition-colors">
                      <cert.icon className="w-8 h-8 text-[#6366F1]" />
                    </div>
                    <div>
                      <h3 className="text-white dark:text-gray-800 font-semibold text-xl mb-2 group-hover:text-[#6366F1] transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-[#6366F1] font-medium mb-3">{cert.description}</p>
                      <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">{cert.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Avantages de nos <span className="text-[#6366F1]">Diplômes</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Image à gauche */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/images/about/diplome.jpg"
                    alt="Avantages de nos diplômes"
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback when image not found */}
                  <div className="w-full h-80 bg-gradient-to-br from-[#6366F1]/20 to-purple-600/20 flex items-center justify-center rounded-2xl" style={{display: 'none'}}>
                    <div className="text-center">
                      <Award className="w-16 h-16 text-[#6366F1] mx-auto mb-4" />
                      <span className="text-[#6366F1] text-xl font-bold">Avantages Diplômes</span>
                    </div>
                  </div>
                </div>
                
                {/* Bouton lien pour BTS NDRC */}
                <div className="mt-6 pt-6 border-t border-gray-700 dark:border-gray-300">
                  <a 
                    href="https://ecole-ipssi.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#6366f1] hover:text-[#f43f5e] transition-colors duration-300 underline decoration-[#6366f1]/50 hover:decoration-[#f43f5e]"
                  >
                  </a>
                </div>
              </div> 
              
              {/* Grille des avantages à droite */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {avantages.map((avantage, index) => (
                  <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366F1]/50 transition-all duration-300 text-center group">
                    <div className="w-16 h-16 bg-[#6366F1]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6366F1]/30 transition-colors">
                      <avantage.icon className="w-8 h-8 text-[#6366F1]" />
                    </div>
                    <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-3 group-hover:text-[#6366F1] transition-colors">
                      {avantage.title}
                    </h3>
                    <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">{avantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#6366F1]/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6">
            Prêt à obtenir un diplôme reconnu ?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez HENCIA et obtenez un diplôme qui vous ouvrira toutes les portes 
            du marketing digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/candidature"
              prefetch={true}
              className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300">
              Candidater maintenant
            </Link>
            <button className="border-2 border-[#6366F1] text-[#6366F1] px-8 py-4 rounded-lg font-semibold hover:bg-[#6366F1] hover:text-white transition-all duration-300">
              Télécharger la brochure
            </button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default DiplomesCertificationsPage;