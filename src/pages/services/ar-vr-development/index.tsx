import Layout from "@component/components/layouts/layout";
import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";

import BlackLayer from "@component/components/blackLayer";
import Head from "next/head";
import Image from "next/image";

interface ArVr {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageUrlName: string;
}

interface EngineCard {
  id: number;
  images: { src: string; alt: string }[];
  heading: string;
  description: string;
}

interface TimelineStep {
  id: number;
  title: string;
  description: string;
}

export interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
const Index: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVirtualEvents, setIsVirtualEvents] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const toggleVirtualEvents = () => {
    setIsVirtualEvents((prevIsVirtualEvents) => !prevIsVirtualEvents);
  };

  const arVrDevelopment: ArVr[] = [
    {
      id: 1,
      title: "Customized AR/VR Experiences",
      description:
        "Universiti Malaya aimed to enhance its educational offerings by incorporating advanced technologies to create more immersive and interactive learning environments.",
      imageUrl: "/images/ar-vr-experiences.jpeg",
      imageUrlName: "Customized AR/VR Experiences image",
    },
    {
      id: 2,
      title: "Enhanced Customer Engagement",
      description:
        "AR      and VR technologies provide an unparalleled level of interactivity,      allowing users to engage with your brand in a completely new way. This      leads to higher customer satisfaction, increased engagement, and stronger      brand loyalty.",
      imageUrl: "/images/enhanced-customer-engagement.jpeg",
      imageUrlName: "Enhanced Customer Engagement image",
    },
    {
      id: 3,
      title: "Versatile Applications",
      description:
        "Our AR/VR      solutions can be applied across various industries, including retail, real      estate, education, healthcare, and entertainment. From virtual tours to      interactive learning modules, the possibilities are endless.",
      imageUrl: "/images/versatile-applications-img.jpeg",
      imageUrlName: "Versatile Applications image",
    },
    {
      id: 4,
      title: "Advanced Technology Integration",
      description:
        " We utilize the latest AR/VR technologies and frameworks, such as Unity,      Unreal Engine, ARKit, and ARCore, to build high-quality, scalable      applications. This ensures that our solutions are not only innovative but      also robust and future-proof.",
      imageUrl: "/images/advanced-technology-integration-img.jpeg",
      imageUrlName: "Advanced Technology Integration image",
    },
    {
      id: 5,
      title: "End-to-End Development",
      description:
        "Our services cover the entire development lifecycle, from initial concept and design to development, testing, and deployment. We work closely with you throughout the process to ensure that the final product meets your expectations and delivers maximum value.",
      imageUrl: "/images/end-to-end-development-img.jpeg",
      imageUrlName: "End-to-End Development image",
    },
    {
      id: 6,
      title: "Training and Support",
      description:
        "Beyond      development, we provide comprehensive training and ongoing support to      ensure that your team can effectively utilize and maintain the AR/VR      solutions we deliver. We are committed to helping you achieve long-term      success with your investment.",
      imageUrl: "/images/training-and-support-img.jpeg",
      imageUrlName: "Training and Support image",
    },
  ];

  const engineCards: EngineCard[] = [
    {
      id: 1,
      images: [
        { src: "/images/svg/unreal.svg", alt: "Unreal Engine" },
        { src: "/images/svg/unity_symbol.svg", alt: "Unity Engine" },
      ],
      heading: "Unity and Unreal Engine",
      description:
        "Industry-leading game engines used to create high-fidelity, interactive experiences.",
    },
    {
      id: 2,
      images: [
        { src: "/images/svg/arkit.svg", alt: "arkit image" },
        { src: "/images/svg/ARcore.svg", alt: "arCore image" },
      ],
      heading: "ARKit and ARCore",
      description:
        "Advanced frameworks for developing AR applications on iOS and Android platforms.",
    },
    {
      id: 3,
      images: [
        { src: "/images/svg/spatial-audio.svg", alt: "spatial audio image" },
        { src: "/images/svg/earbuds.svg", alt: "earbuds image " },
      ],
      heading: "Spatial Audio",
      description:
        "Incorporating directional sound to provide a more immersive and realistic user experience.",
    },
    {
      id: 4,
      images: [
        { src: "/images/svg/maya.svg", alt: "maya image" },
        { src: "/images/svg/XMLID.svg", alt: "maya image" },
      ],
      heading: "Autodesk Maya or 3ds max",
      description:
        "High-quality 3D assets and animations to enhance realism and immersion.",
    },
    {
      id: 5,
      images: [
        { src: "/images/svg/microsoft-img.svg", alt: "microsoft image" },
        { src: "/images/svg/Headset_Oculus.svg", alt: "Headset Oculus image" },
      ],
      heading: "Wearable Devices",
      description:
        "Integration with VR headsets like Oculus Rift, HTC Vive, and AR glasses like Microsoft HoloLens",
    },
  ];

  const timelineSteps: TimelineStep[] = [
    {
      id: 1,
      title: "Discovery and Planning",
      description:
        "We begin by understanding your business goals, target audience, and specific requirements. This phase involves detailed consultations and brainstorming sessions to define the project scope and objectives",
    },
    {
      id: 2,
      title: "Conceptualization and Design",
      description:
        "Our creative team develops initial concepts and wireframes, focusing on user experience and interaction design. We present these ideas to you for feedback and refinement.",
    },
    {
      id: 3,
      title: "Development and Testing",
      description:
        "Utilizing our technical expertise, we build the AR/VR application, ensuring it meets the highest standards of quality and performance.",
    },
    {
      id: 4,
      title: "Deployment and Support",
      description:
        "Once      the application is ready, we assist with deployment across the desired      platforms and provide training to your team. We offer ongoing support to      ensure the solution continues to perform optimally.",
    },
  ];

  const cardData: CardData[] = [
    {
      id: 1,
      title: "VR Industrial Training",
      description: "Safety and Inspection Based Training",

      imageUrl: "/images/vr-industrial.jpeg",
    },
    {
      id: 2,
      title: "Real Estate Visualization",
      description: "Real Estate Visualization On VR Headset",
      imageUrl: "/images/real-estate-visualization.jpeg",
    },
    {
      id: 3,
      title: "BIM Visualization",
      description: "BIM Visualization For Industries",
      imageUrl: "/images/bim-visualization.jpeg",
    },
  ];

  return (
    <Layout>
       <Head>
     
        <title>AR/VR Development | Brewcode Technology Private Limited</title>
        <meta name="description" content="Immersive AR/VR Solutions to Elevate Your Business" />
      </Head>
      <div className="ar-vr-hero-section">
        <div className="overlay-ar-vr">
          <div className="container">
            <div className="row">
            <div className="hero-section-content">
              <h1 className="ar-vr-heading text-center mb-3">
                AR/VR Development
              </h1>
              <p className="ar-vr-description">
                Immersive AR/VR Solutions to Elevate Your Business
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    
      <BlackLayer />
      <div className="case-studies-black-container container-fluid">
        <div className="container">
          <p className="ar-vr-description-brewcode">
            At Brewcode Technologies, we specialize in developing cutting-edge
            Augmented Reality (AR) and Virtual Reality (VR) solutions that
            transform the way businesses interact with their customers. Our team
            of expert developers and designers harness the power of AR and VR to
            create immersive experiences that engage, educate, and entertain.
          </p>

          {arVrDevelopment.map((arvr, index) => (
            <div key={arvr.id} className="row my-5 arVr-flex-row">
              <div
                className={`col-md-4 ${index % 2 === 0 ? "" : "order-md-2"}`}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <img
                    src={arvr.imageUrl}
                    alt={arvr.imageUrlName}
                    className="ar-vr-image"
                  />
                </div>
              </div>
              <div
                className={`col-md-8 d-flex flex-column justify-content-center ${
                  index % 2 === 0 ? "" : "order-md-1"
                }`}
                style={{ paddingTop: "50px" }}
              >
                <h3 className="ar-vr-card-heading mb-4">{arvr.title}</h3>
                <p className="soctor-description">{arvr.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="get-in-touch-hero-image container-fluid">
        <div className="get-in-touch-overlay">
          <div className="get-in-touch-main">
            <h2 className="mb-4 mb-md-5 get-in-touch-heading">Get In Touch</h2>
            <p className="mb-4 mb-md-5 get-in-touch-description">
              Ready to transform your business with immersive AR/VR experiences?
              Contact Brewcode Technologies today to learn how our innovative
              AR/VR development services can elevate your brand and engage your
              customers like never before. Get in touch with our experts now and
              start your journey into the future of digital interaction.
            </p>

            <div>
              <button className="get-assistance connect-with-us-button">
                CONNECT WITH US
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-section-balck">
        <div className="container">
          <div className="col-12">
            <p className="harnessing-heading text-center mb-4">
              Harnessing the Power of Cutting-Edge Technologies
            </p>
            <p className="text-center harnessing-description">
              At Brewcode Technologies, we leverage the latest advancements in
              AR and VR technologies to deliver exceptional solutions. Our
              expertise includes
            </p>
          </div>

          <div className="my-5 unity-and-unreal-engine-card-container container-fluid">
            {engineCards.map((card) => (
              <div
                key={card.id}
                className="unity-and-unreal-engine-card col-md-4 d-flex flex-column justify-content-center"
              >
                <div className="d-flex justify-content-center mb-4">
                  {card.images.map((image, index) => (
                    <div key={index} className="unity-and-unreal-engine-images">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="unity-and-unreal-engine-img1"
                      />
                    </div>
                  ))}
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h3 className="unity-and-unreal-engine-heading mb-3">
                    {card.heading}
                  </h3>
                  <p className="unity-and-unreal-engine-description">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 text-center">
            <h3 className="our-process-heading mb-3">Our Process</h3>
            <p className="our-process-sub-heading">
              A Proven Approach to AR/VR Development
            </p>
          </div>

          <div className="my-5 col-12 time-line-containe">
            {timelineSteps.map((step) => (
              <div className="row mb-4" key={step.id}>
                <div
                  className="col-2 col-sm-1 text-center"
                  style={{ marginLeft: "-20px" }}
                >
                  <div className="timeline-circle">{step.id}</div>
                  {step.id < timelineSteps.length && (
                    <div className="timeline-connector"></div>
                  )}
                </div>
                <div className="col-10 col-sm-11 col-md-8 pb-3">
                  <h4 className="timeline-title mb-3">{step.title}</h4>
                  <p className="timeline-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 my-5">
            <h3 className="text-center our-process-heading">
              Projects We Like To Talk About
            </h3>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-between my-5 ">
              {cardData.map((data) => (
                <div
                  key={data.id}
                  className="projects-we-like-card col-md-3 mb-3"
                >
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    className="projects-we-like-card-img"
                  />
                  <div className="">
                    <h3 className="projects-we-like-card-heading pt-5 pb-5">
                      {data.title}
                    </h3>
                    <p className="projects-we-like-card-description">
                      {data.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12">
              <p className="projects-we-like-description py-5">
                Our unique approach to AR, VR involves creating experiences that
                are tailored to the needs of the user. We achieve this by
                combining creative design, innovative technology, and a deep
                understanding of user behavior to develop immersive experiences
                that are both engaging and impactful.
              </p>
            </div>
            <div className="col-12">
              <div className="d-flex">
                <IoMdArrowDropright
                  onClick={toggleVisibility}
                  style={{
                    cursor: "pointer",
                    padding: "0px",
                    position: "relative",
                    left: "-10",
                    top: "-3",
                  }}
                  fontSize={32}
                  className="IoMdArrowDropright"
                />
                <h3
                  onClick={toggleVisibility}
                  style={{ cursor: "pointer" }}
                  className="virtual-reality-heading"
                >
                  Virtual Reality
                </h3>
              </div>
              {isVisible && <p>Brewcode , an India-based VR and AR development service provider, is committed to providing the best experiences in cutting-edge AR and VR solutions, outstanding high-definition visuals, real-time adaptability, and highly immersive services for Virtual Reality applications .</p>}
              <hr />
            </div>
            <div className="col-12">
              <div className="d-flex">
                <IoMdArrowDropright
                  onClick={toggleVirtualEvents}
                  style={{
                    cursor: "pointer",
                    padding: "0px",
                    position: "relative",
                    left: "-10",
                    top: "-3",
                  }}
                  fontSize={32}
                  className="IoMdArrowDropright"
                />
                <h3
                  onClick={toggleVirtualEvents}
                  style={{ cursor: "pointer" }}
                  className="virtual-reality-heading"
                >
                  Virtual Events
                </h3>
              </div>
              {isVirtualEvents && (
                <p>At Brewcode we combine the finest of in-person event experiences with online event capabilities, We provide a virtual event solution to meet the demands of the modern hybrid event, such as 3D immersive platforms, live streaming, and audience involvement.</p>
              )}
              <hr />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
