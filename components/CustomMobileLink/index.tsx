"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  toggleMenu: () => void;
}
const CustomLink = ({ href, title, className = "", toggleMenu }: CustomLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    toggleMenu();
    router.push(href);
  };
  return (
    <button onClick={handleClick} className={`${className} relative group text-light dark:text-dark`}>
      {title}
      <span
        className={`bg-light h-[3px] rounded-lg inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-all ease-in-out duration-300 dark:bg-dark ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomLink;
