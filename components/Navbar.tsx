import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const btnStyle =
    "w-full h-1 bg-black rounded transform transition duration-200 ease-in-out";

  return (
    <>
      <nav className="w-screen flex items-center justify-center">
        <button
          className="w-8 h-8 flex flex-col gap-[6px] justify-center absolute top-4 right-4"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span
            className={`${btnStyle} ${
              showMenu ? "rotate-45 translate-y-[5px]" : ""
            }`}
          ></span>
          <span className={`${btnStyle} ${showMenu ? "hidden" : ""}`}></span>
          <span
            className={`${btnStyle} ${
              showMenu ? "rotate-[-45deg] translate-y-[-5px]" : ""
            }`}
          ></span>
        </button>

        <ul className={`${showMenu ? "scale-100" : "scale-0"}`}>
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
