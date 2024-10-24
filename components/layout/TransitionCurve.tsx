import { motion } from 'framer-motion';

interface TransitionCurveProps {
  inverted?: boolean;
}

export const TransitionCurve: React.FC<TransitionCurveProps> = ({ inverted = false }) => {
  return (
    <div className="relative">
      <div className={`h-[200px] w-full overflow-hidden ${inverted ? 'rotate-180' : ''}`}>
        <svg
          viewBox="0 0 1440 250"
          preserveAspectRatio="none"
          className="absolute w-full h-full"
        >
          <path
            d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,229.3C840,235,960,213,1080,181.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            className={`${inverted ? 'fill-[#111827]' : 'fill-white'}`}
            style={{
              opacity: 1
            }}
          />
          <path
            d="M0,160L60,160C120,160,240,160,360,165.3C480,171,600,181,720,192C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            className={`${inverted ? 'fill-[#111827]' : 'fill-white'}`}
            style={{
              opacity: 0.7
            }}
          />
          <path
            d="M0,224L60,234.7C120,245,240,267,360,266.7C480,267,600,245,720,224C840,203,960,181,1080,181.3C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            className={`${inverted ? 'fill-[#111827]' : 'fill-white'}`}
            style={{
              opacity: 0.5
            }}
          />
        </svg>
      </div>
    </div>
  );
};