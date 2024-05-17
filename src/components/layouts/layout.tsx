import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

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
