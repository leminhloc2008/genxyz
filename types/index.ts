export interface Feature {
    name: string;
    src: string;
  }
  
  export interface GenerationData {
    name: string;
    value: number;
  }
  
  export interface DifficultyData {
    name: string;
    difficulty: number;
  }
  
  export interface CommunicationData {
    name: string;
    score: number;
  }
  
  export interface ImpactData {
    name: string;
    percentage: number;
  }
  
  export interface KeyMetric {
    metric: string;
    value: string;
    description: string;
  }
  
  export interface Interview {
    name: string;
    generation: string;
    avatar: string;
    quote: string;
  }
  
  export interface CustomTooltipProps {
    active?: boolean;
    payload?: any[];
    label?: string;
  }
  
  export interface ParallaxSectionProps {
    children: React.ReactNode;
    offset?: number;
  }
  
  export interface AnimatedNumberProps {
    n: number;
  }