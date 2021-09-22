import React from "react";

const ProjectBox = (project) => {
  console.log(project);
  return (
    <div className="bg-themeGray flex-shrink-0 rounded h-auto border-2 border-themeCyan w-60 border-t-8 border-t-themeCyan2 p-4 flex flex-col items-center">
      <div className="flex items-center mb-4">
        <div className=" font-semibold text-themeCyan2 text-lg mr-2">
          Creator
        </div>
        <div className=" rounded-full overflow-hidden w-10 h-10">
          <img src={project.owner.avatar_url} />
        </div>
      </div>
      <div className="text-white font-semibold tracking-wider text-lg mb-5 whitespace-nowrap">
        {project.name}
      </div>

      <div className="flex items-center w-full flex-wrap gap-3 mb-6">
        <div className="rounded-full py-[2px] px-7 items-center justify-center flex border-2 border-themeCyan2 text-themeCyan font-semibold">
          Html
        </div>
        <div className="rounded-full  py-[2px] px-7 items-center justify-center flex border-2 border-themeCyan2 text-themeCyan font-semibold">
          css{" "}
        </div>
        <div className="rounded-full py-[2px] px-7 items-center justify-center flex border-2 border-themeCyan2 text-themeCyan font-semibold">
          Js
        </div>
        <div className="rounded-full py-[2px] px-7 items-center justify-center flex border-2 border-themeCyan2 text-themeCyan font-semibold">
          Sass
        </div>
      </div>

      <a
        href={project.html_url}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center bg-themeBlack font-semibold tracking-wider transition-all hover:bg-footerBackground w-full rounded text-themeCyan h-10"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectBox;
