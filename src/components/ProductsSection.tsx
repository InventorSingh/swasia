import React from 'react';
import { Download, ShoppingCart, Sprout, Calendar, BookOpen } from 'lucide-react';
import { useTranslation } from '../utils/translations';

interface ProductsSectionProps {
  locale?: 'en' | 'hi';
}

export default function ProductsSection({ locale = 'hi' }: ProductsSectionProps) {
  const { t } = useTranslation(locale);

  return (
    <section id="products-section" className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-red-800 shadow-lg overflow-hidden bg-white flex items-center justify-center">
            <img 
              src="/swasia/swasia-logo.png" 
              alt="Swasia Logo" 
              className="w-28 h-28 object-cover"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            {t('productsTitle')}
          </h2>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            {t('productsDesc')}
          </p>
        </div>

        {/* Featured Product */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8 border-3 border-red-800 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-700">
                  <div className="text-center">
                    <Sprout className="w-16 h-16 text-red-700 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-red-800 mb-2">
                      {t('bananaePepperTitle')}
                    </h3>
                    <p className="text-red-600 font-medium">
                      {t('organicSeeds')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-3xl font-bold text-red-800 mb-4">
                  {t('featuredProduct')}
                </h4>
                <p className="text-red-700 mb-6 text-lg leading-relaxed">
                  {t('bananaePepperDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-3 bg-red-800 text-yellow-100 rounded-full hover:bg-red-900 transition-all duration-200 font-medium shadow-lg flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    {t('buyNowBtn')}
                  </button>
                  <button className="px-8 py-3 border-2 border-red-800 text-red-800 rounded-full hover:bg-red-50 transition-all duration-200 font-medium flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    {t('learnMoreBtn')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seed-to-Plant Guide */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-3xl p-8 border-3 border-red-800 shadow-xl">
            <div className="text-center mb-8">
              <Calendar className="w-12 h-12 text-red-700 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-red-800 mb-4">
                {t('seedGuideTitle')}
              </h3>
              <p className="text-red-700 text-lg max-w-3xl mx-auto mb-6">
                {t('seedGuideDesc')}
              </p>
              <a 
                href="/swasia/resources/Swasia_Indoor_Ecosystem_Kit_Branded.pdf" 
                download="Swasia_Indoor_Ecosystem_Kit_Branded.pdf"
                className="px-8 py-4 bg-red-800 text-yellow-100 rounded-full hover:bg-red-900 transition-all duration-200 font-medium shadow-lg flex items-center gap-2 mx-auto w-fit"
              >
                <Download className="w-5 h-5" />
                {t('downloadGuideBtn')}
              </a>
            </div>

            {/* Sample Plants Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
              {[
                { name: t('tomato'), collection: 'Aug-Sep', plantation: 'Feb-Mar' },
                { name: t('bananaePepper'), collection: 'Aug-Sep', plantation: 'Feb-Mar' },
                { name: t('basil'), collection: 'Jul-Aug', plantation: 'Feb-Mar' },
                { name: t('mint'), collection: 'Jul-Aug', plantation: 'Feb-Mar' },
                { name: t('cilantro'), collection: 'May-Jun', plantation: 'Feb-Mar' },
                { name: t('beans'), collection: 'Sep-Oct', plantation: 'Mar-Apr' },
                { name: t('marigold'), collection: 'Aug-Sep', plantation: 'Mar-Apr' },
                { name: t('aloe'), collection: 'Spring', plantation: 'Spring' },
                { name: t('spiderPlant'), collection: t('yearRound'), plantation: t('yearRound') },
                { name: t('nasturtium'), collection: 'Aug-Sep', plantation: 'Apr-May' }
              ].map((plant, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border-2 border-red-600 shadow-md text-center">
                  <div className="w-8 h-8 bg-red-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-bold text-red-800 text-sm mb-1">{plant.name}</h4>
                  <p className="text-xs text-red-600 mb-1">{t('collect')}: {plant.collection}</p>
                  <p className="text-xs text-red-600">{t('plant')}: {plant.plantation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coming Soon Products */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-8">
            {t('comingSoonTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border-2 border-red-700 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Sprout className="w-8 h-8 text-red-700" />
              </div>
              <h4 className="text-xl font-bold text-red-800 mb-2">
                {t('organicSeedKit')}
              </h4>
              <p className="text-red-600">
                {t('organicSeedKitDesc')}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-red-700 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-red-700" />
              </div>
              <h4 className="text-xl font-bold text-red-800 mb-2">
                {t('gardeningWorkbook')}
              </h4>
              <p className="text-red-600">
                {t('gardeningWorkbookDesc')}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-red-700 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-red-700" />
              </div>
              <h4 className="text-xl font-bold text-red-800 mb-2">
                {t('seasonalCalendar')}
              </h4>
              <p className="text-red-600">
                {t('seasonalCalendarDesc')}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}