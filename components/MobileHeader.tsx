import React from "react";
import Image from "next/image";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const MobileHeader = () => {
  return (
    <header className="laptop:hidden w-screen fixed top-0 h-16 p-4 flex justify-between items-center bg-black bg-opacity-60 text-slate-100">
      <Image
        src={"/header-logo.png"}
        width={80}
        height={40}
        alt="header-logo"
      />

      <button className="w-24 h-10 bg-gradient-to-r from-red-700 to-red-600 rounded">
        Bli medlem
      </button>
    </header>
  );
};

export default MobileHeader;
