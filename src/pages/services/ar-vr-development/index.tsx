import Layout from "@component/components/layouts/layout";
import React from "react";
import Image from "next/image";
import BlackLayer from "@component/components/blackLayer";

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

const Index: React.FC = () => {
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
        { src: "/images/svg/unreal.svg", alt: "Unreal Engine" },
        { src: "/images/svg/unity_symbol.svg", alt: "Unity Engine" },
      ],
      heading: "Unity and Unreal Engine",
      description:
        "Industry-leading game engines used to create high-fidelity, interactive experiences.",
    },
    {
      id: 3,
      images: [
        { src: "/images/svg/unreal.svg", alt: "Unreal Engine" },
        { src: "/images/svg/unity_symbol.svg", alt: "Unity Engine" },
      ],
      heading: "Unity and Unreal Engine",
      description:
        "Industry-leading game engines used to create high-fidelity, interactive experiences.",
    },
    {
      id: 5,
      images: [
        { src: "/images/svg/unreal.svg", alt: "Unreal Engine" },
        { src: "/images/svg/unity_symbol.svg", alt: "Unity Engine" },
      ],
      heading: "Unity and Unreal Engine",
      description:
        "Industry-leading game engines used to create high-fidelity, interactive experiences.",
    },
    {
      id: 5,
      images: [
        { src: "/images/svg/unreal.svg", alt: "Unreal Engine" },
        { src: "/images/svg/unity_symbol.svg", alt: "Unity Engine" },
      ],
      heading: "Unity and Unreal Engine",
      description:
        "Industry-leading game engines used to create high-fidelity, interactive experiences.",
    },
  ];

  return (
    <Layout>
      <div className="ar-vr-hero-section">
        <div className="overlay-ar-vr">
          <div className="container case-study-container">
            <div className="case-study-content">
              <h1 className="ar-vr-heading mb-5 text-center">
                AR/VR Development
              </h1>
              <p className="ar-vr-description">
                Immersive AR/VR Solutions to Elevate Your Business
              </p>
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
          <p className="harnessing-heading text-center mb-4">
            Harnessing the Power of Cutting-Edge Technologies
          </p>
          <p className="text-center harnessing-description">
            At Brewcode Technologies, we leverage the latest advancements in AR
            and VR technologies to deliver exceptional solutions. Our expertise
            includes
          </p>

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
        </div>
      </div>
    </Layout>
  );
};

export default Index;
