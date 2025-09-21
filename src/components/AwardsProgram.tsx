import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { useTranslation } from '../utils/translations';

interface AwardsProgramProps {
  locale?: 'en' | 'hi';
}

export default function AwardsProgram({ locale = 'hi' }: AwardsProgramProps) {
  const { t } = useTranslation(locale);

  const certificationLevels = [
    {
      level: t('bronzeLevel'),
      title: t('paisaBasics'),
      description: t('bronzeDesc'),
      color: "text-orange-700",
      medalColor: "from-orange-400 to-yellow-500"
    },
    {
      level: t('silverLevel'), 
      title: t('smartManagement'),
      description: t('silverDesc'),
      color: "text-gray-700",
      medalColor: "from-gray-300 to-gray-400"
    },
    {
      level: t('goldLevel'),
      title: t('communityLeader'),
      description: t('goldDesc'),
      color: "text-yellow-700",
      medalColor: "from-yellow-400 to-amber-500"
    }
  ];

  return (
    <section id="awards-section" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* Logo Header */}
          <div className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-red-800 shadow-lg overflow-hidden">
            <img 
              src="/swasia/swasia-logo.png" 
              alt="Swasia Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            {t('awardsTitle')}
          </h2>
          
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            {t('awardsDesc')}
          </p>
        </div>

        {/* Certification Levels - Simplified */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certificationLevels.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-red-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${cert.medalColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-red-800`}>
                  <Award className="w-10 h-10 text-red-800" />
                </div>
                
                <div className={`inline-block px-6 py-2 rounded-full text-lg font-bold mb-4 ${cert.color} bg-yellow-100 border-2 border-red-700`}>
                  {cert.level}
                </div>
                
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  {cert.title}
                </h3>
                
                <p className="text-red-700 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement - Simplified */}
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-12 shadow-lg border-2 border-red-800 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-8 h-8 text-yellow-600" />
            <Star className="w-10 h-10 text-yellow-600" />
            <Star className="w-8 h-8 text-yellow-600" />
          </div>
          
          <h3 className="text-3xl font-bold text-red-800 mb-6">
            {t('buildingLeadersTitle')}
          </h3>
          
          <p className="text-xl text-red-700 max-w-4xl mx-auto leading-relaxed">
            {t('buildingLeadersDesc')}
          </p>
          
          <div className="mt-8">
            <p className="text-red-800 font-semibold">
              {t('sponsorName')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}