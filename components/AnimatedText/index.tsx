"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}
const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center">
      <h1 className={`inline-block w-full text-dark font-bold capitalize text-6xl ${className}`}>
        {text.split(" ").map((word, index) => (
          <motion.span key={index} className={`inline-block py-2 ${className}`} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: index * 0.05 }}>
            {word}&nbsp;
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
