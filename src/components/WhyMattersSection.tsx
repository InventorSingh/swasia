import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TreePine } from 'lucide-react';

const facts = [
  "Villages lack practical solutions for waste management and forest restoration",
  "Traditional knowledge about native seeds and ecosystems is being lost",
  "Rural communities need local champions and innovative approaches",
  "Environmental solutions work best when developed by the communities themselves"
];

export default function WhyMattersSection() {
  return (
    <>
      <div className="space-y-4 mb-12">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start bg-red-50 p-4 rounded-lg border border-red-100"
          >
            <AlertTriangle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
            <p className="text-gray-800">{fact}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 md:p-12 text-center overflow-hidden"
      >
        <div className="absolute top-4 right-4 opacity-10">
          <TreePine className="w-32 h-32" />
        </div>
        <p className="text-xl md:text-2xl leading-relaxed relative z-10">
          Swasia bridges the gap between environmental challenges and community solutions. 
          By empowering local champions and fostering innovation, we're proving that villages 
          can become thriving ecosystems that inspire change everywhere.
        </p>
      </motion.div>
    </>
  );
}
