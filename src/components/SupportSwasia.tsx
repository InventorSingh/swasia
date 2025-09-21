import React from 'react';
import { Coffee, Heart } from 'lucide-react';

export default function SupportSwasia() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 md:p-12 border-2 border-red-800 shadow-lg">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-red-800">
            <Coffee className="w-8 h-8 text-red-700" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-red-800">
            Support the Mission
          </h3>
          
          <p className="text-lg text-red-700 mb-8 max-w-2xl mx-auto">
            Every cup of coffee helps fund Paisa education programs and supports children 
            in developing life-changing money management skills. Your contribution directly 
            impacts rural communities and builds resilient futures.
          </p>
          
          <a
            href="https://buymeacoffee.com/inventor.singh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-red-900 rounded-full hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl border-2 border-yellow-300"
            aria-label="Support the Swasia Project"
          >
            <Coffee className="w-6 h-6" />
            ☕ Support Swasia
            <Heart className="w-5 h-5 text-red-600" />
          </a>
          
          <p className="text-sm text-red-600 mt-4 font-medium">
            Every contribution, no matter the size, makes a difference in a child's future
          </p>
        </div>
      </div>
    </section>
  );
}