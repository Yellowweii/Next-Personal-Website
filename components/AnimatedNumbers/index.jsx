"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      console.log(latest);
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.innerHTML = latest.toFixed(0);
      }
    });
  }, [value, springValue]);
  return <span ref={ref}>1</span>;
};

export default AnimatedNumbers;
