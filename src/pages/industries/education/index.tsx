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
        <title>Education | Brewcode Technology Private Limited</title>
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
              <h1 className="industry-heading mb-3">Education</h1>
              <img
                src="/images/svg/banking-hero-icon.svg"
                alt="ecommerce image"
                className="mb-4 industry-icon my-4"
                loading="lazy"
              />

              <p className=" services-description text-center">
                Home / Industries / Education
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
            <div className="col-md-8">
              <div className="mb-5">
                <h2 className="automative-healthcare-sub-heading">
                  Innovative IT solutions for transforming education industry
                </h2>
                <p className="industries-text">
                  Brewcode is one of the leading companies when it comes to
                  delivering digital innovation in the education industry. We
                  combine our wealth of technical experience and comprehensive
                  understanding of the domain to bring excellence in the
                  educational value chain. Our integrated IT solutions support
                  all environments - be it pre-school, university, training
                  centers or workplace. Moreover, we focus on the latest trends
                  to facilitate education providers with all the required tools
                  they need to provide effective learning.
                </p>
              </div>
              <div className="my-4">
                <h2 className="automative-healthcare-sub-heading">
                Education
                </h2>
                <p className="industries-text text-justify">
                  The education field, whether K-12 or higher education, private
                  or public, is facing a drastic change in how IT services are
                  consumed. IT administrators are facing an increased challenge
                  of creating and supporting a full-time online community in
                  environments that stretch from across the classroom to across
                  the globe. And all the while, IT leaders are also responsible
                  for student information security, including grades and
                  financial information.{" "}
                </p>
                <p className="industries-text text-justify">
                Compounding your challenge is the constant pressure on budget and funding. More needs must be met with less to satisfy deans and boards of educations—not to mention students and their families, and the surrounding community.
                </p>
                <p className="industries-text text-justify">
                WEI solutions offer the needed technology to create wired and wireless infrastructure, secure and scalable networks, physical and virtual workstations and servers, and private storage with data management throughout.
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
