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
    <li ref={ref} className="w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          once: true,
        }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a target="_blank" className="text-primary capitalize" href={companyLink}>
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

export default Details;
