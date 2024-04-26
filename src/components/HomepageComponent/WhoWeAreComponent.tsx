import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhoWeAreComponent = () => {
  return (
    <section className="container-fluid who-we-are-section pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="who-we-are-heading section-heading py-5">
              Who We Are
            </h2>
          </div>
          <div className="d-flex flex-column-reverse flex-md-row justify-content-between">
            <div className="col-12 col-md-6 mb-4">
              <p className="text-brewcode-only">
                We Create Unique Enhanced
                <br /> Experience In
                <br />
                <Link
                  href="https://www.brewcode.co/"
                  passHref
                  className="brewcode-link"
                >
                  Brewcode
                </Link>
              </p>
              <p className="who-we-are-text my-4 pt-4">
                Working with Brewcode evolves willing to offer the best
                immersion
                <br /> to clients and audiences but also investing in smart
                solutions to
                <br /> reduce costs when it comes to finding flexible solutions
                to refine and
                <br /> adapt the brand message in different contexts.
              </p>
              <div className="d-flex justify-content-start">
                <button type="button" className="explore-btn mb-4 btn btn-dark">
                  Explore
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center mb-md-0 mb-4">
              <Image
                src="/images/services-img.png"
                width={400}
                height={400}
                alt="services image"
                className="services-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreComponent;
