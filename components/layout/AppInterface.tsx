// src/components/layout/AppInterface.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import { useState } from "react";

interface FeatureTab {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

const featureTabs: FeatureTab[] = [
  {
    id: "translator",
    title: "Slang Translator",
    description: "Instantly translate generational slang and phrases with context-aware interpretations.",
    image: "/assets/TRANSLATE.png",
    color: "from-blue-400 to-blue-600"
  },
  {
    id: "insights",
    title: "Generation Insights",
    description: "Explore detailed analytics and insights about different generations' communication patterns.",
    image: "/assets/INSIGHTS.png",
    color: "from-purple-400 to-purple-600"
  },
  {
    id: "highlights",
    title: "Cultural Highlights",
    description: "Discover key cultural touchstones and references from each generation.",
    image: "/assets/HIGHLIGHTS.png",
    color: "from-green-400 to-green-600"
  }
];

export function AppInterface() {
  const [activeTab, setActiveTab] = useState<string>(featureTabs[0].id);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const activeFeature = featureTabs.find(tab => tab.id === activeTab);

  return (
    <ParallaxSection>
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Interface Display */}
        <motion.section
            className="relative w-full max-w-md mx-auto aspect-[9/16] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
          {/* Phone Frame */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-[2.5rem] z-20">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-black rounded-full shadow-lg shadow-blue-500/20" />
          </div>

          {/* Dynamic Content */}
          <motion.div
            className="relative w-full h-full"
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={activeFeature?.image || featureTabs[0].image}
              alt={`GenBridge ${activeFeature?.title || 'App'} Interface`}
              layout="fill"
              objectFit="cover"
              className="bg-transparent"
              priority
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b ${activeFeature?.color || 'from-blue-400 to-blue-600'} opacity-20`} />

            {/* Bottom Content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-2 text-white">
                {activeFeature?.title}
              </h2>
              <p className="text-sm text-gray-200 mb-4">
                {activeFeature?.description}
              </p>

              {/* Feature Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-4">
                {featureTabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeTab === tab.id ? 'w-8 bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Feature Selection Tabs */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {featureTabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`p-4 rounded-xl transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white`
                  : 'bg-white hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setIsHovered(tab.id)}
              onMouseLeave={() => setIsHovered(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className={`font-semibold ${activeTab === tab.id ? 'text-white' : 'text-gray-900'}`}>
                {tab.title}
              </h3>
              <motion.p 
                className={`text-sm mt-1 ${activeTab === tab.id ? 'text-white/90' : 'text-gray-500'}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: isHovered === tab.id ? 1 : 0,
                  height: isHovered === tab.id ? 'auto' : 0
                }}
                transition={{ duration: 0.2 }}
              >
                {tab.description}
              </motion.p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </ParallaxSection>
  );
}