import React, { ReactNode, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../footer";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="site-container">
      {/* <Navbar isLoading={isLoading} /> */}
      {/* <Header/> */}
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
