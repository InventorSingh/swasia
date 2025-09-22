import React from 'react';
import { Sprout, Droplets, Package, Users } from 'lucide-react';
import { useTranslation } from '../utils/translations';

interface NatureCourseProps {
  locale?: 'en' | 'hi';
}

export default function NatureCourse({ locale = 'hi' }: NatureCourseProps) {
  const { t } = useTranslation(locale);

  return (
    <section id="nature-course-section" className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
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
            {t('natureCourseTitle')}
          </h2>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-red-700 mb-4">
              {t('natureCourseSubtitle')}
            </p>
            <div className="bg-yellow-100 rounded-lg p-4 border-2 border-red-200">
              <p className="text-red-800 font-medium">
                {t('courseBasics')}
              </p>
            </div>
          </div>
        </div>

        {/* 4-Week Course Overview */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-red-800 mb-8 text-center">
            {t('courseOverviewTitle')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Week 1 */}
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 border-2 border-red-800 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-red-800 rounded-full mb-4 mx-auto">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-red-800 mb-3 text-center">
                {t('week1Title')}
              </h4>
              <p className="text-red-700 text-sm mb-3 text-center font-medium">
                {t('week1Theme')}
              </p>
              <p className="text-red-600 text-sm">
                {t('week1Activities')}
              </p>
            </div>

            {/* Week 2 */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 border-2 border-red-800 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-red-800 rounded-full mb-4 mx-auto">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-red-800 mb-3 text-center">
                {t('week2Title')}
              </h4>
              <p className="text-red-700 text-sm mb-3 text-center font-medium">
                {t('week2Theme')}
              </p>
              <p className="text-red-600 text-sm">
                {t('week2Activities')}
              </p>
            </div>

            {/* Week 3 */}
            <div className="bg-gradient-to-br from-yellow-100 to-orange-50 rounded-2xl p-6 border-2 border-red-800 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-red-800 rounded-full mb-4 mx-auto">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-red-800 mb-3 text-center">
                {t('week3Title')}
              </h4>
              <p className="text-red-700 text-sm mb-3 text-center font-medium">
                {t('week3Theme')}
              </p>
              <p className="text-red-600 text-sm">
                {t('week3Activities')}
              </p>
            </div>

            {/* Week 4 */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl p-6 border-2 border-red-800 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-red-800 rounded-full mb-4 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-red-800 mb-3 text-center">
                {t('week4Title')}
              </h4>
              <p className="text-red-700 text-sm mb-3 text-center font-medium">
                {t('week4Theme')}
              </p>
              <p className="text-red-600 text-sm">
                {t('week4Activities')}
              </p>
            </div>
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 border-2 border-red-800 shadow-lg">
            <h3 className="text-3xl font-bold text-red-800 mb-6 text-center">
              {t('dailyScheduleTitle')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">{t('morningCircle')}</h4>
                <p className="text-red-600 text-sm">{t('morningCircleDesc')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">{t('handsInSoil')}</h4>
                <p className="text-red-600 text-sm">{t('handsInSoilDesc')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">{t('creativeHour')}</h4>
                <p className="text-red-600 text-sm">{t('creativeHourDesc')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">{t('reflectionJournal')}</h4>
                <p className="text-red-600 text-sm">{t('reflectionJournalDesc')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-200 md:col-span-2 lg:col-span-2">
                <h4 className="font-bold text-red-800 mb-2">{t('miniWorkshops')}</h4>
                <p className="text-red-600 text-sm">{t('miniWorkshopsDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Swasia Works */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-red-800 mb-8">
            {t('whySwasiaWorksTitle')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
              <h4 className="font-bold text-red-800 mb-3">{t('learningByDoing')}</h4>
              <p className="text-red-600 text-sm">{t('learningByDoingDesc')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
              <h4 className="font-bold text-red-800 mb-3">{t('realWorldOutputs')}</h4>
              <p className="text-red-600 text-sm">{t('realWorldOutputsDesc')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200">
              <h4 className="font-bold text-red-800 mb-3">{t('sustainableVision')}</h4>
              <p className="text-red-600 text-sm">{t('sustainableVisionDesc')}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}