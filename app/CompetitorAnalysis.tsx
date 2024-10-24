import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, AlertCircle, ThumbsDown, ThumbsUp, Zap, ChevronRight, Globe, Brain, Target, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Component() {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const challenges = [
    { 
      icon: Brain,
      title: "Cultural Complexity", 
      description: "Interweaving of culture, languages, and psychology makes it a complex challenge",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Layers,
      title: "Multi-Factor Problem", 
      description: "Generation gap contains many inputs and variables to solve",
      color: "from-blue-500 to-teal-500"
    },
    { 
      icon: Target,
      title: "Focus Dilution", 
      description: "Existing solutions often cover multiple topics, diluting their effectiveness",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: Globe,
      title: "Lack of Specialization", 
      description: "No dedicated application focusing solely on bridging generational gaps",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const marketFindings = [
    {
      icon: Search,
      title: "Current Landscape",
      description: "No official applications specifically target generational communication gaps",
      stats: "0 direct competitors"
    },
    {
      icon: AlertCircle,
      title: "Challenge Level",
      description: "Solving this comprehensively is challenging due to its macro-level complexity",
      stats: "3+ interconnected factors"
    },
    {
      icon: ThumbsDown,
      title: "Existing Solutions",
      description: "Most platforms are multidisciplinary, causing distraction from the core problem",
      stats: "84% unfocused"
    },
    {
      icon: ThumbsUp,
      title: "Technology Progress",
      description: "Notable efforts made by developers to address specific aspects",
      stats: "Growing rapidly"
    },
    {
      icon: Zap,
      title: "Market Opportunity",
      description: "Strong potential for a focused solution targeting generational understanding",
      stats: "Untapped market"
    }
  ];

  return (
    <motion.section 
      className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-blue-600 font-semibold mb-4 block">Market Research</span>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
            Competitor Analysis
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our comprehensive market research reveals a unique opportunity in the generational communication space
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <motion.div 
            className="inline-flex bg-white p-1.5 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {['overview', 'challenges', 'findings'].map((tab) => (
              <motion.button
                key={tab}
                className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[400px]"
          >
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <Card className="p-8 bg-white rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50" />
                  <CardContent className="relative space-y-8">
                    <div className="max-w-3xl">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Market Overview</h3>
                      <p className="text-lg leading-relaxed text-gray-700">
                        Our research indicates a significant gap in the market for dedicated generational communication solutions. Despite the growing need, no comprehensive application currently exists to bridge this divide.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-white p-6 rounded-2xl h-full">
                          <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                            Market Opportunity
                          </h3>
                          <p className="text-gray-700">The absence of dedicated solutions creates a unique opportunity for GenBridge to pioneer in this space</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-gradient-to-r from-purple-500 to-blue-500 p-1 rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-white p-6 rounded-2xl h-full">
                          <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                            Current Solutions
                          </h3>
                          <p className="text-gray-700">Existing platforms lack focus, covering multiple topics beyond generational understanding</p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.title}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${challenge.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      initial={false}
                      animate={hoveredCard === index ? { scale: 1.02 } : { scale: 1 }}
                    />
                    <div className="relative bg-white p-8 rounded-2xl h-full transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <challenge.icon className="w-10 h-10 mb-4 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-600">{challenge.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'findings' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketFindings.map((finding, index) => (
                  <motion.div
                    key={finding.title}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-white p-8 rounded-2xl h-full border border-transparent transition-all duration-300 group-hover:border-blue-500">
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                          <finding.icon className="w-6 h-6 text-blue-500" />
                        </div>
                        <span className="text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {finding.stats}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {finding.title}
                      </h3>
                      <p className="text-gray-600">{finding.description}</p>
                      <motion.div 
                        className="mt-4 flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        animate={hoveredCard === index ? { x: 5 } : { x: 0 }}
                      >
                        <span className="text-sm font-medium mr-1">Learn more</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}