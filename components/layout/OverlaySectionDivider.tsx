// components/layout/OverlaySectionDivider.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export function OverlaySectionDivider() {
    return (
        <div className="relative min-h-screen w-full -my-1">
          <Image
            src="/assets/mck12.png"
            alt="App Interface Mockup"
            layout="fill"
            objectFit="cover"
            className="opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
      );
}