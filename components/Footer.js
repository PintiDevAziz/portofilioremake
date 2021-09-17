import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import Typewriter from "typewriter-effect";

const Footer = () => {
  return (
    <div className=" h-20 flex justify-center items-center border-b-4 border-themeCyan2 bg-footerBackground px-20 footer w-full ">
      <div className="flex items-center text-gray-400 tracking-wider font-semibold">
        <AiOutlineCopyright className="mr-1 mt-[2px]" />
        <div className="flex items-center">
          2019-2021 Aziz Imranzade{" "}
          <div className="ml-1">
            <Typewriter
              options={{
                strings: ["All Rights Reversed", "Made By 💙"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
