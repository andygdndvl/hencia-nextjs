import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap, Clock, Users, CheckCircle, ArrowRight, Calendar, Target, AlertCircle, Award, FileText, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface HorsParcoursupPageProps {
  onBack: () => void;
}

const HorsParcoursupPage: React.FC<HorsParcoursupPageProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const avantages = [
    {
      icon: Zap,
      title: "Candidature simplifiée",
      description: "Pas de dossier complexe, juste votre motivation et votre projet",
      details: [
        "Formulaire en ligne simple",
        "Pas de classement de vœux",
        "Candidature directe à l'école",
        "Process transparent et humain"
      ],
      color: "blue"
    },
    {
      icon: Clock,
      title: "Réponse rapide",
      description: "Décision sous 48h après votre entretien d'admission",
      details: [
        "Pas d'attente jusqu'en juillet",
        "Confirmation immédiate",
        "Planning de rentrée anticipé",
        "Sérénité pour l'été"
      ],
      color: "green"
    },
    {
      icon: Users,
      title: "Entretien personnalisé",
      description: "Échange direct avec notre équipe pédagogique",
      details: [
        "Présentation de votre projet",
        "Questions sur vos motivations",
        "Découverte de la formation",
        "Conseils personnalisés"
      ],
      color: "purple"
    },
    {
      icon: Target,
      title: "Flexibilité totale",
      description: "Candidatez quand vous voulez, où vous voulez",
      details: [
        "Candidature toute l'année",
        "Plusieurs dates de rentrée",
        "Entretien en présentiel ou distanciel",
        "Accompagnement sur mesure"
      ],
      color: "orange"
    }
  ];

  const comparaison = [
    {
      critere: "Période de candidature",
      parcoursup: "Janvier à Mars uniquement",
      hencia: "Toute l'année",
      avantage: "hencia"
    },
    {
      critere: "Nombre de vœux",
      parcoursup: "Limité à 10 vœux",
      hencia: "Illimité",
      avantage: "hencia"
    },
    {
      critere: "Réponse d'admission",
      parcoursup: "Mai à Juillet (attente)",
      hencia: "48h après entretien",
      avantage: "hencia"
    },
    {
      critere: "Entretien",
      parcoursup: "Rare ou inexistant",
      hencia: "Systématique et personnalisé",
      avantage: "hencia"
    },
    {
      critere: "Frais de candidature",
      parcoursup: "Gratuit",
      hencia: "Gratuit",
      avantage: "egalite"
    },
    {
      critere: "Accompagnement",
      parcoursup: "Limité",
      hencia: "Personnalisé dès l'admission",
      avantage: "hencia"
    }
  ];

  const etapes = [
    {
      numero: 1,
      titre: "Candidature en ligne",
      description: "Remplissez votre dossier sur notre plateforme dédiée",
      duree: "15 minutes",
      icon: FileText
    },
    {
      numero: 2,
      titre: "Étude du dossier",
      description: "Notre équipe examine votre candidature avec attention",
      duree: "48h maximum",
      icon: Target
    },
    {
      numero: 3,
      titre: "Entretien individuel",
      description: "Échange personnalisé avec notre équipe pédagogique",
      duree: "30 minutes",
      icon: MessageCircle
    },
    {
      numero: 4,
      titre: "Admission confirmée",
      description: "Réponse définitive et inscription administrative",
      duree: "24h après entretien",
      icon: Award
    }
  ];


  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-[#6366f1]',
          text: 'text-[#6366f1]',
          border: 'border-[#6366f1]/30'
        };
      case 'green':
        return {
          bg: 'bg-[#4f46e5]/20',
          text: 'text-[#4f46e5]',
          border: 'border-[#4f46e5]/30'
        };
      case 'purple':
        return {
          bg: 'bg-[#4338ca]/20',
          text: 'text-[#4338ca]',
          border: 'border-[#4338ca]/30'
        };
      case 'orange':
        return {
          bg: 'bg-#3730A3/20',
          text: 'text-#3730A3',
          border: 'border-#3730A3/30'
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
            <span className="text-[#6366F1]">Hors Parcoursup !</span>
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
            <source src="/video/horsparcoursup.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-900/70 dark:bg-white/70"></div>
        </div>

        {/* Title section */}
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <div className="max-w-4xl">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-gray-800 mb-6">
                Rejoignez notre Business School<br />
  <span className="bg-gradient-to-r from-[#6366F1] to-purple-400 bg-clip-text text-transparent">
    Hors Parcoursup !
  </span>
</h1>

          
            <p className="text-2xl text-gray-300 dark:text-gray-600 mb-8 leading-relaxed">
             Chez HENCIA, l'admission est directe, sans passer par la plateforme Parcoursup. Vous postulez quand vous le souhaitez, avec une réponse rapide, et un accompagnement personnalisé.
            </p>

            <div className="bg-[#6366F1]/10 rounded-xl p-8 border border-[#6366F1]/30 mb-8">
              <h3 className="text-white dark:text-gray-800 font-semibold text-xl mb-3">🎯 Notre promesse</h3>
              <p className="text-gray-300 dark:text-gray-600 text-lg">
                Un processus d'admission simple, transparent et humain. 
                Votre motivation compte plus que votre dossier !
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Avantages Hors Parcoursup */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Pourquoi choisir <span className="text-[#6366F1]">Hors Parcoursup</span> ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {avantages.map((avantage, index) => {
                const colors = getColorClasses(avantage.color);
                return (
                  <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366F1]/50 transition-all duration-300 group">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <avantage.icon className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="text-white dark:text-gray-800 font-semibold text-xl mb-2 group-hover:text-[#6366F1] transition-colors">
                          {avantage.title}
                        </h3>
                        <p className="text-gray-300 dark:text-gray-600 mb-4">{avantage.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {avantage.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm">
                          <CheckCircle className={`w-4 h-4 ${colors.text} mr-2 mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-300 dark:text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Comparaison Parcoursup vs HENCIA */}
      <section className="py-16 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Parcoursup vs <span className="text-[#6366F1]">HENCIA</span>
            </h2>
            
            <div className="bg-gray-800/50 dark:bg-white/50 rounded-2xl p-6 border border-gray-700 dark:border-gray-300 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-gray-700/50 dark:bg-gray-200/50 border border-gray-600 dark:border-gray-400 p-4 text-left text-white dark:text-gray-800 font-semibold">Critère</th>
                    <th className="bg-gray-700/50 dark:bg-gray-200/50 border border-gray-600 dark:border-gray-400 p-4 text-center text-white dark:text-gray-800 font-semibold">Parcoursup</th>
                    <th className="bg-[#6366F1]/20 border border-gray-600 dark:border-gray-400 p-4 text-center text-white dark:text-gray-800 font-semibold">HENCIA</th>
                  </tr>
                </thead>
                <tbody>
                  {comparaison.map((item, index) => (
                    <tr key={index}>
                      <td className="bg-gray-700/30 dark:bg-gray-200/30 border border-gray-600 dark:border-gray-400 p-4 text-white dark:text-gray-800 font-medium">{item.critere}</td>
                      <td className={`border border-gray-600 p-4 text-center ${
                        item.avantage === 'parcoursup' ? 'bg-green-600/20 text-green-400' : 
                        item.avantage === 'egalite' ? 'bg-blue-600/20 text-blue-400' : 
                        'bg-red-600/20 text-red-400'
                      }`}>
                        {item.parcoursup}
                      </td>
                      <td className={`border border-gray-600 p-4 text-center ${
                        item.avantage === 'hencia' ? 'bg-green-600/20 text-green-400' : 
                        item.avantage === 'egalite' ? 'bg-blue-600/20 text-blue-400' : 
                        'bg-red-600/20 text-red-400'
                      }`}>
                        {item.hencia}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Notre <span className="text-[#6366F1]">Processus</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {etapes.map((etape, index) => (
                <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366F1]/50 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-[#6366F1]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6366F1]/30 transition-colors">
                    <etape.icon className="w-8 h-8 text-[#6366F1]" />
                  </div>
                  <div className="text-4xl font-bold text-[#6366F1] mb-2">{etape.numero}</div>
                  <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-3 group-hover:text-[#6366F1] transition-colors">
                    {etape.titre}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed mb-3">{etape.description}</p>
                  <div className="text-[#6366F1] text-xs font-medium">
                    ⏱️ {etape.duree}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-16 bg-gray-800 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Questions <span className="text-[#6366F1]">Fréquentes</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Puis-je candidater si j'ai déjà fait des vœux sur Parcoursup ?",
                  reponse: "Absolument ! Vous pouvez candidater chez HENCIA en parallèle de Parcoursup. C'est même recommandé pour maximiser vos chances d'admission."
                },
                {
                  question: "Y a-t-il des frais de candidature hors Parcoursup ?",
                  reponse: "Non, la candidature reste entièrement gratuite, que ce soit via Parcoursup ou directement chez nous. Nous ne facturons aucun frais avant votre admission définitive."
                },
                {
                  question: "Les diplômes ont-ils la même valeur que via Parcoursup ?",
                  reponse: "Oui, absolument ! Nos diplômes sont reconnus par l'État et inscrits au RNCP, quelle que soit votre voie d'admission. La qualité de formation est identique."
                },
                {
                  question: "Puis-je candidater après les résultats de Parcoursup ?",
                  reponse: "Oui ! Beaucoup d'étudiants nous rejoignent après des refus sur Parcoursup. Nous avons des rentrées décalées et restons ouverts toute l'année."
                },
                {
                  question: "Comment se passe l'entretien d'admission ?",
                  reponse: "L'entretien dure 30 minutes et peut se faire en présentiel ou en visioconférence. C'est un échange bienveillant pour mieux vous connaître et présenter notre formation."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366F1]/50 transition-all duration-300">
                  <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-300 dark:text-gray-600 leading-relaxed">{faq.reponse}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#6366F1]/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6">
            Libérez-vous de Parcoursup !
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
            Candidatez dès maintenant et obtenez une réponse rapide. 
            Votre avenir n'attend pas les contraintes administratives !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/candidature"
              prefetch={true}
              className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 flex items-center justify-center">
              Candidater maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
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

export default HorsParcoursupPage;