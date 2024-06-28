import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Index: React.FC = () => {
  return (
    <Layout>
            <Head>
        <title>Hospitality Industry | Brewcode Technology Private Limited</title>
        <meta
          name="description"
          content="Harness the Power of IaaS for Seamless Scalability and Enhanced Performance in Capital Markets Services."
        />
      </Head>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
        }}
      >
        <div className="cloud-image p-4">
          <Image
            src="/images/img.jpg"
            alt="cyber security image"
            fill
            className="mb-3 hero-cloud"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="hero-section-content">
              <h1 className="cyber-security-services-heading mb-3">
              Hospitality Industry
              </h1>

              <p className=" services-description text-center">
              As far as design and development are concerned, we are essentially limitless. We develop hospitality applications keeping in mind the real-time needs of the places where they may be used and the latest features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
