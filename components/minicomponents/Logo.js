import React from "react";
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/">
      <a className="text-white hover:text-themeCyan transition-all flex items-center font-pacifico font-thin">
        <span className="text-themeCyan mr-1 text-3xl"> {`</`}</span>
        <div className="text-[1.7rem]"> I Am Eziz</div>
        <span className="text-themeCyan ml-1 text-3xl"> {`>`}</span>
      </a>
    </Link>
  );
};

export default Logo;
