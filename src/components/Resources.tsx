import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, MapPin, Sprout } from 'lucide-react';

const resources = [
  {
    title: "Badhana Village Project Guide",
    description: "Complete poster outlining the Badhana village pilot project with Sattu Khatkar",
    filename: "Swasia_Badhana_Poster.pdf",
    icon: MapPin,
    color: "text-blue-600",
    bgColor: "from-blue-100 to-blue-200"
  },
  {
    title: "Seed Collection Guide",
    description: "Year-round seasonal guide for collecting native seeds with proper storage techniques",
    filename: "Swasia_Seed_Collection_Poster.pdf", 
    icon: Sprout,
    color: "text-green-600",
    bgColor: "from-green-100 to-green-200"
  },
  {
    title: "Uchana Town Project Guide",
    description: "Comprehensive poster for the Uchana town pilot project with Paradeep Khatkar",
    filename: "Swasia_Uchana_Poster.pdf",
    icon: MapPin,
    color: "text-purple-600", 
    bgColor: "from-purple-100 to-purple-200"
  }
];

export default function Resources() {
  const handleDownload = (filename: string, title: string) => {
    const link = document.createElement('a');
    link.href = `/swasia/resources/${filename}`;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-green-800 bg-clip-text text-transparent">
              Download Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get our comprehensive guides and posters to start your own village transformation project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${resource.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <button
                    onClick={() => handleDownload(resource.filename, resource.title)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100"
          >
            <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              Need More Resources?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us for customized guides, training materials, or to discuss bringing 
              Swasia to your community.
            </p>
            <a 
              href="mailto:Singh.Gurprit@outlook.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
