import React from "react";
import ProjectBox from "../components/ProjectBox";

const Projects = ({ data }) => {
  return (
    <div className="h-auto pb-4 bg-themeBlack">
      <h1 className="text-themeCyan font-pacifico tracking-widest text-4xl text-center pt-8 mb-10">
        My Github Projects
        
      </h1>
      <div className="px-24 flex flex-wrap gap-8">
        {data &&
          data.map((project, key) => <ProjectBox key={key} {...project} />)}
      </div>
    </div>
  );
};
export const getStaticProps = async (ctx) => {
  const res = await fetch("https://api.github.com/users/IamEziz/repos");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
export default Projects;
