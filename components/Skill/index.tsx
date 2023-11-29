"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light lg:py-3 lg:px-6 lg:text-lg shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark text-sm py-1.5 px-3 md:py-2 md:px-4 md:text-base"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{
        once: true,
      }}
    >
      {name}
    </motion.div>
  );
};

export default Skill;
