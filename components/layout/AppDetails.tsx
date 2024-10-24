"use client"

import { motion } from "framer-motion"
import { ParallaxSection } from "@/components/ui/ParallaxSection"

export function AppDetails() {
  return (
    <ParallaxSection>
      <motion.section
        className="bg-gray-800 py-12 px-6 rounded-3xl mb-16 shadow-lg text-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              GenXYZ
            </motion.h2>
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-gray-400">Platform</h3>
              <p>iOS & Android</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-gray-400">Launch Date</h3>
              <p>Coming Soon</p>
            </motion.div>
          </div>
          <div className="md:col-span-2">
            <motion.p
              className="mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              GenXYZ is designed to bridge the communication gap between
              generations. Our app offers real-time slang translation, cultural
              insights, and historical context to help users understand and
              connect across age groups.
            </motion.p>
            <motion.p
              className="mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              From decoding the latest Gen Z lingo to explaining Boomer
              references, GenXYZ provides a comprehensive suite of tools to
              enhance intergenerational communication and understanding.
            </motion.p>
          </div>
        </div>
      </motion.section>
    </ParallaxSection>
  )
}