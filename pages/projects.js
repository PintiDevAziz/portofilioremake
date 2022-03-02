import React from "react";
import ProjectBox from "../components/ProjectBox";

const Projects = ({ data }) => {
  return (
    <div className="h-auto pb-4 bg-themeBlack">
      <h1 className="text-themeCyan font-pacifico tracking-widest sm:text-4xl text-2xl text-center pt-8 sm:mb-10 mb-6 ">
        My Github Projects
      </h1>
      <div className="sm:px-24 px-10 flex flex-wrap gap-8  h-[calc(100vh-5rem)] overflow-scroll">
        {data &&
          data.map((project, key) => <ProjectBox key={key} {...project} />)}
      </div>
    </div>
  );
};
export const getStaticProps = async (ctx) => {
  const res = await fetch("https://api.github.com/users/pintiDevAziz/repos");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
export default Projects;
