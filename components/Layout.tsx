import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <MobileHeader />
      <Sidebar />
      <MobileNav />
      <section className="text-slate-100 bg-red-950 min-h-screen">
        {children}
      </section>
    </>
  );
};

export default Layout;
