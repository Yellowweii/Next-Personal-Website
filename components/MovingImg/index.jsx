"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMotionValue, motion } from "framer-motion";

const MovingImg = ({ title, link, img }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseMove = (event) => {
    setIsHovered(true);
    x.set(event.pageX - 96);
    y.set(5);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const MotionImg = motion(Image);
  return (
    <Link onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} href={link} target="_blank">
      <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
      <MotionImg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        style={{ x, y }}
        src={img}
        alt={title}
        className={`z-10 w-96 h-auto ${isHovered ? "inline-block" : "hidden"} absolute rounded-lg`}
      />
    </Link>
  );
};

export default MovingImg;
