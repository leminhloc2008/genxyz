'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const wireframeBlocks = [
  {
    "title": "Direct users to the translation features, instead of their profile",
    "description": "Clean and minimalist design for optimal readability in well-lit environments.",
    "image": "/assets/Translation.png",
    "features": [
      "Crisp, clear typography",
      "Intuitive layout",
      "Easy-to-use input field"
    ]
  },
  {
    title: "Suggested prompts are available when accessing Gen AI",
    description: "Enhanced chatbot interaction with preset prompts for efficient communication.",
    image: "/assets/Prompt.png",
    features: [
      "Preset prompts based on user generation",
      "Detailed questions for direct interaction",
      "Time-saving, efficient AI chat interface"
    ]
  },
  {
    title: "Build a system of outstanding slangs and insights, with quick trends at the top of each page",
    description: "Revamped design to showcase slangs and insights with an innovative approach, providing easy access to trending content.",
    image: "/assets/SlangsW.png",
    features: [
      "Engaging layout for slangs and insights",
      "Trending topics integrated at the top of each page",
      "Quick access to fresh content"
    ]
  }
];

export function WireframeSection() {
  return (
    <div className="py-24 bg-[#0c0f1a] text-white">
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
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              {/* Image Container */}
              <motion.div 
                className="relative w-full md:w-2/3 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={block.image}
                  alt={block.title}
                  width={1000}
                  height={500}
                  layout="responsive"
                  objectFit="contain"
                  className="transform transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Content Container */}
              <motion.div 
                className="w-full md:w-1/3 space-y-6"
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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}