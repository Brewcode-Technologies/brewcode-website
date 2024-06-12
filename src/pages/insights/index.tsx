import useNavigation, { routeMap } from "@component/components/customHooks/useNavigation";
import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/router";

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

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonUrl: string;
  read: string;
  colImageUrl: string;
  colImageName: string;
  size: "small" | "medium" | "large";
}

const Index: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = (buttonUrl: string) => {
    router.push(buttonUrl);
  };
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Exploring Alternative JavaScript Frameworks",
      img: "/images/performance-optimized-framework.webp",
      imgAlt: "Performance optimized JavaScript framework",
      description:
        "JavaScript frameworks have become an integral part of web development, empowering developers to build robust and efficient applications. Amongst these frameworks, React has emerged as the go-to choice for many developers due to its flexibility, performance, and the extensive community support it enjoys.",
      category: "Blog",
      date: "Apr 29, 2024",
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
      date: "Feb 16, 2024",
      link: "https://brewcode.medium.com/server-side-rendering-vs-client-side-rendering-unveiling-the-key-differences-d182d857cd77",
    },
    {
      id: 3,
      title:
        "Optimizing Technology Strategies: Brewcode’s Guide to Microservices and Monolithic Architectures",
      img: "/images/optimizing-technology.webp",
      imgAlt: "Optimizing technology strategies",
      date: "Dec 2, 2023",
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
      date: "Nov 9, 2023",
      link: "https://brewcode.medium.com/beyond-react-exploring-alternative-javascript-frameworks-4ff7d960dcc9",
    },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Soctor HealthCare Web Application",
      description:
        "Universiti Malaya aimed to enhance its educational offerings by incorporating advanced technologies to create more immersive and interactive learning environments.",
      imageUrl: "/images/svg/soctor.svg",
      buttonText: "#Healthcare",
      read: ". 2 Min Read",
      colImageUrl: "/images/health-care-img.jpeg",
      colImageName: "health care",
      size: "medium",
      buttonUrl: routeMap["soctor"],
    },
    {
      id: 2,
      title: "Digital Transformation of St. Jude India ChildCare Centres",
      description:
        "St. Jude India ChildCare Centres, a premier NGO based in Mumbai, embarked on a critical journey of digital transformation to amplify their online presence and enhance donation facilitation.",
      imageUrl: "/images/svg/st-jude.svg",
      buttonText: "#IT service ",
      buttonUrl: routeMap["st-jude"],
      read: ". 3 Min Read",
      colImageUrl: "/images/st-jude-india-childCare.jpeg",
      colImageName: "st jude india childCare image",
      size: "medium",
    },
    {
      id: 3,
      title: "Dhanika Solutions – Revolutionizing Career Opportunities  ",
      description:
        "Dhanika Solutions, a leading player in the IT services industry, aimed to elevate their digital presence and streamline the career opportunity process.",
      imageUrl: "/images/svg/dhanika.svg",
      buttonText: "#IT service ",
      buttonUrl: routeMap["dhanika-solutions"],
      read: ". 4 Min Read",
      colImageUrl: "/images/dhanika-solutions.jpeg",
      colImageName: "dhanika solutions image",
      size: "medium",
    },
    {
      id: 4,
      title:
        "Brewcode Meet – Setting New Standards in Enterprise Communication",
      description:
        "Brewcode Technologies took on the ambitious project of developing Brewcode Meet...",
      imageUrl: "/images/svg/Brewcode.svg",
      buttonText: "#ITService ",
      buttonUrl: routeMap["brewcode-meet"],
      read: ". 2 Min Read",
      colImageUrl: "/images/who-we-are-img.jpeg",
      colImageName: "who we are image",
      size: "large",
    },
    {
      id: 5,
      title: "Vodafone Italia Collaborate App",
      description:
        "The Vodafone Italia Collaborate App is a sophisticated business messaging application designed to streamline corporate communication.",
      imageUrl: "/images/svg/Vodafone.svg",
      buttonText: "#IT service ",
      buttonUrl: routeMap["vodafone-idea"],
      read: ". 3 Min Read",
      colImageUrl: "/images/vodafone-Italia-img.jpeg",
      colImageName: "vodafone italia collaborate app   image",
      size: "small",
    },
    {
      id: 6,
      title: "AT&T Collaborate App Development  ",
      description:
        "The AT&T Collaborate app is a comprehensive SIP and Team Collaboration client connected to the Internet and AT&T Cloud. It integrates seamlessly with AT&T's server platform, offering a wide range of calling and collaboration features.",
      imageUrl: "/images/svg/AT-T.svg",
      buttonText: "#IT service ",
      buttonUrl: routeMap["at-t"],
      read: ". 4 Min Read",
      colImageUrl: "/images/at-t-collaborate-app-img.jpeg",
      colImageName: "at&t collaborate app development   image",
      size: "medium",
    },
    {
      id: 7,
      title: "VR Application for Universiti Malaya by Brewcode Technologies",
      description:
        "Universiti Malaya aimed to enhance its educational offerings by incorporating advanced technologies to create more immersive and interactive learning environments.",
      imageUrl: "/images/svg/Malaya.svg",
      buttonText: "#Education",
      buttonUrl: routeMap["universiti-malaya"],
      read: ". 4 Min Read",
      colImageUrl: "/images/vr-application-for-universiti-img.jpeg",
      colImageName:
        "ar application for uiversiti malaya by brewcode technologies image",
      size: "medium",
    },
  ];


  return (
    <Layout>
      <Head>
        <title>Insights | Brewcode Technology Private Limited</title>
        <meta name="description" content="Description of your insights page" />
      </Head>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
        }}
      >
     <div className="cloud-image">
          <img
            alt="Comprehensive application services icon"
            src="/images/insight-hero-image.jpg"
            className="mb-3 hero-cloud"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="hero-section-content">
           
            <h1 className="services-header">Insights</h1>
              <p className="insights-description text-center">
                We Believe The Exchange Of <br />
                Knowledge Fuels Collective Growth
              </p>
            </div>
          </div>
        </div>
      </div>
     
      <div className="dark-container py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="chart-of-heading mb-2">Insights By Interests</h2>
            </div>
          </div>
          <div>
            <hr className="insights-line" />
            {blogs.map((blog, index) => (
              <a
                key={blog.id}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link"
              >
                <div>
                  <div className="row">
                    <div className="col-md-5">
                      <img
                        src={blog.img}
                        alt={blog.imgAlt}
                        className="insigts-image"
                      />
                    </div>

                    <div className="col-md-7 my-auto">
                      <p className="mb-4">{blog.date}</p>
                      <h4 className="mb-5">{blog.title}</h4>
                      <div className="d-flex flex-column">
                        <span>{blog.category.toUpperCase()}</span>
                        <span>BY AUTHOR BREWCODE</span>
                      </div>
                    </div>
                  </div>
                  <hr className="insights-line" />
                </div>
              </a>
            ))}
          </div>

          <div className="row my-5">
            <div className="col-12">
              <h3 className="our-section-heading mb-3">Success Stories</h3>
            </div>

            {caseStudies.map((study) => (
              <div key={study.id} className="col-12 col-md-6 col-lg-3 mb-4 ">
                <div className="insight-success-stories-card  position-relative">
                  <div className="card-img-top insight-top-image">
                    <img
                      src={study.colImageUrl}
                      alt={study.title}
                      style={{ width: "100%" }}
                      className="insight-top-image"
                    />
                  </div>

                  <div className="card-body insight-card-body">
                    <h6 className="insight-card-heading">{study.title}</h6>
                    <p className="insight-card-text mb-4">{study.description}</p>
                  </div>
                  <FaArrowRightLong
                fontSize={18}
                className="fa-arrow-long"
              

                // onClick={() => router.push(study.buttonUrl)}
                // onClick={() => handleButtonClick(study.buttonUrl)}
                onClick={() => handleButtonClick(study.buttonUrl)}


              />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
