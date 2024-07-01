import IndustriesList from "@component/components/IndustriesList";
import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Index: React.FC = () => {
  const servicesList = [
    "Disaster recovery solutions",
    "Discount programs—wireless campus and dorms",
    "Portable and desktop products",
    "Asset refresh schedules",
    "Responsible disposal plans",
    "Seasonal financing",
    "Security solutions",
    "Trade-in programs",
    "Virtual clients",
    "Virtual servers",
    "Wired classrooms"
];
  return (
    <Layout>
      <Head>
        <title>E-Commerce Industry | Brewcode Technology Private Limited</title>
        <meta
          name="description"
          content="Harness the Power of IaaS for Seamless Scalability and Enhanced Performance in High Tech Services."
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
              <h1 className="industry-heading mb-3">E-Commerce</h1>
              <img
                src="/images/svg/ecommerce-image.svg"
                alt="ecommerce image"
                className="mb-4 industry-icon"
                loading="lazy"
              />

              <p className=" services-description text-center">
                Home / Industries / E-Commerce
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="case-studies-black-container container-fluid text-white">
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="col-md-7">
              <div>
                <h2 className="industry-healthcare-sub-heading">
                  E-Commerce Industry
                </h2>
                <p className="industries-text">
                  To ensure that our customers have a seamless experience while
                  browsing your web, mobile app products, our e-Commerce app
                  developers understand your specific requirements, design and
                  integrate simple yet powerful features.
                </p>
              </div>
              <div>
                <h2 className="industry-healthcare-sub-heading">
                  E-Commerce Industry
                </h2>
                <p className="industries-text">
                  The education field, whether K-12 or higher education, private
                  or public, is facing a drastic change in how IT services are
                  consumed. IT administrators are facing an increased challenge
                  of creating and supporting a full-time online community in
                  environments that stretch from across the classroom to across
                  the globe. And all the while, IT leaders are also responsible
                  for student information security, including grades and
                  financial information.
                </p>
                <p className="industries-text">
                  Compounding your challenge is the constant pressure on budget
                  and funding. More needs must be met with less to satisfy deans
                  and boards of educations—not to mention students and their
                  families, and the surrounding community.
                </p>
                <p className="industries-text">
                  WEI solutions offer the needed technology to create wired and
                  wireless infrastructure, secure and scalable networks,
                  physical and virtual workstations and servers, and private
                  storage with data management throughout.
                </p>
              </div>
        
              <div className="my-5">
                <div className="">
                  {servicesList .map((item, index) => (
                    <li key={index} className="industry-healthcare-list-items">
                      {item}
                    </li>
                  ))}
                </div>
              </div>
            </div>

            <IndustriesList />
          </div>
        
        </div>
      </div>
    </Layout>
  );
};

export default Index;
