import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users } from 'lucide-react';

export default function MissionContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-100 shadow-lg"
      >
        <p className="text-xl md:text-2xl text-gray-800 text-center leading-relaxed">
          To turn villages into flourishing ecosystems through community workshops, 
          innovative waste solutions, and forest regeneration — one seed, one village at a time.
        </p>
      </motion.div>
      
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-center">Community Innovation</h3>
          <p className="text-gray-600 leading-relaxed text-center">
            Working directly with villagers and students to develop practical solutions — 
            from turning waste into resources to collecting native seeds that restore local forests.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-center">Measurable Impact</h3>
          <p className="text-gray-600 leading-relaxed text-center">
            Real change you can see: villages with cleaner air, innovative waste management systems, 
            and thriving forests grown from locally collected seeds.
          </p>
        </motion.div>
      </div>
    </>
  );
}
