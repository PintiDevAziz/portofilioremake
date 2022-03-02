import React, { useState } from "react";
import Logo from "./minicomponents/Logo";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import {AiOutlineMenu} from 'react-icons/ai'
const Header = () => {
  const router = useRouter();
  const [isMenu, setIsMenu] = useState(false);
  const headerMenus = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Skills",
      path: "/skills",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div
      style={{ scrollSnapAlign: "center" }}
      className="w-full h-20 header   z-50 tracking-widest  bg-themeBlack border-b-2 flex justify-between sm:px-20 px-4"
    >
      <Logo />
      <ul
        className={`flex sm:static sm:w-auto transition-all ${
          isMenu ? "translate-y-0" : " sm:translate-y-0 -translate-y-full"
        }  inset-0 z-[100] sm:z-0 justify-center sm:justify-start absolute items-center gap-x-10 sm:flex-row flex-col w-full bg-black/50 sm:bg-transparent gap-y-8 sm:gap-y-0`}
      >
        {headerMenus.map((menu, key) => (
          <Link key={key} href={menu.path}>
            <a
              onClick={() => {
                setIsMenu(!isMenu);
              }}
              className={` ${
                router.pathname == menu.path
                  ? "after:w-full text-white "
                  : "text-gray-400"
              } relative text-lg hover:text-white transition-all after:bottom-[-3px] font-semibold after:flex after:h-[3px] after:rounded after:w-0 after:transition-all hover:after:w-full after:absolute after:bg-themeCyan`}
            >
              {menu.title}
            </a>
          </Link>
        ))}
      </ul>
      <div
        className=" sm:hidden my-auto"
        onClick={() => {
          setIsMenu(!isMenu);
        }}
      >
        <AiOutlineMenu className="text-white text-3xl"/>
      </div>
    </div>
  );
};

export default Header;
