import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, Gift, Star, CheckCircle, ArrowRight, Mail, User, Phone, GraduationCap, Heart, Award, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ParrainagePageProps {
  onBack: () => void;
}

const ParrainagePage: React.FC<ParrainagePageProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    parrainNom: '',
    parrainPrenom: '',
    parrainEmail: '',
    parrainTelephone: '',
    parrainFormation: '',
    filleulNom: '',
    filleulPrenom: '',
    filleulEmail: '',
    filleulTelephone: '',
    filleulFormation: '',
    message: ''
  });

  const avantages = [
    {
      icon: Gift,
      title: "Réduction de 500€",
      description: "Sur les frais de scolarité de votre filleul",
      color: "blue"
    },
    {
      icon: Star,
      title: "Bon d'achat de 200€",
      description: "Pour vous remercier de votre parrainage",
      color: "purple"
    },
    {
      icon: Users,
      title: "Réseau élargi",
      description: "Développez votre réseau professionnel",
      color: "green"
    },
    {
      icon: Heart,
      title: "Satisfaction personnelle",
      description: "Aidez quelqu'un à réussir sa carrière",
      color: "orange"
    }
  ];

  const etapes = [
    {
      numero: 1,
      titre: "Remplissez le formulaire",
      description: "Indiquez vos coordonnées et celles de votre filleul",
      icon: User
    },
    {
      numero: 2,
      titre: "Votre filleul candidate",
      description: "Il doit mentionner votre nom lors de sa candidature",
      icon: GraduationCap
    },
    {
      numero: 3,
      titre: "Admission confirmée",
      description: "Votre filleul est admis et s'inscrit à HENCIA",
      icon: CheckCircle
    },
    {
      numero: 4,
      titre: "Récompenses activées",
      description: "Vous recevez vos avantages après son inscription",
      icon: Gift
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Envoi du formulaire...', formData);
    
    // Envoi des données au webhook Zapier
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      console.log('Réponse reçue:', response.status, response.statusText);
      if (response.ok) {
        alert('✅ Votre demande de parrainage a été envoyée avec succès !');
        // Réinitialiser le formulaire 
        setFormData({
          parrainNom: '',
          parrainPrenom: '',
          parrainEmail: '',
          parrainTelephone: '',
          parrainFormation: '',
          filleulNom: '',
          filleulPrenom: '',
          filleulEmail: '',
          filleulTelephone: '',
          filleulFormation: '',
          message: ''
        });
      } else {
        throw new Error(`Erreur HTTP: ${response.status} ${response.statusText}`);
      }
    })
    .catch(error => {
      console.error('Erreur:', error);
      alert('❌ Une erreur est survenue lors de l\'envoi. Veuillez réessayer.\n\nDétails: ' + error.message);
    });
  };

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
          bg: 'bg-purple-600/20',
          text: 'text-purple-600',
          border: 'border-purple-600/30'
        };
      case 'green':
        return {
          bg: 'bg-green-600/20',
          text: 'text-green-600',
          border: 'border-green-600/30'
        };
      case 'orange':
        return {
          bg: 'bg-orange-600/20',
          text: 'text-orange-600',
          border: 'border-orange-600/30'
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
            <span className="text-[#6366f1]">Parrainez vos amis</span>
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
            <source src="/video/parrainage.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-900/70 dark:bg-white/70"></div>
        </div>
        
        {/* Title section */}
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <div className="max-w-4xl">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-gray-800 mb-6">
  Faites découvrir<br />
  notre Business School<br />
  <span className="bg-gradient-to-r from-[#6366f1] to-purple-400 bg-clip-text text-transparent">
    à votre entourage
  </span>
</h1>

              <p className="text-2xl text-gray-300 dark:text-gray-600 mb-8 leading-relaxed">
                Faites découvrir HENCIA, l'école de commerce spécialisée en marketing digital, à vos proches et profitez d'avantages exclusifs !
              </p>

               <p className="text-2xl text-gray-300 dark:text-gray-600 mb-8 leading-relaxed">
Notre programme de parrainage vous permet d'aider vos amis à intégrer une formation reconnue, professionnalisante et tournée vers l'avenir.
              </p>

              <div className="bg-[#6366f1]/10 rounded-xl p-8 border border-[#6366f1]/30 mb-8">
                <h3 className="text-white dark:text-gray-800 font-semibold text-xl mb-3 flex items-center">
                  <Sparkles className="w-6 h-6 text-[#6366f1] mr-2" />
                  Offre spéciale parrainage
                </h3>
                <p className="text-gray-300 dark:text-gray-600 text-lg">
                  <strong>500€ de réduction</strong> pour votre filleul + <strong>200€ de bon d'achat</strong> pour vous !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Avantages du parrainage */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Avantages du <span className="text-[#6366f1]">Parrainage</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {avantages.map((avantage, index) => {
                const colors = getColorClasses(avantage.color);
                return (
                  <div key={index} className="bg-gray-900/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 text-center group">
                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <avantage.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-3 group-hover:text-[#6366f1] transition-colors">
                      {avantage.title}
                    </h3>
                    <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">{avantage.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Comment ça <span className="text-[#6366f1]">Marche</span> ?
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Cartes des étapes - Gauche */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {etapes.map((etape, index) => (
                  <div key={index} className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-6 border border-gray-700 dark:border-gray-300 hover:border-[#6366f1]/50 transition-all duration-300 text-center group">
                    <div className="w-16 h-16 bg-[#6366f1]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6366f1]/30 transition-colors">
                      <etape.icon className="w-8 h-8 text-[#6366f1]" />
                    </div>
                    <div className="text-4xl font-bold text-[#6366f1] mb-2">{etape.numero}</div>
                    <h3 className="text-white dark:text-gray-800 font-semibold text-lg mb-3 group-hover:text-[#6366f1] transition-colors">
                      {etape.titre}
                    </h3>
                    <p className="text-gray-300 dark:text-gray-600 text-sm leading-relaxed">{etape.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Image des avantages - Droite */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/images/about/parrainage.png"
                    alt="Avantages du parrainage HENCIA"
                    className="w-full h-96 lg:h-[500px] object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback when image not found */}
                  <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-[#6366f1]/20 to-purple-600/20 flex items-center justify-center rounded-2xl" style={{display: 'none'}}>
                    <div className="text-center">
                      <Gift className="w-16 h-16 text-[#6366f1] mx-auto mb-4" />
                      <span className="text-[#6366f1] text-xl font-bold">Avantages du Parrainage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Formulaire de parrainage */}
      <section className="py-16 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 dark:bg-white/50 rounded-2xl p-8 border border-gray-700 dark:border-gray-300">
              <h2 className="text-3xl font-bold text-white dark:text-gray-800 mb-8 text-center">
                Formulaire de <span className="text-[#6366f1]">Parrainage</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Informations du parrain */}
                <div>
                  <h3 className="text-xl font-semibold text-white dark:text-gray-800 mb-6 flex items-center">
                    <User className="w-6 h-6 text-[#6366f1] mr-2" />
                    Vos informations (Parrain)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white dark:text-gray-800 font-semibold mb-2">Prénom *</label>
                      <input
                        type="text"
                        name="parrainPrenom"
                        required
                        value={formData.parrainPrenom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-lg text-white dark:text-gray-800 focus:border-[#6366f1] focus:outline-none transition-colors"
                        placeholder="Votre prénom"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white dark:text-gray-800 font-semibold mb-2">Nom *</label>
                      <input
                        type="text"
                        name="parrainNom"
                        required
                        value={formData.parrainNom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-lg text-white dark:text-gray-800 focus:border-[#6366f1] focus:outline-none transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-white dark:text-gray-800 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="parrainEmail"
                        required
                        value={formData.parrainEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-lg text-white dark:text-gray-800 focus:border-[#6366f1] focus:outline-none transition-colors"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white dark:text-gray-800 font-semibold mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        name="parrainTelephone"
                        required
                        value={formData.parrainTelephone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-lg text-white dark:text-gray-800 focus:border-[#6366f1] focus:outline-none transition-colors"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-white dark:text-gray-800 font-semibold mb-2">Votre formation à HENCIA *</label>
                    <select
                      name="parrainFormation"
                      required
                      value={formData.parrainFormation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-lg text-white dark:text-gray-800 focus:border-[#6366f1] focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionnez votre formation</option>
                      <option value="bts-ndrc">BTS NDRC</option>
                      <option value="bachelor-1-2">Bachelor 1ère et 2ème année</option>
                      <option value="bachelor-3">Bachelor 3ème année</option>
                      <option value="mastere">Mastère</option>
                      <option value="diplome">Diplômé(e)</option>
                    </select>
                  </div>
                </div>

                {/* Informations du filleul */}
                <div>
                  <h3 className="text-xl font-semibold text-white dark:text-gray-800 mb-6 flex items-center">
                    <Users className="w-6 h-6 text-[#6366f1] mr-2" />
                    Informations de votre filleul
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white dark:text-gray-800 font-semibold mb-2">Prénom *</label>
                      <input
                        type="text"
                        name="filleulPrenom"
                        required
                        value={formData.filleulPrenom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-lg text-white dark:text-gray-800 focus:border-[#6366f1] focus:outline-none transition-colors"
                        placeholder="Prénom de votre filleul"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white dark:text-gray-800 font-semibold mb-2">Nom *</label>
                      <input
                        type="text"
                        name="filleulNom"
                        required
                        value={formData.filleulNom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-lg text-white dark:text-gray-800 focus:border-[#6366f1] focus:outline-none transition-colors"
                        placeholder="Nom de votre filleul"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-white dark:text-gray-800 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="filleulEmail"
                        required
                        value={formData.filleulEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-lg text-white dark:text-gray-800 focus:border-[#6366f1] focus:outline-none transition-colors"
                        placeholder="email.filleul@exemple.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white dark:text-gray-800 font-semibold mb-2">Téléphone</label>
                      <input
                        type="tel"
                        name="filleulTelephone"
                        value={formData.filleulTelephone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-lg text-white dark:text-gray-800 focus:border-[#6366f1] focus:outline-none transition-colors"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-white dark:text-gray-800 font-semibold mb-2">Formation souhaitée *</label>
                    <select
                      name="filleulFormation"
                      required
                      value={formData.filleulFormation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-lg text-white dark:text-gray-800 focus:border-[#6366f1] focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionnez la formation souhaitée</option>
                      <option value="bts-ndrc">BTS NDRC</option>
                      <option value="bachelor-1-2">Bachelor 1ère et 2ème année</option>
                      <option value="bachelor-3">Bachelor 3ème année</option>
                      <option value="mastere">Mastère</option>
                    </select>
                  </div>
                </div>

                {/* Message personnalisé */}
                <div>
                  <label className="block text-white dark:text-gray-800 font-semibold mb-2">
                    <Mail className="w-5 h-5 inline mr-2" />
                    Message personnalisé (optionnel)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 dark:bg-white border border-gray-600 dark:border-gray-300 rounded-lg text-white dark:text-gray-800 focus:border-[#6366f1] focus:outline-none transition-colors resize-vertical"
                    placeholder="Ajoutez un message personnalisé pour votre filleul..."
                  ></textarea>
                </div>

                {/* Consentement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 text-[#6366f1] bg-gray-800 dark:bg-white border-gray-600 dark:border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                  />
                  <label className="text-sm text-gray-300 dark:text-gray-600">
                    J'accepte que mes données et celles de mon filleul soient traitées par HENCIA dans le cadre du programme de parrainage. 
                    Ces données ne seront pas transmises à des tiers.
                  </label>
                </div>

                {/* Bouton de soumission */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#6366f1] to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center space-x-2"
                  >
                    <Gift className="w-5 h-5" />
                    <span>Envoyer ma demande de parrainage</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions du parrainage */}
      <section className="py-16 bg-gray-900 dark:bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-12 text-center">
              Conditions du <span className="text-[#6366f1]">Parrainage</span>
            </h2>
            
            <div className="bg-gray-800/50 dark:bg-white/50 rounded-xl p-8 border border-gray-700 dark:border-gray-300">
              <div className="space-y-6">
                {[
                  "Le parrain doit être étudiant actuel ou diplômé de HENCIA",
                  "Le filleul doit mentionner le nom du parrain lors de sa candidature",
                  "Le filleul doit être admis et s'inscrire effectivement à HENCIA",
                  "La réduction de 500€ est appliquée sur les frais de scolarité du filleul",
                  "Le bon d'achat de 200€ est envoyé au parrain après inscription du filleul",
                  "Une personne ne peut être parrainée qu'une seule fois",
                  "Le parrainage n'est pas cumulable avec d'autres réductions",
                  "HENCIA se réserve le droit de modifier ces conditions"
                ].map((condition, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#6366f1] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 dark:text-gray-600">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#6366f1]/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6">
            Prêt à parrainer vos amis ?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
            Aidez vos proches à rejoindre HENCIA et profitez ensemble des avantages du parrainage !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/candidature"
              prefetch={true}
              className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 flex items-center justify-center"
            >
              Candidater maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="border-2 border-[#6366f1] text-[#6366f1] px-8 py-4 rounded-lg font-semibold hover:bg-[#6366f1] hover:text-white transition-all duration-300">
              En savoir plus
            </button>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default ParrainagePage;