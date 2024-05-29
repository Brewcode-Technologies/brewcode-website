import Head from "next/head";
import Home from "./home";
import React from "react";

const Index: React.FC = () => {
  return (
    <>
      <Head>
      <img src = "/images/svg/brewcode_logo_svg.svg"/>
      <title>Brewcode Home page</title>
      </Head>

      <Home />
    </>
  );
};

export default Index;
