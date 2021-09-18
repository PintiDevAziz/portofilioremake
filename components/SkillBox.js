import React from "react";
import AnimtedPercent from "../components/AnimatedCircle";
const SkillBox = (skill) => {
  return (
    <div
      style={{ color: skill.color }}
      className="w-64 h-64 relative overflow-hidden group bg-themeGray flex-shrink-0 rounded flex justify-center flex-col p-4 items-center cursor-pointer"
    >
      <div className="text-6xl mb-5 rounded-full border-4 p-1 box-content  border-themeCyan2 h-20 overflow-hidden w-20 flex items-center justify-center">
        {skill.icon}
      </div>
      <h1 className="font-semibold text-xl tracking-wider mb-4">
        {skill.name}
      </h1>
      <div className="w-full">
        <div
          className="w-full h-3 rounded-lg overflow-hidden border transition-all"
          style={{ borderColor: skill.color }}
        >
          <div
            style={{ background: skill.color, width: skill.level }}
            className="h-full transition-all"
          ></div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center bg-themeBlack/50 backdrop-blur-md w-full transition-all group-hover:translate-y-0 h-full translate-y-full">
        <AnimtedPercent percentage={parseInt(skill.level.replace("%", "")   )} />
      </div>
    </div>
  );
};

export default SkillBox;
