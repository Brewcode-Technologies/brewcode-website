import BlogCard from "@component/components/BlogCard";
import IndustriesList from "@component/components/IndustriesList";
import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface communicationMedia {
  id: number;
  heading: string;
  description: string;
  category: string;
  img: string;
  imgAlt: string;

}
const Index: React.FC = () => {
  const servicesList: string[] = [
    "Disaster recovery and business continuity",
    "Optimal hardware and software selection",
    "Asset management",
    "Performance and cost analytics",
    "Security solutions",
    "System integration and testing",
    "Systems design",
  ];

  const communication: communicationMedia[] = [
    {
      id: 1,
      heading: "Health insurance",
      description:
        "Data-first approach improves audience experiences and drives advertising revenue in the streaming world",
      category: "Communication and Media",
      img: "/images/communication-and-media-image1.jpeg",
      imgAlt: "Communication and Media Image",
  
    },
    {
      id: 2,
      heading: "Health and social care",
      description:
        "The new era of media: how moving from push to pull changes the game",
      category: "Communication and Media",
      img: "/images/communication-and-media-image.jpeg",
      imgAlt: "Communication and Media Image",
  
    },
  ];

  return (
    <Layout>
      <Head>
        <title>
          Banking | Brewcode Technology Private Limited
        </title>
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
              <h1 className="industry-heading mb-3">Banking</h1>
              <img
                src="/images/svg/media-icon.svg"
                alt="ecommerce image"
                className="mb-4 industry-icon"
                loading="lazy"
              />

              <p className=" services-description text-center">
                Home / Industries / Communication & Media
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
                  IT Solutions for Telecommunications & Media
                </h2>
                <p className="industries-text">
                  As data volume increases exponentially, the regulatory
                  environment is rapidly changing. The evolution continues with
                  new formats and platforms. The dramatically changing landscape
                  demands industry-specific solutions that mitigate risk, cut
                  costs, and enable strengthened business strategies. WEI’s
                  expertise and proven solutions result in enhanced business
                  performance in the face of converging new media and emerging
                  technologies.
                </p>
              </div>
              <div>
                <h2 className="industry-healthcare-sub-heading">
                  Brewcode offers unique, industry-specific solutions in the
                  following areas
                </h2>
              </div>

              <div className="">
                <div className="">
                  {servicesList.map((item, index) => (
                    <li key={index} className="industry-healthcare-list-items">
                      {item}
                    </li>
                  ))}
                </div>
              </div>
            </div>

            <IndustriesList />
            <div className="row mt-3">
              <div className="col-12">
                <h3 className="expert-perspectives-heading">Expert perspectives</h3>
              </div>
          {communication.map((Item) => (
            <div key={Item.id} className="col-12 col-sm-6 col-md-4 gap-5 mb-4">
              <div className="">
               
                  <div className="insight-card-link">
                    <div className=" mb-3">
                      {Item.img && (
                        <div className="insight-card-image-wrapper">
                          <div className="insight-card-image-container">
                            <img
                              src={Item.img}
                              className="insight-card-img"
                              alt={Item.imgAlt}
                              loading="lazy"
                            />
                          </div>
                        </div>
                      )}
                      <p className="insight-card-category pt-3">--{Item.category}</p>

                      <p className="health-insurence-card-description health-insurence-card-heading px-1">
                        {Item.description}
                      </p>
                    </div>
                  </div>
              
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>
       
      </div>
    </Layout>
  );
};

export default Index;
