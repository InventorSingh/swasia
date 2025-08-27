import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Target } from 'lucide-react';

const pilots = [
  { name: "Badhana Village", captain: "Sattu Mama", focus: "Waste separation & seed collection" },
  { name: "Uchana Town", captain: "Bulli Mama Ji", focus: "Community composting & greening" }
];

export default function FirstStepContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="md:flex">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 p-8 md:p-12"
        >
          <div className="flex items-center gap-2 text-green-600 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Pilot Locations</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Haryana, India</h3>
          <p className="text-gray-600 mb-6">
            Our first pilot projects focus on immediate, practical change:
          </p>
          <ul className="space-y-4 mb-6">
            {pilots.map((pilot, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="border-l-4 border-green-200 pl-4"
              >
                <div className="flex items-center mb-1">
                  <Users className="w-4 h-4 text-green-600 mr-2" />
                  <span className="font-semibold">{pilot.name}</span>
                </div>
                <p className="text-sm text-gray-600">Captain: {pilot.captain}</p>
                <p className="text-sm text-green-700">{pilot.focus}</p>
              </motion.li>
            ))}
          </ul>
          <p className="text-gray-600">
            3-month plans covering awareness, composting, and community greening — 
            creating replicable models for sustainable village transformation.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 bg-gradient-to-br from-green-100 to-emerald-100 p-8 md:p-12 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Target className="w-16 h-16 text-green-700 mx-auto mb-4" />
            </motion.div>
            <p className="text-lg font-medium text-green-800 mb-4">
              Tracking Real Impact
            </p>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Families separating waste</li>
              <li>• Seeds collected & planted</li>
              <li>• Compost pits built</li>
              <li>• Community engagement</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
