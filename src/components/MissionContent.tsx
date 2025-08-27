import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users } from 'lucide-react';

export default function MissionContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-100"
      >
        <p className="text-xl md:text-2xl text-gray-800 text-center leading-relaxed">
          To create clean, green communities by teaching seed collection from local forests, 
          promoting waste separation habits, and building sustainable practices that everyone can adopt.
        </p>
      </motion.div>
      
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Our Approach</h3>
          <p className="text-gray-600 leading-relaxed">
            Swasia believes in practical change — starting with collecting native seeds, 
            teaching waste separation, and building community habits that create immediate environmental impact.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Community Impact</h3>
          <p className="text-gray-600 leading-relaxed">
            From village seed walks to clean street Sundays, each small action builds towards 
            healthier communities where children learn environmental stewardship through daily practice.
          </p>
        </motion.div>
      </div>
    </>
  );
}
