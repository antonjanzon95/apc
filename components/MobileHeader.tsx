import React from "react";
import Image from "next/image";
import LoginBtn from "./LoginBtn";

const MobileHeader = () => {
  return (
    <header className="laptop:hidden w-screen fixed top-0 h-16 p-4 flex justify-between items-center bg-black text-slate-100 z-10">
      <Image
        src={"/header-logo.png"}
        width={80}
        height={40}
        alt="header-logo"
        className="h-auto"
      />

      <LoginBtn />
    </header>
  );
};

export default MobileHeader;
