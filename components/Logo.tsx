import React from "react";
import { FaBookOpen } from "react-icons/fa";

const Logo = () => {
  return (
    <a href="/" className="cursor-pointer flex items-center gap-2 text-white">
      <FaBookOpen size={35} />
      <span className="   font-bold text-2xl">JANAKA'S</span>
      <span className=" font-normal text-2xl">BLOG</span>
    </a>
  );
};

export default Logo;
