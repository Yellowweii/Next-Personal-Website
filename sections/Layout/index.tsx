import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

interface LayoutProps {
  className?: string;
}

const Layout = ({ className }: LayoutProps) => {
  return (
    <div className={`${className} w-full h-full z-0 inline-block`}>
      <div className="flex items-center justify-between w-full p-32 pt-0">
        <div className="w-1/2">
          <Image src="https://home.weblvw.com/_next/image?url=%2Fimages%2FprofilePic.png&w=1080&q=75" alt="picture" className="w-full h-auto" width={500} height={500} />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center">
          <AnimatedText className="text-left" text="Turning Vision Into Reality With Code And Design." />
          <p className="my-4 px-4 text-base font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web
            development.
          </p>
          <div className="flex items-center self-start mt-2">
            <Link
              className="flex items-center p-2.5 px-6 bg-black text-light font-semibold text-lg rounded-lg hover:bg-light hover:text-black border-2 border-solid border-transparent hover:border-dark transition duration-300 ease-in-out active:scale-[0.8]"
              href="/dummy.pdf"
              target="_blank"
              download="true"
            >
              Resume
              <LinkArrow className="w-6 ml-1" />
            </Link>
            <Link className="ml-4 text-lg font-medium capitalize text-dark underline" href="mailto:1119765689hw@gmail.com">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
