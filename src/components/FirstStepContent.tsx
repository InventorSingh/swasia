import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Target } from 'lucide-react';

const pilots = [
  { name: "Badhana Village", captain: "Sattu Khatkar", focus: "Innovation lab for waste solutions & seed collection" },
  { name: "Uchana Town", captain: "Paradeep Khatkar", focus: "Student-led environmental projects & forest restoration" }
];

export default function FirstStepContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
    >
      <div className="md:flex">
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="flex items-center gap-2 text-green-600 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Pilot Locations</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Haryana, India</h3>
          <p className="text-gray-600 mb-6">
            Our pilot villages are becoming living laboratories for sustainable innovation:
          </p>
          <ul className="space-y-4 mb-6">
            {pilots.map((pilot, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="border-l-4 border-green-200 pl-4"
              >
                <div className="flex items-center mb-1">
                  <Users className="w-4 h-4 text-green-600 mr-2" />
                  <span className="font-semibold">{pilot.name}</span>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Village Captain:</strong> {pilot.captain}
                </p>
                <p className="text-sm text-green-700">{pilot.focus}</p>
              </motion.li>
            ))}
          </ul>
          <p className="text-gray-600">
            Local leaders Sattu Khatkar and Paradeep Khatkar working with students to create innovative waste solutions, 
            collect native seeds, and build sustainable systems that other villages can replicate.
          </p>
        </div>
        <div className="md:w-1/2 bg-gradient-to-br from-green-100 to-emerald-100 p-8 md:p-12 flex items-center justify-center">
          <div className="text-center">
            <Target className="w-16 h-16 text-green-700 mx-auto mb-4" />
            <p className="text-lg font-medium text-green-800 mb-4">
              Tracking Real Impact
            </p>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Villages with cleaner air & water</li>
              <li>• Innovative waste solutions developed</li>
              <li>• Native forests regenerated</li>
              <li>• Models ready for scaling</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
