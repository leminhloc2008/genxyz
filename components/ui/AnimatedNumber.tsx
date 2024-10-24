import { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  n: number;
}

export function AnimatedNumber({ n }: AnimatedNumberProps) {
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
}