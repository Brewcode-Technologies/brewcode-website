import React from "react";
import ImageIcon from "../ImageIcon";
import Link from "next/link";

const OurClients = () => {
  const logos = [
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
    <section className="our-clients-bg">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <h1 className="section-heading industries-we-serve-heading">
              Our Clients
            </h1>
            <p className="pleasure-to-work-with-text mb-5 mt-5">
              Pleasure to Work With
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            {logos.map((row, idx) => (
              <div key={idx} className="row mb-4 company-logo-container-main">
                {row.map((logo, index) => (
                  <div key={index} className="col-lg-4 company-logo-container">
                    <Link href={logo.url} passHref>
                      <ImageIcon
                        src={logo.src}
                        alt={`${logo.src.split("/").pop().split(".")[0]} logo`}
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
  );
};

export default OurClients;
