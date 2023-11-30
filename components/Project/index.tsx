import React from "react";
import Link from "next/link";
import { GithubIcon } from "../Icons";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface ProjectProps {
  title: string;
  type: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const Project = ({ title, type, img, link, github }: ProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:text-light dark:border-light">
      <div className="absolute top-0 -right-2 md:-right-3 -z-10 w-[101%] h-[101%] md:h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl"></div>
      <Link className="w-full cursor-pointer overflow-hidden rounded-lg group" href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto group-hover:scale-105 duration-200" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-base md:text-lg lg:text-xl dark:text-primaryDark">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-2xl lg:text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link className="text-lg font-semibold underline" href={link} target="_blank">
            Visit
          </Link>
          <Link className="w-6 md:w-8" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
