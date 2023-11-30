import AnimatedText from "@/components/AnimatedText";
import FuturedArticle from "@/components/FuturedArticle";
import React from "react";
import article1 from "@/public/images/articles/pagination component in reactjs.jpg";
import article2 from "@/public/images/articles/create loading screen in react js.jpg";
import Article from "@/components/Article";
import article3 from "@/public/images/articles/create modal component in react using react portals.png";
import article4 from "@/public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "@/public/images/articles/smooth scrolling in reactjs.png";

const Articles = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <div className="p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32 pt-16 pb-0">
        <AnimatedText className="text-6xl xl:text-8xl" text="Words Can Change The World!" />
        <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16 md:gap-16">
          <FuturedArticle
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            time="9 min read"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            link="/"
            img={article1}
          />
          <FuturedArticle
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            time="9 min read"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            link="/"
            img={article2}
          />
        </ul>
        <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
        <ul>
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" date="Nov 28, 2023" link="/" img={article3} />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" date="Nov 28, 2023" link="/" img={article4} />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" date="Nov 28, 2023" link="/" img={article5} />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" date="Nov 28, 2023" link="/" img={article3} />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" date="Nov 28, 2023" link="/" img={article3} />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" date="Nov 28, 2023" link="/" img={article3} />
          <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" date="Nov 28, 2023" link="/" img={article3} />
        </ul>
      </div>
    </main>
  );
};

export default Articles;
