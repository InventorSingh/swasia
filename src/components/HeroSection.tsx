import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Leaf } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20v20h20z' fill='%2310b981' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <Leaf className="w-4 h-4" />
          <span>Seeds. Habits. Impact.</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-gray-900 mb-6 tracking-tight"
        >
          Swasia
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-green-700 italic mb-8 font-light"
        >
          "May the nature be with you."
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A grassroots movement to bring nature back into our communities — starting with something 
          as simple and powerful as collecting seeds and changing habits.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#mission" 
            className="group px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            Discover Our Mission
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a 
            href="#join" 
            className="px-8 py-4 border-2 border-green-600 text-green-700 rounded-full hover:bg-green-50 transition-all duration-200 font-medium hover:border-green-700"
          >
            Join the Movement
          </a>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-6 h-6 text-green-600" />
      </motion.div>
    </section>
  );
}
