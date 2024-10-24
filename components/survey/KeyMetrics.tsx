import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { keyMetrics } from '@/constants/surveyData';
import { motion } from "framer-motion"

export function KeyMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {keyMetrics.map((metric, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-3xl shadow-xl overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
    </div>
  );
}