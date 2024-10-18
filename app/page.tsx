"use client";

import Image from "next/image";
import {
  MessageCircle,
  Book,
  Zap,
  Users,
  Globe,
  Download,
  Star,
  CheckCircle,
  XCircle,
  User,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
  useInView,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Bar, BarChart, Line, LineChart, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Avatar } from '@/components/ui/avatar';

const features = [
  {
    name: "Slang Translator",
    src: "/placeholder.svg?height=400&width=200&text=Slang+Translator",
  },
  {
    name: "Generation Insights",
    src: "/placeholder.svg?height=400&width=200&text=Generation+Insights",
  },
  {
    name: "Cultural Timeline",
    src: "/placeholder.svg?height=400&width=200&text=Cultural+Timeline",
  },
  {
    name: "Community Forums",
    src: "/placeholder.svg?height=400&width=200&text=Community+Forums",
  },
  {
    name: "Generational Quiz",
    src: "/placeholder.svg?height=400&width=200&text=Generational+Quiz",
  },
  {
    name: "Trend Analyzer",
    src: "/placeholder.svg?height=400&width=200&text=Trend+Analyzer",
  },
];

function ParallaxSection({ children, offset = 50 }) {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(
    scrollY,
    [elementTop, elementTop + offset],
    [0, -offset]
  );

  useEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-center text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          GenBridge
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-center mb-8 text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Bridge the gap between generations with slang translations and
          cultural insights
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-64 h-128 md:w-96 md:h-192">
            <Image
              src="/placeholder.svg?height=800&width=400&text=GenBridge+App+Mockup"
              alt="GenBridge App Mockup showing the main interface with slang translation and generational insights features"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ScrollingFeatures() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <section ref={sectionRef} className="py-16 overflow-hidden">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        App Features
      </motion.h2>
      <div className="space-y-8">
        <motion.div className="flex whitespace-nowrap" style={{ x: x1 }}>
          {[...features, ...features].map((feature, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[150px] mx-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={feature.src}
                alt={feature.name}
                width={150}
                height={300}
                objectFit="cover"
                className="rounded-lg mb-2 shadow-lg"
              />
              <p className="text-center text-sm font-medium">{feature.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex whitespace-nowrap" style={{ x: x2 }}>
          {[...features, ...features].map((feature, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[150px] mx-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={feature.src}
                alt={feature.name}
                width={150}
                height={300}
                objectFit="cover"
                className="rounded-lg mb-2 shadow-lg"
              />
              <p className="text-center text-sm font-medium">{feature.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AppDetails() {
  return (
    <ParallaxSection>
      <motion.section
        className="bg-white py-12 px-6 rounded-3xl mb-16 shadow-lg text-gray-900"
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
              GenBridge
            </motion.h2>
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-gray-500">Platform</h3>
              <p>iOS & Android</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-gray-500">Launch Date</h3>
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
              GenBridge is designed to bridge the communication gap between
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
              references, GenBridge provides a comprehensive suite of tools to
              enhance intergenerational communication and understanding. Join
              our growing community and experience seamless cross-generational
              interactions.
            </motion.p>
          </div>
        </div>
      </motion.section>
    </ParallaxSection>
  );
}

function AppInterface() {
  return (
    <ParallaxSection>
      <motion.section
        className="relative w-full max-w-xs mx-auto aspect-[9/16] rounded-3xl overflow-hidden mb-16 shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src="/placeholder.svg?height=800&width=450&text=GenBridge+Interface"
          alt="GenBridge App Interface showing slang translation feature and generational insights dashboard"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        <motion.div
          className="absolute bottom-8 left-8 right-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-white">
            Explore Generations
          </h2>
          <p className="text-sm text-gray-200 mb-4">
            Dive into the unique characteristics, cultural touchstones, and
            linguistic trends of each generation.
          </p>
          <div className="flex space-x-2">
            <motion.button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Exploring
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </ParallaxSection>
  );
}

function KeyFeatures() {
  return (
    <ParallaxSection>
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
          Key Features
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Slang Translator", icon: MessageCircle },
            { name: "Cultural Insights", icon: Book },
            { name: "Trend Analysis", icon: Zap },
            { name: "Community Forums", icon: Users },
            { name: "Historical Timeline", icon: Globe },
            { name: "Generational Quiz", icon: Star },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-full p-4 mb-4 inline-block text-blue-500">
                <feature.icon className="w-8 h-8" />
              </div>
              <p className="font-semibold">{feature.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </ParallaxSection>
  );
}

function FeatureShowcase() {
  return (
    <ParallaxSection>
      <motion.section
        className="space-y-16 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          "Decode Slang Instantly",
          "Explore Generational Trends",
          "Connect Across Ages",
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/2 aspect-[9/16] relative rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={`/placeholder.svg?height=800&width=450&text=${feature.replace(
                  " ",
                  "+"
                )}`}
                alt={`${feature} feature interface`}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {feature}
              </h3>
              <p className="text-lg text-gray-600">
                {index === 0 &&
                  "Our advanced AI instantly translates generational slang, helping you understand the latest lingo or classic phrases from any era."}
                {index === 1 &&
                  "Dive deep into the trends, events, and cultural phenomena that shaped each generation, gaining valuable insights into different age groups."}
                {index === 2 &&
                  "Foster better communication and understanding between generations with our interactive forums and shared experiences feature."}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </ParallaxSection>
  );
}

function UserResearch() {
  const research = [
    {
      title: "Cross-Gen  Communication",
      description:
        "78% of users report improved understanding of other generations",
    },
    {
      title: "Slang Translation Usage",
      description: "Slang translator used 50 times per day on average",
    },
    {
      title: "User Engagement",
      description:
        "Users spend an average of 25 minutes daily exploring generational content",
    },
    {
      title: "Intergenerational Connections",
      description:
        "65% of users have formed new connections across generations",
    },
  ];

  return (
    <ParallaxSection>
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          User Research Findings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {research.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg bg-white text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </ParallaxSection>
  );
}

function UserInterviews() {
  const interviews = [
    {
      name: "Emily, 22 (Gen Z)",
      quote:
        "GenBridge has helped me explain my slang to my parents without eye-rolling!",
    },
    {
      name: "Michael, 45 (Gen X)",
      quote:
        "I finally understand my teenage kids' conversations, and they get my '90s references.",
    },
    {
      name: "Barbara, 68 (Boomer)",
      quote:
        "This app has brought me closer to my grandkids. I love learning about their world.",
    },
  ];

  return (
    <ParallaxSection>
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          User Interviews
        </h2>
        <div className="space-y-8">
          {interviews.map((interview, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg bg-white text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg mb-4">"{interview.quote}"</p>
              <p className="text-right font-semibold text-gray-600">
                - {interview.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </ParallaxSection>
  );
}

function CompetitiveAnalysis() {
  const features = [
    "Slang Translation",
    "Cultural Insights",
    "Generational Forums",
    "Historical Timeline",
    "Trend Analysis",
  ];
  const competitors = ["GenBridge", "Competitor A", "Competitor B"];

  return (
    <ParallaxSection>
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Competitive Analysis
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full rounded-xl shadow-lg bg-white text-gray-900">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left">Features</th>
                {competitors.map((competitor, index) => (
                  <th key={index} className="p-4 text-center">
                    {competitor}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="p-4">{feature}</td>
                  {competitors.map((_, compIndex) => (
                    <td key={compIndex} className="p-4 text-center">
                      {compIndex === 0 || Math.random() > 0.5 ? (
                        <CheckCircle className="inline-block text-green-500" />
                      ) : (
                        <XCircle className="inline-block text-red-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>
    </ParallaxSection>
  );
}

function HowMightWe() {
  const questions = [
    "How might we make slang translation more accurate and context-aware?",
    "How might we encourage users from different generations to interact more on the app?",
    "How might we present historical and cultural information in a more engaging way?",
    "How might we use AI to predict upcoming generational trends and slang?",
    "How might we create features that foster empathy between generations?",
  ];

  return (
    <ParallaxSection>
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          "How Might We" Questions
        </h2>
        <div className="space-y-4">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-blue-100 text-blue-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg font-semibold">{question}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </ParallaxSection>
  );
}

function GlobalCommunity() {
  return (
    <ParallaxSection>
      <motion.section
        className="py-16 px-8 rounded-3xl mb-16 bg-blue-500 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our survey</h2>
          <p className="text-xl mb-8">
            We have conducted a wire range survey of diverse people
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              className="flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-6 h-6 mr-2" />
              <span className="text-2xl font-bold">5M+</span>
              <span className="ml-2">GEN X</span>
            </motion.div>
            <motion.div
              className="flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="w-6 h-6 mr-2" />
              <span className="text-2xl font-bold">150+</span>
              <span className="ml-2">GEN Y</span>
            </motion.div>
            <motion.div
              className="flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              <span className="text-2xl font-bold">10M+</span>
              <span className="ml-2">GEN Z</span>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </ParallaxSection>
  );
}

function Testimonials() {
  return (
    <ParallaxSection>
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        a
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          What They Think
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex K., 19",
              role: "Student",
              quote:
                "GenBridge has made talking to my grandparents so much easier and more fun!",
            },
            {
              name: "Sarah M., 42",
              role: "Marketing Manager",
              quote:
                "This app is a game-changer for creating multi-generational marketing campaigns.",
            },
            {
              name: "Robert J., 65",
              role: "Retired Teacher",
              quote:
                "I feel more connected to younger generations thanks to GenBridge. It's truly bridging the gap.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg bg-white text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.quote}</p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </ParallaxSection>
  );
}

function Wireframes() {
  return (
    <ParallaxSection>
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Wireframes
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Low Fidelity
            </h3>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=1080&width=1920&text=Low+Fidelity+Wireframe"
                alt="Low fidelity wireframe of GenBridge app showing main features layout"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              High Fidelity
            </h3>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=1080&width=1920&text=High+Fidelity+Wireframe"
                alt="High fidelity wireframe of GenBridge app with detailed UI elements and color scheme"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </ParallaxSection>
  );
}

function CallToAction() {
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

function FinalProductShowcase() {
  const features = [
    {
      title: "Instant Slang Translation",
      description: [
        "Real-time translation of generational slang and phrases",
        "Context-aware interpretations for accurate understanding",
      ],
      image:
        "/placeholder.svg?height=800&width=400&text=Slang+Translator+Interface",
    },
    {
      title: "Generational Insights Dashboard",
      description: [
        "Comprehensive overview of each generation's key characteristics",
        "Interactive timelines of major cultural events and trends",
      ],
      image: "/placeholder.svg?height=800&width=400&text=Insights+Dashboard",
    },
    {
      title: "Cross-Generational Forums",
      description: [
        "Moderated discussion spaces for intergenerational dialogue",
        "Topic-based threads to explore shared experiences and differing perspectives",
      ],
      image: "/placeholder.svg?height=800&width=400&text=Forums+Interface",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
        Discover GenBridge
      </h2>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-8 mb-16`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {feature.title}
            </h3>
            <ul className="space-y-2 text-gray-600">
              {feature.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

const generationDistribution = [
  { name: 'Gen Z', value: 63.16 },
  { name: 'Gen Y', value: 15.79 },
  { name: 'Gen X', value: 21.05 },
];

const difficultyConnecting = [
  { name: 'Gen Z', difficulty: 83.33 },
  { name: 'Gen Y', difficulty: 66.67 },
  { name: 'Gen X', difficulty: 100 },
];

const communicationEffectiveness = [
  { name: 'Gen Z to Gen X', score: 5.67 },
  { name: 'Gen Z to Gen Y', score: 7.58 },
  { name: 'Gen Y to Gen Z', score: 7.00 },
  { name: 'Gen Y to Gen X', score: 8.33 },
  { name: 'Gen X to Gen Y', score: 6.25 },
  { name: 'Gen X to Gen Z', score: 4.25 },
];

const topImpacts = [
  { name: 'Feeling isolated or misunderstood', percentage: 47.37 },
  { name: 'Difficulty collaborating with colleagues', percentage: 36.84 },
  { name: 'Causing family conflicts', percentage: 31.58 },
  { name: 'Affecting work performance', percentage: 26.32 },
  { name: 'No significant impact', percentage: 21.05 },
];

const keyMetrics = [
  { metric: 'Total Participants', value: '19', description: 'Number of people who took part in the survey' },
  { metric: 'Gen Z Participants', value: '63.16%', description: '12 out of 19 participants' },
  { metric: 'Experiencing Difficulties', value: '84.21%', description: 'Percentage of participants who face challenges connecting with other generations' },
  { metric: 'Top Impact', value: '47.37%', description: 'Feel isolated or misunderstood due to generational gap' },
  { metric: 'Highest Communication Score', value: '8.33', description: 'Gen Y to Gen X communication effectiveness' },
  { metric: 'Lowest Communication Score', value: '4.25', description: 'Gen X to Gen Z communication effectiveness' },
];

const interviews = [
  {
    name: 'Le Thi Hong Nhung',
    generation: 'Gen Y',
    avatar: '/placeholder.svg?height=40&width=40',
    quote: 'It\'s hard to communicate because of the generational differences. Gen X bosses always say, "We used to do it this way before, why change now?" while Gen Z colleagues want to follow every new trend. I often feel caught in the middle, struggling to bridge the gap.'
  },
  {
    name: 'Le Thi Nga',
    generation: 'Gen X',
    avatar: '/placeholder.svg?height=40&width=40',
    quote: 'I find it challenging to keep up with the rapidly changing slang used by younger generations, especially in professional settings. The company has hired many young employees who often propose ideas that I find too risky. It makes me feel outdated.'
  },
  {
    name: 'Nguyen Duc Minh',
    generation: 'Gen Z',
    avatar: '/placeholder.svg?height=40&width=40',
    quote: 'I love programming and want to pursue a career in IT, but older generations don\'t understand my passion. They think I\'m just playing games all day. Sometimes I use internet slang or memes in conversations, and they don\'t get the references, which leads to misunderstandings.'
  }
];

const AnimatedNumber = ({ n }) => {
  const [number, setNumber] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (number < n) {
        setNumber(prev => Math.min(prev + 1, n));
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [number, n]);
  
  return <span>{number.toFixed(2)}</span>;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-blue-200">
        <p className="text-gray-900 font-semibold">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

function EnhancedGenGapSurveyDashboard() {
  const [selectedInterview, setSelectedInterview] = useState(null);

  // Create refs for each section
  const headerRef = useRef(null);
  const distributionRef = useRef(null);
  const difficultyRef = useRef(null);
  const communicationRef = useRef(null);
  const impactsRef = useRef(null);
  const metricsRef = useRef(null);
  const interviewsRef = useRef(null);

  // Check if each section is in view
  const headerInView = useInView(headerRef, { once: true });
  const distributionInView = useInView(distributionRef, { once: true });
  const difficultyInView = useInView(difficultyRef, { once: true });
  const communicationInView = useInView(communicationRef, { once: true });
  const impactsInView = useInView(impactsRef, { once: true });
  const metricsInView = useInView(metricsRef, { once: true });
  const interviewsInView = useInView(interviewsRef, { once: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 p-8">
      <motion.header 
        ref={headerRef}
        className="flex justify-between items-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            GENERATIONAL GAP INSIGHTS
          </h1>
        </div>
      </motion.header>

      <main className="space-y-16">
        <motion.section
          ref={distributionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={distributionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Generation Distribution
          </h2>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={generationDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value.toFixed(2)}%`}
                >
                  {generationDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.section>

        <motion.section
          ref={difficultyRef}
          initial={{ opacity: 0, y: 50 }}
          animate={difficultyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Difficulty Connecting with Other Generations
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={difficultyConnecting}>
              <XAxis dataKey="name" stroke="#4B5563" />
              <YAxis stroke="#4B5563" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="difficulty" fill="#3B82F6">
                {difficultyConnecting.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}>
                    <animate attributeName="height" from="0" to={entry.difficulty} dur="1s" />
                  </Cell>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.section>

        <motion.section
          ref={communicationRef}
          initial={{ opacity: 0, y: 50 }}
          animate={communicationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Communication Effectiveness
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={communicationEffectiveness}>
              <XAxis dataKey="name" stroke="#4B5563" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#4B5563" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2}>
                <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="2s" />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </motion.section>

        <motion.section
          ref={impactsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={impactsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Top Impacts of Generational Gap
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={topImpacts} layout="vertical">
              <XAxis type="number" stroke="#4B5563" />
              <YAxis dataKey="name" type="category" width={150} stroke="#4B5563" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="percentage" fill="#3B82F6">
                {topImpacts.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}>
                    <animate attributeName="width" from="0" to={entry.percentage} dur="1s" />
                  </Cell>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.section>

        <motion.section 
          ref={metricsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={metricsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-xl overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={metricsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.3)", 
                backgroundColor: "rgba(243, 244, 246, 1)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                <AnimatedNumber n={parseFloat(metric.value)} />
                {metric.value.includes('%') ? '%' : ''}
              </h3>
              <h4 className="text-xl font-semibold mb-4 text-gray-700">{metric.metric}</h4>
              <p className="text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          ref={interviewsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={interviewsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            User Interviews
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-center text-gray-600">
            Despite wanting to connect, differences in communication styles, values, and experiences make it challenging for different generations to understand each other, as noted by our interviewees.
          </p>
          <div className="space-y-6">
            {interviews.map((interview, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 rounded-lg p-6 shadow-lg cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={interviewsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setSelectedInterview(selectedInterview === index ? null : index)}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.3)",
                }}
              >
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-4">
                    <motion.img 
                      src={interview.avatar} 
                      alt={interview.name}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    />
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{interview.name}</h3>
                    <p className="text-sm text-blue-600">{interview.generation}</p>
                  </div>
                  <motion.div
                    className="ml-auto"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: selectedInterview === index ? 180 : 0 }}
                  >
                    <ChevronDown size={24} className="text-blue-600" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {selectedInterview === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: 1, 
                        height: 'auto',
                        transition: { 
                          height: { type: "spring", stiffness: 100, damping: 30 },
                          opacity: { duration: 0.2 }
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        height: 0,
                        transition: { 
                          height: { type: "spring", stiffness: 100, damping: 30 },
                          opacity: { duration: 0.2 }
                        }
                      }}
                    >
                      <motion.p 
                        className="text-gray-700"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {interview.quote}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default function LandingPage() {
  const scrollRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorBGRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useViewportScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, select, textarea"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 cursor-none relative">
      <motion.div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50"
        animate={{
          x: cursorPosition.x,
          y: cursorPosition.y,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.1,
        }}
      />
      <motion.div
        ref={cursorBGRef}
        className="fixed w-8 h-8 bg-blue-200 rounded-full pointer-events-none z-40"
        animate={{
          x: cursorPosition.x,
          y: cursorPosition.y,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <AppDetails />
        <AppInterface />
        <KeyFeatures />
        <FeatureShowcase />
        <ScrollingFeatures />
        <EnhancedGenGapSurveyDashboard />
        <FinalProductShowcase />
        <CallToAction />
      </main>
    </div>
  );
}