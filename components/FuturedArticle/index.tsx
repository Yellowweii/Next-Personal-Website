import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface FuturedArticleProps {
  img: StaticImageData;
  title: string;
  time: string;
  summary: string;
  link: string;
}

const FuturedArticle = ({ img, title, time, summary, link }: FuturedArticleProps) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark"></div>
      <Link className="w-full cursor-pointer inline-block overflow-hidden rounded-lg group" href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto group-hover:scale-105 duration-200" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      <Link href="" target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
  );
};

export default FuturedArticle;
