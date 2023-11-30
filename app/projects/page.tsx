import AnimatedText from "@/components/AnimatedText";
import FuturedProject from "@/components/FuturedProject";
import React from "react";
import project1 from "@/public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "@/public/images/projects/agency-website-cover-image.jpg";
import project3 from "@/public/images/projects/devdreaming.jpg";
import project4 from "@/public/images/projects/fashion-studio-website.jpg";
import project5 from "@/public/images/projects/nft-collection-website-cover-image.jpg";
import project6 from "@/public/images/projects/portfolio-cover-image.jpg";
import Project from "@/components/Project";
import Transition from "@/components/Transition";

const Projects = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Transition />
      <div className="w-full h-full p-6 xs:p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32 inline-block z-0">
        <AnimatedText className="!text-4xl sm:!text-6xl xl:!text-8xl" text="Imagination Trumps Knowledge!" />
        <div className="grid grid-cols-12 gap-x-0 sm:gap-x-8 lg:gap-x-16 xl:gap-x-24 gap-y-24 md:gap-y-32 mt-12 sm:mt-16">
          <div className="col-span-12">
            <FuturedProject
              img={project1}
              title={"Crypto Screener Application"}
              summary={
                "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              }
              link="/"
              type="Futured Project"
              github="https://github.com/Yellowweii"
            />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <Project img={project2} title={"Crypto Screener Application"} link="/" type="Futured Project" github="https://github.com/Yellowweii" />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <Project img={project3} title={"Crypto Screener Application"} link="/" type="Futured Project" github="https://github.com/Yellowweii" />
          </div>
          <div className="col-span-12">
            <FuturedProject
              img={project4}
              title={"Crypto Screener Application"}
              summary={
                "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              }
              link="/"
              type="Futured Project"
              github="https://github.com/Yellowweii"
            />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <Project img={project5} title={"Crypto Screener Application"} link="/" type="Futured Project" github="https://github.com/Yellowweii" />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <Project img={project6} title={"Crypto Screener Application"} link="/" type="Futured Project" github="https://github.com/Yellowweii" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
