'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Have = () => {
  // Scroll animations using Framer Motion
  const { scrollYProgress } = useScroll(); // Tracks the scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]); // Scale effect
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]); // Fade-in effect

  return (
    <div className="flex justify-center items-center mt-10 h-[800px] px-4"> {/* Add padding for small screens */}
      <motion.div
        style={{
          backgroundImage: "url('/images/b4.png')", // Replace with your image path
          scale, // Smooth zoom
          opacity, // Smooth fade-in
        }}
        className="w-full h-[300px] sm:h-[200px] md:h-[300px] lg:h-[500px] max-w-[1400px] bg-cover bg-center rounded-lg shadow-lg"
      >
        {/* Optional content can go here */}
      </motion.div>
    </div>
  );
};

export default Have;
