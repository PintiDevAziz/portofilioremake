import React from "react";
import {
  AiOutlineCopyright,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";
const Footer = () => {
  const socialMediaItems = [
    {
      icon: <AiOutlineGithub />,
      link: "https://www.github.com/IamEziz",
    },
    {
      icon: <AiOutlineInstagram />,
      link: "https://www.instagram.com/i.am.eziz/",
    },
    {
      icon: <AiOutlineYoutube />,
      link: "https://www.youtube.com/channel/UCpERt5A7SNd7s5XNAj2mGmw",
    },
  ];
  return (
    <div className=" h-20 flex justify-between items-center border-b-4 border-themeCyan2 bg-footerBackground px-20 footer w-full ">
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
      <div className="flex items-center gap-x-4">
        {socialMediaItems &&
          socialMediaItems.map((mediaItem, key) => (
            <Link href={mediaItem.link} key={key}>
              <a className="text-themeCyan2 text-[1.7rem] transition-all hover:text-themeCyan">
                {" "}
                {mediaItem.icon}
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Footer;
