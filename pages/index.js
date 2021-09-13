import React from "react";
import Lottie from "react-lottie";
import Typewriter from "typewriter-effect";
import WebDevAnimationData from "../Animations/webdevelopment.json";
import Link from "next/link";
import ContactButton from "../components/minicomponents/ContactButton";
import ScrollDownAnimationData from "../Animations/scrolldown.json";
const Index = () => {
  const webDevAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: WebDevAnimationData,
  };
  const scrollDownAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: ScrollDownAnimationData,
  };
  return (
    <div className=" px-20 bg-themeBlack h-[calc(100vh-80px)] grid place-items-center grid-cols-2 grid-rows-1">
      <div>
        <div className="text-themeCyan font-bold text-2xl mb-2">
          <Typewriter
            options={{
              strings: ["Front End Developer", "Pen Spinner", "NextJs Lover"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="text-4xl text-white  font-pacifico tracking-wider mb-3">
          Aziz Imranzade
        </div>
        <div className="text-gray-400 text-lg mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
          aspernatur tempora excepturi, recusandae labore non provident animi
          quae dolor deleniti maxime quod at quia! Quae eaque pariatur corporis
          omnis saepe?
        </div>
        <ContactButton>Contact With Me</ContactButton>
      </div>
      <div className="w-[30rem]">
        <Lottie
          options={webDevAnimationOptions}
          isClickToPauseDisabled={true}
        />
      </div>
      <div className="absolute bottom-0 w-20">
        <Lottie
          options={scrollDownAnimationOptions}
          isClickToPauseDisabled={true}
        />
      </div>
    </div>
  );
};

export default Index;
