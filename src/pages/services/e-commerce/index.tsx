import BlackLayer from "@component/components/blackLayer";
import Layout from "@component/components/layouts/layout";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { MdArrowRight } from "react-icons/md";


type Technology =
  | "AR/VR"
  | "Machine Learning"
  | "Computer Learning"
  | "Predictive Analytics";

  interface Description {
    title: string;
    details: string[];
  }
  
export interface EcommerceService {
  title: string;
}

const Index: React.FC = () => {
  const ecommerceItems: EcommerceService[] = [
    { title: "Custom Ecommerce Development" },
    { title: "Ecommerce Platform Integration" },
    { title: "Mobile E-Commerce Solution" },
    { title: "E-Commerce Analytics" },
    { title: "E-Commerce Security" },
    { title: "E-Commerce SEO & Digital Marketing" },
  ];

  const descriptions: Record<Technology, Description> = {
    'AR/VR': {
      title: 'We can incorporate AR and VR technologies into your ecommerce store to create immersive consumer experiences and help customers make purchasing decisions more confidently.',
      details: [
        'Virtual Showroom',
        'Virtual Fitting Room',
        'AR product catalogs and product reviews',
        '3D product demos',
        'Product samplers',
        'Product descriptions and support captions',
      ],
    },
    'Machine Learning': {
      title: 'Machine Learning description...',
      details: [],
    },
    'Computer Learning': {
      title: 'Computer Learning description...',
      details: [],
    },
    'Predictive Analytics': {
      title: 'Predictive Analytics description...',
      details: [],
    },
  };

  const [selectedTech, setSelectedTech] = useState<Technology>('AR/VR');

  const handleButtonClick = (tech: Technology) => {
    setSelectedTech(tech);
  };

  const chunkArray = (arr: string[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const detailsChunks = chunkArray(descriptions[selectedTech].details, 3);
  return (
    <Layout>
      <div className="e-commerce-hero-section">
        <div className="overlay-ar-vr">
          <div className="container">
            <h1 className="e-commerce-short-heading mb-2">Looking For</h1>
            <h1 className="e-commerce-heading mb-2">EXPERIENCED</h1>
            <h1 className="e-commerce-short-heading">Team</h1>
          </div>
        </div>
      </div>

      <BlackLayer />
      <div className="case-studies-black-container container-fluid">
        <div className="container">
          <p className="e-commerce-description mb-5">
            Elevate your online business with our tailored Ecommerce solutions that seamlessly integrate technology, user experience, and business 
            strategy. Our team of experts leverages cutting-edge technologies to deliver robust and scalable Ecommerce platforms. Here's what our 
            Ecommerce services encompass
          </p>
          <div className="row">
            <div className="col-md-5">
              <div className="d-flex flex-column">
                <h2 className="our-e-commerce-services col-12 py-3">
                  Our E-Commerce Services
                </h2>

                <div className="img-container">
                  <img
                    src="/images/e-commerce.jpg"
                    alt="E-Commerce Services"
                    className=" e-commerce-img"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-7  accordion-container">
              {ecommerceItems.map((item, index) => (
                <div className="d-flex flex-column mt-5" key={index}>
                  <div className="e-commerce-accordion d-flex justify-content-between">
                    <p className="accordion-title">{item.title}</p>
                    <span className="icon-border">
                      <IoMdArrowDropdown fontSize={40} />
                    </span>
                  </div>
                  <hr className="accordion-divider" />
                </div>
              ))}
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-5">
              <h2 className="advanced-technologies-heading">
                Advanced Technologies in <br />
                E-Commerce
              </h2>
            </div>

            <div className="col-md-7">
              <p className="e-commerce-description">
                We apply advanced technologies to help online businesses deliver
                superb customer experiences and get a competitive edge.
              </p>
            </div>
          </div>
          <div className="row">
  <div className="col-lg-5 col-md-6"> 
    {([
      "AR/VR",
      "Machine Learning",
      "Computer Learning",
      "Predictive Analytics",
    ] as Technology[]).map((tech) => (
      <div
        key={tech}
        className={`${
          selectedTech === tech ? "bg-white text-black" : "details-black text-white"
        } ${selectedTech !== tech ? "" : "right-arrow"} p-2 mb-2`}
        onClick={() => handleButtonClick(tech)}
      >
        {tech}
      </div>
    ))}
  </div>

  <div className="col-lg-7 col-md-6"> 
    {selectedTech && (
      <div className="text-white details-container">
        <h5 className="detail-heading mb-2">{selectedTech}</h5>
        <p className="detail-description">{descriptions[selectedTech].title}</p>
        {detailsChunks.length > 0 && (
          <div className="row">
            {detailsChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="col-12 col-md-6">
                <ul style={{ paddingLeft: '11px' }}>
                  {chunk.map((detail, index) => (
                    <li key={index} className="py-2 detail-item">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    )}
  </div>
</div>

        </div>
      </div>
    </Layout>
  );
};

export default Index;
