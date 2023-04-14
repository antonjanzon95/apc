import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

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
      <section className="text-slate-100 bg-gradient-to-r from-red-950 to-red-900 min-h-screen">
        {children}
      </section>
      <Footer />
    </>
  );
};

export default Layout;
