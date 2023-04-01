import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <MobileNav />
      <section className="text-slate-100 bg-red-950 min-h-screen">
        {children}
      </section>
    </>
  );
};

export default Layout;
