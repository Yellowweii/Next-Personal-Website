import React, { useRef } from "react";
import LiIcon from "../LiIcon";
import { motion } from "framer-motion";

interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({ position, company, companyLink, time, address, work }: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
      className="pl-2 sm:pl-0"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          once: true,
        }}
      >
        <h3 className="capitalize font-bold text-xl sm:text-2xl">
          {position}&nbsp;
          <a target="_blank" className="text-primary dark:text-primaryDark capitalize" href={companyLink}>
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-sm md:text-base">{work}</p>
      </motion.div>
    </li>
  );
};

export default Details;
