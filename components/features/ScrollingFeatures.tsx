import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { features } from "@/constants/features";

export function ScrollingFeatures() {
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
                className="bg-transparent"
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
                className="rounded-lg mb-2 bg-transparent"
              />
              <p className="text-center text-sm font-medium">{feature.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}