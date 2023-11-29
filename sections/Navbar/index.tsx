"use client";

import CustomLink from "@/components/CustomLink/inex";
import { GithubIcon, LinkedInIcon, MoonIcon, QQIcon, SunIcon, TwitterIcon, WechatIcon } from "@/components/Icons";
import Logo from "@/components/Logo";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { Menu, X } from "lucide-react";
import CustomMobileLink from "@/components/CustomMobileLink";

const Navbar = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const handleChange = () => {
    if (mode === "light") {
      setMode("dark");
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setMode(localTheme as "light" | "dark");
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="w-full px-8 md:px-16 lg:px-24 xl:px-32 py-8 font-medium flex items-center justify-between dark:text-light relative">
      <button onClick={toggleMenu} className="flex justify-center items-center lg:hidden ">
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <div className="w-full lg:flex hidden items-center justify-between ">
        <nav className="flex gap-8">
          {navLinks.map((link) => (
            <CustomLink key={link.href} title={link.title} href={link.href} />
          ))}
        </nav>

        <nav className="flex items-center justify-center">
          <motion.a href="https://github.com/Yellowweii" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
            <GithubIcon />
          </motion.a>
          <motion.a href="https://www.yellowwei.cn/img/QQ.png" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
            <QQIcon />
          </motion.a>
          <motion.a href="https://www.yellowwei.cn/img/Wechat.png" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
            <WechatIcon />
          </motion.a>
          <motion.a href="https://twitter.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
            <TwitterIcon />
          </motion.a>
          <motion.a href="https://linkedin.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
            <LinkedInIcon />
          </motion.a>
          <button className={`${mode === "light" ? "text-dark" : "text-dark"} ml-3 flex items-center justify-center rounded-full p-1 bg-light`} onClick={handleChange}>
            {mode === "light" ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
          </button>
        </nav>
      </div>
      {isMenuOpen && (
        <motion.div className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-sm py-32 "
        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
        animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex flex-col items-center justify-center gap-4">
            {navLinks.map((link) => (
              <CustomMobileLink toggleMenu={toggleMenu} key={link.href} title={link.title} href={link.href} />
            ))}
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-4">
            <motion.a href="https://github.com/Yellowweii" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-1 sm:mx-3 bg-light rounded-full dark:bg-dark">
              <GithubIcon />
            </motion.a>
            <motion.a href="https://www.yellowwei.cn/img/QQ.png" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-1 sm:mx-3">
              <QQIcon />
            </motion.a>
            <motion.a href="https://www.yellowwei.cn/img/Wechat.png" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-1 sm:mx-3">
              <WechatIcon />
            </motion.a>
            <motion.a href="https://twitter.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-1 sm:mx-3">
              <TwitterIcon />
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-1 sm:mx-3">
              <LinkedInIcon />
            </motion.a>
            <button className={`${mode === "light" ? "text-dark" : "text-dark"} ml-3 flex items-center justify-center rounded-full p-1 bg-light`} onClick={handleChange}>
              {mode === "light" ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
            </button>
          </nav>
        </motion.div>
      )}
      <div className="absolute left-[50%] translate-x-[-50%] top-2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
