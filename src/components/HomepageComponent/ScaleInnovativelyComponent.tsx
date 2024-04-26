import React from "react";

const ScaleInnovativelyComponent = () => {
  return (
    <section className="scale-innovatively-bg py-5">
      <div className="container my-4">
        <div className="col-12">
          <h1 className="section-heading industries-we-serve-heading">
            Scale Innovatively
          </h1>
          <h3 className="Scale-Innovatively-sub-heading my-2">
            Solve Problems & Build Solutions
          </h3>
          <p className="our-solution-description industries-we-serve-description mb-5">
            At scale, for tomorrow. Established enterprises and emerging
            startups need a perfect balance of strategy, technology, analytics,
            and knowhow to solve everyday
            <br /> business challenges.
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-sm-4">
            <div className="num-flex d-flex">
              <span className="num">1</span>
              <h3 className="emerging-heading">Emerging</h3>
            </div>
            <p className="emerging-text mt-4">
              Evaluate business needs and build strategic
              <br /> technical roadmaps to make your product
              <br /> vision a reality
            </p>
          </div>
          <div className="col-12 col-sm-4 emerging-left-right-border-line">
            <div className="num-flex d-flex">
              <span className="num">2</span>
              <h3 className="emerging-heading">Growing</h3>
            </div>
            <p className="emerging-text mt-4">
              Fuel your growth with process automation
              <br /> and custom applications and build failsafe
              <br /> systems for the future.
            </p>
          </div>
          <div className="col-12 col-sm-4">
            <div className="num-flex d-flex">
              <span className="num">3</span>
              <h3 className="emerging-heading">Enterprise</h3>
            </div>
            <p className="emerging-text mt-4">
              Integrate your systems for enterprise agility
              <br /> and build your Agile/DevOps capability for
              <br /> accelerated growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleInnovativelyComponent;
