import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Recycle, Users, Calendar, BarChart3, MapPin } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: "Seed Collection",
    description: "Gathering native seeds from local forests with seasonal guides and proper storage techniques",
    color: "text-green-600"
  },
  {
    icon: Recycle,
    title: "Waste Separation",
    description: "Teaching families to separate wet and dry waste with simple two-basket systems",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Community Walks",
    description: "Weekly seed walks with children and monthly clean street activities",
    color: "text-purple-600"
  },
  {
    icon: Calendar,
    title: "Habit Building",
    description: "Simple weekly routines for village captains and families to create lasting change",
    color: "text-orange-600"
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Measuring families engaged, seeds planted, compost pits built, and community participation",
    color: "text-indigo-600"
  },
  {
    icon: MapPin,
    title: "Village Pilots",
    description: "Starting with Badhana and Uchana to create replicable models for other communities",
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              className={`inline-flex p-3 rounded-lg bg-gray-50 ${feature.color} mb-4`}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
