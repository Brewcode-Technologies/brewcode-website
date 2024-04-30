import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import ImageIcon from "@component/components/ImageIcon ";
import Link from "next/link";
import Image from "next/image";

const anchors = [
  "HeroSection",
  "WhoWeAre",
  "OurSolutions",
  "IndustriesWeServe",
  "ScaleInnovatively",
  "Insights",
  "OurClients",
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
          <div>
            <div className="section">
              <div style={{ width: "100%", height: "100vh" }}>
                <div className="hero-image">
                  <div className="container">
                    <div className="row hero-section-column">
                      <div className="col-12 hero-heading">
                        <h1 className="hero-section-heading mt-5">
                          <span className="hero-stroke">We're</span> Here To
                          Solve Your
                          <br />
                          Critical Challenges
                        </h1>
                      </div>
                      <p className="description text-center">
                        In today’s{" "}
                        <strong className="description-strong">
                          fast-paced
                        </strong>{" "}
                        climate, companies are required to
                        <br />
                        <strong className="description-strong">
                          {" "}
                          adapt{" "}
                        </strong>{" "}
                        more
                        <strong className="description-strong">
                          {" "}
                          quickly{" "}
                        </strong>{" "}
                        than ever before.
                      </p>
                    </div>

                    <div className="row">
                      <div className="col-12 social-media-icons-main d-flex flex-column justify-content-between">
                        <Link href="https://www.instagram.com" passHref>
                          <ImageIcon
                            src="/images/icons/instagram.png"
                            alt="instagram-icon"
                            className="instagram-icon mb-2"
                          />
                        </Link>
                        <Link href="https://www.linkedin.com" passHref>
                          <ImageIcon
                            src="/images/icons/Linkedin.png"
                            alt="Linkedin-icon"
                            className="instagram-icon mb-2"
                          />
                        </Link>
                        <Link href="https://www.facebook.com" passHref>
                          <ImageIcon
                            src="/images/icons/facebook.png"
                            alt="facebook-icon"
                            className="instagram-icon"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="row col-12 mb-5">
                      <div className="down-arrow-icon-main d-flex justify-content-center mb-4">
                        <i className="bi bi-arrow-down-short"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div style={{ width: "100%", height: "100vh" }}>
                <section className=" who-we-are-section py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 text-center">
                        <h2 className="who-we-are-heading section-heading py-5">
                          Who We Are
                        </h2>
                      </div>
                      <div className="d-flex flex-column-reverse flex-md-row justify-content-between">
                        <div className="col-12 col-md-6 mb-4">
                          <p className="text-brewcode-only">
                            We Create Unique Enhanced
                            <br /> Experience In
                            <br />
                            <Link
                              href="https://www.brewcode.co/"
                              passHref
                              className="brewcode-link"
                            >
                              Brewcode
                            </Link>
                          </p>
                          <p className="who-we-are-text my-4 pt-4">
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
                              className="explore-btn mb-4 btn btn-dark"
                            >
                              Explore
                            </button>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 text-center mb-md-0 mb-4">
                          <Image
                            src="/images/services-img.png"
                            width={400}
                            height={400}
                            alt="services image"
                            className="services-img"
                            loading="eager"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section">
              <div style={{ width: "100%", height: "100vh" }}>
                <section className="our-solution-bg py-5">
                  <div className="container my-4">
                    <div className="col-12">
                      <h1 className="section-heading">Our Solutions</h1>
                      <p className="our-solution-description mb-5">
                        Design and deliver new digital experiences, revenue
                        streams and business models to <br />
                        meet rising customer expectations and accelerate your
                        growth
                      </p>
                    </div>
                    <div className="row d-flex justify-content-between">
                      {[
                        { title: "Cloud Security", icon: "bi-arrow-up-right" },
                        { title: "Cyber Security", icon: "bi-arrow-up-right" },
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
                        <div className="col-12 col-md-5" key={index}>
                          <div className="d-flex flex-column mb-3">
                            <div className="d-flex justify-content-between border-bottom pb-1">
                              <h1 className="our-solution-sub-text">
                                {item.title}
                              </h1>
                              <i className={`bi ${item.icon} mt-0`}></i>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section">
              <div style={{ width: "100%", height: "120vh" }}>
                <section className="industries-we-serve-bg py-5">
                  <div className="container my-5">
                    <div className="col-12">
                      <h1 className="industries-we-serve-heading">
                        Industries We Serve
                      </h1>
                      <p className="our-solution-description industries-we-serve-description mb-5">
                        Design and deliver new digital experiences, revenue
                        streams and business models to
                        <br /> meet rising customer expectations and accelerate
                        your growth
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section">
              <div style={{ width: "100%", height: "100vh" }}>
                <section className="scale-innovatively-bg py-5">
                  <div className="container my-5">
                    <div className="col-12">
                      <h1 className="section-heading industries-we-serve-heading">
                        Scale Innovatively
                      </h1>
                      <h3 className="Scale-Innovatively-sub-heading my-2">
                        Solve Problems & Build Solutions
                      </h3>
                      <p className="our-solution-description industries-we-serve-description mb-5">
                        At scale, for tomorrow. Established enterprises and
                        emerging startups need a perfect balance of strategy,
                        technology, analytics, and knowhow to solve everyday
                        <br /> business challenges.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-4">
                        <div className="num-flex d-flex">
                          <span className="num">1</span>
                          <h3 className="emerging-heading">Emerging</h3>
                        </div>
                        <p className="emerging-text mb-5">
                          Evaluate business needs and build strategic
                          <br /> technical roadmaps to make your product
                          <br /> vision a reality
                        </p>
                      </div>
                      <div className="col-12 col-sm-4 emerging-left-right-border-line">
                        <div className="num-flex d-flex">
                          <span className="num">2</span>
                          <h3 className="emerging-heading">Growing</h3>
                        </div>
                        <p className="emerging-text mb-5">
                          Fuel your growth with process automation
                          <br /> and custom applications and build failsafe
                          <br /> systems for the future.
                        </p>
                      </div>
                      <div className="col-12 col-sm-4">
                        <div className="num-flex d-flex">
                          <span className="num">3</span>
                          <h3 className="emerging-heading">Enterprise</h3>
                        </div>
                        <p className="emerging-text mb-5">
                          Integrate your systems for enterprise agility
                          <br /> and build your Agile/DevOps capability for
                          <br /> accelerated growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section">
              <div style={{ width: "100%", height: "100vh" }}>
                <section className="insights-bg py-5">
                  <div className="container">
                    <div className="row">
                      <h1 className="section-heading industries-we-serve-heading mt-5">
                        Insights
                      </h1>
                      <p className="insights-description mb-5 mt-4">
                        Design and deliver new digital experiences, revenue
                        streams and business models to <br /> meet rising
                        customer expectations and accelerate your growth
                      </p>
                    </div>
                    <div className="row">
                      {blogs.map((blog) => (
                        <div
                          key={blog.id}
                          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                        >
                          <div className="blog-card">
                            <p className="blog-sub-heading">{blog.category}</p>
                            <p className="blog-text pt-2">{blog.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section">
              <div style={{ width: "100%", height: "100vh" }}>
                <section className="our-clients-bg py-5">
                  <div className="container my-5">
                    <div className="row mt-4">
                      <div className="col-12 col-md-6 col-lg-6">
                        <h1 className="section-heading industries-we-serve-heading ">
                          Our Clients
                        </h1>
                        <p className="pleasure-to-work-with-text mb-5 mt-5">
                          Pleasure to Work With
                        </p>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6">
                        {OurClientlogos.map((row, idx) => (
                          <div
                            key={idx}
                            className="row mb-4 company-logo-container-main"
                          >
                            {row.map((logo, index) => (
                              <div
                                key={index}
                                className="col-lg-4 company-logo-container"
                              >
                                <Link href={logo.url} passHref>
                                  <ImageIcon
                                    src={logo.src}
                                    alt={`${
                                      logo.src.split("/").pop().split(".")[0]
                                    } logo`}
                                    className="company-logo mb-4"
                                    loading="eager"
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
            </div>
          </div>
        );
      }}
    />
  );
};

export default Home;
