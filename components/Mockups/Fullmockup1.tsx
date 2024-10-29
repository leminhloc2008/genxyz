import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FullMockup() {
  return (
    <section className="relative flex items-center justify-center py-12 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent opacity-30" />
      </div>
      
      {/* Content container */}
      <div className="container relative z-10 px-0">
        
        {/* Large image */}
        <motion.div
          className="relative w-full max-w-48xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/assets/MCK3.png"
              alt="GenXYZ Platform Mockup"
              fill
              className="object-cover rounded-xl shadow-2xl"
              style={{ backgroundColor: 'transparent' }}
              unoptimized={true}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-xl" />
            
            {/* Floating highlights */}
            <motion.div 
              className="absolute -top-4 -right-4 w-32 h-32 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 h-32 rounded-full blur-2xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}