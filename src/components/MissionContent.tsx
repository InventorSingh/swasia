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
        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-100"
      >
        <p className="text-xl md:text-2xl text-gray-800 text-center leading-relaxed">
          To build treehouses in urban areas that clean the air, lower the local temperature, 
          gather real-time environmental data, and become learning and healing spaces for communities.
        </p>
      </motion.div>
      
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Our Approach</h3>
          <p className="text-gray-600 leading-relaxed">
            Swasia stands at the crossroads of architecture, ecology, and technology — 
            proving that nature doesn't need to be kept outside our cities. Nature is the city.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Community Impact</h3>
          <p className="text-gray-600 leading-relaxed">
            Each treehouse becomes a gathering place for learning, healing, and environmental awareness, 
            creating lasting connections between people and nature in urban spaces.
          </p>
        </motion.div>
      </div>
    </>
  );
}
