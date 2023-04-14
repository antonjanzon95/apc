import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMoney, BiTennisBall } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

const MobileNav = () => {
  const linkStyle = "flex flex-col justify-center items-center";

  return (
    <>
      <nav className="laptop:hidden w-screen fixed bottom-0 h-20 text-slate-100 flex items-center justify-center bg-gradient-to-b from-red-700 to-red-950">
        <ul className="flex items-center w-full h-full">
          <li className="w-1/4">
            <Link href={"/"} className={linkStyle}>
              <AiOutlineHome size={28} /> Hem
            </Link>
          </li>
          <li className="w-1/4">
            <Link href={"/priser"} className={linkStyle}>
              <BiMoney size={28} />
              Priser
            </Link>
          </li>
          <li className="w-1/4">
            <Link href={"/seriespel"} className={linkStyle}>
              <BiTennisBall size={28} />
              Seriespel
            </Link>
          </li>
          <li className="w-1/4">
            <Link href={"/klubb-apc"} className={linkStyle}>
              <Image
                src={"/apc-logo.png"}
                width={36.33}
                height={28}
                alt="apc-logo"
                className="h-auto"
              />
              Klubb APC
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
