import { GenerationData, DifficultyData, CommunicationData, ImpactData, KeyMetric, Interview } from '@/types';

export const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

export const generationDistribution: GenerationData[] = [
  { name: 'Gen Z', value: 63.16 },
  { name: 'Gen Y', value: 15.79 },
  { name: 'Gen X', value: 21.05 },
];

export const difficultyConnecting: DifficultyData[] = [
  { name: 'Gen Z', difficulty: 83.33 },
  { name: 'Gen Y', difficulty: 66.67 },
  { name: 'Gen X', difficulty: 100 },
];

export const communicationEffectiveness: CommunicationData[] = [
  { name: 'Gen Z to Gen X', score: 5.67 },
  { name: 'Gen Z to Gen Y', score: 7.58 },
  { name: 'Gen Y to Gen Z', score: 7.00 },
  { name: 'Gen Y to Gen X', score: 8.33 },
  { name: 'Gen X to Gen Y', score: 6.25 },
  { name: 'Gen X to Gen Z', score: 4.25 },
];

export const topImpacts: ImpactData[] = [
  { name: 'Feeling isolated or misunderstood', percentage: 47.37 },
  { name: 'Difficulty collaborating with colleagues', percentage: 36.84 },
  { name: 'Causing family conflicts', percentage: 31.58 },
  { name: 'Affecting work performance', percentage: 26.32 },
  { name: 'No significant impact', percentage: 21.05 },
];

export const keyMetrics: KeyMetric[] = [
  {
    metric: 'Total Participants',
    value: '19',
    description: 'Number of people who took part in the survey'
  },
  {
    metric: 'Gen Z Participants',
    value: '63.16%',
    description: '12 out of 19 participants'
  },
  {
    metric: 'Experiencing Difficulties',
    value: '84.21%',
    description: 'Percentage of participants who face challenges connecting with other generations'
  },
  {
    metric: 'Top Impact',
    value: '47.37%',
    description: 'Feel isolated or misunderstood due to generational gap'
  },
  {
    metric: 'Highest Communication Score',
    value: '8.33',
    description: 'Gen Y to Gen X communication effectiveness'
  },
  {
    metric: 'Lowest Communication Score',
    value: '4.25',
    description: 'Gen X to Gen Z communication effectiveness'
  },
];

export const interviews: Interview[] = [
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

export const features = [
  {
    name: "Slang Translator",
    src: "/assets/TRANSLATE.png",
    description: "Real-time translation of generational slang and phrases"
  },
  {
    name: "Generation Insights",
    src: "/assets/INSIGHTS.png",
    description: "Comprehensive analysis of generational characteristics"
  },
  {
    name: "Generation Highlights",
    src: "/assets/HIGHLIGHTS.png",
    description: "Key events and trends that shaped each generation"
  },
  {
    name: "Featured Post",
    src: "/assets/FEATURED.png",
    description: "Curated content about intergenerational communication"
  },
  {
    name: "Slang Insights",
    src: "/assets/SLANGS.png",
    description: "Deep dive into popular slang terms and their origins"
  },
  {
    name: "GEN AI",
    src: "/assets/GENAI.png",
    description: "AI-powered generation analysis and predictions"
  },
];