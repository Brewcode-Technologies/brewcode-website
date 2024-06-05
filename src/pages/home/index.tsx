import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SwiperComponent from "@component/components/Carousel";
import ImageIcon from "@component/components/ImageIcon";
import Layout from "@component/components/layouts/layout";
import useNavigation, { routeMap } from "@component/components/customHooks/useNavigation";
import Head from "next/head";
import { useRouter } from "next/router";
import { Route } from "next";

interface Blog {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
  img:string;
  imgAlt:string;
}

interface ClientLogo {
  src: string;
  url: string;
}

interface SolutionItem {
  title: string;
  icon: string;
  href: Route;
}


const Index: React.FC = () => {

  const { navigate } = useNavigation();
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Exploring Alternative JavaScript Frameworks",
      img: "/images/performance-optimized-framework.webp",
      imgAlt: "Performance optimized JavaScript framework",
      description:
        "JavaScript frameworks have become an integral part of web development, empowering developers to build robust and efficient applications. Amongst these frameworks, React has emerged as the go-to choice for many developers due to its flexibility, performance, and the extensive community support it enjoys.",
      category: "Blog",
      link: "https://brewcode.medium.com/beyond-react-exploring-alternative-javascript-frameworks-4ff7d960dcc9",
    },
    {
      id: 2,
      title:
        "Server Side Rendering vs Client Side Rendering: Unveiling the Key Differences",
      img: "/images/server-side-rendering.webp",
      imgAlt: "Server side rendering vs client side rendering",
      description:
        "Server-side rendering and client-side rendering are two prominent techniques used in web development to display content to users. Understanding the basics of rendering is essential to grasp the nuances of these approaches.",
      category: "Blog",
      link: "https://brewcode.medium.com/server-side-rendering-vs-client-side-rendering-unveiling-the-key-differences-d182d857cd77",
    },
    {
      id: 3,
      title:
        "Optimizing Technology Strategies: Brewcode’s Guide to Microservices and Monolithic Architectures",
      img: "/images/optimizing-technology.webp",
      imgAlt: "Optimizing technology strategies",
      description:
        "Choosing between microservices and monolithic architectures involves weighing various factors, as each approach has distinct advantages and challenges. Below is an explanation of why organizations might favor microservices over monolithic architectures, and how Brewcode Technologies Private Limited (Brewcode) can assist in navigating these architectural choices.",
      category: "Blog",
      link: "https://brewcode.medium.com/optimizing-technology-strategies-brewcodes-guide-to-microservices-and-monolithic-architectures-2e51925b7456",
    },
    {
      id: 4,
      title: "Exploring AR Technologies: Use Cases and Benefits",
      img: "/images/exploring-ar-technologies.webp",
      imgAlt: "Exploring AR technologies",
      description:
        "Financial services are increasingly turning to generative AI to enhance security measures and drive higher value. In this interview series, we explore how AI is transforming the financial sector and the benefits it brings.",
      category: "Blog",
      link: "https://brewcode.medium.com/beyond-react-exploring-alternative-javascript-frameworks-4ff7d960dcc9",
    },
  ];


  const solutions: SolutionItem[] = [
    {
      title: "Cloud Security",
      icon: "bi-arrow-up-right",
      href: "cloud-services",
    },
    {
      title: "Cyber Security",
      icon: "bi-arrow-up-right",
      href: "cyber-security",
    },
    {
      title: "E-commerce Solution",
      icon: "bi-arrow-up-right",
      href: "e-commerce",
    },
    {
      title: "Software Development",
      icon: "bi-arrow-up-right",
      href: "web-development",
    },
    {
      title: "Robotic Process Automation (RPA)",
      icon: "bi-arrow-up-right",
      href: "robotic-process-automation",
    },
    {
      title: "Software Audits/Testing as-a-service",
      icon: "bi-arrow-up-right",
      href: "at-t",
    },
    {
      title: "Resource Planning",
      icon: "bi-arrow-up-right",
      href: "resource-planning",
    },
    {
      title: "Infrastructure Solution",
      icon: "bi-arrow-up-right",
      href: "infrastructure",
    },
  ];
  
  
  

  const OurClientlogos: ClientLogo[][] = [
    [
      { src: "/images/svg/st-jude.svg", url: "https://stjude.com" },
      { src: "/images/svg/agilo.svg", url: "https://agilo.com" },
      { src: "/images/svg/dhanika.svg", url: "https://dhanika.com" },
    ],
    [
      { src: "/images/svg/soctor.svg", url: "https://soctor.com" },
      { src: "/images/svg/Oilvebay.svg", url: "https://oilvebay.com" },
      { src: "/images/corpeq.svg", url: "https://corpeq.com" },
    ],
    [
      {
        src: "/images/svg/enpersoll.svg",
        url: "https://enpersoll.com",
      },
      { src: "/images/svg/ojas.svg", url: "https://ojas.com" },
      {
        src: "/images/svg/humancloud.svg",
        url: "https://humancloud.com",
      },
    ],
    [
      { src: "/images/sarci.svg", url: "https://sarci.com" },
      { src: "/images/rh.svg", url: "https://rh.com" },
      { src: "/images/svg/dhanika.svg", url: "https://dhanika.com" },
    ],
  ];

  const truncateText = (text: string, lines: number): string => {
    const textLines = text.split("\n");
    const truncatedText = textLines.slice(0, lines).join("\n");
    if (textLines.length > lines) {
      return truncatedText + "...";
    }
    return truncatedText;
  };

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Layout>
      <Head>
      
        <title>Brewcode Technology Private Limited</title>
        <meta name="description" content="Description of your home page" />
     
      </Head>
      <div className="fullpage-container">
        <div className="hero-image">
          <video
            src="./videos/hero-section-video.mp4"
            autoPlay
            loop
            muted
            className="background-video"
          />

          <div className="hero-section">
            <div className="row hero-title-section">
              <div className="col-12 hero-title">
                <h1 className="hero-section-heading">
                  <span className="hero-heading-highlight">We're</span> Here To
                  Solve Your
                  <br />
                  Critical Challenges
                </h1>
              </div>
              <p className="hero-description text-center mt-3">
                In today’s <strong className="highlight">fast-paced</strong>{" "}
                climate, companies are required to
                <br />
                <strong className="highlight"> adapt </strong> more
                <strong className="highlight"> quickly </strong> than ever
                before.
              </p>
            </div>

            <div className="container social-media-icons-section">
              <div className="col-12 social-media-icons-main d-flex flex-column justify-content-between">
                <Link
                  href="https://brewcode.medium.com/"
                  target="_blank"
                  passHref
                >
                  <ImageIcon
                    src="/images/svg/logo-blog.svg"
                    alt="blogger-icon"
                    className="social-icon instagram  mb-2"
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/brewcode/" passHref target="_blank">
                  <ImageIcon
                    src="/images/svg/LinkedIn_svg.svg"
                    alt="Linkedin-icon"
                    className="social-icon linkedin mb-2"
                  />
                </Link>
              </div>
            </div>
            <div className="row">
              <span className="down-arrow-icon-main d-flex justify-content-center align-items-center">
                <i className="bi bi-arrow-down-short"></i>
              </span>
            </div>
          </div>
        </div>
        <section className="about-section">
          <div className="container my-5">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="about-heading mb-5">Who We Are</h2>

                <div className="about-content d-flex flex-column">
                  <p className="about-description mb-5">
                    We Create Unique Enhanced
                    <br /> Experience In
                    <span className="brewcode-link">Brewcode</span>
                  </p>
                  <p className="who-about-details mb-4">
                    Working with Brewcode involves willingness to offer the best
                    immersion
                    <br /> to clients and audiences but also investing in smart
                    solutions to
                    <br /> reduce costs when it comes to finding flexible
                    solutions to refine and
                    <br /> adapt the brand message in different contexts.
                  </p>
                  <div className="d-flex justify-content-start">
                    <button type="button" className="about-explore-btn ">
                      Explore
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 d-flex justify-content-end">
                <Image
                  src="/images/services-img.png"
                  width={300}
                  height={300}
                  objectFit="cover"
                  alt="about image"
                  className="about-image w-75"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="solutions-section">
  <div className="container my-5">
    <div className="row">
      <div className="col-12">
        <h1 className="solutions-heading mb-3">Our Solutions</h1>
        <p className="solutions-description">
          Design and deliver new digital experiences, revenue streams, and
          business models to <br />
          meet rising customer expectations and accelerate your growth
        </p>
      </div>
      <div className="row d-flex justify-content-between solutions-list mt-2">
        {solutions.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4 mt-3 solutions-item-section" key={index}>
            <div className="d-flex flex-column mb-3 solutions-item">
              {item.href !== undefined && item.href !== null ? (
                item.href in routeMap ? (
                  <Link href={routeMap[item.href as keyof typeof routeMap]} passHref className="our-solution-link">
                  <div className="d-flex justify-content-between border-bottom pb-1 solutions-item-header">
                    <h1 className="solutions-title">{item.title}</h1>
                    <i className={`bi ${item.icon} mt-0`}></i>
                  </div>
                </Link>
                ) : (
                  <p>Route {item.href} not found in routeMap</p>
                )
              ) : (
                <p>item.href is undefined or null</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>





        <section className="industries-section">
          <div className="container my-5">
            <div className="row">
              <div className="col-12">
                <h1 className="industries-heading industries-heading">
                  Industries We Serve
                </h1>
                <p className="  industries-description pt-2">
                  Design and deliver new digital experiences, revenue streams
                  and business models to
                  <br /> meet rising customer expectations and accelerate your
                  growth
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
        <section className="innovation-section">
          <div className="container my-5">
            <div className="row">
              <div className="col-12d-flex flex-column justify-content-between">
                <h1 className="my-4 innovation-heading mt-2">
                  Scale Innovatively
                </h1>
                <h3 className="innovation-sub-heading mb-3">
                  Solve Problems & Build Solutions
                </h3>
              </div>
              <p className="innovation-description mb-4">
                At scale, for tomorrow. Established enterprises and emerging
                startups need a perfect balance of strategy, technology,
                analytics, and knowhow to solve everyday
                <br /> business challenges.
              </p>

              <div className="row mt-5 d-flex justify-content-between">
                <div className="col-12 col-sm-4   mb-3">
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
          </div>
        </section>
        <div className="bg-blind"></div>
        <section className="insights-section">
  <div className="container my-4">
    <div className="row">
      <h1 className="my-2 insights-heading mt-2">Insights</h1>
      <p className="insights-description my-2">
        Design and deliver new digital experiences, revenue streams and
        business models to <br /> meet rising customer expectations and
        accelerate your growth
      </p>
    </div>
    <div className="row my-5">
      {blogs.map((blog) => (
        <div key={blog.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="insight-card h-100">
            <Link href={blog.link} target="_blank" className="insight-card-link">
              <div className="card-body mb-3">
                <p className="insight-card-category">{blog.category}</p>
                <div className="insight-card-image-container">
                  <img
                    src={blog.img}
                    className="insight-card-img"
                    alt={blog.imgAlt}
                  />
                </div>
                <h5 className="insight-card-title pt-1">{blog.title}</h5>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        <section className="clients-section">
          <div className="container my-4 py-4">
            <div className="row">
              <div className="col-12 col-md-6">
                <h1 className="clients-heading">Our Clients</h1>
                <p className=" my-5 clients-subtitle">Pleasure to Work With</p>
              </div>
              <div className="col-12 col-md-6 mt-4">
                {OurClientlogos.map((row: ClientLogo[], idx: number) => (
                  <div key={idx} className="row mb-4 ">
                    {row.map((logo: ClientLogo, index: number) => (
                      <div key={index} className="col-md-4 client-logo-card">
                        <Link href={logo.url} passHref>
                          <ImageIcon
                            src={logo.src}
                            alt={
                              logo.src
                                ? `${
                                    logo.src.split("/").pop()?.split(".")[0]
                                  } logo`
                                : "Logo"
                            }
                            className="client-logo mb-4"
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
    </Layout>
  );
};

export default Index;
