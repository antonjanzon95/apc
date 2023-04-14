import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-screen pb-24 laptop:pb-0 bg-red-950 text-slate-100 pt-4 text-center">
      <div className="flex">
        <div className="w-1/2 px-2 flex flex-col gap-2">
          <h2 className="text-xl font-bold">Länkar</h2>
          <ul className="flex flex-col gap-1">
            <li className="hover:underline">
              <a
                href="https://www.instagram.com/padelcenteravesta/?hl=en"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li className="hover:underline">
              <a
                href="https://www.facebook.com/people/Avesta-Padelcenter/100063650646899/"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li className="hover:underline">
              <Link href="/kontakt">Kontakta oss</Link>
            </li>
            <li className="hover:underline">
              <a
                href="https://www.matchi.se/facilities/avestapadelcenter"
                target="_blank"
              >
                Hitta oss på MATCHi
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 px-2 flex flex-col gap-2">
          <h2 className="text-xl font-bold">Hitta till oss</h2>
          <a
            href="https://www.google.com/maps/place/Avesta+Padel+Center/@60.1470291,16.186314,17z/data=!3m1!4b1!4m6!3m5!1s0x465de5c86718e7cd:0x49b969fcc8c552aa!8m2!3d60.1470264!4d16.1885027!16s%2Fg%2F11jjk6vf75"
            target="_blank"
            className="hover:underline"
          >
            Modellvägen 8 <br />
            77441 Avesta
          </a>
        </div>
      </div>
      <div className="px-4 py-8 flex flex-wrap gap-2">
        <Image
          src={"/selek-logo.png"}
          height={100}
          width={150}
          alt="Selek logo"
          className="block object-contain w-auto"
        />
        <Image
          src={"/byggmax-logo.png"}
          height={100}
          width={150}
          alt="Byggmax logo"
          className="block object-contain w-auto"
        />
        <Image
          src={"/ica-logo.png"}
          height={100}
          width={150}
          alt="Byggmax logo"
          className="block object-contain w-auto"
        />
        <Image
          src={"/vastanhede-logo.png"}
          height={100}
          width={150}
          alt="Byggmax logo"
          className="block object-contain w-auto"
        />
        <Image
          src={"/zedendahladvokatbyra.png"}
          height={100}
          width={150}
          alt="Byggmax logo"
          className="block object-contain w-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
