import React, { RefObject, useRef } from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }: { reference: RefObject<HTMLElement> }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });
  return (
    <figure className="absolute left-0 stroke-dark z-10 dark:stroke-light">
      <svg className="-rotate-90 w-[60px] h-[60px] md:w-[75px] md:h-[75px]" width={75} height={75} viewBox="0 0 100 100">
        <circle cx={75} cy={50} r={20} className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none" />
        <motion.circle style={{ pathLength: scrollYProgress }} cx={75} cy={50} r={20} className="stroke-[5px] fill-light dark:fill-dark" />
        <circle cx={75} cy={50} r={10} className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark" />
      </svg>
    </figure>
  );
};

export default LiIcon;
