"use client";

import { motion, useViewportScroll, useSpring } from "framer-motion";
import { AnimatedCursor } from "@/components/ui/AnimatedCursor";
import { HeroSection } from "@/components/layout/HeroSection";
import { AppDetails } from "@/components/layout/AppDetails";
import { KeyFeatures } from "@/components/features/KeyFeatures";
import { FeatureShowcase } from "@/components/features/FeatureShowcase";
import { ScrollingFeatures } from "@/components/features/ScrollingFeatures";
import { SurveyDashboard } from "@/components/survey/SurveyDashboard";
import { OverlaySectionDivider } from "@/components/layout/OverlaySectionDivider";
import { TransitionCurve } from "@/components/layout/TransitionCurve";
import { FeatureSection } from "@/components/features/FeatureSection";
import { Credits } from "@/components/final";
import { WireframeSection } from "@/components/WireframeSection";
import { ImpactAreasSection } from "@/components/layout/ImpactAreasSection";
import { USPSection } from "@/components/features/ussps";
import SurveyInsights from '@/app/SurveyInsights';
import CompetitorAnalysis from '@/app/CompetitorAnalysis';
import FullMockup from '@/components/Mockups/Fullmockup1';
import Image from 'next/image';

export default function LandingPage() {
  const { scrollYProgress } = useViewportScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative">
      <AnimatedCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      <main className="relative">
        {/* Dark Theme Sections - App Features */}
        <section className="bg-black text-white"> {/* Added text-white */}
          <div className="max-w-7xl mx-auto px-4">
            <HeroSection />
            
          </div>
        </section>

        

        <section className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-8">
                  <AppDetails />
                  <FullMockup />
            </div>
          </div>
        </section>

        {/* First Transition: Dark to Light */}
        <section className="relative">
          <div className="absolute inset-0 bg-black" />
          <TransitionCurve />
        </section>

        <section className="bg-white text-gray-900">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8"> {/* Increased max width */}
            <div className="space-y-32 py-20">
              <motion.div 
                className="text-center mb-4" // Much smaller margin
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                    RESEARCH & ANALYSIS
                  </div>
                </motion.div>
                <h2 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
                  Problem Statement
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mx-auto rounded-full" />
              </motion.div>


              <SurveyInsights />
              <OverlaySectionDivider />
              <div className="relative z-20">
                <CompetitorAnalysis />
              </div>
              <SurveyDashboard />
            </div> 
          </div>
        </section>

        {/* Second Transition: Light to Dark */}
        <section className="relative rotate-180">
          <div className="absolute inset-0 bg-white" />
          <TransitionCurve inverted />
        </section>

        {/* Light Theme Sections - Data & Survey */}
        <section className="bg-[#0c0f1a]  text-white">
          <div className="space-y-32 py-20">
                <motion.div 
                  className="text-center mb-20" // Space before Key Features
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
                    }}
                  />

                  {/* Main Content */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white px-8 py-3 rounded-full text-sm font-semibold mb-6">
                      THE SOLUTION
                    </div>
                  </motion.div>

                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-purple-500"
                  >
                    Our Approach
                  </motion.h2>

                  {/* Animated Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto rounded-full"
                  />

                  {/* Animated Dots */}
                  <div className="flex justify-center gap-2 mt-6">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-blue-500/50"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4,
                          delay: 0.6 + (i * 0.1),
                          type: "spring",
                          bounce: 0.5
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
               
                <ImpactAreasSection />
                <KeyFeatures />
                <USPSection />

                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="text-center mb-16">
                    <motion.h2 
                      className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Wireframe
                    </motion.h2>
                  </div>

                  {/* Image Container */}
                  <motion.div 
                    className="relative w-full h-[900px] rounded-3xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute -top-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl z-10"
                      animate={{ 
                        y: [-20, 20, -20],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    
                    <motion.div
                      className="absolute -bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl z-10"
                      animate={{ 
                        y: [20, -20, 20],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1
                      }}
                    />

                    {/* Main Image */}
                    <Image
                      src="/assets/ALL.png"
                      alt="Design System"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-3xl"
                      priority
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
                    
                    {/* Interactive Hover Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-blue-500/0 transition-colors duration-300"
                      whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                    />
                  </motion.div>
                </div>

                {/* Fuck this shit */}

                {/* Design System Section */}
                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    {/* Background Gradient Effects */}
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.div 
                        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ 
                          duration: 8,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                      <motion.div 
                        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
                        animate={{ 
                          scale: [1.2, 1, 1.2],
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ 
                          duration: 8,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 1
                        }}
                      />
                    </div>

                    <div className="relative z-10">
                      {/* Header Section */}
                      <div className="text-center mb-16">
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="inline-block"
                        >
                          <div className="text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                            DESIGN LANGUAGE
                          </div>
                        </motion.div>
                        
                        <motion.h2 
                          className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          Design System
                        </motion.h2>
                        
                        <motion.p 
                          className="text-xl text-gray-600 max-w-2xl mx-auto"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          A comprehensive design language that ensures consistency and elegance across our platform
                        </motion.p>
                      </div>

                      {/* Image Container */}
                      <motion.div 
                        className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Floating Elements */}
                        <motion.div
                          className="absolute -top-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl z-10"
                          animate={{ 
                            y: [-20, 20, -20],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{ 
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                        
                        <motion.div
                          className="absolute -bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl z-10"
                          animate={{ 
                            y: [20, -20, 20],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{ 
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 1
                          }}
                        />

                        {/* Main Image */}
                        <Image
                          src="/assets/dessystem.png"
                          alt="Design System"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-3xl"
                          priority
                        />

                        {/* Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
                        
                        {/* Interactive Hover Effect */}
                        <motion.div 
                          className="absolute inset-0 bg-blue-500/0 transition-colors duration-300"
                          whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                        />
                      </motion.div>

                      {/* Bottom Decorative Element */}
                      <motion.div
                        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>



                <WireframeSection />
                
                

                <div className="relative -mx-4"> {/* Adjusted container for FeatureShowcase */}
                  
                  <FeatureSection />
                  <FeatureShowcase />
                </div>
                <ScrollingFeatures />
                <Credits />
          </div>
        </section>


        
      </main>
    </div>
  );
}