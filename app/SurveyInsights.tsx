/* eslint-disable padded-blocks */
import React from 'react';
import { motion } from 'framer-motion';
import { PieChart as PieChartIcon, BarChart as BarChartIcon } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

export default function Component() {
  // Using your actual survey data
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

  const COLORS = ['#3B82F6', '#8B5CF6', '#EC4899', '#6366F1'];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-blue-600 via-blue-400 to-purple-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Research-Backed Insights
            </div>
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-purple-500">
            Understanding the Problem Size
          </h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Based on our comprehensive survey of {generationDistribution.reduce((acc, curr) => acc + curr.value, 0).toFixed(0)}% 
            of respondents across three generations
          </motion.p>
        </motion.div>

        {/* Survey Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Generation Distribution */}
          <motion.div 
            className="bg-white rounded-3xl p-8"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <PieChartIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold ml-4">Survey Participation by Generation</h3>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={generationDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                  >
                    {generationDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Difficulty Connecting */}
          <motion.div 
            className="bg-white rounded-3xl p-8"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <BarChartIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold ml-4">Difficulty Connecting Across Generations</h3>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={difficultyConnecting}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="difficulty" fill="#3B82F6">
                    {difficultyConnecting.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}