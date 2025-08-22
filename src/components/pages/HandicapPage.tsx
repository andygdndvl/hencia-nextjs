import React, { useEffect, useState } from 'react';
import { ArrowLeft, Users, FileText, Phone, Mail, Download, Heart, Shield, CheckCircle, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface HandicapPageProps {
  onBack: () => void;
}

const HandicapPage: React.FC<HandicapPageProps> = ({ onBack }) => {
  const [showPhoneNumber, setShowPhoneNumber] = React.useState(false);

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const missions = [
    "Renseigner les candidats et les apprentis en situation de handicap sur leurs conditions d'intégration au sein de l'IPSSI",
    "Communiquer, si nécessaire, auprès des candidats et des apprentis sur les possibilités d'accès aux aménagements liées au statut de travailleur handicapé et sur les démarches administratives à mettre en œuvre",
    "Informer sur les circuits et les modalités de financements"
  ];

  const etapesAdmission = [
    {
      numero: 1,
      titre: "Formulaire de contact",
      description: "Renseignez le formulaire ci-dessous afin de contacter notre référent handicap"
    },
    {
      numero: 2,
      titre: "Premier contact",
      description: "Ce dernier reviendra vers vous par téléphone ou par mail pour fixer un rendez-vous afin d'étudier en détail vos possibilités d'intégration"
    },
    {
      numero: 3,
      titre: "Entretien personnalisé",
      description: "A l'issue de cet entretien, vous aurez tous les éléments nécessaires à votre éventuelle admission au sein de notre école"
    }
  ];

  const organismes = [
    {
      nom: "MDPH",
      titre: "Maison Départementale des Personnes Handicapées",
      description: "La Maison Départementale des Personnes Handicapées a une mission d'accueil, d'information, d'accompagnement et de conseil des personnes en situation de handicap et de leur famille – Il existe une MDPH dans chaque département.",
      icon: Shield
    },
    {
      nom: "Cap Emploi",
      titre: "Accompagnement spécialisé",
      description: "Dans le cadre d'une action spécifique financée par l'AGEFIPH, en partenariat avec le Conseil Régional, les apprentis en situation de handicap peuvent être accompagnés par Cap Emploi dans la recherche d'un contrat d'apprentissage. Ils peuvent également être accompagnés dans la mise en place des outils adaptés au handicap en entreprise (faisabilité, financement). Chaque département dispose d'une antenne AGEFIPH.",
      icon: Users
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
              <span className="mx-2">›</span>
              <span className="text-[#6366f1]">Adaptation au public en situation de handicap</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900 dark:bg-gray-50 overflow-hidden -mt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 pt-20 relative z-10">
            <div className="max-w-4xl">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-gray-800 mb-6">
                  Les métiers du digital
                  <br />
                  <span className="bg-gradient-to-r from-[#6366f1] to-purple-400 bg-clip-text text-transparent">
                    en situation de handicap
                  </span>
                </h1>
                
                <div className="bg-[#6366f1]/10 rounded-xl p-8 border border-[#6366f1]/30 mb-8">
                  <h2 className="text-white dark:text-gray-800 font-semibold text-2xl mb-4 flex items-center">
                    <Heart className="w-8 h-8 text-[#6366f1] mr-3" />
                    Notre engagement
                  </h2>
                  <p className="text-gray-300 dark:text-gray-600 text-xl leading-relaxed">
                    Favorisons l'accès à l'apprentissage, aux jeunes en situation de handicap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Handicap et alternance */}
        <section className="py-16 bg-gray-800 dark:bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Handicap <span className="text-[#6366f1]">Alternance</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contenu texte */}
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-gray-800 mb-6">
                    Contrat d'apprentissage et reconnaissance du handicap
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed">
                      Un travailleur en situation de handicap peut faire un apprentissage et conclure un contrat permettant d'obtenir une qualification professionnelle. IPSSI est sensible à ce droit et met à disposition des publics en situation de handicap, un référent qui vous accompagne pour votre éventuelle intégration dans notre école informatique.
                    </p>
                    
                    <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed">
                      Se faire reconnaître travailleur en situation de handicap permet d'avoir accès à un ensemble de mesures mises en place pour favoriser l'insertion professionnelle des personnes en situation de handicap et leur maintien dans l'emploi.
                    </p>
                    
                    <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed">
                      L'apprenti peut ainsi bénéficier d'aménagements particuliers dans le cadre de son contrat d'apprentissage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
                    

        {/* Missions du référent handicap */}
        <section className="py-16 bg-gray-900 dark:bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Les missions de notre <span className="text-[#6366f1]">référent handicap</span> au CFA
              </h2>
              
              <div className="space-y-6">
                {missions.map((mission, index) => (
                  <div key={index} className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 group">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#6366f1]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-[#6366f1]/30 transition-colors">
                        <CheckCircle className="w-6 h-6 text-[#6366f1]" />
                      </div>
                      <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed group-hover:text-white dark:group-hover:text-gray-800 transition-colors">
                        {mission}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Processus d'admission */}
        <section className="py-16 bg-gray-800 dark:bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Comment fonctionne l'admission pour les <span className="text-[#6366f1]">publics handicapés</span> ?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {etapesAdmission.map((etape, index) => (
                  <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 text-center group">
                    <div className="w-16 h-16 bg-[#6366f1]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6366f1]/30 transition-colors">
                      <span className="text-[#6366f1] font-bold text-xl">{etape.numero}</span>
                    </div>
                    <h3 className="text-white dark:text-gray-800 font-semibold text-xl mb-4 group-hover:text-[#6366f1] transition-colors">
                      {etape.titre}
                    </h3>
                    <p className="text-gray-300 dark:text-gray-600 leading-relaxed">{etape.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Organismes partenaires */}
        <section className="py-16 bg-gray-900 dark:bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
                Organismes <span className="text-[#6366f1]">Partenaires</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {organismes.map((organisme, index) => (
                  <div key={index} className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-8 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 group">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 bg-[#6366f1]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#6366f1]/30 transition-colors">
                        <organisme.icon className="w-8 h-8 text-[#6366f1]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white dark:text-gray-800 mb-2 group-hover:text-[#6366f1] transition-colors">
                          {organisme.nom}
                        </h3>
                        <h4 className="text-[#6366f1] font-medium text-lg mb-4">{organisme.titre}</h4>
                      </div>
                    </div>
                    <p className="text-gray-300 dark:text-gray-600 leading-relaxed">{organisme.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-gradient-to-r from-[#6366f1]/10 to-purple-600/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6">
              Besoin d'accompagnement ?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre référent handicap est à votre disposition pour vous accompagner dans votre projet de formation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowPhoneNumber(!showPhoneNumber)}
                className="border-2 border-[#6366f1] text-[#6366f1] px-8 py-4 rounded-lg font-semibold hover:bg-[#6366f1] hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                {showPhoneNumber ? '01 55 43 26 65' : 'Prendre rendez-vous'}
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HandicapPage;