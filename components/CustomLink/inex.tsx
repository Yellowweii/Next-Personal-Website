"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}
const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`bg-black h-[3px] rounded-lg inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-all ease-in-out duration-300 ${pathname === href ? "w-full" : "w-0"}`}>
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
