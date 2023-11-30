import React from "react";
import developer from "@/public/images/profile/developer-pic-1.png";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "/public/images/svgs/miscellaneous_icons_1.svg";

interface LayoutProps {
  className?: string;
}

const Layout = ({ className }: LayoutProps) => {
  return (
    <div className={`${className} w-full h-full z-0`}>
      <div className="flex flex-col sm:flex-col lg:flex-row items-center justify-between w-full p-8 md:p-16 lg:p-24 xl:p-32 xl:pt-0">
        <div className=" w-full md:hidden lg:inline-block lg:w-1/2">
          <Image src={developer} alt="developer" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" className="w-full h-auto" width={500} height={500} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center self-center">
          <AnimatedText
            className="text-center !text-3xl sm:!text-5xl md:!text-6xl md:text-center lg:!text-5xl lg:text-left xl:!text-6xl xl:text-left xl:!leading-[74px]"
            text="Turning Vision Into Reality With Code And Design."
          />
          <p className="my-4 text-xs sm:text-sm md:text-base font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web
            development.
          </p>
          <div className="flex items-center self-center lg:self-start mt-2 ">
            <Link
              className="flex items-center p-2 px-4 text-base sm:p-2.5 sm:px-6 bg-black text-light font-semibold sm:text-lg rounded-lg hover:bg-light hover:text-black border-2 border-solid border-transparent hover:border-dark transition duration-300 ease-in-out active:scale-[0.8] dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
              href="/dummy.pdf"
              target="_blank"
              download="true"
            >
              Resume
              <LinkArrow className="w-6 ml-1" />
            </Link>
            <Link className="ml-4 text-base sm:text-lg font-medium capitalize text-dark underline dark:text-light" href="mailto:1119765689hw@gmail.com">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <HireMe />
      <div className="absolute right-8 bottom-8 w-24 hidden md:block">
        <Image src={lightBulb} alt="Yellowwei" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Layout;
