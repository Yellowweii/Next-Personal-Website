import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/Image";
import { GithubIcon } from "../Icons";

interface FuturedProjectProps {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const FuturedProject = ({ type, title, summary, img, link, github }: FuturedProjectProps) => {
  return (
    <article className="flex w-full items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light"></div>
      <Link className="w-1/2 cursor-pointer overflow-hidden rounded-lg group" href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto group-hover:scale-105 duration-200" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 text-dark font-medium dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link className="ml-4 p-2 px-6 bg-dark text-light rounded-lg text-lg font-semibold dark:bg-light dark:text-dark" href={link} target="_blank">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FuturedProject;
