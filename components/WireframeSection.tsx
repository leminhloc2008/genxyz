import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const wireframeBlocks = [
  {
    title: "Daily AI-Generated Prompts",
    description: "Engage with our community through AI-curated daily topics that spark meaningful conversations and connections.",
    image: "/assets/wireframe1.png",
    features: [
      "Dynamic prompt generation",
      "Community-driven discussions",
      "Daily fresh content"
    ]
  },
  {
    title: "Interactive Feed Experience",
    description: "A redesigned feed interface that makes sharing and discovering moments more intuitive and engaging than ever.",
    image: "/assets/wireframe2.png",
    features: [
      "Seamless navigation",
      "Rich media support",
      "Real-time interactions"
    ]
  },
  {
    title: "Enhanced Sharing Features",
    description: "Express yourself freely with our improved sharing capabilities, designed to encourage spontaneous and casual interactions.",
    image: "/assets/wireframe3.png",
    features: [
      "Quick share options",
      "Multiple media formats",
      "Instant feedback"
    ]
  }
];

export function WireframeSection() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Reimagined User Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We've transformed the way users interact with our platform through thoughtful design and innovative features.
          </p>
        </motion.div>

        <div className="space-y-32">
          {wireframeBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image Container */}
              <motion.div 
                className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 z-10" />
                
                <Image
                  src={block.image}
                  alt={block.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-500 hover:scale-105"
                />

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 rounded-full bg-blue-500/20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>

              {/* Content Container */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {block.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed">
                  {block.description}
                </p>

                <ul className="space-y-4">
                  {block.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + (featureIndex * 0.1) }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Interactive Element */}
                <motion.div
                  className="w-full h-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mt-8"
                  whileHover={{ scaleX: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="h-full w-1/3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    animate={{
                      x: ["0%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}