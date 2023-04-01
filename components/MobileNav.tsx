import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMoney, BiTennisBall } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";

const MobileNav = () => {
  return (
    <>
      <nav className="laptop:hidden w-screen fixed bottom-0 h-20 text-slate-100 flex items-center justify-center bg-red-900">
        <ul className="flex gap-8 items-center justify-center">
          <li>
            <Link
              href={"/priser"}
              className="flex flex-col justify-center items-center"
            >
              <BiMoney size={28} />
              Priser
            </Link>
          </li>
          <li>
            <Link
              href={"/seriespel"}
              className="flex flex-col justify-center items-center"
            >
              <BiTennisBall size={28} />
              Seriespel
            </Link>
          </li>
          <li>
            <Link
              href={"/kontakt"}
              className="flex flex-col justify-center items-center"
            >
              <AiOutlinePhone size={28} /> Kontakt
            </Link>
          </li>
          <li>
            <Link
              href={"/klubb-apc"}
              className="flex flex-col justify-center items-center"
            >
              <Image
                src={"/apc-logo.png"}
                width={36.33}
                height={28}
                alt="apc-logo"
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
