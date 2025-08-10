import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TreePine, Activity } from 'lucide-react';

const trees = [
  { name: "Peepal", description: "The sacred fig tree" },
  { name: "Bargad", description: "The mighty banyan" },
  { name: "Neem", description: "The healing tree" }
];

export default function FirstStepContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="md:flex">
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="flex items-center gap-2 text-green-600 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Location</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Uchana, Haryana, India</h3>
          <p className="text-gray-600 mb-6">
            The first Swasia Treehouse will be built here, featuring the sacred Triveni:
          </p>
          <ul className="space-y-3 mb-6">
            {trees.map((tree, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-center"
              >
                <TreePine className="w-5 h-5 text-green-600 mr-3" />
                <span><strong>{tree.name}</strong> - {tree.description}</span>
              </motion.li>
            ))}
          </ul>
          <p className="text-gray-600">
            This combination provides unmatched shade, oxygen, and healing benefits, 
            creating a space where children can climb, breathe, learn, and dream.
          </p>
        </div>
        <div className="md:w-1/2 bg-gradient-to-br from-green-100 to-emerald-100 p-8 md:p-12 flex items-center justify-center">
          <div className="text-center">
            <Activity className="w-16 h-16 text-green-700 mx-auto mb-4" />
            <p className="text-lg font-medium text-green-800">
              Gathering real-time air and temperature data to demonstrate 
              the measurable benefits of urban nature
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
