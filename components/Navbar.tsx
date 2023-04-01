import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const btnStyle =
    "w-full h-1 bg-black rounded transform transition duration-200 ease-in-out";

  return (
    <>
      <nav className="w-screen flex items-center justify-center">
        <ul className={`hidden laptop:flex gap-8 h-20 items-center`}>
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
