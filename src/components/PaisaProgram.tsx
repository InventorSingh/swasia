import React from 'react';
import { Coins, TrendingUp, Heart } from 'lucide-react';
import { useTranslation } from '../utils/translations';

interface PaisaProgramProps {
  locale?: 'en' | 'hi';
}

export default function PaisaProgram({ locale = 'hi' }: PaisaProgramProps) {
  const { t } = useTranslation(locale);

  const paisaComponents = [
    {
      icon: Coins,
      title: t('earningTitle'),
      description: t('earningDesc'),
      color: "text-yellow-700"
    },
    {
      icon: TrendingUp,
      title: t('usingTitle'), 
      description: t('usingDesc'),
      color: "text-red-700"
    },
    {
      icon: Heart,
      title: t('raisingTitle'),
      description: t('raisingDesc'),
      color: "text-orange-700"
    }
  ];

  return (
    <section id="paisa-section" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            {t('paisaProgramTitle')}
          </h2>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            {t('paisaProgramDesc')}
          </p>
        </div>

        {/* Three Components - Simplified */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {paisaComponents.map((component, index) => {
            const Icon = component.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 border-2 border-red-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-yellow-200" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-800 mb-4">
                    {component.title}
                  </h3>
                  <p className="text-red-700 leading-relaxed">
                    {component.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Method Section - Simplified */}
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-12 border-2 border-red-800 shadow-lg text-center">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-red-800 shadow-lg overflow-hidden bg-white flex items-center justify-center">
            <img 
              src="/swasia/swasia-logo.png" 
              alt="Swasia Logo" 
              className="w-24 h-24 object-cover"
            />
          </div>
          <h3 className="text-3xl font-bold text-red-800 mb-6">
            {t('gamifiedLearningTitle')}
          </h3>
          <p className="text-lg text-red-700 max-w-3xl mx-auto leading-relaxed">
            {t('gamifiedLearningDesc')}
          </p>
        </div>
      </div>
    </section>
  );
}