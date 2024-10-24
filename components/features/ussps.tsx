"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Zap, MessageCircle, Brain, Bot } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Search,
    title: "All-in-One Information Hub",
    description: "Everything you need in one place, without the clutter. No more jumping between different websites or apps.",
  },
  {
    icon: Zap,
    title: "Instant Generation Translator",
    description: "Like 'Google Translate' but for generational slang. Quick, offline-capable translations at your fingertips.",
  },
  {
    icon: MessageCircle,
    title: "Cross-Generation Rewriter",
    description: "Transform your messages to resonate with different generations. Make your communication more effective and relatable.",
  },
  {
    icon: Brain,
    title: "Focused Experience",
    description: "No distractions, no irrelevant content. Pure, targeted information about bridging generational gaps.",
  },
  {
    icon: Bot,
    title: "Personal AI Assistant",
    description: "Get instant answers to your questions about generational differences, communication styles, and cultural references.",
  }
]

const gradientColors = [
  'from-blue-400 to-purple-400',
  'from-purple-400 to-pink-400',
  'from-pink-400 to-red-400',
  'from-red-400 to-orange-400',
  'from-orange-400 to-yellow-400'
]

export function USPSection() {
  return (
    <section className="py-24 bg-[#0c0f1a] text-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1a1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 px-6 py-2 rounded-full text-sm font-semibold text-gray-900">
              WHY CHOOSE US
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-8 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Unique Features That Set Us Apart
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Breaking down communication barriers between generations with innovative tools and technologies
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden bg-gray-800/50 border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradientColors[index]} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="w-6 h-6 text-gray-900" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"
                    style={{ background: `linear-gradient(to right, ${gradientColors[index]})` }}
                    initial={false}
                    whileHover={{ opacity: 0.1 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}