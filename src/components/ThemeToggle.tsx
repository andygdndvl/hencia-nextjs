import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-12 h-6 rounded-full transition-all duration-300 ease-in-out
        ${isDarkMode ? 'bg-yellow-400' : 'bg-gray-600'}
        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isDarkMode ? 'focus:ring-yellow-500' : 'focus:ring-gray-500'}
      `}
      aria-label={isDarkMode ? 'Passer en mode sombre' : 'Passer en mode clair'}
    >
      {/* Slider */}
      <div
        className={`
          absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 ease-in-out
          flex items-center justify-center
          ${isDarkMode ? 'translate-x-0.5 bg-white' : 'translate-x-6 bg-gray-800'}
        `}
      >
        {isDarkMode ? (
          <Sun className="w-3 h-3 text-yellow-600" />
        ) : (
          <Moon className="w-3 h-3 text-blue-400" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;