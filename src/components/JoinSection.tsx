import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Wrench, Globe, Home, Megaphone, Mail } from 'lucide-react';

const ways = [
  { icon: Heart, title: "Sponsor a treehouse", description: "Fund the construction of a Swasia treehouse in your community" },
  { icon: Wrench, title: "Share your skills", description: "Contribute your expertise in design, technology, or education" },
  { icon: Globe, title: "Support the mission", description: "Help us grow through donations or partnerships" },
  { icon: Home, title: "Bring Swasia to your community", description: "Be the catalyst for change in your neighborhood" },
  { icon: Megaphone, title: "Spread the word", description: "Share our story and help the movement grow" }
];

export default function JoinSection() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {ways.map((way, index) => {
          const Icon = way.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-100"
            >
              <Icon className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">{way.title}</h3>
              <p className="text-gray-600 text-sm">{way.description}</p>
            </motion.div>
          );
        })}
      </div>
      
      <div className="text-center">
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          We're partnering with environmental NGOs, urban planners, smart city teams, schools, and communities. 
          Together, we're creating something that belongs to everyone — and grows with every hand that touches it.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:contact@swasia.org"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-medium shadow-lg hover:shadow-xl"
        >
          <Mail className="w-5 h-5" />
          Get in Touch
        </motion.a>
      </div>
    </>
  );
}
