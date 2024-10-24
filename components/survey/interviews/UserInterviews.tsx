import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar } from '@/components/ui/avatar';
import { ChevronDown, User, MessageCircle, Calendar } from 'lucide-react';
import { Interview } from '@/types';

const interviews: Interview[] = [
  {
    name: 'Le Thi Hong Nhung',
    generation: 'Gen Y',
    role: 'Marketing Manager',
    experience: '8 years',
    avatar: '/placeholder.svg?height=40&width=40',
    quote: "It's hard to communicate because of the generational differences. Gen X bosses always say, \"We used to do it this way before, why change now?\" while Gen Z colleagues want to follow every new trend. I often feel caught in the middle, struggling to bridge the gap.",
    tags: ['Communication', 'Workplace', 'Change Management'],
    date: 'March 2024'
  },
  {
    name: 'Le Thi Nga',
    generation: 'Gen X',
    role: 'Senior Director',
    experience: '15 years',
    avatar: '/placeholder.svg?height=40&width=40',
    quote: 'I find it challenging to keep up with the rapidly changing slang used by younger generations, especially in professional settings. The company has hired many young employees who often propose ideas that I find too risky. It makes me feel outdated.',
    tags: ['Professional Environment', 'Language Barrier', 'Risk Assessment'],
    date: 'March 2024'
  },
  {
    name: 'Nguyen Duc Minh',
    generation: 'Gen Z',
    role: 'Software Developer',
    experience: '2 years',
    avatar: '/placeholder.svg?height=40&width=40',
    quote: "I love programming and want to pursue a career in IT, but older generations don't understand my passion. They think I'm just playing games all day. Sometimes I use internet slang or memes in conversations, and they don't get the references, which leads to misunderstandings.",
    tags: ['Technology', 'Career Growth', 'Cultural References'],
    date: 'March 2024'
  }
];

export function UserInterviews() {
  const [selectedInterview, setSelectedInterview] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGeneration, setFilterGeneration] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredInterviews = interviews.filter(interview => {
    const matchesSearch = interview.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interview.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interview.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesGeneration = filterGeneration ? interview.generation === filterGeneration : true;
    
    return matchesSearch && matchesGeneration;
  });

  const generations = Array.from(new Set(interviews.map(i => i.generation)));

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          User Interviews
        </h2>
        
        <div className="mb-8 space-y-4">
          {/* Search and Filter Controls */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search interviews..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {generations.map((gen) => (
                <button
                  key={gen}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filterGeneration === gen
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setFilterGeneration(filterGeneration === gen ? null : gen)}
                >
                  {gen}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredInterviews.map((interview, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => setSelectedInterview(selectedInterview === index ? null : index)}
              >
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <motion.div
                      className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center text-white"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <User className="w-6 h-6" />
                    </motion.div>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">{interview.name}</h3>
                      <motion.div
                        animate={{ rotate: selectedInterview === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </motion.div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {interview.role}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {interview.generation}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {interview.date}
                      </span>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {selectedInterview === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {interview.quote}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {interview.tags.map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredInterviews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 text-gray-500"
          >
            No interviews found matching your criteria.
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}