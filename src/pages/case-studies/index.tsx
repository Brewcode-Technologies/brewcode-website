import Layout from "@component/components/layouts/layout";
import React from "react";
import Image from "next/image";

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
}

const Index: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Soctor HealthCare Web Application",
      description:
        "Universiti Malaya aimed to enhance its educational offerings by incorporating advanced technologies to create more immersive and interactive learning environments.",
      imageUrl: "/images/svg/soctor.svg",
      buttonText: "#Helthcare",
      buttonUrl: "/case-study-1",
      read: "2 Min Read",
      colImageUrl: "/images/health-care-img.jpeg",
      colImageName: "health care",
    },
    {
      id: 2,
      title: "Digital Transformation of St. Jude India ChildCare Centres",
      description:
        "St. Jude India ChildCare Centres, a premier NGO based in Mumbai, embarked on a critical journey of digital transformation to amplify their online presence and enhance donation facilitation.",
      imageUrl: "/images/svg/soctor.svg",
      buttonText: "#IT service ",
      buttonUrl: "/case-study-2",
      read: "3 Min Read",
      colImageUrl: "/images/st-jude-india-childCare.jpeg",
      colImageName: "st jude india childCare image",
    },
    {
      id: 3,
      title: "Dhanika Solutions – Revolutionizing Career Opportunities  ",
      description:
        "Dhanika Solutions, a leading player in the IT services industry, aimed to elevate their digital presence and streamline the career opportunity process.",
      imageUrl: "/images/svg/soctor.svg",
      buttonText: "#IT service ",
      buttonUrl: "/case-study-3",
      read: "4 Min Read",
      colImageUrl: "/images/dhanika-solutions.jpeg",
      colImageName: "dhanika solutions image",
    },
  ];
  return (
    <Layout>
      <div className="case-studies-hero-section ">
        <div className="overlay-case-studies">
          <div className="container case-study-container">
            <div className="case-study-content">
              <h1 className="case-study-heading mb-5 text-center ">
                Case Study
              </h1>
              <p className="case-study-description">
                Case studies are a great way to exhibit real-case scenarios and
                assist your
                <br /> customers in accomplishing their goals. These are not
                just case studies but tips on
                <br /> how to use technology as a powerful asset in
                strengthening your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="case-studies-black-container container-fluid">
        <div className="container">
          {caseStudies.map((study) => (
            <>
              <div
                key={study.id}
                className="row"
                style={{ margin: "80px 0px" }}
              >
                <div className="case-studies-icon col-md-5 d-flex flex-column">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    className="case-study-image mb-3"
                    width={100}
                    height={100}
                  />
                  <h3 className="soctor-heading">{study.title}</h3>
                  <p className="soctor-description">{study.description}</p>
                  <button className="health-care-button">
                    {study.buttonText}
                  </button>
                  <button className="view-detais-sotry-button">
                    VIEW DETAILED STORY
                  </button>
                </div>
                <div className="col-md-7 d-flex">
                  <Image
                    src={study.colImageUrl}
                    alt={study.colImageName}
                    width={300}
                    height={300}
                    className="health-care-img"
                  />
                  {/* <div className="d-flex  min-read-main">
                    <span
                      className="min-2-read d-flex  align-selft-center doat"
                      style={{
                        marginTop: "14px",
                        fontWeight: "800",
                        marginLeft: "20px",
                      }}
                    >
                      .
                    </span>

                    <h2 className="min-2-read">{study.read}</h2>
                  </div> */}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
