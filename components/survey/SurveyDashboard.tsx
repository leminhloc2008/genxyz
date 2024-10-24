import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GenerationDistribution } from './charts/GenerationDistribution';
import { DifficultyConnecting } from './charts/DifficultyConnecting';
import { CommunicationEffectiveness } from './charts/CommunicationEffectiveness';
import { TopImpacts } from './charts/TopImpacts';
import { KeyMetrics } from './KeyMetrics';
import { UserInterviews } from './interviews/UserInterviews';

export function SurveyDashboard() {
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white p-8">
      <motion.header 
        ref={headerRef}
        className="flex justify-between items-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
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
        >
          <GenerationDistribution />
        </motion.section>

        <motion.section
          ref={difficultyRef}
          initial={{ opacity: 0, y: 50 }}
          animate={difficultyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <DifficultyConnecting />
        </motion.section>

        <motion.section
          ref={communicationRef}
          initial={{ opacity: 0, y: 50 }}
          animate={communicationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <CommunicationEffectiveness />
        </motion.section>

        <motion.section
          ref={impactsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={impactsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <TopImpacts />


        </motion.section>

        <motion.section 
          ref={metricsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={metricsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <KeyMetrics />
        </motion.section>

        <motion.section
          ref={interviewsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={interviewsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >

          <UserInterviews />
        </motion.section>
      </main>
    </div>
  );
}