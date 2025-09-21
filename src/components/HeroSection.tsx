import React from 'react';
import { Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Logo - Full Circle */}
        <div className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-red-800 shadow-lg overflow-hidden">
          <img 
            src="/swasia/swasia-logo.png" 
            alt="Swasia Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-red-800 mb-8 tracking-wide">
          SWASIA
        </h1>
        
        {/* Vision Quote */}
        <blockquote className="text-xl md:text-2xl text-red-800 italic mb-8 max-w-3xl mx-auto">
          "Building the future together, one child at a time."
        </blockquote>
        
        {/* Mission Statement */}
        <p className="text-lg text-red-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Empowering children with practical skills that create opportunities 
          and strengthen communities.
        </p>
        
        {/* Paisa Course Highlight - Simplified */}
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 shadow-lg border-2 border-red-800 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-red-700" />
            <h3 className="text-2xl font-bold text-red-800">Foundation Course: Paisa</h3>
          </div>
          <p className="text-red-700">
            Teaching children practical money skills that build confidence, 
            create opportunities, and strengthen villages.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('paisa-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-red-800 text-yellow-100 rounded-full hover:bg-red-900 transition-all duration-200 font-medium shadow-lg"
          >
            Learn About Paisa
          </button>
          <button 
            onClick={() => document.getElementById('awards-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-red-800 text-red-800 rounded-full hover:bg-red-50 transition-all duration-200 font-medium"
          >
            View Awards Program
          </button>
        </div>
      </div>
    </section>
  );
}
