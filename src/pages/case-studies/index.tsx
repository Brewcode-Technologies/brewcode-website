import Layout from "@component/components/layouts/layout";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import CaseStudyCard from "@component/components/CaseStudyCard";
import { routeMap } from "@component/components/customHooks/useNavigation";

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

  const getClassName = (size: "small" | "medium" | "large"): string => {
    return size === "small"
      ? "small-logo"
      : size === "medium"
      ? "medium-logo"
      : "large-logo";
  };

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
      title: "Dhanika Solutions – Revolutionizing Career Opportunities",
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
      colImageName: "vodafone italia collaborate app image",
      size: "small",
    },
    {
      id: 6,
      title: "AT&T Collaborate App Development",
      description:
        "The AT&T Collaborate app is a comprehensive SIP and Team Collaboration client connected to the Internet and AT&T Cloud. It integrates seamlessly with AT&T's server platform, offering a wide range of calling and collaboration features.",
      imageUrl: "/images/svg/AT-T.svg",
      buttonText: "#IT service ",
      buttonUrl: routeMap["at-t"],
      read: ". 4 Min Read",
      colImageUrl: "/images/at-t-collaborate-app-img.jpeg",
      colImageName: "at&t collaborate app development image",
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
        <title>Case Studies | Brewcode Technology Private Limited</title>
        <meta
          name="description"
          content="Description of your Case Studies page"
        />
      </Head>

      <div className="case-studies-hero-section">
        <div className="overlay-ar-vr">
          <div className="container">
            <div className="row">
              <div className="hero-section-content">
                <div className="case-study-content">
                  <h1 className="case-study-heading mb-5 text-center">
                    Case Studies
                  </h1>
                  <p className="case-study-description">
                    Case studies are a great way to exhibit real-case scenarios
                    and assist your
                    <br /> customers in accomplishing their goals. These are not
                    just case studies but tips on
                    <br /> how to use technology as a powerful asset in
                    strengthening your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="case-studies-black-container container-fluid">
        <div className="container">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              getClassName={getClassName}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
