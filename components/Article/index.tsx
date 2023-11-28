"use client";

import { StaticImageData } from "next/image";
import React from "react";
import MovingImg from "../MovingImg";
import { motion } from "framer-motion";

interface ArticleProps {
  img: StaticImageData;
  title: string;
  date: string;
  link: string;
}

const Article = ({ img, title, date, link }: ArticleProps) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark border border-solid border-dark first:mt-0 border-r-4 border-b-4"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImg title={title} link={link} img={img} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

export default Article;
