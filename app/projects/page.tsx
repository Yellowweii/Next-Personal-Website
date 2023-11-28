import AnimatedText from "@/components/AnimatedText";
import FuturedProject from "@/components/FuturedProject";
import React from "react";
import project1 from "@/public/images/projects/crypto-screener-cover-image.jpg";
import Project from "@/components/Project";

const Projects = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="p-32 pt-16">
        <AnimatedText className="text-8xl" text="Imagination Trumps Knowledge!" />
        <div className="grid grid-cols-12 gap-x-24 gap-y-32 mt-16">
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
          <div className="col-span-6">
            <Project img={project1} title={"Crypto Screener Application"} link="/" type="Futured Project" github="https://github.com/Yellowweii" />
          </div>
          <div className="col-span-6">
            <Project img={project1} title={"Crypto Screener Application"} link="/" type="Futured Project" github="https://github.com/Yellowweii" />
          </div>
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
          <div className="col-span-6">
            <Project img={project1} title={"Crypto Screener Application"} link="/" type="Futured Project" github="https://github.com/Yellowweii" />
          </div>
          <div className="col-span-6">
            <Project img={project1} title={"Crypto Screener Application"} link="/" type="Futured Project" github="https://github.com/Yellowweii" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
