import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import React from "react";

const Index: React.FC = () => {
  return (
    <Layout>
            <Head>
        <title>Capital Markets Services | Brewcode Technology Private Limited</title>
        <meta
          name="description"
          content="Harness the Power of IaaS for Seamless Scalability and Enhanced Performance in Capital Markets Services."
        />
      </Head>

    <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="cloud-image">
          <img
            alt="Comprehensive application services icon"
            src="/images/img.jpg"
            className="mb-3 hero-cloud"
           
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="services-content">
              <h1 className="services-header">
              Capital Markets
              </h1>
              <p className=" services-description text-center">
                Harness the Power of IaaS for Seamless Scalability and
                <br /> Enhanced Performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
