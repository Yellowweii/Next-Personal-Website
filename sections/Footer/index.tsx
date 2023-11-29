import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <div className="py-8 px-24 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>by&nbsp;<Link className="underline underline-offset-2" target="_blank" href="https://hw.yellowwei.cn">Yellowwei</Link>
        </div>
        <Link className="underline underline-offset-2" target="_blank" href="https://blog.yellowwei.cn">Say hello</Link>
      </div>
    </footer>
  );
};

export default Footer;
