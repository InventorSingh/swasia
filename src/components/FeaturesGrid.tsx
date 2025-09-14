import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Home, Heart, Recycle, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: "Food & Medicine Gardens",
    description: "Helping families grow nutritious food and medicinal plants that improve health and reduce grocery costs",
    color: "text-green-600"
  },
  {
    icon: Home,
    title: "Clean Air Spaces",
    description: "Creating tree-rich neighborhoods that provide shade, fresh air, and natural cooling for healthier living",
    color: "text-blue-600"
  },
  {
    icon: Heart,
    title: "Community Wellbeing",
    description: "Building spaces where children play safely, families gather, and mental health improves through nature connection",
    color: "text-purple-600"
  },
  {
    icon: Recycle,
    title: "Waste to Resources",
    description: "Teaching communities to turn organic waste into compost and fertilizer that feeds their gardens",
    color: "text-orange-600"
  },
  {
    icon: Users,
    title: "Local Leadership",
    description: "Training community members to become self-sufficient in maintaining and expanding their living ecosystems",
    color: "text-indigo-600"
  },
  {
    icon: Trophy,
    title: "Excellence Awards",
    description: "Recognizing and encouraging families and communities who excel at creating these transformations",
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
