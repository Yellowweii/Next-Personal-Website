"use client";

import Details from "@/components/Details";
import React from "react";
import { motion, useScroll } from "framer-motion";

const Education = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  return (
    <div className="my-64">
      <h2 className="text-8xl font-bold mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] bg-dark h-full origin-top"></motion.div>
        <ul className="flex flex-col gap-8 items-start justify-between ml-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <Details
              key={item}
              position="Software Engineer"
              company="Google"
              companyLink="www.google.com"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's
               search engine, including improving the accuracy and relevance of search results and
               developing new tools for data analysis and visualization."
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
