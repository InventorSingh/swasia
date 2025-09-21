import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from '../utils/translations';

interface ContactSectionProps {
  locale?: 'en' | 'hi';
}

export default function ContactSection({ locale = 'hi' }: ContactSectionProps) {
  const { t } = useTranslation(locale);

  return (
    <section className="py-20 bg-gradient-to-br from-red-800 via-red-900 to-red-950 text-yellow-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-wide">
          {t('contactTitle')}
        </h2>
        
        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
          {t('contactDesc')}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-red-700/30 rounded-2xl p-6 border-2 border-yellow-400/30">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-red-800" />
            </div>
            <p className="font-semibold text-yellow-300">{t('email')}</p>
            <p className="text-yellow-100">Singh.Gurprit@outlook.com</p>
          </div>
          
          <div className="text-center bg-red-700/30 rounded-2xl p-6 border-2 border-yellow-400/30">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-red-800" />
            </div>
            <p className="font-semibold text-yellow-300">{t('phone')}</p>
            <p className="text-yellow-100">+1 438 722 3299</p>
          </div>
          
          <div className="text-center bg-red-700/30 rounded-2xl p-6 border-2 border-yellow-400/30">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-red-800" />
            </div>
            <p className="font-semibold text-yellow-300">{t('focus')}</p>
            <p className="text-yellow-100">{t('ruralCommunities')}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="mailto:Singh.Gurprit@outlook.com?subject=Starting a Swasia Program&body=Hi, I'm interested in starting a Swasia program in my community."
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-red-900 rounded-full hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 font-bold shadow-lg border-2 border-yellow-300"
          >
            {t('startProgramBtn')}
          </a>
          <a 
            href="mailto:Singh.Gurprit@outlook.com?subject=Partnership Opportunity&body=Hi, I'd like to discuss partnering with Swasia."
            className="px-8 py-4 border-2 border-yellow-400 text-yellow-100 rounded-full hover:bg-yellow-400 hover:text-red-900 transition-all duration-200 font-medium"
          >
            {t('partnerBtn')}
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t-2 border-yellow-400/30 text-center">
          <p className="text-yellow-200 text-lg">
            {t('copyright')}
          </p>
          <p className="text-yellow-300 italic mt-2">
            {t('tagline')}
          </p>
        </div>
      </div>
    </section>
  );
}