import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Sprout, Heart, Trophy, Mail } from 'lucide-react';

const ways = [
  { icon: Home, title: "Start in Your Community", description: "Begin food gardens and tree planting in your neighborhood for healthier living" },
  { icon: Users, title: "Bring Families Together", description: "Organize community efforts to create shared spaces that benefit everyone" },
  { icon: Sprout, title: "Grow Food & Medicine", description: "Learn to cultivate plants that feed your family and support local wildlife" },
  { icon: Heart, title: "Create Wellness Spaces", description: "Build areas where children play safely and families connect with nature" },
  { icon: Trophy, title: "Excellence Recognition", description: "Apply for awards that celebrate successful community transformations" }
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
          Join communities already transforming into living ecosystems. Whether you're starting small 
          in your backyard or organizing your entire neighborhood, every step creates healthier lives for families.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:Singh.Gurprit@outlook.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            Start Your Transformation
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+14387223299"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-green-600 text-green-700 rounded-full hover:bg-green-50 transition-colors font-medium"
          >
            <span>📞</span>
            +1 438 722 3299
          </motion.a>
        </div>
      </div>
    </>
  );
}
