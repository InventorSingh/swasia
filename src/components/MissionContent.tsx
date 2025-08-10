import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Globe2 } from 'lucide-react';

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
            <Baby className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">The Heart of Swasia: Sia</h3>
          <p className="text-gray-600 leading-relaxed">
            Named after my daughter Sia — meaning victory, blessing, and grace. 
            This project is her legacy, ensuring every child grows up with clean air and green spaces as fundamental rights.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe2 className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Global Impact</h3>
          <p className="text-gray-600 leading-relaxed">
            Swasia stands at the crossroads of architecture, ecology, and technology — 
            proving that nature doesn't need to be kept outside our cities. Nature is the city.
          </p>
        </motion.div>
      </div>
    </>
  );
}
