import { motion } from "framer-motion";
import { MessageCircle, Book, Users, Archive, Sparkles } from "lucide-react";
import { ParallaxSection } from "@/components/ui/ParallaxSection";

const featuresList = [
  { name: "Slang Translator", icon: MessageCircle },
  { name: "Cultural Insights", icon: Book },
  { name: "Generations", icon: Users },
  { name: "Chat Bot", icon: Users },
  { name: "Sentence Generator", icon: Sparkles },
  { name: "Slangs Archive", icon: Archive },
];

export function KeyFeatures() {
  return (
    <ParallaxSection>
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-white">
          Key Features
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white/10 rounded-full p-4 mb-4 inline-block text-blue-400">
                <feature.icon className="w-8 h-8" />
              </div>
              <p className="font-semibold text-gray-200">{feature.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </ParallaxSection>
  );
}