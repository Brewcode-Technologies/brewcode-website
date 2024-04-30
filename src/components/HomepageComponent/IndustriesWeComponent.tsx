import React from "react";
import SliderMain from "../Slider";

const IndustriesWeComponent = () => {
  return (
    <section className="industries-we-serve-bg py-4">
      <div className="container my-4">
        <div className="col-12">
          <h1 className="section-heading industries-we-serve-heading">
            Industries We Serve
          </h1>
          <p className="our-solution-description industries-we-serve-description mb-5">
            Design and deliver new digital experiences, revenue streams and
            business models to
            <br /> meet rising customer expectations and accelerate your growth
          </p>
        </div>
        <div className="col-12 col-md-8">
          <SliderMain />
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeComponent;
