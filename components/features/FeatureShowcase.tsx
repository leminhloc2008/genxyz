import Image from 'next/image'
import { motion } from 'framer-motion'

export function FeatureShowcase() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            background: [
              "radial-gradient(circle, rgba(29,78,216,0.15) 0%, rgba(0,0,0,0) 70%)",
              "radial-gradient(circle, rgba(220,38,38,0.15) 0%, rgba(0,0,0,0) 70%)",
              "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(0,0,0,0) 70%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          <Image
            src="/assets/MCK5.png"
            alt="App Interface Showcase"
            layout="fill"
            objectFit="cover"
            className="z-10"
          />
        </motion.div>
      </section>
    </div>
  )
}