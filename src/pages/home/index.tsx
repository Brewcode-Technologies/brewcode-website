import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Link from "next/link";
import Image from "next/image";
import SwiperComponent from "@component/components/Carousel ";
import Footer from "@component/components/Footer ";
import ImageIcon from "@component/components/ImageIcon ";
import Layout from "@component/components/layouts/layout ";

interface Blog {
  id: number;
  title: string;
  category: string;
}

interface ClientLogo {
  src: string;
  url: string;
}

const Home: React.FC = () => {
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Exploring Alternative JavaScript Frameworks",
      description:
        "JavaScript frameworks have become an integral part of web development, empowering developers to build robust and efficient applications. Amongst these frameworks, React has emerged as the go-to choice for many developers due to its flexibility, performance, and the extensive community support it enjoys.",
      category: "Blog",
      link: "https://brewcode.medium.com/beyond-react-exploring-alternative-javascript-frameworks-4ff7d960dcc9",
    },
    {
      id: 2,
      title:
        "Server Side Rendering vs Client Side Rendering: Unveiling the Key Differences",
      description:
        "Server-side rendering and client-side rendering are two prominent techniques used in web development to display content to users. Understanding the basics of rendering is essential to grasp the nuances of these approaches.",
      category: "Blog",
      link: "https://brewcode.medium.com/server-side-rendering-vs-client-side-rendering-unveiling-the-key-differences-d182d857cd77",
    },
    {
      id: 3,
      title:
        "Optimizing Technology Strategies: Brewcode’s Guide to Microservices and Monolithic Architectures",
      description:
        "Choosing between microservices and monolithic architectures involves weighing various factors, as each approach has distinct advantages and challenges. Below is an explanation of why organizations might favor microservices over monolithic architectures, and how Brewcode Technologies Private Limited (Brewcode) can assist in navigating these architectural choices.",
      category: "Blog",
      link: "https://brewcode.medium.com/optimizing-technology-strategies-brewcodes-guide-to-microservices-and-monolithic-architectures-2e51925b7456",
    },
    {
      id: 4,
      title:
        "The cube interview series: Driving enhanced security and higher value in Financial services generative Ai",
      description:
        "Financial services are increasingly turning to generative AI to enhance security measures and drive higher value. In this interview series, we explore how AI is transforming the financial sector and the benefits it brings.",
      category: "Blog",
      link: "https://brewcode.medium.com/beyond-react-exploring-alternative-javascript-frameworks-4ff7d960dcc9",
    },
  ];

  const OurClientlogos: ClientLogo[][] = [
    [
      { src: "/images/st-jude.svg", url: "https://stjude.example.com" },
      { src: "/images/agilo.svg", url: "https://agilo.example.com" },
      { src: "/images/dhanika.svg", url: "https://dhanika.example.com" },
    ],
    [
      { src: "/images/soctor.svg", url: "https://soctor.example.com" },
      { src: "/images/Oilvebay.svg", url: "https://oilvebay.example.com" },
      { src: "/images/corpeq.svg", url: "https://corpeq.example.com" },
    ],
    [
      { src: "/images/Enpersoll.svg", url: "https://enpersoll.example.com" },
      { src: "/images/ojas.svg", url: "https://ojas.example.com" },
      { src: "/images/humancloud.svg", url: "https://humancloud.example.com" },
    ],
    [
      { src: "/images/sarci.svg", url: "https://sarci.example.com" },
      { src: "/images/rh.svg", url: "https://rh.example.com" },
      { src: "/images/dhanika.svg", url: "https://dhanika.example.com" },
    ],
  ];
  const truncateText = (text, lines) => {
    const textLines = text.split("\n");
    const truncatedText = textLines.slice(0, lines).join("\n");
    if (textLines.length > lines) {
      return truncatedText + "...";
    }
    return truncatedText;
  };

  return (
    <Layout>
      <ReactFullpage
        scrollingSpeed={900}
        navigation
        render={({ state, fullpageApi }) => {
          return (
            <div className="fullpage-container">
              <div className="section">
                <div className="hero-image">
                  <video
                    src="./videos/hero-section-video2.mp4"
                    autoPlay
                    loop
                    muted
                  />

                  <div className="hero-section">
                    <div className="row hero-title-section">
                      <div className="col-12 hero-title">
                        <h1 className="hero-section-heading">
                          <span className="hero-heading-highlight">We're</span>{" "}
                          Here To Solve Your
                          <br />
                          Critical Challenges
                        </h1>
                      </div>
                      <p className="hero-description text-center mt-3">
                        In today’s{" "}
                        <strong className="highlight">fast-paced</strong>{" "}
                        climate, companies are required to
                        <br />
                        <strong className="highlight"> adapt </strong> more
                        <strong className="highlight"> quickly </strong> than
                        ever before.
                      </p>
                    </div>

                    <div className="container social-media-icons-section">
                      <div className="col-12 social-media-icons-main d-flex flex-column justify-content-between">
                        <Link href="https://www.instagram.com" passHref>
                          <ImageIcon
                            src="/images/icons/instagram.png"
                            alt="instagram-icon"
                            className="social-icon instagram  mb-2"
                          />
                        </Link>
                        <Link href="https://www.linkedin.com" passHref>
                          <ImageIcon
                            src="/images/icons/Linkedin.png"
                            alt="Linkedin-icon"
                            className="social-icon linkedin mb-2"
                          />
                        </Link>
                        <Link href="https://www.facebook.com" passHref>
                          <ImageIcon
                            src="/images/icons/facebook.png"
                            alt="facebook-icon"
                            className="social-icon facebook"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="row col-12 ">
                      <div className="down-arrow-icon-main d-flex justify-content-center">
                        <i className="bi bi-arrow-down-short"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section" style={{ marginTop: "-10px" }}>
                <section className="about-section">
                  <div className="container">
                    <div className="row my-5">
                      <div className="col-12 col-md-6">
                        <h2 className="about-heading mb-4">Who We Are</h2>

                        <div className="about-content d-flex flex-column">
                          <p className="about-description mb-4">
                            We Create Unique Enhanced
                            <br /> Experience In
                            <span className="brewcode-link">Brewcode</span>
                          </p>
                          <p className="who-about-details">
                            Working with Brewcode involves willingness to offer
                            the best immersion
                            <br /> to clients and audiences but also investing
                            in smart solutions to
                            <br /> reduce costs when it comes to finding
                            flexible solutions to refine and
                            <br /> adapt the brand message in different
                            contexts.
                          </p>
                          <div className="d-flex justify-content-start">
                            <button
                              type="button"
                              className="about-explore-btn mb-4 btn btn-dark"
                            >
                              Explore
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 text-center">
                        <Image
                          src="/images/services-img.png"
                          width={300}
                          height={300}
                          alt="about image"
                          className="about-image img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <section className="solutions-section">
                  <div className="container my-3">
                    <div className="row">
                      <div className="col-12">
                        <h1 className="solutions-heading mt-2">
                          Our Solutions
                        </h1>
                        <p className=" solutions-description">
                          Design and deliver new digital experiences, revenue
                          streams and business models to <br />
                          meet rising customer expectations and accelerate your
                          growth
                        </p>
                      </div>
                      <div className="row d-flex justify-content-between solutions-list">
                        {[
                          {
                            title: "Cloud Security",
                            icon: "bi-arrow-up-right",
                            link: "/cloud-security",
                          },
                          {
                            title: "Cyber Security",
                            icon: "bi-arrow-up-right",
                            link: "/Cyber Security",
                          },
                          {
                            title: "E-commerce Solution",
                            icon: "bi-arrow-up-right",
                            link: "/E-commerce Solution",
                          },
                          {
                            title: "Software Development",
                            icon: "bi-arrow-up-right fa-5x",
                            link: "/Software Development",
                          },
                          {
                            title: "Robotic Process Automation (RPA)",
                            icon: "bi-arrow-up-right",
                            link: "/Robotic Process Automation (RPA)",
                          },
                          {
                            title: "Software Audits/Testing as-a-service",
                            icon: "bi-arrow-up-right",
                            link: "/services",
                          },
                          {
                            title: "Resource Staffing",
                            icon: "bi-arrow-up-right",
                            link: "/Resource Staffing",
                          },
                          {
                            title: "Infrastructure Solution",
                            icon: "bi-arrow-up-right fa-5x",
                            link: "/Infrastructure Solution",
                          },
                        ].map((item, index) => (
                          <div
                            className="col-12 mt-3 solutions-item-section"
                            key={index}
                          >
                            <div className="d-flex flex-column mb-3 solutions-item">
                              <Link
                                href={item.link}
                                className="d-flex justify-content-between border-bottom pb-1 solutions-item-header"
                              >
                                <h1 className="solutions-title">
                                  {item.title}
                                </h1>
                                <i className={`bi ${item.icon} mt-0`}></i>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <section className="industries-section ">
                  <div className="container ">
                    <div className="row pt-3">
                      <div className="col-12">
                        <h1 className="industries-heading industries-heading mt-2">
                          Industries We Serve
                        </h1>
                        <p className="  industries-description pt-2">
                          Design and deliver new digital experiences, revenue
                          streams and business models to
                          <br /> meet rising customer expectations and
                          accelerate your growth
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mt-4">
                        <SwiperComponent />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <section className="innovation-section">
                  <div className="container">
                    <div className="row my-3">
                      <div className="col-12d-flex flex-column justify-content-between">
                        <h1 className="my-4 innovation-heading mt-2">
                          Scale Innovatively
                        </h1>
                        <h3 className="innovation-sub-heading mb-3">
                          Solve Problems & Build Solutions
                        </h3>
                      </div>
                      <p className="innovation-description mb-4">
                        At scale, for tomorrow. Established enterprises and
                        emerging startups need a perfect balance of strategy,
                        technology, analytics, and knowhow to solve everyday
                        <br /> business challenges.
                      </p>

                      <div className="row mt-5">
                        <div className="col-12 col-sm-4 mb-3">
                          <div className=" innovation-step-header d-flex mb-4">
                            <span className="innovation-step-number">1</span>
                            <h3 className=" innovation-step-title">Emerging</h3>
                          </div>
                          <p className="mb-5 innovation-step-description mb-3">
                            Evaluate business needs and build strategic
                            <br /> technical roadmaps to make your product
                            <br /> vision a reality
                          </p>
                        </div>
                        <div className="col-12 col-sm-4  innovation-step-border-lined pl-4 mb-3">
                          <div className="innovation-step-header d-flex mb-4">
                            <span className="innovation-step-number">2</span>
                            <h3 className="innovation-step-title">Growing</h3>
                          </div>
                          <p className="innovation-step-description mb-5">
                            Fuel your growth with process automation
                            <br /> and custom applications and build failsafe
                            <br /> systems for the future.
                          </p>
                        </div>
                        <div className="col-12 col-sm-4 pl-4 enterprise-line">
                          <div className="num-flex d-flex mb-4">
                            <span className="innovation-step-number">3</span>
                            <h3 className="innovation-step-title">
                              Enterprise
                            </h3>
                          </div>
                          <p className="innovation-step-description mb-5">
                            Integrate your systems for enterprise agility
                            <br /> and build your Agile/DevOps capability for
                            <br /> accelerated growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <section className="insights-section">
                  <div className="container my-3">
                    <div className="row">
                      <h1 className=" my-2 insights-heading mt-2">Insights</h1>
                      <p className=" insights-description my-2">
                        Design and deliver new digital experiences, revenue
                        streams and business models to <br /> meet rising
                        customer expectations and accelerate your growth
                      </p>
                    </div>
                    <div className="row my-5">
                      {blogs.map((blog) => (
                        <div
                          key={blog.id}
                          className="col-12 col-sm-6 col-md-4 col-lg-3"
                        >
                          <Link
                            href={blog.link}
                            target="_blank"
                            className="insight-card-link"
                          >
                            <div className="insight-card card-body mb-3">
                              <p className="insight-card-category">
                                {blog.category}
                              </p>
                              <h5 className="pt-2 insight-card-title card-title">
                                {blog.title}
                              </h5>
                              <p className="insight-card-description card-text">
                                {truncateText(blog.description, 3)}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <section className="clients-section py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-6">
                        <h1 className="clients-heading">Our Clients</h1>
                        <p className=" my-5 clients-subtitle">
                          Pleasure to Work With
                        </p>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6">
                        {OurClientlogos.map((row, idx) => (
                          <div key={idx} className="row mb-4 ">
                            {row.map((logo, index) => (
                              <div
                                key={index}
                                className="col-lg-4 clients-logo-container"
                              >
                                <Link href={logo.url} passHref>
                                  <ImageIcon
                                    src={logo.src}
                                    alt={`${
                                      logo.src.split("/").pop().split(".")[0]
                                    } logo`}
                                    className=" client-logo mb-4"
                                  />
                                </Link>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="section" style={{ backgroundColor: "#000" }}>
                <Footer />
              </div>
            </div>
          );
        }}
      />
    </Layout>
  );
};

export default Home;
