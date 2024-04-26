import React from "react";

const OurSolutionsComponent = () => {
  return (
    <section className="our-solution-bg py-5">
      <div className="container my-4">
        <div className="col-12">
          <h1 className="section-heading">Our Solutions</h1>
          <p className="our-solution-description mb-5">
            Design and deliver new digital experiences, revenue streams and
            business models to <br />
            meet rising customer expectations and accelerate your growth
          </p>
        </div>
        <div className="row d-flex justify-content-between">
          {[
            { title: "Cloud Security", icon: "bi-arrow-up-right" },
            { title: "Cyber Security", icon: "bi-arrow-up-right" },
            { title: "E-commerce Solution", icon: "bi-arrow-up-right" },
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
            { title: "Resource Staffing", icon: "bi-arrow-up-right" },
            {
              title: "Infrastructure Solution",
              icon: "bi-arrow-up-right fa-5x",
            },
          ].map((item, index) => (
            <div className="col-12 col-md-5" key={index}>
              <div className="d-flex flex-column mb-3">
                <div className="d-flex justify-content-between border-bottom pb-1">
                  <h1 className="our-solution-sub-text">{item.title}</h1>
                  <i className={`bi ${item.icon} mt-0`}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutionsComponent;
