import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AnimatedProgressProvider from "../components/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
const skills = ({ percentage }) => {
  console.log(typeof percentage);
  return (
    <div className=" w-36 h-36 transition-all">
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={percentage}
        duration={1.4}
        easingFunction={easeQuadInOut}
      >
        {(value) => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              strokeWidth={4}
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({
                pathTransition: "none",
                textColor: "#68bbc4",
                pathColor: "turquoise",
                trailColor: "#418186",
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </div>
  );
};

export default skills;
