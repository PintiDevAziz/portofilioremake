import React from "react";
import Logo from "./minicomponents/Logo";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
const Header = () => {
  const router = useRouter();
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
    <div style={{scrollSnapAlign:'center'}} className="w-full h-20  z-50 tracking-widest  bg-themeBlack border-b-2 flex items-center justify-between px-20">
      <Logo />
      <ul className="flex items-center gap-x-10 ">
        {headerMenus.map((menu, key) => (
          <Link key={key} href={menu.path}>
            <a
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
    </div>
  );
};

export default Header;
