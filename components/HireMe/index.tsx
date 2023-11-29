import Link from "next/link";
import React from "react";
import { CircularText } from "../Icons";

const HireMe = () => {
  return (
    <div className="absolute right-0 top-0 md:right-auto md:top-auto md:left-4 md:bottom-4 md:fixed flex items-center justify-center overflow-hidden">
      <div className="w-24 md:w-48 flex justify-center items-center relative">
        <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
        <Link
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-12 h-12 text-[10px] md:text-base md:w-20 md:h-20 rounded-full font-semibold hover:bg-light hover:text-dark transition duration-300 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
          href="mailto:1119765689hw@gmail.com"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
