import Head from "next/head";
import Layout from "@component/components/layouts/layout ";
import Home from "./home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Brewcode Home page</title>
      </Head>
      <Home />
    </>
  );
}
