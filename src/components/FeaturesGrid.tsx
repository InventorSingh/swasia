import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Recycle, Users, Calendar, BarChart3, MapPin } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: "Forest Regeneration",
    description: "Collecting and planting native seeds to restore local forests with species that naturally thrive",
    color: "text-green-600"
  },
  {
    icon: Recycle,
    title: "Waste Innovation Labs",
    description: "Village workshops where locals and students develop creative solutions for waste and water management",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Village Champions",
    description: "Local leaders like Sattu Khatkar (Badhana) and Pardeep Khatkar (Uchana) driving sustainable change",
    color: "text-purple-600"
  },
  {
    icon: Calendar,
    title: "Seasonal Programs",
    description: "Year-round activities from monsoon seed collection to dry season tree planting and care",
    color: "text-orange-600"
  },
  {
    icon: BarChart3,
    title: "Impact Tracking",
    description: "Measuring air quality improvements, forest coverage, and community health in pilot villages",
    color: "text-indigo-600"
  },
  {
    icon: MapPin,
    title: "Scalable Model",
    description: "Proven methods from Badhana and Uchana ready to replicate in villages across India",
    color: "text-pink-600"
  }
];

export default function FeaturesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200"
          >
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 ${feature.color} mb-4 shadow-sm`}>
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
