import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin } from 'lucide-react';

const captains = [
  {
    name: "Sattu Khatkar",
    village: "Badhana Village",
    role: "Innovation Leader",
    description: "Leading waste management innovation and seed collection programs in Badhana"
  },
  {
    name: "Paradeep Khatkar", 
    village: "Uchana Town",
    role: "Community Catalyst",
    description: "Organizing student-led environmental projects and forest restoration initiatives"
  }
];

export default function VillageCaptains() {
  return (
    <section id="village-captains" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-green-800 bg-clip-text text-transparent"
          >
            Our Village Captains
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-600 mb-12"
          >
            Local champions leading the transformation in their communities
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {captains.map((captain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full mx-auto mb-6">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {captain.name}
                </h3>
                
                <div className="flex items-center justify-center gap-1 text-green-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{captain.village}</span>
                </div>
                
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  {captain.role}
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {captain.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
