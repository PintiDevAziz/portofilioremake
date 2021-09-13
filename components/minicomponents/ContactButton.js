import React from "react";

const ContactButton = ({ children }) => {
  return (
    <a className="flex items-center justify-center overflow-hidden duration-500 font-bold text-[17px] tracking-wider text-themeCyan after:duration-500 border-2 rounded border-themeCyan h-12 w-72 relative after:absolute after:block after:bg-themeCyan after:w-0 z-10 hover:text-themeBlack after:z-[-1] hover:border-none hover:after:w-full after:h-full after:transition-all transition-all cursor-pointer">
      {children}
    </a>
  );
};

export default ContactButton;
