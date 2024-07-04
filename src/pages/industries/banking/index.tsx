import BlogCard from "@component/components/BlogCard";
import IndustriesList from "@component/components/IndustriesList";
import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa6";
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
        <title>Banking | Brewcode Technology Private Limited</title>
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
                src="/images/svg/banking-hero-icon.svg"
                alt="ecommerce image"
                className="mb-4 industry-icon my-4"
                loading="lazy"
              />

              <p className=" services-description text-center">
                Home / Industries / Banking
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
                <h2 className="automative-healthcare-sub-heading">
                  Banks and capital markets firms are facing unprecedented
                  disruption. While reducing costs is critical, they must invest
                  to meet customers’ digital expectations, manage risks, and
                  attain sustainable business practices.
                </h2>
                <p className="industries-text">
                  In the new normal, banks need to create customer-centric
                  business models and provide relevant experiences and offers to
                  meet the customers’ changing needs. We help our clients
                  achieve those goals and drive customer-first growth. We work
                  with 8 out of the top 15 banks, and 9 out of the top 15
                  diversified financial companies, to help them reimagine their
                  business, become data-driven open enterprises, and better
                  equip themselves to meet evolving demands from the market,
                  partners, and regulators.
                </p>
                <p className="industries-text">
                  Capital market firms, meanwhile, need to reduce structural,
                  operational, and per-unit trade costs, introduce efficiencies,
                  and invest in digital infrastructure, while meeting increasing
                  regulatory obligations. We help our clients create efficient
                  and responsible organizations, with digital innovation at
                  their core, including business, product and regional
                  eco-systems. And our holistic data, cloud, and analytics
                  solutions enhance customer engagement, streamline operations,
                  and ensure more effective risk management.
                </p>
              </div>
            </div>

            <IndustriesList />
            <div className="row my-5">
              <div className="col-md-4">
                <img
                  src="/images/banking-hero-image.jpeg"
                  alt="Automotive Image"
                  className="automotive-image"
                />
              </div>
              <div className="col-md-6 ml-5 my-auto">
                <h2 className="automative-healthcare-sub-heading">
                  Building the next generation of Banking
                </h2>

                <p className="industries-text">
                  Technology has changed the way people and businesses bank, and
                  traditional strategies no longer work. Now is the time for
                  bold new approaches to intensifying disruption.
                </p>
              </div>
            </div>
            <div className="container my-5">
  <div className="row">
    <div className="col-12">
      <p>Banking Now</p>
    </div>
  </div>
  <div className="row mt-4">
    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <div className="d-flex">
        <p className="vertical-line"></p>
        <div>
          <h2 className="banking-now-heading">59%</h2>
          <p className="banking-text">
            of customers recently chose a financial product from a provider other than their main bank
          </p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <div className="d-flex">
        <p className="vertical-line"></p>
        <div>
          <h2 className="banking-now-heading">$89B</h2>
          <p className="banking-text">
          of revenues at risk between now and 2025 if card-issuing banks are slow to invest in next-gen payment options          </p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <div className="d-flex">
        <p className="vertical-line"></p>
        <div>
          <h2 className="banking-now-heading">79%</h2>
          <p className="banking-text">
          the share of US banks’ working hours which could be impacted by technologies like generative AI.
          </p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <div className="d-flex">
        <p className="vertical-line"></p>
        <div>
          <h2 className="banking-now-heading">8.1%</h2>
          <p className="industries-text">
          the average premium that commercial payments clients would be willing to pay their provider for value-added services.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
