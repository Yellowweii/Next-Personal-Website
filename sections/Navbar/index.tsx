"use client";

import CustomLink from "@/components/CustomLink/inex";
import { GithubIcon, LinkedInIcon, QQIcon, TwitterIcon, WechatIcon } from "@/components/Icons";
import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center">
        <motion.a href="https://twitter.com" target="_blank" whileHover={{ y: -2 }} whileTap={{scale: 0.9}} className="w-6 mr-3">
          <TwitterIcon />
        </motion.a>
        <motion.a href="https://github.com/Yellowweii" target="_blank" whileHover={{ y: -2 }} whileTap={{scale: 0.9}} className="w-6 mx-3">
          <GithubIcon />
        </motion.a>
        <motion.a href="https://linkedin.com" target="_blank" whileHover={{ y: -2 }} whileTap={{scale: 0.9}} className="w-6 mx-3">
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://twitter.com" target="_blank" whileHover={{ y: -2 }} whileTap={{scale: 0.9}} className="w-6 mx-3">
          <QQIcon />
        </motion.a>
        <motion.a href="https://twitter.com" target="_blank" whileHover={{ y: -2 }} whileTap={{scale: 0.9}} className="w-6 ml-3">
          <WechatIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] translate-x-[-50%] top-2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
