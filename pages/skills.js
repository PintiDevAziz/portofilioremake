import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import SkillBox from "../components/SkillBox";
import { DiCss3Full, DiSass, DiJavascript1, DiNpm } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { SiNextDotJs } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
const Skills = () => {
  const skillsData = [
    {
      name: "Html 5",
      level: "100%",
      icon: <AiOutlineHtml5 />,
      color: "#e34f26",
    },
    {
      name: "Css 3",
      level: "100%",
      icon: <DiCss3Full />,
      color: "#2447D7",
    },
    {
      name: "Sass",
      level: "100%",
      icon: <DiSass />,
      color: "#CF649A",
    },
    {
      name: "JavaScript",
      level: "90%",
      icon: <DiJavascript1 />,
      color: "#EFD81D",
    },
    {
      name: "React",
      level: "80%",
      icon: <GrReactjs />,
      color: "#61DAFB",
    },
    {
      name: "NextJs",
      level: "70%",
      icon: <SiNextDotJs />,
      color: "#ddd",
    },
    {
      name: "Github",
      level: "80%",
      icon: <VscGithub />,
      color: "#625494",
    },
    {
      name: "Npm",
      level: "100%",
      icon: <DiNpm />,
      color: "#cb3837",
    },
    {
      name: "Html 5",
      level: "100%",
      icon: <AiOutlineHtml5 />,
    },
    {
      name: "Html 5",
      level: "100%",
      icon: <AiOutlineHtml5 />,
    },
    {
      name: "Html 5",
      level: "100%",
      icon: <AiOutlineHtml5 />,
    },
    {
      name: "Html 5",
      level: "100%",
      icon: <AiOutlineHtml5 />,
    },
    {
      name: "Html 5",
      level: "100%",
      icon: <AiOutlineHtml5 />,
    },
  ];
  return (
    <div
      className=" flex flex-col items-center   bg-themeBlack"
      style={{ scrollSnapAlign: "start" }}
    >
      <h1 className="my-10 text-4xl font-pacifico tracking-widest text-themeCyan">
        My Coding Skills
      </h1>
      <div className=" w-3/4 h-full flex flex-wrap gap-10">
        {skillsData &&
          skillsData.map((skill, key) => <SkillBox key={key} {...skill} />)}
      </div>
    </div>
  );
};

export default Skills;
