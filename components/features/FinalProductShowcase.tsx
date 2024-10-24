import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const finalFeatures = [
  {
    title: "Instant Slang Translation",
    description: [
      "Real-time translation of generational slang and phrases",
      "Context-aware interpretations for accurate understanding",
      "Multi-generational language support",
      "Customizable translation preferences"
    ],
    image: "/assets/TRANSLATE.png"
  },
  {
    title: "Generational Insights Dashboard",
    description: [
      "Comprehensive overview of each generation's characteristics",
      "Interactive timelines of major cultural events",
      "Trend analysis and prediction",
      "Customizable insights based on your interests"
    ],
    image: "/assets/INSIGHTS.png"
  },
  {
    title: "Cross-Generational Forums",
    description: [
      "Moderated discussion spaces for intergenerational dialogue",
      "Topic-based threads for shared experiences",
      "Real-time translation in discussions",
      "Community-driven content and insights"
    ],
    image: "/assets/HIGHLIGHTS.png"
  }
];

export function FinalProductShowcase() {
    return (
      <section className="relative py-24 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 blur-3xl opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full" />
        </div>
  
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            className="inline-block mb-4 px-4 py-1.5 bg-gray-800 rounded-full text-sm font-medium text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            FINAL PRODUCT
          </motion.span>
  
          <motion.h2
            className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Connect with your friend anywhere in the world!
          </motion.h2>
  
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            After 48 hours, including a heuristic evaluation, we successfully delivered the MVP for Globond.
          </motion.p>
        </div>
      </section>
    );
  }