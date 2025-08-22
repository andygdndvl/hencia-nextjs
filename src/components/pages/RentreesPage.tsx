import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin, CheckCircle, Users, Award, AlertCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface RentreesPageProps {
  onBack: () => void;
}

const RentreesPage: React.FC<RentreesPageProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rentrees = [
    {
      date: "2 octobre 2025",
      type: "Rentrée principale",
      formations: [
        "Bachelor 1 & 2 Marketing Digital",
        "BTS NDRC 1ère année",
        "Bachelor 3 Marketing Digital"
      ],
      campus: "Tous les campus",
      places: "Limitées",
      status: "Inscriptions ouvertes",
      color: "[#F43F5E]",
      description: "Rentrée principale pour toutes nos formations. Début des cours dès la première semaine d'octobre."
    },
    {
      date: "1er septembre 2026",
      type: "Rentrée 2026/27",
      formations: [
        "Toutes formations"
      ],
      campus: "Tous les campus",
      places: "À venir",
      status: "Pré-inscriptions",
      color: "[#F43F5E]",
      description: "Rentrée de l'année suivante. Les pré-inscriptions sont déjà ouvertes pour anticiper."
    }
  ];

  const etapes = [
    {
      numero: 1,
      titre: "Candidature en ligne",
      description: "Remplissez votre dossier de candidature sur notre plateforme",
      duree: "15 minutes"
    },
    {
      numero: 2,
      titre: "Étude du dossier",
      description: "Notre équipe examine votre candidature et vos motivations",
      duree: "48h maximum"
    },
    {
      numero: 3,
      titre: "Entretien individuel",
      description: "Échange avec notre équipe pédagogique (présentiel ou distanciel)",
      duree: "30 minutes"
    },
    {
      numero: 4,
      titre: "Confirmation d'admission",
      description: "Réponse définitive et inscription administrative",
      duree: "24h après entretien"
    }
  ];

  const infosImportantes = [
    {
      titre: "Frais de candidature",
      description: "Gratuits pour toutes nos formations",
      icon: CheckCircle,
      color: "rose-500"
    },
    {
      titre: "Places limitées",
      description: "Candidatez rapidement pour sécuriser votre place",
      icon: AlertCircle,
      color: "purple-medium"
    },
    {
      titre: "Accompagnement",
      description: "Aide personnalisée tout au long du processus",
      icon: Users,
      color: "purple-dark"
    },
    {
      titre: "Réponse rapide",
      description: "Décision sous 48h après votre entretien",
      icon: Clock,
      color: "purple-darker"
    }
  ];

  const getStatusColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-600 text-white';
      case 'orange':
        return 'bg-orange-600 text-white';
      case 'blue':
        return 'bg-blue-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'text-[#6366f1]';
      case 'orange':
        return 'text-[#6366f1]';
      case 'blue':
        return 'text-[#6366f1]';
      case 'purple':
        return 'text-[#6366f1]';
      case 'purple-light':
        return 'text-[#6366f1]';
      case 'purple-medium':
        return 'text-[#6366f1]';
      case 'purple-dark':
        return 'text-[#6366f1]';
      case 'purple-darker':
        return 'text-[#6366f1]';
      case 'rose-500':
        return 'text-[#6366f1]';
      default:
        return 'text-[#6366f1]';
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
            <span className="text-[#6366f1]">Dates de rentrées 2025/26</span>
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
            <source src="/video/rentree.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-900/70 dark:bg-white/70"></div>
        </div>

         {/* Title section */}
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <div className="max-w-4xl">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-gray-800 mb-6">
                Dates de rentrées <span className="bg-gradient-to-r from-[#6366f1] to-purple-400 bg-clip-text text-transparent">2025/26</span>
              </h1>
            
            <p className="text-2xl text-gray-300 dark:text-gray-600 mb-8 leading-relaxed">
              Préparez votre avenir dès maintenant ! Découvrez les prochaines rentrées pour intégrer HENCIA, Business School spécialisée en marketing digital et métiers du commerce. Que vous visiez un BTS, un Bachelor ou un Mastère, nos formations reconnues par l'État vous permettent de rejoindre un cursus professionnalisant à forte valeur ajoutée.
            </p>
            
              <p className="text-2xl text-gray-300 dark:text-gray-600 mb-8 leading-relaxed">
                Rejoignez-nous sur l'un de nos 8 campus en France et commencez votre parcours vers une carrière digitale prometteuse.
            </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dates de rentrées */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Prochaines <span className="text-[#6366f1]">Rentrées</span>
            </h2>
            
            <div className="space-y-8">
              {rentrees.map((rentree, index) => (
                <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-2xl p-8 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Date et type */}
                    <div className="text-center lg:text-left">
                      <div className="w-20 h-20 bg-[#6366f1]/20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                        <Calendar className="w-10 h-10 text-[#6366f1]" />
                      </div>
                      <h3 className="text-3xl font-bold text-white dark:text-gray-800 mb-2">{rentree.date}</h3>
                      <p className="text-[#6366F1] font-medium text-lg mb-4">{rentree.type}</p>
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(rentree.color)}`}>
                        {rentree.status}
                      </span>
                    </div>
                    
                    {/* Informations */}
                    <div className="lg:col-span-2">
                      <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed mb-6">
                        {rentree.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Formations */}
                        <div>
                          <h4 className="text-white dark:text-gray-800 font-semibold text-lg mb-3 flex items-center">
                            <Award className="w-5 h-5 text-[#6366f1] mr-2" />
                            Formations concernées
                          </h4>
                          <ul className="space-y-2">
                            {rentree.formations.map((formation, formIndex) => (
                              <li key={formIndex} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-[#6366f1] mr-2 mt-1 flex-shrink-0" />
                                <span className="text-gray-300 dark:text-gray-600">{formation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Détails pratiques */}
                        <div>
                          <h4 className="text-white dark:text-gray-800 font-semibold text-lg mb-3 flex items-center">
                            <MapPin className="w-5 h-5 text-[#6366f1] mr-2" />
                            Informations pratiques
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <span className="text-gray-400 dark:text-gray-600 w-20">Campus :</span>
                              <span className="text-gray-300 dark:text-gray-600">{rentree.campus}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-gray-400 dark:text-gray-600 w-20">Places :</span>
                              <span className="text-gray-300 dark:text-gray-600">{rentree.places}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'admission */}
      <section className="py-16 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Processus d'<span className="text-[#6366f1]">Admission</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image du processus - Gauche */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/images/about/val2.png"
                    alt="Processus d'admission HENCIA"
                    className="w-full h-96 lg:h-[500px] object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback when image not found */}
                  <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-[#6366f1]/20 to-purple-600/20 flex items-center justify-center rounded-2xl" style={{display: 'none'}}>
                    <div className="text-center">
                      <Users className="w-16 h-16 text-[#6366f1] mx-auto mb-4" />
                      <span className="text-[#6366f1] text-xl font-bold">Processus d'Admission</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Étapes du processus - Droite */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {etapes.map((etape, index) => (
                  <div key={index} className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 text-center group hover:scale-105 transform">
                    <div className="w-16 h-16 bg-[#6366f1]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6366f1]/30 transition-colors">
                      <span className="text-[#6366f1] font-bold text-xl">{etape.numero}</span>
                    </div>
                    <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-3 group-hover:text-[#6366f1] transition-colors">
                      {etape.titre}
                    </h3>
                    <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed mb-3">{etape.description}</p>
                    <div className="text-[#F43F5E] text-xs font-medium">
                      ⏱️ {etape.duree}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations importantes */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Informations <span className="text-[#6366f1]">Importantes</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {infosImportantes.map((info, index) => (
                <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366F1]/50 transition-all duration-300 text-center group hover:scale-105 transform">
                  <div className="w-16 h-16 bg-gray-800/50 dark:bg-gray-200/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700/50 dark:group-hover:bg-gray-300/50 transition-colors">
                    <info.icon className={`w-8 h-8 ${getIconColor(info.color)}`} />
                  </div>
                  <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-3 group-hover:text-[#6366f1] transition-colors">
                    {info.titre}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rentrées */}
      <section className="py-16 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Questions <span className="text-[#6366f1]">Fréquentes</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Puis-je candidater pour plusieurs dates de rentrée ?",
                  reponse: "Oui, vous pouvez indiquer plusieurs préférences de dates lors de votre candidature. Nous vous proposerons la meilleure option selon les places disponibles."
                },
                {
                  question: "Y a-t-il une différence de programme entre les rentrées ?",
                  reponse: "Le programme reste identique. Pour la rentrée décalée de janvier, nous adaptons le planning pour rattraper le retard et maintenir la qualité de formation."
                },
                {
                  question: "Quand dois-je candidater pour être sûr d'avoir une place ?",
                  reponse: "Nous recommandons de candidater dès que possible. Les places sont attribuées au fur et à mesure des admissions, particulièrement pour la rentrée de septembre."
                },
                {
                  question: "Puis-je reporter ma rentrée à l'année suivante ?",
                  reponse: "Oui, si vous êtes admis mais souhaitez reporter, contactez-nous. Nous étudierons votre demande et vous proposerons une solution adaptée."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366F1]/50 transition-all duration-300">
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
            Prêt à rejoindre notre prochaine rentrée ?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
            Ne manquez pas votre chance ! Les places sont limitées pour chaque session. 
            Candidatez dès maintenant pour sécuriser votre place.
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
              Télécharger le calendrier
            </button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default RentreesPage;