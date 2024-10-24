import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 to-transparent" />
  
      <div className="container mx-auto px-4 z-10">
        {/* Image Section - Now Larger */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full max-w-[1400px]"> {/* Increased max-width */}
            <Image
              src="/assets/MCK4.png"
              alt="GenBridge App Mockup"
              width={2000}
              height={1400}
              className="w-full h-auto bg-transparent"
              style={{ backgroundColor: 'transparent' }}
              priority
            />
          </div>
        </motion.div>

        {/* Text Section - Now below image */}
        <div className="text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            GenXYZ
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Bridge the gap between generations with slang translations and cultural insights
          </motion.p>
        </div>
      </div>

      {/* Enhanced gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent blur-2xl" />
      </div>
    </section>
  );
}