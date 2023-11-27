"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "@/components/Skill";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div className="flex items-center justify-center rounded-full font-medium bg-dark text-light p-8 absolute shadow-dark cursor-pointer" whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="TailwindCSS" x="18vw" y="18vw" />
        <Skill name="MySQL" x="15vw" y="-12vw" />
        <Skill name="Java" x="32vw" y="-5vw" />
        <Skill name="Spring" x="0vw" y="-20vw" />
        <Skill name="SpringBoot" x="-25vw" y="18vw" />
        <Skill name="Vue" x="-32vw" y="-5vw" />
      </div>
    </>
  );
};

export default Skills;
