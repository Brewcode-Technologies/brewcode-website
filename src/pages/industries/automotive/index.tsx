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
        <title>
          Communication & Media| Brewcode Technology Private Limited
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
              <h1 className="industry-heading">Automotive</h1>
              <img
                src="/images/svg/automotive-hero-icon.svg"
                alt="ecommerce image"
                className="industry-icon my-4"
                loading="lazy"
              />

              <p className=" services-description text-center">
                Home / Industries / Automotive{" "}
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
                  Changing customer behaviors and expectations, new regulations,
                  digitization, and societal pressure for sustainability have
                  introduced a host of new and at times competing priorities for
                  automotive players.
                </h2>
                <p className="industries-text">
                  In this environment, automotive organizations must balance the
                  need for new investments in software, data, and cloud while
                  facing mounting pressure to cut costs and preserve cash. They
                  must adapt the way they serve the customer, while maintaining
                  traditional sales and service models. And they must form
                  strategic partnerships to enable themselves, and the industry
                  as a whole, to accelerate innovation and drive multiple
                  transformations in parallel.
                </p>
                <p className="industries-text">
                  In an era of unprecedented disruption, success depends on
                  automakers’ ability to orchestrate multiple changes,
                  from software-driven transformation to the shift
                  to sustainable mobility and autonomous driving. And this
                  ability depends, in turn, on collaboration. For commercial
                  vehicles and passenger cars alike, their ability to deal with
                  the many difficult – and interconnected – disruptions they
                  face depends on finding their place in a new global, digital
                  ecosystem.
                </p>
                <p className="industries-text">
                  Automotive organizations today face unprecedented challenges.
                  The question is: How will they get the future they want?.
                </p>
              </div>
            </div>

            <IndustriesList />
            <div className="row my-4">
              <div className="col-md-4">
                <img
                  src="/images/automotive-image.jpeg"
                  alt="Automotive Image"
                  className="automotive-image"
                />
              </div>
              <div className="col-md-6 ml-5">
                <h2 className="automative-healthcare-sub-heading">
                  Get beyond the wheel in Automotive
                </h2>
                <h2 className="automative-healthcare-sub-heading">
                  Get beyond the wheel in Automotive
                </h2>
                <p className="industries-text">
                  The traditional automotive industry has reached a crossroads.
                  We are now operating in a mobility ecosystem, shifting into
                  the next iteration of automotive. To move forward, it's time
                  to embrace the ecosystem, collaborate beyond industry lines,
                  and find new ways of innovating and partnering for success.
                </p>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-6">
                <div className="ways-automotive-image">
                  <FaYoutube className="youtube-icon" />
                  {/* <i className="bi bi-youtube" style={{color:'red'}}></i> */}
     
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="my-auto">
                  <h2 className="automative-healthcare-sub-heading">
                    7 Ways to drive the future in <br />
                    Automotive
                  </h2>
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
