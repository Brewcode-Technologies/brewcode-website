import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

type LayoutProps = {
  children: ReactNode;
  isHome?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, isHome }) => {
  return (
    <main className={`${isHome ? "homepage" : ""} min-h-screen flex-grow`}>
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
