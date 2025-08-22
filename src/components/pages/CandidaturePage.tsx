import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, Mail, Phone, MapPin, GraduationCap, FileText, Upload, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CandidaturePageProps {
  onBack: () => void;
}

const CandidaturePage: React.FC<CandidaturePageProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
    
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_source: params.get("utm_source") || '',
      utm_medium: params.get("utm_medium") || '',
      utm_campaign: params.get("utm_campaign") || '',
      utm_term: params.get("utm_term") || '',
      utm_content: params.get("utm_content") || ''
    }));
  }, []);

  const [formData, setFormData] = useState({
    // Informations personnelles
    prenom: '',
    nom: '',
    email: '',
    phone: '',
    birthDate: '',
    address: '',
    city: '',
    postalCode: '',
    
    // Formation souhaitée
    formation: '',
    campus: '',
    startDate: '',
    
    // Parcours académique
    niveau_etudes: '',
    niveau_dernier_diplome: '',
    school: '',

     // UTM
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const formations = [
    { value: 'bts', label: 'BTS NDRC - Négociation et Digitalisation de la Relation Client' },
    { value: 'bachelor-1-2', label: 'Bachelor 1ère et 2ème année' },
    { value: 'bachelor', label: 'Bachelor Marketing Digital' },
    { value: 'mastere', label: 'Mastère Marketing Digital' }
  ];

  const campus = [
    { value: 'Paris', label: 'Paris' },
    { value: 'Lyon', label: 'Lyon' },
    { value: 'Lille', label: 'Lille' },
    { value: 'Montpellier', label: 'Montpellier' },
    { value: 'Nice', label: 'Nice' },
    { value: 'Bordeaux', label: 'Bordeaux' },
    { value: 'Saint-quentin', label: 'Saint-Quentin-en-Yvelines' },
    { value: 'Val-europe', label: 'Marne-la-Vallée' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // URL du webhook Zapier
      const webhookUrl = 'https://hooks.zapier.com/hooks/catch/7708124/uuhyrru/';
      
      // Préparer les données à envoyer
      const payload = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'website_candidature'
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(payload)
      });


      // Succès
      console.log('Candidature envoyée avec succès:', payload);
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitError('Une erreur réseau est survenue. Vérifiez votre connexion internet et réessayez.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-800">
        <Header showBackButton={true} onBack={onBack} />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-6">
                Candidature envoyée !
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Merci pour votre candidature. Notre équipe d'admission va l'examiner et vous contactera sous 48h.
              </p>
              <button
                onClick={onBack}
                className="bg-gradient-to-r from-[#6366F1] to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
              >
                Retour à l'accueil
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800">
      <Header showBackButton={true} onBack={onBack} />
      
      {/* Breadcrumb */}
      <div className="relative z-20 bg-transparent pt-24">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400 mb-4">
            <span>Accueil</span>
            <span className="mx-2">></span>
            <span className="text-[#6366F1]">Candidature</span>
          </nav>
          
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-6">
              Candidature en ligne
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Rejoignez notre école et lancez votre carrière dans le marketing digital
            </p>
          </div>

          {/* Progress bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step 
                      ? 'bg-[#6366F1] text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-20 h-1 mx-2 ${
                      currentStep > step ? 'bg-[#6366F1]' : 'bg-gray-700'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400 max-w-2xl mx-auto">
              <span>Informations</span>
              <span>Formation</span>
              <span>Parcours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 pb-16">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
            
            {/* Step 1: Informations personnelles */}
            {currentStep === 1 && (
              <div>
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-[#6366F1] mr-3" />
                  <h2 className="text-2xl font-bold text-white">Informations personnelles</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Prénom *</label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#6366F1] focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Nom *</label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#6366F1] focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#6366F1] focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#6366F1] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Ville *</label>
                    <input
                      type="text"
                      name="ville"
                      value={formData.ville}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#6366F1] focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Code postal *</label>
                    <input
                      type="text"
                      name="codepostal"
                      value={formData.codepostal}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#6366F1] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Formation souhaitée */}
            {currentStep === 2 && (
              <div>
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-6 h-6 text-[#6366F1] mr-3" />
                  <h2 className="text-2xl font-bold text-white">Formation souhaitée</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Formation *</label>
                    <select
                      name="cursus"
                      value={formData.cursus}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#6366F1] focus:outline-none"
                    >
                      <option value="">Sélectionnez une formation</option>
                      {formations.map((formation) => (
                        <option key={formation.value} value={formation.value}>
                          {formation.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Campus souhaité *</label>
                    <select
                      name="campus"
                      value={formData.campus}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#6366F1] focus:outline-none"
                    >
                      <option value="">Sélectionnez un campus</option>
                      {campus.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Date de rentrée souhaitée *</label>
                    <select
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#6366F1] focus:outline-none"
                    >
                      <option value="">Sélectionnez une date</option>
                      <option value="septembre-2025">Septembre 2025</option>
                      <option value="janvier-2026">Janvier 2026</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Parcours académique */}
            {currentStep === 3 && (
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="w-6 h-6 text-[#6366F1] mr-3" />
                  <h2 className="text-2xl font-bold text-white">Parcours académique</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Niveau d'études actuel *</label>
                    <select
                      name="niveau_etudes"
                      value={formData.currentLevel}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#6366F1] focus:outline-none"
                    >
                      <option value="">Sélectionnez votre niveau</option>
                      <option value="college">College</option>
                      <option value="seconde">Seconde</option>
                      <option value="premiere">Première</option>
                      <option value="terminale">Terminale</option>
                      <option value="bac-1">Bac+1</option>
                      <option value="bac-2">Bac+2</option>
                      <option value="bac-3">Bac+3</option>
                      <option value="bac-4">Bac+4</option>
                      <option value="bac-5">Bac+5 et plus</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Dernier diplôme obtenu</label>
                    <select
                      name="niveau_dernier_diplome"
                      value={formData.currentLevel}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-[#6366F1] focus:outline-none"
                    >
                      <option value="">Sélectionnez votre dernier diplôme</option>
                      <option value="Aucun">Aucun</option>
                      <option value="CAP, BEP - niv 3">CAP, BEP - niv 3</option>
                      <option value="Baccalauréat - niv 4">Baccalauréat - niv 4</option>
                      <option value="DEUG, BTS, DUT, DEUST - niv5">DEUG, BTS, DUT, DEUST - niv5</option>
                      <option value="Licence, BUT - niv 6">Licence, BUT - niv 6</option>
                      <option value="Maîtrise - niv 6">Maîtrise - niv 6</option>
                      <option value="Master, Ingénieur - niv 7">Master, Ingénieur - niv 7</option>
                      <option value="Doctorat - niv 8">Doctorat - niv 8</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Affichage des erreurs */}
            {submitError && (
              <div className="mt-6 p-4 bg-red-600/20 border border-red-600/50 rounded-lg">
                <p className="text-red-400 text-center">{submitError}</p>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Précédent
              </button>
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-[#6366F1] to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-[#f43f5e] hover:to-[#e11d48] transition-all duration-300"
                >
                  Suivant
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white hover:from-[#e11d48] hover:to-[#be123c]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer ma candidature'
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CandidaturePage;