import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

// Type definitions
interface MockupShowcaseProps {
  imageUrl: string;
  reverse?: boolean;
}

interface FeatureBlockProps {
  title: string;
  description: string;
  videoSrc: string;
  benefits: string[];
  videoOnLeft: boolean;
}

interface VideoSectionProps {
  videoSrc: string;
}

interface ContentSectionProps {
  title: string;
  description: string;
  benefits: string[];
}

const mockupImages: string[] = [
  "/assets/mck23.png",
  "/assets/mck72.png",
  "/assets/MCK6-removebg.png"
];

export function FeatureSection(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#0c0f1a] text-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-24 py-24 space-y-48">
        {/* First Two Features */}
        <FeatureBlock
          title="App Feature Title"
          description="Skibidi toilet yapping fanum tax diddy drake kanye west ligma ball sigma sigma on the wall who the skibidiees of tehm all"
          videoSrc="/assets/Slangs.mov"
          benefits={[
            "Key benefit or feature point one goes here",
            "Key benefit or feature point two goes here"
          ]}
          videoOnLeft={true}
        />

        <FeatureBlock
          title="Another Amazing Feature"
          description="Skibidi toilet yapping fanum tax diddy drake kanye west ligma ball sigma sigma on the wall who the skibidiees of tehm all"
          videoSrc="/assets/Translation.mov"
          benefits={[
            "Additional benefit or feature point one",
            "Additional benefit or feature point two"
          ]}
          videoOnLeft={false}
        />

        {/* First Mockup */}
        <MockupShowcase imageUrl={mockupImages[0]} />

        {/* Next Two Features */}
        <FeatureBlock
          title="Another Amazing Feature"
          description="Skibidi toilet yapping fanum tax diddy drake kanye west ligma ball sigma sigma on the wall who the skibidiees of tehm all"
          videoSrc="/assets/GENAI.mov"
          benefits={[
            "Additional benefit or feature point one",
            "Additional benefit or feature point two"
          ]}
          videoOnLeft={true}
        />

        <FeatureBlock
          title="Another Amazing Feature"
          description="Skibidi toilet yapping fanum tax diddy drake kanye west ligma ball sigma sigma on the wall who the skibidiees of tehm all"
          videoSrc="/assets/Botto(Gen AI).mov"
          benefits={[
            "Additional benefit or feature point one",
            "Additional benefit or feature point two"
          ]}
          videoOnLeft={false}
        />

        {/* Second Mockup */}
        <MockupShowcase imageUrl={mockupImages[1]} reverse={true} />

        {/* Final Feature */}
        <FeatureBlock
          title="Another Amazing Feature"
          description="Skibidi toilet yapping fanum tax diddy drake kanye west ligma ball sigma sigma on the wall who the skibidiees of tehm all"
          videoSrc="/assets/Insights.mov"
          benefits={[
            "Additional benefit or feature point one",
            "Additional benefit or feature point two"
          ]}
          videoOnLeft={true}
        />

        {/* Final Mockup */}
        <MockupShowcase imageUrl={mockupImages[2]} />
      </div>
    </div>
  )
}

function MockupShowcase({ imageUrl, reverse = false }: MockupShowcaseProps): JSX.Element {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [2.4, 3, 2.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <motion.div 
      ref={ref}
      className="relative w-full h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="relative w-full max-w-6xl px-6 preserve-3d"
        style={{
          scale,
          opacity,
          rotateY,
          y: translateY,
        }}
      >
        {/* Floating Elements */}
        <motion.div
          className="absolute -left-10 top-1/4 w-20 h-20 rounded-full"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
          }}
        />

        <motion.div
          className="absolute -right-10 bottom-1/4 w-20 h-20 rounded-full"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
          }}
        />

        {/* Main Image Container */}
        <motion.div 
          className="relative aspect-[16/9] w-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={imageUrl}
            alt="App Mockup"
            fill
            className="object-contain"
            style={{ 
              transform: reverse ? 'scale(-1, 1)' : 'none',
              backgroundColor: 'transparent'
            }}
          />

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
            animate={{
              opacity: [0, 0.1, 0],
              x: [-500, 500, -500],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function FeatureBlock({ title, description, videoSrc, benefits, videoOnLeft }: FeatureBlockProps): JSX.Element {
  return (
    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
      {videoOnLeft ? (
        <VideoSection videoSrc={videoSrc} />
      ) : (
        <ContentSection title={title} description={description} benefits={benefits} />
      )}
      {videoOnLeft ? (
        <ContentSection title={title} description={description} benefits={benefits} />
      ) : (
        <VideoSection videoSrc={videoSrc} />
      )}
    </div>
  )
}

function VideoSection({ videoSrc }: VideoSectionProps): JSX.Element {
  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-[500px] rounded-2xl overflow-hidden">
        <video 
          src={videoSrc} 
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </motion.div>
  )
}

function ContentSection({ title, description, benefits }: ContentSectionProps): JSX.Element {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      <p className="text-xl text-gray-300">
        {description}
      </p>
      <ul className="space-y-6">
        {benefits.map((benefit, index) => (
          <motion.li 
            key={index} 
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
            <span className="text-lg text-gray-300">
              {benefit}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}