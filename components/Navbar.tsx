import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const btnStyle =
    "w-full h-1 bg-black rounded transform transition duration-200 ease-in-out";

  return (
    <>
      <nav className="hidden w-screen laptop:flex items-center justify-center fixed top-0 text-slate-100 font-bold bg-black bg-opacity-60">
        <Image
          src={"/header-logo.png"}
          width={80}
          height={40}
          alt="header-logo"
          className="absolute left-5 top-5"
        />
        <ul className={`flex gap-8 h-20 items-center`}>
          <li>
            <Link href={"/"}>Hem</Link>
          </li>
          <li>
            <Link href={"/priser"}>Priser</Link>
          </li>
          <li>
            <Link href={"/seriespel"}>Seriespel</Link>
          </li>
          <li>
            <Link href={"/kontakt"}>Kontakt</Link>
          </li>
          <li>
            <Link href={"/klubb-apc"}>Klubb APC</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
