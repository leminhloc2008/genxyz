import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { ParallaxSection } from "@/components/ui/ParallaxSection";

export function CallToAction() {
  return (
    <ParallaxSection>
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Try it?</h2>
        <p className="text-xl mb-8 text-gray-600">
          Try our app UI now and start connecting across age gaps!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            className="bg-black text-white font-bold py-3 px-8 rounded-full flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            lores
          </motion.button>
          <motion.button
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-full flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            lores
          </motion.button>
        </div>
      </motion.section>
    </ParallaxSection>
  );
}