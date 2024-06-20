import React, { useEffect, useState } from "react";
import Link from "next/link";
import ImageIcon from "@component/components/ImageIcon";
import Layout from "@component/components/layouts/layout";
import useNavigation, {
  routeMap,
} from "@component/components/customHooks/useNavigation";
import Head from "next/head";
import { GetStaticProps, Route } from "next";
import BlogCard from "@component/components/BlogCard";
import axios from 'axios';
import dynamic from "next/dynamic";
const SwiperComponent = dynamic(() => import('@component/components/Carousel'), { ssr: false });

interface Blog {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
  img: string;
  imgAlt: string;
  date: string;
}

interface ClientLogo {
  src: string;
  url: string;
}

interface SolutionItem {
  title: string;
  icon: string;
  href:  string;
}



const Index: React.FC = () => {

  const [blog, setBlog] = useState<Blog[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.rss2json.com/v1/api.json', {
          params: {
            rss_url: 'https://medium.com/feed/@brewcode',
            api_key: 'zzwyppw74s0zayqrgvogmb6qm3fqwu7kuofye0gw',
            count: 5
          }
        });

        console.log('API Response:', response.data);

        if (response.data.status !== 'ok') {
          throw new Error(response.data.message);
        }

        const blogItems = response.data.items.map((item: any, index: number) => {
          const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
          const imgSrc = imgMatch ? imgMatch[1] : '';

          return {
            id: index,
            title: item.title,
            category: "Blogs",
            description: item.description,
            link: item.link,
            img: imgSrc,
            date: item.pubDate,
            imgAlt: item.title
          };
        });

        setBlog(blogItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);





  const { navigate } = useNavigation();
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

 

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
      <div>
    </div>
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
              <strong className="highlight"> quickly </strong> than ever before.
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
              <Link
                href="https://www.linkedin.com/company/brewcode/"
                passHref
                target="_blank"
              >
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
    <div className="col-12 col-md-6 mb-4 mb-md-0">
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
          <button type="button" className="about-explore-btn btn btn-primary">
            Explore
          </button>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
  <div className="responsive-image-wrapper">
    <img
      src="/images/services-img.png"
      alt="about image"
      className="about-image img-fluid"
      loading="lazy"
    />
  </div>
</div>

  </div>
</div>

</section>


<section className="solutions-section">
  <div className="container my-5">
    <div className="row">
      <div className="col-12">
        <h1 className="solutions-heading mb-5">Our Solutions</h1>
        <p className="solutions-description">
          Design and deliver new digital experiences, revenue streams, and
          business models to <br />
          meet rising customer expectations and accelerate your growth
        </p>
      </div>
      <div className="row d-flex justify-content-between solutions-list mt-2" >
        {solutions.map((item, index) => (
          <div
            className="col-12 col-md-6 col-lg-4 mt-3 solutions-item-section"
            key={index} 
          >
            <div className="d-flex flex-column mb-3 solutions-item">
              {item.href !== undefined && item.href !== null ? (
                item.href in routeMap ? (
                  <Link
                    href={routeMap[item.href as keyof typeof routeMap]}
                    passHref
                    className="our-solution-link"
                  >
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
              <h1 className="industries-heading">
                Industries We Serve
              </h1>
              <p className="industries-description pt-2">
                Design and deliver new digital experiences, revenue streams and
                business models to
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
       
          <div className="row">
      {blog.map((blog) => (
        <BlogCard key={blog.id} blog={blog} layout="home-page" />
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
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await axios.get('https://api.rss2json.com/v1/api.json', {
      params: {
        rss_url: 'https://medium.com/feed/@brewcode',
        api_key: 'zzwyppw74s0zayqrgvogmb6qm3fqwu7kuofye0gw',
        count: 5
      }
    });

    if (response.data.status !== 'ok') {
      throw new Error(response.data.message);
    }

    const blogItems = response.data.items.map((item: any, index: number) => {
      const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
      const imgSrc = imgMatch ? imgMatch[1] : '';

      return {
        id: index,
        title: item.title,
        category: "Blogs",
        description: item.description,
        link: item.link,
        img: imgSrc,
        date: item.pubDate,
        imgAlt: item.title
      };
    });

    return {
      props: {
        blog: blogItems
      },
      revalidate: 60, 
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        blog: []
      }
    };
  }
};
export default Index;
