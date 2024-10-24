import React from 'react';
import { motion } from 'framer-motion';
import { Target, ChevronRight } from 'lucide-react';

export function ImpactAreasSection() {
  const topImpacts = [
    { name: 'Feeling isolated or misunderstood', percentage: 47.37 },
    { name: 'Difficulty collaborating with colleagues', percentage: 36.84 },
    { name: 'Causing family conflicts', percentage: 31.58 },
    { name: 'Affecting work performance', percentage: 26.32 }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              RESEARCH INSIGHTS
            </div>
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Key Impact Areas
          </h2>
        </motion.div>

        {/* Impact Areas Grid */}
        <motion.div 
          className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-xl p-8 mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold ml-4">Impact Analysis</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {topImpacts.map((impact, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 rounded-xl p-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between items-center">
                    <span>{impact.name}</span>
                    <span className="font-bold">{impact.percentage}%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full mt-2">
                    <motion.div 
                      className="bg-white h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${impact.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Our Solution Approach</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  <span>Research-backed insights about behaviors and communication patterns</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  <span>Focus on Gen Z and Gen Y as primary subjects with 78.95% coverage</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  <span>Comprehensive insights about Gen X beliefs and preferences</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  <span>Privacy-focused data collection through voluntary surveys</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Our Commitment Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900 p-8 rounded-3xl shadow-lg">
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Target className="w-8 h-8 text-white" />
            </motion.div>
            <h4 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Our Commitment
            </h4>
            <p className="text-gray-300 leading-relaxed">
              While we acknowledge that no single app can completely bridge the generation gap, 
              our data shows that {topImpacts[0].percentage}% of users feel isolated or misunderstood. 
              We're committed to addressing these challenges through our comprehensive platform that 
              combines slang translation with deep cultural insights, backed by research and user feedback.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}