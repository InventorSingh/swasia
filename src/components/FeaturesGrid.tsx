import React from 'react';
import { motion } from 'framer-motion';
import { Trees, Recycle, BarChart3, BookOpen, Monitor, Users } from 'lucide-react';

const features = [
  {
    icon: Trees,
    title: "Built Around Trees",
    description: "Each treehouse is built around existing trees or within microforests",
    color: "text-green-600"
  },
  {
    icon: Recycle,
    title: "Sustainable Materials",
    description: "Using child-safe and recycled materials for construction",
    color: "text-blue-600"
  },
  {
    icon: BarChart3,
    title: "Environmental Sensors",
    description: "Measuring air quality, cooling effects, and biodiversity indicators",
    color: "text-purple-600"
  },
  {
    icon: BookOpen,
    title: "Learning Spaces",
    description: "Public spaces for environmental education and community gathering",
    color: "text-orange-600"
  },
  {
    icon: Monitor,
    title: "Real-time Dashboard",
    description: "Community access to live environmental data and impact metrics",
    color: "text-indigo-600"
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Bringing neighborhoods together through shared green spaces",
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
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className={`inline-flex p-3 rounded-lg bg-gray-50 ${feature.color} mb-4`}>
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
