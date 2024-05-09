import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import ImageIcon from "@component/components/ImageIcon ";
import Link from "next/link";
import Image from "next/image";

import SwiperComponent from "@component/components/Carousel ";
import Layout from "@component/components/layouts/layout ";
import Footer from "@component/components/Footer ";

const anchors = [
  "HeroSection",
  "WhoWeAre",
  "OurSolutions",
  "IndustriesWeServe",
  "ScaleInnovatively",
  "Insights",
  "OurClients",
  "Footer",
];

const Home: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title:
        "The cube interview series: Driving enhanced security and higher value in Financial services generative Ai",
      category: "Blog",
    },
    {
      id: 2,
      title:
        "The cube interview series: Driving enhanced security and higher value in Financial services generative Ai",
      category: "Blog",
    },
    {
      id: 3,
      title:
        "The cube interview series: Driving enhanced security and higher value in Financial services generative Ai",
      category: "Blog",
    },
    {
      id: 4,
      title:
        "The cube interview series: Driving enhanced security and higher value in Financial services generative Ai",
      category: "Blog",
    },
  ];

  const OurClientlogos = [
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

  return (
    <Layout>
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={900}
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        // sectionsColor={[
        //   "#7fff00",
        //   "#00ffff",
        //   "#29ab87",
        //   "#ff6347",
        //   "#ffd700",
        //   "#6a5acd",
        // ]}
        onLeave={(origin, destination, direction) => {
          console.log("Leaving section", origin.index);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <div className="fullpage-container">
              <div className="section" id="hero-section">
                <div className="hero-image">
                  <div className="container">
                    <div className="row hero-section">
                      <div className="col-12 hero-title">
                        <h1 className="hero-section-heading mt-5">
                          <span className="hero-heading-highlight">We're</span>{" "}
                          Here To Solve Your
                          <br />
                          Critical Challenges
                        </h1>
                      </div>
                      <p className="hero-description text-center">
                        In today’s{" "}
                        <strong className="highlight">fast-paced</strong>{" "}
                        climate, companies are required to
                        <br />
                        <strong className="highlight"> adapt </strong> more
                        <strong className="highlight"> quickly </strong> than
                        ever before.
                      </p>
                    </div>

                    <div className="row">
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
              <div className="section">
                <section className="about-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-12  my-5">
                        <h2 className=" about-heading">Who We Are</h2>
                      </div>
                      <div className=" about-content">
                        <div className="col-12 col-md-6 d-flex flex-column">
                          <p className=" about-description mb-4">
                            We Create Unique Enhanced
                            <br /> Experience In
                            <br />
                            <Link
                              href="https://www.brewcode.co/"
                              passHref
                              className="about-link"
                            >
                              Brewcode
                            </Link>
                          </p>
                          <p className="who-about-details">
                            Working with Brewcode evolves willing to offer the
                            best immersion
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
                              className=" about-explore-btn mb-4 btn btn-dark"
                            >
                              Explore
                            </button>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 text-center ">
                          <Image
                            src="/images/services-img.png"
                            width={300}
                            height={300}
                            alt="about image"
                            className="about-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <section className="solutions-section">
                  <div className="container">
                    <div className="col-12 my-3">
                      <h1 className=" solutions-heading">Our Solutions</h1>
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
                        },
                        {
                          title: "Cyber Security",
                          icon: "bi-arrow-up-right",
                        },
                        {
                          title: "E-commerce Solution",
                          icon: "bi-arrow-up-right",
                        },
                        {
                          title: "Software Development",
                          icon: "bi-arrow-up-right fa-5x",
                        },
                        {
                          title: "Robotic Process Automation (RPA)",
                          icon: "bi-arrow-up-right",
                        },
                        {
                          title: "Software Audits/Testing as-a-service",
                          icon: "bi-arrow-up-right",
                        },
                        {
                          title: "Resource Staffing",
                          icon: "bi-arrow-up-right",
                        },
                        {
                          title: "Infrastructure Solution",
                          icon: "bi-arrow-up-right fa-5x",
                        },
                      ].map((item, index) => (
                        <div className="col-12 col-md-5 mt-3" key={index}>
                          <div className="d-flex flex-column mb-3 solutions-item">
                            <div className="d-flex justify-content-between border-bottom pb-1 solutions-item-header">
                              <h1 className=" solutions-title">{item.title}</h1>
                              <i className={`bi ${item.icon} mt-0`}></i>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <section className=" industries-section ">
                  <div className="container">
                    <div className="col-12">
                      <h1 className="industries-heading industries-heading pt-2">
                        Industries We Serve
                      </h1>
                      <p className="  industries-description pt-2">
                        Design and deliver new digital experiences, revenue
                        streams and business models to
                        <br /> meet rising customer expectations and accelerate
                        your growth
                      </p>
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
                <section className=" innovation-section">
                  <div className="container">
                    <div className="col-12 d-flex flex-column justify-content-between">
                      <h1 className="  my-4 innovation-heading">
                        Scale Innovatively
                      </h1>
                      <h3 className="innovation-sub-heading mb-3">
                        Solve Problems & Build Solutions
                      </h3>
                      <p className="innovation-description">
                        At scale, for tomorrow. Established enterprises and
                        emerging startups need a perfect balance of strategy,
                        technology, analytics, and knowhow to solve everyday
                        <br /> business challenges.
                      </p>
                    </div>
                    <div className="row py-4">
                      <div className="col-12 col-sm-4">
                        <div className=" innovation-step-header d-flex mb-4">
                          <span className="innovation-step-number">1</span>
                          <h3 className=" innovation-step-title">Emerging</h3>
                        </div>
                        <p className=" mb-5 innovation-step-description">
                          Evaluate business needs and build strategic
                          <br /> technical roadmaps to make your product
                          <br /> vision a reality
                        </p>
                      </div>
                      <div className="col-12 col-sm-4  innovation-step-border-lined pl-4">
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
                      <div className="col-12 col-sm-4 pl-4">
                        <div className="num-flex d-flex mb-4">
                          <span className="innovation-step-number">3</span>
                          <h3 className="innovation-step-title">Enterprise</h3>
                        </div>
                        <p className="innovation-step-description mb-5">
                          Integrate your systems for enterprise agility
                          <br /> and build your Agile/DevOps capability for
                          <br /> accelerated growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <section className=" insights-section">
                  <div className="container my-4">
                    <div className="row">
                      <h1 className=" my-2 insights-heading">Insights</h1>
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
                          <div className="insight-card">
                            <p className=" insight-card-category">
                              {blog.category}
                            </p>
                            <p className=" pt-2 insight-card-title">
                              {blog.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <section className=" clients-section py-5">
                  <div className="container my-5">
                    <div className="row ">
                      <div className="col-12 col-md-6 col-lg-6">
                        <h1 className="  clients-heading">Our Clients</h1>
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
              <div className="section">
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
