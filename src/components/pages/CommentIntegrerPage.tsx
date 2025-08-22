import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, Award, CheckCircle, ArrowRight, Calendar, Clock, FileText, MessageCircle, Target, Lightbulb, Star, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CommentIntegrerPageProps {
  onBack: () => void;
}

const CommentIntegrerPage: React.FC<CommentIntegrerPageProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const etapesAdmission = [
    {
      numero: 1,
      titre: "Candidature en ligne",
      description: "Remplissez votre dossier de candidature sur notre plateforme dédiée",
      duree: "15 minutes",
      details: [
        "Informations personnelles et académiques",
        "Lettre de motivation personnalisée",
        "Upload de vos documents (CV, relevés de notes)",
        "Choix de formation et campus"
      ],
      icon: FileText,
      color: "blue"
    },
    {
      numero: 2,
      titre: "Étude du dossier",
      description: "Notre équipe pédagogique examine votre candidature avec attention",
      duree: "48h maximum",
      details: [
        "Analyse de votre parcours académique",
        "Évaluation de votre motivation",
        "Vérification de l'adéquation avec la formation",
        "Pré-sélection des candidats"
      ],
      icon: Target,
      color: "purple"
    },
    {
      numero: 3,
      titre: "Entretien individuel",
      description: "Échange personnalisé avec notre équipe (présentiel ou distanciel)",
      duree: "30 minutes",
      details: [
        "Présentation de votre projet professionnel",
        "Questions sur vos motivations",
        "Découverte de la formation en détail",
        "Évaluation de votre potentiel"
      ],
      icon: MessageCircle,
      color: "green"
    },
    {
      numero: 4,
      titre: "Confirmation d'admission",
      description: "Réponse définitive et inscription administrative",
      duree: "24h après entretien",
      details: [
        "Notification de la décision par email",
        "Dossier d'inscription si admis",
        "Informations pratiques de rentrée",
        "Accompagnement personnalisé"
      ],
      icon: Award,
      color: "orange"
    }
  ];

  const profils = [
    {
      titre: "Bacheliers",
      description: "Tous types de baccalauréat acceptés",
      formations: ["Bachelor 1 & 2", "BTS NDRC"],
      requis: [
        "Bac général, technologique ou professionnel",
        "Motivation pour le marketing digital",
        "Curiosité pour les nouvelles technologies",
        "Esprit d'équipe et créativité"
      ],
      icon: Users,
      color: "blue"
    },
    {
      titre: "Bac +2 validé",
      description: "Poursuite d'études en Bachelor 3",
      formations: ["Bachelor Marketing Digital"],
      requis: [
        "BTS, DUT, L2 validé",
        "Bases en marketing ou communication",
        "Projet professionnel défini",
        "Appétence pour le digital"
      ],
      icon: Award,
      color: "purple"
    },
    {
      titre: "Reconversion professionnelle",
      description: "Changement de carrière vers le digital",
      formations: ["Toutes formations"],
      requis: [
        "Expérience professionnelle",
        "Motivation pour le changement",
        "Capacité d'adaptation",
        "Vision long terme"
      ],
      icon: Lightbulb,
      color: "green"
    }
  ];

  const conseils = [
    {
      titre: "Préparez votre candidature",
      description: "Soignez votre dossier et votre lettre de motivation",
      tips: [
        "Personnalisez votre lettre selon la formation",
        "Mettez en avant vos expériences digitales",
        "Montrez votre curiosité pour le secteur",
        "Relisez attentivement vos documents"
      ],
      icon: FileText
    },
    {
      titre: "Anticipez l'entretien",
      description: "Préparez-vous aux questions classiques",
      tips: [
        "Pourquoi cette formation ?",
        "Quel est votre projet professionnel ?",
        "Que connaissez-vous du marketing digital ?",
        "Pourquoi HENCIA ?"
      ],
      icon: MessageCircle
    },
    {
      titre: "Montrez votre motivation",
      description: "Démontrez votre intérêt pour le digital",
      tips: [
        "Suivez l'actualité du marketing digital",
        "Créez un profil LinkedIn professionnel",
        "Réalisez des projets personnels",
        "Participez à nos événements"
      ],
      icon: Star
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-[#6366f1]/20',
          text: 'text-[#6366f1]',
          border: 'border-[#6366f1]/30'
        };
      case 'purple':
        return {
          bg: 'bg-[#6366f1]/20',
          text: 'text-[#6366f1]',
          border: 'border-[#6366f1]/30'
        };
      case 'green':
        return {
          bg: 'bg-[#6366f1]/20',
          text: 'text-[#6366f1]',
          border: 'border-[#6366f1]/30'
        };
      case 'orange':
        return {
          bg: 'bg-[#6366f1]/20',
          text: 'text-[#6366f1]',
          border: 'border-[#6366f1]/30'
        };
      default:
        return {
          bg: 'bg-gray-500/20',
          text: 'text-gray-500',
          border: 'border-gray-500/30'
        };
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-800 dark:bg-white">
      <Header showBackButton={true} onBack={onBack} />
      
      {/* Breadcrumb */}
      <div className="relative z-20 bg-transparent pt-20">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400 dark:text-gray-600">
            <span>Accueil</span>
            <span className="mx-2"></span>
            <span>Admissions</span>
            <span className="mx-2"></span>
            <span className="text-[#6366f1]">Comment intégrer HENCIA ?</span>
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
            <source src="/video/integration.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-900/70 dark:bg-white/70"></div>
        </div>
        
       {/* Title section */}
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <div className="max-w-4xl">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-gray-800 mb-6">
                Comment intégrer <span className="bg-gradient-to-r from-[#6366f1] to-purple-400 bg-clip-text text-transparent">HENCIA Business School ?</span>
              </h1>
            
            <p className="text-2xl text-gray-300 dark:text-gray-600 mb-8 leading-relaxed">
              Intégrer HENCIA, notre école de commerce spécialisée en marketing digital, c'est simple, rapide et accessible. Que vous visiez un BTS, un Bachelor ou un Mastère, notre processus d'admission est conçu pour valoriser votre motivation, votre profil et vos ambitions.
            </p>
              
              <p className="text-2xl text-gray-300 dark:text-gray-600 mb-8 leading-relaxed">
Rejoignez une Business School moderne, professionnalisante et reconnue par l'État, qui forme les experts du digital et du commerce de demain.
            </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Processus d'admission */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Processus d'<span className="text-[#6366f1]">Admission</span>
            </h2>
            
            <div className="space-y-8">
              {etapesAdmission.map((etape, index) => {
                const colors = getColorClasses(etape.color);
                return (
                  <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-2xl p-8 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                      {/* Numéro et icône */}
                      <div className="text-center lg:text-left">
                        <div className={`w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4`}>
                          <etape.icon className={`w-10 h-10 ${colors.text}`} />
                        </div>
                        <div className={`text-4xl font-bold ${colors.text} mb-2`}>
                          {etape.numero}
                        </div>
                        <div className="text-gray-400 dark:text-gray-600 text-sm">
                          ⏱️ {etape.duree}
                        </div>
                      </div>
                      
                      {/* Contenu principal */}
                      <div className="lg:col-span-2">
                        <h3 className="text-3xl font-bold text-white dark:text-gray-800 mb-4">{etape.titre}</h3>
                        <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed mb-6">
                          {etape.description}
                        </p>
                        
                        {/* Détails */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {etape.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start">
                              <CheckCircle className={`w-5 h-5 ${colors.text} mr-3 mt-0.5 flex-shrink-0`} />
                              <span className="text-gray-300 dark:text-gray-600">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Profils recherchés */}
      <section className="py-16 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Profils <span className="text-[#6366f1]">Recherchés</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {profils.map((profil, index) => {
                const colors = getColorClasses(profil.color);
                return (
                  <div key={index} className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 group">
                    <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <profil.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    
                    <h3 className="text-white dark:text-gray-800 font-semibold text-xl mb-2 group-hover:text-[#6366f1] transition-colors">
                      {profil.titre}
                    </h3>
                    
                    <p className="text-gray-300 dark:text-gray-600 mb-4">{profil.description}</p>
                    
                    {/* Formations accessibles */}
                    <div className="mb-4">
                      <h4 className="text-white dark:text-gray-800 font-medium mb-2">Formations accessibles :</h4>
                      <div className="flex flex-wrap gap-2">
                        {profil.formations.map((formation, formIndex) => (
                          <span key={formIndex} className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm border ${colors.border}`}>
                            {formation}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Prérequis */}
                    <div>
                      <h4 className="text-white dark:text-gray-800 font-medium mb-2">Prérequis :</h4>
                      <ul className="space-y-1">
                        {profil.requis.map((requis, requisIndex) => (
                          <li key={requisIndex} className="flex items-start text-sm">
                            <div className={`w-2 h-2 ${colors.bg} rounded-full mr-2 mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-300 dark:text-gray-600">{requis}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Conseils pour réussir */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Conseils pour <span className="text-[#6366f1]">Réussir</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {conseils.map((conseil, index) => (
                <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-[#6366f1]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#6366f1]/30 transition-colors">
                    <conseil.icon className="w-8 h-8 text-[#6366f1]" />
                  </div>
                  
                  <h3 className="text-white dark:text-gray-800 font-semibold text-xl mb-3 group-hover:text-[#6366f1] transition-colors">
                    {conseil.titre}
                  </h3>
                  
                  <p className="text-gray-300 dark:text-gray-600 mb-4">{conseil.description}</p>
                  
                  <ul className="space-y-2">
                    {conseil.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-[#6366f1] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 dark:text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Image des conseils */}
            <div className="mt-12">
              <div className="relative max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/images/about/reussir.png"
                    alt="Conseils pour réussir son admission"
                    className="w-full h-64 lg:h-80 object-cover object-[center_10%]"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback when image not found */}
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-[#6366f1]/20 to-purple-600/20 flex items-center justify-center rounded-2xl" style={{display: 'none'}}>
                    <div className="text-center">
                      <Star className="w-16 h-16 text-[#6366f1] mx-auto mb-4" />
                      <span className="text-[#6366f1] text-xl font-bold">Conseils pour Réussir</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations importantes */}
      <section className="py-16 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Informations <span className="text-[#6366f1]">Importantes</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  titre: "Candidature gratuite",
                  description: "Aucun frais de candidature pour toutes nos formations",
                  icon: CheckCircle,
                  color: "green"
                },
                {
                  titre: "Réponse rapide",
                  description: "Décision sous 48h après votre entretien d'admission",
                  icon: Clock,
                  color: "blue"
                },
                {
                  titre: "Places limitées",
                  description: "Candidatez rapidement pour sécuriser votre place",
                  icon: AlertCircle,
                  color: "orange"
                },
                {
                  titre: "Accompagnement personnalisé",
                  description: "Aide et conseils tout au long du processus",
                  icon: Users,
                  color: "purple"
                }
              ].map((info, index) => {
                const colors = getColorClasses(info.color);
                return (
                  <div key={index} className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <info.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-2 group-hover:text-[#6366f1] transition-colors">
                          {info.titre}
                        </h3>
                        <p className="text-gray-300 dark:text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Questions <span className="text-[#6366f1]">Fréquentes</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Quand puis-je candidater ?",
                  reponse: "Les candidatures sont ouvertes toute l'année. Nous recommandons de candidater dès que possible car les places sont limitées, surtout pour la rentrée de septembre."
                },
                {
                  question: "Faut-il passer par Parcoursup ?",
                  reponse: "Non, HENCIA est hors Parcoursup ! Vous candidatez directement sur notre plateforme, ce qui vous permet plus de flexibilité et une réponse plus rapide."
                },
                {
                  question: "Quel niveau d'anglais est requis ?",
                  reponse: "Un niveau d'anglais correct est apprécié mais pas éliminatoire. Nous proposons des cours de remise à niveau si nécessaire."
                },
                {
                  question: "Puis-je candidater sans expérience en marketing ?",
                  reponse: "Absolument ! Nos formations sont conçues pour accueillir des débutants. Votre motivation et votre curiosité sont plus importantes que votre expérience préalable."
                },
                {
                  question: "Y a-t-il des frais de candidature ?",
                  reponse: "Non, la candidature est entièrement gratuite pour toutes nos formations. Nous ne demandons aucun frais avant votre admission définitive."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300">
                  <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-300 dark:text-gray-600 leading-relaxed">{faq.reponse}</p>
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
            Prêt à commencer votre aventure ?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez HENCIA et lancez votre carrière dans le marketing digital. 
            Notre équipe vous accompagne à chaque étape !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/candidature"
              prefetch={true}
              className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 flex items-center justify-center">
              Candidater maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="border-2 border-[#6366f1] text-[#6366f1] px-8 py-4 rounded-lg font-semibold hover:bg-[#6366f1] hover:text-white transition-all duration-300">
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

export default CommentIntegrerPage;