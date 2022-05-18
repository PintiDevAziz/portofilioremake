import React from "react";
import ProjectBox from "../components/ProjectBox";
import Head from 'next/head'
const Projects = ({ data }) => {
  
  return (
    <div className="h-auto pb-4 bg-themeBlack">
      <Head>
        <title>
          My Projects
        </title>
        <meta
          property="og:title"
          content={`PintiDevAziz's Projects`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://pintidevaziz.vercel.app/projects`}
        />
      </Head>
      <h1 className="text-themeCyan font-pacifico tracking-widest sm:text-4xl text-2xl text-center pt-8 sm:mb-10 mb-6 ">
        My Github Projects
      </h1>
      <div className="sm:px-24 px-10 flex flex-wrap gap-8 ">
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
