import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigateToCandidature?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateToCandidature }) => {
  const words = ["Marketing Digital", "Communication", "E-commerce"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setTypingSpeed(37);
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypingSpeed(75);
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed, words]);

  return (
    <section className="relative min-h-screen bg-gray-800 dark:bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/herohencia.mp4" type="video/mp4" />
          {/* Fallback gradient if video fails to load */}
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gray-900/70 dark:bg-white/70"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main title with typing effect */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white dark:text-gray-800 mb-4 sm:mb-6 leading-tight text-left drop-shadow-lg">
            Business School 
            <br />
            <span className="bg-gradient-to-r from-[#6366f1] to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-1xl text-gray-300 dark:text-gray-600 mb-6 sm:mb-8 max-w-3xl leading-relaxed text-left drop-shadow-md">
            Avec plus de 30 ans d'expertise dans l'ensignement, HENCIA Business School, école de commerce innovante portée par <a href="https://ecole-ipssi.com/" target="_blank" rel="noopener noreferrer" className="text-[#6366f1] hover:text-purple-400 transition-colors duration-300 underline decoration-[#6366f1]/50 hover:decoration-purple-400">IPSSI</a> ,forme des experts commerciaux hybrides ultra-polyvalents. Rejoignez une école de commerce qui prépare la nouvelle génération aux métiers du digital.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-start">
            <Link
              href="/candidature"
              prefetch={true}
              className="bg-gradient-to-r from-[#f43f5e] to-[#e11d48] text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-[#e11d48] hover:to-[#be123c] transition-all duration-300 transform hover:scale-105 flex items-center text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
            >
              <span className="hidden sm:inline">Devenez Expert en Business Digital</span>
              <span className="sm:hidden">Expert Business Digital</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;