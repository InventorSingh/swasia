import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart } from 'lucide-react';

export default function SupportSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12 text-center border border-yellow-200"
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
          <Coffee className="w-8 h-8 text-yellow-600" />
        </div>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
        Support the Mission
      </h3>
      
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Every cup of coffee helps fuel practical environmental action in rural communities. 
        Your support directly funds seed collection programs, waste management education, 
        and community habits that create immediate positive impact.
      </p>
      
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://buymeacoffee.com/inventor.singh"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
        aria-label="Support the Swasia Project"
      >
        <Coffee className="w-6 h-6" />
        ☕ Support the Swasia Project
        <Heart className="w-5 h-5 text-red-500" />
      </motion.a>
      
      <p className="text-sm text-gray-600 mt-4">
        Every contribution, no matter the size, makes a difference
      </p>
    </motion.div>
  );
}
