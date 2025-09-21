import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLocale: 'en' | 'hi';
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const switchLanguage = (locale: 'en' | 'hi') => {
    const currentPath = window.location.pathname;
    const baseUrl = '/swasia';
    
    if (locale === 'hi') {
      // For Hindi (default), remove any locale prefix
      const newPath = currentPath.replace(/\/en/, '');
      window.location.href = newPath || baseUrl;
    } else {
      // For English, add /en prefix
      const cleanPath = currentPath.replace(baseUrl, '').replace(/\/en/, '');
      window.location.href = `${baseUrl}/en${cleanPath}`;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
      <div className="flex items-center gap-2 p-2">
        <Globe className="w-4 h-4 text-gray-600" />
        <button
          onClick={() => switchLanguage('hi')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            currentLocale === 'hi'
              ? 'bg-red-800 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          हिं
        </button>
        <button
          onClick={() => switchLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            currentLocale === 'en'
              ? 'bg-red-800 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}