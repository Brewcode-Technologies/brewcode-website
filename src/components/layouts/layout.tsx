import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

type LayoutProps = {
  children: ReactNode;
  isHome?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="site-container">
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
