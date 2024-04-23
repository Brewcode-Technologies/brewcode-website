import SliderMain from "@component/components/Slider ";
import {
  decrement,
  increment,
  reset,
  selectCount,
} from "@component/reducers/counterSlice ";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home: React.FC = () => {
  // const dispatch = useDispatch();
  // const count: number = useSelector(selectCount);

  // const handleIncrement = () => {
  //   dispatch(increment());
  // };

  // const handleDecrement = () => {
  //   if (count > 0) {
  //     dispatch(decrement());
  //   }
  // };

  // const handleReset = () => {
  //   dispatch(reset());
  // };

  return (
    // <div
    //   style={{
    //     textAlign: "center",
    //     marginTop: "50px",
    //     fontFamily: "Arial, sans-serif",
    //   }}
    // >
    //   <h1>Counter App</h1>
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       flexDirection: "column",
    //     }}
    //   >
    //     <p style={{ fontSize: "24px", color: count === 0 ? "black" : "green" }}>
    //       Count: {count}
    //     </p>
    //     <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
    //       <button
    //         onClick={handleIncrement}
    //         style={{
    //           backgroundColor: "green",
    //           color: "white",
    //           padding: "10px",
    //           fontSize: "16px",
    //         }}
    //       >
    //         Increment
    //       </button>
    //       <button
    //         onClick={handleDecrement}
    //         style={{
    //           backgroundColor: "red",
    //           color: "white",
    //           padding: "10px",
    //           fontSize: "16px",
    //         }}
    //       >
    //         Decrement
    //       </button>
    //       <button
    //         onClick={handleReset}
    //         style={{
    //           backgroundColor: "black",
    //           color: "white",
    //           padding: "10px",
    //           fontSize: "16px",
    //         }}
    //       >
    //         Reset
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="hero-image">
        <div className="container">
          <div className="row hero-section-column">
            <div className="col-12 hero-heading">
              <h1 className="hero-section-heading mt-5">
                <span className="hero-stroke">We're</span> Here To Solve Your
                <br />
                Critical Challenges
              </h1>
            </div>
            <p className="description text-center">
              In today’s{" "}
              <strong className="description-strong">fast-paced</strong>{" "}
              climate, companies are required to
              <br />
              <strong className="description-strong"> adapt </strong> more
              <strong className="description-strong"> quickly </strong> than
              ever before.
            </p>
          </div>

          <div className="row">
            <div className="col-12 social-media-icons-main d-flex flex-column justify-content-between">
              <Image
                alt="instagram-icon"
                src="/images/icons/instagram.png"
                width={30}
                height={30}
                className="mb-2 instagram-icon"
              />
              <Image
                alt="Linkedin-icon"
                src="/images/icons/Linkedin.png"
                width={30}
                height={30}
                className="mb-2 instagram-icon"
              />
              <Image
                alt="facebook-icon"
                src="/images/icons/facebook.png"
                width={30}
                height={30}
                className="mb-1 instagram-icon"
              />
            </div>
          </div>
          <div className="row col-12 mb-5">
            <div className="down-arrow-icon-main d-flex justify-content-center mb-4">
              <i className="bi bi-arrow-down-short"></i>
            </div>
          </div>
        </div>
      </div>
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
                    className="brewcode-link"
                    href={"https://www.brewcode.co/"}
                  >
                    Brewcode
                  </Link>
                </p>
                <p className="who-we-are-text my-4 pt-4">
                  Working with Brewcode evolves willing to offer the best
                  immersion
                  <br /> to clients and audiences but also investing in smart
                  solutions to
                  <br /> reduce costs when it comes to finding flexible
                  solutions to refine and
                  <br /> adapt the brand message in different contexts.
                </p>
                <div className="d-flex justify-content-start">
                  <button
                    type="button"
                    className="explore-btn mb-4 btn btn-dark"
                  >
                    Explore
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-6 text-center  mb-md-0 mb-4">
                <Image
                  src="/images/services-img.png"
                  width={400}
                  height={400}
                  className="services-img"
                  alt="services image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Solutions --- section */}

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
            <div className="col-12 col-md-5">
              <div className="d-flex flex-column mb-3">
                <div className="d-flex justify-content-between border-bottom pb-1">
                  <h1 className="our-solution-sub-text">Cloud Security</h1>
                  <i className="bi bi-arrow-up-right mt-0 "></i>
                </div>
                {/* <hr className="our-solution-hr" /> */}
              </div>
              <div className="d-flex flex-column mb-3">
                <div className="d-flex justify-content-between border-bottom pb-1">
                  <h1 className="our-solution-sub-text">Cyber Security</h1>
                  <i className="bi bi-arrow-up-right mt-0"></i>
                </div>
                {/* <hr className="our-solution-hr" /> */}
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between border-bottom pb-1">
                  <h1 className="our-solution-sub-text">E-commerce Solution</h1>
                  <i className="bi bi-arrow-up-right mt-0"></i>
                </div>
                {/* <hr className="our-solution-hr" /> */}
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between mt-3">
                  <h1 className="our-solution-sub-text">
                    Software Development
                  </h1>
                  <i className="bi bi-arrow-up-right  fa-5x mt-0"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="d-flex flex-column mb-3">
                <div className="d-flex justify-content-between border-bottom pb-1">
                  <h1 className="our-solution-sub-text">
                    Robotic Process Automation (RPA)y
                  </h1>
                  <i className="bi bi-arrow-up-right mt-0 "></i>
                </div>
                {/* <hr className="our-solution-hr" /> */}
              </div>
              <div className="d-flex flex-column mb-3">
                <div className="d-flex justify-content-between border-bottom pb-1">
                  <h1 className="our-solution-sub-text">
                    Software Audits/Testing as-a-service
                  </h1>
                  <i className="bi bi-arrow-up-right mt-0"></i>
                </div>
                {/* <hr className="our-solution-hr" /> */}
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between border-bottom pb-1">
                  <h1 className="our-solution-sub-text">Resource Staffing</h1>
                  <i className="bi bi-arrow-up-right mt-0"></i>
                </div>
                {/* <hr className="our-solution-hr" /> */}
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between mt-3">
                  <h1 className="our-solution-sub-text">
                    Infrastructure Solution
                  </h1>
                  <i className="bi bi-arrow-up-right  fa-5x mt-0"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Industries We Serve */}
      <section className="industries-we-serve-bg py-4">
        <div className="container my-4">
          <div className="col-12">
            <h1 className="section-heading industries-we-serve-heading">
              Industries We Serve
            </h1>

            <p className="our-solution-description industries-we-serve-description mb-5">
              Design and deliver new digital experiences, revenue streams and
              business models to
              <br /> meet rising customer expectations and accelerate your
              growth
            </p>
          </div>
          <div className="my-4">
            <SliderMain />
          </div>
        </div>
      </section>
      {/* Scale Innovatively */}
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
              startups need a perfect balance of strategy, technology,
              analytics, and knowhow to solve everyday
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
            <div className="col-12 col-sm-4 ">
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
      {/* Insights styles ------------------start */}
      <section className="insights-bg py-5">
        <div className="container">
          <div className="row">
            <h1 className="section-heading industries-we-serve-heading">
              Insights
            </h1>
            <p className="insights-description mb-5 mt-4">
              Design and deliver new digital experiences, revenue streams and
              business models to <br /> meet rising customer expectations and
              accelerate your growth
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="blog-card">
                <p className="blog-sub-heading">Blog</p>
                <p className="blog-text pt-2">
                  The cube interview series: Driving enhanced security and
                  higher value in Financial services generative Ai
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="blog-card">
                <p className="blog-sub-heading">Blog</p>
                <p className="blog-text pt-2">
                  The cube interview series: Driving enhanced security and
                  higher value in Financial services generative Ai
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="blog-card">
                <p className="blog-sub-heading">Blog</p>
                <p className="blog-text pt-2">
                  The cube interview series: Driving enhanced security and
                  higher value in Financial services generative Ai
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="blog-card">
                <p className="blog-sub-heading">Blog</p>
                <p className="blog-text pt-2">
                  The cube interview series: Driving enhanced security and
                  higher value in Financial services generative Ai
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Clients styles------------------start */}
      <section className="our-clients-bg">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="section-heading industries-we-serve-heading">
                Our Clients
              </h1>
              <p className="pleasure-to-work-with-text mb-5 mt-4">
                Pleasure to Work With
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 col-lg-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
