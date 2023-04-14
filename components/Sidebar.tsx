import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Sidebar = () => {
  return (
    <>
      <div className="hidden laptop:flex fixed h-screen right-0 w-14 flex-col items-center justify-center gap-4">
        <a
          href="https://www.instagram.com/padelcenteravesta/?hl=en"
          target="_blank"
          className="w-11 h-11 bg-gray-300 rounded-3xl laptop:rounded-xl laptop:hover:rounded-3xl transition ease-in-out duration-300 flex justify-center items-center"
        >
          <AiFillInstagram size={35} color="purple" />
        </a>
        <a
          href="https://www.facebook.com/people/Avesta-Padelcenter/100063650646899/"
          target="_blank"
          className="w-11 h-11 rounded-3xl laptop:rounded-xl laptop:hover:rounded-3xl transition ease-in-out duration-300 bg-gray-300 flex justify-center items-center"
        >
          <AiFillFacebook size={35} color="blue" />
        </a>
      </div>
    </>
  );
};

export default Sidebar;
